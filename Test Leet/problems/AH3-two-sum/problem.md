---
id: AH3
name: Two Sum
category: Arrays & Hashing
difficulty: Easy
leetcode: https://leetcode.com/problems/two-sum/
status: not started
---

# Two Sum

*Paraphrased statement — for exact official wording/edge cases, check the LeetCode link above.*

Given an array of integers `nums` and an integer `target`, return the
indices of the two numbers that add up to `target`.

- Exactly one valid answer exists.
- You may not use the same array element twice.
- The order of the two returned indices does not matter.

## Examples

1. `nums = [2,7,11,15]`, `target = 9` → `[0,1]` (nums[0] + nums[1] = 9)
2. `nums = [3,2,4]`, `target = 6` → `[1,2]`
3. `nums = [3,3]`, `target = 6` → `[0,1]`

## Constraints

- `2 <= nums.length <= 10^4`
- `-10^9 <= nums[i] <= 10^9`
- `-10^9 <= target <= 10^9`
- Exactly one valid answer exists.

## Follow-up

Can you solve it better than O(n²) time?

---

Solve in `solution.py`, then run:
```
python3 tests.py
```
When tests pass, say so and I'll check the approach's time/space
complexity and log the result to `../../knowledge-tracker.md`.
