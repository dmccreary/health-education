---
title: Healthy or Needs Help?
description: Students describe the roles of family members and peers in healthy relationships by reading short scenarios and identifying the healthy relationship signs present.
image: /sims/healthy-relationship-scenario-explorer/healthy-relationship-scenario-explorer.png
og:image: /sims/healthy-relationship-scenario-explorer/healthy-relationship-scenario-explorer.png
twitter:image: /sims/healthy-relationship-scenario-explorer/healthy-relationship-scenario-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 3
---

# Healthy or Needs Help?

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Healthy or Needs Help? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Healthy or Needs Help?** is an interactive MicroSim for this health-education textbook.

Students describe the roles of family members and peers in healthy relationships by reading short scenarios and identifying the healthy relationship signs present.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — describe, interpret, classify

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students describe the roles of family members and peers in healthy relationships by reading short scenarios and identifying the healthy relationship signs present.

This activity targets **Bloom's Understand (L2)** (describe, interpret, classify).

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
[Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md).

```text
Type: microsim
**sim-id:** healthy-relationship-scenario-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, interpret, classify

Learning objective: Students describe the roles of family members and peers in healthy relationships by reading short scenarios and identifying the healthy relationship signs present.

Canvas layout:
- Left side (400px): One scenario card at a time, shown as simple illustrated text (e.g., "Maya's brother helps her with homework and says sorry when he snaps at her.")
- Right side (200px): Four checkbox-style options representing healthy relationship signs (listening, honesty, apology and repair, support) plus a "Show Answer" button

Visual elements:
- Scenario illustration with two simple characters
- Checkboxes that light up green when correctly identified

Interactive controls:
- Click the checkboxes that apply to the current scenario
- Button: "Show Answer"
- Button: "Next Scenario"

Default parameters:
- Begins on scenario 1 of 5 with no checkboxes selected

Data Visibility Requirements:
  Stage 1: Show the scenario text/illustration and four unmarked checkboxes
  Stage 2: After the student selects checkboxes and clicks "Show Answer," reveal which signs truly applied with a one-sentence explanation for each
  Stage 3: "Next Scenario" loads a new short scenario, resetting the checkboxes

Behavior:
- Correct selections turn green with a brief explanation
- Missed or incorrect selections are gently highlighted with the correct reasoning
- After all five scenarios, a "Relationship Detective!" caption appears

Instructional Rationale: This is an Understand-level objective (describe, interpret), so the design uses short worked scenarios with concrete, visible reasoning rather than an animated simulation, helping students connect the abstract "signs of healthy relationships" list to real situations.

Implementation notes: Use p5.js. Keep scenarios warm, age-appropriate, and free of any physical danger content — this MicroSim addresses everyday friendship and family situations, not abuse or crisis situations. This MicroSim is the direct student-facing practice activity for this K-3 band.
```

## References

- [Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
