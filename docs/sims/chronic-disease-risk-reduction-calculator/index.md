---
title: Chronic Disease Risk Reduction Calculator
description: Students evaluate how combinations of prevention
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Chronic Disease Risk Reduction Calculator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md).

```text
Type: microsim

**sim-id:** chronic-disease-risk-reduction-calculator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: assess, justify, recommend

Learning objective: Students evaluate how combinations of prevention
strategies (nutrition quality, physical activity, tobacco/alcohol
avoidance, routine screening, stress/sleep management) affect a
simplified composite chronic disease risk indicator, and justify a
realistic personal prevention plan.

Canvas layout:
- Left (55%): five toggle switches, one per strategy, each with three
  levels (Low, Moderate, Strong adherence)
- Right (45%): a composite risk-indicator gauge (illustrative, not a
  medical diagnostic tool) that updates as toggles change, plus a text box
  for the student to justify their chosen combination

Data Visibility Requirements:
  Stage 1: Show all five toggles at "Low" adherence with the composite
  gauge at its highest illustrative risk level
  Stage 2: Student adjusts toggles; the gauge recalculates in real time
  using simple additive weighting, with a clear on-screen label: "This
  gauge illustrates relative risk patterns from population research — it
  is not a personal medical prediction"
  Stage 3: Student writes a one-to-two sentence justification for a
  realistic combination given a stated constraint (e.g., limited time for
  exercise due to a part-time job)
  Stage 4: Reveal a model justification highlighting that screening and
  sleep are often the most overlooked, lowest-barrier strategies

Interactive controls:
- Five three-level toggle switches
- Text input: justification
- Button: "Check My Reasoning"
- Button: "Reset"

Default parameters: All toggles start at Low adherence

Instructional Rationale: Justifying a realistic combination of prevention
strategies under real constraints is an Evaluate-level task, so a
parameter-exploration gauge paired with a justification prompt is used
rather than a simple checklist of recommended behaviors.

Implementation notes: p5.js; composite gauge computed from a transparent,
documented weighted sum, explicitly labeled as illustrative; disclaimer
text persistent on screen.
```

## Related Resources

- [Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md)
