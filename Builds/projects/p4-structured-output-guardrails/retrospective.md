# Retrospective — P4 Production guardrails on a structured-output endpoint

**Date started:** 2026-09-09
**Date completed:** 2026-09-09

## What Was Built
> Support-ticket triage endpoint (Anthropic tool-use, forced `triage_ticket`
> schema). Built in two parts: `attempt/endpoint.js` — hand-built and
> debugged solo through 5 iterative bug passes (retry/repair loop
> mechanics). `reference/endpoint.js` + `reference/redteam.js` — full
> Option C architecture (heuristic input pre-filter + tool-use forced JSON
> + Zod-validated bounded repair loop + hard fallback), written by the
> assistant due to a time crunch, then read and understood in full.

## What Broke
> **In `attempt/endpoint.js` (self-debugged):** 5 sequential bugs
> surfaced one at a time while building the retry loop: (1) assistant's
> `tool_use` turn never recorded in `messages`, so retries asked the
> model to fix a response it never saw; (2) wrong value pushed as that
> turn's content (whole API response object, then later a stale
> reference to the first response); (3) retry loop called the model
> again but never re-ran validation, so `MAX_RETRIES` was unreachable
> dead config; (4) re-validation checked the *original* stale
> `toolUseBlocks` instead of the newest response's; (5) off-by-one on
> the retry cap (`<=` vs `<`). Each fix revealed the next layer of the
> same root issue: state (messages, tool-use blocks) wasn't being
> correctly threaded through each loop iteration.
>
> **In `reference/endpoint.js` (assistant's own bug, caught during
> smoke-test):** the "run directly vs. imported" guard
> (`import.meta.url === \`file://${process.argv[1]}\``) failed silently
> — no error, no output, `main()` just never ran. Cause: `process.argv[1]`
> was a relative, non-URL-encoded path, and the project directory
> contains a space (`Builds`) that `import.meta.url` encodes as
> `%20`. The two strings could never match.

## What Changed As A Result
> `attempt/endpoint.js`: retry loop now correctly persists the
> assistant's turn every iteration and re-validates the model's newest
> response, not the original. `reference/endpoint.js`: guard fixed with
> `fileURLToPath(import.meta.url)` compared against `process.argv[1]`
> directly — discovered mid-review that `resolve(process.argv[1])` was
> redundant, since Node always resolves `argv[1]` to an absolute path
> already; kept the fix minimal once verified.

## Extractable Story? (Y/N)
> Y — two candidates: (1) "debugged a tool-use repair loop through 5
> successive bugs, each fix exposing the next layer of the same root
> cause (state not threaded through the loop) — a concrete example of
> tracing execution step-by-step instead of guessing at fixes." (2) the
> assistant's own guard bug: code with zero runtime errors that silently
> does nothing, caused by an unencoded space in a file path — good
> "invisible failure, only caught by actually running it" example, ties
> to AI15 (why guardrail code specifically needs to be run, not just
> reviewed).

## Memory Priority
High — the core mechanic (assistant's `tool_use` turn must be recorded
in message history before a follow-up/correction turn) is fundamental
to any multi-turn tool-use loop and likely to come up directly. The
layered-guardrail structure (pre-filter -> forced schema -> repair ->
hard fallback) is the AI15 answer shape.

## Follow-up
Spaced blind recall (~2026-09-15, batch with P1/P5): rebuild the
retry/repair loop from memory — specifically the "push assistant turn,
then validate newest response" ordering — and recall the 4-layer
guardrail structure without looking at `reference/endpoint.js`.
