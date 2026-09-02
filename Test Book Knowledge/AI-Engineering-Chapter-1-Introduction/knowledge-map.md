---
title: "Knowledge Map — Chapter 1: Introduction to Building AI Applications with Foundation Models"
book: "AI Engineering: Building Applications with Foundation Models" (Chip Huyen)
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  This describes what should be known from the chapter. Not shown to the
  learner by default — used internally to drive question selection and
  coverage tracking. See source.md for full detail behind each item.
---

# Core Concepts (Critical)

- C1. **Language model** — definition; encodes statistical info about likelihood of tokens in context.
- C2. **Token / tokenization / vocabulary** — what a token is, why tokens (not words/chars) are the unit, the 3 reasons.
- C3. **Autoregressive vs. masked language models** — how each predicts, which context each uses, which is dominant for generation and why.
- C4. **Language model as a "completion machine"** — probabilistic prediction, not guaranteed correctness; completion ≠ conversation.
- C5. **Self-supervision vs. supervision** — why self-supervision enabled scaling to LLMs; how self-supervision works mechanically (labels inferred from input, e.g., next-token prediction samples).
- C6. **Foundation models** — definition; why the term supersedes "LLM"; covers both LLMs and LMMs; break from siloed task-specific/modality-specific AI research.
- C7. **Multimodal models / LMM** — definition; distinction from single-modality models; CLIP as embedding (non-generative) backbone example.
- C8. **Three adaptation techniques**: prompt engineering, RAG, finetuning — what each is, at a high level.
- C9. **AI engineering** — definition; distinguished from ML engineering/MLOps; why the term was chosen.
- C10. **Three factors driving AI engineering's growth**: general-purpose AI capabilities, increased AI investment, low entrance barrier — what each means and why it matters.
- C11. **Three layers of the AI engineering stack**: application development, model development, infrastructure — what belongs in each.
- C12. **Three major differences: AI engineering vs. ML engineering** (no training from scratch/adaptation focus; bigger models+compute+latency; open-ended outputs → harder evaluation).
- C13. **Model adaptation: prompt-based techniques vs. finetuning** — the weight-update distinction; tradeoffs (data needs, complexity, ceiling on what's achievable).

# Supporting Concepts (High)

- H1. Model as a service / API-based access — how it lowers the entrance barrier.
- H2. Use case categories (8): coding, image & video production, writing, education, conversational bots, information aggregation, data organization, workflow automation — plus which are highest-risk/most valuable for enterprises (internal-facing vs external-facing risk tradeoff).
- H3. Use case evaluation — 3 risk-ordered reasons to build an AI application (existential threat / profit-productivity opportunity / hedge against being left behind).
- H4. Role of AI in a product — 3 dimensions: critical/complementary, reactive/proactive, dynamic/static.
- H5. Role of humans — human-in-the-loop; Crawl-Walk-Run framework (3 stages).
- H6. AI product defensibility — 3 types of competitive advantage (technology, data, distribution); why foundation models erode the tech advantage; the "data flywheel" idea.
- H7. Setting expectations / usefulness threshold — 4 metric groups (quality, latency [TTFT/TPOT], cost, other e.g. interpretability/fairness).
- H8. Milestone planning & the "last mile" challenge — 0→60 easy vs. 60→100 exceedingly hard.
- H9. Maintenance considerations — pace of change, cost-benefit reassessment, regulatory risk (incl. IP), why "committing to riding the bullet train" matters.
- H10. Three model-development responsibilities: modeling & training, dataset engineering, inference optimization.
- H11. Pre-training vs. finetuning vs. post-training vs. "training" (colloquial) — precise distinctions and common conflations.
- H12. Three application-development responsibilities: evaluation, prompt engineering & context construction, AI interface.
- H13. New AI engineering workflow ordering: Product → Data → Model (vs. traditional ML's Data → Model → Product) and what it implies about who's involved when.
- H14. Inference optimization challenge: autoregressive = sequential token generation → latency challenge; target ~100ms-class latency expectation.
- H15. Dataset engineering shift: tabular/feature-engineering (traditional ML) → unstructured data dedup/tokenization/context retrieval/quality control (foundation models); open-ended annotation is harder than close-ended.
- H16. Embedding model vs. generative model (CLIP as the example) — what an embedding is, at a conceptual level.

# Definitions (must be able to state precisely)

- token, tokenization, vocabulary, parameter
- self-supervision, supervision, unsupervised learning (how self-supervision differs from both)
- masked language model, autoregressive language model
- foundation model, multimodal model, large multimodal model (LMM), embedding model
- AI engineering, model as a service
- prompt engineering, RAG, finetuning, pre-training, post-training, training (the general term)
- agent (tool-using, planning model)
- human-in-the-loop, Crawl-Walk-Run
- TTFT, TPOT
- inference (definition: computing an output given an input)

# Relationships

- R1. Self-supervision is *what makes* language models scalable into LLMs (mechanism → outcome).
- R2. LLMs + added modalities (via multimodal training, e.g. CLIP-style natural language supervision) → foundation models.
- R3. Foundation models' general-purpose capability + low barrier to access (APIs) + rising investment → together explain the rise of AI engineering as a discipline (not any single factor alone).
- R4. Model adaptation technique chosen (prompt engineering < RAG < finetuning, roughly in data/complexity order) determines position in the "three layers" stack you'll spend the most effort in.
- R5. Whether a technique changes model weights (prompt-based vs. finetuning) determines its data requirements, complexity, and ceiling on achievable behavior change.
- R6. The AI role dimensions (critical/complementary, reactive/proactive, dynamic/static) jointly determine an application's accuracy bar, latency requirements, and personalization architecture — not independent, they combine per application.
- R7. Use-case risk level (H3) should map to *build vs. buy* decisions and urgency of investment (C10/H9 connect here — fast pace of change affects how much to invest now vs. later).
- R8. Product defensibility (H6) connects to the low-entrance-barrier factor (C10/H1): the same thing that makes it easy for you to build makes it easy for competitors.
- R9. Evaluation (H12) is disproportionately hard for foundation models specifically *because of* their open-ended nature (C4, C6) — same root cause as why dataset annotation is harder (H15).
- R10. Milestone planning's "last mile" challenge (H8) is a direct consequence of how demos rely on a foundation model's already-impressive base capabilities (C6) versus the effort needed to reach a genuinely deployable product.

# Processes / Sequences

- P1. Self-supervised training-sample generation from a single sentence (BOS/EOS markers, sequential context-target pairs) — could be asked to reconstruct.
- P2. Tokenization walkthrough — reasons tokens are chosen as the unit, and what happens with an unfamiliar/made-up word.
- P3. Crawl-Walk-Run progression — order and what changes at each stage.
- P4. Traditional ML workflow (Data → Model → Product) vs. AI engineering workflow (Product → Data → Model) — order and rationale for the flip.
- P5. Training-phase spectrum: pre-training → (post-training / finetuning) — what happens at each phase and who typically does it.
- P6. Planning an AI application, in order: use case evaluation → clarify AI's role & human's role → assess defensibility → set expectations/usefulness threshold → milestone plan → plan for maintenance.

# Arguments & Principles

- A1. "Adapting an existing model is almost always easier than building one from scratch" — with the buy-vs-build tradeoff caveat (task-specific models can still be smaller/cheaper/faster for narrow needs).
- A2. "With foundation models, differentiation shifts from model quality to the application development process" — because many teams share the same underlying models.
- A3. "The low entrance barrier is a blessing and a curse" for defensibility — ease of building cuts both ways.
- A4. "Prioritize mastery/understanding over completion" is the book's own meta-principle for this system (not chapter content, but the tutor's operating principle — do not test this against the reader, it's provided by the user for the *tutor's* own design).
- A5. Author's claim that ML knowledge is "nice-to-have, not a must-have" for AI engineering is explicitly flagged in the book as disputed by many practitioners — an important nuance, not a settled claim.
- A6. Evaluation is harder in AI engineering primarily due to open-endedness, not just because foundation models are newer/bigger.
- A7. Regulatory/IP risk is categorized by the author as one of the "harder to adapt to" / potentially fatal categories of change, distinct from ordinary cost/capability changes.

# Examples (materially explain concepts — worth being able to cite)

- E1. GPT-4 tokenizing "I can't wait to build awesome AI applications" — "can't" splits into "can" + "'t".
- E2. Sherlock Holmes / Claude Shannon as historical roots of statistical language modeling.
- E3. AlexNet / ImageNet as the supervised-learning example that started the deep learning revolution, and its labeling-cost illustration.
- E4. "I love street food." → 6 self-supervised training samples (Table 1-1) with `<BOS>`/`<EOS>`.
- E5. CLIP: natural language supervision on 400M image-text pairs; non-generative, embedding model.
- E6. Gemini vs. ChatGPT MMLU comparison (CoT@32 vs. 5-shot) — evaluation pitfall example; also the prompt-engineering-alone score jump (83.7%→90.04%).
- E7. Calendly / Mailchimp / Photoroom as "could've been a feature of a bigger incumbent product" examples for defensibility discussion.
- E8. Kodak / Blockbuster / BlackBerry as cautionary tales for use-case-evaluation risk category 3.
- E9. Duolingo's four-stage course creation and where AI helps most (lesson personalization).
- E10. UltraChat / LinkedIn 0→60 vs 60→100 last-mile examples.
- E11. Face ID (dynamic, critical) vs. Google Photos object detection (static) vs. Gmail Smart Compose (complementary) as role-dimension examples.

# Easily Confused Concepts

- X1. **Training vs. pre-training vs. finetuning vs. post-training** — precise scope of each; "training" as an umbrella term; quantization changes weights but isn't "training."
- X2. **Masked LM vs. autoregressive LM** — which uses bidirectional vs. unidirectional context; which is used for generation vs. classification-style tasks.
- X3. **Self-supervision vs. unsupervised learning vs. supervision** — self-supervision infers labels from input (not "no labels" like unsupervised, not "externally labeled" like supervised).
- X4. **AI engineering vs. ML engineering (traditional)** — not just a rebrand; three specific structural differences (C12).
- X5. **Prompt engineering vs. "training" (colloquial misuse)** — feeding context/instructions ≠ changing weights, even if described informally as "training the model."
- X6. **Embedding model vs. generative model** — CLIP produces embeddings, doesn't generate open-ended output; contrast with LMMs built on top of embedding backbones.
- X7. **Critical/complementary vs. reactive/proactive vs. dynamic/static** — three separate axes for describing AI's role; easy to conflate as one "how important is AI" scale.
- X8. **Model as a service (API access) vs. AI engineering as a whole** — API access is one factor (low barrier) enabling AI engineering, not synonymous with it.
- X9. **Foundation model vs. LLM** — LLM is a subset (text-only); foundation model is the broader/preferred term encompassing LLMs and LMMs.

# High-Value Details

- D1. GPT-4 vocab size 100,256; Mixtral 8x7B vocab size 32,000.
- D2. ~1 token ≈ ¾ of a word (rule of thumb) for GPT-4-style tokenization.
- D3. GPT-1 (2018): 117M params; GPT-2 (2019): 1.5B params — illustrates how "large" is a moving target.
- D4. InstructGPT: pre-training ≈ 98% of total compute/data resources.
- D5. CLIP: 400M image-text pairs, ~400x ImageNet's scale, zero manual labeling.
- D6. Three layers of the AI stack, and their respective responsibility lists (Figure 1-14) — application development (AI interface, prompt engineering, context construction, evaluation); model development (inference optimization, dataset engineering, modeling & training, evaluation); infrastructure (compute management, data management, serving, monitoring).
- D7. Table 1-4 / Table 1-6 directional shifts (traditional ML → foundation models) for each responsibility (importance up/down/unchanged).
- D8. Eloundou et al. definition of "exposed task" — ≥50% time reduction threshold.
- D9. a16z 2024 report: internal-facing (text summarization 62%, knowledge mgmt 60%) vs. external-facing (chatbot 39%, recommendation 39%) production-deployment willingness gap.
- D10. McKinsey coding productivity gains by task type (documentation ~45-50%, generation ~35-45%, refactoring ~20-30%, high-complexity <10%).

# Dependencies (must understand X before Y)

- Token/tokenization (C2) → before Language model definition depth (C1) makes full sense.
- Self-supervision (C5) → before understanding why LLMs could scale (leads into C1→foundation models).
- Autoregressive vs masked LM (C3) → before "completion machine" framing (C4) fully lands.
- Foundation models definition (C6) → before AI engineering definition (C9) and the three growth factors (C10).
- Prompt-based vs. finetuning weight distinction (C13) → before Pre-training/finetuning/post-training terminology (H11) can be precisely placed.
- Three-layer AI stack (C11) → before AI engineering vs. ML engineering differences by layer (H10, H12, D6/D7) make sense as a structured comparison.
- Use-case categories (H2) → useful context before use-case evaluation (H3), though H3 can be tested independently.
- AI's role dimensions (H4) → before Crawl-Walk-Run (H5) is fully meaningful (Crawl-Walk-Run is really about incrementally shifting the "critical" and human-in-the-loop dimensions).

---
# Importance Legend
Critical = essential to the chapter's core argument. High = important supporting structure. Medium = useful detail/example. Low = color/stat, not core.
