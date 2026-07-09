---
title: Impact Evaluation Dashboard
description: Evaluate the impact of an adapted health behavior over
status: scaffold
library: Chart.js
bloom_level: Evaluate<br/>
---

# Impact Evaluation Dashboard



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md).

```text
Type: chart

**sim-id:** impact-evaluation-dashboard<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate<br/>
Bloom Taxonomy Verb: assess, justify

Learning objective: Evaluate the impact of an adapted health behavior over
time using multiple outcome measures, distinguishing genuine improvement
from noise or an unrelated factor.

Chart type: Multi-line chart, four weeks on the x-axis.

Purpose: Show Jordan's four-week active-commute data across three tracked
measures so learners must weigh mixed signals rather than one clean
success story.

X-axis: Week (1-4). Y-axis: Three normalized scales — days walked (0-5),
self-rated morning stress (1-10, lower is better), resting heart rate
(beats per minute).

Data series: Days walked (gold line: 2, 4, 3, 4); morning stress (teal
line: 7, 5, 6, 4); resting heart rate (navy line: 74, 72, 73, 70).

Interactive elements: Hovering any point reveals the exact value and a
one-line note (e.g., week 3's dip in days walked annotated "rainy week");
a toggle lets the learner show/hide each series to isolate one measure at
a time; a text prompt below asks the learner to type a one-sentence
evaluation of overall impact, encouraging them to weigh all three series
rather than just one.

Title: "Four-Week Impact of Jordan's Adapted Commute Plan"
Legend: Top-right, one entry per series with show/hide checkboxes.

Implementation: Chart.js multi-line chart with dataset toggling enabled.
```

## Related Resources

- [Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md)
