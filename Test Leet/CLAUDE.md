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
- `review-schedule.md` — spaced-repetition queue for the 3-pass mastery
  method (see below). One row per problem in progress: current pass,
  last attempt date, next due date, interval, streak. Source of truth
  for "what's due today."
- `problems/<ID>-<slug>/` — one folder per problem actually started,
  created on demand (not pre-generated for all 150). Each contains:
  - `problem.md` — paraphrased statement (not copied from LeetCode —
    that site blocks scraping and republishing full text is a copyright
    risk anyway), examples, constraints, link to the official page.
  - `solution.js` — Pass 1 attempt. Starter stub: correct function
    signature (`var <name> = (...) => {}` or named function, matching
    the real LeetCode signature), body is `// TODO: implement`, ending
    in `module.exports = { <name> };`. User fills this in.
  - `solution_pass2.js` — Pass 2 blind reimplementation (created after
    Pass 1, once user has studied the solution and closed it).
  - `solution_recall_<YYYYMMDD>.js` — one file per Pass 3 recall attempt,
    dated. Each is a fresh blind attempt, no looking at prior files.
  - `tests.js` — plain-Node runner (no dependencies, no test framework),
    `require`s the target solution file, asserts the example cases from
    `problem.md`, prints PASS/FAIL per case, exits non-zero (`process.exit(1)`)
    on any failure. Run with `node tests.js <solution_file_without_.js>`
    or default to `solution.js` if no arg given.

## 3-Pass Mastery Method

Goal: ingrained recall, not one-shot solve. Every problem moves through
three passes before it counts as mastered.

- **Pass 1 — Attempt.** Timeboxed 15-25 min self-attempt (user
  self-enforces the clock). If stuck at the end, stop — don't grind past
  it. Existing "Starting a new problem" + this pass's ready-check below.
