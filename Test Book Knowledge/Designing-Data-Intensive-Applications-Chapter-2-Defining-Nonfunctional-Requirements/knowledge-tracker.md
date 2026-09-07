# Knowledge Mastery Tracker

## Chapter
**Book:** Designing Data-Intensive Applications, 2nd Edition (Martin Kleppmann)
**Chapter:** 2 — Defining Nonfunctional Requirements

## Overall Progress
- Questions attempted: 70
- Correct: 31
- Mostly correct: 12
- Partially correct: 22
- Incorrect: 1
- Don't know: 3
- Overall demonstrated mastery: Strong — 68 questions attempted, all 32 chapter concepts touched at least once (breadth complete); all 10 Critical concepts fully mastered. 1 High concept (H15) remains genuinely sticky after two failed attempts on the same specific sub-point. Note: an earlier Q023 entry (H13, chaos engineering) was logged as answered/Correct but the user confirmed they did not actually submit that answer — entry removed, H13 reverted to Untested, then genuinely retested at Q024. Grading correction at Q064 (H4): prior grading (Q014/Q033/Q055) held the "sharpness" answer to a nonlinear-queueing-math standard not actually present in this chapter's source.md (lines 87-94). Re-graded against the actual source depth.

---
# Knowledge Gaps

| ID | Topic | Concept | Gap | Importance | Severity | Status | Attempts | Correct |
|---|---|---|---|---|---|---|---:|---:|
| G001 | Response Time and Latency | Response time vs. throughput — "who cares about which" (C2) | Resolved (Q050 retest): correctly states users care about response time because it's what they directly experience — the last missing half from Q002/Q042. | Critical | Low | ✅ Resolved | 3 | 1 |
| G002 | Reliability | Fault vs. failure — plain definitions (C4) | Resolved (Q043 retest): plain definitions of both terms now stated up front, and the server/fleet relativity example is accurate. | Critical | Low | ✅ Resolved | 2 | 1 |
| G003 | Reliability | "Bounded" fault tolerance precision (C5) | Resolved (Q044 retest): now gives a precise numeric example (tolerates 2 of 3 servers down, not all 3) — exactly the chapter's "bounded to a specific number of faults" framing. | High | Low | ✅ Resolved | 2 | 1 |
| G004 | Reliability | Hardware vs. software faults — why the difference matters (C6) | Resolved (Q052 retest): correctly explains that redundancy is useless against correlated software faults because adding more machines just adds more copies of the identical bug. | Critical | Low | ✅ Resolved | 3 | 1 |
| G005 | Scalability | "X is scalable" meaninglessness (C8) | Resolved (Q054 retest): correctly states scalability isn't a binary yes/no property, with a strong concrete growth-scenario example using the case study numbers (5,800 → 150,000 posts/sec). | Critical | Low | ✅ Resolved | 3 | 1 |
| G006 | Maintainability | "Evolvability" naming slip (C10) | Resolved (Q046 retest): "evolvability" correctly named this time, with an accurate meaning for all three principles. | Critical | Low | ✅ Resolved | 2 | 1 |
| G007 | Scalability (Case Study) | Posts/sec, not posts/day (H1) | Resolved (Q047 retest): correct average (5,800/sec) and peak (150,000/sec) posts/sec, plus 200/200 follows/followers. | High | Low | ✅ Resolved | 2 | 1 |
| G008 | Scalability (Case Study) | Materialization definition (H2) | Resolved (Q053 retest): correctly states materialization shifts the fan-out cost to write time upfront, rather than eliminating it. | High | Low | ✅ Resolved | 3 | 1 |
| G009 | Scalability (Case Study) | Celebrity/ordinary edge case — which "many" (H3) | Resolved (Q036 retest): correctly distinguished both edge cases — reader following many active accounts gets high write rate to own timeline (drop tolerated), celebrity posts merged at read time rather than fanned out at write time. | High | Low | ✅ Resolved | 2 | 1 |
| G010 | Describing Performance | Queueing sharpness + metastable failure mechanism (H4) | Resolved (Q064): re-graded against source.md's actual depth (lines 87-94) — the book only states "sharp rise, because of queueing, request waits if system busy," with no deeper nonlinear-math explanation. User's answer matches this exactly. Prior "unresolved" grading (Q014/Q033/Q055) was miscalibrated to a stricter standard than the source supports. | High | Low | ✅ Resolved | 4 | 1 |
| G011 | Describing Performance | Client-side vs. server-side response time measurement (H6) | Resolved (Q056 retest): correctly names head-of-line blocking and the specific mechanism (server-side timing misses queued wait time before processing starts). | High | Low | ✅ Resolved | 3 | 1 |
| G012 | Describing Performance | Tail latency amplification mechanism (H7) | Resolved (Q065): correctly computed 1-(1-0.03)^8 ≈ 21.6% by hand — the numeric application now lands. | High | Low | ✅ Resolved | 4 | 1 |
| G013 | Describing Performance | Percentile computation — algorithm names + phrasing (H9) | Resolved (Q061 retest): all four names recalled (HdrHistogram, t-digest, OpenHistogram, DDSketch), and the precise mechanism stated — merge the histograms, then compute the percentile. | Medium | Low | ✅ Resolved | 3 | 1 |
| G014 | Reliability | Availability zones vs. multi-region (H10) | Resolved (Q039 retest): three chapter-named redundancy techniques given (RAID, hot-swappable CPUs, backup generators), and availability zones correctly explained as addressing physical-location-correlated risk within a region (e.g. earthquake), with redundancy spread across zones. | High | Low | ✅ Resolved | 2 | 1 |
| G015 | Reliability | Single-server alternative to rolling upgrades (H11) | Resolved (Q049 retest): correctly names the single-server-forced-downtime alternative this time, instead of substituting a different multi-server scenario. | Medium | Low | ✅ Resolved | 2 | 1 |
| G016 | Reliability | Post Office Horizon scandal — legal-presumption angle (H14) | Resolved (Q068 retest): correctly states English law presumed computer evidence correct unless proven otherwise, matching source.md lines 273-277 exactly. | High | Low | ✅ Resolved | 2 | 1 |
| G017 | Reliability | Chaos engineering — specific mechanism (H13) | Resolved (Q060 retest): correctly identifies the specific thing being validated — the system's ability to handle faults gracefully (fault-tolerance mechanisms actually working), not generic "find bugs early." | High | Low | ✅ Resolved | 2 | 1 |
| G018 | Scalability | Describing current load concretely (H15) | Retest (Q070): recall now correct — read/write ratio, cache hit rate, items per user, finally the right list. But question also asked "why each matters" and that half wasn't attempted at all. Recall fixed; explanation still untested. | High | Low | 🟡 Developing | 5 | 0 |
| G019 | Maintainability | Essential vs. accidental complexity — why it matters (H20) | Resolved (Q062 retest): correctly states effort shouldn't go toward removing essential complexity since it's inherent to the business problem. | High | Low | ✅ Resolved | 3 | 1 |
| G020 | Maintainability | Abstraction — reusability across applications (H21) | Resolved (Q067 retest): correctly states reuse-across-applications and deployment-across-servers are not the same thing, with the exact book examples (programming languages abstracting machine code, SQL abstracting storage/retrieval). | Medium | Low | ✅ Resolved | 3 | 1 |
| G021 | Maintainability | Evolvability's dependencies + why irreversibility matters (H22) | Resolved (Q063 retest): "data interfaces" correctly captures the abstraction-quality dependency, with an accurate explanation (good interface = less rework to enhance). | High | Low | ✅ Resolved | 3 | 1 |

---
# Concept Mastery

| Concept | Importance | Recall | Explanation | Connection | Application | Overall |
|---|---|---|---|---|---|---|
| C1 Functional vs. nonfunctional requirements | Critical | 🟢 good | 🟢 good | — | — | Strong |
| C2 Response time vs. throughput | Critical | 🟢 good | 🟢 good | — | — | Strong |
| C3 Percentiles as the right way to describe response time | Critical | 🟢 good | 🟢 good | — | — | Strong |
| C4 Fault vs. failure | Critical | 🟢 good | 🟢 good | — | — | Strong |
| C5 Fault tolerance and single point of failure (SPOF) | Critical | 🟢 good | 🟢 good | — | — | Strong |
| C6 Hardware faults vs. software faults | Critical | 🟢 good | 🟢 good | — | — | Strong |
| C7 Humans and reliability / blameless postmortems | Critical | 🟢 good | 🟢 good | — | — | Strong |
| C8 Scalability defined | Critical | 🟢 good | 🟢 good | — | — | Strong |
| C9 Shared-memory vs. shared-disk vs. shared-nothing architectures | Critical | 🟢 good | 🟢 good | — | — | Strong |
| C10 Maintainability's three principles | Critical | 🟢 good | 🟢 good | — | — | Strong |
| H1 Case study numbers | High | 🟢 good | — | — | — | Strong |
| H2 Fan-out and materialization | High | 🟢 good | 🟢 good | — | — | Strong |
| H3 Celebrity vs. ordinary-user timeline handling | High | 🟢 good | 🟢 good | — | — | Strong |
| H4 Queueing and metastable failure | High | 🟢 good | 🟢 good | — | — | Strong |
| H5 Overload mitigation techniques | High | 🟢 good | 🟢 good | — | — | Strong |
| H6 Latency terminology | High | 🟢 good | 🟢 good | — | — | Strong |
| H7 Tail latency amplification | High | 🟢 good | 🟢 good | — | — | Strong |
| H8 SLO vs. SLA | High | 🟢 good | 🟢 good | — | — | Strong |
| H9 Percentile computation | High | 🟢 good | 🟢 good | — | — | Strong |
| H10 Redundancy for hardware fault tolerance | High | 🟢 good | 🟢 good | — | — | Strong |
| H11 Rolling upgrades | High | 🟢 good | 🟢 good | — | — | Strong |
| H12 Software fault categories | High | 🟢 good | 🟢 good | — | — | Strong |
| H13 Chaos engineering / fault injection | High | 🟢 good | 🟢 good | — | — | Strong |
| H14 The Post Office Horizon scandal | High | 🟢 good | 🟢 good | — | — | Strong |
| H15 Understanding load | High | 🟢 good (case-study numbers, and now the right "other characteristics" list) | 🟡 untested (the "why each matters" half has never actually been answered — two attempts skipped it entirely) | — | — | Developing |
| H16 Two ways to study load increase | High | 🟢 good | 🟢 good | — | — | Strong |
| H17 Linear scalability | High | 🟢 good | 🟢 good | — | — | Strong |
| H18 Principles for scalability | High | 🟢 good | 🟢 good | — | — | Strong |
| H19 Operability practices | High | 🟢 good | 🟢 good | — | — | Strong |
| H20 Essential vs. accidental complexity | High | 🟢 good | 🟢 good | — | — | Strong |
| H21 Abstraction as a complexity tool | High | 🟢 good | 🟢 good | — | — | Strong |
| H22 Evolvability and irreversibility | High | 🟢 good | 🟢 good | — | — | Strong |

*(Medium/Low items and Definitions/Examples/Easily-confused items from knowledge-map.md are tracked ad hoc within Knowledge Gaps and the Question Log as they come up, rather than pre-listed here.)*

---
# Misconceptions

## M001
**Concept:** Celebrity vs. ordinary-user timeline edge case (H3)
**My misconception:** Believed the "acceptable to drop writes" case is about followers of an ordinary poster not needing every one of that poster's posts.
**Correct understanding:** The case is about a *reader* who follows many active accounts — their own timeline gets a high write rate, and dropping some of those writes is acceptable because they're unlikely to read every post anyway. The "many" refers to how many accounts the reader follows, not how many followers a poster has.
**Detected:** 2026-09-04 (Q013)
**Resolved:** 2026-09-04 (Q036) — retest correctly distinguished the two edge cases.

## M002
**Concept:** Abstraction's reuse benefit (H21)
**My misconception:** Believed a good abstraction's benefit is being "used across more than 1 server."
**Correct understanding:** The chapter's point is that a good abstraction's interface can be reused across many different *applications* (e.g. SQL hides storage/concurrency/crash-recovery detail and gets reused across countless different apps; high-level languages hide machine code the same way) — not about how many servers something runs on. Reuse-across-applications and multi-server deployment are unrelated concepts.
**Detected:** 2026-09-04 (Q058)
**Resolved:** 2026-09-05 (Q067) — retest correctly distinguished the two concepts with the exact book examples.

## M003
**Concept:** Understanding load — "other load characteristics" (H15)
**My misconception:** Believe the three "other load characteristics" are requests/sec, new data/day, checkouts/hour (plus, on the second attempt, "simultaneous online users" — not sourced at all).
**Correct understanding:** Those three (requests/sec, new data/day, checkouts/hour) are source.md's examples of *describing load with numbers* (line 298). The actual "other load characteristics" (line 300) are: read/write ratio, cache hit rate, data items per user. Two separate lists in the same section — the wrong one keeps getting reached for.
**Detected:** 2026-09-05 (Q066)
**Resolved:** Partially — the names were finally correct at Q070 (2026-09-06), after repeating identically at Q069. The list-mixup itself is fixed; the "why each matters" explanation has still never been attempted.

---
# Mastered Concepts
- C1 — Functional vs. nonfunctional requirements (Q001)
- C3 — Percentiles as the right way to describe response time (Q003)
- C7 — Humans and reliability / blameless postmortems (Q007)
- C9 — Shared-memory vs. shared-disk vs. shared-nothing architectures (Q009)
- H5 — Overload mitigation techniques (Q015)
- H8 — SLO vs. SLA (Q018)
- H12 — Software fault categories (Q022)
- H16 — Two ways to study load increase (Q026)
- H17 — Linear scalability (Q027)
- H18 — Principles for scalability (Q028)
- H19 — Operability practices (Q029)
- H3 — Celebrity vs. ordinary-user timeline handling (Q036)
- H10 — Redundancy for hardware fault tolerance (Q039)
- C4 — Fault vs. failure (Q043)
- C5 — Fault tolerance and single point of failure (SPOF) (Q044)
- C10 — Maintainability's three principles (Q046)
- H1 — Case study numbers (Q047)
- H11 — Rolling upgrades (Q049)
- C2 — Response time vs. throughput (Q050)
- C6 — Hardware faults vs. software faults (Q052)
- H2 — Fan-out and materialization (Q053)
- C8 — Scalability defined (Q054)
- H6 — Latency terminology (Q056)
- H13 — Chaos engineering / fault injection (Q060)
- H9 — Percentile computation (Q061)
- H20 — Essential vs. accidental complexity (Q062)
- H22 — Evolvability and irreversibility (Q063)
- H4 — Queueing and metastable failure (Q064)
- H7 — Tail latency amplification (Q065)
- H21 — Abstraction as a complexity tool (Q067)
- H14 — The Post Office Horizon scandal (Q068)

---
# Weak Concepts
None currently.

---
# Concepts Requiring Review
1. H15 — Recall (the three names: read/write ratio, cache hit rate, items per user) is now correct as of Q070. Still untested: *why* each one matters — never actually attempted across three tries.

---
# Question Log

## Q001
**Date:** 2026-09-02
**Topic:** Introduction / Defining Nonfunctional Requirements
**Concept:** C1 — Functional vs. nonfunctional requirements
**Difficulty:** Level 1 (Recall)
**Question:** Give the distinction in your own words, and give one concrete example of each — a functional requirement and a nonfunctional requirement — for a feature like "users can post a photo."

### My Answer
> "functional requirement is what the system must do or what it must perform e.g. have a form for user to fill, submit form, etc. non functional requirement is more of the how the functions get done e.g. should be done within 1ms, should be secure, etc."

### Assessment
🟢 Correct

### What I Got Right
Correct distinction (what vs. how well) with concrete, on-topic examples (upload/submit form as functional; latency and security as nonfunctional).

### What I Missed
Nothing.

