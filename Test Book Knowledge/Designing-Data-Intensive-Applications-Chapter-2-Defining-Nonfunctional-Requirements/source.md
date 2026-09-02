---
title: "Chapter 2 — Defining Nonfunctional Requirements"
book: "Designing Data-Intensive Applications, 2nd Edition"
original_file: "Book - Designing Data-Intensive Applications/2. Defining-Nonfunctional-Requirements.pdf"
status: source reference — do not edit
style: "Written in controlled technical English (ASD-STE100 principles): short sentences, one idea per sentence, active voice, plain approved-style vocabulary, no filler."
---

# Note on this file

This is a condensed version of Chapter 2 (24 pages). It keeps the
definitions, key claims, and tables you need for testing. It removes
anecdotes, most citations, and filler wording. Each idea is one short
sentence. The original PDF stays the source of truth in the project
folder.

---

## Introduction

- Functional requirements state what an application must do: its
  screens, its buttons, and the purpose of each operation.
- Nonfunctional requirements state how well the application must work:
  fast, reliable, secure, legally compliant, and easy to maintain.
  Teams often do not write these down, but they matter as much as
  functional requirements. A very slow or unreliable app is as bad as
  no app.
- This chapter covers four nonfunctional requirements: performance,
  reliability, scalability, and maintainability. Security is out of
  scope for this book.

## Case Study: Social Network Home Timelines

- The case study: a simplified social network like X (formerly
  Twitter). Users post messages and follow other users.
- Assumptions: 500 million posts per day (5,800 posts per second on
  average, up to 150,000 posts per second at peak). The average user
  follows 200 people and has 200 followers. Follower counts vary
  widely; some celebrities have over 100 million followers.
- **Home timeline**: the main read operation. It shows recent posts
  from the people a user follows.
- A naive SQL query joins the posts, follows, and users tables to
  build the home timeline on each read.
- **Polling**: the client repeats the timeline query every few
  seconds to check for new posts. This does not scale: with 10
  million users online and a 5-second freshness target, polling runs
  the query 2 million times per second. Each execution scans up to
  200 followed accounts, giving about 400 million lookups per second.

### Materializing and Updating Timelines

- A better design: push new posts to followers instead of polling,
  and precompute (materialize) each user's home timeline instead of
  computing it on every read.
- **Fan-out**: when one request (a new post) triggers many downstream
  requests (one timeline update per follower). The fan-out factor is
  the number of downstream requests per initial request.
- At 5,800 posts per second and a fan-out factor of 200, the system
  needs about 1 million home-timeline writes per second. This is
  fewer than the 400 million per-second lookups of the polling
  design.
- Under a load spike, timeline updates can be queued instead of done
  immediately. Reads stay fast because they come from a
  precomputed cache.
- **Materialization**: precomputing and storing the result of a
  query, instead of computing it fresh on each read. The stored
  result is a **materialized view**. It speeds up reads but adds work
  on writes.
- Two edge cases for materialized timelines:
  - A user who follows many active accounts gets a high write rate to
    their own timeline. It is acceptable to drop some of these
    writes and show only a sample, because the user is unlikely to
    read every post anyway.
  - A celebrity account with many followers creates a huge fan-out on
    each post. Dropping these writes is not acceptable. One fix:
    store celebrity posts separately, and merge them into each
    reader's timeline only at read time.

## Describing Performance

- **Response time**: the elapsed time from a client's request to the
  client's received answer. Measured in seconds, milliseconds, or
  microseconds.
- **Throughput**: the number of requests, or the amount of data, a
  system processes per second. For a fixed amount of hardware, there
  is a maximum throughput.
- As throughput approaches the maximum a system can handle, response
  time rises sharply. This happens because of **queueing**: an
  incoming request must wait if the system is still busy with earlier
  requests.
- **Metastable failure**: an overloaded system can enter a state
  where it stays overloaded even after the original load drops,
  because clients time out and retry, adding even more load (a
  **retry storm**). Recovery may need a full reset.