- **Pass 2 — Study.** Show the optimal solution (from the
  `neetcode-gh/leetcode` reference, signature-check style — read it,
  don't paste raw into chat unprompted unless user asks). User studies
  it, closes it, then reimplements it blind from memory into
  `solution_pass2.js`. This is what actually builds recall — reading and
  nodding along doesn't.
- **Pass 3 — Recall.** Scheduled blind re-solves at +1, +3, +7, +14 days
  from the Pass 2 date. Each attempt is a fresh file
  (`solution_recall_<date>.js`), no looking at old solutions. Pass →
  advance to the next interval. Fail → reset back to +1 day and redo.
  After a clean pass at the +14 day mark, mark `mastered` in
  `review-schedule.md` and stop scheduling.

Every pass transition updates `review-schedule.md` (see "After updating").

## Starting a new problem

Trigger: user names a problem, an ID from `knowledge-map.md`, or asks
"give me the next one" / "start a [category] problem".

1. Look up the ID/name/category in `knowledge-map.md` to confirm exact
   name, difficulty, LeetCode link.
2. Create `problems/<ID>-<slug>/` with `problem.md` (paraphrased, see
   `AH3-two-sum/problem.md` as the reference example), `solution.js`
   (signature-only stub — check the corresponding file at
   `https://raw.githubusercontent.com/neetcode-gh/leetcode/main/javascript/<code>.js`
   for the exact signature/param style, but only lift the signature
   line, never the solution body), and `tests.js` (plain asserts against
   the examples, modeled on `AH3-two-sum/tests.js`).
3. `problem.md` gets a "Recommended Time & Space Complexity" section
   sourced from neetcode.io — but that site is client-side rendered and
   can't be fetched (see note in the files list above), so ask the user
   to paste it in (they can copy it off the neetcode.io problem page).
   Add it verbatim under a `## Recommended Time & Space Complexity`
   heading with `(Source: neetcode.io)`. If the user doesn't have it
   handy, skip this step — not blocking, can be added later or left out.
4. Point the user at the folder and tell them to fill in `solution.js`
   then run `node tests.js`. Remind them Pass 1 is timeboxed 15-25
   min — if stuck at the end, stop rather than grind.
5. Add a row to `review-schedule.md`: ID, Problem, Pass=1, Last
   Attempt=today, Next Due=-, Interval=-, Streak=0, Result=pending.

## Pass 1 — once the user says they're ready / tests are run

1. Run `node tests.js` from inside the problem folder yourself and
   report the real output — don't take the user's word for pass/fail.
2. If it fails: don't reveal the answer. Either give a Socratic hint
   directly, or hand off to the `leetcode-teacher` skill for structured
   hints/mock-interview mode if the user wants a deeper walkthrough. If
   the user hit the timebox and is genuinely stuck (not just needs a
   nudge), it's fine to move straight to Pass 2 (study) rather than keep
   grinding — note that in the tracker entry's Mode field.
3. If it passes: read `solution.js` and assess time and space
   complexity yourself (this can't be scripted reliably — it's a
   judgment call). State Big-O for both, and compare against
   `problem.md`'s "Recommended Time & Space Complexity" section if
   present (that's the real bar — neetcode.io's own numbers); fall back
   to your own knowledge of the known-optimal approach if that section
   is missing. Call out if the user's passing solution is suboptimal,
   e.g. brute force O(n²) when O(n) exists — tests passing doesn't mean
   the approach is good.
4. Update `problem.md`'s frontmatter `status` to `pass1-done`.
5. Append a full entry to `knowledge-tracker.md`'s `Question Log`: Date,
   Problem, Category, Difficulty, Mode (self-attempt / with hints /
   after walkthrough / timebox-stopped), My Approach, Assessment, What I
   Got Right, What I Missed, Optimal Approach (name the pattern +
   optimal complexity), Achieved Complexity, Knowledge Gap, Memory
   Priority, Follow-up Required.
6. Update `Overall Progress` counts and the problem's row in `Concept
   Mastery` (Recognized pattern / Solved independently / Optimal
   complexity / Overall) in `knowledge-tracker.md`. Move it between
   `Mastered Concepts` / `Weak Concepts` / `Concepts Requiring Review`
   as appropriate — e.g. correct-but-wrong-complexity still counts as a
   gap, not mastery.
7. Update `review-schedule.md`: Pass=2 (whether Pass 1 passed clean, hit
   the timebox stuck, or failed on wrong approach — either way, next
   step is study), Next Due=today (Pass 2 study happens same session or
   whenever user is ready, not scheduled).

## Pass 2 — Study

Trigger: user says ready to study, or asks for the solution after Pass 1.

1. Fetch the reference solution from
   `https://raw.githubusercontent.com/neetcode-gh/leetcode/main/javascript/<code>.js`.
   Walk the user through the approach conversationally (pattern name,
   why it works, complexity) rather than dumping the raw file — the
   point is understanding, not a copy-paste target.
2. Tell the user to close/forget the solution, then reimplement it blind
   into `solution_pass2.js` (same signature as `solution.js`).
3. When ready, run `node tests.js solution_pass2` against `solution_pass2.js`.
4. If it fails: that's fine, this is still learning — give a hint tied
   to what's different from the studied approach, don't just show it
   again.
5. If it passes: confirm complexity matches the optimal from step 1.
   Update `problem.md` status to `pass2-done`. Update
   `review-schedule.md`: Pass=3, Last Attempt=today, Interval=1 day,
   Next Due=today+1, Streak=0.

## Pass 3 — Recall (scheduled)

Trigger: `review-schedule.md`'s Calendar view shows a problem due today
(check at session start — see "Daily review check").

1. Tell user which problem is due for recall, remind them it's blind —
   no looking at `solution.js` or `solution_pass2.js`.
2. User implements into a fresh `solution_recall_<YYYYMMDD>.js`.
3. Run `node tests.js solution_recall_<YYYYMMDD>` against that file, report real result.
4. Pass → advance interval (1→3→7→14 days), set Streak+1, Next Due =
   today + new interval. After a clean pass at the 14-day mark, set
   Pass=mastered, Next Due=-, and update `problem.md` status to
   `mastered`.
5. Fail → reset Interval=1, Streak=0, Next Due=today+1. Note the gap in
   `knowledge-tracker.md`'s Knowledge Gap field — repeated resets on the
   same problem/pattern is a real signal, call it out to the user.

## Daily review check

No standing cron/push job — user checks manually. At the start of any
Test Leet session, read `review-schedule.md`'s Calendar view and flag
any row with Next Due <= today. If the user just wants a quick look
without starting a session, they can ask "what's due" / "check the
calendar" and get the same read, no session needed.

## End of session

When the user ends the session, append one entry to `session-log.md`
summarizing: problems attempted, pass/fail, complexity gaps found.

## After updating

Refresh the NeetCode 150 row in root `PROGRESS.md`, e.g. "3/150
attempted, 2 solved optimally, weak on Sliding Window."
