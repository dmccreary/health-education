---
title: Equality vs. Equity Fence Explorer
description: Students explain the difference between equality and equity by adjusting boxes given to three students of different heights standing behind a fence and observing who can see over it.
image: /sims/equality-vs-equity-fence-explorer/equality-vs-equity-fence-explorer.png
og:image: /sims/equality-vs-equity-fence-explorer/equality-vs-equity-fence-explorer.png
twitter:image: /sims/equality-vs-equity-fence-explorer/equality-vs-equity-fence-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 5
---

# Equality vs. Equity Fence Explorer

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Equality vs. Equity Fence Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Equality vs. Equity Fence Explorer** is an interactive MicroSim for this health-education textbook.

Students explain the difference between equality and equity by adjusting boxes given to three students of different heights standing behind a fence and observing who can see over it.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, compare, contrast

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain the difference between equality and equity by adjusting boxes given to three students of different heights standing behind a fence and observing who can see over it.

This activity targets **Bloom's Understand (L2)** (explain, compare, contrast).

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
[Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md).

```text
Type: microsim
**sim-id:** equality-vs-equity-fence-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, compare, contrast

Learning objective: Students explain the difference between equality and equity by adjusting boxes given to three students of different heights standing behind a fence and observing who can see over it.

Canvas layout:
- Left side (450px): Drawing area showing a fence with three student characters of different heights (short, medium, tall) standing behind it
- Right side (200px): Mode toggle and box-count display

Visual elements:
- A solid fence drawn across the middle of the canvas at a fixed height
- Three simple character icons of different heights standing behind the fence
- Stackable box icons that can be added under each character
- A "sight line" indicator (small eye icon) showing whether each character can see over the fence

Interactive controls:
- Toggle switch: "Equality Mode" vs "Equity Mode"
- In Equality Mode: one button "Give Everyone 1 Box" — all three characters receive the same number of boxes
- In Equity Mode: three separate plus/minus steppers, one per character, letting the student assign a different number of boxes to each person
- Display: for each character, shows whether they can now see over the fence (yes/no)

Default parameters:
- Starts in Equality Mode with 0 boxes for all three characters
- Fence height fixed; short student needs 3 boxes, medium student needs 2 boxes, tall student needs 0 boxes to see over

Behavior:
- In Equality Mode, giving everyone the same number of boxes shows that the short student still cannot see even when the tall student already can
- In Equity Mode, the student can assign different amounts so that all three characters end up able to see over the fence with the fewest total boxes
- A text panel below updates with "Equal boxes, but not everyone can see" vs "Different boxes, but now everyone can see"

Instructional Rationale: This is an Understand-level objective, so the pattern uses a concrete, step-through manipulation with visible outcomes for each character rather than a continuous animation, letting students directly compare the two approaches side by side.

Implementation notes: Use p5.js. Store each character's height-to-box-requirement as a simple lookup value; recompute the sight-line indicator whenever box counts change; keep visuals simple and flat with no distracting motion.
```

## References

- [Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
