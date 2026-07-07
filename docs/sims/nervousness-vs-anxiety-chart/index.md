---
title: Everyday Nervousness vs. Clinical Anxiety Comparison Chart
description: Students compare and contrast everyday, situational
status: scaffold
library: Chart.js
bloom_level: Understand (L2)
---

# Everyday Nervousness vs. Clinical Anxiety Comparison Chart



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md).

```text
Type: chart

**sim-id:** nervousness-vs-anxiety-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: compare, contrast, explain

Learning objective: Students compare and contrast everyday, situational
nervousness with clinical anxiety across duration, intensity, and impact
on functioning, building an accurate non-stigmatizing understanding of
what makes anxiety a medical condition.

Chart type: Horizontal bar chart with two data series

X-axis: Relative level (Low, Moderate, High) — categorical, not a numeric
clinical score

Y-axis: Dimension (Duration, Intensity, Physical Symptoms, Effect on Daily
Functioning)

Data series:
1. Everyday Nervousness (blue bars): Duration = Low, Intensity = Low to
   Moderate, Physical Symptoms = Low, Effect on Functioning = Low
2. Clinical Anxiety (gold bars): Duration = High, Intensity = High,
   Physical Symptoms = High, Effect on Functioning = High

Interactive features: Hovering a bar reveals a tooltip explaining what
that level means for that dimension in plain language; clicking a bar pins
an expanded infobox with a one-sentence clinical explanation drawn from
the chapter text.

Title: "How Clinical Anxiety Differs From Everyday Nervousness"

Instructional Rationale: Comparing and contrasting two related but
distinct conditions is an Understand-level objective, so a labeled
comparison chart with explanatory tooltips is used rather than a
diagnostic tool, keeping the framing informational and destigmatizing
rather than prescriptive or diagnostic.

Implementation notes: Chart.js horizontal bar chart; categorical axis;
tooltip and click-to-pin text in a JS lookup object.
```

## Related Resources

- [Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md)
