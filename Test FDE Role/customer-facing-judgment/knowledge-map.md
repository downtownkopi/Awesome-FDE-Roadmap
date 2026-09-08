---
title: "Knowledge Map — Category 4: Customer-Facing Judgment"
sources: "AWESOME-FDE-RESOURCES.md, findings.md, interview-stories/"
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  Category 4 of ../scoreboard.md's 6.
---

# Customer-Facing Judgment

- CJ1. **The Forward Deployment Discovery Checklist** — three buckets: Administrative & Political (the Champion, the Blocker, the Success Metric), Data & Security (classification, streaming vs. batch, compliance needs), Infrastructure/GCP Lens (access roles, connectivity, GPU quota).
- CJ2. **The Trusted Advisor formula** — Trust = (Credibility + Reliability + Intimacy) / Self-Orientation; an FDE must lower self-orientation to focus on the client's win.
- CJ3. **The Pyramid Principle / BLUF** — Bottom-Line Up Front: give the conclusion to an executive before the supporting technical detail.
- CJ4. **The Delta Concept** — focus on the specific bridge between what the product does out-of-the-box and what the client needs to succeed.
- CJ5. **Discovery red flags** — "data will be ready in 2 weeks" (it won't), "we don't need a PM on our side" (project loses direction), "can we just run this on-prem for now?" (signals deep distrust of cloud that will block the project later) — and why each is an early warning, not a minor detail.
- CJ6. *(from README interview Q&A)* Handling a hostile/resistant stakeholder — reframe as a trust problem, not a technical one; understand the fear (e.g. job displacement); give them ownership (co-author the deployment scripts). Drill this live via CS5 in `../problem-decomposition/knowledge-map.md`.
- CJ7. **The Site Survey (Discovery Report) artifact** — what it captures: data landscape/ground truth, technical & security constraints, the Delta/product gap, the Week-2 quick win.
- CJ8. *(from interview-stories/openai-fde-gaijineer.md)* **Customer-first solution-design opener** — OpenAI's Solution Design round: before any architecture, ask "Who uses this? What decisions do they make? What does success look like?" Skipping this and jumping to tech triggers an explicit interviewer reset — the single most direct fail signal in that round.
- CJ9. *(from interview-stories/anthropic-fde-multisource.md)* **Discovery-only customer-conversation simulation** — Anthropic's signature round: a ~45 min simulated enterprise discovery call. Pass = layered questions about constraints/workflows, note-taking, zero pitching. Fail = opening a code editor or leading with a demo. Filters ~60% of candidates who already passed the coding stages — the single highest-leverage round in the whole Anthropic loop.

# Dependencies (must understand X before Y)

- Compliance/accreditation stack (`../system-design/knowledge-map.md` S14) → before the Discovery Checklist's Data & Security bucket (CJ1) makes sense for regulated clients.
- The Delta Concept (CJ4) → before "Solve" in C.A.S.E. (`../problem-decomposition/knowledge-map.md` D1) and the Site Survey artifact's "Product Gap" section (CJ7) are fully meaningful — they're the same idea applied at different stages.
- MECE (`../problem-decomposition/knowledge-map.md` D2) → useful before the Discovery Checklist (CJ1), since the checklist is itself a MECE breakdown of what to verify pre-build.

---
# Importance Legend
All items Critical-to-High for role/interview readiness; scores here
roll up into `../scoreboard.md`'s Category 4 row.
