---
title: "Knowledge Map — Category 1: Technical Depth"
sources: "README.md, findings.md, interview-stories/, ../anthropic-openai-stack.md"
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  Category 1 of ../scoreboard.md's 6. Two halves: generic coding/data
  fundamentals (T-series) and the AI-specific slice OpenAI/Anthropic
  interview loops actually grill on (AI-series, merged in from the
  former ai-technical-depth/ subfolder). Both roll into the same
  scoreboard.md Category 1 row — this file and its knowledge-tracker.md
  are the single place to check for Category 1, no second file exists.
---

# Generic Coding & Data Fundamentals

- T1. **Advanced SQL & query tuning** — Window Functions, Recursive CTEs, query optimization; reading an EXPLAIN plan to diagnose why a query scans far more data than needed.
- T2. **Data modeling for reality** — Star Schema vs. One Big Table (OBT); designing for write-performance vs. user-readability tradeoffs.
- T3. **Medallion Architecture** — Bronze (raw, immutable landing), Silver (filtered/joined/cleaned, "single source of truth"), Gold (business-ready aggregates powering UI/AI).
- T4. **Distributed computing** — Spark/Ray partitioning; debugging Data Skew and OOM (Out of Memory) errors on datasets exceeding local memory.
- T5. **Data quality & observability** — "circuit breakers" for data: alert before a broken upstream feed reaches a client-facing dashboard.
- T6. **The modern FDE tool stack** — Python/Go/SQL (languages), dbt/DuckDB/Spark (data), Terraform/Helm/GCP (cloud), Prometheus/Grafana/Loki (observability) — what each is for and when reached for.
- T7. **Local/offline inference runtimes** — Ollama, vLLM, llama.cpp, TensorRT-LLM for running quantized open-weight models on constrained hardware (CPU-only or single-GPU).
- T8. **Safe model-weight handling** — `safetensors` (not pickle — pickle is an RCE risk) + SHA-256 verification + signed provenance records (source, license, training-data attestation) for offline-delivered weights.
- T9. *(from interview-stories/openai-fde-gaijineer.md)* **Production LLM/RAG engineering craft** — embedding selection, chunking strategy, retrieval method choice, reranking, API rate limiting, retry patterns; prompt engineering treated as an engineering discipline, not just wording. OpenAI technical-screen/deep-dive bar: explain *why*, not just *what*, and reason about what happens under the hood, not "I just call the API."

# AI-Specific: RAG Internals

- AI1. **Embedding model selection** — dimensionality vs. cost vs.
  domain-fit tradeoffs; when a general-purpose embedding model
  underperforms on domain-specific (legal/medical/financial) text and
  what to do about it (fine-tune, hybrid search, domain adapter).
- AI2. **Chunking strategy** — fixed-size vs. semantic/recursive
  chunking; chunk-size/overlap tradeoffs; why bad chunking silently
  degrades retrieval quality (splits mid-thought, loses context).
- AI3. **Retrieval method choice** — dense (vector) vs. sparse (BM25)
  vs. hybrid; when pure semantic search fails on exact-match needs
  (part numbers, legal citations, proper nouns).
- AI4. **Reranking** — why a second-stage reranker (cross-encoder) on
  top-K retrieval results improves precision beyond the initial
  retrieval pass; cost/latency tradeoff of adding this stage.
- AI5. **Hybrid search fusion** — combining semantic + keyword scores
  (e.g. reciprocal rank fusion) to satisfy domain-specific nomenclature
  a pure-vector system misses.

# AI-Specific: Fine-Tuning vs. RAG vs. Prompt Engineering

- AI6. **Decision framework** — when each is the right tool: prompt
  engineering (fast, cheap, no new knowledge), RAG (needs current/
  proprietary knowledge, needs citations), fine-tuning (needs a
  behavior/format/style change that prompting can't reliably produce,
  or needs to bake in knowledge too large for context). Cost/latency/
  maintenance tradeoffs of each.
- AI7. **Prompt engineering as an engineering discipline** — *(T9)*
  version-controlled prompts, regression testing prompts against a
  golden set, structured output contracts, not "wording tweaks."

