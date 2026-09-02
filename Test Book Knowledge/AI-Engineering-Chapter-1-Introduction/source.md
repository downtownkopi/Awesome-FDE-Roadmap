---
title: "Chapter 1 — Introduction to Building AI Applications with Foundation Models"
book: "AI Engineering: Building Applications with Foundation Models" (Chip Huyen)
original_file: "Book - AI Engineering - Building Applications with Foundational Models/1. Introduction-to-Building-AI-Applications-with-Foundation-Models.pdf"
status: source reference — do not edit
---

# Note on this file

This is a condensed textual capture of Chapter 1, built from the original PDF
(48 pages) so future sessions don't need to re-OCR it. It is organized by the
chapter's own headings, keeping definitions, key claims, and figures/tables
verbatim or near-verbatim where they matter for testing. Anecdotal stats and
citations are trimmed to what's needed for context. The original PDF remains
the source of truth in the project folder.

---

## The Rise of AI Engineering

**From Language Models to Large Language Models**

- A *language model* encodes statistical information about one or more languages — how likely a word/token is to appear in a given context.
- Statistical language modeling roots: Sherlock Holmes ("The Adventure of the Dancing Men," 1905) decoding via letter frequency; Claude Shannon's 1951 "Prediction and Entropy of Printed English."
- **Token**: the basic unit of a language model — a character, word, or part of a word (e.g., "-tion"). GPT-4 breaks "I can't wait to build awesome AI applications" into tokens including splitting "can't" into "can" + "'t". Tokenization = process of breaking text into tokens. For GPT-4, ~1 token ≈ ¾ of a word (100 tokens ≈ 75 words).
- **Vocabulary**: the set of all tokens a model can work with. Mixtral 8x7B vocab = 32,000; GPT-4 vocab = 100,256.
- Why tokens instead of words or characters (3 reasons):
  1. Tokens let the model break words into meaningful components (e.g., "cooking" → "cook" + "ing").
  2. Fewer unique tokens than unique words → smaller vocabulary → more efficient model.
  3. Tokens help the model process unknown/made-up words by splitting them into known sub-parts (e.g., "chatgpting" → "chatgpt" + "ing").
- **Two types of language models**, differing in what context they use to predict a token:
  - *Masked language model*: predicts missing tokens anywhere in a sequence, using context from BOTH before and after. Fill-in-the-blank. Example: BERT. Used for non-generative tasks: sentiment analysis, text classification, code debugging (needs both-direction context).
  - *Autoregressive language model*: predicts the next token using ONLY preceding tokens. Continually generates one token after another. This is the dominant choice for text generation and far more popular than masked LMs. Unless stated otherwise, the book uses "language model" to mean autoregressive model.
