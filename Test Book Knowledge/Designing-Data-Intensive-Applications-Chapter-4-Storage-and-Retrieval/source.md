---
title: "Chapter 4 — Storage and Retrieval"
book: "Designing Data-Intensive Applications, 2nd Edition"
original_file: "Book - Designing Data-Intensive Applications/4. Storage-and-Retrieval.pdf"
status: source reference — do not edit
style: "Written in controlled technical English (ASD-STE100 principles): short sentences, one idea per sentence, active voice, plain approved-style vocabulary, no filler."
---

# Note on this file

This is a condensed version of Chapter 4 (36 pages). It keeps the
definitions, key claims, and comparisons you need for testing. It
removes anecdotes, most citations, and filler wording. Each idea is
one short sentence. The original PDF stays the source of truth in the
project folder.

---

## Introduction

- A database does two basic things. It stores data you give it. It
  returns that data when you ask for it later.
- Chapter 3 covered data models and query languages: the format you
  use to give data to the database, and the interface you use to ask
  for it back.
- This chapter covers the same topic from the database's side: how
  the database stores your data internally, and how it finds the data
  again.
- You should understand storage internals for one main reason: you
  must pick the right storage engine for your workload, and you must
  tune it. You do not need to build your own storage engine.
- OLTP storage engines and analytics (OLAP) storage engines are
  optimized differently. This chapter covers OLTP engines first, then
  analytics engines, then multidimensional and full-text indexes.
- Two families of OLTP storage engines exist: log-structured engines
  (write immutable files) and update-in-place engines such as B-trees
  (overwrite data on disk).

## Storage and Indexing for OLTP

- A minimal key-value store can be built from two shell functions:
  `db_set` appends a `key,value` line to a file. `db_get` greps the
  file for the key and returns the last matching line.
- `db_set` performs well, because appending to a file is efficient.
  Many real databases use an append-only file internally. This is
  called a **log**. (In this book, "log" means an append-only
  sequence of records on disk, not an application log.)
- `db_get` performs badly on a large file. It must scan the whole
  file for every lookup. This costs O(n): if the record count
  doubles, lookup time doubles.
- An **index** is an extra structure, derived from the primary data,
  that makes lookups faster. Adding or removing an index does not
  change the data. It changes only query performance.
- Indexes speed up reads but slow down writes, because every index
  must also be updated on every write. Appending to a file with no
  index is the fastest possible write. Databases therefore do not
  index everything by default; the application developer chooses
  which indexes to create, based on expected query patterns.

### Log-Structured Storage

- **Hash index**: keep an in-memory hash map from each key to the
  byte offset of that key's most recent value in the log file. A
  lookup uses the hash map to find the offset, then seeks and reads.
  If that part of the file is in the filesystem cache, no disk I/O is
  needed.
- Problems with a plain hash index: (1) old overwritten entries are
  never freed, so disk usage grows forever; (2) the hash map lives
  only in memory, so it must be rebuilt (by scanning the whole log)
  on every restart; (3) the whole hash table must fit in memory,
  since on-disk hash maps perform poorly (heavy random I/O, costly to
  grow, collision handling); (4) range queries are inefficient, since
  every key in the range must be looked up individually.

#### The SSTable file format

- An **SSTable** (Sorted String Table) stores key-value pairs sorted
  by key, with each key appearing once. Because it is sorted, you no
  longer need every key in memory.
- SSTables use a **sparse index**: only some keys are kept in the
  index (e.g. the first key of each block of a few KB). To find a
  key, seek to the nearest indexed key below it and scan forward
  within that block.
- Each block can be compressed. Compression saves disk space and I/O
  bandwidth, at the cost of extra CPU time.

#### Constructing and merging SSTables (LSM-trees)

