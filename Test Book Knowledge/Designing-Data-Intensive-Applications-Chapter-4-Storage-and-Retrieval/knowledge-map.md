---
title: "Knowledge Map — Chapter 4: Storage and Retrieval"
book: "Designing Data-Intensive Applications, 2nd Edition"
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  This describes what should be known from the chapter. Not shown to the
  learner by default — used internally to drive question selection and
  coverage tracking. See source.md for full detail behind each item.
---

# Core Concepts (Critical)

- C1. **What a database fundamentally does, and why storage internals matter** — store data, return it on request; an application developer needs enough understanding of storage internals to pick and tune the right engine, not to build one.
- C2. **Log-structured vs. B-tree storage families** — the two main OLTP philosophies: append-only immutable segments vs. fixed-size pages overwritten in place. Everything else in the OLTP half of the chapter sits under one of these two.
- C3. **The LSM-tree write path (memtable → SSTable → compaction)** — writes go to an in-memory sorted memtable, flush to an immutable on-disk SSTable segment past a size threshold, and a background compaction process merges/discards obsolete data; a write-ahead log makes the memtable crash-safe.
- C4. **SSTables and sparse indexes** — key-value pairs sorted by key, one entry per key, with only some keys held in a sparse in-memory/on-disk index; lookup scans forward from the nearest indexed key.
- C5. **Bloom filters** — a fast, approximate, per-segment membership test; a 0 bit means definitely-absent (safe to skip the segment), all-1s means probably-present (may be a false positive, costing one wasted lookup, never incorrectness).
- C6. **B-tree structure and page splits** — fixed-size pages, root/interior/leaf pages, branching factor, page splits cascading up to the root on insert, O(log n) depth.
- C7. **Write-ahead log (WAL) for B-tree crash recovery** — every modification is appended to the WAL before being applied to tree pages; after a crash, the WAL restores a consistent state; the filesystem equivalent is journaling.
- C8. **B-tree vs. LSM-tree trade-offs (reads, writes, disk space)** — B-trees: faster/more predictable reads, especially range queries; random writes; higher write amplification usually. LSM-trees: better write throughput via sequential writes; Bloom filters mitigate (but don't fully close) the read gap; range queries cost more than point queries; generally lower write amplification and less fragmentation.
- C9. **Write amplification** — total bytes written to disk vs. bytes an append-only log alone would need; affects both throughput ceiling and SSD wear; LSM vs. B-tree comparison depends on workload but LSM is typically lower.
- C10. **Sequential vs. random writes, and why it matters on HDDs and SSDs** — HDDs: random writes are slow due to physical head movement. SSDs: random writes force more garbage collection (page-level writes, block-level erasure), consuming bandwidth and wearing the drive faster.
- C11. **Row-oriented vs. column-oriented storage** — row storage keeps one row's values together (OLTP norm); column storage keeps one column's values together (analytics norm), so a query loads only the columns it needs; values across columns stay aligned by row order (kth entry = same row).
- C12. **Column compression via bitmap encoding (+ run-length encoding)** — one bitmap per distinct value, bit-per-row; sparse bitmaps run-length encoded; bitwise OR/AND directly answers IN and multi-column-equality queries because columns share row order.
- C13. **Query compilation vs. vectorized processing** — two alternatives to slow row-by-row interpreted execution for analytical queries: generate-and-compile code (JIT-like) vs. batch-process columns through prebuilt operators; both exploit modern CPU characteristics (sequential access, tight loops, SIMD/parallelism, operating on compressed data directly).
- C14. **Multidimensional indexes vs. concatenated indexes** — a concatenated index (fields appended in fixed order) can only narrow by a field-prefix; true multi-column simultaneous queries (e.g. geospatial bounding boxes) need multidimensional structures like R-trees.
- C15. **Full-text search as a multidimensional query, and the inverted index** — each term is a dimension; the inverted index maps term → postings list (document IDs, possibly a bitmap); multi-term queries are bitwise AND of postings, same pattern as column-store bitmap queries.
- C16. **Vector embeddings and semantic search** — embedding models map documents/queries into a multidimensional vector space so that semantically similar items land near each other; distance functions (cosine similarity, Euclidean distance) measure closeness; specialized vector indexes (flat, IVF, HNSW) trade accuracy for speed.

# Supporting Concepts (High)

- H1. Historical two shell-function key-value store (`db_set`/`db_get`) — O(1) append write, O(n) linear-scan read; motivates why an index is needed.
- H2. Hash index (in-memory hash map of key → byte offset) — fast but has four specific limitations: unbounded disk growth, slow restart (rebuild by scanning), must fit in memory, no efficient range queries.
- H3. Merging SSTable segments works like mergesort — read inputs in parallel, always emit the lowest key, keep only the most recent value on duplicates.
- H4. Tombstones — a special deletion record; causes older values for that key to be dropped during merge; the tombstone itself is dropped once it reaches the oldest segment.
- H5. LSM-tree provenance — 1996 paper name (Log-Structured Merge-tree), influenced by/associated with Google's Bigtable paper (which coined "SSTable"/"memtable"); real systems: RocksDB, Cassandra, ScyllaDB, HBase, Lucene.
- H6. Segment immutability enables simpler crash recovery (just delete an unfinished SSTable) and cheap point-in-time snapshots (just record which segment files existed).
- H7. Object storage compatibility of LSM segments — SlateDB, Delta Lake write LSM-style immutable segments directly to object storage.
- H8. Compaction strategies — size-tiered (merge small→large, favors write-heavy, more temp disk space) vs. leveled (fixed SSTable size, increasing levels L0/L1/…, favors read-heavy, less disk space, more incremental).
- H9. Embedded storage engines — library, not network service, runs in-process (RocksDB, SQLite, LMDB, DuckDB, KùzuDB); good fit for mobile apps and small/low-concurrency backend workloads, e.g. one instance per tenant.
- H10. B-tree page size conventions — 4 KiB traditional, Postgres 8 KiB, MySQL 16 KiB by default; a 4-level, branching-factor-500 tree of 4 KiB pages can store up to 250 TB.
- H11. B-tree variants — copy-on-write (LMDB, also aids concurrency control), abbreviated/truncated interior keys (raises branching factor), sequential leaf-page layout attempts (hard to maintain), sibling pointers for in-order scans without backtracking.
- H12. Backpressure under high write throughput — LSM engines (e.g. RocksDB) may pause all reads/writes if the memtable fills faster than compaction/flush can keep up.
- H13. NVMe SSD parallel read throughput — both B-trees and LSM-trees can exploit it, but the engine must be specifically designed to do so.
- H14. Fragmentation and reclamation — B-trees fragment (deleted-key pages stranded mid-file; needs a background compactor like Postgres `VACUUM`); LSM-trees fragment less because compaction rewrites files anyway.
- H15. Compliance implication of multiple on-disk copies — a deleted record can persist across LSM levels until its tombstone fully propagates, complicating "prove it's deleted" compliance requirements.
- H16. Primary key vs. secondary index — secondary index values are not unique; solved via a list of row IDs per entry, or by appending a row ID to make entries unique.
- H17. Clustered vs. non-clustered (reference) index vs. covering index — data-in-index vs. reference-to-heap-file vs. hybrid (some columns duplicated into the index to let some queries skip the heap entirely); covering indexes trade disk space/write cost for read speed.
- H18. Heap file update mechanics — same-size update can overwrite in place; larger update may need to move the record, requiring index updates or a forwarding pointer.
- H19. In-memory databases — durability strategies (battery-backed RAM, disk change-log, snapshots, replication); performance advantage is NOT primarily "no disk reads" (OS page cache already caches hot blocks) but avoiding in-memory-to-disk encoding overhead; examples split by durability model (VoltDB/SingleStore/TimesTen relational-durable; RAMCloud log-structured-durable; Redis/Couchbase weakly durable/async).
- H20. HTAP databases — support OLTP and OLAP in one product, but increasingly as two separate engines behind a shared SQL interface (SQL Server, SAP HANA, SingleStore).
- H21. Cloud data warehouses — decouple compute from storage (data in object storage), enabling independent elastic scaling; integrate more easily with other cloud services (log ingestion, Dataflow/Kinesis).
- H22. The four disaggregated components of a modern open-source analytics stack — query engine (Trino/DataFusion/Presto), storage format (Parquet/ORC/Lance/Nimble), table format (Iceberg/Delta — adds inserts/deletes, time travel, GC, transactions over immutable files), data catalog (Polaris/Unity Catalog — defines which tables exist, usually a standalone REST service).
- H23. Column store block layout — tables split into row-count blocks (often by date/timestamp range) with columns stored separately per block, so a query loads only needed columns from overlapping blocks.
- H24. Wide-column (column-family) model vs. column-oriented storage — easily confused by name; wide-column databases (Bigtable, Accumulo, HBase) are actually row-oriented.
- H25. Sort order in column storage — must sort a full row at a time across all columns (never one column independently); first sort key compresses best (long runs via RLE), later sort keys compress progressively worse.
- H26. Writing to column-oriented storage — log-structured write path: new writes land in a row-oriented in-memory sorted store first, then bulk-merge into new column-encoded on-disk files; queries transparently merge on-disk + in-memory data.
- H27. Materialized views vs. virtual views — virtual view = saved query, expanded/re-run each read; materialized view = an actual stored, refreshed copy of query results; adds write cost, saves repeated-read cost.
- H28. Data cubes (OLAP cubes) — precomputed aggregate grids across dimensions; fast for precomputed-dimension queries, inflexible for queries along non-precomputed dimensions (e.g. no price filter if price isn't a cube dimension); most warehouses keep raw data and use cubes only as a targeted boost.
- H29. Concatenated index limits — a phone-book-style (lastname, firstname) index answers "by lastname" or "by lastname+firstname" but not "by firstname alone."
- H30. Spatial index implementations — R-trees, Bkd-trees, space-filling curves + ordinary B-tree, regular grids (triangles/squares/hexagons); PostGIS implements R-trees via Postgres's Generalized Search Tree facility.
- H31. N-grams for full-text search — indexing all length-n substrings supports arbitrary substring/regex search, at the cost of much larger index size.
- H32. Fuzzy/typo-tolerant search — Lucene supports edit-distance search via a finite-state automaton (trie-like) transformed into a Levenshtein automaton.
- H33. Embedding model examples and evolution — Word2Vec, BERT, GPT (text, neural-network based) → extended to video/audio/images → multimodal models embedding multiple media types into one shared space.
- H34. Vector index types in detail — flat (accurate, slow, brute-force distance to every vector), IVF (clusters/centroids + probes, approximate, faster), HNSW (multi-layer graph, coarse-to-fine descent, approximate); Faiss and pgvector implement both IVF and HNSW.

# Definitions (must be able to state precisely)

- log (append-only sequence of records on disk — not application log)
- index, sparse index
- SSTable, memtable, segment, compaction, LSM-tree, LSM storage engine
- tombstone, write-ahead log (WAL)
- Bloom filter, false positive
- size-tiered compaction, leveled compaction
- embedded database
- B-tree, page, root/leaf page, branching factor, torn page
- write amplification, random writes, sequential writes, garbage collection (GC, SSD sense)
- primary key, secondary index, clustered index, non-clustered index, heap file, covering index
- in-memory database
- HTAP
- query engine, storage format, table format, data catalog
- row-oriented storage, column-oriented (columnar) storage
- bitmap encoding, run-length encoding, roaring bitmap
- wide-column (column-family) data model
- query compilation, vectorized processing, JIT compilation
- virtual view, materialized view, materialized aggregate, data cube (OLAP cube)
- concatenated index, multidimensional index, R-tree, Bkd-tree
- full-text search, term, postings list, inverted index, n-gram, edit distance
- semantic search, embedding model, vector embedding, cosine similarity, Euclidean distance
- vector index, flat index, IVF (inverted file) index, centroid, probe, HNSW index

# Relationships

- R1. The log-structured/B-tree split (C2) determines almost every downstream trade-off in the chapter: write amplification (C9), sequential-vs-random I/O (C10), fragmentation and disk usage (H14), and crash-recovery design (C3/C7).
- R2. SSTables (C4) + a sparse index + an in-memory memtable + background compaction (C3) together constitute the LSM-tree (H5); Bloom filters (C5) are a targeted fix for the LSM read-path weakness that this design otherwise creates (checking many segments per read).
- R3. B-tree in-place overwrites (C6) create the torn-page/partial-write risk that the WAL (C7) exists to solve — directly parallel to how the LSM write-ahead log protects the memtable, but for a different failure mode (in-place corruption vs. lost in-memory state).
- R4. Sequential vs. random writes (C10) is the mechanical reason LSM-trees generally beat B-trees on write throughput (C8) and often have lower write amplification (C9) — the same underlying physical/flash cause (HDD head movement, SSD block-level GC) explains both effects.
- R5. Row-oriented vs. column-oriented storage (C11) mirrors the OLTP/OLAP access-pattern split from Chapter 1 (point queries vs. wide aggregate scans) — column storage is a direct structural response to "OLTP touches few columns of one row; OLAP touches few columns across many rows."
- R6. Column-store row-order alignment (C11) is what makes bitmap AND/OR queries (C12) valid — bit k always refers to the same row across every column's bitmap, and the identical mechanism (bitwise AND of postings bitmaps) reappears in full-text search (C15), showing the two aren't really separate techniques.
- R7. Sort order in column stores (H25) improves both query performance (skip non-matching row ranges) and compression (RLE on the first sort key) — the two benefits share one root cause (long runs of repeated adjacent values).
- R8. The "disaggregated open-source analytics stack" (H22) is the data-lake/warehouse split's cloud-native evolution — echoing the cloud-native disaggregation-of-storage-and-compute theme from Chapter 1, applied specifically to analytics.
- R9. Multidimensional indexes (C14) and full-text/inverted indexes (C15) are presented as the same underlying idea (searching several "dimensions" simultaneously) applied to different data: geospatial coordinates vs. term-presence per document.
- R10. Vector embeddings (C16) are framed as one more multidimensional-index problem (like C14/C15), just with far higher dimensionality and approximate (not exact) index structures (IVF, HNSW) as the practical consequence.
- R11. Query compilation and vectorization (C13) both exist to solve the same problem columnar storage doesn't fully solve alone: minimizing CPU time once the right columns are already loaded from disk — I/O reduction (columnar+compression) and CPU reduction (compilation/vectorization) are complementary, not substitutes.

# Processes / Sequences

- P1. **LSM-tree write path**: write arrives → appended to WAL (durability) → inserted into in-memory memtable (sorted structure) → memtable exceeds threshold → flushed to disk as a new immutable SSTable segment → old memtable memory freed, new memtable starts → background process merges/compacts segments over time.
- P2. **LSM-tree read path**: look in the memtable → if not found, check on-disk segments from newest to oldest (Bloom filter first, per segment, to skip segments that definitely don't have the key) → stop at first match, or conclude "not present" after checking all segments.
- P3. **SSTable merge (compaction)**: read all input segment files in parallel → repeatedly copy the lowest current key across all inputs to the output file → on duplicate keys, keep only the most recent value → tombstones cause older values to be dropped; a tombstone itself is dropped once merged into the oldest segment.
- P4. **B-tree page split on insert**: find the leaf page whose range covers the new key → if full, split into two half-full pages → update the parent page to reference both new children with a boundary key → if the parent is also full, split it too → repeat up to the root; if the root splits, a new root is created above it.
- P5. **B-tree crash recovery**: every modification is appended to the WAL before being applied to a tree page → on crash, replay the WAL to restore the tree to a consistent state (mirrors P1's WAL role but protects in-place pages instead of a memtable).
- P6. **Bitmap query evaluation** (column store or inverted index): identify the relevant bitmap(s) for the query's condition(s) → combine with bitwise OR (for IN / OR-type conditions) or bitwise AND (for AND-type / multi-column conditions) → the resulting bitmap's 1-bits are the matching rows/documents.
- P7. **Semantic (vector) search at query time**: user query text (+ context) → embedding model generates a query vector → vector index (flat/IVF/HNSW) finds documents with the closest embeddings by a distance function (cosine similarity or Euclidean distance) → those documents are returned as results.

# Arguments & Principles

- A1. "You don't need to build your own storage engine, but you do need to pick and tune the right one" — the chapter's stated reason an application developer should care about storage internals at all.
- A2. "There is no strict either/or between B-trees and LSM-trees" — benchmarks are workload-sensitive, and hybrid engines exist; always test with your actual workload rather than trusting the rule of thumb alone.
- A3. "False positives in a Bloom filter are harmless in LSM engines" — they cost one wasted lookup at worst, never an incorrect result, because a positive is always double-checked against the real sparse index/data.
- A4. "Most warehouses keep raw data and use data cubes only as a targeted performance boost" — an explicit design principle favoring flexibility over precomputed speed as the default, with cubes as a supplement, not a replacement.
- A5. "The performance advantage of in-memory databases is not mainly about skipping disk reads" — a specifically named misconception the chapter corrects: the OS page cache already caches hot data, so the real gain is avoiding on-disk encoding/serialization overhead.
- A6. "Column-oriented storage and the wide-column (column-family) data model are easily confused by name but structurally opposite" — an explicit chapter warning against a specific, plausible mix-up.
- A7. Rule-of-thumb pairing: "size-tiered compaction ↔ write-heavy workloads; leveled compaction ↔ read-heavy workloads" and "LSM-trees ↔ write-heavy; B-trees ↔ read-heavy (especially range queries)" — two parallel rules of thumb the chapter offers as starting heuristics, not guarantees.

# Examples (materially explain concepts — worth being able to cite)

- E1. The two-bash-function key-value store (`db_set`/`db_get`) motivating why an index is needed at all (H1).
- E2. `handbag`/`handsome`/`handiwork` sparse-index seek example illustrating how a sparse SSTable index locates a block to scan (C4).
- E3. Bloom filter worked example: key `handbag` hashing to bits (2, 9, 4); query `handheld` hashing to (6, 11, 2), one bit hits a 0 → definitely absent (C5).
- E4. Size-tiered compaction example: four 256 MB SSTables merging into roughly (not exactly) 898 MB, due to deletions/overwrites/TTL expirations (H8).
- E5. B-tree page-split walkthrough: inserting key 334 into a full 333–345 range page, splitting into 333–337 and 337–345, updating the parent with boundary 337 (P4).
- E6. 4-level, branching-factor-500, 4 KiB-page B-tree storing up to 250 TB — concrete scale illustration of O(log n) depth (H10).
- E7. `fact_sales` analytics query (Example 4-1: weekday/category fruit-vs-candy sales) — touches only 3 of 100+ fact-table columns, motivating column-oriented storage (C11).
- E8. Bitmap query examples: `WHERE product_sk IN (31, 68, 69)` → OR of three bitmaps; `WHERE product_sk = 30 AND store_sk = 3` → AND of two bitmaps (C12/P6).
- E9. Geospatial bounding-box restaurant search query needing a true 2D range query, which a concatenated (latitude, longitude) index cannot answer efficiently (C14).
- E10. Trigram example: "hello" → "hel", "ell", "llo" (H31).
- E11. Vector embedding illustrative example: agriculture ≈ [0.38, 0.83, 0.41], vegetables ≈ [0.36, 0.64, 0.67] (near), star schemas ≈ [0.85, 0.10, -0.52] (far) (C16).
- E12. RAG (retrieval-augmented generation) as the motivating real-world use case for semantic/vector search (C16).

# Easily Confused (worth a dedicated check)

- X1. Vectorized processing (query execution, C13 — batches of bits/values processed with optimized code) vs. vector embeddings (semantic search, C16 — an array of floats representing a location in meaning-space). The chapter explicitly flags this as a name collision with unrelated meanings.
- X2. Column-oriented storage (C11) vs. wide-column/column-family data model (H24) — same "column" word, opposite storage orientation (columnar is genuinely column-oriented; wide-column databases are actually row-oriented).
- X3. Write amplification's LSM-vs-B-tree comparison (C9) is workload-dependent, not a fixed universal ranking — don't over-generalize "LSM always wins" without the caveat.
- X4. IVF "probes" vs. HNSW "layers" — both are approximate vector-index mechanisms but tune accuracy/speed differently (more probes vs. traversing more graph layers); don't conflate the two tuning knobs.
- X5. A materialized view (H27) is not the same as a data cube (H28) — a data cube is a specific *kind* of materialized view (materialized aggregates across dimensions), not a synonym for materialized views in general.
