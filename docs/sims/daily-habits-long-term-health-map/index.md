---
title: Daily Habits and Long-Term Health Concept Map
description: Students analyze how five categories of everyday personal behavior connect to and build toward long-term health.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Daily Habits and Long-Term Health Concept Map



<iframe src="main.html" width="100%" height="522px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md).

```text
Type: graph-model
**sim-id:** daily-habits-long-term-health-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, organize, distinguish

Learning objective: Students analyze how five categories of everyday personal behavior connect to and build toward long-term health.

Purpose: Show five everyday behavior categories feeding into the central concept of long-term health, letting students explore each connection.

Node types: Central node "Long-Term Health" (large green circle, center); five supporting nodes (medium blue circles): "Sleep Habits", "Physical Activity", "Recognizing Symptoms Early", "Managing Chronic Conditions", "Hygiene and Safe Food Handling".

Edge types: Solid arrows from each supporting node pointing inward to "Long-Term Health", labeled "supports".

Layout: Radial/hub layout, central node fixed in the middle, five supporting nodes spaced evenly around it.

Interactive features: Hover any node for a one-sentence definition tooltip; click a supporting node to highlight its edge and show a daily-life example in a side panel; click the center node for a summary of all five behaviors; zoom with mouse wheel, pan by dragging background.

Visual styling: Central node green and larger; supporting nodes blue; "supports" edges gray with arrowheads pointing inward.

Legend: Green = combined outcome; Blue = contributing behavior category; Gray arrow = "supports" relationship.

Implementation: vis-network library with a fixed dataset (6 nodes, 5 edges) and click/hover handlers tied to a definitions object. Canvas 650x450px, responsive to container width.
```

## Related Resources

- [Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md)
