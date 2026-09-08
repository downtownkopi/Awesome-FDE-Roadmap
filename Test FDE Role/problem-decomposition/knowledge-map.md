---
title: "Knowledge Map — Category 3: Problem Decomposition"
sources: "findings.md, AWESOME-FDE-RESOURCES.md, interview-stories/"
status: living document — add a scenario whenever the user shares/finds one
note: >
  Category 3 of ../scoreboard.md's 6. findings.md flags this round as
  highest weight (~30%) and lowest pass rate (~40%) — it needs live
  reps against real scenarios, not just knowing D1 (C.A.S.E.) exists.
  This file has two sections: the concept list (D1-D5) and the
  scenario bank (CS1-CS7, merged in from the former case-studies/
  subfolder) used to drill those concepts live.
---

# Concepts

- D1. **The C.A.S.E. framework** — Clarify (data volume, security, "definition of done") → Architect (data flow via GCP primitives, see ../system-design/knowledge-map.md) → Solve/the Delta (what's missing out-of-the-box, and the glue to build) → Evaluate (hallucination checks, performance monitoring).
- D2. **MECE principle** — Mutually Exclusive, Collectively Exhaustive; used to break a broad mandate (e.g. "AI Strategy") into non-overlapping technical tasks.
- D3. **The "Three Whys" diagnostic** — What is the System of Record? What is the Cost of Inaction? What does "Day 2" look like (who owns it after the FDE leaves)?
- D4. *(from findings.md)* What decomposition-round graders actually look for: clarifying questions first, clean sub-problem breakdown, prioritization (MVP vs. later), transparent tradeoffs (why X over Y, cost/risk) — narrated live, not solved silently. This is the rubric used to grade every scenario in the bank below.
- D5. *(from findings.md)* The single most common failure mode: jumping straight to a solution before asking clarifying questions.

# Scenario Bank (for live decomposition drills)

Each scenario is graded against D4's four criteria individually before
an overall score. D5 (jumping to solution) is the failure mode to
watch for.

## Generic decomposition scenarios *(from findings.md)*

- CS1. **911 response times** — "A city wants to cut 911 response
  times. They have 911 call data, traffic data, and ambulance GPS
  data. What do you build?"
- CS2. **Dashboard trust breakdown** — "A logistics customer's ops team
  can't trust the dashboard. Diagnose the problem and plan a fix."
- CS3. **Hospital readmissions** — "A hospital system: 5 hospitals,
  10k beds, 18% readmission rate. They want AI to reduce readmissions.
  What do you build?" (AWESOME-FDE-RESOURCES.md has a full worked 30-day answer to
  this one under "The Delta Case Study" — use it as the model answer
  only after attempting cold, not before.)

## High-frequency prompts *(from AWESOME-FDE-RESOURCES.md's Interview Blackbook)*

- CS4. **Emergency bulk ingestion** — "A client has 5PB of data
  on-prem and needs it in [warehouse] within 48 hours for an emergency
  exercise. How do you do it?" Tests recognizing a bandwidth bottleneck
  and reaching for a physical-transfer pattern (../system-design/knowledge-map.md S17) instead of trying to stream it.
- CS5. **Hostile stakeholder blocking access** — "The client's lead
  engineer hates the product and refuses to give you infrastructure
  access. How do you handle it?" This one is CJ6-flavored (a trust
  problem, not a technical one — see ../customer-facing-judgment/knowledge-map.md) more than pure decomposition — good cross-category drill.
- CS6. **Real-time fraud detection under 100ms with an LLM** — "A bank
  wants real-time fraud detection under 100ms using an LLM. How do you
  architect this?" Tests recognizing an LLM is too slow for the
  primary path and reaching for the two-tier pattern (../system-design/knowledge-map.md S16).

## Anthropic-flavored scenario *(from interview-stories/anthropic-fde-multisource.md)*

- CS7. **Disagreeing domain experts, unclear success criteria** — a
  realistic enterprise deployment scenario with unclear success
  criteria, a security team raising concerns, and domain experts who
  disagree with each other on what "good" looks like. The
  differentiating move: negotiate an eval first (measure inter-expert
  agreement, then set a defensible target) rather than picking a
  metric or architecture unilaterally. Ties to AI11 in
  `../technical-depth/knowledge-map.md`.

## Additional scenarios to add over time

*(Add here as the user encounters new ones — from mock interviews, from
new interview-stories/ entries, or from AWESOME-FDE-RESOURCES.md updates. Keep the
"from X" source tag on each.)*

---
# Importance Legend
All items Critical-to-High for role/interview readiness; scores here
roll up into `../scoreboard.md`'s Category 3 row.
