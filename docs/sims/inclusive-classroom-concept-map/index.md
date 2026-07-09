---
title: Building an Inclusive Classroom Concept Map
description: Students analyze how equity, belonging, including and supporting others, and ability-inclusive kindness relate to and build toward an inclusive environment.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Building an Inclusive Classroom Concept Map



<iframe src="main.html" width="100%" height="502px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md).

```text
Type: graph-model
**sim-id:** inclusive-classroom-concept-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, organize

Learning objective: Students analyze how equity, belonging, including and supporting others, and ability-inclusive kindness relate to and build toward an inclusive environment.

Purpose: Show the four supporting concepts feeding into the central concept of an inclusive environment, and let students explore how each one contributes.

Node types:
1. Central node: "Inclusive Environment" (large green circle, center)
2. Supporting nodes (four medium blue circles arranged around the center): "Equity", "Belonging", "Including and Supporting Others", "Ability-Inclusive Kindness"

Edge types:
- Solid arrows from each supporting node pointing inward to "Inclusive Environment", labeled "builds toward"

Sample data:
- Equity → builds toward → Inclusive Environment
- Belonging → builds toward → Inclusive Environment
- Including and Supporting Others → builds toward → Inclusive Environment
- Ability-Inclusive Kindness → builds toward → Inclusive Environment

Layout: Radial/hub layout with the central node fixed in the middle and the four supporting nodes spaced evenly around it

Interactive features:
- Hover over any node: show a one-sentence definition in a tooltip
- Click a supporting node: highlight its edge to the center and display a short real-world example in a side panel
- Click the center node: display a summary combining all four supporting ideas
- Zoom: mouse wheel; Pan: click and drag background

Visual styling:
- Central node in green, supporting nodes in blue, "builds toward" edges in gray with arrowheads pointing to the center
- Node size for the central node larger than the four supporting nodes to show its role as the combined outcome

Legend:
- Green = combined outcome; Blue = contributing concept; Gray arrow = "builds toward" relationship

Implementation: vis-network JavaScript library with a small fixed dataset (5 nodes, 4 edges) and click/hover event handlers tied to a definitions object
Canvas size: 650x450px, responsive to container width
```

## Related Resources

- [Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md)
