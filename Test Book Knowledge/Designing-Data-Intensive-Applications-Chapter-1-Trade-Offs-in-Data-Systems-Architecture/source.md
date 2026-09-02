---
title: "Chapter 1 — Trade-Offs in Data Systems Architecture"
book: "Designing Data-Intensive Applications, 2nd Edition"
original_file: "Book - Designing Data-Intensive Applications/1. Trade-Offs-in-Data-Systems-Architecture.pdf"
status: source reference — do not edit
style: "Written in controlled technical English (ASD-STE100 principles): short sentences, one idea per sentence, active voice, plain approved-style vocabulary, no filler."
---

# Note on this file

This is a condensed version of Chapter 1 (31 pages). It keeps the
definitions, key claims, and tables you need for testing. It removes
anecdotes, most citations, and filler wording. Each idea is one short
sentence. The original PDF stays the source of truth in the project
folder.

---

## Introduction

- A *data-intensive* application has data management as a main
  challenge. A *compute-intensive* application has computation as the
  main challenge instead.
- Data-intensive challenges: store and process large data volumes,
  manage changes to data, keep data consistent during failures, keep
  services available.
- Common building blocks for data-intensive apps: databases (store
  data), caches (speed up reads), search indexes (find data by
  keyword), stream processing (handle events as they occur), batch
  processing (process large accumulated data periodically).
- There is no single best data system. Every system has trade-offs.
  This chapter teaches you to compare systems and pick the right one
  for your case.
- **Frontend**: client-side code that runs in a browser or mobile app.
  **Backend**: server-side code that handles requests from many users.
  The backend usually has the harder data problems, because it serves
  all users, not just one.
- A backend service normally answers over HTTP. It reads and writes
  data in one or more databases. It may also use caches or message
  queues. Backend application code is usually stateless: it forgets
  the request once it finishes handling it. Any data that must persist
  goes into client storage or server-side data infrastructure.

## Operational Versus Analytical Systems

- Three groups use an organization's data: backend engineers (build
  services), business analysts (create reports for management,
  "business intelligence"/BI), and data scientists (find insights, or
  build features using data analysis and ML/AI).
- Analysts and data scientists both do **analytics**: they read data
  that others generated. They normally do not modify it.
- **Operational systems**: backend services and infrastructure where
  data is created. Application code both reads and writes this data.
- **Analytical systems**: serve analysts and data scientists. They
  hold a read-only copy of the data, optimized for analytics.
- **Data engineers** integrate operational and analytical systems and
  own the data infrastructure. **Analytics engineers** shape data so
  analysts and data scientists can use it more easily.

### Transaction Processing (OLTP) vs. Analytics (OLAP)

- A **transaction** is a group of reads and writes treated as one
  logical unit. (Chapter 8 gives the full definition.)
- An operational system usually looks up a small number of records by
  a key. This is a **point query**. This access pattern is called
  **online transaction processing (OLTP)**.
- An analytical query usually scans many records and computes totals,
  counts, or averages. It does not return individual records. This
  pattern is called **online analytical processing (OLAP)**.

| Property           | Operational (OLTP)            | Analytical (OLAP)                 |
| ------------------ | ----------------------------- | --------------------------------- |
| Main read pattern  | Point queries (fetch by key)  | Aggregates over many records      |
| Main write pattern | Create/update/delete records  | Bulk import (ETL) or event stream |
| Human user         | End user of an app            | Internal analyst                  |
| Machine use        | Check if an action is allowed | Detect fraud patterns             |
| Query type         | Fixed, built into the app     | Ad-hoc, made by analysts          |
| Query volume       | Many small queries            | Few, complex queries              |
| Data shown         | Current state                 | History over time                 |
| Dataset size       | Gigabytes to terabytes        | Terabytes to petabytes            |

- OLTP systems run fixed, pre-written queries. Users normally cannot
  run their own SQL, for security and performance reasons.
- Analytical databases usually let users write their own SQL, or
  generate queries with tools such as Tableau, Looker, or Power BI.
