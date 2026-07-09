---
title: Supports and Barriers Planning Map
description: Students organize example supports and barriers around a sample health goal, distinguishing which category each item belongs to and connecting each barrier to a planned response.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Supports and Barriers Planning Map



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Health Literacy and Goal Setting](../../bands/grade-4/chapters/06-health-literacy-and-goals/index.md).

```text
Type: graph-model
**sim-id:** supports-and-barriers-planning-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: organize, examine, distinguish

Learning objective: Students organize example supports and barriers around a sample health goal, distinguishing which category each item belongs to and connecting each barrier to a planned response.

Purpose: Show a sample health goal surrounded by its supports, barriers, and barrier-response plans as a connected network students can explore

Node types:
1. Central node: the sample goal, "Walk to school 3 days this week" (large box)
2. Support nodes (green circles): "Walking buddy," "Comfortable shoes," "Parent's approved route," "Morning reminder chart"
3. Barrier nodes (red circles): "Rainy weather," "Forgetting in week one," "No walking buddy available that day"
4. Response nodes (blue circles, connected only to their matching barrier): "Do a 10-minute indoor movement video," "Set a phone reminder the night before," "Walk with a different neighbor or sibling instead"

Edge types:
- "Helps reach" edges (solid green) connecting support nodes to the central goal
- "Threatens" edges (solid red) connecting barrier nodes to the central goal
- "Planned response" edges (dashed blue) connecting each barrier node to its specific response node

Layout: Force-directed with the goal node fixed at the center

Interactive features:
- Hover any node to see its full description
- Click a barrier node to highlight its connected response node and dim unrelated nodes
- Click the central goal node to reset the full view
- Drag nodes to rearrange; zoom with mouse wheel; pan by dragging background

Visual styling:
- Central node: neutral gray box, larger than other nodes
- Support nodes: green, sized equally
- Barrier nodes: red, sized equally
- Response nodes: blue, connected only via dashed lines to their barrier

Legend: Small panel explaining node colors (Goal, Support, Barrier, Planned Response)

Responsive behavior: Graph auto-fits to container width on load and window resize

Implementation: vis-network library with force-directed physics enabled and a click event listener that adjusts node/edge opacity to spotlight a selected barrier-response pair.
```

## Related Resources

- [Chapter 6: Health Literacy and Goal Setting](../../bands/grade-4/chapters/06-health-literacy-and-goals/index.md)
