---
title: Nutrition Label Detective
description: Students locate specific nutrient information on a realistic nutrition label and use it to answer questions about a food product.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Nutrition Label Detective



<iframe src="main.html" width="100%" height="514px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** nutrition-label-detective<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, locate

Learning objective: Students locate specific nutrient information on a realistic nutrition label and use it to answer questions about a food product.

Canvas layout:
- Left side (300px): A realistic, clickable nutrition label graphic for a sample snack food
- Right side (200px): One question at a time (e.g., "How many grams of protein are in one serving?") with a text-input answer box and "Check Answer" button

Visual elements:
- Full nutrition label with clearly separated rows: serving size, calories, total carbohydrates, sugars, protein, total fat, saturated fat, sodium, Vitamin D, calcium, iron, potassium

Interactive controls:
- Click any row on the label to highlight it and show a one-sentence explanation of what that row means
- Input box: type a numeric answer to the current question
- Button: "Check Answer"
- Button: "Next Question" (cycles through 6 questions about the same label)

Default parameters:
- Sample label: a granola bar with realistic values (serving size 1 bar, 140 calories, 22g carbohydrates, 9g sugars, 3g protein, 5g fat, 95mg sodium)

Data Visibility Requirements:
  Stage 1: Show the full label with all values visible
  Stage 2: Highlight the row relevant to the current question when clicked
  Stage 3: Show whether the typed answer matches the highlighted value, with the correct value revealed either way

Behavior:
- Correct answer: green confirmation and brief encouragement
- Incorrect answer: label row highlights again with a hint to re-read the value
- After all 6 questions, a summary shows the score and reminds students that every packaged food has a label like this one

Instructional Rationale: Locating and using specific values from a real-looking label is an Apply-level skill, so the pattern uses guided practice with a real (if simplified) nutrition label rather than an abstract animation — students need to practice the actual skill of finding and using label data.

Implementation notes: Use p5.js. Render the label to resemble the real FDA/USDA nutrition facts format for authenticity. Store questions and answer keys as an array of objects.
```

## Related Resources

- [Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md)
