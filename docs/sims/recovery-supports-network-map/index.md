---
title: Recovery Supports Network Map
description: Students examine how clinical treatment and community/cultural recovery supports connect and reinforce each other, organizing the relationship between distinct support types and a shared recovery outcome.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Recovery Supports Network Map



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md).

```text
Type: graph-model
**sim-id:** recovery-supports-network-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: organize, examine, distinguish

Learning objective: Students examine how clinical treatment and community/cultural recovery supports connect and reinforce each other, organizing the relationship between distinct support types and a shared recovery outcome.

Node types: Central node "A Person In Recovery" (green circle). Support nodes (blue squares): Peer Support Groups, Indigenous And Cultural Healing Practices, Family-Based Support, Faith And Community Organizations, Clinical Treatment (linking back to the Treatment Pathway Explorer content). Outcome node (gold circle): "Stronger, Lasting Recovery."

Edge types: "Supports" (solid green arrows from each support node to the central "A Person In Recovery" node). "Contributes To" (solid gold arrows from the central node to the outcome node).

Layout: Central node in the middle, five support nodes arranged around it in a ring, shared outcome node positioned prominently below.

Interactive features: Hover any node for its label; click a support node to open an infobox with two to three factual, hopeful sentences describing that support type and its documented role in recovery; click the central node for an infobox noting that most people combine more than one support type; click the outcome node for an infobox affirming that recovery is a realistic, achievable outcome; zoom with mouse wheel, pan by dragging background.

Legend: Color/shape key distinguishing the central node, support types, and the outcome node.

Implementation: vis-network JavaScript library; canvas responsive, default 800x500px. Content note: every support-type description is specific and affirming, avoiding generic or token references to culture or faith.
```

## Related Resources

- [Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md)
