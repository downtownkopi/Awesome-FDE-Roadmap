# Knowledge Mastery Tracker

## Scope
**Role:** Forward Deployed Engineer (FDE) — interview + on-the-job readiness
**Sources:** README.md (curriculum/glossary), findings.md (interview process research)
**Concept list:** Test FDE Role/knowledge-map.md

This file is the single place to see every question you've been asked to
test FDE readiness, in full detail (question, your answer, assessment,
model answer, gap). `scoreboard.md` stays as the fast-glance category
score view; this file is the detailed log behind those scores.

## Overall Progress
- Questions attempted: 1
- Correct: 0
- Mostly correct: 1
- Partially correct: 0
- Incorrect: 0
- Don't know: 0
- Overall demonstrated mastery: Just started
- Current weak areas: T9 (Technical depth) — inverted reasoning on why plain embedding similarity search fails vs. keyword search

---
# Knowledge Gaps

| ID | Topic | Concept | Gap | Category | Severity | Status | Attempts | Correct |
|---|---|---|---|---|---|---|---:|---:|
| G1 | Embedding vs. keyword search failure modes | T9 | Described plain embedding similarity search as failing because it "assumes content is close to the word used" — that's keyword/lexical search's assumption, stated backwards for embeddings. Real reason: embeddings capture semantic/topical closeness but blur past exact-match signals (defined terms, IDs, dates, numbers, rare proper nouns) that hybrid search's keyword/BM25 leg exists to catch. | Technical depth | Medium | Open | 1 | 0 |

---
# Concept Mastery

| Concept | Category | Recall | Explanation | Connection | Application | Overall |
|---|---|---|---|---|---|---|
| T1 Advanced SQL & query tuning | Technical depth | — | — | — | — | Untested |
| T2 Data modeling (Star vs. OBT) | Technical depth | — | — | — | — | Untested |
| T3 Medallion Architecture | Technical depth | — | — | — | — | Untested |
| T4 Distributed computing (Spark/Ray) | Technical depth | — | — | — | — | Untested |
| T5 Data quality & observability | Technical depth | — | — | — | — | Untested |
| T6 Modern FDE tool stack | Technical depth | — | — | — | — | Untested |
| T7 Local/offline inference runtimes | Technical depth | — | — | — | — | Untested |
| T8 Safe model-weight handling | Technical depth | — | — | — | — | Untested |
| S1 GCP VPC mastery | System design | — | — | — | — | Untested |
| S2 GKE as the K8s standard | System design | — | — | — | — | Untested |
| S3 BigQuery architecture | System design | — | — | — | — | Untested |
| S4 Serverless event-driven pipelines | System design | — | — | — | — | Untested |
| S5 VPC Service Controls | System design | — | — | — | — | Untested |
| S6 Infrastructure as Code (Terraform) | System design | — | — | — | — | Untested |
| S7 Enterprise RAG Blueprint | System design | — | — | — | — | Untested |
| S8 Multi-Agent Orchestration (ADK) | System design | — | — | — | — | Untested |
| S9 Two-loop LLM eval framework | System design | — | — | — | — | Untested |
| S10 Pointwise eval / RAG Triad | System design | — | — | — | — | Untested |
| S11 Pairwise Evaluation | System design | — | — | — | — | Untested |
| S12 Model/agent monitoring | System design | — | — | — | — | Untested |
| S13 Air-gapped/tactical-edge architecture | System design | — | — | — | — | Untested |
| S14 Compliance/accreditation stack | System design | — | — | — | — | Untested |
| S15 Air-gap-specific failure modes | System design | — | — | — | — | Untested |
| S16 Low-latency + LLM pattern | System design | — | — | — | — | Untested |
| S17 Emergency bulk-ingestion pattern | System design | — | — | — | — | Untested |
| D1 The C.A.S.E. framework | Problem decomposition | — | — | — | — | Untested |
| D2 MECE principle | Problem decomposition | — | — | — | — | Untested |
| D3 The "Three Whys" diagnostic | Problem decomposition | — | — | — | — | Untested |
| D4 What decomposition graders look for | Problem decomposition | — | — | — | — | Untested |
| D5 Common decomposition failure mode | Problem decomposition | — | — | — | — | Untested |
| CJ1 Forward Deployment Discovery Checklist | Customer-facing judgment | — | — | — | — | Untested |
| CJ2 The Trusted Advisor formula | Customer-facing judgment | — | — | — | — | Untested |
| CJ3 The Pyramid Principle / BLUF | Customer-facing judgment | — | — | — | — | Untested |
| CJ4 The Delta Concept | Customer-facing judgment | — | — | — | — | Untested |
| CJ5 Discovery red flags | Customer-facing judgment | — | — | — | — | Untested |
| CJ6 Handling a hostile stakeholder | Customer-facing judgment | — | — | — | — | Untested |
| CJ7 The Site Survey artifact | Customer-facing judgment | — | — | — | — | Untested |
| B1 Core behavioral themes (STAR) | Behavioral | — | — | — | — | Untested |
| B2 Embedded Engineering | Behavioral | — | — | — | — | Untested |
| B3 The FDE end-state ethos | Behavioral | — | — | — | — | Untested |
| BJ1 80/20 Value Scoping | Business/product judgment | — | — | — | — | Untested |
| BJ2 Use-case risk tiers | Business/product judgment | — | — | — | — | Untested |
| BJ3 SOW vs. MSA | Business/product judgment | — | — | — | — | Untested |
| BJ4 MVA (Minimum Viable Architecture) | Business/product judgment | — | — | — | — | Untested |
| BJ5 Cost of Inaction (CoI) | Business/product judgment | — | — | — | — | Untested |
| BJ6 UAT as definition of done | Business/product judgment | — | — | — | — | Untested |
| BJ7 The Case Study Rubric | Business/product judgment | — | — | — | — | Untested |
| T9 Production LLM/RAG engineering craft | Technical depth | Good | Weak | Partial | Good | Weak |
| T10 Defensible technical narrative under grilling | Technical depth | — | — | — | — | Untested |
| S18 "Is it actually working?" differentiator | System design | — | — | — | — | Untested |
| S19 Hypothesis-driven live incident debugging | System design | — | — | — | — | Untested |
| S20 MCP-based production-reliability scenario | System design | — | — | — | — | Untested |
| CJ8 Customer-first solution-design opener | Customer-facing judgment | — | — | — | — | Untested |
| CJ9 Discovery-first customer-conversation simulation | Customer-facing judgment | — | — | — | — | Untested |
| B4 Framing constraints/timelines to execs | Behavioral | — | — | — | — | Untested |
| B5 Customer-pain-to-product-change story | Behavioral | — | — | — | — | Untested |
| B6 Costed-example values round | Behavioral | — | — | — | — | Untested |
| BJ8 Demo vs. production-business-system | Business/product judgment | — | — | — | — | Untested |

