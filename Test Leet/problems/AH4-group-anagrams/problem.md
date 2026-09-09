---
id: AH4
name: Group Anagrams
category: Arrays & Hashing
difficulty: Medium
leetcode: https://leetcode.com/problems/group-anagrams/
status: pass2-done
---

# Group Anagrams

Given an array of strings `strs`, group the anagrams together. Return
the groups in any order (order of groups, and order within a group,
does not matter).

## Examples

**Example 1:**
Input: `strs = ["eat","tea","tan","ate","nat","bat"]`
Output: `[["bat"],["nat","tan"],["ate","eat","tea"]]`

**Example 2:**
Input: `strs = [""]`
Output: `[[""]]`

**Example 3:**
Input: `strs = ["a"]`
Output: `[["a"]]`

## Constraints
- `1 <= strs.length <= 10^4`
- `0 <= strs[i].length <= 100`
- `strs[i]` consists of lowercase English letters only.

## Recommended Time & Space Complexity
(Source: neetcode.io)
You should aim for a solution with O(m * n) time and O(m) space, where
m is the number of strings and n is the length of the longest string.
