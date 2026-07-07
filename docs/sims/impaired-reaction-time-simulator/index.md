---
title: Impaired Reaction Time Simulator
description: Students analyze how increasing impairment levels affect stopping distance by comparing reaction time and total stopping distance at several illustrative impairment levels, differentiating how much distance is added at each stage.
image: /sims/impaired-reaction-time-simulator/impaired-reaction-time-simulator.png
og:image: /sims/impaired-reaction-time-simulator/impaired-reaction-time-simulator.png
twitter:image: /sims/impaired-reaction-time-simulator/impaired-reaction-time-simulator.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 6-8
---

# Impaired Reaction Time Simulator

<iframe src="main.html" width="100%" height="449px" scrolling="no"></iframe>

[Run the Impaired Reaction Time Simulator MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="449px" scrolling="no"></iframe>
```

## About this MicroSim

**Impaired Reaction Time Simulator** is an interactive MicroSim for this health-education textbook.

Students analyze how increasing impairment levels affect stopping distance by comparing reaction time and total stopping distance at several illustrative impairment levels, differentiating how much distance is added at each stage.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — examine, compare, differentiate

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students analyze how increasing impairment levels affect stopping distance by comparing reaction time and total stopping distance at several illustrative impairment levels, differentiating how much distance is added at each stage.

This activity targets **Bloom's Analyze (L4)** (examine, compare, differentiate).

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
**Analyze**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md).

```text
Type: microsim
**sim-id:** impaired-reaction-time-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, compare, differentiate

Learning objective: Students analyze how increasing impairment levels affect stopping distance by comparing reaction time and total stopping distance at several illustrative impairment levels, differentiating how much distance is added at each stage.

Canvas layout: Top area (300px) shows a simple top-down roadway with a car icon and a hazard marker at a fixed distance; bottom area (200px) shows a slider control and a data readout panel.

Visual elements: A roadway with distance markers in feet; a car icon; a hazard icon appearing at a randomized point; a shaded "reaction distance" zone and a separate shaded "braking distance" zone that both extend as impairment increases.

Interactive controls: A slider labeled "Impairment Level" with four labeled stops: None, Mild, Moderate, Significant (illustrative, educational categories, not tied to specific blood alcohol numbers); as the slider moves, the reaction-distance and braking-distance zones on the roadway resize accordingly and a data readout updates: "Reaction Distance," "Braking Distance," "Total Stopping Distance."

Default parameters: Slider starts at "None," showing baseline unimpaired stopping distance; hazard appears at a fixed distance so comparisons are consistent across slider positions.

Instructional Rationale: An Analyze-level objective requires learners to examine and compare relationships between variables; a slider-driven data readout lets students directly compare how stopping distance grows with impairment level, which is more instructive than a single animated crash scenario because it makes the underlying relationship between impairment and distance visible and comparable.

Implementation notes: p5.js. Illustrative relative values only, clearly labeled as educational estimates rather than exact clinical or legal figures. No depiction of a crash, injury, or graphic outcome — the simulator stops at showing stopping distances. Responsive canvas that reflows on window resize.
```

## References

- [Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
