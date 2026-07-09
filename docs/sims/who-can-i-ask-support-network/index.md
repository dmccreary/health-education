---
title: Who Can I Ask?
description: Students identify trusted adults and practice using the skill of asking for help with body changes by exploring a support-network map centered on themselves.
status: scaffold
library: vis-network
bloom_level: Apply (L3)
---

# Who Can I Ask?



<iframe src="main.html" width="100%" height="502px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Growth And Puberty](../../bands/grade-3/chapters/06-growth-and-puberty/index.md).

```text
Type: graph-model
**sim-id:** who-can-i-ask-support-network<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, identify, demonstrate

Learning objective: Students identify trusted adults and practice using the skill of asking for help with body changes by exploring a support-network map centered on themselves.

Purpose: Show students a visual "map" of the trusted adults available to them for body-change questions, reinforcing that help is close by and that asking is always the right move.

Node types:
1. Center node: "Me" (soft yellow circle)
2. Trusted adult nodes (soft blue circles) connected directly to "Me": Parent/Guardian, School Nurse, Teacher, Counselor, Doctor, Another Trusted Family Member

Edge types:
- Single line connecting "Me" to each trusted adult, labeled with how that adult can help (e.g., "Can answer questions at home," "Can help at school," "Knows about bodies and health")

Layout: Radial/hub layout with "Me" in the center and trusted adult nodes arranged around it

Interactive features:
- Click any trusted adult node to reveal an infobox: who this person is, and one example question a student could ask them about body changes
- Click the center "Me" node to reveal the reminder: "You can ask more than one trusted adult, and you can ask the same question more than once."
- Drag nodes to rearrange the network; zoom and pan supported

Visual styling: Warm, friendly color palette (soft yellow center, soft blue trusted-adult nodes); simple circle shapes, no realistic depictions of people

Legend: Explains that the yellow center node represents the student, and blue nodes represent trusted adults who can help with questions about growing up

Implementation: vis-network with click-to-reveal infobox panels; no anatomical content anywhere in this diagram — it is purely a support-network map.
```

## Related Resources

- [Chapter 6: Growth And Puberty](../../bands/grade-3/chapters/06-growth-and-puberty/index.md)
