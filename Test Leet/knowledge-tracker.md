# Knowledge Mastery Tracker

## Scope
**List:** NeetCode 150 (Blind 75 + 75 more)
**Concept list:** Test Leet/knowledge-map.md

This file is the single place to see every problem you've been
tested/quizzed on, in full detail (problem, your approach, assessment,
optimal solution, gap). Mirrors the same tracker shape used for book
chapters and FDE-role prep.

## Overall Progress
- Problems attempted: 3 / 150
- Solved independently (no hints): 1
- Solved with hints: 2
- Solved after seeing approach/walkthrough: 0
- Attempted, not solved: 0
- Overall demonstrated mastery: Just started
- Current weak areas: syntax discipline (const vs let in loop counters, seen once on AH1); `for...in` vs `for...of` over Map iterators (AH2, repeated twice — real pattern); pattern selection under pressure — reached for sort-based two-pointer on AH3 (index-recovery + duplicate-key dead ends) before landing on single-pass hash map

---
# Knowledge Gaps

| ID | Problem | Pattern/Technique Gap | Category | Severity | Status | Attempts | Solved |
|---|---|---|---|---|---|---:|---:|
| AH1 | Contains Duplicate | `const` vs `let` for a mutating loop counter | Arrays & Hashing | Low | Open — watch for repeat | 1 | Yes |
| AH2 | Valid Anagram | `for...in` vs `for...of` over a `Map.keys()` iterator — `for...in` silently iterates zero times, no error thrown | Arrays & Hashing | High | Open — repeated on Pass 3 recall #1 (2 occurrences), same exact mistake | 2 | Yes (with hint 2nd time) |
| AH3 | Two Sum | Reached for sort-based two-pointer first (default `.sort()` is lexicographic; sorting also destroys the original index mapping needed for the answer; recovering indices via a value→index map then breaks on duplicate values). Needed a full hint sequence to pivot to single-pass hash map (check complement before insert) | Arrays & Hashing | Medium | Open — watch pattern-recognition speed on future array problems needing original indices | 1 | Yes (heavy hints) |

---
# Concept Mastery

