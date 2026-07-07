---
title: Be the Influence
description: Students demonstrate understanding of how a personal healthy choice can model positive health behavior for others.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Be the Influence



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md).

```text
Type: workflow
**sim-id:** be-the-influence-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, model, apply

Learning objective: Students demonstrate understanding of how a personal healthy choice can model positive health behavior for others.

Purpose: Show a simple cycle -- a student makes a healthy choice, someone notices, and that person is influenced to try it too -- reinforcing that influence flows in both directions

Visual style: Mermaid flowchart (graph LR) arranged as a loop with four boxes

Nodes (each must have a click handler opening an infobox with plain definition/example text):
1. "I Make a Healthy Choice" -- click shows example: "I choose water instead of soda at lunch."
2. "Someone Notices" -- click shows: "A friend or younger sibling sees what I chose."
3. "They Try It Too" -- click shows: "They decide to try the same healthy choice."
4. "Now They Might Model It For Someone Else" -- click shows: "The healthy choice keeps spreading to new people, the same way family, school, and media influence us."

Connections: Arrows connecting node 1 to node 2 to node 3 to node 4, and a return arrow from node 4 back to node 1 to show the cycle can repeat with a new person

Color coding: Warm gold and green tones to convey a positive, encouraging cycle

Interactive features: click directive on every node in Mermaid syntax, each mapped to an infobox with the example text above

Implementation: Mermaid flowchart with click bindings, rendered with an infobox panel beneath the diagram
```

## Related Resources

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
