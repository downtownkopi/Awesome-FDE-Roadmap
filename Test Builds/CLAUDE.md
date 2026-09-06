# Test Builds — Hands-On Project Protocol

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

## Starting a new project

Trigger: user names a project from `knowledge-map.md`, or asks "give
me something to build" / "I want hands-on agent experience."

1. Look up or add the project in `knowledge-map.md`.
2. Create `projects/<slug>/brief.md` (what to build, scope, which
   concept IDs it targets) and an empty `retrospective.md` template.
3. Point the user at the folder. Building itself happens outside this
   repo's scope (their own dev environment) — this repo only tracks
   intent and outcome.

## After a project (or a milestone within a long one)

1. Fill in `retrospective.md`: what was built, what broke and why,
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

Refresh the Test Builds row in root `PROGRESS.md`, e.g. "2/5 projects
built, 1 extractable interview story logged."
