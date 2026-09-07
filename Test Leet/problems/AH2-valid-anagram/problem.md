---
id: AH2
name: Valid Anagram
category: Arrays & Hashing
difficulty: Easy
leetcode: https://leetcode.com/problems/valid-anagram/
status: pass2-done
---

# Valid Anagram

*Paraphrased statement — for exact official wording/edge cases, check the LeetCode link above.*

Given two strings `s` and `t`, return `true` if `t` is an anagram of
`s` (uses exactly the same letters, same counts, any order), and
`false` otherwise.

## Examples

1. `s = "anagram"`, `t = "nagaram"` → `true`
2. `s = "rat"`, `t = "car"` → `false`
3. `s = "a"`, `t = "ab"` → `false` (different lengths)

## Constraints

- `1 <= s.length, t.length <= 5 * 10^4`
- `s` and `t` consist of lowercase English letters.

## Follow-up

What if the inputs contain Unicode characters, not just lowercase
English letters? How would your solution adapt?

## Recommended Time & Space Complexity

You should aim for a solution with O(n + m) time and O(1) space,
where n is the length of string `s` and m is the length of string
`t`. (Source: neetcode.io)

---

Solve in `solution.js`, then run:
```
node tests.js
```
When tests pass, say so and I'll check the approach's time/space
complexity and log the result to `../../knowledge-tracker.md`.
