---
title: Kitchen Helper Sorting Game
description: Students classify kitchen tasks as "safe for me to help with" or "grown-up-only job," and explain why each grown-up-only job needs an adult.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Kitchen Helper Sorting Game



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** kitchen-helper-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, explain, distinguish

Learning objective: Students classify kitchen tasks as "safe for me to help with" or "grown-up-only job," and explain why each grown-up-only job needs an adult.

Canvas layout:
- Top area (150px): One kitchen task picture card at a time (washing vegetables, stirring a bowl, using the stove, cutting with a knife, setting the table, taking a hot pan out of the oven)
- Middle area (250px): Two bins: "I Can Help" (green) and "Grown-Up Job" (orange)
- Bottom strip (100px): Explanation caption and "Next Task" button

Visual elements:
- 8 kitchen task cards cycling one at a time, calm and non-graphic (no depictions of injury)

Interactive controls:
- Click-to-place or drag-and-drop: place the card in the correct bin
- Button: "Next Task"
- Button: "Reset"

Default parameters:
- First card: washing vegetables (clearly a task the student can help with, to build confidence)

Behavior:
- Correct placement: bin glows, gentle chime, one-sentence reason appears ("Hot stoves can burn skin, so this is always a grown-up's job.")
- Incorrect placement: gentle, non-scary prompt, "Look again — could this task get too hot or too sharp for kids?"

Instructional Rationale: This is an Understand-level (classify/explain) objective, so each answer reveals a plain, practical reason rather than a scary warning, framing food preparation safety as everyday kitchen rules rather than danger content.

Implementation notes: Use p5.js. Keep every task illustration calm, friendly, and non-graphic. Tone should stay plainly practical, matching the project's rule that food safety content should never feel frightening.
```

## Related Resources

- [Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md)
