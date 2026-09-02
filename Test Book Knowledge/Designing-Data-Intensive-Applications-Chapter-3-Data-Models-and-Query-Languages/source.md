---
title: "Chapter 3 — Data Models and Query Languages"
book: "Designing Data-Intensive Applications, 2nd Edition"
original_file: "Book - Designing Data-Intensive Applications/3. Data-Models-and-Query-Languages.pdf"
status: source reference — do not edit
style: "Written in controlled technical English (ASD-STE100 principles): short sentences, one idea per sentence, active voice, plain approved-style vocabulary, no filler."
---

# Note on this file

This is a condensed version of Chapter 3 (about 50 pages). It keeps
the definitions, key claims, and comparisons you need for testing.
It removes anecdotes, most citations, and filler wording. Each idea
is one short sentence. The original PDF stays the source of truth in
the project folder.

---

## Introduction

- A data model is a way to represent real-world things as data
  structures. Software has many layers. Each layer represents data
  in terms of the layer below it.
- Example of the layers, from top to bottom: (1) the application
  developer models the real world as objects and APIs; (2) the
  application stores those objects in a general-purpose data model,
  such as JSON documents, relational tables, or a graph; (3) the
  database engineers represent that data as bytes on disk or on a
  network; (4) hardware engineers represent those bytes as electrical
  signals.
- Each layer hides the complexity of the layers below it. This lets
  different groups of people work together.
- This chapter compares the main data models: the relational model,
  the document model, graph-based models, event sourcing, and
  DataFrames. It also looks at the query languages used with each
  model.
- Many query languages in this chapter (SQL, Cypher, SPARQL, Datalog)
  are **declarative**. A declarative language states what result you
  want. It does not state the steps to get that result. The database
  query optimizer chooses the steps. This lets the database improve
  performance later without changing your queries, and it can run the
  query in parallel across cores or machines without extra work from
  you.
- Most programming languages (Python, Java) are **imperative**. An
  imperative language states the exact steps to perform, in order.

## Relational Versus Document Models

- The relational model organizes data into **relations** (SQL calls
  them tables). Each relation is an unordered collection of **tuples**
  (SQL calls them rows). Edgar Codd proposed the relational model in
  1970.
- By the mid-1980s, relational database management systems (RDBMSs)
  and SQL were the standard tools for storing and querying structured
  data. Relational data still dominates business analytics today.
- Other models competed with the relational model over time: the
  network and hierarchical models (1970s–1980s), object databases
  (late 1980s–early 1990s), and XML databases (early 2000s). None of
  these lasted. Instead, SQL added support for XML, JSON, and graph
  data.
- In the 2010s, **NoSQL** became a popular term. NoSQL is not one
  technology. It is a set of ideas: new data models, schema
  flexibility, and scalability. **NewSQL** databases aim for NoSQL-like
  scalability plus the relational data model and transaction
  guarantees.
- One lasting effect of the NoSQL movement is the **document model**.
  A document usually stores data as JSON. MongoDB and Couchbase
  popularized this model. Most relational databases now also support
  JSON.
- People often see relational tables as rigid. People often see JSON
  documents as more flexible.

### The Object-Relational Mismatch

- Most application code today uses object-oriented languages. This
  creates a common criticism of SQL: you need an awkward translation
  layer between application objects and the relational model (tables,
  rows, columns). This translation problem is called the **impedance
  mismatch**.
- Object-relational mapping (ORM) frameworks, such as ActiveRecord and
  Hibernate, reduce the boilerplate code needed for this translation.
- ORM problems: (1) an ORM cannot fully hide the difference between
  the object model and the relational model, so developers must still
  think about both; (2) ORMs mainly serve OLTP application
  development; data engineers who need the underlying relational
  schema for analytics must still understand it directly; (3) many
  ORMs work only with relational OLTP databases, so they give weak
  support for search engines, graph databases, and other NoSQL
  systems; (4) ORM-generated schemas can be awkward and inefficient
  for direct use; (5) ORMs make it easy to write inefficient queries by
  accident, such as the **N+1 query problem**.
