# Knowledge Mastery Tracker

## Chapter
**Book:** AI Engineering: Building Applications with Foundation Models (Chip Huyen)
**Chapter:** 1 — Introduction to Building AI Applications with Foundation Models

## Overall Progress
- Questions attempted: 1
- Correct: 0
- Mostly correct: 0
- Partially correct: 1
- Incorrect: 0
- Don't know: 0
- Overall demonstrated mastery: Very early — 1 question attempted, chapter mostly untested
- Current weak areas: Self-supervision terminology (conflated with reinforcement learning); precision on why it enables scale (labels vs. data volume)

---
# Knowledge Gaps

| ID | Topic | Concept | Gap | Importance | Severity | Status | Attempts | Correct |
|---|---|---|---|---|---|---|---:|---:|
| G001 | Language modeling foundations | Self-supervision (C5) | Could not name "self-supervision" as the term; first guessed the mechanism was "masking" (conflating with masked LMs), then on retry correctly identified the mechanism as autoregressive next-token prediction but mislabeled the overall technique as "reinforcement learning". Also described the benefit as "no new text/data needed" rather than "no manual/human labeling needed" (raw text is still very much needed, at scale). | Critical | High | 🔴 Weak | 1 | 0 |

---
# Concept Mastery

| Concept | Importance | Recall | Explanation | Connection | Application | Overall |
|---|---|---|---|---|---|---|
| C1 Language model definition | Critical | — | — | — | — | Untested |
| C2 Token/tokenization/vocabulary | Critical | — | — | — | — | Untested |
| C3 Autoregressive vs masked LM | Critical | 🟡 partial (via C5 discussion) | — | — | — | Developing |
| C4 Completion machine framing | Critical | — | — | — | — | Untested |
| C5 Self-supervision vs supervision | Critical | 🔴 weak | — | — | — | Weak |
| C6 Foundation models definition | Critical | — | — | — | — | Untested |
| C7 Multimodal models / LMM | Critical | — | — | — | — | Untested |
| C8 Three adaptation techniques | Critical | — | — | — | — | Untested |
| C9 AI engineering definition | Critical | — | — | — | — | Untested |
| C10 Three growth factors | Critical | — | — | — | — | Untested |
| C11 Three layers of AI stack | Critical | — | — | — | — | Untested |
| C12 AI eng vs ML eng (3 diffs) | Critical | — | — | — | — | Untested |
| C13 Prompt-based vs finetuning | Critical | — | — | — | — | Untested |
| H1 Model as a service | High | — | — | — | — | Untested |
| H2 Eight use case categories | High | — | — | — | — | Untested |
| H3 Use case evaluation (3 risk levels) | High | — | — | — | — | Untested |
| H4 AI role: 3 dimensions | High | — | — | — | — | Untested |
| H5 Human-in-the-loop / Crawl-Walk-Run | High | — | — | — | — | Untested |
| H6 AI product defensibility | High | — | — | — | — | Untested |
| H7 Usefulness threshold metrics | High | — | — | — | — | Untested |
| H8 Last mile challenge | High | — | — | — | — | Untested |
| H9 Maintenance considerations | High | — | — | — | — | Untested |
| H10 Three model-dev responsibilities | High | — | — | — | — | Untested |
| H11 Pre-training/finetuning/post-training | High | — | — | — | — | Untested |
| H12 Three app-dev responsibilities | High | — | — | — | — | Untested |
| H13 Product→Data→Model workflow | High | — | — | — | — | Untested |
| H14 Autoregressive inference latency challenge | High | — | — | — | — | Untested |
| H15 Dataset engineering shift | High | — | — | — | — | Untested |
| H16 Embedding vs generative model | High | — | — | — | — | Untested |

*(Medium/Low items and Definitions/Examples/Easily-confused items from knowledge-map.md are tracked ad hoc within Knowledge Gaps and Question Log as they come up, rather than pre-listed here.)*

---
# Question Log

## Q001
**Date:** 2026-08-31
**Topic:** Language modeling foundations
**Concept:** C5 — Self-supervision vs. supervision
**Difficulty:** Level 1 (Recall)
**Question:** The chapter explains that language modeling could scale up dramatically in a way most other ML approaches (like fraud detection or image classification models) couldn't. What's the name of the training approach that made this possible, and — in your own words — what does it actually mean for how a model gets its training labels?

### My Answer
> Attempt 1: "the training approach is about using its own text to train itself. aka masking a word and using the text before it to guess that masked word. this means that the person training this model don't need to have new text/data."
> Attempt 2 (after hint): "im referring to autoregressive models. reinforcement learning."

### Assessment
🟠 Partially Correct

### What I Got Right
- Correctly identified that the model uses its own text/data rather than externally supplied labels.
- On retry, correctly identified the underlying prediction mechanism as autoregressive (using preceding context to predict what's next), and correctly distinguished it from masking once prompted.

### What I Missed
- Never produced the actual term: **self-supervision** (self-supervised learning).
- First attempt conflated the general training approach with "masking," which is actually the mechanism specific to *masked* language models, not autoregressive ones.
- Second attempt substituted an unrelated concept, **reinforcement learning**, for the term.
- Framed the benefit as "no new text/data needed" rather than the more precise "no manually-labeled data needed" — self-supervised pretraining still requires enormous volumes of raw text, it just doesn't need humans to label it.

### Model Answer
> The approach is **self-supervision** (self-supervised learning). Unlike supervised learning, which requires humans to manually label data, self-supervision lets the model infer its own labels directly from the input. For language modeling, a single piece of naturally occurring text supplies both the context (input) and the label (the next token to predict) at the same time — e.g., "I love street food." can generate multiple training examples like predict "love" given "I", predict "street" given "I love", etc. Because no manual labeling is required, models can be trained on massive amounts of naturally occurring text (books, articles, the web) cheaply, which is what allowed language models to scale up into LLMs.

### Knowledge Gap
Does not yet know the term "self-supervision" and conflates it with either masked-LM mechanics or reinforcement learning. Needs to firmly separate: supervised learning (external labels) vs. self-supervised learning (labels inferred from input) vs. unsupervised learning (no labels at all) vs. reinforcement learning (reward-based, not used for this scaling story).

### Memory Priority
Critical

### Follow-up Required
Yes — retest with a different question type (e.g., explanation or comparison: self-supervision vs. supervised vs. unsupervised vs. reinforcement learning) after other material, not immediately.

---
# Misconceptions

## M001
**Concept:** Self-supervised learning
**My misconception:** Believed the scaling technique behind language models was reinforcement learning.
**Correct understanding:** The technique is self-supervision (self-supervised learning) — labels are inferred directly from the input text itself (e.g., next-token prediction), with no reward signal or manual labeling involved. Reinforcement learning is a different paradigm (used elsewhere in AI, e.g., RLHF for post-training alignment, but not the mechanism this chapter credits for enabling LLM-scale pretraining).
**Detected:** 2026-08-31 (Q001, attempt 2)
**Resolved:** Not yet resolved — pending retest.

---
# Mastered Concepts
- (none yet)

---
# Weak Concepts
- C5 Self-supervision vs. supervision (term not yet known; mechanism partially understood)

---
# Concepts Requiring Review
1. C5 — Self-supervision (name the term; distinguish from supervised/unsupervised/reinforcement learning)
2. C3 — Autoregressive vs. masked LM (partially surfaced correctly under prompting; needs a clean standalone test)
3. Everything else in the chapter — not yet tested
