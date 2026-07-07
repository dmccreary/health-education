---
title: Positive or Negative Influence?
description: Students distinguish which people or situations positively or negatively influence a health practice or behavior, using short, everyday examples.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Positive or Negative Influence?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md).

```text
Type: microsim
**sim-id:** influence-spotter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, examine

Learning objective: Students distinguish which people or situations positively or negatively influence a health practice or behavior, using short, everyday examples.

Canvas layout:
- Top area (150px): A short scenario sentence plus a picture (e.g., "Your friend says, 'Let's ride bikes with our helmets on!'")
- Middle area (250px): Two large buttons: "Positive Influence" and "Negative Influence"
- Bottom strip (100px): Explanation caption and "Next Scenario" button

Visual elements:
- 8 scenarios cycling one at a time, mixing friends, family, media, and advertising examples

Interactive controls:
- Button: "Positive Influence"
- Button: "Negative Influence"
- Button: "Next Scenario"

Default parameters:
- First scenario: friend suggesting bike helmets (clearly positive, to build confidence)

Behavior:
- Correct answer: gentle chime, character nods, and a one-sentence explanation appears connecting the choice to health
- Incorrect answer: calm caption reframes the example, "Let's think again — does this help your body stay healthy and safe, or not?"
- After all scenarios, a wrap-up caption reminds students they get to choose which influences to follow

Instructional Rationale: Judging whether an influence is positive or negative requires comparing the example against a health standard, which is an Analyze-level task. Step-through scenarios with a revealed explanation (rather than animation) keep the focus on the reasoning, matching the Grade 1 benchmark of distinguishing influence direction.

Implementation notes: Use p5.js. Keep advertising examples generic (no real brand names or logos). Large text for read-aloud; teacher narrates each scenario.
```

## Related Resources

- [Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md)
