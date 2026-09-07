# System Design (Hello Interview) — Testing Protocol

Applies to any `Test System Design/<Article-Title>/` folder.

**Source:** articles the user pastes from hellointerview.com — System
Design Fundamentals course lessons, deep-dive pattern write-ups (e.g.
consistent hashing, distributed caching), and company-style problem
breakdowns (e.g. "Design Ticketmaster", "Design a Key-Value Store").

**Relationship to `Test FDE Role/system-design/`:** that folder is
Category 2 of the 6-category FDE interview scoreboard, scoped
specifically to GCP-centric end-to-end architecture (see its own
`knowledge-map.md`). This folder is broader, general system-design
mastery driven by whatever Hello Interview article the user is
currently studying. Don't duplicate content between them — if a Hello
Interview article sharpens an existing S-series concept there, add a
cross-reference note in the relevant `knowledge-map.md` instead of
copying the concept over.

Files in each article folder:
- `source.md` — condensed article reference, captured from the pasted
  Hello Interview article. Read-only; don't edit during testing.
- `knowledge-map.md` — target concept list used to pick questions.
  Read-mostly; edit only if testing reveals a coverage gap (a concept
  worth testing that isn't listed).
- `knowledge-tracker.md` — the mutable tracking file, updated every
  question.
- `session-log.md` — one entry per completed session (not per
  question).

Trigger: user pastes a new Hello Interview article, or asks to be
quizzed/tested/drilled on one already captured.

## New article setup

When the user pastes a Hello Interview article not yet under
`Test System Design/`, create `Test System Design/<Article-Title>/`
(title-cased, hyphenated, no chapter number — these aren't sequential)
with four files, following the same shape as the
`Test Book Knowledge/<Book>-Chapter-N-<Title>/` template:

1. `source.md` — condense the pasted article into the same style used
   in `Test Book Knowledge/` source files: short sentences, one idea
   per sentence, active voice, keep definitions/key claims/comparisons/
   diagrams-as-text, drop anecdotes and filler. Frontmatter should
   include the article's title, URL, and `status: source reference —
   do not edit`.
2. `knowledge-map.md` — derive a Critical/High/Medium/Low concept list
   from the condensed source, same shape as a book chapter's map
   (see any populated `Test Book Knowledge/` example for the format).
3. `knowledge-tracker.md` — empty skeleton (Overall Progress all
   zero, Concept Mastery table pre-populated with every concept ID as
   `Untested`, empty Knowledge Gaps/Misconceptions/Mastered/Weak/
   Concepts Requiring Review sections, Question Log template comment).
4. `session-log.md` — empty skeleton, header only.

Then add a row for the new article in `PROGRESS.md`'s System Design
(Hello Interview) table.

## Per question

1. Pick a question targeting an Untested or Weak concept from that
   article's `knowledge-map.md`, prioritizing Critical > High >
   Medium/Low importance. Cross-check against the `Concept Mastery`
   table in `knowledge-tracker.md` so you don't repeat a mastered
   concept.
   Before the question itself, state a one-line progress tally: how
   many questions asked so far for this article (Question Log count in
   `knowledge-tracker.md`), and how many concepts in `knowledge-map.md`'s
   Concept Mastery table are still `Untested`.
2. After the user answers, assess against a model answer and assign
   one bucket: Correct / Mostly correct / Partially correct /
   Incorrect / Don't know. Where the concept is architecture-shaped
   (e.g. "design X"), also probe trade-offs and follow-up
   scale/failure-mode questions the way Hello Interview's own
   articles frame them, not just recall.
3. Append a full entry to the `Question Log` section of
   `knowledge-tracker.md`, following the exact structure used in
   `Test Book Knowledge/` trackers: Date, Topic, Concept, Difficulty,
   Question, My Answer, Assessment, What I Got Right, What I Missed,
   Model Answer, Knowledge Gap, Memory Priority, Follow-up Required.
4. Update the `Overall Progress` counts at the top of
   `knowledge-tracker.md`.
5. If a gap is revealed, add/update a row in the `Knowledge Gaps`
   table. If a misconception surfaces, add a new `Mnnn` entry under
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

Refresh that article's row in root `PROGRESS.md`'s System Design
(Hello Interview) table with a one-line status, e.g. "In progress — 5
questions, weak on consistent hashing."
