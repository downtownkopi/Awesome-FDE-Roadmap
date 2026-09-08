# Retrospective — P1 MCP server for a legacy system

**Date started:** 2026-09-08
**Date completed:** 2026-09-08

## What Was Built
> MCP server (stdio, CSV-backed fake customer table) with 2 tools
> (`get_customer`, `search_customers`), both with input + output
> schemas. Hand-rolled agent (`Client` + raw Anthropic Messages API,
> not Agent SDK's built-in MCP integration) driving a manual
> ReAct-style tool-calling loop. Full detail + architecture rationale
> in `NOTES.md`.

## What Broke
> Nothing at runtime. Process gap: server initially shipped with no
> `outputSchema` — an unschemaed JSON text blob was informally called
> "matching the schema" when only the input side was actually
> enforced. Caught by direct question during manual Inspector testing,
> not an automated check. Fixed by adding `outputSchema` +
> `structuredContent` to both tools, traced into SDK source to confirm
> validation behavior (skipped when `isError: true`).

## What Changed As A Result
> Added `outputSchema`/`structuredContent` to both tools. Agent built
> to forward `content` (spec-guaranteed) rather than `structuredContent`
> (only present because this server defines an output schema) — a
> deliberate generality-over-convenience tradeoff, documented in
> `NOTES.md`.

## Extractable Story? (Y/N)
> Y — two candidates: (1) the output-schema gap itself ("said something
> was schema-validated when only half of it was — here's how I found
> and fixed the gap"), (2) the content-vs-structuredContent design
> reasoning as a concrete answer to "explain MCP vs hand-rolled function
> calling." Worth polishing a version of (1) for AI21/star-stories if a
> "caught your own mistake" prompt comes up — logged as a candidate,
> not yet transcribed into `star-stories.md`.

## Memory Priority
Medium — architecture reasoning (content vs structuredContent, why
Option B over A/C) is the part most likely to get asked about directly.

## Follow-up
Spaced blind recall scheduled ~2026-09-15 (same date as P5's, batch
them together): rebuild the tool schema design (input + output) and
the agent's tool-calling loop from memory, no looking at
`server.js`/`agent.js`. Check specifically whether the
content-vs-structuredContent reasoning and the loop shape (map
tools → call on tool_use → tool_result → loop) survive without the
reference open.
