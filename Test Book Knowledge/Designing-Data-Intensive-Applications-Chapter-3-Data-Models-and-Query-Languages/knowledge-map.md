---
title: "Knowledge Map — Chapter 3: Data Models and Query Languages"
book: "Designing Data-Intensive Applications, 2nd Edition"
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  This describes what should be known from the chapter. Not shown to the
  learner by default — used internally to drive question selection and
  coverage tracking. See source.md for full detail behind each item.
---

# Core Concepts (Critical)

- C1. **Relational vs. document models** — the core trade-off of the chapter: relational tables (Codd, 1970) vs. JSON-style documents (popularized by the NoSQL movement, e.g. MongoDB); why each rose, and the general belief that documents are more schema-flexible.
- C2. **The object-relational mismatch** — the impedance-mismatch problem between object-oriented application code and relational tables/rows/columns; what ORMs (ActiveRecord, Hibernate) do and don't fix, including the N+1 query problem.
- C3. **Normalization vs. denormalization** — storing an ID reference to shared data (normalized) vs. duplicating human-readable data in every record (denormalized); the write-speed/read-speed trade-off and when each fits (OLTP vs. analytics).
- C4. **Many-to-one and many-to-many relationships** — why these relationship types resist a self-contained JSON document and favor a normalized/referenced (often relational) representation; associative/join tables.
- C5. **Star and snowflake schemas** — the fact-table/dimension-table structure used in data warehouses for analytics, and why heavy denormalization is acceptable there (historical, rarely-changing data) even though it's a problem in OLTP.
- C6. **Document model strengths and limitations ("When to Use Which Model")** — schema flexibility, locality, and object-model fit vs. relational's superior join/many-to-one/many-to-many support; document model's inability to reference nested items directly.
- C7. **Schema-on-read vs. schema-on-write** — document databases' implicit, enforced-at-read structure vs. relational databases' explicit, enforced-at-write structure; the dynamic-vs-static-typing analogy; when schema-on-read helps (heterogeneous data).
- C8. **Property graphs** — the vertex/edge model (unique ID, label, properties, incoming/outgoing edges for vertices; unique ID, tail, head, label, properties for edges) and why graphs suit densely interconnected, many-to-many-heavy data.
- C9. **Graph query languages: Cypher, SPARQL, Datalog** — declarative pattern-matching over graphs, the shared idea of variable-length/recursive path traversal (`*` in Cypher/SPARQL, recursive rules in Datalog), and why plain SQL needs verbose recursive CTEs to do the same thing.
- C10. **Event sourcing and CQRS** — using an immutable, append-only event log as the source of truth, deriving read-optimized materialized views (projections) from it; commands vs. events; why event order matters.

# Supporting Concepts (High)

