---
title: "Brief Bank — Take-Home Project Practice"
sources: "interview-stories/openai-fde-gaijineer.md, interview-stories/anthropic-fde-multisource.md"
status: living document — add a brief whenever the user wants a fresh one
---

# OpenAI-style briefs (~5hr, + recorded video walkthrough)

Per `../interview-stories/openai-fde-gaijineer.md`: build with OpenAI's
APIs, graded on production-readiness not demo polish. Video should
explain tradeoffs, not narrate code line-by-line.

- TH1. **Support-ticket triage agent** — given a folder of messy
  support tickets (mixed formats), build a system that classifies
  urgency, extracts the customer's actual ask, and drafts a response
  grounded in a small knowledge base. Must handle malformed input
  gracefully.
- TH2. **Document Q&A over a proprietary corpus** — build a RAG system
  over a provided set of PDFs (client policy documents). Must cite
  sources, handle "I don't know" gracefully, and degrade sanely under
  rate limits.
- TH3. **Multi-step data-extraction pipeline** — extract structured
  data (e.g. line items, totals) from unstructured documents (invoices/
  receipts) with a confidence score per field, flagging low-confidence
  extractions for human review instead of silently guessing.

# Anthropic-style briefs (3-4hr build)

Per `../interview-stories/anthropic-fde-multisource.md`: build a
Claude-powered app from a fictional customer brief, judged on shipped
behavior, API hygiene, and independent handling of ambiguity. Fail
signal: excessive clarification-seeking instead of stated assumptions.

- TH4. **Customer-facing research assistant** — a fictional enterprise
  customer wants an internal tool that answers employee questions
  using Claude + a small set of internal documents (provided,
  intentionally underspecified — infer reasonable scope, state
  assumptions, ship).
- TH5. **MCP-backed workflow agent** — build a small agent that uses
  an MCP server (real or stubbed) to complete a multi-step task (e.g.
  "look up a customer record, then draft a follow-up email"). Tests
  AI18-AI20 (`../technical-depth/knowledge-map.md`) hands-on.
- TH6. **Guardrailed structured-output service** — an endpoint that
  takes free-text input and must always return schema-valid JSON, even
  under adversarial/malformed input — tests AI15 (production
  guardrails) hands-on.

# Grading Rubric (per attempt)

Score each 1-10, then an overall score:
1. **Error handling** — does it fail gracefully on bad input/API
   errors, or crash/hang?
2. **Logging** — can you tell what happened after the fact, or is it a
   black box?
3. **Graceful degradation** — under a rate limit, timeout, or missing
   data, does it degrade sanely (partial answer, clear error) or just
   break?
4. **Ambiguity handling** — did the builder state reasonable
   assumptions and ship, or get stuck asking for clarification (or
   worse, guess silently with no stated assumption)?
5. **Tradeoffs explained** — in the walkthrough, are design choices
   justified (why this chunking/retrieval/model choice), not just
   listed?

Fail pattern common to both companies: treating this like a weekend
side-project/prototype instead of "what would I actually ship to a
customer."
