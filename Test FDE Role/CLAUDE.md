# Test FDE Role — Testing Protocol

## Structure

One subfolder per `scoreboard.md` category — each holds exactly one
`knowledge-map.md` (target concepts) and one `knowledge-tracker.md`
(mutable question-by-question log). No category has more than one
tracker; sub-topics (e.g. AI-specific technical depth, case-study
scenario reps) live as sections *inside* their category's files, not
as sibling folders.

- `technical-depth/` — Category 1. Generic coding/data (T-series) +
  AI-specific slice (AI-series: RAG internals, eval design, agent/MCP).
- `system-design/` — Category 2. GCP-centric architecture (S-series).
- `problem-decomposition/` — Category 3. Concepts (D-series) +
  scenario bank for live drills (CS-series), both in one
  knowledge-map.md/knowledge-tracker.md pair.
- `customer-facing-judgment/` — Category 4 (CJ-series).
- `behavioral/` — Category 5 (B-series) + `star-stories.md`, the
  personal STAR answer bank for those prompts.
- `business-judgment/` — Category 6 (BJ-series).

Shared/cross-cutting files at root (not category-specific, used by
multiple subfolders):
- `findings.md` — interview-process research (recruiter/loop format,
  company differences, sources). Read-mostly; edit only when new
  interview-prep facts surface (see step 8 below). Target companies
  (currently OpenAI, Cohere, Anthropic) are called out at the top —
  their company-specific detail overrides the generic cross-company
  findings for question selection.
- `interview-stories/` — one file per real candidate interview account
  (per company), plus a `README.md` index. This is the evidence behind
  `findings.md` and every category's `knowledge-map.md`; when picking
  questions or judging difficulty, calibrate against these stories,
  not just the generic categories. Add a new story file whenever the
  user shares a new interview-process URL/account.
- `anthropic-openai-stack.md` — curriculum reference for the
  OpenAI/Anthropic-specific technical stack (Claude API/Agent SDK/MCP,
  OpenAI Responses API/Agents SDK) that README.md's GCP-centric
  curriculum doesn't cover. Read-mostly reference, not a tracker.
- `glossary-and-dependencies.md` — glossary terms and dependency
  relationships that span more than one category subfolder.
  Category-local glossary/dependency entries live inside that
  category's own knowledge-map.md instead.
- `scoreboard.md` — fast-glance 6-category score view + the pass/fail
  rule (8/10 in all 6). The single session-log table here covers
  session history for every category — no per-category subfolder needs
  its own session-log.md.
- `cohere-stack.md` — curriculum reference for Cohere's stack (Command
  models, Embed/Rerank endpoints, North). Lower-depth than
  `anthropic-openai-stack.md` since Cohere's loop is explicitly not
  API-trivia-heavy.
- `architecture-presentation.md` — scaffold for Cohere's Architecture
  Presentation round: a prepared real-project narrative, not a Q&A
  drill. Empty until filled with a real project.
- `primary-sources/` — reading list + notes for primary policy
  documents (Anthropic RSP, OpenAI safety practices, Cohere's
  enterprise positioning) — everything else in this folder is
  secondhand; the values round specifically fails rehearsed-sounding
  answers that only cite secondary sources.
- `take-home-practice/` — practice reps for the timed take-home-build
  artifact type (OpenAI ~5hr+video, Anthropic 3-4hr), which the
  per-category Q&A/scenario trackers don't cover. Own `CLAUDE.md`.
- `mock-loop/` — full chained multi-round simulation per company
  (pulls questions from the category subfolders + take-home-practice/),
  for stamina/consistency under realistic pacing. Own `CLAUDE.md`.

Trigger: user asks to be quizzed/grilled/drilled/tested on FDE interview
material — any of the 6 categories (technical depth, system design,
problem decomposition, customer-facing judgment, behavioral,
business/product judgment).

## Per question

1. Pick the weakest/lowest-attempt category in `scoreboard.md` (`Status
   != PASS`), unless the user names one. Open that category's
   subfolder and pick a question targeting an Untested or Weak concept
   from its `knowledge-map.md`. Cross-check its `knowledge-tracker.md`
   Concept Mastery table so you don't repeat a mastered concept.
   Within a category, prefer concepts sourced from `interview-stories/`
   (tagged inline in each `knowledge-map.md`) over generic ones, and
   phrase/scope the question the way the source story frames it (e.g.
   Cohere-style: no hints, candidate must ask for logs; OpenAI-style:
   open with customer questions before architecture; Anthropic-style:
   discovery-only, no pitching).
   - If the category is Problem Decomposition, prefer running a live
     scenario from that folder's Scenario Bank over a plain concept
     question — this category's real interview round is scenario-based.
2. After the user answers, assess against a model answer and score it
   1–10 using the rubric in `scoreboard.md` ("Score rubric (per
   answer)"). Assign a correctness bucket too (Correct / Mostly
   correct / Partially correct / Incorrect / Don't know). For a
   Problem Decomposition scenario, score the four D4 sub-criteria
   individually (clarifying questions, decomposition, prioritization,
   tradeoffs) before an overall score.
3. Append a full entry to that category's `knowledge-tracker.md`
   Question Log (or Scenario Attempt Log for a decomposition scenario),
   following the structure given in that section's template comment.
4. Update the `Overall Progress` counts at the top of that
   `knowledge-tracker.md`.
5. If a gap is revealed, add/update a row in that tracker's `Knowledge
   Gaps` table. If a misconception surfaces, add a new `Mnnn` entry
   under `Misconceptions`.
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
   URL. If it surfaces a curriculum/glossary concept not yet in the
   relevant category's `knowledge-map.md` (i.e. `README.md` changed or
   was under-mapped), add it there too.

## Session rule

Keep pulling **new** questions in a weak category (score < 8) until it
hits 8+; don't stop until all 6 rows in `scoreboard.md` are PASS. After
each answer, name the next weakest category so the user can keep going
without asking.

## After updating

Refresh the Test FDE Role row in root `PROGRESS.md` with current pass count,
e.g. "2/6 categories passing, weakest: system design."
