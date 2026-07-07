---
title: Healthy Versus Unhealthy Pattern Sorter
description: Students evaluate short relationship scenarios (family, friend, or romantic) to judge whether each reflects a healthy characteristic, an unhealthy pattern, or a single non-pattern moment.
image: /sims/healthy-unhealthy-pattern-sorter/healthy-unhealthy-pattern-sorter.png
og:image: /sims/healthy-unhealthy-pattern-sorter/healthy-unhealthy-pattern-sorter.png
twitter:image: /sims/healthy-unhealthy-pattern-sorter/healthy-unhealthy-pattern-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grades 6-8
---

# Healthy Versus Unhealthy Pattern Sorter

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Healthy Versus Unhealthy Pattern Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Healthy Versus Unhealthy Pattern Sorter** is an interactive MicroSim for this health-education textbook.

Students evaluate short relationship scenarios (family, friend, or romantic) to judge whether each reflects a healthy characteristic, an unhealthy pattern, or a single non-pattern moment.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — judge, assess, differentiate, justify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students evaluate short relationship scenarios (family, friend, or romantic) to judge whether each reflects a healthy characteristic, an unhealthy pattern, or a single non-pattern moment.

This activity targets **Bloom's Evaluate (L5)** (judge, assess, differentiate, justify).

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
**Evaluate**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md).

```text
Type: microsim
**sim-id:** healthy-unhealthy-pattern-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, differentiate, justify

Learning objective: Students evaluate short relationship scenarios (family, friend, or romantic) to judge whether each reflects a healthy characteristic, an unhealthy pattern, or a single non-pattern moment.

Layout: One scenario at a time, with three response buttons ("Healthy Pattern," "Unhealthy Pattern," "One-Time Moment, Not a Pattern"), a feedback panel, and a "Next Scenario" button.

Visual elements: 10 short scenarios spanning family, friend, and romantic contexts (e.g., a friend who checks a classmate's phone daily without asking; a sibling who snapped once then apologized).

Behavior: Feedback explains which characteristic or pattern is present and why, using this chapter's healthy/unhealthy language.

Instructional Rationale: Judging scenarios against defined criteria is Evaluate-level, so classification-with-justification is used rather than animation, requiring application of the framework rather than recall.

Implementation notes: p5.js. Scenarios stored as objects with text, correct category, and explanation string.
```

## References

- [Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
