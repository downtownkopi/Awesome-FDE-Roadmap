---
title: "Knowledge Map — Category 2: System Design"
sources: "AWESOME-FDE-RESOURCES.md, findings.md, interview-stories/"
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  Category 2 of ../scoreboard.md's 6. GCP-centric end-to-end
  architecture, plus the OpenAI/Cohere/Anthropic signature technical
  differentiator rounds.
---

# System Design (end-to-end architecture, GCP-centric)

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
- S19. *(from interview-stories/cohere-fde-gaijineer.md)* **Hypothesis-driven live incident debugging** — Cohere's signature round: architecture diagram + "requests are failing, debug it," no hints. Must request specific logs/metrics/traces, narrate the leading hypothesis and *why*, and visibly pivot when evidence contradicts it. Fail mode: reciting a generic checklist (load balancer, database, cache) instead of evidence-driven narrowing. Distinct from D1 (C.A.S.E., in ../problem-decomposition/knowledge-map.md) — this is live/reactive incident triage, not upfront scoping.
- S20. *(from interview-stories/anthropic-fde-multisource.md)* **Eval-harness-first system design** — Anthropic's system design round is graded on evaluation-harness design, not RAG architecture: for a multi-tenant Claude deployment, negotiate an eval (measure inter-expert agreement first) before picking a metric or architecture. Sharper/narrower than S9-S11 (general eval framework) — this is the Anthropic-specific emphasis within that same skill.
- S21. *(from interview-stories/anthropic-fde-multisource.md)* **Agent/MCP/sub-agent fluency** — Anthropic FDE deliverables are agent-shaped: MCP servers, sub-agent decomposition, agent skills, tool schemas, context-window management, and naming where agents fail. Come with one concrete "agent failed in an interesting way, and what you changed" story. See `../technical-depth/knowledge-map.md` AI18-AI21 for the hands-on drill version of this same skill.
- S22. *(low-confidence — Reddit synthesis, not a verified candidate account; see findings.md sourcing note)* **Enterprise-SaaS access-control constraints** — SSO (single sign-on integration, not gov-specific), RBAC (role-based access control — who can see/do what), audit logs (who accessed/changed what, when), data boundaries (tenant isolation, what data a given integration/agent can touch). Distinct from S14 (defense/gov compliance stack — ATO, FedRAMP, ITAR): S22 is the enterprise-SaaS-flavored version of "prove this is safe to deploy," relevant even for non-gov clients. Hand-waving these is named as a common failure mode.

# Dependencies (must understand X before Y)

- S1-S6 (GCP primitives) → before the C.A.S.E. framework's "Architect" step (../problem-decomposition/knowledge-map.md D1) can be answered concretely rather than abstractly.
- S14 (Compliance/accreditation stack) → before the Discovery Checklist's Data & Security bucket (../customer-facing-judgment/knowledge-map.md CJ1) makes sense for regulated clients.

---
# Importance Legend
All items Critical-to-High for role/interview readiness; scores here
roll up into `../scoreboard.md`'s Category 2 row.
