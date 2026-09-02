# Knowledge Mastery Tracker

## Chapter
**Book:** Designing Data-Intensive Applications, 2nd Edition (Martin Kleppmann)
**Chapter:** 1 — Trade-Offs in Data Systems Architecture

## Overall Progress
- Questions attempted: 36
- Correct: 17
- Mostly correct: 8
- Partially correct: 11
- Incorrect: 0
- Don't know: 0
- Overall demonstrated mastery: Strong — final light-check pass complete. 20 of 24 concepts fully Mastered or Strong. Two genuinely sticky items remain, flagged for a future spaced check rather than immediate re-drilling: H2 (naming feature engineering/NLP-CV specifically) and H8 (naming "every I/O is a network call"). H7 is one clause short of full resolution (Snowflake-still-handles-compute).

---
# Knowledge Gaps

| ID | Topic | Concept | Gap | Importance | Severity | Status | Attempts | Correct |
|---|---|---|---|---|---|---|---:|---:|
| G001 | Introduction | Backend vs. frontend data-problem framing (part of C1) | Correctly ID'd data-intensive vs. compute-intensive and that the book focuses on data-intensive, but explained "backend has the harder problem" via OLTP/OLAP reasoning instead of the chapter's actual stated reason (backend serves *all* users, not just one). | Critical | Low-Medium | ✅ Resolved (Q033) | 2 | 1 |
| G002 | Operational vs. Analytical Systems | OLTP/OLAP human-user mapping (C3) | Placed business analysts on the OLTP side; text groups business analysts with data scientists on the OLAP/analytics side, and OLTP's actual human user is the app's *end user*, not an internal role at all. | Critical | Medium | ✅ Resolved (Q011) | 2 | 1 |
| G003 | Operational vs. Analytical Systems | Dataset size axis (C3/H1) | Answered "dataset size" with time-span-of-data-queried (e.g. one year of trends) instead of actual data volume (OLTP: gigabytes–terabytes; OLAP: terabytes–petabytes) — conflated two different axes of the comparison table. | High | Medium | ✅ Resolved (Q011) | 2 | 1 |
| G004 | Cloud Native System Architecture | Cloud native definition (C7) | Defined "cloud native" as elastic/auto-scaling compute + serverless, rather than the chapter's actual definition (built to use higher-level, disaggregated cloud services, e.g. object storage instead of a virtual disk). Elasticity is a *benefit*, not the definition — exactly the X5 confusion flagged in knowledge-map.md. | Critical | Medium-High | ✅ Resolved (Q012, new example) | 2 | 1 |
| G005 | Distributed Versus Single-Node Systems | Elasticity vs. scalability (H11) | Described "elasticity" using scalability's definition (provision more resources under higher load) — missed elasticity's distinguishing trait: scaling *down* too, paying only for what's used at any moment. Chapter lists these as two separate reasons to distribute. | High | Medium | ✅ Resolved (Q029) | 2 | 1 |
| G006 | Problems with Distributed Systems | Distinct problems + failure mechanism (C9) | Gave one problem (latency) elaborated twice rather than two distinct problems; missed the chapter's key mechanism — a network call can fail/time out with *no way to know* if it was received, making retries potentially unsafe. Also missed observability and cross-service data consistency as distinct problems. | Critical | High | ✅ Resolved (Q013, new example — answer exceeded model answer's precision) | 2 | 1 |
| G007 | Data Warehousing (data lake) | Data lake's specific driving need (H2) | Explained the schema-flexibility structural difference correctly, but described the driving need generically ("manipulation and predictions") instead of the chapter's named specific mechanisms: feature engineering and NLP/CV-based structured extraction from unstructured data. Retested Q035 — still generic, gap persists after 2 attempts. | High | Low-Medium | 🟡 Developing (2 attempts, unresolved) | 2 | 0 |
| G008 | Data Warehousing (reverse ETL) | Reverse ETL example (H3) | Direction (OLAP→OLTP) fully correct, but the explicitly requested chapter example (ML model trained on analytical data, deployed to production for recommendations) was omitted entirely. | High | Low | ✅ Resolved (Q034) | 2 | 1 |
| G009 | Operational vs. Analytical Systems | Analytics engineer role (H5) | Described analytics engineers as producing business insights themselves, when the chapter's actual line is that they *shape/prepare* data so analysts and data scientists (who produce the insights) can use it more easily — conflated a data-prep role with the insight-producing roles it supports. | High | Medium | ✅ Resolved (Q027 — role definition correct; minor "data analyst" vs. "data scientist" naming slip remains, tracked as G016) | 2 | 1 |
| G016 | Operational vs. Analytical Systems | Data scientist naming slip (H5) | Said "data analyst" instead of "data scientist" as the second insight-producing role (alongside business analyst). Minor terminology substitution between similar-sounding real-world job titles. | Medium | Low | ✅ Resolved (Q028) | 2 | 1 |
| G010 | Cloud Versus Self-Hosting | Vendor lock-in (H6) | Q18: skipped entirely. Q19: described same-vendor adaptation instead of cross-vendor switching cost. Q30 (concrete "Vendor A → Vendor B" scenario): fully correct — resolved on 3rd attempt. | Critical | High | ✅ Resolved (Q030, concrete scenario) | 3 | 1 |
| G011 | Cloud Native System Architecture | Layering scope overreach (H7) | Said Snowflake-on-S3 means it "doesn't need to provision its own memory, CPU, etc." — S3 abstracts *storage* specifically; Snowflake still fully provisions and manages its own compute. Retested Q035 — storage-abstraction half now correct, but "Snowflake still handles compute" half not stated. | High | Low | 🟡 Developing (improved, half-resolved) | 2 | 0 |
| G012 | Cloud Native System Architecture | Virtual disk mechanism (H8) | Correctly said EBS isn't a physical disk, but stayed vague ("like any other server sitting independently") instead of naming the two specific defining traits: every I/O is a network call (network-sensitivity), and it can move between instances (portability). Retested Q035 — portability roughly landed, "every I/O is a network call" still not named, substituted with an unrelated true fact (persists across restarts). | High | Medium | 🟡 Developing (2 attempts, mechanism still missing) | 2 | 0 |
| G013 | Operations in the Cloud Era | Capacity planning reframing (H10) | Said "capacity planning becomes redundancy planning" — the chapter's actual term is **financial planning**. Redundancy planning is a different, unrelated concept (fault tolerance). A genuine factual substitution, not just imprecision. | High | Medium | ✅ Resolved (Q031) | 2 | 1 |
| G014 | Cloud Computing Versus Supercomputing | Networking topology inverted (H13) | Assigned "mesh" topology to cloud computing; the chapter assigns mesh/torus topologies to **supercomputers** and Clos/IP-Ethernet to **cloud** datacenters — inverted. Also the trust-model dimension (explicitly requested) was omitted entirely: supercomputer nodes assume high trust (shared memory/RDMA), cloud networks assume low trust between tenants (isolation/encryption/auth). | High | Medium | ✅ Resolved (Q032) | 2 | 1 |
| G015 | Data Systems, Law, and Society | GDPR-immutability tension (H14) | Restated GDPR's deletion requirement generally instead of the chapter's specific named tension: immutable/append-only architectures colliding with deletion requests, and the harder version — data already baked into a trained ML model. | High | Medium | ✅ Resolved (Q036) | 2 | 1 |

---
# Concept Mastery

