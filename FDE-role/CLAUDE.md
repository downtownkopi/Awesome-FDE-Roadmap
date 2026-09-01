# FDE-role — Testing Protocol

Trigger: user asks to be quizzed/grilled/drilled/tested on FDE interview
material — any of the 6 categories in `scoreboard.md` (technical depth,
system design, problem decomposition, customer-facing judgment,
behavioral, business/product judgment).

## Per question

1. Ask a question targeting a category with `Status != PASS` in
   `scoreboard.md` (prefer the weakest/lowest-attempt category, unless
   the user names one).
2. After the user answers, score it 1–10 using the rubric already in
   `scoreboard.md` ("Score rubric (per answer)").
3. Append an entry to `question-log.md`, following the format declared
   in its header: question, category, your answer (summary), best
   answer, score, gap notes.
4. Update `scoreboard.md`:
   - The category row: Latest score, Best score (if improved), Attempts
     +1, Status (NOT STARTED → IN PROGRESS → PASS at score ≥ 8).
   - Append one row to the "Session log (running)" table: Date,
     Category, Score, Notes.
5. If the question or discussion surfaces new interview-prep facts not
   already in `findings.md` (new format detail, new company difference,
   new source), append them under the relevant section in `findings.md`
   with the source URL.

## Session rule

Per `scoreboard.md`'s own rule: keep pulling **new** questions in a weak
category (score < 8) until it hits 8+; don't stop until all 6 rows are
PASS. After each answer, name the next weakest category so the user can
keep going without asking.

## After updating

Refresh the FDE-role row in root `PROGRESS.md` with current pass count,
e.g. "2/6 categories passing, weakest: system design."
