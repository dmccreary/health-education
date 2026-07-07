---
title: Bliss Point Snack Deconstructor
description: Students analyze the sugar, sodium, and fat content of common snack foods to recognize the engineered combination pattern often called the "bliss point."
image: /sims/bliss-point-snack-deconstructor/bliss-point-snack-deconstructor.png
og:image: /sims/bliss-point-snack-deconstructor/bliss-point-snack-deconstructor.png
twitter:image: /sims/bliss-point-snack-deconstructor/bliss-point-snack-deconstructor.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 6-8
---

# Bliss Point Snack Deconstructor

<iframe src="main.html" width="100%" height="489px" scrolling="no"></iframe>

[Run the Bliss Point Snack Deconstructor MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="489px" scrolling="no"></iframe>
```

## About this MicroSim

**Bliss Point Snack Deconstructor** is an interactive MicroSim for this health-education textbook.

Students analyze the sugar, sodium, and fat content of common snack foods to recognize the engineered combination pattern often called the "bliss point."

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — deconstruct, examine, organize, differentiate

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students analyze the sugar, sodium, and fat content of common snack foods to recognize the engineered combination pattern often called the "bliss point."

This activity targets **Bloom's Analyze (L4)** (deconstruct, examine, organize, differentiate).

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
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** bliss-point-snack-deconstructor<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: deconstruct, examine, organize, differentiate

Learning objective: Students analyze the sugar, sodium, and fat content of common snack foods to recognize the engineered combination pattern often called the "bliss point."

Layout: Selectable snack icons (flavored chips, sweetened granola bar, chocolate-covered pretzel, plain fruit, plain nuts) beside a three-bar mini-chart (sugar/sodium/fat) that updates on selection, plus a "Compare to Whole Food" toggle overlaying plain fruit or nuts as a reference line.

Behavior: Clicking a snack loads its real nutrition values into the chart; hovering a bar shows the exact gram/mg value and %DV; a highlighted "engineered combination zone" marker appears whenever sugar and sodium are both in the upper range, opening an infobox that explains the bliss point using that snack's numbers.

Instructional Rationale: Examining and differentiating product composition is Analyze-level, so a selectable, data-driven comparison is used rather than a single illustration, letting learners test multiple snacks against each other and against whole-food references.

Implementation notes: p5.js. Snack data stored as objects with sugar/sodium/fat fields; bars render proportionally; the "engineered combination zone" flag recomputes whenever both sugar and sodium exceed defined thresholds.
```

## References

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