| Concept | Importance | Recall | Explanation | Connection | Application | Overall |
|---|---|---|---|---|---|---|
| C1 Data-intensive vs. compute-intensive | Critical | 🟢 good | 🟢 good (backend "serves all users" framing correctly recalled on retest) | — | — | Strong |
| C2 "No single best data system" thesis | Critical | 🟢 good | 🟢 good | 🟢 good (linked to legal/H14 unprompted) | — | Strong |
| C3 OLTP vs. OLAP | Critical | 🟢 good | 🟢 good (both Q3 gaps corrected on retest, Q11) | — | — | Strong |
| C4 Data warehousing | Critical | 🟢 good (all 4 reasons now recalled) | 🟢 good | — | — | Strong |
| C5 System of record vs. derived data | Critical | 🟢 good (derived-data definition now recalled) | 🟢 good | — | — | Strong |
| C6 Cloud services vs. self-hosting | Critical | 🟢 good | 🟢 good (examples slightly off-target) | — | — | Strong |
| C7 Cloud native architecture | Critical | 🟢 good (correct definition on fresh, unseen example) | 🟢 good | — | — | Strong |
| C8 Distributed vs. single-node systems | Critical | 🟢 good (minor "node" scope narrowness) | 🟡 partial (elasticity/scalability blurred) | — | — | Developing |
| C9 Problems with distributed systems | Critical | 🟢 excellent (broke mechanism into 3 concrete cases, unprompted) | 🟢 good | — | — | Strong |
| C10 Microservices | Critical | 🟢 good | 🟢 good (core "people problem" framing nailed) | — | — | Strong |
| H1 Point vs. aggregate query table | High | 🟢 good (all remaining axes now covered: query type, machine use, plus dataset size/query volume via C3) | — | — | — | Strong |
| H2 Data lake | High | 🟢 good (structural difference correct) | 🔴 weak (2 attempts, still can't name feature engineering/NLP-CV specifically) | — | — | Developing |
| H3 Reverse ETL | High | 🟢 good | 🟢 good (recommendations example now correctly recalled) | — | — | Strong |
| H4 HTAP | High | 🟢 good | 🟢 good (all clauses answered) | — | — | Strong |
| H5 Data engineers vs. analytics engineers | High | 🟢 good | 🟢 good (fully resolved: correct roles named, correct analytics-engineer role, concrete example) | — | — | Strong |
| H6 Pros/cons of cloud services | High | 🟢 good | 🟢 good (vendor lock-in resolved on 3rd attempt via concrete scenario) | — | — | Strong |
| H7 Layering of cloud services | High | 🟢 good | 🟡 partial (storage abstraction now correctly scoped; "Snowflake still handles compute" half still unstated) | — | — | Developing |
| H8 Separation of storage and compute | High | 🟢 good (local disk ephemerality) | 🔴 weak (2 attempts, "every I/O is a network call" still not named) | — | — | Developing |
| H9 Multitenancy | High | 🟢 good | 🟢 good | — | — | Strong |
| H10 DevOps/SRE cloud-era ops shift | High | 🟢 good (financial planning correctly recalled on retest) | 🟢 good | — | — | Strong |
| H11 Nine reasons to distribute | High | 🟢 good (3/9 named + elasticity/scalability now correctly distinguished) | — | — | — | Strong |
| H12 Serverless / FaaS | High | 🟢 good | 🟢 good | — | — | Strong |
| H13 Cloud computing vs. supercomputing | High | 🟢 excellent | 🟢 good (topology + trust model both correctly recalled on retest) | — | — | Strong |
| H14 Data systems, law, and society | High | 🟢 good | 🟢 good (immutability/ML-model tension now correctly named) | — | — | Strong |

*(Medium/Low items and Definitions/Examples/Easily-confused items from knowledge-map.md are tracked ad hoc within Knowledge Gaps and the Question Log as they come up, rather than pre-listed here.)*

---
# Question Log

## Q001
**Date:** 2026-09-02
**Topic:** Introduction
**Concept:** C1 — Data-intensive vs. compute-intensive applications
**Difficulty:** Level 1 (Recall)
**Question:** The chapter opens by splitting applications into two categories based on what's actually hard about them. What's the distinction between a *data-intensive* application and a *compute-intensive* application? Which one does the chapter (and the book) focus on almost entirely, and why does the author say the backend specifically (not frontend) carries the harder version of that problem?

### My Answer
> "a data-intensive application has data management as its main challenge (e.g. lots of data to process, churn, analyse from) whereas a compute-intensive application has computation as its main challenge (e.g. needing to perform a lot of math computations on numbers). the book focuses almost entirely on data-intensive application and backend carries the harder version of the problem because the most if not all of the data is typically stored in the backend and it being handled either in OLTP (e.g. users shopping on an ecommerce site) or OLAP (e.g. data scientists needing to perform huge computations across huge datasets)."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Correctly defined data-intensive (data management is the main challenge) vs. compute-intensive (computation is the main challenge), with reasonable own examples.
- Correctly identified that the book focuses on data-intensive applications.
- Correctly identified backend (not frontend) as carrying the harder data problem.

### What I Missed
- The chapter's actual stated reason backend is harder: the backend serves *all* users (many concurrent users/requests), while frontend code runs client-side for just one user's device. That's a scale/concurrency argument, not a "where is data stored" or OLTP/OLAP argument.
- Reached for OLTP/OLAP to justify the claim — a real and useful distinction, but it's introduced later in the chapter (C3) and isn't the reason the text gives at this point. Using it here is a plausible-sounding substitution, not the textual answer.

### Model Answer
> **Data-intensive**: the bottleneck is data — volume, consistency, availability (e.g. an order-management system). **Compute-intensive**: the bottleneck is CPU/GPU cycles per unit of data (video encoding, physics simulation, model training). Most "AI apps" people build today are thin data-intensive wrappers around a compute-intensive model call — worth distinguishing when deciding where engineering effort actually goes. The book focuses almost entirely on data-intensive systems. Backend carries the harder version of the problem specifically because it's server-side code fanned out across *every* concurrent user — one bad query plan degrades thousands of sessions, not one. Frontend is client-side, blast radius of a single device. This asymmetry is also why backend engineers reach for connection pooling, read replicas, and caching layers a frontend never needs, and why backend on-call carries disproportionate weight. (OLTP vs. OLAP is a real distinction but it's about *access pattern inside* the backend — don't conflate it with the backend/frontend split itself.)

### Knowledge Gap
Tends to reach for a later, more specific concept (OLTP/OLAP) to explain an earlier, more general claim (backend > frontend difficulty), when the text's actual reasoning is simpler (scale/concurrency: many users vs. one). Worth watching whether this pattern — substituting a plausible but different mechanism for the chapter's actual stated one — recurs on other questions.

### Memory Priority
Medium

### Follow-up Required
Not urgent — the core C1 definitions landed solidly. Revisit only if the "reach for a later concept instead of the stated reason" pattern shows up again.

## Q002
**Date:** 2026-09-02
**Topic:** Introduction
**Concept:** C2 — "No single best data system" thesis
**Difficulty:** Level 2 (Explanation)
**Question:** The chapter lists several building blocks for data-intensive apps — databases, caches, search indexes, stream processing, batch processing — then makes a claim that sets up the whole chapter (and arguably the whole book). What's that central claim, and what does it actually mean for how you're supposed to *use* this chapter — i.e., what is it training you to do, if not to memorize "the right database for X"?

### My Answer
> "The central claim is that there is no one size fit all system for all problems. The type of system that we design is basically based on the problem that we have on hand. What this means is we have to constantly perform trade-offs of the different services or offerings out there to basically serve our business needs, be it in terms of performance, cost, legal requirements, etc."

### Assessment
🟢 Correct

### What I Got Right
- Correctly stated the central thesis: no single best/one-size-fits-all data system.
- Correctly explained the practical implication: design is driven by the specific problem at hand, via trade-off comparison rather than a universal "best" answer.
- Named concrete trade-off dimensions (performance, cost, legal requirements) — the legal-requirements mention connects forward to the chapter's law-and-society section (H14), unprompted.

### What I Missed
- Nothing material. Could optionally have named this explicitly as a "trade-offs framework" the chapter is teaching (vs. a fact list), but the substance was already present in the answer.

### Model Answer
> There is no single best data system — every system trades off along axes like consistency, latency, throughput, cost, operational complexity, and vendor lock-in. The chapter isn't handing you a lookup table ("use Postgres for X, Mongo for Y") — it's training you to interrogate *your specific* read/write pattern, scale, and team's operational maturity before picking anything. This is the practical difference between a senior and junior engineer: junior reaches for whatever's trendy or whatever they used last time; senior can articulate *why* a boring choice (Postgres for 90% of workloads) beats a shiny one, and can tell you exactly when the boring choice will break. It's also why "what's the best database?" is a red flag in an interview — the correct response is clarifying questions, not a product name. This lens (compare trade-offs, don't rank tools) is what the rest of the chapter's comparisons — OLTP vs. OLAP, cloud vs. self-hosted, distributed vs. single-node — are meant to be read through.

### Knowledge Gap
None.

### Memory Priority
Low (already solid)

### Follow-up Required
No.

## Q003
**Date:** 2026-09-02
**Topic:** Operational Versus Analytical Systems
**Concept:** C3 — OLTP vs. OLAP
**Difficulty:** Level 2 (Explanation)
**Question:** You already reached for OLTP/OLAP once (in Q1) to explain something else — let's test it directly now. Define OLTP and OLAP properly: who uses each, what does a "point query" mean vs. what OLAP queries typically do, and — pick one axis from the chapter's comparison table that isn't just "who uses it" — how do they differ in query volume and dataset size?

### My Answer
> "OLTP means Online Transaction Processing and OLAP stands for Online Analytical Processing. For OLTP, the person using it is typically business analyst and also software engineers who have to deal with database schemas and whatnot. For OLAP, who uses it is basically data scientist. With respect to how they differ in query volume and dataset size, OLAP typically deals with a smaller query but the query spends a lot of data. For example, the data scientists may want to know the trends of product purchases over the course of a year and across all different type of product categories. And the data set size may spend in this case one year versus for OLTP, the business analyst is typically more concerned about and doesn't need to have a view of all the data that exists within the entire company dataset. Point Query just means getting a list of data records from the database via a single key."

### Assessment
🟠 Partially Correct

### What I Got Right
- Correct full names for both acronyms.
- Query volume shape for OLAP directionally right: fewer/larger-scan queries vs. many small ones.
- Point query is close: fetch-by-key is the right mechanism, just imprecise on "how many records."

### What I Missed
- **Human user mapping inverted.** The chapter's table puts OLTP's human user as the app's *end user* (e.g. someone shopping, checking a balance) — not an internal role at all. Business analysts belong on the **OLAP** side, explicitly grouped with data scientists in the text ("analysts and data scientists both do analytics"). Placed business analysts on OLTP instead, and OLAP was only credited to data scientists (missing analysts).
- **Dataset size axis answered as time span instead of data volume.** The chapter's dataset-size axis is actual data volume — OLTP: gigabytes–terabytes; OLAP: terabytes–petabytes. Describing "one year of trend data" is a different axis (time range queried), not data volume.
- Point query: it's a small number of records (often one) fetched **by key**, not "a list of records" — minor imprecision, not a major gap.

### Model Answer
> **OLTP**: operational access pattern — point queries by key, touching a handful of rows (e.g. "fetch this user's cart"). Powers the app end-users interact with directly. Typically Postgres/MySQL/DynamoDB-class engines, gigabytes-to-terabytes, many small concurrent queries, sub-10ms latency expectations. **OLAP**: analytical access pattern — full-table or columnar scans computing aggregates, not individual rows ("revenue by region last quarter"). Serves internal analysts and data scientists — the chapter groups them together as both doing "analytics," distinct from the backend engineers who build the OLTP side. Typically Snowflake/BigQuery/ClickHouse-class engines (column-oriented, not row-oriented — that's *why* they're fast at scans and slow at point lookups), terabytes-to-petabytes, few but expensive queries. The classic production incident: someone runs an ad-hoc analytical query directly against the OLTP read replica, it triggers a full table scan, and it takes down checkout for real users — precisely why the OLTP/OLAP split (and later, the warehouse) is a hard architectural boundary, not a nice-to-have.

### Knowledge Gap
Two related mix-ups: (1) assigning "business analyst" to the wrong side of the OLTP/OLAP split, and (2) conflating the table's "dataset size" axis (data volume) with a query's time window (a different, unrelated axis). Both suggest the OLTP/OLAP comparison table (H1) needs a dedicated re-test rather than assuming it's covered by having used the acronyms correctly elsewhere.

### Memory Priority
Critical

### Follow-up Required
Yes — retest C3/H1 specifically (ideally via the full comparison table, all 8 rows) after other material, not immediately.

## Q004
**Date:** 2026-09-02
**Topic:** Data Warehousing
**Concept:** C4 — Data warehousing
**Difficulty:** Level 2 (Explanation)
**Question:** Companies used to run analytics directly on their OLTP database, then moved analytics into a separate system starting in the late '80s/early '90s. Name at least two of the reasons the chapter gives for making that split, and walk through what ETL actually does — what are the three steps, and what's the one-word difference that turns ETL into ELT?

### My Answer
> "I think it's because of the rapid increase of data being collected and the OLTP database is not designed to perform a query across so much data set as it is meant to serve the needs of the end users instead. if the analytics team were to perform the analytics directly on the OLTP database and there are lots of complex queries it would definitely be a performance hit on the users using the website that requires only point queries. the reason there is such a process is because the way the data is being stored that is optimum for the analytics team to perform the necessary analytics is different from the form that the data is being stored in the OLTP database that is more optimized to point queries. if there is a difference in structure and schema there needs to be a phase whereby we extract the data from the OLTP database transform it to make it suitable for the OLAP database and then load it the difference between ETL and ELT is that for ELT we immediately just extract and load the data from the OLTP straight to the OLAP so that we have actual raw data that could be useful ... to play around with instead of having transformed data."

### Assessment
🟡 Mostly Correct

### What I Got Right
- **Performance impact** reason matched the text exactly: analytical queries are costly and slow down other (end) users.
- **Schema mismatch** reason matched the text exactly: OLTP's schema, optimized for point queries, isn't suited to analytics.
- ETL's 3 steps correctly identified: extract (from OLTP) → transform (to fit target schema) → load.
- ETL vs. ELT distinction conceptually correct despite garbled wording: ELT loads raw data first and defers transform, vs. ETL transforming before loading.

### What I Missed
- The "rapid increase in data volume" framing isn't one of the chapter's four listed reasons (data silos, schema mismatch, query cost/slowdown, restricted network) — a plausible-sounding but non-textual addition, echoing the same pattern seen in Q001 (G001).
- Didn't name the other two textual reasons (data silos — data spread across many operational systems; OLTP systems sitting on a restricted network) — not required since "at least two" was asked, but worth knowing all four exist.
- Called the ETL/ELT destination "the OLAP" — loose terminology; the destination is the **data warehouse**, and OLAP is the query pattern run against it, not a system's proper name.

### Model Answer
> Reasons to split analytics off OLTP (any two): data silos (data spread across many operational systems — Salesforce, Stripe, your Postgres primary, etc.), OLTP schemas don't suit analytics (normalized for write-consistency, terrible for scanning), analytical queries are costly and slow down other users, OLTP systems may sit on a restricted network analysts can't reach. **ETL**: extract (pull from OLTP) → transform (reshape into an analysis-friendly schema) → load — historically done in a separate transform cluster (Informatica, SSIS) because warehouse compute was too expensive to waste on transforms. **ELT** flips the order — extract → load raw → transform *inside* the warehouse — which is why ELT won in the cloud era: warehouse compute (Snowflake/BigQuery) got cheap and elastic, so it's simpler to dump raw data in and transform with SQL/dbt than maintain a separate pipeline. If you're setting this up today, default to ELT + dbt unless you have a specific reason not to.

### Knowledge Gap
Recurring pattern (also seen in G001): substituting a plausible, self-generated reason for one of the text's actual stated reasons, even when the self-generated one isn't wrong per se. Also a minor terminology looseness treating "OLAP" as a system name rather than a query pattern.

### Memory Priority
Medium

### Follow-up Required
Not urgent — core ETL/ELT mechanics and two of four reasons landed correctly. Worth a later check specifically on the two un-mentioned reasons (data silos, restricted network) and the OLAP-as-pattern-not-system distinction.

## Q005
**Date:** 2026-09-02
**Topic:** Systems of Record and Derived Data
**Concept:** C5 — System of record vs. derived data
**Difficulty:** Level 2 (Explanation)
**Question:** Two definitions, then a nuance that trips people up: what makes something a "system of record" vs. "derived data," and — the chapter is explicit about this — is that distinction a property of the technology (e.g. "a database is always a system of record, a cache is always derived") or something else? What determines which one a given system is, in a specific architecture?

### My Answer
> "What determines a system of record is if that record is the source of truth for anything. This data could be sitting in a database, a cache, piece of paper, or file, whatever. But so long that is the main source of truth that becomes a system of record. The distinction is not a property of a technology, rather is a property of the business requirements and circumstances that surrounds the data."

### Assessment
🟡 Mostly Correct

### What I Got Right
- System of record correctly defined as the source of truth, on any medium (database, cache, paper, file).
- The key nuance nailed precisely and stated in the chapter's own terms: the distinction is not a property of the technology, but depends on business context/usage.

### What I Missed
- Only answered half the question: never defined **derived data** (data computed/copied from another system, always rebuildable from the source — e.g. caches, denormalized values, indexes, materialized views, trained models).
- Didn't mention the corollary that follows from "source of truth": if another system disagrees with the system of record, the system of record is correct by definition.

### Model Answer
> **System of record**: the authoritative version of data — new data is written here first, each fact appears once, and if another system disagrees with it, the system of record is correct by definition. **Derived data**: data computed or copied from another system — caches, indexes, materialized views, trained models — always rebuildable from the source. Neither label is a property of a technology; it depends on how that tool is *used*. The practical test: could you delete this and rebuild it from somewhere else without losing anything? If yes, it's derived — treat it as disposable infra (no backups needed beyond the ability to re-run the pipeline). If no, it's a system of record — it needs backups, replication, and change-data-capture, because losing it is unrecoverable. This distinction is also why "just add a cache" turns dangerous the moment something starts writing to the cache directly — you've silently created a second, unsynced system of record, and now you have a distributed-consistency problem nobody signed up for.

### Knowledge Gap
Answers the half of a two-part question that's asked about first/most directly, and skips the other half even when it's explicitly requested ("what makes something X vs. Y") — same shape of gap as under-covering, not a wrong-understanding gap. Worth explicitly checking "did I answer every clause of the question" before finishing an answer.

### Memory Priority
Medium

### Follow-up Required
Light — the derived-data definition itself is simple; a quick recall check later is enough, no need for a dedicated deep retest.

## Q006
**Date:** 2026-09-02
**Topic:** Cloud Versus Self-Hosting
**Concept:** C6 — Cloud services vs. self-hosting
**Difficulty:** Level 2 (Explanation)
**Question:** The chapter frames this as two *separate* decisions, not one binary choice. What are the two decisions, and what's the middle-ground option that sits between "fully bespoke in-house software" and "fully managed cloud service/SaaS" on that spectrum?

### My Answer
> "The two decisions are who builds it and who runs it. For cloud services, it's a third-party company that deals and runs it. Whereas for self-hosting, depending on the software, be it a customized software by us, which would mean that we will also be building it, or we are using open source software like MySQL or PostgreSQL, that builds it but we will run it on our own platforms. The middle ground option is using off-the-shelf products like React, TypeScript, Next.js, PostgreSQL, MySQL and I put them on my own provisioned servers so that manage them myself."

### Assessment
🟢 Correct

### What I Got Right
- Correctly named both decisions: who builds it, who runs it.
- Correctly placed cloud services/SaaS at the vendor-builds-and-runs end.
- Correctly placed self-hosted open-source software (built by others, run by you) as the middle ground, and fully bespoke in-house as the other end.

### What I Missed
- Example precision: React/TypeScript/Next.js aren't a great fit for "off-the-shelf software you self-host" — they're libraries/frameworks you build your own application *with*, not ready-made infrastructure systems you deploy and administer the way you do with MySQL/PostgreSQL/MongoDB (the chapter's own examples).

### Model Answer
> Two separate decisions: **who builds it**, and **who runs it**. One end: fully bespoke, in-house software. Other end: cloud services/SaaS (vendor builds and runs it entirely). Middle ground: off-the-shelf software you self-host, on-prem or on a cloud VM (IaaS) — e.g. self-hosting Postgres vs. using RDS. The senior-level heuristic: self-host when the software is your core competitive differentiator or compliance/data-residency forces it; buy managed when it's undifferentiated heavy lifting (nobody wins by patching their own Postgres better than RDS does). The expensive mistake runs both directions — self-hosting something you should've bought (burning engineer-months reinventing Aurora), or buying something you should've self-hosted (paying managed-service margins on a workload predictable enough that a dedicated box beats the managed tier). Always run the actual TCO math — cloud pricing pages are optimized to make "just use us" look cheap at small scale.

### Knowledge Gap
None conceptually — only an example-choice imprecision (mixing app-building frameworks in with infrastructure software examples).

### Memory Priority
Low

### Follow-up Required
No.

## Q007
**Date:** 2026-09-02
**Topic:** Cloud Native System Architecture
**Concept:** C7 — Cloud native architecture
**Difficulty:** Level 2 (Explanation)
**Question:** "Cloud native" gets thrown around loosely — including in your own last answer, sort of. What does the chapter actually mean by "cloud native" (be precise — it's not the same as "runs on a cloud VM"), and name one concrete way cloud native systems can outperform self-hosted systems running on the *same hardware*?

### My Answer
> "For self-hosted systems, we typically provision the amount of compute and size that we need for each computing resource. But whereas for cloud native architecture from the get-go, the applications are designed to scale with the traffic. For example, if there's a spike in traffic from users, a cloud native architecture would provision more computing resources on the fly to handle that load. Another case for cloud native architecture is also to do with serverless functions. Whereas one doesn't need to provision for compute at the get-go. And instead, we provision them on the fly only when the function is being run. Therefore, saving some money. What this means is applications that are on a cloud native architecture gets to fully use the advantages of cloud."

### Assessment
🟠 Partially Correct

### What I Got Right
- The "outperform self-hosted on the same hardware" half: elastic/on-the-fly resource provisioning correctly matches the chapter's "scale resources faster" advantage.

### What I Missed
- The actual definition of "cloud native." Described elasticity and serverless as *if they are* cloud native, when the chapter defines cloud native as building to use **higher-level, disaggregated cloud services** (e.g., object storage like S3 instead of a virtual disk) — elasticity is a *resulting benefit*, not the definition itself.
- Didn't address the explicit "not the same as runs on a cloud VM" framing the question asked for — renting a VM and auto-scaling it is still self-hosting/IaaS; you're still administering the software yourself. Cloud native specifically means the software is architected to lean on higher-level managed primitives (chapter's example: Snowflake built on top of S3).
- This is precisely the confusion flagged in `knowledge-map.md`'s X5 ("Cloud native vs. 'just running on cloud VMs'") — a predicted trap, now confirmed.

### Model Answer
> **Cloud native**: architected to lean on higher-level, disaggregated cloud primitives (object storage, managed queues, serverless compute) instead of self-administering VMs+disks — auto-scaling a VM is still self-hosting, just with elastic IaaS underneath. Chapter's example: Snowflake built on S3. Other canonical examples: Aurora (compute/storage split, log-structured storage replicated across AZs, not a traditional attached-disk Postgres), Lambda (no server lifecycle at all). The payoff: faster failure recovery, faster scaling, larger supportable datasets than the same hardware self-hosted could achieve — because the platform, not your ops team, absorbs the failure-domain and scaling logic. The tradeoff a senior engineer flags before adopting this pattern: cloud-native design usually means deeper coupling to one vendor's primitives (you can't "just self-host" something built on DynamoDB's consistency model) — it's a deliberate bet on the vendor's durability, not a free lunch.

### Knowledge Gap
Confirmed the exact confusion the knowledge map flagged in advance (X5): treating a *consequence* of cloud native (elastic scaling) as its *definition*. Worth a dedicated retest once other material has been covered, specifically hitting the "higher-level disaggregated services, not just a VM" framing directly.

### Memory Priority
Critical

### Follow-up Required
Yes — retest C7's core definition specifically, ideally with a different concrete example (not Snowflake/S3) to check it generalizes rather than being memorized as one specific fact.

## Q008
**Date:** 2026-09-02
**Topic:** Distributed Versus Single-Node Systems
**Concept:** C8 — Distributed vs. single-node systems; H11 — nine reasons to distribute
**Difficulty:** Level 2 (Explanation)
**Question:** Define a distributed system precisely (what makes it distributed, what's a "node"). Then, of the nine reasons the chapter lists for distributing a system, name three — and try to pick ones that are actually distinct from each other, not just rewordings of "it scales better."

### My Answer
> "A distributed system just means that there is more than one node serving an application. What's a node? A node is an instance of the application, be it a front-end service or a back-end service with a database. It is a need for them to communicate with each other in order to serve the users. Three of the nine reasons are: Elasticity. Elasticity means that with a higher traffic, additional compute resources can be provisioned on the fly to cater for the higher traffic load. Then next we have fault tolerance. Since we have more than one node serving the application or system, if one fails, the other node can take its place without disrupting the service. Lastly, for performance, if our users are spread across the world, having multiple systems close to them means that the application can be served to them quickly."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Distributed system definition essentially right: multiple machines/nodes communicating to serve the system.
- **Fault tolerance** correctly and precisely described: redundancy, another node takes over on failure.
- **Latency** (labeled "performance," but content matches exactly): servers near users worldwide, reduces delay — correctly distinct from the other two picks.
- Good instruction-following: picked three genuinely distinct reasons rather than three flavors of "scales better."

### What I Missed
- **"Node" definition slightly narrow.** Chapter defines a node as any participating *process* communicating over a network — not necessarily "an instance of the application." Could be a database node, cache node, load balancer, etc.
- **Elasticity described using scalability's definition.** What was described (provision more resources under higher traffic) is the chapter's **scalability** reason ("spread growing load across multiple machines"). **Elasticity**'s distinguishing trait — explicitly listed as a *separate* reason in the chapter — is scaling **down** as well as up, and paying only for what's used at any given moment. Missed that half entirely.

### Model Answer
> A **distributed system**: multiple machines/processes (nodes — database replicas, cache shards, load balancers, app instances, anything) coordinating over a network. Three genuinely distinct reasons to go distributed (of nine): **fault tolerance/HA** (redundant nodes so a single failure doesn't take the system down — what quorum-based replication and multi-AZ deployments buy you), **latency** (push compute/data physically closer to users — CDNs, edge functions, regional read replicas), and **elasticity** (scale compute up *and back down* with real-time demand, paying only for what's used — Kubernetes HPA, Lambda concurrency scaling — distinct from plain **scalability**, which just adds fixed capacity for growth and doesn't shrink). Senior framing: every one of these reasons is *also* a tax — more nodes means more partial-failure modes, more coordination overhead, and a much bigger observability surface. Don't distribute reflexively; distribute because a single machine genuinely can't satisfy a specific reason from this list.

### Knowledge Gap
Blurred two adjacent items on a nine-item list (elasticity vs. scalability) — same shape of gap as the C3 OLTP/OLAP table-detail confusion: broad concept understood, fine-grained distinctions between similar-sounding neighbors not yet solid.

### Memory Priority
Medium

### Follow-up Required
Yes, but low urgency — pair with the planned H11 retest: explicitly contrast elasticity vs. scalability side by side.

## Q009
**Date:** 2026-09-02
**Topic:** Problems with Distributed Systems
**Concept:** C9 — Problems with distributed systems
**Difficulty:** Level 2 (Explanation)
**Question:** The chapter lists real costs that come with going distributed — this is the counterweight to everything in Q8. Name two distinct problems, and for at least one of them, be specific about the mechanism, not just "it's harder." (E.g. not "networking is unreliable" — but what specifically can go wrong with a network call that can't happen with a normal in-process function call?)

### My Answer
> "One of the problems of a distributed system is the added latency relative to processes that run within the same system. This is because network calls has to be made across the different services in order to get the response to the user. Also for the distributed system since there are a lot of network calls to be made across different APIs and across different services, the authentication and authorizations that have to be made across the different services means that there's even more latency involved."

### Assessment
🟠 Partially Correct

### What I Got Right
- Correctly identified latency as a real cost of distribution (network calls are slower than in-process calls) — one valid problem from the chapter's list.

### What I Missed
- Didn't provide a **second distinct** problem — the auth/authz point is a contributor to the *same* latency problem, not a separate category.
- Missed the chapter's actual "mechanism" emphasis: a network call can fail or **time out with no way to know whether the request was received and processed** — unlike an in-process call, where you always know the outcome. This uncertainty is *why* retrying can be unsafe (risk of double-processing), and the chapter flags it as important enough to get a full chapter later (Ch. 9).
- Didn't reach for the other distinct problems on the list: hard observability/troubleshooting, or data consistency becoming the application's own responsibility once each service owns its own database.

### Model Answer
> Two genuinely distinct problems: (1) **Unreliable networks with uncertain outcomes** — a call can time out with no way to know if the receiver got it and processed it, a failure category that simply doesn't exist for an in-process function call. The production-grade fix isn't "just retry" — it's making the operation idempotent (idempotency keys on payment/order APIs) *and* retrying with exponential backoff + jitter, so a transient blip doesn't become a thundering-herd retry storm that takes the downstream service down harder. (2) **Hard observability** — a single slow request might touch a dozen services; you can't step-debug a distributed trace. This is why distributed tracing (OpenTelemetry + Jaeger/Tempo, correlation IDs propagated through every hop) isn't optional tooling for microservices — without it, debugging is guesswork. (A third real problem: once each service owns its own database, cross-service consistency stops being a database transaction and becomes an application-level concern — this is what the saga pattern and outbox pattern exist to solve, and getting it wrong is how an order ends up marked "paid" with no matching charge.)

### Knowledge Gap
Same "collapse multiple required items into one" shape seen on C5 (only answered half) and C8 (blurred two list items) — here, elaborated one problem twice instead of surfacing a second, distinct one. Also missed the chapter's single most emphasized point in this section: uncertain call outcomes, not just "slower."

### Memory Priority
Critical

### Follow-up Required
Yes — retest C9 directly, specifically probing for the "no way to know if the request was received" mechanism, since that's the chapter's headline point here and it was missed entirely.

## Q010
**Date:** 2026-09-02
**Topic:** Microservices and Serverless
**Concept:** C10 — Microservices
**Difficulty:** Level 2 (Explanation)
**Question:** Define what a microservice is (be specific about ownership/scope, not just "a small service"). Then the chapter makes an argument that might be the most important point in this section: microservices mainly solve what kind of problem — technical or something else? What does that framing actually mean in practice?

### My Answer
> "A microservice is typically a service that demarcates a specific business function. For example, instead of having one service which is e-commerce that handles purchasing, ordering, notification whatsoever, we can break them down into multiple microservices. One to handle ordering, one to handle notification, one to handle purchasing, etc. It's more of a business demarcation. This is because the teams that work on each of these services may be different and separate. Therefore, having a microservice architecture is more of an operational advantage as now teams can work independently on their own services without having to disturb the other teams' work. On the flip side, one of the disadvantages of microservices architecture is that testing may be hard to perform or may be tedious to perform. Instead of just running one test service that houses all of the different business functions, now the purchasing or ordering team has to spin up the different services from other teams such as notification. Therefore, there are lots of more moving parts that the team has to cater for."

### Assessment
🟢 Correct

### What I Got Right
- Definition captured the essentials: one clear business-function scope per service (via a concrete, accurate example), owned by a separate team.
- Nailed the chapter's central argument precisely: microservices mainly solve an organizational/people problem (independent team ownership), not a purely technical one.
- Unprompted, correctly cited a real chapter-listed downside: testing requires spinning up dependent services from other teams.

### What I Missed
- Didn't explicitly state that each microservice "exposes an API" — implied but not said directly. Minor.

### Model Answer
> A **microservice**: one clear purpose, exposes an API, owned end-to-end by one team (build, deploy, on-call). This is Conway's Law made deliberate: microservices mainly solve an *organizational* problem — letting teams ship independently without a central release train blocking everyone — not a technical one. Senior litmus test before splitting a service: "does this split map to an actual team boundary, or am I just adding network hops for architectural aesthetics?" The classic anti-pattern (constant in early-stage startups) is a 5-person team running 40 microservices — all the distributed-systems tax from problems-with-distributed-systems, none of the organizational payoff, because there's only one team anyway. This is why "monolith first" (Shopify, GitHub, Basecamp's public position) is the pragmatic default — split when a team boundary actually forms and shared-codebase coordination cost starts to hurt, not before.

### Knowledge Gap
None material.

### Memory Priority
Low

### Follow-up Required
No.

## Q011
**Date:** 2026-09-02
**Topic:** Operational Versus Analytical Systems
**Concept:** C3 — OLTP vs. OLAP (retest of Q003's two gaps)
**Difficulty:** Level 1 (Recall, targeted retest)
**Question:** Two quick corrections to lock in: (1) who's the actual human user of an OLTP system — not "business analyst," think about who's literally using the app. (2) What does "dataset size" mean as a comparison axis — give me the actual scale (units), not a time range.

### My Answer
> "The actual human user of an OLTP system is the actual user end user that's accessing the system. This could be a customer on the e-commerce platform. This could be a person playing a game on mobile app. As for dataset, OLTP deals within the range of gigabytes to terabytes, whereas for OLAP, they are dealing in terms of terabytes to betabytes."

### Assessment
🟢 Correct

### What I Got Right
- OLTP human user correctly identified as the app's end user, with accurate concrete examples (e-commerce customer, mobile game player).
- Dataset size axis correctly given in actual data-volume terms: OLTP gigabytes–terabytes, OLAP terabytes–petabytes ("betabytes" read as a typo for petabytes, not a conceptual error).

### What I Missed
Nothing material.

### Model Answer
> OLTP's human user is the actual end user of the app — the person swiping a card, not an internal analyst; this is the detail people most often get backwards because "transaction" *sounds* like an internal finance term. Dataset size is a raw-volume axis, not a time-range axis: OLTP typically sits gigabytes-to-terabytes (your live production DB), OLAP terabytes-to-petabytes (years of accumulated history across every system). Memory hook: OLTP is what keeps the lights on right now; OLAP is everything that's ever happened, all at once.

### Knowledge Gap
None — both G002 and G003 resolved.

### Memory Priority
Low (resolved)

### Follow-up Required
No.

## Q012
**Date:** 2026-09-02
**Topic:** Cloud Native System Architecture
**Concept:** C7 — Cloud native architecture (retest of Q007's gap, fresh example)
**Difficulty:** Level 2 (Application, targeted retest)
**Question:** New example, no Snowflake/S3 this time: A company self-hosts PostgreSQL on a rented cloud VM, with auto-scaling turned on so it adds more VM capacity under load. Is that "cloud native"? Why or why not — and what would actually make it cloud native instead?

### My Answer
> "In this instance, it's not a cloud native architecture because even though autoscaling is turned on and there's more VM capacity added under load, the data is still being managed via virtual disk and the company has to think about how the different data within the different VMs get called whereas for cloud native architecture, even if we scale up, essentially we are still dealing with an object storage like S3 which is typically an abstraction in front of the actual data storage which we do not have to worry about."

### Assessment
🟢 Correct

### What I Got Right
- Correctly identified the scenario as NOT cloud native, despite auto-scaling — self-hosted software on virtual disks is still self-hosting/IaaS.
- Correctly generalized the actual definition to a brand-new example: cloud native means relying on a higher-level managed abstraction (e.g., object storage) where the underlying storage management is no longer your problem, regardless of whether autoscaling is present.
- This confirms the Q007 gap wasn't a one-off memorized fact (Snowflake/S3) — the understanding transferred to an unseen scenario.

### What I Missed
Nothing material.

### Model Answer
> Not cloud native — auto-scaling a self-hosted Postgres on a VM is still IaaS; the company is still patching Postgres, managing replication, and dealing with per-VM virtual disks. It becomes cloud native only if re-architected onto a managed/disaggregated primitive — Aurora (log-structured storage layer decoupled from compute, replicated across AZs by the platform) or Cloud Spanner (globally-distributed consensus handled by Google, not you). The quick test a senior engineer uses: "if this service's underlying VM died right now, would a human need to intervene, or does the platform just handle it?" If a human needs to reattach a disk, promote a replica, or restore from snapshot, it's self-hosted regardless of how elastic the compute layer looks.

### Knowledge Gap
None — G004/M002 resolved, confirmed via generalization to a new example.

### Memory Priority
Low (resolved)

### Follow-up Required
No.

## Q013
**Date:** 2026-09-02
**Topic:** Problems with Distributed Systems
**Concept:** C9 — Problems with distributed systems (retest of Q009's gap, fresh example)
**Difficulty:** Level 3 (Application, targeted retest)
**Question:** Different angle this time: You call a payment service to charge a customer's card. The call times out — no response comes back. Two questions: (1) what specifically do you not know at that moment, that you would always know if this were a normal in-process function call instead? (2) why does that specific uncertainty make it dangerous to just "retry the charge"?

### My Answer
> "At this point, I do not know which part of the call to the payment service failed. Could it be that my request to the payment service failed? Or it could be that the payment service failed to process my request? Or it could be that the payment service produced a response but the response did not succeed at returning back to me. So in this case, actually pinpointing the exact error at which part of the journey becomes very very hard. Especially for a payment service, retrying under this uncertainty could mean that we charge the customer twice because again, it could be that the payment service managed to successfully process the request but the response it will come back to me and therefore if we were to query this again then the payment service would duplicate the charging to the customer again."

### Assessment
🟢 Correct

### What I Got Right
- Correctly and precisely broke down the uncertainty into its actual constituent failure points: request never arrived / arrived but processing failed / processing succeeded but the response was lost in transit — sharper than the Q009 model answer's more general phrasing.
- Correctly explained the retry danger: if the charge actually succeeded and only the response was lost, a blind retry double-charges the customer — the exact mechanism the chapter is pointing at, applied precisely to a concrete payment scenario.
- Fully resolves both parts of the original C9 gap: a second, genuinely distinct problem type is no longer needed here since the question targeted the single mechanism directly — and that mechanism landed exactly right.

### What I Missed
Nothing material.

### Model Answer
> At the moment of timeout, three possibilities are indistinguishable: (1) the request never reached the payment service, (2) it reached the service but processing failed, or (3) it reached the service, processing *succeeded*, and only the response was lost on the way back. An in-process call never has this ambiguity. Retrying blindly is dangerous specifically because of case (3) — a naive retry double-charges the customer. This is exactly why Stripe (and every serious payments API) requires an `Idempotency-Key` header: generate a UUID client-side once per logical operation, and the server recognizes a retried request with the same key as a duplicate rather than re-processing it — turning an at-most-once-or-unknown network call into an effectively-exactly-once operation. The same pattern (idempotency keys + outbox table) applies to any "call an external system with side effects" problem, not just payments — order placement, email sending, inventory decrement.

### Knowledge Gap
None — G006 resolved, and the corrected understanding transferred cleanly to an unseen, concrete scenario (payments) rather than restating the abstract definition.

### Memory Priority
Low (resolved)

### Follow-up Required
No.

## Q014
**Date:** 2026-09-02
**Topic:** Data Warehousing (from data warehouse to data lake)
**Concept:** H2 — Data lake
**Difficulty:** Level 2 (Explanation)
**Question:** You already know why the data warehouse exists (C4). The chapter says many data scientists still don't love working directly in a warehouse, and that's part of why the data lake emerged as an alternative/complement. What's the key structural difference between a data lake and a data warehouse (not "one is newer"), and what specific need drove data scientists toward wanting that structure — think about what they actually do with data that a fixed relational schema gets in the way of?

### My Answer
> "The role of the data scientist is to make sense of data in whatever form that they might be in, in order to drive business insights. However, for a data warehouse, since the schema is more of a relational one, oftentimes the data that the data scientist wants to work with does not fit in such a schema. The data scientist can store all kinds of data be it videos, text, pictures, text records, etc. The data scientists have a greater wealth of data to work from and since it is raw, the data scientists can perform lots of manipulation and predictions whatsoever on this to uncover more data insights."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Correct structural difference: data lake doesn't force one file format/schema; data warehouse is fixed relational — with correct concrete examples (video, text, pictures).
- Correct general direction: raw, unstructured data gives data scientists more to work with than a rigid schema allows.

### What I Missed
- Stayed generic on the specific need ("manipulation and predictions," "business insights") rather than naming the chapter's actual specific mechanisms: **feature engineering** (turning raw data into numeric features for ML models) and **extracting structured information from unstructured text/images via NLP/computer vision**.

### Model Answer
> Structural difference: a warehouse enforces schema-on-write (one relational schema, fixed at ingest); a lake is schema-on-read — dump raw bytes (Parquet, JSON, images, video, sensor streams) on cheap object storage and decide the schema at query time, per-consumer. The specific need this unlocks: data scientists doing **feature engineering** (deriving numeric ML features from raw signals) or **NLP/CV extraction** (pulling structured entities out of unstructured text/images) — work actively blocked by a warehouse forcing tabular structure before you know what shape you need. Worth knowing where this is heading: pure data lakes mostly lost to the "lakehouse" pattern — Delta Lake / Apache Iceberg / Apache Hudi bolt ACID transactions and schema evolution onto object storage, giving warehouse-like reliability with lake-like flexibility. Greenfielding a data platform today, you're almost certainly reaching for a lakehouse format, not a bare lake.

### Knowledge Gap
Tends to land on the right general shape of an answer but stop one level short of the chapter's specifically-named mechanism when the question explicitly asks to "think about what they actually do" — worth pushing for the concrete technical term, not just the theme.

### Memory Priority
Medium

### Follow-up Required
Light — a quick recall check later on "feature engineering" and "NLP/CV extraction" as the two named examples is enough.

## Q015
**Date:** 2026-09-02
**Topic:** Data Warehousing (beyond the data lake)
**Concept:** H3 — Reverse ETL
**Difficulty:** Level 1 (Recall)
**Question:** Give an example the chapter uses for reverse ETL, and state which direction it flows relative to normal ETL — into which kind of system, from which kind?

### My Answer
> "For a normal ETL, data gets transferred from an OLTP database to an OLAP database. Whereas for a reverse ETL, it's the other way around, from an OLAP database to an OLTP database."

### Assessment
🟠 Partially Correct

### What I Got Right
- Direction fully correct: reverse ETL flows analytical (OLAP/warehouse) → operational (OLTP), the reverse of normal ETL.

### What I Missed
- The question explicitly asked for the chapter's example, which was omitted entirely: an ML model trained on analytical data gets deployed to production to generate recommendations (tools: TFX, Kubeflow, MLflow).

### Model Answer
> Reverse ETL sends analytical output back into operational systems — inverse of the normal OLTP → warehouse flow. Chapter's example: an ML model trained on warehouse/lake data gets deployed to generate recommendations in production (TFX, Kubeflow, MLflow for training/deployment). Worth knowing the term has also come to mean something more mundane and arguably more common in practice: syncing computed warehouse metrics (LTV, churn score, lead score) back into operational SaaS tools sales/support teams actually live in — Salesforce, HubSpot, Zendesk — via dedicated reverse-ETL platforms (Census, Hightouch). Same direction of data flow, same underlying idea (the warehouse becomes a source of truth operational tools consume from), different payload — one's a model, the other's a computed column.

### Knowledge Gap
Same recurring shape as G007/Q5: nailing one clause of a two-part question and omitting the other entirely rather than answering it imprecisely. Now seen enough times (C5, H2-adjacent, H3) to treat as a general pattern to watch for, not a per-concept issue.

### Memory Priority
Medium

### Follow-up Required
Light — the example itself is simple to recall once flagged; a quick check later is enough.

## Q016
**Date:** 2026-09-02
**Topic:** Operational Versus Analytical Systems (Data Warehousing)
**Concept:** H4 — HTAP
**Difficulty:** Level 1 (Recall)
**Question:** What does HTAP stand for, what problem does it solve, and — this is the nuance the chapter is careful about — does it replace the need for a data warehouse? Give the example use case the chapter names for when HTAP actually helps.

### My Answer
> "htap stands for hybrid transactional analytical processing which means that it is capable of performing both online transaction processing and online analytical processing instead of just one or the other. the use case the chapter names is fraud detection where it is required to have fast single record updates and large analytical scans. it doesnt replace the need for a data warehouse as having large complex queries run will still affect performance if its being done on the same database that serve end users."

### Assessment
🟢 Correct

### What I Got Right
- Correct full acronym and correct problem solved (both OLTP and OLAP in one system).
- Correct chapter example: fraud detection — fast single-record updates plus large analytical scans, exact match.
- Correctly stated HTAP does not replace the data warehouse.
- All parts of the multi-part question answered — no dropped clause this time.

### What I Missed
- The reasoning given for *why* it doesn't replace the warehouse (performance impact on the serving database) is a reasonable own-inference, not the chapter's stated framing (the text is fairly light here, mainly noting HTAP systems often still internally separate the OLTP and analytical parts).

### Model Answer
> HTAP = hybrid transactional/analytical processing — one system handling both OLTP and OLAP without an ETL hop between them. Concrete examples: TiDB, SingleStore, CockroachDB. It doesn't replace the warehouse generally — it earns its complexity specifically when one application needs both fast point updates *and* large scans simultaneously (fraud detection is the canonical case: score this transaction against historical patterns in milliseconds). Under the hood, most HTAP systems still physically separate row-oriented storage (fast writes/point-reads) from column-oriented storage (fast scans) and keep them in sync internally — the operational complexity of two storage engines bundled into one product instead of split across two. That's why HTAP stays niche: for the 95% of companies whose OLTP and OLAP needs don't need millisecond-fresh cross-pollination, a plain OLTP DB + ETL + warehouse is simpler and cheaper to operate.

### Knowledge Gap
None material.

### Memory Priority
Low

### Follow-up Required
No.

## Q017
**Date:** 2026-09-02
**Topic:** Operational Versus Analytical Systems
**Concept:** H5 — Data engineers vs. analytics engineers
**Difficulty:** Level 1 (Recall)
**Question:** Both roles work with data infrastructure, but the chapter draws a line between them. What does each one actually own/do — data engineer vs. analytics engineer?

### My Answer
> "data engineer mainly deals with the data pipeline matters, moving data from where to where, how to store data, etc. whereas analytics engineer is more about getting business data insights from the data in the database"

### Assessment
🟠 Partially Correct

### What I Got Right
- Data engineer correctly described: pipelines, moving/storing data — matches "integrate operational and analytical systems, own the data infrastructure."

### What I Missed
- Analytics engineer is incorrect: the chapter's actual line is that analytics engineers *shape data* so analysts and data scientists can use it more easily — they prepare/transform data, they don't themselves produce business insights. Producing insights is the job of business analysts and data scientists (the "analytics" consumers, per the chapter's earlier three-group breakdown). This conflates the data-prep role with the insight-producing roles it exists to support.

### Model Answer
> **Data engineers**: own the data infrastructure — pipelines (Airflow/Dagster), the warehouse itself, ingestion from operational systems (Fivetran/Airbyte), integrating OLTP and analytical systems. **Analytics engineers**: shape data *inside* the warehouse so analysts/data scientists can self-serve — writing SQL transformation models (this role was essentially invented by dbt; "analytics engineer" is dbt Labs' own coined job title, now industry-standard) to turn raw ingested tables into clean, tested, documented marts. Neither role produces the business insight themselves — that's the analyst/data scientist consuming what these two roles build. Rule of thumb: "how does data get from A to B reliably" is data engineering; "how do I turn this raw table into something a business analyst can trust without help" is analytics engineering.

### Knowledge Gap
Similar shape to M001 (OLTP/OLAP human-user confusion): assigning "who does the analytics/insight work" to the wrong role in a group of adjacent, easily-conflated data roles.

### Memory Priority
Medium

### Follow-up Required
Light — recall check later, ideally alongside a refresher on the full three/four-role breakdown (backend engineers, business analysts, data scientists, analytics engineers).

## Q018
**Date:** 2026-09-02
**Topic:** Cloud Versus Self-Hosting
**Concept:** H6 — Pros/cons of cloud services
**Difficulty:** Level 2 (Explanation)
**Question:** Name two distinct downsides of relying on a cloud service (not counting cost) — and for one of them, be specific: what's "vendor lock-in" actually mean, and why does it get worse without a standard API?

### My Answer
> "two distinct downsides - if we want additional features, we are not able to because the cloud service is essentially engineered to cater to a wide range of customers, not bespoke to any particular customer. also, if the cloud service were to add new features and that breaks the current version we are connected to, we are forced to upgrade or forced to put in work to engineer on our end of the transaction even though the current setup works perfectly fine from our end and if we dont need the new features."

### Assessment
🟠 Partially Correct

### What I Got Right
- First downside matches the text exactly: "you cannot add missing features yourself."

### What I Missed
- Second downside (forced upgrades from breaking changes) isn't one of the chapter's six listed downsides — a plausible real-world adjacent concern, but not textual.
- **The mandatory drill-down was skipped entirely.** The question explicitly required addressing vendor lock-in specifically — neither of the two downsides picked was vendor lock-in, so that whole required component went unanswered. Third occurrence of this exact pattern (after C5/Q5, H3/Q15).

### Model Answer
> Two distinct downsides (of six): you cannot add missing features yourself, and **vendor lock-in** — if the vendor raises prices or changes badly, migrating away is expensive because your integration code is written against their specific interface, not just a connection-string swap. Real-world case study: Heroku's 2022 pricing/tier changes drove a wave of companies to suddenly evaluate migration cost they'd never budgeted for — many discovered their "just deploy to Heroku" simplicity had quietly become deep platform coupling. This is *why* standardized interfaces matter operationally, not just architecturally: teams built on S3-compatible object storage APIs can point the same code at MinIO, Backblaze, or Cloudflare R2 with a config change; teams that used a vendor's bespoke SDK are rewriting their data layer. (Other listed downsides: waiting on the vendor to fix outages, hard-to-diagnose performance problems without internals access, political conflicts cutting off access, needing to trust the provider with your data.)

### Knowledge Gap
The "drop a required clause" pattern has now recurred three times across distinct concepts (C5, H3, H6) — this is a general test-taking habit to correct, not a knowledge gap about any one topic. Worth explicitly re-scanning a question for "and also," "be specific about X," or similar mandatory sub-asks before finalizing an answer.

### Memory Priority
Critical

### Follow-up Required
Yes — retest vendor lock-in directly and specifically, since it was never actually addressed despite two attempts at this general question shape.

## Q019
**Date:** 2026-09-02
**Topic:** Cloud Versus Self-Hosting
**Concept:** H6 — Vendor lock-in (direct retest of the G010 gap, immediately since it was never actually answered)
**Difficulty:** Level 1 (Recall)
**Question:** Define vendor lock-in specifically, and explain why it gets worse when there's no standard API across providers.

### My Answer
> "vendor lock in means that our system is at the mercy of what the vendor does to its product. if it removes a feature and we were previously using it, we lose that and have little chance of getting it back, therefore we need to adapt to the changes. having no standard API means that if the vendor changes its implementation and requires a diff type of request from clients like us, we are forced to update how we call the vendor. having a standard API means that we do not have to change anything and the backend implementation on the vendor side can be updated independently."

### Assessment
🟠 Partially Correct

### What I Got Right
- Correctly conveys general dependency-on-vendor risk (vendor can change things, you're affected).

### What I Missed
- Missed the core meaning of "lock-in": being unable to easily **leave for a different, competing vendor** — not just tolerating changes from the *same* vendor. Lock-in is about switching cost/difficulty, not about adapting to updates.
- The standard-API explanation was framed around one vendor updating their own backend transparently, not about **cross-vendor portability** — a standard API (e.g. S3-compatible storage) lets your integration code point at a *different* vendor with minimal rewrite; without one, every vendor's proprietary interface means migrating to a competitor requires a full integration rewrite.
- This is the second attempt at this same concept (Q18 skipped it, Q19 attempted but landed on an adjacent-but-different idea) — genuinely still unresolved.

### Model Answer
> **Vendor lock-in**: if the vendor raises prices, drops the service, or changes it badly, you may be forced to migrate — and that migration is expensive/risky, so in practice you're stuck. It gets worse without a standard API because a standard interface (S3-compatible object storage used by multiple providers) lets you redirect the same integration code at a different vendor with minimal changes; without one, every vendor's proprietary interface means switching = rewriting your entire integration layer. Mitigation applied *before* you're locked in: wrap the vendor's SDK behind your own interface (the adapter/anti-corruption-layer pattern) — application code calls `storage.put()`, not `s3.putObject()` directly, so vendor-specific code lives in one small, swappable module instead of being smeared across the codebase.

### Knowledge Gap
Conflates "coping with a vendor's own changes over time" with "the difficulty of leaving that vendor for a competitor" — these are related but distinct ideas, and lock-in specifically refers to the latter. Needs a clean, standalone retest once other material has been covered, ideally with a concrete before/after scenario (e.g. "you want to move your database from Vendor A to Vendor B — what makes that hard, and how would a standard API change that").

### Memory Priority
Critical

### Follow-up Required
Yes — this is now 0-for-2 on vendor lock-in specifically; needs a clean retest later, not immediately (give it real spacing this time).

## Q020
**Date:** 2026-09-02
**Topic:** Cloud Versus Self-Hosting (Cloud Native System Architecture)
**Concept:** H7 — Layering of cloud services
**Difficulty:** Level 1 (Recall)
**Question:** The chapter draws a contrast between what self-hosted software needs vs. what cloud native services build on. What does most self-hosted software need at the infrastructure level, and what does the chapter's Snowflake example illustrate about layering?

### My Answer
> "self hosted software needs an OS, filesystem, and network. on the cloud, self hosted software requires its own memory, compute provisioned for it. snowflake is built on top of s3, which is already an abstraction of the data storage that snowflakes houses its data, so snowflake does not need to think about the nitty gritty of provisioning its own memory, cpu, etc."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Correctly identified self-hosted software's baseline needs: OS, filesystem, network (generic CPU/RAM/disk/IP), and correctly extended this to cloud VM/instance provisioning.
- Correctly identified Snowflake built on top of S3 as the layering example.

### What I Missed
- Overgeneralized: S3 abstracts away **storage** specifically — it doesn't abstract away compute. Snowflake still provisions and manages its own compute (CPU/memory) to run its query engine; only the storage layer is delegated to S3. Saying Snowflake "doesn't need to think about provisioning its own memory, CPU, etc." overstates what the storage abstraction covers.

### Model Answer
> Self-hosted software just needs generic OS/filesystem/network primitives — in the cloud, a VM with CPU/RAM/disk/bandwidth allocated. Cloud native services compose on top of higher-level managed primitives instead of owning raw resources — Snowflake is the canonical example: it delegates its entire **storage** layer to S3 (durability, replication, scaling-to-petabytes — Amazon's problem, not Snowflake's), but Snowflake still fully owns and operates its **compute** layer (the virtual warehouses that execute queries) — the part of the business they differentiate on. General pattern: cloud-native companies outsource the *undifferentiated* layer (storage, at massive economy of scale, is a commodity) and keep the *differentiated* layer in-house (query execution is where Snowflake's value lives). Memory hook: "Snowflake rents the garage, keeps the mechanic."

### Knowledge Gap
Minor scope overreach: extending a storage-specific abstraction claim to cover "all infrastructure" (compute included). Worth being precise about *which* resource a given cloud service abstracts, rather than treating "built on a higher-level service" as abstracting everything.

### Memory Priority
Low

### Follow-up Required
No — minor precision note, not a structural misunderstanding.

## Q021
**Date:** 2026-09-02
**Topic:** Cloud Native System Architecture
**Concept:** H8 — Separation of storage and compute
**Difficulty:** Level 1 (Recall)
**Question:** Why does a cloud VM's local disk act more like a cache than durable storage? And what makes a cloud virtual disk (like Amazon EBS) fundamentally different from a physical disk plugged into your machine?

### My Answer
> "because the cloud vm's local disk is attached to the cloud vm itself. when the cloud vm is stopped, the local disk gets removed as well, sort of ephemeral. what makes a cloud virtual disk like EBS different from a physical disk plugged into my machine is that EBS in essence is like just any other server sitting independently, not an actual physical disk."

### Assessment
🟠 Partially Correct

### What I Got Right
- Local disk ephemerality correctly explained: tied to the VM instance, disappears with it — matches the "cache-like" framing.
- Correctly stated a virtual disk isn't a physical disk.

### What I Missed
- Stayed vague on *why*/*how* it's different — "like any other server sitting independently" doesn't name the chapter's two specific defining traits: (1) every I/O on a virtual disk is literally a network call, making it sensitive to network problems in a way physical disks aren't; (2) it can move between instances (portability), unlike a physical disk bolted to one machine.

### Model Answer
> Local disk is cache-like because it's physically bolted to the instance's underlying host — kill the instance, the disk (and everything on it) is gone; this is why you never put production database files on local/instance-store disk. A virtual disk (EBS/Azure managed disk/GCP persistent disk) is a **network-attached block storage service**, not hardware — presents as a normal block device (4 KiB sectors, mountable) but is actually replicated storage nodes elsewhere in the datacenter, reached over the network (conceptually similar to iSCSI/NVMe-over-fabric). Two consequences: (1) it can be detached and reattached to another instance (durable, portable, survives termination), and (2) **every single I/O — every read, every write — is a network round-trip**, not a bus transaction — *why* virtual disk latency (low-single-digit ms) is an order of magnitude higher than local NVMe (tens of microseconds), and why network blips show up as disk I/O stalls in your metrics.

### Knowledge Gap
Correctly identifies the *category* difference (not physical) but doesn't reach for the *mechanism* (network call per I/O) or the *portability* trait — similar shape to H7's "right general idea, missing the specific named mechanism" gap.

### Memory Priority
Medium

### Follow-up Required
Light — pair with a future H8 recall check specifically naming "every I/O is a network call."

## Q022
**Date:** 2026-09-02
**Topic:** Cloud Native System Architecture
**Concept:** H9 — Multitenancy
**Difficulty:** Level 1 (Recall)
**Question:** What does "multitenant" mean in a cloud native context, and what's the specific engineering risk it introduces that a single-tenant, dedicated-machine setup doesn't have?

### My Answer
> "multitenant means having different customers with different sets of data within the same cloud instance. the engineering risk is that the data or operations from application A for client A may fall into application B for client B since theyre on the same cloud instance."

### Assessment
🟢 Correct

### What I Got Right
- Correct definition: many customers sharing the same hardware/service rather than each getting a dedicated machine.
- Correctly named a real risk the chapter flags: cross-tenant data/security leakage — matches "so one customer cannot affect another's ... security."

### What I Missed
Nothing — the question asked for one risk, and a valid one was given. (The chapter also names a performance-isolation risk — "noisy neighbor" tenants degrading others' performance — but that wasn't required here.)

### Model Answer
> Multitenant: many customers share the same underlying hardware/service instance rather than each getting dedicated infrastructure — dramatically better utilization/economics at scale (literally how SaaS margins work). Two concrete failure modes to guard against: **security** (data/access leaking across tenant boundaries — enforced via row-level security policies, tenant_id scoping on every query, or full schema/database-per-tenant isolation for the highest-sensitivity data) and **performance** (a "noisy neighbor" — one tenant's batch job or traffic spike degrading everyone else on the same node — enforced via resource quotas, cgroups/container limits, or a dedicated tenant tier for your largest customers). Real-world calibration: most SaaS companies start fully multitenant (cheapest), then carve out dedicated tenancy as an enterprise tier once a big customer's compliance team demands it or usage pattern starts degrading everyone else.

### Knowledge Gap
None.

### Memory Priority
Low

### Follow-up Required
No.

## Q023
**Date:** 2026-09-02
**Topic:** Operations in the Cloud Era
**Concept:** H10 — DevOps/SRE cloud-era ops shift
**Difficulty:** Level 1 (Recall)
**Question:** The chapter reframes two traditional ops activities using new terms once you move to the cloud. What does "capacity planning" become, and what does "performance optimization" become — and why do those reframings make sense given how cloud billing works?

### My Answer
> "capacity planning becomes redundancy planning, performance optimisation becomes cost optimisation, cloud billing is based on how much is being used instead of a fixed price"

### Assessment
🟠 Partially Correct

### What I Got Right
- "Performance optimization becomes cost optimization" — correct, exact match.
- Correctly explained metered/usage-based billing as the underlying mechanism.

### What I Missed
- "Capacity planning becomes redundancy planning" is incorrect — the chapter's actual term is **financial planning**. This is a genuine factual substitution (redundancy planning is a different concept, about fault tolerance/backups), not an imprecision.

### Model Answer
> Capacity planning becomes **financial planning**; performance optimization becomes **cost optimization** — both reframings exist because cloud billing is metered (pay for what you use, not what you pre-provisioned), turning infrastructure decisions into real-time budget decisions rather than an annual hardware procurement cycle. This shift spawned an entire discipline and job title — **FinOps** — dedicated to exactly this: reserved instance/savings plan commitment strategy, spot instance usage for interruptible workloads, rightsizing over-provisioned instances, and tagging/chargeback so engineering teams see the cost of what they ship. Senior-engineer habit: cost should show up on your dashboards next to latency and error rate, not discovered a month later on the bill — an unoptimized query that's "fine" at 100ms P99 might also be silently burning 3x the compute it needs to.

### Knowledge Gap
Substituted a plausible-sounding but incorrect term (redundancy planning) for the chapter's actual term (financial planning) — a factual error, not just an omission, so worth flagging clearly for retest.

### Memory Priority
High

### Follow-up Required
Yes — retest specifically on "capacity planning → financial planning," with real spacing.

## Q024
**Date:** 2026-09-02
**Topic:** Microservices and Serverless
**Concept:** H12 — Serverless / FaaS
**Difficulty:** Level 1 (Recall)
**Question:** What does FaaS stand for, how does its billing model work, and name two concrete trade-offs it comes with?

### My Answer
> "function as a service. its serverless compute, where an instance is only spinned up and billed if when the code runs on it, otherwise it will be off. trade offs include latency, it takes time to spin up. it also has a max compute time."

### Assessment
🟢 Correct

### What I Got Right
- Correct acronym (function as a service).
- Correct billing model: pay only for actual code run time, metered.
- Two correct, distinct trade-offs: cold-start latency and execution time limits — matches the chapter exactly.

### What I Missed
Nothing required — the third listed trade-off (restricted runtimes) wasn't required since only two were asked for.

### Model Answer
> FaaS = function as a service — AWS Lambda, Cloud Functions, Azure Functions. Billing: metered to the millisecond of actual execution, zero cost when idle — transformative economics for spiky/infrequent workloads. Real trade-offs: hard execution time limits (Lambda: 15 minutes max — a non-starter for long-running batch jobs), restricted/sandboxed runtimes (ephemeral filesystem, limited package sizes), and cold starts (first invocation after idle can add hundreds of ms, worse for JVM/.NET — mitigated but not eliminated by provisioned concurrency, at the cost of paying for warm capacity, which partially defeats the pay-per-use point). Senior heuristic for when *not* to use serverless: steady, predictable, high-volume traffic where an always-on fleet is simply cheaper per request, or workloads needing consistent sub-10ms latency. Serverless wins hardest for spiky, event-driven, infrequent workloads — webhooks, scheduled jobs, glue code — not as a default for every backend.

### Knowledge Gap
None.

### Memory Priority
Low

### Follow-up Required
No.

## Q025
**Date:** 2026-09-02
**Topic:** Cloud Computing Versus Supercomputing
**Concept:** H13 — Cloud computing vs. supercomputing (HPC)
**Difficulty:** Level 2 (Explanation)
**Question:** Both are large-scale, multi-machine computing — so what actually separates them? Give the difference in how each handles a node failure, and the difference in their networking/trust model.

### My Answer
> "for supercomputing, since complex computing happens in stages and that computed stages can be saved at each juncture, node failure here gets handled by restarting the entire instance. but for cloud computing, we can't restart the entire instance because users are being served by the different cloud instances. therefore, in cloud computing, the node that failed gets restarted individually and we need to perform extra measures to make sure that no disruption takes place. i believe cloud computing uses a mesh model where each instance can talk to each other wheres as for supercomputing, its some 'neighbour' approach whereby the resources required for the computing on one instance is provided by the instances around it."

### Assessment
🟠 Partially Correct

### What I Got Right
- Node failure handling, fully correct and precise: supercomputers checkpoint state and can stop-the-whole-cluster-and-restart from checkpoint (no continuous-availability need); cloud avoids stopping entirely and restarts individual failed nodes because it must keep serving users.

### What I Missed
- **Topology inverted.** Said cloud uses a "mesh model" — the chapter assigns mesh/torus topologies to *supercomputers* (specialized, suited to known communication patterns), and Clos/IP-Ethernet topologies to *cloud* datacenters (for high bandwidth).
- **Trust model omitted entirely**, despite being explicitly requested. The chapter's actual point: supercomputer nodes communicate via shared memory/RDMA, assuming high trust (fast, low security overhead); cloud networks are shared by *untrusting* organizations, requiring stronger security — VM isolation, encryption, authentication.
- The "neighbour resource-sharing" description of supercomputing isn't in the text — likely a plausible-sounding but self-generated substitute for the actual topology/trust points.

### Model Answer
> **Node failure**: supercomputers (e.g. Frontier, Fugaku) checkpoint application state to disk at intervals and, on a node failure, typically halt the entire job, swap the bad node, and resume from the last checkpoint — acceptable because these are batch scientific workloads with no live users waiting. Cloud services can't take that approach because they're serving live traffic continuously — failure handling has to be graceful degradation (route around the bad node, replace it, keep serving), not stop-the-world. **Networking/trust**: supercomputer interconnects use RDMA over specialized low-diameter topologies (mesh/torus/dragonfly) assuming every node is part of the same trusted job — near bare-metal latency, minimal security overhead. Cloud datacenters use Clos (leaf-spine) topologies over standard IP/Ethernet specifically because they support many *mutually untrusting* tenants sharing the same physical fabric — this is why AWS built the Nitro hypervisor (hardware-offloaded, minimal-trust-surface virtualization) and why VPC isolation and encryption-in-transit are non-negotiable defaults, not optional hardening.

### Knowledge Gap
Inverted a specific factual assignment (which topology belongs to which system) and omitted the requested trust-model dimension entirely, substituting a non-textual "neighbour" framing instead — same "reach for a plausible substitute over the actual stated content" pattern seen earlier (C1/G001, C4).

### Memory Priority
High

### Follow-up Required
Yes — retest the topology/trust half specifically, with real spacing; the failure-handling half is solid and doesn't need retesting.

## Q026
**Date:** 2026-09-02
**Topic:** Data Systems, Law, and Society
**Concept:** H14 — Data systems, law, and society
**Difficulty:** Level 2 (Explanation)
**Question:** GDPR's "right to be forgotten" creates a specific, concrete engineering tension the chapter names directly. What is it, and what's the principle of "data minimization" — how does it relate (or conflict) with typical "big data" thinking?

### My Answer
> "the tension is being able to delete all data related to a customer whenever requested by the customer. also the principle of data minimization runs opposite of 'collect as much data as we can about whoever and whatever so we can get as much data insights'. it means collecting as little as possible to get the job done. this also means that whenever we decide on anything to do with data, be it storing, logging etc. we need to take into account the time where we need to delete customer data, can we do that efficiently e.g. instead of logging raw logs, we need structured logs so we can easily filter logs related to a user."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Data minimization definition and its relationship to "big data" thinking, fully correct and precisely matches the chapter: collect only what's needed, opposite of "store everything for future insights."
- Practical engineering implication (structured vs. raw logs to enable efficient filtering/deletion) is a reasonable and relevant elaboration.

### What I Missed
- The GDPR tension stayed at the general requirement level ("must be able to delete data on request") rather than the chapter's specific named conflict: many systems use **immutable, append-only structures** (e.g. event logs) built explicitly to never be modified/deleted — deletion requests collide directly with that architecture. The chapter also names the harder version: how do you remove data already used to train a **derived ML model**, where the data isn't stored as a discrete deletable row anymore?

### Model Answer
> The specific tension: GDPR's "right to be forgotten" requires deleting personal data on request, but event-sourced/append-only architectures (Kafka logs, audit trails) are deliberately designed to never mutate or delete history — a direct architectural collision. The practical engineering solution teams actually use: **crypto-shredding** — encrypt each user's data with a per-user key, and "delete" the data by discarding the key, leaving encrypted-but-unrecoverable ciphertext in the immutable log rather than trying to mutate it. Harder version: data baked into a trained ML model's weights can't be selectively deleted with today's mainstream tooling — "machine unlearning" is active research, not a solved production pattern, which is why many companies' actual policy is "retrain periodically, excluding deletion requests." **Data minimization** (*Datensparsamkeit*): collect only what's needed, delete it once no longer needed — directly opposed to "store everything, monetize later," but the position GDPR legally mandates (Article 5(1)(c)). This isn't academic: GDPR fines have hit €1B+ for a single company (Meta, 2023) — this is genuinely boardroom-relevant, not just engineering hygiene.

### Knowledge Gap
Same shape as several earlier gaps: correctly understands the general requirement/theme but doesn't reach for the chapter's specific named example/mechanism (here: immutability-vs-deletion, and the trained-model case) when asked for "the specific tension."

### Memory Priority
Medium

### Follow-up Required
Light — recall check later on "immutable/append-only logs" and "data baked into a trained model" as the two concrete tension examples.

## Q027
**Date:** 2026-09-02
**Topic:** Operational Versus Analytical Systems
**Concept:** H5 — Data engineers vs. analytics engineers (retest of G009/M003)
**Difficulty:** Level 2 (Application, targeted retest)
**Question:** You said analytics engineers "get business insights from data" last time — that's wrong, that's someone else's job. Who actually produces business insights (the two roles), and what does an analytics engineer do instead — give a concrete example of the kind of work (think: what would they actually build/write)?

### My Answer
> "The two roles that produces business insights are business analyst and data analyst. Analytics [engineer]'s [job] is to basically massage the data such that it is in the schema that is best to be performed business insights on by those two roles. The analytics engineer will probably be busy with building queries to transform the data from the original data set to the schema that the two [roles] will be performing their operations on."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Analytics engineer role now correctly and concretely described: shaping/transforming data into a schema others can use, with a solid concrete example (building transformation queries — essentially dbt-style modeling work). Original G009/M003 misconception fully resolved.

### What I Missed
- Named "data analyst" instead of "data scientist" as the second insight-producing role (alongside business analyst) — the chapter's specific term is data scientist. Minor naming slip between similar-sounding real-world titles, logged as new gap G016.

### Model Answer
> Business insights are produced by **business analysts** and **data scientists** — the consumers. **Analytics engineers** are the producers of clean data for those consumers: writing dbt models (version-controlled, tested SQL transformation code) that turn raw operational tables into trustworthy, documented marts. The tell that distinguishes the roles in practice: an analytics engineer's PRs get reviewed for SQL correctness and test coverage; a business analyst's/data scientist's output gets reviewed for whether the *conclusion* is right.

### Knowledge Gap
Core misconception (analytics engineer produces insights) fully corrected. New minor gap: substituting "data analyst" for "data scientist" — worth a light recall check to lock in the exact term.

### Memory Priority
Low

### Follow-up Required
Very light — one more recall check on "data scientist" as the exact term would fully close this out.

## Q028
**Date:** 2026-09-02
**Topic:** Operational Versus Analytical Systems
**Concept:** H5 — Data engineers vs. analytics engineers (final retest of G016)
**Difficulty:** Level 1 (Recall, targeted retest)
**Question:** Name the exact second role (not "data analyst") — the one that finds insights or builds features using data analysis and ML/AI.

### My Answer
> "Data Scientist"

### Assessment
🟢 Correct

### What I Got Right
Exact term correctly recalled.

### What I Missed
Nothing.

### Model Answer
> Data scientist — the role explicitly grouped with business analysts in the chapter's three-way split (backend engineers / business analysts / data scientists) as the two roles that "do analytics" by consuming, not producing, clean data.

### Knowledge Gap
None — G016 resolved, H5 fully mastered.

### Memory Priority
Low (resolved)

### Follow-up Required
No.

## Q029
**Date:** 2026-09-02
**Topic:** Distributed Versus Single-Node Systems
**Concept:** H11 — Elasticity vs. scalability (retest of G005)
**Difficulty:** Level 1 (Recall, targeted retest)
**Question:** Both let you handle more load, but they're distinct reasons on the chapter's list. What's the trait that specifically makes something "elastic" that plain "scalability" doesn't have?

### My Answer
> "Elasticity is about scaling up and down as traffic goes up and down on the flying. Whereas, scalability is just the ability for more resources to be added onto the current resource."

### Assessment
🟢 Correct

### What I Got Right
Exactly the distinguishing trait requested: elasticity scales both up and down with demand; scalability is only about adding capacity to handle growth.

### What I Missed
Nothing required (the "pay only for what you use" billing nuance wasn't asked for specifically).

### Model Answer
> Elasticity's distinguishing trait: scales down as well as up, in near-real-time, tracking actual demand — pay only for what's provisioned at any given moment (Kubernetes HPA scaling pod replicas to zero overnight, Lambda scaling to zero between invocations). Scalability just means the system *can* handle growing load by adding more machines — says nothing about shrinking back down, and plenty of "scalable" systems (a fixed-size cluster sized for peak) are scalable but not elastic at all, which is exactly why they waste money running at 20% utilization most of the day. Elasticity is what actually captures the cloud cost benefit; scalability alone just gets you capacity.

### Knowledge Gap
None — G005 resolved, H11 now Strong.

### Memory Priority
Low (resolved)

### Follow-up Required
No.

## Q030
**Date:** 2026-09-02
**Topic:** Cloud Versus Self-Hosting
**Concept:** H6 — Vendor lock-in (3rd attempt at G010/M004, concrete scenario)
**Difficulty:** Level 3 (Application, targeted retest)
**Question:** Your company built its entire data pipeline on Vendor A's proprietary storage API. Vendor A just tripled their prices. You want to move everything to Vendor B instead. Why is that hard — and specifically, what would a standard API across vendors have changed about this situation?

### My Answer
> "This will be hard because vendor B's implementation will likely be super different from vendor A and the API that sits in front of vendor B services will probably be also different from vendor A as vendor is one is proprietary storage API. A standard API across vendors would have easily made the move from vendor A to vendor B easier because there's no need to change how we call the API."

### Assessment
🟢 Correct

### What I Got Right
- Correctly identified the difficulty as stemming from Vendor A's proprietary interface being incompatible with Vendor B's — a genuine cross-vendor switching cost, not a same-vendor adaptation issue.
- Correctly explained the standard-API benefit: calling code wouldn't need to change if the interface were standardized across vendors.
- This is the core meaning of lock-in, correctly applied to a concrete scenario — resolves G010/M004 after two prior attempts.

### What I Missed
Nothing.

### Model Answer
> Moving from Vendor A to Vendor B is hard because your pipeline's integration code is written directly against Vendor A's proprietary interface — migrating means rewriting that layer, not swapping a config value. That switching cost is precisely what "lock-in" means: you're stuck even at 3x the price, because leaving costs more (short-term) than paying. Real-world case study: Parse's 2016 shutdown gave every app built on it months to migrate off a proprietary backend, and companies with Parse SDK calls scattered through their codebase paid dearly for not having an abstraction layer. Senior-engineer mitigation, applied *before* lock-in: wrap the vendor's SDK behind your own interface (adapter/anti-corruption-layer pattern) so vendor-specific code lives in one small, swappable module. A standard API (S3-compatible storage is the best real example) gets you this for free across vendors.

### Knowledge Gap
None — fully resolved after 3 attempts total (Q18 skipped, Q19 landed on an adjacent-but-wrong idea, Q30 correct with a concrete scenario). Worth remembering: this concept needed a concrete before/after scenario to click, not just an abstract definition prompt — useful pattern for future difficult retests.

### Memory Priority
Low (resolved)

### Follow-up Required
No.

## Q031
**Date:** 2026-09-02
**Topic:** Operations in the Cloud Era
**Concept:** H10 — Capacity planning reframing (retest of G013/M005)
**Difficulty:** Level 1 (Recall, targeted retest)
**Question:** What does "capacity planning" become in the cloud era? (Not redundancy planning — that was wrong last time.)

### My Answer
> "Capacity planning has become financial planning in the cloud era."

### Assessment
🟢 Correct

### What I Got Right
Exact term correctly recalled.

### What I Missed
Nothing.

### Model Answer
> Financial planning — capacity questions in the cloud era are fundamentally budget questions, since you're never pre-buying fixed hardware, just committing to (or walking away from) ongoing metered spend. This is what spawned FinOps as a discipline: reserved-instance strategy, spot usage, rightsizing, and cost-per-team visibility.

### Knowledge Gap
None — G013/M005 resolved.

### Memory Priority
Low (resolved)

### Follow-up Required
No.

## Q032
**Date:** 2026-09-02
**Topic:** Cloud Computing Versus Supercomputing
**Concept:** H13 — Cloud computing vs. supercomputing (retest of G014/M006, final Weak concept)
**Difficulty:** Level 1 (Recall, targeted retest)
**Question:** Fill in the blank correctly this time: supercomputers typically use ___ network topologies, cloud datacenters typically use ___. And: which one assumes high trust between nodes (shared memory/RDMA), and which one assumes low trust (needs isolation/encryption)?

### My Answer
> "mesh, clos ip. supercomputers assumes high trust, cloud datacenters assumes low trust."

### Assessment
🟢 Correct

### What I Got Right
Topology assignment corrected (mesh → supercomputers, Clos/IP → cloud) and trust model both stated correctly and precisely.

### What I Missed
Nothing.

### Model Answer
> Supercomputers: mesh/torus interconnects, RDMA, high mutual trust (single job, single owner). Cloud datacenters: Clos/leaf-spine over IP-Ethernet, low mutual trust (many tenants sharing the same fabric) — which is *why* cloud networking stacks are built security-first (VM isolation, encryption-in-transit, per-tenant security groups) while HPC interconnects are built latency-first.

### Knowledge Gap
None — G014/M006 resolved. This closes out the last remaining Weak concept in the chapter; every concept is now Strong, Developing, or fully Mastered.

### Memory Priority
Low (resolved)

### Follow-up Required
No.

## Q033
**Date:** 2026-09-02
**Topic:** Introduction / Systems of Record and Derived Data
**Concept:** C1 (retest of G001) + C5 (retest of derived-data half)
**Difficulty:** Level 1 (Recall, batched light checks)
**Question:** (a) Why does the backend carry the harder data problem than the frontend, in the chapter's own words? (b) Give the definition of "derived data."

### My Answer
> "Because the back end has to serve a lot more users than the front end which just have to address a single user since it's client based. Derived data is data that has been sourced from the source of truth which is the system of record. This derived data could be transformed, it could be copied over. So long it's not the source of truth, that is what we call derived data."

### Assessment
🟢 Correct

### What I Got Right
Both answers correct: (a) backend serves many users, frontend addresses one client-based user — matches the text exactly. (b) derived data correctly defined as sourced/copied/transformed from the system of record, not itself the source of truth.

### What I Missed
Nothing.

### Model Answer
> (a) Backend is server-side code fanned out across every concurrent user simultaneously — one bad deploy or slow query plan has blast radius across the whole user base; frontend is client-side, blast radius of one device. This asymmetry is why backend engineering carries disproportionate on-call weight relative to frontend. (b) Derived data: computed or copied from the system of record — caches, search indexes, materialized views, trained models. Operational test: if you can rebuild it from the source by re-running a pipeline, it's derived (disposable — no backups needed beyond the ability to regenerate it); if losing it is unrecoverable, it's a system of record (needs real backups, replication, change-data-capture).

### Knowledge Gap
None — G001 and C5's derived-data half both resolved.

### Memory Priority
Low (resolved)

### Follow-up Required
No.

## Q034
**Date:** 2026-09-02
**Topic:** Data Warehousing
**Concept:** C4 (remaining 2 reasons) + H3 (retest of G008)
**Difficulty:** Level 1 (Recall, batched light checks)
**Question:** (a) Name the two reasons for the OLTP→warehouse split you didn't mention before (not schema mismatch, not performance impact). (b) What's the chapter's concrete example of reverse ETL?

### My Answer
> "The two reasons for the OLTP warehouse split is one, data silos, because data may be hosted separately in different databases, for example, order data, customer data, procurement data, etc. The second reason is due to a restricted network that the OLTP would be in. The reason why the OLTP will be in a restricted network is because it's dealing with live transaction data, live processing data. As such, by having the data from the OLTP to the warehouse, we don't have to deal with this security issue of data being behind a restricted network. The chapters concrete example of reverse ETL is to do with getting recommendation data, product recommendation data based on machine learning that was done on the raw data at the data lake level. So we need that data which could be in the form of numbers or slices or whatever. And we need that data in the form that can be received by the schema within the OLTP database."

### Assessment
🟢 Correct

### What I Got Right
(a) Data silos and restricted network both correctly named and reasonably explained, closing out all four of the chapter's split reasons. (b) Reverse ETL example correctly identified: an ML model trained on data lake/warehouse data producing recommendations, reshaped for OLTP consumption.

### What I Missed
Nothing material.

### Model Answer
> (a) Data silos: the same customer's data might live fragmented across Salesforce, Stripe, and three internal databases — the warehouse exists partly just to give one queryable view across all of them. Restricted network: production OLTP databases are deliberately locked down (VPC-internal, no direct analyst access) for security reasons unrelated to analytics — the warehouse is the sanctioned side door. (b) Reverse ETL example: a recommendation model trained on warehouse data, deployed back into the production path — the same general pattern used today for syncing computed scores into Salesforce/HubSpot via Census/Hightouch.

### Knowledge Gap
None — G008 (H3) and C4's remaining two reasons fully resolved. (G007/H2 is a separate, still-open item covered next.)

### Memory Priority
Low (resolved)

### Follow-up Required
No.

## Q035
**Date:** 2026-09-02
**Topic:** Data Warehousing / Cloud Native System Architecture
**Concept:** H2 (retest) + H7 (retest) + H8 (retest)
**Difficulty:** Level 2 (batched light checks)
**Question:** (a) Name the two specific technical needs (not "insights") that drive data scientists toward a data lake. (b) What specifically does S3 abstract away for Snowflake — and what does Snowflake still handle itself? (c) Name the two defining traits of a virtual disk (EBS) that make it different from a physical one.

### My Answer
> "Data scientists would prefer data lake because a data warehouse would have pre-configured schemas, whereas a data lake could have raw data in the form of images, videos, audios, and raw records. S3 abstract away the need to manage the virtual disk that house the different files at the back end and clients that use S3 would just need to worry about how they connect to S3 and how they would be able to retrieve objects from S3 ... the clients do not have to worry about virtual disk and how data flows from one instance to the other. A virtual disk is different from a physical one in that it is able to be accessed from many different instances versus a physical one that's attached to only one instance itself. The second trait that makes a virtual disk different than a physical one is that if we turn off the server that the virtual disk is connected to, the virtual disk was still persist across restarts."

### Assessment
🟠 Partially Correct

### What I Got Right
- (b) Storage abstraction correctly and precisely scoped this time — S3 handles virtual-disk/file management, without repeating the earlier overgeneralization to "no compute needed."
- (c) One trait reasonably captured: a virtual disk isn't bound to a single instance the way a physical disk is (portability, roughly).

### What I Missed
- (a) Still generic — restated the structural difference (raw formats vs. fixed schema) rather than naming feature engineering and NLP/CV extraction specifically. Two attempts now, gap persists.
- (b) Didn't state the second half: that Snowflake still fully provisions/manages its own compute for query processing.
- (c) The chapter's specific second trait — every I/O on a virtual disk is a network call, making it network-sensitive — still not named. Substituted a different true-but-not-targeted fact (persistence across restarts) instead.

### Model Answer
> (a) Two named mechanisms, memorize as a pair: **feature engineering** (turn raw signal into the numeric columns a model actually trains on — e.g. a raw clickstream into "sessions in last 7 days") and **NLP/CV extraction** (pull structured entities out of unstructured text/images — e.g. OCR-ing a receipt into line items). Both require raw, schema-flexible input — exactly what a lake provides and a warehouse's fixed schema blocks. (b) S3 = storage only. Snowflake still owns compute (the "virtual warehouse" that executes queries) — the part of the stack Snowflake's entire business is built on. Memory hook: "Snowflake rents the garage, keeps the mechanic." (c) Two virtual-disk traits, as a pair: **portable** (detach/reattach across instances — a physical disk can't do this) and **every I/O is a network call**, not a bus transaction (why it's slower than local NVMe and sensitive to network blips). Memory hook: a virtual disk is "a network service wearing a disk costume."

### Knowledge Gap
H2 and H8 are proving genuinely sticky after 2 attempts each — worth accepting as Developing rather than forcing a 3rd immediate retest; these are fine-grained named-mechanism recalls, not conceptual misunderstandings, so a spaced future check (not today) is the right next step. H7 is close — just needs the "Snowflake still handles compute" half stated explicitly.

### Memory Priority
Medium

### Follow-up Required
Yes, but not today — space out a future light check on H2 (feature engineering/NLP-CV) and H8 (network-call-per-I/O) specifically.

## Q036
**Date:** 2026-09-02
**Topic:** Data Systems, Law, and Society / Operational Versus Analytical Systems
**Concept:** H14 (retest of G015) + H1 (remaining table axes)
**Difficulty:** Level 1 (Recall, batched light checks — final batch)
**Question:** (a) Name the two named tensions from the law-and-society section: the architectural conflict with GDPR deletion, and the harder ML-related version. (b) From the OLTP/OLAP table, what's the difference in query type (fixed vs. ad-hoc) and machine use (the example given for each side)?

### My Answer
> "The architectural conflict with GDPR deletion is to do with logging which is typically an immutable append-only file and since it's an immutable append-only file, we will be wondering how to delete a record belonging to a user because then the file has to be mutable. Also from the ML related concern, when we use user data to train a model and that model is currently being used in production, we need to figure out how to remove the user data that was used to train this ML models when a user requests for it. The query type for OLTP is typically fixed within the app itself whereas OLAP queries are done ad hoc on the fly and free for all by the data scientists. The machine used for OLTP is typically to check if an action is allowed. Whereas for the OLAP one is typically to do with fraud detection."

### Assessment
🟢 Correct

### What I Got Right
All four sub-answers correct: (a) immutable append-only logs vs. deletion requests, and the trained-ML-model case, both precisely matching the chapter. (b) query type (fixed/app-built vs. ad-hoc/analyst-written) and machine use (check-permission vs. detect-fraud) both match the comparison table exactly.

### What I Missed
Nothing.

### Model Answer
> (a) GDPR deletion rights collide with immutable/append-only log architectures (solved in practice via crypto-shredding — discard the per-user key rather than mutate the log) and, harder still, with data already baked into a trained ML model's weights (no clean deletion mechanism exists in mainstream tooling today). (b) Query type: OLTP queries are fixed and built into the application (parameterized, known in advance — enables query-plan caching and tight security controls); OLAP queries are ad-hoc, written on the fly by analysts (can't be pre-optimized the same way, part of why OLAP engines are architected so differently — column stores, vectorized execution). Machine use: OLTP's "is this action allowed" is an authorization check; OLAP's fraud-detection example is exactly the workload HTAP exists to bring closer to real-time.

### Knowledge Gap
None — G015 resolved, H1's remaining axes fully covered. This closes the final light-check batch.

### Memory Priority
Low (resolved)

### Follow-up Required
No.

---
# Misconceptions

## M001
**Concept:** OLTP vs. OLAP human-user mapping (C3)
**My misconception:** Believed business analysts are OLTP users (grouped with software engineers), and that only data scientists use OLAP.
**Correct understanding:** OLTP's human user is the app's *end user* (not an internal role). Business analysts and data scientists are grouped together on the OLAP/analytics side — both "do analytics," reading data others generated, per the chapter's explicit three-group breakdown (backend engineers / business analysts / data scientists).
**Detected:** 2026-09-02 (Q003)
**Resolved:** ✅ Resolved 2026-09-02 (Q011) — correctly stated end user as OLTP's human user on retest.

## M002
**Concept:** Cloud native definition (C7)
**My misconception:** Believed "cloud native" means elastic/auto-scaling compute and serverless functions — i.e., infrastructure that scales itself on demand.
**Correct understanding:** Cloud native means an architecture built to use higher-level, disaggregated cloud services (e.g., object storage like S3 instead of a virtual disk) — not just running self-administered software on an auto-scaling VM (that's still self-hosting/IaaS). Elasticity is a downstream *benefit* of cloud native design, not its definition. This exact confusion was pre-flagged in `knowledge-map.md` as X5.
**Detected:** 2026-09-02 (Q007)
**Resolved:** ✅ Resolved 2026-09-02 (Q012) — correctly applied the definition to a brand-new, unseen example.

## M003
**Concept:** Analytics engineer role (H5)
**My misconception:** Believed analytics engineers produce business insights directly from data.
**Correct understanding:** Analytics engineers *shape/prepare* data so that analysts and data scientists — the roles that actually produce business insights — can use it more easily. It's a data-prep/support role, not an insight-production role.
**Detected:** 2026-09-02 (Q017)
**Resolved:** ✅ Resolved 2026-09-02 (Q027) — correctly distinguished analytics engineer (data-prep) from business analyst/data scientist (insight production), with a concrete example.

## M004
**Concept:** Vendor lock-in (H6)
**My misconception:** Believed vendor lock-in means having to tolerate/adapt to a vendor's own changes to their product (feature removals, API updates from that same vendor).
**Correct understanding:** Vendor lock-in specifically means being unable to easily switch to a *different, competing* vendor once you've built on one — because migrating away is expensive/risky (especially without a standardized API across providers, which would let you redirect existing integration code at a new vendor with minimal rewrite).
**Detected:** 2026-09-02 (Q018, confirmed on retest Q019)
**Resolved:** ✅ Resolved 2026-09-02 (Q030) — correctly explained the switching cost using a concrete "Vendor A → Vendor B" scenario.

## M005
**Concept:** Capacity planning reframing (H10)
**My misconception:** Believed "capacity planning" becomes "redundancy planning" in the cloud era.
**Correct understanding:** The chapter's actual reframing is "capacity planning" → **financial planning** (a budgeting question, since cloud billing is metered/usage-based rather than fixed pre-provisioned hardware). Redundancy planning is an unrelated concept about fault tolerance.
**Detected:** 2026-09-02 (Q023)
**Resolved:** ✅ Resolved 2026-09-02 (Q031) — correctly recalled "financial planning."

## M006
**Concept:** Cloud vs. supercomputer networking topology (H13)
**My misconception:** Believed cloud computing uses mesh networking topology, and described supercomputing as a "neighbour resource-sharing" model.
**Correct understanding:** The chapter assigns mesh/torus topologies to supercomputers (specialized, suited to known communication patterns) and Clos/IP-Ethernet topologies to cloud datacenters (for high bandwidth at scale) — the assignment was inverted.
**Detected:** 2026-09-02 (Q025)
**Resolved:** ✅ Resolved 2026-09-02 (Q032) — topology and trust model both correctly recalled.

---
# Mastered Concepts
- C2 — "No single best data system" thesis (Q002, clean correct answer including an unprompted forward connection)
- C6 — Cloud services vs. self-hosting (Q006, both decisions + spectrum positioning correct)
- H4 — HTAP (Q016, all clauses of a multi-part question answered correctly)
- H9 — Multitenancy (Q022, correct definition + correct risk)
- H12 — Serverless / FaaS (Q024, correct acronym, billing model, and two distinct trade-offs)
- H5 — Data engineers vs. analytics engineers (Q027/Q028, both gaps fully closed)
- H11 — Elasticity vs. scalability (Q029, distinguishing trait correctly recalled)
- H6 — Pros/cons of cloud services (Q030, vendor lock-in resolved via concrete scenario after 3 attempts)
- H10 — DevOps/SRE cloud-era ops shift (Q031, "financial planning" correctly recalled)
- H13 — Cloud computing vs. supercomputing (Q032, topology + trust model both corrected — last Weak concept resolved)
- C10 — Microservices (Q010, definition + central "people problem" argument + an unprompted correct downside)
- C3 — OLTP vs. OLAP (Q003 gaps fully corrected on Q011 retest: human-user mapping, dataset-size axis)
- C7 — Cloud native architecture (Q007 gap fully corrected on Q012 retest, using a brand-new example)
- C9 — Problems with distributed systems (Q009 gap fully corrected on Q013 retest — answer exceeded the model answer's precision)
- C1 — Data-intensive vs. compute-intensive (Q033, backend/frontend framing corrected)
- C5 — System of record vs. derived data (Q033, derived-data definition now complete)
- C4 — Data warehousing (Q034, all four split reasons now recalled)
- H3 — Reverse ETL (Q034, example now correctly recalled)
- H14 — Data systems, law, and society (Q036, both tensions correctly named)
- H1 — Point vs. aggregate query table (Q036, remaining axes covered)

---
# Weak Concepts
- (none — all 24 concepts are Strong, Developing, or Mastered; zero at the Weak tier)

---
# Concepts Requiring Review (low-priority, spaced future checks — not urgent)
1. H2 — Data lake (2 attempts, still hasn't named feature engineering + NLP/CV extraction specifically — genuinely sticky, needs real spacing before a 3rd try)
2. H8 — Separation of storage and compute (2 attempts, still hasn't named "every I/O is a network call" — genuinely sticky, needs real spacing before a 3rd try)
3. H7 — Layering of cloud services (one clause short: "Snowflake still handles compute" half not yet stated)
