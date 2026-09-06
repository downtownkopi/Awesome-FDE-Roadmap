# Take-Home Project Practice — Protocol

OpenAI (~5hr build + video walkthrough) and Anthropic (3-4hr build)
both gate on a real shipped artifact, graded on production-readiness —
not a live Q&A round. Nothing else in `Test FDE Role/` practices this
artifact type, so it gets its own folder.

Files:
- `knowledge-map.md` — brief bank (company-style prompts) + the
  grading rubric each is judged against, sourced from
  `../interview-stories/`.
- `knowledge-tracker.md` — one entry per attempt: the brief, what was
  built, rubric scores, gaps, follow-up.

Trigger: user asks to practice a take-home / build a take-home project
/ "give me an OpenAI-style or Anthropic-style take-home brief."

## Per attempt

1. Pick a brief from `knowledge-map.md` (or a fresh one in the same
   style if the user wants variety). Give ONLY the brief — do not
   pre-explain the rubric.
2. Let the user build for real (in their own repo/environment — this
   folder tracks the brief and retrospective, not the code itself).
   Time-box it to match the real round (~5hrs OpenAI-style, 3-4hrs
   Anthropic-style) if the user wants a realistic drill.
3. When done, walk through it like the real round expects: ask the
   user to explain design decisions/tradeoffs (not narrate code
   line-by-line) — this mirrors OpenAI's video-walkthrough bar and
   Anthropic's "explain what you shipped and why" technical
   conversation.
4. Grade against the rubric in `knowledge-map.md`: error handling,
   graceful degradation, logging, ambiguity handling (assumptions
   stated vs. excessive clarification-seeking), tradeoffs explained.
   Score 1-10 per `../scoreboard.md`'s rubric — this feeds Category 1
   (Technical Depth) and Category 6 (BJ8: demo vs. production-system
   distinction).
5. Append a full entry to `knowledge-tracker.md`: Date, Brief used,
   Time taken, What was built, Rubric scores (per criterion), What Was
   Missed, Model Answer / what a strong version would additionally do,
   Score, Memory Priority, Follow-up Required.
6. If this attempt produced a genuine "agent failed in an interesting
   way" moment, flag it — that's exactly the kind of story
   `../technical-depth/knowledge-map.md` AI21 and Anthropic's
   technical-conversation round want. Suggest logging it in
   `../behavioral/star-stories.md` or `../../Test Builds/` as source
   material.

## After updating

Refresh the "take-home practice" line in root `PROGRESS.md`'s Test FDE
Role row.