*(Glossary/Definitions terms from knowledge-map.md are tracked ad hoc within Knowledge Gaps and the Question Log as they come up, rather than pre-listed here.)*

---
# Question Log

## Q001
**Date:** 2026-09-05
**Category:** Technical depth
**Concept:** T9 — Production LLM/RAG engineering craft
**Difficulty:** Level 3 (Application/Scenario)
**Question:** You're building a RAG system for a customer-support chatbot over a mix of long legal contracts and short email threads. Walk me through your chunking strategy: what chunk size/overlap would you pick, and why would it differ between those two document types? Then — the naive embedding-similarity retrieval starts returning marginally-relevant chunks for a class of queries. What's your fallback, and why does it work when plain similarity search doesn't?

### My Answer
> Chunking strategy for email thread - if it's really small threads, I won't do chunking at all. However if it's significantly more, since emails typically don't really have structure to it, I would do an overlap of about 50 tokens per chunk and monitor whether results returned via the search are relevant.
>
> Chunking strategy for long legal contracts - I would examine the contracts and see whether there are patterns to them e.g. intro, expectations, terms etc. And perform chunking such that the chunks take into account those sections.
>
> My fallback would look into a mixture of metadata search, keyword search and embedding search followed by an evaluation everytime results are returned.
>
> Plain similarity search assumes the content we are looking for is close to the word we used when searching, which is usually not the case.

### Assessment
Mostly Correct

### What I Got Right
- Legal contracts: structure-aware chunking along the document's own sections (intro/terms/definitions) instead of fixed-size windows — matches best practice, since legal meaning is section-scoped and a fixed window can split a clause mid-thought.
- Emails: correctly special-cased short threads as needing no chunking at all — good instinct against over-engineering.
- Fallback: identified hybrid search (keyword + embedding + metadata) plus an evaluation step — right shape, matches the Enterprise RAG Blueprint's hybrid-search step (S7) and gestures toward the eval framework (S9-S11/S18).

