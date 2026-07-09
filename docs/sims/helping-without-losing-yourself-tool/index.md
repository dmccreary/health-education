---
title: Helping Without Losing Yourself Decision Tool
description: Students distinguish healthy peer-support boundaries
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Helping Without Losing Yourself Decision Tool



<iframe src="main.html" width="100%" height="630px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md).

```text
Type: workflow

**sim-id:** helping-without-losing-yourself-tool<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: distinguish, examine, differentiate

Learning objective: Students distinguish healthy peer-support boundaries
from unsustainable or inappropriate ones, and examine when a helper should
involve additional adult or professional support for their own sake as
well as their friend's.

Visual style: Mermaid flowchart, top-to-bottom, click handlers on every
node

Nodes (all clickable):
1. "You Are Supporting a Friend's Ongoing Mental Health Challenge" — click
   text: "This applies to ongoing support, distinct from an acute safety
   crisis, which always requires immediate adult or 988 involvement"
2. "Are You Being Asked to Keep a Safety Risk Secret?" (decision diamond) —
   click text: "This boundary is never optional — a safety secret is
   always shared with a trusted adult"
3a. "Yes" → "Tell a Trusted Adult, Regardless of the Promise" — click
   text: "This protects your friend's safety and your own wellbeing"
3b. "No" → "Is This Affecting Your Own Sleep, Mood, or Schoolwork?" — click
   text: "Noticing this in yourself is not a sign you are a bad friend —
   it is a sign you need support too"
4a. From 3b, "Yes" → "Tell Your Own Trusted Adult and Set Limits" — click
   text: "Setting a limit on your own availability does not mean you have
   abandoned your friend"
4b. From 3b, "No" → "Continue Supportive Listening and Encourage
   Professional Help" — click text: "Ongoing encouragement toward
   professional care remains the goal even when things feel manageable"
5. Shared end node "Friend Is Connected to Appropriate Support, and You
   Remain Well" — click text: "A sustainable support role protects both
   people, not just one"

Connections: 1→2, 2→3a, 2→3b, 3b→4a, 3b→4b, 3a→5, 4a→5, 4b→5

Color coding: gold for decision diamonds, blue for process steps, green
for the shared end node

Interactive features: click any node for its infobox

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function
```

## Related Resources

- [Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md)
