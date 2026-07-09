---
title: Norms And Policy Interaction Map
description: Students examine and organize how public health policy and social norms interact to influence four real health issues (tobacco use, seatbelt use, handwashing, vaccination), comparing the two types of influence side by side.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Norms And Policy Interaction Map



<iframe src="main.html" width="100%" height="542px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md).

```text
Type: graph-model
**sim-id:** norms-and-policy-interaction-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: organize, examine, compare

Learning objective: Students examine and organize how public health policy and social norms interact to influence four real health issues (tobacco use, seatbelt use, handwashing, vaccination), comparing the two types of influence side by side.

Node types: Four central issue nodes (gold circles): Tobacco Use, Seatbelt Use, Handwashing, Vaccination. Two influence-type nodes per issue (connected as neighbors): a blue square "Social Norm" node and an orange square "Public Health Policy" node.

Edge types: "Shapes" (solid arrows from each Social Norm or Public Health Policy node to its issue node). "Reinforces" (dashed arrow connecting each issue's Social Norm node to its Public Health Policy node, showing they influence each other over time).

Layout: Force-directed, four clusters (one per health issue), each cluster showing its norm and policy nodes.

Interactive features: Hover any node for its label; click an issue node to open an infobox summarizing both influences on that issue; click a Social Norm or Public Health Policy node for a specific one-to-two sentence example from the chapter; zoom with mouse wheel, pan by dragging background.

Legend: Color/shape key distinguishing issue nodes, norm nodes, and policy nodes.

Implementation: vis-network JavaScript library; responsive canvas, default 800x500px.
```

## Related Resources

- [Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md)
