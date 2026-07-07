---
title: Social Conditions to Health Outcomes Pathway Map
description: Students examine how five social-condition categories
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Social Conditions to Health Outcomes Pathway Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md).

```text
Type: graph-model

**sim-id:** social-conditions-health-pathway-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, differentiate, organize

Learning objective: Students examine how five social-condition categories
(economic stability, neighborhood environment, food access, health care
access, education/social context) connect to and compound each other on
the way to a health outcome, distinguishing systemic causes from individual
behavior.

Node types:
1. Central outcome nodes (dark circles): "Chronic Disease Risk," "Life
   Expectancy Gap," "Mental Health Burden"
2. Category nodes (blue squares): Economic Stability, Neighborhood/Physical
   Environment, Food Access, Health Care Access, Education/Social Context
3. Mechanism nodes (orange diamonds), 2 per category, naming a concrete
   real-world pathway (e.g., under Food Access: "Grocery store closes,
   replaced by convenience stores" and "Fresh produce costs more per
   calorie than processed food")

Edge types:
- "Compounds With" (dashed gray, category to category, showing overlap)
- "Contributes To" (solid black, mechanism to outcome node)
- "Shapes" (category to its mechanism nodes)

Layout: Force-directed network, outcome nodes anchored center-right,
category nodes surrounding, mechanisms as outer leaves

Interactive features:
- Hover any node: one-sentence plain-language description
- Click a category node: side panel explains that category and highlights
  every category it compounds with, using the "Compounds With" edges
- Click a mechanism node: side panel gives a concrete, real-world example
- Drag, zoom, and pan enabled

Legend: color/shape key for outcomes, categories, mechanisms; edge style
key distinguishing "compounds with," "contributes to," and "shapes"

Implementation: vis-network, force-directed layout, click-triggered panel
content stored in a JSON lookup keyed by node id; emphasize in all panel
text that these are systemic pathways, not verdicts about individuals
```

## Related Resources

- [Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md)
