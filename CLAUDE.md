# Awesome-FDE-Roadmap — Assistant Instructions

This repo has two purposes:

1. `README.md` — the public "awesome list" of FDE resources. Do not treat
   this as a tracker; only edit it for content curation requests.
2. Personal FDE interview prep + book study tracker, split across:
   - `FDE-role/` — interview-prep testing. Protocol: `FDE-role/CLAUDE.md`.
   - `knowledge/<Book>-Chapter-N-<Title>/` — per-chapter book study
     testing. Protocol: `knowledge/CLAUDE.md`.
   - `PROGRESS.md` — root index, one row per chapter/category with a
     one-line status.

## Global rule

Whenever a testing/quiz session updates any file inside `FDE-role/` or
`knowledge/`, also update the corresponding row in `PROGRESS.md` with a
short status line (e.g. "3/6 categories passing", "4 questions, weak on
X"). Only touch the affected row — don't rewrite the whole file.

## New chapter setup

When the user starts a new book chapter not yet under `knowledge/`,
create `knowledge/<Book>-Chapter-N-<Title>/` with the four
book-chapter-template files, copying the structure from
`knowledge/Designing-Data-Intensive-Applications-Chapter-1-Trade-Offs-in-Data-Systems-Architecture/`
(currently an empty skeleton) or from
`knowledge/AI-Engineering-Chapter-1-Introduction/` (currently populated,
for reference on what a filled-in `source.md`/`knowledge-map.md` looks
like). Then add a row for it in `PROGRESS.md`.
