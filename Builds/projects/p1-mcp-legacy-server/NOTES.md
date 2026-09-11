# NOTES — P1 MCP server for a legacy system

## What was built

Two halves, both treated as core (per stated learning objective):

1. **MCP server** (`code/server.js`, stdio transport, CSV-backed fake
   "legacy" customer table). Two tools:
   - `get_customer(id)` — exact ID lookup.
   - `search_customers(field: "name"|"plan", value)` — enum-constrained
     field to keep the schema unambiguous (deliberately excludes
     signup_date/id from search — stated explicitly in the tool
     description, not left implicit).
   Both tools define `outputSchema` + return `structuredContent` in
   addition to the mandatory `content` text block.

2. **Agent** (`code/agent.js`) — hand-rolled MCP `Client` (not the
   Claude Agent SDK's built-in MCP integration) driving a manual
   ReAct-style loop against the raw Anthropic Messages API:
   `listTools()` → map to `input_schema` → `messages.create()` →
   on `stop_reason === 'tool_use'`, `callTool()` per requested tool →
   map result back to a `tool_result` block → loop, capped at 8 turns.

## Why this architecture over the alternatives

Considered three options (full comparison in `brief.md`):
- **A — Agent SDK-managed MCP client.** Fastest, but the actual
  protocol exchange (tool discovery, tool_use → callTool mapping)
  happens inside the SDK, invisible. Rejected: defeats the point of
  the exercise, which is being able to explain what MCP standardizes,
  not just that it works.
- **B — hand-rolled loop, stdio + CSV.** Chosen. Slower to build than
  A, but every step of the tool-calling loop is code I wrote and can
  walk through line by line.
- **C — hand-rolled loop, SQLite + HTTP transport.** More realistic
  (closer to how a remote MCP server actually gets deployed for a
  client), but adds HTTP lifecycle + SQL-injection-surface concerns on
  top of B. Deferred as a stretch goal, not built this pass.

## What broke and how it was fixed

Nothing broke at runtime. What was initially wrong: the server shipped
with no `outputSchema` at all — both tools returned an unschemaed
`JSON.stringify(...)` text blob, and I described that informally as
"matching the schema" when only the *input* side was actually
enforced. Caught by direct question during manual Inspector testing
("where does it say the output schema"), not by an automated check.
Fixed by adding `outputSchema` (zod shape) + `structuredContent` to
both tools, confirmed the SDK actually validates it (traced into
`node_modules/.../server/mcp.js`: validation is skipped when
`isError: true`, enforced otherwise).

## Open tradeoffs to be ready to discuss

1. **Agent forwards `content`, not `structuredContent`, to Claude.**
   `content` is guaranteed by the MCP spec on every tool from every
   server; `structuredContent` only exists because this particular
   server chose to define `outputSchema`. For *this* server the two
   are interchangeable today. The design bet is that an agent built
   around the guaranteed field generalizes to other MCP servers
   without changes; one built around the optional field doesn't.
   Documented middle ground not built: try `structuredContent` first,
   fall back to `content` — more robust, more code, skipped for a
   first pass.
2. **`search_customers`' field enum excludes date-range and ID
   search** — deliberate scope limit for schema clarity (AI18), not
   an oversight. A real system would likely want date-range queries;
   the tradeoff is schema simplicity vs. query flexibility.
3. **CSV over SQLite** — kept the "legacy system" fake and small on
   purpose (Option B scope). SQLite (Option C) would exercise real
   SQL-injection-adjacent schema-design stakes (a `run_query(sql)`
   tool is the textbook AI18 anti-pattern) but wasn't needed to hit
   this project's learning objective.
4. **stdio over HTTP transport** — stdio means the agent spawns the
   server as a child process; no separate deployment story. A real
   client integration would very likely be HTTP/Streamable-HTTP so the
   server can run as its own long-lived service. Not built this pass.
5. **No retry/backoff on the Messages API call in `agent.js`** — P5
   already built that pattern in isolation; this project didn't wire
   the two together. A natural "next" combination if asked.
6. **`MAX_TURNS = 8`** is an arbitrary safety cap, untested — no run
   has actually hit it, so the cutoff behavior (currently: loop just
   ends, last assistant message may be mid-tool-call) isn't verified.
