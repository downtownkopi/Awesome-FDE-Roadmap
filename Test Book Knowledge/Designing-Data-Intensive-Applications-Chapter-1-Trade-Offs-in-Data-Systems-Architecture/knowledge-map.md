---
title: "Knowledge Map — Chapter 1: Trade-Offs in Data Systems Architecture"
book: "Designing Data-Intensive Applications, 2nd Edition"
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  This describes what should be known from the chapter. Not shown to the
  learner by default — used internally to drive question selection and
  coverage tracking. See source.md for full detail behind each item.
---

# Core Concepts (Critical)

- C1. **Data-intensive vs. compute-intensive applications** — data-intensive apps have data management as the main challenge; compute-intensive apps have computation as the main challenge.
- C2. **"No single best data system" — the chapter's central thesis.** Every system has trade-offs; the goal is comparing systems and picking the right one for the case at hand, not finding a universal best practice.
- C3. **Operational (OLTP) vs. analytical (OLAP) systems** — definitions, who uses each (backend engineers vs. analysts/data scientists), and the point-query vs. aggregate-query access-pattern distinction.
- C4. **Data warehousing** — why analytics moved off OLTP systems (data silos, unsuitable schemas, performance/security), and the ETL/ELT process that populates a warehouse.
- C5. **System of record vs. derived data system** — the authoritative source of truth vs. data computed/copied from another system; derived data can always be rebuilt from the source.
- C6. **Cloud services vs. self-hosting** — the build-vs-buy/outsource framing, and the two separate decisions (who builds it, who runs it) that create the bespoke ↔ self-hosted ↔ fully-managed spectrum.
- C7. **Cloud native architecture** — building to take advantage of cloud services specifically (not just renting a VM); why cloud native systems can outperform/out-recover/out-scale self-hosted ones on the same hardware.
- C8. **Distributed vs. single-node systems** — definition of a distributed system (multiple machines communicating over a network, each a "node"), and the reasons an application ends up distributed.
- C9. **Problems with distributed systems** — unreliable networks (calls can fail/time out with no way to know if the request landed), the latency cost of network calls vs. in-process calls, hard observability/troubleshooting, and the difficulty of keeping data consistent across services.
- C10. **Microservices** — definition (small, API-exposed, single-purpose, team-owned services), their benefits/downsides, and the chapter's framing that they mainly solve a *people/organizational* problem, not a purely technical one.

# Supporting Concepts (High)

