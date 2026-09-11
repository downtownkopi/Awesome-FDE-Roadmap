---
project: P5 — Rate-limit/retry-hardened API wrapper
status: not started
concepts: AI14 (API rate limiting & retry patterns)
---

# What to build

Wrap an LLM API call (any provider — Anthropic, OpenAI, or a mock
endpoint) with:

1. **Exponential backoff + jitter** on retry. Base delay doubles each
   attempt, capped at a max delay. Jitter adds randomness so retries
   from many clients don't all land at once.
2. **Retry only on retryable errors** — HTTP 429 (rate limit) and 5xx.
   Do not retry on 4xx client errors (bad request, auth failure).
3. **Max retry limit** — fail loudly after N attempts, don't retry
   forever.
4. **A test that simulates a 429 flood** — a fake/mock API that
   returns 429 for the first K calls, then succeeds. Wrapper should
   retry through the flood and eventually succeed, respecting backoff
   timing.

# Why (interview mapping)

Exercises AI14 (`Test FDE Role/technical-depth/knowledge-map.md`) —
rate limiting & retry patterns are a common production-LLM-engineering
question. Real code here beats reciting the theory.

# Scope

Keep it small. One file (wrapper function/class) + one test file.
Language: pick whatever's fastest to iterate in (Python or JS — both
already used elsewhere in `Test Leet/`). No need for a real API key —
mock the HTTP call so the flood test is deterministic and free.

# Suggested build steps (for someone who hasn't built this before)

1. Write a plain function that calls the API once, no retry. Get that
   working first (even against a mock).
2. Add a try/except (or try/catch) around the call. On 429 or 5xx,
   sleep then retry. Hardcode 1 retry first — prove the mechanism
   works.
3. Turn the hardcoded retry into a loop: `for attempt in range(max_retries)`.
4. Add exponential backoff: `delay = base_delay * (2 ** attempt)`.
5. Add jitter: `delay = delay * random.uniform(0.5, 1.5)` (or
   `+ random.uniform(0, delay)` — either style, just don't retry with
   zero randomness).
6. Write the mock: a fake function/class with a counter — returns 429
   for the first K calls, then a real-looking success response.
7. Point the wrapper at the mock, run it, watch it retry through the
   flood and succeed. Print/log each attempt + delay to see the
   backoff curve.
8. Break it on purpose: make the mock return a 4xx instead — confirm
   wrapper does NOT retry, fails immediately. This is the guardrail
   that turns "I retried" into "I retried correctly."

# Done when

- Wrapper retries on 429/5xx with growing, jittered delay.
- Wrapper does not retry on 4xx.
- Wrapper gives up after max attempts and raises/returns a clear
  error.
- Test simulating 429 flood passes.
- `retrospective.md` filled in (see `../../CLAUDE.md` for structure).
