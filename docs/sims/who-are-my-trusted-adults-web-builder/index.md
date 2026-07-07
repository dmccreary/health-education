---
title: Who Are My Trusted Adults? Web Builder
description: Students apply their understanding of trusted adults by building a personal web of at least three trusted adults from home, school, and the community, reinforcing that there is always more than one person to tell.
status: scaffold
library: vis-network
bloom_level: Apply (L3)
---

# Who Are My Trusted Adults? Web Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Staying Safe at Home, School, and Online](../../bands/grade-1/chapters/06-personal-safety/index.md).

```text
Type: microsim
**sim-id:** who-are-my-trusted-adults-web-builder<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, identify, construct

Learning objective: Students apply their understanding of trusted adults by building a personal web of at least three trusted adults from home, school, and the community, reinforcing that there is always more than one person to tell.

Canvas layout:
- Center node: a friendly icon labeled "Me"
- Surrounding candidate nodes arranged in a ring: family members (parent, grandparent, aunt/uncle), school adults (teacher, school counselor, principal), and community adults (coach, doctor, family friend)
- Right-side panel (150px): instructions and a running count of trusted adults added

Visual elements:
- Center "Me" node in a warm color
- Candidate adult nodes shown as simple labeled circles grouped by setting (home, school, community), each a different soft color
- Connecting lines that appear once a node is selected, linking "Me" to that trusted adult

Interactive controls:
- Click a candidate node to add it to "My Trusted Adults" web (line connects it to "Me")
- Click again to remove it
- Button: "Show My Web" (highlights all connected trusted adults)
- Button: "Reset"

Default parameters:
- No adults connected at start; all candidate nodes visible and unselected

Data Visibility Requirements:
  Stage 1: Show the empty web with "Me" in the center and all candidate adults around it
  Stage 2: As each adult is clicked, show the connecting line appear and the counter increase
  Stage 3: Once 3 or more trusted adults are connected, show a caption: "You have more than one trusted adult! If one person can't help right away, you can always go to another."

Behavior:
- The MicroSim accepts any combination of at least one adult from each setting (home, school, community) as a complete answer, since every family's trusted adults are different
- A gentle prompt appears if only one adult is selected, encouraging the student to think of at least one more

Instructional Rationale: This is an Apply-level (identify/construct) objective, so the MicroSim has students actively build their own personal network rather than only reading a list, reinforcing the crucial backup rule that there is always more than one trusted adult to ask.

Implementation notes: Use vis-network for the node-and-line web, styled with soft rounded nodes and gentle colors. Teacher should discuss real trusted adults from the students' own lives after the activity, since the MicroSim uses generic role labels rather than actual names.
```

## Related Resources

- [Chapter 6: Staying Safe at Home, School, and Online](../../bands/grade-1/chapters/06-personal-safety/index.md)
