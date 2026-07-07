---
title: Lockdown and Evacuation Sequence Trainer
description: Students classify standard procedural actions as
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Lockdown and Evacuation Sequence Trainer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md).

```text
Type: microsim

**sim-id:** lockdown-evacuation-sequence-trainer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: classify, distinguish, sequence

Learning objective: Students classify standard procedural actions as
belonging to lockdown or evacuation and place each procedure's steps in
correct order, distinguishing the two standard categories of drill
response. No card, scenario, or feedback text describes a triggering
event, weapon, or method — only standard procedure and correct student
actions.

Canvas layout:
- Left (55%): a shuffled bank of 10 action cards drawn evenly from
  lockdown and evacuation procedures (e.g., "Move out of sight of doors
  and windows," "Silence your phone," "Wait for an official all-clear
  before moving," "Follow staff to the designated outdoor location," "Walk
  calmly, do not run," "Stay with your class group," "Lock or barricade
  the door only if trained to do so")
- Right (45%): two labeled sequencing zones, "Lockdown Sequence" and
  "Evacuation Sequence," each requiring cards to be placed in correct
  order, not just correct category

Data Visibility Requirements:
  Stage 1: Show all 10 shuffled cards and both empty, ordered zones
  Stage 2: Student drags cards into a zone and orders them
  Stage 3: On checking, reveal correct category and correct order for any
  misplaced or misordered card, with a one-sentence explanation of why
  order matters for that step
  Stage 4: Show a final summary confirming both complete, correctly
  ordered sequences, reinforcing that automatic, practiced response is the
  goal of drilling

Interactive controls:
- Drag-and-drop cards into zones with reorderable placement
- Button: "Check Sequences"
- Button: "Reset"

Default parameters: 10-card bank, shuffled order each session

Instructional Rationale: Classifying and correctly sequencing standard
procedural actions is an Understand-level task focused on comprehension of
established procedure, so a sort-and-sequence interaction with immediate
feedback is used rather than a passive checklist. This diagram depicts
only standard drill procedure — it does not simulate, role-play, or
reference any triggering event, weapon, or attacker.

Implementation notes: p5.js drag-and-drop with reordering; card data
stored as an array of {action, correctZone, correctPosition, explanation}
objects. Content restriction: no card or feedback text may reference a
specific threat, weapon, tactic, or triggering event — cards address only
correct student behavior during each standard procedure.
```

## Related Resources

- [Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md)
