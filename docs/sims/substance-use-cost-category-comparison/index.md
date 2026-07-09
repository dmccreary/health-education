---
title: Substance Use Cost Category Comparison
description: Students examine the relative scale of healthcare, lost productivity, criminal justice, and family/community costs of alcohol and tobacco use, and evaluate which categories are largest and who bears each cost.
status: complete
library: Chart.js
bloom_level: Analyze (L4)
---

# Substance Use Cost Category Comparison

<iframe src="main.html" width="100%" height="542px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Substance Policy and Law](../../bands/grade-9-12/chapters/12-substance-policy-and-law/index.md).

```text
Type: chart
sim-id: substance-use-cost-category-comparison
Library: Chart.js
Status: Specified

Bloom Taxonomy: Analyze
Bloom Taxonomy Verb: examine

Learning objective: Examine the relative scale of healthcare, lost
productivity, criminal justice, and family/community costs associated with
substance use, to evaluate which categories are largest and who bears each
cost.

Chart type: Stacked bar chart

Purpose: Show the relative proportion of each cost category within total
estimated annual U.S. costs attributable to alcohol and tobacco use
combined, using rounded illustrative figures drawn from public health
economic estimates.

X-axis: Substance category (Alcohol, Tobacco/Nicotine)
Y-axis: Estimated annual cost (billions of dollars, illustrative)

Data series (illustrative, rounded, for instructional comparison):
1. Healthcare costs: Alcohol ~$35B, Tobacco ~$170B
2. Lost productivity: Alcohol ~$90B, Tobacco ~$150B
3. Criminal justice costs: Alcohol ~$60B, Tobacco ~$5B
4. Family/community costs (illustrative estimate): Alcohol ~$45B, Tobacco
   ~$10B

Title: "Where Does the Cost of Substance Use Land?"
Legend: Position top-right, one color per cost category

Interactive features:
- Hover over any segment to see the exact illustrative value and a
  one-sentence description of who bears that cost
- Click a legend entry to toggle that cost category on/off across both bars
- Toggle button: switch view between "Total Dollars" and "Percent of
  Total" to help learners compare proportions, not just raw scale

Color scheme: Blue (healthcare), orange (lost productivity), gray
(criminal justice), green (family/community)

Implementation: Chart.js stacked bar chart with custom tooltip callback
```

The dollar figures are illustrative, rounded public-health economic
estimates used for instructional comparison, not precise accounting.

## Related Resources

- [Substance Policy and Law](../../bands/grade-9-12/chapters/12-substance-policy-and-law/index.md)
