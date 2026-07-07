---
title: School Drill Practice
description: Students practice the correct sequence of steps for a fire drill by following a step-through classroom scene, reinforcing the School Emergency concept.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# School Drill Practice



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md).

```text
Type: microsim
**sim-id:** school-drill-practice<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: practice, demonstrate

Learning objective: Students practice the correct sequence of steps for a fire drill by following a step-through classroom scene, reinforcing the School Emergency concept.

Canvas layout: Top area (300px) shows an illustrated classroom scene with a teacher and children, advancing through three stages (alarm sounds, line up quietly, walk to the safe outdoor spot). Middle area (80px): three step icons that light up as the scene advances. Bottom strip (100px): "Next Step" and "Reset" buttons.

Visual elements: Classroom scene changes at each stage; step icons are alarm, line-up, and outdoor safe-spot.

Interactive controls: "Next Step" advances the drill sequence; "Reset" returns to the start; short caption displays under the scene naming the current step.

Default parameters: Starts at Stage 1 (alarm sounds); three total stages, each requiring a click to advance.

Behavior: Stage 1: "The alarm sounds. It's time for a fire drill!" Stage 2: "Everyone lines up quietly and listens to the teacher." Stage 3: "The class walks calmly to the safe outdoor spot." After Stage 3: "Great job practicing! Now everyone knows just what to do."

Instructional Rationale: An Apply-level objective — practicing the correct sequence of a real routine — so a step-through pattern with teacher-controlled pacing is appropriate, letting a teacher narrate each stage aloud rather than relying on unstructured continuous animation.

Implementation notes: p5.js. Each stage is an object with an illustration reference and a caption string. Text large (24px+) and calm in tone.
```

## Related Resources

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