- Language models are open-ended/**generative** — finite vocabulary, infinite possible outputs. Hence "generative AI."
- A language model can be thought of as a **completion machine**: given a prompt, it predicts/completes the text. Example: prompt "To be or not to be" → completion ", that is the question." Completions are *predictions based on probabilities*, not guaranteed correct.
- Many tasks (translation, summarization, coding, math) can be framed as completion tasks (e.g., "How are you in French is …" → "Comment ça va").
- Completion ≠ conversation. A completion machine may complete a question with another question rather than answering it (addressed later via post-training).

**Self-supervision**

- Language modeling can scale because it uses **self-supervision**, unlike most ML algorithms which require **supervision** (labeled data — expensive/slow to obtain).
- With supervision: label examples showing desired behavior, then train on them (e.g., fraud detection labeled "fraud"/"not fraud"). AlexNet (2012, Krizhevsky et al.) — supervised, trained on 1M labeled ImageNet images across 1,000 categories — kicked off the deep learning revolution.
- Drawback of supervision: labeling is expensive/slow. Example: $0.05/image label → $50,000 for 1M images; doubling for cross-checking; scaling categories/objects multiplies cost further (up to $50M hypothetically for 1M categories). Cost varies by task difficulty (labeling a CT scan for cancer signs is far more expensive/skilled than labeling everyday objects).
- **Self-supervision**: the model infers labels directly from input data — no explicit labeling needed. Language modeling is self-supervised because each input sequence provides both the labels (tokens to predict) and the context to predict them.
  - Example: "I love street food." generates 6 training samples via next-token prediction, using `<BOS>` (beginning) and `<EOS>` (end) sequence markers. `<EOS>` helps the model know when to stop generating.
  - Self-supervision ≠ unsupervision: self-supervised learning infers labels from the input; unsupervised learning uses no labels at all.
- Self-supervision lets LMs train on massive naturally occurring text (books, blogs, articles, Reddit) without labeling cost, enabling scale-up into **LLMs**.
- **Parameter**: a variable within an ML model updated through training; a model's size is measured by parameter count. Generally, more parameters → greater capacity to learn (not always true). "Large" is relative and has grown over time: GPT-1 (June 2018) had 117M params (considered large then); GPT-2 (Feb 2019) had 1.5B params, making 117M "small"; as of writing, 100B is considered large.
- Larger models need more data to fully use their added capacity — training a large model on a small dataset wastes compute and could get you the same result with a smaller model.

**From Large Language Models to Foundation Models**

- Language models are limited to text; humans perceive via vision, hearing, touch, etc. Models are extended to more data **modalities** (GPT-4V, Claude 3 understand images+text; some models handle video, 3D assets, protein structures).
- Because they now handle more than text and are used as a base for building further, these models are better called **foundation models** — the term signals both their importance as a foundation and that they can be built upon for different needs.
- Foundation models mark a break from the old structure where AI research was siloed by modality (NLP=text only, CV=vision only, audio models for STT/TTS).
- **Multimodal model**: a model that can work with more than one data modality. A generative multimodal model = **large multimodal model (LMM)**. It generates the next token conditioned on tokens from multiple modalities (e.g., text + image tokens → next token).
- Multimodal models also need scale via self-supervision. Example: **CLIP** (OpenAI, 2021) used *natural language supervision* — trained on 400M (image, text) pairs scraped from the internet (400x ImageNet), without manual labeling. This let CLIP generalize to many image classification tasks without additional training.
- CLIP is NOT generative — it's an **embedding model**, trained to produce joint embeddings of text and images (embeddings = vectors capturing meaning). Multimodal embedding models like CLIP are the backbone of generative multimodal models such as Flamingo, LLaVA, Gemini.
- This book uses **foundation models** to mean both large language models and large multimodal models.
- Foundation models mark the shift from task-specific models (e.g., a sentiment model can't do translation) to **general-purpose models** capable of a wide range of tasks out of the box (though can be tweaked/adapted to maximize performance on a specific task). The Super-NaturalInstructions benchmark (Wang et al., 2022) illustrates the huge range of tasks foundation models are evaluated on.
- Three common techniques to adapt a general-purpose model to your needs:
  1. **Prompt engineering** — craft detailed instructions + examples.
  2. **Retrieval-augmented generation (RAG)** — connect the model to an external database it can use to supplement its instructions/context.
  3. **Finetuning** — further train (adapt weights of) the model on a dataset of your own high-quality examples.
- Adapting an existing model is generally far easier than building/training a model from scratch (e.g., ten examples + a weekend vs. a million examples + six months). Foundation models make AI apps cheaper to build and faster to ship. Task-specific models can still be smaller/faster/cheaper for narrow uses — "build vs. buy/adapt" is a real tradeoff teams must weigh.

**From Foundation Models to AI Engineering**

- **AI engineering**: the process of building applications on top of foundation models (as opposed to ML/MLOps engineering, which builds models from scratch).
- Three factors together create ideal conditions for AI engineering's rapid growth:
  1. **General-purpose AI capabilities** — foundation models can do more tasks, better, enabling applications not previously possible and expanding the user base/demand. AI can automate/partially automate any task requiring communication (writing, images, video, code, training data, algorithms).
  2. **Increased AI investment** — ChatGPT's success sharply increased VC/enterprise AI investment (Goldman Sachs estimated AI investment could approach $100B in the US, $200B globally by 2025). Companies increasingly cite AI as competitive advantage; some (per Gartner, 7% of 2,500 execs surveyed in 2023) cite **business continuity** — i.e., risk of going out of business without adopting generative AI — as their motivation.
  3. **Low entrance barrier to building AI applications** — the "model as a service" approach (popularized by OpenAI and others) exposes models via APIs, removing the need to host/serve models yourself. AI can also write code, letting non-engineers build apps, and lets anyone interact with models in plain English rather than a programming language. Because of resource requirements, actually *developing* foundation models is still limited to big corporations, governments, and well-funded startups — but *adapting* them is now open to nearly everyone (Sam Altman, 2022: the biggest opportunity for most people will be adapting these models for specific applications). Open-source AI engineering tooling (AutoGPT, Stable Diffusion WebUI, LangChain, Ollama) gained GitHub stars faster than almost any other software category, including Bitcoin, Vue, and React.
- Why the term "AI engineering" (vs. ML engineering, MLOps, AIOps, LLMOps): working with foundation models differs enough from traditional ML to warrant a distinct term; "Ops"-suffixed terms overemphasize operations vs. the model-adaptation focus; the author surveyed 20 practitioners and most preferred "AI engineering."

---

## Foundation Model Use Cases

- Categorizations vary by source: AWS groups enterprise genAI use cases into customer experience, employee productivity, process optimization. A 2024 O'Reilly survey used eight categories (programming, data analysis, customer support, marketing copy, other copy, research). Deloitte categorizes by value capture (cost reduction, process efficiency, growth, innovation). Gartner includes "business continuity" as a category.
- Eloundou et al. (2023), "GPTs are GPTs": defines a task as **exposed** if AI/AI-powered software can cut the time needed to complete it by ≥50%. An occupation's exposure % = % of its tasks that are exposed. Highest-exposure occupations (near/at 100%): interpreters/translators, tax preparers, web/digital interface designers, writers/authors, mathematicians, financial quantitative analysts. Occupations with ~no exposure: cooks, stonemasons, athletes.
- The author's own analysis: interviewed 50 companies + 100+ case studies (enterprise) and examined 205 open-source AI apps with ≥500 GitHub stars (consumer), grouped into **8 categories** (Table 1-3):

| Category | Consumer examples | Enterprise examples |
|---|---|---|
| Coding | Coding | Coding |
| Image & video production | Photo/video editing, design | Presentation, ad generation |
| Writing | Email, social/blog posts | Copywriting/SEO, reports/memos/design docs |
| Education | Tutoring, essay grading | Employee onboarding, upskilling |
| Conversational bots | General chatbot, AI companion | Customer support, product copilots |
| Information aggregation | Summarization, talk-to-your-docs | Summarization, market research |
| Data organization | Image search, Memex | Knowledge management, document processing |
| Workflow automation | Travel/event planning | Data extraction/entry/annotation, lead generation |

- Distribution across the 205 open-source repos (Figure 1-7): Coding 30.4%, Conversational bots 26.5%, Image & video production 12.7%, Info aggregation 12.7%, Workflow automation 11.3%, Writing 3.4%, Data organization 1.5%, Education 1.5%. Low % ≠ unpopular — just less commonly open-sourced (more likely enterprise/proprietary).
- Enterprises generally prefer **lower-risk** applications: 2024 a16z Growth report shows companies deploy internal-facing apps (text summarization 62%, enterprise knowledge management 60%) to production faster than external-facing ones (external chatbot 39%, recommendation algorithm 39%). Internal apps build AI expertise while limiting data-privacy/compliance/catastrophic-failure risk. Close-ended tasks (e.g., classification) are also easier to evaluate/risk-estimate than open-ended ones.

**Per-category highlights**

- *Coding*: the most popular use case across surveys. GitHub Copilot (code completion) — one of the earliest production successes, crossed $100M ARR two years after launch. Sub-task tools: extracting structured data from PDFs/web pages, English→code, design/screenshot→code, code translation between languages/frameworks, auto-documentation, test generation, commit-message generation. McKinsey: AI can roughly double developer productivity for documentation, and gives 25–50% productivity gains for code generation/refactoring, but minimal gains on highly complex tasks (Figure 1-9: doc 45-50%, gen 35-45%, refactor 20-30%, high-complexity <10% time reduction). Debate: some (Jensen Huang, Matt Garman) predict AI will replace/radically change developer roles; others expect AI to make devs more productive rather than replace them, and note AI can disrupt outsourcing of simpler dev tasks.
- *Image & video production*: strong fit due to AI's probabilistic/generative nature (Midjourney, Adobe Firefly, Runway, Pika, Sora). AI-generated profile pictures are now mainstream (though platforms like Facebook once banned them for safety). Enterprises use AI for ad/marketing image & video generation, including localized variants (e.g., seasonal edits).
- *Writing*: LLMs are naturally good at writing (trained on text completion). MIT study (Noy & Zhang, 2023): ChatGPT access cut task time ~40% and raised output quality ~18% for college-educated professionals, closing the skill gap (more helpful to weaker writers) — 2x/1.6x more likely to keep using it in their job after 2 weeks/2 months. Writing assistants: Grammarly (finetunes a model for fluency/clarity). Risk: AI-generated spam/low-quality content (e.g., Amazon flooded with shoddy AI travel guidebooks; junk "content farm" SEO sites — NewsGuard found ~400 ads across 141 brands on such sites in June 2023).
- *Education*: schools initially banned ChatGPT for cheating concerns (NYC, LA Unified) then reversed. AI can summarize textbooks, generate personalized lesson plans, adapt content format per learner (read-aloud, visual themes, code-based explanations for those who find code easier than math notation). Duolingo course-creation research (Pajak & Bicknell, 2022): out of 4 stages (curriculum design, raw content creation, exercise creation, lesson personalization), **lesson personalization** benefits most from AI (Figure 1-10). Chegg's stock crashed ($28→$2, Nov 2022–Sep 2024) as students turned to AI instead of paid homework help — illustrating both risk (disruption) and opportunity (AI as tutor/skill accelerator).
- *Conversational bots*: versatile — info retrieval, brainstorming, companionship/therapy-like use, persona emulation. Enterprise: customer support bots (cost savings + faster response), product copilots guiding users through tasks (insurance claims, tax filing, policy lookup). Not just text: voice assistants (Google Assistant, Siri, Alexa) and 3D conversational agents/smart NPCs (e.g., via NVIDIA/Inworld/Convai demos) are growing, letting games have much richer dialogue than traditional scripted NPCs.
- *Information aggregation*: AI helps filter/digest overwhelming information (emails, Slack, news). Salesforce's 2023 Generative AI Snapshot Research: 74% of genAI users use it to distill complex ideas/summarize info. Also called "talk-to-your-docs" for consumer document Q&A. Instacart's internal prompt marketplace found "Fast Breakdown" (summarizing meeting notes/emails/Slack into facts, open questions, action items — auto-inserted into project tracking) to be one of the most popular templates — reduces middle-management burden.
- *Data organization*: growing volume of unstructured/semi-structured data (photos, videos, logs, PDFs, contracts) needs organizing/searching. AI auto-generates text descriptions of images/video and matches text queries to visuals (e.g., Google Photos search; Google Image Search can even generate a matching image if none exists). AI is also strong at data analysis — generating visualizations, identifying outliers, forecasting. Enterprises use AI to extract structured info from unstructured data (credit cards, driver's licenses, receipts, contracts, reports, charts) — the "intelligent data processing" (IDP) industry projected to reach $12.81B by 2030 (32.9%/yr growth).
- *Workflow automation*: end-user automation of boring tasks (booking, refunds, trip planning, forms); enterprise automation of repetitive tasks (lead management, invoicing, reimbursements, data entry). One notable use: using AI to **synthesize data** to improve models themselves (human-in-the-loop labeling) — covered in Chapter 8. Access to external tools is required for many automation tasks (e.g., booking a restaurant needs search + calling + calendar access) — models that can plan and use tools are called **agents** (central topic of Chapter 6).

---

## Planning AI Applications

Building is one of the best ways to learn, but for production, it's worth stepping back: it's easy to build a cool demo, hard to build a profitable product.

**Use case evaluation** — why build this application? Three example risk levels (high→low), which should guide prioritization:
1. *If you don't do this, competitors with AI can make you obsolete* (existential risk) → highest priority. Common in document processing, financial analysis, insurance, data aggregation, advertising/design/image production. Reference Eloundou et al.'s exposure study to gauge industry-level AI exposure.
2. *If you don't do this, you'll miss opportunities to boost profits/productivity* — AI can cut user-acquisition cost (better copy/descriptions/visuals), boost retention (support, personalized UX), help with sales/lead gen, internal comms, market research, competitor tracking.
3. *You're unsure where AI fits yet, but don't want to be left behind* — worth investing R&D time to explore, if affordable (smaller startups may not have this luxury); cautionary examples of companies that waited too long: Kodak, Blockbuster, BlackBerry.
- If AI poses an existential threat, consider building/owning the capability in-house rather than depending on a competitor's tooling. If it's about boosting profits/productivity, buy/adapt options may be more time/cost-efficient.

**The role of AI and humans in the application** (drawing on an Apple framework) — three dimensions:
- *Critical or complementary*: Is AI essential for the app to function (Face ID) or does the app work without it (Gmail Smart Compose)? The more critical AI is, the higher the bar for accuracy/reliability — people tolerate mistakes more when AI is non-core.
- *Reactive or proactive*: Reactive = responds to a user's request/action (chatbot). Proactive = surfaces output when there's an opportunity, without being asked (Google Maps traffic alerts). Reactive features usually need to be fast; proactive features can often be precomputed (latency less critical) but need a higher quality bar since unsolicited/low-quality output feels intrusive.
- *Dynamic or static*: Dynamic features update continually with user feedback/personalization (Face ID adapting to a changing face; a memory feature that learns individual user preferences); static features update only periodically/globally (e.g., Google Photos object detection updated only on app upgrade). Dynamic can mean per-user finetuned models or persistent memory mechanisms; static usually means one shared model updated in batches.
- Also clarify **the role of humans**: does AI support humans, decide directly, or both? E.g., for support chatbots: AI can (a) surface suggested responses for agents to use/edit, (b) auto-respond to simple requests and route complex ones to humans, or (c) respond to everything directly with no human involvement. Involving humans in AI's decision loop = **human-in-the-loop**.
- Microsoft (2023) **Crawl-Walk-Run** framework for gradually increasing automation:
  1. Crawl — human involvement mandatory.
  2. Walk — AI can directly interact with internal employees.
  3. Run — increased automation, potentially including direct AI interaction with external users.
  - The right level shifts over time as system quality improves — e.g., start with AI suggestions for human agents; once acceptance rate is high (e.g., 95% of AI suggestions used verbatim on simple requests), let AI handle those directly.

**AI product defensibility** — the same low entry barrier that helps you helps your competitors; what moat do you have?
- Building on foundation models means adding a layer on top of them — if the underlying model's capabilities expand, your layer/differentiator can be subsumed and your product's advantage erodes (e.g., a PDF-parsing wrapper app risks becoming redundant if ChatGPT itself gets great at PDFs at scale) — though it can still make sense if built to serve users who specifically want in-house/self-hosted open-source models.
- General categories of competitive advantage: **technology, data, distribution** (ability to reach/put your product in front of users). With foundation models, core technology tends to converge across companies, so the technology advantage narrows; the **distribution** advantage tends to favor big/incumbent companies.
- **Data** advantage is more nuanced: big companies generally have more existing data, but startups that get to market first and gather usage data continually can make that usage data their moat — even when raw user data can't be used to directly train models, usage patterns reveal shortcomings/behaviors that guide product and data-collection strategy ("data flywheel").
- Historical pattern: many successful products started as a feature of a bigger product that the incumbent overlooked (Calendly could've been a Google Calendar feature; Mailchimp a Gmail feature; Photoroom a Google Photos feature) — big companies won't necessarily build every feature themselves.

**Setting expectations** — define what success looks like and how it impacts the business (e.g., for a support chatbot: % of messages automated, additional message volume handled, response-time improvement, labor cost saved).
- Track customer satisfaction/feedback, not just automation volume — handling more messages doesn't guarantee happier users.
- Define a **usefulness threshold** before shipping — how good does it need to be to be useful — using metric groups:
  - Quality metrics (response quality).
  - Latency metrics: **TTFT** (time to first token), **TPOT** (time per output token), and total latency — "acceptable" depends on the use case (e.g., beating a median 1-hour human response time is a low bar).
  - Cost metrics (cost per inference request).
  - Other: interpretability, fairness, etc.

**Milestone planning** — evaluate existing off-the-shelf models first to gauge how much work remains to hit your goal (a stronger baseline model = less work needed). Goals often change after evaluation, sometimes making a project no longer worth pursuing (effort > potential return).
- The **"last mile" challenge**: initial demos with foundation models can be deceptively easy/impressive, but going from a good demo to a good product is much harder. UltraChat paper (Ding et al., 2023) and LinkedIn (2024) both found that the journey from 0→60% of desired quality is easy, but 60→100% is exceedingly challenging (LinkedIn: 1 month to reach 80% of experience wanted, but 4 more months to get from 80% to >95% — a lot of time spent on product "kinks" and hallucinations, with diminishing/discouraging returns on each subsequent 1% gain).

**Maintenance** — planning doesn't stop at hitting initial goals; must plan for how the product evolves and is maintained, especially given AI's fast pace of change (context lengths growing, outputs improving, inference getting faster/cheaper — Figure 1-11 shows the cost of achieving a given MMLU accuracy dropping rapidly 2022→2024).
- Good changes still create workflow friction: requires constant cost-benefit re-evaluation (e.g., building in-house may seem cheaper than a model provider, until providers halve prices a few months later, flipping the calculus; conversely a third-party vendor may go out of business after you've built around them).
- Some changes are easier to adapt to (model providers converging on similar APIs makes swapping providers easier, though each model's quirks still require prompt/workflow adjustment and proper versioning/evaluation infrastructure to avoid headaches).
- Some changes are harder — especially **regulatory**: AI/compute/talent are increasingly treated as national security matters and heavily regulated (e.g., GDPR compliance estimated to cost businesses $9 billion; the US October 2023 Executive Order restricts compute exports — a banned GPU vendor in your country is a real risk).
- Some changes can be existential: **IP and AI usage regulation is still evolving** — if your product is built on a model trained on others' data, IP ownership of your product's outputs isn't guaranteed to remain stable; many IP-heavy companies (e.g., game studios) hesitate to adopt AI for this reason.

---

## The AI Engineering Stack

- AI engineering evolved out of ML engineering; many companies still group AI engineering and ML engineering roles together (Figure 1-12 LinkedIn job listings), though some now have distinct AI engineering job titles (Figure 1-13). Regardless of org structure, the roles overlap significantly — existing ML engineers can add AI engineering skills, but AI engineers can also enter with no prior ML background.

**Three layers of the AI stack** (Figure 1-14), typically worked top-down as needed:
1. **Application development** — providing a model with good prompts and necessary context; requires rigorous evaluation and good interfaces. Responsibilities: AI interface, prompt engineering, context construction, evaluation. This layer has seen the most action/evolution in the last two years and is still rapidly evolving.
2. **Model development** — tooling for modeling, training, finetuning, inference optimization; also includes dataset engineering (data is central to model dev); also requires rigorous evaluation. Responsibilities: inference optimization, dataset engineering, modeling & training, evaluation.
3. **Infrastructure** — the bottom layer: tooling for model serving, data management, compute management, and monitoring.
- A March 2024 GitHub analysis (920 repos with ≥500 stars, related to AI) shows a sharp jump in tooling starting 2023 (after Stable Diffusion and ChatGPT), concentrated mostly in **applications** and **application development** categories; infrastructure grew too but much less than the other layers — expected, since core infra needs (resource management, serving, monitoring) stay fairly constant even as models/apps evolve rapidly (Figure 1-15).
- Despite rapid change, many core ML engineering principles still apply: still need to map business metrics ↔ ML metrics, do systematic experimentation (classical ML: hyperparameters; foundation models: models, prompts, retrieval algorithms, sampling variables), optimize for speed/cost, and set up feedback loops to improve with production data.

**AI Engineering Versus ML Engineering** — three major differences:
1. **No need to train your own model from scratch** — AI engineering uses someone else's pretrained model, shifting focus away from modeling/training and toward **model adaptation**.
2. **Bigger models, more compute, higher latency** — more pressure on efficient training/inference optimization; many companies now need more GPUs and bigger compute clusters than before (knowing how to work with GPUs/large clusters, not just a handful, becomes a valued skill).
3. **Open-ended outputs** — foundation models' open-ended output gives flexibility for many tasks but makes them much harder to **evaluate** — evaluation becomes a much bigger problem in AI engineering than in traditional (mostly close-ended) ML engineering.
- **Model adaptation techniques** fall into two categories based on whether they update model weights:
  - **Prompt-based techniques** (e.g., prompt engineering): adapt the model via instructions/context, NOT by changing weights. Easier/faster to start, needs less data, lets you experiment across many models cheaply — but may be insufficient for complex tasks or strict performance requirements.
  - **Finetuning**: adapts the model by updating its weights. More complicated, needs more data, but can meaningfully improve quality/latency/cost and enable things prompting alone cannot (adapting to a task the model wasn't exposed to during training).

**Model development layer detail** — three main responsibilities (evaluation also applies here but is discussed mainly under app development):
- **Modeling and training**: coming up with a model architecture, training it, finetuning it (tools: TensorFlow, Hugging Face Transformers, PyTorch). Requires ML knowledge (algorithm types — clustering, logistic regression, decision trees, collaborative filtering; neural net architectures — feedforward, recurrent, convolutional, transformer; concepts like gradient descent, loss function, regularization). With foundation models, deep ML knowledge is no longer a strict must-have to build applications (though it remains valuable for expanding your toolset and troubleshooting) — note: this claim is disputed by many practitioners (see Table 1-4 footnote).
  - **Training vs. pre-training vs. finetuning vs. post-training** (commonly confused terms):
    - Training always changes model weights, but not every weight change counts as "training" (e.g., quantization changes weight *values*/precision but isn't considered training).
    - **Pre-training**: training a model from scratch — weights randomly initialized. For LLMs, usually text completion training. The most resource-intensive step by far (e.g., ~98% of total compute/data resources for InstructGPT). Mistakes here are costly; pre-training expertise is a rare, highly sought-after skill.
    - **Finetuning**: continuing to train a previously trained model, starting from weights obtained via prior training. Because the model already has knowledge from pre-training, finetuning typically needs far fewer resources (data, compute) than pre-training.
    - **Post-training**: many use this interchangeably with finetuning to mean "training after pre-training." When distinguished, post-training usually refers to what model *developers* do (e.g., OpenAI making a model better at following instructions before release) while finetuning usually refers to what *application developers* do to adapt an already-released (possibly already post-trained) model to their needs. Pre-training and post-training form a spectrum with very similar processes/tooling.
    - Colloquial "training" is sometimes (loosely/incorrectly, technically) used for prompt engineering (e.g., "training ChatGPT" by feeding it context) — technically that's prompt engineering/context, not training, since weights aren't changed.
