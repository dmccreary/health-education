---
title: Healthcare Access Barriers Concept Map
description: Students analyze how distinct barriers to healthcare access (cost, transportation, fear, stigma, lack of awareness of rights) can combine and reinforce each other for a given adolescent.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Healthcare Access Barriers Concept Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md).

```text
Type: graph-model
**sim-id:** healthcare-access-barriers-concept-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, differentiate, organize

Learning objective: Students analyze how distinct barriers to healthcare access (cost, transportation, fear, stigma, lack of awareness of rights) can combine and reinforce each other for a given adolescent.

Node types:
1. Central node: "Adolescent Seeking Care" (blue circle)
2. Barrier nodes (orange squares): Cost, Transportation, Fear/Embarrassment, Stigma, Lack of Awareness of Rights
3. Context node (gray diamond): "Community/Cultural Variation" connected to all barrier nodes

Edge types:
1. "Can Block Access" (solid black arrows from each barrier node to the central node)
2. "Shaped By" (dashed gray arrows from Community/Cultural Variation to each barrier node)

Layout: Hierarchical, central node in the middle, barrier nodes surrounding it, context node beneath

Interactive features: Hover a node to see its label; click a barrier node to open an infobox with a concrete example of how that barrier shows up; click the central node to show a summary noting that barriers often combine rather than occurring one at a time; zoom with mouse wheel, pan by dragging background

Legend: Node shape/color key explaining central, barrier, and context nodes

Implementation: vis-network JavaScript library; canvas size responsive, default 800x500px
```

## Related Resources

- [Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md)