| ID | Problem | Category | Difficulty | Recognized pattern | Solved independently | Optimal complexity | Overall |
|---|---|---|---|---|---|---|---|
| AH1 | Contains Duplicate | Arrays & Hashing | Easy | Yes | With hints | Yes (O(n)/O(n)) | Solved with hints |
| AH2 | Valid Anagram | Arrays & Hashing | Easy | Yes | Independent | Yes (O(n+m)/O(1)) | Solved independently |
| AH3 | Two Sum | Arrays & Hashing | Easy | Eventually (after hints) | With heavy hints | Yes (O(n)/O(n)) | Solved with hints |
| AH4 | Group Anagrams | Arrays & Hashing | Medium | — | — | — | Untested |
| AH5 | Top K Frequent Elements | Arrays & Hashing | Medium | — | — | — | Untested |
| AH6 | Product of Array Except Self | Arrays & Hashing | Medium | — | — | — | Untested |
| AH7 | Valid Sudoku | Arrays & Hashing | Medium | — | — | — | Untested |
| AH8 | Encode and Decode Strings | Arrays & Hashing | Medium | — | — | — | Untested |
| AH9 | Longest Consecutive Sequence | Arrays & Hashing | Medium | — | — | — | Untested |
| TP1 | Valid Palindrome | Two Pointers | Easy | — | — | — | Untested |
| TP2 | Two Sum II Input Array Is Sorted | Two Pointers | Medium | — | — | — | Untested |
| TP3 | 3Sum | Two Pointers | Medium | — | — | — | Untested |
| TP4 | Container With Most Water | Two Pointers | Medium | — | — | — | Untested |
| TP5 | Trapping Rain Water | Two Pointers | Hard | — | — | — | Untested |
| SW1 | Best Time to Buy And Sell Stock | Sliding Window | Easy | — | — | — | Untested |
| SW2 | Longest Substring Without Repeating Characters | Sliding Window | Medium | — | — | — | Untested |
| SW3 | Longest Repeating Character Replacement | Sliding Window | Medium | — | — | — | Untested |
| SW4 | Permutation In String | Sliding Window | Medium | — | — | — | Untested |
| SW5 | Minimum Window Substring | Sliding Window | Hard | — | — | — | Untested |
| SW6 | Sliding Window Maximum | Sliding Window | Hard | — | — | — | Untested |
| ST1 | Valid Parentheses | Stack | Easy | — | — | — | Untested |
| ST2 | Min Stack | Stack | Medium | — | — | — | Untested |
| ST3 | Evaluate Reverse Polish Notation | Stack | Medium | — | — | — | Untested |
| ST4 | Generate Parentheses | Stack | Medium | — | — | — | Untested |
| ST5 | Daily Temperatures | Stack | Medium | — | — | — | Untested |
| ST6 | Car Fleet | Stack | Medium | — | — | — | Untested |
| ST7 | Largest Rectangle In Histogram | Stack | Hard | — | — | — | Untested |
| BS1 | Binary Search | Binary Search | Easy | — | — | — | Untested |
| BS2 | Search a 2D Matrix | Binary Search | Medium | — | — | — | Untested |
| BS3 | Koko Eating Bananas | Binary Search | Medium | — | — | — | Untested |
| BS4 | Find Minimum In Rotated Sorted Array | Binary Search | Medium | — | — | — | Untested |
| BS5 | Search In Rotated Sorted Array | Binary Search | Medium | — | — | — | Untested |
| BS6 | Time Based Key Value Store | Binary Search | Medium | — | — | — | Untested |
| BS7 | Median of Two Sorted Arrays | Binary Search | Hard | — | — | — | Untested |
| LL1 | Reverse Linked List | Linked List | Easy | — | — | — | Untested |
| LL2 | Merge Two Sorted Lists | Linked List | Easy | — | — | — | Untested |
| LL3 | Reorder List | Linked List | Medium | — | — | — | Untested |
| LL4 | Remove Nth Node From End of List | Linked List | Medium | — | — | — | Untested |
| LL5 | Copy List With Random Pointer | Linked List | Medium | — | — | — | Untested |
| LL6 | Add Two Numbers | Linked List | Medium | — | — | — | Untested |
| LL7 | Linked List Cycle | Linked List | Easy | — | — | — | Untested |
| LL8 | Find The Duplicate Number | Linked List | Medium | — | — | — | Untested |
| LL9 | LRU Cache | Linked List | Medium | — | — | — | Untested |
| LL10 | Merge K Sorted Lists | Linked List | Hard | — | — | — | Untested |
| LL11 | Reverse Nodes In K Group | Linked List | Hard | — | — | — | Untested |
| TR1 | Invert Binary Tree | Trees | Easy | — | — | — | Untested |
| TR2 | Maximum Depth of Binary Tree | Trees | Easy | — | — | — | Untested |
| TR3 | Diameter of Binary Tree | Trees | Easy | — | — | — | Untested |
| TR4 | Balanced Binary Tree | Trees | Easy | — | — | — | Untested |
| TR5 | Same Tree | Trees | Easy | — | — | — | Untested |
| TR6 | Subtree of Another Tree | Trees | Easy | — | — | — | Untested |
| TR7 | Lowest Common Ancestor of a Binary Search Tree | Trees | Medium | — | — | — | Untested |
| TR8 | Binary Tree Level Order Traversal | Trees | Medium | — | — | — | Untested |
| TR9 | Binary Tree Right Side View | Trees | Medium | — | — | — | Untested |
| TR10 | Count Good Nodes In Binary Tree | Trees | Medium | — | — | — | Untested |
| TR11 | Validate Binary Search Tree | Trees | Medium | — | — | — | Untested |
| TR12 | Kth Smallest Element In a Bst | Trees | Medium | — | — | — | Untested |
| TR13 | Construct Binary Tree From Preorder And Inorder Traversal | Trees | Medium | — | — | — | Untested |
| TR14 | Binary Tree Maximum Path Sum | Trees | Hard | — | — | — | Untested |
| TR15 | Serialize And Deserialize Binary Tree | Trees | Hard | — | — | — | Untested |
| TRI1 | Implement Trie Prefix Tree | Tries | Medium | — | — | — | Untested |
| TRI2 | Design Add And Search Words Data Structure | Tries | Medium | — | — | — | Untested |
| TRI3 | Word Search II | Tries | Hard | — | — | — | Untested |
| HP1 | Kth Largest Element In a Stream | Heap / Priority Queue | Easy | — | — | — | Untested |
| HP2 | Last Stone Weight | Heap / Priority Queue | Easy | — | — | — | Untested |
| HP3 | K Closest Points to Origin | Heap / Priority Queue | Medium | — | — | — | Untested |
| HP4 | Kth Largest Element In An Array | Heap / Priority Queue | Medium | — | — | — | Untested |
| HP5 | Task Scheduler | Heap / Priority Queue | Medium | — | — | — | Untested |
| HP6 | Design Twitter | Heap / Priority Queue | Medium | — | — | — | Untested |
| HP7 | Find Median From Data Stream | Heap / Priority Queue | Hard | — | — | — | Untested |
| BT1 | Subsets | Backtracking | Medium | — | — | — | Untested |
| BT2 | Combination Sum | Backtracking | Medium | — | — | — | Untested |
| BT3 | Permutations | Backtracking | Medium | — | — | — | Untested |
| BT4 | Subsets II | Backtracking | Medium | — | — | — | Untested |
| BT5 | Combination Sum II | Backtracking | Medium | — | — | — | Untested |
| BT6 | Word Search | Backtracking | Medium | — | — | — | Untested |
| BT7 | Palindrome Partitioning | Backtracking | Medium | — | — | — | Untested |
| BT8 | Letter Combinations of a Phone Number | Backtracking | Medium | — | — | — | Untested |
| BT9 | N Queens | Backtracking | Hard | — | — | — | Untested |
| GR1 | Number of Islands | Graphs | Medium | — | — | — | Untested |
| GR2 | Clone Graph | Graphs | Medium | — | — | — | Untested |
| GR3 | Max Area of Island | Graphs | Medium | — | — | — | Untested |
| GR4 | Pacific Atlantic Water Flow | Graphs | Medium | — | — | — | Untested |
| GR5 | Surrounded Regions | Graphs | Medium | — | — | — | Untested |
| GR6 | Rotting Oranges | Graphs | Medium | — | — | — | Untested |
| GR7 | Walls And Gates | Graphs | Medium | — | — | — | Untested |
| GR8 | Course Schedule | Graphs | Medium | — | — | — | Untested |
| GR9 | Course Schedule II | Graphs | Medium | — | — | — | Untested |
| GR10 | Redundant Connection | Graphs | Medium | — | — | — | Untested |
| GR11 | Number of Connected Components In An Undirected Graph | Graphs | Medium | — | — | — | Untested |
| GR12 | Graph Valid Tree | Graphs | Medium | — | — | — | Untested |
| GR13 | Word Ladder | Graphs | Hard | — | — | — | Untested |
| AG1 | Reconstruct Itinerary | Advanced Graphs | Hard | — | — | — | Untested |
| AG2 | Min Cost to Connect All Points | Advanced Graphs | Medium | — | — | — | Untested |
| AG3 | Network Delay Time | Advanced Graphs | Medium | — | — | — | Untested |
| AG4 | Swim In Rising Water | Advanced Graphs | Hard | — | — | — | Untested |
| AG5 | Alien Dictionary | Advanced Graphs | Hard | — | — | — | Untested |
| AG6 | Cheapest Flights Within K Stops | Advanced Graphs | Medium | — | — | — | Untested |
| DP1D1 | Climbing Stairs | 1-D Dynamic Programming | Easy | — | — | — | Untested |
| DP1D2 | Min Cost Climbing Stairs | 1-D Dynamic Programming | Easy | — | — | — | Untested |
| DP1D3 | House Robber | 1-D Dynamic Programming | Medium | — | — | — | Untested |
| DP1D4 | House Robber II | 1-D Dynamic Programming | Medium | — | — | — | Untested |
| DP1D5 | Longest Palindromic Substring | 1-D Dynamic Programming | Medium | — | — | — | Untested |
| DP1D6 | Palindromic Substrings | 1-D Dynamic Programming | Medium | — | — | — | Untested |
| DP1D7 | Decode Ways | 1-D Dynamic Programming | Medium | — | — | — | Untested |
| DP1D8 | Coin Change | 1-D Dynamic Programming | Medium | — | — | — | Untested |
| DP1D9 | Maximum Product Subarray | 1-D Dynamic Programming | Medium | — | — | — | Untested |
| DP1D10 | Word Break | 1-D Dynamic Programming | Medium | — | — | — | Untested |
| DP1D11 | Longest Increasing Subsequence | 1-D Dynamic Programming | Medium | — | — | — | Untested |
| DP1D12 | Partition Equal Subset Sum | 1-D Dynamic Programming | Medium | — | — | — | Untested |
| DP2D1 | Unique Paths | 2-D Dynamic Programming | Medium | — | — | — | Untested |
| DP2D2 | Longest Common Subsequence | 2-D Dynamic Programming | Medium | — | — | — | Untested |
| DP2D3 | Best Time to Buy And Sell Stock With Cooldown | 2-D Dynamic Programming | Medium | — | — | — | Untested |
| DP2D4 | Coin Change II | 2-D Dynamic Programming | Medium | — | — | — | Untested |
| DP2D5 | Target Sum | 2-D Dynamic Programming | Medium | — | — | — | Untested |
| DP2D6 | Interleaving String | 2-D Dynamic Programming | Medium | — | — | — | Untested |
| DP2D7 | Longest Increasing Path In a Matrix | 2-D Dynamic Programming | Hard | — | — | — | Untested |
| DP2D8 | Distinct Subsequences | 2-D Dynamic Programming | Hard | — | — | — | Untested |
| DP2D9 | Edit Distance | 2-D Dynamic Programming | Medium | — | — | — | Untested |
| DP2D10 | Burst Balloons | 2-D Dynamic Programming | Hard | — | — | — | Untested |
| DP2D11 | Regular Expression Matching | 2-D Dynamic Programming | Hard | — | — | — | Untested |
| GD1 | Maximum Subarray | Greedy | Medium | — | — | — | Untested |
| GD2 | Jump Game | Greedy | Medium | — | — | — | Untested |
| GD3 | Jump Game II | Greedy | Medium | — | — | — | Untested |
| GD4 | Gas Station | Greedy | Medium | — | — | — | Untested |
| GD5 | Hand of Straights | Greedy | Medium | — | — | — | Untested |
| GD6 | Merge Triplets to Form Target Triplet | Greedy | Medium | — | — | — | Untested |
| GD7 | Partition Labels | Greedy | Medium | — | — | — | Untested |
| GD8 | Valid Parenthesis String | Greedy | Medium | — | — | — | Untested |
| IV1 | Insert Interval | Intervals | Medium | — | — | — | Untested |
| IV2 | Merge Intervals | Intervals | Medium | — | — | — | Untested |
| IV3 | Non Overlapping Intervals | Intervals | Medium | — | — | — | Untested |
| IV4 | Meeting Rooms | Intervals | Easy | — | — | — | Untested |
| IV5 | Meeting Rooms II | Intervals | Medium | — | — | — | Untested |
| IV6 | Minimum Interval to Include Each Query | Intervals | Hard | — | — | — | Untested |
| MG1 | Rotate Image | Math & Geometry | Medium | — | — | — | Untested |
| MG2 | Spiral Matrix | Math & Geometry | Medium | — | — | — | Untested |
| MG3 | Set Matrix Zeroes | Math & Geometry | Medium | — | — | — | Untested |
| MG4 | Happy Number | Math & Geometry | Easy | — | — | — | Untested |
| MG5 | Plus One | Math & Geometry | Easy | — | — | — | Untested |
| MG6 | Pow(x, n) | Math & Geometry | Medium | — | — | — | Untested |
| MG7 | Multiply Strings | Math & Geometry | Medium | — | — | — | Untested |
| MG8 | Detect Squares | Math & Geometry | Medium | — | — | — | Untested |
| BM1 | Single Number | Bit Manipulation | Easy | — | — | — | Untested |
| BM2 | Number of 1 Bits | Bit Manipulation | Easy | — | — | — | Untested |
| BM3 | Counting Bits | Bit Manipulation | Easy | — | — | — | Untested |
| BM4 | Reverse Bits | Bit Manipulation | Easy | — | — | — | Untested |
| BM5 | Missing Number | Bit Manipulation | Easy | — | — | — | Untested |
| BM6 | Sum of Two Integers | Bit Manipulation | Medium | — | — | — | Untested |
| BM7 | Reverse Integer | Bit Manipulation | Medium | — | — | — | Untested |

