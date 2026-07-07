---
title: Build a Brain-Healthy Week
description: Students apply the five brain-healthy habit categories to build a realistic weekly schedule and observe a simplified brain-health indicator respond to their choices.
image: /sims/build-a-brain-healthy-week/build-a-brain-healthy-week.png
og:image: /sims/build-a-brain-healthy-week/build-a-brain-healthy-week.png
twitter:image: /sims/build-a-brain-healthy-week/build-a-brain-healthy-week.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grades 6-8
---

# Build a Brain-Healthy Week

<iframe src="main.html" width="100%" height="509px" scrolling="no"></iframe>

[Run the Build a Brain-Healthy Week MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="509px" scrolling="no"></iframe>
```

## About this MicroSim

**Build a Brain-Healthy Week** is an interactive MicroSim for this health-education textbook.

Students apply the five brain-healthy habit categories to build a realistic weekly schedule and observe a simplified brain-health indicator respond to their choices.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — apply, use, demonstrate

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply the five brain-healthy habit categories to build a realistic weekly schedule and observe a simplified brain-health indicator respond to their choices.

This activity targets **Bloom's Apply (L3)** (apply, use, demonstrate).

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
[Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md).

```text
Type: microsim
**sim-id:** build-a-brain-healthy-week<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, use, demonstrate

Learning objective: Students apply the five brain-healthy habit categories to build a realistic weekly schedule and observe a simplified brain-health indicator respond to their choices.

Canvas layout: Left side (450px) shows a 7-day weekly planner grid. Right side (150px) shows five draggable habit tokens (Sleep, Nutrition, Physical Activity, Social Connection, Mental Engagement) and a simplified "Brain-Health Score" gauge (0-100).

Visual elements: Weekly grid with day columns, habit tokens in five distinct colors, a gauge that updates as tokens are placed.

Interactive controls: Drag habit tokens onto days of the week; a "Calculate My Week" button updates the gauge based on variety and consistency of habits placed; "Reset Week" button; a "See Tips" button reveals one specific, realistic way to add a missing habit category.

Default parameters: Empty planner grid at start; gauge begins at 0 and rises based on the number of distinct habit categories used across the week, rewarding variety and consistency rather than any single habit alone.

Instructional Rationale: Applying habit categories to a personal, realistic weekly plan is Apply-level, so a hands-on planner with immediate feedback is used rather than a passive list of tips.

Implementation notes: p5.js. Habit and day data stored as arrays/objects; drag-and-drop interaction; responsive canvas that reflows on window resize.
```

## References

- [Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
