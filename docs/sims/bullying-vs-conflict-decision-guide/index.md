---
title: Bullying vs. Conflict Decision Guide
description: Students distinguish bullying from ordinary peer conflict by examining whether repetition and a power imbalance are present, and identify the appropriate response for each.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Bullying vs. Conflict Decision Guide



<iframe src="main.html" width="100%" height="602px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md).

```text
Type: workflow
**sim-id:** bullying-vs-conflict-decision-guide<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, differentiate, examine

Learning objective: Students distinguish bullying from ordinary peer conflict by examining whether repetition and a power imbalance are present, and identify the appropriate response for each.

Visual style: Mermaid flowchart with a start node, one decision diamond, and two labeled end paths.

Steps: (1) Start node "A Peer Situation Feels Hurtful," click reveals this is the starting point for evaluating any hurtful peer situation; (2) decision diamond "Is It Repeated, and Is There a Power Imbalance?" click reveals what a power imbalance can look like (size, social status, group vs. individual); (3a) branch "No" leads to "Likely Ordinary Conflict — Use Conflict-Resolution Skills," click reveals this connects to the communication and conflict-resolution skills from the previous chapter; (3b) branch "Yes" leads to "This Is Bullying — Tell a Trusted Adult," click reveals that bullying should always be reported, not handled alone; both paths lead to a shared end node "Situation Addressed Safely," click reveals that either path is about getting the right kind of help, not about handling everything alone.

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Blue for the start node, yellow for the decision diamond, green for both end paths and the shared final node.

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object.
```

## Related Resources

- [Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md)
