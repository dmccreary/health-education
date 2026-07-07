---
title: Community-Based Sexual Health Program Types
description: Students classify four types of community-based
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Community-Based Sexual Health Program Types



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md).

```text
Type: graph-model

**sim-id:** community-sexual-health-programs-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: classify, exemplify, summarize

Learning objective: Students classify four types of community-based
sexual health programs and exemplify how each lowers a barrier to care
compared to a standalone clinical visit.

Node types:
1. Central node: "Community-Based Sexual Health Programs" (blue circle)
2. Program-type nodes (green squares): School-Based Health Centers,
   Community Health Clinics, Peer Education Programs, Public Health
   Department Initiatives

Edge types:
- "Includes" (solid arrows from central node to each program-type node)

Layout: Radial, central node in the middle, program-type nodes surrounding
it

Interactive features:
- Hover a program-type node: shows a one-sentence definition
- Click a program-type node: opens a side panel with a concrete example
  and explains which access barrier (cost, stigma, awareness, location)
  it most directly reduces
- Drag, zoom, and pan enabled

Legend: color key distinguishing the central node from program-type nodes

Implementation: vis-network, radial layout, click-triggered side panel
content stored in a JSON lookup keyed by node id
```

## Related Resources

- [Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md)
