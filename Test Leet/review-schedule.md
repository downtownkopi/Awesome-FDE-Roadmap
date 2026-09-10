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
| AH4 | Group Anagrams | 3 | 2026-09-10 | 2026-09-11 | 1 day | 0 | recall #1 hard-failed — `map.set(key, map.get(key).push(str))` again, 3rd occurrence of the same `.push()`-return-value bug (Pass 1 had it twice). Reset. |
| AH1 | Contains Duplicate | 3 | 2026-09-08 | 2026-09-11 | 3 days | 1 | recall #1 pass |
| AH3 | Two Sum | 3 | 2026-09-10 | 2026-09-13 | 3 days | 1 | recall #1 clean, 3/3 no hints, same single-pass hash-map approach reproduced, correct duplicate handling |
| AH2 | Valid Anagram | 3 | 2026-09-10 | 2026-09-13 | 3 days | 1 | recall #3 clean, 3/3 no hints — correct loop bound + no typo this time, breaks the 2-consecutive-reset streak. |
| AH5 | Top K Frequent Elements | 2 | 2026-09-10 | today | - | 0 | pass1-done, optimal O(n)/O(n) bucket sort achieved after correcting a wrong attempt-1 algorithm — ready for Pass 2 study + blind reimplementation |

# Mastered

| ID | Problem | Mastered Date |
|---|---|---|
