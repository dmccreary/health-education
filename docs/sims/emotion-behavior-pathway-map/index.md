---
title: Emotion-to-Behavior Pathway Map
description: Students analyze how a single emotion can branch into either a helpful or unhelpful behavior, distinguishing between the feeling itself and the choice made in response to it.
status: scaffold
library: vis-network
bloom_level: Analyze (L4)
---

# Emotion-to-Behavior Pathway Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Mental and Emotional Health](../../bands/grade-4/chapters/03-mental-emotional-health/index.md).

```text
Type: graph-model
**sim-id:** emotion-behavior-pathway-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, differentiate, distinguish

Learning objective: Students analyze how a single emotion can branch into either a helpful or unhelpful behavior, distinguishing between the feeling itself and the choice made in response to it.

Purpose: Show that emotions are not "good" or "bad," but the behaviors that follow them can be more or less helpful, and that a person can choose which path to take.

Node types:
1. Emotion nodes (circle, gold): Frustration, Excitement, Fear, Sadness, Embarrassment
2. Behavior nodes (square): each emotion connects to one helpful behavior (green square) and one unhelpful behavior (gray square)

Edge types:
- LEADS TO (arrow from emotion to behavior), labeled with a short connecting phrase

Sample data:
- Frustration → LEADS TO → "Ask a trusted adult for help" (helpful, green) or "Slam materials down" (unhelpful, gray)
- Excitement → LEADS TO → "Channel energy into the activity" (helpful) or "Interrupt others without noticing" (unhelpful)
- Fear → LEADS TO → "Tell someone what is scary" (helpful) or "Avoid the situation without explaining why" (unhelpful)
- Sadness → LEADS TO → "Talk to a friend or trusted adult" (helpful) or "Withdraw from everyone silently" (unhelpful)
- Embarrassment → LEADS TO → "Laugh it off and move on" (helpful) or "Snap at whoever is nearby" (unhelpful)

Layout: Force-directed, with emotion nodes in a center column and behavior nodes branching left (unhelpful) and right (helpful)

Interactive features:
- Hover an emotion node: highlights both of its behavior branches
- Click a behavior node: opens an infobox explaining why that behavior is helpful or unhelpful, and what a self-regulation strategy from earlier in the chapter could do at that moment
- Drag, zoom, and pan supported

Visual styling: Green nodes for helpful behaviors, neutral gray for unhelpful behaviors, gold for emotions; edge labels describe the link (e.g., "can lead to")

Legend: Node shape/color key explaining emotion vs. helpful behavior vs. unhelpful behavior

Implementation: vis-network JavaScript library, force-directed layout, click-to-open side panel
Canvas size: responsive, minimum 700x450px
```

## Related Resources

- [Chapter 3: Mental and Emotional Health](../../bands/grade-4/chapters/03-mental-emotional-health/index.md)
