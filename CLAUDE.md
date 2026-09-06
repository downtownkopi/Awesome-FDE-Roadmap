# Awesome-FDE-Roadmap — Assistant Instructions

This repo has two purposes:

1. `README.md` — the public "awesome list" of FDE resources. Do not treat
   this as a tracker; only edit it for content curation requests. It also
   doubles as a curriculum/glossary source for `Test FDE Role/`'s
   per-category `knowledge-map.md` files (`Test FDE Role/technical-depth/`,
   `system-design/`, `problem-decomposition/`, `customer-facing-judgment/`,
   `behavioral/`, `business-judgment/`) — if `README.md` changes, those
   maps can go stale.
2. Personal FDE interview prep + book study + coding practice + hands-on
   build tracker, split across:
   - `Test FDE Role/` — interview-prep testing (6 category subfolders +
     shared reference files). Protocol: `Test FDE Role/CLAUDE.md`.
   - `Test Book Knowledge/<Book>-Chapter-N-<Title>/` — per-chapter book study
     testing. Protocol: `Test Book Knowledge/CLAUDE.md`.
   - `Test Leet/` — NeetCode 150 coding-practice testing (via the
     `leetcode-teacher` skill). Protocol: `Test Leet/CLAUDE.md`.
   - `Test Builds/` — hands-on project builds (MCP servers, RAG eval
     harnesses, agents) for generating real interview stories, not just
     conceptual knowledge. Protocol: `Test Builds/CLAUDE.md`.
   - `GPU Lab/` — local ML hands-on (inference, quantization,
     fine-tuning) on the user's own GPU, one layer below `Test Builds/`
     in the stack. Protocol: `GPU Lab/CLAUDE.md`.
   - `Job Search/` — operational tracking (applications, networking,
     resume positioning), not a testing/quiz loop. Protocol:
     `Job Search/CLAUDE.md`.
   - `PROGRESS.md` — root index, one row per chapter/category/problem-set/
     project with a one-line status.

## Global rule

Whenever a testing/quiz session updates any file inside `Test FDE Role/`,
`Test Book Knowledge/`, `Test Leet/`, `Test Builds/`, or `GPU Lab/`, also
update the corresponding row in `PROGRESS.md` with a short status line
(e.g. "3/6 categories passing", "4 questions, weak on X", "12/150
attempted", "2/5 projects built", "3/12 GPU experiments run"). Only
touch the affected row — don't rewrite the whole file. `Job Search/` follows the same rule but on real-world events
(application sent, status change, referral) rather than test sessions —
see `Job Search/CLAUDE.md`.

## New chapter setup

When the user starts a new book chapter not yet under `Test Book Knowledge/`,
create `Test Book Knowledge/<Book>-Chapter-N-<Title>/` with the four
book-chapter-template files, copying the structure from
`Test Book Knowledge/Designing-Data-Intensive-Applications-Chapter-1-Trade-Offs-in-Data-Systems-Architecture/`
(currently an empty skeleton) or from
`Test Book Knowledge/AI-Engineering-Chapter-1-Introduction/` (currently populated,
for reference on what a filled-in `source.md`/`knowledge-map.md` looks
like). Then add a row for it in `PROGRESS.md`.
