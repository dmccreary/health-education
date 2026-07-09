---
title: CPR and AED Emergency Response Workflow
description: Students apply the correct combined CPR and AED
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# CPR and AED Emergency Response Workflow



<iframe src="main.html" width="100%" height="1226px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md).

```text
Type: workflow

**sim-id:** cpr-aed-emergency-response-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, execute, demonstrate

Learning objective: Students apply the correct combined CPR and AED
response sequence to a cardiac emergency scenario, from recognizing
unresponsiveness through continued care until help arrives.

Visual style: Mermaid flowchart, top-to-bottom, sequential with one
decision diamond and one repeating loop, click handlers on every node

Nodes (all clickable, `click NodeId call showInfo("term")`):
1. "Check Scene Safety and Responsiveness" — click text: "Confirm the
   scene is safe, then tap and shout to check for a response"
2. "Call 911 and Send Someone for an AED" — click text: "Assign a
   specific person to call, rather than a general call for help, and send
   another person to find an AED if one is available"
3. "Check for Normal Breathing (Up to 10 Seconds)" — click text: "Gasping
   is not normal breathing and still requires CPR"
4. "Begin Chest Compressions (100-120/min, at least 2 inches deep)" —
   click text: "Push hard and fast in the center of the chest, allowing
   full chest recoil between compressions"
5. "AED Arrives: Turn On and Attach Pads" — click text: "Follow the
   picture guide on the pads for correct placement on the bare chest"
6. "AED Analyzes Rhythm" (decision diamond: "Shock Advised?") — click
   text: "No one should touch the person while the AED is analyzing"
7a. "Yes" → "Clear Everyone, Deliver Shock" — click text: "The AED will
   only allow a shock when its own analysis indicates one is needed"
7b. "No" → "Resume CPR Immediately" — click text: "If no shock is
   advised, chest compressions restart right away"
8. "Resume CPR After Shock" — click text: "CPR restarts immediately after
   every shock, without checking for a pulse first"
9. Shared end node "Continue Cycle Until EMS Arrives or Person Shows Signs of Life" —
   click text: "The AED will periodically re-analyze the rhythm and
   prompt the next step throughout"

Connections: 1→2, 2→3, 3→4, 4→5, 5→6, 6→7a, 6→7b, 7a→8, 7b→9, 8→9, and a
loop from 9 back to 6 labeled "AED Re-Analyzes Periodically"

Color coding: blue for process/action steps, gold for the AED analysis
decision diamond, green for the shock and resume-CPR outcomes, red for
the shared "continue until help arrives" end node

Interactive features: click any node for its infobox describing that
step's purpose

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function; infobox text includes a persistent reminder
that this is educational awareness, not certified training
```

## Related Resources

- [Chapter 7: Brain Health, Sleep, and Emergency Care](../../bands/grade-9-12/chapters/07-brain-health-sleep-and-emergency-care/index.md)
