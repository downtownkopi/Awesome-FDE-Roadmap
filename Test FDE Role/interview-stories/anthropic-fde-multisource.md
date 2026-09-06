---
title: "Anthropic Applied AI Engineer / FDE Interview Process — multi-source synthesis"
source:
  - https://getperspective.ai/blog/anthropic-applied-ai-engineer-interview-process-frontier-lab-2026
  - https://vibeengines.com/handbook/fde-interview-anthropic
  - https://www.tryexponent.com/guides/anthropic-forward-deployed-engineer-interview
captured: 2026-09-06
company: Anthropic
role: Applied AI Engineer / Forward Deployed Engineer
note: >
  No single first-person gaijineer.co-style account found for Anthropic
  at capture time (unlike the OpenAI/Cohere stories). This file
  synthesizes three independent guide/practitioner sources that agree
  closely on stage order and the two signature rounds (customer
  simulation, values). Treat as slightly lower-confidence than the
  single-candidate OpenAI/Cohere accounts; re-derive from a real
  candidate account if the user finds/shares one.
---

# Story summary

Five-stage loop, 4-6 weeks typical (as fast as 1 week for candidates with
competing offers). Role is framed around deploying Claude inside a
customer's business: MCP servers, sub-agents, agent skills, tool
schemas. Reported split: ~40% building, ~30% customer-facing work, ~30%
internal feedback loop. Two rounds dominate pass/fail: the
customer-conversation simulation and the values round — both outweigh
raw technical depth in most candidate reports.

# Stages (in order)

## 1. Recruiter screen — 30 min
- Background, motivation, level assessment.
- Explicit fit check against Anthropic's Responsible Scaling Policy
  (RSP) — candidates report being "unexpectedly grilled on safety
  reasoning" this early.
- Fail signal: generic "I want to work on frontier AI" with no specific
  reason tied to applied/customer-facing work.

## 2. Technical phone screen — 60 min (or CodeSignal-style async, ~90 min)
- Practical Python problem, LLM-adjacent: retrieval scorers, token
  budgets, tool orchestration, LRU-cache-with-escalating-constraints
  style problems where each new part invalidates the previous approach.
- Not LeetCode-hard. Pragmatic fluency > algorithmic cleverness.
- Prep tactic reported as working: write a simple correct version
  first, keep it extensible — compressed/clever solutions can't adapt
  when the next constraint lands.
- Pass signal: "build something that works and reason about its
  failure modes."

## 3. Take-home or extended live build — 3-4 hrs
- Build a Claude-powered application from a fictional customer brief.
- Graded on shipped behavior, API hygiene, and handling ambiguous
  requirements independently.
- Fail signal: asking the interviewer for excessive clarification
  instead of making and stating reasonable assumptions.
- Distinct from OpenAI's take-home (see
  [openai-fde-gaijineer.md](openai-fde-gaijineer.md)): OpenAI wants a
  narrated video walkthrough graded on production-readiness; Anthropic's
  version is judged more on independent judgment under ambiguity.

## 4. Customer-conversation simulation — 60-90 min ⭐ Signature round
- Run a ~45 min discovery call with an interviewer playing an
  enterprise buyer.
- Pass signal: ask layered questions about constraints and workflows,
  take notes, avoid pitching or demoing.
- Fail signal: opening a code editor; leading with a product demo
  instead of discovery.
- **Filters ~60% of candidates who already cleared the coding stages** —
  the single highest-leverage round to prepare for in this loop.
- Sharper/more theatrical than OpenAI's Solution Design round (CJ8) —
  this is a full simulated call, not an open-ended design prompt.

## 5. Virtual onsite / final loop — 4-5 hrs, multiple sessions
Reported as a mix of (naming varies slightly by source, but all three
agree on the content):

### A. Technical / applied-AI conversation
- Retrieval systems over customer documents, agent design, tool
  schemas, guardrails, observed production failure modes.
