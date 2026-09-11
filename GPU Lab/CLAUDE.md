# GPU Lab — Local ML Hands-On Protocol

`Builds/` is API/cloud-agent-level (MCP, agent orchestration,
hosted models). This folder is one layer down the stack: local
inference, quantization, and fine-tuning on the user's own 3070
(8GB VRAM). Purpose: real intuition for questions that are usually
answered from secondhand knowledge — model-size/VRAM tradeoffs,
quantization quality loss, what fine-tuning actually involves — and a
genuine edge over candidates who have only ever called an API.

This grounds `Test FDE Role/technical-depth/knowledge-map.md` T7
(local/offline inference runtimes), T8 (safe model-weight handling),
AI1-AI5 (RAG internals), AI6 (fine-tune vs. RAG vs. prompt-eng), and
AI17 (latency/cost tradeoffs) in lived experience instead of concepts.

## Hardware reality check

3070 = 8GB VRAM. This caps what's feasible locally:
- Inference: quantized 7B-13B models comfortably (Q4/Q5 GGUF); 8B at
  higher precision is tight; don't expect to run 70B+ locally at all.
- Fine-tuning: QLoRA on a 7B model is realistic; full fine-tuning of
  anything beyond ~1-3B is not, without offloading tricks or a cloud
  GPU rental for that one experiment (worth calling out explicitly
  when an experiment needs more than the 3070 can do).
- Always record actual VRAM used per experiment — the gap between
  "should fit" and "actually fits" is itself a source of real
  interview-relevant intuition (OOM debugging, T4 in the parent map).

Files:
- `knowledge-map.md` — the experiment list, grouped into Environment
  Setup, Local Inference, Quantization, Fine-Tuning, Local RAG, Serving
  & Throughput, Local Eval.
- `knowledge-tracker.md` — one entry per experiment: setup, VRAM used,
  what was measured/learned, what broke, extractable story.

## Running an experiment

Trigger: user names an experiment from `knowledge-map.md`, or asks
"give me something to try on my GPU."

1. Look up or add the experiment in `knowledge-map.md`.
2. Point the user at what to install/run — actual execution happens on
   their machine, not in this repo. This repo tracks intent, config,
   and outcome, not a mirrored copy of model weights or checkpoints
   (never commit model weights/checkpoints to this repo).
3. After running it, record real numbers: VRAM used, tokens/sec,
   quality observations (even subjective), what broke and why.

## After an experiment

1. Append a full entry to `knowledge-tracker.md`: Date, Experiment,
   Hardware config (quant level, batch size, etc.), VRAM Used, What Was
   Measured/Learned, What Broke, Extractable Story (Y/N + summary),
   Memory Priority.
2. If a genuine story emerged (a fine-tune that overfit, a
   quantization level that broke output quality, an OOM and how it was
   fixed), suggest logging a polished version in
   `../Test FDE Role/behavioral/star-stories.md` (B6) and noting it
   against T7/T8/AI6/AI17 in
   `../Test FDE Role/technical-depth/knowledge-tracker.md`.
3. Update `Overall Progress` in `knowledge-tracker.md`.

## After updating

Refresh the GPU Lab row in root `PROGRESS.md`, e.g. "3/7 experiments
run, 1 extractable interview story logged."
