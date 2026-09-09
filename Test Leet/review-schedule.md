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
| AH1 | Contains Duplicate | 3 | 2026-09-08 | 2026-09-11 | 3 days | 1 | recall #1 pass |
| AH2 | Valid Anagram | 3 | 2026-09-09 | 2026-09-10 | 1 day | 0 | recall #2 failed — infinite loop (malformed `for` condition, missing `i < s.length`) + `tKey` ReferenceError typo. Different bug shape than recall #1, but same root cause: loop-header care under blind recall. |
| AH3 | Two Sum | 3 | 2026-09-09 | 2026-09-10 | 1 day | 0 | pass2-done, 3/3 clean no hints, correct duplicate handling |
| AH4 | Group Anagrams | 3 | 2026-09-09 | 2026-09-10 | 1 day | 0 | pass2-done, count-based key, O(m·n)/O(m) achieved (fixes Pass 1's suboptimal sort-key). 3 rounds of hints on implementation bugs (missing else-branch insert, twice) before clean |

# Mastered

| ID | Problem | Mastered Date |
|---|---|---|
