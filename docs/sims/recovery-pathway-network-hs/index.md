---
title: Recovery Pathway Network
description: Examine how the five treatment and recovery approaches
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Recovery Pathway Network



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md).

```text
Type: graph-model

**sim-id:** recovery-pathway-network-hs<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, organize, distinguish

Learning objective: Examine how the five treatment and recovery approaches
connect to and reinforce a shared recovery outcome, distinguishing when
each is typically used.

Node types: Central node (green circle) "Sustained Recovery"; five
approach nodes (blue rectangles) — Medically Supervised Withdrawal
Management, Medication-Assisted Treatment, Counseling And Behavioral
Therapy, Support Groups And Peer Recovery, Inpatient Or Outpatient
Programs; two context nodes (gold circles) — "Relapse Is Common — Not
Failure" and "Recovery Is a Realistic, Documented Outcome."

Edge types: "Supports" (solid green, approach nodes to center);
"Reinforces" (dashed gold, context nodes to center).

Layout: Force-directed, central node in the middle, approach nodes evenly
distributed around it.

Interactive features: Hover any node for a one-sentence description;
click an approach node for a two-to-three sentence infobox on what it
involves and when it is used; click a context node to reinforce the
relapse/recovery framing; drag, zoom, and pan enabled.

Implementation: vis-network force-directed layout; node/edge data in a
structured lookup object. No node names a specific medication, dosage, or
clinical protocol — only documented treatment categories.
```

## Related Resources

- [Chapter 11: Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md)
