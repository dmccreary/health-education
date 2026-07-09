---
title: Conflict Resolution Pathway
description: Students apply the sequence of nonviolent conflict resolution steps to a realistic peer conflict, distinguishing situations that peers can resolve directly from situations that need adult involvement.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Conflict Resolution Pathway



<iframe src="main.html" width="100%" height="962px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md).

```text
Type: workflow
**sim-id:** conflict-resolution-pathway<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, demonstrate, use

Learning objective: Students apply the sequence of nonviolent conflict resolution steps to a realistic peer conflict, distinguishing situations that peers can resolve directly from situations that need adult involvement.

Visual style: Mermaid flowchart with a start node, a sequence of process nodes, one decision diamond, and two end states.

Steps: (1) Start node "A Disagreement Happens," click reveals this is the starting point for any peer conflict; (2) process node "Pause Before Reacting," click reveals why a brief pause improves the outcome; (3) process node "State the Issue with an 'I' Statement," click reveals an example statement; (4) process node "Listen to the Other Perspective," click reveals what active listening looks like here; (5) decision diamond "Does This Involve Safety, Bullying, or a Power Imbalance?" click reveals why this question changes the right next step; (6a) branch "No" leads to "Look for a Solution Both Sides Accept," click reveals this is the peer-level resolution path; (6b) branch "Yes" leads to "Involve a Trusted Adult," click reveals that some conflicts are not meant to be resolved by peers alone; both branches lead to a shared end node "Conflict Addressed Respectfully."

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Blue for process steps, yellow for the decision diamond, green for both resolution end paths.

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object.
```

## Related Resources

- [Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md)