# AI-Specific: Evaluation Design

- AI8. **"How do you know it's working?" framework** — *(from
  interview-stories/openai-fde-gaijineer.md)* automated metrics +
  human evaluation + feedback loops combined; no single metric passes.
  The OpenAI signature differentiator question.
- AI9. **The RAG Triad (pointwise eval)** — Groundedness (response
  strictly follows retrieved context), Fulfillment (followed
  system-prompt instructions), Summarization & Coherence (linguistic
  quality/density).
- AI10. **Pairwise / LLM-as-judge evaluation** — a superior model
  compares Response A vs. B against a rubric, producing win rates +
  explanations; known failure modes (position bias, verbosity bias,
  self-preference bias) and mitigations (randomized order, rubric
  anchoring, multiple judge models).
- AI11. **Eval-harness-first system design** — *(from
  interview-stories/anthropic-fde-multisource.md)* before picking an
  architecture or a metric, negotiate the eval: measure inter-expert/
  inter-annotator agreement on the golden set first, then set a
  defensible target. Distinguishes senior answers from junior ones in
  system design rounds.
- AI12. **Faithfulness / hallucination scoring (RAGAS)** — measuring
  how much of an answer is derivable *only* from retrieved context;
  why this differs from plain accuracy.
- AI13. **Golden dataset construction** — how to build and maintain a
  labeled eval set for a customer domain when no ground truth exists
  yet (bootstrap from SME review, disagreement resolution, drift over
  time as the product/data changes).

# AI-Specific: Production LLM Engineering

- AI14. **API rate limiting & retry patterns** — *(T9)* exponential
  backoff with jitter, token-bucket vs. fixed-window limiting, handling
  429s gracefully, request batching to stay under quota.
- AI15. **Production guardrails** — input/output validation, PII
  redaction, jailbreak/prompt-injection defenses, structured-output
  schema enforcement, fallback behavior on guardrail trip.
- AI16. **Context-window management** — *(from
  interview-stories/anthropic-fde-multisource.md)* what to do when
  conversation/document context exceeds the window: truncation
  strategy, summarization-of-history, sliding window, retrieval-based
  context refresh.
- AI17. **Latency/cost tradeoffs in inference** — model-size selection
  per task, caching repeated prompts/completions, streaming vs.
  batch, the two-tier fast-deterministic + async-LLM pattern
  (system-design/knowledge-map.md S16) as one concrete instance of
  this tradeoff.

# AI-Specific: Agent / Tool-Calling Architecture

- AI18. **Tool schema design** — *(from
  interview-stories/anthropic-fde-multisource.md)* clear, unambiguous
  tool descriptions/parameters an LLM can reliably call; why vague
  schemas cause silent misuse.
- AI19. **Sub-agent decomposition** — when to split a single agent
  into a manager + specialized sub-agents (e.g. planner/coder/
  reviewer), and the coordination cost that introduces.
- AI20. **MCP (Model Context Protocol) fluency** — what an MCP server
  exposes to a model (tools, resources, prompts), why it standardizes
  the model-to-external-system boundary, and where it fits vs.
  hand-rolled function calling. See `../anthropic-openai-stack.md` for
  the full Claude Agent SDK / MCP reference.
- AI21. **Naming where agents fail** — concrete agent failure modes to
  be able to discuss from real experience: tool misuse, infinite
  loops, context loss across turns, over-confident wrong answers,
  cascading errors in multi-step plans. Anthropic's technical-
  conversation round explicitly wants one specific story here, not a
  generic list.

# Dependencies (must understand X before Y)

- AI1-AI5 (RAG internals) → before AI9-AI11 (eval design) — you can't
  design a meaningful eval for a pipeline you can't describe.
- AI6 (fine-tune/RAG/prompt-eng framework) → before AI7 (prompt-eng as
  discipline) makes sense as a *choice* rather than a default.
- AI18-AI19 (tool schema, sub-agent decomposition) → before AI20 (MCP)
  — MCP is the standardized version of the pattern those two describe.

---
# Importance Legend
All items Critical-to-High for role/interview readiness; scores here
roll up into `../scoreboard.md`'s Category 1 row.
