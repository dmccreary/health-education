---
title: Nutrition Plan Builder
description: Students design a one-day nutrition plan by assembling
status: scaffold
library: p5.js
bloom_level: Create (L6)
---

# Nutrition Plan Builder



<iframe src="main.html" width="100%" height="634px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md).

```text
Type: microsim

**sim-id:** nutrition-plan-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Create (L6)
Bloom Verb: design, construct

Learning objective: Students design a one-day nutrition plan by assembling
meals and snacks from a food bank into slots, then receive feedback on
how well the resulting plan matches a target calorie range and
macronutrient balance carried over from their needs assessment.

Canvas layout:
- Top: five plan slots (Breakfast, Lunch, Dinner, Snack 1, Snack 2)
- Bottom: scrollable food card bank organized by category (grains,
  protein, dairy/alternatives, fruits/vegetables, combination dishes)
  including foods from multiple cultural cuisines
- Side panel: running totals (calories, carbohydrate/protein/fat grams,
  key micronutrients) compared against target range

Interactive controls:
- Drag-and-drop: food cards from bank into plan slots
- Button: "Evaluate My Plan"
- Button: "Load My Needs Assessment" (pulls target range from the
  previous MicroSim if available, otherwise uses a default target)
- Button: "Clear Plan"
- Filter buttons: filter food bank by category or by cultural cuisine tag

Default parameters: Empty plan slots; default target 2,200-2,400 kcal

Behavior:
- As cards are dropped into slots, side panel totals update live
- "Evaluate My Plan" produces a written assessment: whether calorie total
  is within range, whether macronutrient balance is reasonable, and
  which micronutrient gaps remain
- Encourage iteration: students can swap cards and re-evaluate as many
  times as they want
- Include at least 24 food cards spanning several cultural traditions so
  no single plan design uses only one culture's foods

Instructional Rationale: A Create-level objective requires a builder
where students assemble original combinations and get feedback on the
result, rather than a rigid template. Drag-and-drop assembly mirrors the
actual cognitive task of design: choosing components under constraints
and evaluating the outcome, then revising.

Implementation notes: Use p5.js with simple drag detection on card
objects and slot bounding boxes; store food nutrient data in a JSON
array; keep the interface usable on both mouse and touch.
```

## Related Resources

- [Chapter 1: Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md)
