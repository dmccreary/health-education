---
title: Weekly Workout Plan Builder
description: Students design a complete seven-day workout plan by placing activities of each required type onto specific days, and receive feedback on whether the plan meets weekly guidelines.
status: scaffold
library: p5.js
bloom_level: Create (L6)
---

# Weekly Workout Plan Builder



<iframe src="main.html" width="100%" height="484px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: microsim
**sim-id:** weekly-workout-plan-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: design, construct, formulate

Learning objective: Students design a complete seven-day workout plan by placing activities of each required type onto specific days, and receive feedback on whether the plan meets weekly guidelines.

Canvas layout: Left side (450px) shows a 7-day weekly planner grid with drop zones for morning/afternoon/evening. Right side (150px) shows draggable activity tokens grouped by type (Moderate, Vigorous, Muscle-Strengthening, Bone-Strengthening) and a "Plan Completeness" checklist panel.

Visual elements: Weekly grid, color-coded activity tokens (blue for moderate, red for vigorous, purple for muscle-strengthening, green for bone-strengthening), a checklist showing which required activity types are present in the week so far.

Interactive controls: Drag activity tokens onto day/time slots; "Check My Plan" button evaluates whether the week includes at least 60 minutes most days, vigorous activity 3 days a week, and muscle- and bone-strengthening activity at least 3 days a week; "Reset Plan" button; "See Example Plan" button shows one sample balanced week.

Default parameters: Empty planner grid at start; checklist items all unchecked until requirements are met.

Instructional Rationale: Designing an original, personalized weekly plan that satisfies multiple constraints is a Create-level task, so a builder with constraint-checking feedback is used rather than a static checklist, letting students formulate their own valid solution.

Implementation notes: p5.js. Activity and day data stored as arrays/objects; drag-and-drop interaction; responsive canvas that reflows on window resize.
```

## Related Resources

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
