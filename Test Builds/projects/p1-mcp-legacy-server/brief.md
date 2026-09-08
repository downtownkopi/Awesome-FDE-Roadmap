---
project: P1 — MCP server for a legacy system
status: in progress
concepts: AI18 (tool schema design), AI20 (MCP fluency)
learning objective: both — server (tool schema design) and downstream
  agent (tool-calling loop) are equal-weight core, not commodity.
architecture: Option B — stdio transport + CSV data source, hand-rolled
  MCP client (`Client` from @modelcontextprotocol/sdk, not Agent SDK's
  built-in MCP integration) driving the tool-calling loop manually
  against the Anthropic Messages API. Chosen over Option A (Agent
  SDK-managed — faster but hides the protocol exchange) and Option C
  (SQLite + HTTP transport — more realistic but more infra time, kept
  as a stretch goal). Rationale: directly answers AI20 ("MCP vs
  hand-rolled function calling") since both halves get built by hand,
  best match for defending design live in an interview.
---

# What to build

An MCP server that wraps a fake "legacy" data source — a small CSV or
SQLite DB you make up (e.g. a customers table, an orders table) — and
exposes tools an agent can call to query it.

1. **Pick the fake legacy system.** Simplest: a CSV with ~20-30 rows
   (e.g. `customers.csv`: id, name, plan, signup_date). SQLite is fine
   too if you want a slightly more realistic "legacy DB" feel.
2. **Write the MCP server** using the official SDK
   (`@modelcontextprotocol/sdk` for Node, or `mcp` for Python). Expose
   at least 2 tools, e.g.:
   - `get_customer(id)` — look up one row by ID.
   - `search_customers(query)` — filter rows by a field (name/plan).
3. **Tool schema design (AI18) is the actual point of this exercise** —
   don't just make it work, make the tool descriptions and parameter
   schemas unambiguous. Ask yourself: if a model only sees the schema
   (name, description, param types/descriptions), could it misuse the
   tool? E.g. is `search_customers(query)` clear about what `query`
   matches against, or is it vague enough a model might pass a raw SQL
   fragment?
4. **Connect a real MCP client** to test it — Claude Desktop's MCP
   config, or the MCP Inspector CLI tool (`npx @modelcontextprotocol/inspector`)
   is the fastest way to manually call tools and see what the model-facing
   schema actually looks like.
5. **Break it on purpose.** Give the agent/inspector an ambiguous or
   malformed query and see what happens — does the tool fail
   gracefully with a clear error, or does it do something silently
   wrong? This is where an AI21 "agent misused a tool" story usually
   comes from.

# Why (interview mapping)

- AI18 (tool schema design) — vague schemas cause silent misuse; this
  project is the concrete rehearsal for that.
- AI20 (MCP fluency) — what an MCP server exposes (tools/resources/
  prompts), why it standardizes the model-to-external-system boundary
  vs. hand-rolled function calling. See
  `../../../Test FDE Role/anthropic-openai-stack.md` for the reference.
- Anthropic's ~40% "building" split in the FDE loop — this is the most
  direct rehearsal for that per `interview-stories/anthropic-fde-multisource.md`.

# Scope

Keep the "legacy system" fake and small — the point is the MCP
boundary and tool schema, not building a real database. 2 tools is
enough; don't over-build.

# Dependencies / ordering note

Doing this before P3 (sub-agent decomposition) helps — you'll have
already reasoned about the tool-calling boundary once. Doing this (or
P3) before P2 (RAG eval harness) is also useful — gives you a real
system to point eval work at instead of a toy example.

# Done when

- MCP server runs, exposes ≥2 tools with clear schemas.
- A real MCP client (Inspector or Claude Desktop) can call both tools
  successfully.
- At least one deliberate "break it" test run, with the result noted.
- `retrospective.md` filled in.
