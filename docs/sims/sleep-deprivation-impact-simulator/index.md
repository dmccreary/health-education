---
title: Sleep Deprivation Impact Simulator
description: Students evaluate how varying nightly sleep duration
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Sleep Deprivation Impact Simulator



<iframe src="main.html" width="100%" height="534px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md).

```text
Type: microsim

**sim-id:** sleep-deprivation-impact-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: assess, justify, evaluate

Learning objective: Students evaluate how varying nightly sleep duration
affects cognitive, emotional, immune, and metabolic outcomes, and justify
a recommended sleep target for a realistic student schedule.

Canvas layout:
- Left (55%): a slider-controlled "sleep duration" readout showing
  simulated next-day effects across four dimensions (cognitive, emotional,
  immune, metabolic), each as a simple bar gauge
- Right (45%): a realistic student schedule scenario (school start time,
  after-school job or activity, homework load) with a text prompt asking
  the student to justify a target bedtime

Data Visibility Requirements:
  Stage 1: Show baseline gauges at 8 hours of sleep (all four dimensions
  in the healthy range)
  Stage 2: Student drags the sleep-duration slider from 4 to 10 hours and
  watches all four gauges shift in real time, based on research-informed
  weighting (largest drop-off below 6 hours)
  Stage 3: Student reads the schedule scenario and proposes a target
  bedtime that would achieve at least 8 hours given the fixed wake time
  Stage 4: Reveal a model answer showing the bedtime math and naming one
  trade-off the student would need to negotiate (e.g., cutting a late
  activity short)

Interactive controls:
- Slider: Sleep duration (4-10 hours)
- Text input: proposed target bedtime
- Button: "Check My Reasoning"
- Button: "Reset"

Default parameters: Slider starts at 8 hours; scenario wake time fixed at
6:30 a.m.

Instructional Rationale: Justifying a specific sleep target against a
realistic, constrained schedule is an Evaluate-level task, so the
simulator pairs a parameter-exploration gauge (to build the evidence base)
with a justification prompt (to apply that evidence to a real decision),
rather than only displaying facts about sleep.

Implementation notes: p5.js; gauge values computed from a simple weighted
function of sleep duration per dimension; schedule scenario data stored
as an object with fixed wake time and variable evening commitments.
```

## Related Resources

- [Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md)
