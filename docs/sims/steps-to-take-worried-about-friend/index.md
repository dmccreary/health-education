---
title: Steps to Take If You're Worried About a Friend
description: Students apply the correct sequence of response steps when a friend discloses thoughts of suicide or self-harm, ending every path at getting a trusted adult or the 988 Lifeline involved.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Steps to Take If You're Worried About a Friend



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md).

```text
Type: workflow
**sim-id:** steps-to-take-worried-about-friend<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, apply, use

Learning objective: Students apply the correct sequence of response steps when a friend discloses thoughts of suicide or self-harm, ending every path at getting a trusted adult or the 988 Lifeline involved.

Visual style: Mermaid flowchart, linear with one branch point, deliberately simple and calm — no imagery or text depicting a crisis event itself.

Steps: (1) Start node "A Friend Tells You They're Thinking About Suicide or Self-Harm," click reveals this applies whether the friend says it directly or you notice strong warning signs; (2) process node "Listen Without Judgment," click reveals what listening without judgment looks like in practice; (3) process node "Take It Seriously — Do Not Promise Secrecy," click reveals the exact supportive script from the chapter text; (4) decision diamond "Can You Reach a Trusted Adult Right Now?" click reveals that both branches lead to the same outcome; (5a) branch "Yes" leads to "Tell the Trusted Adult Immediately," click reveals this should happen even if the friend asks you not to; (5b) branch "Not Yet" leads to "Call or Text 988 Together," click reveals 988 is available 24/7 and can help right away while you also work on reaching a trusted adult; (6) shared end node "Your Friend Gets Help," click reveals that follow-through — making sure an adult is actually involved — matters as much as the first response.

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Blue for listening/response steps, gray neutral for the decision diamond, green for both paths and the shared end node (both paths are equally valid and both are "success," not a choice between a right and wrong path).

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object. Contains no depiction of a suicide attempt, self-harm act, or method — content is limited to listening, disclosure response, and connecting to help.
```

## Related Resources

- [Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md)
