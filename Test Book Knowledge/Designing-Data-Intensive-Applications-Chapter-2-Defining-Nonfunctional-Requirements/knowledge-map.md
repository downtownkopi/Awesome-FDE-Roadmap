---
title: "Knowledge Map — Chapter 2: Defining Nonfunctional Requirements"
book: "Designing Data-Intensive Applications, 2nd Edition"
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  This describes what should be known from the chapter. Not shown to the
  learner by default — used internally to drive question selection and
  coverage tracking. See source.md for full detail behind each item.
---

# Core Concepts (Critical)

- C1. **Functional vs. nonfunctional requirements** — functional requirements define what the app does (screens, buttons, operations); nonfunctional requirements define how well it does it (fast, reliable, secure, compliant, maintainable). Nonfunctional requirements are easy to leave unwritten but matter just as much.
- C2. **Response time vs. throughput** — response time is the elapsed time a client experiences for one request; throughput is the number of requests (or data volume) processed per second. Response time is usually what users care about; throughput drives required resources and cost.
- C3. **Percentiles as the right way to describe response time** — response time is a distribution, not a single number; the mean is a poor "typical experience" metric; median (p50) and tail percentiles (p95, p99, p999) describe it properly; high percentiles ("tail latencies") directly affect real users.
- C4. **Fault vs. failure** — a fault is one part of a system stopping working correctly; a failure is the system as a whole no longer providing its required service (i.e., no longer meeting its SLO). The same event can be a failure at one level and only a fault at a bigger level.
- C5. **Fault tolerance and single point of failure (SPOF)** — a fault-tolerant system keeps serving users despite certain faults; an SPOF is a part whose failure always escalates to system failure; fault tolerance is always bounded to a certain number/type of faults, never unlimited.
- C6. **Hardware faults vs. software faults** — hardware faults (disks, CPUs, RAM, datacenters) are relatively rare and largely independent; software faults are often highly correlated across nodes (same bug, same software) and harder to anticipate/fix.
- C7. **Humans and reliability / blameless postmortems** — human mistakes are usually a symptom of sociotechnical system flaws, not a standalone root cause; blaming individuals is counterproductive; blameless postmortems let organizations learn and prevent repeat incidents.
- C8. **Scalability defined** — a system's ability to cope with increased load; not a single yes/no label ("X is scalable" is meaningless) — it means answering specific questions about growth, added resources, and architectural limits.
- C9. **Shared-memory vs. shared-disk vs. shared-nothing architectures** — vertical scaling on one machine (shared-memory) vs. multiple machines sharing a disk array (shared-disk) vs. fully independent nodes coordinating over the network (shared-nothing/horizontal scaling); trade-offs of each.
- C10. **Maintainability's three principles** — operability (easy to keep running), simplicity (easy to understand), evolvability (easy to change) — the chapter's framework for designing for long-term maintenance.

# Supporting Concepts (High)