- **Dataset engineering**: curating, generating, and annotating data needed for training/adapting models. Traditional ML is mostly close-ended (predefined output classes, e.g., spam/not-spam) so labeling is comparatively straightforward; foundation models are open-ended, so annotating (e.g., grading essay quality) is much harder — a bigger AI-engineering challenge. Traditional ML works more with tabular data; foundation-model dataset engineering focuses more on unstructured data — deduplication, tokenization, context retrieval, and quality control (including removing sensitive/toxic data). As models become commoditized, some argue data becomes the key differentiator, making dataset engineering more important than ever. Data needs scale with adaptation technique: training-from-scratch > finetuning > prompt engineering in general.
- **Inference optimization**: making models faster and cheaper — always mattered in ML but is even more important now given foundation models' scale/cost/latency. Challenge: models are often **autoregressive** (tokens generated sequentially) — e.g., 10ms/token → 1 second for a 100-token output, more for longer outputs; getting latency down toward the ~100ms typically expected of internet applications is a major active subfield (industry + academia). Techniques (quantization, distillation, parallelism) covered in Chapters 7–9.
- Table 1-4 summary (traditional ML → foundation models): Modeling/training: ML knowledge required → nice-to-have; Dataset engineering: feature engineering (tabular) → dedup/tokenization/retrieval/quality control (unstructured); Inference optimization: important → even more important.

