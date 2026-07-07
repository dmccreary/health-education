---
title: Helper or Not? Sorting Health Influences
description: Students distinguish a positive health influence from a negative health influence by sorting illustrated scenario cards into two labeled bins, directly supporting benchmark 0.7.2.1.
image: /sims/helper-or-not-sorting-health-influences/helper-or-not-sorting-health-influences.png
og:image: /sims/helper-or-not-sorting-health-influences/helper-or-not-sorting-health-influences.png
twitter:image: /sims/helper-or-not-sorting-health-influences/helper-or-not-sorting-health-influences.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Kindergarten
---

# Helper or Not? Sorting Health Influences

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Helper or Not? Sorting Health Influences MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Helper or Not? Sorting Health Influences** is an interactive MicroSim for this health-education textbook.

Students distinguish a positive health influence from a negative health influence by sorting illustrated scenario cards into two labeled bins, directly supporting benchmark 0.7.2.1.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — distinguish, sort, compare

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students distinguish a positive health influence from a negative health influence by sorting illustrated scenario cards into two labeled bins, directly supporting benchmark 0.7.2.1.

This activity targets **Bloom's Analyze (L4)** (distinguish, sort, compare).

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
[Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md).

```text
Type: microsim
**sim-id:** helper-or-not-sorting-health-influences<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, sort, compare

Learning objective: Students distinguish a positive health influence from a negative health influence by sorting illustrated scenario cards into two labeled bins, directly supporting benchmark 0.7.2.1.

Canvas layout: Top area (250px) shows one scenario card at a time (e.g., a grown-up handing over a banana snack, a friend reminding you to wear a bike helmet, food left out and looking spoiled, a friend saying "let's skip washing hands"). Bottom area (200px): two bins, "Helps My Health" (green, sun icon) and "Hurts My Health" (gray, cloud icon). Bottom strip (50px): score display and Reset button.

Visual elements: 6 scenario cards cycling one at a time, split 3 positive and 3 negative; bins glow when a card is dragged over them.

Interactive controls: Drag-and-drop the card into the matching bin; Reset button; "Next Scenario" button after each placement.

Default parameters: First scenario is a grown-up offering a piece of fruit (Helps My Health); scenarios appear in a fixed, teacher-predictable order.

Behavior: Correct placement glows green with a chime and rising score, plus a one-line infobox ("Yes! A trusted adult offering fruit helps your health."). Incorrect placement slides back with a friendly explanation. After all 6: "You know how to spot things that help your health and things that don't!"

Instructional Rationale: An Analyze-level objective because the child must examine a scenario and distinguish its category. Immediate, forgiving feedback with a spoken infobox keeps this appropriate for a pre-reader while requiring a genuine comparison judgment.

Implementation notes: p5.js. Each scenario is an object with an illustration reference, correct category, and explanation string. Captions are one short, read-aloud sentence. No scary or graphic imagery — keep all "negative" examples mild and age-appropriate (spoiled food, skipped handwashing, skipped helmet).
```

## References

- [Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
