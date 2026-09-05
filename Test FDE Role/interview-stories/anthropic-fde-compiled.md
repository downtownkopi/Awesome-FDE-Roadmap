---
title: "Anthropic Applied AI Engineer / FDE Interview Process — compiled"
source: multiple (see Sources below) — synthesized via web search, no single
  page fetched in full
captured: 2026-09-05
company: Anthropic
role: Applied AI Engineer (Anthropic's Forward Deployed Engineer equivalent)
---

# Story summary

**Note on provenance:** the user asked to crawl r/OfferEngineering for
OpenAI-and-related-company interview accounts. Reddit is blocked at the
network-policy level in this environment (direct `curl` to reddit.com
returns a 403 from the egress proxy — an org policy denial, not a
tool limitation), so no subreddit content could be retrieved. Most
candidate-account sites relevant here (gaijineer.co, vibeengines.com,
getperspective.ai, tryexponent.com) are also blocked for direct page
fetch in this environment. This file is a synthesis of *web-search-engine
summaries* of those pages, not a verbatim single-candidate account like
`openai-fde-gaijineer.md`. Treat specifics here as lower-confidence than
that file until corroborated by a directly-shared account/URL.

Anthropic's FDE-equivalent role is called "Applied AI Engineer" (also
seen under Custom Agents / Federal Civilian / Life Sciences field-deployment
variants). Embeds with strategic customers to ship Claude-based production
applications — described as Anthropic's version of Palantir's FDE: a hybrid
of solutions engineering, ML engineering, and embedded product management.

# Stages (in order)

## 1. Recruiter screen
- Standard fit/motivation screen.

## 2. Technical phone screen
- Coding-oriented screen.

## 3. Take-home or live coding round
- Technical rounds give live access to Claude plus a Model Context
  Protocol (MCP) scenario — MCP is Anthropic's standard for connecting
  agents to external tools. Reasoning toward a reliable *production*
  workflow is weighted over producing a clean/optimal algorithm.

## 4. Customer-conversation simulation — 60-90 min
- Reported as the **highest-signal, most underestimated round** in the
  loop: candidates prepare for it like a technical interview and fail
  because it isn't one.
- Said to filter out roughly 60% of candidates who already passed the
  coding stages — i.e. technical competence alone does not carry you
  through this round.
- Tests discovery/translation skills in a simulated buyer conversation
  (consistent with the "discovery-conversation w/ simulated buyer graded
  directly" line already in `findings.md`'s company-differences section).

## 5. Onsite system design round
- Claude-specific eval design focus (per existing findings.md note).

## Values round
- A company-values interview reported to **count as much as the
  technical stages** — not a token/formality round.
- Probes how the candidate behaves when the honest answer is
  inconvenient; rewards specific real situations with a genuine cost
  attached over well-phrased general principles. Sounds closely related
  to (and possibly the same round as, depending on source) the
  Cohere-style VP behavioral round already documented for that company.

# Timeline

Roughly 4-6 weeks from first contact to offer (slower than the ~3-week
OpenAI FDE loop already documented).

# Pass / fail signals (as reported)

**Fail:**
- Treating the customer-conversation simulation as a technical
  interview instead of a discovery/translation exercise.
- Well-phrased values statements with no specific, costly real example
  behind them.
- Clean-algorithm thinking in the MCP/live-Claude round instead of
  production-workflow reliability thinking.

**Pass:**
- Discovery-style behavior in the customer simulation (understand the
  buyer's problem before proposing a solution) — same shape as OpenAI's
  "customer questions before architecture" pattern.
- Concrete, costly values anecdotes.
- MCP scenario handled with an eye to production reliability, not just
  correctness.

# How this differs from the generic FDE process / other companies in findings.md

- Explicit **values round weighted equal to technical rounds** — no
  other documented company (OpenAI, Cohere) states this as bluntly;
  Cohere's VP round is closer in spirit but framed around
  customer-pain→product-change stories specifically, not general values.
- **Customer-conversation simulation with a ~60% post-coding filter
  rate** is the single most concrete "signature round" difficulty signal
  found for any company in this set — worth flagging under
  Customer-Facing Judgment as the hardest-to-pass category specifically
  at Anthropic, mirroring how the decomposition round is flagged hardest
  at Palantir.
- MCP-specific technical scenario is unique to Anthropic among the
  documented companies (OpenAI's technical depth centers on RAG/
  fine-tuning tradeoffs instead).

# Sources

- https://getperspective.ai/blog/anthropic-applied-ai-engineer-interview-process-frontier-lab-2026
- https://vibeengines.com/handbook/fde-interview-anthropic
- https://www.tryexponent.com/guides/anthropic-forward-deployed-engineer-interview
- https://www.chillinterview.com/learn/interview-guides/anthropic-forward-deployed-engineer-fde-interview-guide
- https://www.educative.io/courses/forward-deployed-engineer/interview-guide-anthropic-applied-ai-engineers
- General (non-FDE) Anthropic SWE loop, for contrast: CodeSignal screen →
  phone screen (LeetCode Easy in a Colab notebook, multi-step) → manager
  sell (30 min) → onsite (4-5 interviews: 2-3 coding, 1 design, 1
  behavioral) — via Blind threads, summarized through web search only
  (teamblind.com itself is blocked for direct fetch in this environment).
