---
title: "Knowledge Map — Applied AI Engineer Master Revision & MCQ Bank"
source: "Applied AI Engineer — Master Revision & MCQ Bank" (imported, see source.md)
status: living document — updated as testing reveals structure gaps, otherwise stable
note: >
  Concept IDs use the bank's own question numbers (Q1-Q92) so this map stays
  1:1 traceable to source.md. Testing should ask open-recall questions built
  around each concept, not just re-serve the bank's own MCQ text verbatim.
  Not shown to the learner by default — used internally to drive question
  selection and coverage tracking.
---

# 1. LLM / Transformer Fundamentals

- Q1. **Token** — unit tokenization produces; why models process tokens not raw text. (High)
- Q2. **Embedding** — vector representation of a token/input. (High)
- Q3. **Self-attention purpose** — lets tokens incorporate info from relevant other tokens. (Critical)
- Q4. **Q/K/V roles** — query asks, key matches, value supplies info. (Critical)
- Q5. **Causal masking** — prevents attending to future tokens during autoregressive training. (Critical)
- Q6. **RoPE** — adds positional info since attention doesn't inherently encode order. (High)
- Q7. **KV cache benefit** — avoids recomputing K/V for prior tokens during decode. (Critical)
- Q8. **Prefill vs decode** — prefill processes the prompt; decode generates autoregressively. (Critical)
- Q9. **MoE goal** — activate only a subset of parameters per token. (High)

# 2. Inference / Serving

- Q10. **KV-cache memory growth** — grows with sequence length (more stored K/V per prior token). (High)
- Q11. **Continuous batching** — dynamically add/remove requests from a batch as sequences progress. (Critical)
- Q12. **PagedAttention** — manages KV-cache memory in blocks/pages instead of large contiguous allocations. (High)
- Q13. **Latency vs throughput trade-off** — batching often raises throughput but can raise per-request latency. (Critical)
- Q14. **Quantization (inference)** — lower numerical precision to cut memory/compute. (High)
- Q15. **Speculative decoding** — draft model proposes tokens, target model verifies. (High)
- Q16. **All-to-All (distributed inference)** — moves token reps between devices per MoE expert routing. (Medium)

# 3. RAG

- Q17. **Chunking** — divides documents into retrievable units of useful size. (Critical)
- Q18. **Embedding model in dense retrieval** — maps query/docs into vector space for semantic similarity. (Critical)
- Q19. **BM25** — lexical relevance scoring via term matching. (High)
- Q20. **Hybrid retrieval** — combines complementary lexical + semantic signals. (Critical)
- Q21. **Bi-encoder vs cross-encoder** — bi-encoder embeds independently (fast candidate retrieval); cross-encoder jointly scores (stronger, pricier reranking). (Critical)
- Q22. **Reranker purpose** — reorders a small candidate set with a more accurate relevance model. (High)
- Q23. **Agentic RAG** — agent dynamically decides retrieval/tool actions instead of one fixed path. (High)

# 4. RAG Evaluation

- Q24. **Recall@K** — how much of the relevant set was retrieved in top K. (Critical)
- Q25. **Precision@K** — fraction of top-K retrieved that's relevant. (Critical)
- Q26. **MRR** — emphasizes rank position of the first relevant result. (High)
- Q27. **NDCG** — captures graded relevance + rank position, beyond binary top-K. (High)
- Q28. **Faithfulness/groundedness** — whether answer claims are supported by given evidence. (Critical)
- Q29. **Citation correctness** — whether the citation attached to a claim actually supports it. (Critical)
- Q30. **Relevant ≠ supporting** — evidence can be relevant without supporting the specific claim. (Critical)
- Q31. **Claim-level evaluation** — one answer can contain claims with different support levels. (High)
- Q32. **LLM-as-Judge risk** — judge bias (position bias, inconsistent calibration). (High)
- Q33. **Human-annotated eval sets** — trusted reference for calibrating automated evaluation. (High)

# 5. Agents

- Q34. **Deterministic workflow vs agent** — prefer a workflow when the process is predictable/specifiable. (Critical)
- Q35. **Agent vs fixed workflow** — agent dynamically decides action/tool from state + observations. (Critical)
- Q36. **ReAct** — interleaves reasoning with actions and observations. (High)
- Q37. **Agent state** — carries info needed to continue the task across steps. (High)
- Q38. **Evaluate trajectory not just final answer** — correct answers can hide unsafe/wasteful/wrong intermediate steps. (Critical)
- Q39. **Agent evaluation scope** — task success, tool-call correctness, trajectory quality, efficiency, safety. (High)