- **Product analytics / real-time analytics** systems (e.g., Pinot,
  Druid, ClickHouse) run analytical queries inside user-facing
  products. They ingest data in real time and answer with low
  latency. Traditional OLAP systems ingest data in batches instead.

### Data Warehousing

- Companies used to run analytics on the same database as OLTP. In
  the late 1980s–early 1990s, they began moving analytics to a
  separate system: the **data warehouse**.
- Reasons to keep analytics off the OLTP systems: data is split
  across many operational systems (**data silos**); OLTP schemas do
  not suit analytics well; analytical queries are costly and slow down
  other users; OLTP systems may sit on a restricted network.
- A data warehouse holds a read-only copy of data from all OLTP
  systems. Getting data in is called **extract–transform–load (ETL)**:
  extract from OLTP, transform to an analysis-friendly schema, clean
  it, then load it. If the transform step happens after loading, this
  is called **ELT** instead.
- Some ETL sources are external SaaS tools (CRM, email marketing,
  payments), reached only through their API. Tools such as Fivetran,
  Singer, or Airbyte do this kind of ETL.
- **HTAP (hybrid transactional/analytical processing)** aims to run
  OLTP and analytics in one system, without ETL. Many HTAP systems
  still combine a separate OLTP part and analytical part internally.
  HTAP does not replace data warehouses; it helps when one application
  needs both fast single-record updates and large analytical scans
  (e.g., fraud detection).
- General trend: as workloads grow, systems become more specialized.

**From data warehouse to data lake**

- Data warehouses use a relational model, good for SQL-based
  analysis. Data scientists often need something different: turning
  raw data into numeric **features** for ML (**feature engineering**),
  or extracting structured information from text or images using
  NLP/computer vision.
- Many data scientists prefer tools such as Pandas, scikit-learn, R,
  or Spark over a data warehouse.
- A **data lake** is a central store for any data that might be useful
  later, loaded from operational systems via ETL. Unlike a warehouse,
  it does not force one file format, data model, or schema. It can
  hold database records (Avro, Parquet), text, images, video, sensor
  data, or anything else. It is usually cheaper too, because it can
  use commodity object storage.
- Data pipelines can send raw data to the lake first, then to the
  warehouse. Each consumer then transforms the raw data as it needs.
  This is called the **sushi principle**: "raw data is better."

**Beyond the data lake**

- Organizations increasingly manage analytics operations and pipeline
  governance (see the DataOps Manifesto), partly driven by privacy
  laws such as GDPR and CCPA.
- Data for analytics increasingly arrives as **event streams**, not
  just files or tables. Stream processing lets analytical systems
  react in seconds, useful for tasks like blocking fraud quickly.
- **Reverse ETL**: sending analytical output back into operational
  systems. Example: an ML model trained on analytical data gets
  deployed to production to generate recommendations. Tools: TFX,
  Kubeflow, MLflow.

### Systems of Record and Derived Data

- **System of record** (source of truth): holds the authoritative
  version of data. New data is written here first. Each fact appears
  once. If another system disagrees with the system of record, the
  system of record is correct by definition.
- **Derived data system**: holds data computed from another system.
  You can rebuild it from the source if you lose it. Examples: caches,
  denormalized values, indexes, materialized views, trained models.
- Derived data duplicates information, but it is often needed for
  fast reads. You can derive many datasets from one source.
- Analytical systems are usually derived data systems. Operational
  services can mix systems of record and derived data (e.g., a
  primary database plus a cache or index).
- A database, storage engine, or query language is neither a system
  of record nor a derived system by itself. The distinction depends
  on how you use the tool, not the tool itself.
- When data in one system depends on data in another, you need a
  process to update the derived data when the source changes. Chapter
  11 covers data pipelines for this.

## Cloud Versus Self-Hosting

- Basic question: build the software in-house, or buy/outsource it?
  Common rule: keep your core competency in-house; outsource routine,
  common things.
- Two decisions in software: who builds it, and who runs it. One end:
  fully bespoke, in-house software. Other end: cloud services or SaaS
  run entirely by a vendor. Middle ground: off-the-shelf software
  (open source or commercial) that you self-host, on your own
  hardware ("on premises") or on a cloud VM (**IaaS**).

