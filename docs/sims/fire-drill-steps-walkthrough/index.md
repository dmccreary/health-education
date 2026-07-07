---
title: Fire Drill Steps Walkthrough
description: Students explain the steps of a school fire drill in order, using a step-through walkthrough with concrete classroom scenes at each stage.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Fire Drill Steps Walkthrough



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Staying Safe at Home, School, and Online](../../bands/grade-1/chapters/06-personal-safety/index.md).

```text
Type: microsim
**sim-id:** fire-drill-steps-walkthrough<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, summarize

Learning objective: Students explain the steps of a school fire drill in order, using a step-through walkthrough with concrete classroom scenes at each stage.

Canvas layout:
- Left area (450px): One classroom scene per step, shown one at a time
- Right area (150px): "Next Step" and "Previous Step" buttons, a step counter ("Step 2 of 5"), and an infobox

Visual elements:
- Step 1: Alarm cue sounds, shown as a simple sound-wave icon above the classroom
- Step 2: Students line up calmly at the door
- Step 3: Teacher leads the line out of the classroom
- Step 4: Class walks to the designated safe spot outside
- Step 5: Teacher checks that every student is present

Interactive controls:
- Button: "Next Step" (advances to the next classroom scene)
- Button: "Previous Step" (returns to the prior scene)
- Step counter always visible

Default parameters:
- Starts at Step 1 (alarm cue)

Data Visibility Requirements:
  Stage 1: Show the alarm cue and a caption: "The alarm is the cue that a drill or emergency is starting."
  Stage 2: Show students lining up and a caption: "Everyone lines up calmly — no running."
  Stage 3: Show the teacher leading the line with a caption: "Students follow the teacher's directions."
  Stage 4: Show the walk to the safe spot with a caption: "The class walks to the same safe spot every time."
  Stage 5: Show the attendance check with a caption: "The teacher checks that everyone made it out safely."

Behavior:
- Each click of "Next Step" reveals the next scene and caption; "Previous Step" allows review
- A final summary caption appears after Step 5: "Practicing these steps means everyone knows exactly what to do, so a real emergency feels calm and familiar."

Instructional Rationale: This is an Understand-level (explain/describe) objective, so the MicroSim uses a step-through walkthrough with concrete scenes and captions rather than continuous animation, letting students trace each step of the process in order and in their own time.

Implementation notes: Use p5.js. Keep every scene calm and orderly — no depictions of fire, smoke, or danger, only the organized practice behavior. Teacher can pause on any step to connect it to the school's real drill procedure.
```

## Related Resources

- [Chapter 6: Staying Safe at Home, School, and Online](../../bands/grade-1/chapters/06-personal-safety/index.md)
