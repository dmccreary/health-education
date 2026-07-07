---
title: Decision Consequence Explorer
description: Students examine multiple options for a health-related situation and compare the likely short-term and long-term consequences of each.
image: /sims/decision-consequence-explorer/decision-consequence-explorer.png
og:image: /sims/decision-consequence-explorer/decision-consequence-explorer.png
twitter:image: /sims/decision-consequence-explorer/decision-consequence-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grade 5
---

# Decision Consequence Explorer

<iframe src="main.html" width="100%" height="484px" scrolling="no"></iframe>

[Run the Decision Consequence Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="484px" scrolling="no"></iframe>
```

## About this MicroSim

**Decision Consequence Explorer** is an interactive MicroSim for this health-education textbook.

Students examine multiple options for a health-related situation and compare the likely short-term and long-term consequences of each.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — examine, compare, differentiate

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students examine multiple options for a health-related situation and compare the likely short-term and long-term consequences of each.

This activity targets **Bloom's Analyze (L4)** (examine, compare, differentiate).

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
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** decision-consequence-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, compare, differentiate

Learning objective: Students examine multiple options for a health-related situation and compare the likely short-term and long-term consequences of each.

Canvas layout: Left (450px) situation card with a branching tree showing 2-3 options; right (200px) consequence panel that updates based on the selected branch.

Visual elements: Situation card (e.g., "Your team invites you to walk instead of ride the bus home, but it means arriving 20 minutes later"); branch buttons for each option; consequence panel showing short-term and long-term effects.

Interactive controls: Click an option branch to reveal its consequence panel; "Compare Both" shows both consequence panels side by side; "New Situation" cycles through 6 situations (sleep, screen time, food choices, physical activity, honesty with a trusted adult, managing a disagreement).

Behavior: Selecting "walk with the team" reveals "Short-term: more physical activity and time with friends. Long-term: arriving later means less time for homework tonight."

Instructional Rationale: Analyze-level objective, so the tool has students break down and compare consequences across branches rather than being told a single correct answer.

Implementation notes: p5.js; situations stored as objects with an options array, each option containing short-term and long-term consequence text.
```

## References

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