- The N+1 query problem: you fetch N comments in one query. Each
  comment has an author ID. To show each author's name, a naive ORM
  issues one extra query per comment. This gives N+1 total queries.
  A single query with a join is faster.
- ORM benefits: (1) ORMs reduce boilerplate translation code for
  simple, repetitive cases; (2) some ORMs cache query results, which
  reduces database load; (3) ORMs can help manage schema migrations.

### The Document Model for One-to-Many Relationships

- Example: a résumé (LinkedIn profile). Fields like `first_name` and
  `last_name` occur once per user, so a relational schema stores them
  as columns on a `users` table. A person can have many positions,
  many periods of education, and many contact methods. These are
  **one-to-many relationships**.
- One way to store one-to-many data: put positions, education, and
  contact information in separate tables. Each table has a
  foreign-key reference back to `users`.
- Another way: store the whole résumé as one JSON document, with
  positions and education as nested arrays. This maps more naturally
  to an object structure in application code.
- The JSON representation groups all résumé data in one place. This
  gives better **locality** than the multi-table schema: fetching a
  profile needs one lookup instead of several queries or a multiway
  join.
- The one-to-many relationships in a résumé form a **tree structure**.
  The JSON representation makes this tree explicit.
- A one-to-many relationship is sometimes called **one-to-few**,
  because a résumé usually has few positions. If a one-to-many
  relationship can have a genuinely large number of items — for
  example, thousands of comments on a celebrity's social media post —
  embedding all items in one document becomes unwieldy. The relational
  approach fits better in that case.

### Normalization, Denormalization, and Joins

- **Normalization**: store a reference (an ID) to shared data, instead
  of repeating the data itself. Example: store `region_id` instead of
  the plain-text region name.
- Reasons to normalize a value like a region name: consistent
  spelling; avoiding ambiguous names (does "Washington, DC" mean the
  district or the state?); easier updates (change the name in one
  place); support for localization (translate the name by ID); better
  search (link a region to broader facts, such as "East Coast").
- **Denormalization**: store the human-readable value directly,
  duplicated in every record that uses it.
- With an ID, the reference itself never needs to change, even if the
  thing it names changes later. Anything meaningful to humans can
  change. If that information is duplicated, every copy needs an
  update. This costs more code, more writes, more disk space, and it
  risks inconsistency between copies.
- The cost of normalization: every time you display a record with an
  ID, you need an extra lookup to resolve the ID to a human-readable
  value. In the relational model, this lookup is a **join**.
- Document databases can store normalized or denormalized data. They
  are often used with denormalized data, for two reasons: the JSON
  model makes it easy to add denormalized fields, and many document
  databases give weak join support. Some document databases support no
  joins at all; the application code must perform the join itself, by
  fetching one document, then fetching a second document by ID.
  MongoDB's aggregation pipeline can perform a join with its `$lookup`
  operator.
- General rule: normalized data is usually faster to write (one copy
  to update) but slower to read (needs joins). Denormalized data is
  usually faster to read (no joins) but more costly to write (more
  copies to update, more disk space).
- You can think of denormalization as a form of **derived data**. You
  need a process to keep the redundant copies updated. Databases with
  atomic transactions make this easier, but not every database
  supports transactions across multiple documents. Stream processing
  is another way to keep denormalized copies consistent.
- Normalization usually suits OLTP systems, where reads and writes
  both need speed. Denormalization usually suits analytical systems,
  where updates happen in bulk and read speed matters most. At small
  to moderate scale, normalization is often best, because join cost
  stays low and you avoid keeping copies consistent. At very large
  scale, join cost can become a real problem.
- Case study: a social network home timeline. A normalized
  representation joins posts and follows at read time; this join can
  become too expensive at scale. A denormalized, precomputed
  ("materialized") timeline avoids that join, at the cost of a
  fan-out write to every follower's timeline on each new post.
- X (formerly Twitter) stores only the post ID and sender ID in each
  materialized timeline entry, not the post text. Reading the
  timeline still needs two lookups: fetch the post content by ID, and
  fetch the sender's profile by ID. This lookup process is called
  **hydrating the IDs**. It is a join performed in application code.
