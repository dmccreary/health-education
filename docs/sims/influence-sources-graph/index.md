---
title: Family, School, and Media Influence Map
description: Students explain how family, school, and media each influence health practices and behaviors, and compare how each source sends its message.
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Family, School, and Media Influence Map



<iframe src="main.html" width="100%" height="542px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md).

```text
Type: graph-model
**sim-id:** influence-sources-graph<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, compare, classify

Learning objective: Students explain how family, school, and media each influence health practices and behaviors, and compare how each source sends its message.

Node types:
1. Center node "My Health Choices" (large gold circle)
2. Source nodes (three medium circles): "Family" (green), "School" (blue), "Media/Technology" (orange)
3. Example nodes (small squares, several per source): under Family -- "Bedtime routine," "Meals at home"; under School -- "Handwashing rule," "Recess time"; under Media -- "Cereal commercial," "App reminder"

Edge types:
1. SHAPES (arrow from each source node to "My Health Choices") -- hover shows "This source influences health choices through everyday routines and messages"
2. EXAMPLE_OF (line from each example node to its source node) -- hover shows a one-sentence description of that specific example

Layout: Hierarchical, with "My Health Choices" in the center and the three sources arranged around it, examples branching outward from each source

Interactive features:
- Hover any node: show its short definition in a side panel
- Click a source node: highlight only that source and its examples, dim the rest
- Click an example node: infobox explains how that example influences behavior
- Zoom with mouse wheel, pan by dragging background

Visual styling:
- Family = green, School = blue, Media/Technology = orange, matching the color key used elsewhere in this chapter
- Center node larger than source nodes; source nodes larger than example nodes

Legend: Color key explaining Family/School/Media colors and an icon key for the two edge types

Implementation: vis-network JavaScript library, canvas size responsive, default 700x450px
```

## Related Resources

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
