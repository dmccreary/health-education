---
title: When to Tell a Trusted Adult
description: Students recall common signs of emotional struggle and recognize that telling a trusted adult is always the right response.
status: scaffold
library: Mermaid
bloom_level: Remember (L1)
---

# When to Tell a Trusted Adult



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md).

```text
Type: workflow
**sim-id:** when-to-tell-trusted-adult<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, recognize

Learning objective: Students recall common signs of emotional struggle and recognize that telling a trusted adult is always the right response.

Purpose: Show a simple, reassuring decision path from noticing a sign to getting help

Visual style: Simple vertical flowchart with rounded boxes, calm colors, no decision diamonds that could feel like a "test" — every path leads to the same caring outcome

Steps:
1. Start: "I notice something" — hover text: "Maybe a friend seems very sad for many days, or doesn't want to play anymore, or says 'I don't feel good inside.'"
2. Process: "I feel it myself, or I see it in someone else" — hover text: "It's just as important to notice this in yourself as it is to notice it in a friend."
3. Process: "I tell a trusted adult" — hover text: "A parent, teacher, school counselor, or another caring grown-up at home or school."
4. End: "The trusted adult helps" — hover text: "Trusted adults know how to help, or how to find more support — you don't have to solve it alone."

Every node includes a click handler opening an infobox with the hover text described above (Mermaid `click` directive on each node).

Color coding:
- Soft blue: noticing steps
- Soft green: telling a trusted adult
- Soft gold: getting help (end state)

Implementation: Mermaid flowchart with `click NodeId call showInfo("text")` directives on all four nodes, each opening an infobox with the corresponding hover text
```

## Related Resources

- [Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md)
