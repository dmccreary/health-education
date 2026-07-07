---
title: Disease Risk Factor Sorter
description: Students differentiate and classify a mixed set of
image: /sims/disease-risk-factor-sorter/disease-risk-factor-sorter.png
og:image: /sims/disease-risk-factor-sorter/disease-risk-factor-sorter.png
twitter:image: /sims/disease-risk-factor-sorter/disease-risk-factor-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 9-12
---

# Disease Risk Factor Sorter

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Disease Risk Factor Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Disease Risk Factor Sorter** is an interactive MicroSim for this health-education textbook.

Students differentiate and classify a mixed set of

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — differentiate, organize, classify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students differentiate and classify a mixed set of

This activity targets **Bloom's Analyze (L4)** (differentiate, organize, classify).

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
**Analyze**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md).

```text
Type: microsim

**sim-id:** disease-risk-factor-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: differentiate, organize, classify

Learning objective: Students differentiate and classify a mixed set of
risk factors as primarily behavioral, primarily environmental, or
influencing both chronic and infectious disease risk.

Canvas layout:
- Left (60%): a shuffled bank of 12 risk-factor cards (e.g., "Diet high in
  processed food," "Overcrowded housing," "Smoking," "Poor ventilation in
  shared spaces," "Limited access to handwashing facilities," "Sedentary
  daily routine," "Chronic air pollution exposure," "Inconsistent
  vaccination access")
- Right (40%): three labeled drop zones: "Behavioral," "Environmental,"
  "Both/Interacts With Chronic and Infectious Risk"

Data Visibility Requirements:
  Stage 1: Show all 12 unsorted cards and the three empty drop zones
  Stage 2: Student drags each card into a zone
  Stage 3: On dropping a card, immediately reveal a one-sentence
  explanation of why it belongs in that zone (or a gentle correction if
  misplaced, still with the explanation)
  Stage 4: Show a final summary tally and one synthesis sentence noting
  that most environmental factors also shape how much control a person has
  over the behavioral factors

Interactive controls:
- Drag-and-drop cards into zones
- Button: "Check All"
- Button: "Reset"

Default parameters: 12-card bank, shuffled order each session

Instructional Rationale: Classifying diverse risk factors by category
while recognizing overlap is an Analyze-level task, so a sorting
interaction with immediate explanatory feedback is used rather than a
static labeled list.

Implementation notes: p5.js drag-and-drop; card and explanation data
stored as an array of {factor, correctZone, explanation} objects.
```

## References

- [Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
