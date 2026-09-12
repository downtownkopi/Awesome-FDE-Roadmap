# Knowledge Mastery Tracker

## Chapter
**Book:** AI Engineering: Building Applications with Foundation Models (Chip Huyen)
**Chapter:** 1 — Introduction to Building AI Applications with Foundation Models

## Overall Progress
- Questions attempted: 33
- Correct: 8
- Mostly correct: 14
- Partially correct: 9
- Incorrect: 2
- Don't know: 0
- Overall demonstrated mastery: Early-to-mid — 32 questions attempted, all 13 Critical + all 16 High-priority concepts touched at least once. First full pass complete, now retesting flagged gaps.
- Current weak areas: supervised learning conflated with finetuning specifically — described labels as coming "after the model has been pretrained," when supervised learning is defined by label-source (pre-collected, human-annotated) independent of any prior pretraining; AI stack layers mixed up — prompt engineering and RAG placed under "model development" instead of application development (neither changes model weights), and scaling/serving placed under application development instead of infrastructure; relationship between the three layers not addressed at all; LMM naming confusion recurring — conflated "large multimodal model" with "large language model" a 2nd time (M002 not yet resolved), and CLIP's own two-modality nature (image + text, not just image) still underexplained, though the generative-vs-classification axis landed this time; AI engineering definition missing the "why" (foundation models eliminating the need to train from scratch) and concrete skill-shift specifics vs. ML engineering/MLOps; RAG missing from adaptation-technique recall (substituted post-training instead); tokenization's "unknown word" rationale not yet surfaced cleanly; completion-machine's specific failure mode (question-answered-with-question) not yet surfaced; foundation model naming reason narrowed to multimodality only, missed "base for adaptation" + siloed-research-break framing

---
# Knowledge Gaps

