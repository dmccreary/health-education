---
title: Is This a Health Decision?
description: Students recognize when a health-related decision is needed by classifying everyday moments as "health decision" or "not a health decision," supporting benchmark 0.7.5.1.
image: /sims/is-this-a-health-decision/is-this-a-health-decision.png
og:image: /sims/is-this-a-health-decision/is-this-a-health-decision.png
twitter:image: /sims/is-this-a-health-decision/is-this-a-health-decision.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Kindergarten
---

# Is This a Health Decision?

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Is This a Health Decision? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Is This a Health Decision?** is an interactive MicroSim for this health-education textbook.

Students recognize when a health-related decision is needed by classifying everyday moments as "health decision" or "not a health decision," supporting benchmark 0.7.5.1.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, classify

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students recognize when a health-related decision is needed by classifying everyday moments as "health decision" or "not a health decision," supporting benchmark 0.7.5.1.

This activity targets **Bloom's Understand (L2)** (explain, classify).

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
[Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md).

```text
Type: infographic
**sim-id:** is-this-a-health-decision<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify

Learning objective: Students recognize when a health-related decision is needed by classifying everyday moments as "health decision" or "not a health decision," supporting benchmark 0.7.5.1.

Canvas layout: Full canvas (500px) shows one illustrated everyday moment at a time (choosing a snack, choosing a shirt color, deciding to wear a helmet, choosing a book, telling a trusted adult about a feeling). Bottom strip (80px): two large buttons, "Health Decision" and "Not a Health Decision," plus a Reset button.

Visual elements: 5 moment cards cycling one at a time; selected button glows and reveals an infobox explaining why.

Interactive controls: Click the button matching the child's guess; "Next Moment" cycles the cards; Reset restarts.

Default parameters: Cards appear in a fixed teacher-predictable order, starting with "choosing a snack."

Behavior: Correct answer glows green with an infobox, e.g., "Yes! What you eat is a health decision because it affects your body." Incorrect answer gently shakes with a kind explanation. After all 5: "You know how to notice when it's time to make a health decision!"

Instructional Rationale: An Understand-level (explain/classify) objective, so the MicroSim uses a step-through pattern with one concrete moment shown at a time rather than continuous animation, letting a teacher pause and discuss each example aloud.

Implementation notes: p5.js. Each moment is an object with an illustration reference, correct classification, and explanation string. Text large (24px+) for read-aloud use.
```

## References

- [Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
