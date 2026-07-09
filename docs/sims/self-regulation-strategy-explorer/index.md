---
title: Self-Regulation Strategy Explorer
description: Students apply self-regulation strategies by matching a short scenario showing a strong feeling to an appropriate calming strategy, then see the likely outcome of that choice.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Self-Regulation Strategy Explorer



<iframe src="main.html" width="100%" height="514px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Mental and Emotional Health](../../bands/grade-4/chapters/03-mental-emotional-health/index.md).

```text
Type: microsim
**sim-id:** self-regulation-strategy-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, practice

Learning objective: Students apply self-regulation strategies by matching a short scenario showing a strong feeling to an appropriate calming strategy, then see the likely outcome of that choice.

Canvas layout:
- Left side (350px): A scenario card showing a short, realistic situation (e.g., "You got a lower grade than you hoped on a spelling test")
- Right side (250px): Four strategy buttons (Deep Breaths, Count to Ten, Take a Break, Talk It Out) plus a feedback panel

Visual elements:
- A simple thermometer-style "feeling intensity" bar that starts high (red zone) for each scenario
- Icons for each strategy (lungs for breathing, numbers for counting, a footprint for a break, a speech bubble for talking)

Interactive controls:
- Button: choose one of four strategies
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- Scenario 1 loads with the feeling-intensity bar at "high"

Data Visibility Requirements:
  Stage 1: Show the scenario text and the starting feeling-intensity level
  Stage 2: Show the four strategy choices
  Stage 3: After a choice, show the feeling-intensity bar move down (any reasonable strategy lowers it) and a short explanation of why that strategy helps
  Final: Show a summary of which strategies were tried across all scenarios

Behavior:
- Any of the four strategies is treated as a valid, healthy choice and lowers the intensity bar somewhat, reinforcing that there is more than one right way to self-regulate
- A fifth hidden "unhealthy" option is not offered as a button; the sim focuses only on reinforcing healthy strategies rather than modeling unhealthy ones
- After choosing, a short affirming message explains the strategy (e.g., "Deep breaths slow your heart rate and give your brain a moment to think clearly")

Instructional Rationale: This is an Apply-level objective, so the design uses guided scenario practice with immediate feedback. Because self-regulation strategies are personal and many are equally valid, the simulation avoids ranking strategies against each other and instead reinforces that trying any healthy strategy is a good choice.

Implementation notes: Use p5.js. Store scenarios and strategy-specific feedback text as arrays of objects. Keep all scenarios about ordinary school and home situations (grades, waiting in line, a change of plans) rather than anything involving danger or harm.
```

## Related Resources

- [Chapter 3: Mental and Emotional Health](../../bands/grade-4/chapters/03-mental-emotional-health/index.md)
