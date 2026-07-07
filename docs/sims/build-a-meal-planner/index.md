---
title: Build-A-Meal Planner
description: Students design a nutritious meal by selecting one item from each food category and a drink, then receive feedback on whether their plan is balanced.
status: scaffold
library: p5.js
bloom_level: Create (L6)
---

# Build-A-Meal Planner



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** build-a-meal-planner<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: design, construct, formulate

Learning objective: Students design a nutritious meal by selecting one item from each food category and a drink, then receive feedback on whether their plan is balanced.

Canvas layout:
- Left side (400px): Four category trays — Protein, Grain, Fruit/Vegetable, Drink — each with 5-6 selectable food icons
- Right side (250px): The assembled plate showing current selections, plus a feedback panel

Visual elements:
- A plate graphic in the center-right that fills in with icons as items are chosen
- Category trays with icons: Protein (egg, beans, chicken, fish, tofu), Grain (whole-wheat bread, brown rice, oats, tortilla), Fruit/Vegetable (apple, carrot, spinach, orange, broccoli), Drink (water, milk, soda, juice, sports drink)

Interactive controls:
- Click one icon per category to add it to the plate (clicking a new icon in the same category swaps it)
- Button: "Check My Meal" — evaluates the plate against the balanced-meal checklist
- Button: "Reset Plate"

Default parameters:
- Plate starts empty; no pre-selected items

Behavior:
- "Check My Meal" gives specific feedback: confirms categories that are covered, flags any missing category, and notes if the drink choice was water/milk versus soda/juice
- Encouraging tone in feedback text regardless of outcome, with a specific suggestion for improvement if something is missing

Instructional Rationale: This is a Create-level objective, so the pattern is an open-ended builder where students assemble their own solution from component parts, rather than a rigid template, matching the "design/construct" verb this concept calls for.

Implementation notes: Use p5.js. Store food items as objects with category and tags (e.g., drink tagged as "water-like" or "sugary"); "Check My Meal" runs a rule-based check across the four categories.
```

## Related Resources

- [Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md)
