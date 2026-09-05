# Interview Stories

Raw-ish captures of real FDE interview accounts (candidate write-ups,
blog posts, forum threads). One file per story, named
`<company>-fde-<source-site>.md`.

## Purpose

`findings.md` holds the distilled, cross-source process summary.
`knowledge-map.md` holds the tested-concept list derived from it. This
folder is the evidence behind both: when a story here reveals a detail
findings.md doesn't have (a round `findings.md` under-weights, a
question pattern it's missing, a company-specific quirk), that's the
signal to update `findings.md` and `knowledge-map.md` — and this folder
is where you go back to check "are we actually still calibrated to what
real loops look like."

## When to add a story

Whenever the user shares a new interview-process URL/account for an FDE
role (any company). One file per story, keep the source URL and capture
date in frontmatter.

## When to use a story

- Before/during a testing session, if a scoreboard category has been
  stuck or drifting from what real loops test, skim the relevant
  story/stories for recalibration — do question difficulty and framing
  still match what candidates actually report?
- When adding/reweighting concepts in `knowledge-map.md`, cite which
  story surfaced the concept.

## Index

| File | Company | Notes |
|---|---|---|
| [openai-fde-gaijineer.md](openai-fde-gaijineer.md) | OpenAI | Take-home-first loop (~5hr + video), customer-first solution-design opener, "how do you know it's working" eval differentiator |
| [cohere-fde-gaijineer.md](cohere-fde-gaijineer.md) | Cohere | Live incident-style debugging round (diagram + "requests are failing," no hints), no LeetCode/coding round, VP round wants customer-pain→product-change stories |
| [anthropic-fde-compiled.md](anthropic-fde-compiled.md) | Anthropic | Applied AI Engineer loop; customer-conversation simulation filters ~60% of coding-round passers; values round weighted equal to technical rounds; MCP-based live-Claude technical scenario. Compiled from search-engine summaries (source pages + Reddit blocked in this environment) — lower confidence than the OpenAI/Cohere files. |
| [xai-fde-compiled.md](xai-fde-compiled.md) | xAI | Fastest loop found (~1wk full technical loop); no behavioral/values round at all; "Exceptional Work Statement" + defense-grilling round substitutes for it. Compiled from search-engine summaries (source pages + Reddit blocked in this environment) — lower confidence than the OpenAI/Cohere files; FDE-specific vs. general-SWE process not clearly separated in sources found. |
