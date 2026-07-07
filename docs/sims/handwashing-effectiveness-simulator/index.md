---
title: Handwashing Effectiveness Simulator
description: Students apply correct handwashing technique parameters (duration, soap use, coverage) and observe how each factor affects a simplified germ-removal outcome.
image: /sims/handwashing-effectiveness-simulator/handwashing-effectiveness-simulator.png
og:image: /sims/handwashing-effectiveness-simulator/handwashing-effectiveness-simulator.png
twitter:image: /sims/handwashing-effectiveness-simulator/handwashing-effectiveness-simulator.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grades 6-8
---

# Handwashing Effectiveness Simulator

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Handwashing Effectiveness Simulator MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Handwashing Effectiveness Simulator** is an interactive MicroSim for this health-education textbook.

Students apply correct handwashing technique parameters (duration, soap use, coverage) and observe how each factor affects a simplified germ-removal outcome.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, calculate, apply

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply correct handwashing technique parameters (duration, soap use, coverage) and observe how each factor affects a simplified germ-removal outcome.

This activity targets **Bloom's Apply (L3)** (demonstrate, calculate, apply).

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
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: microsim
**sim-id:** handwashing-effectiveness-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, calculate, apply

Learning objective: Students apply correct handwashing technique parameters (duration, soap use, coverage) and observe how each factor affects a simplified germ-removal outcome.

Canvas layout: Left side (450px) shows an illustrated pair of hands with a "germ count" indicator. Right side (150px) shows controls and a results readout.

Visual elements: Animated hand illustration showing germ dots decreasing as washing proceeds; a germ-count number; a technique score.

Interactive controls: Slider for wash duration (0-30 seconds); checkbox for "used soap"; checkbox for "scrubbed between fingers and under nails"; "Wash Hands" button to run the simulation; "Reset" button.

Default parameters: Duration starts at 5 seconds, soap unchecked, scrubbing unchecked — producing a low germ-removal result to motivate adjusting the parameters.

Behavior: Germ count drops most with duration ≥ 20 seconds AND soap checked AND scrubbing checked; missing any one factor substantially reduces effectiveness, shown numerically and visually.

Instructional Rationale: Applying correct technique parameters and observing the resulting outcome is an Apply-level task, so a parameter-adjustable simulation is used rather than a passive instructional list, letting students discover which factors matter most through experimentation.

Implementation notes: p5.js. Germ-removal calculation as a simple weighted function of the three parameters. Responsive canvas that reflows on window resize.
```

## References

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
