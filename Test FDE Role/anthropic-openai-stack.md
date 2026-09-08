---
title: "Anthropic / OpenAI Stack — Curriculum Reference"
status: living document — refresh when either company ships a stack-level change
sources:
  - https://www.morphllm.com/ai-agent-framework
  - https://www.promptfoo.dev/docs/providers/claude-agent-sdk/
  - https://developers.openai.com/api/docs/guides/agents
  - https://openai.github.io/openai-agents-python/
  - https://thenewstack.io/introduction-to-the-openai-agents-sdk-and-responses-api/
  - https://modelcontextprotocol.io/
last-checked: 2026-09-06
---

# Why this file exists

`AWESOME-FDE-RESOURCES.md`'s Master Curriculum leans GCP/Palantir (ADK, Vertex/Gemini
Enterprise, BigQuery, GKE) — solid FDE fundamentals, but not what
OpenAI or Anthropic FDE loops actually probe technically. Both
companies' interview stories (see `interview-stories/`) grill on their
own first-party API/agent stack instead. This file is that stack,
kept separate from AWESOME-FDE-RESOURCES.md so it doesn't collide with the public
awesome-list's curation scope.

# Anthropic Stack

## Claude API (Messages API)
- Core primitive: the Messages API — system prompt + turn-based
  messages + tools array. No separate "chat" vs. "completion" split
  like OpenAI historically had.
- **Extended thinking** — model-exposed reasoning tokens for complex
  tasks; tradeoff is latency/cost vs. reliability on multi-step
  reasoning.
- **Tool use (function calling)** — JSON-schema tool definitions;
  model returns structured `tool_use` blocks; you execute and return
  `tool_result` blocks. Same pattern underlies MCP (below).
- **Prompt caching** — cache stable prefix content (system prompt,
  long documents, few-shot examples) to cut cost/latency on repeated
  calls with a shared prefix. Directly relevant to AI17 (latency/cost
  tradeoffs) in `technical-depth/knowledge-map.md`.
- **Computer use** — model observes a screenshot, issues mouse/
  keyboard actions; relevant for legacy-system automation, a common
  FDE "no API exists" workaround.
- **Files API / code execution / web search** — first-party tools
  Anthropic now ships directly on the API, reducing how much
  infrastructure an FDE needs to hand-roll for common agent needs.

## Claude Agent SDK
- Anthropic's official agent-building library — the same harness that
  powers Claude Code itself. Renamed from "Claude Code SDK" (Sept
  2025) to signal it's a general agent framework, not just coding.
- Gives an agent OS-level access: read/write files, run shell
  commands, browse the web, edit code, call MCP servers.
- **Deepest MCP integration of any framework** — 200+ MCP servers
  (Playwright, Slack, GitHub, etc.) connect with a single config line.
  This is the concrete tooling behind AI18-AI20 (tool schema design,
  sub-agent decomposition, MCP fluency) in the AI-technical-depth map.
- **Managed Agents** — hosted execution so an FDE doesn't have to
  stand up and babysit the agent's runtime themselves; relevant to the
  "Day 2 operations" theme in `findings.md`/`business-judgment/knowledge-map.md` (BJ6)
  and `customer-facing-judgment/knowledge-map.md` (CJ7) — who runs this
  after the FDE leaves.
- **Subagents / Skills** — decompose one agent into specialized
  subagents with their own context, or attach reusable "skills"
  (packaged capabilities) without rebuilding the whole agent. Directly
  the AI19 (sub-agent decomposition) concept.

## Model Context Protocol (MCP)
- Open standard (not Anthropic-exclusive, but Anthropic-originated and
  most deeply integrated) for how a model-facing application exposes
  **tools**, **resources**, and **prompts** to a model, over a
  standardized client-server boundary.
- Why it matters for FDEs specifically: it's the "USB-C for AI"
  framing — instead of hand-rolling a bespoke integration per client
  system, you write (or reuse) one MCP server per system and any
  MCP-compatible agent can use it. This is the direct answer to
  AI20 in the AI-technical-depth map, and to Anthropic's stated ~40%
  "building" split (interview-stories/anthropic-fde-multisource.md).
