---
title: Safe Activity Scenario Planner
description: Students apply safe-participation strategies (buddy
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Safe Activity Scenario Planner



<iframe src="main.html" width="100%" height="534px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md).

```text
Type: microsim

**sim-id:** safe-activity-scenario-planner<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, demonstrate, practice

Learning objective: Students apply safe-participation strategies (buddy
system, timing, indoor alternatives, equipment, warm-up/cool-down,
community programs, hydration) by selecting an appropriate combination of
strategies for realistic under-resourced or unsafe-environment scenarios.

Canvas layout:
- Left (55%): a scenario card describing a realistic setting (e.g., "It's
  6 p.m. in December and gets dark at 5; your neighborhood park has no
  streetlights")
- Right (45%): seven strategy tiles (one per strategy above) the student
  can select in any combination

Data Visibility Requirements:
  Stage 1: Show the scenario and all seven strategy tiles unselected
  Stage 2: Student selects the strategies they judge as most relevant to
  this specific scenario (multi-select allowed)
  Stage 3: Reveal feedback identifying which selected strategies directly
  address the scenario's specific hazard, and noting any strong strategy
  the student missed, with a one-sentence reason
  Stage 4: Show a running count of scenarios completed out of a bank of 6,
  each testing a different combination of environmental barriers (darkness,
  extreme heat, no sidewalks, unfamiliar area, limited equipment, bad
  weather)

Interactive controls:
- Click to select/deselect strategy tiles
- Button: "Check My Plan"
- Button: "Next Scenario"

Default parameters: Scenario bank of 6; no strategy pre-selected

Instructional Rationale: Matching a combination of safety strategies to a
specific environmental hazard is an Apply-level task requiring judgment
about fit, not memorization of a checklist, so a scenario-based
multi-select tool with explanatory feedback is used rather than a static
list of tips.

Implementation notes: p5.js; scenario and feedback data stored as an array
of {scenario, hazards, recommendedStrategies, explanation} objects; tone
is practical and non-alarmist.
```

## Related Resources

- [Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md)
