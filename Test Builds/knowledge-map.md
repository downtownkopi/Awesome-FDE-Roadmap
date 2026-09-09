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

- P6. **Palantir Build Challenge (Foundry/AIP workflow)** — build a
  functional workflow on Palantir's Foundry/AIP platform, responding
  to either a provided prompt or a self-chosen "adventure." Deliverable:
  a video demo, under 4 minutes, unlisted-YouTube-link format. Palantir
  frames it explicitly as "not an analytics exercise" — they want
  software-building judgment, not a dashboard. Sourced from Palantir's
  own public program (`palantir.events/buildingchallenge`,
  `build.palantir.com`) — a free developer Foundry instance is
  available via signup. This is the one project on this list that's a
  real, official artifact — usable as genuine practice or, if the
  timing lines up, an actual submission.
- P7. **Rate limiter (server-side)** — implement request-limiting
  logic (token bucket or sliding-window) that *you* enforce on
  incoming requests, with a test harness proving it rejects/queues
  correctly under burst load. Distinct from P5: P5 handles *being*
  rate-limited (client-side backoff); this is *doing* the limiting
  (server-side). Exercises AI14 from the other side.
- P8. **Retry queue** — an async, queued retry system (not P5's inline
  synchronous retry): failed jobs go onto a queue, a worker pulls and
  retries with backoff, and jobs that exhaust retries land on a
  dead-letter queue instead of silently vanishing. Exercises AI14 in a
  different shape — durability across process restarts, not just
  in-request resilience.
- P9. **Tool-call dispatcher with validation** — a generic
  name→handler mapping: given a tool-call request (name + args),
  validate args against that tool's schema, dispatch to the matching
  handler, return a structured success/error result. Shares DNA with
  P1's tool schema design and P4's Zod validation, but standalone —
  the dispatcher pattern itself (not any one server or endpoint)
  matters here. Exercises AI18.
- P10. **Document chunker for RAG** — implement 2-3 chunking
  strategies (fixed-size, recursive, semantic) over a real document
  set, with a way to inspect/compare chunk boundaries. Exercises AI2.
  Direct prerequisite for P2 — gives the eval harness real chunks
  (from your own chunker, not a toy example) to actually evaluate.
- P11. **General eval runner** — generalizes P2's judge machinery
  beyond RAG-specific metrics: given any two model outputs (not just
  RAG responses) and a rubric, run pairwise/LLM-as-judge comparison
  and produce a scored report. Exercises AI9-AI11 at a broader scope
  than P2's RAG Triad. Natural follow-on once P2 exists — reuses most
  of its judge/scoring code, generalized.
- P12. **Job scheduler** — cron-like or delayed-task scheduler:
  schedule a job for a future time or recurring interval, priority
  ordering, and a way to inspect what's queued/overdue. General
  production-systems pattern, not AI-specific — no direct AI-series
  concept ID, but a common "build me a small backend service" FDE
  technical-round shape.
- P13. **Streaming event processor** — scope intentionally left open,
  decide the framing when this gets picked up: (a) LLM token streaming
  (parse SSE chunks from a streaming API response, reassemble tokens,
  support mid-stream cancel/timeout, backpressure to a consumer —
  exercises AI16, directly AI/FDE-relevant), or (b) generic
  event-stream pipeline (Kafka/queue-style: consume, transform, route
  discrete events, handle out-of-order/duplicate events — more general
  systems-design, less AI-specific). Could also do both as two small
  passes instead of picking one.

- P14. **Embedding + retrieval comparison harness** — dense (vector)
  vs. sparse (BM25) vs. hybrid-fusion retrieval over the same corpus,
  compare recall/precision. Exercises AI1, AI3, AI5 — none of which
  any project so far actually builds (P2/P10/P11 touch retrieval, but
  none compares retrieval *methods* head to head).
- P15. **Reranker stage** — add a cross-encoder reranking pass on top
  of P14's (or P10's) retrieval, measure the precision lift. Exercises
  AI4.
- P16. **Golden dataset builder** — a small tool for constructing and
  versioning labeled eval sets: import raw examples, a labeling
  workflow, track label changes over time. Exercises AI13. Feeds P2
  and P11 — both need a real golden dataset, not a toy one.
- P17. **Latency/cost benchmarking harness** — run the same task
  across multiple model sizes/providers, measure and plot the
  latency/cost/quality tradeoff curve. Exercises AI17.
