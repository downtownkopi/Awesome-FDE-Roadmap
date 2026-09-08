# Awesome-FDE-Roadmap

Personal prep tracker for a Forward Deployed Engineer (FDE) role
application (target companies: Anthropic, OpenAI, Cohere). Originally
forked as a public "awesome list" of FDE resources — that content
still lives here, moved to
[`AWESOME-FDE-RESOURCES.md`](AWESOME-FDE-RESOURCES.md), and still
serves as the curriculum/glossary reference for the tracker below. But
this repo's actual day-to-day purpose is the tracker: testing/quiz
loops, book study, coding practice, and hands-on builds, all logged
here so gaps are visible and prep stays honest.

**Live status:** [`PROGRESS.md`](PROGRESS.md) — one row per
chapter/category/problem-set/project, updated after every session.

## Structure

| Folder | What it tracks |
|---|---|
| [`Test FDE Role/`](Test%20FDE%20Role/) | Interview-prep Q&A/scenario testing across 6 categories (technical depth, system design, problem decomposition, customer-facing judgment, behavioral, business judgment). Target: 8/10 in all 6. |
| [`Test Book Knowledge/`](Test%20Book%20Knowledge/) | Per-chapter testing on *AI Engineering* (Chip Huyen) and *Designing Data-Intensive Applications* (Kleppmann). |
| [`Test Leet/`](Test%20Leet/) | NeetCode 150 coding practice, 3-pass mastery method (attempt → study → spaced-recall). |
| [`Test Builds/`](Test%20Builds/) | Real hands-on project builds (MCP servers, RAG eval harnesses, agents) — for genuine interview stories, not just conceptual knowledge. |
| [`GPU Lab/`](GPU%20Lab/) | Local ML hands-on (inference, quantization, fine-tuning) on the user's own GPU — one layer below `Test Builds/`. |
| [`Job Search/`](Job%20Search/) | Applications, networking, resume positioning — operational tracking, not a testing loop. |

Each folder has its own `CLAUDE.md` protocol governing how sessions in
that folder work. Root [`CLAUDE.md`](CLAUDE.md) has the full breakdown
and the cross-folder update rule (any testing session touching a
folder above also updates that folder's row in `PROGRESS.md`).

## Source books

Local PDFs backing `Test Book Knowledge/`:
- [`Book - AI Engineering - Building Applications with Foundational Models/`](Book%20-%20AI%20Engineering%20-%20Building%20Applications%20with%20Foundational%20Models/)
- [`Book - Designing Data-Intensive Applications/`](Book%20-%20Designing%20Data-Intensive%20Applications/)
