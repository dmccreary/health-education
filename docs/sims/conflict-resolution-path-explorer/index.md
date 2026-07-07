---
title: Conflict Resolution Path Explorer
description: Students apply the four-step conflict management pattern (pause, use an I-statement, listen, find a fair solution) to short realistic classroom and home scenarios by choosing the most respectful next step at each stage.
image: /sims/conflict-resolution-path-explorer/conflict-resolution-path-explorer.png
og:image: /sims/conflict-resolution-path-explorer/conflict-resolution-path-explorer.png
twitter:image: /sims/conflict-resolution-path-explorer/conflict-resolution-path-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 4
---

# Conflict Resolution Path Explorer

<iframe src="main.html" width="100%" height="502px" scrolling="no"></iframe>

[Run the Conflict Resolution Path Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="502px" scrolling="no"></iframe>
```

## About this MicroSim

**Conflict Resolution Path Explorer** is an interactive MicroSim for this health-education textbook.

Students apply the four-step conflict management pattern (pause, use an I-statement, listen, find a fair solution) to short realistic classroom and home scenarios by choosing the most respectful next step at each stage.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — use, demonstrate, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 4**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply the four-step conflict management pattern (pause, use an I-statement, listen, find a fair solution) to short realistic classroom and home scenarios by choosing the most respectful next step at each stage.

This activity targets **Bloom's Apply (L3)** (use, demonstrate, practice).

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
[Chapter 2: Growth and Development Across Cultures](../../bands/grade-4/chapters/02-growth-and-development/index.md).

```text
Type: microsim
**sim-id:** conflict-resolution-path-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, practice

Learning objective: Students apply the four-step conflict management pattern (pause, use an I-statement, listen, find a fair solution) to short realistic classroom and home scenarios by choosing the most respectful next step at each stage.

Canvas layout:
- Left side (350px): A scenario card describing a short conflict (e.g., "Two students both want to use the only classroom tablet during free time")
- Right side (250px): Four multiple-choice buttons representing possible next actions, one of which best matches the current step in the conflict management pattern

Visual elements:
- A step tracker across the top showing the four steps (Pause, I-Statement, Listen, Solve) with the current step highlighted
- A simple scenario illustration icon (two speech bubbles) rather than depictions of specific people

Interactive controls:
- Button choices for each step (for example, at the "I-Statement" step: "I feel left out when I don't get a turn," "You always take the tablet and that's not fair," "Whatever, I don't care," "Give it to me now")
- Button: "Next Scenario" to load a new situation after completing one
- Button: "Reset"

Default parameters:
- Scenario 1 loads at Step 1 (Pause) with four response choices shown

Data Visibility Requirements:
  Stage 1: Show the scenario text and the current step name
  Stage 2: Show the four response choices for that step
  Stage 3: After a choice is made, show why it was or was not the most respectful option, then advance to the next step
  Final: Show a completed conflict management path summary for the scenario

Behavior:
- Choosing the most respectful, step-appropriate response advances the step tracker and shows a short affirming explanation
- Choosing a less respectful response shows a calm explanation of why it could make the conflict worse, then lets the student try again
- After all four steps are completed for a scenario, a summary recaps the full respectful path taken

Instructional Rationale: This is an Apply-level objective, so the design uses guided scenario practice with immediate feedback rather than passive viewing — students need to practice selecting respectful actions in context, not just recall the four steps.

Implementation notes: Use p5.js. Store scenarios as an array of objects, each with four step-specific choice sets and feedback text. Keep scenario topics neutral and realistic (shared objects, group projects, disagreements about rules) rather than anything involving physical safety.
```

## References

- [Chapter 2: Growth and Development Across Cultures](../../bands/grade-4/chapters/02-growth-and-development/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
