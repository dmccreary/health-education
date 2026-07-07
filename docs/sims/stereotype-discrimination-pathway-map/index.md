---
title: Stereotype-to-Discrimination Pathway Map
description: Students examine how stereotypes lead to prejudice and
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Stereotype-to-Discrimination Pathway Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md).

```text
Type: graph-model

**sim-id:** stereotype-discrimination-pathway-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, differentiate, distinguish

Learning objective: Students examine how stereotypes lead to prejudice and
discrimination, and distinguish individual discrimination from systemic
discrimination, along with the intervention that most directly addresses
each.

Node types:
1. Starting node: "Stereotype (Oversimplified Group Belief)" (orange
   circle)
2. Intermediate node: "Prejudice (Negative Attitude Based on Stereotype)"
   (orange circle)
3. Outcome nodes (red squares): "Individual Discrimination," "Systemic
   (Institutional) Discrimination"
4. Intervention nodes (green circles): Interrupting Stereotypes Directly,
   Genuine Contact and Accurate Information, Examining Policies for
   Systemic Bias, Supporting People Who Experience Discrimination

Edge types:
- "Leads To" (Stereotype → Prejudice → both Discrimination outcome nodes)
- "Most Directly Addresses" (arrows from each intervention node to the
  outcome node it targets most — e.g., Examining Policies for Systemic
  Bias → Systemic Discrimination; Genuine Contact → Individual
  Discrimination and the underlying Stereotype node)

Layout: Hierarchical, left to right, following the causal pathway from
stereotype to outcome to intervention

Interactive features:
- Hover any node: shows a one-sentence definition
- Click "Individual Discrimination" or "Systemic (Institutional)
  Discrimination": opens a panel with a concrete, realistic school-based
  example distinguishing the two
- Click an intervention node: opens a panel explaining why that
  intervention works and which part of the pathway it interrupts
- Drag, zoom, and pan enabled

Legend: color/shape key for stereotype/prejudice nodes, discrimination
outcomes, and interventions

Implementation: vis-network, hierarchical layout, click-triggered side
panel content stored in a JSON lookup keyed by node id
```

## Related Resources

- [Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md)