- H1. **Case study numbers** — 500M posts/day (5,800/sec average, up to 150,000/sec peak); average 200 follows/200 followers; used throughout to motivate performance/scalability concepts concretely.
- H2. **Fan-out and materialization** — fan-out is the multiplier from one request (a post) to many downstream requests (timeline updates per follower); materialization is precomputing/storing a query's result (a materialized view) to speed up reads at the cost of extra write work.
- H3. **Celebrity vs. ordinary-user timeline handling** — dropping writes is acceptable for a heavy-following ordinary user (low read likelihood per post) but not for a celebrity's fan-out (many followers depend on seeing the post); celebrity posts get stored/merged separately.
- H4. **Queueing and metastable failure** — response time rises sharply as throughput nears capacity because of queueing; an overloaded system can enter a self-sustaining overloaded state (metastable failure) via retry storms, persisting even after load drops, sometimes needing a full reset.
- H5. **Overload mitigation techniques** — exponential backoff (randomized retry delay), circuit breakers, token buckets, load shedding (server proactively rejects requests), backpressure (server asks client to slow down).
- H6. **Latency terminology** — response time (client-observed total) vs. service time (active processing) vs. queueing delay (waiting, not being processed) vs. latency (general term for non-processing time, incl. network latency); should always measure response time client-side because of head-of-line blocking.
- H7. **Tail latency amplification** — when a request requires multiple backend calls (even parallel), the overall request is only as fast as the slowest call; more required calls → higher chance at least one is slow → more end-user requests end up slow overall.
- H8. **SLO vs. SLA** — SLO is a target for performance/availability (e.g., median <200ms, p99 <1s, 99.9% non-error); SLA is a contract specifying consequences (e.g., refunds) if the SLO is missed.
- H9. **Percentile computation** — exact (sort all values in a rolling window) vs. approximate algorithms (HdrHistogram, t-digest, OpenHistogram, DDSketch) for lower cost; averaging percentiles directly is mathematically meaningless — combine histograms instead.
- H10. **Redundancy for hardware fault tolerance** — RAID, dual power supplies, hot-swappable CPUs, backup generators; works best when faults are independent, but real faults show correlation (racks/datacenters can fail together); availability zones group co-located, correlated-risk resources.
- H11. **Rolling upgrades** — a benefit of multi-node fault tolerance: patch/restart one node at a time with no downtime, vs. a single-server system needing planned downtime.
- H12. **Software fault categories** — simultaneous-trigger bugs (same bug fires on all nodes at once), runaway resource-consuming processes, a slow/corrupting dependency, emergent behavior from system interactions, cascading failures.
- H13. **Chaos engineering / fault injection** — deliberately triggering faults (e.g., killing processes at random) to continually exercise and validate fault-tolerance mechanisms, increasing confidence they work when faults occur naturally.
- H14. **The Post Office Horizon scandal** — concrete real-world example of unreliable software causing severe harm (wrongful convictions), rooted partly in a legal presumption that computer evidence is correct unless proven otherwise.
- H15. **Understanding load** — describing current load with concrete throughput/peak numbers before discussing growth scenarios; other load characteristics (read/write ratio, cache hit rate, items per user) that affect scalability requirements.
- H16. **Two ways to study load increase** — (a) fix resources, increase load, observe performance change; (b) increase load, ask how much more resource is needed to hold performance steady.
- H17. **Linear scalability** — doubling resources handles double the load at the same performance; a good but non-default outcome, since cost commonly grows faster than load.
- H18. **Principles for scalability** — no universal "magic scaling sauce" (architecture is workload-specific, not just throughput-number-specific); architectures need rethinking roughly every order-of-magnitude load increase; split systems into independent components; don't add complexity you don't need.
- H19. **Operability practices** — monitoring/observability support, avoiding single-machine dependency, clear documentation and predictable operational model, good defaults with override options, self-healing with manual control retained, predictable behavior.
- H20. **Essential vs. accidental complexity** — essential complexity is inherent to the problem domain; accidental complexity comes only from tooling limitations; the distinction is useful but imperfect, since tooling evolves and shifts the boundary.
- H21. **Abstraction as a complexity tool** — hiding implementation detail behind a clean, reusable interface (e.g., high-level languages hiding machine code, SQL hiding storage/concurrency/crash-recovery detail); this book's abstractions are general-purpose (transactions, indexes, event logs), not application-specific (design patterns, DDD).
- H22. **Evolvability and irreversibility** — evolvability is data-system-level agility, tied to simplicity and good abstractions; irreversible actions (e.g., a one-way database migration) raise the stakes of change and should be minimized to preserve flexibility.

# Definitions (must be able to state precisely)

- functional requirement, nonfunctional requirement
- response time, throughput, service time, queueing delay, latency, network latency
- mean/average response time, median (p50), percentile (p95/p99/p999), tail latency
- SLO (service level objective), SLA (service level agreement)
- fault, failure, fault-tolerant, single point of failure (SPOF)
- fault injection, chaos engineering
- availability zone, rolling upgrade
- scalability, linear scalability
- vertical scaling (scaling up), shared-memory architecture, shared-disk architecture, shared-nothing architecture (horizontal scaling / scaling out)
- operability, simplicity, evolvability
- essential complexity, accidental complexity, abstraction
- fan-out, materialization, materialized view
- metastable failure, retry storm
- irreversibility

# Relationships

