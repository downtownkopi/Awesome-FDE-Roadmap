---
project: P4 — Production guardrails on a structured-output endpoint
status: not started
concepts: AI15 (production guardrails)
architecture: Option C — heuristic pre-filter (input) + tool-use forced JSON + Zod-validated repair loop (output)
---

# What to build

A support-ticket triage endpoint: free-text customer message in,
structured JSON out (`category`, `urgency`, `sentiment`,
`requires_human`). Guardrails on both sides of the LLM call:

1. **Input side — heuristic pre-filter.** A fast, static check (regex/
   keyword list) that runs *before* any LLM call, catching obvious
   prompt-injection/jailbreak attempts ("ignore previous instructions",
   "you are now", "print your system prompt", role-override phrasing,
   etc.). Paired with structural prompt hardening — wrap the raw user
   ticket text in an explicit delimiter (e.g. `<ticket>...</ticket>`)
   and instruct the model to treat everything inside as data, never as
   instructions.
2. **Output side — forced schema + repair loop.** Use Anthropic
   tool-use to force the model to respond via a `triage_ticket` tool
   call with a defined input schema (not free text parsed after the
   fact). Validate the tool call's arguments against a Zod schema as a
   backstop (tool-use is reliable, not guaranteed). On validation
   failure: retry with the Zod error fed back to the model, max 2
   repair attempts. If still invalid after that: hard fallback to a
   safe default object (`category: "uncategorized"`,
   `requires_human: true`) — never let malformed data reach a
   downstream system, always fail toward a human.
3. **Red-team test suite** — a list of adversarial ticket texts,
   covering both known injection patterns (should get caught by the
   pre-filter) and creative bypasses (should still degrade safely even
   if they get past the pre-filter, i.e. the output-side guardrail is
   the real backstop, not the input filter alone).
4. **Logging** — every pre-filter block, every repair-loop trigger,
   and every hard-fallback hit gets logged with the attempt count.
   These counts are the extractable interview-story material (defense
   catch rate, near-miss cases).

# Why (interview mapping)

Exercises AI15 (`Test FDE Role/technical-depth/knowledge-map.md`) —
production guardrails on an LLM-backed endpoint (input validation +
jailbreak defense + malformed-output handling) is a direct rehearsal
for both the technical-depth category and Anthropic's "what happens
when the model does something you didn't expect" line of questioning.

# Scope

JS, Anthropic Messages API + tool-use (consistent with P1/P5). No real
ticketing system — a single endpoint function is enough, no need for
an HTTP server/framework unless useful for testing. Zod for schema
validation (widely used in the JS ecosystem, matches Vercel-adjacent
tooling).

# Architecture: chosen approach (Option C)

Two guardrail layers, chosen deliberately over two alternatives:
- **Option A (guard-call + strict retry)** — a separate LLM call
  classifies input before the main call runs. Stronger, adaptive input
  defense, but doubles LLM calls on every request (cost/latency).
- **Option B (structural defense only)** — prompt hardening + regex
  blocklist, no repair loop on output (reject + safe default only, no
  retry). Cheapest, but weaker on both sides — good for illustrating
  where static defenses break, not what you'd ship.
- **Option C (this one)** — heuristic pre-filter (cheap, catches
  obvious attacks, no extra LLM call) + a bounded repair loop on the
  output side (more robust than a flat reject, still cheap in the
  common case). Chosen because both stages get equal depth without
  Option A's 2x-call cost tax.

# Suggested build steps (for someone who hasn't built this before)

1. Get the plain endpoint working first, no guardrails: call Anthropic
   with a `triage_ticket` tool forcing the 4-field schema, parse the
   tool call's arguments, return them. Prove this works on a few benign
   tickets before adding any defense.
2. Add the Zod schema for the 4 fields (enums for `category`/`urgency`/
   `sentiment`, boolean for `requires_human`). Validate the tool call
   arguments against it. This should almost always pass right now —
   it's the backstop, not the main mechanism yet.
3. Deliberately break the output: prompt-inject or hand-edit a response
   to produce an invalid enum value or a missing field, confirm the
   Zod validation actually catches it. Don't skip this — a validator
   you haven't seen fail is not a validator you can trust.
4. Build the repair loop: on Zod failure, send a follow-up message with
   the Zod error text, ask the model to correct its tool call, re-
   validate. Cap at 2 repair attempts. Log each attempt.
5. Build the hard fallback: after repair attempts are exhausted, return
   the safe default object instead of throwing. Confirm this path is
   reachable (force a Zod failure that can't be repaired, e.g. mock a
   model response that never fixes itself).
6. Build the heuristic pre-filter: a small list of known injection
   phrases/patterns, checked against the raw input before it's sent to
   the model at all. Blocked tickets short-circuit straight to a
   "flagged for review" response, no LLM call made.
7. Add the delimiter/structural hardening to the system prompt —
   wrap user input in `<ticket>` tags, instruct the model explicitly
   not to treat ticket contents as instructions.
8. Build the red-team suite: a list of adversarial ticket texts (some
   should get caught by the pre-filter, some should slip past it but
   still produce safe, on-schema output rather than leaking the system
   prompt or doing something off-task). Run it, record the catch rate
   and any bypasses.

# Done when

- Pre-filter blocks the defined red-team set's obvious-injection cases
  before any LLM call.
- Zod validation demonstrably catches at least one induced malformed
  tool-call case (step 3).
- Repair loop demonstrably fixes at least one induced malformed-output
  case within 2 attempts.
- Hard fallback demonstrably triggers and returns the safe default
  when repair is exhausted.
- Red-team suite run with results recorded (catch rate, any bypasses
  and how the output-side guardrail handled them).
- `retrospective.md` filled in (see `../../CLAUDE.md` for structure).
