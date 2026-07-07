---
title: Handwashing Effectiveness Simulator
description: Students apply correct handwashing technique parameters (duration, soap use, coverage) and observe how each factor affects a simplified germ-removal outcome.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Handwashing Effectiveness Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
