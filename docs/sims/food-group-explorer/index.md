---
title: Food Group Explorer
description: Students explain which food group a given food belongs to and summarize what job that food group does in the body, moving beyond simple naming toward reasoning about purpose.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Food Group Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** food-group-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, summarize

Learning objective: Students explain which food group a given food belongs to and summarize what job that food group does in the body, moving beyond simple naming toward reasoning about purpose.

Canvas layout:
- Left area (450px): A large plate illustration divided into five colored sections, one per food group
- Right area (150px): A stack of food picture cards to click through, plus an infobox

Visual elements:
- Five plate sections labeled Fruits (red), Vegetables (green), Grains (tan), Protein Foods (purple), Dairy (light blue)
- 15 food picture cards cycling through (3 per group): apple, banana, strawberry / carrot, broccoli, spinach / bread, rice, oatmeal / beans, egg, chicken / milk, cheese, yogurt

Interactive controls:
- Button: "Show Next Food Card"
- Click-to-place: student clicks the plate section where they think the food belongs
- Button: "Reset"

Default parameters:
- First card: apple (a clear, familiar example to build confidence)

Data Visibility Requirements:
  Stage 1: Show the food card with no label
  Stage 2: After the student clicks a plate section, show whether it matches
  Stage 3: Reveal a one-sentence explanation of the food group's job ("Apples are a fruit. Fruits have vitamins that help your body fight getting sick.")

Behavior:
- Correct placement: plate section glows, gentle chime, explanation caption appears
- Incorrect placement: gentle prompt, "Look again — what job does this food group do?" and the correct section glows softly as a hint

Instructional Rationale: This is an Understand-level (explain/classify) objective, so the MicroSim reveals the food group's purpose after each answer rather than using continuous animation, letting students connect each food to a concrete reason it belongs in that group.

Implementation notes: Use p5.js. Large, simple, flat-style food illustrations. Teacher reads each food name and explanation aloud.
```

## Related Resources

- [Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md)
