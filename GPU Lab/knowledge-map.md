---
title: "Experiment List — GPU Lab (local 3070, 8GB VRAM)"
sources: "Test FDE Role/technical-depth/knowledge-map.md (T7, T8, AI1-AI6, AI17)"
status: living document — add an experiment whenever a new skill needs hands-on grounding
---

# Environment Setup

- G1. **Driver/CUDA/PyTorch sanity check** — verify `nvidia-smi`,
  CUDA toolkit version, and a working PyTorch install that actually
  sees the GPU (`torch.cuda.is_available()`). Trivial but skipped by
  people who only ever used a hosted notebook — worth having actually
  hit and fixed a driver/CUDA-version mismatch once.
- G2. **VRAM budgeting math** — before running anything, estimate VRAM
  needed for a given model size + precision (rule of thumb: ~2 bytes/
  param at FP16, ~1 byte/param at INT8, ~0.5-0.6 bytes/param at Q4)
  plus KV-cache overhead for context length. Compare your estimate to
  what actually gets allocated.

# Local Inference

- G3. **Run a quantized model via llama.cpp** — pull a GGUF model
  (7B, Q4_K_M or similar), run it locally, measure tokens/sec and
  actual VRAM/RAM split (llama.cpp can offload layers between GPU/CPU
  — note how many layers fit on the 3070 before falling back to CPU).
- G4. **Run the same model via Ollama** — same model, compare setup
  friction and throughput against G3. Grounds T7 (which runtime for
  which use case) in a real side-by-side instead of a reading-list fact.
- G5. **Run a model via vLLM** (may require a smaller model to fit —
  vLLM's memory model differs from llama.cpp's) — compare continuous
  batching throughput under concurrent requests vs. llama.cpp's
  single-stream serving. This is the concrete version of AI17
  (latency/cost tradeoffs in inference).

# Quantization

- G6. **Same model, multiple quant levels** — run one model at Q8,
  Q5_K_M, and Q4_K_M (or similar ladder). Measure tokens/sec, VRAM, and
  do a small manual quality check (same 5-10 prompts, compare outputs
  side by side). Produces a real answer to "what does quantization
  actually cost you," not a textbook one.
- G7. **Safe weight handling in practice** — download a model in both
  `.safetensors` and (if available) an older pickle-based format;
  inspect why `safetensors` loading is safe and pickle loading is not
  (without executing an untrusted pickle — read about the attack, do
  not demo it). Grounds T8 directly.

# Fine-Tuning

- G8. **QLoRA fine-tune on a toy dataset** — fine-tune a 7B model
  (4-bit quantized base + LoRA adapters) on a small, clearly-scoped
  dataset (e.g. a narrow style/format task — not a general capability
  improvement, that needs way more data than a toy run provides).
  Record: rank/alpha chosen and why, training time, VRAM used, and
  whether it overfit (a toy dataset overfitting fast is expected and
  itself a useful thing to have seen happen).
- G9. **Before/after comparison** — run the same prompts through the
  base model and the fine-tuned model side by side. Articulate what
  changed and, critically, whether fine-tuning was actually the right
  tool here vs. prompting or RAG (AI6) — this experiment is partly
  designed to let you argue against fine-tuning from experience, not
  just from theory.

# Local RAG

- G10. **Fully local RAG pipeline** — local embedding model (e.g. a
  small sentence-transformer) + local vector store (e.g. a
  file-based/FAISS index) + the locally-served model from G3/G4 as the
  generator. No API calls at all. Grounds AI1-AI5 end-to-end with
  nothing hidden behind a managed API.

# Serving & Throughput

- G11. **Batch size vs. latency tradeoff** — using vLLM (G5), vary
  concurrent request count and measure per-request latency vs.
  aggregate throughput. Concrete grounding for the two-tier
  latency/cost pattern (`../Test FDE Role/system-design/knowledge-map.md`
  S16) and AI17.

# Local Eval

- G12. **Local model as LLM-judge** — use a locally-served model to
  score outputs from G9's before/after comparison (pairwise, per
  AI10), and compare its judgments to your own manual read. Note where
  the local judge disagrees with you and why — judge quality/bias is
  itself part of AI10.

# Suggested order

G1 → G2 → G3/G4 → G6 → G7 → G10 → G5/G11 → G8 → G9 → G12
(environment and basic serving first, quantization and safety next,
local RAG once serving works, fine-tuning once the rest is solid,
eval last since it uses outputs from G9).