- Writing directly to an SSTable is hard, because inserting a new key
  in sorted position would require rewriting the file. The solution
  is a log-structured approach, a hybrid of an append-only log and a
  sorted file:
  1. On write, insert into an in-memory sorted structure (a
     red-black tree, skip list, or trie). This is called the
     **memtable**.
  2. When the memtable exceeds a size threshold, write it to disk as
     a new SSTable **segment**, sorted by key. Writes continue into a
     fresh memtable while this happens.
  3. On read, check the memtable first, then each on-disk segment
     from newest to oldest, until the key is found or all segments
     are exhausted.
  4. A background process periodically merges and compacts segment
     files, discarding overwritten or deleted values. This is called
     **compaction**.
- Merging segments works like mergesort: read all input files in
  parallel, always copy the lowest current key to the output, and
  keep only the most recent value when a key appears in more than one
  file.
- A separate on-disk **write-ahead log** records every write
  immediately, so the memtable can be rebuilt after a crash. This log
  is not sorted. Each part of it is discarded once its data is safely
  written to an SSTable.
- A **tombstone** is a special deletion record appended for a
  deleted key. When segments merge, a tombstone causes older values
  for that key to be dropped. The tombstone itself is dropped once it
  reaches the oldest segment.
- This algorithm, called the **Log-Structured Merge-tree (LSM-tree)**
  (published 1996), underlies RocksDB, Cassandra, ScyllaDB, and
  HBase. These were inspired by Google's Bigtable paper, which coined
  the terms SSTable and memtable. Storage engines built on merging
  and compacting sorted files are called **LSM storage engines**.
- In an LSM engine, each segment file is written once, in one pass,
  and is then immutable. Merging can run in a background thread while
  reads continue to use the old segments; once a merge finishes,
  reads switch to the new merged segment and the old files are
  deleted.
- Segment files do not have to sit on local disk. SlateDB and Delta
  Lake write them to object storage instead.
- Immutable segments simplify crash recovery: an unfinished SSTable
  can simply be deleted and rewritten. Checksums in the log detect
  and discard corrupted or incomplete log entries from a crash.

#### Bloom filters

- A **Bloom filter** is a small, in-segment structure that gives a
  fast, approximate answer to "does this key appear in this
  SSTable?" It speeds up reads for keys that do not exist, or that
  were last written long ago, by letting the engine skip segments
  that clearly do not contain the key.
- Mechanism: for each key, a hash function sets several bits in a bit
  array to 1. To check a key, compute its hash and check those same
  bit positions.
  - If any checked bit is 0, the key is **definitely not** in the
    SSTable.
  - If all checked bits are 1, the key is **probably** in the
    SSTable — this can be a **false positive** (bits set by other
    keys, by coincidence).
- Rule of thumb: about 10 bits of Bloom filter space per key gives a
  1% false-positive rate; each extra 5 bits per key reduces the
  false-positive rate by 10x.
- False positives are harmless in LSM engines: a false positive just
  costs one wasted lookup in the sparse index before moving to the
  next segment. A true "bit is 0" result safely skips a whole
  segment.

#### Compaction strategies

- **Size-tiered compaction**: successively merge newer, smaller
  SSTables into older, larger ones. Handles very high write
  throughput well, but merging very large SSTables needs a lot of
  temporary disk space.
- **Leveled compaction**: keep SSTable size fixed; organize SSTables
  into increasing levels (L0, L1, L2, …), each key-range partitioned
  and larger than the level before it. When a level exceeds its size
  limit, SSTables move down one level. Uses less disk space than
  size-tiered, and is more efficient for reads (fewer SSTables to
  check per key).
- Rule of thumb: size-tiered compaction favors write-heavy workloads;
  leveled compaction favors read-heavy workloads. Most LSM
  implementations support several compaction strategies.

#### Embedded storage engines (sidebar)

- An **embedded database** is a library, not a network service. It
  runs in the same process as the application and reads/writes local
  disk files directly. Examples: RocksDB, SQLite, LMDB, DuckDB,
  KùzuDB.
- Embedded databases suit mobile apps and small, single-machine,
  low-concurrency backend workloads — for example, one embedded
  instance per tenant in a multitenant system where tenants never
  need cross-tenant queries.

### B-Trees

- The **B-tree**, introduced in 1970, is the most widely used
  key-value structure. It remains standard in almost all relational
  databases and many nonrelational ones.