- Reason for storing only IDs: like counts, reply counts, usernames,
  and profile photos change often. Denormalizing fast-changing data
  into every timeline entry would need constant, costly updates.
  Hydrating IDs at read time parallelizes well and scales
  independently of follower count.
- Key claim: needing joins at read time does not, by itself, prevent
  a service from scaling well.
- Key claim: normalization and denormalization are not inherently
  good or bad. They represent trade-offs in read speed, write speed,
  and implementation effort. The best choice often mixes both within
  one application.

### Many-to-One and Many-to-Many Relationships

- `positions` and `education` are **one-to-many** (or one-to-few)
  relationships: one résumé has several positions, but each position
  belongs to only one résumé.
- `region_id` is a **many-to-one** relationship: many people can live
  in the same region, but each person lives in only one region at a
  time.
- If organizations and schools become referenced entities (by ID),
  this creates **many-to-many** relationships: one person can work
  for several organizations, and one organization can have many past
  and present employees.
- In the relational model, a many-to-many relationship is usually
  stored as an **associative table** (also called a **join table**).
  Each row links one user ID with one organization ID.
- Many-to-one and many-to-many relationships do not fit well inside
  one self-contained JSON document. They favor a normalized,
  reference-based representation instead.
- In a document model, related data groups into separate documents,
  linked by ID references (for example, references to organization
  and school documents).
- Many-to-many relationships often need queries in both directions
  (for example: all organizations a person worked for, and all people
  who worked at an organization).
- Storing the ID reference on both sides is a denormalized approach:
  the relationship exists in two places, so the two copies can become
  inconsistent.
- A normalized approach stores the relationship once and uses
  **secondary indexes** to support efficient queries in both
  directions. In the relational schema, this means indexing both the
  `user_id` and `org_id` columns of the join table. In the document
  model, this means indexing the `org_id` field nested inside the
  `positions` array. Many document and relational (JSON-capable)
  databases can index values nested inside a document.

### Stars and Snowflakes: Schemas for Analytics

- Data warehouses are usually relational. Common warehouse schema
  patterns: **star schema**, **snowflake schema**, dimensional
  modeling, and one big table (OBT). ETL processes move data from
  operational systems into these schemas.
- A star schema has a central **fact table**. Each row in the fact
  table represents one event at a point in time (for example, one
  product purchase). Some fact table columns hold attribute values
  (price, cost). Other columns are foreign keys to **dimension
  tables**.
- Each dimension table represents one aspect of the event: who, what,
  where, when, how, or why. Example: a `dim_product` table, where each
  row describes one product (SKU, brand, category, and so on).
  Queries often join the fact table to several dimension tables.
- The schema is called a "star schema" because a diagram of the
  tables shows the fact table at the center, with dimension tables
  around it like the points of a star.
- A **snowflake schema** breaks dimension tables further into
  subdimensions (for example, separate tables for brand and product
  category, referenced by foreign key from `dim_product`). A snowflake
  schema is more normalized than a star schema. Analysts often prefer
  star schemas, because they are simpler to work with.
- Fact tables and dimension tables in a data warehouse are often
  wide: fact tables can have over a hundred columns.
- A star or snowflake schema mostly represents many-to-one
  relationships: many sales happen for one product, in one store.
  Other relationship types are usually denormalized to keep queries
  simple. Example: a multi-item purchase becomes one fact-table row
  per product, all sharing the same customer ID, store ID, and
  timestamp.
- **One big table (OBT)** removes the separate dimension tables. It
  folds dimension data directly into denormalized fact-table columns.
  This uses more storage but can speed up queries.
- Denormalization is not a problem for analytics, because analytics
  data is historical and rarely changes. In OLTP, denormalization
  raises consistency and write-overhead problems; these problems
  matter far less for analytics.

### When to Use Which Model

- Arguments for the document model: schema flexibility; better
  performance from locality; a closer match to the application's
  object model.
- Arguments for the relational model: better support for joins,
  many-to-one relationships, and many-to-many relationships.
