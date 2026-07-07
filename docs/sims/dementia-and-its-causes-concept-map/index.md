---
title: Dementia and Its Causes Concept Map
description: Students explain the relationship between dementia as a general category and Alzheimer's disease as its most common specific cause, and connect brain-healthy habits to long-term brain health.
status: scaffold
library: vis-network
bloom_level: Understand (L2)
---

# Dementia and Its Causes Concept Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md).

```text
Type: graph-model
**sim-id:** dementia-and-its-causes-concept-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, summarize

Learning objective: Students explain the relationship between dementia as a general category and Alzheimer's disease as its most common specific cause, and connect brain-healthy habits to long-term brain health.

Node types: Central node "Dementia (General Pattern of Symptoms)" (purple circle). Cause nodes (blue squares): Alzheimer's Disease (largest, most prominent), Vascular Conditions, Other Brain Diseases. Supporting habit nodes (green circles): Quality Sleep, Balanced Nutrition, Physical Activity, Social Connection, Mental Engagement.

Edge types: "Is a Cause Of" (solid blue arrows from each cause node to the central Dementia node). "May Support Long-Term Brain Health" (dashed green arrows from each habit node to the central Dementia node, styled differently to show this is supportive, not a guarantee or cure).

Layout: Central node in the middle, cause nodes arranged above it, habit nodes arranged below it, visually separating "what causes it" from "what may support brain health."

Interactive features: Hover any node to see its label; click a cause node to open an infobox with a short, factual, non-frightening description; click a habit node to open an infobox connecting that habit to brain health, worded carefully to avoid overpromising prevention; click the central node to reveal a summary reminding students that dementia is common in older age but not a normal or required part of aging, and that people living with dementia deserve the same dignity and respect as anyone else; zoom with mouse wheel, pan by dragging background.

Legend: Color/shape key distinguishing the central term, its causes, and supportive habits.

Implementation: vis-network JavaScript library; canvas responsive, default 800x500px. Language throughout the infobox text avoids fear-based framing and does not claim any habit prevents dementia.
```

## Related Resources

- [Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md)
