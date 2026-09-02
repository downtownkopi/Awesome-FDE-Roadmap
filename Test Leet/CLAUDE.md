# Test Leet — NeetCode 150 Practice Protocol

Files in this folder:
- `knowledge-map.md` — the full 150-problem checklist, grouped into
  NeetCode's 18 categories, sourced from the `neetcode-gh/leetcode`
  GitHub repo's `.problemSiteData.json` (`neetcode150: true` entries) —
  not from scraping neetcode.io/leetcode.com directly, since neetcode.io
  is client-side rendered and leetcode.com returns 403 to fetches.
  Read-mostly; edit only if NeetCode revises the list.
- `knowledge-tracker.md` — the mutable tracking file, updated after every
  problem. This is where every problem ever attempted shows up in full
  detail (approach, correctness, complexity, gaps).
- `session-log.md` — one entry per completed session (not per problem).
- `problems/<ID>-<slug>/` — one folder per problem actually started,
  created on demand (not pre-generated for all 150). Each contains:
  - `problem.md` — paraphrased statement (not copied from LeetCode —
    that site blocks scraping and republishing full text is a copyright
    risk anyway), examples, constraints, link to the official page.
  - `solution.py` — starter stub: correct function signature (class
    `Solution`, method name/params matching the real LeetCode signature),
    body is `# TODO: implement` / `pass`. User fills this in.
  - `tests.py` — plain-Python runner (no dependencies), asserts the
    example cases from `problem.md` against `solution.py`, prints
    PASS/FAIL per case, exits non-zero on any failure. Run with
    `python3 tests.py`.

## Starting a new problem

Trigger: user names a problem, an ID from `knowledge-map.md`, or asks
"give me the next one" / "start a [category] problem".

1. Look up the ID/name/category in `knowledge-map.md` to confirm exact
   name, difficulty, LeetCode link.
2. Create `problems/<ID>-<slug>/` with `problem.md` (paraphrased, see
   `AH3-two-sum/problem.md` as the reference example), `solution.py`
   (signature-only stub — check the corresponding file at
   `https://raw.githubusercontent.com/neetcode-gh/leetcode/main/python/<code>.py`
   for the exact signature via the `code` field in the source JSON, but
   only lift the signature line, never the solution body), and
   `tests.py` (plain asserts against the examples, modeled on
   `AH3-two-sum/tests.py`).
3. Point the user at the folder and tell them to fill in `solution.py`
   then run `python3 tests.py`.

## Once the user says they're ready / tests are run

1. Run `python3 tests.py` from inside the problem folder yourself and
   report the real output — don't take the user's word for pass/fail.
2. If it fails: don't reveal the answer. Either give a Socratic hint
   directly, or hand off to the `leetcode-teacher` skill for structured
   hints/mock-interview mode if the user wants a deeper walkthrough.
3. If it passes: read `solution.py` and assess time and space
   complexity yourself (this can't be scripted reliably — it's a
   judgment call). State Big-O for both, and compare against the known
   optimal for this problem (call out if the user's passing solution is
   suboptimal, e.g. brute force O(n²) when O(n) exists — tests passing
   doesn't mean the approach is good).
4. Update `problem.md`'s frontmatter `status` to `solved`.
5. Append a full entry to `knowledge-tracker.md`'s `Question Log`: Date,
   Problem, Category, Difficulty, Mode (self-attempt / with hints /
   after walkthrough), My Approach, Assessment, What I Got Right, What I
   Missed, Optimal Approach (name the pattern + optimal complexity),
   Achieved Complexity, Knowledge Gap, Memory Priority, Follow-up
   Required.
6. Update `Overall Progress` counts and the problem's row in `Concept
   Mastery` (Recognized pattern / Solved independently / Optimal
   complexity / Overall) in `knowledge-tracker.md`. Move it between
   `Mastered Concepts` / `Weak Concepts` / `Concepts Requiring Review`
   as appropriate — e.g. correct-but-wrong-complexity still counts as a
   gap, not mastery.

## End of session

When the user ends the session, append one entry to `session-log.md`
summarizing: problems attempted, pass/fail, complexity gaps found.

## After updating

Refresh the NeetCode 150 row in root `PROGRESS.md`, e.g. "3/150
attempted, 2 solved optimally, weak on Sliding Window."
