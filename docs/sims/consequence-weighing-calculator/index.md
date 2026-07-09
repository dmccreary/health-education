---
title: Consequence Weighing Calculator
description: Students apply a weighted-consequence comparison to rank decision options by combining likelihood and severity scores, and see how the safest option shifts as estimates change.
status: complete
library: p5.js
bloom_level: Apply (L3)
---

# Consequence Weighing Calculator

<iframe src="main.html" width="100%" height="502px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md).

```text
Type: microsim
sim-id: consequence-weighing-calculator
Library: p5.js

Bloom Taxonomy: Apply
Bloom Taxonomy Verb: calculate, apply

Learning objective: Apply a weighted-consequence comparison to rank decision options by combining
likelihood and severity scores for physical safety, relationship, and other consequences.

Canvas layout: Left: a table of 5 options with sliders per option for "likelihood of a bad outcome"
(1-5) and "severity if it happens" (1-5). Right: computed risk score (likelihood x severity) per
option displayed as a sorted bar list, updating live.

Interactive controls: Slider pair per option (likelihood, severity); dropdown to switch the whole
scenario to two additional preset examples (deciding whether to report a peer's substance use to an
adult; deciding whether to attend a gathering with no adult supervision); "Reset to defaults" button.

Default parameters: Preloaded plausible starting values for the ride-home scenario.

Behavior: As sliders move, the right-side bar chart re-sorts in real time from lowest to highest
computed risk score, so the learner sees which option becomes "safest" as they adjust their own
risk estimates.

Implementation notes: p5.js sliders and a live-redrawing horizontal bar chart; scenario data as a
JS array of objects.
```

## Related Resources

- [Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md)
