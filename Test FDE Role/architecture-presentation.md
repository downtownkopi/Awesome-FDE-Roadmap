---
title: "Architecture Presentation — Personal Project Prep"
status: scaffold — empty until filled in by the user
sources: "interview-stories/cohere-fde-gaijineer.md"
note: >
  Cohere's Architecture Presentation round: candidate presents a real
  past project. Pick distributed-systems/infra-heavy/reliability-
  tradeoff/security-sensitive work over a flashier but less relevant
  one (example given: a compliance-constrained data pipeline beats a
  flashy demo). Probed on reliability tradeoffs, scaling limits,
  failure isolation, 10x-traffic scenarios. This is a prepared
  narrative artifact, not a Q&A drill — fill it out like slide notes,
  not like a STAR story.
---

# How to use this file

1. Pick your most relevant real project — relevant beats impressive.
   A boring-but-real compliance pipeline outscores an exciting side
   project with no reliability story.
2. Fill in every section below with real detail.
3. When quizzed in a `mock-loop/` Cohere-style run, present from this
   file, then field probing questions on reliability tradeoffs, scaling
   limits, failure isolation, and "what happens at 10x traffic."
4. Sharpen after every mock round — note what question caught you flat.

---

# Candidate project

**Project name / one-line description:**

**Why this project (not a flashier alternative)?**

# Architecture Overview

**System diagram (describe or link):**

**Key components and why each exists:**

**Data flow (source → processing → output):**

# Reliability Tradeoffs

**What you optimized for, and what you gave up to get it:**

**A specific failure mode you designed against:**

**A specific failure mode you did NOT design against (and why that was
an acceptable call at the time):**

# Scaling Limits

**Current scale (numbers: QPS, data volume, users):**

**Known ceiling — where does this architecture break?**

**What would change at 10x traffic?**

# Failure Isolation

**Blast radius of a single-component failure:**

**How failures are detected (monitoring/alerting):**

**How failures are contained (circuit breakers, bulkheads, graceful
degradation):**

# Security / Compliance (if applicable)

**Classification of data handled:**

**Compliance regime, if any (SOC2/HIPAA/FedRAMP/etc.):**

**Specific security tradeoff you made:**

# Anticipated Probing Questions

*(Fill in after a mock round catches you off guard — build this list
over time.)*

-

---

# Readiness check

| Section | Filled? |
|---|---|
| Candidate project | No |
| Architecture overview | No |
| Reliability tradeoffs | No |
| Scaling limits | No |
| Failure isolation | No |
| Security/compliance | No |