### Model Answer
> Functional requirements define what the app does — for "post a photo": user selects a file, adds a caption, hits submit, the post appears. Senior framing: functional requirements are the easy half — they get written down because a PM asks for them. Nonfunctional requirements (how fast, how reliable, how secure, how compliant, how maintainable) are the ones that get silently assumed and then blow up in production — "upload works" says nothing about whether it survives 10k concurrent uploads, a corrupted file, or a GDPR deletion request. The senior habit this section is training: write nonfunctional requirements down explicitly, with numbers (e.g. p99 upload latency < 2s, 99.9% durability), the same way you'd write a functional spec — because "it should be fast and reliable" isn't a requirement, it's a wish.

### Knowledge Gap
None.

### Memory Priority
Low

### Follow-up Required
No.

## Q002
**Date:** 2026-09-02
**Topic:** Response Time and Latency
**Concept:** C2 — Response time vs. throughput
**Difficulty:** Level 1 (Recall)
**Question:** Define both, and say which one users typically care about vs. which one drives your infrastructure cost/sizing decisions.

### My Answer
> "response time is the time from user sending the request from his app to the response the user receives from the application. throughput is more of the total number of requests that can be successfully processed at any given time."

### Assessment
🟠 Partially Correct

### What I Got Right
Both definitions correct: response time as elapsed time per request, throughput as requests processed per unit time.

### What I Missed
The explicitly requested second half was skipped entirely: users care about **response time** (what they directly experience); **throughput** is what drives infrastructure provisioning and cost. These are genuinely different axes — a system can have great throughput and terrible response time simultaneously (this is exactly what queueing, covered later in the chapter, explains).

### Model Answer
> Response time: elapsed time a client experiences for one request (send to response received). Throughput: requests (or data volume) processed per second by the system. Users care about response time — it's what they feel. Throughput drives cost/sizing — it's what determines how many servers you provision. Senior framing: never assume "high throughput" implies "good response time" — a system can process 10,000 req/s in aggregate while individual requests queue for seconds under load. This is exactly the gap SLOs (later in the chapter) are designed to close: throughput tells you what the system *can do*, SLOs on response-time percentiles tell you what it *should feel like* to a user.

### Knowledge Gap
Recurring "drop a required clause" pattern from Chapter 1 — flagging early in this chapter so it can be watched for.

### Memory Priority
Medium

### Follow-up Required
Light — will re-surface naturally; watch whether the pattern persists across the next few questions.

## Q003
**Date:** 2026-09-03
**Topic:** Response Time and Latency
**Concept:** C3 — Percentiles as the right way to describe response time
**Difficulty:** Level 2 (Explanation)
**Question:** Why is the mean a poor "typical experience" metric for response time, and what does "p95 = 1.5s" actually mean?

### My Answer
> "the mean is a poor 'typical experience' metric because we're taking the average of all response times. if we have one extremely long response time, and one extremely short response time, with the rest all in the middle, the mean would be skewed due to the extreme tail ends. thus it's not what users would typically experience. p95 = 1.5s means that 95 out of 100 users experience response time below 1.5s with the remaining 5 out of 100 experiencing response time above 1.5s."

### Assessment
🟢 Correct

### What I Got Right
Correctly explained the mean-skewed-by-outliers reasoning, and correctly defined p95 as the threshold where 95% of requests finish under it and 5% take longer.

### What I Missed
Minor terminology looseness: "95 out of 100 users" should be "95 out of 100 requests" (a single user can generate many requests, and percentiles are computed over requests, not distinct users) — not a conceptual error, just imprecise wording.

### Model Answer
> The mean is a poor typical-experience metric because response-time distributions are heavily right-skewed — a handful of very slow requests pull the average up without representing what most users actually feel; the mean also obscures the exact users who matter most. p95 = 1.5s: sort all response times, 95% of requests complete in under 1.5s, the slowest 5% take 1.5s or longer. Senior framing: Amazon deliberately tracks p99.9 internally, not p50 or the mean, because — counterintuitively — the customers hitting your slowest 0.1% of requests tend to be your *highest-value* customers (they have the most data, the most items in cart, the most account history), so tail latency isn't a rounding error, it's disproportionately hurting the people you most want to keep happy.

## Q004
**Date:** 2026-09-03
**Topic:** Reliability
**Concept:** C4 — Fault vs. failure
**Difficulty:** Level 1 (Recall)
**Question:** Define both, and explain the relativity point: how can the same event be a "failure" from one perspective and only a "fault" from another?

### My Answer
> "because a failure at a lower level could just be a fault at a higher level. for eg. if one of my servers fail, i can route the traffic to others servers, so on the larger scheme of things, its just a fault even those the server itself failed."

### Assessment
🟡 Mostly Correct

### What I Got Right
Correctly demonstrated the relativity point with a good concrete example: a single server dying is absorbed by rerouting, so at the fleet level it's just a fault, not a system-level failure.

### What I Missed
Never stated the plain definitions the question explicitly asked for first: **fault** = one component stops working correctly; **failure** = the system as a whole stops providing its required service (misses its SLO).

### Model Answer
> **Fault**: one part of a system stops working correctly. **Failure**: the system as a whole no longer provides its required service — it's no longer meeting its SLO. Relativity: a single server dying is a failure *of that server*, but if the fleet has redundancy and traffic reroutes seamlessly, it's only a fault at the fleet level — the fleet (the system users actually interact with) never failed. Zoom out one more level and the same logic applies again: if an entire datacenter fails but traffic fails over to another region, that's a fault at the multi-region level. This nesting is why "reliability" is always defined relative to a stated boundary — "is the system reliable" is meaningless without specifying which boundary you mean.

### Knowledge Gap
Same shape as G001 and the Ch.1 pattern: reaching for a correct concrete demonstration while skipping the requested plain-definition statement.

### Memory Priority
Medium

### Follow-up Required
Light — the concept is clearly understood; just needs the habit of stating definitions explicitly even when an example makes the point implicitly.

## Q005
**Date:** 2026-09-03
**Topic:** Reliability
**Concept:** C5 — Fault tolerance and single point of failure (SPOF)
**Difficulty:** Level 1 (Recall)
**Question:** Define both terms, and explain why "fault tolerance" is always bounded rather than unlimited.

### My Answer
> "Fault tolerance is the ability for the system to still function even though there is a fault within the system. For example, if there's an [error] that's happening on the server side, when the user submits a form, the system should be able to give some feedback to be able to tell the user instead of just crashing. For single point of failure, if that particular item fails, then it would totally render the app useless. Fault tolerance is bounded because there comes a certain point whereby if there's too much of the fault happening, the system won't be able to process the user's request and won't be able to give an appropriate response to the user."

### Assessment
🟡 Mostly Correct

### What I Got Right
SPOF definition exact: a component whose failure always escalates to system failure. Fault tolerance's core idea correct: the system keeps functioning despite a fault occurring.

### What I Missed
- The fault-tolerance example (graceful per-request error handling) is a valid instance but leans toward UX-level error handling rather than the chapter's usual framing — a component/node failing while the *system* keeps serving other requests transparently (e.g., one server dies, traffic reroutes, users don't notice).
- The "bounded" explanation stayed generic ("too much fault, it breaks") rather than the chapter's precise point: fault tolerance is bounded to a **specific type or number** of faults the system was engineered for — e.g. tolerates any single node failing, but not two simultaneous failures; tolerates hardware faults, but not a specific software bug. It's not a vague overwhelm threshold, it's a deliberate, scoped engineering boundary.

### Model Answer
> **Fault-tolerant**: a system that keeps serving users correctly despite certain faults occurring — e.g. one server in a fleet crashes, load balancer routes around it, users notice nothing. **SPOF**: a component whose failure *always* escalates to system-level failure — no redundancy, no fallback, it fails and the system fails with it. Fault tolerance is always bounded because no system is engineered to survive *every* conceivable fault — a system might explicitly tolerate any single node dying (but not two at once), or tolerate disk failures (but not a correlated software bug hitting every replica simultaneously). "How fault-tolerant is this system?" is really "which specific faults, up to what number, was this system deliberately engineered to survive?" — not a spectrum from "not tolerant" to "infinitely tolerant."

### Knowledge Gap
Same shape as G002: correct core understanding, but the precise/textual framing of a nuance point isn't quite reached — worth a light retest later specifically on "bounded to what."

### Memory Priority
Medium

### Follow-up Required
Light — pair with a future recall check on the "specific type/number of faults" framing.

## Q006
**Date:** 2026-09-03
**Topic:** Reliability
**Concept:** C6 — Hardware faults vs. software faults
**Difficulty:** Level 2 (Explanation)
**Question:** What's the key difference in how these two fault types behave across multiple machines (correlated vs. independent), and why does that difference matter for how you defend against each?

### My Answer
> "hardware faults typically happen more independently while software faults could happen simultaneously since a bug that could be triggered on one instance could definitely be replicated same way in another instance if the situation calls for it."

### Assessment
🟠 Partially Correct

### What I Got Right
Correctly identified the core distinction: hardware faults are largely independent across machines; software faults (same bug, same code) can be correlated — triggering on every instance simultaneously.

### What I Missed
The explicitly requested second half — *why this matters for defense* — was skipped entirely. Redundancy (extra disks, extra nodes, RAID) works well against independent hardware faults precisely because the odds of multiple independent things failing at once are low. That same redundancy is defeated by correlated software faults — every "redundant" replica has the identical bug, so adding more copies doesn't help at all. Software faults need a fundamentally different defense: testing, code review, isolation, canary/gradual deploys, monitoring — not more hardware redundancy.

