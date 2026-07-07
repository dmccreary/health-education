---
title: Build a Brain-Healthy Week
description: Students apply the five brain-healthy habit categories to build a realistic weekly schedule and observe a simplified brain-health indicator respond to their choices.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Build a Brain-Healthy Week



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md)