- Techniques to prevent or contain overload: exponential backoff with
  randomized retry delays, circuit breakers (temporarily stop calling
  a failing service), token buckets, load shedding (the server
  rejects some requests on purpose), and backpressure (the server
  asks clients to slow down).
- **A system is scalable if its maximum throughput can be
  significantly increased by adding computing resources.**

### Latency and Response Time

- **Response time**: what the client observes. It includes every
  delay in the system.
- **Service time**: the time the service spends actively processing
  the request.
- **Queueing delay**: time a request waits before or during
  processing, without being actively worked on.
- **Latency**: a general term for time a request spends not being
  actively processed. **Network latency** is the time a request or
  response spends traveling over the network.
- Response time varies between identical requests. Causes: background
  process switches, network packet loss and retransmission, garbage
  collection pauses, disk page faults, and other random delays.
- **Head-of-line blocking**: a server can process only a limited
  number of requests in parallel. A few slow requests can delay many
  later requests, even if those later requests are individually fast
  to serve. Because of this, always measure response time on the
  client side, not the server side.

### Average, Median, and Percentiles

- Response time is a distribution of values, not a single number. Use
  a distribution, not one number, to describe it.
- **Mean (average) response time**: sum of all response times divided
  by the count. Useful for estimating throughput limits, but a poor
  measure of the "typical" experience, because it does not say how
  many users saw that delay.
- **Percentiles** describe the distribution better. Sort response
  times from fastest to slowest.
  - **Median (p50)**: the halfway point. Half of requests finish
    faster, half finish slower.
  - **p95, p99, p999**: the 95th, 99th, and 99.9th percentiles.
    Example: a p95 of 1.5 seconds means 95 of 100 requests finish
    under 1.5 seconds, and 5 finish at 1.5 seconds or slower.
  - High percentiles are called **tail latencies**. They matter
    because they directly affect real users, including high-value
    customers whose accounts hold the most data.
  - Reducing very high percentiles (e.g., p9999) gets difficult and
    expensive fast, because those delays come from many small,
    hard-to-control causes, and the benefit shrinks.

### Use of Response Time Metrics

- **Tail latency amplification**: when a request needs several
  backend calls (even in parallel), the whole request is only as fast
  as its slowest call. More required backend calls means a higher
  chance that at least one is slow, so a bigger share of end-user
  requests end up slow.
- **SLO (service level objective)**: a target for a service's
  performance and availability. Example: median response time under
  200 ms, p99 under 1 second, at least 99.9% non-error responses.
- **SLA (service level agreement)**: a contract stating what happens
  if the SLO is not met, for example a customer refund.
- Percentiles for a rolling time window can be computed exactly (sort
  all response times in the window) or approximated with algorithms
  such as HdrHistogram, t-digest, OpenHistogram, or DDSketch, for
  lower CPU and memory cost.
- Do not average percentiles directly; doing so is mathematically
  meaningless. To combine percentile data (across machines or time
  windows), combine the underlying histograms instead.

## Reliability and Fault Tolerance

- **Reliability**, informally: the system keeps working correctly,
  even when things go wrong. Working correctly includes: doing what
  the user expects, tolerating user mistakes, performing well enough
  for the expected load, and preventing unauthorized access.
- **Fault**: one part of a system stops working correctly (a disk
  fails, a machine crashes, a dependency has an outage).
- **Failure**: the system as a whole stops providing the required
  service to the user — it no longer meets its SLO.
- A fault at one level can be a failure at another level. Example: one
  failed hard drive is a failure of that drive, but only a fault to a
  larger system that has other drives to fall back on.
- **Fault-tolerant system**: continues serving users despite certain
  faults occurring.
- **Single point of failure (SPOF)**: a part whose fault always causes
  the whole system to fail, because the system cannot tolerate a
  fault there.
- Fault tolerance always has limits: a system tolerates a maximum
  number of faults of a given type (e.g., up to two disks failing at
  once). No system tolerates unlimited faults.
- **Fault injection**: deliberately triggering faults (e.g., randomly
  killing processes) to test that fault-tolerance mechanisms actually
  work. **Chaos engineering** is the discipline built around this
  practice.
