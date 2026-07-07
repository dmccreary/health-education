---
title: Is This Behavior Safe Enough?
description: Students evaluate personal behaviors to prevent injuries across multiple environments (home, playground, road, water) by rating scenario cards on a safety scale and justifying their rating.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Is This Behavior Safe Enough?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Safety And Trusted Adults](../../bands/grade-3/chapters/02-safety-and-trusted-adults/index.md).

```text
Type: microsim
**sim-id:** safety-behavior-rater<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, justify

Learning objective: Students evaluate personal behaviors to prevent injuries across multiple environments (home, playground, road, water) by rating scenario cards on a safety scale and justifying their rating.

Canvas layout:
- Top area (150px): One illustrated scenario card at a time across four environments (home, playground, road, water), e.g., "Riding a bike on the sidewalk without a helmet," "Waiting for the crossing guard's signal before crossing," "Running next to the pool," "Leaving cleaning spray within reach of a younger sibling"
- Middle area (250px): A three-point rating scale the student selects: "Safe," "Risky — Needs a Change," "Unsafe — Stop This Now"
- Bottom strip (100px): Justification prompt, revealed reasoning, and "Next Scenario" button

Visual elements:
- 10 scenario cards spread across the four environments, mixing clearly safe, borderline risky, and clearly unsafe behaviors
- Environment icon (house, playground swing, road sign, or wave) shown on each card

Interactive controls:
- Click one of three rating buttons: "Safe," "Risky — Needs a Change," "Unsafe — Stop This Now"
- After rating, a text box invites a one-sentence reason (optional, can also pick from short reason chips like "could fall," "could hit someone," "hard to see danger coming")
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario: "Waiting for the crossing guard's signal before crossing" (clearly "Safe," to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scenario card and environment, no judgment yet
  Stage 2: After the student rates it, reveal the expert rating and a one-sentence justification ("This is risky because falls are unpredictable and a helmet protects the head, which is why it needs a change.")
  Stage 3: Show a running scoreboard of how many ratings matched the expert view, encouraging re-tries rather than a pass/fail grade

Behavior:
- Matching rating: card glows green, encouraging caption appears with the justification
- Non-matching rating: calm prompt, "Look again — what could go wrong here, and how serious would it be?", then reveal the reasoning anyway
- After all scenarios, a summary caption reminds students that evaluating safety means asking what could go wrong, how likely it is, and whether a safer choice exists

Instructional Rationale: Evaluating personal behaviors to prevent injuries is an explicit Evaluate-level benchmark (`3.5.1.2`), the first genuine judgment task in this content strand. A rating-scale-plus-justification pattern is used instead of a simple sort, because Evaluate-level thinking requires weighing likelihood and severity and defending a judgment, not just matching an example to a category.

Implementation notes: Use p5.js. Keep illustrations simple and non-graphic — show the safer/unsafer choice, not an injury itself. Cover all four environments named in the benchmark: home, playground, road, and water.
```

## Related Resources

- [Chapter 2: Safety And Trusted Adults](../../bands/grade-3/chapters/02-safety-and-trusted-adults/index.md)
