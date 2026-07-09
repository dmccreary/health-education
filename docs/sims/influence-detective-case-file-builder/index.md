---
title: Influence Detective Case File Builder
description: Students apply the five identification strategies (trace the source, ask who benefits, notice repetition, separate influence from decision, check for multiple sources) by working through a step-by-step decision flow for a realistic scenario.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Influence Detective Case File Builder



<iframe src="main.html" width="100%" height="842px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md).

```text
Type: workflow
**sim-id:** influence-detective-case-file-builder<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, use, practice

Learning objective: Students apply the five identification strategies (trace the source, ask who benefits, notice repetition, separate influence from decision, check for multiple sources) by working through a step-by-step decision flow for a realistic scenario.

Purpose: Give students a repeatable, step-by-step process for identifying the influences behind a health decision.

Visual style: Mermaid flowchart with five sequential decision nodes, one per strategy, leading to a final "Decide Deliberately" node.

Steps (all nodes clickable):
1. "Where Did This Idea Come From?" — click reveals: "Trace the habit or belief back to family, friends, media, policy, or school."
2. "Who Benefits If I Choose This?" — click reveals: "Ask whether a company, a person, or a genuine health goal benefits from this choice."
3. "Have I Seen This Idea Many Times?" — click reveals: "Repetition can make an idea feel true regardless of evidence — notice it."
4. "Can I Separate The Influence From My Decision?" — click reveals: "Naming the influence out loud creates room to choose deliberately instead of automatically."
5. "Is More Than One Influence Present?" — click reveals: "Most real scenarios involve overlapping influences — check for more than one."
6. Final node "Decide Deliberately" — click reveals: "Now that the influences are visible, you can weigh them and choose on purpose."

Interactive features: Every node has a `click` directive opening an infobox with the strategy explanation; a text box above the diagram presents one realistic scenario (e.g., a friend group encouraging skipping a workout while an ad promotes an energy drink) that the learner can mentally apply to each step.

Color coding: Each strategy node in a distinct pastel color; final decision node in green.

Implementation: Mermaid flowchart with click handlers mapped to a JavaScript infobox callback function for each node.
```

## Related Resources

- [Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md)