**Application development layer detail** — with foundation models, since many teams use the *same* underlying model, differentiation shifts from model quality (traditional ML) to the *application development process*. Three responsibilities:
- **Evaluation**: about mitigating risk and uncovering opportunity; needed throughout the whole adaptation process (to select models, benchmark progress, decide production-readiness, detect issues/improvement areas). Harder with foundation models mainly because of their open-ended nature — close-ended tasks (e.g., fraud detection) have clear ground truths to check against, but there's no exhaustive ground-truth list for something like open-ended chatbot responses. The existence of many different adaptation techniques also complicates fair comparison (example: Google's Gemini vs. ChatGPT MMLU comparison in Dec 2023 was misleading because Gemini was evaluated with CoT@32 — 32 examples — vs. ChatGPT's 5 examples; with both at 5-shot, ChatGPT actually performed better — Table 1-5).
- **Prompt engineering and context construction**: getting a model to produce desired behavior purely via input (prompt), without touching weights. Very high leverage — e.g., changing prompting technique alone moved Gemini Ultra's MMLU score from 83.7% to 90.04%. Not just "telling the model what to do" — also about providing necessary context and tools, and (for complex/long-context tasks) a memory-management system to track history.
- **AI interface**: building the interface end users use to interact with the AI application. Before foundation models, only orgs with the resources to build models could ship AI apps, and AI was usually embedded into an org's existing product (e.g., fraud detection inside Stripe/Venmo/PayPal; recommenders inside Netflix/TikTok/Spotify). Now anyone can build standalone AI apps (ChatGPT, Perplexity) or embed AI into other products (GitHub Copilot as a VSCode plug-in; Grammarly as a browser extension; Midjourney as standalone web app or Discord integration). Common interface types: standalone web/desktop/mobile apps; browser extensions; chat-app integrations (Slack, Discord, WeChat, WhatsApp); APIs that let other products/agents integrate AI as plug-ins/add-ons (e.g., VSCode, Shopify, Microsoft 365). Interfaces can also be voice-based (voice assistants) or embodied (AR/VR). New interfaces create new (and harder-to-extract) ways to collect user feedback — natural-language conversational feedback is easy for users to give but harder for systems to parse/use (discussed further in Chapter 10).
- Table 1-6 summary (traditional ML → foundation models): AI interface: less important → important; Prompt engineering: not applicable → important; Evaluation: important → more important.

