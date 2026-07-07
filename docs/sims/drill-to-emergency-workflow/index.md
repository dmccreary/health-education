---
title: From Drill to Real Emergency
description: Students explain how practicing a safety procedure prepares students and staff to respond in a real emergency, by exploring each step of a fire-drill workflow and its purpose.
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# From Drill to Real Emergency



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Safety And Trusted Adults](../../bands/grade-3/chapters/02-safety-and-trusted-adults/index.md).

```text
Type: workflow
**sim-id:** drill-to-emergency-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize

Learning objective: Students explain how practicing a safety procedure prepares students and staff to respond in a real emergency, by exploring each step of a fire-drill workflow and its purpose.

Purpose: Show the connection between practicing a drill and being ready for a real emergency, so students understand *why* schools repeat drills rather than just memorizing steps.

Visual style: Simple top-to-bottom flowchart with rounded process boxes

Steps (every node must have a Mermaid click directive opening an infobox):
1. "Alarm or Signal Sounds" — Hover text: "A drill or real emergency always starts with a clear signal, like a bell or announcement, so everyone knows to begin."
2. "Stop and Listen" — Hover text: "Students pause what they're doing and listen for the teacher's instructions."
3. "Follow the Practiced Route" — Hover text: "Because the class has practiced this route before, students already know where to walk without needing to think hard."
4. "Walk Calmly to the Safe Spot" — Hover text: "Walking, not running, keeps everyone safer and helps adults keep track of the group."
5. "Adult Checks Everyone Is Present" — Hover text: "A teacher or staff member counts students to make sure no one is missing."
6. "Wait for the All-Clear" — Hover text: "Students wait calmly until an adult says it is safe to return or the emergency has ended."

Branch note: A side note box (not a decision diamond) clarifies "This exact sequence works whether it's a practice drill or a real emergency — that's the point of practicing!"

Color coding:
- Blue: Signal and listening steps
- Green: Movement steps
- Orange: Adult-led safety check steps

Implementation: Mermaid flowchart with `click` directive on every node calling an infobox function that shows the hover text described above.
```

## Related Resources

- [Chapter 2: Safety And Trusted Adults](../../bands/grade-3/chapters/02-safety-and-trusted-adults/index.md)
