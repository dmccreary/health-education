---
title: Choose the Right Drink
description: Students apply knowledge of beverages for physical activity by matching drink choices to activity scenarios (recess, long practice, after activity, everyday).
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Choose the Right Drink



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** activity-beverage-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, demonstrate, practice

Learning objective: Students apply knowledge of beverages for physical activity by matching drink choices to activity scenarios (recess, long practice, after activity, everyday).

Canvas layout:
- Left side (400px): Four scenario cards shown one at a time (recess/gym class, long hot-weather practice, after activity feeling hungry, just relaxing at home)
- Right side (200px): Row of drink icons (water bottle, milk carton, sports drink, soda, energy drink)

Visual elements:
- Scenario illustration changes with each card
- Drink icons remain constant across scenarios

Interactive controls:
- Click the drink icon that best matches the current scenario
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- Starts on the "recess or gym class" scenario

Data Visibility Requirements:
  Stage 1: Show the scenario illustration and all drink icon options
  Stage 2: After a choice is made, reveal whether it was the best choice and a one-sentence reason (e.g., "Water is the best choice for regular recess — your body just needs its fluids back.")
  Stage 3: Advancing to the next scenario resets the choice and shows a new situation

Behavior:
- Best-choice selections get a checkmark and a short reason
- Less ideal choices get a gentle explanation of why water (or milk, after activity) is usually better
- After all four scenarios are complete, a "Hydration Helper!" caption appears

Instructional Rationale: This is an Apply-level objective (apply, demonstrate), so the design uses a scenario-matching pattern where students actively apply the water-first principle to new situations, rather than just reading a rule.

Implementation notes: Use p5.js. Keep scenario art simple and recognizable. This MicroSim is the direct student practice activity for this K-3 chapter.
```

## Related Resources

- [Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md)
