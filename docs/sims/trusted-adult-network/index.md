---
title: Find Your Trusted Adults
description: Students identify trusted adults across different settings (home, school, community) and describe what makes each one a good person to ask for help in a difficult or unsafe situation.
status: scaffold
library: vis-network
bloom_level: Remember (L1) / Understand (L2)
---

# Find Your Trusted Adults



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Safety And Trusted Adults](../../bands/grade-3/chapters/02-safety-and-trusted-adults/index.md).

```text
Type: graph-model
**sim-id:** trusted-adult-network<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1) / Understand (L2)
Bloom Taxonomy Verb: identify, describe

Learning objective: Students identify trusted adults across different settings (home, school, community) and describe what makes each one a good person to ask for help in a difficult or unsafe situation.

Purpose: Help students build a concrete mental map of multiple trusted adults, rather than relying on only one, so they always have someone to ask.

Node types:
1. Student (center node, blue circle) — the student themselves
2. Home trusted adults (green circles) — Example: "Parent/Guardian," "Grandparent"
3. School trusted adults (purple circles) — Example: "Teacher," "School Counselor," "School Nurse"
4. Community trusted adults (orange circles) — Example: "Coach," "Police Officer," "Faith Leader"

Edge types:
1. "CAN ASK FOR HELP" (solid gray line) connecting the student to every trusted adult node

Sample data:
- Student → Parent/Guardian
- Student → Teacher
- Student → School Counselor
- Student → Coach
- Student → Police Officer (emergency situations)

Layout: Radial/force-directed, with the student node in the center and trusted adults arranged in a ring

Interactive features:
- Hover a trusted adult node: shows a short description of that role and one example situation to bring to them
- Click a trusted adult node: highlights the connection back to the student and opens a side panel with "What to say" sentence starters, like "I need help because..."
- Drag nodes to rearrange; zoom and pan supported
- A "My Own Map" mode lets students (with a teacher's help) relabel generic nodes with the actual names of their own trusted adults

Visual styling:
- Student node larger and centered
- Node color grouped by setting (home, school, community) as described above
- Edge thickness uniform, since every trusted adult is equally reachable

Legend: Color key explaining home/school/community groupings and what the connecting line means

Implementation: vis-network JavaScript library, force-directed layout, click and hover event handlers wired to an infobox panel
Canvas size: responsive, default 700x450px
```

## Related Resources

- [Chapter 2: Safety And Trusted Adults](../../bands/grade-3/chapters/02-safety-and-trusted-adults/index.md)
