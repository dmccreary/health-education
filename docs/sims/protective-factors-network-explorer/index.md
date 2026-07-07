---
title: Protective Factors Network Explorer
description: Students examine how multiple cultural and community protective factors connect to and reinforce a young person's resilience against substance use, organizing the relationships between distinct protective factors and outcomes.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Protective Factors Network Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md).

```text
Type: graph-model
**sim-id:** protective-factors-network-explorer<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, organize, distinguish

Learning objective: Students examine how multiple cultural and community protective factors connect to and reinforce a young person's resilience against substance use, organizing the relationships between distinct protective factors and outcomes.

Node types: Central node "A Young Person" (green circle). Protective factor nodes (blue squares): Cultural Connectedness, Traditional/Ceremonial Practices, Family And Community Expectations, Cultural Identity And Pride, Connection To Elders And Knowledge Keepers, Connection To Nature And Land-Based Practices. Outcome node (gold circle): "Lower Likelihood Of Substance Use Problems," connected from every protective factor node.

Edge types: "Supports" (solid green arrows from each protective factor node to the central "A Young Person" node). "Contributes To" (solid gold arrows from the central node to the outcome node).

Layout: Central "A Young Person" node in the middle, six protective factor nodes arranged around it in a ring, shared outcome node positioned prominently below or beside the ring.

Interactive features: Hover any node to see its label; click a protective factor node to open an infobox with two to three sentences describing the practice and citing that research (e.g., Indigenous youth health research) links it to lower substance-use rates; click the central node to open an infobox summarizing that these factors work together rather than in isolation; click the outcome node to open an infobox explaining that protective factors reduce risk but this is about community support and healthy connection, not any specific individual guarantee; zoom with mouse wheel, pan by dragging background.

Legend: Color/shape key distinguishing the central node, protective factors, and the shared outcome.

Implementation: vis-network JavaScript library; canvas responsive, default 800x500px. Content note: all protective-factor descriptions are affirming and specific, avoiding generic or token references to culture.
```

## Related Resources

- [Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md)
