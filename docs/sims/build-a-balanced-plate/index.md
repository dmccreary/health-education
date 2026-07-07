---
title: Build a Balanced Plate
description: Students design a balanced meal by selecting and placing foods from different food groups onto a plate, then evaluate whether their plate meets a balanced-meal target.
image: /sims/build-a-balanced-plate/build-a-balanced-plate.png
og:image: /sims/build-a-balanced-plate/build-a-balanced-plate.png
twitter:image: /sims/build-a-balanced-plate/build-a-balanced-plate.png
social:
   cards: false
library: p5.js
bloom_level: Create (L6)
grade_band: Grade 4
---

# Build a Balanced Plate

<iframe src="main.html" width="100%" height="524px" scrolling="no"></iframe>

[Run the Build a Balanced Plate MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="524px" scrolling="no"></iframe>
```

## About this MicroSim

**Build a Balanced Plate** is an interactive MicroSim for this health-education textbook.

Students design a balanced meal by selecting and placing foods from different food groups onto a plate, then evaluate whether their plate meets a balanced-meal target.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Create (L6) — design, construct, plan

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 4**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students design a balanced meal by selecting and placing foods from different food groups onto a plate, then evaluate whether their plate meets a balanced-meal target.

This activity targets **Bloom's Create (L6)** (design, construct, plan).

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
**Create**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** build-a-balanced-plate<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: design, construct, plan

Learning objective: Students design a balanced meal by selecting and placing foods from different food groups onto a plate, then evaluate whether their plate meets a balanced-meal target.

Canvas layout:
- Left side (300px): An empty circular plate outline divided into guide sections (vegetables/fruit, protein, grains) plus a small circle for dairy and a cup icon for water
- Right side (200px): A scrollable tray of 20+ food icons across all food groups, plus a "Check My Plate" button

Visual elements:
- Food icons include: broccoli, carrots, apple, banana, grilled chicken, beans, egg, salmon, brown rice, whole-wheat bread, pasta, milk, yogurt, cheese, nuts, avocado, olive oil, water cup, soda can, candy bar

Interactive controls:
- Drag or click food icons onto the plate's sections
- Button: "Check My Plate" — evaluates whether the plate includes a source from each major group in reasonable proportion
- Button: "Clear Plate" to start over

Default parameters:
- Empty plate at start; no foods pre-placed

Behavior:
- After "Check My Plate," an infobox explains what the plate does well ("Great protein choice!") and what might be missing ("Try adding a fruit or vegetable.")
- If a student places soda or candy as a main component, a gentle note explains that these can be occasional treats but are not part of the balanced-plate foundation
- Students can keep adjusting and re-checking as many times as they like

Instructional Rationale: Planning a balanced meal is Grade 4's first genuine Create-level benchmark, so the pattern uses an open-ended plate-building tool rather than a fixed right-answer quiz — students construct their own solution and receive formative feedback, matching the Create-level demand of designing an original plan.

Implementation notes: Use p5.js. Keep the plate model flexible enough to accept multiple valid combinations rather than one "correct" plate. Store food-group tags on each icon to drive the evaluation logic.
```

## References

- [Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
