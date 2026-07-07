---
title: Nutrition Label Face-Off
description: Students compare two real nutrition labels side by side across multiple nutrients and determine which food is the healthier choice for a stated goal.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Nutrition Label Face-Off



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** nutrition-label-face-off<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare, contrast, examine, differentiate

Learning objective: Students compare two real nutrition labels side by side across multiple nutrients and determine which food is the healthier choice for a stated goal.

Canvas layout:
- Left side (500px): Two nutrition labels displayed side by side, styled like real Nutrition Facts panels
- Right side (200px): Control panel with food-pair selector and a goal selector, plus a comparison scorecard

Visual elements:
- Two label panels (Food A and Food B) each showing serving size, Calories, added sugar, fiber, sodium, and protein
- A scorecard row beneath the labels that highlights, for each nutrient, which food is more favorable

Interactive controls:
- Dropdown: Choose a food pair (e.g., "Cereal A vs Cereal B," "Yogurt A vs Yogurt B," "Bread A vs Bread B")
- Dropdown: Choose a comparison goal ("Lower added sugar," "More fiber," "More protein," "Lower sodium")
- Button: "Reveal Winner" — highlights the better food for the selected goal with a one-sentence explanation
- Button: "Reset"

Default parameters:
- Food pair: Cereal A vs Cereal B
- Goal: Lower added sugar

Behavior:
- Selecting a new goal re-highlights which label wins that specific nutrient, showing that "healthier" can depend on what you're prioritizing
- Reveal Winner shows a combined judgment across all four nutrients, noting when the answer is a clear win versus a trade-off

Instructional Rationale: This is an Analyze-level compare/contrast task, so the pattern shows concrete label data side by side with a goal-driven highlight rather than an animation, letting students trace exactly which numbers drive the comparison.

Implementation notes: Use p5.js. Store each food pair as an object with nutrient values for Food A and Food B; goal selection drives which nutrient row is highlighted and which food is marked favorable.
```

## Related Resources

- [Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md)
