---
title: Conflict Resolution Path Explorer
description: Students apply the four-step conflict management pattern (pause, use an I-statement, listen, find a fair solution) to short realistic classroom and home scenarios by choosing the most respectful next step at each stage.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Conflict Resolution Path Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 2: Growth and Development Across Cultures](../../bands/grade-4/chapters/02-growth-and-development/index.md)