- R1. Response time (C2/C3) feeds directly into SLOs/SLAs (H8) — percentile targets are the concrete mechanism by which "performance" becomes a measurable, contractual requirement.
- R2. Fault (C4) tolerance (C5) is what produces reliability — reliability is defined as "continuing to work correctly [i.e., not failing] even when things [faults] go wrong."
- R3. Hardware fault correlation being low (C6/H10) → redundancy works reasonably well for hardware; software fault correlation being high (C6/H12) → the same redundancy strategy does not fix software faults, requiring different practices (testing, isolation, monitoring).
- R4. The case study's polling design (H1) fails at throughput scale → materialization + fan-out (H2) is the fix → which itself creates a new scalability edge case for celebrities (H3), showing performance/scalability trade-offs are concrete, not abstract.
- R5. Queueing (H4) is the mechanistic link between throughput (C2) and response time (C3): as throughput nears capacity, queueing delay (H6) dominates response time, explaining the sharp response-time curve.
- R6. Tail latency amplification (H7) explains why C3's "high percentiles matter" claim gets worse, not better, in real backend architectures made of many services calling each other.
- R7. Shared-nothing architecture's advantages (C9) — linear-ish scaling, flexible hardware choice, easy resource adjustment — connect directly to H18's "split into independent components" scalability principle.
- R8. Simplicity (C10/H20/H21) and evolvability (C10/H22) are linked: good abstractions reduce complexity (simplicity) and also make future change safer/easier (evolvability) — they are not two unrelated goals.
- R9. Automation (H19) both helps operability (C10) at scale and can hurt it (harder-to-debug automated failures) — the chapter frames this as a genuine trade-off, not a one-directional "more automation is better" claim.

# Processes / Sequences

- P1. **Naive timeline read (polling) sequence**: client repeats the join query on posts/follows/users every few seconds → does not scale past a modest number of concurrent users, because query cost multiplies by both users and follows-per-user.
- P2. **Materialized timeline write sequence (fan-out)**: user makes a post → system looks up all followers → system inserts the post into each follower's precomputed home-timeline structure → follower's client is notified/reads from the precomputed timeline.
- P3. **Overload → metastable failure sequence**: system nears capacity → queueing delay rises → response times increase → clients time out and retry → retry volume increases further → system stays overloaded even after original load drops, until reset.
- P4. **Blameless postmortem sequence**: incident occurs → people involved share full details without fear of punishment → organization learns the sociotechnical causes → org changes priorities/investment/incentives/systemic issues as needed.
- P5. **Scalability investigation sequence**: measure current load (H15) → ask what happens if load grows in a specific way → identify bottleneck/dimension → decide when the current architecture will hit its limit → rework architecture (roughly one order of magnitude ahead, per H18).

# Arguments & Principles

- A1. "It is meaningless to say 'X is scalable' or 'Y doesn't scale'" — scalability must be discussed via specific growth/resource/limit questions (C8), not as a binary property.
- A2. "You're not Google/Amazon, stop worrying about scale" is conditionally true — appropriate for early-stage, low-user products where simplicity/flexibility should dominate; not a universal rule.
- A3. "There is no such thing as a generic, one-size-fits-all scalable architecture" (no "magic scaling sauce") — architecture must fit the application's specific access pattern, not just its raw throughput number (H18).
- A4. "Good operations can often work around the limitations of bad software, but good software cannot run reliably with bad operations" — the chapter's explicit claim that operational quality dominates software quality for reliability.
- A5. "Human error" is a symptom of the sociotechnical system, not the root cause of an incident — the chapter's explicit reframing against simplistic blame (C7).
- A6. "Blaming people for mistakes is counterproductive" — paired with the observation that orgs often choose features over resilience investment, so blame misattributes an organizational priority problem to an individual.
- A7. Prevention is sometimes better than tolerance — specifically for faults with no cure, security breaches being the paradigm case, since a data leak cannot be undone.
- A8. "The majority of the cost of software is not in its initial development but in its ongoing maintenance" — the foundational claim motivating the maintainability section (C10).
- A9. Minimizing irreversibility improves flexibility — the chapter's explicit link between evolvability (C10/H22) and the riskiness of hard-to-reverse decisions.
- A10. Do not add complexity you do not need — a single-machine database is often preferable to an unnecessary distributed setup; autoscaling is not automatically better than manual scaling if load is predictable (part of H18).

# Examples (materially explain concepts — worth being able to cite)

- E1. **Amazon defining internal SLOs by the 99.9th percentile** — concrete example of why tail latencies matter even though they affect only 1 in 1,000 requests (high-value customers tend to be the slow-request users).
- E2. **The 2012 leap-second bug hanging Java applications on many nodes simultaneously** — concrete example of a highly correlated software fault (H12).
- E3. **A firmware bug causing all SSDs of certain models to fail at exactly 32,768 hours of operation** — another concrete correlated-software/firmware-fault example.
- E4. **Post Office Horizon scandal** — see H14; the chapter's central real-world illustration of "how important is reliability?"
- E5. **HdrHistogram, t-digest, OpenHistogram, DDSketch** — named open source libraries for efficient/approximate percentile computation (H9).
- E6. **Circuit breakers, token buckets, exponential backoff, load shedding, backpressure** — named overload-mitigation techniques (H5).
- E7. **A parent's stored family photos being corrupted** — the chapter's illustrative example of why permanent data loss (not just temporary outage) is catastrophic, unlike a brief outage.

