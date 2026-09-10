# Knowledge Mastery Tracker — Category 3: Problem Decomposition

## Scope
**Category:** Problem Decomposition (feeds `../scoreboard.md` Category 3)
**Concept/scenario list:** knowledge-map.md (this folder)

This tracker has two logs: a **Concept Mastery** table (D1-D5, generic
Q&A) and a **Scenario Reps** table (CS1-CS7, live-decomposition drills
graded on D4's four sub-criteria) — merged in from the former
case-studies/ subfolder so there's one tracker per category, not two.

## Overall Progress
- Concept questions attempted: 0
- Scenario reps attempted: 1
- Overall demonstrated mastery: Early — strong clarifying-question phase and prioritization instinct, one real gap on tradeoff-surfacing (see CS1)
- Current weak areas: proposing a solution that contradicts a hard constraint self-discovered earlier in the same session (CS1's "no live status -> AI dispatch without confirmation"), without flagging the safety tradeoff; no evaluation/rollout-safety plan for a high-stakes automation proposal

---
# Knowledge Gaps

| ID | Concept | Gap | Severity | Status | Attempts | Correct |
|---|---|---|---|---|---:|---:|
| | | | | | | |

---
# Concept Mastery (D1-D5)

| Concept | Recall | Explanation | Connection | Application | Overall |
|---|---|---|---|---|---|
| D1 The C.A.S.E. framework | — | — | — | — | Untested |
| D2 MECE principle | — | — | — | — | Untested |
| D3 The "Three Whys" diagnostic | — | — | — | — | Untested |
| D4 What decomposition graders look for | — | — | — | — | Untested |
| D5 Common decomposition failure mode | — | — | — | — | Untested |

---
# Scenario Reps (CS1-CS7)

| Scenario | Clarifying Qs | Decomposition | Prioritization | Tradeoffs | Overall Score | Status |
|---|---|---|---|---|---|---|
| CS1 911 response times | 10 | 8 | 9 | 5 | 7 | Attempted — solid |
| CS2 Dashboard trust breakdown | — | — | — | — | — | Untested |
| CS3 Hospital readmissions | — | — | — | — | — | Untested |
| CS4 Emergency bulk ingestion | — | — | — | — | — | Untested |
| CS5 Hostile stakeholder access | — | — | — | — | — | Untested |
| CS6 Real-time fraud detection <100ms | — | — | — | — | — | Untested |
| CS7 Disagreeing domain experts (Anthropic) | — | — | — | — | — | Untested |

---
# Question Log (D1-D5 concept questions)

*(No questions attempted yet. New entries appended below, following this structure per question:)*

<!--
## Qnnn
**Date:** YYYY-MM-DD
**Concept:** (ID + name from knowledge-map.md)
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
# Scenario Attempt Log (CS1-CS7 live drills)

## Attempt 1
**Date:** 2026-09-10
**Scenario:** CS1 — 911 response times
**Prompt given:** "A city wants to cut 911 response times. They have 911 call data, traffic data, and ambulance GPS data. What do you build?"

### My Live Decomposition
> Extensive clarifying-question phase first (dispatching process today,
> hold times, response-time distributions/goals by urgency tier,
> available datasets incl. live fleet position, urgency-tier
> definitions, unit-reassignment policy, supervisor/gender-specific
> officer constraints, current architecture + vendor support window,
> other systems to integrate). Surfaced a load-bearing constraint
> unprompted: the CAD system only exports data in a nightly batch (no
> live call-queue/dispatch state), while AVL/GPS position is a separate
> live-capable system — meaning dispatch cannot know a unit's true
> availability live, only its position, so any dispatch (today or in a
> redesigned system) requires an accept/ack step from the unit.
>
> Decomposition: (1) **Standards/policies** — department objective is
> effective response weighted by severity; "effective" spans officer
> experience + proximity + more; flagged the need for an agreed formal
> definition of life-threatening/urgent/non-urgent (none exists today).
> (2) **Dataset** — use routing + traffic data to find the nearest
> officer. (3) **Current architecture** — system is maintenance-only
> (no new features), so migration off it is inevitable long-term;
> scoped "who builds the replacement" as out of scope; flagged the
> coexistence problem (old + new system running together without
> raising response time during transition). (4) **Processes / quick
> wins** — before any architecture work, ship what's usable
> immediately: since agents have no rubric, build a
> call-content->classification->traffic/route->dispatch-request
> reference doc any agent (junior or senior) can use, cutting the
> mental-computation step; since travel time is uncontrollable, focus
> effort on the call-to-dispatch-request window; proposed radioing 2-3
> units at once in a preference order with a ~10s no-response timeout
> before falling to the next, instead of sequential one-at-a-time
> radioing. (5) **To-be architecture** — since long-term migration is
> already implied by the maintenance-only status, proposed an "ideal
> flow" of AI call agents handling triage and dispatch autonomously
> based on availability/location/traffic/experience, **without needing
> officer confirmation**, framed as enabling effectively unlimited
> concurrent call-handling capacity.

### D4 Sub-Scores (1-10 each)
- Clarifying questions first: 10
- Clean decomposition: 8
- Prioritization: 9
- Transparent tradeoffs: 5

### What I Got Right
- Extracted the single most load-bearing constraint in the whole
  scenario (CAD batch-only export -> no live unit status -> dispatch
  requires confirmation) entirely through their own follow-up
  questions, not because it was handed to them.
- Recognized the need for a formal, agreed urgency-tier rubric before
  any dispatch automation — root-cause thinking (agents currently
  triage from pure personal judgment), not a symptom-level fix.
- "Quick wins before full architecture" — correctly prioritized
  immediately-deployable process fixes (reference documentation,
  parallel-radio-with-timeout) over waiting on a full system redesign.
- Correctly triaged travel time as the largest but least controllable
  segment of response time (established earlier in this same session)
  and focused proposed effort on the controllable call-to-dispatch
  window instead.
- The parallel-radio-with-timeout idea is a genuinely creative
  workaround: it reduces the miss/retry cost of the ack bottleneck
  *without* needing to first solve the live-status data gap.
- Correctly scoped "who builds/owns the replacement system" as out of
  bounds for this exercise.

### What I Missed
- The to-be architecture's "AI dispatches without needing officer
  confirmation" directly contradicts the hard constraint they
  themselves surfaced minutes earlier in the same conversation:
  dispatch requires confirmation *because* live unit status/
  availability isn't knowable, only position. Removing the
  confirmation step doesn't resolve that gap, it assumes it away —
  and in a life-safety context (misrouting or silently failing to
  dispatch to a real emergency), that's a real operational-safety
  regression, not just a technical simplification. This is exactly the
  kind of self-contradiction this round is designed to surface.
- No evaluation/rollout-safety plan for the AI-dispatcher vision —
  no mention of shadow-mode testing against human dispatchers,
  staged/human-in-the-loop rollout, or monitoring a false-dispatch
  rate before trusting autonomous decisions in a life-safety system.
  This matters more here than in a typical software rollout.
- "Theoretically unlimited concurrent agents" assumes call-center
  headcount is the binding constraint on hold-time, without first
  confirming that (vs. e.g. peak-volume spikes that more agents
  wouldn't fully absorb either) — an unvalidated assumption used to
  justify a large architectural leap.

### Model Decomposition
> Same phased structure the candidate proposed, with the tradeoff gap
> closed: **Phase 1 (quick wins, deployable without touching CAD at
> all)** — the reference documentation for agent decision-support, plus
> parallel-radio-with-timeout. **Phase 2 (incremental data/tooling)** —
> negotiate a real-time (or near-real-time) hook into CAD if possible,
> or accept AVL-only partial live data; feed this into a
> decision-*support* suggestion for the agent (recommend the best unit),
> keeping human confirmation in the loop rather than removing it.
> **Phase 3 (long-term, migration-dependent)** — re-evaluate whether
> full automation is ever appropriate specifically for P1
> (life-threatening) calls given the stakes of a missed/wrong dispatch;
> likely keep human confirmation permanently there, while allowing more
> automation for low-stakes P3 calls where a wrong dispatch is
> low-consequence. Bake evaluation into every phase: track
> dispatch-decision time, first-attempt-correct rate, and response-time
> percentiles, and require the quick-win phase to show measurable
> improvement over baseline before committing further investment.

### Overall Score (1-10, per ../scoreboard.md rubric)
7 — solid, well-structured, excellent clarifying-question phase and
prioritization; capped by the tradeoff gap (a to-be proposal that
silently contradicts a self-discovered hard constraint) and the
missing evaluation/rollout-safety plan for a high-stakes automation
proposal.

### Post-score follow-up discussion
Pushed on the confirmation-contradiction gap. First response: correctly
pointed out the "no live status" constraint was specific to the
*current* legacy CAD system's batch-only export, not a fundamental
limit — a future system could have officers push live status via
MDT/mobile directly. Valid point, genuinely closes the data-
availability gap. Refined further: self-reported status is still a
different, imperfect signal from a closed-loop ack, and can go stale
precisely during high-stress situations (mid-pursuit, device dead,
forgot to update) — exactly when a wrong autonomous dispatch is most
costly. Candidate conceded this and correctly re-affirmed that officer
acknowledgment should stay even in the redesigned architecture.
**Does not change the 7/10** (the gap was real and didn't surface
unprompted in the original answer), but reclassifies it: this is a
"doesn't proactively surface a self-contradiction without a nudge" gap,
not a "doesn't understand the tradeoff" gap — correctly reasoned
through it once pushed, on the first prompt. More fixable than the
alternative; follow-up practice should target catching this kind of
tension unprompted, not re-teaching the underlying concept.

### Memory Priority
High — the specific failure mode (proposing a solution that quietly
drops a constraint you yourself just proved) is a general interview
risk, not specific to this scenario. Worth deliberately checking any
future "ideal state" proposal against every hard constraint surfaced
during discovery before presenting it.

### Follow-up Required
Yes — retest with a different scenario (CS2-CS9) to see if the
tradeoff-surfacing gap recurs, or is scenario-specific. Category not
yet at PASS (score >= 8); this attempt's 7 is close.

<!--
## Attempt N
**Date:** YYYY-MM-DD
**Scenario:** CS# — name
**Prompt given:** ...

### My Live Decomposition
> ...

### D4 Sub-Scores (1-10 each)
- Clarifying questions first: N
- Clean decomposition: N
- Prioritization: N
- Transparent tradeoffs: N

### What I Got Right
- ...

### What I Missed
- ...

### Model Decomposition
> ...

### Overall Score (1-10, per ../scoreboard.md rubric)
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
# Weak Concepts / Scenarios
- Tradeoff-surfacing (D4's 4th criterion) — CS1 scored 5/10 here specifically: proposed a to-be solution that silently contradicted a hard constraint discovered earlier in the same session, without flagging the safety cost.

---
# Concepts / Scenarios Requiring Review
- Tradeoff-surfacing generalization — check whether this recurs on the next scenario (CS2-CS9) or was CS1-specific.
- D1-D5 generic concept questions — not yet tested directly (only exercised implicitly via CS1).
- CS2-CS9 — not yet attempted.
