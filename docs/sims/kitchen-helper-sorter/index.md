---
title: Kitchen Helper Sorting Game
description: Students classify kitchen tasks as "safe for me to help with" or "grown-up-only job," and explain why each grown-up-only job needs an adult.
image: /sims/kitchen-helper-sorter/kitchen-helper-sorter.png
og:image: /sims/kitchen-helper-sorter/kitchen-helper-sorter.png
twitter:image: /sims/kitchen-helper-sorter/kitchen-helper-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 1
---

# Kitchen Helper Sorting Game

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Kitchen Helper Sorting Game MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Kitchen Helper Sorting Game** is an interactive MicroSim for this health-education textbook.

Students classify kitchen tasks as "safe for me to help with" or "grown-up-only job," and explain why each grown-up-only job needs an adult.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — classify, explain, distinguish

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify kitchen tasks as "safe for me to help with" or "grown-up-only job," and explain why each grown-up-only job needs an adult.

This activity targets **Bloom's Understand (L2)** (classify, explain, distinguish).

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
[Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** kitchen-helper-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, explain, distinguish

Learning objective: Students classify kitchen tasks as "safe for me to help with" or "grown-up-only job," and explain why each grown-up-only job needs an adult.

Canvas layout:
- Top area (150px): One kitchen task picture card at a time (washing vegetables, stirring a bowl, using the stove, cutting with a knife, setting the table, taking a hot pan out of the oven)
- Middle area (250px): Two bins: "I Can Help" (green) and "Grown-Up Job" (orange)
- Bottom strip (100px): Explanation caption and "Next Task" button

Visual elements:
- 8 kitchen task cards cycling one at a time, calm and non-graphic (no depictions of injury)

Interactive controls:
- Click-to-place or drag-and-drop: place the card in the correct bin
- Button: "Next Task"
- Button: "Reset"

Default parameters:
- First card: washing vegetables (clearly a task the student can help with, to build confidence)

Behavior:
- Correct placement: bin glows, gentle chime, one-sentence reason appears ("Hot stoves can burn skin, so this is always a grown-up's job.")
- Incorrect placement: gentle, non-scary prompt, "Look again — could this task get too hot or too sharp for kids?"

Instructional Rationale: This is an Understand-level (classify/explain) objective, so each answer reveals a plain, practical reason rather than a scary warning, framing food preparation safety as everyday kitchen rules rather than danger content.

Implementation notes: Use p5.js. Keep every task illustration calm, friendly, and non-graphic. Tone should stay plainly practical, matching the project's rule that food safety content should never feel frightening.
```

## References

- [Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
