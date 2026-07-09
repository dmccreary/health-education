---
title: Healthcare Access Barrier-Reduction Workflow
description: Students apply barrier-reduction strategies by tracing which strategy addresses a given barrier, moving from an identified obstacle to a concrete next step.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Healthcare Access Barrier-Reduction Workflow



<iframe src="main.html" width="100%" height="506px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md).

```text
Type: workflow
**sim-id:** healthcare-barrier-reduction-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, apply

Learning objective: Students apply barrier-reduction strategies by tracing which strategy addresses a given barrier, moving from an identified obstacle to a concrete next step.

Visual style: Mermaid flowchart with a start node, a decision diamond, and multiple strategy branches converging on one end node

Steps: (1) Start node "A Health Question or Need Arises," click reveals this is the starting point for any student; (2) decision diamond "What's Getting in the Way?", click reveals naming the specific barrier is the first step toward addressing it; (3) branch nodes: "Cost/Transportation" → click reveals "use school health services or ask a trusted adult for logistics help"; "Fear/Stigma" → click reveals "practice naming the need out loud, or start with a confidential service"; "Not Knowing Where to Start" → click reveals "learn your rights and identify a community clinic in advance"; (4) shared end node "Care Is Accessed," click reveals that combining strategies is often more effective than relying on just one.

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Blue for start/decision nodes, orange for barrier-specific branches, green for the shared end node

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object.
```

## Related Resources

- [Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md)
