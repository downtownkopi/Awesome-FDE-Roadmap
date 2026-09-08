# Knowledge Mastery Tracker — Category 1: Technical Depth

## Scope
**Category:** Technical Depth (feeds `../scoreboard.md` Category 1)
**Concept list:** knowledge-map.md (this folder)

## Overall Progress
- Questions attempted: 3
- Correct: 0
- Mostly correct: 1
- Partially correct: 1
- Incorrect: 0
- Don't know: 1
- Overall demonstrated mastery: Just started
- Current weak areas: T3 Medallion Architecture — recovery mechanism (partition-level replay after upstream fix) still missing; T1 Advanced SQL — single-cause thinking on EXPLAIN diagnosis (jumps to "missing index" without checking stale stats/function-wrapped predicates/join strategy)

---
# Knowledge Gaps

| ID | Concept | Gap | Severity | Status | Attempts | Correct |
|---|---|---|---|---|---:|---:|
| T3 | Medallion Architecture | Concrete recovery mechanism after an upstream fix — landing corrected data as new Bronze records for the affected window + replaying Silver/Gold only for that partition (not full re-ingestion) — not yet articulated | High | Open — improved from don't-know, still needs one more retest | 2 | Partial |
| T1 | Advanced SQL & query tuning | Single-cause diagnosis on EXPLAIN plans — jumps straight to "add an index" without checking stale stats, function-wrapped predicates blocking index use, or bad join strategy from row-estimate mismatches | Medium | Open — needs retest with broader diagnostic checklist | 1 | Mostly |

---
# Concept Mastery

| Concept | Group | Recall | Explanation | Connection | Application | Overall |
|---|---|---|---|---|---|---|
| T1 Advanced SQL & query tuning | Generic | Yes | Partial | No | Yes | Mostly correct — single-cause thinking, needs broader checklist |
| T2 Data modeling (Star vs. OBT) | Generic | — | — | — | — | Untested |
| T3 Medallion Architecture | Generic | Yes | Yes | Partial | Partial | Weak — improving, recovery mechanism still missing |
| T4 Distributed computing (Spark/Ray) | Generic | — | — | — | — | Untested |
| T5 Data quality & observability | Generic | — | — | — | — | Untested |
| T6 Modern FDE tool stack | Generic | — | — | — | — | Untested |
| T7 Local/offline inference runtimes | Generic | — | — | — | — | Untested |
| T8 Safe model-weight handling | Generic | — | — | — | — | Untested |
| T9 Production LLM/RAG engineering craft | Generic | — | — | — | — | Untested |
| AI1 Embedding model selection | RAG Internals | — | — | — | — | Untested |
| AI2 Chunking strategy | RAG Internals | — | — | — | — | Untested |
| AI3 Retrieval method choice | RAG Internals | — | — | — | — | Untested |
| AI4 Reranking | RAG Internals | — | — | — | — | Untested |
| AI5 Hybrid search fusion | RAG Internals | — | — | — | — | Untested |
| AI6 Fine-tune vs. RAG vs. prompt-eng | Fine-Tuning/RAG/Prompt-Eng | — | — | — | — | Untested |
| AI7 Prompt engineering as discipline | Fine-Tuning/RAG/Prompt-Eng | — | — | — | — | Untested |
| AI8 "How do you know it's working?" | Evaluation Design | — | — | — | — | Untested |
| AI9 RAG Triad (pointwise eval) | Evaluation Design | — | — | — | — | Untested |
| AI10 Pairwise / LLM-as-judge eval | Evaluation Design | — | — | — | — | Untested |
| AI11 Eval-harness-first system design | Evaluation Design | — | — | — | — | Untested |
| AI12 Faithfulness / hallucination scoring | Evaluation Design | — | — | — | — | Untested |
| AI13 Golden dataset construction | Evaluation Design | — | — | — | — | Untested |
| AI14 API rate limiting & retry patterns | Production LLM Engineering | — | — | — | — | Untested |
| AI15 Production guardrails | Production LLM Engineering | — | — | — | — | Untested |
| AI16 Context-window management | Production LLM Engineering | — | — | — | — | Untested |
| AI17 Latency/cost tradeoffs in inference | Production LLM Engineering | — | — | — | — | Untested |
| AI18 Tool schema design | Agent/Tool-Calling | — | — | — | — | Untested |
| AI19 Sub-agent decomposition | Agent/Tool-Calling | — | — | — | — | Untested |
| AI20 MCP fluency | Agent/Tool-Calling | — | — | — | — | Untested |
| AI21 Naming where agents fail | Agent/Tool-Calling | — | — | — | — | Untested |

---
# Question Log