- Distinguish from hand-rolled function calling: MCP standardizes
  *discovery* (what tools/resources exist) as well as invocation —
  function calling alone only standardizes invocation.

## Anthropic-flavored eval framing
- Per `interview-stories/anthropic-fde-multisource.md` (S20): system
  design rounds are graded on **eval-harness design**, not RAG
  architecture — negotiate inter-expert/inter-annotator agreement on a
  golden set *before* picking an architecture or a target metric.
- Values/safety framing (RSP — Responsible Scaling Policy) shows up as
  an explicit interview screen, not just a technical concern — see B6
  in `behavioral/knowledge-map.md`.

# OpenAI Stack

## Responses API
- Replaces the split between the older Chat Completions API and the
  Assistants API (Assistants API deprecated mid-2026) — one primitive
  that combines Chat Completions' simplicity with Assistants'
  tool-use/state model.
- Built-in tools shipped directly on the API: **web search** (cited,
  real-time answers), **file search** (retrieval over a document
  store with metadata filtering — i.e. a managed RAG primitive),
  **computer use** (screen-based automation, same category as Claude's
  computer use).
- Because file search is a managed retrieval primitive, an FDE must
  still be able to explain *why* you'd reach for it vs. a hand-rolled
  RAG pipeline (AI1-AI5 in the AI-technical-depth map) — file search
  trades control (custom chunking/reranking) for speed of deployment.

## OpenAI Agents SDK
- Successor to OpenAI's earlier experimental "Swarm" framework;
  production-ready, lightweight, few abstractions.
- Three core primitives: **Agents** (an LLM + instructions + tools),
  **Handoffs** (an agent delegates a sub-task to another agent — the
  OpenAI-side equivalent of AI19 sub-agent decomposition), and
  **Guardrails** (input/output validation on agent calls — the direct
  OpenAI-side equivalent of AI15 production guardrails).
- Works with the Responses API and Chat Completions API, and with any
  model that exposes a Chat-Completions-style endpoint — not
  OpenAI-model-exclusive, relevant if a client's environment mixes
  providers.

## OpenAI-flavored eval framing
- Per `interview-stories/openai-fde-gaijineer.md` (S18): the signature
  differentiator question is **"How do you know your AI system is
  actually working well?"** — automated metrics + human eval +
  feedback loops combined (AI8 in the AI-technical-depth map).
- Heavier emphasis than Anthropic on RAG-internals detail itself
  (embedding choice, chunking, retrieval, reranking — AI1-AI5) as part
  of the technical deep dive, not just the eval wrapped around it.

# Anthropic vs. OpenAI — quick contrast table

| Axis | Anthropic | OpenAI |
|---|---|---|
| Core API | Messages API | Responses API (Chat Completions + Assistants merged) |
| Agent framework | Claude Agent SDK | Agents SDK (ex-Swarm) |
| Tool standard | MCP (originated here, deepest integration) | Function calling + built-in tools (web/file search, computer use) |
| Sub-task delegation | Subagents / Skills | Handoffs |
| Managed RAG primitive | Files API + web search (lighter-weight) | File search (metadata-filtered retrieval) |
| Interview technical emphasis | Eval-harness design > RAG internals | RAG internals + eval combined, roughly equal weight |
| Distinctive non-technical screen | Values round (honesty under inconvenience) | Customer-first solution-design opener |

# Dependencies (must understand X before Y)

- AI18-AI19 (tool schema design, sub-agent decomposition) in
  `technical-depth/knowledge-map.md` → before MCP or Handoffs are
  meaningful — both are standardized versions of those two ideas.
- Messages API tool-use pattern (this file) → before MCP makes sense —
  MCP standardizes discovery on top of the same invocation pattern.
- Responses API's file search / Claude's Files API (managed RAG) →
  before AI1-AI5 (hand-rolled RAG internals) is a meaningful contrast
  — you need to know what the managed option trades away.
