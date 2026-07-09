---
title: Explore a Nutrition Label
description: Students practice reading a real-style nutrition label by clicking each section to reveal what it means, then apply that skill by comparing two sample labels.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Explore a Nutrition Label



<iframe src="main.html" width="100%" height="424px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** nutrition-label-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, practice

Learning objective: Students practice reading a real-style nutrition label by clicking each section to reveal what it means, then apply that skill by comparing two sample labels.

Canvas layout:
- Left side (350px): A large, simplified Nutrition Facts label graphic with clickable rows (serving size, carbohydrates, protein, fats)
- Right side (250px): An infobox panel and a "Compare Labels" toggle showing a second sample label (e.g., plain crackers vs. a granola bar)

Visual elements:
- Clickable label rows highlighted with a soft outline
- Two sample food labels available for comparison mode

Interactive controls:
- Click any row on the label to reveal its meaning in the infobox
- Toggle: "Compare with a Second Label"
- Dropdown: choose which second food to compare (granola bar, crackers, yogurt)
- Button: "Reset"

Default parameters:
- Sample food: granola bar; no row selected at start

Data Visibility Requirements:
  Stage 1: Show the blank-highlighted label with all rows visible but unexplained
  Stage 2: Clicking a row shows its grams/amount and a one-sentence plain-language meaning (e.g., "Protein: 4 grams — this food has some protein to help build and repair muscles.")
  Stage 3: In compare mode, show both labels side by side with the same row highlighted on each, so students can directly compare grams of the same nutrient

Behavior:
- Clicking a row updates the infobox instantly
- Compare mode re-renders both labels whenever a new food is chosen from the dropdown
- A short prompt asks, "Which food has more protein?" with an optional reveal button

Instructional Rationale: This is an Apply-level objective (use, demonstrate, practice), so the design lets students actively interact with real label data and compare concrete values, rather than simply viewing a static picture of a label.

Implementation notes: Use p5.js. Use realistic but simplified label formatting so it transfers to real packages students see at home. This MicroSim is the direct student practice activity for this K-3 chapter.
```

## Related Resources

- [Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md)