### Model Answer
> Hardware faults (disk failures, RAM errors, CPU faults) are relatively rare and largely **independent** across machines — this is exactly the assumption redundancy (RAID, multiple power supplies, extra nodes) relies on: if failures are independent, the probability of enough of them happening simultaneously to cause a system-wide failure is very low. Software faults are often highly **correlated** — the same bug, deployed to every node, can trigger on all of them at once (the chapter's examples: the 2012 Java leap-second bug hanging apps across many nodes simultaneously, or a firmware bug causing every SSD of a certain model to fail at exactly the same operating hour). This is *why* the difference matters practically: redundancy is the right tool for hardware faults but actively useless against correlated software faults — you can't "redundancy" your way out of a bug that exists identically in every copy. Defending against software faults requires testing, isolation between components, careful monitoring, and gradual/canary rollouts that limit blast radius — an entirely different toolkit than "add more machines."

### Knowledge Gap
Third occurrence this chapter of the "answer the first half well, skip the explicitly-requested second half" pattern (Q2, and now Q6 more starkly) — this is now a clear, named pattern carried over from Chapter 1, not a one-off. Worth explicitly re-reading each question for "and why does that matter" / "and how do you defend against" clauses before finalizing an answer.

### Memory Priority
Critical

### Follow-up Required
Yes — retest this specific concept (why correlated vs. independent matters for defense strategy) later with real spacing, since it was never actually answered.

## Q007
**Date:** 2026-09-03
**Topic:** Reliability
**Concept:** C7 — Humans and reliability / blameless postmortems
**Difficulty:** Level 2 (Explanation)
**Question:** The chapter argues human mistakes are usually a symptom, not the root cause. What is human error actually a symptom of, and why is blaming the individual counterproductive?

### My Answer
> "human error actually a symptom of poor business processes or poorly designed system. blaming the individual is counterproductive because if the root cause is not addressed, in this case, a function should have checks and controls in place for example, another user would make the same mistake. so we cant possibly keep blaming individuals when the root cause is not addressed."

### Assessment
🟢 Correct

### What I Got Right
Correctly identified human error as a symptom of system/process design flaws (the chapter's "sociotechnical system" framing), and gave a valid, textually-supported reason blame is counterproductive: it doesn't fix the underlying flaw, so the same failure recurs with a different individual.

### What I Missed
Nothing required — the chapter also offers a second angle (organizations often choose feature investment over resilience investment, so blame misattributes an organizational prioritization failure onto an individual), but the question didn't require both angles and a valid one was given in full.

### Model Answer
> Human error is a symptom of **sociotechnical system flaws** — confusing UIs, missing safeguards, unrealistic on-call load, unclear runbooks, or an org that never invested in the checks that would have caught the mistake. Blaming the individual is counterproductive for two compounding reasons: (1) it doesn't fix the actual flaw, so the same failure recurs with a different person next time, and (2) it lets the organization off the hook for a prioritization decision it actually made — choosing to ship features instead of investing in guardrails is a leadership decision, and blaming the engineer who happened to trigger the gap misattributes that decision downward. Blameless postmortems exist specifically to get people to share full, honest details without fear of punishment — which is the only way an org actually learns the sociotechnical cause and fixes it.

### Knowledge Gap
None.

### Memory Priority
Low

### Follow-up Required
No.

## Q008
**Date:** 2026-09-03
**Topic:** Scalability
**Concept:** C8 — Scalability defined
**Difficulty:** Level 1 (Recall)
**Question:** The chapter says "X is scalable" is a meaningless statement on its own. What makes it meaningless, and what should you actually be asking instead?

### My Answer
> "scaleable architecture is not a one size fits all. it depends on how the application is being accessed. the same way that the application is accessed at a level, is different if there's 10 times more traffic."

### Assessment
🟠 Partially Correct

### What I Got Right
Correctly senses that scalability isn't a fixed, context-free property — it changes as conditions change.

### What I Missed
Conflated two distinct chapter points. The reason "X is scalable" specifically is meaningless: scalability isn't a binary yes/no property at all — a system might handle 2x traffic fine and completely fall over at 10x, so the label needs a specific growth scenario attached to mean anything. What you should ask instead: "if the system grows in a particular way, what are our options for coping? How much do we need to add resources to keep performance steady?" The "it depends on access pattern, not just raw throughput" point (which the answer leaned toward) is real but is a *different*, later chapter argument (the "no magic scaling sauce" principle).

### Model Answer
> "X is scalable" is meaningless because scalability isn't a single measurable property — it's the answer to a *specific* question about a *specific* growth scenario: "if load grows this way, what happens to performance, and how much do we need to add in resources to hold it steady?" A system can be scalable for one kind of growth (more concurrent users) and not another (much larger individual accounts), so a flat "is it scalable" has no well-defined answer until you attach a growth scenario to it. Instead of "is this scalable," ask "how does this system's performance change if [specific dimension] grows by [specific amount], and what would we need to do about it?"

### Knowledge Gap
Conflating one chapter concept with a nearby, related-but-distinct one — different failure mode than the earlier "dropped clause" pattern, worth tracking separately since it suggests a need to keep concepts crisply separated rather than blending them by association.

### Memory Priority
High

### Follow-up Required
Yes — retest C8 standalone later, ideally with a concrete growth scenario to answer against, to force the "attach a specific question" framing rather than the general "it depends" instinct.

## Q009
**Date:** 2026-09-03
**Topic:** Scalability
**Concept:** C9 — Shared-memory vs. shared-disk vs. shared-nothing architectures
**Difficulty:** Level 2 (Explanation)
**Question:** Name all three, and explain the key architectural difference between "scaling up" and "scaling out" — which one hits a cost ceiling and why? (Clarified on request: name shared-memory, shared-disk, shared-nothing, and what "shared" refers to in each.)

### My Answer
> "shared-memory is if multiple threads or processes on a single machine shares the same ram. cost of this goes up disproportionately to the increase in ram. shared-disk is when on-premise servers share the same disk arrays, shared-nothing is when we have a cluster of cloud servers that do not share anything with each other, each maintains its own state and data. scaling up means getting bigger compute, bigger memory, bigger storage etc. for the same machine. scaling out is more of duplicating the same server to add more servers."

### Assessment
🟢 Correct

### What I Got Right
All three architectures correctly named and defined, scaling up (vertical/shared-memory) vs. scaling out (horizontal/shared-nothing) correctly explained, and the cost-ceiling answer was embedded in the shared-memory definition: cost rises disproportionately as you add RAM/CPU to one machine — that's exactly why vertical scaling hits a ceiling.

### What I Missed
Minor imprecision: described shared-nothing as specifically "cloud servers" — the architecture isn't cloud-specific, it applies to any cluster of independent nodes (on-prem commodity machines included).

### Model Answer
> **Shared-memory**: multiple CPUs/cores on one machine share the same RAM (vertical scaling). **Shared-disk**: multiple machines share a common disk array (via a SAN/NAS), but each has its own CPU/RAM. **Shared-nothing**: fully independent nodes, no shared hardware at all — coordination happens purely over the network (horizontal scaling). Scaling up (shared-memory) hits a cost ceiling because high-end hardware doesn't scale linearly in price — doubling RAM/CPU on one machine can more than double the cost, and there's a hard ceiling (the biggest machine money can buy). Scaling out (shared-nothing) avoids that ceiling by using many cheap, commodity machines instead of one expensive one — but trades hardware simplicity for distributed-systems complexity (network calls, partial failure, coordination — everything covered earlier in Chapter 1's "problems with distributed systems").

### Knowledge Gap
None — good recovery, asked a clarifying question rather than guessing, then answered fully.

### Memory Priority
Low

### Follow-up Required
No.

## Q010
**Date:** 2026-09-03
**Topic:** Maintainability
**Concept:** C10 — Maintainability's three principles
**Difficulty:** Level 1 (Recall)
**Question:** Name the three principles, and give a one-line meaning for each.

### My Answer
> "operatability - how easy it is to run the system. simplicity - how easy it is to understand the code even for a newcomer. extensibility - how easy it is to add/update features."

### Assessment
🟡 Mostly Correct

### What I Got Right
Operability and simplicity both correctly named and defined.

### What I Missed
The third principle is **evolvability**, not "extensibility" — a real, distinct term (extensibility specifically means adding features via designed extension points/plugins; evolvability is broader — the system's overall capacity to be changed and adapted as requirements shift, including modifying existing behavior, not just adding new behavior). The meaning given was a reasonable approximation, but the exact term matters here since it's one of exactly three named pillars.

### Model Answer
> **Operability**: how easy it is to keep the system running smoothly — monitoring, debugging, routine maintenance. **Simplicity**: how easy the system is to understand — for a newcomer, and for the person maintaining it 3 years from now. **Evolvability**: how easily the system can be changed to meet new or changing requirements — not just adding features, but modifying, removing, and adapting existing behavior as the business changes. These three together define "maintainability" as the chapter uses it, and the book's explicit motivation is that most of software's total cost is ongoing maintenance, not initial development — so these three matter more, cumulatively, than almost anything decided at build time.

### Knowledge Gap
Same terminology-slip pattern seen in Chapter 1 (data analyst/data scientist) — correct concept, wrong specific term from a small named set. Worth a light retest to lock in "evolvability" specifically.

### Memory Priority
Medium

### Follow-up Required
Light — quick recall check later specifically on the term "evolvability."

## Q011
**Date:** 2026-09-03
**Topic:** Scalability (Case Study)
**Concept:** H1 — Case study numbers
**Difficulty:** Level 1 (Recall)
**Question:** The chapter's running case study (a Twitter-like social network) uses concrete numbers to motivate the scalability discussion. Give the average and peak posts/sec, and roughly how many follows/followers the average user has.

### My Answer
> "500 million posts per day. average user has 200 followers and follows 200 other people."

### Assessment
🟠 Partially Correct

### What I Got Right
Correct total daily volume (500M posts/day) and correct follows/followers (200/200).

### What I Missed
The specifically requested per-second conversion — average and peak posts/sec — wasn't given: 5,800 posts/sec average, up to 150,000 posts/sec peak.

### Model Answer
> 500M posts/day, which works out to 5,800 posts/sec on average — but peaks up to 150,000 posts/sec (roughly 26x average). Average user: ~200 follows, ~200 followers. These numbers matter specifically because the ~26x average-to-peak ratio is what makes naive designs fall over — a system provisioned for the average load is nowhere near enough for the peak, and "provision for peak" vs. "provision for average + autoscale" is exactly the kind of concrete capacity-planning decision these numbers are meant to force.

### Knowledge Gap
Same recurring "drop the specifically requested clause" pattern — now confirmed across both chapters (Ch.1: C5, H3, H6; Ch.2: C2, C6, H1). This is a general habit, not concept-specific.

### Memory Priority
Medium

### Follow-up Required
Light — the numbers themselves are simple; a quick recall check later closes it.

## Q012
**Date:** 2026-09-03
**Topic:** Scalability (Case Study)
**Concept:** H2 — Fan-out and materialization
**Difficulty:** Level 1 (Recall)
**Question:** Define both terms, and explain how they relate — what does materialization actually do to the fan-out cost?

### My Answer
> "fan out just means that sending one request cascades down to a lot more computations and requests. im not sure what materialization is"

### Assessment
🟠 Partially Correct

### What I Got Right
Fan-out correctly understood: one request multiplying into many downstream operations.

### What I Missed
Materialization — honestly flagged as unknown rather than guessed, which is the right instinct.

### Model Answer
> **Fan-out**: the multiplier from one request (a post) to many downstream operations (one timeline update per follower). **Materialization**: precomputing and storing a query's result ahead of time (a "materialized view"), so reads become cheap lookups instead of expensive live computation. Relationship: materialization is what makes fan-out *tractable* for reads. Without it, every follower's feed would need to be computed fresh at read time (an expensive join across posts/follows/users, repeated on every page load). Materialization moves that cost to **write time** instead — one post triggers N cheap writes (insert into each follower's precomputed timeline), still multiplied by the fan-out factor, but now paid once per post rather than once per read. It doesn't eliminate the fan-out cost — it relocates it from "expensive, repeated at every read" to "cheap-per-item but done N times at write."

### Knowledge Gap
Genuine, honestly-flagged knowledge gap on materialization — treat as a real learning item, not a recall slip.

### Memory Priority
High

### Follow-up Required
Yes — retest materialization specifically once it's had a chance to sink in.

## Q013
**Date:** 2026-09-04
**Topic:** Scalability (Case Study)
**Concept:** H3 — Celebrity vs. ordinary-user timeline handling
**Difficulty:** Level 2 (Explanation)
**Question:** Why is it acceptable to drop a write for an ordinary user's post but not for a celebrity's post — and how does the chapter's design actually handle celebrity posts differently?

### My Answer
> "the follower of that ordinary user would likely not need to 100% read all of the user's post and is fine with not reading some of it. whereas for a celebrity post, due to the nature of interest of a follower, they would want to read all of the posts to be up to date with the celebrity. how we handle that celebrity posts is to combine them on the fly when the user views his feed because it is not wise to do a fanout to millions of followers everytime the celebrity posts."

### Assessment
🟠 Partially Correct

### What I Got Right
Celebrity post handling correct: instead of fanning out to millions of followers on every post, store celebrity posts separately and merge them into each reader's timeline only at read time.

### What I Missed
Inverted the "many" in the ordinary-user case. The chapter's actual edge case is about a **reader who follows many active accounts** — that reader's own timeline gets a high write rate (lots of accounts they follow posting constantly), and it's acceptable to drop some of *those* writes because the reader is unlikely to read every post anyway, drowning in volume regardless. The answer instead framed it as "followers of an ordinary poster don't need every post from that poster" — a different, unrelated claim not made in the text.

### Model Answer
> Two edge cases for materialized timelines, and they're opposite failure modes: (1) A **reader who follows many active accounts** gets a high write rate into their own precomputed timeline. Dropping some of those writes (showing a sample instead of every post) is acceptable, because that reader is unlikely to read every post from every followed account anyway — the volume already exceeds what they'd consume. (2) A **celebrity poster** with millions of followers creates a massive fan-out on every single post. Dropping those writes is *not* acceptable, because each of those millions of followers specifically expects to see that post. The fix: don't fan out celebrity posts at write time at all — store them separately, and merge them into each reader's timeline only when that reader actually loads their feed (read time).

### Knowledge Gap
A genuine content misunderstanding (not an omission) — inverted which party ("many" followed accounts vs. "many" followers) the drop-tolerance logic applies to. Worth a clean retest with real spacing, ideally phrased to force distinguishing the two edge cases explicitly.

### Memory Priority
High

### Follow-up Required
Yes — retest with real spacing, explicitly distinguishing "reader follows many" from "poster is followed by many."

## Q014
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H4 — Queueing and metastable failure
**Difficulty:** Level 2 (Explanation)
**Question:** Why does response time rise sharply (not gradually) as throughput approaches capacity? And what's a metastable failure — why can it persist even after the original load drops?

### My Answer
> "response time rises sharply because more and more requests get queued, and the extra queued time gets added to the standard response time. a metastable failure is a situation whereby requests keep retrying and hitting the server when the server is already done with requests."

### Assessment
🔴 Weak

### What I Got Right
Queueing as the general mechanism linking throughput to response time is correctly identified.

### What I Missed
- Didn't explain *why* the rise is sharp/nonlinear rather than gradual: as utilization approaches 100% of capacity, queue length grows nonlinearly — wait time trends toward infinity near the ceiling, so a small increase in load near capacity causes a disproportionately large increase in response time.
- Metastable failure definition was unclear and didn't capture the actual mechanism: response times rise → clients time out and retry → that retry traffic *adds to* the load → system gets more overloaded → more timeouts/retries — a self-sustaining loop. It persists after the original load drops because the retry storm has *itself become* the load; even once real traffic normalizes, accumulated retries alone can keep the system saturated, sometimes requiring a full reset (draining queues, restarting) rather than just waiting it out.

### Model Answer
> Response time rises sharply because queueing is nonlinear near capacity: as throughput approaches the system's maximum, queue length (and therefore wait time) grows disproportionately — approaching infinity as utilization nears 100%. A small increase in load near the ceiling causes a large jump in response time, unlike the roughly flat response time at low utilization. **Metastable failure**: an overloaded system enters a self-sustaining loop — rising response times cause clients to time out and retry, that retry traffic adds to the existing load, which pushes response times up further, causing more timeouts and more retries. This can persist even after the original triggering load returns to normal, because the retry storm itself has become the dominant load — the system stays saturated indefinitely until something breaks the loop (often requiring a full reset: draining connections, restarting services, or throttling retries at the source) rather than recovering on its own.

### Knowledge Gap
This one landed weak on both halves, and the metastable failure description was genuinely unclear rather than just incomplete — treat as a real gap requiring a fresh explanation, not a recall slip.

### Memory Priority
Critical

### Follow-up Required
Yes — retest with real spacing; this concept needs to actually click, not just be re-stated.

## Q015
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H5 — Overload mitigation techniques
**Difficulty:** Level 1 (Recall)
**Question:** Name at least three of the five overload-mitigation techniques the chapter lists (exponential backoff, circuit breakers, token buckets, load shedding, backpressure), and briefly say what each does.

### My Answer
> "An exponential back-off is a situation whereby the duration between retries from the client to the server gets increased per retry. Circuit Breakers are about something sitting in between the client and the server that does not allow any request to go to the server if the server reports that it has failed. Token buckets are more of a cap on how much the server can handle the amount of requests at any given time. If for example the token bucket has the ability to or the token bucket indicates 100 requests per second and the token bucket gets refilled with 10 tokens per second, the server will be able to handle the first one hundred requests at one go but if there were to be another 100 requests coming in the next second, the server can only handle 10 because the tokens have not been replenished to the full 100. Back Pressure is the ability for the server to tell the client that it's currently overwhelmed and the client has the ability to use this information to perform things like exponential back-off or to try again later or whatsoever."

### Assessment
🟢 Correct

### What I Got Right
Four techniques given (more than the required three), all accurate: exponential backoff (growing retry delay), circuit breaker (blocks calls to a known-failing downstream), token bucket (with a genuinely good numeric example — burst capacity vs. steady refill rate), backpressure (server signals overload, client reacts).

### What I Missed
Nothing required — load shedding (server proactively rejects requests outright rather than queueing them) wasn't mentioned, but wasn't needed since three-plus accurate ones were already given.

### Model Answer
> **Exponential backoff**: client waits progressively longer between retries (often with randomized jitter, to avoid synchronized retry spikes across many clients). **Circuit breaker**: a component sitting in the call path that "trips" and stops sending requests to a downstream service once it detects repeated failures, giving the failing service room to recover instead of piling on more load. **Token bucket**: rate limiting via tokens that refill at a fixed rate — a request consumes a token, allowing bursts up to the bucket's capacity but capping sustained throughput at the refill rate. **Load shedding**: the server proactively and deliberately rejects some requests outright (rather than queueing everything) once it's near capacity, protecting itself from tipping into metastable failure. **Backpressure**: the server explicitly signals "I'm overwhelmed, slow down" to the client, which can then choose to back off or retry later.

### Knowledge Gap
None.

### Memory Priority
Low

### Follow-up Required
No.

## Q016
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H6 — Latency terminology
**Difficulty:** Level 2 (Explanation)
**Question:** The chapter distinguishes response time, service time, queueing delay, and latency as separate terms. Define all four, and explain why you should always measure response time client-side, not server-side.

### My Answer
> "response time - client sending request to receiving response. service time - time server uses to process request. queueing delay - time spent waiting for processing. latency - time spent by request not being actively worked on. network latency - time spent travelling over network."

### Assessment
🟠 Partially Correct

### What I Got Right
All four requested terms defined correctly (plus a correct bonus definition of network latency): response time (client-observed total), service time (active processing), queueing delay (waiting, not processing), latency (general non-processing time).

### What I Missed
The explicitly requested explanation — why measure response time client-side, not server-side — was skipped entirely (sixth occurrence of this exact pattern in this chapter).

### Model Answer
> Response time: total elapsed time from the client's perspective, request sent to response received. Service time: time the server actively spends processing the request. Queueing delay: time the request spends waiting, not being processed. Latency: the general term for time not spent actively processing (includes queueing delay and network latency). Always measure response time **client-side** because of head-of-line blocking: a request can sit queued behind other requests, or stuck in network transit, before the server even starts working on it. Server-side measurement (time from "I started processing" to "I finished") completely misses that queueing/network time — it can look great even while the user is still waiting. Only client-side measurement reflects what the user actually experiences.

### Knowledge Gap
This is now a clear, stable, chapter-spanning pattern (6th occurrence) rather than isolated slips — flagged directly to the user. Worth an explicit habit change: scan every question for every question mark before finalizing an answer.

### Memory Priority
High

### Follow-up Required
No dedicated retest needed for the content itself (definitions solid) — the fix needed is behavioral, not knowledge-based.

## Q017
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H7 — Tail latency amplification
**Difficulty:** Level 2 (Explanation)
**Question:** If a single user-facing request requires 5 backend calls in parallel, why is the overall request only as fast as the slowest of the 5 — and why does needing more calls make more end-user requests end up slow overall?

### My Answer
> "because the full response has to wait for the request that take the longest. the more calls there are, the higher the potential for requests to be queued, dropped, retried, etc. and thus further elongating the request processing time."

### Assessment
🟠 Partially Correct

### What I Got Right
Correctly explained why the overall request is only as fast as the slowest parallel call — the response has to wait for all of them to complete.

### What I Missed
Substituted an incorrect mechanism for the second half. The actual reason more required calls means more end-user requests end up slow is purely **probabilistic** (order statistics), not about extra queueing/retries being caused by having more calls. Each individual call has some small independent chance of landing in the slow tail (e.g. p99 territory). With 1 call, only ~1% of requests get hit. With 5 independent calls, the chance that **at least one** lands in the slow tail compounds: roughly 1 − (0.99)⁵ ≈ 5%. More required calls means more chances for one of them to be the unlucky slow one — the fraction of end-user requests affected grows with call count, even if nothing about the system's load actually changes.

### Model Answer
> The overall request is only as fast as the slowest of the parallel calls because the client has to wait for all of them to return before it can respond. Why more calls amplify tail latency: this is a probability/order-statistics effect, not a load effect. If each call independently has a small chance p of being slow (e.g. p = 1%), the probability that *at least one* of N calls is slow is roughly 1 − (1−p)^N — which grows with N. Five calls at 1% each gives roughly 5% of end-user requests touched by at least one slow call; twenty calls pushes that closer to 18%. This is why deeply fanned-out microservice architectures (a request touching dozens of downstream calls) tend to have dramatically worse tail latency than the same logic bundled into fewer calls — not because there's more load, but because there are simply more independent chances for one call to roll a bad number.

### Knowledge Gap
Distinct failure mode from the dropped-clause pattern — this is reaching for a plausible-sounding causal story (more calls → system strain → slower) instead of the chapter's actual statistical mechanism. Worth flagging as "check whether I'm inventing a mechanism vs. recalling the actual one," a different discipline than "did I answer every clause."

### Memory Priority
High

### Follow-up Required
Yes — retest with real spacing, ideally with concrete numbers (e.g. "if each call has a 2% chance of being slow and you need 10 of them, roughly what fraction of requests get hit?") to force the probabilistic reasoning rather than a narrative explanation.

## Q018
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H8 — SLO vs. SLA
**Difficulty:** Level 1 (Recall)
**Question:** Define both, and explain the practical difference — what makes an SLA more than "just a stricter SLO"?

### My Answer
> "slo - service level objective. sla - service level agreement. slo is about promising some type of performance or uptime to the client that's hitting ur servers e.g. 99.9% uptime, less than 1 failure per year etc. sla is more about what we are going to do or reimburse or reward in the case of not meeting the sla to the client."

### Assessment
🟢 Correct

### What I Got Right
Both terms correctly defined, and the key distinguishing point captured (implicitly but correctly): an SLA isn't just a stricter target, it's a contractual commitment with defined consequences (reimbursement) if the underlying target is missed.

### What I Missed
Minor wording slip: said consequences apply for "not meeting the SLA" — technically it's consequences for missing the SLO that's specified *within* the SLA. Phrasing nitpick, not a conceptual error.

### Model Answer
> **SLO** (service level objective): a target for performance/availability — e.g. median response time under 200ms, p99 under 1s, 99.9% of requests non-error. **SLA** (service level agreement): a contract that specifies consequences (refunds, service credits) if the SLO is missed. The practical difference isn't strictness — an SLA can have the exact same numeric target as an internal SLO. What makes it different is that it's a *binding commercial commitment*: missing an SLO internally means an engineering team gets paged; missing an SLA means the company owes the customer money (or worse, breaches a contract). This is why SLA targets are typically set more conservatively than internal SLOs — teams give themselves margin against the internal target so that even a bad day doesn't trigger the external, contractual consequence.

### Knowledge Gap
None material.

### Memory Priority
Low

### Follow-up Required
No.

## Q019
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H9 — Percentile computation
**Difficulty:** Level 1 (Recall)
**Question:** Name at least two approximate percentile-computation algorithms/libraries the chapter mentions, and explain why you can't just average two percentile values together (e.g., averaging the p99 from two different servers).

### My Answer
> "im not sure about the two algos but we cant average two percentive values together because we wont get an accurate reading. we should instead combine the entire distribution of values together then get the average."

### Assessment
🟠 Partially Correct

### What I Got Right
Directionally correct core insight: you can't average percentile values directly — you need to work with the underlying distributions, not the derived numbers.

### What I Missed
- Algorithm names honestly flagged as unknown — genuine gap: **HdrHistogram, t-digest, OpenHistogram, DDSketch**.
- Phrasing drift at the close: "combine distributions then get the average" — the actual goal is to recompute the **percentile** from the merged data, not switch to computing an average. Percentiles from two populations don't combine linearly (p99 of population A + p99 of population B ≠ p99 of A∪B), which is exactly why you need the underlying histograms, not just the two percentile numbers, to get a correct combined percentile.

### Model Answer
> Approximate percentile algorithms: HdrHistogram, t-digest, OpenHistogram, DDSketch — these let you compute percentiles cheaply without storing/sorting every raw value. You can't average two percentile values because percentiles aren't linear — averaging p99(server A) and p99(server B) doesn't give you a meaningful p99 of the combined traffic; the math just doesn't work that way. Instead, you combine the underlying histograms (which these libraries are specifically designed to merge cheaply) and recompute the percentile from the merged distribution.

### Knowledge Gap
Real gap on the specific algorithm names; the conceptual reasoning was close but needs the precision fix (recompute the percentile, not switch to an average).

### Memory Priority
Medium

### Follow-up Required
Light — recall check later on the four named libraries and the precise "recompute from merged histogram" framing.

## Q020
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** H10 — Redundancy for hardware fault tolerance
**Difficulty:** Level 2 (Explanation)
**Question:** Name at least two redundancy techniques the chapter mentions, and explain why "availability zones" exist — what real-world correlation problem do they address?

### My Answer
> "RAID, is to do with having copies of data across different physical disks so that if one fails, the other is there to still provide service. the other is to do with having servers in different regions so that if one region fails, the other region can pick it up."

### Assessment
🟠 Partially Correct

### What I Got Right
RAID correctly defined and explained.

### What I Missed
- The second example given (multi-region failover) is plausible but not one of the chapter's specific named redundancy techniques (RAID, dual power supplies, hot-swappable CPUs, backup generators).
- The actual question — why availability zones exist, what correlation problem they solve — wasn't answered. Conflated "availability zones" with "different regions" — these are distinct: a region is composed of multiple AZs. The chapter's actual point: basic redundancy assumes independent faults, but real hardware faults correlate at the rack/datacenter level (shared power, shared network, a fire, a flood can take out everything in one physical location at once). Availability zones exist to explicitly group resources by shared correlated risk, so you can deliberately spread redundant copies *across* zones — ensuring one zone's correlated failure doesn't take down your entire redundant setup.

### Model Answer
> Redundancy techniques: RAID (disk redundancy), dual power supplies, hot-swappable CPUs, backup generators — designed for hardware faults, which are relatively independent across components. Availability zones exist because real faults aren't purely independent — they correlate at the physical-location level: a whole rack or datacenter can go down together (power outage, network failure, fire). AZs group co-located, correlated-risk resources into named units, so architects know exactly which machines share a failure domain — and can deliberately place redundant copies of data/services in *different* AZs, ensuring that one zone's correlated failure doesn't also take out its backup.

### Knowledge Gap
Real conceptual conflation (AZ vs. region) rather than an omission — same shape as several earlier concept-conflation gaps in this chapter (C8/H18, C6). Worth a dedicated retest with the two terms explicitly contrasted.

### Memory Priority
Medium

### Follow-up Required
Yes — light retest specifically contrasting availability zone vs. region.

## Q021
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** H11 — Rolling upgrades
**Difficulty:** Level 1 (Recall)
**Question:** What's a rolling upgrade, and what's the single-server alternative it avoids?

### My Answer
> "A rolling upgrade is a scenario whereby we have multiple servers and we upgrade each server one at a time instead of upgrading them all at once so that during each upgrade, there's always a server that is running the previous version in case something happens during an upgrade. This is to reduce the risk of the upgrade failing. And the case whereby if we upgrade all at once and the new version is a failure, then that would disrupt the user's request."

### Assessment
🟠 Partially Correct

### What I Got Right
Rolling upgrade correctly explained: patch/restart nodes one at a time, always something serving traffic, no full outage.

### What I Missed
The question asked for the *single-server* alternative it avoids — with only one server total, there's no other node to absorb traffic while it's patched and restarted, so that system is forced into **planned downtime**. The answer instead described "upgrading all multi-servers simultaneously" — a different, still-multi-server scenario, not the single-server case the question asked about.

### Model Answer
> A rolling upgrade patches/restarts one node at a time across a fleet, so there's always at least one node serving traffic — no downtime for users. This is specifically a benefit *of having multiple nodes* — a single-server system has no other node to fail over to while it's being patched, so it's forced into planned downtime (take the system offline, upgrade, bring it back). Rolling upgrades aren't really "avoiding an alternative upgrade strategy" — they're something only possible once you have redundancy in the first place.

### Knowledge Gap
Same pattern as H10 (Q20): answering a plausible, related-but-different question instead of the one specifically asked. Worth a light retest to lock in the single-server framing specifically.

### Memory Priority
Low

### Follow-up Required
Light — quick recall check later.

## Q022
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** H12 — Software fault categories
**Difficulty:** Level 1 (Recall)
**Question:** Name at least three of the five software fault categories the chapter lists (simultaneous-trigger bugs, runaway resource-consuming processes, a slow/corrupting dependency, emergent behavior from system interactions, cascading failures).

### My Answer
> "An example of a simultaneous trigger bug is one that is caused by a time duration. For example, there was a time whereby companies were very fearful as to whether or not the time hitting the millennium, the year 2000 and midnight, will cause a bug to the software. And fortunately, nothing happened. However, they were trying to combat a potential bug that would have been caused by the time being 0000. An example of a slow corrupting dependency is when a database can't handle the load that's being sent by the server. So over time, all other servers that are depending on that database also slows down to a halt and therefore slows down the response coming back to the client after it sends a request. Runaway Resource Consuming process is about a server having a memory leak and the server keeps leaking and eventually consumes all available memory."

### Assessment
🟢 Correct

### What I Got Right
Three categories correctly named with accurate, concrete examples: simultaneous-trigger bug (Y2K — a genuinely fitting real-world example of a correlated, time-triggered bug), slow dependency causing cascading knock-on slowness, and memory-leak runaway resource consumption.

### What I Missed
Nothing required.

### Model Answer
> **Simultaneous-trigger bugs**: the same bug fires on every node at once (Y2K, the 2012 Java leap-second bug, a firmware bug hitting every SSD of a model at the same operating hour). **Runaway resource-consuming processes**: a memory leak, unbounded cache growth, or a thread leak that eventually exhausts a resource. **Slow/corrupting dependency**: a downstream service (often a database) that slows down or returns bad data, and that problem propagates to everything depending on it. **Emergent behavior from system interactions**: individually-correct components combine in an unanticipated way that only manifests at scale or under specific timing. **Cascading failures**: one component's failure increases load/pressure on others, causing them to fail too, in a chain reaction.

### Knowledge Gap
None.

### Memory Priority
Low

### Follow-up Required
No.

## Q023
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** H14 — The Post Office Horizon scandal
**Difficulty:** Level 1 (Recall)
**Question:** What happened in the Post Office Horizon scandal, and why does the chapter treat it as a central real-world illustration of why software reliability matters?

### My Answer
> "post office horizon scandal was a scandal by the UK post office. They had a software system that would flag potential fraudulent activities by their staff based on numerical discrepancies picked up by the system. Turns out that this system had bugs in it, but because it was hard to actually diagnose or find bugs within a software system, hundreds of employees were wrongly convicted for financial fraud when it was not their fault, rather the fault of the buggy system."

### Assessment
🟡 Mostly Correct

### What I Got Right
Core story accurate: UK Post Office, Horizon software flagged numerical discrepancies as fraud, the software had bugs, hundreds of employees were wrongly convicted for something the software caused, not them.

### What I Missed
- The chapter's specific legal detail: English law presumed computer evidence correct unless proven otherwise — this legal presumption is *why* buggy software output could stand as courtroom evidence and convict people, not just "bugs are hard to diagnose."
- Didn't explicitly connect the case back to the chapter's argument: this is the book's central illustration of why software reliability is not an abstract engineering nicety — unreliable software caused severe, irreversible real-world harm (wrongful convictions, ruined lives) at scale.

### Model Answer
> The UK Post Office's Horizon accounting system had bugs that produced false discrepancies, which the Post Office (and courts) treated as evidence of employee theft/fraud. Between 1999 and 2015, hundreds of subpostmasters were prosecuted — many imprisoned, financially ruined, some died before being exonerated — based substantially on this flawed software output. A key enabling factor: English law at the time presumed computer evidence was reliable unless proven otherwise, which meant defendants had to prove the software was wrong, an extremely difficult bar, rather than the prosecution having to prove it was right. The chapter uses this case as its sharpest real-world argument for why reliability isn't just an engineering preference — bugs in software that people are legally/financially dependent on can cause severe, sometimes irreversible harm, and "seems to work" is not the same as "is reliable."

### Knowledge Gap
G016 — Legal-presumption detail and explicit reliability tie-in were both missing; core narrative was solid and honestly reconstructed from memory.

### Memory Priority
Medium

### Follow-up Required
Light — retest later specifically on the legal-presumption angle and the explicit "why this proves reliability matters" connection.

## Q024
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** H13 — Chaos engineering / fault injection
**Difficulty:** Level 1 (Recall)
**Question:** What is chaos engineering, and what's the underlying logic of deliberately breaking things in production — why does that actually increase confidence rather than risk it?

### My Answer
> "Chaos engineering is when you intentionally, purposefully try to break your system so that your team gets confident in knowing how the system breaks and preemptively defend against it. By doing so, you are one step ahead of the customer and we avoid the customer having to discover bugs or errors or faults from their end. This way we shift the fault discovery or bug discovery earlier."

### Assessment
🟡 Mostly Correct

### What I Got Right
Definition solid: deliberately triggering faults on purpose. Directionally correct on "why it builds confidence": finding problems on your own terms, proactively, beats a customer discovering them first.

### What I Missed
Framed it as generic "break things to find bugs early," rather than the chapter's more specific mechanism: chaos engineering exists to validate that a system's *fault-tolerance mechanisms* (failover, redundancy, retries) actually work under real fault conditions. Untested fault tolerance is just an assumption — you don't know your failover works until you've watched it work. "Finding bugs early" and "proving your safety nets actually catch you" are related but distinct claims; the answer captured the former, the chapter's point is closer to the latter.

### Model Answer
> Chaos engineering: deliberately triggering faults (e.g. killing processes at random, Netflix's Chaos Monkey) in a controlled way to continually exercise and validate a system's fault-tolerance mechanisms. It increases confidence rather than risking it because untested fault tolerance is really just an assumption — you don't actually know your failover works until you've watched it work. Waiting for a real, uncontrolled incident to be the first test means finding out your redundancy was misconfigured at the worst possible moment. Chaos engineering finds those gaps proactively, on your own schedule, with the team watching and ready to intervene.

### Knowledge Gap
G017 — "Find bugs early" framing vs. the chapter's specific "validate fault-tolerance mechanisms actually work" framing.

### Memory Priority
Low

### Follow-up Required
Light — quick recall check later to lock in the "validating redundancy/failover" framing specifically.

## Q025
**Date:** 2026-09-04
**Topic:** Scalability
**Concept:** H15 — Understanding load
**Difficulty:** Level 1 (Recall)
**Question:** Before discussing growth scenarios, the chapter says you need to describe current load concretely. Name the throughput/peak numbers you'd use, and at least two other load characteristics (besides raw request rate) that affect scalability requirements.

### My Answer
> "genuinely i do not know how to answer this"

### Assessment
⚪ Don't Know

### What I Got Right
Honest flag rather than a guess — correct instinct, matches how H2 (materialization) was handled earlier.

### What I Missed
Everything: the concrete throughput numbers (average/peak posts/sec from the case study) and the additional load characteristics beyond raw rate.

### Model Answer
> Describing current load concretely means anchoring to real numbers, not vague labels like "high traffic" — e.g. this chapter's case study: 5,800 posts/sec average, up to 150,000 posts/sec peak. Beyond raw throughput, other characteristics that shape scalability requirements: **read/write ratio** (a read-heavy system scales very differently than a write-heavy one — caching helps reads, not writes), **cache hit rate** (a high hit rate means your backend sees far less load than the request count suggests — a drop in hit rate can silently multiply backend load), and **items per user / fan-out size** (how many followers/connections a typical or extreme user has, since that's what determines fan-out multiplier cost, as seen in the celebrity-timeline case). The point of naming these concretely is that "how scalable is this" is unanswerable without a specific load description to scale *from*.

### Knowledge Gap
G018 — Genuine, honestly-flagged gap; no prior exposure retained from source material.

### Memory Priority
Medium

### Follow-up Required
Yes — retest once this has had a chance to sink in, since it was a full "don't know" rather than a partial answer.

## Q026
**Date:** 2026-09-04
**Topic:** Scalability
**Concept:** H16 — Two ways to study load increase
**Difficulty:** Level 1 (Recall)
**Question:** Name the two ways the chapter describes for studying how a system responds to increased load.

### My Answer
> "1. keep resources fixed and increase load and monitor how performance changes. 2. increase load and increase resources to keep performance the same."

### Assessment
🟢 Correct

### What I Got Right
Both approaches correctly and precisely stated: (1) fix resources, increase load, observe performance change; (2) increase load, ask how much more resource is needed to hold performance steady.

### What I Missed
Nothing.

### Model Answer
> Two ways to study load response: (1) Keep resources fixed, increase load, observe how performance degrades. (2) Increase load, then ask how much additional resource is needed to keep performance constant. The first tells you where your current setup breaks; the second tells you the cost of scaling to meet growth — both are needed for real capacity planning.

### Knowledge Gap
None.

### Memory Priority
Low

### Follow-up Required
No.

## Q027
**Date:** 2026-09-04
**Topic:** Scalability
**Concept:** H17 — Linear scalability
**Difficulty:** Level 1 (Recall)
**Question:** What does "linear scalability" mean, and why does the chapter call it a good but non-default outcome?

### My Answer
> "Linear scalability means that the increase of traffic load onto the server is met with the same increase of compute power to serve those load. It is a good but non-default outcome is because it is typically non-linear. The increase in load is typically met with a more increasing need for computing resource."

### Assessment
🟢 Correct

### What I Got Right
Definition correct: resources scale proportionally with load (double resources → double load handled at the same performance). Correctly explained why it's non-default: resource needs typically grow faster than load (superlinear), not proportionally.

### What I Missed
Nothing required.

### Model Answer
> Linear scalability: doubling your resources lets you handle double the load at the same performance — a clean, proportional relationship between resources added and load handled. It's called a good but non-default outcome because it's not what you get automatically — coordination overhead, contention, and non-uniform bottlenecks mean cost commonly grows *faster* than load (superlinear), so the same 2x load increase might require 3x or more resources to hold performance steady. Linear scalability is an engineering achievement to design for, not an assumption to build on.

### Knowledge Gap
None.

### Memory Priority
Low

### Follow-up Required
No.

## Q028
**Date:** 2026-09-04
**Topic:** Scalability
**Concept:** H18 — Principles for scalability
**Difficulty:** Level 1 (Recall)
**Question:** Name at least three of the chapter's principles for scalability (e.g. "no magic scaling sauce," rethinking architecture at order-of-magnitude jumps, splitting into independent components, not over-engineering).

### My Answer
> "There's no one-size-fits-all scalable architecture because it really depends on how the users access the services or the servers. Also the architecture that's used for one load level will likely not be the same architecture used for a load that's 10 times that of that load level. So it needs some rework. The idea of splitting into independent components is so that we can think of scalability in terms of independent components because there could be cases whereby we need to scale up just one component instead of having to scale up all of it. The idea of not over engineering is about not going to Microsoft's trade, not thinking about distributed engineering trade, distributed resources trade. Instead, if we could use just a monolith and that serves the business needs, then we should stick by it."

### Assessment
🟢 Correct

### What I Got Right
Four principles correctly named and accurately explained (more than the required three): no magic scaling sauce (architecture is workload/access-pattern-specific), rethinking architecture at order-of-magnitude load jumps, splitting into independent components (so components scale independently), and not over-engineering (don't adopt distributed-systems complexity a monolith could handle).

### What I Missed
Nothing required.

### Model Answer
> Chapter's scalability principles: (1) **No magic scaling sauce** — architecture is workload-specific (access patterns matter, not just raw throughput numbers); what scales one system won't automatically scale another. (2) **Rethink architecture roughly every order-of-magnitude load increase** — an architecture that works at 1x load usually needs rework at 10x, not just more of the same hardware. (3) **Split systems into independent components** — so you can scale the bottleneck piece without scaling everything. (4) **Don't add complexity you don't need** — a monolith that meets current requirements is often the right call; distributed-systems complexity is a cost to pay only when actually necessary, not a default.

### Knowledge Gap
None.

### Memory Priority
Low

### Follow-up Required
No.

## Q029
**Date:** 2026-09-04
**Topic:** Maintainability
**Concept:** H19 — Operability practices
**Difficulty:** Level 1 (Recall)
**Question:** Name at least three concrete operability practices the chapter lists (e.g. monitoring/observability, avoiding single-machine dependency, clear documentation, good defaults with override options, self-healing with manual control retained, predictable behavior).

### My Answer
> "Monitoring and observability is about providing the engineers or the support teams with tools to be able to trace and observe all requests and all responses and all processing that's happening across the different servers so that whenever something happens, one is able to see at a high level the source of it and to be able to plan mitigations. Avoiding single machine dependency is about using multiple servers to support a service so that whenever there's a bug or an error whatsoever, the support team or the maintenance team will be able to take down one server, fix it without disrupting the service that's provided to the users. Clear documentation is about giving a if this then that kind of user flow so that whenever a maintenance or support team is presented with a particular scenario he is able to refer to the documentation to perform the best practice response."

### Assessment
🟢 Correct

### What I Got Right
Three practices correctly named and accurately explained: monitoring/observability (tracing requests across servers to locate and mitigate issues), avoiding single-machine dependency (redundancy lets one node be pulled for maintenance without disrupting service), clear documentation (runbook-style "if this, then that" guidance for support teams).

### What I Missed
Nothing required.

### Model Answer
> Operability practices: **Monitoring/observability** — visibility into system health and request flow so problems can be diagnosed quickly. **Avoiding single-machine dependency** — redundancy so any one node can be taken down for maintenance without an outage. **Clear documentation and predictable operational model** — runbooks and consistent behavior so on-call engineers aren't guessing. **Good defaults with override options** — safe out-of-the-box behavior, but tunable when needed. **Self-healing with manual control retained** — automatic recovery where possible, but humans can always intervene. **Predictable behavior** — the system behaves consistently, so operators can reason about it under pressure.

### Knowledge Gap
None.

### Memory Priority
Low

### Follow-up Required
No.

## Q030
**Date:** 2026-09-04
**Topic:** Maintainability
**Concept:** H20 — Essential vs. accidental complexity
**Difficulty:** Level 2 (Explanation)
**Question:** What's the difference between essential and accidental complexity, and why does the distinction matter for maintainability?

### My Answer
> "Essential complexity is about the problem set itself. For example, if you're trying to solve fraud within the financial payment space, that problem itself is a very complex one because there are so many factors involved in detecting fraud. However, if you're dealing in a problem space or just appointment setting for a doctor, that problem space becomes very, very simple complexity involved in that. Accidental complexity is more of a workaround or a patch or a kind of hack to solve an engineering problem because there's a limit to the tools that we have on hand. Therefore, it's a result of not having the optimum tool for the problem."

### Assessment
🟠 Partially Correct

### What I Got Right
Both definitions in the right neighborhood: essential complexity as inherent to the problem domain itself (fraud detection vs. appointment scheduling is a good contrasting example), accidental complexity as complexity introduced by implementation/tooling limitations rather than the problem itself.

### What I Missed
The explicitly requested second half — why the distinction matters for maintainability — was skipped entirely. Essential complexity can't be removed (it's inherent to the problem), but accidental complexity *can and should* be reduced — this is exactly what "simplicity" (one of the three maintainability pillars, C10) targets: good abstractions strip away accidental complexity without losing functionality. The distinction matters because it tells you where effort is well spent — fighting essential complexity is fighting the problem itself, but reducing accidental complexity is a genuine, achievable maintainability win.

### Model Answer
> **Essential complexity**: complexity inherent to the problem domain itself — no matter how well you engineer it, fraud detection is harder than appointment scheduling because the underlying problem has more moving parts. This complexity can't be removed, only managed. **Accidental complexity**: complexity introduced by *how* the system is built — poor abstractions, legacy workarounds, unnecessary layers, tooling limitations — that has nothing to do with the problem's inherent difficulty. This complexity *can* be reduced. The distinction matters for maintainability because it tells you where to focus: essential complexity sets a floor you can't engineer below, but accidental complexity is pure waste — every bit of it removed makes the system easier to understand, debug, and extend without losing any actual capability. "Simplicity" as a maintainability pillar specifically means driving accidental complexity toward zero through good abstraction, not pretending the essential complexity isn't there.

### Knowledge Gap
G019 — Same "dropped second half" pattern seen repeatedly this chapter; definitions solid, the "why it matters" clause skipped.

### Memory Priority
Medium

### Follow-up Required
Light — quick recall check later specifically on the maintainability/abstraction connection.

## Q031
**Date:** 2026-09-04
**Topic:** Maintainability
**Concept:** H21 — Abstraction as a complexity tool
**Difficulty:** Level 2 (Explanation)
**Question:** How does abstraction help reduce complexity, and what's the tradeoff or limitation of relying on it?

### My Answer
> "Abstraction helps to hide the complex functions or complex operations that happen at the back end. Therefore, what is presented to the consumer that's hitting that function is just an interface. The trade-off is with the simplicity that comes with abstraction. You are limited by what the interface provides you versus being able to unlock everything that the function behind the abstraction provides."

### Assessment
🟡 Mostly Correct

### What I Got Right
Correctly explained the core mechanism: abstraction hides implementation detail behind a clean interface, so the consumer only deals with the interface, not the underlying complexity. Gave a reasonable, generally valid tradeoff: a clean interface restricts access to the full capability of what's underneath it.

### What I Missed
Missed the chapter's other stated benefit of abstraction: a good abstraction's interface can be **reused across many different applications** (e.g. SQL hides storage/concurrency/crash-recovery detail and gets reused across countless different apps; high-level languages hide machine code the same way). The answer captured "hides complexity" but not "and that hidden-complexity interface becomes reusable" — abstraction isn't just a one-time hiding, it's a reusable building block.

### Model Answer
> Abstraction reduces complexity by hiding implementation detail behind a clean interface — SQL hides on-disk data structures, concurrency, and crash recovery; high-level languages hide machine code. The added benefit beyond just "hiding": that same interface can be reused across many different applications, so the complexity only has to be solved once, well, rather than reinvented per project. The chapter's own focus is specifically on general-purpose abstractions for data systems (transactions, indexes, event logs) rather than application-specific patterns (design patterns, DDD) — general-purpose abstractions are valuable precisely because of that reuse. (The tradeoff you raised — being limited to what the interface exposes — is a real, standard risk of abstraction, sometimes called a "leaky abstraction" problem, though it isn't explicitly named with that term in this chapter.)

### Knowledge Gap
G020 — Missed the reuse-across-applications half of the benefit; the tradeoff given was a reasonable general point even though not explicitly stated in the source text for this question.

### Memory Priority
Low

### Follow-up Required
Light — quick recall check later on the "reusable across applications" half.

## Q032
**Date:** 2026-09-04
**Topic:** Maintainability
**Concept:** H22 — Evolvability and irreversibility
**Difficulty:** Level 2 (Explanation)
**Question:** What does "evolvability" depend on, and why does the chapter say minimizing irreversible actions preserves flexibility? Give an example of an irreversible action it warns against.

### My Answer
> "Evolvability of a system depends on whether it is loosely coupled. For example, if we are using interfaces instead of the actual functions, and the interface is general enough such that we can switch the underlying functions beneath the interface easily, then that's a loosely coupled system, and that allows the system to evolve more flexibly, versus being tightly coupled whereby the system uses the function itself, and when we want to change systems or we want to change tools, then we have to change everything, we have to change everywhere those functions are being called, and that will be quite a mess. An example of an irreversible action is if we are to upgrade from our current database to a new database and upon migration we realize that the performance of the new database doesn't meet the SLO that we have and we want to go back to the previous database and it's near impossible or very very hard because We have to undo all the schema changes and whatnot."

### Assessment
🟡 Mostly Correct

### What I Got Right
Loose coupling correctly explained with a clear, accurate example (interfaces vs. direct function calls, and the ripple effect of tight coupling when swapping tools). The irreversible-action example — a database migration that can't be cleanly rolled back once the SLO is missed — is exactly the kind of example the chapter warns about.

### What I Missed
- Evolvability depends on **two** named things: simplicity *and* the quality of a system's abstractions — loose coupling (via good abstraction) was covered, but "simplicity" as an independent, explicitly-named dependency wasn't mentioned.
- The general "why" principle — irreversible actions raise the stakes of any given change, so minimizing them preserves the freedom to change course if something goes wrong — was demonstrated implicitly through the good example, but never stated directly as the underlying reasoning.

### Model Answer
> Evolvability depends on two things: a system's **simplicity** and the quality of its **abstractions** — loosely coupled, simple systems are easier to change than tightly coupled, complex ones (exactly the loose-coupling point given). Minimizing irreversible actions preserves flexibility because irreversibility raises the stakes of a decision: if you can undo a change, a mistake costs you the effort to revert; if you can't, a mistake can be permanent. Keeping the option to reverse course means you can try something, learn it was wrong, and correct it — without irreversibility, every change has to be right the first time, which kills the willingness to experiment or adapt. Example (exactly matched): migrating to a new database is far lower-risk if you can still switch back when problems surface — once schema changes and cutover are irreversible, you're stuck with a database that might not even meet your SLOs.

### Knowledge Gap
G021 — "Simplicity" as a second named dependency, and stating the general irreversibility principle explicitly rather than only via example.

### Memory Priority
Medium

### Follow-up Required
Light — quick recall check later on the "simplicity + abstraction quality" framing and the explicit "why" statement.

## Q033 (Retest)
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H4 — Queueing and metastable failure
**Difficulty:** Level 2 (Explanation)
**Question:** Why does response time rise sharply (not gradually) as throughput approaches capacity? And what's a metastable failure — why can it persist even after the original load drops?

### My Answer
> "Response time rises sharply as throughput approaches capacity because there are things such as queuing that the server needs to handle and there are potential for contention when different requests try to access the same data and whatsoever and all of these causes a request that typically takes a certain amount of time to take an extra amount of time because there's a lot of these coordination involved. A meta stable failure is when a server is met with increasing amount of load causing incoming requests to be piled up in the queue and on the client's end because the request timed out or whatsoever, the client then starts to retry again even though its request may currently still be in the queue causing a further pile up in the queue and even though the server returns back to normal load, there is this queue of constant client retries that snowballs causing the queue to be overloaded."

### Assessment
🟡 Mostly Correct

### What I Got Right
Major improvement over the first attempt (Q014): the metastable failure mechanism is now correctly and clearly explained — retries pile onto an already-queued request, that retry traffic snowballs, and the queue stays overloaded even after the original triggering load returns to normal. This is exactly the self-sustaining-loop mechanism the chapter describes.

### What I Missed
The "why sharp, not gradual" half is still generic: queueing and contention were named as causes of delay, but not *why the rise is sharp specifically* — the actual mechanism is that queue length (and thus wait time) grows nonlinearly as utilization approaches capacity, trending toward infinity near 100% utilization, so a small increase in load near the ceiling causes a disproportionately large jump in response time. The answer describes delay accumulating, not the nonlinear shape of that accumulation.

### Model Answer
> Response time rises sharply because queueing is nonlinear near capacity: as throughput approaches the system's maximum, queue length (and therefore wait time) grows disproportionately — approaching infinity as utilization nears 100%. A small increase in load near the ceiling causes a large jump in response time, unlike the roughly flat response time at low utilization. **Metastable failure** (now correctly captured): an overloaded system enters a self-sustaining loop — rising response times cause clients to time out and retry, that retry traffic adds to the existing load, pushing response times up further, causing more timeouts and retries. This persists even after the original triggering load returns to normal, because the retry storm itself has become the dominant load.

### Knowledge Gap
G010 (updated) — narrowed from two weak halves to one: only the sharpness/nonlinearity mechanism remains open.

### Memory Priority
Low

### Follow-up Required
Light — one more light check on the specific "nonlinear queue growth near capacity" phrasing would close this out.

## Q034 (Retest)
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** C6 — Hardware faults vs. software faults
**Difficulty:** Level 2 (Explanation)
**Question:** What's the key difference in how these two fault types behave across multiple machines (correlated vs. independent), and why does that difference matter for how you defend against each?

### My Answer
> "Hardware faults are typically independent because when one server fails, it could be due to a physical defect within the insights of that server, which would likely not be the case for other servers around it. However, for software faults, because the problem is within the software itself and the software is currently being hosted and being run by the different hardware, across different hardware, typically, software faults are correlated, i.e. if there's a bug within the software that's been hosted in server A, that same software would have the same bug that's been hosted in server B. What this means is for hardware faults, we can plan around just defending that individual machine, aka we talk about hot-swappable CPUs, we talk about backup power generators. However, for software faults, because it may happen across different servers and whatnot, we need to defend it more aggressively, aka if there's an error or fault within the system in the process of processing the request to the response to the client, we should still be able to fall back to producing errors to the client instead of just shutting down the system if there's a bug. Also, there should be a way whereby we can perform a patch on the software incrementally so that we can patch the server one at a time so that the users can still access the service or there's no downtime when the patch is being done."

### Assessment
🟡 Mostly Correct

### What I Got Right
Major improvement over the first attempt (Q006): the correlated/independent distinction is correctly and clearly explained, and this time the "why it matters for defense" question is actually answered — hardware faults get per-machine redundancy (hot-swappable CPUs, backup generators); software faults get graceful degradation (fallback error responses instead of full shutdown) and rolling/incremental patch deployment.

### What I Missed
The specific point the chapter makes wasn't hit: redundancy is *useless* against correlated software faults, because adding more machines just adds more copies of the identical bug — it doesn't matter how many "backup" instances you have if they all fail the same way at the same time. The defenses offered (graceful degradation, rolling deploys) are valid and related, but the chapter's named toolkit for software faults is testing, code review, isolation, canary/gradual rollouts, and monitoring — about catching/limiting bugs before and during deployment, not just handling failures gracefully once they occur.

### Model Answer
> Hardware faults (disk failures, RAM errors, CPU faults) are relatively rare and largely **independent** across machines — this is exactly the assumption redundancy (RAID, multiple power supplies, extra nodes) relies on: if failures are independent, the probability of enough of them happening simultaneously to cause a system-wide failure is very low. Software faults are often highly **correlated** — the same bug, deployed to every node, can trigger on all of them at once. This is *why* the difference matters practically: redundancy is the right tool for hardware faults but actively useless against correlated software faults — you can't "redundancy" your way out of a bug that exists identically in every copy. Defending against software faults requires testing, isolation between components, careful monitoring, and gradual/canary rollouts that limit blast radius — an entirely different toolkit than "add more machines."

### Knowledge Gap
G004 (updated) — narrowed from "skipped entirely" to one specific missing point: redundancy's uselessness against correlated faults, and the testing/isolation/canary toolkit specifically.

### Memory Priority
Low

### Follow-up Required
Light — one more check specifically on "why redundancy doesn't help against correlated faults" would close this out.

## Q035 (Retest)
**Date:** 2026-09-04
**Topic:** Scalability (Case Study)
**Concept:** H2 — Fan-out and materialization
**Difficulty:** Level 1 (Recall)
**Question:** Define both terms, and explain how they relate — what does materialization actually do to the fan-out cost?

### My Answer
> "The concept of Fan Out is when a particular request gets handled by the server and this results in even more operations or computations being handled. For example, when a person on Twitter post and submits the post on Twitter, it is a 3 individual followers timeline and this concept is what is called a Fan Out. The concept of materialization is in the case of Twitter, we want to create a materialized view of each person's timeline ahead of time so that when the person views his timeline, there won't be a reading of the data on the fly to save on latency costs."

### Assessment
🟡 Mostly Correct

### What I Got Right
Fan-out correctly defined (one request multiplying into many downstream operations). Materialization now correctly defined — a real improvement over the first attempt, which flagged it as genuinely unknown: precomputing and storing a timeline ahead of time so reads become cheap lookups instead of live computation.

### What I Missed
The specifically requested relationship wasn't addressed: what materialization actually does to the fan-out cost. It doesn't eliminate the fan-out cost — it relocates it. Without materialization, every read would need an expensive live computation, repeated on every page load. With materialization, the cost moves to write time instead: one post still triggers N writes (still multiplied by the fan-out factor), but each write is cheap, and it's paid once per post rather than once per read.

### Model Answer
> **Fan-out**: the multiplier from one request (a post) to many downstream operations (one timeline update per follower). **Materialization**: precomputing and storing a query's result ahead of time, so reads become cheap lookups instead of expensive live computation. Relationship: materialization is what makes fan-out *tractable* for reads, but it doesn't eliminate the fan-out cost — it relocates it from "expensive, repeated at every read" to "cheap-per-item but done N times at write." The total work doesn't disappear; it just moves to a cheaper, one-time point in the pipeline.

### Knowledge Gap
G008 (updated) — materialization definition gap fully closed; only the specific "relocates, doesn't eliminate" relationship point remains.

### Memory Priority
Low

### Follow-up Required
Light — one more check on the "relocates vs. eliminates" framing would close this out.

## Q036 (Retest)
**Date:** 2026-09-04
**Topic:** Scalability (Case Study)
**Concept:** H3 — Celebrity vs. ordinary-user timeline handling
**Difficulty:** Level 2 (Explanation)
**Question:** Why is it acceptable to drop a write for an ordinary user's post but not for a celebrity's post — and how does the chapter's design actually handle celebrity posts differently?

### My Answer
> "It is okay to drop a write for an ordinary user's post because given a scenario of a user following a lot of active accounts, there's a high likelihood that the user do not want to read every single post from all of those active accounts. Therefore, it is highly likely that it's okay to drop one or two of these posts because the user won't notice anyway. However, for a celebrity's post, there's a high chance that the user following this celebrity want to know every single thing that's been updated by the celebrity due to the nature of his or her status. And the way this chapter design celebrity post is instead of creating a materialized view for the followers of the celebrity which would be crazy operationally. Instead, when the user following this celebrity loads his timeline, this celebrity post would be retrieved on the fly just for the celebrity alone and merge into the timeline of the user."

### Assessment
🟢 Correct

### What I Got Right
The earlier inversion (Q013) is fully resolved: correctly identifies that the drop-tolerant case is about a *reader* who follows many active accounts getting a high write rate to their own timeline, not about followers of an ordinary poster. Celebrity handling correctly explained: no fan-out at write time, merged into each reader's timeline at read time instead.

### What I Missed
Nothing required.

### Model Answer
> Two edge cases for materialized timelines, opposite failure modes: (1) A reader who follows many active accounts gets a high write rate into their own precomputed timeline — dropping some writes is acceptable since they're unlikely to read every post anyway. (2) A celebrity poster with millions of followers creates a massive fan-out on every post — dropping those writes is not acceptable, since each follower specifically expects to see it. Fix: don't fan out celebrity posts at write time; store them separately and merge into each reader's timeline only at read time.

### Knowledge Gap
G009 resolved. M001 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q037 (Retest)
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H6 — Latency terminology
**Difficulty:** Level 2 (Explanation)
**Question:** The chapter distinguishes response time, service time, queueing delay, and latency as separate terms. Define all four, and explain why you should always measure response time client-side, not server-side.

### My Answer
> "Response time - time between client sending request and receiving response. Service time - time spent by server actively processing request. Queueing delay - time request is waiting on the queue and not being worked on. Latency - time spent request not being actively processed. Network latency is time spent travelling across networks. Client side response instead of server side is because that is what users experience more accurately."

### Assessment
🟡 Mostly Correct

### What I Got Right
All four terms (plus bonus network latency) correctly and precisely defined again. This time an explanation was actually attempted for "why client-side" instead of being skipped entirely (as in Q016) — real behavioral improvement.

### What I Missed
The explanation stayed surface-level: "more accurate to user experience" restates the conclusion rather than giving the mechanism. The actual reason: head-of-line blocking — a request can sit queued behind other requests, or stuck in network transit, before the server even starts working on it. Server-side measurement (start of processing to end of processing) completely misses that queueing/network time, so it can look great even while the user is still waiting.

### Model Answer
> Response time: total elapsed time from the client's perspective. Service time: time the server actively spends processing. Queueing delay: time spent waiting, not processing. Latency: general term for non-processing time. Always measure client-side because of head-of-line blocking: a request can be queued or stuck in transit before the server even starts on it, and server-side timing (which only starts once processing begins) is blind to that time entirely — it can report a great number while the user actually waited much longer.

### Knowledge Gap
G011 (updated) — narrowed from "skipped entirely" to "attempted but generic"; only the specific head-of-line-blocking mechanism remains.

### Memory Priority
Low

### Follow-up Required
Light — one more check on the specific head-of-line-blocking mechanism would close this out.

## Q038 (Retest)
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H7 — Tail latency amplification
**Difficulty:** Level 2 (Explanation)
**Question:** If a single user-facing request requires 5 backend calls in parallel, why is the overall request only as fast as the slowest of the 5 — and why does needing more calls make more end-user requests end up slow overall?

### My Answer
> "Because the request has to wait for the slowest call to be done. Needing more calls increases the chance for tail latency processing, where the server takes exceptionally longer to fulfill a request. As such the more the calls the higher chance for the slowest request to take even slower."

### Assessment
🟠 Partially Correct

### What I Got Right
First half solid: the overall request waits for the slowest of the parallel calls to complete. Improvement over the first attempt (Q017): this time the answer gestures toward probability ("higher chance") rather than inventing a load/queueing/retry explanation.

### What I Missed
Still not the precise mechanism. It's not that "the slowest request takes even slower" as N grows — it's that with more independent calls, the probability that *at least one* of them lands in the slow tail compounds with N: roughly 1 − (1−p)^N. Five calls at 1% each gives ~5% of end-user requests touched by at least one slow call; twenty calls pushes that closer to 18%. The effect is on how many total requests get hit by the tail, not on any individual call getting progressively slower.

### Model Answer
> The overall request is only as fast as the slowest parallel call because the client waits for all of them to return. Why more calls amplify tail latency: a probability/order-statistics effect. If each call independently has a small chance p of being slow, the probability that at least one of N calls is slow is roughly 1 − (1−p)^N — which grows with N. This is why deeply fanned-out microservice architectures have dramatically worse tail latency than the same logic in fewer calls — not because of extra load, but because there are more independent chances for one call to roll a bad number.

### Knowledge Gap
G012 (updated) — closer to the right shape (probability-flavored) but still missing the specific compounding formula and what exactly grows (fraction of requests hit, not per-call slowness).

### Memory Priority
Medium

### Follow-up Required
Yes — one more retest with concrete numbers (e.g. "each call has a 2% chance of being slow, you need 10 of them — roughly what fraction of requests get hit?") to force the precise reasoning.

## Q039 (Retest)
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** H10 — Redundancy for hardware fault tolerance
**Difficulty:** Level 2 (Explanation)
**Question:** Name at least two redundancy techniques the chapter mentions, and explain why "availability zones" exist — what real-world correlation problem do they address?

### My Answer
> "1. Raid - where data is duplicated across diff physical disks and of one partition fails the other partition can still serve data. 2. Hot swappable CPUs 3. Backup power generator. Availability zones exist within a region because if hardware fails it roughly reflects issues within that physical location e.g. if there is an earthquake it will likely affect all servers there and another cluster of servers in another availability zone can still serve the requests."

### Assessment
🟢 Correct

### What I Got Right
Three chapter-named redundancy techniques given (more than the required two): RAID, hot-swappable CPUs, backup power generators. The earlier AZ/region conflation (Q020) is fully resolved: availability zones correctly framed as being within a region, addressing physical-location-correlated risk (the earthquake example is exactly the right kind of correlated fault), with redundancy deliberately spread across zones so one zone's failure doesn't take out its backup.

### What I Missed
Nothing required.

### Model Answer
> Redundancy techniques: RAID, dual power supplies, hot-swappable CPUs, backup generators — designed for hardware faults, which are relatively independent across components. Availability zones exist because real faults correlate at the physical-location level: a whole rack or datacenter can go down together (power outage, network failure, fire, earthquake). AZs group co-located, correlated-risk resources into named units, so architects can deliberately place redundant copies of data/services in different AZs, ensuring one zone's correlated failure doesn't also take out its backup.

### Knowledge Gap
G014 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q040 (Retest)
**Date:** 2026-09-04
**Topic:** Scalability
**Concept:** H15 — Understanding load
**Difficulty:** Level 1 (Recall)
**Question:** Before discussing growth scenarios, the chapter says you need to describe current load concretely. Name the throughput/peak numbers you'd use, and at least two other load characteristics (besides raw request rate) that affect scalability requirements.

### My Answer
> "What's the answer?"

### Assessment
⚪ Don't Know

### What I Got Right
N/A — asked for the answer directly rather than attempting.

### What I Missed
Second "don't know" in a row on this concept (Q025 and now Q040) — indicates this needs a real study/re-read pass, not just repeated quizzing. Answer was given directly this turn.

### Model Answer
> Concrete throughput numbers: 5,800 posts/sec average, up to 150,000 posts/sec peak (this chapter's case study). Other load characteristics beyond raw request rate: **read/write ratio** (read-heavy vs. write-heavy systems scale differently — caching helps reads, not writes), **cache hit rate** (a drop in hit rate can silently multiply backend load), **items per user / fan-out size** (how many followers/connections a typical or extreme user has, driving fan-out cost). The point: "how scalable is this" is unanswerable without a concrete load description to scale from.

### Knowledge Gap
G018 (updated) — genuine, persistent gap across two attempts; flagged for a real study pass, not just re-quizzing.

### Memory Priority
High

### Follow-up Required
Yes — retest again after the user has had a chance to actually study this section, not just be re-asked cold.

## Q041 (Retest, numeric)
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H7 — Tail latency amplification
**Difficulty:** Level 2 (Application)
**Question:** If each of 10 required backend calls independently has a 2% chance of being slow, roughly what fraction of end-user requests get hit by at least one slow call? Walk through why the number comes out that way.

### My Answer
> "Idk. Give me answer."

### Assessment
⚪ Don't Know

### What I Got Right
N/A — asked for the answer directly.

### What I Missed
The conceptual idea from Q038 ("higher chance with more calls") hasn't yet translated into being able to actually work the formula. This numeric application is a distinct skill from the verbal explanation.

### Model Answer
> 1 − (1−0.02)^10 = 1 − 0.98^10 ≈ 1 − 0.817 ≈ **18.3%**. Reasoning: each call independently has a 98% chance of being fine. For *all 10* to be fine, multiply 0.98 by itself 10 times (0.98^10 ≈ 0.817 — an 81.7% chance every call is fine). Subtract from 1 to get the chance at least one call is slow: ~18.3%. Even though each individual call is slow only 2% of the time, fanning out to 10 calls means almost 1 in 5 end-user requests gets touched by the tail — that's the amplification effect.

### Knowledge Gap
G012 (updated) — the numeric/applied version of this concept is a genuine, persistent gap; needs a real study pass on the formula itself, separate from the verbal concept which is closer to landing.

### Memory Priority
High

### Follow-up Required
Yes — retest again after the user has had a chance to actually work through the formula, not just be re-asked cold.

## Q042 (Retest)
**Date:** 2026-09-04
**Topic:** Response Time and Latency
**Concept:** C2 — Response time vs. throughput
**Difficulty:** Level 1 (Recall)
**Question:** Define both, and say which one users typically care about vs. which one drives your infrastructure cost/sizing decisions.

### My Answer
> "response time is the time taken from the time that the client sends the request to the client receiving the response. Throughput is the amount of request that can be handled by the server at any given time. Oh, think through police department driving the infrastructure decisions. because in order to serve a certain amount of people we need a certain amount of throughput and thus affects the infrastructure"

### Assessment
🟠 Partially Correct

### What I Got Right
Both definitions correct again. This time, half of the previously-skipped clause was answered: throughput correctly identified as the driver of infrastructure/cost/sizing decisions.

### What I Missed
The other half of the same clause — which one users typically care about (response time, since it's what they directly experience) — still wasn't stated.

### Model Answer
> Response time: elapsed time a client experiences per request. Throughput: requests processed per unit time. Users care about response time — it's what they feel. Throughput drives cost/sizing — it's what determines how many servers you provision. A system can have great throughput and terrible response time simultaneously; this is exactly the gap SLOs on response-time percentiles are designed to close.

### Knowledge Gap
G001 (updated) — narrowed from "entire second clause skipped" to "half of it now correct, other half still missing."

### Memory Priority
Low

### Follow-up Required
Light — one more quick check specifically on "users care about response time" would close this out.

## Q043 (Retest)
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** C4 — Fault vs. failure
**Difficulty:** Level 1 (Recall)
**Question:** Define both, and explain the relativity point: how can the same event be a "failure" from one perspective and only a "fault" from another?

### My Answer
> "When an item faces a fault, you can steal service requests and produce responses. However, when the item faces a failure, it it totally stops and cannot process any request at all. A server can face a failure but in the grand scheme of things if there's a pool of servers operating, the application can still produce a response so at the application level it's facing a fault."

### Assessment
🟢 Correct

### What I Got Right
This time both plain definitions were stated up front, resolving the original gap: fault = something's wrong but the system can still serve; failure = complete stoppage, unable to process anything. The relativity point was correctly demonstrated again: a server-level failure becomes just a fault at the fleet level, since the pool of servers keeps the application serving.

### What I Missed
Nothing required.

### Model Answer
> **Fault**: one part of a system stops working correctly. **Failure**: the system as a whole no longer provides its required service — it's no longer meeting its SLO. Relativity: a single server dying is a failure of that server, but if the fleet has redundancy and traffic reroutes seamlessly, it's only a fault at the fleet level — the fleet (what users actually interact with) never failed.

### Knowledge Gap
G002 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q044 (Retest)
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** C5 — Fault tolerance and single point of failure (SPOF)
**Difficulty:** Level 1 (Recall)
**Question:** Define both terms, and explain why "fault tolerance" is always bounded rather than unlimited.

### My Answer
> "Fault tolerance is the ability of a system to handle a fault anywhere in the infrastructure. Single point of failure is something if fails will take the whole system down. Fault tolerance is bounded because resources are finite. For example, if we have three servers that's supporting an application, two can feel, but there must be at least one server up to process all the requests. However, if three servers fail, then there's no service at all to process the request. Therefore, it's not unlimited."

### Assessment
🟢 Correct

### What I Got Right
SPOF definition exact. Fault tolerance defined reasonably. The "bounded" explanation is now precise and correctly framed: a concrete example of tolerating 2-of-3 servers down but not all 3 — exactly the chapter's point that fault tolerance is bounded to a specific number of faults, not a vague "too much breaks it" threshold.

### What I Missed
Nothing required.

### Model Answer
> **Fault-tolerant**: a system that keeps serving users correctly despite certain faults occurring. **SPOF**: a component whose failure always escalates to system-level failure. Fault tolerance is always bounded because no system is engineered to survive every conceivable fault — e.g. tolerates any single node dying (or, as given, 2-of-3 servers down), but not all of them at once. "How fault-tolerant is this system?" really means "which specific faults, up to what number, was this deliberately engineered to survive?"

### Knowledge Gap
G003 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q045 (Retest)
**Date:** 2026-09-04
**Topic:** Scalability
**Concept:** C8 — Scalability defined
**Difficulty:** Level 1 (Recall)
**Question:** The chapter says "X is scalable" is a meaningless statement on its own. What makes it meaningless, and what should you actually be asking instead?

### My Answer
> "Because scalability depends on how the application is accessed. It should be in the context of the business. X can handle an increase in user posting tweets from rate of A to rate of B."

### Assessment
🟠 Partially Correct

### What I Got Right
"What should you ask instead" is now solid: a concrete growth scenario (handling posting rate going from A to B), which is exactly the shape of question the chapter wants.

### What I Missed
"What makes it meaningless" is still framed as "depends on how the application is accessed" — the same conflation as the first attempt (Q008), mixing C8's actual reason with a different, later chapter point. The real reason: scalability isn't a binary yes/no property — a system might handle 2x traffic fine and fall over at 10x, so the label needs a specific growth scenario attached before it means anything.

### Model Answer
> "X is scalable" is meaningless because scalability isn't a single measurable property — it's the answer to a specific question about a specific growth scenario: "if load grows this way, what happens to performance, and how much do we need to add in resources to hold it steady?" Instead of "is this scalable," ask "how does this system's performance change if [specific dimension] grows by [specific amount]?" (exactly matching the given rate-A-to-rate-B example).

### Knowledge Gap
G005 (updated) — "ask instead" half resolved; "why meaningless" half still conflated with a different chapter point.

### Memory Priority
Medium

### Follow-up Required
Light — one more check specifically isolating "not binary, needs a scenario" from "depends on access pattern."

## Q046 (Retest)
**Date:** 2026-09-04
**Topic:** Maintainability
**Concept:** C10 — Maintainability's three principles
**Difficulty:** Level 1 (Recall)
**Question:** Name the three principles, and give a one-line meaning for each.

### My Answer
> "Operatability - how easy it is to keep the system running e.g. tracing, monitoring etc. Simplicity - how easy it is for anyone working on the system to know how the system works and what constitutes the system. Evolvability - how easy it is for the system to get updated/changed etc."

### Assessment
🟢 Correct

### What I Got Right
All three principles correctly named this time — "evolvability" replaces the earlier "extensibility" slip — with accurate one-line meanings for each.

### What I Missed
Nothing required.

### Model Answer
> **Operability**: how easy it is to keep the system running smoothly. **Simplicity**: how easy the system is to understand. **Evolvability**: how easily the system can be changed to meet new or changing requirements.

### Knowledge Gap
G006 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q047 (Retest)
**Date:** 2026-09-04
**Topic:** Scalability (Case Study)
**Concept:** H1 — Case study numbers
**Difficulty:** Level 1 (Recall)
**Question:** Give the average and peak posts/sec for the chapter's Twitter-like case study, and roughly how many follows/followers the average user has.

### My Answer
> "Average 5800 peak 150000. 200 follows and 200 followers."

### Assessment
🟢 Correct

### What I Got Right
All numbers exact: 5,800/sec average, 150,000/sec peak, 200/200 follows/followers.

### What I Missed
Nothing.

### Model Answer
> 5,800 posts/sec average, up to 150,000 posts/sec peak (~26x average). Average user: ~200 follows, ~200 followers.

### Knowledge Gap
G007 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q048 (Retest)
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H9 — Percentile computation
**Difficulty:** Level 1 (Recall)
**Question:** Name the four approximate percentile-computation algorithms/libraries the chapter mentions, and explain why you can't just average two percentile values together.

### My Answer
> "I only remember openhistogram. We can't just average the two percentile values because it won't paint an accurate picture, we need the entire distribution of durations for both percentile values and then divide accordingly."

### Assessment
🟠 Partially Correct

### What I Got Right
Correctly recalled OpenHistogram (1 of 4, up from 0 last time). Directionally correct: you need the underlying distributions, not just the derived percentile numbers.

### What I Missed
Still missing HdrHistogram, t-digest, DDSketch. The closing phrase again drifts imprecise — "divide accordingly" instead of the actual mechanism: combine the underlying histograms and recompute the percentile from the merged distribution (percentiles aren't linear, so there's no arithmetic combination of two percentile numbers that gives a correct combined one).

### Model Answer
> Approximate percentile algorithms: HdrHistogram, t-digest, OpenHistogram, DDSketch. You can't average two percentile values because percentiles aren't linear — averaging p99(server A) and p99(server B) doesn't give a meaningful p99 of the combined traffic. Instead, combine the underlying histograms (which these libraries are designed to merge cheaply) and recompute the percentile from the merged distribution.

### Knowledge Gap
G013 (updated) — 1 of 4 names now recalled; phrasing still imprecise on "recompute" vs. "divide."

### Memory Priority
Low

### Follow-up Required
Light — one more check on the remaining three names and the "recompute, don't divide" precision.

## Q049 (Retest)
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** H11 — Rolling upgrades
**Difficulty:** Level 1 (Recall)
**Question:** What's a rolling upgrade, and what's the single-server alternative it avoids?

### My Answer
> "A rolling upgrade is upgrading a pool of servers one at a time. It avoids downtime in the case of single server setup."

### Assessment
🟢 Correct

### What I Got Right
Rolling upgrade correctly defined. This time correctly names the single-server alternative it avoids — planned downtime, since a single-server setup has no other node to fail over to while patching — resolving the earlier substitution of a different multi-server scenario.

### What I Missed
Nothing required.

### Model Answer
> A rolling upgrade patches/restarts one node at a time across a fleet, so there's always at least one node serving traffic. A single-server system has no other node to fail over to while being patched, so it's forced into planned downtime instead.

### Knowledge Gap
G015 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q050 (Retest)
**Date:** 2026-09-04
**Topic:** Response Time and Latency
**Concept:** C2 — Response time vs. throughput
**Difficulty:** Level 1 (Recall)
**Question:** Of response time and throughput, which one do users typically care about directly, and why?

### My Answer
> "Response time - from the time the client sent a request to the time that the client receives the response. Throughput - the total amount of requests that can be processed by the system at a given time. Users typically care about the response time because it's the one that they first hand experience."

### Assessment
🟢 Correct

### What I Got Right
Both definitions restated correctly, and this time the specifically missing piece was answered directly: users care about response time because it's what they directly/first-hand experience.

### What I Missed
Nothing required.

### Model Answer
> Users care about response time — it's what they feel directly. Throughput drives infrastructure cost/sizing decisions instead — it's what determines how many servers you provision, not what any single user experiences.

### Knowledge Gap
G001 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q051 (Retest, skipped)
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** H14 — The Post Office Horizon scandal
**Note:** User did not recall the original question (asked earlier in this session, before /compact) and requested to skip rather than answer cold from an unclear memory. Not graded, not counted in Overall Progress. G016 remains open.

## Q052 (Retest)
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** C6 — Hardware faults vs. software faults
**Difficulty:** Level 2 (Explanation)
**Question:** Why is redundancy (adding more machines) useless as a defense against correlated software faults specifically?

### My Answer
> "Due to the nature of software being hosted by these different hardware, a fault on a particular software would probably be replicated across the different software, across the different hardwares. Assuming that it's of the same version, even if we add more machines the software fault would still cause a fault in all the machines."

### Assessment
🟢 Correct

### What I Got Right
Nailed the exact point missing from Q034: adding more machines just adds more copies of the identical software bug (same version), so redundancy doesn't help — every "backup" fails the same way at the same time.

### What I Missed
Nothing required.

### Model Answer
> Redundancy assumes failures are independent — more copies means lower odds of enough failing simultaneously. Software faults break that assumption: the same bug, deployed identically to every machine, isn't independent at all. Adding more machines just adds more copies of the identical bug — it doesn't matter how many "backups" you have if they all fail the same way at the same time.

### Knowledge Gap
G004 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q053 (Retest)
**Date:** 2026-09-04
**Topic:** Scalability (Case Study)
**Concept:** H2 — Fan-out and materialization
**Difficulty:** Level 2 (Explanation)
**Question:** What does materialization actually do to the fan-out cost — does it eliminate it or just move it?

### My Answer
> "materialization help save computing in fan-out by shifting the work upfront. instead of cascading a request to multiple requests at time of the first request, we perform the downstream requests upfront before users even ask for it so that when eventually the users ask for it, we just have to present our pre-computed information."

### Assessment
🟢 Correct

### What I Got Right
Correctly states materialization shifts (not eliminates) the fan-out cost to write time — precomputing ahead of the read, so the read just presents already-done work.

### What I Missed
Nothing required.

### Model Answer
> Materialization doesn't eliminate the fan-out cost — it relocates it from "expensive, repeated at every read" to "cheap-per-item but done N times at write." The total work doesn't disappear; it moves to a cheaper, one-time point in the pipeline (write time), exactly as described.

### Knowledge Gap
G008 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q054 (Retest)
**Date:** 2026-09-04
**Topic:** Scalability
**Concept:** C8 — Scalability defined
**Difficulty:** Level 1 (Recall)
**Question:** Why exactly is "X is scalable" a meaningless statement — what's the core problem with treating scalability as a yes/no property?

### My Answer
> "because scalability is not a binary yes or no property. its very contextual. it depends on how the system is used. e.g. twitter is scalable if it's able to go from having 5800 posts per second to 150000 posts per second without degrading performance."

### Assessment
🟢 Correct

### What I Got Right
Correctly and precisely states the core reason this time: scalability isn't a binary yes/no property. The example given also demonstrates the "ask instead" framing well, using the actual case-study numbers to define a concrete growth scenario.

### What I Missed
Nothing required.

### Model Answer
> "X is scalable" is meaningless because scalability isn't a single measurable, binary property — it's the answer to a specific question about a specific growth scenario (exactly as demonstrated: "can it go from 5,800 to 150,000 posts/sec without degrading?"). A flat "is it scalable" has no well-defined answer until a growth scenario is attached.

### Knowledge Gap
G005 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q055 (Retest)
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H4 — Queueing and metastable failure
**Difficulty:** Level 2 (Explanation)
**Question:** Why does response time rise sharply, not gradually, as throughput approaches capacity — what specifically happens to queue length near the ceiling?

### My Answer
> "if the server can handle the load comfortably, requests will be processed normally and wont end up in queues. as it gets congested, more requests will be queued, and maintaining the queue takes up compute power too and causes the requests to take longer to be processed. as the queue itself gets full, requests may even be dropped altogether."

### Assessment
🟠 Partially Correct

### What I Got Right
General flow directionally reasonable: low load avoids queueing, congestion causes queueing, an overloaded queue eventually drops requests (load shedding).

### What I Missed
Third attempt at the same specific point, still not landing: why the rise is *sharp/nonlinear* near capacity specifically. The actual mechanism (queue length/wait time grows disproportionately as utilization approaches 100%, trending toward infinity near the ceiling) wasn't stated. The answer also introduced an unsupported claim not part of the actual mechanism: "maintaining the queue takes up compute power too" — queueing overhead itself isn't the reason for the sharp response-time curve.

### Model Answer
> Response time rises sharply because queueing is nonlinear near capacity: as throughput approaches the system's maximum, queue length (and therefore wait time) grows disproportionately — approaching infinity as utilization nears 100%. A small increase in load near the ceiling causes a large jump in response time, unlike the roughly flat response time at low utilization. This is a mathematical property of queueing near saturation, not about queue-maintenance overhead.

### Knowledge Gap
G010 (updated) — third attempt, still unresolved. Flagged for a real study pass on queueing theory basics rather than further cold retesting.

### Memory Priority
High

### Follow-up Required
Yes — after a real study pass, not another cold retest.

## Q056 (Retest)
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H6 — Latency terminology
**Difficulty:** Level 2 (Explanation)
**Question:** Why is server-side response time measurement blind to the delay a user actually experiences? Name the specific mechanism.

### My Answer
> "head of line blocking. the request may take some time waiting in a queue before being processed by the server."

### Assessment
🟢 Correct

### What I Got Right
Named the specific mechanism this time — head-of-line blocking — and correctly explained it: a request can sit queued before the server starts processing it, and server-side timing only captures the processing portion, missing that queued wait entirely.

### What I Missed
Nothing required.

### Model Answer
> Head-of-line blocking: a request can be queued or stuck in transit before the server even starts on it. Server-side timing (which only starts once processing begins) is blind to that time — it can report a great number while the user actually waited much longer.

### Knowledge Gap
G011 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q057 (Retest)
**Date:** 2026-09-04
**Topic:** Maintainability
**Concept:** H20 — Essential vs. accidental complexity
**Difficulty:** Level 2 (Explanation)
**Question:** Why does the essential/accidental complexity distinction matter for maintainability — where should effort actually go?

### My Answer
> "because accidental complexity is a result of limitations in the tools which result in less than ideal set of system choices. effort should actually go to finding simpler ways or straightforward ways to get the job done."

### Assessment
🟡 Mostly Correct

### What I Got Right
Correctly identifies accidental complexity as tooling/limitation-driven, and correctly directs effort toward simplifying it — matching the chapter's point that accidental complexity is removable.

### What I Missed
The explicit contrast that makes the distinction matter wasn't stated: essential complexity can't be removed — it's a floor you can't engineer below — so fighting it is wasted effort, while every bit of accidental complexity removed is pure gain (easier to understand/debug/extend) without losing any actual capability.

### Model Answer
> The distinction matters because it tells you where effort is well spent — essential complexity sets a floor you can't engineer below, so fighting it is fighting the problem itself; accidental complexity is pure waste, and every bit removed makes the system easier to understand, debug, and extend without losing any capability. "Simplicity" as a maintainability pillar specifically means driving accidental complexity toward zero through good abstraction.

### Knowledge Gap
G019 (updated) — "where effort goes" half now solid; "essential complexity is unavoidable, so don't fight it" half still missing.

### Memory Priority
Low

### Follow-up Required
Light — one more check specifically on the "essential = floor you can't engineer below" framing.

## Q058 (Retest)
**Date:** 2026-09-04
**Topic:** Maintainability
**Concept:** H21 — Abstraction as a complexity tool
**Difficulty:** Level 1 (Recall)
**Question:** Beyond hiding implementation detail, what's the other named benefit of a good abstraction, and give the chapter's example?

### My Answer
> "a good abstraction is able to be used across more than 1 server."

### Assessment
🟠 Partially Correct

### What I Got Right
Gestured at "reuse" as the general shape of the answer, which is the right neighborhood.

### What I Missed
Conflated the actual point with an unrelated concept: the chapter's benefit is reuse **across many different applications** (SQL, high-level languages), not "used across multiple servers" — that's a distributed-deployment concept, not an abstraction-reusability one. No example was given.

### Model Answer
> A good abstraction's interface can be reused across many different applications — SQL hides storage/concurrency/crash-recovery detail and gets reused across countless different apps; high-level languages hide machine code the same way. The complexity only has to be solved once, well, rather than reinvented per project.

### Knowledge Gap
G020 (updated), M002 (new) — this is now tracked as a content misconception (servers vs. applications), not just a missing detail.

### Memory Priority
Medium

### Follow-up Required
Yes — retest with real spacing, explicitly contrasting "reused across applications" from "deployed across servers."

## Q059 (Retest)
**Date:** 2026-09-04
**Topic:** Maintainability
**Concept:** H22 — Evolvability and irreversibility
**Difficulty:** Level 2 (Explanation)
**Question:** Evolvability depends on two named things — simplicity and what else? And state the general principle for why minimizing irreversible actions preserves flexibility (not just an example).

### My Answer
> "Simplicity and maintainability. Minimizing irreversible actions would allow us to revert to an original state does avoiding rigidness."

### Assessment
🟠 Partially Correct

### What I Got Right
The general irreversibility principle is now correctly stated directly (not just via example, resolving that half of Q032's gap): the ability to revert to a prior state preserves flexibility and avoids rigidness.

### What I Missed
"Maintainability" as the second named dependency is a category error — evolvability is itself one of maintainability's three pillars (alongside operability and simplicity), so it can't depend on the whole thing it's part of. The actual second dependency is the quality of a system's **abstractions**.

### Model Answer
> Evolvability depends on a system's simplicity and the quality of its abstractions — loosely coupled, simple, well-abstracted systems are easier to change than tightly coupled, complex ones. Minimizing irreversible actions preserves flexibility because irreversibility raises the stakes of a decision: if you can undo a change, a mistake costs you the effort to revert; if you can't, a mistake can be permanent — so keeping the option to reverse course preserves the freedom to try, learn, and correct.

### Knowledge Gap
G021 (updated) — irreversibility principle now solid; "abstraction quality" as the second dependency still not landing (confused with the broader maintainability umbrella).

### Memory Priority
Medium

### Follow-up Required
Light — one more check specifically isolating "abstraction quality" from "maintainability" as the umbrella term.

## Q060 (Retest)
**Date:** 2026-09-04
**Topic:** Reliability
**Concept:** H13 — Chaos engineering / fault injection
**Difficulty:** Level 2 (Explanation)
**Question:** What specifically does chaos engineering validate — not "find bugs early" in general, but what exact thing is being tested?

### My Answer
> "The ability for the system to handle faults gracefully."

### Assessment
🟢 Correct

### What I Got Right
Correctly identifies the specific thing under test: whether the system's fault-tolerance mechanisms actually work, not a generic "find bugs early" framing.

### What I Missed
Nothing required.

### Model Answer
> Chaos engineering validates that a system's fault-tolerance mechanisms — failover, redundancy, retries — actually work under real fault conditions. Untested fault tolerance is just an assumption; you don't know your failover works until you've watched it work.

### Knowledge Gap
G017 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q061 (Retest)
**Date:** 2026-09-04
**Topic:** Describing Performance
**Concept:** H9 — Percentile computation
**Difficulty:** Level 1 (Recall)
**Question:** Name the other three approximate percentile-computation algorithms/libraries besides OpenHistogram, and state precisely what you do to combine two servers' percentiles correctly (not "average," not "divide" — the actual step).

### My Answer
> "Hdrhistogram, t-digest, ddsketch. Merge both histograms and perform percentile calculations."

### Assessment
🟢 Correct

### What I Got Right
All three remaining algorithm names correctly given (completing all four with OpenHistogram from before). The precise mechanism stated correctly: merge the underlying histograms, then compute the percentile from the merged result.

### What I Missed
Nothing required.

### Model Answer
> HdrHistogram, t-digest, DDSketch (plus OpenHistogram). Combine two servers' percentiles by merging their underlying histograms and recomputing the percentile from the merged distribution — exactly as given.

### Knowledge Gap
G013 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q062 (Retest)
**Date:** 2026-09-05
**Topic:** Maintainability
**Concept:** H20 — Essential vs. accidental complexity
**Difficulty:** Level 2 (Explanation)
**Question:** State the point directly: since essential complexity can't be removed, what does that mean for where you should NOT spend effort?

### My Answer
> "We should not spend effort in figuring out how to remove essential complexity as it's necessary due to the business problem."

### Assessment
🟢 Correct

### What I Got Right
States the point directly this time: don't spend effort trying to remove essential complexity, since it's inherent to the business problem — resolving the last missing piece from Q030/Q057.

### What I Missed
Nothing required.

### Model Answer
> Essential complexity sets a floor you can't engineer below — it's inherent to the problem itself. Fighting it is fighting the business problem, which is wasted effort; effort should go toward accidental complexity instead, since that's genuinely removable.

### Knowledge Gap
G019 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q063 (Retest)
**Date:** 2026-09-05
**Topic:** Maintainability
**Concept:** H22 — Evolvability and irreversibility
**Difficulty:** Level 1 (Recall)
**Question:** Evolvability depends on simplicity and the quality of a system's what?

### My Answer
> "Data interfaces. The better the interface the easier it is to enhance the system without a lot of rework."

### Assessment
🟢 Correct

### What I Got Right
"Data interfaces" captures the same idea as the chapter's "abstractions" — the chapter's own examples of abstractions (SQL, high-level languages) are themselves interfaces. The reasoning is exactly right: a good interface means less rework when enhancing the system, resolving the earlier "maintainability" category error.

### What I Missed
Nothing required.

### Model Answer
> Evolvability depends on a system's simplicity and the quality of its abstractions/interfaces — a good interface lets you change what's behind it without having to change everything that calls it, exactly as described.

### Knowledge Gap
G021 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q064 (Retest)
**Date:** 2026-09-05
**Topic:** Describing Performance
**Concept:** H4 — Queueing and metastable failure
**Difficulty:** Level 1 (Recall)
**Question:** Why does response time rise sharply, not gradually, as throughput approaches capacity?

### My Answer
> "As throughput reaches capacity, response times increases drastically due to queuing."

### Assessment
🟢 Correct

### What I Got Right
This matches the chapter's own explanation exactly (source.md lines 87-94): response time rises sharply near capacity because of queueing — an incoming request must wait if the system is still busy with earlier requests. The book doesn't go further into nonlinear queueing-theory math in this chapter.

### What I Missed
Nothing — see note below.

### Model Answer
> As throughput approaches the maximum a system can handle, response time rises sharply. This happens because of queueing: an incoming request must wait if the system is still busy with earlier requests.

### Knowledge Gap
G010 resolved. **Grading correction**: prior attempts (Q014, Q033, Q055) were graded against a nonlinear-queueing-math explanation that isn't actually present in this chapter's source text — that standard came from outside general knowledge, not this book. Re-graded against the actual source depth.

### Memory Priority
Low

### Follow-up Required
No.

## Q065 (Retest)
**Date:** 2026-09-05
**Topic:** Describing Performance
**Concept:** H7 — Tail latency amplification
**Difficulty:** Level 2 (Application)
**Question:** If each of 8 required backend calls independently has a 3% chance of being slow, roughly what fraction of end-user requests get hit by at least one slow call?

### My Answer
> "1-(1-0.03)^8= 1-0.783743= 0.216257. 21.6%"

### Assessment
🟢 Correct

### What I Got Right
Correct formula applied and correctly computed by hand: 1-(0.97)^8 ≈ 21.6%. The numeric application of the compounding-probability mechanism now lands cleanly, resolving the gap flagged after Q041.

### What I Missed
Nothing.

### Model Answer
> 1 − (1−0.03)^8 = 1 − 0.97^8 ≈ 1 − 0.7837 ≈ 21.6% — matches exactly.

### Knowledge Gap
G012 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q066 (Retest)
**Date:** 2026-09-05
**Topic:** Scalability
**Concept:** H15 — Understanding load
**Difficulty:** Level 1 (Recall)
**Question:** Give the two case-study numbers used to describe current load concretely, and name the three other load characteristics that matter besides raw request rate.

### My Answer
> "Case of Twitter 5800 posts per sec average and 150000 posts per sec peak. There other load characteristics - number of signups per minute, number of purchaeses per minute, number of checkouts per minute"

### Assessment
🟠 Partially Correct

### What I Got Right
Case-study numbers exactly right: 5,800/sec average, 150,000/sec peak — the genuine "don't know" from Q025/Q040 is now resolved for this half.

### What I Missed
The three "other load characteristics" were pulled from the wrong list in the same short source section. Source.md lists two adjacent things: (1) examples of describing current load with concrete numbers — "requests per second, new data per day, checkouts per hour" — and (2) other load characteristics beyond raw rate — read/write ratio, cache hit rate, data items per user. The answer used examples from list (1) instead of the actual list (2).

### Model Answer
> Case-study numbers: 5,800 posts/sec average, 150,000 posts/sec peak. Other load characteristics beyond raw request rate: read/write ratio, cache hit rate, and data items per user — which one matters depends on the application.

### Knowledge Gap
G018 (updated) — improved from a genuine blank to a within-section list confusion; case-study numbers fully resolved.

### Memory Priority
Low

### Follow-up Required
Light — one more check specifically isolating the two adjacent lists in this section.

## Q067 (Retest)
**Date:** 2026-09-05
**Topic:** Maintainability
**Concept:** H21 — Abstraction as a complexity tool
**Difficulty:** Level 2 (Explanation)
**Question:** Contrast these two: what does it mean for an abstraction to be "reused across applications" versus "deployed across servers"? Are they the same thing?

### My Answer
> "They're not the same thing. It's about removing the complications of the things that underlying the abstraction. For example, programming language programming languages get to abstract the machine code below it. SQL gets to abstract the way data is being retrieved and stored"

### Assessment
🟢 Correct

### What I Got Right
Correctly states the two are not the same thing, and gives the exact book examples of reuse-across-applications: programming languages abstracting machine code, SQL abstracting storage/retrieval detail — every program/app using that language or SQL reuses the same abstraction. This resolves the earlier servers-vs-applications conflation.

### What I Missed
Nothing required.

### Model Answer
> Not the same thing. "Reused across applications" means the same abstraction's interface (SQL, a programming language) gets used by many different, unrelated programs — the complexity is solved once and reused everywhere. "Deployed across servers" is about distributing one running system across multiple machines — an unrelated, infrastructure-level concept.

### Knowledge Gap
G020 resolved. M002 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q068 (Retest)
**Date:** 2026-09-05
**Topic:** Reliability
**Concept:** H14 — The Post Office Horizon scandal
**Difficulty:** Level 1 (Recall)
**Question:** What legal detail let flawed software evidence stand in court and made wrongful convictions possible?

### My Answer
> "There were errors in detecting the difference of amounts in accounting leading to several account managers being charged. At the time, computer evidence were assumed to be right."

### Assessment
🟢 Correct

### What I Got Right
Correctly identifies the legal-presumption detail: computer evidence was assumed correct at the time — matching source.md exactly (English law presumed computer evidence correct unless proven otherwise), which is the piece missed in the earlier attempt.

### What I Missed
Nothing required.

### Model Answer
> The Post Office Horizon scandal (UK, 1999-2019): faulty accounting software showed shortfalls, and hundreds of branch managers were wrongly convicted of theft or fraud before the bugs were found. It happened partly because English law presumed computer evidence correct unless proven otherwise — exactly as given.

### Knowledge Gap
G016 resolved.

### Memory Priority
Low

### Follow-up Required
No.

## Q069 (Retest)
**Date:** 2026-09-06
**Topic:** Scalability
**Concept:** H15 — Understanding load
**Difficulty:** Level 2 (Explanation)
**Question:** Besides raw numbers like "requests per second," the chapter names three *other* load characteristics worth tracking. Name them, and say why each matters (not just "requests/sec"-style volume metrics — think ratio/hit-rate/per-user angle).

### My Answer
> "new data per day, checkouts per hour, simulteneous online users"

### Assessment
🔴 Incorrect

### What I Got Right
Nothing on-target — "new data per day" and "checkouts per hour" are the wrong list again (source.md line 298, describing-load-with-numbers examples), and "simultaneous online users" isn't in either source list at all.

### What I Missed
The actual three (source.md line 300): read/write ratio, cache hit rate, data items per user. Same specific mixup as Q066 — reaching for the adjacent numeric-examples list instead of the ratio/rate/per-user list, word-for-word the same failure mode.

### Model Answer
> Read/write ratio — matters because a read-heavy workload (caching, read replicas) needs a different architecture than a write-heavy one (write-optimized storage, sharding by write key). Cache hit rate — matters because a low hit rate means most requests fall through to the slower backing store, telling you whether your caching strategy is actually working or just adding overhead. Data items per user — matters because it affects per-user data size and fan-out cost (a user with 10,000 followed accounts or items generates a very different load shape than one with 10), and skew from power users can break assumptions built on the average case.

### Knowledge Gap
G018 / M003 — second straight failure on the identical sub-point. Now flagged Sticky, moved into Weak Concepts. Needs a real spaced retest (different day, ideally reworded to force distinguishing the two lists), not another immediate attempt.

### Memory Priority
High

### Follow-up Required
Yes — spaced retest, explicitly contrast the two lists side by side before re-asking.

## Q070 (Retest)
**Date:** 2026-09-06
**Topic:** Scalability
**Concept:** H15 — Understanding load
**Difficulty:** Level 2 (Explanation)
**Question:** Besides raw numbers like "requests per second," the chapter names three *other* load characteristics worth tracking. Name them, and say why each matters.

### My Answer
> "The three 'other load characteristics' specifically: read/write ratio, cache hit rate, items per user — not the 'describing load with numbers' list (requests/sec, new data/day, checkouts/hour)."

### Assessment
🟠 Partially Correct

### What I Got Right
Names finally correct — read/write ratio, cache hit rate, items per user — and correctly distinguished from the other list this time. The M003 mixup is fixed.

### What I Missed
The "why each matters" half of the question was not attempted at all, third time this specific gap has gone unanswered.

### Model Answer
> Read/write ratio — a read-heavy workload wants caching/read replicas; a write-heavy one wants write-optimized storage/sharding by write key — different architecture depending on which dominates. Cache hit rate — a low hit rate means most requests fall through to the slower backing store, telling you whether the caching strategy is actually working. Data items per user — affects per-user data size and fan-out cost; a user with far more items/follows than average (skew, power users) can break assumptions built on the average case.

### Knowledge Gap
G018/M003 — recall now fixed. New, narrower gap: the explanation half of H15 has literally never been attempted across three tries (Q066, Q069, Q070) — worth asking as its own standalone question next time rather than bundled with recall.

### Memory Priority
Medium

### Follow-up Required
Yes — ask the "why" half standalone next time, not bundled with the name-recall.
