---
title: What Each Food Group Does
description: Students explain what each food group does for the body by clicking on a food group icon and seeing its job and example foods.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# What Each Food Group Does



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md).

```text
Type: microsim
**sim-id:** food-group-function-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, classify

Learning objective: Students explain what each food group does for the body by clicking on a food group icon and seeing its job and example foods.

Canvas layout:
- Left area (450px): Five large tappable food-group icons arranged in a row or wheel (Grains, Vegetables, Fruits, Protein, Dairy)
- Right area (150px): Infobox panel showing the selected group's job and example foods

Visual elements:
- Flat, friendly icons for each food group (a wheat stalk, a carrot, an apple, a drumstick/bean pod, a milk carton)
- A simple cartoon child character in the center who "reacts" (stretches, flexes, smiles) based on which group is selected

Interactive controls:
- Click a food-group icon to select it
- Button: "Show Me a Meal" — displays a simple plate containing one example from each group

Default parameters:
- No group selected at start; instructions read "Tap a food group to see its job!"

Data Visibility Requirements:
  Stage 1: Show five icons with no explanation
  Stage 2: On click, show the group name and its one-sentence job ("Grains give you energy to run and play!")
  Stage 3: Show 2-3 example foods for that group
  Stage 4: The character animation matches the job (flexes for protein, stretches for grains)

Behavior:
- Clicking a new icon updates the infobox and character animation immediately
- "Show Me a Meal" button highlights one food from each group on a plate graphic to reinforce that a healthy meal uses several groups together

Instructional Rationale: This is an Understand-level (explain/describe) objective, so the design uses direct click-to-reveal information rather than animation for its own sake. Concrete text and example foods are visible at every stage so a teacher can read them aloud.

Implementation notes: Use p5.js. Keep icons large and simple for read-aloud pointing. Ensure text is large enough to read from the front of a classroom.
```

## Related Resources

- [Chapter 2: Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md)
