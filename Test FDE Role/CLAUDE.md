# Test FDE Role — Testing Protocol

Files in this folder:
- `findings.md` — interview-process research (recruiter/loop format,
  company differences, sources). Read-mostly; edit only when new
  interview-prep facts surface (see step 5 below). Target companies
  (currently OpenAI, Cohere, Anthropic, xAI) are called out at the top —
  their company-specific detail overrides the generic cross-company
  findings for question selection. The Anthropic/xAI detail is flagged
  lower-confidence (compiled from web-search summaries, not verbatim
  candidate accounts — r/OfferEngineering and the primary source sites
  are blocked in this environment); prefer OpenAI/Cohere-sourced concepts
  when calibrating difficulty until corroborated.
- `interview-stories/` — one file per real candidate interview account
  (per company), plus a `README.md` index. This is the evidence behind
  `findings.md`/`knowledge-map.md`; when picking questions or judging
  difficulty, calibrate against these stories, not just the generic
  categories. Add a new story file whenever the user shares a new
  interview-process URL/account.
- `knowledge-map.md` — target concept list, grouped under the 6
  scoreboard categories, sourced from `README.md` (curriculum/glossary —
  what's needed of an FDE) and `findings.md` (interview-process
  knowledge). Read-mostly; edit only if testing reveals a coverage gap.
- `knowledge-tracker.md` — the mutable tracking file, updated every
  question. This is where you can see every question ever asked, in
  full detail.
- `scoreboard.md` — fast-glance 6-category score view + the pass/fail
  rule (8/10 in all 6). Updated every question alongside the tracker.

Trigger: user asks to be quizzed/grilled/drilled/tested on FDE interview
material — any of the 6 categories (technical depth, system design,
problem decomposition, customer-facing judgment, behavioral,
business/product judgment).

## Per question

1. Pick a question targeting an Untested or Weak concept from
   `knowledge-map.md`, preferring a category with `Status != PASS` in
   `scoreboard.md` (weakest/lowest-attempt category first, unless the
   user names one). Cross-check `Concept Mastery` in
   `knowledge-tracker.md` so you don't repeat a mastered concept.
   Within a category, prefer concepts sourced from `interview-stories/`
   (currently T9, S18, S19, CJ8, B4, B5, BJ8 — tagged inline in
   `knowledge-map.md`) over generic ones, and phrase/scope the question
   the way the source story frames it (e.g. Cohere-style: no hints,
   candidate must ask for logs; OpenAI-style: open with customer
   questions before architecture).
2. After the user answers, assess against a model answer and score it
   1–10 using the rubric in `scoreboard.md` ("Score rubric (per
   answer)"). Assign a correctness bucket too (Correct / Mostly
   correct / Partially correct / Incorrect / Don't know).
3. Append a full entry to the `Question Log` section of
   `knowledge-tracker.md`, following the structure given in that
   section's template comment: Date, Category, Concept, Difficulty,
   Question, My Answer, Assessment, What I Got Right, What I Missed,
   Model Answer, Knowledge Gap, Score, Memory Priority, Follow-up
   Required.
4. Update the `Overall Progress` counts at the top of
   `knowledge-tracker.md`.
5. If a gap is revealed, add/update a row in `knowledge-tracker.md`'s
   `Knowledge Gaps` table. If a misconception surfaces, add a new
   `Mnnn` entry under `Misconceptions`.
6. Update the tested concept's row in `Concept Mastery` (Recall,
   Explanation, Connection, Application, Overall) and move it between
   `Mastered Concepts` / `Weak Concepts` / `Concepts Requiring Review`
   as its status changes.
7. Update `scoreboard.md`:
   - The category row: Latest score, Best score (if improved), Attempts
     +1, Status (NOT STARTED → IN PROGRESS → PASS at score ≥ 8).
   - Append one row to the "Session log (running)" table: Date,
     Category, Score, Notes.
8. If the question or discussion surfaces new interview-prep facts not
   already in `findings.md` (new format detail, new company difference,
   new source), append them under the relevant section with the source
   URL. If it surfaces a curriculum/glossary concept not yet in
   `knowledge-map.md` (i.e. `README.md` changed or was under-mapped),
   add it there too.

## Session rule

Keep pulling **new** questions in a weak category (score < 8) until it
hits 8+; don't stop until all 6 rows in `scoreboard.md` are PASS. After
each answer, name the next weakest category so the user can keep going
without asking.

## After updating

Refresh the Test FDE Role row in root `PROGRESS.md` with current pass count,
e.g. "2/6 categories passing, weakest: system design."