# Easily Confused Concepts

- X1. **Latency vs. response time** — the chapter deliberately distinguishes them: response time is the client-observed total (including queueing + service time); latency is specifically time NOT being actively processed. Colloquially people use them interchangeably, but this book does not.
- X2. **Fault vs. failure** — a fault is a component-level malfunction; a failure is system-level loss of required service. The same event is a failure from a small system's viewpoint and only a fault from a bigger system's viewpoint (C4).
- X3. **Mean vs. median vs. percentile** — the mean is useful for estimating throughput limits but is a poor "typical experience" measure; median/percentiles describe the actual distribution experienced by users (C3).
- X4. **Shared-disk vs. shared-nothing vs. cloud-native storage/compute separation** — shared-disk uses a generic filesystem/block-device abstraction (NAS/SAN) with contention/locking limits; the newer cloud-native pattern looks similar (multiple compute nodes, shared storage service) but uses a specialized API instead, avoiding the old scalability problems — don't conflate the two.
- X5. **Scalability vs. throughput vs. performance** — scalability is about how the system copes as load *grows* (a dynamic, resource-vs-load relationship); throughput and response time are performance *metrics* at a given load; scalability is not itself a single number.
- X6. **Essential vs. accidental complexity** — essential complexity is inherent to the problem; accidental complexity comes from tooling limits — but the chapter flags this boundary as itself fuzzy and shifting as tooling evolves (H20), so don't treat it as a clean, fixed split.
- X7. **Vertical scaling vs. horizontal scaling costs** — vertical (shared-memory) scaling cost grows faster than linearly and hits a ceiling; horizontal (shared-nothing) scaling has the *potential* for linear scaling but requires explicit sharding and full distributed-systems complexity — "more scalable" isn't automatically "simpler" or "cheaper."
- X8. **Blameless postmortems vs. "no accountability"** — blameless does not mean consequence-free or that individual actions don't matter; it means treating an incident as a systems-learning opportunity rather than assigning simplistic personal blame (C7/A5/A6).

# High-Value Details

- D1. Case study numbers: 500M posts/day, 5,800 posts/sec average, up to 150,000 posts/sec peak; 200 average follows/followers; naive polling design needs ~400M lookups/sec at 10M concurrently online users; materialized fan-out design needs ~1M timeline writes/sec at fan-out factor 200.
- D2. Percentile example: p95 = 1.5s means 95/100 requests finish under 1.5s, 5/100 take 1.5s or more.
- D3. Example SLO: median <200ms, p99 <1s, ≥99.9% non-error responses.
- D4. Hardware failure rates: magnetic HDDs 2%–5%/year; SSDs 0.5%–1%/year (but ~1 uncorrectable error/drive/year); ~1 in 1,000 machines has a defective CPU core; ECC RAM still sees >1% of machines with an uncorrectable error/year.
- D5. One study: operator configuration changes were the leading cause of outages at large internet services; hardware caused only 10%–25% of cases.
- D6. Post Office Horizon scandal: 1999–2019, hundreds of wrongful convictions in Britain, reversed once software bugs were identified as the actual cause of the "shortfalls."

# Dependencies (must understand X before Y)

- Response time vs. throughput (C2) → before percentiles (C3) — percentiles are a way of describing the response-time distribution introduced by C2.
- Fault vs. failure (C4) → before fault tolerance / SPOF (C5) — C5's definitions depend directly on C4's distinction.
- Fault tolerance (C5) → before hardware vs. software faults (C6) — C6 categorizes the specific fault types C5's mechanisms must handle.
- Queueing (H4) → before tail latency amplification (H7) — H7 builds on the queueing-driven relationship between throughput and response time.
- Case study polling failure (P1/H1) → before materialization/fan-out (H2/P2) — the fan-out design is presented explicitly as the fix for polling's scalability failure.
- Understanding load (H15/P5) → before principles for scalability (H18) — you must be able to describe current load before the chapter's scaling principles make sense.
- Simplicity/abstraction (C10/H20/H21) → before evolvability (C10/H22) — the chapter presents evolvability as depending on a system already being simple and well-abstracted.

---
# Importance Legend
Critical = essential to the chapter's core argument. High = important supporting structure. Medium = useful detail/example. Low = color/stat, not core.