# 6. Production Agents

- Q40. **Idempotency** — retrying an action shouldn't unintentionally duplicate side effects. (Critical)
- Q41. **Retryable vs non-retryable errors** — retrying a permanent failure wastes resources / amplifies damage. (High)
- Q42. **Retry budgets** — bound unbounded time/cost or retry storms from repeated failures. (Critical)
- Q43. **Step/cost/time budgets** — bound runaway agent behavior, make production behavior predictable. (Critical)
- Q44. **Graceful failure** — fail in a controlled way, preserve useful state, give an appropriate outcome. (High)

# 7. MCP

- Q45. **MCP definition** — protocol/integration layer standardizing how AI apps interact with external tools/resources/prompts. (Critical)
- Q46. **MCP vs function calling** — function calling = model-to-app tool invocation; MCP standardizes that integration across clients/servers. (High)
- Q47. **MCP tools** — operations an MCP client can invoke through an MCP server. (Medium)
- Q48. **MCP security concern** — exposes powerful external capabilities to an LLM-driven system. (Critical)

# 8. AI Security

- Q49. **Prompt injection** — untrusted instructions attempting to manipulate model behavior. (Critical)
- Q50. **Indirect prompt injection** — malicious instructions embedded in external content the model processes. (Critical)
- Q51. **LLM is not the security boundary** — authorization must be enforced by deterministic system components, not the model. (Critical)
- Q52. **Least privilege** — give each component only the permissions its task requires. (Critical)
- Q53. **Separate read/write/destructive tools** — different permission/approval requirements by risk. (High)
- Q54. **Sandbox untrusted execution** — contain dangerous operations, limit blast radius. (High)
- Q55. **Isolate secrets from the LLM** — model shouldn't hold credentials it could be manipulated into revealing/misusing. (Critical)
- Q56. **Tenant/data isolation** — one customer's data can't be accessed by another's request. (High)

# 9. Production AI Engineering

- Q57. **Traces (agents)** — show sequence of model/tool/retrieval calls + latency across a request. (High)
- Q58. **P50/P95/P99 latency** — latency percentiles (typical vs slow tail vs very-slow tail). (High)
- Q59. **Tail latency importance** — a small slow-request fraction can hurt UX and system capacity significantly. (Critical)
- Q60. **Semantic caching** — reuse prior result for a sufficiently similar request, not just exact-string match. (High)
- Q61. **Cache invalidation difficulty** — cached results go stale as underlying data/model behavior changes. (High)
- Q62. **Model routing** — route requests to models by capability/latency/cost/task fit. (High)
- Q63. **Fallbacks** — maintain useful service when the preferred model/provider/path fails. (High)
- Q64. **Backpressure** — prevents overloaded downstream systems from being overwhelmed. (High)
- Q65. **Queues near capacity** — wait time grows rapidly as utilization approaches saturation. (Medium)

# 10. Fine-tuning / SFT

- Q66. **Prompting vs fine-tuning** — prompting changes input/context; fine-tuning changes trainable weights. (Critical)
- Q67. **Fine-tuning cost reduction** — encoding behavior into weights can reduce need for long prompts/in-context examples at scale. (High)
- Q68. **SFT definition** — supervised fine-tuning on example input/desired-output pairs. (Critical)
- Q69. **Dataset quality > size** — noisy examples teach bad patterns; quality examples give clearer signal. (High)
- Q70. **Remove exact/near duplicates** — duplicates overweight examples, raise leakage/memorization risk. (High)
- Q71. **Train/validation/test split purpose** — fit / guide development / final held-out estimate. (Critical)
- Q72. **Data leakage** — eval data unintentionally influencing training/development. (Critical)
- Q73. **Response-only loss masking** — focus supervised loss on the assistant response, not user/input tokens. (Critical)
- Q74. **Catastrophic forgetting** — fine-tuning causes loss of previously useful capabilities. (High)

# 11. QLoRA / Practical Training

