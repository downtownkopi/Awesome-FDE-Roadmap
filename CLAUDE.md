# Awesome-FDE-Roadmap — Assistant Instructions

This repo has two purposes:

1. `README.md` — the public "awesome list" of FDE resources. Do not treat
   this as a tracker; only edit it for content curation requests. It also
   doubles as the curriculum/glossary source for `Test FDE Role/knowledge-map.md`
   — if `README.md` changes, that map can go stale.
2. Personal FDE interview prep + book study + coding practice tracker,
   split across:
   - `Test FDE Role/` — interview-prep testing. Protocol: `Test FDE Role/CLAUDE.md`.
   - `Test Book Knowledge/<Book>-Chapter-N-<Title>/` — per-chapter book study
     testing. Protocol: `Test Book Knowledge/CLAUDE.md`.
   - `Test Leet/` — NeetCode 150 coding-practice testing (via the
     `leetcode-teacher` skill). Protocol: `Test Leet/CLAUDE.md`.
   - `PROGRESS.md` — root index, one row per chapter/category/problem-set
     with a one-line status.

## Global rule

Whenever a testing/quiz session updates any file inside `Test FDE Role/`,
`Test Book Knowledge/`, or `Test Leet/`, also update the corresponding row
in `PROGRESS.md` with a short status line (e.g. "3/6 categories passing",
"4 questions, weak on X", "12/150 attempted"). Only touch the affected
row — don't rewrite the whole file.

## New chapter setup

When the user starts a new book chapter not yet under `Test Book Knowledge/`,
create `Test Book Knowledge/<Book>-Chapter-N-<Title>/` with the four
book-chapter-template files, copying the structure from
`Test Book Knowledge/Designing-Data-Intensive-Applications-Chapter-1-Trade-Offs-in-Data-Systems-Architecture/`
(currently an empty skeleton) or from
`Test Book Knowledge/AI-Engineering-Chapter-1-Introduction/` (currently populated,
for reference on what a filled-in `source.md`/`knowledge-map.md` looks
like). Then add a row for it in `PROGRESS.md`.
