---
title: Bystander Response Decision Tool
description: Students examine a bullying or exclusion scenario and
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Bystander Response Decision Tool



<iframe src="main.html" width="100%" height="722px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md).

```text
Type: workflow

**sim-id:** bystander-response-decision-tool<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, differentiate, organize

Learning objective: Students examine a bullying or exclusion scenario and
differentiate which bystander strategy (direct intervention, distraction,
delayed support, or reporting) fits the specific situation and safety
considerations involved.

Visual style: Mermaid flowchart, top-to-bottom, decision-driven, click
handlers on every node

Nodes (all clickable, `click NodeId call showInfo("term")`):
1. "You Witness Exclusion or Bullying" — click text: "This applies to
   in-person and digital/cyberbullying situations alike"
2. "Is It Safe for You to Intervene Directly Right Now?" (decision
   diamond) — click text: "Your own safety is a legitimate factor in
   choosing a response"
3a. "Yes" → "Use Direct Intervention or Distraction" — click text: "Direct
   intervention means calmly telling the behavior to stop; distraction
   means redirecting attention without confrontation"
3b. "No" → "Is the Situation Ongoing or Serious?" (decision diamond) —
   click text: "Repeated behavior or any safety risk raises the priority
   of adult involvement"
4a. From 3b, "Yes" → "Report to an Adult With Authority to Act
   Immediately" — click text: "A teacher, coach, or administrator can
   intervene with authority a peer does not have"
4b. From 3b, "No" → "Check In With the Person Afterward" — click text:
   "Delayed support still communicates that what happened was seen and
   mattered"
5. Shared end node "Support the Person Who Was Targeted" — click text:
   "Every path leads back to making sure the person targeted is supported,
   not just the incident being 'handled'"

Connections: 1→2, 2→3a, 2→3b, 3b→4a, 3b→4b, 3a→5, 4a→5, 4b→5

Color coding: gold for decision diamonds, blue for response actions, green
for the shared end node

Interactive features: click any node for its infobox

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function
```

## Related Resources

- [Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md)
