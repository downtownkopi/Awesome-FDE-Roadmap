---
title: "Knowledge Map — Category 6: Business / Product Judgment"
sources: "AWESOME-FDE-RESOURCES.md, findings.md, interview-stories/"
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  Category 6 of ../scoreboard.md's 6.
---

# Business / Product Judgment

- BJ1. **80/20 Value Scoping** — identify the 20% of features that solve 80% of the client's pain; avoid "Gold-Plating" (building complexity nobody asked for).
- BJ2. *(from findings.md)* Use-case risk tiers for prioritization — existential risk (competitors' AI could make you obsolete) > profit/productivity opportunity > "don't want to be left behind" hedge.
- BJ3. **SOW vs. MSA** — SOW (Statement of Work) is the scope-creep shield defining exactly where the job ends; MSA (Master Services Agreement) is the higher-level legal relationship the SOW sits under.
- BJ4. **MVA (Minimum Viable Architecture)** — the simplest GCP stack (e.g. Cloud Run + BigQuery) that proves value in under 30 days; explicitly anti-over-engineering.
- BJ5. **Cost of Inaction (CoI)** — quantifying what the client loses every day they don't deploy, used to drive prioritization/urgency.
- BJ6. **UAT as the real definition of done** — if client employees don't "accept" the tool in User Acceptance Testing, the project isn't done regardless of code quality.
- BJ7. **The Case Study Rubric (Junior vs. Senior signal)** — Junior answers focus only on the code/script; Senior answers additionally cover security, cost-optimization (GCP FinOps), and stakeholder buy-in.
- BJ8. *(from interview-stories/openai-fde-gaijineer.md)* **Demo vs. production-business-system distinction** — OpenAI's take-home is graded on error handling, graceful degradation, and logging, not a working demo. Explicit fail mode: treating a take-home/prototype like a one-off script instead of "the messiness" a real production deployment requires.

# Dependencies (must understand X before Y)

- Use-case risk tiers (BJ2) → before 80/20 Value Scoping (BJ1) — you can't prioritize features without first knowing why the project matters at all.

---
# Importance Legend
All items Critical-to-High for role/interview readiness; scores here
roll up into `../scoreboard.md`'s Category 6 row.
