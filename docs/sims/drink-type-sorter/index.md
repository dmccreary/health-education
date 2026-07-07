---
title: Drink Type Sorter
description: Students recall different drink types and the benefits they provide by sorting drink pictures into "everyday drink" and "occasional treat" bins.
image: /sims/drink-type-sorter/drink-type-sorter.png
og:image: /sims/drink-type-sorter/drink-type-sorter.png
twitter:image: /sims/drink-type-sorter/drink-type-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Remember (L1)
grade_band: Grade 1
---

# Drink Type Sorter

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Drink Type Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Drink Type Sorter** is an interactive MicroSim for this health-education textbook.

Students recall different drink types and the benefits they provide by sorting drink pictures into "everyday drink" and "occasional treat" bins.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — recall, identify, name

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students recall different drink types and the benefits they provide by sorting drink pictures into "everyday drink" and "occasional treat" bins.

This activity targets **Bloom's Remember (L1)** (recall, identify, name).

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
**Remember**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** drink-type-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, name

Learning objective: Students recall different drink types and the benefits they provide by sorting drink pictures into "everyday drink" and "occasional treat" bins.

Canvas layout:
- Top area (150px): One drink picture card at a time (water, milk, 100% juice, soda, sports drink, flavored milk, water with fruit slices)
- Middle area (250px): Two bins: "Everyday Drink" (blue) and "Occasional Treat" (orange)
- Bottom strip (100px): Explanation caption and "Next Drink" button

Visual elements:
- 7 drink cards cycling one at a time
- Simple, friendly, flat-style illustrations of cups and bottles

Interactive controls:
- Click-to-place or drag-and-drop: place the drink card in the correct bin
- Button: "Next Drink"
- Button: "Reset"

Default parameters:
- First card: a glass of water (clearly an everyday drink, to build confidence)

Behavior:
- Correct placement: bin glows, gentle chime, one-sentence benefit appears ("Water keeps your body cool and helps you focus.")
- Incorrect placement: gentle prompt, "Look again — is this a drink to have every day, or just sometimes?"

Instructional Rationale: This is a Remember-level (recall/identify) objective, so a simple sort-and-reveal pattern is appropriate — the goal is recognizing each drink type and its basic benefit, not yet analyzing trade-offs.

Implementation notes: Use p5.js. Large, simple drink illustrations. Teacher reads each drink name and benefit aloud.
```

## References

- [Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
