---
title: "Project List — Hands-On Builds"
sources: "Test FDE Role/technical-depth/knowledge-map.md, Test FDE Role/anthropic-openai-stack.md"
status: living document — add a project whenever a new skill needs hands-on grounding
---

# Projects

- P1. **MCP server for a legacy system** — build a small MCP server
  wrapping a fake/toy "legacy" data source (a CSV, a small SQLite DB)
  with tools an agent can call to query it. Exercises AI18 (tool
  schema design), AI20 (MCP fluency). This is the single most direct
  rehearsal for Anthropic's ~40%-building split.
- P2. **RAG eval harness** — given a small document set + a hand-built
  golden Q&A set, build an eval pipeline scoring groundedness,
  fulfillment, and an LLM-as-judge pairwise comparison between two
  retrieval configs (e.g. different chunk sizes). Exercises AI9-AI11
  (RAG Triad, pairwise eval, eval-harness-first design) — directly
  rehearses both OpenAI's S18 differentiator and Anthropic's S20
  system-design emphasis.
- P3. **Sub-agent decomposition** — build a small multi-agent system
  (planner + specialized sub-agent, e.g. planner + SQL-coder) using
  the Claude Agent SDK or OpenAI Agents SDK Handoffs. Exercises AI19
  (sub-agent decomposition), and is a direct source of an AI21
  "agent failed" story once something breaks.
- P4. **Production guardrails on a structured-output endpoint** — take
  a free-text-in, JSON-out endpoint and add input validation, a
  jailbreak/prompt-injection test suite, and graceful fallback on
  malformed output. Exercises AI15 (production guardrails).
- P5. **Rate-limit/retry-hardened API wrapper** — wrap any LLM API call
  with exponential backoff + jitter, and deliberately test it against
  a simulated 429 flood. Exercises AI14 (API rate limiting & retry
  patterns) — the most concrete, fastest-to-build option if starting
  from zero hands-on experience.

# Suggested order

P5 → P1 → P4 → P3 → P2 (roughly: cheapest/fastest first, building up
to the eval harness which benefits from having a real
retrieval/agent system already built to evaluate).

# Dependencies

- P1 (MCP server) → useful before P3 (sub-agent decomposition) — a
  sub-agent system is easier to reason about once you've built the
  tool-calling boundary once already.
- P1 or P3 → before P2 (RAG eval harness) is maximally useful — you
  want a real system of your own to evaluate, not just a toy example.
