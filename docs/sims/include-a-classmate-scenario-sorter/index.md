---
title: Include-a-Classmate Scenario Sorter
description: Students apply strategies for including and supporting others by choosing the most inclusive response to short school scenarios.
image: /sims/include-a-classmate-scenario-sorter/include-a-classmate-scenario-sorter.png
og:image: /sims/include-a-classmate-scenario-sorter/include-a-classmate-scenario-sorter.png
twitter:image: /sims/include-a-classmate-scenario-sorter/include-a-classmate-scenario-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 5
---

# Include-a-Classmate Scenario Sorter

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Include-a-Classmate Scenario Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Include-a-Classmate Scenario Sorter** is an interactive MicroSim for this health-education textbook.

Students apply strategies for including and supporting others by choosing the most inclusive response to short school scenarios.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, use, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply strategies for including and supporting others by choosing the most inclusive response to short school scenarios.

This activity targets **Bloom's Apply (L3)** (demonstrate, use, practice).

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
[Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md).

```text
Type: microsim
**sim-id:** include-a-classmate-scenario-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply strategies for including and supporting others by choosing the most inclusive response to short school scenarios.

Canvas layout:
- Left side (450px): Scenario card describing a short classroom or playground situation
- Right side (200px): Three response option buttons and a feedback panel

Visual elements:
- Scenario card with simple line-art icon (a lunch table, a group project, a playground game)
- Three response cards worded as things a student could say or do
- Feedback panel showing a short explanation after a choice is made

Interactive controls:
- Click one of three response cards to answer
- Button: "Why This Helps" — reveals an explanation connecting the choice to inviting, making room, speaking up, checking in, or sharing information
- Button: "Next Scenario" — cycles through a bank of 6 scenarios

Default parameters:
- Starts on Scenario 1: "A new student is standing alone at recess, watching a kickball game."

Behavior:
- Each scenario has one response that best demonstrates including and supporting others; the other two responses are either neutral (doing nothing) or mildly exclusionary
- Feedback is encouraging and explains why the strongest response builds belonging, without shaming choices that were not ideal

Instructional Rationale: This is an Apply-level objective, so the pattern is scenario-based practice with immediate feedback, letting students rehearse recognizing and choosing inclusive actions in realistic situations.

Implementation notes: Use p5.js. Store scenarios as objects with a description, three response strings, a "best" flag, and an explanation string; keep artwork simple and warm in tone.
```

## References

- [Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
