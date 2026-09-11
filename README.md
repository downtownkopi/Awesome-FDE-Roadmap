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

Real FDE loops (per `Test FDE Role/findings.md`) grade roughly three
axes at once: **technical depth**, **customer-facing judgment**, and
**reasoning out loud through ambiguity** — the "T-shaped" bar (deep in
one core technical area, broad across several, strong customer-facing
floor). No single folder below covers all three; each is a different
layer of the same candidate, from raw foundations up to the actual
graded performance.

| Folder | What it tracks | What it's testing for | How it completes the picture |
|---|---|---|---|
| [`Test FDE Role/`](Test%20FDE%20Role/) | Interview-prep Q&A/scenario testing across 6 categories (technical depth, system design, problem decomposition, customer-facing judgment, behavioral, business judgment). Target: 8/10 in all 6. | Direct rehearsal of the actual graded rounds — questions and scenarios are calibrated against real candidate interview accounts (`interview-stories/`), not generic prep. Tests whether you can perform under the *specific* rubric graders use: D4's four decomposition criteria, S20's eval-harness-first framing, a values-round answer with real stakes, a discovery call with no pitching. | This is the only folder that tests all three axes at once, under interview-shaped conditions (scored, scenario-based, company-calibrated). Every other folder feeds *into* this one — book knowledge and builds are raw material; this is where it gets pressure-tested in the actual shape the interview takes. |
| [`Test Book Knowledge/`](Test%20Book%20Knowledge/) | Per-chapter testing on *AI Engineering* (Chip Huyen) and *Designing Data-Intensive Applications* (Kleppmann). | Whether the underlying systems concepts are actually understood — not memorized talking points. AI Engineering maps to the AI-series concepts (RAG internals, eval design, agent/tool-use) tested in technical-depth and system-design; DDIA maps to the T-series (data modeling, storage, distributed systems) that gives the technical-depth "core area" its floor. | Supplies the conceptual depth axis needs. Interview graders explicitly fail "I just call the API" answers (OpenAI) and reward systems-level reasoning under a live decomposition or design round — that only holds up if the concepts underneath are genuinely internalized, not pattern-matched from a prep sheet. |
| [`Test Leet/`](Test%20Leet/) | NeetCode 150 coding practice, 3-pass mastery method (attempt → study → spaced-recall). | Baseline coding fluency under time pressure, with durable recall (3-pass method tests retention, not just one-time solve-and-forget). Lower-weighted at Anthropic specifically ("coding is a gate, not the differentiator," pragmatic fluency over algorithmic cleverness) but still a hard gate at Palantir (CodePair round) and OpenAI's technical screen. | The floor-level check. Customer-facing judgment and architecture skill don't matter if a phone-screen coding round filters you out first — this folder exists so that gate is a non-issue, freeing every other round to actually differentiate on the axes that matter more. |
| [`Builds/`](Builds/) | Real hands-on project builds (MCP servers, RAG eval harnesses, agents, production guardrails) — for genuine interview stories, not just conceptual knowledge. | Whether concepts survive contact with a real, broken system. Directly generates the concrete "agent failed in an interesting way, and what you changed" story Anthropic's technical-conversation round explicitly asks for (AI21) — a real bug trace (see P4's 5-bug retry-loop debug) beats a rehearsed answer every time. | Converts Book Knowledge's concepts and Leet's raw coding fluency into evidence — specific numbers, real tradeoffs, real failures — which is what separates a generic "chatbot over documents" answer from one a grader actually believes. Feeds directly back into `Test FDE Role/`'s technical-depth and system-design rounds as source material. |
| [`GPU Lab/`](GPU%20Lab/) | Local ML hands-on (inference, quantization, fine-tuning) on the user's own GPU — one layer below `Builds/`. | Understanding what happens *underneath* the API call — quantization tradeoffs, fine-tuning mechanics, inference optimization. Relevant wherever a deployment can't just be "call the hosted API": air-gapped/on-prem architecture, latency-constrained inference, offline model-weight handling (`system-design/knowledge-map.md` S13, S15-S17, T7-T8). | Extends the technical-depth floor one layer deeper than `Builds/` — from orchestrating APIs to understanding the model/infra layer those APIs sit on. This is the depth that distinguishes "I built an agent" from "I understand why it's slow and what quantizing the model would trade off." |
| [`Job Search/`](Job%20Search/) | Applications, networking, resume positioning — operational tracking, not a testing loop. | Nothing about competency — this is the delivery mechanism. Tracks whether prep is actually turning into interview loops (applications sent, referrals pursued, resume framing tied to the evidence the other folders generate). | Without this, every other folder is prep with nowhere to go. It's also where `Builds/`'s extractable stories and `Test FDE Role/`'s STAR bank actually get put to use — resume positioning and pitch framing draw directly on both. |

Each folder has its own `CLAUDE.md` protocol governing how sessions in
that folder work. Root [`CLAUDE.md`](CLAUDE.md) has the full breakdown
and the cross-folder update rule (any testing session touching a
folder above also updates that folder's row in `PROGRESS.md`).

## Source books

Local PDFs backing `Test Book Knowledge/`:
- [`Book - AI Engineering - Building Applications with Foundational Models/`](Book%20-%20AI%20Engineering%20-%20Building%20Applications%20with%20Foundational%20Models/)
- [`Book - Designing Data-Intensive Applications/`](Book%20-%20Designing%20Data-Intensive%20Applications/)
