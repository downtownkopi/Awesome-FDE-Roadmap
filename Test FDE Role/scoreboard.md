# FDE Interview Prep — Scoreboard

Goal: score 8/10+ in EVERY category. Retry new questions until all categories hit target. Update after each grilled question.

Fast-glance view only. Each category below has its own subfolder
(`technical-depth/`, `system-design/`, `problem-decomposition/`,
`customer-facing-judgment/`, `behavioral/`, `business-judgment/`) with
a `knowledge-map.md` (concept list questions are drawn from) and
`knowledge-tracker.md` (full question-by-question record: question,
your answer, model answer, gap analysis).

## Categories (score 1-10 each)

| # | Category | What it measures | Latest score | Best score | Attempts | Status |
|---|----------|-------------------|---------------|------------|----------|--------|
| 1 | Technical depth (coding/Python/SQL) | Production-quality code, correctness, data pipelines | 6 | 6 | 3 | IN PROGRESS |
| 2 | System design | End-to-end data workflow / architecture design | - | - | 0 | NOT STARTED |
| 3 | Problem decomposition (ambiguity) | Clarify first, decompose, prioritize, tradeoffs, narrate | - | - | 0 | NOT STARTED |
| 4 | Customer-facing judgment | Discovery, translating business<->tech, empathy | - | - | 0 | NOT STARTED |
| 5 | Behavioral (STAR/ownership) | Concrete stories, ownership, conflict handling, results | - | - | 0 | NOT STARTED |
| 6 | Business/product judgment | Prioritization, MVP thinking, tradeoff reasoning | - | - | 0 | NOT STARTED |

Target: 8/10 in all 6. Status values: NOT STARTED / IN PROGRESS / PASS.

## Score rubric (per answer)

- 9-10: Nails clarifying Qs (if relevant), structured, concrete, quantified, no fluff, matches "best answer" bar.
- 7-8: Solid, mostly structured, minor gaps (missed tradeoff, no quantified result).
- 5-6: Right direction, missing structure or jumped to solution too fast.
- 3-4: Weak structure, vague, generic.
- 1-2: Off target or no real answer.

## Session log (running)

| Date | Category | Score | Notes |
|------|----------|-------|-------|
| 2026-09-08 | Technical depth | 1 | T3 Medallion Architecture — don't know, no prior exposure. Full model answer logged, needs restudy + retest. |
| 2026-09-08 | Technical depth | 5 | T3 Medallion Architecture retest (Level 3 scenario) — correct on layers affected + immutability's purpose, missing concrete recovery mechanism (partition-level replay). One more retest needed. |
| 2026-09-08 | Technical depth | 6 | T1 Advanced SQL & query tuning — correct seq-scan/index diagnosis and fix, but single-cause thinking (missed stale stats, function-wrapped predicates, join strategy). Retest needed. |

## Rule

Keep pulling NEW questions per weak category (score < 8) until that category hits 8+. Do not stop until all 6 rows = PASS.