## Q001
**Date:** 2026-09-08
**Concept:** T3 — Medallion Architecture
**Difficulty:** Level 2 (Explanation)
**Question:** Walk me through Bronze → Silver → Gold. What's the actual purpose of each layer, and why not just dump raw data straight into whatever powers the dashboard/AI layer?

### My Answer
> Don't know.

### Assessment
Don't Know

### What I Got Right
- Nothing yet — no prior exposure to this concept.

### What I Missed
- Everything: the three-layer structure, the purpose of each layer, and the reasoning for why raw data isn't consumed directly.

### Model Answer
> Bronze — raw, immutable landing zone. Data lands exactly as received
> from source, no transforms. Purpose: full audit trail, replayable
> (if downstream logic breaks, reprocess from here instead of
> re-pulling from the source system).
>
> Silver — cleaned, deduplicated, joined, conformed schema/types. The
> "single source of truth" layer: validated business entities, ready
> to reason about, but not yet shaped for any one consumer.
>
> Gold — business-ready aggregates, denormalized and pre-computed for
> a specific consumption pattern (a dashboard query, an ML feature
> set, a report). Optimized for fast reads, not flexibility.
>
> Why not dump raw straight to the dashboard/AI layer: raw data has
> quality issues (nulls, dupes, schema drift) that silently break
> downstream logic; blast-radius containment (an upstream schema
> change breaks Bronze ingestion, not every consumer wired directly to
> source); performance (Gold pre-aggregates so consumers aren't
> recomputing joins live); auditability/compliance (Bronze preserves
> exactly what was received even if a Silver/Gold bug is found later).

### Knowledge Gap
No prior exposure to this concept at all. Critical — Medallion
Architecture is foundational, commonly assumed knowledge for a
data-facing FDE role, and likely to come up in both technical-depth
and system-design rounds.

### Score (1-10, per ../scoreboard.md rubric)
1 — no attempt made.

### Memory Priority
Critical

### Follow-up Required
Yes — restudy (AWESOME-FDE-RESOURCES.md's data-architecture section, or ask me to
re-explain), then retest this same concept in a future session before
moving to a harder application-level question on it.

---

## Q002
**Date:** 2026-09-08
**Concept:** T3 — Medallion Architecture
**Difficulty:** Level 3 (Application/Scenario)
**Question:** E-commerce order pipeline. Upstream Orders API sends a batch with a broken schema (missing field) due to a source-side bug. Two days later they fix it and re-send corrected data for that window. Which layer(s) does this affect, how do you recover without re-pulling everything from scratch, and why does Bronze being immutable make this recovery possible at all?

### My Answer
> All layers affected since Bronze ingests first and Silver/Gold both
> depend on it. Recovery: enable Bronze to handle the missing field;
> old broken-schema data stays valid as historical record (just
> missing a field), giving replayability for data before the API got
> patched. Bronze as a separate immutable layer preserves the entire
> history from the first API call onward, so we can work with/
> transform data across that whole span.

### Assessment
Partially Correct

### What I Got Right
- Correctly identified all three layers as affected (Silver/Gold
  derive from the broken Bronze batch).
- Correctly reasoned that old broken-schema records remain valid
  historical data, not something to discard.
- Grasped the core purpose of immutability: preserved history enables
  replay in principle.

### What I Missed
- No concrete mechanism for what happens when the corrected data
  arrives 2 days later (land it as new Bronze records for that window,
  tagged by ingestion date/batch id, appended alongside the old ones —
  not mutated in place).
- Didn't address "without re-pulling everything from scratch" — the
  practical payoff of the pattern: re-run Silver/Gold transforms only
  for the affected date partition/window using corrected records, not
  the whole pipeline history.
- Missed that immutability's real payoff here is old/new records for
  the same window coexisting distinguishably (by timestamp/batch id),
  enabling dedup-by-latest + selective replay — not just "we have
  history."