- If your data has a document-like structure — a tree of one-to-many
  relationships, usually loaded as a whole — the document model is
  usually a good fit.
- **Shredding** means splitting a document-like structure across
  multiple relational tables. Shredding can create cumbersome schemas
  and unnecessarily complex application code.
- Document model limitation: you cannot refer directly to a nested
  item inside a document. You must describe its position instead
  (for example, "the second item in the positions list for user
  251"). The relational model lets you refer to any item directly by
  its own ID.
- If an application needs user-controlled item order (for example, a
  drag-and-drop to-do list), the document model handles this well: a
  JSON array preserves order directly. The relational model has no
  standard way to store ordered lists; common tricks include an
  integer sort column (which needs renumbering), a linked list of
  IDs, or fractional indexing.

### Schema Flexibility in the Document Model

- Most document databases, and JSON support in relational databases,
  do not enforce a schema on document content. Any key or value can
  be added. A reading client has no guarantee about which fields a
  document contains.
- Calling document databases "schemaless" is misleading. The reading
  code usually assumes some structure. This structure is **implicit**
  — it exists, but the database does not enforce it. A more accurate
  term is **schema-on-read**: the structure is interpreted only when
  data is read.
- **Schema-on-write** (the traditional relational approach) makes the
  schema explicit. The database enforces this schema at write time.
- Schema-on-read resembles dynamic (runtime) type checking in
  programming languages. Schema-on-write resembles static
  (compile-time) type checking. There is no clear winner between the
  two approaches.
- Example: splitting a `name` field into `first_name` and
  `last_name`. In a document database, new documents get the new
  fields; application code must still handle old documents at read
  time. In a schema-on-write database, you run a migration: `ALTER
  TABLE` to add the column (fast, even on large tables), then `UPDATE`
  to backfill values (slow on large tables, since every row is
  rewritten).
- You can avoid a slow backfill by adding the new column with a
  default of NULL, then filling it in at read time — the same
  approach a document database uses.
- Schema-on-read fits well when data items are heterogeneous: many
  object types exist, and putting each type in its own table is not
  practical; or an external system controls the data's structure, and
  that structure can change at any time.
- When all records share the same structure, an enforced schema is a
  useful tool. It documents and enforces that structure.

### Data Locality for Reads and Writes

- A document is usually stored as one continuous string (JSON, XML,
  or a binary form such as MongoDB's BSON). Reading or writing the
  whole document at once is fast, because the data sits together on
  disk. This is a **locality** advantage.
- Locality only helps if the application needs large parts of the
  document at once. Loading a whole document to read a small part of
  it wastes effort. Updating any part of a document usually rewrites
  the entire document. For these reasons, keep documents fairly
  small, and avoid frequent small updates.
- Locality is not limited to the document model. Google Spanner
  offers similar locality in the relational model, by letting a
  schema declare that one table's rows nest ("interleave") inside a
  parent table. Oracle offers a similar feature (multi-table index
  cluster tables). Google Bigtable's wide-column model uses **column
  families** for a similar purpose.

### Query Languages for Documents

- Relational databases mostly use SQL. Document databases vary more:
  some support only key-value access by primary key; others add
  secondary indexes or full query languages.
- XML databases use XQuery and XPath. JSON equivalents include JSON
  Pointer and JSONPath. MongoDB's aggregation pipeline is a query
  language for JSON document collections; its `$lookup` operator
  performs joins.
- Example aggregation query, in SQL:
  ```sql
  SELECT date_trunc('month', observation_timestamp) AS observation_month,
         sum(num_animals) AS total_animals
  FROM observations
  WHERE family = 'Sharks'
  GROUP BY observation_month;
  ```
  This filters rows to the "Sharks" family, groups them by month, and
  sums the animal counts per month.
- The same query in MongoDB's aggregation pipeline uses `$match` and
  `$group` stages with a JSON-based syntax, instead of SQL's
  English-sentence-style syntax. The two languages express similar
  logic with similar power; the syntax choice is mostly a matter of
  taste.

### Convergence of Document and Relational Databases

- Document and relational databases started as different approaches.
  Over time, they have grown more alike. Relational databases added
  JSON types, JSON query operators, and indexes on values nested
  inside documents. Some document databases (MongoDB, Couchbase,
  RethinkDB) added joins, secondary indexes, and declarative query
  languages.
- This convergence benefits application developers: the relational
  and document models work best together in one database.
  Relational–document hybrids combine reference-style joins with
  schema-flexible sections.

## Graph-Like Data Models

- The document model fits data with mostly one-to-many relationships.
  When many-to-many relationships are common and highly
  interconnected, a **graph model** fits better.
- A graph has two kinds of objects: **vertices** (also called nodes or
  entities) and **edges** (also called relationships or arcs).
- Examples of graph-shaped data: social graphs (vertices = people,
  edges = "knows"); the web graph (vertices = pages, edges = links);
  road networks (vertices = junctions, edges = roads).
- Graph representations: an **adjacency list** stores, for each
  vertex, the IDs of its directly connected neighbors — good for graph
  traversal. An **adjacency matrix** is a 2D array where each cell
  marks whether an edge exists between a row vertex and a column
  vertex — good for machine learning use.
- A graph does not need to store only one type of vertex. Facebook's
  graph mixes vertices for people, locations, events, and comments.
  Search engines build **knowledge graphs** of entities such as
  organizations, people, and places.
- This chapter covers two graph models: the **property graph model**
  (used by Neo4j, Memgraph, KùzuDB) and the **triple store model**
  (used by Datomic, AllegroGraph, Blazegraph). The two models express
  similar things. Some databases (Amazon Neptune) support both.
- This chapter also covers four graph query languages — Cypher,
  SPARQL, Datalog, GraphQL — plus SQL support for graph queries.

### Property Graphs

- Each vertex in a property graph has: a unique identifier; a label
  (a string naming the object type); a set of outgoing edges; a set
  of incoming edges; a set of properties (key-value pairs).
- Each edge in a property graph has: a unique identifier; a tail
  vertex (where the edge starts); a head vertex (where the edge ends);
  a label (naming the relationship type); a set of properties
  (key-value pairs).
- You can represent a property graph as two relational tables: a
  `vertices` table and an `edges` table. Index the edges table on
  both `tail_vertex` and `head_vertex`, to traverse the graph in
  either direction.
- Property graph properties: no schema restricts which vertices can
  connect; given any vertex, you can efficiently find its incoming
  and outgoing edges, so you can traverse forward and backward;
  different labels let you store several kinds of information in one
  graph, while keeping the model clean.
- The `edges` table generalizes the many-to-many associative (join)
  table idea, to store many relationship types in one table.
- Limitation: a graph edge connects exactly two vertices. A relational
  join-table row can connect three or more entities at once, using
  multiple foreign keys. To model a higher-degree relationship in a
  graph, add an extra vertex representing the join-table row, with
  edges to each connected entity — or use a hypergraph.
- Graphs give strong flexibility for evolving data. A graph can gain
  new vertex types, edge types, and properties over time, without
  breaking existing structure.

### The Cypher Query Language

- **Cypher** is a query language for property graphs, created for the
  Neo4j graph database, later standardized as **openCypher**. Cypher
  also runs on Memgraph, KùzuDB, Amazon Neptune, and Apache AGE.
- Cypher syntax: create vertices and label them, then connect them
  with an arrow notation. Example: `(idaho) -[:WITHIN]-> (usa)`
  creates a `WITHIN` edge, with `idaho` as the tail vertex and `usa`
  as the head vertex.
- A `MATCH` clause finds patterns in the graph, using the same arrow
  notation. Example: `(person) -[:BORN_IN]-> ()` matches any two
  vertices linked by a `BORN_IN` edge.
- Example task: find people born in the US and now living in Europe.
  Cypher expresses "follow a `WITHIN` edge, zero or more times" as
  `-[:WITHIN*0..]->`. This is a **variable-length path traversal**,
  similar to the `*` operator in a regular expression.
- The database can execute this query in more than one way: forward,
  by scanning people and checking each person's birthplace and
  residence; or backward, by starting from the US and Europe location
  vertices (found by index), then following incoming `WITHIN` edges
  to find all locations inside them, then finding people through
  incoming `BORN_IN` or `LIVES_IN` edges.

### Graph Queries in SQL

- You can store graph data in relational tables (as in the
  vertices/edges schema). You can also query it with SQL, though with
  more effort than Cypher.
- Every edge traversed in a graph query is effectively a join with
  the edges table. In a typical relational query, you know the needed
  joins in advance. In a graph query, the number of edges to traverse
  is often not known in advance — this is a **variable-length
  traversal**.
- SQL expresses variable-length traversal using a **recursive common
  table expression** (`WITH RECURSIVE`). The equivalent of the short
  Cypher query above needs many more lines in SQL: define one
  recursive set of "locations within the US," one recursive set of
  "locations within Europe," then join people born in the first set
  against people living in the second set.
- Key comparison: a Cypher query with 4 lines needs about 31 lines of
  SQL for the same result. This shows how much a well-matched query
  language can simplify a query.
- The **GQL (Graph Query Language)** ISO standard, based on Cypher,
  was published in 2024. It aims for more uniformity across graph
  databases.

### Triple Stores and SPARQL

- The **triple store** model is mostly equivalent to the property
  graph model, using different terms for the same ideas.
- In a triple store, every fact is a three-part statement: (subject,
  predicate, object). Example: `(Jim, likes, bananas)` — `Jim` is the
  subject, `likes` is the predicate, `bananas` is the object.
- The subject of a triple corresponds to a graph vertex. The object
  is either: a primitive value (then the predicate and object work
  like a property key and value on the subject vertex); or another
  vertex (then the predicate works like an edge label, the subject is
  the tail vertex, and the object is the head vertex).
- **Turtle** is a compact text format for writing triples. Example:
  `_:lucy a :Person; :name "Lucy"; :bornIn _:idaho.` groups multiple
  facts about the same subject with semicolons.
- **RDF (Resource Description Framework)** is the data model behind
  Turtle. RDF was designed for the Semantic Web. RDF data can also be
  encoded in other formats, such as RDF/XML.
- RDF often uses full URIs as predicates (for example,
  `<http://my-company.com/namespace#within>`), instead of a short name
  like `within`. This design lets you combine data from different
  sources without predicate name clashes: two organizations can each
  define a `within` predicate under their own namespace URI without
  conflict.
- **SPARQL** is a query language for triple stores using the RDF
  model. It predates Cypher; Cypher's pattern-matching syntax borrows
  from SPARQL, so the two languages look similar. SPARQL variables
  start with a question mark (for example, `?person`).
- Because RDF does not separate properties from edges — both use
  predicates — SPARQL can match a property value using the same
  syntax it uses to match a graph edge.

### Datalog: Recursive Relational Queries

- **Datalog** is older than SPARQL and Cypher. It came from 1980s
  academic research. It is less well known among software engineers,
  and few mainstream databases support it, but it is very expressive
  for complex queries. Datomic, LogicBlox, CozoDB, and LinkedIn's
  LIquid use Datalog.
- Datalog is based on the relational model, not the graph model. This
  chapter covers Datalog because recursive graph queries are a
  particular strength of the language.
- A Datalog database stores **facts**. Each fact corresponds to a row
  in a relational table. Example: `location(2, "United States",
  "country")` states that row 2 of the `location` table represents
  the United States, a country.
- Datalog defines **rules**. A rule derives a new virtual table from
  existing facts or from other rules, similar to a SQL view. The
  left side of a rule (before the `:-` symbol) names the derived
  table and its columns. The right side defines which rows belong in
  that table, by matching patterns against existing facts.
- A rule applies whenever the system can match every pattern on its
  right side. When a rule applies, its left side becomes true, with
  variables replaced by matched values, as though a new fact were
  added to the database.
- Recursive rule example: `within_recursive` grows by repeatedly
  applying two rules — first seeding it from base `location` facts,
  then repeatedly extending it by following `within` edges — until no
  more matches exist. This process finds all locations transitively
  contained within another location.
- Datalog is a subset of Prolog. It lets you break a complex query
  into small rules, similar to how functions break code into smaller
  pieces. Just as functions can call themselves, Datalog rules can
  invoke themselves; this recursive rule invocation is what enables
  graph traversal in Datalog.

### GraphQL

- **GraphQL** is a query language, more restrictive than the others
  in this chapter by design. It is built for OLTP use: client
  software (a mobile app, a web frontend) requests a JSON document
  with a specific structure, matching exactly what the UI needs to
  render.
- GraphQL lets client code change its data requests without changing
  server-side APIs. This flexibility has costs: organizations often
  need extra tooling to translate GraphQL queries into calls to
  internal services (often REST or gRPC), plus extra work for
  authorization, rate limiting, and performance.
- GraphQL is intentionally limited, because its queries come from
  untrusted client sources. It must avoid expensive queries, to
  prevent denial-of-service risk. Unlike Cypher, SPARQL, SQL, and
  Datalog, GraphQL does not allow recursive queries. It also does not
  allow arbitrary search conditions, unless the service explicitly
  supports that search.
- A GraphQL response is JSON that mirrors the shape of the query: it
  returns exactly the requested fields, no more and no less. This
  means the server does not need to know in advance which fields a
  client will need.
- GraphQL often duplicates data in the response (for example,
  repeating a sender's name on every one of their messages) instead
  of returning a normalized reference. This trades a larger response
  size for a UI that is simpler to render, and it avoids extra
  round-trips for data outside the requested page.
- The database behind a GraphQL API can store data in normalized
  form; the server performs the necessary joins to build the
  response. Only joins declared in the GraphQL schema are available
  to the client.
- GraphQL can run on top of any database — relational, document, or
  graph — despite having "graph" in its name.

## Event Sourcing and CQRS

- In every model covered so far, data is queried in the same form it
  is written. Complex applications sometimes cannot satisfy every
  read need with one data representation. In that case, write data in
  one form, then derive other, read-optimized representations from
  it.
- An **event log** is often the simplest, fastest way to write data:
  each write becomes a self-contained, timestamped, immutable record,
  appended to a sequence of events. You never change or delete an
  event; you only append new events, which can supersede earlier
  ones.
- Example: a conference management system. Every state change
  (opening registration, a new booking, a cancellation, a capacity
  change) becomes an event, appended to the log. Each event append
  updates one or more **materialized views** (also called
  **projections** or **read models**) — for example, a booking-status
  view, a dashboard-chart view, and a badge-printing view.
- **Event sourcing**: use an event log as the source of truth, and
  express every state change as an event.
- **CQRS (command query responsibility segregation)**: keep separate
  read-optimized representations, derived from the write-optimized
  event log.
- A user request is called a **command**. A command must be validated
  first. Once valid, it becomes a fact and is recorded as an event in
  the log. The log should contain only valid events; a materialized
  view must not reject an event once it reaches the log.
- Name events in the past tense (for example, "the seats were
  booked"), because an event records a fact about something that
  already happened. A later cancellation is a separate, later event —
  the original booking fact stays true.
- Similarity to a star-schema fact table: both store past events.
  Difference: fact-table rows all share the same columns, and the
  table is unordered; event types can vary in structure, and event
  order matters (processing a cancellation before its booking would
  make no sense).
- Advantages of event sourcing and CQRS: (1) events communicate
  intent clearly to developers, more clearly than raw row changes;
  (2) materialized views are reproducible — delete a view and rebuild
  it by replaying the same events in the same order with the same
  code, which also simplifies debugging; (3) you can maintain multiple
  materialized views, each optimized for a different query, in any
  data model, in the same or a different database; (4) adding a new
  materialized view, a new event type, or new properties on an
  existing event type is easy, without changing old events; (5) you
  can reverse an incorrect event by writing a new deletion event,
  instead of directly editing committed data; (6) the event log can
  serve as an audit log; (7) event logs usually support higher write
  throughput than databases, because appends are sequential, and they
  can absorb write bursts while downstream views catch up later.
- Disadvantages: (1) external, time-varying data (such as a currency
  exchange rate) inside an event must be handled carefully, so
  reprocessing gives the same result every time — either store the
  rate in the event itself, or query a historical rate that never
  changes for a given timestamp; (2) immutable events conflict with
  privacy rules that require deleting personal data (for example,
  GDPR); techniques such as per-user logs or **crypto-shredding**
  (encrypting personal data with a key you can later delete) can help,
  but add complexity; (3) reprocessing events needs care when an event
  has external side effects (for example, do not resend a
  confirmation email every time you rebuild a view).
- Systems built specifically for event sourcing: EventStoreDB,
  MartenDB, Axon Framework. Message brokers such as Apache Kafka can
  also store the event log; stream processors can keep materialized
  views updated.
- Core requirement: every materialized view must process events in
  exactly the same order as they appear in the log. This is not
  always easy to guarantee in a distributed system.

## DataFrames, Matrices, and Arrays

- **DataFrames** and multidimensional number arrays (matrices) mainly
  appear in analytical and scientific work, rarely in OLTP systems.
  R, Python's Pandas, Apache Spark, ArcticDB, and Dask support the
  DataFrame model.
- A DataFrame resembles a relational table or a spreadsheet. It
  supports bulk, relational-like operations: apply a function to
  every row; filter rows by a condition; group and aggregate rows;
  join ("merge") one DataFrame with another by key.
- You manipulate a DataFrame through a sequence of commands, not a
  declarative query language. This fits how data scientists work:
  they incrementally reshape ("wrangle") data toward an answer, often
  on a private, local copy of the dataset.
- A common DataFrame use: transform relational-style data into a
  matrix or array, the input format many machine learning algorithms
  expect. Example: transform a table of (user, movie, rating) rows
  into a matrix where each row is a user, each column is a movie, and
  each cell is a rating. Such a matrix is often **sparse** (most
  cells have no value), and DataFrames or sparse-array libraries (such
  as NumPy) handle this well.
- A matrix holds only numbers. Non-numeric data needs conversion:
  scale dates into a numeric range; use **one-hot encoding** for a
  small, fixed set of category values (one column per possible value,
  with a 1 in the matching column and 0 elsewhere).
- Once data is a number matrix, it supports linear algebra operations,
  which underlie many ML algorithms.
- Specialized **array databases** (such as TileDB) store large
  multidimensional number arrays directly, often for scientific data
  (geospatial grids, medical imaging, astronomy). DataFrames also
  represent financial time-series data, and appear in batch
  processing frameworks such as Spark and Flink.

## Summary

- The relational model remains important today, especially for data
  warehousing and business analytics (star and snowflake schemas,
  SQL). Several alternatives serve other needs well:
  - The **document model** fits self-contained JSON documents with
    few relationships between documents.
  - **Graph models** fit data where anything can relate to
    everything, and queries traverse multiple hops — well supported
    by recursive queries in Cypher, SPARQL, or Datalog.
  - **DataFrames** extend relational-style data to very wide tables,
    bridging databases and the multidimensional arrays used in
    machine learning, statistics, and scientific computing.
- One model can often emulate another (for example, graph data stored
  in a relational database), but the result can be awkward — as seen
  with recursive SQL queries.
- Databases increasingly add support for other data models: relational
  databases add JSON columns; document databases add relational-like
  joins; SQL support for graph data keeps improving.
- **Event sourcing** stores data as an append-only log of immutable
  events. It suits complex business domains well. **CQRS** turns that
  log into read-optimized materialized views.
- Nonrelational data models usually leave the schema unenforced. This
  makes it easier to adapt to changing requirements. Application code
  still assumes some structure; the only question is whether that
  structure is explicit (schema-on-write) or implicit
  (schema-on-read).
- Data models not covered in this chapter: genome-sequence databases
  (for DNA similarity search, such as GenBank); ledger models with
  double-entry accounting (used in finance, and by databases such as
  TigerBeetle, and by cryptocurrencies/blockchains); full-text search
  and vector search (covered later, under "Full-Text Search").
