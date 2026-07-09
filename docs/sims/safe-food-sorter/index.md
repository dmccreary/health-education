---
title: Safe to Eat or Not?
description: Students distinguish safe food from food that is no longer safe to eat by examining simple picture clues (color, spots, freshness) and sorting each picture into a "Safe to Eat" or "Ask a Grown-Up First" bin.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Safe to Eat or Not?



<iframe src="main.html" width="100%" height="487px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md).

```text
Type: microsim
**sim-id:** safe-food-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, examine

Learning objective: Students distinguish safe food from food that is no longer safe to eat by examining simple picture clues (color, spots, freshness) and sorting each picture into a "Safe to Eat" or "Ask a Grown-Up First" bin.

Canvas layout:
- Top area (100px): One food picture shown at a time, large and centered
- Middle area (300px): Two large bins side by side: "Safe to Eat" (green, with a smiling apple icon) and "Ask a Grown-Up First" (orange, with a question-mark icon)
- Bottom strip (100px): Feedback caption area and "Next Picture" button

Visual elements:
- 10 simple food picture pairs: a fresh apple vs. a bruised/spotted apple, fresh bread vs. moldy bread, cold milk in a carton vs. a carton left open on a warm counter, a sealed yogurt vs. an open yogurt with a strange color, fresh strawberries vs. mushy discolored strawberries
- Clear visual clues on the "unsafe" version: green/blue fuzzy spots, dull discoloration, drawn-in "smell lines"

Interactive controls:
- Drag-and-drop or click-to-select: child places the food picture into the correct bin
- Button: "Next Picture"
- Button: "Reset"

Default parameters:
- First picture: the fresh apple (clearly safe, to build confidence before showing trickier examples)

Behavior:
- Correct placement: bin glows, gentle chime, and a one-sentence explanation appears (e.g., "Right! Fuzzy spots mean this bread is not safe anymore.")
- Incorrect placement: no harsh feedback — the picture returns to the top and a gentle hint appears (e.g., "Look closely — does it have spots or a strange color?")
- Tone throughout stays calm and matter-of-fact, never scary, consistent with plainly sincere safety-content voice

Instructional Rationale: Distinguishing safe from unsafe food requires comparing visual clues side by side, which is an Analyze-level task even though the response format (sort into two bins) stays simple enough for a pre-reader. The paired safe/unsafe images make the distinguishing clue (spot, smell line, color) obvious enough for a Kindergartner to examine with teacher guidance, while still requiring genuine comparison rather than simple recall.

Implementation notes: Use p5.js. Keep illustrations friendly and non-frightening — spots and discoloration should be clearly stylized, not realistic or gross. Maintain a plainly sincere tone in all captions per the project's safety-content voice rule (no puns).
```

## Related Resources

- [Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md)
