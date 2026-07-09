---
title: Emergency Response Priority Workflow
description: Students examine an emergency scenario with multiple people needing help and prioritize response order based on severity, differentiating life-threatening conditions from less urgent ones.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Emergency Response Priority Workflow



<iframe src="main.html" width="100%" height="962px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: workflow
**sim-id:** emergency-response-priority-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, prioritize, differentiate

Learning objective: Students examine an emergency scenario with multiple people needing help and prioritize response order based on severity, differentiating life-threatening conditions from less urgent ones.

Visual style: Mermaid flowchart with a start node, sequential process nodes, one decision diamond, and an end node.

Steps: (1) Start node "Emergency Situation Identified," click reveals this is the trigger point for the whole priority sequence; (2) process "Assess Scene Safety First," click reveals that helpers must never skip this step, even under pressure; (3) process "Check Responsiveness and Breathing," click reveals how to check (tap and shout, look for chest movement); (4) process "Call Emergency Services," click reveals that calling for help should never be delayed while waiting to see if things improve; (5) decision diamond "More Than One Person Needs Help?," click reveals that multiple-casualty situations require an extra prioritization step; (5a) branch "No" leads directly to "Address the Person's Most Urgent Need," click reveals the life-threatening-first rule (breathing and severe bleeding before less urgent injuries); (5b) branch "Yes" leads to "Prioritize by Severity: Life-Threatening Conditions First," click reveals an example comparing a non-breathing person to a person with a minor injury; both paths lead to end node "Continue Care Until Help Arrives," click reveals that priority decisions continue as conditions change.

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Blue for start/process nodes, yellow for the decision diamond, green for both resolution paths and the shared end node.

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object. No graphic injury imagery or detail in infobox text.
```

## Related Resources

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
