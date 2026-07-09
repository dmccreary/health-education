---
title: Substance Risk Comparison Chart
description: Students compare and differentiate the documented developmental-brain-risk profile and unpredictability of alcohol, commercial tobacco/nicotine, cannabis, and illegal drugs, reinforcing that unregulated illegal drugs carry the added risk of unknown content and strength.
status: scaffold
library: Chart.js
bloom_level: Analyze (L4)
---

# Substance Risk Comparison Chart



<iframe src="main.html" width="100%" height="522px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md).

```text
Type: chart
**sim-id:** substance-risk-comparison-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare, examine, differentiate

Learning objective: Students compare and differentiate the documented developmental-brain-risk profile and unpredictability of alcohol, commercial tobacco/nicotine, cannabis, and illegal drugs, reinforcing that unregulated illegal drugs carry the added risk of unknown content and strength.

Chart type: Horizontal grouped bar chart

Purpose: Compare four substance categories across two illustrative, research-informed dimensions — not exact clinical statistics, but relative educational comparisons clearly labeled as such.

X-axis: Relative risk rating (Low, Moderate, High, Severe) — plotted as a labeled qualitative scale, not a specific number
Y-axis: Substance category (Alcohol, Commercial Tobacco/Nicotine, Cannabis, Illegal Drugs)

Data series:
1. "Developmental Brain Risk" (blue bars): Alcohol — High; Commercial Tobacco/Nicotine — High; Cannabis — High; Illegal Drugs — Severe
2. "Unpredictability/Contamination Risk" (orange bars): Alcohol — Low; Commercial Tobacco/Nicotine — Low; Cannabis — Moderate; Illegal Drugs — Severe

Title: "Comparing Substance Risk Categories for a Developing Brain"
Legend: top-right, labeled "Developmental Brain Risk" and "Unpredictability/Contamination Risk"

Interactive features: Hovering any bar reveals a tooltip with a one- to two-sentence, factual explanation of why that substance received that rating, referencing the brain-science content already covered in the chapter; clicking a substance category label filters the chart to show only that category's two bars enlarged with an expanded infobox.

Annotation: A callout near the Illegal Drugs "Unpredictability" bar reads "Illegal drugs are unregulated — contents and strength, including possible fentanyl contamination, cannot be verified."

Implementation: Chart.js horizontal bar chart with tooltip callbacks and a custom click-to-filter interaction; responsive canvas via Chart.js responsive:true option. No content in tooltips or annotations describes how to obtain, identify, or use any substance.
```

## Related Resources

- [Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md)
