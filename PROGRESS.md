# Progress Overview

Personal tracker for FDE interview prep + book study. Not part of the
public README (that's the awesome-list). Updated as sessions happen.

Two file templates in use, now structurally aligned:

- **Interview-prep template** (`Test FDE Role/`): `findings.md` (research,
  ~ `source.md`), `knowledge-map.md` (target concepts, sourced from
  README.md's curriculum/glossary + findings.md), `knowledge-tracker.md`
  (mastery state, gaps, full question log, misconceptions), `scoreboard.md`
  (fast-glance 6-category scores + session log + pass/fail rule — no
  `session-log.md` equivalent needed since scoreboard's own session table
  covers it).
- **Book-chapter template** (`Test Book Knowledge/<Book>-Chapter-N-<Title>/`):
  `source.md` (condensed chapter capture), `knowledge-map.md` (target
  concepts for question generation), `knowledge-tracker.md` (mastery
  state, gaps, question log, misconceptions), `session-log.md` (session
  history).
- **Coding-practice template** (`Test Leet/`): same shape as the
  book-chapter template minus `source.md` (each problem links straight
  to LeetCode instead of needing a condensed capture) —
  `knowledge-map.md` (full 150-problem checklist), `knowledge-tracker.md`
  (mastery state, gaps, question log, misconceptions), `session-log.md`
  (session history).

---

## 1. FDE Role — Interview Prep

Folder: [`Test FDE Role/`](Test%20FDE%20Role/)

| File | Purpose |
|---|---|
| [findings.md](Test%20FDE%20Role/findings.md) | Research on FDE role/interview process (target companies: OpenAI, Cohere, Anthropic) |
| [interview-stories/](Test%20FDE%20Role/interview-stories/) | Real candidate interview accounts per company (OpenAI, Cohere, Anthropic), used to calibrate question difficulty/framing |
| [scoreboard.md](Test%20FDE%20Role/scoreboard.md) | Fast-glance 6-category score tracker (target: 8/10 in all) |
| [anthropic-openai-stack.md](Test%20FDE%20Role/anthropic-openai-stack.md) | Curriculum reference: Claude API/Agent SDK/MCP + OpenAI Responses API/Agents SDK (README.md's curriculum is GCP-centric, doesn't cover this) |
| [glossary-and-dependencies.md](Test%20FDE%20Role/glossary-and-dependencies.md) | Glossary terms + dependencies that span more than one category |
| [technical-depth/](Test%20FDE%20Role/technical-depth/) | Category 1: generic coding/data + AI-specific (RAG, evals, agent/MCP) — knowledge-map.md + knowledge-tracker.md |
| [system-design/](Test%20FDE%20Role/system-design/) | Category 2: GCP-centric architecture — knowledge-map.md + knowledge-tracker.md |
| [problem-decomposition/](Test%20FDE%20Role/problem-decomposition/) | Category 3: concepts + scenario bank/attempt log — knowledge-map.md + knowledge-tracker.md |
| [customer-facing-judgment/](Test%20FDE%20Role/customer-facing-judgment/) | Category 4 — knowledge-map.md + knowledge-tracker.md |
| [behavioral/](Test%20FDE%20Role/behavioral/) | Category 5 + star-stories.md (personal STAR bank, empty, needs filling) |
| [business-judgment/](Test%20FDE%20Role/business-judgment/) | Category 6 — knowledge-map.md + knowledge-tracker.md |
| [cohere-stack.md](Test%20FDE%20Role/cohere-stack.md) | Curriculum reference: Cohere's Command models, Embed/Rerank, North — lower depth than the OpenAI/Anthropic doc since Cohere's loop isn't API-trivia-heavy |
| [architecture-presentation.md](Test%20FDE%20Role/architecture-presentation.md) | Scaffold for Cohere's Architecture Presentation round (real-project narrative) — empty, needs filling |
| [primary-sources/](Test%20FDE%20Role/primary-sources/) | Reading list + notes for primary policy docs (Anthropic RSP, OpenAI safety practices, Cohere positioning) — 0/4 read |
| [take-home-practice/](Test%20FDE%20Role/take-home-practice/) | Timed take-home-build reps (OpenAI ~5hr+video / Anthropic 3-4hr style briefs) — 0 attempted |
| [mock-loop/](Test%20FDE%20Role/mock-loop/) | Full chained multi-round simulation per company — 0 runs |

**Status:** Not started. All 6 categories (technical depth, system design,
problem decomposition, customer-facing judgment, behavioral, business
judgment) at 0 attempts. Anthropic added as a target company + interview
story 2026-09-06; `star-stories.md` needs personal stories filled in
before real loops. New pieces added 2026-09-06 (cohere-stack.md,
architecture-presentation.md, primary-sources/, take-home-practice/,
mock-loop/) — all at 0 attempts/empty, structural coverage only, no
reps yet.

---

## 2. AI Engineering: Building Applications with Foundation Models (Chip Huyen)

Source PDFs: [`Book - AI Engineering - Building Applications with Foundational Models/`](Book%20-%20AI%20Engineering%20-%20Building%20Applications%20with%20Foundational%20Models/)
Tracking: [`Test Book Knowledge/`](Test%20Book%20Knowledge/)

| # | Chapter | Tracking folder | Status |
|---|---|---|---|
| 1 | Introduction | [AI-Engineering-Chapter-1-Introduction](Test%20Book%20Knowledge/AI-Engineering-Chapter-1-Introduction/) | In progress — 1 question attempted, weak on self-supervision (C5) |
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

Source PDFs: [`Book - Designing Data-Intensive Applications/`](Book%20-%20Designing%20Data-Intensive%20Applications/)
Tracking: [`Test Book Knowledge/`](Test%20Book%20Knowledge/)

| # | Chapter | Tracking folder | Status |
|---|---|---|---|
| 1 | Trade-Offs in Data Systems Architecture | [Designing-Data-Intensive-Applications-Chapter-1-Trade-Offs-in-Data-Systems-Architecture](Test%20Book%20Knowledge/Designing-Data-Intensive-Applications-Chapter-1-Trade-Offs-in-Data-Systems-Architecture/) | 20/24 concepts Mastered/Strong, 0 Weak. 3 low-priority items remain (H2, H8 genuinely sticky after 2 attempts each; H7 one clause short) — flagged for spaced future checks, not urgent. 36 questions total. |
| 2 | Defining Nonfunctional Requirements | [Designing-Data-Intensive-Applications-Chapter-2-Defining-Nonfunctional-Requirements](Test%20Book%20Knowledge/Designing-Data-Intensive-Applications-Chapter-2-Defining-Nonfunctional-Requirements/) | 67 questions attempted (Q051 skipped/uncounted), all 32 concepts touched. 31 mastered (all 10 Critical + 21 High), 1 developing (H15 — small list-mixup, one more check away from mastered), 0 weak. |
| 3 | Data Models and Query Languages | source.md + knowledge-map.md ready (ASD-STE100) | Not started — 0 questions asked |
| 4 | Storage and Retrieval | [Designing-Data-Intensive-Applications-Chapter-4-Storage-and-Retrieval](Test%20Book%20Knowledge/Designing-Data-Intensive-Applications-Chapter-4-Storage-and-Retrieval/) | Not started — source.md and knowledge-map.md ready (16 Critical + 34 High concepts), 0 questions asked. |
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

## 4. NeetCode 150 — Coding Practice

Tracking: [`Test Leet/`](Test%20Leet/)

| File | Purpose |
|---|---|
| [knowledge-map.md](Test%20Leet/knowledge-map.md) | Full 150-problem checklist (18 categories), sourced from NeetCode's own repo data, each linked to LeetCode |
| [knowledge-tracker.md](Test%20Leet/knowledge-tracker.md) | Full problem-by-problem log, gaps, mastery, misconceptions |
| [session-log.md](Test%20Leet/session-log.md) | Session history |

**Status:** Not started. 0/150 attempted. Breakdown: 28 Easy, 101 Medium, 21 Hard across Arrays & Hashing (9), Two Pointers (5), Sliding Window (6), Stack (7), Binary Search (7), Linked List (11), Trees (15), Tries (3), Heap/Priority Queue (7), Backtracking (9), Graphs (13), Advanced Graphs (6), 1-D DP (12), 2-D DP (11), Greedy (8), Intervals (6), Math & Geometry (8), Bit Manipulation (7).

---

## 5. Hands-On Builds

Tracking: [`Test Builds/`](Test%20Builds/)

| File | Purpose |
|---|---|
| [knowledge-map.md](Test%20Builds/knowledge-map.md) | Project list (MCP server, RAG eval harness, sub-agent decomposition, guardrails, rate-limit hardening) — generates real interview stories, not just conceptual knowledge |
| [knowledge-tracker.md](Test%20Builds/knowledge-tracker.md) | Project-by-project log: what was built, what broke, extractable stories |

**Status:** Not started. 0/5 projects built, 0 extractable interview
stories logged.

---

## 6. GPU Lab — Local ML Hands-On (RTX 3070, 8GB VRAM)

Tracking: [`GPU Lab/`](GPU%20Lab/)

| File | Purpose |
|---|---|
| [knowledge-map.md](GPU%20Lab/knowledge-map.md) | 12-experiment list (env setup, local inference, quantization, QLoRA fine-tuning, local RAG, serving/throughput, local eval) |
| [knowledge-tracker.md](GPU%20Lab/knowledge-tracker.md) | Experiment-by-experiment log: config, VRAM used, what broke, extractable stories |

**Status:** Not started. 0/12 experiments run, 0 extractable interview
stories logged. One layer below `Test Builds/` in the stack (local
inference/training vs. API/agent-level).

---

## 7. Job Search — Applications & Networking

Tracking: [`Job Search/`](Job%20Search/)

| File | Purpose |
|---|---|
| [resume-notes.md](Job%20Search/resume-notes.md) | Per-company evidence/framing mapping for resume + opening pitch — empty, needs filling |
| [applications-tracker.md](Job%20Search/applications-tracker.md) | One row per application: company, role, status, referral, next action |
| [networking.md](Job%20Search/networking.md) | Target contacts, referral asks, follow-ups |

**Status:** Not started. 0 applications sent, 0 networking contacts logged.

---

## Maintenance note

When starting a new chapter: create
`Test Book Knowledge/<Book>-Chapter-N-<Title>/` with the four
book-chapter-template files (copy the DDIA Ch.1 skeleton), fill
`source.md` first, then `knowledge-map.md`, then update this table's
status column.
