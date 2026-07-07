---
title: Cultural Wellbeing Practices Concept Map
description: Students explain how distinct cultural teachings and
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Cultural Wellbeing Practices Concept Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md).

```text
Type: graph-model

**sim-id:** cultural-wellbeing-practices-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: explain, exemplify, classify

Learning objective: Students explain how distinct cultural teachings and
practices support wellbeing, and classify concrete examples under the
correct category of cultural wellbeing practice.

Node types:
1. Central node: "Cultural Teachings for Wellbeing" (blue circle)
2. Category nodes (green squares): Connection to Land and Community,
   Storytelling, Spiritual and Ceremonial Practices, Extended Family and
   Community Support
3. Example nodes (light circles), 2-3 per category, drawn from the
   chapter text (e.g., under Storytelling: "Teaching stories about
   resilience passed across generations")

Edge types:
- "Supports Wellbeing Through" (arrows from central node to each category)
- "Example" (arrows from each category to its example nodes)

Layout: Radial, central node in the middle, categories surrounding it,
examples one ring further out

Interactive features:
- Hover any node: shows a one-sentence description
- Click a category node: opens a panel explaining that category's
  approach to wellbeing in respectful, specific terms
- Click an example node: opens a panel with the concrete example and
  which category it belongs to
- Drag, zoom, and pan enabled

Legend: color/shape key for the central node, categories, and examples

Implementation: vis-network, radial layout, click-triggered side panel
content stored in a JSON lookup keyed by node id
```

## Related Resources

- [Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md)
