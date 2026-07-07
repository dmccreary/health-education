---
title: Boundary Erosion Timeline Simulator
description: Students examine a sequence of small digital
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Boundary Erosion Timeline Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md).

```text
Type: microsim

**sim-id:** boundary-erosion-timeline-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, distinguish, differentiate

Learning objective: Students examine a sequence of small digital
relationship requests and distinguish the point, if any, at which a
reasonable digital behavior becomes a boundary-eroding pattern of control.

Canvas layout:
- Top (full width): a horizontal six-step timeline of realistic requests
  in a dating relationship (e.g., Step 1: "Can you share your location
  when you're out late?" through Step 6: "Give me your phone password so
  I know you're not talking to anyone else")
- Bottom (full width): a step-through control with a single question at
  each step: "Healthy boundary, still healthy but worth watching, or
  boundary erosion?"

Data Visibility Requirements:
  Stage 1: Show Step 1 alone with the three-option judgment control
  Stage 2: On the student's selection, reveal a brief explanation of where
  professionals would place that specific step and why, without
  overriding the student's own reasoning
  Stage 3: Advance to the next step, showing all prior steps as a compact
  timeline strip above for context
  Stage 4: After Step 6, show the full six-step timeline with the
  professional judgment overlay and a short synthesis noting that erosion
  is usually gradual, which is exactly why noticing it early matters

Interactive controls:
- Three-option judgment buttons per step
- Button: "Next Step"
- Button: "Restart Timeline"

Default parameters: Six-step sequence, starting at Step 1, no step
pre-judged

Instructional Rationale: Distinguishing a healthy request from an eroding
pattern requires examining a sequence for a shifting relationship, which is
an Analyze-level task; a step-through timeline with reflection at each
point is used instead of animation so students can reason about each step
individually before seeing the cumulative pattern.

Implementation notes: p5.js; step and explanation data stored as an array
of {step, request, professionalJudgment, explanation} objects; tone
non-alarmist and focused on pattern recognition, not diagnosing any real
relationship.
```

## Related Resources

- [Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md)
