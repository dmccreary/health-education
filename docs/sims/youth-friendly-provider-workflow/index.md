---
title: Youth-Friendly Provider Visit Workflow
description: Students examine the sequence of a youth-friendly
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Youth-Friendly Provider Visit Workflow



<iframe src="main.html" width="100%" height="864px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md).

```text
Type: workflow

**sim-id:** youth-friendly-provider-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, distinguish, differentiate

Learning objective: Students examine the sequence of a youth-friendly
clinic visit and distinguish which specific provider behaviors at each
step meet or fail the youth-friendly standard.

Visual style: Mermaid flowchart, top-to-bottom, click handlers on every
node (`click NodeId call showInfo("term")`)

Nodes (all clickable):
1. "Check-In" — click text: "A youth-friendly clinic protects
   confidentiality starting at check-in, not only during the exam room
   conversation"
2. "Provider Introduces Confidentiality Limits" — click text: "States
   clearly, up front, what stays private and the narrow exceptions
   (such as serious safety risk) before any other conversation happens"
3. "Provider Talks Directly to the Patient" — click text: "Addresses the
   adolescent as the primary person in the conversation, not only an
   accompanying adult"
4. "Patient Asks a Question" — click text: "A youth-friendly provider
   answers direct questions with direct, medically accurate information"
5. "Provider Explains Clearly and Checks Understanding" — click text:
   "Uses plain language and confirms the patient actually understood,
   rather than assuming"
6. "Provider Asks Permission Before Any Exam or Disclosure" — click text:
   "Permission is asked before an exam, procedure, or sharing information
   with anyone else, including a parent"
7. "Visit Concludes" — click text: "The patient leaves with clear next
   steps and knows exactly what information was or was not shared"

Connections: 1→2, 2→3, 3→4, 4→5, 5→6, 6→7

Color coding: blue for process steps, gold for the two confidentiality-
related nodes (2 and 6)

Interactive features: click any node for its infobox; pan/zoom not
required for a linear flowchart of this size

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function
```

## Related Resources

- [Chapter 4: Healthcare Access and Sexual Health](../../bands/grade-9-12/chapters/04-healthcare-access-and-sexual-health/index.md)