---
# Question Log

## Q001
**Date:** 2026-09-07
**Problem:** AH1 — Contains Duplicate
**Category:** Arrays & Hashing
**Difficulty:** Easy
**Mode:** Self-attempt, with hints

### My Approach
> Hash set: iterate nums, check `set.has(n)` before `set.add(n)`, return
> true on first repeat, false if loop completes.

### Assessment
Solved with hints

### What I Got Right
- Correct pattern on first try — hash set for O(1) membership check,
  no need to reach for sort or nested loops.
- Correct early-exit logic (return true immediately on duplicate).

### What I Missed
- Declared the loop counter with `const i = 0` instead of `let`,
  causing `Assignment to constant variable` on `i++`. Needed a Socratic
  hint ("what kind of variable... what happens when a loop increments
  it") to catch it. Algorithm was right the whole time — this was a
  syntax slip, not a conceptual gap.

### Optimal Approach
> Hash Set — Time O(n), Space O(n). (Matches NeetCode's optimal
> approach; alternative: sort-based O(n log n) time / O(1) space.)

### Achieved Complexity
> Time O(n), Space O(n) — matches optimal.

### Knowledge Gap
None on the pattern. Minor: `const` vs `let` habit in loop counters —
flag if this repeats across future problems.

### Memory Priority
Low — algorithm was solid, only a syntax fix needed.

### Follow-up Required
No — Pass 2 (blind reimplementation, `solution_pass2.js`) completed
2026-09-07, 3/3 clean, same optimal hash-set approach, no bugs. Pass 3
recall #1 completed 2026-09-08, 3/3 clean, same hash-set approach, no
bugs. Interval advances to 3 days, next due 2026-09-11 (see
review-schedule.md).

---

## Q002
**Date:** 2026-09-07
**Problem:** AH2 — Valid Anagram
**Category:** Arrays & Hashing
**Difficulty:** Easy
**Mode:** Self-attempt, independent

### My Approach
> Length check first (early exit if different). Build a frequency Map
> for `s` and a frequency Map for `t` in one combined pass. Then check
> every key in `sMap` exists in `tMap` with matching count.

### Assessment
Solved independently

### What I Got Right
- Early length-mismatch exit.
- Single combined pass to build both frequency maps (not two separate
  passes).
- Correct equality check across both maps.

### What I Missed
- Nothing — no bugs, no hints needed.

### Optimal Approach
> Frequency count — Time O(n+m), Space O(1) (bounded by fixed
> alphabet size for lowercase English letters). Canonical version uses
> one fixed-size count array (increment for s, decrement for t, check
> all-zero) instead of two Maps — same Big-O, less constant-factor
> overhead.

### Achieved Complexity
> Time O(n+m), Space O(1) — matches recommended (neetcode.io:
> O(n+m) time, O(1) space).

### Knowledge Gap
None on the pattern. Style note: two-Map approach works but the
single-count-array version is the more idiomatic optimal — worth
knowing for interviews.

### Memory Priority
Low — clean solve, optimal complexity.

### Follow-up Required
Yes — Pass 2 (blind reimplementation, `solution_pass2.js`) completed
2026-09-07, 2/3 first try (used `for...in` instead of `for...of` over
`sMap.keys()`, so the comparison loop silently never ran — self-caught
after a hint), 3/3 after fix. Pass 3 recall #1 on 2026-09-08 repeated
the identical `for...in`/`for...of` mistake (2/3, same failure mode),
fixed after the same hint. Two occurrences of the exact same slip —
real pattern, not a fluke. Interval reset to 1 day, next due
2026-09-09 (see review-schedule.md). Watch this specifically on the
next recall.

---

## Q003
**Date:** 2026-09-08
**Problem:** AH3 — Two Sum
**Category:** Arrays & Hashing
**Difficulty:** Easy
**Mode:** Self-attempt, with heavy hints

### My Approach
> First attempt: sort `nums`, two-pointer from both ends toward the
> middle, return `[left, right]` when the sum hit target.

### Assessment
Solved with hints (heavy — 4+ rounds of hints before landing on the
optimal pattern)

### What I Got Right
- Two-pointer pattern itself was executed correctly once the array
  was actually numerically sorted (no off-by-one, correct pointer
  movement toward the sum).
- Iteratively debugged each failure using the actual test output
  rather than guessing.

### What I Missed
- Round 1: `.sort()` with no comparator sorts lexicographically
  (string order) — `[2,7,11,15]` doesn't stay numerically sorted.
  Needed a hint to recall the `(a,b) => a-b` comparator.
- Round 2: even with numeric sort, returned `[left, right]` — indices
  into the *sorted* array, not the original `nums`. Problem requires
  original indices. Sorting destroys that mapping.
- Round 3: tried recovering original indices via a `value -> index`
  map built before sorting. Broke on duplicate values (`[3,3]` — map
  overwrites to `{3: 1}`, both pointers resolve to the same index).
- Never independently recognized that sorting is fundamentally the
  wrong tool here (no full ordering needed, and it's actively
  destructive to the index information the answer requires). Needed a
  full 4-step hint sequence to pivot to single-pass hash map
  (check `target - nums[i]` against the map *before* inserting
  `nums[i]`, which naturally handles duplicates since the check
  happens before the current value is ever inserted).

### Optimal Approach
> Single-pass hash map — Time O(n), Space O(n). For each `i`, check if
> `target - nums[i]` is already a key in the map; if so, return
> `[i, map.get(complement)]`; otherwise insert `nums[i] -> i` and
> continue. (Matches NeetCode's optimal approach.)

### Achieved Complexity
> Time O(n), Space O(n) — matches optimal, after the pivot.

### Knowledge Gap
Pattern-selection speed: reached for sort + two-pointer (a Two Pointers
pattern) on a problem that actually needs original-index preservation,
which sorting destroys — a signal to check "does this problem need
original positions?" before reaching for sort-based approaches.
Secondary: default `.sort()` numeric-comparator habit (same family as
general JS-array-method gotchas seen on AH1/AH2).

### Memory Priority
High — the pattern-selection gap (recognizing when sorting is
disqualifying) is more valuable to fix than the syntax slips, since
it'll recur on any "return original indices/positions" problem.

### Follow-up Required
Yes — Pass 2 (blind reimplementation of the single-pass hash-map
approach) not yet done. Schedule next session.

---

*(New entries appended below, following this structure per problem:)*

<!--
## Qnnn
**Date:** YYYY-MM-DD
**Problem:** (ID + name from knowledge-map.md, e.g. AH3 — Two Sum)
**Category:** (pattern/technique, e.g. Arrays & Hashing)
**Difficulty:** Easy / Medium / Hard
**Mode:** Socratic walkthrough / Aha mode / Recall test / Mock interview

### My Approach
> ...

### Assessment
(Solved independently / Solved with hints / Solved after walkthrough / Attempted, not solved)

### What I Got Right
- ...

### What I Missed
- ...

### Optimal Approach
> Pattern/technique + optimal time/space complexity.

### Achieved Complexity
> Time/space complexity of the actual passing solution (may be
> suboptimal even if tests pass — note the gap if so).

### Knowledge Gap
...

### Memory Priority
Critical / High / Medium / Low

### Follow-up Required
Yes/No — ...
-->

---
# Misconceptions

*(None yet.)*

---
# Mastered Concepts
- (none yet)

---
# Weak Concepts
- (none yet)

---
# Concepts Requiring Review
- Everything — nothing tested yet
