---
title: Nonviolent Resolution Process Workflow
description: Students apply the five-step nonviolent conflict
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Nonviolent Resolution Process Workflow



<iframe src="main.html" width="100%" height="962px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md).

```text
Type: workflow

**sim-id:** nonviolent-resolution-process-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: apply, demonstrate, use

Learning objective: Students apply the five-step nonviolent conflict
resolution process to a realistic scenario, distinguishing stated
positions from underlying needs at each step.

Visual style: Mermaid flowchart, top-to-bottom, five sequential nodes plus
one feedback loop, click handlers on every node

Nodes (all clickable, `click NodeId call showInfo("term")`):
1. "Separate People From the Problem" — click text: "Reframe the
   disagreement as a shared problem, not a contest to win"
2. "Identify Underlying Needs" — click text: "Ask what each position is
   actually trying to protect or achieve"
3. "Generate Multiple Solutions" — click text: "List several possible
   solutions before judging any of them"
4. "Evaluate Against Both People's Needs" — click text: "Choose the option
   that satisfies the most real needs on both sides"
5. "Agree and Check Back Later" (decision diamond: "Did it actually
   work?") — click text: "Resolution is confirmed by follow-up, not
   assumed at the moment of agreement"

Connections: 1→2, 2→3, 3→4, 4→5, and a feedback loop from 5 back to 2
labeled "Not Working — Revisit Needs" if the check-back reveals the
solution failed

Color coding: blue for process steps, gold for the check-back decision
diamond, green for the loop-closing "resolved" path

Interactive features: click any node for its infobox describing that
step's purpose and a one-sentence example

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function
```

## Related Resources

- [Chapter 6: Conflict Resolution and Inclusion](../../bands/grade-9-12/chapters/06-conflict-resolution-and-inclusion/index.md)
