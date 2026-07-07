---
title: Stigma Mechanism and Reduction Strategy Map
description: Students examine how the mechanisms of stigma
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Stigma Mechanism and Reduction Strategy Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md).

```text
Type: graph-model

**sim-id:** stigma-mechanism-reduction-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, differentiate, organize

Learning objective: Students examine how the mechanisms of stigma
(stereotyping, prejudice, discrimination, self-stigma) connect to specific
evidence-based reduction strategies, and organize which strategy most
directly counters which mechanism.

Node types:
1. Central node: "Mental Health Stigma" (red circle)
2. Mechanism nodes (orange squares): Stereotyping, Prejudice,
   Discrimination, Self-Stigma
3. Strategy nodes (green circles): Accurate Education, Contact-Based
   Approaches, Person-First Language, Policy and Institutional Change
4. Outcome node (blue diamond): "Increased Willingness to Seek Treatment"

Edge types:
- "Produces" (arrows from central node to each mechanism node)
- "Counters" (arrows from each strategy node to the mechanism node it most
  directly addresses — e.g., Contact-Based Approaches counters Prejudice;
  Accurate Education counters Stereotyping)
- "Leads To" (arrow from the reduced-stigma state to the outcome node)

Layout: Hierarchical, stigma at top, mechanisms in the middle, strategies
and the outcome at the bottom

Interactive features:
- Hover any node: shows a one-sentence definition
- Click a mechanism node: opens a panel with a concrete, realistic example
  of that mechanism in a school or community setting
- Click a strategy node: opens a panel explaining the evidence behind why
  that strategy works and which mechanism it counters
- Drag, zoom, and pan enabled

Legend: color/shape key for stigma, mechanisms, strategies, and outcome

Implementation: vis-network, hierarchical layout, click-triggered side
panel content stored in a JSON lookup keyed by node id
```

## Related Resources

- [Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md)
