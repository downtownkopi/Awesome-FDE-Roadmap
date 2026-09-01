# FDE Interview Research — Findings

Sources: Exponent, Perspective AI, Dataford, NodeFlair, Paraform, DataCamp (2026 guides).

## Role summary

Forward Deployed Engineer (FDE): hybrid role. Software engineering + systems architecture + direct client deployment. Work onsite/embedded w customer, not central office. Deploy platform (e.g. Palantir Foundry/Gotham/AIP, OpenAI/Anthropic solutions) to solve customer's data/workflow problem.

## Interview process (typical)

1. Recruiter screen.
2. Technical phone screen (coding, ~60 min).
3. Onsite/virtual loop:
   - Coding round (CodePair, ~60 min, embeds 15-20 min behavioral).
   - Ambiguous case study / decomposition round (45-60 min). **Highest weight (~30%), lowest pass rate (~40%).**
   - System design round.
   - Discovery-conversation / simulated customer round (heavier at Anthropic).
   - Behavioral / values interview.
4. Timeline: Palantir 4-6 wks. OpenAI 3-5 wks (faster).

## What gets tested (roughly equal weight)

1. Technical depth (coding, data pipelines, architecture).
2. Customer-facing judgment (discovery, translation, empathy).
3. Reasoning out loud through ambiguity (narrate, don't go silent).

"T-shaped": deep in one core technical area + broad across several + strong customer-facing bar.

## Technical round details

- Python + SQL non-negotiable.
- Topics: data pipelining, data architecture design, production-quality code, end-to-end data workflow design.
- Example: implement shape classes (OOP, extend for new shapes). SQL joins/aggregations across tables.
- Some rounds: multithreading, custom package-installer / systems concepts.
- Palantir style: walk through app architecture live.

## Case study / decomposition round (signature round)

Format: interviewer gives vague real customer brief. Must decompose live, narrate reasoning, propose plan. NOT solve silently then present.

Common failure: jumping straight to solution before clarifying questions.

Graders look for:
- Clarifying questions FIRST.
- Clean decomposition of problem space (what are the sub-problems).
- Prioritization (what matters first, MVP vs later).
- Transparent tradeoffs (why chose X over Y, cost/risk).

Example prompts:
- "City wants to cut 911 response times. Has 911 call data, traffic data, ambulance GPS data. What do you build?"
- "Logistics customer ops team can't trust the dashboard. Diagnose + plan."
- "Hospital system: 5 hospitals, 10k beds, 18% readmission rate, wants AI to reduce readmissions. What do you build?"

## Behavioral round themes

- Time you solved a highly ambiguous technical problem w/ little direction.
- Client insists on suboptimal/wrong technical approach — how handle?
- A deployment went badly — what did you do?
- Ownership of outcomes outside your direct scope ("radical ownership").

Use STAR (Situation, Task, Action, Result), keep concrete, quantify impact.

## Company differences

- **Palantir**: known for hardest decomposition case study. Coding round in CodePair.
- **OpenAI**: faster loop (3-5 wks), weights case study + customer empathy + business judgment ~50%.
- **Anthropic**: discovery-conversation w/ simulated buyer graded directly. Explicit safety/RSP screen. System design round focused on Claude-specific eval design.

## Core skills checklist

- Strong SWE fundamentals (production code, testing, debugging).
- Systems integration (connect to messy real-world data/systems).
- Customer communication / fluency / empathy.
- Translate business need <-> technical spec, both directions.
- Product judgment (what to build first, what to skip).
- High autonomy in undefined problem spaces.
- Radical ownership (own outcome even parts not "yours").

## Sources

- https://www.tryexponent.com/guides/palantir-forward-deployed-engineer-interview
- https://www.tryexponent.com/blog/forward-deployed-engineer-interview-the-definitive-2026-guide-fde
- https://dataford.io/interview-guides/palantir-technologies/forward-deployed-engineer
- https://getperspective.ai/blog/forward-deployed-engineer-interview-questions-2026-prep-guide
- https://getperspective.ai/blog/anthropic-applied-ai-engineer-interview-process-frontier-lab-2026
- https://getperspective.ai/blog/palantir-forward-deployed-engineering-playbook-anthropic-openai-copying
- https://www.tryexponent.com/blog/decomposition-interview
- https://www.datacamp.com/blog/what-is-forward-deployed-engineer
- https://www.paraform.com/blog/forward-deployed-engineer-vs-solutions-engineer-vs-customer-engineer
