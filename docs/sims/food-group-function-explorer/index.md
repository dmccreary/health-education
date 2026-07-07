---
title: What Each Food Group Does
description: Students explain what each food group does for the body by clicking on a food group icon and seeing its job and example foods.
image: /sims/food-group-function-explorer/food-group-function-explorer.png
og:image: /sims/food-group-function-explorer/food-group-function-explorer.png
twitter:image: /sims/food-group-function-explorer/food-group-function-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 2
---

# What Each Food Group Does

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the What Each Food Group Does MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**What Each Food Group Does** is an interactive MicroSim for this health-education textbook.

Students explain what each food group does for the body by clicking on a food group icon and seeing its job and example foods.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, describe, classify

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 2**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain what each food group does for the body by clicking on a food group icon and seeing its job and example foods.

This activity targets **Bloom's Understand (L2)** (explain, describe, classify).

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
[Chapter 2: Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md).

```text
Type: microsim
**sim-id:** food-group-function-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, classify

Learning objective: Students explain what each food group does for the body by clicking on a food group icon and seeing its job and example foods.

Canvas layout:
- Left area (450px): Five large tappable food-group icons arranged in a row or wheel (Grains, Vegetables, Fruits, Protein, Dairy)
- Right area (150px): Infobox panel showing the selected group's job and example foods

Visual elements:
- Flat, friendly icons for each food group (a wheat stalk, a carrot, an apple, a drumstick/bean pod, a milk carton)
- A simple cartoon child character in the center who "reacts" (stretches, flexes, smiles) based on which group is selected

Interactive controls:
- Click a food-group icon to select it
- Button: "Show Me a Meal" — displays a simple plate containing one example from each group

Default parameters:
- No group selected at start; instructions read "Tap a food group to see its job!"

Data Visibility Requirements:
  Stage 1: Show five icons with no explanation
  Stage 2: On click, show the group name and its one-sentence job ("Grains give you energy to run and play!")
  Stage 3: Show 2-3 example foods for that group
  Stage 4: The character animation matches the job (flexes for protein, stretches for grains)

Behavior:
- Clicking a new icon updates the infobox and character animation immediately
- "Show Me a Meal" button highlights one food from each group on a plate graphic to reinforce that a healthy meal uses several groups together

Instructional Rationale: This is an Understand-level (explain/describe) objective, so the design uses direct click-to-reveal information rather than animation for its own sake. Concrete text and example foods are visible at every stage so a teacher can read them aloud.

Implementation notes: Use p5.js. Keep icons large and simple for read-aloud pointing. Ensure text is large enough to read from the front of a classroom.
```

## References

- [Chapter 2: Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
