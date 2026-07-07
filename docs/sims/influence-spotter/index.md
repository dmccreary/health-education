---
title: Positive or Negative Influence?
description: Students distinguish which people or situations positively or negatively influence a health practice or behavior, using short, everyday examples.
image: /sims/influence-spotter/influence-spotter.png
og:image: /sims/influence-spotter/influence-spotter.png
twitter:image: /sims/influence-spotter/influence-spotter.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grade 1
---

# Positive or Negative Influence?

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Positive or Negative Influence? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Positive or Negative Influence?** is an interactive MicroSim for this health-education textbook.

Students distinguish which people or situations positively or negatively influence a health practice or behavior, using short, everyday examples.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — distinguish, examine

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students distinguish which people or situations positively or negatively influence a health practice or behavior, using short, everyday examples.

This activity targets **Bloom's Analyze (L4)** (distinguish, examine).

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
[Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md).

```text
Type: microsim
**sim-id:** influence-spotter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, examine

Learning objective: Students distinguish which people or situations positively or negatively influence a health practice or behavior, using short, everyday examples.

Canvas layout:
- Top area (150px): A short scenario sentence plus a picture (e.g., "Your friend says, 'Let's ride bikes with our helmets on!'")
- Middle area (250px): Two large buttons: "Positive Influence" and "Negative Influence"
- Bottom strip (100px): Explanation caption and "Next Scenario" button

Visual elements:
- 8 scenarios cycling one at a time, mixing friends, family, media, and advertising examples

Interactive controls:
- Button: "Positive Influence"
- Button: "Negative Influence"
- Button: "Next Scenario"

Default parameters:
- First scenario: friend suggesting bike helmets (clearly positive, to build confidence)

Behavior:
- Correct answer: gentle chime, character nods, and a one-sentence explanation appears connecting the choice to health
- Incorrect answer: calm caption reframes the example, "Let's think again — does this help your body stay healthy and safe, or not?"
- After all scenarios, a wrap-up caption reminds students they get to choose which influences to follow

Instructional Rationale: Judging whether an influence is positive or negative requires comparing the example against a health standard, which is an Analyze-level task. Step-through scenarios with a revealed explanation (rather than animation) keep the focus on the reasoning, matching the Grade 1 benchmark of distinguishing influence direction.

Implementation notes: Use p5.js. Keep advertising examples generic (no real brand names or logos). Large text for read-aloud; teacher narrates each scenario.
```

## References

- [Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
