---
title: "Review Schedule — 3-Pass Mastery Method"
note: >
  Spaced-repetition queue. Pass 1 = timeboxed attempt, Pass 2 = study +
  blind reimplementation, Pass 3 = scheduled blind recalls at
  +1/+3/+7/+14 days. Fail on a Pass 3 recall resets Interval to 1 and
  Streak to 0. "mastered" = clean pass at the 14-day mark. See
  CLAUDE.md's "3-Pass Mastery Method" for the full protocol.
  No automated reminders — check this table daily (or ask "what's due").
  Sorted by Next Due, soonest first. "-" = not yet scheduled.
---

# Calendar (rows due today or overdue = action needed)

| ID | Problem | Pass | Last Attempt | Next Due | Interval | Streak | Result |
|---|---|---|---|---|---|---|---|
| AH5 | Top K Frequent Elements | 3 | 2026-09-11 | 2026-09-12 | 1 day | 0 | pass2-done, O(n)/O(n) array-bucket-sort — self-reimplemented bucketing/counting independently, but final collection step (join+Number, breaks on multi-value buckets) had a real bug fixed with direct help after one Socratic prompt. Own test cases again missed the bug (no tie-in-frequency case); caught with a targeted counterexample. |
| AH4 | Group Anagrams | 3 | 2026-09-11 | 2026-09-12 | 1 day | 0 | recall #2 hard-failed — new bug shape this time (`.push()` fix held): key/grouping block placed inside the inner char-loop instead of after it, so multi-char strings get inserted repeatedly at partial-signature keys. 4th total attempt still not clean. Reset. |
| AH3 | Two Sum | 3 | 2026-09-10 | 2026-09-13 | 3 days | 1 | recall #1 clean, 3/3 no hints, same single-pass hash-map approach reproduced, correct duplicate handling |
| AH2 | Valid Anagram | 3 | 2026-09-10 | 2026-09-13 | 3 days | 1 | recall #3 clean, 3/3 no hints — correct loop bound + no typo this time, breaks the 2-consecutive-reset streak. |
| AH1 | Contains Duplicate | 3 | 2026-09-11 | 2026-09-18 | 7 days | 2 | recall #2 clean, 3/3 no hints — const/let loop-counter gap didn't recur |

# Mastered

| ID | Problem | Mastered Date |
|---|---|---|
