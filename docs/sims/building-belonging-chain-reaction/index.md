---
title: Building Belonging Chain Reaction
description: Students explain how healthy peer traits, kindness, and valuing uniqueness work together, through caring relationships, to build a classroom where everyone belongs.
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# Building Belonging Chain Reaction



<iframe src="main.html" width="100%" height="722px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md).

```text
Type: workflow
**sim-id:** building-belonging-chain-reaction<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize, infer

Learning objective: Students explain how healthy peer traits, kindness, and valuing uniqueness work together, through caring relationships, to build a classroom where everyone belongs.

Purpose: Show a simple, positive chain from individual kind actions to a whole classroom feeling of belonging

Visual style: Simple vertical flowchart with rounded boxes and an arrow chain, warm colors, ending in a bright "Everyone Belongs" node

Steps:
1. Start: "Healthy Peer Traits" — hover text: "Listening, sharing, taking turns, and telling the truth with a peer."
2. Process: "Kindness" — hover text: "Choosing words and actions that help someone else feel good, safe, or included."
3. Process: "Valuing Uniqueness" — hover text: "Appreciating what makes each classmate different instead of expecting everyone to be the same."
4. Process: "Caring Relationships" — hover text: "Ongoing connections built on trust, respect, and support between classmates and with trusted adults."
5. End: "Everyone Belongs" — hover text: "A classroom where every person feels welcomed, valued, and safe being themselves."

Every node includes a click handler opening an infobox with the hover text described above (Mermaid `click` directive on each node).

Color coding:
- Soft blue: Healthy Peer Traits
- Soft green: Kindness
- Soft purple: Valuing Uniqueness
- Soft orange: Caring Relationships
- Gold: Everyone Belongs (end state)

Implementation: Mermaid flowchart with `click NodeId call showInfo("text")` directives on all five nodes, each opening an infobox with the corresponding hover text
```

## Related Resources

- [Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md)
