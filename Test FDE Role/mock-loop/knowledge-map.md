---
title: "Per-Company Loop Templates — Mock Loop Simulation"
sources: "interview-stories/"
status: living document — update if a loop's stage order/timing changes
---

# OpenAI loop template

Source: `../interview-stories/openai-fde-gaijineer.md`. ~3-4hr virtual
onsite (after recruiter screen + take-home + technical screen, which
can be simulated separately or skipped in a compressed run).

1. Hiring manager (60 min) — customer-facing depth, exec-communication test.
2. Solution design (60 min) — open-ended customer scenario, must open
   with customer questions (CJ8).
3. Technical deep dive (60 min, most intense) — RAG internals, eval
   design, signature question ("how do you know it's working").

Compressed version: 20 min/round, same order.

# Anthropic loop template

Source: `../interview-stories/anthropic-fde-multisource.md`. 4-5hr
final loop (after recruiter screen + coding + take-home + customer
sim, which can be simulated separately or skipped in a compressed run).

1. Technical/applied-AI conversation — retrieval, agent design, tool
   schemas, one "agent failed" story.
2. System design — multi-tenant Claude deployment, eval-harness-first.
3. Deployment case / customer scenario — unclear success criteria,
   disagreeing domain experts.
4. Values round — honesty under inconvenience (highest-failure stage).

Compressed version: 20-25 min/round, same order, values round last.

# Cohere loop template

Source: `../interview-stories/cohere-fde-gaijineer.md`. Full loop, no
coding round.

1. Hiring manager (45 min) — on-prem/scaling/ownership experience.
2. System design debugging (most distinctive) — diagram + "requests
   are failing," no hints.
3. Architecture presentation — candidate presents a real project (see
   `../architecture-presentation.md`).
4. VP behavioral — customer-pain-to-product-change story.

Compressed version: 15-20 min/round, same order.

# Full end-to-end simulation (optional, longest)

For a maximum-realism run, chain the earlier stages too:
1. Recruiter screen (10-15 min compressed) — motivation/fit questions.
2. Technical phone screen — one question from
   `../technical-depth/knowledge-map.md`.
3. Take-home stage — use `../take-home-practice/` (run separately
   ahead of time given the multi-hour build time; bring the finished
   artifact into the loop for the walkthrough round).
4. Then the company-specific onsite template above.