- Prevention is sometimes better than tolerance, mainly for faults
  with no cure — security breaches are the clearest example, because
  a data leak cannot be undone.

### Hardware and Software Faults

- Approximate yearly failure rates: magnetic hard drives 2%–5%; solid
  state drives (SSDs) 0.5%–1% (but SSDs get uncorrectable errors about
  once per drive per year, a higher error rate than hard drives). - Imagine your SSD has a book stored in it. Sometimes, a few letters in a word get damaged. The SSD has a spell-checker (error correction) that can figure out the missing letters and fix them. An uncorrectable error is when too many letters are damaged and the SSD can no longer figure out what the original word said. The drive may still work, but that particular piece of data may be unreadable.
  Other hardware (power supplies, RAID controllers, memory modules) fails less often than drives.
- About 1 in 1,000 machines has a CPU core that occasionally computes
  a wrong result, usually from a manufacturing defect.
- RAM data can be corrupted by cosmic rays or physical defects. Even
  with error-correcting code (ECC) memory, over 1% of machines hit an
  uncorrectable memory error in a year, usually causing a crash.
- An entire datacenter can become unavailable (power outage, network
  misconfiguration) or be destroyed (fire, flood, earthquake, solar
  storm). Rare, but the impact can be severe.
- These faults are common enough in large-scale systems that they
  become part of normal operation, even though a small system can
  often ignore them.
- **Redundancy** is the usual first response to hardware faults: RAID
  disk arrays, dual power supplies, hot-swappable CPUs, backup
  generators. It works best when faults are independent, but real
  hardware faults show meaningful correlation (an entire rack or
  datacenter can go down together).
- Because hardware redundancy alone is not enough, distributed
  systems add software-level fault tolerance across machines, racks,
  and **availability zones** (groups of resources that are physically
  close and so more likely to fail together).
- A fault-tolerant, multi-node system also gives an operational
  benefit: a **rolling upgrade** — patch and restart one node at a
  time, with no downtime for users. A single-server system needs
  planned downtime instead.
- **Software faults** are typically more correlated than hardware
  faults, because many nodes run the same software and so share the
  same bugs. Examples: a bug triggered on all nodes at once (e.g., a
  leap-second bug); a runaway process that exhausts a shared resource
  (CPU, memory, disk, bandwidth); a dependency that slows down or
  returns bad data; emergent behavior from interacting systems;
  **cascading failures**, where one overloaded component slows down
  and overloads the next.
- Software faults often stay hidden until an unusual situation breaks
  an assumption the software made about its environment. There is no
  single fix; useful practices include reviewing assumptions,
  thorough testing, process isolation, allowing crash-and-restart,
  avoiding retry storms, and monitoring production behavior.

### Humans and Reliability

- People build and operate systems, and people make mistakes despite
  good intentions. One study found operator configuration changes,
  not hardware, caused most outages at large internet services
  (hardware caused only 10%–25%).
- Calling a mistake "human error" and trying to fix it with stricter
  rules is usually not productive. A person's mistake is normally a
  symptom of a flaw in the surrounding **sociotechnical system**, not
  a standalone root cause.
- Helpful technical measures: thorough testing (including
  property-based testing on random inputs), fast rollback for
  configuration changes, gradual code rollouts, clear monitoring, and
  observability tools.
- These measures cost time and money, and organizations often choose
  new features over resilience investment. When a preventable mistake
  then happens, blaming the individual ignores the organization's
  actual priorities.
- **Blameless postmortem**: after an incident, people share what
  happened without fear of punishment, so the organization can learn
  and prevent repeats. This can reveal needed changes to priorities,
  investment, or incentives.
- When investigating an incident, be suspicious of simple explanations
  that blame one person or demand one drastic technical fix. Instead,
  learn how the system actually works from the people who use it
  daily, and improve it based on that.

### How Important Is Reliability?

- Reliability matters beyond safety-critical systems. Bugs in
  business software cost lost productivity and legal risk; ecommerce
  outages cost revenue and reputation.
