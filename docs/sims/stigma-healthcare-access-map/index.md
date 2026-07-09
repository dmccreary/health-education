---
title: How Stigma Blocks Healthcare-Seeking
description: Students examine how four levels of stigma
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# How Stigma Blocks Healthcare-Seeking



<iframe src="main.html" width="100%" height="602px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md).

```text
Type: graph-model

**sim-id:** stigma-healthcare-access-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, differentiate, organize

Learning objective: Students examine how four levels of stigma
(internalized, interpersonal, community/cultural, institutional) can
independently or jointly block healthcare-seeking, and analyze the
resulting public-health consequence.

Node types:
1. Central node: "Person With a Health Question" (blue circle)
2. Stigma-level nodes (orange squares): Internalized Stigma, Interpersonal
   Stigma, Community/Cultural Stigma, Institutional Stigma
3. Outcome node (red diamond): "Delayed or Avoided Care"
4. Consequence node (gray hexagon): "Undetected Health Complications and
   Continued Transmission Risk"

Edge types:
- "Can Discourage Seeking Care" (solid black arrows from each stigma-level
  node to the central node)
- "Leads To" (solid arrow from central node to "Delayed or Avoided Care")
- "Results In" (solid arrow from "Delayed or Avoided Care" to the
  consequence node)

Layout: Hierarchical, stigma-level nodes at top, central node in middle,
outcome and consequence nodes at bottom

Interactive features:
- Hover a stigma-level node: shows its definition
- Click a stigma-level node: opens a side panel with a concrete example of
  how that level of stigma shows up in a real scenario
- Click the outcome or consequence node: opens a panel explaining the
  public-health reasoning connecting delayed care to worse health outcomes
- Drag, zoom, and pan enabled

Legend: color key for stigma-level, outcome, and consequence node types

Implementation: vis-network, hierarchical layout, click-triggered side
panel content stored in a JSON lookup keyed by node id
```

## Related Resources

- [Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md)
