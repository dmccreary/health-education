---
title: Health Goal Focus Area Self-Assessment
description: Evaluate personal wellbeing across six focus-area
status: scaffold
library: Chart.js
bloom_level: Evaluate<br/>
---

# Health Goal Focus Area Self-Assessment



<iframe src="main.html" width="100%" height="722px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md).

```text
Type: infographic

**sim-id:** health-goal-focus-area-assessment<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate<br/>
Bloom Taxonomy Verb: judge, prioritize

Learning objective: Evaluate personal wellbeing across six focus-area
domains (physical activity, nutrition, sleep, mental/emotional health,
relationships, substance-free choices) to justify prioritizing one area
for goal-setting.

Chart type: Radar/spider chart, six axes, one per wellbeing domain.

Purpose: Let learners self-rate their current standing (1-5) on each of
six domains, then visually identify the domain with the lowest score
and/or the domain they mark as "matters most to me" via a separate
priority-weight slider per axis, producing a combined "priority score"
(gap size x personal importance).

X-axis/Y-axis: Not applicable (radar chart); six labeled axes around the
perimeter.

Data series: One series per learner (self-rating), one overlay series for
"where I want to be" (target rating), so the gap between current and
target is visually the shaded area between the two polygons.

Interactive elements: Slider per axis for current rating and target
rating; hovering any axis point shows the numeric gap; a ranked list
below the chart auto-sorts domains by gap x importance to suggest a
top-priority focus area, with a text box for the learner to write why they
agree or disagree with the suggestion.

Title: "Where Should My Health Goal Focus?"
Legend: Current rating (blue polygon) vs. target rating (gold polygon).

Implementation: Chart.js radar chart plugin with linked sliders.
```

## Related Resources

- [Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md)
