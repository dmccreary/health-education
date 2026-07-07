---
title: I-Statement Builder
description: Students practice constructing I-statements by assembling a feeling, a situation, and a request from a scenario prompt using the "I feel ___ when ___, because ___. Could you ___?" frame.
image: /sims/i-statement-builder/i-statement-builder.png
og:image: /sims/i-statement-builder/i-statement-builder.png
twitter:image: /sims/i-statement-builder/i-statement-builder.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 3
---

# I-Statement Builder

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the I-Statement Builder MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**I-Statement Builder** is an interactive MicroSim for this health-education textbook.

Students practice constructing I-statements by assembling a feeling, a situation, and a request from a scenario prompt using the "I feel ___ when ___, because ___. Could you ___?" frame.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — use, construct, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students practice constructing I-statements by assembling a feeling, a situation, and a request from a scenario prompt using the "I feel ___ when ___, because ___. Could you ___?" frame.

This activity targets **Bloom's Apply (L3)** (use, construct, practice).

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
[Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md).

```text
Type: microsim
**sim-id:** i-statement-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, construct, practice

Learning objective: Students practice constructing I-statements by assembling a feeling, a situation, and a request from a scenario prompt using the "I feel ___ when ___, because ___. Could you ___?" frame.

Canvas layout: Top (100px) shows a short scenario prompt (e.g., "Your friend keeps interrupting you at lunch"). Middle (300px) shows four fill-in-the-blank dropdown menus matching the I-statement frame, each pre-populated with a few word/phrase choices, one clearly best. Bottom (100px) shows the assembled sentence building live as choices are made, plus a "Check My Statement" button.

Interactive controls: Four dropdown selectors; "Check My Statement," "Next Scenario," and "Reset" buttons.

Default parameters: Starts on scenario 1 of 5 prepared everyday scenarios (borrowing without asking, interrupting, excluding from a game, teasing about a mistake, not listening).

Data Visibility Requirements: As each dropdown is filled, the growing sentence appears in a speech bubble in real time so students see the full I-statement take shape. Clicking "Check My Statement" reveals whether the choice keeps the statement calm and focused on feelings rather than blame, with a one-sentence explanation.

Instructional Rationale: Apply-level objective requiring learners to construct a correctly formed sentence, so guided assembly with a visible live sentence supports practice better than passive multiple choice alone.

Implementation notes: Use p5.js. Keep every scenario a mild, everyday friend/family conflict — nothing involving unsafe situations, which belong in the Personal Safety chapters instead.
```

## References

- [Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
