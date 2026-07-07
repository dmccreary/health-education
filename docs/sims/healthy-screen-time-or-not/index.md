---
title: Healthy Screen Time or Not?
description: Students distinguish healthy, safe technology use from unsafe or unhealthy technology use by sorting illustrated scenario cards into two labeled bins, applying the Healthy Technology Use concept.
image: /sims/healthy-screen-time-or-not/healthy-screen-time-or-not.png
og:image: /sims/healthy-screen-time-or-not/healthy-screen-time-or-not.png
twitter:image: /sims/healthy-screen-time-or-not/healthy-screen-time-or-not.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Kindergarten
---

# Healthy Screen Time or Not?

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Healthy Screen Time or Not? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Healthy Screen Time or Not?** is an interactive MicroSim for this health-education textbook.

Students distinguish healthy, safe technology use from unsafe or unhealthy technology use by sorting illustrated scenario cards into two labeled bins, applying the Healthy Technology Use concept.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — distinguish, sort, compare

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students distinguish healthy, safe technology use from unsafe or unhealthy technology use by sorting illustrated scenario cards into two labeled bins, applying the Healthy Technology Use concept.

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
[Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md).

```text
Type: microsim
**sim-id:** healthy-screen-time-or-not<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, sort, compare

Learning objective: Students distinguish healthy, safe technology use from unsafe or unhealthy technology use by sorting illustrated scenario cards into two labeled bins, applying the Healthy Technology Use concept.

Canvas layout: Top area (250px) shows one scenario card at a time (e.g., watching an approved show with a grown-up nearby, versus using a device alone for a very long time). Bottom area (200px): two bins, "Healthy Screen Use" (green, sun icon) and "Ask a Trusted Adult" (orange, raised-hand icon). Bottom strip (50px): score display and Reset button.

Visual elements: 6 scenario cards cycling one at a time, split between healthy and "needs a trusted adult" situations; bins glow when a card is dragged over them.

Interactive controls: Drag-and-drop the card into the matching bin; Reset button; "Next Scenario" button after each placement.

Default parameters: First scenario is watching an approved show with a grown-up nearby (Healthy Screen Use); scenarios appear in a fixed, teacher-predictable order.

Behavior: Correct placement glows green with a chime and rising score. Incorrect placement slides back with a friendly reminder, e.g., "If something on a screen feels confusing, that's a great time to ask a trusted adult for help." After all 6: "You know how to use screens in healthy, safe ways!"

Instructional Rationale: An Analyze-level objective because the child must examine a scenario and distinguish its category. The forgiving retry with an explanatory infobox keeps this appropriate for a pre-reader while still requiring a real comparison judgment.

Implementation notes: p5.js. Each scenario is an object with an illustration reference, correct category, and explanation string. Captions one short, read-aloud sentence.
```

## References

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