- P18. **Data-quality circuit breaker** — a pipeline stage that
  detects broken/anomalous upstream data (schema drift, null spike,
  volume anomaly) and halts/alerts *before* it reaches a downstream
  consumer, instead of silently propagating bad data. Exercises T5 —
  named directly in the curriculum ("alert before the CEO sees a
  broken dashboard"), not yet built anywhere.
- P19. **Distributed data processing + skew debugging** — partition a
  large dataset with Spark/Ray/Dask, deliberately trigger a data-skew
  or OOM scenario, then diagnose and fix it. Exercises T4. More
  systems-heavy than AI-specific, but named directly in the technical-
  depth curriculum and untouched so far.
- P20. **Bounded worker pool with backpressure** — concurrent task
  processing: fixed-size worker pool, backpressure when the queue
  fills, graceful drain on shutdown. Findings.md notes multithreading
  as a technical-round topic at some companies; ties naturally to P8
  (retry queue) and P12 (job scheduler) if built after those.
- P21. **Multi-tenant deployment scaffold** — integration capstone:
  serve multiple customers/configs from one deployment with per-tenant
  isolation (rate limits, config, data scoping). Directly mirrors
  Anthropic's system-design round emphasis ("multi-tenant Claude
  deployment... graded on eval-harness design, not RAG architecture" —
  see `findings.md`'s Anthropic breakdown). Natural combination of P7
  (rate limiter) + P11 (eval runner) — best done after both exist.
- P22. **Vector DB with metadata filtering** — retrieval scoped by
  metadata (date range, customer ID, permission level), not just
  semantic similarity. Realistic for the security-sensitive,
  multi-tenant RAG deployments Cohere/Anthropic's loops emphasize.
  Extends P2/P10/P14.

## P4 extension — hardened ticket-triage assistant

Not a new numbered project — a harder second pass at P4 (already
built), adding the realistic messiness P4's clean version didn't have.
Sourced from a third-party practice spec (Vibe Engines) explicitly
designed to simulate an OpenAI/Anthropic-style FDE take-home — **not**
a leaked real brief, but detailed enough to be a strong stand-in:
logistics company, ~400 emails/day, 6 categories, a shipments API that
fails intermittently (must handle gracefully, not just call it),
~300 labeled training emails with inconsistent/noisy labels, "priority"
left deliberately undefined, ~5hr time budget, explicit list of
what's *not* in scope. Good candidate for P4's spaced-recall pass
(~2026-09-15) instead of a from-scratch rebuild — same core guardrail
skills, harder inputs.

## Self-check rubric (sourced, not company-specific)

Distyl AI's take-home write-up (via research, not a target company —
flagged only because the rubric is unusually specific and reusable)
names 3 anti-patterns worth checking every build against, especially
relevant since these projects are built collaboratively with AI
assistance:
- **"Autopilot"** — shipping AI-generated output you can't defend the
  structural choices of.
- **"Default"** — accepting the model's first framing of the problem
  instead of scoping it yourself first.
- **"Demo"** — building the impressive-looking thing instead of the
  working, error-handled thing.

Consistent with this folder's existing collaboration rules
(`../CLAUDE.md`) — external validation that "must be able to defend it
live" is the right bar, not an idiosyncratic one.

# Suggested order

Done: P5 → P1 → P4. Core sequence, roughly cheapest/fastest first with
dependencies respected: P7 → P8 → P9 → P3 → P10 → P2 → P11 → P12 →
P13 → P6.

P14-P22 are a second-tier backlog, not part of the core sequence —
pull from them opportunistically once the core list is moving, or
whenever a specific gap (e.g. "I want a reranking story") becomes
relevant. Rough internal ordering if picked up as a block: P16 (golden
dataset) → P14 (retrieval comparison) → P15 (reranker) → P22 (metadata
filtering) [all four build on each other and on P2/P10] → P20 (worker
pool, after P8/P12 exist) → P21 (multi-tenant, after P7/P11 exist) →
P18, P17, P19 (standalone, any order).

P6 (Palantir Build Challenge) deliberately last in the core sequence —
it needs external setup (Foundry dev-instance signup) and is the most
"real"/highest-stakes artifact on the list, worth doing once the
others have built up momentum. The P4 extension (hardened
ticket-triage) slots in whenever P4's spaced-recall pass happens, not
tied to this ordering.

# Dependencies

- P1 (MCP server) → useful before P3 (sub-agent decomposition) — a
  sub-agent system is easier to reason about once you've built the
  tool-calling boundary once already.
- P1 or P3 → before P2 (RAG eval harness) is maximally useful — you
  want a real system of your own to evaluate, not just a toy example.
- P10 (document chunker) → before P2 (RAG eval harness) — gives the
  eval harness real chunks from your own chunker to evaluate, not a
  toy example.
- P2 (RAG eval harness) → before P11 (general eval runner) — P11
  generalizes P2's judge/scoring machinery, reuses most of its code.
- P1 or P4 (tool schema / Zod validation) → useful before P9 (tool-call
  dispatcher) — same validation instincts, applied to a standalone
  dispatch pattern instead of one specific server/endpoint.
- P16 (golden dataset builder) → before P2/P11 get maximally useful —
  both need a real, versioned golden dataset rather than a toy one.
- P10 or P2 (chunking / retrieval) → before P14 (retrieval comparison)
  — reuses the chunked corpus instead of building one from scratch.
- P14 (retrieval comparison) → before P15 (reranker) — reranking is a
  second-stage pass on top of retrieval results you already have.
- P2, P10, or P14 → before P22 (metadata-filtered vector DB) — same
  reasoning, builds on existing retrieval infra.
- P8 and P12 (retry queue, job scheduler) → useful before P20 (worker
  pool) — same concurrency/queueing instincts, applied to a standalone
  pool pattern.
- P7 and P11 (rate limiter, general eval runner) → before P21
  (multi-tenant scaffold) — P21 composes both into one deployment.
