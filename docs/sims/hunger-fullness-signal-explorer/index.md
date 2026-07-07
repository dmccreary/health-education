---
title: Reading Your Body's Signals
description: Students recall and identify body signals for hunger and fullness by matching feeling-cards to a labeled body figure.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Reading Your Body's Signals



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** hunger-fullness-signal-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, recognize

Learning objective: Students recall and identify body signals for hunger and fullness by matching feeling-cards to a labeled body figure.

Canvas layout:
- Left side (400px): A simple, friendly body figure with a highlighted stomach/belly zone
- Right side (200px): A stack of clickable feeling-cards (e.g., "rumbling tummy," "hard to focus," "comfortably full," "food tastes less exciting")

Visual elements:
- Body figure with a gentle glow around the belly area
- Feeling-cards in two color groups: hunger cards (light orange) and fullness cards (light green)
- A simple two-column sorting area labeled "Hungry" and "Full"

Interactive controls:
- Click and drag (or click to select, then click a column) each feeling-card into the "Hungry" or "Full" column
- Button: "Check My Answers"
- Button: "Reset"

Default parameters:
- All feeling-cards start in a shuffled pile above the two columns

Data Visibility Requirements:
  Stage 1: Show the shuffled pile of feeling-cards above two empty columns
  Stage 2: As each card is sorted, show it snap into the chosen column
  Stage 3: When "Check My Answers" is clicked, show a checkmark or gentle "try again" cue on each card, with the correct column highlighted for any that were misplaced

Behavior:
- Correctly sorted cards get a small checkmark and the body figure smiles
- Incorrectly sorted cards get a gentle nudge with a one-sentence explanation of which signal group they belong to
- A "You found them all!" caption appears once every card is correctly sorted

Instructional Rationale: This is a Remember-level objective (recall, identify), so the design uses a flashcard-style sorting activity rather than a complex simulation — students need to recognize and recall signals, which a simple sort-and-check pattern supports directly.

Implementation notes: Use p5.js. Keep the body figure simple and gender-neutral. Because this is a K-3 band, this MicroSim is the direct student-facing practice activity; the surrounding body text remains teacher-facing read-aloud material.
```

## Related Resources

- [Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md)
