---
title: Community-Integrated Recovery Systems Map
description: Assess how a community-integrated recovery system
status: scaffold
library: Mermaid
bloom_level: Evaluate (L5)
---

# Community-Integrated Recovery Systems Map



<iframe src="main.html" width="100%" height="180px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md).

```text
Type: workflow

**sim-id:** community-integrated-recovery-systems-map<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: justify, assess, recommend

Learning objective: Assess how a community-integrated recovery system
connects clinical and cultural resources around a person in recovery, and
justify why this model is associated with stronger outcomes than a purely
clinical or purely informal approach alone.

Visual style: Mermaid flowchart, central node with four surrounding
process nodes, all clickable via `click NodeId call showInfo("term")`.

Nodes:
1. Central: "Person Seeking Recovery Support" — click reveals: "This
   integrated model starts from the person's full context, not just a
   single symptom or appointment."
2. "Co-Located Cultural And Clinical Care" — click reveals: "Some tribal
   health systems provide counseling, medical care, and traditional
   healing practices within one coordinated system."
3. "Community-Based Recovery Housing And Networks" — click reveals: "Some
   recovery environments build cultural practice and peer mentorship
   directly into daily structure, not just scheduled appointments."
4. "Restorative, Whole-Community Approach" — click reveals: "Family,
   elders, peers, and providers work together, treating recovery as a
   shared community process."
5. "Tribal Sovereignty In Recovery Policy" — click reveals: "Many tribal
   nations have the authority to design recovery systems reflecting their
   own community's cultural practices and priorities."
End: "Stronger, More Durable Recovery" — click reveals: "Research
associates this whole-person, whole-community integration with better
long-term recovery outcomes than clinical or cultural approaches used in
isolation."

Connections: Central node connects outward to nodes 2, 3, 4, and 5; all
four converge into the End node

Color coding: gray for the central node, blue for the four systems/models
nodes, green for the outcome node

Implementation: Mermaid flowchart with click bindings to a showInfo()
function; infobox text in a JS lookup object. Content restriction: no
node names a specific tribal nation's private ceremonial practice in
detail — descriptions stay at the respectful, general level of "cultural
practice" or "traditional healing," consistent with how Chapter 10
handled this same sensitivity.
```

## Related Resources

- [Chapter 11: Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md)
