---
title: Emergency Roles Network
description: Students explain how individual, peer, and school-staff actions work together to reduce risk during a school emergency.
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Emergency Roles Network



<iframe src="main.html" width="100%" height="542px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md).

```text
Type: graph-model
**sim-id:** emergency-roles-network<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize, distinguish

Learning objective: Students explain how individual, peer, and school-staff actions work together to reduce risk during a school emergency.

Purpose: Show three role categories each connected to specific emergency actions, feeding the shared goal of "Everyone Safe."

Node types: Central node "Everyone Safe" (green circle); three role nodes (orange circles): "Individual Actions," "Peer Actions," "School-Staff Actions"; each connects to 3-4 leaf nodes (e.g., Individual → "Follow drill procedures," "Move calmly"; Peer → "Help a scared classmate," "Report someone missing"; School Staff → "Take attendance," "Secure classrooms").

Edge types: Gray arrows from leaf nodes to their role node; green arrows from role nodes to "Everyone Safe."

Layout: Hierarchical, central node at bottom, role nodes in a middle row, leaf nodes above.

Interactive features: Hover any node for a description; click a role node to highlight its branch and dim others; click center to reset; zoom/pan enabled.

Visual styling: Green center node; orange role nodes; light-gray leaf nodes.

Legend: Green = shared goal; Orange = role category; Gray = specific action.

Implementation: vis-network with a fixed dataset (1 center + 3 roles + ~9 leaf nodes) and click/hover handlers. Canvas 650x450px, responsive.
```

## Related Resources

- [Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md)
