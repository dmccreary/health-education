---
title: Build Your Trusted Adult Network
description: Students evaluate which trusted adults and resources are best suited to different situation types and justify their choice using the qualities of a good trusted adult.
status: scaffold
library: vis-network
bloom_level: Evaluate (L5)
---

# Build Your Trusted Adult Network



<iframe src="main.html" width="100%" height="542px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md).

```text
Type: microsim
**sim-id:** build-your-trusted-adult-network<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, justify, prioritize, recommend

Learning objective: Students evaluate which trusted adults and resources are best suited to different situation types and justify their choice using the qualities of a good trusted adult.

Purpose: Help students build a personalized mental map of trusted adults matched to situation categories, reinforcing that different concerns may call for different people.

Node types:
1. Situation nodes (orange circles): "Physical symptom," "Friendship worry," "Family stress," "Online safety concern," "Feeling unsafe," "Question about my body"
2. Adult/resource nodes (blue squares): "Parent/Guardian," "School Nurse," "School Counselor," "Teacher," "Grandparent/Relative," "Coach"

Edge types:
- CAN HELP WITH (dashed green line): connects an adult/resource node to situation nodes they are well-suited to help with

Sample data:
- School Nurse — CAN HELP WITH → Physical symptom, Question about my body
- School Counselor — CAN HELP WITH → Friendship worry, Family stress, Feeling unsafe
- Parent/Guardian — CAN HELP WITH → all six situation types (shown with a distinct highlight color)
- Teacher — CAN HELP WITH → Friendship worry, Online safety concern

Layout: Force-directed, with situation nodes on the left and adult/resource nodes on the right

Interactive features:
- Hover any node to see its full description and, for adults, a reminder of the five qualities of a good trusted adult
- Click a situation node to highlight every adult/resource connected to it and dim unrelated nodes
- Drag nodes to rearrange the personal map; zoom and pan supported
- A short reflection prompt appears after each click: "Which of the five trusted-adult qualities does this person show for this situation?"

Visual styling: Situation nodes colored orange, adult/resource nodes colored blue, with edge thickness representing how strongly suited that adult is to that situation type

Legend: Node shapes and colors explained; edge meaning explained

Implementation: vis-network JavaScript library with click and hover event handlers driving an infobox panel.
Canvas size: 700x500px
```

## Related Resources

- [Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md)
