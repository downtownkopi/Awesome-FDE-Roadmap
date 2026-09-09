# Knowledge Mastery Tracker — Category 2: System Design

## Scope
**Category:** System Design (feeds `../scoreboard.md` Category 2)
**Concept list:** knowledge-map.md (this folder)

## Overall Progress
- Questions attempted: 2
- Correct: 0
- Mostly correct: 2
- Partially correct: 0
- Incorrect: 0
- Don't know: 0
- Overall demonstrated mastery: Just started
- Current weak areas: S20 sequencing (negotiate stakeholder agreement
  before architecture) — resolved after 1 retest (7 -> 9, revised down
  from an initial 8 after retracting a scoring error). Residual, narrow
  gap: surfacing launch-time risk tradeoffs (e.g. a lenient-start
  threshold) explicitly for the right stakeholder

---
# Knowledge Gaps

| ID | Concept | Gap | Severity | Status | Attempts | Correct |
|---|---|---|---|---|---:|---:|
| S20 | Eval-harness-first system design | Sequencing (negotiate agreement before architecture) — resolved after retest. Residual: launch-time risk tradeoffs (e.g. lenient-start threshold) not surfaced explicitly for the right stakeholder | Low | Sequencing resolved; narrow residual gap, watch on future risk-sensitive questions | 2 | Mostly (7/10, 9/10) |

---
# Concept Mastery

| Concept | Recall | Explanation | Connection | Application | Overall |
|---|---|---|---|---|---|
| S1 GCP VPC mastery | — | — | — | — | Untested |
| S2 GKE as the K8s standard | — | — | — | — | Untested |
| S3 BigQuery architecture | — | — | — | — | Untested |
| S4 Serverless event-driven pipelines | — | — | — | — | Untested |
| S5 VPC Service Controls | — | — | — | — | Untested |
| S6 Infrastructure as Code (Terraform) | — | — | — | — | Untested |
| S7 Enterprise RAG Blueprint | — | — | — | — | Untested |
| S8 Multi-Agent Orchestration (ADK) | — | — | — | — | Untested |
| S9 Two-loop LLM eval framework | — | — | — | — | Untested |
| S10 Pointwise eval / RAG Triad | — | — | — | — | Untested |
| S11 Pairwise Evaluation | — | — | — | — | Untested |
| S12 Model/agent monitoring | — | — | — | — | Untested |
| S13 Air-gapped/tactical-edge architecture | — | — | — | — | Untested |
| S14 Compliance/accreditation stack | — | — | — | — | Untested |
| S15 Air-gap-specific failure modes | — | — | — | — | Untested |
| S16 Low-latency + LLM pattern | — | — | — | — | Untested |
| S17 Emergency bulk-ingestion pattern | — | — | — | — | Untested |
| S18 "Is it actually working?" differentiator | — | — | — | — | Untested |
| S19 Hypothesis-driven live incident debugging | — | — | — | — | Untested |
| S20 Eval-harness-first system design (Anthropic) | Yes | Yes (led with it on retest) | Yes | Mostly correct (7/10, then 9/10) | Solved with hints-equivalent (self-corrected after feedback) |
| S21 Agent/MCP/sub-agent fluency (Anthropic) | — | — | — | — | Untested |

---
# Question Log

## Q001
**Date:** 2026-09-09
**Concept:** S20 — Eval-harness-first system design (Anthropic)
**Difficulty:** Level 3 (Application/Scenario)
**Question:** Scenario (Anthropic-style, discovery-only, no hints):
designing a Claude deployment for a healthcare enterprise client's
patient-message triage. Clinical team split on escalate-vs-auto-resolve
policy; security flagged PHI concerns; leadership's only requirement is
undefined "good accuracy." Walk through the system design approach.

### My Answer
> Asked 5 clarifying questions first (message shape, channel, PHI
> scope, greenfield/brownfield + current security posture, leadership's
> definition of "good accuracy"), then 1 follow-up (urgent vs
> non-urgent current handling + existing tooling). Design: (1)
> patient-facing side unchanged; (2) urgency needs more than message
> content — pull patient history as a feature to cut false positives,
> requires analysis of which data attributes drive urgency
> classification; (3) local/self-hosted LLM + in-house logging to keep
> PHI off third-party infra; (4) backtest against historical data
> before launch; (5) human-in-the-loop feedback (nurses re-flag
> mis-triaged messages, feeds back to the model); (6) LLM restricted to
> specific scoped API endpoints (`read_customer_history`,
> `read_customer_attributes`), not free-for-all access; (7) input
> parsing to block one patient's message from triggering lookups into
> another patient's data; (8) negotiate an accuracy threshold with the
> conservative doctors to eventually forgo escalate-everything.