- A short outage is often tolerable, but permanent data loss or
  corruption is usually not — for example, losing a family's stored
  photos.
- The Post Office Horizon scandal (UK, 1999–2019): faulty accounting
  software showed shortfalls, and hundreds of branch managers were
  wrongly convicted of theft or fraud before the software bugs were
  found. It happened partly because English law presumed computer
  evidence correct unless proven otherwise.
- Sometimes reliability is deliberately traded for lower development
  cost, for example an early prototype for an unproven market. This
  choice should be made consciously, with the risks understood.

## Scalability

- **Scalability**: a system's ability to cope with increased load
  (more users, more data, or both).
- "You don't need to worry about scale" is not a universal rule. It
  depends on the application. Early-stage products should usually
  prioritize simplicity and the ability to change direction over
  scaling for hypothetical future load.
- Scalability is not a single yes/no label. Useful questions instead:
  what happens as the system grows in a specific way; how to add
  resources to handle more load; when the current architecture will
  hit its limits.

### Understanding Load

- Describe current load with concrete numbers before discussing
  growth: requests per second, new data per day, checkouts per hour,
  or a peak value like simultaneous online users.
- Other load characteristics also matter: read/write ratio, cache hit
  rate, or data items per user. Which one matters depends on the
  application.
- Two ways to study the effect of more load:
  - Keep resources fixed and increase load: how does performance
    change?
  - Increase load and ask how much more resource is needed to keep
    performance the same?
- **Linear scalability**: doubling resources lets the system handle
  double the load at the same performance. This is a good outcome,
  and it is not automatic — cost commonly grows faster than load.

### Shared-Memory, Shared-Disk, and Shared-Nothing Architectures

- **Vertical scaling (scaling up)**: move to a single, more powerful
  machine (more CPU cores, RAM, disk).
- **Shared-memory architecture**: multiple threads or processes on
  one machine share the same RAM. Cost grows faster than linearly: a
  machine with twice the resources typically costs much more than
  twice as much, and bottlenecks mean it rarely handles twice the
  load either.
- **Shared-disk architecture**: several machines with their own CPU
  and RAM share a common disk array over a fast network (NAS or SAN).
  Used traditionally for on-premises data warehouses. Locking overhead
  and contention limit its scalability.
- **Shared-nothing architecture (horizontal scaling / scaling out)**:
  a distributed system of nodes, each with its own CPU, RAM, and
  disk. Coordination between nodes happens over an ordinary network,
  at the software level.
- Shared-nothing advantages: can scale close to linearly, can use
  whichever hardware has the best price/performance (especially in
  the cloud), can add or remove resources easily, and can gain fault
  tolerance by spreading across datacenters and regions.
- Shared-nothing downsides: it needs explicit sharding, and it carries
  the full complexity of distributed systems.
- Some cloud native databases separate storage and compute into
  distinct services, with several compute nodes sharing one storage
  service. This resembles shared-disk, but the storage service
  exposes a purpose-built API rather than a generic filesystem or
  block-device interface, avoiding the older scalability problems.

### Principles for Scalability

- There is no universal, one-size-fits-all scalable architecture
  ("magic scaling sauce"). The right architecture is highly specific
  to the application's actual access pattern, not just its raw
  throughput number.
- An architecture that works at one load level usually cannot handle
  10 times that load without a rework. Plan scaling roughly one order
  of magnitude ahead, not further, since needs keep changing.
- General principle: split a system into smaller, largely independent
  components. This underlies microservices, sharding, stream
  processing, and shared-nothing architectures. The hard part is
  deciding where to split.
- General principle: do not add complexity you do not need. A
  single-machine database beats an unnecessary distributed setup.
  Autoscaling helps with unpredictable load, but manual scaling can
  be simpler and cause fewer surprises when load is predictable. Fewer
  moving parts is usually easier to run.

## Maintainability

- Software does not physically wear out, but requirements change, the
  surrounding environment changes, and bugs need fixing. Most of an
  application's lifetime cost is maintenance, not initial
  development.
