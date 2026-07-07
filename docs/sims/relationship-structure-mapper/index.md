---
title: Mapping Your Relationship Structures
description: Students classify a set of example people into
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Mapping Your Relationship Structures



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Relationships and Respect](../../bands/grade-9-12/chapters/02-relationships-and-respect/index.md).

```text
Type: graph-model

**sim-id:** relationship-structure-mapper<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: classify, exemplify

Learning objective: Students classify a set of example people into
relationship-structure categories (friendship, chosen family, biological
family, blended family, dating, committed partnership) and see how one
person can sit inside several structures at once.

Node types:
1. Central "You" node (gold circle, fixed position)
2. Relationship nodes (colored by category: blue = friendship, green =
   family, purple = romantic, orange = chosen family/mentor)

Edge types:
- Solid edge: currently active relationship
- Dashed edge: distant or infrequent-contact relationship, still real

Sample data: 10 example relationship nodes (a best friend, a sibling, a
step-parent, a grandparent raising the student, a dating partner, a
same-sex partner example, a coach acting as mentor, an online friend, a
cousin, a family friend treated as "chosen family")

Layout: Force-directed, "You" node fixed at center

Interactive features:
- Hover a node: shows a short definition of that relationship category
- Click a node: opens a side panel with a one-paragraph description of
  that structure and why it counts as a legitimate relationship
- Drag: nodes can be repositioned; layout re-settles
- Zoom/pan enabled

Legend: color key for the four category colors, line-style key for
active vs. distant relationships

Implementation: vis-network with a fixed center node and physics-enabled
child nodes
```

## Related Resources

- [Chapter 2: Relationships and Respect](../../bands/grade-9-12/chapters/02-relationships-and-respect/index.md)
