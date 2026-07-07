---
title: What Counts as Bullying?
description: Students describe how bullying affects individuals and distinguish bullying situations from one-time disagreements by sorting short scenario cards into two categories.
image: /sims/bullying-identification-sorter/bullying-identification-sorter.png
og:image: /sims/bullying-identification-sorter/bullying-identification-sorter.png
twitter:image: /sims/bullying-identification-sorter/bullying-identification-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 3
---

# What Counts as Bullying?

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the What Counts as Bullying? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**What Counts as Bullying?** is an interactive MicroSim for this health-education textbook.

Students describe how bullying affects individuals and distinguish bullying situations from one-time disagreements by sorting short scenario cards into two categories.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — describe, distinguish, classify

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students describe how bullying affects individuals and distinguish bullying situations from one-time disagreements by sorting short scenario cards into two categories.

This activity targets **Bloom's Understand (L2)** (describe, distinguish, classify).

### Suggested Use (about 10 minutes)

1. **Warm up (2 min).** Ask students what they already know about the topic
   and let one volunteer describe what they see on the screen.
2. **Model it (3 min).** Demonstrate the interaction once, thinking aloud so
   students hear the reasoning behind each choice.
3. **Guided practice (3 min).** Invite students to try the interaction and to
   predict what will happen before they act.
4. **Discuss (2 min).** Ask *why* the result came out the way it did, connecting
   the on-screen result back to the learning objective above.

### Check for Understanding

Have each student (or pair) explain their result in one sentence, using the
vocabulary from this chapter. Look for reasoning that matches the
**Understand**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
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

## References

- [Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
