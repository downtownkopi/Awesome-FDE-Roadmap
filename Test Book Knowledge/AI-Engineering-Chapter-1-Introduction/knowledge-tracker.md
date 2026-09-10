# Knowledge Mastery Tracker

## Chapter
**Book:** AI Engineering: Building Applications with Foundation Models (Chip Huyen)
**Chapter:** 1 — Introduction to Building AI Applications with Foundation Models

## Overall Progress
- Questions attempted: 9
- Correct: 1
- Mostly correct: 3
- Partially correct: 4
- Incorrect: 1
- Don't know: 0
- Overall demonstrated mastery: Very early — 9 questions attempted, chapter mostly untested
- Current weak areas: AI engineering definition missing the "why" (foundation models eliminating the need to train from scratch) and concrete skill-shift specifics vs. ML engineering/MLOps; RAG missing from adaptation-technique recall (substituted post-training instead); supervised-vs-reinforcement-learning definitions blurred (supervised described as live correctness feedback rather than pre-labeled dataset; RL described vaguely rather than reward-based); tokenization's "unknown word" rationale not yet surfaced cleanly; completion-machine's specific failure mode (question-answered-with-question) not yet surfaced; foundation model naming reason narrowed to multimodality only, missed "base for adaptation" + siloed-research-break framing; multimodal model vs. LMM distinction inverted (missed generative-vs-embedding split entirely)

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
| G005 | Foundation models | Multimodal model / LMM (C7) | Inverted "multimodal" definition (said single-modality, correct is multi-modality); conflated LMM with "large language model"; missed generative-vs-non-generative axis; unaware CLIP is the book's non-generative counterexample. | Critical | High | 🔴 Weak | 1 | 0 |

---
# Concept Mastery

| Concept | Importance | Recall | Explanation | Connection | Application | Overall |
|---|---|---|---|---|---|---|
| C1 Language model definition | Critical | 🟢 correct | — | — | — | Mastered |
| C2 Token/tokenization/vocabulary | Critical | 🟡 mostly (2/3 reasons) | — | — | — | Developing |
| C3 Autoregressive vs masked LM | Critical | 🟡 partial (via C5 discussion) | — | — | — | Developing |
| C4 Completion machine framing | Critical | 🟡 mostly | — | — | — | Developing |
| C5 Self-supervision vs supervision | Critical | 🟢 correct (term+mechanism) | 🟡 partial (supervised/RL blurred) | — | — | Developing |
| C6 Foundation models definition | Critical | 🟠 partial | — | — | — | Developing |
| C7 Multimodal models / LMM | Critical | 🔴 incorrect | — | — | — | Weak |
| C8 Three adaptation techniques | Critical | 🟠 partial (2/3, missed RAG) | — | — | — | Developing |
| C9 AI engineering definition | Critical | 🟠 partial (core shift right, "why" + specifics missing) | — | — | — | Developing |
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

---
# Misconceptions

## M003
**Concept:** Supervised learning vs. reinforcement learning
**My misconception:** Described supervised learning as a human live-checking whether the model's prediction is correct, and reinforcement learning as vaguely "giving the model samples to guess" — blurring the two into a similar "human checks the answer" shape.
**Correct understanding:** Supervised learning trains on a **fixed, pre-labeled dataset** (input-output pairs given upfront, usually by human annotators) — no live checking during training. Reinforcement learning has an agent take actions and receive a **reward signal** (scalar feedback on outcome quality), not an explicit correct/incorrect label per input.
**Detected:** 2026-09-09 (Q007)
**Resolved:** Not yet resolved — pending retest.

## M002
**Concept:** Multimodal model vs. large multimodal model (LMM)
**My misconception:** Believed "multimodal model" means a model catered to a single material type (e.g., just text, or just image), and confused "LMM" with "large language model" — a scale/vocabulary variant of LLM rather than a distinct generative-multimodal concept.
**Correct understanding:** A multimodal model works with **more than one** data modality by definition. An LMM (large multimodal model) is specifically the **generative** subset of multimodal models — it predicts the next token conditioned on tokens from multiple modalities. Non-generative multimodal models exist too (e.g., CLIP, an embedding model) and are NOT LMMs.
**Detected:** 2026-09-08 (Q006)
**Resolved:** Not yet resolved — pending retest.

## M001
**Concept:** Self-supervised learning
**My misconception:** Believed the scaling technique behind language models was reinforcement learning.
**Correct understanding:** The technique is self-supervision (self-supervised learning) — labels are inferred directly from the input text itself (e.g., next-token prediction), with no reward signal or manual labeling involved. Reinforcement learning is a different paradigm (used elsewhere in AI, e.g., RLHF for post-training alignment, but not the mechanism this chapter credits for enabling LLM-scale pretraining).
**Detected:** 2026-08-31 (Q001, attempt 2)
**Resolved:** Yes — 2026-09-09 (Q007): correctly named self-supervision and its mechanism, no RL confusion this time.

---
# Mastered Concepts
- C1 Language model definition (2026-09-08, Q002, clean pass)

---
# Weak Concepts
- C7 Multimodal model vs. LMM (definition inverted; generative-vs-non-generative axis missing entirely)

---
# Concepts Requiring Review
1. C5 — Supervised vs. reinforcement learning definitions blurred (self-supervision term/mechanism now solid; retest supervised/RL distinction later, pair with H11)
2. C3 — Autoregressive vs. masked LM (partially surfaced correctly under prompting; needs a clean standalone test)
3. C2 — Tokenization's "unknown/made-up word" rationale (reason 3, missed)
4. C4 — Completion machine's "not guaranteed correct" caveat + question-answered-with-question failure mode
5. C6 — Foundation model naming rationale (general-purpose base for adaptation; siloed-research-break), beyond just multimodality
6. C7 — Multimodal model vs. LMM (generative-vs-non-generative axis; CLIP as non-generative example) — High priority, retest soon
7. C8 — Three adaptation techniques (missed RAG, substituted post-training) — pair with C13
8. C9 — AI engineering definition (right direction, missing the "why" + concrete specifics) — pair with C12
9. Everything else in the chapter — not yet tested
