---
title: Impaired Reaction Time Simulator
description: Students analyze how increasing impairment levels affect stopping distance by comparing reaction time and total stopping distance at several illustrative impairment levels, differentiating how much distance is added at each stage.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Impaired Reaction Time Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md)
