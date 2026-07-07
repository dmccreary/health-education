---
title: Lockdown Vs. Evacuation Procedure Sorter
description: Students classify correct student actions as belonging to lockdown or evacuation procedure, distinguishing the two standard school safety responses. No scenario content describes a triggering event — only the procedure and correct student actions.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Lockdown Vs. Evacuation Procedure Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md).

```text
Type: microsim
**sim-id:** lockdown-vs-evacuation-procedure-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, distinguish, exemplify

Learning objective: Students classify correct student actions as belonging to lockdown or evacuation procedure, distinguishing the two standard school safety responses. No scenario content describes a triggering event — only the procedure and correct student actions.

Layout: A deck of 10 action cards describing standard procedural behavior (e.g., "Stay quiet and move out of sight of the door," "Follow staff to the designated outdoor meeting area," "Wait for an official all-clear before moving," "Walk calmly, do not run or push," "Stay with your class group," "Do not open the door for anyone other than following the all-clear signal") with two click zones labeled "Lockdown" and "Evacuation."

Interactive controls: Click to sort each card; immediate feedback confirms the correct procedure and explains why that action matters for that procedure; "Reset Deck" button; running tally of correct sorts.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Classifying standard procedural actions under the correct safety procedure is an Understand-level task, so a sorting activity with rule-based feedback is used rather than a passive list, reinforcing the calm, correct response pattern for each procedure. This diagram depicts only standard drill procedure — it does not simulate, role-play, or reference any triggering event or attack scenario.

Implementation notes: p5.js. Card data stored as an array of objects with action text, correct procedure, and explanation string. Responsive canvas that reflows cards on window resize. Content restriction: no card or feedback text may reference a specific threat, weapon, or triggering event — cards address only correct student behavior during each standard procedure.
```

## Related Resources

- [Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md)
