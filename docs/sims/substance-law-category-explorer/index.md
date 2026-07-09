---
title: Substance Law Category Explorer
description: Classify the four major categories of community
status: scaffold
library: vis-network
bloom_level: Understand<br/>
---

# Substance Law Category Explorer



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Substance Policy and Law](../../bands/grade-9-12/chapters/12-substance-policy-and-law/index.md).

```text
Type: diagram

**sim-id:** substance-law-category-explorer<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Understand<br/>
Bloom Taxonomy Verb: classify

Learning objective: Classify the four major categories of community
substance law (age restrictions, impaired driving, possession, sale and
distribution) and recognize which level of government (federal, state,
local, tribal) typically sets each type of rule.

Components to show:
- Central node: "Community Substance Laws"
- Four category nodes branching out: "Age Restrictions," "Impaired
  Driving," "Possession," "Sale & Distribution"
- Four government-level nodes: "Federal," "State," "Local," "Tribal"
- Edges connecting each category to the government level(s) that typically
  regulate it

Connections: Category nodes connect to the government-level node(s) most
responsible for that rule type (e.g., "Impaired Driving" connects mainly to
"State"; "Sale & Distribution" connects to "State," "Local," and "Tribal").

Interactive features:
- Click any category node to open an infobox with a plain-language
  definition and one concrete example
- Click any government-level node to highlight all categories it regulates
- Hover over an edge to see a one-line explanation of that relationship
- Learner can drag nodes and zoom/pan the network

Visual style: Force-directed network graph, central node larger than
category nodes

Color scheme: Category nodes in teal, government-level nodes in gold,
highlighted neighborhood in orange on click

Implementation: vis-network JavaScript library
```

## Related Resources

- [Chapter 12: Substance Policy and Law](../../bands/grade-9-12/chapters/12-substance-policy-and-law/index.md)