### Pros and Cons of Cloud Services

- Using a cloud service outsources the operation of that software.
- Self-hosting is often cheaper if you already have the skills and
  your load is predictable.
- Adopting a cloud service is often faster if you do not already know
  how to run the system. It avoids the cost of hiring and training
  staff to maintain it. You still need an operations team even in the
  cloud.
- A cloud provider may give better service due to experience across
  many customers. Self-hosting lets you tune the system for your own
  workload; a cloud provider usually will not customize for you.
- Cloud services help most when load varies a lot. You can scale
  resources up or down instead of leaving idle machines provisioned
  for peak load. Example: large analytical queries need many
  resources briefly, then sit idle.
- Downsides of cloud services: you cannot add missing features
  yourself; you must wait for outages to be fixed by the vendor;
  diagnosing performance problems is hard without access to internals;
  if the vendor raises prices, drops the service, or changes it
  badly, you may be forced to migrate (**vendor lock-in**, worse
  without a standard API); political conflicts between countries can
  cut off access; you must trust the provider to keep data secure.
- Despite these risks, more organizations build on cloud services, or
  use a hybrid mix. Cloud services will not replace all in-house
  systems: some, like high-frequency trading, need full hardware
  control.

### Cloud Native System Architecture

- **Cloud native**: an architecture built to take advantage of cloud
  services. Cloud native systems can outperform self-hosted systems
  on the same hardware, recover from failure faster, scale resources
  faster, and support larger datasets.

| Category         | Self-hosted                 | Cloud native                                              |
| ---------------- | --------------------------- | --------------------------------------------------------- |
| Operational/OLTP | MySQL, PostgreSQL, MongoDB  | AWS Aurora, Azure SQL DB Hyperscale, Google Cloud Spanner |
| Analytical/OLAP  | Teradata, ClickHouse, Spark | Snowflake, Google BigQuery, Azure Synapse Analytics       |

**Layering of cloud services**

- Most self-hosted software just needs a normal OS, filesystem, and
  network — generic CPU, RAM, disk, and IP.
- In the cloud, this software runs on VMs (instances) with allocated
  CPU, memory, disk, and bandwidth. Instances provision faster than
  physical machines but you still administer the software yourself.
- Cloud native services instead build higher-level services on top of
  lower-level cloud services. Example: object storage (Amazon S3,
  Azure Blob Storage, Cloudflare R2) stores large files, spreads data
  across many machines automatically, and keeps data safe even if a
  machine fails. Example: Snowflake (a cloud data warehouse) is built
  on top of S3.
- Higher-level systems fit particular use cases well; if your need
  matches, use them. If no high-level system fits, you must build
  from lower-level parts yourself.

**Separation of storage and compute**

- Traditional model: disk storage is durable. RAID protects against a
  single disk failure, transparently to the application.
- Cloud VM local disks act more like a cache: they disappear if the
  instance fails or is replaced.
- Cloud **virtual disks** (Amazon EBS, Azure managed disks, Google
  persistent disks) can move between instances. They are not physical
  disks; they are a service that behaves like a disk (a block
  device, usually 4 KiB blocks). Every I/O on a virtual disk is a
  network call, so it is sensitive to network problems.
- Cloud native services avoid virtual disks and use dedicated storage
  services instead. Object storage (e.g., S3) suits large files.
  Individual database values are usually smaller, so cloud databases
  store small values separately and pack larger blocks into object
  storage.
- In cloud native systems, storage and compute are **disaggregated**
  (separated). Example: S3 only stores files; analyzing that data
  needs a separate compute step, which means transferring data over
  the network.
- Cloud native systems are often **multitenant**: many customers share
  the same hardware and service, rather than each getting a separate
  machine. This improves hardware use and scaling, but needs careful
  engineering so one customer cannot affect another's performance or
  security.

### Operations in the Cloud Era

- Traditional roles: database administrators (DBAs), system
  administrators (sysadmins). **DevOps** merges development and
  operations into one team. **Site reliability engineers (SREs)** are
  Google's version of this role.
