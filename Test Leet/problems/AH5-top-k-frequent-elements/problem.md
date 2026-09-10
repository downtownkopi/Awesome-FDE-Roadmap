---
id: AH5
name: Top K Frequent Elements
category: Arrays & Hashing
difficulty: Medium
leetcode: https://leetcode.com/problems/top-k-frequent-elements/
status: pass1-done
---

# Top K Frequent Elements

*Paraphrased statement — for exact official wording/edge cases, check the LeetCode link above.*

Given an integer array `nums` and an integer `k`, return the `k` most
frequent elements. You may return the answer in any order.

- It is guaranteed that the answer is unique (no ambiguity about which
  elements make the top `k`, even if there are ties in frequency below
  the cutoff).

## Examples

1. `nums = [1,1,1,2,2,3]`, `k = 2` → `[1,2]` (1 appears 3x, 2 appears
   2x, 3 appears 1x — top 2 most frequent are 1 and 2)
2. `nums = [1]`, `k = 1` → `[1]`

## Constraints

- `1 <= nums.length <= 10^5`
- `k` is in the range `[1, number of unique elements in nums]`
- It is guaranteed that the answer is unique.

## Follow-up

Your algorithm's time complexity must be better than O(n log n), where
n is the array's size.

## Recommended Time & Space Complexity

You should aim for a solution with O(n) time and O(n) space, where n
is the size of the input array. (Source: neetcode.io)

---

Solve in `solution.js`, then run:
```
node tests.js
```
When tests pass, say so and I'll check the approach's time/space
complexity and log the result to `../../knowledge-tracker.md`.
