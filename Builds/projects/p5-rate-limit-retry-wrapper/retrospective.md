# Retrospective — P5 Rate-limit/retry-hardened API wrapper

**Date started:** 2026-09-08
**Date completed:** 2026-09-08

## What Was Built
> `callWithRetry(apiCallFn, options)` in JS: wraps an async API call
> with exponential backoff + jitter, retries only on 429/5xx, gives up
> after `maxRetries` with the last error. Mock 429-flood harness
> (`mock-api.js`) + test suite (`test.js`) covering flood-recovery,
> max-retries-exhausted, no-retry-on-4xx, and backoff-growth cases.
> Built in three stages: (1) assistant wrote a full reference solution
> first (`reference/`) — a process mistake, not the intended build
> order; (2) user did two blind reimplementations from studying the
> reference (`attempt/wrapper_pass1_20260908.js`, then a fresh
> `attempt/wrapper.js`), both passing 4/4 on core retry/backoff logic
> independently.

## What Broke
> Nothing at the logic level — both blind passes matched the reference
> on retryable-status detection, backoff formula, and jitter on first
> try. What "broke" was process, not code: assistant defaulted to
> writing the full solution instead of guiding a build, and had to
> restructure into `reference/` vs `attempt/` mid-session to correct
> course.
>
> Recurring gap across both blind attempts: same two style deviations
> from repo convention both times — ESM `export` instead of
> `module.exports`, and `onAttemptFn` instead of `onAttempt` (the
> option name specified in the brief). Logic recall was solid; naming/
> module-system recall was not.

## What Changed As A Result
> Manually fixed the two style points in `attempt/wrapper.js`
> (`module.exports`, `onAttempt`) post-pass-2, re-ran tests to confirm
> still 4/4. Did not attempt a third immediate blind pass — two clean
> logic passes was judged sufficient; a spaced recall later is a better
> test of retention than a third pass back-to-back.

## Extractable Story? (Y/N)
> Y — "asked for a hands-on build, assistant jumped straight to the
> finished answer; caught it, restructured into study-then-blind-
> reimplement, and used the two passes to surface a real (if minor)
> gap between logic recall and convention recall." Usable as a
> self-correction/collaboration story, not an "agent failed" story.

## Memory Priority
Medium — logic (backoff/jitter/retry-on-429-5xx) is solid and doesn't
need a flag. The naming/module-system slip is worth a note if it
recurs on a future build.

## Follow-up
Next blind recall of this pattern: due ~2026-09-15 (1 week). Focus
check: does `module.exports` + exact option names stick without a
reference open.
