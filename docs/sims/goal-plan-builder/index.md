---
title: Goal Plan Builder
description: Students construct a complete, specific health goal plan by filling in five required elements (target, steps and timeframe, supports, barriers and responses, tracking method) for a health area of their choice.
image: /sims/goal-plan-builder/goal-plan-builder.png
og:image: /sims/goal-plan-builder/goal-plan-builder.png
twitter:image: /sims/goal-plan-builder/goal-plan-builder.png
social:
   cards: false
library: p5.js
bloom_level: Create (L6)
grade_band: Grades 6-8
---

# Goal Plan Builder

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Goal Plan Builder MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Goal Plan Builder** is an interactive MicroSim for this health-education textbook.

Students construct a complete, specific health goal plan by filling in five required elements (target, steps and timeframe, supports, barriers and responses, tracking method) for a health area of their choice.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Create (L6) — construct, design, formulate

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students construct a complete, specific health goal plan by filling in five required elements (target, steps and timeframe, supports, barriers and responses, tracking method) for a health area of their choice.

This activity targets **Bloom's Create (L6)** (construct, design, formulate).

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
**Create**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md).

```text
Type: microsim
**sim-id:** goal-plan-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: construct, design, formulate

Learning objective: Students construct a complete, specific health goal plan by filling in five required elements (target, steps and timeframe, supports, barriers and responses, tracking method) for a health area of their choice.

Canvas layout: Single-column form-style layout with five labeled sections, one per goal plan element, each with a text input area.

Visual elements: Five input sections in sequence (Target, Steps & Timeframe, Supports I'll Use, Barriers & My Plan For Them, How I'll Track Progress); a live-updating "My Goal Plan" summary card that assembles all five inputs into one readable plan as the learner types; example placeholder text in each field showing what a strong entry looks like.

Interactive controls: Text input in each of the five fields; "Show Example" button toggles a fully worked example plan (the sleep-goal example from this section) for reference; "Save My Plan" exports the completed plan as printable/downloadable text; "Clear" button resets all fields.

Default parameters: Fields start empty with example placeholder text visible in light gray; example plan hidden until "Show Example" is clicked.

Instructional Rationale: A Create-level objective requires learners to construct an original product from component parts; a guided builder with all five required elements visible at once, plus an optional worked example, scaffolds the construction without dictating the learner's actual goal content.

Implementation notes: p5.js or HTML form elements rendered in a p5.js canvas wrapper. No data is transmitted; plan is stored/exported locally only. Responsive layout that remains single-column on narrow screens.
```

## References

- [Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
