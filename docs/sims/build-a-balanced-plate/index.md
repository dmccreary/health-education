---
title: Build a Balanced Plate
description: Students design a balanced meal by selecting and placing foods from different food groups onto a plate, then evaluate whether their plate meets a balanced-meal target.
status: scaffold
library: p5.js
bloom_level: Create (L6)
---

# Build a Balanced Plate



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** build-a-balanced-plate<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: design, construct, plan

Learning objective: Students design a balanced meal by selecting and placing foods from different food groups onto a plate, then evaluate whether their plate meets a balanced-meal target.

Canvas layout:
- Left side (300px): An empty circular plate outline divided into guide sections (vegetables/fruit, protein, grains) plus a small circle for dairy and a cup icon for water
- Right side (200px): A scrollable tray of 20+ food icons across all food groups, plus a "Check My Plate" button

Visual elements:
- Food icons include: broccoli, carrots, apple, banana, grilled chicken, beans, egg, salmon, brown rice, whole-wheat bread, pasta, milk, yogurt, cheese, nuts, avocado, olive oil, water cup, soda can, candy bar

Interactive controls:
- Drag or click food icons onto the plate's sections
- Button: "Check My Plate" — evaluates whether the plate includes a source from each major group in reasonable proportion
- Button: "Clear Plate" to start over

Default parameters:
- Empty plate at start; no foods pre-placed

Behavior:
- After "Check My Plate," an infobox explains what the plate does well ("Great protein choice!") and what might be missing ("Try adding a fruit or vegetable.")
- If a student places soda or candy as a main component, a gentle note explains that these can be occasional treats but are not part of the balanced-plate foundation
- Students can keep adjusting and re-checking as many times as they like

Instructional Rationale: Planning a balanced meal is Grade 4's first genuine Create-level benchmark, so the pattern uses an open-ended plate-building tool rather than a fixed right-answer quiz — students construct their own solution and receive formative feedback, matching the Create-level demand of designing an original plan.

Implementation notes: Use p5.js. Keep the plate model flexible enough to accept multiple valid combinations rather than one "correct" plate. Store food-group tags on each icon to drive the evaluation logic.
```

## Related Resources

- [Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md)
