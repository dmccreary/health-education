---
title: Advertising Targeting And Health Outcome Disparities Chart
description: Students assess and critique the documented connection between targeted advertising practices and substance-related health outcome disparities across three case examples, justifying why the disparity reflects a systems-level marketing pattern rather than a characteristic of the affected community.
status: scaffold
library: Chart.js
bloom_level: Evaluate (L5)
---

# Advertising Targeting And Health Outcome Disparities Chart



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md).

```text
Type: chart
**sim-id:** advertising-and-health-disparities-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: assess, justify, critique

Learning objective: Students assess and critique the documented connection between targeted advertising practices and substance-related health outcome disparities across three case examples, justifying why the disparity reflects a systems-level marketing pattern rather than a characteristic of the affected community.

Chart type: Grouped bar chart

Purpose: Compare three documented case examples (Menthol Cigarette Marketing, Retail/Advertising Density In Lower-Income Areas, Youth Vaping Flavor Marketing) across two illustrative, clearly-labeled educational dimensions.

X-axis: Case example (Menthol Marketing, Retail/Ad Density, Youth Vaping Flavors)
Y-axis: Relative level (Low, Moderate, High) — a labeled qualitative scale, not a specific statistic

Data series:
1. "Documented Marketing/Retail Targeting" (blue bars): Menthol Marketing — High; Retail/Ad Density — High; Youth Vaping Flavors — High
2. "Associated Health Outcome Disparity" (orange bars): Menthol Marketing — High; Retail/Ad Density — Moderate; Youth Vaping Flavors — High

Title: "How Targeted Marketing Connects to Health Outcome Disparities"
Legend: top-right

Interactive features: Hovering any bar reveals a tooltip with a two-to-three sentence, factual, cited-in-plain-language explanation of the documented research behind that case; clicking a case-example label opens an expanded infobox that explicitly states the systems-level interpretation: "This disparity reflects a documented marketing and access pattern, not a difference in the community itself."

Implementation: Chart.js grouped bar chart with tooltip callbacks and click-to-expand infobox; responsive via Chart.js responsive:true option. Every infobox and tooltip includes the systems-level framing sentence so the chart cannot be read as blaming any community.
```

## Related Resources

- [Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md)
