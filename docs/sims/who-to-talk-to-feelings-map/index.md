---
title: Who Can I Talk To About My Feelings?
description: Students identify trusted people they can talk to about hard feelings by exploring a support-network map centered on themselves.
status: scaffold
library: vis-network
bloom_level: Remember (L1)
---

# Who Can I Talk To About My Feelings?



<iframe src="main.html" width="100%" height="542px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Mental And Emotional Health](../../bands/grade-3/chapters/07-mental-and-emotional-health/index.md).

```text
Type: graph-model
**sim-id:** who-to-talk-to-feelings-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recall, recognize

Learning objective: Students identify trusted people they can talk to about hard feelings by exploring a support-network map centered on themselves.

Purpose: Reinforce that help for emotional struggles is close by, using the same hub-and-spoke pattern as the trusted-adult map from Chapter 2, now applied specifically to feelings.

Node types: Center node "Me" (soft yellow circle); trusted-person nodes (soft blue circles) connected to "Me" — Parent/Guardian, Teacher, School Counselor, School Nurse, Another Trusted Family Member, Close Friend.

Edge types: A line connecting "Me" to each trusted person, labeled with the kind of help offered (e.g., "Helps me think it through," "Knows calming strategies," "Listens without judging").

Layout: Radial/hub layout with "Me" in the center.

Interactive features: Click any trusted-person node to reveal an infobox naming who they are and an example thing to say to them. Click the center "Me" node to reveal: "You can talk to more than one person, more than once." Drag, zoom, and pan supported.

Visual styling: Warm palette, simple circle shapes, no realistic depictions of people.

Implementation: vis-network with click-to-reveal infobox panels.
```

## Related Resources

- [Chapter 7: Mental And Emotional Health](../../bands/grade-3/chapters/07-mental-and-emotional-health/index.md)
