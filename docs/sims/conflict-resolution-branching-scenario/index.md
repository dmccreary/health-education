---
title: Conflict Resolution Role-Play Branching Scenario
description: Students apply the five conflict-resolution strategies by navigating a branching scenario, demonstrating which response choice best applies "I" statements, active listening, and a mutually acceptable solution at each decision point.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Conflict Resolution Role-Play Branching Scenario



<iframe src="main.html" width="100%" height="722px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md).

```text
Type: workflow
**sim-id:** conflict-resolution-branching-scenario<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students apply the five conflict-resolution strategies by navigating a branching scenario, demonstrating which response choice best applies "I" statements, active listening, and a mutually acceptable solution at each decision point.

Purpose: Let students practice choosing constructive conflict-resolution responses in a realistic peer disagreement and see the likely outcome of each choice.

Visual style: Mermaid flowchart branching scenario starting from a realistic conflict prompt (two friends disagree about a group project after one person changed the plan without telling the other).

Steps (all nodes clickable, each branch choice is a distinct clickable node):
1. Start: "Conflict Prompt" — click reveals the full scenario text.
2. Choice node A: "Respond With A 'You' Statement" — click reveals: "This response often increases defensiveness rather than resolving the issue," then routes to a "Conflict Escalates" node.
3. Choice node B: "Respond With An 'I' Statement And Active Listening" — click reveals: "This response names your own experience and shows you are listening, which keeps the conversation constructive," then routes to a "Conflict Resolution Deepens" node.
4. From "Conflict Resolution Deepens," a further choice: "Insist On Your Original Plan" vs. "Look For A Solution Both People Can Accept" — clicking each reveals the likely outcome of that choice.
5. End states: "Relationship Strained" (red) vs. "Problem Addressed, Relationship Intact" (green), each with a reflective infobox summarizing which strategies led to that outcome.

Color coding: Red nodes for responses that escalate conflict, green nodes for responses that apply the five strategies effectively.

Implementation: Mermaid flowchart with click handlers mapped to a JavaScript infobox callback for every node, structured as a branching role-play rather than a single linear path.
```

## Related Resources

- [Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md)