- H1. Point query (OLTP) vs. aggregate query (OLAP) — the full comparison table (read/write pattern, human user, machine use, query type/volume, data shown, dataset size).
- H2. **Data lake** — a schema-flexible central store for any potentially useful data, vs. a warehouse's fixed relational schema; motivated by data scientists' need for feature engineering / ML-ready formats.
- H3. **Reverse ETL** — sending analytical output back into operational systems (e.g., a trained ML model's predictions deployed into production).
- H4. **HTAP (hybrid transactional/analytical processing)** — running OLTP and analytics in one system without ETL; does not replace data warehouses, helps when a single application needs both fast point updates and large scans (e.g., fraud detection).
- H5. Data engineers (integrate operational/analytical systems, own data infra) vs. analytics engineers (shape data for analyst/data-scientist consumption).
- H6. Pros/cons of cloud services — speed of adoption vs. self-hosting cost-effectiveness, vendor lock-in, inability to customize, dependency on vendor for outages/features.
- H7. **Layering of cloud services** — self-hosted software just needs generic OS/CPU/RAM/disk/network; cloud native services build higher-level services on top of lower-level cloud primitives (e.g., Snowflake built on S3).
- H8. **Separation/disaggregation of storage and compute** — cloud VM local disks act like caches (not durable); virtual disks (EBS etc.) are a network-backed service, not a physical disk; object storage suits large files, every I/O is a network call.
- H9. **Multitenancy** — cloud native systems typically share hardware/service across many customers, improving utilization but requiring careful isolation engineering.
- H10. **DevOps/SRE and the cloud-era operations shift** — capacity planning becomes financial planning; performance optimization becomes cost optimization; machine-level ops (provisioning, patching) gives way to service selection/integration/migration.
- H11. **The nine reasons to distribute a system** — inherent distribution, requests between cloud services, fault tolerance/high availability, scalability, latency, elasticity, specialized hardware, legal compliance, sustainability.
- H12. **Serverless / function as a service (FaaS)** — vendor-managed infrastructure, automatic scaling, pay-per-execution billing; trade-offs are execution time limits, restricted runtimes, cold starts; "serverless" still runs on a server.
- H13. **Cloud computing vs. supercomputing (HPC)** — different priorities (throughput/checkpoint-restart vs. continuous availability), different failure handling (stop-and-restart-from-checkpoint vs. never fully stop), different trust models (shared-memory/RDMA vs. isolated/encrypted networks), different topologies (mesh/torus vs. Clos/IP-Ethernet).
- H14. **Data systems, law, and society** — GDPR/CCPA give individuals control over personal data; the "right to be forgotten" creates tension with immutable/append-only architectures; data minimization ("Datensparsamkeit") as a counter-principle to "store everything" big-data thinking; PCI and SOC 2 as business-enforced data-handling standards.

# Definitions (must be able to state precisely)

- data-intensive application, compute-intensive application
- OLTP (online transaction processing), OLAP (online analytical processing), point query
- data warehouse, ETL, ELT, data lake, sushi principle, reverse ETL, HTAP
- system of record, derived data system
- cloud native, IaaS, disaggregation (of storage and compute), multitenant
- DevOps, SRE (site reliability engineer)
- distributed system, node, microservices, SOA (service-oriented architecture), serverless / FaaS
- HPC (high-performance computing)
- GDPR, data minimization (*Datensparsamkeit*), PCI, SOC 2

# Relationships

- R1. The frontend/backend distinction → the backend has the harder data problems (it serves *all* users, not just one) → this is why the rest of the chapter (and book) focuses on backend/server-side data systems.
- R2. OLTP/OLAP distinction (C3) → drives the emergence of the data warehouse (C4) as a separate analytics system → drives ETL/ELT → drives the data lake (H2) once the warehouse's fixed relational schema doesn't fit ML/feature-engineering needs.
- R3. System of record vs. derived data (C5) → explains why warehouses, lakes, caches, and indexes are all "derived" and require a sync process to stay current with their source (previewing Chapter 11's data pipelines).
- R4. Cloud services outsource the *operation* of software (C6) → shifts required skills from machine-level ops toward service selection/integration/migration (H10) → reframes capacity planning as financial planning and performance work as cost optimization.
- R5. Cloud native's disaggregation of storage and compute (C7/H8) → enables elasticity/scaling (one of the nine reasons to distribute, H11) but also adds network-call latency/cost to every storage operation — a direct trade-off, not a pure win.
- R6. The nine reasons to distribute (H11) together with the real problems of distributed systems (C9) justify the chapter's explicit guidance: avoid distributing unless you actually need to (A3).
- R7. Microservices (C10) are one common way to implement distribution (C8), but the chapter frames their main benefit as organizational (independent teams), not technical — echoing the law/society section's point that architecture isn't a purely technical concern (H14).
- R8. GDPR's "right to be forgotten" (H14) conflicts with common architectural patterns like append-only/immutable logs — a concrete, recurring example of law shaping technical design, reinforcing the chapter's overall trade-offs theme (A1/C2).

# Processes / Sequences

- P1. **ETL sequence**: extract (from OLTP systems) → transform (to an analysis-friendly schema, clean it) → load (into the warehouse). **ELT** reorders this: extract → load → transform (transform happens after loading).
- P2. **Data pipeline / "sushi principle" flow**: operational systems → data lake (raw, unmodified) → each consumer transforms the raw data as it individually needs, rather than one shared upfront transform.
- P3. **Build-vs-buy / who-builds–who-runs spectrum**: fully bespoke in-house software → self-hosted off-the-shelf software (on-prem or cloud VM/IaaS) → fully managed cloud service/SaaS. A spectrum, not a binary choice.
- P4. **Traditional vs. cloud-era operations shift**: machine-level tasks (capacity planning, provisioning, patching) → service-level tasks (choosing the right service, integrating services, migrating between services; cost/financial optimization; quota planning).

# Arguments & Principles

- A1. "There is no single best data system" — the chapter's central thesis; a trade-offs framing rather than a best-practices framing.
- A2. "Keep your core competency in-house; outsource routine, common things" — the general build-vs-buy heuristic the chapter applies to cloud adoption.
- A3. "Avoid going distributed unless you need to" — explicit chapter guidance, despite the nine legitimate reasons to distribute (H11); single-node systems are simpler and often cheaper by default, and modern single-node databases (DuckDB, SQLite, KùzuDB) now handle many workloads alone.
- A4. "A database, storage engine, or query language is neither a system of record nor a derived system by itself" — the distinction depends on how a tool is *used*, not the tool itself; caveat on C5.
- A5. "There is no fixed technical checklist for GDPR compliance" / "no fixed way yet to turn legal requirements into technical implementation" — the law-and-society section's own explicit caveat; mirrors A1's trade-offs theme applied to legal compliance.
- A6. Data minimization (*Datensparsamkeit*) runs counter to "big data" thinking (store everything speculatively) — an explicit tension the chapter calls out, not a resolved rule.

# Examples (materially explain concepts — worth being able to cite)

- E1. **Snowflake built on top of Amazon S3** — concrete example of the layering of cloud services (H7): a higher-level cloud native service built on a lower-level primitive.
- E2. **DuckDB, SQLite, KùzuDB** — modern single-node databases cited as evidence that many workloads don't need distribution (supports A3).
- E3. **Fivetran, Singer, Airbyte** — ETL tools for pulling data from external SaaS sources (CRM, email marketing, payments) reachable only through their APIs.
- E4. **Pinot, Druid, ClickHouse** — "product analytics / real-time analytics" systems that run analytical queries inside user-facing products, ingesting in real time vs. traditional OLAP's batch ingestion.
- E5. **TFX, Kubeflow, MLflow** — tooling example for reverse ETL / deploying analytical (ML) output back into production (H3).
- E6. **High-frequency trading** — cited as a workload needing full hardware control, i.e. one of the cases cloud services will *not* replace.
- E7. **Fraud detection** — the canonical HTAP use case: needs both fast single-record updates and large analytical scans within one application (H4).

# Easily Confused Concepts

- X1. **OLTP vs. OLAP** — distinguished by read/write *pattern* and *audience* (point queries by end-user-facing apps vs. aggregate queries by internal analysts), not by transaction size or "importance."
- X2. **Data warehouse vs. data lake** — warehouse: fixed relational schema, good for SQL/BI; lake: schema-flexible, any format, better for ML feature engineering and unstructured data.
- X3. **ETL vs. ELT vs. Reverse ETL** — ETL/ELT differ in *when* transform happens (before vs. after load); Reverse ETL runs in the *opposite direction* entirely, sending analytical output back into operational systems.
- X4. **System of record vs. derived data system** — not an inherent property of a technology; the same database technology can play either role depending on how it's used in a given architecture.
- X5. **Cloud native vs. "just running on a cloud VM"** — cloud native means built to use higher-level, disaggregated cloud services (e.g., object storage); renting a VM (IaaS) still means you administer the software yourself, and is not by itself "cloud native."
- X6. **Reasons to distribute vs. problems with distributing** — the chapter lists nine legitimate reasons to distribute (H11) *and* strongly warns that single-node is simpler/safer by default (A3); don't conflate "there are good reasons sometimes" with "you should usually distribute."
- X7. **Microservices vs. SOA** — microservices are presented as a refinement of service-oriented architecture (SOA), not a wholly separate concept.
- X8. **Serverless** — still runs on a server; the name refers to the *user* not managing server infrastructure, not to the actual absence of servers.
- X9. **HPC/supercomputing vs. cloud computing** — both are large-scale multi-machine computing, but differ in priorities (batch scientific throughput vs. continuous user-facing availability), failure handling (checkpoint-and-restart vs. never fully stopping), and trust model (shared-memory/RDMA vs. isolated/encrypted multi-tenant networks).

# High-Value Details

- D1. OLTP/OLAP comparison table specifics: dataset size (gigabytes–terabytes vs. terabytes–petabytes); query volume (many small vs. few complex); data shown (current state vs. history over time).
- D2. Data warehousing emerged in the late 1980s–early 1990s as analytics separated from OLTP systems.
- D3. GDPR in effect since 2018; CCPA as a similar California law; the EU AI Act adds further AI-specific personal-data rules.
- D4. Cloud-native vs. self-hosted example table: MySQL/PostgreSQL/MongoDB (self-hosted OLTP) vs. AWS Aurora/Azure SQL DB Hyperscale/Google Cloud Spanner (cloud native OLTP); Teradata/ClickHouse/Spark (self-hosted OLAP) vs. Snowflake/BigQuery/Azure Synapse Analytics (cloud native OLAP).
- D5. Cloud virtual disks (Amazon EBS, Azure managed disks, Google persistent disks) typically use 4 KiB blocks; every I/O on a virtual disk is a network call.
- D6. The nine listed reasons to distribute a system, verbatim category names: inherent distribution, requests between cloud services, fault tolerance/high availability, scalability, latency, elasticity, specialized hardware, legal compliance, sustainability.

# Dependencies (must understand X before Y)

- Data-intensive vs. compute-intensive (C1) → before OLTP/OLAP (C3), since operational and analytical systems are both instances of data-intensive applications.
- OLTP vs. OLAP (C3) → before data warehousing (C4) — the warehouse exists specifically to serve OLAP workloads separately from OLTP.
- Data warehousing / ETL (C4) → before the data lake (H2) — the lake is presented as an evolution/alternative once the warehouse's relational model falls short.
- System of record vs. derived data (C5) → before fully understanding *why* warehouses, lakes, and caches are "derived" and need a sync process.
- Cloud vs. self-hosting (C6) → before cloud native architecture (C7) — cloud native is a specific, more advanced way of building on top of cloud services.
- Cloud native / disaggregation (C7) → before separation of storage and compute (H8) — H8 is the detailed mechanism behind the C7 concept.
- Distributed vs. single-node (C8) → before problems with distributed systems (C9) and the nine reasons to distribute (H11) — both build on the base definition.
- Problems with distributed systems (C9) + reasons to distribute (H11) → before "avoid distributing unless you need to" (A3) — the principle synthesizes both.

---
# Importance Legend
Critical = essential to the chapter's core argument. High = important supporting structure. Medium = useful detail/example. Low = color/stat, not core.
