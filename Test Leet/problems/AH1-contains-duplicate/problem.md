---
id: AH1
name: Contains Duplicate
category: Arrays & Hashing
difficulty: Easy
leetcode: https://leetcode.com/problems/contains-duplicate/
status: pass2-done
---

# Contains Duplicate

*Paraphrased statement — for exact official wording/edge cases, check the LeetCode link above.*

Given an integer array `nums`, return `true` if any value appears at
least twice in the array, and return `false` if every element is
distinct.

## Examples

1. `nums = [1,2,3,1]` → `true` (1 appears twice)
2. `nums = [1,2,3,4]` → `false` (all distinct)
3. `nums = [1,1,1,3,3,4,3,2,4,2]` → `true`

## Constraints

- `1 <= nums.length <= 10^5`
- `-10^9 <= nums[i] <= 10^9`

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
