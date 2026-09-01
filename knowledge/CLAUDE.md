# Book-Chapter Testing Protocol

Applies to any `knowledge/<Book>-Chapter-N-<Title>/` folder.

Files in each chapter folder:
- `source.md` — condensed chapter reference. Read-only; don't edit
  during testing.
- `knowledge-map.md` — target concept list used to pick questions.
  Read-mostly; edit only if testing reveals a coverage gap (a concept
  worth testing that isn't listed).
- `knowledge-tracker.md` — the mutable tracking file, updated every
  question.
- `session-log.md` — one entry per completed session (not per
  question).

Trigger: user asks to be quizzed/tested/drilled, or asks for a "recall
test" on a specific book/chapter.

## Per question

1. Pick a question targeting an Untested or Weak concept from that
   chapter's `knowledge-map.md`, prioritizing Critical > High >
   Medium/Low importance. Cross-check against the `Concept Mastery`
   table in `knowledge-tracker.md` so you don't repeat a mastered
   concept.
2. After the user answers, assess against a model answer and assign one
   bucket: Correct / Mostly correct / Partially correct / Incorrect /
   Don't know.
3. Append a full entry to the `Question Log` section of
   `knowledge-tracker.md`, following the exact structure already used
   for Q001 in `AI-Engineering-Chapter-1-Introduction/knowledge-tracker.md`:
   Date, Topic, Concept, Difficulty, Question, My Answer, Assessment,
   What I Got Right, What I Missed, Model Answer, Knowledge Gap, Memory
   Priority, Follow-up Required.
4. Update the `Overall Progress` counts at the top of
   `knowledge-tracker.md` (attempted/correct/mostly/partially/incorrect/
   don't-know).
5. If a gap is revealed, add/update a row in the `Knowledge Gaps` table.
   If a misconception surfaces, add a new `Mnnn` entry under
   `Misconceptions` (leave "Resolved: Not yet resolved" until a later
   retest confirms correction).
6. Update the tested concept's row in `Concept Mastery` (Recall,
   Explanation, Connection, Application, Overall).
7. Move the concept between `Mastered Concepts`, `Weak Concepts`, and
   `Concepts Requiring Review` as its status changes.

## End of session

When the user ends the session, append one entry to `session-log.md`
summarizing: concepts covered, scores, gaps opened, gaps closed.

## After updating

Refresh that chapter's row in root `PROGRESS.md` with a one-line status,
e.g. "In progress — 4 questions, weak on C5/C3."
