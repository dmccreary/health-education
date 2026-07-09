---
title: Comparing Documented Physiological Risk Areas by Substance
description: Students compare and differentiate documented physiological risk areas (respiratory, cardiovascular, liver/metabolic, immune/reproductive) across four substance categories using relative qualitative ratings.
status: complete
library: Chart.js
bloom_level: Analyze (L4)
---

# Comparing Documented Physiological Risk Areas by Substance

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md).

```text
Type: chart
sim-id: physiological-risk-areas-by-substance
Library: Chart.js

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: compare, differentiate, examine

Learning objective: Students compare and differentiate the documented physiological risk
areas (respiratory, cardiovascular, liver/metabolic, immune/reproductive) across four
substance categories (nicotine/vaping, cannabis, alcohol, other drugs including
opioids/stimulants).

Chart type: Grouped horizontal bar chart

Data series (illustrative, research-informed qualitative ratings labeled Low/Moderate/High/
Severe, not exact clinical statistics):
- Nicotine/Vaping: Respiratory High; Cardiovascular Moderate; Liver/Metabolic Low; Immune/Reproductive Moderate
- Cannabis: Respiratory Moderate; Cardiovascular Moderate; Liver/Metabolic Low; Immune/Reproductive Moderate
- Alcohol: Respiratory Low; Cardiovascular Moderate; Liver/Metabolic High; Immune/Reproductive Moderate
- Other Drugs (incl. opioids/stimulants): Respiratory High; Cardiovascular High; Liver/Metabolic High; Immune/Reproductive High

X-axis: Relative risk rating (Low, Moderate, High, Severe)
Y-axis: Body system category

Title: "Comparing Documented Physiological Risk Areas by Substance"
Legend: top-right, one color per substance category

Interactive features: Hovering any bar reveals a tooltip with a one- to two-sentence factual
explanation grounded in the chapter text; clicking a substance category in the legend isolates
that category's bars.

Implementation: Chart.js grouped horizontal bar chart with tooltip callbacks and legend-click
filtering; responsive:true. No tooltip or annotation describes how to obtain, use, or conceal
any substance.
```

## Related Resources

- [Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md)