- Like SSTables, B-trees keep key-value pairs sorted, enabling
  lookups and range queries. Unlike SSTables, B-trees break the data
  into fixed-size **pages** (traditionally 4 KiB; Postgres uses 8
  KiB, MySQL 16 KiB by default) and overwrite pages in place, rather
  than writing immutable segments.
- Pages are identified by page number, so one page can reference
  another (like an on-disk pointer). One page is the **root**, where
  every lookup starts. Each non-leaf page holds keys and child-page
  references; each child covers a continuous key range. A **leaf
  page** holds the actual values, or references to them.
- **Branching factor**: the number of child references per page —
  typically several hundred in practice.
- To update an existing key, find its leaf page and overwrite that
  page with a new version. To insert a new key, find the page whose
  range covers it. If that page is full, **split** it into two
  half-full pages and update the parent to reference both; a split
  can cascade up to the root, and if the root splits, a new root is
  created above it.
- Because splits keep the tree balanced, a B-tree with n keys always
  has depth O(log n). Most databases fit in 3–4 levels. A 4-level
  tree of 4 KiB pages with a branching factor of 500 can store up to
  250 TB.

#### Making B-trees reliable

- The core B-tree write operation overwrites a page in place, at a
  fixed location, so all references to it stay valid.
- Overwriting multiple pages at once (as in a split) is risky: a
  crash partway through can leave a corrupted tree (e.g. an orphan
  page), or, if hardware cannot write a whole page atomically, a
  **torn page**.
- To recover from crashes, B-tree engines keep a **write-ahead log
  (WAL)**: an append-only file that records every modification before
  it is applied to the tree's pages. After a crash, the WAL restores
  the tree to a consistent state. (Filesystems call the equivalent
  mechanism journaling.)
- For performance, B-tree engines buffer modified pages in memory
  before writing them to disk. The WAL, once flushed to disk with
  `fsync`, guarantees durability even if the in-memory pages are lost
  in a crash.

#### Using B-tree variants

- **Copy-on-write** (e.g. LMDB): instead of overwriting pages and
  using a WAL, write a modified page to a new location and create new
  versions of its parent pages pointing at it. Also useful for
  concurrency control.
- **Abbreviated keys**: store only enough of a key to act as a range
  boundary, especially on interior pages. This raises the branching
  factor and lowers tree depth.
- **Sequential leaf layout**: some implementations try to keep leaf
  pages in disk order, to speed up sorted-range scans; this ordering
  is hard to maintain as the tree grows.
- **Sibling pointers**: leaf pages may reference their left/right
  neighbor pages, allowing in-order scans without returning to parent
  pages.

### Comparing B-Trees and LSM-Trees

- Rule of thumb: LSM-trees suit write-heavy applications better;
  B-trees are faster for reads. Always benchmark your actual
  workload — the choice is not strictly binary, and some engines
  blend both approaches (e.g. multiple B-trees merged LSM-style).

#### Read performance

- A B-tree read touches one page per level, so reads are fast and
  predictable, since the tree is shallow.
- An LSM read may need to check several SSTables at different
  compaction stages; Bloom filters reduce the disk I/O this requires.
- B-tree range queries are simple and fast, using the tree's sort
  order. LSM range queries must scan and merge results from all
  segments in parallel; Bloom filters do not help range queries
  (hashing every possible key in a range is impractical), so range
  queries cost more on LSM engines than point queries do.
- High write throughput can cause latency spikes in log-structured
  engines if the memtable fills faster than compaction can keep up.
  Many engines (e.g. RocksDB) apply **backpressure**: they pause all
  reads and writes until the memtable is flushed.
- Modern NVMe SSDs (connected via PCIe, faster than SATA) can serve
  many parallel independent reads. Both B-trees and LSM-trees can
  reach high read throughput, if the engine is designed to exploit
  this parallelism.

#### Sequential versus random writes

- B-tree writes scatter across disk, since a modified page can be
  anywhere. This pattern is called **random writes**.
- LSM-tree writes go out as whole segment files at once (memtable
  flush, or compaction). This pattern is called **sequential
  writes**.
