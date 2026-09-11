# Builds — Hands-On Project Protocol

Everything in `Test FDE Role/` is conceptual (Q&A, live scenarios,
mock interviews) or a timed one-shot artifact (`take-home-practice/`).
This folder is different: real, from-scratch small projects built with
the actual OpenAI/Anthropic/Cohere stacks (see
`../Test FDE Role/anthropic-openai-stack.md`,
`../Test FDE Role/cohere-stack.md`), built over multiple sessions if
needed, whose purpose is generating **real experience to speak from** —
concretely, the "an agent that failed in an interesting way, and what
you changed" story that Anthropic's technical-conversation round
explicitly wants (`../Test FDE Role/technical-depth/knowledge-map.md`
AI21), and genuine "production LLM/RAG engineering craft" depth (T9)
instead of secondhand knowledge.

Files:
- `knowledge-map.md` — the project list (what to build, why it maps to
  a specific interview-tested skill).
- `knowledge-tracker.md` — one entry per project: what was built, what
  broke, what changed, the extractable story.
- `projects/<slug>/` — one folder per project actually started (not
  pre-generated), created on demand:
  - `brief.md` — what to build, why, and which knowledge-map.md
    concepts it exercises.
  - `retrospective.md` — filled in after building: what worked, what
    failed and how, what you'd do differently. This is the source
    material for interview stories, not the code itself — the actual
    project code can live in its own separate repo/folder outside this
    tracker; only the brief and retrospective live here.

## Collaboration rules (apply to every project in this folder)

Top priority: the user must *understand* what ships, not just have
working code — this is interview prep, and design choices get
defended live. Speed matters (racing against time), but never at the
cost of understanding. When those two conflict, understanding wins.

1. **Propose architecture first, don't just generate code.** Before
   writing files, give 2-3 viable approaches with tradeoffs (e.g.
   "hybrid search vs. pure vector," "ReAct loop vs. explicit state
   machine"). User chooses or discusses, then build.
2. **Scaffold freely, but flag the core/commodity split.** Call out
   per project which parts are commodity (auth, DB setup, boilerplate
   UI, config — build fast, no discussion) vs. core/differentiating
   logic (retrieval strategy, tool-calling loop, error recovery,
   orchestration — slow down, explain design before implementing).
3. **Never let the user "study and reproduce blindly."** Don't build
   end-to-end and hand it over. Walk through it in steps the user can
   follow and verify understanding of — they must be able to explain
   and defend it live, not just show a repo.
4. **After finishing a project's core logic, write `NOTES.md`** in
   that project's folder: what was built, why this architecture over
   alternatives, what broke and how it was fixed, open tradeoffs to be
   ready to discuss. (Distinct from `retrospective.md`, which is the
   knowledge-tracker source; `NOTES.md` is the interview-defense doc.)
5. **Don't reinvent commodity infrastructure.** Freely use
   libraries/templates for auth, deployment, UI chrome, standard DB
   setups — no need to hand-roll or ask permission for these.
6. **No pacing/timelines.** Never propose day-by-day or week-by-week
   schedules for a project or learning plan.
7. **When starting a new project, ask the core learning objective
   first**, briefly — e.g. "for this MCP server, is the focus the
   protocol/tool-schema design, or the downstream agent that consumes
   it?" — so the depth-vs-speed split in rule 2 applies to the right
   part.

## Starting a new project

Trigger: user names a project from `knowledge-map.md`, or asks "give
me something to build" / "I want hands-on agent experience."

1. Look up or add the project in `knowledge-map.md`.
2. Ask the core learning objective (collaboration rule 7).
3. Propose 2-3 architecture options with tradeoffs (collaboration rule
   1); wait for the user's choice.
4. Create `projects/<slug>/brief.md` (what to build, scope, which
   concept IDs it targets, chosen architecture + why) and an empty
   `retrospective.md` template.
5. Point the user at the folder, and build alongside them per the
   collaboration rules — not a finished handoff.

## After a project (or a milestone within a long one)

1. Write `NOTES.md` (collaboration rule 4) once core logic is done.
   Fill in `retrospective.md`: what was built, what broke and why,
   what changed as a result, what would be done differently.
2. Append a full entry to `knowledge-tracker.md`: Date, Project,
   Concepts exercised, What Broke, What Changed, Extractable Story
   (yes/no + one-line summary), Memory Priority.
3. If a genuine "agent failed in an interesting way" story emerged,
   suggest logging a polished version in
   `../Test FDE Role/behavioral/star-stories.md` (B6 prompts) and
   noting it against AI21 in
   `../Test FDE Role/technical-depth/knowledge-tracker.md`.
4. Update `Overall Progress` in `knowledge-tracker.md`.

## After updating

Refresh the Builds row in root `PROGRESS.md`, e.g. "2/5 projects
built, 1 extractable interview story logged."
