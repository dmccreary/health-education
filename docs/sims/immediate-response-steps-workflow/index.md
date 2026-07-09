---
title: Immediate Response Steps Workflow
description: Students apply the correct sequence of response steps
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Immediate Response Steps Workflow



<iframe src="main.html" width="100%" height="922px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md).

```text
Type: workflow

**sim-id:** immediate-response-steps-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: demonstrate, apply, use

Learning objective: Students apply the correct sequence of response steps
when they recognize a suicide or self-harm warning sign in themselves or
someone else, with every path ending in a trusted adult or 988 becoming
involved.

Visual style: Mermaid flowchart, linear with one branch point, deliberately
calm and text-only — no imagery or wording depicting a suicide attempt,
self-harm act, or method

Nodes (all clickable, `click NodeId call showInfo("term")`):
1. "Warning Sign Noticed (In Yourself or a Friend)" — click text: "This
   applies whether someone says it directly or shows strong behavioral,
   verbal, or emotional signs"
2. "Take It Seriously Immediately" — click text: "Do not wait to see if
   the feeling passes on its own"
3. "Do Not Promise Secrecy" — click text: "Use the direct script: 'I care
   about you too much to keep this a secret. I need to get help.'"
4. "Can You Reach a Trusted Adult Right Now?" (decision diamond) — click
   text: "Both paths from here lead to the same outcome: getting help
   involved without delay"
5a. "Yes" branch to "Tell the Trusted Adult Immediately" — click text:
   "This happens even if the person at risk asks you not to tell anyone"
5b. "Not Yet" branch to "Call or Text 988 Right Now" — click text: "988 is
   available 24/7, free and confidential, while you also work on reaching
   a trusted adult"
6. Shared end node "Help Is Now Involved" — click text: "Staying engaged
   until a trusted adult or crisis counselor has taken over matters as
   much as the first response"

Connections: 1→2, 2→3, 3→4, 4→5a, 4→5b, 5a→6, 5b→6

Color coding: blue for response steps, gray for the decision diamond,
green for both branches and the shared end node (both paths are equally
valid, immediate responses)

Interactive features: click any node for its infobox; no depiction of a
crisis event, only response actions

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function; content strictly limited to listening,
disclosure response, and connecting to help — no method-related content
anywhere in the specification
```

## Related Resources

- [Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md)
