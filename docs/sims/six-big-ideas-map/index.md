---
title: Six Big Ideas Concept Map
description: Students identify each of the six root words for this chapter (Health, Trusted Adult, Permission, Safe Behavior, Influence, Communication) and recognize that Health is the central idea connecting the other five.
status: scaffold
library: vis-network
bloom_level: Remember (L1)
---

# Six Big Ideas Concept Map



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md).

```text
Type: graph-model
**sim-id:** six-big-ideas-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, name, recognize

Learning objective: Students identify each of the six root words for this chapter (Health, Trusted Adult, Permission, Safe Behavior, Influence, Communication) and recognize that Health is the central idea connecting the other five.

Purpose: Show Health as a hub node connected to the five supporting ideas, so students see the chapter's whole shape before studying each part.

Node types:
1. Health (center, large yellow circle)
   - Property: "The big idea — how well your body and mind are working and feeling"
2. Trusted Adult, Permission, Safe Behavior, Influence, Communication (five smaller circles around Health, each a different color: blue, green, orange, purple, teal)
   - Property: one child-friendly definition sentence per node (matching the table above)

Edge types:
1. CONNECTS_TO (thick gray lines from Health to each of the five outer nodes)
   - No arrowheads needed; represents "is part of," not direction

Layout: Hierarchical/radial with Health in the center and the five ideas arranged evenly around it like a flower.

Interactive features:
- Hover any node: node glows and a caption appears below the graph with that word's one-sentence meaning, read aloud by the teacher
- Click any outer node: the connecting edge to Health highlights in yellow, reinforcing "this idea is part of being healthy"
- Drag nodes: children can rearrange the circles; they snap gently back into a tidy layout after a few seconds
- Zoom: mouse wheel or pinch; Pan: click-and-drag background

Visual styling: Large circular nodes (at least 80px) with big friendly icons (a heart for Health, a handshake for Trusted Adult, a raised hand for Permission, a shield for Safe Behavior, an arrow for Influence, two speech bubbles for Communication). Simple sans-serif labels in large text.

Legend: A small key below the canvas listing each color and its word.

Implementation: vis-network with a fixed hierarchical/radial layout option (not free-floating physics) so the shape stays readable for young students; canvas size approximately 700x450px, responsive to container width.
```

## Related Resources

- [Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md)