- Q75. **QLoRA advantage** — fine-tune a quantized base model with trainable LoRA adapters; big memory reduction. (Critical)
- Q76. **Learning rate** — controls size/aggressiveness of parameter updates. (High)
- Q77. **Epoch** — one complete pass through the training dataset. (Medium)
- Q78. **More epochs ≠ better** — can improve fit while hurting generalization (overfitting). (High)
- Q79. **Batch size** — how many examples contribute to one optimization update. (Medium)
- Q80. **Gradient accumulation** — accumulate gradients across micro-batches before one optimizer update. (High)
- Q81. **Effective batch size formula** — micro-batch × grad-accum steps × num GPUs. (Medium)
- Q82. **Sequence length** — max tokens processed in one training sequence. (Medium)
- Q83. **Sequence packing** — improves token utilization by packing multiple short examples into one sequence. (High)
- Q84. **Packing needs masking** — prevents one packed example from influencing another. (High)
- Q85. **Train↓/val↑ loss pattern** — signals overfitting. (Critical)
- Q86. **LR warmup purpose** — gradually raise LR at start for training stability. (High)
- Q87. **Change one variable at a time** — simultaneous changes make causal interpretation impossible. (Critical)
- Q88. **Keep eval set fixed across comparable experiments** — changing the measurement set breaks fair comparison. (Critical)
- Q89. **Model selection ≠ lowest val loss alone** — select on production-relevant objectives (correctness, format, safety, latency, cost, hallucination resistance). (Critical)

# 12. Experiment Design

- Q90. **Baseline experiment** — stable reference config for later controlled comparisons. (Critical)
- Q91. **Ablation** — isolates which component/hyperparameter drives an observed result. (Critical)
- Q92. **Confounded multi-variable change** — can conclude the combo improved things, not which change caused it. (Critical)

# Core Engineering Principles (cross-cutting, test as synthesis/application questions)

- P1. The LLM is not the security boundary. (→ Q51)
- P2. Don't use an agent when a deterministic workflow is sufficient. (→ Q34)
- P3. Relevant evidence is not necessarily supporting evidence. (→ Q30)
- P4. Faithfulness and citation correctness are different metrics. (→ Q28, Q29)
- P5. Evaluate agents on trajectories, not just final answers. (→ Q38)
- P6. Bound agent steps, cost, time, and retries. (→ Q42, Q43)
- P7. Use validation behavior to detect overfitting. (→ Q85)
- P8. Keep evaluation sets fixed when comparing experiments. (→ Q88)
- P9. Change important experiment variables deliberately. (→ Q87, Q92)
- P10. Optimize for production task outcomes, not just training loss. (→ Q89)
- P11. Think in tokens, latency, cost, reliability, and failure modes.
- P12. Prefer simple deterministic systems when they solve the problem reliably. (→ P2)

# Easily Confused Concepts

- X1. **Recall@K vs Precision@K** (Q24 vs Q25) — "did we get the evidence" vs "was what we got useful."
- X2. **Faithfulness/groundedness vs citation correctness** (Q28 vs Q29) — claim-supported-by-evidence vs citation-actually-supports-claim; a doc can be relevant (Q30) without being supporting evidence for a specific claim.
- X3. **Bi-encoder vs cross-encoder** (Q21) — independent embedding (fast, retrieval) vs joint scoring (slow, reranking).
- X4. **Prefill vs decode** (Q8) vs **continuous batching** (Q11) — prefill/decode is a per-request phase distinction; continuous batching is a scheduling technique across many requests.
- X5. **Retry budgets** (Q42) vs **step/cost/time budgets** (Q43) — retry budgets bound repeated failures of one action; step/cost/time budgets bound the whole agent run.
- X6. **Prompting vs fine-tuning vs SFT** (Q66, Q68) — prompting changes context only; fine-tuning changes weights generally; SFT is fine-tuning specifically via labeled input/output examples.
- X7. **Epoch vs batch size vs gradient accumulation vs effective batch size** (Q77, Q79, Q80, Q81) — distinct knobs that combine into one formula; easy to conflate.
- X8. **MCP vs function calling** (Q46) — MCP is the standardized protocol layer; function calling is the model-side mechanism MCP tools ride on.

# Dependencies (must understand X before Y)

- Attention/Q,K,V (Q3, Q4) → before KV cache (Q7) and prefill/decode (Q8) make full sense.
- Chunking + embeddings (Q17, Q18) → before hybrid retrieval (Q20) and reranking (Q21, Q22).
- Recall/Precision@K (Q24, Q25) → before faithfulness/citation correctness (Q28, Q29) as a "retrieval quality vs answer quality" distinction.
- Agent vs workflow (Q34, Q35) → before agent state (Q37) and trajectory evaluation (Q38).
- Prompting vs fine-tuning (Q66) → before SFT (Q68) and QLoRA (Q75).
- Batch size + gradient accumulation (Q79, Q80) → before effective batch size formula (Q81).
- Baseline (Q90) → before ablation (Q91) and confounded-change interpretation (Q92).

---
# Importance Legend
Critical = core mechanism/principle, load-bearing for later topics or interview judgment questions. High = important supporting concept. Medium = useful detail, lower interview weight.
