---
title: "Cohere Stack — Curriculum Reference"
status: living document — refresh when Cohere ships a stack-level change
sources:
  - https://docs.cohere.com/
  - https://docs.cohere.com/v2/changelog
  - https://cohere.com/command
  - https://cohere.com/north
  - https://docs.cohere.com/docs/rag-complete-example
last-checked: 2026-09-06
note: >
  Lower priority than anthropic-openai-stack.md — per
  interview-stories/cohere-fde-gaijineer.md, Cohere's loop explicitly
  has no LeetCode/coding round and no API-trivia technical deep dive.
  This file exists for the Hiring Manager round (on-prem/scaling
  fluency) and the Architecture Presentation round (see
  ../architecture-presentation.md), not for a technical grilling.
---

# Why this file exists

`README.md`'s curriculum is GCP-centric; `anthropic-openai-stack.md`
covers OpenAI/Anthropic's first-party stacks. Cohere is a third target
company (`findings.md`) with its own stack — kept separate since its
interview weighting is different (system-design debugging + on-prem
deployment fluency, not API internals trivia).

# Core API

- **Chat endpoint** (`/chat`) — Cohere's core generation endpoint,
  V2 API. Supports tool use/function calling, RAG-grounded responses
  with inline citations.
- **Embed endpoint** (`/embed`) — text embeddings; `input_type` param
  (`search_query` vs `search_document`) matters — mismatching it
  degrades retrieval quality, a direct analog to AI1 (embedding
  selection) in `technical-depth/knowledge-map.md`.
- **Rerank endpoint** (`/rerank`) — takes a query + list of texts,
  returns relevance-scored ordering. `rerank-v3.5`/Rerank 3 support
  multi-aspect/semi-structured data (emails, invoices, JSON, tables,
  code) with field selection. Direct product-level implementation of
  AI4 (reranking) — worth knowing this exists as a managed option vs.
  hand-rolling a cross-encoder.
- **Classify endpoint** — managed text classification, relevant for
  quick client-data-triage tasks without a custom model.

## Command model family
- **Command A+** (`command-a-plus-05-2026`) — flagship MoE model,
  released May 2026, 23-language support, optimized for RAG-grounded
  enterprise responses.
- **North Mini Code** — Cohere's first agentic coding model (30B
  total / 3B active MoE), trained specifically for agentic coding
  tasks — relevant if a client scenario involves code-generation
  agents specifically.

## North (agent/workplace platform)
- North is Cohere's all-in-one enterprise AI platform: agents,
  intelligent search, task automation, with **full data isolation**
  per tenant — the enterprise/on-prem-friendly positioning matches
  Cohere's stated interview focus on security-sensitive deployments
  (see `interview-stories/cohere-fde-gaijineer.md`).
- Built on Command (generation) + Compass (search/analytics) + Embed +
  Rerank — i.e. North is the packaged version of the RAG Triad-style
  pipeline (`technical-depth/knowledge-map.md` AI1-AI5) an FDE would
  otherwise hand-assemble.

# What this stack does NOT need deep prep on

Per `interview-stories/cohere-fde-gaijineer.md`, the technical rounds
are architecture-diagram debugging and an architecture presentation,
not "explain the Rerank API's parameters." Know this stack exists and
what it's for; don't over-invest in API-trivia depth the way
`anthropic-openai-stack.md` is worth doing for OpenAI/Anthropic.

# Dependencies (must understand X before Y)

- AI1-AI5 (RAG internals, `technical-depth/knowledge-map.md`) → before
  North's packaged pipeline is a meaningful contrast (what it
  automates vs. what you'd hand-build).