| ID | Topic | Concept | Gap | Importance | Severity | Status | Attempts | Correct |
|---|---|---|---|---|---|---|---:|---:|
| G001 | Language modeling foundations | Self-supervision (C5) | Could not name "self-supervision" as the term; first guessed the mechanism was "masking" (conflating with masked LMs), then on retry correctly identified the mechanism as autoregressive next-token prediction but mislabeled the overall technique as "reinforcement learning". Also described the benefit as "no new text/data needed" rather than "no manual/human labeling needed" (raw text is still very much needed, at scale). **Retest (Q007):** term + mechanism now correct (self-supervision, autoregressive next-token). Resolved on this sub-point. | Critical | High | 🟡 Developing | 2 | 1 |
| G002 | Language modeling foundations | Token/tokenization (C2) | Named 2 of 3 reasons for tokens (subword decomposition, smaller/efficient vocab), blended together rather than distinct. Missed reason 3: tokens let the model handle unknown/made-up words by splitting into known sub-parts. | Critical | Medium | 🟡 Developing | 1 | 0 |
| G003 | Language modeling foundations | Completion machine (C4) | Got the mechanism (probabilistic next-token completion) and the general conversation-vs-completion intuition, but missed the "not guaranteed correct" caveat and the concrete failure mode (completing a question with another question). | Critical | Medium | 🟡 Developing | 1 | 0 |
| G004 | Foundation models | Foundation model definition (C6) | Narrowed naming rationale to multimodality only. Missed "general-purpose base for adaptation" framing and the siloed-by-modality-research-break argument — the book's primary reasons for the term. | Critical | High | 🟠 Developing | 1 | 0 |
| G006 | Language modeling foundations | Supervised vs. reinforcement learning (adjacent to C5) | Described supervised learning as "human indicating whether the prediction is correct or not" (live correctness feedback) rather than a pre-labeled input-output dataset. Described reinforcement learning as "giving the trained model samples to guess when given a prompt" — vague, missing the reward-signal framing (agent acts, receives scalar reward, no explicit correct label per input). The two got blurred together. | High | Medium | 🟡 Developing | 1 | 0 |
| G007 | Foundation models | Three adaptation techniques (C8) | Named prompt engineering and finetuning correctly (right mechanism for both: prompt-only vs. weight-changing). Substituted "post-training" for the third technique instead of **RAG**. Post-training isn't an app-builder adaptation technique — it's done by model developers pre-release. | Critical | Medium | 🟠 Developing | 1 | 0 |
| G008 | Foundation models | AI engineering definition (C9) | Got the core directional shift right (use/adapt models vs. train them), but missed the foundation-model-enabled "why" and concrete skill-shift specifics (less training/infra, more adaptation/eval/product-layer engineering) vs. ML engineering/MLOps. | Critical | Medium | 🟠 Developing | 1 | 0 |
| G009 | Foundation models | Three growth factors (C10) | General-purpose capabilities and low entrance barrier both well explained with concrete examples. Investment factor explained circularly ("more investment -> more models explored -> more capabilities") without naming the actual mechanism (what money funds: compute/research/tooling) or the causal link (factor 1's demonstrated capability is what triggered factor 2's investment surge). | Critical | Medium | 🟡 Developing | 1 | 0 |
| G010 | Foundation models | Three layers of AI stack (C11) | Correctly named all three layers and got application development's validation/security aspect + infrastructure's hosting-location aspect right. Misplaced prompt engineering and RAG under "model development" (neither changes model weights — both belong in application development). Misplaced scaling/serving under application development (belongs in infrastructure). Never addressed how the three layers relate to each other, despite the question asking directly. | Critical | High | 🟠 Developing | 1 | 0 |
| G011 | Model adaptation | Prompt-based vs. finetuning tradeoffs (C13) | Weight-update mechanism correct (resolves C11's boundary confusion). Missed the concept's explicit tradeoffs ask: data needs, complexity, ceiling on what's achievable. Gave a narrow, not-quite-canonical reason for finetuning's use case ("model biased toward a direction") instead of the core tradeoffs. | Critical | Medium | 🟠 Developing | 1 | 0 |
| G012 | AI engineering | Eight use case categories, internal vs. external risk (H2) | Made one valid point (data organization's enterprise value from unstructured data) but explicitly didn't attempt the core ask: the internal-facing (lower risk, contained mistakes) vs. external-facing (higher risk, customer/public exposure) tradeoff, and that the same category can be either depending on deployment, not that categories are inherently one or the other. | High | Medium | 🟠 Developing | 1 | 0 |
| G013 | AI engineering | Use case evaluation, 3 risk-ordered reasons (H3) | All three categories (existential threat, profit/productivity, hedge) correctly identified with the right gist, and correctly ordered existential > hedge by urgency. "Hedge" characterized as mere "nice to have" rather than deliberate strategic insurance against a future risk; didn't explain why profit/productivity sits in the middle position specifically. | High | Low | 🟡 Developing | 1 | 0 |
| G014 | AI engineering | Role of AI in a product, 3 dimensions (H4) | All 3 dimensions and 6 sub-points correct in substance with good examples. Reactive-vs-proactive's core criterion (who initiates: user request vs. AI anticipation) wasn't stated — substituted a latency-based framing instead (true in practice, but not the primary definition). Static described as "updated per app install" rather than "per app/model release." | High | Low | 🟡 Developing | 1 | 0 |
| G015 | ~~AI engineering~~ | ~~Crawl-Walk-Run human-in-the-loop framework (H5)~~ **RETRACTED** | **Assistant error, not a real gap.** Original grading claimed Walk/Run should be defined by "degree of human oversight" rather than audience, and accused the answer of conflating this with H2. Checked `source.md` directly (Microsoft 2023 Crawl-Walk-Run, as this book actually presents it): Crawl=mandatory human, Walk=AI interacts with internal employees, Run=AI interacts with external users — audience-based, exactly matching the original answer. The "oversight-frequency" framing was the assistant's own unsourced substitution, not this book's definition. | — | — | Retracted 2026-09-11 | 1 | 1 |
| G016 | AI product strategy | AI product defensibility (H6) | Correctly identified technology as the eroding advantage, but reasoning was imprecise (didn't state that foundation-model availability at low barrier converges core tech capability across companies). Data flywheel described as a static one-time advantage ("we have data nobody else has") rather than the actual compounding loop (usage -> behavioral insight -> product improvement -> more usage), and missed that the mechanism works even when raw data can't directly train a model. | High | Medium | 🟡 Developing | 1 | 0 |
| G017 | AI engineering | Maintenance considerations, easy vs. hard changes (H9) | Easy example (API convergence) and both hard examples (regulatory, existential IP risk) correctly matched to source. Didn't explain why the hard ones are harder: regulatory/IP changes are governed by external, slow-moving legal/political systems outside company control, with binary/existential consequences, unlike technical/vendor changes which the company can act on directly. | High | Low | 🟡 Developing | 1 | 0 |
| G018 | AI engineering | Three model-development responsibilities (H10) | Attempt 1 answered a different concept entirely (H11's pretraining/finetuning/post-training) instead of H10's 3 responsibilities. Attempt 2 correctly named all 3 (modeling & training, dataset engineering, inference optimization), but dataset engineering described thinly as "obtaining data" rather than curating/generating/annotating, missing the open-ended-annotation-difficulty point that's the book's actual emphasis. | High | Medium | 🟡 Developing | 2 | 0 |
| G019 | AI engineering | Pre-training/finetuning/post-training precise distinctions (H11) | Correctly nailed the hardest part — finetuning-vs-post-training's actual distinguishing feature (who does it: model developer pre-release vs. app developer post-release). Pre-training and finetuning definitions correct. Missed the "weight change that doesn't count as training" example — gave prompt engineering (which doesn't change weights at all) instead of quantization (which does change weight values but still isn't called training). | High | Low | 🟡 Developing | 1 | 0 |
| G020 | AI engineering | Why evaluation is harder with foundation models (H12) | Correctly explained the primary reason (open-ended output has no exhaustive ground-truth list, unlike close-ended tasks). Missed the second reason: many different adaptation techniques complicate fair comparison between models (e.g., the Gemini-vs-ChatGPT MMLU miscomparison from mismatched few-shot settings). | High | Low | 🟡 Developing | 1 | 0 |
| G021 | AI engineering | Product-Data-Model workflow reordering (H13) | Correctly explained why the reordering makes sense (foundation models already exist and are capable, so product can be built first, data/model investment deferred). Framed the involvement implication as "AI engineers start earlier chronologically" rather than the book's actual point: traditional ML kept model development and product development as disjointed roles (ML engineers rarely in product decisions), while AI engineers are now far more involved in building the product itself — a role-integration point, not primarily a timing point. | High | Low | 🟡 Developing | 1 | 0 |
| G022 | AI engineering | Autoregressive inference latency (H14) | Mechanism correct (sequential, past-tokens-dependent generation). Numeric example wrong on 2 counts: stated 100ms/token instead of the book's 10ms/token, and even the stated rate's arithmetic doesn't hold (100ms x 100 tokens = 10s, not the claimed 1s) — likely merged the per-token rate with the book's separate ~100ms total-latency target for internet apps. | High | Medium | 🟠 Developing | 1 | 0 |
| G023 | AI engineering | Dataset engineering shift + why it matters more as models commoditize (H15) | Shift described via "close-ended vs. open-ended" (H12's axis) rather than the actual tabular-vs-unstructured-data axis (feature engineering -> dedup/tokenization/retrieval/quality-control). Entirely missed the "why more important as commoditized" half: as models become widely available and similarly capable, the model stops differentiating, so data becomes the differentiator instead — same logic as H6's data flywheel, not yet connected. | High | Medium | 🟠 Developing | 1 | 0 |
| G005 | Foundation models | Multimodal model / LMM (C7) | Attempt 1: inverted "multimodal" definition, conflated LMM with "large language model", missed generative-vs-non-generative axis, unaware CLIP is the non-generative counterexample. **Retest (Q010):** generative-vs-classification axis now landed correctly (CLIP classifies, LMM generates). Still recurring: said "large language model" instead of "large multimodal model" again (2nd occurrence, M002); CLIP's own multimodality (image + text jointly, not just image) left unclear. | Critical | High | 🟠 Developing | 2 | 0 |
| G024 | Language modeling foundations | Supervised learning conflated with finetuning (C5 retest) | Retest (Q032) resolved the core supervised-vs-RL blur (M003) — supervised now correctly framed as pre-labeled dataset, RL as reward-based scoring. New confusion: described supervised learning's labels as coming "after the model has been pretrained," conflating supervised learning's general definition (about label source, not timing) with finetuning (one specific application of supervised learning, applied post-pretraining). | Critical | Low | 🟡 Developing | 1 | 0 |

---
# Concept Mastery

| Concept | Importance | Recall | Explanation | Connection | Application | Overall |
|---|---|---|---|---|---|---|
| C1 Language model definition | Critical | 🟢 correct | — | — | — | Mastered |
| C2 Token/tokenization/vocabulary | Critical | 🟡 mostly (2/3 reasons) | — | — | — | Developing |
| C3 Autoregressive vs masked LM | Critical | 🟢 correct | — | — | — | Mastered |
| C4 Completion machine framing | Critical | 🟡 mostly | — | — | — | Developing |
| C5 Self-supervision vs supervision | Critical | 🟢 correct (term+mechanism) | 🟡 mostly (supervised/RL distinct now, but supervised conflated with finetuning's timing) | — | — | Developing |
| C6 Foundation models definition | Critical | 🟠 partial | — | — | — | Developing |
| C7 Multimodal models / LMM | Critical | 🟠 partial (generative axis correct; LMM-vs-LLM naming still confused) | — | — | — | Developing |
| C8 Three adaptation techniques | Critical | 🟠 partial (2/3, missed RAG) | — | — | — | Developing |
| C9 AI engineering definition | Critical | 🟠 partial (core shift right, "why" + specifics missing) | — | — | — | Developing |
| C10 Three growth factors | Critical | 🟡 mostly (2/3 solid, investment factor circular) | — | — | — | Developing |
| C11 Three layers of AI stack | Critical | 🟠 partial (layers named, but prompting/RAG and scaling misassigned) | — | — | — | Developing |
| C12 AI eng vs ML eng (3 diffs) | Critical | 🟢 correct | — | — | — | Mastered |
| C13 Prompt-based vs finetuning | Critical | 🟠 partial (weight-update distinction correct, tradeoffs missing) | — | — | — | Developing |
| H1 Model as a service | High | 🟢 correct | — | — | — | Mastered |
| H2 Eight use case categories | High | 🟠 partial (one valid point, core risk-tradeoff framing not attempted) | — | — | — | Developing |
| H3 Use case evaluation (3 risk levels) | High | 🟡 mostly (3 categories right, "hedge" slightly imprecise) | — | — | — | Developing |
| H4 AI role: 3 dimensions | High | 🟡 mostly (all 6 sub-points right, 2 minor precision gaps) | — | — | — | Developing |
| H5 Human-in-the-loop / Crawl-Walk-Run | High | 🟢 correct | — | — | — | Mastered |
| H6 AI product defensibility | High | 🟡 mostly (right category, reasoning + flywheel mechanism imprecise) | — | — | — | Developing |
| H7 Usefulness threshold metrics | High | 🟢 correct | — | — | — | Mastered |
| H8 Last mile challenge | High | 🟢 correct | — | — | — | Mastered |
| H9 Maintenance considerations | High | 🟡 mostly (examples right, "why harder" not explained) | — | — | — | Developing |
| H10 Three model-dev responsibilities | High | 🟡 mostly (all 3 named right, dataset engineering thin) | — | — | — | Developing |
| H11 Pre-training/finetuning/post-training | High | 🟡 mostly (hardest part — the distinguishing feature — nailed; weight-change example missed) | — | — | — | Developing |
| H12 Three app-dev responsibilities | High | 🟡 mostly (primary reason nailed, 2nd reason on adaptation-technique comparison missed) | — | — | — | Developing |
| H13 Product→Data→Model workflow | High | 🟡 mostly (reordering rationale solid, involvement framing slightly off) | — | — | — | Developing |
| H14 Autoregressive inference latency challenge | High | 🟠 partial (mechanism correct, numeric example wrong on 2 counts) | — | — | — | Developing |
| H15 Dataset engineering shift | High | 🟠 partial (shift half imprecise, "why more important" half unaddressed) | — | — | — | Developing |
| H16 Embedding vs generative model | High | 🟢 correct | — | — | — | Mastered |

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

## Q002
**Date:** 2026-09-08
**Topic:** Language modeling foundations
**Concept:** C1 — Language model definition
**Difficulty:** Level 1 (Recall)
**Question:** What is a language model, at its core? Define it precisely — what does it encode, and about what?

### My Answer
> "a language model encodes statistical info about a language - how likely a word / token is to appear given a context."

### Assessment
🟢 Correct

### What I Got Right
- Named the core mechanism precisely: statistical likelihood of a token, conditioned on context.
- Used "token" (not just "word"), matching the chapter's precise unit.

### What I Missed
- Nothing material for a Level 1 recall question.

### Model Answer
> A language model encodes statistical information about the likelihood of tokens occurring given a context — i.e., a probability distribution over what token comes next (or is masked), learned from a large body of text.

### Knowledge Gap
None — clean pass.

### Memory Priority
Critical

### Follow-up Required
No.

## Q003
**Date:** 2026-09-08
**Topic:** Language modeling foundations
**Concept:** C2 — Token / tokenization / vocabulary
**Difficulty:** Level 1 (Recall)
**Question:** Why do language models use *tokens* as the unit, instead of whole words or single characters? Give the reasons (chapter gives 3).

### My Answer
> "Because entire words can be generated by sub words, for example, the word watch can branch out to watchers watching watcher, etcetera. Therefore, storing just the base [word], in this case, watch, and all the suffixes after that allows the model to be more efficient and prevents us from overlapping words. At [the same time], we don't use single characters because the branch out from the single characters would be too many and characters will be too general such that any form of prediction from the base characters won't be that useful."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Reason 1 (morpheme/subword decomposition): correctly described words breaking into base + suffix components (watch/watchers/watching), matching "cooking → cook+ing".
- Reason 2 (smaller vocab → efficiency): correctly connected subword storage to avoiding redundant whole-word entries and gaining efficiency.
- Reasonable general intuition on why not single characters (too many, too low-signal) — not one of the book's 3 official reasons but not wrong.

### What I Missed
- Did not separate reason 1 and reason 2 as distinct points — blended into one idea.
- Missed reason 3 entirely: tokens let the model handle **unknown/made-up words** by splitting them into known sub-parts (e.g., "chatgpting" → "chatgpt" + "ing").

### Model Answer
> Three reasons: (1) Tokens let the model break words into meaningful components (e.g., "cooking" → "cook" + "ing"). (2) Fewer unique tokens than unique words → smaller vocabulary → more efficient model. (3) Tokens help the model process unknown/made-up words by splitting them into known sub-parts (e.g., "chatgpting" → "chatgpt" + "ing").

### Knowledge Gap
Hasn't yet surfaced the "handles unknown/made-up words" rationale for tokenization — only got the efficiency/decomposition angle.

### Memory Priority
High

### Follow-up Required
Yes — light retest later (different angle, e.g. ask directly "what happens when the model sees a word it's never seen before?").

## Q004
**Date:** 2026-09-08
**Topic:** Language modeling foundations
**Concept:** C4 — Language model as "completion machine"
**Difficulty:** Level 1 (Recall)
**Question:** Chapter frames a language model as a "completion machine." What does that mean, and why does completion ≠ conversation matter?

### My Answer
> "Because a language model encodes the statistical information about the language and how each token appears after the previous tokens, essentially, what it can be referred to as something that completes a sentence. Completion doesn't really equate to conversation because in a conversation intent matters, purpose of the conversation matters and context matters, whereas for completion, it's all about just thinking about what tokens come next most probably."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Correctly framed "completion machine": given a prompt, predicts/completes based on next-token probability (ties back cleanly to C1/C5).
- Correctly sensed conversation involves something completion alone doesn't (intent/purpose/context) — right direction.

### What I Missed
- Did not state that completions are **predictions based on probability, not guaranteed correct**.
- Missed the book's concrete failure mode: a completion machine may complete a question with **another question** rather than answering it — this is *why* completion ≠ conversation matters practically, and is only fixed later via post-training.

### Model Answer
> A completion machine takes a prompt and predicts/generates the most probable continuation — it doesn't "understand" or "converse," it completes text. Example: "To be or not to be" → ", that is the question." These completions are predictions based on probabilities, not guaranteed to be correct. Completion ≠ conversation because a raw completion machine, given a question, may complete it with another question (continuing the pattern of "text that follows text") rather than answering it — turning a completion machine into a conversational assistant requires additional work (post-training).

### Knowledge Gap
Understands the mechanism but hasn't yet connected it to the concrete consequence (question-answered-with-question) or the "not guaranteed correct" caveat.

### Memory Priority
High

### Follow-up Required
Yes — light retest later, ideally paired with post-training (H11) once that's covered.

## Q005
**Date:** 2026-09-08
**Topic:** Language modeling foundations
**Concept:** C6 — Foundation models definition
**Difficulty:** Level 1 (Recall)
**Question:** What is a foundation model, and why does the book prefer this term over "LLM"?

### My Answer
> "foundational model is able to handle more than just languages. It's able to look at images, generate images, generate videos, and look at context and a larger picture rather than just text form."

### Assessment
🟠 Partially Correct

### What I Got Right
- Correctly identified multimodality (images, video, beyond text) as part of why "LLM" is too narrow.

### What I Missed
- The actual naming rationale: "foundation" signals the model is a **base others adapt/build on** for many different needs — a general-purpose model, not a task-specific one. Multimodality is one symptom of this, not the core reason for the name.
- Foundation models mark a break from the old **siloed-by-modality** research structure (NLP=text only, CV=vision only, audio=STT/TTS only) — this book explicitly frames it as ending that silo structure.
- Didn't state that the book uses "foundation model" as an umbrella covering **both** LLMs and LMMs (large multimodal models).

### Model Answer
> A foundation model is a general-purpose model — trained at scale via self-supervision — that serves as a *base* others can adapt (via prompting, RAG, or finetuning) for many different downstream needs, rather than being built for one narrow task. The book prefers "foundation model" over "LLM" for three reasons: (1) these models now handle modalities beyond text (images, video, audio), so "language" model undersells them; (2) the term signals their role as a foundation to build upon; (3) it breaks from the old AI research structure siloed by modality (NLP/CV/audio as separate fields). The book uses "foundation model" as an umbrella covering both LLMs (text-only) and LMMs (large multimodal models).

### Knowledge Gap
Narrowed the naming rationale to multimodality alone; missing the "general-purpose base for adaptation" framing and the siloed-research-break argument, which are the book's primary reasons.

### Memory Priority
Critical

### Follow-up Required
Yes — retest, ideally paired with C9 (AI engineering definition) since they're adjacent in the chapter's argument chain.

## Q006
**Date:** 2026-09-08
**Topic:** Foundation models
**Concept:** C7 — Multimodal models / LMM
**Difficulty:** Level 1 (Recall)
**Question:** What's the difference between a "multimodal model" and a "large multimodal model (LMM)"? Use CLIP to illustrate the distinction.

### My Answer
> "A multi modal model is typically catered for a type of material. In this case, text, image, or video, whereas a large language model will be able to cater for the wide variety of file type."

### Assessment
🔴 Incorrect

### What I Got Right
- Recognized that text/image/video are the modalities in play, and that there's some size/scope distinction being asked about.

### What I Missed
- Inverted the definition of "multimodal model": it's a model that works with **more than one** modality (not "catered for a type"/single modality).
- Said "large language model" instead of "large multimodal model" — different concept entirely.
- Missed the actual distinguishing axis: **generative vs. non-generative**. LMM = generative multimodal model (predicts next token across modalities). A multimodal model need not be generative — e.g., an embedding model.
- Missed CLIP as the illustrating example: CLIP is multimodal (text+image) but explicitly **not** an LMM — it's a non-generative embedding model, trained on 400M image-text pairs, and serves as a backbone for LMMs like Flamingo/LLaVA/Gemini.

### Model Answer
> A multimodal model is any model that works with more than one data modality. A large multimodal model (LMM) is specifically the *generative* subset — it generates the next token conditioned on tokens from multiple modalities (e.g., text + image → next token). CLIP illustrates the split: it's multimodal (trained on 400M image-text pairs via natural language supervision) but is NOT an LMM — it's non-generative, an embedding model that produces joint text/image embeddings. Generative LMMs (Flamingo, LLaVA, Gemini) are often built on top of embedding backbones like CLIP.

### Knowledge Gap
Missing the generative/non-generative axis entirely for multimodal models; conflated "large multimodal model" with "large language model"; unaware CLIP is the book's specific non-generative counterexample.

### Memory Priority
Critical

### Follow-up Required
Yes — retest soon (High priority), this is a clean/distinct concept easy to nail with one more clear pass. Pair with X6 (embedding vs. generative model) from knowledge-map.

## Q007
**Date:** 2026-09-09
**Topic:** Language modeling foundations
**Concept:** C5 — Self-supervision vs. supervision (retest, comparison type)
**Difficulty:** Level 2 (Comparison)
**Question:** Four terms: supervised learning, self-supervised learning, unsupervised learning, reinforcement learning. Pick the one language-model pretraining uses. Explain how it differs from the other three — where do labels come from in each?

### My Answer
> "self-supervised learning - self-supervised learning uses information it already has and trains itself on it e.g. given a sentence with 4 words, the model will use the first word to determine the second word, the first two words to determine the third etc. supervised learning is the human indicating whether the predictions by the model is correct or not and manually have to indicate so. unsupervised learning is training on unlabelled data. reinforcement learning is giving the trained model what are samples to guess when given a prompt. no labels in unsupervised learning. labels are self-given by the model itself during training in self-supervised learning. labels are given by the human in both supervised and reinforcement learning."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Correctly named **self-supervised learning** as the pretraining technique — term no longer confused with reinforcement learning.
- Correctly described the mechanism: using preceding tokens/words in a sentence to predict the next one (autoregressive), with a concrete worked example.
- Correctly stated unsupervised learning uses no labels at all.

### What I Missed
- Supervised learning misdescribed: it's not "a human indicating whether the prediction is correct or not" live — it's a **pre-labeled dataset** (input-output pairs created by humans *before* training) that the model is trained to match.
- Reinforcement learning misdescribed and left vague ("giving the trained model samples to guess when given a prompt") — missing the actual mechanism: an agent takes actions and receives a **reward signal** (scalar feedback on outcome quality), not an explicit correct/incorrect label per input.
- Supervised and RL got blurred into similar-sounding "human checks the answer" framings — they're distinct paradigms (fixed labeled dataset vs. reward-driven trial and error).
- "Labels are self-given by the model itself" is an imprecise phrasing — the label isn't invented by the model, it's already present in the raw text (the actual next word); the model doesn't need a human to point it out.

### Model Answer
> Self-supervised learning is what LM pretraining uses. A single piece of raw text supplies both the input and the label simultaneously — the label (next token) is already present in the text, no human needs to annotate anything.
> - **Supervised learning:** trained on a fixed dataset of (input, correct-output) pairs, typically labeled by humans in advance of training.
> - **Unsupervised learning:** no labels at all; model finds structure/patterns in raw data (e.g., clustering).
> - **Reinforcement learning:** an agent takes actions and receives a reward signal reflecting how good the outcome was — not an explicit per-input correct answer — and learns to maximize cumulative reward over time (used later for post-training/RLHF, not initial LM pretraining).

### Knowledge Gap
Self-supervision term + mechanism now solid (M001 resolved). New gap: supervised learning and reinforcement learning definitions are blurred together — both described as "a human checks correctness," missing that supervised = fixed pre-labeled dataset, RL = reward signal with no explicit correct answer per input.

### Memory Priority
High

### Follow-up Required
Yes — light retest later, ideally paired with H11 (pre-training/finetuning/post-training) since RLHF (post-training) is where RL actually reappears in the book's story.

## Q008
**Date:** 2026-09-09
**Topic:** Foundation models
**Concept:** C8 — Three adaptation techniques
**Difficulty:** Level 1 (Recall)
**Question:** Chapter names 3 ways to adapt a foundation model to a specific task/product. Name them, and briefly say what each one changes (what's fixed, what's altered).

### My Answer
> "prompt engineering - using just the prompt to guide the model to the desired outcome, no model weights changed here. finetuning - actually changing the model weights. post-training - also changing model weights but geared towards specific tasks."

### Assessment
🟠 Partially Correct

### What I Got Right
- Prompt engineering: correctly described as prompt-only, no weight changes.
- Finetuning: correctly described as changing model weights.

### What I Missed
- Third technique is **RAG** (retrieval-augmented generation), not post-training. RAG keeps weights fixed and augments the prompt with relevant retrieved context at inference time.
- Post-training changes weights, but it's a model-*development* step done by the model's creator before release — not one of the three techniques an app builder uses to adapt an existing foundation model to their own task/product.

### Model Answer
> The three adaptation techniques: (1) **Prompt engineering** — craft the input prompt to guide the model, no weights changed. (2) **RAG** — retrieve relevant external context and feed it into the prompt at inference time, still no weights changed, but the model now has access to information beyond its training data. (3) **Finetuning** — further train the model's weights on task-specific data, actually altering the model itself.

### Knowledge Gap
RAG missing from the adaptation-technique list; post-training incorrectly substituted in its place (correct mechanism — weight change — but wrong category, since post-training is a model-dev step, not an app-builder adaptation technique).

### Memory Priority
Critical

### Follow-up Required
Yes — retest, pair with C13 (prompt-based vs. finetuning) since RAG sits under the "prompt-based" umbrella in that comparison.

## Q009
**Date:** 2026-09-10
**Topic:** Foundation models
**Concept:** C9 — AI engineering definition
**Difficulty:** Level 1 (Recall)
**Question:** Chapter defines "AI engineering" as its own thing, distinct from ML engineering / MLOps. What's the definition, and what are the key differences from traditional ML engineering?

### My Answer
> "ai engineering is really about using the ai models that the ml engineers have built and applying that to problems."

### Assessment
🟠 Partially Correct

### What I Got Right
- Correct core directional shift: AI engineers use/adapt existing models rather than training them from scratch.

### What I Missed
- The "why": foundation models are what made this a distinct discipline — they made it possible to build powerful AI applications without needing ML training expertise or infrastructure at all.
- Concrete skill/workflow differences from ML engineering/MLOps: less model-training math and training infra, more prompt engineering, evaluation design, and adaptation techniques (prompting/RAG/finetuning); faster iteration cycles; lower entry barrier since no need to train compute-hungry models.
- Didn't name "foundation models" explicitly as the enabling factor, or connect back to C6/C8 (already-tested adjacent concepts).

### Model Answer
> AI engineering is the practice of building applications on top of existing foundation models — via prompt engineering, RAG, and finetuning — rather than training models from scratch. It's distinct from traditional ML engineering/MLOps because the hard part shifts: less about model training/algorithms/training infra, more about adaptation, evaluation, and product-layer engineering around a model someone else already built. Foundation models are *why* this split exists — they made it possible to build serious AI products without ML training expertise.

### Knowledge Gap
Has the right directional intuition but not yet the precise definition — missing the foundation-model-enabled "why" and the concrete list of what shifts (training/infra-heavy -> adaptation/eval-heavy).

### Memory Priority
Critical

### Follow-up Required
Yes — retest, ideally paired with C12 (AI eng vs. ML eng, 3 differences) since they're the same comparison at different depth.

## Q010
**Date:** 2026-09-10
**Topic:** Foundation models
**Concept:** C7 — Multimodal model vs. LMM (retest)
**Difficulty:** Level 1 (Recall)
**Question:** What's the difference between a "multimodal model" and a "large multimodal model (LMM)"? Use CLIP to illustrate the distinction.

### My Answer
> "A multimodal model is a model that is specifically used for specific type of sources. For example, clip is a multimodal model for images, and it transforms images into embeddings. and what to make sense out of those embeddings. EKA when you present clip with a photo of a dog, it is able to say that this is a picture of a dog. A large language model, on the other hand, is able to produce more than one type of sauce with image, video, audio, text whatsoever. And the difference of this is an LLM is able to generate new content. It's able to create content versus, for example, just classifying image."

### Assessment
🟠 Mostly Correct

### What I Got Right
- Landed the core distinguishing axis that was entirely missing in Q006: **generative vs. non-generative/classification**. Correctly framed CLIP as classifying ("this is a picture of a dog") vs. an LMM generating new content — this is the right distinction, and the main gap from the first attempt.
- Correctly identified CLIP as multimodal and working via embeddings.

### What I Missed
- Said "large language model" instead of "large multimodal model" again — the **same specific naming confusion as Q006** (M002), a 2nd occurrence, not yet resolved.
- CLIP's own multimodality wasn't clearly conveyed: described it as "a multimodal model for images" (mentions only one modality), when CLIP's actual multimodality is that it jointly embeds **both image and text** together (trained on 400M image-text pairs) — that pairing is what makes it multimodal in the first place.
- Initial abstract definition ("used for specific type of sources") is muddled/backwards-sounding — reads closer to "specialized for one type" than "handles more than one type" — only the CLIP example rescues the actual intent.

### Model Answer
> A multimodal model is any model that works with more than one data modality. A large multimodal model (LMM) is specifically the *generative* subset — it generates the next token conditioned on tokens from multiple modalities (e.g., text + image → next token). CLIP illustrates the split: it's multimodal (trained on 400M image-text pairs, jointly embedding both) but is NOT an LMM — it's non-generative, an embedding model that produces joint text/image embeddings, usable for zero-shot classification via similarity matching. Generative LMMs (Flamingo, LLaVA, Gemini) are often built on top of embedding backbones like CLIP.

### Knowledge Gap
The generative/non-generative axis (the main gap from Q006) is now solid. Remaining: the specific LMM/LLM naming slip is a recurring, specific confusion (not a conceptual gap) — worth deliberate correction since it's happened twice identically. CLIP's two-modality nature (image + text, not just image) still needs to be stated explicitly to fully nail this concept.

### Memory Priority
Critical

### Follow-up Required
Yes — one more retest, specifically drilling the term "large multimodal model" by name (not just the concept) to break the LLM/LMM naming slip, and explicitly stating CLIP's two input modalities.

## Q011
**Date:** 2026-09-10
**Topic:** Foundation models
**Concept:** C10 — Three growth factors driving AI engineering
**Difficulty:** Level 1 (Recall/Explanation)
**Question:** Chapter names three factors that drove AI engineering's rapid growth as its own discipline: general-purpose AI capabilities, increased AI investment, and low entrance barrier. Explain what each one means and why it mattered.

### My Answer
> "General purpose AI capabilities refer to the ability to unlock a lot more capabilities by the AI model. In the past, AI models were limited to classifying whether something is spam or not, classifying whether this image is a dog or a cat or not. But now since AI model is able to generate new content in the form of tags, video, audio, whatsoever, it opens up a world of opportunities in terms of problems to solve or new opportunities to discover. With this, it led to an increase in AI investment due to the unlimited potential that AI brings with it. Because the more investments come into the field, the more models can be explored and the more capabilities can be unlocked, further driving the AI engineering's growth. Lastly, there's a low entrance barrier to AI engineering because previously this field was mainly populated by personnel such as machine learning engineers, whose main task was to create models with math and science. However, now since the models are widely available for everyone to use, it doesn't take a lot of technical knowledge to be able to apply these models on business problems and opportunities. That's why there's an increasing amount of people using these models and tweaking them as is much easier than what the ML engineers did in the past."

### Assessment
🟡 Mostly Correct

### What I Got Right
- General-purpose capabilities: well explained, concrete before/after contrast (narrow classifiers like spam/cat-vs-dog -> generative, multi-task models), correctly identifies this unlocked many new problems/opportunities.
- Low entrance barrier: well explained, correctly ties back to C9 — ML engineers needed deep math/stats to build from scratch; now foundation models are usable off-the-shelf, expanding who can build AI products. Good integration with earlier tested material.

### What I Missed
- Investment factor was circular: "more investment -> explore more models -> unlock more capabilities -> drives growth" doesn't name the actual mechanism (what the money funds: compute, research, tooling/infrastructure, talent) or explain why investment specifically surged.
- Missed the causal link between the three factors: they're not three independent parallel causes — factor 1 (demonstrated general-purpose capability) is what triggered factor 2 (investment surge, by proving commercial viability), which then funded more compute/research that further accelerated capabilities and lowered costs.

### Model Answer
> **General-purpose capabilities:** foundation models can do many tasks via prompting alone, no retraining needed per task — unlike narrow task-specific models before, unlocking far more applications with far less effort per application. **Increased investment:** the demonstrated general-purpose capability proved AI's commercial viability at scale, driving massive investment; that investment funded more compute, research, and tooling/infrastructure, further accelerating capabilities and lowering costs — a reinforcing loop with factor 1. **Low entrance barrier:** foundation models are available off-the-shelf (API or open-weights), so building an AI application no longer requires training a model from scratch or deep ML expertise — prompt engineering/RAG/lightweight finetuning let general software engineers build powerful AI products, massively expanding who can participate in AI engineering.

### Knowledge Gap
Factors 1 and 3 solid. Factor 2 (investment) explained circularly rather than mechanistically — needs to name what investment actually funds, and needs the causal chain between all three factors (they reinforce each other, not independent).

### Memory Priority
Medium — the investment mechanism itself is less likely to be probed deeply in an interview than the "why does low entrance barrier matter" angle (already solid, ties to AI eng vs ML eng), but the causal-chain framing (factors reinforce each other) is a stronger, more complete answer worth having ready.

### Follow-up Required
Yes — light retest later, focused specifically on the investment mechanism + the causal chain between all three factors.

## Q012
**Date:** 2026-09-10
**Topic:** AI engineering
**Concept:** C11 — Three layers of the AI engineering stack
**Difficulty:** Level 1 (Recall/Explanation)
**Question:** Chapter describes the AI engineering stack as three layers: application development, model development, and infrastructure. What belongs in each layer, and how do they relate to each other?

### My Answer
> "For application development, it's to do with how the prompt gets received from the user. How requests get received to the user and communicating that with the models to then receive their responses from the models to pass them, to clean them, to check them, validate them, to make sure there's no security lapses involved whatsoever. Application development also covers things like how do you scale the serving of these models to the users. Model development on the other hand is to do with fine tuning the model from engineering. How do you update the prompt or tweak the prompts that you get a better response from the model? It's also to do with things like retrieval augmented generation, whereby we connect the models to external data sources to produce responses that are more accurate and more grounded in truth. Infrastructure is more about where do we host these models, be it with a third party provider or be it on premise within our own servers or within the cloud that we own."

### Assessment
🟠 Partially Correct

### What I Got Right
- Application development's request/response/validation/security framing — solid, matches AI15 (production guardrails) closely.
- Infrastructure's hosting-location framing (third-party/on-prem/cloud) — directionally correct.
- Correctly recalled all three layer names and their general theme without prompting.

### What I Missed
- Prompt engineering and RAG placed under "model development" — neither changes the model's weights, both are about what's fed to a *fixed* model at inference time. Book places both under **application development**. This is a real conceptual swap, not a naming slip.
- Scaling/serving placed under "application development" — that's infrastructure's job (the compute/serving/monitoring layer underneath both other layers). Infrastructure description, meanwhile, only covered hosting location, missing serving/scaling/monitoring/cost management — exactly the thing misplaced above.
- Never addressed how the three layers relate to each other, despite the question asking directly.

### Model Answer
> **Application development** — building on top of a model without modifying it: prompt engineering, context construction (RAG), evaluation, guardrails, user-facing interfaces. Where most AI engineers work day to day. **Model development** — actually training/adapting the model itself: pretraining, finetuning, dataset engineering, model-level evaluation. Closer to traditional ML engineering, touched by fewer people. **Infrastructure** — the layer beneath both: compute management, serving/inference optimization, monitoring, deployment, cost/latency management — supports both layers above it.

### Knowledge Gap
Layer *names* and general theme are solid, but the *boundary* between application development and model development is blurred — specifically, doesn't yet distinguish "changes the model's weights" (model development) from "changes what's fed to a fixed model" (application development). This same boundary confusion would likely recur on C13 (prompt-based vs. finetuning) if tested now.

### Memory Priority
Critical — this layer boundary is foundational to the whole book's framing and directly affects how C8 (adaptation techniques) and C13 (prompt-based vs. finetuning) get reasoned about.

### Follow-up Required
Yes — retest, ideally paired with C13 since they test the same boundary (weights-changed vs. weights-fixed) from different angles.

## Q013
**Date:** 2026-09-11
**Topic:** AI engineering
**Concept:** C12 — AI engineering vs. ML engineering (3 differences)
**Difficulty:** Level 1 (Recall)
**Question:** Chapter names 3 concrete differences between AI engineering and traditional ML engineering. What are they?

### My Answer
> "No need to train model from scratch - ai engineering is all about tweaking and adapting ready models. Larger models - more compute needed due to sheer size of models. Optimisation focused to bring cost and latency down without sacrificing quality. Open ended outputs - traditional ml engineering was closed output e.g. spam not spam, cat photo, dog photo. Ai engineering is more about open ended outputs. More flexibility. Challenging to evaluate."

### Assessment
🟢 Correct

### What I Got Right
- No training from scratch — correct, and directly closes the "why" gap flagged back in C9.
- Bigger models, more compute — correct, with the right nuance: optimization focus shifts to inference cost/latency, not training efficiency.
- Open-ended outputs, harder to evaluate — correct, right contrast (spam/not-spam, cat/dog as closed-form ML) vs. generative open-ended output, correctly flags the evaluation challenge (ties to AI9-AI11).

### What I Missed
Nothing material — clean pass, all three differences correct and well-explained.

### Model Answer
> (1) No need to train from scratch — adapt existing foundation models via prompting/RAG/finetuning instead. (2) Bigger, more resource-intensive models — heavier compute, with optimization focus shifting to inference cost/latency rather than training efficiency. (3) Open-ended outputs — traditional ML has closed-form outputs (classification/regression) with clear ground truth; AI engineering's generative outputs are open-ended, harder to evaluate with simple accuracy-style metrics.

### Knowledge Gap
None — clean pass. Worth noting: point 1 here is exactly the "why" that was missing from C9's answer — good sign that the concept is now genuinely internalized, not just pattern-matched once.

### Memory Priority
Critical

### Follow-up Required
No.

## Q014
**Date:** 2026-09-11
**Topic:** Model adaptation
**Concept:** C13 — Prompt-based techniques vs. finetuning
**Difficulty:** Level 1 (Recall/Explanation)
**Question:** What's the weight-update distinction between prompt-based techniques and finetuning, and what are the tradeoffs (data needs, complexity, ceiling on what's achievable)?

### My Answer
> "prompt based techniques do not change the model weights. the base model stays the same so one may try nudge the model to his desired outcome by adapting his prompt. finetuning on the other hand is updating the model weights themselves, altering the actual base behaviour of the model. this is typically used if the model is biased towards a particular direction."

### Assessment
🟠 Partially Correct

### What I Got Right
- Core weight-update distinction: prompt-based keeps weights frozen (nudge via input), finetuning updates weights (changes actual model behavior). This directly resolves the exact boundary confusion flagged in C11 (Q012) — good sign the correction landed.

### What I Missed
- The concept explicitly asks for the tradeoffs (data needs, complexity, ceiling on what's achievable) — not covered at all.
- "Used when the model is biased toward a particular direction" is a narrow, not-quite-canonical framing of finetuning's use case — the core tradeoffs are: prompting needs no training data and is fast/cheap to iterate, but has a ceiling (limited by context window, can't always achieve needed consistency, can't durably add new knowledge/behavior); finetuning needs curated labeled data + training infrastructure (more complex, higher upfront cost), but can exceed that ceiling — better consistency, encodes knowledge that doesn't fit in-context, can lower long-term cost/latency by replacing a large-model-plus-long-prompt setup with a smaller finetuned model.

### Model Answer
> Prompt-based: no weight change, no training data needed, fast/cheap to iterate, but capped by context window and can't durably change model behavior. Finetuning: updates weights, needs labeled data + training infra (more complex/costly upfront), but can exceed prompting's ceiling — better consistency, encodes knowledge prompting can't fit in-context, can lower per-inference cost/latency at scale.

### Knowledge Gap
Mechanism (weight-update distinction) is now solid — the exact gap from C11 is resolved. Remaining: the tradeoffs half of this concept (data needs, complexity, ceiling) hasn't been tested cleanly yet.

### Memory Priority
Critical

### Follow-up Required
Yes — light retest later, focused specifically on the tradeoffs (data/complexity/ceiling) rather than the mechanism, which is now solid.

## Q015
**Date:** 2026-09-11
**Topic:** AI engineering
**Concept:** H1 — Model as a service / API-based access
**Difficulty:** Level 1 (Explanation)
**Question:** How does "model as a service" (API-based access to foundation models) lower the entrance barrier to AI engineering? Connect this to C10/C12 if relevant.

### My Answer
> "because the end user wanting access to the model's abilities do not have to worry about purchasing servers to host the model, to do expensive training, expensive prefilling and inference. now third party providers that have servers in the cloud host them and serves them to people at scale to hopefully get the economies of scale to bring costs down. also, since there are competitors doing so too, it further drives price competitiveness amongst them."

### Assessment
🟢 Correct

### What I Got Right
- Core mechanism: no need to buy servers or absorb training/inference costs directly — third-party providers host at scale, achieving economies of scale that lower cost, with competition among providers driving prices down further. Correctly connects to C10 (low entrance barrier) and C12 (no training from scratch) in substance, even without naming them explicitly.

### What I Missed
Nothing material — clean pass.

### Model Answer
> Model-as-a-service means calling an API instead of hosting/training your own model — no server procurement, no training compute, no ML infrastructure needed. Third-party providers absorb that cost and serve many customers at scale (economies of scale lower per-user cost), and competition among providers (OpenAI, Anthropic, etc.) drives pricing down further. This is the concrete mechanism behind C10's "low entrance barrier" factor and C12's "no need to train from scratch" difference.

### Knowledge Gap
None — clean pass.

### Memory Priority
High

### Follow-up Required
No.

## Q016
**Date:** 2026-09-11
**Topic:** AI engineering
**Concept:** H2 — Eight use case categories
**Difficulty:** Level 2 (Explanation)
**Question:** Chapter names 8 use case categories for AI applications: coding, image & video production, writing, education, conversational bots, information aggregation, data organization, workflow automation. Which of these are highest-risk/most valuable specifically for enterprise use, and why — internal-facing vs. external-facing risk tradeoff?

### My Answer
> "Data organization is the most valuable for enterprise use because there's a lot of unstructured data and making sense of the data would bring a lot of business value. I'm not sure how [to] answer the rest of the questions."

### Assessment
🟠 Partially Correct

### What I Got Right
- Data organization's enterprise value (turning messy unstructured data into something useful) is a fair, defensible point.

### What I Missed
- Didn't attempt the core ask at all: the internal-facing vs. external-facing risk tradeoff. Explicitly said unsure.

### Model Answer
> The risk split isn't really about which *category* you pick — it's about who the deployment faces. **Internal-facing** (employees only: internal coding assistants, internal knowledge chatbots, internal workflow automation) is lower risk — mistakes stay inside the org, employees can sanity-check against what they already know, no customer/public exposure, easy to iterate quietly. **External-facing** (customers/public: customer service bots, AI-generated marketing content) is higher risk — mistakes are visible externally, carry reputational/legal/compliance exposure, harder to walk back, can go viral if embarrassing. The same category (e.g. conversational bots, writing) can be deployed either way — that's the actual tradeoff, not an inherent property of the category. Practical implication: enterprises typically start with internal-facing use cases to build trust/experience before going external.

### Knowledge Gap
Hasn't yet encountered the internal-vs-external risk framing at all — this is new material, not a misapplication of something already known. Needs a full first exposure, not just a correction.

### Memory Priority
High

### Follow-up Required
Yes — retest later once this has had time to sit; this is foundational for any enterprise-deployment-risk discussion (ties to FDE prep's customer-facing judgment category too — CJ1's Data & Security bucket touches similar territory).

## Q017
**Date:** 2026-09-11
**Topic:** AI engineering
**Concept:** H3 — Use case evaluation (3 risk-ordered reasons to build an AI application)
**Difficulty:** Level 2 (Explanation)
**Question:** Chapter gives 3 reasons a company decides to build an AI application, ordered by risk/urgency: existential threat, profit/productivity opportunity, and hedge against being left behind. What does each mean, and why does the order matter?

### My Answer
> "Existential threat is about the company being obsolete if they do not implement AI technologies. Profit productivity opportunity is about how the company can be extracting more value from their services using AI or to extract more from their employees using AI, therefore creating more output. Hedge against being left behind is more of using AI as a nice to have, something the company can operate easily without, but it's more of a way to be having a skin in the game and to also explore what AI can do for the business. The order matters because on one end, if the company does not implement AI, it will probably go obsolete and be overtaken by competitors. Hedge being the least important is because the company will probably be doing very well now, not facing any competition, and AI is more of a nice to have."

### Assessment
🟡 Mostly Correct

### What I Got Right
- All three categories captured with the right gist: existential threat (obsolescence/survival risk), profit/productivity (efficiency/output multiplier), hedge (lower-stakes exploration).
- Correctly ordered existential threat as most urgent (survival stakes) and hedge as least urgent (company doing fine without it).

### What I Missed
- "Hedge" characterized as mere "nice to have" — actually means deliberate strategic insurance against a *future* risk: things are fine today, but experimenting early protects against AI becoming competitively necessary later. Not casual curiosity, but calculated risk management.
- Didn't explain why profit/productivity sits specifically in the *middle*: more urgent than a hedge because it's an active, measurable opportunity happening now (not speculative), but less urgent than existential threat because the company survives fine without acting on it immediately.

### Model Answer
> **Existential threat** — without AI, the business itself risks obsolescence/collapse (highest urgency, act now). **Profit/productivity opportunity** — AI as a concrete, measurable efficiency or output multiplier on existing operations (real opportunity, not survival-critical — middle urgency). **Hedge against being left behind** — deliberate strategic insurance: things are fine now, but experimenting early protects against a future where AI becomes competitively necessary (lowest urgency, but not zero-value). Order reflects urgency of consequence, not importance of AI itself.

### Knowledge Gap
Core categories and top/bottom ordering solid. Missing: hedge's insurance-against-future-risk nature (vs. mere nice-to-have), and the explicit rationale for the middle category's position.

### Memory Priority
Medium

### Follow-up Required
Yes — light retest later, focused on the "hedge" nuance and middle-category rationale specifically.

## Q018
**Date:** 2026-09-11
**Topic:** AI engineering
**Concept:** H4 — Role of AI in a product (3 dimensions)
**Difficulty:** Level 2 (Explanation)
**Question:** Chapter names 3 dimensions for describing what role AI plays in a product: critical vs. complementary, reactive vs. proactive, and dynamic vs. static. Explain each dimension and give an example for each side.

### My Answer
> "Critical is that the AI is absolutely necessary for the app or product to function. Things like Face ID, Touch ID. Complementary is more of nice to have, added benefit of AI onto the product — for example, a grammar checker in an email. Reactive is to do with things like responding to customer or user activity, for example a chatbot. Proactive is more about precomputed logic being sent to the user at a designated time — reactive needs to be almost instant, whereas proactive can have a delay. Proactive example is traffic updates/alerts/notifications. For dynamic versus static: dynamic is how the features get updated on the fly, in the case of Face ID, whereby the feature constantly knows how your face changes and updates accordingly as you get older. Static is the AI features only being updated per app install — example, Google Photos being able to detect images of a cat, a dog, whatsoever."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Critical (Face ID/Touch ID — product doesn't function without it) vs. Complementary (grammar checker — nice-to-have) — exactly right.
- Reactive (chatbot responds to user activity) — correct.
- Dynamic (Face ID adapting to face changes over time) — genuinely good example.

### What I Missed
- Reactive-vs-proactive's core defining criterion — *who initiates* (reactive waits for a user request, proactive acts on anticipated need without being asked) — wasn't stated. Substituted a latency-based framing (reactive near-instant, proactive can delay), which is a true secondary characteristic but not the primary definition. Traffic-alert example for proactive still works fine.
- Static described as "updated per app install" — more precisely it's "per app/model release": the model's behavior is fixed and identical for everyone until the next version ships, not personalized to an individual's ongoing data in real time. Google Photos cat/dog detection example still works.

### Model Answer
> **Reactive** = AI responds only when the user initiates (a chatbot waits for a message). **Proactive** = AI initiates based on anticipated need, without a direct request (a traffic app alerting you to leave early because it predicts congestion). **Static** = the model's behavior is fixed until the next app/model update ships — it doesn't adapt per-user in real time (Google Photos' object detection is the same for everyone between releases).

### Knowledge Gap
Critical/complementary fully solid. Reactive/proactive and dynamic/static both have the right examples but the stated definitions lean on secondary characteristics (latency, install timing) rather than the primary defining criterion (initiation direction; per-release vs. per-user adaptation).

### Memory Priority
Medium

### Follow-up Required
Yes — light retest later, focused on stating the primary criterion for reactive/proactive and dynamic/static precisely, not just giving correct examples.

## Q019
**Date:** 2026-09-11
**Topic:** AI engineering
**Concept:** H5 — Role of humans (human-in-the-loop; Crawl-Walk-Run framework)
**Difficulty:** Level 2 (Explanation)
**Question:** Chapter describes a "Crawl-Walk-Run" framework with 3 stages for how much autonomy an AI system gets over time, tied to human-in-the-loop involvement. What are the 3 stages, and how does the human's role change across them?

### My Answer
> "Crawl - human involvement mandatory. Walk - AI can interact with internal employees. Run - AI can interact with external employees. Human's role gets less and less hands-on as crawl goes to run."

### Assessment
🟢 Correct

### What I Got Right
- Crawl = mandatory human involvement — correct.
- Walk = AI can directly interact with internal employees — correct, matches the book's own Microsoft (2023) framework exactly.
- Run = increased automation, potentially including direct AI interaction with external users — correct.
- Overall directional trend (human role gets less hands-on over time) — correct.

### What I Missed
Nothing — clean pass. (See retraction note below.)

### Model Answer
> **Crawl** — human involvement mandatory. **Walk** — AI can directly interact with internal employees. **Run** — increased automation, potentially including direct AI interaction with external users. The right level shifts over time as system quality improves (e.g., start with AI suggestions for human agents; once acceptance rate is high on simple requests, let AI handle those directly).

### Knowledge Gap
None. **Correction note (2026-09-11):** originally graded 🟠 Partially Correct, claiming Crawl-Walk-Run should be defined by "degree of human oversight" rather than audience, and accusing this answer of conflating it with H2's internal/external dimension. That grading was wrong — checked `source.md` directly and this book's own Crawl-Walk-Run (Microsoft 2023) is audience-based, exactly as originally answered. The "oversight-frequency" framing was the assistant's unsourced substitution from general industry knowledge, not this book's definition. Score corrected from Partially Correct to Correct; the false gap (G015) retracted in the Knowledge Gaps table.

### Memory Priority
Low — concept confirmed solid, no further action needed.

### Follow-up Required
No.

## Q020
**Date:** 2026-09-11
**Topic:** AI product strategy
**Concept:** H6 — AI product defensibility
**Difficulty:** Level 2 (Explanation)
**Question:** Chapter names 3 general categories of competitive advantage: technology, data, and distribution. Foundation models erode one of these particularly. Which one, why, and what's the "data flywheel" idea that can still create a moat?

### My Answer
> "foundation models erode technology, because there's a humungous store of tech data that can be used to train the models to be able to generate them on the fly. the data flywheel idea is about how data can be a moat e.g. if ure a startup and u have firsthand data of how a specific set of users use a particular product or have a specific problem, none has that yet and no models have trained on them too, so that becomes a competitive advantage."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Correctly identified technology as the eroding advantage category (verified against source.md before grading, per the lesson from Q019).
- Correctly identified the high-level idea that data can be a startup's competitive moat via first-mover advantage.

### What I Missed
- Reasoning for *why* technology erodes was imprecise/garbled — didn't state the actual mechanism: foundation models are broadly available at low cost/barrier, so core technical capability converges across companies; a thin differentiator built on top risks being subsumed as the base model improves.
- Data flywheel described as a static, one-time advantage ("we have data nobody else has") rather than the actual compounding *loop*: usage generates behavioral insight -> insight improves the product -> better product attracts more usage -> more usage generates more insight. Also missed the book's specific nuance that this works even when raw user data can't be used to directly train a model.

### Model Answer
> **Technology** erodes — foundation models are available to everyone at low cost/barrier, so core tech capability converges across competitors; a thin wrapper around a foundation model risks being subsumed as the model itself improves. **Data flywheel**: even when big incumbents have more existing data, a startup that gets to market first and continually gathers usage data can turn that into a compounding moat — usage reveals product/behavioral insight even if the raw data itself isn't directly trainable, and that insight keeps improving the product, attracting more usage, generating more insight.

### Knowledge Gap
Right conclusion on both halves, but the *mechanism* behind each (convergence via low barrier; compounding loop, not static head start) wasn't articulated.

### Memory Priority
Medium

### Follow-up Required
Yes — light retest later, focused on stating the two mechanisms precisely rather than just the right conclusions.

## Q021
**Date:** 2026-09-12
**Topic:** AI engineering
**Concept:** H7 — Setting expectations / usefulness threshold
**Difficulty:** Level 1 (Recall/Explanation)
**Question:** Chapter defines a "usefulness threshold" before shipping, grouped into 4 metric types: quality, latency, cost, and other. Name the two specific latency sub-metrics the chapter names, and explain what "acceptable" latency actually depends on.

### My Answer
> "latency sub-metrics - Time to first token - how long it takes to receive the first token back to user, Time per output token - how long it takes in between tokens generated to show how fast a sentence gets built. acceptable latency depends on use case, for some use cases, we need it immediately, e.g. speaking to a chatbot, other use cases like generating an image, video, website, can take longer."

### Assessment
🟢 Correct

### What I Got Right
- TTFT (time to first token) and TPOT (time per output token) both correctly defined.
- "Acceptable latency depends on use case" correctly stated, with good examples (chatbot needs immediacy, image/video/website generation can tolerate delay).

### What I Missed
Nothing material against what was asked. Nuance worth adding: "acceptable" is relative to the *alternative being replaced*, not just task type — the book's example is that beating a median 1-hour human response time is a low bar, so the same task type can have very different latency requirements depending on what it's competing against.

### Model Answer
> TTFT (time to first token) and TPOT (time per output token) are the two sub-metrics, alongside total latency. "Acceptable" depends on the use case — e.g., beating a median 1-hour human response time is a low bar, so what counts as fast enough is relative to the baseline/alternative being replaced, not an absolute standard.

### Knowledge Gap
None against what was asked — clean pass. The baseline-relative framing is a nice-to-add nuance, not a correction.

### Memory Priority
Low

### Follow-up Required
No.

## Q022
**Date:** 2026-09-12
**Topic:** AI engineering
**Concept:** H8 — The "last mile" challenge
**Difficulty:** Level 1 (Recall)
**Question:** Chapter cites LinkedIn's 2024 experience building an AI feature: fast progress early, then a long slog later. What's the "last mile" challenge, and what were LinkedIn's actual numbers (time to reach 80% vs. time to go from 80% to >95%)?

### My Answer
> "last mile challenge is usually to do with getting a basic working product that may serve well as a basic demo and to solve its kinks, edge cases, to improve it to be production ready. time to reach 80% for linkedin was 1 month but 4 months to 95%."

### Assessment
🟢 Correct

### What I Got Right
- Concept correct: initial demos are deceptively easy/impressive, but going from a good demo to a production-ready product (fixing kinks, edge cases) is much harder.
- Numbers exact: 1 month to reach 80%, 4 more months to get from 80% to >95% — matches source precisely.

### What I Missed
Nothing — clean pass.

### Model Answer
> The "last mile" challenge: the journey from 0->60% of desired quality is easy, but 60->100% is exceedingly challenging — initial foundation-model demos look impressive, but production-readiness requires grinding through kinks and edge cases with diminishing returns. LinkedIn: 1 month to reach 80% of desired experience, 4 more months to get from 80% to >95%.

### Knowledge Gap
None — clean pass.

### Memory Priority
Low

### Follow-up Required
No.

## Q023
**Date:** 2026-09-12
**Topic:** AI engineering
**Concept:** H9 — Maintenance considerations
**Difficulty:** Level 2 (Explanation)
**Question:** Chapter says planning doesn't stop once you hit your initial goals — you have to plan for how the product evolves. Give an example of a change that's easy to adapt to vs. two that are hard (one of which can be existential), and briefly explain why the hard ones are harder.

### My Answer
> "easy - diff model providers converging on model APIs, making it easy to switch. - models updating, or newer models coming out that needs constant evaluation to see if current model is still effective cost/quality/latency wise. hard - regulatory requirements - AI is treated as natural security matters. the country may ban certain AI products. IP requirements - if a company uses AI to produce their work, we're still not certain whether they still have IP rights to their work since they used the models."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Easy example (API convergence across providers) — exact match to source.
- Hard example 1 (regulatory — national-security framing, potential bans) — matches source.
- Hard example 2 (IP/AI-usage regulation still evolving) — matches source precisely, and correctly identified as the existential one.

### What I Missed
- Didn't explain *why* the hard ones are harder: regulatory/IP changes are governed by external, slow-moving legal/political systems outside the company's control, with binary/existential consequences (a banned vendor, an invalidated IP claim) — unlike technical/vendor changes (swapping providers, re-evaluating models), which the company can act on directly and incrementally.
- (Note: my question asked for two "easy" examples, but the book only clearly labels one — the 2nd "easy" point offered, re-evaluating models as new ones release, is closer to the book's general cost-benefit-re-evaluation friction theme than a distinctly labeled "easy" example. Not counted against the answer.)

### Model Answer
> Easy: model providers converging on similar APIs makes swapping providers easier (though each model's quirks still need prompt/workflow adjustment). Hard: regulatory changes (AI/compute increasingly treated as national security matters, e.g. export restrictions banning a GPU vendor) and, existentially, IP/AI-usage regulation still evolving (if your product is built on a model trained on others' data, IP ownership of your outputs isn't guaranteed stable — many IP-heavy companies hesitate to adopt AI for this reason). The hard ones are harder because they're external, slow-moving legal/political forces outside company control, with consequences that can be binary/existential rather than incremental.

### Knowledge Gap
Examples solid across the board. Missing the explicit "why harder" reasoning (external/uncontrollable + binary consequences vs. internal/actionable + incremental).

### Memory Priority
Medium

### Follow-up Required
Yes — light retest later, focused specifically on articulating why regulatory/IP changes are structurally harder than technical/vendor ones.

## Q024
**Date:** 2026-09-12
**Topic:** AI engineering
**Concept:** H10 — Three model-development responsibilities
**Difficulty:** Level 1 (Recall)
**Question:** Model-development layer has 3 main responsibilities. Name them and briefly say what each involves.

### My Answer
> "pretraining - getting the model to complete sentences well. finetuning - nudging the model to complete tasks according to instructions. posttraining - using reward system kind of method to nudge model to prefer an answer over the other."

### Assessment
🔴 Incorrect (answered a different concept)

### What I Got Right
N/A for H10 — this answer addresses H11 (pretraining vs. finetuning vs. post-training distinctions), a different, adjacent concept, not H10's 3 model-development responsibilities (modeling & training, dataset engineering, inference optimization).

### What I Missed
Didn't answer what was asked. As a bonus note (not graded against H10): the H11-shaped content given has real imprecisions too — pretraining is "training from scratch, weights randomly initialized" (the most resource-intensive step, ~98% of compute for something like InstructGPT), not just "completing sentences well"; finetuning is "continuing to train an already-trained model," broader than just instruction-following; post-training's real distinguishing feature vs. finetuning is *who does it* (model developer, pre-release) not the specific technique (reward-based methods are one post-training technique, not the definition).

### Model Answer
> **Modeling and training** — architecture selection, pretraining/finetuning/post-training. **Dataset engineering** — curating, generating, and annotating training data. **Inference optimization** — making models faster and cheaper.

### Knowledge Gap
Concept-identification gap: conflated H10 (model-dev responsibilities) with H11 (pretraining/finetuning/post-training distinctions) — two separate concepts in the same knowledge-map area. Retried immediately with the correct concept (see Q025).

### Memory Priority
Medium

### Follow-up Required
No further action on Q024 itself — see Q025 for the corrected retry. Worth keeping H10 and H11 explicitly distinct when reviewing this section.

## Q025
**Date:** 2026-09-12
**Topic:** AI engineering
**Concept:** H10 — Three model-development responsibilities (retry)
**Difficulty:** Level 1 (Recall)
**Question:** Retry — model-development layer has 3 main responsibilities. Name them and briefly explain each.

### My Answer
> "model selection and training - selecting architecture, training the model via pretraining, finetuning and posttraining. dataset engineering - obtaining the data needed for training the models. inference optimisation - making models produce tokens faster and cheaper."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Modeling & training (architecture selection + pretraining/finetuning/post-training) — matches source closely.
- Inference optimization (faster/cheaper token production) — exact match to source wording.

### What I Missed
- Dataset engineering described thinly as "obtaining the data" — source's fuller scope is curating, generating, *and* annotating data. Missed the book's actual emphasis: annotation is much harder for foundation models than traditional ML, since it's open-ended (e.g. grading essay quality) rather than close-ended labeling (spam/not-spam) — a genuinely bigger AI-engineering challenge, not just data acquisition.

### Model Answer
> **Modeling & training** — architecture selection, pretraining/finetuning/post-training. **Dataset engineering** — curating, generating, and annotating training data; harder for foundation models since annotation is open-ended rather than close-ended, plus deduplication/tokenization/retrieval/quality-control work. **Inference optimization** — making models faster and cheaper, especially challenging since autoregressive generation is inherently sequential (token-by-token).

### Knowledge Gap
All 3 responsibilities correctly named this time. Dataset engineering's specific difficulty (open-ended annotation) not yet articulated.

### Memory Priority
Medium

### Follow-up Required
Yes — light retest later, focused on dataset engineering's open-ended-annotation difficulty specifically.

## Q026
**Date:** 2026-09-12
**Topic:** AI engineering
**Concept:** H11 — Pre-training vs. finetuning vs. post-training vs. colloquial "training"
**Difficulty:** Level 2 (Explanation)
**Question:** These four terms get conflated a lot. Precisely: what does "training" always involve (and what's a weight-change that *doesn't* count)? What's pre-training specifically? What's finetuning? And what's the actual distinguishing feature between finetuning and post-training (not just "training after pre-training")?

### My Answer
> "training always involves changing the models' behaviour via changing its weights. a weight change that doesnt count seems to me like prompt engineering where we try to nudge the model to behave a certain way without updating its weights. pre-training is training a model from scratch with random weights. the goal of pretraining is to get the model to be able to autocomplete sentences. finetuning is to then train a model that was produced from pre-training, to further specialise the model to do certain tasks on a smaller, targeted dataset. When used together, posttraining is what model providers like openai do to train their models before releasing to public use whereas finetuning is users using openai's models and tweaking them to behave like what they prefer."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Pre-training: from-scratch, random weights, goal = text completion — correct.
- Finetuning: continuing to train a pretrained model, specializing on a smaller/targeted dataset — correct.
- **The actual distinguishing feature between finetuning and post-training** (the hardest, most-emphasized part of the question): correctly identified as *who does it* — post-training = model providers before public release, finetuning = users/app developers adapting an already-released model. Nailed this precisely.

### What I Missed
- The "weight change that doesn't count as training" example: gave prompt engineering, which doesn't change weights at all, so it doesn't actually answer the question (which asks for something that *does* alter weights but still isn't labeled "training"). The book's actual example is quantization — it changes weight values/precision for efficiency, but isn't considered training.

### Model Answer
> Training always changes model weights (necessary condition), but not every weight change counts as training — quantization changes weight values/precision without being "training." Pre-training: from-scratch, randomly initialized weights, usually a text-completion objective for LLMs, by far the most resource-intensive step (~98% of compute for something like InstructGPT). Finetuning: continuing to train an already-pretrained model, needing far fewer resources. Finetuning vs. post-training: same underlying process, distinguished by *who does it* — post-training is the model developer's work pre-release, finetuning is the application developer's work adapting an already-released model.

### Knowledge Gap
The hardest sub-question (finetuning vs. post-training's real distinguishing feature) is solid. The "weight change that doesn't count" example needs a concrete correct instance (quantization) rather than substituting a no-weight-change example (prompt engineering).

### Memory Priority
Low — core distinctions solid, this is a narrow factual gap (one example) not a conceptual one.

### Follow-up Required
No — narrow enough not to need a dedicated retest; will likely surface again naturally if inference-optimization/quantization topics come up later in the book.

## Q027
**Date:** 2026-09-12
**Topic:** AI engineering
**Concept:** H12 — Three application-development responsibilities
**Difficulty:** Level 2 (Explanation)
**Question:** Application-development layer has 3 responsibilities: evaluation, prompt engineering & context construction, AI interface. Why is evaluation specifically harder with foundation models than with traditional (close-ended) ML?

### My Answer
> "because for traditional ML, it's more or less binary, whether a text is spam or not, whether a picture is dog or not, etc. however, when it comes to foundation models, its open ended nature means multiple answers can be correct therefore making evaluation harder in the sense that we need to cater for more ways to answer the correct answer."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Primary reason correctly explained: close-ended ML has clear ground truth (spam/not-spam, dog/not-dog), while foundation models' open-ended output means many possible correct answers, so there's no exhaustive ground-truth list to check against.

### What I Missed
- The book's second reason: many different adaptation techniques complicate fair comparison between models. Concrete example: Google's Gemini vs. ChatGPT MMLU comparison (Dec 2023) was misleading because Gemini was evaluated with 32-shot chain-of-thought vs. ChatGPT's 5-shot — at matched 5-shot, ChatGPT actually performed better. Evaluation setup itself, not just output open-endedness, can produce misleading comparisons.

### Model Answer
> Evaluation is harder for two reasons: (1) open-ended outputs mean no exhaustive ground-truth list exists, unlike close-ended tasks with clear correct/incorrect labels; (2) many different adaptation techniques make fair comparison hard, since evaluation setup itself (few-shot count, prompting strategy) can swing results enough to produce misleading conclusions (e.g. the Gemini/ChatGPT MMLU mismatch).

### Knowledge Gap
Primary reason (open-ended output) solid. Secondary reason (adaptation-technique comparison difficulty) not yet surfaced.

### Memory Priority
Medium

### Follow-up Required
Yes — light retest later, focused on the adaptation-technique-comparison reason specifically.

## Q028
**Date:** 2026-09-12
**Topic:** AI engineering
**Concept:** H13 — New AI engineering workflow ordering
**Difficulty:** Level 2 (Explanation)
**Question:** Traditional ML engineering follows Data → Model → Product. AI engineering flips it to Product → Data → Model. Why does this reordering make sense, and what does it imply about how involved AI engineers are in product decisions compared to traditional ML engineers?

### My Answer
> "this ordering makes sense because we are confident that are capable models out there we can utilise for our business needs. therefore it is safer now to develop the product first. in the past, we were not sure whether we would have the data required to make an intelligent model, therefore we had to start with data first, made sure we had enough dataset before even thinking of a product to offer. it implies that ai engineers are now more involved at the start, thinking of how to adapt and apply the models to use cases rather than wait for ml engineers to do their work at the start."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Core reordering rationale: foundation models already exist and are proven capable, so a product can be built directly on one, deferring data/model investment until the product shows promise — matches the book closely. Correctly contrasted with traditional ML needing data first to confirm a model was even viable before committing to a product.

### What I Missed
- The involvement implication was framed as a timing point ("AI engineers start earlier, don't wait for ML engineers"), but the book's actual point is a role-integration point: traditional ML kept model development and product development as **disjointed roles** (ML engineers rarely involved in product decisions at all), while AI engineers are now **far more involved in building the product itself**. It's not primarily about who goes first chronologically — it's about whether the model-building role is even part of product conversations.

### Model Answer
> The reordering makes sense because a usable product can often be built directly on an existing foundation model — teams build the product first, investing in data/model work only once the product shows promise, rather than needing years of data collection before knowing if a product is viable. Implication: traditional ML engineering kept model development and product development disjointed (ML engineers rarely in product conversations); AI engineering pulls AI engineers directly into building the product itself, not just supplying a model to it.

### Knowledge Gap
Reordering rationale solid. Involvement implication captured the right general direction but missed the specific "disjointed roles vs. integrated role" framing the book uses.

### Memory Priority
Low — close enough in substance; a phrasing nuance, not a conceptual gap.

### Follow-up Required
No.

## Q029
**Date:** 2026-09-12
**Topic:** AI engineering
**Concept:** H14 — Autoregressive inference latency challenge
**Difficulty:** Level 1 (Recall)
**Question:** Chapter explains why LLM inference latency is a hard problem, tied to autoregressive generation. What's the mechanism, and what's the rough math example the book gives for how token-by-token generation adds up?

### My Answer
> "the mechanism is using the past tokens to generate the next token, which means that each next token has to be done sequentially one token at a time. if 1 token generation takes 100ms, it takes 1 second for a 100 token output."

### Assessment
🟠 Partially Correct

### What I Got Right
- Mechanism correct: autoregressive generation uses past tokens to generate the next one, so tokens must be produced sequentially, one at a time — no parallelizing within one output.

### What I Missed
- Numeric example wrong on two counts: (1) doesn't match the book, which uses 10ms per token, not 100ms; (2) doesn't match its own arithmetic — 100ms x 100 tokens = 10,000ms = 10 seconds, not the claimed 1 second. Looks like the per-token rate (10ms, from the book) got merged with the book's separate ~100ms *target total latency* benchmark for internet applications generally — two different numbers combined into one.

### Model Answer
> Autoregressive generation means each token depends on all previous tokens, so generation is inherently sequential. Book's example: 10ms per token -> 1 second total for a 100-token output (more for longer outputs). This matters because internet applications typically expect around ~100ms total latency — getting LLM inference anywhere near that is a major active research subfield.

### Knowledge Gap
Mechanism solid. The specific numbers (10ms/token rate, and keeping it distinct from the separate ~100ms total-latency target) need a clean redo.

### Memory Priority
Medium

### Follow-up Required
Yes — light retest later, focused specifically on getting the numbers right and keeping the per-token rate distinct from the total-latency target.

## Q030
**Date:** 2026-09-12
**Topic:** AI engineering
**Concept:** H15 — Dataset engineering shift
**Difficulty:** Level 2 (Explanation)
**Question:** Chapter contrasts dataset engineering in traditional ML vs. foundation models. What shifts, and why does the chapter argue dataset engineering is becoming more important, not less, as models get commoditized?

### My Answer
> "traditional ML dealth with close ended data while foundation models focused more on generative open ended unstructured data thus collecting the dataset to train and evaluate the foundational models is much more challenging."

### Assessment
🟠 Partially Correct

### What I Got Right
- Correctly senses foundation-model dataset work is harder than traditional ML's.

### What I Missed
- The specific shift is tabular data (traditional ML: feature engineering) -> unstructured data (foundation models: deduplication, tokenization, context retrieval, quality control incl. removing sensitive/toxic content) — not "close-ended vs. open-ended," which is actually H12's axis (about output/evaluation), not this concept's (about data structure).
- Entirely missed the second half of the question: why dataset engineering becomes *more* important as models commoditize. As foundation models become widely available and similarly capable across companies, the model itself stops differentiating competitors — so data becomes the differentiator instead. This is the same reasoning as H6's data flywheel, applied specifically to dataset engineering's growing strategic importance.

### Model Answer
> Shift: tabular data (traditional ML: feature engineering) -> unstructured data (foundation models: deduplication, tokenization, retrieval, quality control). As models commoditize — everyone has access to similarly capable foundation models — the model stops being a competitive differentiator, so data becomes the key differentiator instead, making the dataset engineering work that shapes and curates that data more strategically important than ever, not less.

### Knowledge Gap
Conflated this concept's data-structure axis (tabular vs. unstructured) with H12's output axis (close-ended vs. open-ended) — worth deliberately separating these two similar-sounding contrasts. The "why more important as commoditized" half needs a full first pass, tied explicitly to H6's data flywheel logic.

### Memory Priority
High — this is the second time in this session two adjacent concepts got conflated (H10/H11 earlier, now H12/H15) — worth a general habit of explicitly checking "is this actually the axis being asked about" before answering.

### Follow-up Required
Yes — retest, ideally paired directly with H6 to reinforce the shared "commoditization -> data becomes the moat" logic.

## Q031
**Date:** 2026-09-12
**Topic:** Foundation models
**Concept:** H16 — Embedding model vs. generative model
**Difficulty:** Level 1 (Explanation)
**Question:** Using CLIP as the example: what is an embedding, at a conceptual level? What does it mean for CLIP to "produce a joint embedding" of text and images?

### My Answer
> "embedding is a numerical representation of data e.g. image, text, turned into numerical vectors. what i means for clip to produce a joint embedding means being able to connect two diff sets of formats e.g. text and image and join them e.g. an actual photo of a dog and the text 'this is a photo of a dog' would be close to each other in terms of embedding values."

### Assessment
🟢 Correct

### What I Got Right
- Embedding correctly defined as a numerical vector representation of data, capturing meaning.
- "Joint embedding" correctly explained as mapping different modalities (text, image) into the same shared vector space, such that semantically related content across modalities ends up close together — the dog-photo/dog-text example is exactly the right illustration, more precise than the book's own terse one-liner.

### What I Missed
Nothing — clean pass.

### Model Answer
> An embedding is a numerical vector representing data (text, image, etc.) that captures its meaning — similar things end up with similar (close) vectors. CLIP produces a *joint* embedding by mapping both text and images into the same shared vector space, so that a photo of a dog and the text "a photo of a dog" land close together in that space, even though they started as completely different data types.

### Knowledge Gap
None — clean pass.

### Memory Priority
Low

### Follow-up Required
No.

## Q032
**Date:** 2026-09-12
**Topic:** Language modeling foundations
**Concept:** C5 — Supervised learning vs. reinforcement learning (retest, paired with H11)
**Difficulty:** Level 2 (Explanation)
**Question:** Precisely: what makes something "supervised learning" (where do the labels come from, when are they created relative to training)? And what makes something "reinforcement learning" (what signal replaces the label)?

### My Answer
> "supervised learning is giving the model pre-collected datasets complete with labels and data and making the model train on them rather than giving it unstructured raw data. labels come from the data being collected and cleaned, they come typically after the model has been pre-trained over raw data and is able to complete sentences already. what makes something reinforcement learning is giving the ability to score a model's answer and nudging it towards a better score."

### Assessment
🟡 Mostly Correct

### What I Got Right
- Supervised learning correctly framed as training on a pre-labeled dataset, not raw/unstructured data — resolves the core M003 misconception (previously described as "live correctness feedback").
- Reinforcement learning correctly framed as scoring an answer and optimizing toward a better score — resolves the other half of M003 (previously vague "giving samples to guess").

### What I Missed
- New, narrower confusion: said labels "typically come after the model has been pretrained... and is able to complete sentences already." Supervised learning is defined by *where labels come from* (external, human-annotated, collected upfront) — not *when* it happens relative to pretraining. Supervised learning doesn't require a pretrained model at all (classic ML, e.g. training a spam classifier from scratch on labeled data, is supervised learning with zero pretraining). What's actually being described — labeled data applied to an already-pretrained model — is specifically **finetuning**, one application of supervised learning, not its definition.

### Model Answer
> Supervised learning trains on a fixed, pre-labeled dataset (input-output pairs, usually human-annotated, collected before training starts) — this works whether or not a model was pretrained first. Reinforcement learning has an agent take actions and receive a reward signal (scalar feedback on outcome quality) rather than an explicit correct-answer label per input, and learns to maximize that reward over time.

### Knowledge Gap
Core supervised-vs-RL blur (M003) substantially resolved. New gap: supervised learning's general definition (label-source) conflated with finetuning specifically (one post-pretraining application of it).

### Memory Priority
Low — narrower and more specific than the original M003 confusion; genuine progress made.

### Follow-up Required
No — narrow enough to not need a dedicated retest; will likely self-correct as C13/H11's finetuning material gets revisited.

## Q033
**Date:** 2026-09-12
**Concept:** C3 — Autoregressive vs. masked LM (retest)
**Question:** What context does each type use to predict a token, which is dominant for text generation, and an example masked-LM model?
**My Answer:** "autoregressive uses all previous tokens only to predict the next token. masked uses all tokens in the sentence to predict the masked token. for text generation, autoregressive is dominant as directly matching the left-to-right process of generating coherent, variable-length text. example model for masked type is BERT."
**Assessment:** 🟢 Correct — all four parts (autoregressive = preceding-only context, masked = both-directions context, autoregressive dominant for generation, BERT as masked example) match source precisely.
**Knowledge Gap:** None — clean pass.
**Follow-up Required:** No.

---
# Misconceptions

## M003
**Concept:** Supervised learning vs. reinforcement learning
**My misconception:** Described supervised learning as a human live-checking whether the model's prediction is correct, and reinforcement learning as vaguely "giving the model samples to guess" — blurring the two into a similar "human checks the answer" shape.
**Correct understanding:** Supervised learning trains on a **fixed, pre-labeled dataset** (input-output pairs given upfront, usually by human annotators) — no live checking during training. Reinforcement learning has an agent take actions and receive a **reward signal** (scalar feedback on outcome quality), not an explicit correct/incorrect label per input.
**Detected:** 2026-09-09 (Q007)
**Resolved:** Mostly, at retest (Q032, 2026-09-12). The "human checks the answer" blur is gone — supervised now correctly framed as a pre-labeled dataset, RL correctly framed as reward-based scoring. New, narrower confusion surfaced: supervised learning's labels described as coming "after the model has been pretrained," conflating supervised learning's general definition (label-source-based, pretraining-independent) with finetuning specifically (one application of supervised learning, applied post-pretraining). Tracked as G024.

## M002
**Concept:** Multimodal model vs. large multimodal model (LMM)
**My misconception:** Believed "multimodal model" means a model catered to a single material type (e.g., just text, or just image), and confused "LMM" with "large language model" — a scale/vocabulary variant of LLM rather than a distinct generative-multimodal concept.
**Correct understanding:** A multimodal model works with **more than one** data modality by definition. An LMM (large multimodal model) is specifically the **generative** subset of multimodal models — it predicts the next token conditioned on tokens from multiple modalities. Non-generative multimodal models exist too (e.g., CLIP, an embedding model) and are NOT LMMs.
**Detected:** 2026-09-08 (Q006)
**Resolved:** Not yet resolved — 2nd occurrence at retest (Q010, 2026-09-10). The generative-vs-non-generative *concept* is now solid (correctly distinguished CLIP-classifies vs. LMM-generates); only the specific label "large language model" vs. "large multimodal model" keeps slipping. Narrowing — needs one more retest targeting the name specifically.

## M001
**Concept:** Self-supervised learning
**My misconception:** Believed the scaling technique behind language models was reinforcement learning.
**Correct understanding:** The technique is self-supervision (self-supervised learning) — labels are inferred directly from the input text itself (e.g., next-token prediction), with no reward signal or manual labeling involved. Reinforcement learning is a different paradigm (used elsewhere in AI, e.g., RLHF for post-training alignment, but not the mechanism this chapter credits for enabling LLM-scale pretraining).
**Detected:** 2026-08-31 (Q001, attempt 2)
**Resolved:** Yes — 2026-09-09 (Q007): correctly named self-supervision and its mechanism, no RL confusion this time.

---
# Mastered Concepts
- C1 Language model definition (2026-09-08, Q002, clean pass)
- C12 AI eng vs. ML eng, 3 differences (2026-09-11, Q013, clean pass)
- H1 Model as a service / API-based access (2026-09-11, Q015, clean pass)
- H5 Human-in-the-loop / Crawl-Walk-Run (2026-09-11, Q019, clean pass — corrected from an initial assistant misgrading, see Q019's correction note)
- H7 Usefulness threshold metrics (2026-09-12, Q021, clean pass)
- H8 Last mile challenge (2026-09-12, Q022, clean pass)
- H16 Embedding model vs. generative model (2026-09-12, Q031, clean pass)
- C3 Autoregressive vs. masked LM (2026-09-12, Q033, clean pass)

---
# Weak Concepts
- (none currently at Weak — C7 upgraded to Developing after Q010's retest)

---
# Concepts Requiring Review
1. C5 — Supervised learning conflated with finetuning specifically (labels described as coming "after pretraining" — supervised learning's definition is about label source, not timing; supervised-vs-RL blur itself now resolved)
3. C2 — Tokenization's "unknown/made-up word" rationale (reason 3, missed)
4. C4 — Completion machine's "not guaranteed correct" caveat + question-answered-with-question failure mode
5. C6 — Foundation model naming rationale (general-purpose base for adaptation; siloed-research-break), beyond just multimodality
6. C7 — Multimodal model vs. LMM (generative axis now solid; recurring LMM-vs-LLM naming slip, 2nd occurrence — needs one more retest targeting the name specifically)
7. C8 — Three adaptation techniques (missed RAG, substituted post-training) — pair with C13
8. C9 — AI engineering definition (right direction, missing the "why" + concrete specifics) — pair with C12
9. C10 — Three growth factors (investment factor circular, missing causal chain between the three factors)
10. C11 — Three layers of AI stack (prompting/RAG misassigned to model development instead of application development; scaling misassigned to application development instead of infrastructure; layer relationships not addressed) — pair with C13
11. C13 — Prompt-based vs. finetuning tradeoffs (mechanism solid; data needs/complexity/ceiling not yet tested cleanly)
12. H2 — Eight use case categories, internal vs. external risk tradeoff (not attempted at all — first exposure needed, not a correction)
13. H3 — Use case evaluation risk order ("hedge" as insurance not nice-to-have; middle-category rationale)
14. H4 — Role of AI in a product (reactive/proactive's initiation-direction criterion; dynamic/static's per-release vs. per-user-adaptation criterion)
15. H6 — AI product defensibility (right conclusions, mechanisms imprecise: tech convergence via low barrier; data flywheel as compounding loop not static head start)
16. H9 — Maintenance considerations (examples solid; "why regulatory/IP changes are harder" reasoning not articulated)
17. H10 — Three model-dev responsibilities (all 3 named correctly on retry; dataset engineering's open-ended-annotation difficulty not yet articulated) — keep distinct from H11
18. H11 — Pre-training vs. finetuning vs. post-training distinctions (hardest part — finetuning vs. post-training's distinguishing feature — solid; "weight change that doesn't count" example needs quantization, not prompt engineering) — low priority, narrow gap
19. H12 — Why evaluation is harder (primary reason solid; missing the adaptation-technique-comparison-difficulty reason, e.g. Gemini/ChatGPT MMLU mismatch)
20. H13 — Product-Data-Model reordering (rationale solid; involvement implication framed as timing rather than the book's disjointed-vs-integrated-roles point) — low priority, phrasing nuance
21. H14 — Autoregressive inference latency (mechanism solid; numbers wrong — needs 10ms/token, not 100ms, kept distinct from the separate ~100ms total-latency target)
22. H15 — Dataset engineering shift (conflated with H12's close/open-ended axis; "why more important as commoditized" not yet attempted — pair retest with H6)

*(First full pass complete 2026-09-12 — every concept above has been tested at least once; nothing left "not yet tested."  List above is now purely a retest queue.)*
