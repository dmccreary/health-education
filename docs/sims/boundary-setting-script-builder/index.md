---
title: Boundary-Setting Script Builder
description: Students apply the three-part boundary-setting structure (name the limit, state it directly, restate if needed) by building a short response script for realistic scenarios.
image: /sims/boundary-setting-script-builder/boundary-setting-script-builder.png
og:image: /sims/boundary-setting-script-builder/boundary-setting-script-builder.png
twitter:image: /sims/boundary-setting-script-builder/boundary-setting-script-builder.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grades 6-8
---

# Boundary-Setting Script Builder

<iframe src="main.html" width="100%" height="516px" scrolling="no"></iframe>

[Run the Boundary-Setting Script Builder MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="516px" scrolling="no"></iframe>
```

## About this MicroSim

**Boundary-Setting Script Builder** is an interactive MicroSim for this health-education textbook.

Students apply the three-part boundary-setting structure (name the limit, state it directly, restate if needed) by building a short response script for realistic scenarios.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, practice, use

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply the three-part boundary-setting structure (name the limit, state it directly, restate if needed) by building a short response script for realistic scenarios.

This activity targets **Bloom's Apply (L3)** (demonstrate, practice, use).

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
**Apply**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md).

```text
Type: microsim
**sim-id:** boundary-setting-script-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students apply the three-part boundary-setting structure (name the limit, state it directly, restate if needed) by building a short response script for realistic scenarios.

Layout: A scenario prompt (e.g., "A friend keeps asking to see texts from another friend") above three slots — "Name the limit," "State it directly," "If needed, restate" — each with selectable sentence-starters plus a free-text field.

Interactive controls: Fill each slot; "Preview My Script" assembles the response as dialogue; "See a Model Script" shows an example; "Next Scenario" cycles through 5 scenarios across family, friend, and romantic contexts.

Instructional Rationale: Demonstrating a communication skill in realistic scenarios is Apply-level, so a scaffolded script-builder with a model comparison is used rather than passive reading, giving rehearsal practice before a real situation.

Implementation notes: p5.js. Scenario/sentence-starter data as arrays; assembled script rendered as plain text; keyword check (hedging words like "maybe") drives feedback.
```

## References

- [Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
