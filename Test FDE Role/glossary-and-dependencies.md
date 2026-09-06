---
title: "Glossary & Cross-Category Dependencies"
status: living document — extracted from the old root knowledge-map.md when the 6 categories were split into subfolders (2026-09-06)
note: >
  Terms and dependency relationships here span more than one category
  subfolder, so they live at root rather than being force-fit into one.
  Category-local glossary terms and dependencies live inside each
  category's own knowledge-map.md instead.
---

# Glossary / Definitions (must be able to state precisely)

- **The Delta** — see `customer-facing-judgment/knowledge-map.md` CJ4.
- **Productized Consulting** — the philosophy of solving a client's unique problem through code that can eventually be abstracted back into the core product's features.
- **Embedded Engineering** — see `behavioral/knowledge-map.md` B2.
- **Last-Mile Integration** — the complex work of stitching a modern SaaS/AI platform into legacy, often undocumented, "messy" enterprise systems.
- **VPC Service Controls (VPC SC)** — see `system-design/knowledge-map.md` S5.
- **Hardening** — the process of moving a prototype from "it works on my machine" to "it meets SOC2/HIPAA security standards," including encryption at rest/transit and least-privilege IAM roles.
- **Shadow IT** — unauthorized tools or "rogue" databases used by client employees; often where the cleanest and most useful data actually lives.
- **System of Record (SoR)** — see `problem-decomposition/knowledge-map.md` D3.
- **Agent2Agent (A2A) Protocol**, **Workflow Agents** (`SequentialAgent`/`ParallelAgent`/`LoopAgent`) — see `system-design/knowledge-map.md` S8.
- **Grounding** — connecting an LLM to "ground truth" data (via RAG or search) to ensure factual, cite-able responses.
- **Pairwise Evaluation** — see `system-design/knowledge-map.md` S11.
- **Faithfulness (RAGAS metric)** — see `technical-depth/knowledge-map.md` AI12.
- **SOW**, **MSA**, **Cost of Inaction (CoI)**, **UAT** — see `business-judgment/knowledge-map.md` BJ3, BJ5, BJ6.
- **Day 2 Operations** — everything that happens after the FDE leaves: monitoring, retraining, training the client's internal "Run Team." Ties to `system-design/knowledge-map.md` S12 and `business-judgment/knowledge-map.md` BJ6.
- **ATO**, **DoD Impact Levels (IL2/IL4/IL5/IL6)**, **FedRAMP High vs. Moderate**, **STIGs**, **ITAR/EAR**, **CMMC 2.0** — see `system-design/knowledge-map.md` S14.

# Cross-Category Dependencies (must understand X before Y)

- GCP primitives (`system-design/knowledge-map.md` S1-S6) → before the C.A.S.E. framework's "Architect" step (`problem-decomposition/knowledge-map.md` D1) can be answered concretely rather than abstractly.
- Compliance/accreditation stack (`system-design/knowledge-map.md` S14) → before the Discovery Checklist's Data & Security bucket (`customer-facing-judgment/knowledge-map.md` CJ1) makes sense for regulated clients.
- The Delta Concept (`customer-facing-judgment/knowledge-map.md` CJ4) → before "Solve" in C.A.S.E. (`problem-decomposition/knowledge-map.md` D1) and the Site Survey artifact's "Product Gap" section (CJ7) are fully meaningful — they're the same idea applied at different stages.
- Use-case risk tiers (`business-judgment/knowledge-map.md` BJ2) → before 80/20 Value Scoping (BJ1) — you can't prioritize features without first knowing why the project matters at all.
- MECE (`problem-decomposition/knowledge-map.md` D2) → useful before the Discovery Checklist (`customer-facing-judgment/knowledge-map.md` CJ1), since the checklist is itself a MECE breakdown of what to verify pre-build.

*(Dependencies entirely within one category live in that category's own knowledge-map.md instead — e.g. AI1-AI5 → AI9-AI11 in technical-depth/knowledge-map.md.)*