- Come with one specific story: "an agent that failed in an
  interesting way, and what you changed." Generic answers score poorly.

### B. System design
- Multi-tenant Claude deployment architecture for an enterprise
  customer.
- Explicit note from one source: interviewers focus on **evaluation
  harnesses, not RAG architecture** — the eval framework matters more
  than the retrieval pipeline choice here.

### C. Deployment case / customer scenario
- Realistic enterprise scenario: unclear success criteria, security
  team concerns, disagreeing domain experts.
- Differentiating move reported: negotiate an eval — measure
  inter-expert agreement first, then set a defensible target, rather
  than picking a metric unilaterally.

### D. Values round — reported as hardest, highest-failure stage
- Tests behavior when an honest answer creates inconvenience —
  directly relevant because FDEs discover model limitations before the
  customer does.
- Question patterns: a customer requesting an unsuitable use case; a
  personal experience of being wrong with real consequences; conditions
  that would make you refuse to ship; handling disagreement with a
  company position; an inconvenient risk you flagged anyway.
- Pass signals: specificity (names, stakes, outcomes) over stated
  principles; consistency between values answers and your technical
  decisions elsewhere in the loop; a real example of changing your mind
  on something substantive; acknowledged real cost (a delay, an
  uncomfortable conversation, a lost deal) — not cost-free idealism.
- Prep method reported as effective: write out three situations where
  doing the right thing cost you something, plus one clear mistake with
  its reasoning. Memorize the situations, not the wording — "memorised
  answers are audibly memorised."

# Weighting (cross-source read)

- Highest: customer-conversation judgment (Stage 4), values/ethical
  reasoning under inconvenience (Stage 5D).
- High: agent/MCP fluency, eval-harness design, production Claude
  deployment judgment.
- Medium: coding ability (a gate, not the differentiator — "not
  LeetCode-hard").
- Explicitly de-emphasized relative to OpenAI's loop: RAG-architecture
  detail on its own, without an eval framing.

# Pass / fail signals

**Fail:**
- Generic "frontier AI" motivation with no safety-reasoning specificity.
- Excessive clarification-seeking on the take-home instead of stated
  assumptions.
- Opening a code editor or pitching/demoing during the customer
  simulation instead of running discovery.
- Values answers that are principles-only, rehearsed-sounding, or
  cost-free ("I always just do the right thing").
- No concrete "agent failed in an interesting way" story.

**Pass:**
- Safety/RSP-specific motivation tied to applied work, not slogans.
- Shipped, ambiguity-tolerant take-home with reasonable stated
  assumptions.
- Discovery-only customer call: layered questions, notes, no pitching.
- Eval-harness-first framing in system design (inter-expert agreement
  before picking a metric).
- Values stories with named stakes, real cost, and one genuine
  mind-change.

# How this differs from the generic FDE process in findings.md

- findings.md's existing Anthropic paragraph ("discovery-conversation
  w/ simulated buyer graded directly... explicit safety/RSP screen...
  system design round focused on Claude-specific eval design") is
  directionally correct but under-specified next to this — it's missing
  the values round entirely, which three independent sources rank as
  the single highest-failure stage, on par with or above the customer
  simulation.
- Unlike Cohere (no coding round at all — see
  [cohere-fde-gaijineer.md](cohere-fde-gaijineer.md)) and OpenAI
  (take-home-first, heavy solo production-code bar), Anthropic keeps a
  live coding gate (Stage 2) but explicitly caps its difficulty
  ("not LeetCode-hard") and weights it far below Stages 4 and 5D.
- The "evaluation harnesses, not RAG architecture" framing in system
  design sharpens S9-S11 in ../system-design/knowledge-map.md (eval framework, RAG
  Triad, Pairwise Eval) as the Anthropic-specific emphasis within that
  category, versus OpenAI's more RAG-internals-heavy technical deep
  dive (T9, S18).
