---
title: Stigma Reduction Action Network
description: Students explain how specific individual and community actions connect to reducing mental health stigma, and classify each action by the barrier it addresses.
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Stigma Reduction Action Network



<iframe src="main.html" width="100%" height="622px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md).

```text
Type: graph-model
**sim-id:** stigma-reduction-action-network<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, summarize

Learning objective: Students explain how specific individual and community actions connect to reducing mental health stigma, and classify each action by the barrier it addresses.

Node types: Central node "Reducing Mental Health Stigma" (teal circle). Action nodes (light blue squares): Accurate Respectful Language, Positive Accurate Media, Sharing Personal Stories, Normalizing Help-Seeking, Correcting Myths Kindly. Barrier nodes (gray diamonds): Careless Language, Harmful Stereotypes, Sense of Shame, Fear of Weakness, Misinformation.

Edge types: "Addresses" (solid green arrows from each action node to its matching barrier node). "Supports" (solid teal lines from each action node to the central node).

Layout: Central node in the middle, action nodes arranged in an inner ring, corresponding barrier nodes arranged in an outer ring aligned with their matching action.

Interactive features: Hover any node to see its label; click an action node to open an infobox explaining that action in one or two supportive sentences; click a barrier node to open an infobox explaining why that barrier makes seeking help harder; click the central node to reveal a summary statement that stigma reduction works through many small, combined actions rather than one single fix; zoom with mouse wheel, pan by dragging background.

Legend: Color/shape key distinguishing action nodes, barrier nodes, and the central goal node.

Implementation: vis-network JavaScript library; canvas responsive, default 800x500px.
```

## Related Resources

- [Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md)