- Disks generally sustain higher sequential write throughput than
  random write throughput. LSM engines therefore generally handle
  higher write throughput than B-trees on the same hardware. The gap
  is largest on spinning disks (HDDs), smaller but still present on
  SSDs.
- On HDDs, random writes are slow because the disk head must
  physically move and wait — several milliseconds per write.
- On SSDs, flash memory is written one page (~4 KiB) at a time but
  erased only one block (~512 KiB) at a time. Before erasing a block,
  the controller must move any still-valid pages elsewhere; this is
  **garbage collection (GC)**. Sequential writes tend to fill whole
  blocks with one file, so a later delete can erase the block with no
  GC. Random writes leave blocks with a mix of valid and invalid
  pages, forcing more GC work, consuming write bandwidth, and wearing
  the drive faster.

#### Write amplification

- **Write amplification**: total bytes written to disk, divided by
  the bytes that a plain append-only log (no index) would need to
  write for the same workload. (Sometimes measured in I/O operations
  instead of bytes.)
- LSM-trees write each value at least three times: to the WAL, to the
  memtable's SSTable flush, and again on every compaction that
  touches it. (Storing large values separately from keys, and
  compacting only the key/reference SSTables, can reduce this.)
- B-trees write each piece of data at least twice: to the WAL and to
  the tree page. A whole page is often rewritten even for a
  small change, to guarantee correct crash recovery.
- Higher write amplification means fewer effective writes per second
  within a fixed disk bandwidth, and faster SSD wear. For typical
  workloads, LSM-trees tend to have lower write amplification than
  B-trees, since they avoid rewriting whole pages and can compress
  SSTable chunks — another reason LSM engines suit write-heavy
  workloads.
- To measure write amplification correctly, run the test long enough
  for compaction effects to appear: an empty LSM-tree has no
  compaction competing for disk bandwidth yet.

#### Disk space usage

- B-trees can fragment: deleted keys leave unused pages that cannot
  easily be returned to the OS, since they sit in the middle of the
  file. Databases need a background process (e.g. Postgres's
  `VACUUM`) to reclaim this space.
- LSM-trees fragment less, since compaction rewrites data files
  anyway and SSTables have no unused page space; SSTable blocks also
  compress better, often giving smaller files than B-trees. Space
  used by overwritten/deleted values persists until compaction
  removes it — a small cost under leveled compaction, larger
  (especially temporarily) under size-tiered compaction.
- Multiple on-disk copies of deleted data can be a compliance problem
  (e.g. data-protection law): a deleted record may persist in higher
  LSM levels until its tombstone propagates through all compaction
  levels, which can take a long time.
- Immutable SSTable segments make snapshotting easy: record which
  segment files exist at a point in time; no copying is needed as
  long as those files are kept. B-trees, whose pages are overwritten,
  are harder to snapshot efficiently.

## Multicolumn and Secondary Indexes

- A **primary key** uniquely identifies one row/document/vertex.
  Other records reference it by that key; an index resolves the
  reference.
- A **secondary index** differs from a primary-key index mainly in
  that its values are not unique — many rows can share one index
  entry. Solutions: store a list of matching row IDs per entry (like
  a postings list), or make each entry unique by appending a row ID.
  Both B-trees and log-structured storage can implement secondary
  indexes.

### Storing Values Within the Index

- **Clustered index**: the actual row/document/vertex data is stored
  directly inside the index structure (e.g. InnoDB's primary key,
  one allowed clustered index per table in SQL Server).
