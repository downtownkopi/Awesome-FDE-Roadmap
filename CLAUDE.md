# Awesome-FDE-Roadmap — Assistant Instructions

This repo has two purposes:

1. `AWESOME-FDE-RESOURCES.md` — the public "awesome list" of FDE
   resources (originally this repo's `README.md`, renamed once the repo
   pivoted to primarily being a personal tracker — see below). Do not
   treat this as a tracker; only edit it for content curation requests.
   It also doubles as a curriculum/glossary source for `Test FDE
   Role/`'s per-category `knowledge-map.md` files (`Test FDE
   Role/technical-depth/`, `system-design/`, `problem-decomposition/`,
   `customer-facing-judgment/`, `behavioral/`, `business-judgment/`) —
   if `AWESOME-FDE-RESOURCES.md` changes, those maps can go stale.
2. Personal FDE interview prep + book study + coding practice + hands-on
   build tracker, split across:
   - `README.md` — overview of this repo's actual current purpose (the
     tracker below), not the awesome list. Edit when the repo's
     structure or purpose changes, not for routine tracker updates.
   - `Test FDE Role/` — interview-prep testing (6 category subfolders +
     shared reference files). Protocol: `Test FDE Role/CLAUDE.md`.
   - `Test Book Knowledge/<Book>-Chapter-N-<Title>/` — per-chapter book study
     testing. Protocol: `Test Book Knowledge/CLAUDE.md`.
   - `Test Leet/` — NeetCode 150 coding-practice testing (via the
     `leetcode-teacher` skill). Protocol: `Test Leet/CLAUDE.md`.
   - `Builds/` — hands-on project builds (MCP servers, RAG eval
     harnesses, agents) for generating real interview stories, not just
     conceptual knowledge. Protocol: `Builds/CLAUDE.md`.
   - `GPU Lab/` — local ML hands-on (inference, quantization,
     fine-tuning) on the user's own GPU, one layer below `Builds/`
     in the stack. Protocol: `GPU Lab/CLAUDE.md`.
   - `Job Search/` — operational tracking (applications, networking,
     resume positioning), not a testing/quiz loop. Protocol:
     `Job Search/CLAUDE.md`.
   - `Sourcing/` — ongoing external research pipeline (interview
     accounts, job descriptions, resources), twice-weekly cloud
     routine feeding a staging inbox, triaged by hand into
     `Test FDE Role/interview-stories/`, knowledge-maps, and
     `AWESOME-FDE-RESOURCES.md`. Protocol: `Sourcing/CLAUDE.md`.
   - `PROGRESS.md` — root index, one row per chapter/category/problem-set/
     project with a one-line status.

## Global rule

Whenever a testing/quiz session updates any file inside `Test FDE Role/`,
`Test Book Knowledge/`, `Test Leet/`, `Builds/`, or `GPU Lab/`, also
update the corresponding row in `PROGRESS.md` with a short status line
(e.g. "3/6 categories passing", "4 questions, weak on X", "12/150
attempted", "2/5 projects built", "3/12 GPU experiments run"). Only
touch the affected row — don't rewrite the whole file. `Job Search/` and `Sourcing/` follow the same rule but on
real-world events (application sent, status change, referral; or
scrape run, item triaged) rather than test sessions — see
`Job Search/CLAUDE.md` and `Sourcing/CLAUDE.md`.

## New chapter setup

When the user starts a new book chapter not yet under `Test Book Knowledge/`,
create `Test Book Knowledge/<Book>-Chapter-N-<Title>/` with the four
book-chapter-template files, copying the structure from
`Test Book Knowledge/Designing-Data-Intensive-Applications-Chapter-1-Trade-Offs-in-Data-Systems-Architecture/`
(currently an empty skeleton) or from
`Test Book Knowledge/AI-Engineering-Chapter-1-Introduction/` (currently populated,
for reference on what a filled-in `source.md`/`knowledge-map.md` looks
like). Then add a row for it in `PROGRESS.md`.