- H1. **Declarative vs. imperative query languages** — SQL/Cypher/SPARQL/Datalog state *what* data is wanted (optimizer decides *how*); most programming languages are imperative (you specify the exact steps).
- H2. **The document model for one-to-many relationships** — the résumé/LinkedIn-profile example; one-to-many as a tree structure; "one-to-few" naming and when embedding breaks down (large lists, e.g. celebrity post comments).
- H3. **Joins in normalized data** — resolving an ID back into human-readable data via a SQL `JOIN`; document databases' generally weaker join support (`$lookup` in MongoDB's aggregation pipeline as the exception).
- H4. **Data locality for reads and writes** — a document stored as one continuous string gives fast whole-document reads/writes vs. multi-table relational lookups; the trade-off (loading a whole document even for a small read; whole-document rewrites on update); non-document examples of locality (Spanner's interleaved tables, Bigtable-style column families).
- H5. **Query languages for documents** — XQuery/XPath (XML), JSONPath, MongoDB's aggregation pipeline; convergence of document and relational databases over time (relational DBs adding JSON support, document DBs adding joins/secondary indexes/declarative queries).
- H6. **Triple stores and RDF** — the (subject, predicate, object) triple model, its equivalence to property graphs, the Semantic Web/RDF origin, and why URIs are used as predicates (namespace collision avoidance).
- H7. **Graph queries in SQL** — recursive common table expressions (`WITH RECURSIVE`) as SQL's way to express variable-length graph traversal, and why this is much more verbose than Cypher/SPARQL/Datalog for the same query.
- H8. **GraphQL** — an intentionally restrictive, OLTP-oriented query language for client-driven JSON shaping; no recursive queries or arbitrary search conditions (denial-of-service protection); can run on top of any underlying database model.
- H9. **DataFrames** — a table-like structure (R, Pandas, Spark) manipulated imperatively rather than declaratively, used mainly in analytics/ML contexts; its relation to matrices/arrays and one-hot encoding for turning categorical data numeric.
- H10. **Advantages and downsides of event sourcing/CQRS** — reproducibility of materialized views, auditability, high write throughput vs. nondeterminism risk from external data (e.g. exchange rates), GDPR/deletion tension with immutability, and side-effect reprocessing risk.
- H11. **NoSQL and NewSQL** — NoSQL as a loose set of ideas (new data models, schema flexibility, scalability, open source), not one technology; NewSQL as NoSQL-style scalability plus relational data/transactional guarantees.

*(Medium/Low items and Definitions/Examples/Easily-confused items from knowledge-map.md are tracked ad hoc within Knowledge Gaps and the Question Log as they come up, rather than pre-listed here.)*

# Definitions (must be able to state precisely)

- relation/tuple (SQL: table/row), impedance mismatch, ORM, N+1 query problem
- normalization, denormalization, derived data (as applied to denormalization)
- one-to-many (one-to-few), many-to-one, many-to-many, associative/join table
- fact table, dimension table, star schema, snowflake schema, one big table (OBT)
- shredding, schema-on-read, schema-on-write
- data locality, hydrating (IDs)
- vertex, edge, adjacency list, adjacency matrix, property graph, hypergraph
- triple store, (subject, predicate, object), RDF, Turtle
- Cypher, SPARQL, Datalog (facts, rules, recursive rules), GraphQL
- event sourcing, CQRS, command, event, materialized view / projection / read model
- DataFrame, matrix, one-hot encoding, array database

# Relationships

- R1. Normalization/denormalization (C3) is the same underlying trade-off whether you're modeling a résumé's `region_id` or a social network's home timeline — the social-network case study (A1/A4) is a large-scale, concrete instance of the small-scale résumé example.
- R2. Many-to-one and many-to-many relationships (C4) are exactly what push a document-modeled résumé (H2) back toward normalization/references — the résumé example progression (P1) is the throughline that connects C1, C3, and C4.
- R3. Star/snowflake schemas (C5) are a specialized, analytics-only application of normalization/denormalization (C3): heavy denormalization is fine there because the OLTP-specific costs (consistency risk, write overhead) don't apply to append-mostly historical data.
- R4. Schema-on-read (C7) is what actually underlies "document databases are schemaless" — it isn't the absence of structure, just where the structure is enforced; this refines the "schema flexibility" claim inside C1/C6.
- R5. Cypher's `:WITHIN*0..` traversal and Datalog's recursive rules (C9) both solve the same problem that plain SQL needs `WITH RECURSIVE` (H7) to solve — a variable, not-known-in-advance number of joins — illustrating C9 concretely via H7.
- R6. SPARQL's pattern matching (H6/C9) directly informed Cypher's syntax (C9) — SPARQL predates Cypher, and the two look similar as a result.
- R7. Event sourcing/CQRS (C10) is a specific, more radical instance of the systems-of-record/derived-data idea (from Chapter 1) and of denormalization-as-derived-data (C3): the event log is the system of record, and materialized views are derived, disposable, and rebuildable.
- R8. GraphQL's restriction against recursive queries and arbitrary conditions (H8) is a direct consequence of its OLTP/untrusted-client context — contrasted with Cypher/SPARQL/Datalog/SQL, which do allow recursion because they run in a trusted, backend context.
- R9. Property graphs (C8) and triple stores (H6) are two notations for nearly the same underlying model — a graph edge/vertex maps directly onto an RDF (subject, predicate, object) triple, just split differently between "properties" and "edges."

# Processes / Sequences

- P1. **Résumé example progression**: relational multi-table schema (Figure 3-1) → JSON document with embedded one-to-many data (Example 3-1) → adding many-to-one `region_id` reference → adding many-to-many organization/school references (Example 3-2), which push the model back toward normalization.
- P2. **ORM N+1 query problem**: one query fetches N comments (each with an author ID) → naive ORM code issues one additional query per comment to resolve its author → N+1 total queries, instead of one query with a join.
- P3. **Datalog rule evaluation** (the `within_recursive` example): Rule 1 seeds `within_recursive` from base `location` facts → Rule 2 repeatedly extends it by following `within` edges → Rule 3 (`migrated`) joins people's `born_in`/`lives_in` facts against `within_recursive` → Rule 4 (`us_to_europe`) filters `migrated` down to the specific US→Europe case.
- P4. **Event sourcing write/read cycle**: a user request becomes a command → the command is validated → once valid, it becomes a fact and is appended as an event to the immutable log → the event append triggers updates to one or more materialized views (projections) → reads are served from the materialized views, never from replaying the whole log on demand.
- P5. **Schema-on-write migration vs. schema-on-read adaptation** (splitting `name` into `first_name`/`last_name`): document DB — write new documents with new fields, patch old-format documents at read time in application code; relational DB — `ALTER TABLE` to add the column (fast), then `UPDATE` to backfill it (slow on large tables) or defer backfill to read time instead.
- P6. **Denormalized many-to-many query resolution**: to query a many-to-many relationship in both directions with a normalized model, create secondary indexes on both foreign-key columns (relational) or on the nested reference field (document) rather than storing the relationship redundantly on both sides.

# Arguments & Principles

- A1. "Normalization and denormalization are not inherently good or bad — they represent trade-offs in performance of reads and writes and implementation effort" — the chapter's explicit framing, illustrated by the social-network timeline case study (materialized timelines still require read-time "hydrating" joins).
- A2. "One data representation cannot always satisfy all the ways data needs to be queried and presented" — the stated motivation for event sourcing/CQRS: write in one optimized form, derive read-optimized forms separately.
- A3. "It is not accurate to call document databases 'schemaless'" — the chapter's correction: an implicit schema still exists (schema-on-read), the database just doesn't enforce it at write time.
- A4. "Having to perform joins when reading data is not, as sometimes claimed, an impediment to creating high-performance, scalable services" — the chapter's stated lesson from the social-network hydrating-IDs case study; hydrating parallelizes well and its cost doesn't depend on follower/following counts.
- A5. "A 4-line Cypher query needs 31 lines of SQL for the same result" — the chapter's concrete illustration of how much a well-matched data model and query language can simplify a query, specifically for variable-length graph traversal.
- A6. "GraphQL is intentionally more restrictive than the other query languages in this chapter" — no recursion, no arbitrary search conditions, because queries come from untrusted client sources and must avoid denial-of-service risk.

# Examples (materially explain concepts — worth being able to cite)

- E1. The LinkedIn/résumé example (Figure 3-1 relational schema vs. Example 3-1 JSON document) — the chapter's running illustration of C1/C2/H2.
- E2. The N+1 query problem: one query fetches N comments, a naive ORM issues one extra per-comment query to resolve the author, giving N+1 total queries instead of one join (C2).
- E3. `region_id` vs. plain-text region name — the chapter's worked normalization example, including the SQL `JOIN` to resolve it (C3).
- E4. X (formerly Twitter) materialized home timelines storing only post ID + sender ID, requiring "hydrating" joins at read time (C3/A4).
- E5. Grocery-retailer star schema (Figure 3-5): `fact_sales` at the center, `dim_product`/`dim_store`/`dim_date` as surrounding dimension tables (C5).
- E6. Splitting `name` into `first_name`/`last_name` — the chapter's worked schema-on-read (patch at read time) vs. schema-on-write (`ALTER TABLE` + `UPDATE`) migration comparison (C7).
- E7. Lucy (born Idaho, lives London, married to Alain) — the running graph example (Figure 3-6) used across property graphs, Cypher, SPARQL, and Datalog (C8, C9).
- E8. The "find people born in the US now living in Europe" query, expressed in Cypher (`-[:WITHIN*0..]->`), SPARQL (`:within*`), Datalog (`within_recursive`), and 31-line recursive SQL — the chapter's core cross-language comparison (C9, H7, A5).
- E9. Shark-sighting aggregation query, expressed in SQL (`GROUP BY`) and MongoDB's aggregation pipeline (`$match`/`$group`) (H5).
- E10. GraphQL group-chat query (Example 3-13/3-14): channels → recent messages → sender/replyTo, with duplicated sender name in `replyTo` rather than an ID reference (H8).
- E11. Conference management system (Figure 3-8): registrations, cancellations, and capacity changes as events, driving booking-status, dashboard, and badge-printing materialized views (C10).
- E12. Movie-ratings matrix (Figure 3-9): a sparse (user × movie) matrix built from a relational ratings table, with one-hot encoding for genre (H9).

# Easily Confused (worth a dedicated check)

- X1. Normalization/denormalization (C3) vs. schema-on-read/schema-on-write (C7) — normalization is about *where* shared data lives (one copy vs. duplicated); schema-on-read/write is about *when* structure is enforced (at read vs. at write). They're independent axes, not the same trade-off.
- X2. Property graphs (C8) vs. triple stores/RDF (H6) — mostly equivalent in expressive power, but property graphs separate properties from edges (each vertex/edge has its own key-value properties), while RDF uses predicates for both properties and edges, with no separate property bag.
- X3. Cypher's `-[:WITHIN*0..]->` vs. SQL's `WITH RECURSIVE` (H7) — both express variable-length traversal, but Cypher/SPARQL/Datalog treat it as a first-class, concise operator, while SQL must hand-build the recursion as a multi-step CTE.
- X4. GraphQL (H8) "graph" in the name vs. actual graph databases (C8/H6) — GraphQL is not a graph query language for graph databases; it's a client-driven document-shaping query language that can run on top of any database model (relational, document, or graph).
- X5. Event sourcing (C10) vs. a star-schema fact table (C5) — both are append-only collections of past events, but fact-table rows share one fixed column set and are unordered, while event types vary in structure and event *order* matters.
