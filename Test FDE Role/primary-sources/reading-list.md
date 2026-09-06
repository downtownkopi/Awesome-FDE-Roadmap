---
title: "Primary-Source Reading List"
status: living document — add a doc whenever a company ships/updates one
note: >
  Everything else in Test FDE Role/ is secondhand (blog guides,
  candidate accounts). Anthropic's values round explicitly fails
  principles-only/rehearsed-sounding answers (behavioral/knowledge-map.md
  B6) — genuine engagement with the mission requires having actually
  read the primary policy documents, not a blog's summary of them.
  Same logic applies to OpenAI's safety commitments and Cohere's
  product positioning.
---

# Anthropic

- [ ] **Responsible Scaling Policy (current version)** —
  https://www.anthropic.com/responsible-scaling-policy
  Why: the recruiter screen and values round both probe RSP
  understanding directly (`../interview-stories/anthropic-fde-multisource.md`).
  Read for: what an AI Safety Level (ASL) actually gates, who decides
  when a threshold is crossed, what happens operationally when it is.
- [ ] **Anthropic's core views on AI safety / mission page** —
  (find current URL at anthropic.com — check for a "Our mission" or
  "Core views" page at time of reading)
  Why: grounds "why Anthropic" answers in the actual stated mission,
  not a paraphrase.

# OpenAI

- [ ] **OpenAI Safety Practices** —
  https://openai.com/index/openai-safety-update/
  Why: OpenAI's loop tests production AI/ML deployment judgment
  directly; knowing their own stated safety practices grounds
  "how do you know it's working" (S18) answers in the company's own
  framing, not just a generic eval framework.
- [ ] **Preparedness Framework** —
  https://openai.com/index/updating-our-preparedness-framework/
  Why: relevant if a solution-design or technical deep dive touches
  frontier-capability risk in a customer deployment context.
- [ ] **OpenAI Frontier Governance Framework** —
  https://openai.com/index/openai-frontier-governance-framework/
  Why: covers how safety practices intersect with regulatory
  requirements (EU AI Act, California's Transparency in Frontier AI
  Act) — relevant to enterprise/regulated-customer scenarios (ties to
  `../system-design/knowledge-map.md` S14 compliance stack, generalized
  beyond the DoD-specific detail there).

# Cohere

- [ ] **Cohere's enterprise AI / North platform page** —
  https://cohere.com/north
  Why: Cohere's interview weighting is on-prem/security-sensitive
  deployment judgment (`../interview-stories/cohere-fde-gaijineer.md`)
  — know how Cohere itself positions its enterprise/data-isolation
  story, not just the API surface (`../cohere-stack.md`).

# How to use this list

1. Actually read the document, not a summary of it.
2. Add 2-3 takeaways to `notes.md` in your own words — specifically,
   anything that would change or sharpen an answer already drafted in
   `../behavioral/star-stories.md` (especially the B6 values-round
   prompts).
3. Check the box above once read.
4. Re-check before a real loop with that company — these documents get
   updated (RSP has had multiple versions; Preparedness Framework was
   updated April 2025) and a stale read is a rehearsed-sounding-answer
   risk in disguise.
