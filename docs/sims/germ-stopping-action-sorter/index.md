---
title: Germ-Stopping Action Sorter
description: Students evaluate short scenario cards showing a student's action and judge whether the action helps stop germs from spreading or could let germs spread, then rank a short list of actions from most to least helpful.
image: /sims/germ-stopping-action-sorter/germ-stopping-action-sorter.png
og:image: /sims/germ-stopping-action-sorter/germ-stopping-action-sorter.png
twitter:image: /sims/germ-stopping-action-sorter/germ-stopping-action-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grade 1
---

# Germ-Stopping Action Sorter

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Germ-Stopping Action Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Germ-Stopping Action Sorter** is an interactive MicroSim for this health-education textbook.

Students evaluate short scenario cards showing a student's action and judge whether the action helps stop germs from spreading or could let germs spread, then rank a short list of actions from most to least helpful.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — judge, assess, prioritize

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students evaluate short scenario cards showing a student's action and judge whether the action helps stop germs from spreading or could let germs spread, then rank a short list of actions from most to least helpful.

This activity targets **Bloom's Evaluate (L5)** (judge, assess, prioritize).

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
[Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md).

```text
Type: microsim
**sim-id:** germ-stopping-action-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, prioritize

Learning objective: Students evaluate short scenario cards showing a student's action and judge whether the action helps stop germs from spreading or could let germs spread, then rank a short list of actions from most to least helpful.

Canvas layout:
- Left area (450px): One scenario card at a time (flat illustration plus one sentence, e.g., "Diego sneezes into his elbow.")
- Right area (150px): Two bins labeled "Stops Germs" and "Spreads Germs" and an infobox

Visual elements:
- 8 scenario cards cycling one at a time, mixing good illness prevention actions (handwashing, covering coughs, not sharing cups) and risky actions (sneezing into bare hands, sharing a water bottle, touching face after recess)
- Two labeled bins with friendly icons (a shield for "Stops Germs," a small germ character for "Spreads Germs")

Interactive controls:
- Click-to-select: student clicks the bin that matches the scenario
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario: "Maya washes her hands with soap before lunch" (clearly stops germs, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scenario card with no label
  Stage 2: After the student clicks a bin, show whether it matches
  Stage 3: Reveal a one-sentence explanation of why the action stops or spreads germs

Behavior:
- Correct match: bin glows, gentle chime, explanation caption appears
- Incorrect match: gentle prompt, "Think about where germs could travel next," correct bin glows softly as a hint

Instructional Rationale: This is an Evaluate-level (judge/assess) objective, so the MicroSim asks students to weigh each action's consequence for germ spread and justify the classification, rather than simply recalling a definition; the concrete explanation after each answer supports that judgment without relying on continuous animation.

Implementation notes: Use p5.js. Keep the "Spreads Germs" scenarios realistic and relatable (forgetting, not being careless on purpose) so no character feels blamed. Teacher reads each scenario and explanation aloud.
```

## References

- [Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
