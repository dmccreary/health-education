---
title: Food Safety Habit Checklist
description: Students recall safe practices for handling food by checking off food safety habits shown in short kitchen scenes.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Food Safety Habit Checklist



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** food-safety-checklist<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, list

Learning objective: Students recall safe practices for handling food by checking off food safety habits shown in short kitchen scenes.

Canvas layout:
- Top area (150px): One kitchen scene at a time (washing hands before a snack, rinsing an apple, picking up food that fell on the floor, asking an adult before touching a hot pan)
- Middle area (250px): Two buttons: "Safe Habit" and "Needs a Change"
- Bottom strip (100px): Explanation caption and "Next Scene" button

Visual elements:
- 8 simple kitchen scenes cycling one at a time, calm and non-graphic

Interactive controls:
- Button: "Safe Habit"
- Button: "Needs a Change"
- Button: "Next Scene"

Default parameters:
- First scene: a child washing hands before snack time (clearly a safe habit, to build confidence)

Behavior:
- Correct answer: gentle chime, one-sentence reason appears ("Washing hands removes germs before they can get on your food.")
- Incorrect answer: calm caption prompts, "Look again — could this food make someone feel sick?"

Instructional Rationale: This is a Remember-level (recall/identify) objective, so the MicroSim uses simple scene recognition with an immediate one-sentence reason, keeping the tone practical and non-frightening rather than warning-heavy.

Implementation notes: Use p5.js. Keep every scene calm and matter-of-fact — frame this as "kitchen rules with a trusted adult," never as scary food-danger content. Large text for read-aloud.
```

## Related Resources

- [Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md)
