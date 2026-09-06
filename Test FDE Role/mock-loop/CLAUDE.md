# Full Mock-Loop Simulation — Protocol

Category quizzing (`../technical-depth/` etc.) tests one skill at a
time. Real loops chain 3-5 rounds back-to-back in one sitting (OpenAI's
3-4hr virtual onsite, Anthropic's 4-5hr final loop, Cohere's full-day
loop) — stamina and context-switching under realistic pacing is its
own skill, untested by single-category drills. This folder runs the
chained simulation.

Files:
- `knowledge-map.md` — per-company loop templates (round order, timing,
  what each round draws from), sourced from `../interview-stories/`.
- `knowledge-tracker.md` — one entry per full mock-loop run: per-round
  scores + an overall-loop assessment (not just an average — stamina/
  consistency across rounds is itself graded).

Trigger: user asks for a "mock interview," "full loop," "run the whole
OpenAI/Anthropic/Cohere process," or similar.

## Running a mock loop

1. Ask which company's loop to simulate (or let the user pick from
   `knowledge-map.md`). Confirm how much time they have — offer a
   compressed version (shorter per-round time, same round order) if a
   full multi-hour simulation isn't feasible in one sitting.
2. Run each round in order, back-to-back, minimal breaks — pull the
   actual question/scenario from the matching category subfolder or
   `../take-home-practice/`:
   - Coding/technical round → `../technical-depth/knowledge-map.md`
   - System design round → `../system-design/knowledge-map.md`
   - Decomposition/case-study round → `../problem-decomposition/knowledge-map.md` scenario bank
   - Customer-conversation/solution-design round → `../customer-facing-judgment/knowledge-map.md`
   - Behavioral/values round → `../behavioral/knowledge-map.md` + `../behavioral/star-stories.md`
   - Take-home stage (if the loop template includes one) → `../take-home-practice/knowledge-map.md`
3. Score each round individually using that category's normal rubric —
   do NOT update the category's own knowledge-tracker.md mid-loop
   (that would double-count against per-category reps); instead log
   everything in this folder's knowledge-tracker.md.
4. At the end, assess holistically: did performance degrade across
   rounds (fatigue), was there a weak round that would have failed the
   whole loop (most real loops are pass/fail per stage, not averaged),
   and would this loop have advanced.
5. Append a full entry to `knowledge-tracker.md`: Date, Company loop
   simulated, Total time, Per-round scores + notes, Weakest round,
   Fatigue/consistency notes, Would-have-advanced verdict, Follow-up
   Required.
6. Name the weakest round so the user knows what to drill next (in its
   own category subfolder) before the next full mock loop.

## After updating

Refresh the "mock loops run" line in root `PROGRESS.md`'s Test FDE
Role row.
