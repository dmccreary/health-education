---
title: Vitamin and Mineral Matcher
description: Students recall and match common vitamins and minerals to the body function each one supports.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Vitamin and Mineral Matcher



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** vitamin-mineral-matcher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, match

Learning objective: Students recall and match common vitamins and minerals to the body function each one supports.

Canvas layout:
- Left column (250px): Six cards labeled Vitamin C, Vitamin D, Vitamin A, Calcium, Iron, Fiber
- Right column (250px): Six shuffled function cards ("Helps heal cuts and fight illness," "Builds strong bones," "Supports healthy eyes and skin," "Builds strong bones and teeth," "Helps blood carry oxygen," "Helps digestion")
- Bottom strip (100px): Feedback caption and "Check Matches" / "Reset" buttons

Visual elements:
- Simple flat icons next to each nutrient name (orange slice for Vitamin C, sun for Vitamin D, carrot for Vitamin A, milk glass for Calcium, drop for Iron, grain stalk for Fiber)

Interactive controls:
- Click a nutrient card, then click the function card you think matches it — a line connects the pair
- Button: "Check Matches" reveals which pairs are correct
- Button: "Reset" clears all connections and starts over

Default parameters:
- All six pairs unmatched at start; cards presented in shuffled, non-corresponding order

Behavior:
- Correct pair: green line and checkmark
- Incorrect pair: red line with a gentle prompt to try again
- After checking, a summary caption states how many were matched correctly out of six

Instructional Rationale: This is a Remember-level objective (recall and match facts), so a straightforward matching-pairs pattern is appropriate rather than a complex simulation — the goal is confident recall of nutrient-function pairs, not exploration of a dynamic system.

Implementation notes: Use p5.js. Keep function text short enough to read at a glance. Store nutrient-function pairs as an array of objects for easy reshuffling.
```

## Related Resources

- [Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md)
