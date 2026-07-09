---
title: Meet the Three Nutrient Teammates
description: Students explain how carbohydrates, protein, and fats help the body grow by classifying example foods under the correct nutrient and reading a one-sentence explanation of its job.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Meet the Three Nutrient Teammates



<iframe src="main.html" width="100%" height="522px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** nutrient-teammates-matcher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, exemplify

Learning objective: Students explain how carbohydrates, protein, and fats help the body grow by classifying example foods under the correct nutrient and reading a one-sentence explanation of its job.

Canvas layout:
- Left side (400px): Three labeled bins — "Carbohydrates," "Protein," "Fats" — each with a small icon (lightning bolt for quick energy, muscle for repair, battery for long-lasting energy)
- Right side (200px): A row of clickable food icons (bread, rice, apple, beans, egg, fish, nuts, avocado, oil)

Visual elements:
- Three nutrient bins with distinct colors (gold for carbohydrates, red for protein, blue for fats)
- Food icons that can be clicked or dragged into a bin

Interactive controls:
- Click or drag a food icon into the bin where it belongs
- Button: "Check My Answers"
- Button: "Reset"

Default parameters:
- All nine food icons begin in a shuffled row above the three bins

Data Visibility Requirements:
  Stage 1: Show the shuffled food icons and three empty labeled bins
  Stage 2: As each food is sorted, show it snap into the chosen bin
  Stage 3: When "Check My Answers" is clicked, reveal a one-sentence explanation under each bin (e.g., "Carbohydrates give your body quick energy for running and playing.")

Behavior:
- Correct placements get a checkmark; incorrect ones get a gentle explanation of the correct bin
- Once all nine foods are sorted correctly, a "Nutrient Expert!" caption appears

Instructional Rationale: This is an Understand-level objective (explain, classify), so the design uses a classify-and-reveal pattern with concrete example foods and short text explanations, rather than animation, so students can see the specific reasoning behind each nutrient's job.

Implementation notes: Use p5.js. Keep icons simple, flat, and easy to tell apart. This MicroSim is the direct student practice activity for this K-3 chapter.
```

## Related Resources

- [Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md)
