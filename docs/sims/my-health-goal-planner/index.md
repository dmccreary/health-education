---
title: My Health Goal Planner
description: Students examine candidate goal statements and distinguish specific, realistic, personal goals from vague or unrealistic ones, then build their own goal statement.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# My Health Goal Planner



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md).

```text
Type: microsim
**sim-id:** my-health-goal-planner<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, organize, distinguish

Learning objective: Students examine candidate goal statements and distinguish specific, realistic, personal goals from vague or unrealistic ones, then build their own goal statement.

Canvas layout: Left side (350px) shows five example goal cards to sort into two bins: "Strong Goal" and "Needs Work" (e.g., "Be healthier" vs. "Drink a glass of water with lunch each day"). Right side (250px) holds a simple goal-builder form: a text input for "My goal is..." plus three checkboxes the student self-checks — "Specific," "Realistic," "Matters to me."

Interactive controls: Drag or click to sort cards; text input field; three checkboxes; "Save My Goal" button.

Data Visibility Requirements: Sorting a card reveals a one-sentence reason it is strong or needs work (e.g., "'Be healthier' doesn't say exactly what will change."). After typing a goal and checking all three boxes, "Save My Goal" displays the finished goal statement in a printable-looking card.

Instructional Rationale: Analyze-level objective requiring students to examine goal statements against criteria, so a sort-then-build design lets students apply the criteria to examples before applying them to their own goal.

Implementation notes: Use p5.js and a real HTML text input for the goal so it is easy to read and edit. This MicroSim is intended for guided, individual student use with a teacher or family member nearby to help, consistent with K-3 practice.
```

## Related Resources

- [Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md)
