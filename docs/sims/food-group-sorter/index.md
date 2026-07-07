---
title: Food Group Sorting Game
description: Students identify and name which of the five food groups a given food belongs to (Fruits, Vegetables, Grains, Protein Foods, Dairy) by dragging a food picture into the correct labeled bin.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Food Group Sorting Game



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md).

```text
Type: microsim
**sim-id:** food-group-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, name, sort

Learning objective: Students identify and name which of the five food groups a given food belongs to (Fruits, Vegetables, Grains, Protein Foods, Dairy) by dragging a food picture into the correct labeled bin.

Canvas layout:
- Top area (100px): One food picture appears at a time, large and centered, with its name printed below it in big friendly text (read aloud by teacher)
- Middle/bottom area (350px): Five labeled bins side by side, one per food group, each with a small icon and color
- Bottom strip (50px): Score display ("You sorted 4 foods!") and a Reset button

Visual elements:
- 15 large, simple, colorful food images cycling one at a time (apple, banana, grapes, carrot, broccoli, corn, bread, rice, oatmeal, egg, beans, chicken drumstick, peanut butter jar, milk carton, cheese slice)
- Five bins labeled: "Fruits," "Vegetables," "Grains," "Protein Foods," "Dairy"
- Each bin has a distinct color: red-orange for Fruits, green for Vegetables, tan for Grains, brown for Protein Foods, light blue for Dairy

Interactive controls:
- Drag-and-drop: child drags the current food image onto the bin they think is correct
- Button: "Reset" to start over
- Button: "Next Food" appears after each correct placement

Default parameters:
- First food shown: apple
- Foods appear in a fixed friendly order (not randomized) so a teacher can predict what is coming next

Behavior:
- When a food is dropped on the correct bin, the bin glows green, a cheerful chime plays, and the score increases by one
- When a food is dropped on the wrong bin, the bin flashes gently and the food gently slides back to the top so the child can try again — no harsh error sound
- After all 15 foods are sorted, show a celebration message: "Great job! You sorted every food!"

Instructional Rationale: This is a Remember-level (identify/name) objective, so a simple drag-and-drop matching pattern is appropriate — it gives the child immediate, forgiving feedback without requiring reading. Continuous animation or complex scoring would distract from the single goal of recognizing which group a food belongs to.

Implementation notes: Use p5.js. Represent each food and bin as an object with x/y/width/height for hit-testing during drag events. Keep all text large (24px+) since this is a read-aloud/pre-reader audience.
```

## Related Resources

- [Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md)