### Model Answer
> All three layers affected (Bronze ingests the broken batch; Silver/
> Gold are derived from it, so their outputs for that window are also
> incomplete/wrong). Recovery: once the source team re-sends corrected
> data for that window, land it into Bronze as new raw records
> (append, don't overwrite — tagged by ingestion timestamp/batch id).
> Then reprocess only the Silver/Gold transforms for the affected
> date partition, using the corrected Bronze records (with dedup-by-
> latest logic if both old and new records for that window need to
> coexist) — not the entire pipeline from the beginning. Immutability
> makes this possible because Bronze is never mutated/deleted: you
> always have a complete, unaltered record of what was received and
> when, which is both the safety net (nothing lost) and the mechanism
> (old vs. corrected records are distinguishable, so you can replay
> selectively instead of re-contacting the source for historical data
> outside the affected window).

### Knowledge Gap
Recovery mechanism (partition-level replay + append-don't-mutate +
dedup-by-latest) still not independently articulated. Conceptual
understanding of "why immutability matters" is solid; the operational
"how you actually use it" is the remaining gap.

### Score (1-10, per ../scoreboard.md rubric)
5 — right direction, correct on immutability's purpose, missing the
concrete recovery mechanism that was the actual ask.

### Memory Priority
High — this is the exact shape of "why" follow-up a real interview
would ask after the Level 2 definition question.

### Follow-up Required
Yes — one more retest on this concept (ideally a slightly different
scenario, e.g. streaming vs. batch, or "how would you design the
Bronze schema to make this recovery trivial") before marking T3
solid.

---

## Q003
**Date:** 2026-09-08
**Concept:** T1 — Advanced SQL & query tuning
**Difficulty:** Level 2 (Explanation)
**Question:** You run a query and it's way slower than expected. You pull the EXPLAIN plan. What are you actually looking for in that output to diagnose why it's scanning far more data than it should — and name at least one concrete fix once you find the cause?

### My Answer
> Typically check whether the query is performing extremely long
> operations like sequential scans instead of using an index. Once I
> find what the query is accessing, I'd pick the right columns to
> build an index so a sequential scan won't happen.

### Assessment
Mostly Correct

### What I Got Right
- Correctly named seq scan vs. index scan as the first diagnostic
  signal.
- Correct baseline fix: build an index on the columns actually
  filtered/joined on.

### What I Missed
- Single-cause thinking: a seq scan doesn't always mean "no index
  exists." Missed stale table statistics (fix: `ANALYZE`), a function
  wrapped around the indexed column in the WHERE clause blocking index
  use (e.g. `WHERE LOWER(email) = ...`), and low selectivity making
  the planner correctly skip an existing index.
- Didn't mention estimated-vs-actual row count comparison in EXPLAIN
  output — a big mismatch signals bad stats, which can cascade into a
  bad join strategy (nested loop instead of hash join) even when
  indexes exist.
- Didn't mention other common causes of over-scanning: `SELECT *`
  forcing heap fetches after an index scan, missing covering index,
  filters applied after a join instead of pushed down before it.

### Model Answer
> Look for: (1) scan type per node — seq scan vs. index scan vs.
> index-only scan; (2) estimated vs. actual row counts — large
> mismatches mean stale statistics, which can cause bad plan choices
> even with correct indexes; (3) join strategy (nested loop vs. hash
> vs. merge join) and whether it matches the actual data volumes; (4)
> where filters are applied — pushed down early or only after an
> expensive join. Causes of unexpected seq scans beyond "no index":
> function-wrapped predicates preventing index use, low selectivity,
> stale stats. Fixes: build/adjust the index, run `ANALYZE` to refresh
> stats, rewrite the predicate to be sargable (avoid wrapping the
> indexed column in a function), add a covering index to avoid heap
> fetches, or reorder/rewrite the query to push filters down before
> joins.

### Knowledge Gap
Diagnostic checklist is narrower than the real interview bar — treats
"seq scan present" as sufficient to conclude "missing index" without
ruling out other causes first.

### Score (1-10, per ../scoreboard.md rubric)
6 — correct core mechanism, but single-cause reasoning instead of a
broader diagnostic checklist.

### Memory Priority
Medium — foundational and likely to come up, but the gap is breadth of
checklist rather than a wrong mental model.

### Follow-up Required
Yes — retest with a scenario where an index already exists but is
still being ignored (to force reasoning past "just add an index").

---

*(No questions attempted yet. New entries appended below, following this structure per question:)*

<!--
## Qnnn
**Date:** YYYY-MM-DD
**Concept:** (ID + name from knowledge-map.md, e.g. AI11 — Eval-harness-first system design)
**Difficulty:** Level 1 (Recall) / Level 2 (Explanation) / Level 3 (Application/Scenario)
**Question:** ...

### My Answer
> ...

### Assessment
(Correct / Mostly Correct / Partially Correct / Incorrect / Don't Know)

### What I Got Right
- ...

### What I Missed
- ...

### Model Answer
> ...

### Knowledge Gap
...

### Score (1-10, per ../scoreboard.md rubric)
...

### Memory Priority
Critical / High / Medium / Low

### Follow-up Required
Yes/No — ...
-->

---
# Misconceptions

*(None yet.)*

---
# Mastered Concepts
- (none yet)

---
# Weak Concepts
- T3 Medallion Architecture — improving (5/10), recovery mechanism (partition-level replay) still not independently articulated
- T1 Advanced SQL & query tuning — mostly correct (6/10), single-cause thinking on EXPLAIN diagnosis

---
# Concepts Requiring Review
- T3 Medallion Architecture
- Everything else — untested