- Operations delivers services reliably and keeps a stable production
  environment (monitoring, diagnosing problems). Self-hosted
  operations traditionally means machine-level work: capacity
  planning, provisioning, patching.
- Cloud APIs hide individual machines. Example: cloud storage uses
  metered billing instead of fixed-size disks, so you pay for space
  used, not planned in advance.
- The DevOps/SRE approach favors: automation over manual one-off
  jobs; ephemeral VMs over long-running servers; frequent updates;
  learning from incidents; keeping system knowledge as people change
  roles.
- Cloud shifted operations toward: choosing the right service,
  integrating services, migrating between services. Capacity planning
  becomes **financial planning**; performance optimization becomes
  **cost optimization**. Cloud services also have resource limits
  (quotas) you must plan around.
- Integrating many cloud services from many vendors is still mostly
  manual work; no full standard exists yet. Security, monitoring, and
  diagnosing outages still cannot be fully outsourced to the cloud.

## Distributed Versus Single-Node Systems

- A **distributed system** has several machines that communicate over
  a network. Each participating process is a **node**.
- Reasons to distribute a system:
  - **Inherent distribution** — multiple users on separate devices
    must communicate over a network.
  - **Requests between cloud services** — data in one service, needed
    in another, must move over the network.
  - **Fault tolerance / high availability** — extra machines give
    redundancy; if one fails, another takes over.
  - **Scalability** — spread growing load across multiple machines.
  - **Latency** — put servers near users worldwide to reduce delay.
  - **Elasticity** — scale up or down with demand, and pay only for
    what you use; harder on one fixed machine.
  - **Specialized hardware** — match hardware to workload (e.g., disk-
    heavy machines for object storage, GPU machines for ML training).
  - **Legal compliance** — data residency laws may require storing
    and processing data inside a specific country.
  - **Sustainability** — run jobs where and when renewable power is
    available, to cut emissions and cost.

### Problems with Distributed Systems

- Every network call can fail: the network may break, or the service
  may be overloaded or crash. A request can time out with no way to
  know if it was received. Retrying may not be safe. (Chapter 9
  covers this in depth.)
- A network call is much slower than a call inside one process. For
  large data, it is often faster to bring the computation to the data
  than to move the data to the computation. More nodes are not always
  faster: a single-threaded program on one machine can beat a
  100-plus-core cluster in some cases.
- Troubleshooting a distributed system is hard. **Observability**
  covers the techniques for this: collecting and querying data about
  system execution, at both high-level and per-event detail. Tracing
  tools: OpenTelemetry, Zipkin, Jaeger.
- Keeping data consistent across many services is the application's
  job once each service has its own database. **Distributed
  transactions** (Chapter 8) can help, but are rarely used in
  microservices because they conflict with keeping services
  independent, and many databases do not support them.
- Because of all this, doing a task on one machine is often simpler
  and cheaper than building a distributed system. Modern single-node
  databases (DuckDB, SQLite, KùzuDB) now handle many workloads alone.

### Microservices and Serverless

- The common way to distribute a system: split it into clients and
  servers, usually communicating over HTTP. One process can be both a
  server and a client.
- This pattern was called **service-oriented architecture (SOA)**,
  refined into **microservices**. Each microservice has one clear
  purpose, exposes an API, and is owned by one team.
- Benefits of splitting into services: independent updates per
  service; hardware matched to each service's needs; implementation
  changes hidden behind the API. Each service usually keeps its own
  database, so its schema is not part of its public API.
- Downsides: testing one service needs the other services it depends
  on running too; each service needs its own deployment, scaling,
  logging, monitoring, and alerting infrastructure (Kubernetes is a
  common tool for this); evolving APIs is hard, because clients
  expect certain fields, and problems often surface late (in staging
  or production). Standards like OpenAPI and gRPC help manage this.
- Microservices mainly solve a people problem: letting teams work
  independently. Useful in a large company; likely unneeded overhead
  in a small one.