### Assessment
Mostly Correct

### What I Got Right
- Correct scope discipline (no patient-facing changes).
- Recognized message content alone is insufficient for urgency
  classification; pulling in patient history to reduce false positives
  is a sound, well-reasoned ML instinct.
- PHI-driven architecture response to security's concern: local
  hosting, in-house logging — directly responsive (ties to S5/S14).
- Backtest-before-launch and human-feedback-loop are solid validation
  and production-monitoring instincts (touches S12).
- Tool-scoped API boundary (LLM can only call specific named
  endpoints, no free-for-all) — sharp, unprompted, exactly the
  tool-schema-design principle from AI18/S21 (direct transfer from
  yesterday's P1 MCP-server build).
- Cross-patient data-leakage guardrail (blocking one patient's message
  from triggering a lookup into another's data) — a real
  authorization-boundary catch, not obvious, good security instinct.

### What I Missed
- The eval-negotiation move (S20's actual point) came *last*, after
  the full architecture was already designed, and was narrowed to
  "ask the conservative doctors about a threshold" rather than
  resolving the disagreement *between* conservative and aggressive
  doctors into a shared ground truth.
- The backtest plan ("compare LLM classification vs. the human's
  classification") has no defined target — two doctors would label the
  identical message differently, so "the human's classification"
  doesn't resolve to one answer without first negotiating agreement.
  Feature selection, model choice, and the backtest are all standing on
  an undefined target as designed.
- Leadership's undefined "good accuracy" was treated as a problem to
  route around (via later threshold negotiation) rather than the
  actual blocking prerequisite to resolve before any architecture
  commitment.

### Model Answer
> Anthropic's reported differentiator: before picking any metric or
> architecture, negotiate an eval — measure inter-expert agreement
> among the disagreeing doctors on a shared set of example messages
> first. If they don't agree with each other on borderline cases, that
> disagreement needs an explicit resolution policy (e.g. "if any one of
> three reviewing doctors would escalate, escalate") before "accuracy"
> means anything measurable. Only then pick a metric (e.g. near-100%
> recall on urgent-misclassified-as-non-urgent, some acceptable
> precision floor elsewhere) — and only then does architecture (hosting,
> tool boundaries, feature set) get decided. This is the reported
> pass-signal ("negotiate an eval") vs. fail-signal ("pick a metric
> unilaterally") split for this specific round.

### Knowledge Gap
Sequencing: reaches good architecture/security instincts readily, but
doesn't yet lead with negotiating/resolving stakeholder disagreement on
ground truth *before* committing to metrics or architecture — the
specific move S20 is testing. When disagreement resolution does show
up, it's underscoped (one side of the disagreement, not the
reconciliation itself).

### Score (1-10, per ../scoreboard.md rubric)
7 — solid, structured, technically strong (several unprompted sharp
catches), but missed the specific tested move, arriving late and
narrow rather than leading.

### Memory Priority
High — this is the named Anthropic system-design differentiator
(S20), and the gap is a sequencing habit, not a knowledge gap, so it's
fixable with deliberate practice: default to asking "do the
stakeholders even agree with each other on ground truth" before
touching architecture.

### Follow-up Required
Yes — retest S20 with a different disagreeing-stakeholders scenario
(different domain, not healthcare) to check whether "negotiate
agreement first" becomes the leading move rather than a late add-on.

---

## Q002
**Date:** 2026-09-09
**Concept:** S20 — Eval-harness-first system design (Anthropic) — retest
**Difficulty:** Level 3 (Application/Scenario)
**Question:** Scenario (Anthropic-style, discovery-only, no hints),
different domain from Q001: designing a Claude deployment for a
fintech client's compliance team, triaging suspicious-transaction
alerts before SAR filing. Senior analysts disagree on escalation
threshold (conservative vs. lenient); legal has audit-trail concerns;
leadership wants "reduce analyst workload without missing real fraud."

### My Answer
> Clarifying questions: review basis (industry vs. internal standard),
> post-flag process, past wrong-flag cases in both directions, root
> cause of the conservative/lenient split, legal's audit-trail
> granularity, local-vs-third-party hosting/cost tradeoff, leadership's
> workload breakdown, definition of "real fraud." Design: (1) agreed to
> co-create an internal gold-standard rubric across analysts — led with
> this, first move, not last; (2) proposed LLM-assisted SAR filing
> document scaffolding to help meet deadlines; (3) proposed building
> the first-stage flagging logic from the senior (not junior) analyst's
> judgment, with the senior analyst still reviewing every AI-flagged
> case afterward — human-in-the-loop preserved, audit requirement
> satisfied; (4) recognized adversarial pattern drift, proposed
> continuous pattern-packaging/retraining, and AI-drafted SAR docs with
> human review as workload relief; (5) proposed bootstrapping the
> rubric by starting lenient (most transactions are valid) then
> iteratively tightening from discovered misses; (6) local vs.
> third-party hosting — either acceptable for now; (7) framed the
> overall goal as "shifting left" analyst effort from triage to
> higher-value investigation.

### Assessment
Mostly Correct

### What I Got Right
- Led with the negotiated-rubric move first, unprompted — direct,
  measurable fix of Q001's flagged gap (sequencing).
- Traced the conservative/lenient split to its actual evidence (a real
  missed-SAR incident vs. a real false-positive workload burden) before
  proposing anything — strong diagnostic instinct.
- Recognized adversarial drift and proposed continuous
  retraining/pattern-packaging (ties to S12).
- SAR-filing scaffolding is a well-targeted extension of leadership's
  stated goal, not scope creep.
- Correct, natural use of "shift left" to frame the overall value
  proposition.

### What I Missed
- (Retracted on 2026-09-09: originally flagged "collapsing two-stage
  review" as a missed audit-risk tradeoff. Assistant misread the
  proposal — human-in-the-loop review was preserved all along, only
  which analyst's judgment trains the first-stage logic changed. Not a
  real gap; see corrected My Answer above.)
- "The senior analyst's logic" is still ambiguous on its own — the
  scenario states senior analysts themselves disagree (conservative vs.
  lenient), so there's no single "the senior logic" to encode. This
  isn't a new problem though — it's the same one the negotiated rubric
  (already led with, point 1) already solves. Should have stated that
  connection explicitly: the negotiated rubric *is* "the senior logic,"
  reconciled across disagreeing seniors — rather than leaving "the
  senior analyst's logic" sounding like one settled, individual view.
- Proposed lenient-start-then-tighten immediately after leading with
  "let's negotiate the rubric together" — the two ideas conflict and
  were never reconciled. Defaulting to lenient at launch carries real
  regulatory exposure in this specific domain (the scenario's own
  missed-SAR precedent). Stronger answer: use the negotiated session to
  set the *initial* threshold; treat lenient-then-tighten as the
  *post-launch* improvement loop, not the launch criteria.

### Model Answer
> Same core move as Q001 (negotiate stakeholder agreement before
> architecture) — this time correctly led with it, and correctly kept
> the human-in-the-loop audit checkpoint intact while still upgrading
> whose judgment trains the flagging logic. The one remaining gap is
> tradeoff-surfacing discipline: accepting elevated risk during a
> bootstrap period (lenient launch threshold) needs to be named
> explicitly as a tradeoff for the relevant stakeholder (legal/
> compliance) to weigh in on, not folded silently into the technical
> design — same principle, narrower scope than originally scored.

### Knowledge Gap
Sequencing gap from Q001 is resolved. Narrow remaining gap: surfacing
tradeoffs that touch risk/compliance posture (accepting launch-time
false-negative risk) as explicit decisions for
the right stakeholder, rather than making them as unilateral
architecture calls.

### Score (1-10, per ../scoreboard.md rubric)
9 (revised 2026-09-09 from an initial 8 — the review-collapse critique
was assistant error, retracted). Real improvement on Q001's flagged
gap (negotiation now leads, audit checkpoint correctly preserved); one
narrow tradeoff (lenient-launch risk) still not surfaced explicitly.

### Memory Priority
Medium — the headline S20 skill (negotiate first, keep the audit
checkpoint) is now demonstrated twice; the residual gap is narrow and
specific to risk/compliance tradeoff-surfacing on launch-time
decisions.

### Follow-up Required
No immediate retest needed on S20's core sequencing (demonstrated
fixed twice). Watch the tradeoff-surfacing gap on a future
customer-facing-judgment or business-judgment question involving a
risk/compliance-sensitive decision.

---

<!--
## Qnnn
**Date:** YYYY-MM-DD
**Concept:** (ID + name from knowledge-map.md, e.g. S8 — Multi-Agent Orchestration (ADK))
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
- (none — S20's sequencing gap resolved on retest; residual
  tradeoff-surfacing gap tracked in Knowledge Gaps, not severe enough
  to block moving on)

---
# Concepts Requiring Review
- S1-S19, S21 — untested
