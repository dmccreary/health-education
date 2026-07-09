---
title: Conflict or Pressure? A Decision Guide
description: Students analyze a described relationship situation
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Conflict or Pressure? A Decision Guide



<iframe src="main.html" width="100%" height="722px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Relationships and Respect](../../bands/grade-9-12/chapters/02-relationships-and-respect/index.md).

```text
Type: workflow

**sim-id:** conflict-pressure-decision-guide<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: differentiate, distinguish

Learning objective: Students analyze a described relationship situation
and distinguish ordinary, healthy conflict from coercive pressure by
tracing a decision path, with every node clickable for an explanation.

Visual style: Mermaid flowchart, top-to-bottom, decision-diamond
structure, click handlers on every node

Nodes (all require `click NodeId call showInfo("term")` handlers):
1. Start: "A disagreement or request has happened"
2. Decision: "Has a boundary already been clearly stated?" — click text:
   "Check whether one person has already said no or set a limit"
3. Branch (No): "Ordinary Conflict" — click text: "Normal disagreement;
   use direct communication and active listening to resolve it"
4. Branch (Yes): Decision: "Is the request being repeated anyway?" —
   click text: "Repetition after a clear boundary is the key warning
   sign of pressure"
5. Branch (No, respected): "Boundary Respected" — click text: "A healthy
   response to a stated boundary; no further action needed"
6. Branch (Yes, repeated): Decision: "Does it include guilt, threats, or
   isolation from others?" — click text: "These tactics escalate simple
   persistence into coercive pressure"
7. Branch (Yes): "Coercive Pressure" — click text: "Seek outside support
   from a trusted adult; this pattern is a signal to protect yourself,
   not a communication gap to close alone"
8. Branch (No): "Persistent but Non-Coercive — Still Address Directly" —
   click text: "Restate the boundary plainly; repeated non-threatening
   requests still deserve a firm, direct response"

Connections: 1→2, 2→3 (No), 2→4 (Yes), 4→5 (No), 4→6 (Yes), 6→7 (Yes),
6→8 (No)

Color coding: green for healthy-resolution end states, red for the
coercive-pressure end state, yellow for decision diamonds

Interactive features: click any node for its infobox; the path taken
during an example walkthrough highlights in gold

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function rendering a side panel
```

## Related Resources

- [Chapter 2: Relationships and Respect](../../bands/grade-9-12/chapters/02-relationships-and-respect/index.md)
