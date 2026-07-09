---
title: Substance Use Risk Connections Network
description: Students examine how impaired judgment from substance use connects to four distinct risk areas (injury, violence, self-harm, sexual health), while distinguishing each risk's specific mechanism and organizing every risk pathway toward the same protective response.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Substance Use Risk Connections Network



<iframe src="main.html" width="100%" height="582px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Substance Use Culture, Safety, and Risk](../../bands/grade-6-8/chapters/09-substance-use-culture-safety-and-risk/index.md).

```text
Type: graph-model
**sim-id:** substance-use-risk-connections-network<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, organize

Learning objective: Students examine how impaired judgment from substance use connects to four distinct risk areas (injury, violence, self-harm, sexual health), while distinguishing each risk's specific mechanism and organizing every risk pathway toward the same protective response.

Node types: Central node "Substance Use Impairs Judgment And Coordination" (gray hexagon). Four risk nodes (orange circles): Injury Risk, Violence Risk, Self-Harm Risk, Sexual Health Risk. One shared protective outcome node (green circle): "Trusted Adult / Help-Seeking Support."

Edge types: "Increases Risk Of" (solid orange arrows from the central node to each of the four risk nodes). "Protective Response" (solid green arrows from each risk node to the shared "Trusted Adult / Help-Seeking Support" node).

Layout: Central node in the middle, four risk nodes arranged around it, shared protective outcome node positioned prominently below, so every path visually terminates in the same support resource.

Interactive features: Hover any node for its label; click a risk node to open an infobox with two to three factual sentences (drawn directly from the chapter text) explaining that specific risk mechanism, calibrated to avoid graphic detail or normalizing statistics; click the central node for an infobox on how impaired judgment and coordination generally increase risk; click the protective outcome node for an infobox listing concrete help-seeking resources (trusted adult, school counselor, healthcare provider, crisis resource); zoom with mouse wheel, pan by dragging background.

Legend: Color/shape key distinguishing the central mechanism node, the four risk nodes, and the shared protective outcome node.

Implementation: vis-network JavaScript library; canvas responsive, default 800x500px. Content restriction: infobox text stays factual and non-graphic, and every risk node's infobox explicitly links back to the protective outcome node rather than presenting the risk in isolation.
```

## Related Resources

- [Chapter 9: Substance Use Culture, Safety, and Risk](../../bands/grade-6-8/chapters/09-substance-use-culture-safety-and-risk/index.md)
