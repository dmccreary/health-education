---
title: Drink Type Sorter
description: Students recall different drink types and the benefits they provide by sorting drink pictures into "everyday drink" and "occasional treat" bins.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Drink Type Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** drink-type-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, name

Learning objective: Students recall different drink types and the benefits they provide by sorting drink pictures into "everyday drink" and "occasional treat" bins.

Canvas layout:
- Top area (150px): One drink picture card at a time (water, milk, 100% juice, soda, sports drink, flavored milk, water with fruit slices)
- Middle area (250px): Two bins: "Everyday Drink" (blue) and "Occasional Treat" (orange)
- Bottom strip (100px): Explanation caption and "Next Drink" button

Visual elements:
- 7 drink cards cycling one at a time
- Simple, friendly, flat-style illustrations of cups and bottles

Interactive controls:
- Click-to-place or drag-and-drop: place the drink card in the correct bin
- Button: "Next Drink"
- Button: "Reset"

Default parameters:
- First card: a glass of water (clearly an everyday drink, to build confidence)

Behavior:
- Correct placement: bin glows, gentle chime, one-sentence benefit appears ("Water keeps your body cool and helps you focus.")
- Incorrect placement: gentle prompt, "Look again — is this a drink to have every day, or just sometimes?"

Instructional Rationale: This is a Remember-level (recall/identify) objective, so a simple sort-and-reveal pattern is appropriate — the goal is recognizing each drink type and its basic benefit, not yet analyzing trade-offs.

Implementation notes: Use p5.js. Large, simple drink illustrations. Teacher reads each drink name and benefit aloud.
```

## Related Resources

- [Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md)
