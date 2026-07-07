---
title: Steps for Saying No and Getting Help
description: Students explain the sequence of actions to take when facing an unwanted touch, from saying no through telling a trusted adult.
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# Steps for Saying No and Getting Help



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Body Safety and Speaking Up](../../bands/grade-2/chapters/06-body-safety-speaking-up/index.md).

```text
Type: workflow
**sim-id:** saying-no-getting-help-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, summarize

Learning objective: Students explain the sequence of actions to take when facing an unwanted touch, from saying no through telling a trusted adult.

Purpose: Show the four-step process for saying no or exiting an unwanted-touch situation and getting help, as a simple, linear flowchart

Visual style: Mermaid flowchart (graph TD), four boxes connected top to bottom, plain and calm in tone -- no urgent or alarming imagery, calm color palette

Nodes (each must have a click handler opening an infobox with plain, sincere definition text):
1. "This Touch Feels Wrong" (start node) -- click shows "This is the moment you notice a touch that feels unwanted, confusing, or unsafe. Trust that feeling."
2. "Say No or Move Away" -- click shows "Use a strong voice to say no, or simply step away. You do not need permission to do either."
3. "Go Find a Trusted Adult" -- click shows "Walk to a parent, guardian, teacher, or school counselor as soon as you can."
4. "Keep Telling Until Someone Helps" -- click shows "Tell exactly what happened. If the first adult does not understand or help, tell another trusted adult. You will never be in trouble for telling."

Connections: Straight top-to-bottom arrows connecting node 1 to node 2, node 2 to node 3, and node 3 to node 4 -- no branches, since the same steps apply every time

Color coding: Calm blue-gray tones throughout; no red or alarming colors, matching the plainly sincere tone required for this content

Interactive features: click directive on every node in the Mermaid syntax, mapped to a JavaScript function that opens an infobox with the definition text above

Implementation: Mermaid flowchart with click bindings; render inside a small wrapper page that displays the infobox below the diagram. Keep the visual plain, calm, and reassuring throughout.
```

## Related Resources

- [Chapter 6: Body Safety and Speaking Up](../../bands/grade-2/chapters/06-body-safety-speaking-up/index.md)