- **Serverless / function as a service (FaaS)**: the cloud vendor
  manages the infrastructure. Resources scale automatically with
  incoming requests. You pay only for the code's actual run time
  (metered billing for code execution). Trade-offs: execution time
  limits, restricted runtimes, and slow "cold start" times. "Serverless"
  still runs on a server; it just may run on a different server each
  time. Services like BigQuery and some Kafka offerings also use the
  term "serverless" for autoscaling, usage-based billing.

### Cloud Computing Versus Supercomputing

- **High-performance computing (HPC)** / supercomputing is another way
  to build large-scale systems, with different priorities than cloud
  computing.
- Supercomputers run compute-heavy scientific tasks (weather
  forecasting, climate modeling, molecular dynamics). Cloud computing
  runs online services that must stay highly available for users.
- Supercomputers checkpoint state to disk; on node failure, they
  often stop the whole cluster, fix the node, and restart from the
  checkpoint. Cloud services avoid stopping entirely, since they must
  keep serving users.
- Supercomputer nodes usually communicate via shared memory and RDMA
  (fast, low latency, high trust assumed). Cloud networks are shared
  by untrusting organizations, so they need stronger security: VM
  isolation, encryption, authentication.
- Cloud datacenter networks typically use IP/Ethernet in Clos
  topologies for high bandwidth. Supercomputers often use specialized
  topologies (meshes, toruses) suited to known communication patterns.
- Cloud nodes can span multiple geographic regions. Supercomputer
  nodes are usually all close together.

## Data Systems, Law, and Society

- Data system architecture depends on more than technical goals: it
  also carries a responsibility to society, especially for systems
  that store data about people.
- Since 2018, the **GDPR** gives EU residents legal control over
  their personal data. Similar laws exist elsewhere (e.g., CCPA in
  California). AI-specific rules (e.g., the EU AI Act) add further
  limits on personal data use.
- Automated systems increasingly decide things with real consequences:
  loan approval, insurance, job interviews, criminal suspicion.
  Everyone building such systems shares responsibility for the
  ethical impact and legal compliance of their decisions.
- Legal rules affect system design directly. Example: GDPR's "right
  to be forgotten" requires deleting personal data on request, but
  many systems use immutable structures like append-only logs. This
  raises hard engineering questions: how to delete data inside an
  "immutable" file, and how to remove data already used to train
  derived datasets like ML models.
- There is no fixed technical checklist for GDPR compliance. The law
  sets high-level principles, not specific technologies, because
  technology changes fast.
- Storing data has a real cost beyond hosting fees: risk of data
  breaches, legal fines, and reputational damage. Governments may
  also compel companies to hand over data. In places where certain
  behavior is criminalized (example: seeking an abortion, or being
  gay, depending on jurisdiction), stored data (like location or IP
  logs) can create real safety risks for users.
- **Data minimization** (German: *Datensparsamkeit*): only store data
  you actually need, and delete it after. This runs counter to "big
  data" thinking (store everything speculatively), but matches GDPR's
  rule that personal data may be collected only for a specific stated
  purpose and kept only as long as needed.
- Businesses also enforce data-handling standards: **PCI** standards
  for payment processors, **SOC 2** standards often required of
  software vendors, both checked by independent audits.
- The core task: balance business needs against the rights of the
  people whose data you collect and process. (Chapter 14 covers ethics
  and legal compliance, including bias and discrimination, in depth.)

## Summary

- This chapter's theme: most architecture questions have several
  valid answers, each with trade-offs, not one right answer.
- Operational (OLTP) systems and analytical (OLAP) systems differ in
  data type, access pattern, and audience. Data warehouses and data
  lakes receive data from operational systems via ETL. (Chapter 4
  covers why operational and analytical systems use different
  internal data layouts.)
- Cloud services and self-hosted software each fit different
  situations; which is cheaper depends on your case. Cloud native
  design is changing system architecture, notably by separating
  storage from compute.
- Cloud systems are inherently distributed. Distributed systems bring
  real trade-offs versus single machines; avoid going distributed
  unless you need to. (Chapter 9 covers distributed system challenges
  in depth.)
- A data system's architecture must also account for privacy law and
  the rights of the people whose data it holds — a factor engineers
  often overlook. There is no fixed way yet to turn legal requirements
  into technical implementation, but keep the question in mind.
