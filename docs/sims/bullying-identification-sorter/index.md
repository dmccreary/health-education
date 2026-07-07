---
title: What Counts as Bullying?
description: Students describe how bullying affects individuals and distinguish bullying situations from one-time disagreements by sorting short scenario cards into two categories.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# What Counts as Bullying?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md).

```text
Type: microsim
**sim-id:** bullying-identification-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, distinguish, classify

Learning objective: Students describe how bullying affects individuals and distinguish bullying situations from one-time disagreements by sorting short scenario cards into two categories.

Canvas layout:
- Left side (400px): Two labeled columns — "Bullying" and "One-Time Disagreement"
- Right side (200px): A stack of short scenario cards read aloud by the teacher (e.g., "A classmate calls someone a mean name every day at lunch" vs. "Two friends argue once about which game to play")

Visual elements:
- Two calm, non-graphic columns with simple icons
- Scenario cards presented as plain text, no depictions of physical harm

Interactive controls:
- Click each scenario card and place it in the correct column
- Button: "Check My Answers"
- Button: "Reset"

Default parameters:
- Six scenario cards begin shuffled above the two columns

Data Visibility Requirements:
  Stage 1: Show the shuffled scenario cards above the two empty columns
  Stage 2: As each card is placed, show it snap into the chosen column
  Stage 3: When "Check My Answers" is clicked, reveal a calm, factual one-sentence explanation for each card, noting whether it was repeated, intentional, and involved a power difference

Behavior:
- Correct placements get a checkmark
- Incorrect placements get a brief, factual explanation of the three bullying features
- A closing message reminds students: "If you see or experience bullying, tell a trusted adult."

Instructional Rationale: This is an Understand-level objective (describe, distinguish), so the design uses a calm sorting-and-explanation pattern with plain, factual language rather than any dramatized animation, keeping the tone serious and supportive rather than sensational.

Implementation notes: Use p5.js. Keep all scenario text mild, non-graphic, and free of any names resembling real students. Always end the activity with a visible reminder to talk to a trusted adult. This MicroSim is the direct student-facing practice activity for this K-3 band.
```

## Related Resources

- [Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md)
