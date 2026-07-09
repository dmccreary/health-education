---
title: Sort the Peer Relationship
description: Students classify short everyday scenes into the correct type of peer relationship (classmate, friend, teammate, neighbor/cousin) and compare what makes each type similar or different.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Sort the Peer Relationship



<iframe src="main.html" width="100%" height="524px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health Basics, Friendships, and Feelings](../../bands/grade-2/chapters/01-health-friendships-feelings/index.md).

```text
Type: microsim
**sim-id:** peer-relationship-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, compare, contrast

Learning objective: Students classify short everyday scenes into the correct type of peer relationship (classmate, friend, teammate, neighbor/cousin) and compare what makes each type similar or different.

Canvas layout:
- Top area (150px): One short illustrated scene at a time (e.g., two children sharing a reading table, two children building a blanket fort together, a soccer team huddled before a game, two cousins playing at a family picnic)
- Middle area (250px): Four labeled bins: "Classmate," "Friend," "Teammate," "Neighbor/Cousin"
- Bottom strip (100px): Explanation caption and "Next Scene" button

Visual elements:
- 8 simple scenes cycling one at a time, flat friendly illustration style, evenly covering all four relationship types

Interactive controls:
- Click or drag the scene into the matching bin
- Button: "Next Scene"
- Button: "Reset"

Default parameters:
- First scene: two children sharing a classroom reading table (clear "Classmate" example, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scene with no label
  Stage 2: After the student picks a bin, show the correct label and a one-sentence reason
  Stage 3: Show a short compare line such as "A classmate shares your room. A friend is someone you also choose to be with."

Behavior:
- Correct placement: bin glows, gentle chime, reason caption appears
- Incorrect placement: calm prompt, "Look again — where do these two children usually spend time together?"
- After all scenes, a summary caption reminds students that one person can be more than one type of peer at the same time (a teammate can also be a friend)

Instructional Rationale: Classifying and comparing types of peer relationships is an Understand-level task, so the pattern uses step-through scenes with a revealed reason and comparison line rather than animation. This matches the Grade 2 benchmark shift toward comparison, not just naming a single peer relationship.

Implementation notes: Use p5.js. Keep scenes warm and inclusive of different family and cultural configurations (cousins, multigenerational households, blended families). Large text for read-aloud.
```

## Related Resources

- [Chapter 1: Health Basics, Friendships, and Feelings](../../bands/grade-2/chapters/01-health-friendships-feelings/index.md)
