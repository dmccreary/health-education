---
title: What To Do If This Happens Workflow
description: Students apply the correct sequence of response steps if they or someone they know is pressured to share or is blackmailed over explicit content, reinforcing that the person pressured is a victim, not someone in trouble.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# What To Do If This Happens Workflow



<iframe src="main.html" width="100%" height="760px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md).

```text
Type: workflow
**sim-id:** what-to-do-if-this-happens-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, apply, execute

Learning objective: Students apply the correct sequence of response steps if they or someone they know is pressured to share or is blackmailed over explicit content, reinforcing that the person pressured is a victim, not someone in trouble.

Visual style: Mermaid flowchart with a start node, four sequential process nodes, and an end node. No node depicts or describes explicit content itself — every node addresses only the response process.

Steps: (1) Start node "Someone Is Pressuring Me To Share, Or Is Threatening To Share, An Image," click reveals: "This is exploitation, whether from a peer or a stranger — and it is not your fault."; (2) process "Stop Responding To That Person," click reveals: "Do not send anything else and do not pay or comply with new demands — compliance often increases pressure rather than ending it."; (3) process "Save The Evidence," click reveals: "Screenshot the messages, usernames, and any threats before blocking the person."; (4) process "Tell A Trusted Adult Right Away," click reveals: "A parent, school counselor, or teacher can help — you will not be treated as the person at fault."; (5) process "Report It," click reveals: "The NCMEC CyberTipline at report.cybertip.org is built for this exact situation, and a school counselor can also connect you with more support."; end node "You Get Help, And The Pressure Stops," click reveals: "Reporting quickly is what stops the situation from continuing or escalating."

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Red for the start node (the problem), blue for the four process/action nodes, green for the end node (resolution).

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object. No explicit content is described, depicted, or referenced beyond "an image" or "content."
```

## Related Resources

- [Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md)
