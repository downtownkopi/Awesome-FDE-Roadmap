# NOTES — P4 Production guardrails on a structured-output endpoint

## What this is
A support-ticket triage endpoint. Free text in, structured JSON out
(`category`, `urgency`, `sentiment`, `requires_human`), guarded on both
sides of the LLM call against (a) prompt-injection/jailbreak attempts
in the input, and (b) malformed/off-schema output.

## Architecture: why Option C over the alternatives
Three options were on the table:
- **A — guard-call + strict retry:** a separate LLM call classifies
  input as an attack before the main call runs. Most adaptive input
  defense, but doubles the LLM calls on every single request.
- **B — structural defense only:** prompt hardening + static regex
  blocklist, no repair on output (reject + safe default only). Cheapest
  (1 call), but weakest — no attempt to recover from a malformed
  response, just gives up.
- **C — hybrid, chosen:** static heuristic pre-filter (cheap, catches
  the obvious attacks, zero extra LLM calls) + tool-use forced JSON +
  a bounded Zod-validated repair loop (feed the validation error back
  to the model, retry) + hard fallback if repair is exhausted.

Chosen because the goal was equal depth on both the input and output
side without Option A's 2x-call cost tax. Tradeoff accepted: the input
side is intentionally *not* adaptive — a creative enough phrasing can
slip the regex list. That's a known, accepted gap, not an oversight —
see "Where this breaks" below.

## Mechanism: forcing structured output via tool-use
No MCP server here — a common conflation early in this build. MCP is a
protocol for a *separate* server to expose tools to any compatible
client. Tool-use is a feature of the Anthropic Messages API itself: you
pass a `tools` array (`name`, `description`, `input_schema`) in the
request, and the model can respond with a `tool_use` block containing
schema-shaped arguments instead of free text. This project never
executes the "tool" — `triage_ticket` is a trick to get JSON out of the
model, not a real callable action.

## The repair loop — where the real debugging happened
5 sequential bugs surfaced while building this in `attempt/endpoint.js`,
each one a variant of the same root cause: **state (the message
history, the tool-use blocks being validated) wasn't correctly threaded
through each loop iteration.**

The pattern that has to hold, every iteration:
1. Call the model.
2. Push the model's own `tool_use` response into `messages` as an
   `assistant` turn — *before* anything else. If this is skipped, a
   correction message on the next turn is asking the model to fix a
   response it has no record of giving.
3. Validate the *newest* response's tool-use block, not a stale
   reference to an earlier one.
4. On failure: push a `user` turn with the validation error, increment
   the attempt counter, loop back to step 1.
5. On success, or attempts exhausted: stop.

Concretely, the bugs (in order found): assistant turn never pushed at
all -> wrong value pushed (whole API response object, not
`response.content`) -> stale reference to the *first* response reused
on later iterations -> loop lost the validation step entirely
(retried, but never re-checked) -> off-by-one on the retry cap. Each
fix was necessary but not sufficient — the loop only became correct
once all 5 were addressed together.

## Where this breaks (the honest answer for "what would you change")
- **Input side is static.** The regex pre-filter list is a known,
  fixed set of phrases. A red-team case worded to avoid all of them
  (tested in `reference/redteam.js`) sails through — the pre-filter
  doesn't catch it. This is intentional (Option C's tradeoff), but the
  output-side guardrail (forced schema + repair + hard fallback) is
  the layer that has to hold in that case, and did in testing — the
  model refused to comply and returned a safe, on-schema classification
  even without pre-filter help.
- **No rate limiting on repair attempts across many tickets.** Each
  ticket independently gets up to `MAX_REPAIR_ATTEMPTS` extra calls; at
  volume, a flood of adversarial tickets designed to always fail
  validation could 3x your API cost. Not handled here — would compose
  naturally with P5's retry/backoff wrapper if this became a real
  service.
- **Hard fallback always sets `requires_human: true`.** Correct default
  (fail toward a human, never silently misclassify), but it means a
  sustained attack or a sustained model quirk could quietly dump a lot
  of tickets on a human queue with no distinct signal for "this was a
  guardrail failure" vs. "this was a genuinely ambiguous ticket" beyond
  the `status` field in the log. A real system would want that
  distinction surfaced somewhere a human triager can see it.

## Process note
Time ran short partway through the build. `attempt/endpoint.js` (the
retry/repair loop) was self-built and self-debugged through the 5 bugs
above. The remaining scope (pre-filter, hard fallback, red-team suite)
was written as a reference solution and then read/studied rather than
built from scratch — worth being precise about that split if this comes
up: the debugging story is genuinely first-hand, the guardrail-layering
architecture was studied, not independently derived under time
pressure.