### What I Missed
- Inverted the core "why": plain embedding similarity search does not fail because it "assumes content is close to the word used" — that's the assumption *keyword/lexical* search makes. Embedding search's actual failure mode is closer to the opposite: it captures general semantic/topical closeness well but blurs past exact-match signals (defined terms, contract clause IDs, dates, numbers, rare proper nouns) that hybrid search's keyword/BM25 leg exists specifically to catch.
- Email chunking gave an overlap number (50 tokens) with no chunk-size number and no justification for either — T9's bar is explicitly "why, not just what." Stronger answer: chunk by message/turn boundary (email's natural boundary, unlike prose) and justify overlap as preserving cross-message pronoun/reference resolution.
- "Monitor whether results are relevant" was under-specified — no named metric (e.g. Recall@k, or groundedness/faithfulness against retrieved context — the RAG Triad, S10). This is where S18's "how do you know it's working" differentiator lives; gestured at it without landing it.

### Model Answer
> Emails: chunk by message/turn boundary rather than a fixed token window — emails lack section structure but do have natural message boundaries, so respect those. Keep short threads as a single chunk (no chunking) as a special case. Use a modest overlap (e.g. the prior 1-2 messages, or ~10-15% tokens) justified specifically as preserving pronoun/reference resolution across message boundaries, not as an arbitrary number.
>
> Legal contracts: chunk along the document's own structural/semantic boundaries (clauses, defined-term sections) rather than fixed-size windows, because splitting mid-clause destroys legal meaning.
>
> Fallback: hybrid search — BM25/keyword (exact terms, IDs, defined terms, numbers) + embedding similarity (semantic/paraphrase matches) + metadata filters, merged via reciprocal rank fusion or a reranker. It works specifically because BM25 and embeddings have complementary blind spots: BM25 misses paraphrase/synonym matches that embeddings catch, embeddings miss the exact-term/rare-entity matches that BM25 catches. Continuously evaluate retrieval quality with a named metric (Recall@k, or RAG Triad groundedness/faithfulness — S10), not an unspecified "check if it looks relevant."

### Knowledge Gap
G1 — inverted reasoning on why plain embedding similarity search fails vs. why keyword/lexical search fails; needs to internalize the complementary-strengths argument for hybrid search rather than a single "search assumes word proximity" explanation.

### Score (1-10, per scoreboard.md rubric)
5 — right shape and correct fallback pattern (hybrid search + eval), but the one "why" explicitly asked for was factually inverted, and unspecified metrics/justifications elsewhere.

### Memory Priority
High

### Follow-up Required
Yes — re-test T9 (or S18/S10, which share the same underlying eval-judgment reasoning) once G1 has been reviewed, to confirm the embedding-vs-keyword complementary-strengths explanation lands correctly.

---
<!--
## Qnnn
**Date:** YYYY-MM-DD
**Category:** (one of the 6 scoreboard categories)
**Concept:** (ID + name from knowledge-map.md, e.g. S8 — Multi-Agent Orchestration (ADK))
**Difficulty:** Level 1 (Recall) / Level 2 (Explanation) / Level 3 (Application/Scenario)
**Question:** ...

### My Answer
> ...

### Assessment
(Correct / Mostly Correct / Partially Correct / Incorrect / Don't Know)

### What I Got Right
- ...

### What I Missed
- ...

### Model Answer
> ...

### Knowledge Gap
...

### Score (1-10, per scoreboard.md rubric)
...

### Memory Priority
Critical / High / Medium / Low

### Follow-up Required
Yes/No — ...
-->

---
# Misconceptions

**M1.** Plain embedding similarity search fails because it "assumes retrieved
content must be close to the literal words used in the query." This is
backwards — that assumption describes *keyword/lexical* search. Embedding
search's actual weakness is the opposite: it's good at general semantic/
topical closeness but blurs past exact-match signals (defined terms, IDs,
dates, numbers, rare proper nouns) that a query may need matched precisely.
Hybrid search pairs embeddings with BM25/keyword *because* their blind
spots are complementary, not because embeddings share keyword search's
literal-proximity assumption. Surfaced: Q001 (T9).

---
# Mastered Concepts
- (none yet)

---
# Weak Concepts
- T9 Production LLM/RAG engineering craft — 1 attempt, score 5/10. Solid on chunking-strategy application (contracts) and correctly names hybrid search as the fallback, but inverted the "why" behind embedding search's failure mode (see M1/G1). Retest after review.

---
# Concepts Requiring Review
- Everything — nothing tested yet
