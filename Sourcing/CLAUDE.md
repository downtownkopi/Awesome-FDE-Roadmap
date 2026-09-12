# Sourcing — Protocol

Ongoing external research pipeline. Not a quiz loop, not a build —
feeds raw material into `Test FDE Role/interview-stories/`,
`Test FDE Role/`'s per-category `knowledge-map.md` files, and
`AWESOME-FDE-RESOURCES.md`. Meant to run indefinitely (twice/week),
not a one-off pass.

Files:
- `sources.md` — target list: sites/queries to search each run
  (Glassdoor/Blind FDE interview reviews for Anthropic/OpenAI/Cohere/
  Palantir, open FDE job postings at those companies, relevant eng
  blog posts). Edit this as targets go stale or new ones surface —
  the routine works off whatever's listed here.
- `inbox.md` — raw finds from each run, newest entry on top,
  timestamped, unreviewed. Nothing here is trusted yet.
- `triage-log.md` — audit trail: which inbox item got merged into
  which destination file and when, or was rejected and why.

## Cadence

Twice weekly, Mon/Thu 6 AM SGT (cloud routine via the `schedule`
skill, not local cron — doesn't depend on the laptop being on). Each
run appends new finds to the top of `inbox.md`, never touches
curated files directly, and opens a PR (doesn't push to main) if it
found anything new.

Routine: `Sourcing Scrape` — `https://claude.ai/code/routines/trig_01S7Gas1xywsyyXMjXJ5DqKk`
(manage/disable there; this tool can't delete routines).

## Triage rule

Unreviewed content never goes straight into curated trackers —
Glassdoor/Blind accounts are unverified anecdotes and mixing them
into `interview-stories/` untriaged would poison the calibration
data those files exist to provide. Triage flow:

1. Read new `inbox.md` entries (top of file = newest).
2. For each: judge relevance + credibility. Discard noise/duplicates.
3. Good finds → merge into the right destination:
   - Real candidate interview account → `Test FDE Role/interview-stories/`.
   - New concept/tool mentioned in a JD not yet in a knowledge-map →
     the matching category's `knowledge-map.md`.
   - General resource worth citing → `AWESOME-FDE-RESOURCES.md`.
4. Log every decision (merged or rejected, with reason) in
   `triage-log.md`.
5. Remove triaged entries from `inbox.md` once logged.

## After updating

Refresh the Sourcing row in root `PROGRESS.md`, e.g. "6 runs, 4 items
triaged in, 9 pending in inbox."
