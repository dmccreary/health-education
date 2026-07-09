---
title: Mental Health Treatment Pathway Map
description: Students examine how different treatment options
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Mental Health Treatment Pathway Map



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md).

```text
Type: graph-model

**sim-id:** mental-health-treatment-pathway-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, organize, differentiate

Learning objective: Students examine how different treatment options
(therapy types, medication, school-based support, community resources)
relate to one another and organize which combination best fits a given
scenario's needs and access constraints.

Node types:
1. Central node: "Person Seeking Mental Health Support" (blue circle)
2. Treatment-category nodes (green squares): Talk Therapy, Medication,
   School-Based Support, Community/Telehealth Resources
3. Sub-nodes under Talk Therapy (light green circles): CBT, Interpersonal
   Therapy, Group Therapy
4. Access-point node (gold diamond): "988 Suicide & Crisis Lifeline —
   Immediate Support"

Edge types:
- "Can Access" (solid arrows from central node to each treatment-category
  node and the access-point node)
- "Includes" (solid arrows from Talk Therapy to each therapy sub-node)

Layout: Radial, central node in the middle, treatment categories
surrounding it, sub-nodes one ring further out

Interactive features:
- Hover any node: shows a one-sentence definition
- Click a treatment-category node: opens a side panel describing what it
  involves, who provides it, and a realistic access barrier and how to
  address it
- Click the 988 node: opens a panel emphasizing it is free, confidential,
  available 24/7, and appropriate for both crisis and non-crisis support
  questions
- Drag, zoom, and pan enabled

Legend: color/shape key for central node, treatment categories,
sub-options, and the crisis-access node

Implementation: vis-network, radial layout, click-triggered side panel
content stored in a JSON lookup keyed by node id
```

## Related Resources

- [Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md)
