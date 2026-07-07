---
title: Safety Concern Reporting Workflow
description: Students apply the "see something, say something" reporting process by tracing the correct workflow from noticing a concern to a trained adult responding.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Safety Concern Reporting Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md).

```text
Type: workflow
**sim-id:** safety-concern-reporting-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, apply, execute

Learning objective: Students apply the "see something, say something" reporting process by tracing the correct workflow from noticing a concern to a trained adult responding.

Visual style: Mermaid flowchart with a start node, three sequential process/decision nodes, and an end node. No node describes any specific threat content, methods, or tactics — every node addresses only the reporting process.

Steps: (1) Start node "I Notice Concerning Behavior Or A Statement," click reveals: "This could be from a classmate, something you saw online, or something you overheard — noticing it is the first step."; (2) decision "Who Can I Tell?," click reveals three equally valid options: a trusted adult, school staff (counselor, administrator, resource officer), or an anonymous tip line; (3) process "Report It, Even If Unsure," click reveals: "See something, say something — reporting a concern that turns out to be nothing causes far less harm than staying silent about a real one."; (4) process "Trained Adults Assess And Respond," click reveals: "Assessing the seriousness of a concern is the job of trained adults and staff, not students."; end node "The School Community Stays Safer," click reveals: "Reporting protects everyone, including the person the concern was about, who may need support."

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Blue for the start/notice node, yellow for the decision node, green for the reporting, response, and outcome nodes.

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object. No node may include threat specifics, weapon types, or methods — only the general reporting process.
```

## Related Resources

- [Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md)
