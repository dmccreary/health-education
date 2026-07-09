---
title: Perceived Versus Actual Norms Simulator
description: Students predict, then reveal the gap between perceived social norms and actual survey-measured behavior, and explain why closing that gap changes individual behavior.
status: complete
library: p5.js
bloom_level: Analyze (L4)
---

# Perceived Versus Actual Norms Simulator

<iframe src="main.html" width="100%" height="502px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md).

```text
Type: microsim
sim-id: perceived-vs-actual-norms
Library: p5.js

Bloom Taxonomy: Analyze
Bloom Taxonomy Verb: compare, distinguish

Learning objective: Analyze the gap between perceived social norms and actual survey-measured
behavior, and explain why closing that gap changes individual behavior.

Interactive controls: Dropdown to select behavior (vaping past 30 days, alcohol use past 30 days,
exercising 5+ days/week). Slider: "adjust your own guess" before revealing the real data. Button:
"Reveal actual data."

Default parameters: Behavior = "vaping past 30 days"; example data — perceived peer rate 65%,
actual measured rate 19% (illustrative, based on patterns commonly found in Monitoring the
Future-style survey data).

Data Visibility Requirements: Step-through reveal — Stage 1 the learner's own guess bar; Stage 2
the typical perceived-norm bar; Stage 3 the actual measured-rate bar side by side; Final the
calculated "perception gap" (perceived minus actual) as a labeled difference, with a short caption.

Interaction: Step-through reveal (guess, then perceived norm, then actual data) so the learner
predicts before seeing the answer.

Implementation notes: p5.js; datasets stored as a JS object keyed by behavior; redraw bars on each
reveal stage.
```

## Related Resources

- [Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md)