- **Non-clustered / reference index**: the index value is a
  reference — either the primary key (InnoDB's secondary indexes) or
  a direct disk location. Where rows are stored separately is called
  a **heap file** (used by Postgres); it stores rows with no
  particular order.
- **Covering index (index with included columns)**: a middle ground.
  It stores some extra columns inside the index alongside the full
  row on the heap or clustered index, so some queries can be answered
  from the index alone ("the index covers the query"). This speeds up
  those queries but uses more disk space and slows writes, due to
  duplicated data.
- Updating a value without changing its key: a heap file can
  overwrite in place if the new value is no larger than the old one.
  If the new value is larger, it may need to move to a new heap
  location, requiring every index to be updated, or a forwarding
  pointer left at the old location.

## Keeping Everything in Memory

- Disk-based structures exist because disks are awkward: data must
  be laid out carefully for good performance. Disks are tolerated for
  two advantages: durability (survive power loss) and lower cost per
  GB than RAM.
- As RAM gets cheaper, many datasets fit entirely in memory
  (possibly across several machines). This has produced **in-memory
  databases**.
- Some in-memory stores (e.g. Memcached) are cache-only: data loss on
  restart is acceptable. Others aim for durability, using battery-
  backed RAM, a disk change-log, periodic disk snapshots, or
  replication to other machines — reads are still served entirely
  from memory; disk is used only as an append-only durability log.
- Examples: VoltDB, SingleStore, Oracle TimesTen (in-memory
  relational); RAMCloud (open-source, durable, log-structured);
  Redis and Couchbase (weak durability, async disk writes).
- The performance advantage of in-memory databases is **not** mainly
  about avoiding disk reads (the OS page cache already caches hot
  disk blocks in memory). It comes from avoiding the overhead of
  encoding in-memory structures into a disk-writable format.
- In-memory databases can also offer data models hard to implement
  with disk-based indexes — e.g. Redis's priority queues and sets,
  simple to implement because everything stays in memory.

## Data Storage for Analytics

- Data warehouses are usually relational, because SQL fits analytical
  queries well. A warehouse and an OLTP database can look alike on
  the surface (both use SQL), but their internals differ, since they
  are optimized for different query patterns. Most vendors specialize
  in one workload or the other.
- **HTAP (hybrid transactional/analytical processing)** databases
  (e.g. SQL Server, SAP HANA, SingleStore) support both in one
  product, but increasingly as two separate storage/query engines
  behind one SQL interface.

### Cloud Data Warehouses

- Established vendors (Teradata, Vertica, SAP HANA) offer both
  on-premises and cloud deployments. Newer cloud-only warehouses
  (BigQuery, Redshift, Snowflake) exploit scalable cloud
  infrastructure such as object storage and serverless compute.
- Cloud warehouses integrate more easily with other cloud services
  (e.g. automatic log ingestion, Dataflow/Kinesis integration) and
  are more elastic, since they decouple compute from storage: data
  sits in object storage, so storage and compute scale
  independently.
- Open-source warehouses (Hive, Trino, Spark) have split into
  separate components as analytics storage has moved to data lakes on
  object storage:
  - **Query engine** (e.g. Trino, DataFusion, Presto): parses SQL,
    builds an execution plan, runs it (often via distributed,
    parallel tasks — sometimes using a separate execution framework
    such as Spark or Flink).
  - **Storage format** (e.g. Parquet, ORC, Lance, Nimble): encodes
    table rows as bytes in files, usually kept in object storage or a
    distributed filesystem, and accessible to tools beyond the query
    engine.
  - **Table format** (e.g. Apache Iceberg, Delta): defines which
    files (immutable storage-format files) make up a table, plus its
    schema, and supports inserts/deletes over immutable files, time
    travel, GC, and transactions.
  - **Data catalog** (e.g. Snowflake Polaris, Databricks Unity
    Catalog): defines which tables exist in a database; usually a
    standalone, REST-queryable service. Query engines consult it when
    reading/writing tables; decoupling it from the query engine has
    enabled separate data-discovery and data-governance tooling.

### Column-Oriented Storage

- Data warehouse fact tables can be very wide (100+ columns) but
  petabyte-scale in rows. A typical analytical query touches only
  4–5 columns at once (`SELECT *` is rare in analytics).
- **Row-oriented storage** (used by most OLTP engines and document
  databases): all values of one row are stored together. A query
  that needs only a few columns still must load, and parse, every
  full row.
- **Column-oriented (columnar) storage**: all values of one column
  are stored together instead. A query loads and parses only the
  columns it actually uses. Column storage applies to non-relational
  data too — e.g. Parquet's columnar support for a document model,
  via a technique called shredding/striping.
- Column values must stay aligned by row order: the kth value in
  every column belongs to the same row, so a full row can be
  reassembled by taking the kth entry from each column.
- In practice, columnar engines split a table into blocks of
  thousands/millions of rows, storing each column separately within
  each block — often blocked by a date/timestamp range, so a query
  loads only the needed columns from the blocks overlapping its date
  range.
- Columnar storage is used in almost all modern analytical systems:
  cloud warehouses (Snowflake), embedded engines (DuckDB), product
  analytics (Pinot, Druid), storage formats (Parquet, ORC, Lance,
  Nimble), in-memory formats (Apache Arrow, Pandas/NumPy), and some
  time-series databases (InfluxDB IOx, TimescaleDB).

#### Column compression

- Columns often repeat values a lot, which compresses well.
- **Bitmap encoding**: for a column with n distinct values, build n
  bitmaps (one per distinct value), one bit per row, set to 1 where
  that row has that value. Useful when distinct values are few
  relative to row count (e.g. 100,000 distinct products across
  billions of sales rows).
- Sparse bitmaps (mostly 0s) can be further **run-length encoded**:
  store counts of consecutive 0s/1s instead of every bit. **Roaring
  bitmaps** switch between raw and run-length representations,
  picking whichever is more compact.
- Bitmap indexes suit common warehouse query patterns:
  - `WHERE col IN (a, b, c)`: bitwise OR of the three bitmaps.
  - `WHERE col1 = x AND col2 = y`: bitwise AND of the two bitmaps
    (valid because columns share the same row order, so bit k always
    means the same row across columns).
- Bitmaps can also answer graph queries (e.g. "users followed by X
  who also follow Y").
- **Do not confuse** column-oriented storage with the **wide-column
  (column-family)** data model (e.g. Bigtable, Accumulo, HBase),
  where a row can have thousands of columns and rows need not share
  columns. Despite the similar name, wide-column databases are
  row-oriented: they store all of one row's values together.

#### Sort order in column storage

- Row order within a column store does not have to matter; insertion
  order is simplest, since a new row is just an append to each
  column. But an explicit sort order can be imposed and used as an
  index, as with SSTables.
- Sorting must be done a full row at a time (all columns sorted
  together by the same row order), never one column independently —
  otherwise you lose the mapping between values in the same row.
- The administrator chooses sort columns using known query patterns.
  Example: sort by `date_key` first, so date-range queries scan only
  the needed rows; a second sort key (e.g. `product_sk`) then orders
  ties, grouping same-date/same-product rows together for queries
  that filter/group by both.
- Sorting also improves compression: a low-cardinality first sort key
  produces long runs of the same value, compressing very well via
  run-length encoding (even over billions of rows). Later sort keys
  compress progressively worse, since they become more shuffled; the
  first few sorted columns are still an overall win.

#### Writing to column-oriented storage

- Warehouse reads tend to be large-row aggregations; column storage,
  compression, and sorting all speed these up.
- Warehouse writes tend to be bulk imports (e.g. via ETL). Writing a
  single row into the middle of a sorted columnar table is
  inefficient (would require rewriting all compressed columns from
  that point on); a bulk write of many rows amortizes that cost.
- Common approach: a log-structured write path. New writes go first
  to a row-oriented, sorted, in-memory store; once enough accumulate,
  they merge into new column-encoded files on disk in bulk. Since old
  files stay immutable and new files are written in one pass, object
  storage suits this well (Snowflake, Vertica, Pinot, Druid all do
  this).
- The query engine transparently merges on-disk column data with
  recent in-memory writes, so recent inserts/updates/deletes appear
  immediately in query results, without the user seeing the
  distinction.

### Query Execution: Compilation and Vectorization

- A complex analytical SQL query becomes a **query plan**: multiple
  stages called **operators**, possibly distributed across machines
  for parallel execution. The query planner optimizes which operators
  to use, their order, and where each runs.
- A naive, interpreter-style operator (checking a query data
  structure row by row) is too slow for large analytical scans. Two
  faster approaches are used:
  - **Query compilation**: generate code (from the SQL query) that
    iterates rows, evaluates the needed comparisons/calculations, and
    writes matching values to an output buffer; compile that code to
    machine code (often via LLVM) and run it against in-memory
    columnar data. Similar in spirit to JIT compilation (as in the
    JVM).
  - **Vectorized processing**: keep the query interpreted, but batch-
    process many column values at once through a fixed set of
    prebuilt operators, instead of iterating row by row. Example:
    pass a column and a target value to an equality operator to get
    back a result bitmap; combine bitmaps from multiple operators
    (e.g. bitwise AND) to answer multi-condition queries.
- Both approaches gain speed from exploiting modern CPU behavior:
  preferring sequential memory access (fewer cache misses); running
  tight inner loops with few instructions/no function calls (fewer
  branch mispredictions); using thread parallelism and SIMD
  instructions; and operating directly on compressed data without
  decoding it first.

### Materialized Views and Data Cubes

- A **virtual view** is a saved query, expanded and re-run each time
  it is read. A **materialized view** is an actual stored copy of a
  query's results, which must be refreshed when the underlying data
  changes (some databases do this automatically; specialist systems
  like Materialize exist for this). Materialized views add write
  cost but can greatly speed up repeated identical reads.
- **Materialized aggregates** are materialized views built from
  aggregate functions (COUNT, SUM, AVG, MIN, MAX). A **data cube
  (OLAP cube)** is a grid of precomputed aggregates grouped by
  multiple dimensions — e.g. a table of summed sales by date and by
  product, where each row/column total collapses one dimension. Real
  fact tables often have many dimensions (e.g. date, product, store,
  promotion, customer), forming a higher-dimensional hypercube with
  the same underlying idea.
- Advantage: queries matching a precomputed dimension become very
  fast (e.g. total sales per store yesterday needs no row scan).
- Disadvantage: a data cube is less flexible than querying raw data —
  it can only answer questions along dimensions it precomputed (e.g.
  no "price > $100" filter if price isn't a cube dimension). Most
  warehouses therefore keep raw data and use cubes only as a
  targeted performance boost.

## Multidimensional and Full-Text Indexes

- B-trees and LSM-trees support efficient range queries over a
  single attribute. Some queries need more than one attribute at
  once.
- A **concatenated index** combines several fields into one key by
  appending one column after another, in a fixed order (like a paper
  phone book indexing lastname, then firstname). It supports queries
  on the first field alone, or the first-then-second combination, but
  not the second field alone.
- A **multidimensional index** supports querying several columns
  simultaneously — important for geospatial data. Example: finding
  restaurants within a rectangular lat/long map area needs a
  two-dimensional range query. A concatenated index on
  (latitude, longitude) cannot answer this efficiently: it can narrow
  by only one dimension at a time.
- Solutions: map a 2D location to a single number via a
  space-filling curve, then use an ordinary B-tree; or use a
  specialized spatial index such as an **R-tree** or **Bkd-tree**,
  which groups nearby points into the same subtree (e.g. PostGIS
  implements R-trees via Postgres's Generalized Search Tree
  facility). Regular grids of triangles/squares/hexagons are another
  option.
- Multidimensional indexes are not only for geography — e.g. a 3D
  index on (red, green, blue) for product color search, or a 2D
  index on (date, temperature) for weather queries, avoiding a full
  scan that a 1D index on either dimension alone would require.

### Full-Text Search

- **Full-text search** finds documents by keywords appearing
  anywhere in the text. Deep issues (language-specific word
  segmentation, typo/synonym matching) are specialist topics beyond
  this book's scope.
- At its core, full-text search is a multidimensional query: each
  possible word (**term**) is a dimension; a document has value 1 in
  a term's dimension if it contains that term, else 0. Searching for
  "red apples" looks for 1 in both the "red" and "apples"
  dimensions — potentially a huge number of dimensions.
- The **inverted index** is the key-value structure search engines
  use: key = term, value = list of document IDs containing it (the
  **postings list**). With sequential document IDs, a postings list
  can be a sparse bitmap, same as in column storage.
- Finding documents containing both term x and term y is a bitwise
  AND of their bitmaps — efficient even when run-length encoded.
  Lucene (used by Elasticsearch and Solr) works this way, storing
  term→postings-list mappings in SSTable-like sorted files merged
  with the same log-structured approach as LSM-trees. Postgres's GIN
  index also uses postings lists, for full-text search and for
  indexing inside JSON documents.
- **N-grams**: an alternative to word-based indexing — index all
  substrings of length n (e.g. trigrams of "hello": "hel", "ell",
  "llo"). An inverted index of trigrams supports arbitrary substring
  search, and even regular expressions, at the cost of a much larger
  index.
- To tolerate typos, Lucene supports search within a given **edit
  distance** (edit distance 1 = one character added, removed, or
  replaced), by storing terms as a finite-state automaton (similar to
  a trie) transformed into a Levenshtein automaton for efficient
  fuzzy search.

### Vector Embeddings

- **Semantic search** goes beyond synonym/typo matching to match
  documents by meaning/intent — important for AI applications like
  retrieval-augmented generation (RAG), which feeds search results
  into an LLM's output.
- An **embedding model** (often an LLM) converts a document into a
  **vector embedding**: an array of floating-point numbers
  representing a point in a multidimensional space. Embedding models
  are trained so that semantically similar documents get vectors that
  are near each other in that space. Individual numbers in the vector
  have no independent meaning by themselves.
- Real embeddings often exceed 1,000 dimensions (the book's examples
  use 3D for illustration only). Distance functions such as **cosine
  similarity** (angle between vectors) or **Euclidean distance**
  (straight-line distance) measure closeness between vectors.
- Early text embedding models: Word2Vec, BERT, GPT (usually neural
  networks). Embedding models now also exist for video, audio, and
  images; some modern models are multimodal, embedding several
  media types into the same space.
- At query time, the search engine embeds the user's query (plus
  context, e.g. location) with the same model, then uses a **vector
  index** to find documents whose embeddings are closest to the query
  embedding. R-trees do not work well at high dimensionality, so
  specialized vector indexes are used:
  - **Flat index**: stores raw vectors; a query compares against
    every vector. Accurate, but slow.
  - **Inverted file (IVF) index**: clusters the vector space into
    partitions (**centroids**); a query checks only some partitions
    (**probes**). Faster than flat, but approximate — more probes
    trade speed for accuracy.
  - **HNSW (Hierarchical Navigable Small World) index**: multiple
    graph layers over the vector space; a query starts at the sparse
    top layer, finds the nearest node, then descends layer by layer
    through denser graphs, refining toward the closest vector. Also
    approximate, like IVF.
- Popular implementations: Facebook's Faiss library and Postgres's
  `pgvector` extension both support IVF and HNSW.

## Summary

- Storage engines optimized for OLTP and for analytics (OLAP) look
  very different, because their workloads differ:
  - **OLTP**: many requests, each touching few records, needing fast
    responses; records accessed via primary key or secondary index;
    these indexes are ordered key→record mappings supporting range
    queries too.
  - **Analytics**: fewer, complex queries scanning many records;
    typically column-oriented storage with compression (minimizes
    disk I/O) plus JIT compilation or vectorization (minimizes CPU
    time).
- Two OLTP schools of thought:
  - **Log-structured**: append and delete files, never update in
    place. Generally higher write throughput. Family: SSTables,
    LSM-trees, RocksDB, Cassandra, HBase, ScyllaDB, Lucene.
  - **Update-in-place**: treat disk as fixed-size overwritable pages.
    B-trees are the main example, standard across relational OLTP
    databases and many nonrelational ones. As a rule of thumb,
    B-trees give higher read throughput and lower read latency.
- Indexes for multiple simultaneous conditions: multidimensional
  indexes (e.g. R-trees, for lat/long-style queries) and full-text
  indexes (multiple keywords in the same text).
- Vector databases support semantic search over text and other
  media, using high-dimensional vectors and vector-similarity search.
- Understanding these internals lets an application developer choose
  the right storage engine, and reason about the effect of tuning
  parameters — without needing to become an expert in any one
  engine's implementation.
