---
title: "Knowledge Map — FDE Role"
sources: "README.md (curriculum/glossary — what's needed of an FDE), findings.md (interview process research), interview-stories/ (real candidate accounts)"
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  This describes what should be known to perform as an FDE and to pass
  FDE interviews. Not shown to the learner by default — used internally
  to drive question selection and coverage tracking. Concepts are
  grouped under the same 6 categories used in scoreboard.md so question
  selection can target weak categories directly. See README.md for full
  detail behind each item (source of truth for curriculum content); see
  findings.md for interview-process detail.
---

# Category 1 — Technical Depth (coding/Python/SQL, data pipelines/architecture)

- T1. **Advanced SQL & query tuning** — Window Functions, Recursive CTEs, query optimization; reading an EXPLAIN plan to diagnose why a query scans far more data than needed.
- T2. **Data modeling for reality** — Star Schema vs. One Big Table (OBT); designing for write-performance vs. user-readability tradeoffs.
- T3. **Medallion Architecture** — Bronze (raw, immutable landing), Silver (filtered/joined/cleaned, "single source of truth"), Gold (business-ready aggregates powering UI/AI).
- T4. **Distributed computing** — Spark/Ray partitioning; debugging Data Skew and OOM (Out of Memory) errors on datasets exceeding local memory.
- T5. **Data quality & observability** — "circuit breakers" for data: alert before a broken upstream feed reaches a client-facing dashboard.
- T6. **The modern FDE tool stack** — Python/Go/SQL (languages), dbt/DuckDB/Spark (data), Terraform/Helm/GCP (cloud), Prometheus/Grafana/Loki (observability) — what each is for and when reached for.
- T7. **Local/offline inference runtimes** — Ollama, vLLM, llama.cpp, TensorRT-LLM for running quantized open-weight models on constrained hardware (CPU-only or single-GPU).
- T8. **Safe model-weight handling** — `safetensors` (not pickle — pickle is an RCE risk) + SHA-256 verification + signed provenance records (source, license, training-data attestation) for offline-delivered weights.
- T9. *(from interview-stories/openai-fde-gaijineer.md)* **Production LLM/RAG engineering craft** — embedding selection, chunking strategy, retrieval method choice, reranking, API rate limiting, retry patterns; prompt engineering treated as an engineering discipline, not just wording. OpenAI technical-screen/deep-dive bar: explain *why*, not just *what*, and reason about what happens under the hood, not "I just call the API."

# Category 2 — System Design (end-to-end architecture, GCP-centric)

