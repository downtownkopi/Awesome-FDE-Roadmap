# Project Tracker — Hands-On Builds

## Overall Progress
- Projects started: 2
- Projects completed: 2
- Extractable interview stories logged: 3

---
# Project Log

## P1 — MCP server for a legacy system
**Date started:** 2026-09-08
**Date completed:** 2026-09-08
**Concepts exercised:** AI18 (tool schema design), AI20 (MCP fluency)

### What Was Built
> MCP server (stdio, CSV-backed) with `get_customer`/`search_customers`
> tools, input + output schemas. Hand-rolled agent (`Client` + raw
> Anthropic Messages API, not Agent SDK's MCP integration) driving a
> manual tool-calling loop. Full detail:
> `projects/p1-mcp-legacy-server/NOTES.md` and `retrospective.md`.

### What Broke
> Nothing at runtime. Server initially had no `outputSchema` — an
> unschemaed JSON blob was informally called "schema-matching" when
> only inputs were enforced. Caught during manual Inspector testing,
> fixed by adding `outputSchema`/`structuredContent` to both tools.

### What Changed As A Result
> Added output schemas. Agent built to forward MCP's guaranteed
> `content` field to Claude rather than the optional
> `structuredContent` field, for generality across MCP servers beyond
> this one — full reasoning in `NOTES.md`.

### Extractable Story? (Y/N)
Y — two candidates: (1) catching and fixing the output-schema gap,
(2) content-vs-structuredContent as a concrete "MCP vs hand-rolled
function calling" answer (AI20). Not yet transcribed into
`../Test FDE Role/behavioral/star-stories.md`.

### Memory Priority
Medium

### Follow-up
Spaced blind recall scheduled ~2026-09-15 (batched with P5's) — rebuild
tool schema + agent loop from memory, no reference open.

---

## P5 — Rate-limit/retry-hardened API wrapper
**Date started:** 2026-09-08
**Date completed:** 2026-09-08
**Concepts exercised:** AI14 (API rate limiting & retry patterns)

### What Was Built
> `callWithRetry(apiCallFn, options)` (JS): exponential backoff +
> jitter, retries only on 429/5xx, gives up after `maxRetries`. Mock
> 429-flood harness + 4-case test suite. Full detail in
> `projects/p5-rate-limit-retry-wrapper/retrospective.md`.

### What Broke
> Nothing at the logic level. Process issue: assistant wrote the full
> solution first instead of guiding a build — caught and corrected
> mid-session into reference-study-then-blind-reimplement. Two blind
> passes by the user both nailed the retry/backoff logic independently,
> but both repeated the same two style gaps (ESM `export` instead of
> `module.exports`, `onAttemptFn` instead of the spec'd `onAttempt`) —
> logic recall solid, naming/module-system recall weaker.

### What Changed As A Result
> Fixed the two style points post-pass-2, re-verified 4/4 passing.
> Scheduled a spaced blind recall (~2026-09-15) instead of an immediate
> third pass, to test retention rather than short-term memorization.

### Extractable Story? (Y/N)
Y — "asked assistant for a hands-on build, it jumped to the finished
answer; caught it, restructured into study-then-blind-reimplement."
Self-correction/collaboration story. Not logged to star-stories.md yet
(AI21 is for agent-failure stories specifically; this doesn't fit that
slot — flag for behavioral review if a general "caught a process
mistake" prompt comes up).

### Memory Priority
Medium

---

<!--
## P# — Project name
**Date started:** YYYY-MM-DD
**Date completed:** YYYY-MM-DD (or "in progress")
**Concepts exercised:** (IDs from Test FDE Role/technical-depth/knowledge-map.md)

### What Was Built
> ...

### What Broke
> ...

### What Changed As A Result
> ...

### Extractable Story? (Y/N)
If yes: one-line summary + logged to
../Test FDE Role/behavioral/star-stories.md (B6) and/or
../Test FDE Role/technical-depth/knowledge-tracker.md (AI21)

### Memory Priority
Critical / High / Medium / Low
-->

---
# Extractable Stories Index
- (none yet)
