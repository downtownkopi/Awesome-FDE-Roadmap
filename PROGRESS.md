# Progress Overview

Personal tracker for FDE interview prep + book study. Not part of the
public README (that's the awesome-list). Updated as sessions happen.

Two file templates in use:

- **Interview-prep template** (`FDE-role/`): `findings.md` (research),
  `question-log.md` (per-question record), `scoreboard.md` (category
  scores + session log + pass/fail rule).
- **Book-chapter template** (`knowledge/<Book>-Chapter-N-<Title>/`):
  `source.md` (condensed chapter capture), `knowledge-map.md` (target
  concepts for question generation), `knowledge-tracker.md` (mastery
  state, gaps, question log, misconceptions), `session-log.md` (session
  history).

---

## 1. FDE Role — Interview Prep

Folder: [`FDE-role/`](FDE-role/)

| File | Purpose |
|---|---|
| [findings.md](FDE-role/findings.md) | Research on FDE role/interview process |
| [question-log.md](FDE-role/question-log.md) | Log of drilled questions |
| [scoreboard.md](FDE-role/scoreboard.md) | 6-category score tracker (target: 8/10 in all) |

**Status:** Not started. All 6 categories (technical depth, system design,
problem decomposition, customer-facing judgment, behavioral, business
judgment) at 0 attempts.

---

## 2. AI Engineering: Building Applications with Foundation Models (Chip Huyen)

Source PDFs: [`AI Engineering - Building Applications with Foundational Models/`](AI%20Engineering%20-%20Building%20Applications%20with%20Foundational%20Models/)
Tracking: [`knowledge/`](knowledge/)

| # | Chapter | Tracking folder | Status |
|---|---|---|---|
| 1 | Introduction | [AI-Engineering-Chapter-1-Introduction](knowledge/AI-Engineering-Chapter-1-Introduction/) | In progress — 1 question attempted, weak on self-supervision (C5) |
| 2 | Understanding Foundation Models | — not started | Not started |
| 3 | Evaluation Methodology | — not started | Not started |
| 4 | Evaluate AI Systems | — not started | Not started |
| 5 | Prompt Engineering | — not started | Not started |
| 6 | RAG and Agents | — not started | Not started |
| 7 | Finetuning | — not started | Not started |
| 8 | Dataset Engineering | — not started | Not started |
| 9 | Inference Optimization | — not started | Not started |
| 10 | AI Engineering Architecture and User Feedback | — not started | Not started |

---

## 3. Designing Data-Intensive Applications, 2nd Ed. (Martin Kleppmann)

Source PDFs: [`Designing Data-Intensive Applications/`](Designing%20Data-Intensive%20Applications/)
Tracking: [`knowledge/`](knowledge/)

| # | Chapter | Tracking folder | Status |
|---|---|---|---|
| 1 | Trade-Offs in Data Systems Architecture | [Designing-Data-Intensive-Applications-Chapter-1-Trade-Offs-in-Data-Systems-Architecture](knowledge/Designing-Data-Intensive-Applications-Chapter-1-Trade-Offs-in-Data-Systems-Architecture/) | Scaffolded, not started |
| 2 | Defining Nonfunctional Requirements | — not started | Not started |
| 3 | Data Models and Query Languages | — not started | Not started |
| 4 | Storage and Retrieval | — not started | Not started |
| 5 | Encoding and Evolution | — not started | Not started |
| 6 | Replication | — not started | Not started |
| 7 | Sharding | — not started | Not started |
| 8 | Transactions | — not started | Not started |
| 9 | The Trouble with Distributed Systems | — not started | Not started |
| 10 | Consistency and Consensus | — not started | Not started |
| 11 | Batch Processing | — not started | Not started |
| 12 | Stream Processing | — not started | Not started |
| 13 | A Philosophy of Streaming Systems | — not started | Not started |
| 14 | Doing the Right Thing | — not started | Not started |

---

## Maintenance note

When starting a new chapter: create
`knowledge/<Book>-Chapter-N-<Title>/` with the four book-chapter-template
files (copy the DDIA Ch.1 skeleton), fill `source.md` first, then
`knowledge-map.md`, then update this table's status column.