- S1. **GCP VPC mastery** — Shared VPCs (multi-team single network), Cloud Interconnect/Cloud VPN (bridging on-prem to GCP), Identity-Aware Proxy (zero-trust access without a VPN).
- S2. **GKE as the Kubernetes standard** — Autopilot vs. Standard (control vs. operational ease); Workload Identity (GKE service accounts acting as IAM accounts, no JSON keys); Private Clusters (no public IPs).
- S3. **BigQuery data architecture** — Clustering vs. Partitioning tradeoffs for petabyte-scale client data.
- S4. **Serverless event-driven pipelines** — Cloud Functions/Cloud Run for lightweight processing; Pub/Sub for real-time streaming "glue" between client systems and platform.
- S5. **VPC Service Controls (VPC SC)** — security perimeter around Google-managed services to prevent data exfiltration; mandatory in Finance/Gov work.
- S6. **Infrastructure as Code (Terraform)** — automating the full FDE environment (GKE cluster, BigQuery dataset, IAM policy) reproducibly.
- S7. **The Enterprise RAG Blueprint (4 steps)** — Ingestion (LlamaParse, complex PDFs/tables) → Grounding (Agent Search, managed semantic retrieval) → Vector Storage (Vector Search, high-scale indexing) → Hybrid Search (semantic + BM25 keyword).
- S8. **Multi-Agent Orchestration (ADK)** — hierarchical composition (Manager delegating to Researcher/Coder agents); Agent2Agent (A2A) protocol for cross-agent discovery/communication; model-agnostic via LiteLLM; deployed via Agent Runtime.
- S9. **Two-loop LLM evaluation framework** — Inner Loop (`adk eval`, fast dev-time debugging against golden datasets) vs. Outer Loop (Agent Platform Evals, scalable/automated production evaluation for CI/CD).
- S10. **Pointwise evaluation / the RAG Triad** — Groundedness (response strictly follows retrieved context), Fulfillment (followed system-prompt instructions), Summarization & Coherence (linguistic quality/density).
- S11. **Pairwise Evaluation** — model-as-judge approach (successor to AutoSxS): a superior model compares Response A vs. B against a rubric, producing win rates + explanations.
- S12. **Model/agent monitoring** — "Day 2" ops: detecting Prediction Drift and Feature Attribution changes as client data evolves.
- S13. **Air-gapped/tactical-edge architecture** — offline package mirrors (PyPI/npm/APT), hardened container registries (Iron Bank, Harbor), image signing (Cosign) + admission control (Kyverno/OPA Gatekeeper), edge Kubernetes (K3s/MicroK8s/k0s), one-way data diodes + Cross-Domain Solutions (CDS) for classified boundary crossings.
- S14. **Compliance/accreditation stack that drives architecture** — ATO (Authority to Operate, via NIST RMF), DoD Impact Levels (IL2/IL4/IL5/IL6 → which cloud/enclave you're allowed to touch), FedRAMP High vs. Moderate (most GenAI is only Moderate — a hard blocker for defense workloads), STIGs (hardening checklists), ITAR/EAR (export control — can extend to model weights), CMMC 2.0 (DoD contractor cert, Level 2 = practical floor).
- S15. **Air-gap-specific failure modes** — clock drift (no NTP → TLS/Kerberos break), cert rotation without Let's Encrypt (need internal PKI), secrets management without Cloud KMS (Vault/SOPS), the "first boot" problem (day-1 config via signed sneakernet ISO).
- S16. **Low-latency + LLM architecture pattern** — two-tier design: fast deterministic model (e.g. XGBoost) for the sub-100ms decision path, async LLM agent for a deep-dive explanation delivered seconds later (the fraud-detection interview pattern).
- S17. **Emergency bulk-ingestion pattern** — physical transfer appliance for PB-scale on-prem→cloud moves when network bandwidth is the hard bottleneck.
- S18. *(from interview-stories/openai-fde-gaijineer.md)* **"Is it actually working?" — the AI-quality differentiator question** — OpenAI's signature deep-dive question. A single-metric answer fails; needs automated metrics + human evaluation + feedback loops combined. Ties directly to S9-S11 (eval framework, RAG Triad, Pairwise Eval) — this is where those get applied under interview pressure.
- S19. *(from interview-stories/cohere-fde-gaijineer.md)* **Hypothesis-driven live incident debugging** — Cohere's signature round: architecture diagram + "requests are failing, debug it," no hints. Must request specific logs/metrics/traces, narrate the leading hypothesis and *why*, and visibly pivot when evidence contradicts it. Fail mode: reciting a generic checklist (load balancer, database, cache) instead of evidence-driven narrowing. Distinct from D1 (C.A.S.E.) — this is live/reactive incident triage, not upfront scoping.

# Category 3 — Problem Decomposition (ambiguity)

- D1. **The C.A.S.E. framework** — Clarify (data volume, security, "definition of done") → Architect (data flow via GCP primitives) → Solve/the Delta (what's missing out-of-the-box, and the glue to build) → Evaluate (hallucination checks, performance monitoring).
- D2. **MECE principle** — Mutually Exclusive, Collectively Exhaustive; used to break a broad mandate (e.g. "AI Strategy") into non-overlapping technical tasks.
- D3. **The "Three Whys" diagnostic** — What is the System of Record? What is the Cost of Inaction? What does "Day 2" look like (who owns it after the FDE leaves)?
- D4. *(from findings.md)* What decomposition-round graders actually look for: clarifying questions first, clean sub-problem breakdown, prioritization (MVP vs. later), transparent tradeoffs (why X over Y, cost/risk) — narrated live, not solved silently.
- D5. *(from findings.md)* The single most common failure mode: jumping straight to a solution before asking clarifying questions.

# Category 4 — Customer-Facing Judgment

- CJ1. **The Forward Deployment Discovery Checklist** — three buckets: Administrative & Political (the Champion, the Blocker, the Success Metric), Data & Security (classification, streaming vs. batch, compliance needs), Infrastructure/GCP Lens (access roles, connectivity, GPU quota).
- CJ2. **The Trusted Advisor formula** — Trust = (Credibility + Reliability + Intimacy) / Self-Orientation; an FDE must lower self-orientation to focus on the client's win.
- CJ3. **The Pyramid Principle / BLUF** — Bottom-Line Up Front: give the conclusion to an executive before the supporting technical detail.
- CJ4. **The Delta Concept** — focus on the specific bridge between what the product does out-of-the-box and what the client needs to succeed.
- CJ5. **Discovery red flags** — "data will be ready in 2 weeks" (it won't), "we don't need a PM on our side" (project loses direction), "can we just run this on-prem for now?" (signals deep distrust of cloud that will block the project later) — and why each is an early warning, not a minor detail.
- CJ6. *(from README interview Q&A)* Handling a hostile/resistant stakeholder — reframe as a trust problem, not a technical one; understand the fear (e.g. job displacement); give them ownership (co-author the deployment scripts).
- CJ7. **The Site Survey (Discovery Report) artifact** — what it captures: data landscape/ground truth, technical & security constraints, the Delta/product gap, the Week-2 quick win.
- CJ8. *(from interview-stories/openai-fde-gaijineer.md)* **Customer-first solution-design opener** — OpenAI's Solution Design round: before any architecture, ask "Who uses this? What decisions do they make? What does success look like?" Skipping this and jumping to tech triggers an explicit interviewer reset — the single most direct fail signal in that round.

# Category 5 — Behavioral (STAR / ownership)

- B1. *(from findings.md)* Core behavioral themes to have STAR stories ready for: solving a highly ambiguous problem with little direction; a client insisting on a suboptimal/wrong technical approach; a deployment that went badly; ownership of an outcome outside your direct scope ("radical ownership").
- B2. **Embedded Engineering** — unlike a consultant who "advises," an FDE is embedded: holds client credentials, sits in client Slack channels, ships code directly into the client's production environment.
- B3. **The FDE end-state ethos** — "the FDE's goal is to become obsolete at a client site" (the system is good enough it runs itself); frames ownership stories around building for handoff, not personal indispensability.
- B4. *(from interview-stories/openai-fde-gaijineer.md)* **Framing technical constraints/timelines to execs** — OpenAI hiring-manager round tests this directly: story-ready answer for how you told an executive a timeline was unrealistic, without just saying no.
- B5. *(from interview-stories/cohere-fde-gaijineer.md)* **Customer-pain-to-product-change story** — Cohere's VP round wants a specific story: spotted a recurring customer pain pattern, distinguished it from a one-off local symptom, and drove a durable fix through product/eng (not just patched the one customer). Prep 2-3 of these with quantified outcomes.

# Category 6 — Business / Product Judgment

- BJ1. **80/20 Value Scoping** — identify the 20% of features that solve 80% of the client's pain; avoid "Gold-Plating" (building complexity nobody asked for).
- BJ2. *(from findings.md)* Use-case risk tiers for prioritization — existential risk (competitors' AI could make you obsolete) > profit/productivity opportunity > "don't want to be left behind" hedge.
- BJ3. **SOW vs. MSA** — SOW (Statement of Work) is the scope-creep shield defining exactly where the job ends; MSA (Master Services Agreement) is the higher-level legal relationship the SOW sits under.
- BJ4. **MVA (Minimum Viable Architecture)** — the simplest GCP stack (e.g. Cloud Run + BigQuery) that proves value in under 30 days; explicitly anti-over-engineering.
- BJ5. **Cost of Inaction (CoI)** — quantifying what the client loses every day they don't deploy, used to drive prioritization/urgency.
- BJ6. **UAT as the real definition of done** — if client employees don't "accept" the tool in User Acceptance Testing, the project isn't done regardless of code quality.
- BJ7. **The Case Study Rubric (Junior vs. Senior signal)** — Junior answers focus only on the code/script; Senior answers additionally cover security, cost-optimization (GCP FinOps), and stakeholder buy-in.
- BJ8. *(from interview-stories/openai-fde-gaijineer.md)* **Demo vs. production-business-system distinction** — OpenAI's take-home is graded on error handling, graceful degradation, and logging, not a working demo. Explicit fail mode: treating a take-home/prototype like a one-off script instead of "the messiness" a real production deployment requires.

# Glossary / Definitions (must be able to state precisely)

- The Delta, Productized Consulting, Embedded Engineering, Last-Mile Integration
- VPC Service Controls (VPC SC), Hardening, Shadow IT, System of Record (SoR)
- Agent2Agent (A2A) Protocol, Workflow Agents (`SequentialAgent`/`ParallelAgent`/`LoopAgent`), Grounding, Pairwise Evaluation, Faithfulness (RAGAS metric)
- SOW, MSA, Cost of Inaction (CoI), UAT, Day 2 Operations
- ATO, DoD Impact Levels (IL2/IL4/IL5/IL6), FedRAMP High vs. Moderate, STIGs, ITAR/EAR, CMMC 2.0

# Dependencies (must understand X before Y)

- GCP primitives (S1–S6) → before the C.A.S.E. framework's "Architect" step (D1) can be answered concretely rather than abstractly.
- Compliance/accreditation stack (S14) → before the Discovery Checklist's Data & Security bucket (CJ1) makes sense for regulated clients.
- The Delta Concept (CJ4) → before "Solve" in C.A.S.E. (D1) and the Site Survey artifact's "Product Gap" section (CJ7) are fully meaningful — they're the same idea applied at different stages.
- Use-case risk tiers (BJ2) → before 80/20 Value Scoping (BJ1) — you can't prioritize features without first knowing why the project matters at all.
- MECE (D2) → useful before the Discovery Checklist (CJ1), since the checklist is itself a MECE breakdown of what to verify pre-build.

---
# Importance Legend
All items above are treated as Critical-to-High for interview/role readiness unless noted; scoreboard.md scores at the category level, not per-concept (see knowledge-tracker.md's Concept Mastery table for per-concept granularity).