**AI Engineering Versus Full-Stack Engineering** — the increased emphasis on application development/interfaces pulls AI engineering closer to full-stack development, attracting more frontend engineers. Traditionally ML engineering was Python-centric; today there's growing support for JavaScript/TypeScript AI tooling too (LangChain.js, Transformers.js, OpenAI's Node library, Vercel's AI SDK). More AI engineers now come from web/full-stack backgrounds rather than traditional ML backgrounds — an advantage for quickly turning ideas into demos, getting feedback, and iterating.
- **New workflow ordering** (Figure 1-16): Traditional ML engineering: **Data → Model → Product**. AI engineering: **Product → Data → Model** — since a usable product can often be built directly on an existing foundation model, letting teams build the product first and only invest in data/models once the product shows promise. In traditional ML engineering, model development and product development are often disjointed (ML engineers rarely involved in product decisions); with foundation models, AI engineers tend to be far more involved in building the product itself.

---

## Chapter Summary (author's own recap)

- Traced the rapid evolution of AI: language models → LLMs (via self-supervision) → foundation models (incorporating more modalities) → the rise of AI engineering as a discipline.
- AI engineering's growth is driven by the applications enabled by foundation models' emerging capabilities — covered many successful use-case patterns, consumer and enterprise.
- Before building, ask *whether* you should build the application at all — covered major planning considerations (use-case risk evaluation, AI/human roles, defensibility, expectations, milestones, maintenance).
- AI engineering evolved out of, and shares many principles with, ML engineering, but brings new challenges/solutions (covered via the three-layer AI stack and how each layer's responsibilities changed from ML engineering).
- We're still in early days of AI engineering, with much more innovation ahead. The rest of the book proceeds from the foundational building block: the foundation models themselves (Chapter 2 onward).