- Legacy systems can be hard to maintain: outdated technology,
  departed staff who understood the original design, and other
  people's past decisions to work around. Maintaining such systems is
  as much a people problem as a technical one.
- Every system that stays valuable long enough eventually becomes a
  legacy system. Design with future maintenance in mind. Three guiding
  principles:
  - **Operability**: make it easy for an organization to keep the
    system running.
  - **Simplicity**: make it easy for new engineers to understand the
    system, through consistent, well-understood patterns and less
    unnecessary complexity.
  - **Evolvability**: make it easy for engineers to change the system
    as requirements change.

### Operability: Making Life Easy for Operations

- Good operations can work around weak software, but good software
  cannot run reliably under bad operations.
- At large scale, manual maintenance is too costly, so automation is
  essential. But more automation is not automatically better: edge
  cases still need a human, and an automated system that fails can be
  harder to debug than a manually operated one. The right amount of
  automation depends on the specific system and organization.
- Good operability lets the operations team spend time on high-value
  work instead of routine tasks. Ways data systems can help: support
  monitoring and observability tools; avoid depending on any single
  machine, so machines can be taken down for maintenance without an
  outage; provide clear documentation and a predictable operational
  model ("if I do X, Y happens"); give good defaults but allow
  overrides; self-heal where reasonable, but still allow manual
  control; behave predictably, with few surprises.

### Simplicity: Managing Complexity

- Small projects can stay simple; large projects tend to get complex,
  and that complexity slows everyone down and raises maintenance
  cost. A very tangled codebase is sometimes called a "big ball of
  mud."
- Complexity increases the risk of bugs when the system is changed,
  because hidden assumptions and unexpected interactions get missed
  more easily.
- Simplicity is not fully objective. One system can hide complexity
  behind a simple interface; another can expose more detail through a
  simpler implementation. Which one counts as "simpler" is often a
  judgment call.
- One (imperfect) way to categorize complexity: **essential**
  complexity (inherent in the problem itself) versus **accidental**
  complexity (caused only by limits of current tools).
- **Abstraction** is a major tool for managing complexity: hide
  implementation detail behind a clean interface, and reuse that
  interface across many applications. Examples: high-level
  programming languages hide machine code; SQL hides on-disk data
  structures, concurrency, and crash recovery.
- This book focuses on general-purpose abstractions for building data
  systems (transactions, indexes, event logs), not on
  application-specific abstraction techniques such as design patterns
  or domain-driven design (DDD).

### Evolvability: Making Change Easy

- Requirements rarely stay fixed: new facts, new use cases, changing
  business priorities, user requests, new platforms, and new legal or
  regulatory rules all drive change.
- Agile working patterns, test-driven development, and refactoring
  are organizational and technical tools for adapting to change.
- **Evolvability**: the data-system-level version of agility. It
  depends closely on a system's simplicity and the quality of its
  abstractions. Loosely coupled, simple systems are easier to change
  than tightly coupled, complex ones.
- **Irreversibility** makes change harder and riskier. Example:
  migrating to a new database is much lower-risk if you can still
  switch back on problems. Minimizing irreversible actions preserves
  flexibility.

## Summary

- This chapter covered four nonfunctional requirements: performance,
  reliability, scalability, and maintainability, through a social
  network home-timeline case study.
- **Performance**: measure it with response-time percentiles;
  describe load with throughput metrics; both feed into SLAs.
- **Scalability**: keeping performance stable as load grows. A useful
  general principle is splitting a system into smaller, independent
  parts.
- **Reliability**: achieved mainly through fault tolerance — the
  system keeps serving users despite a faulty component. Hardware
  faults and software faults differ mainly in correlation (software
  faults tend to be far more correlated across nodes). Reliability
  also depends on managing human mistakes well, for example through
  blameless postmortems.
- **Maintainability**: covers supporting operations, managing
  complexity, and making change easy over time. No single technique
  solves this, but building on well-understood, general-purpose
  abstractions helps.
