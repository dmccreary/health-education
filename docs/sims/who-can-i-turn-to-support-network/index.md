---
title: Who Can I Turn To Support Network
description: Students identify multiple concrete people and resources they can turn to, immediately, if they or a friend are at risk, reinforcing that help is always available and never limited to a single option.
status: scaffold
library: vis-network
bloom_level: Remember (L1)
---

# Who Can I Turn To Support Network



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md).

```text
Type: graph-model
**sim-id:** who-can-i-turn-to-support-network<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, list, recognize

Learning objective: Students identify multiple concrete people and resources they can turn to, immediately, if they or a friend are at risk, reinforcing that help is always available and never limited to a single option.

Node types: Central node "Me or a Friend Needs Help Now" (orange circle, high visual prominence). Support nodes (blue circles): Parent/Guardian, School Counselor, Teacher or Coach, Trusted Family Member or Knowledge Keeper, 988 Suicide and Crisis Lifeline (call or text).

Edge types: "Can Help Right Now" (thick solid lines from every support node to the central node, all styled identically to avoid implying any option is a lesser choice).

Layout: Central node in the middle, all five support nodes arranged evenly around it in a simple wheel layout.

Interactive features: Hover a support node to see its label; click a support node to open an infobox with one sentence on how to reach that support (e.g., clicking the 988 node reveals "Call or text 988. Available 24/7, free and confidential."); click the central node to reveal the message "There is always more than one way to get help, and reaching out is always the right choice."; zoom with mouse wheel, pan by dragging background.

Legend: Simple key noting all support nodes are equally valid first steps.

Implementation: vis-network JavaScript library; canvas responsive, default 800x500px. Contains no depiction of a crisis event — only the identification of help pathways.
```

## Related Resources

- [Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md)
