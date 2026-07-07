---
title: The Behavior-Change Cycle
description: Apply the four-step behavior-change cycle (evaluate
status: scaffold
library: Mermaid
bloom_level: Apply<br/>
---

# The Behavior-Change Cycle



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md).

```text
Type: workflow

**sim-id:** behavior-change-cycle<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply<br/>
Bloom Taxonomy Verb: use, demonstrate

Learning objective: Apply the four-step behavior-change cycle (evaluate
supports, evaluate barriers, adapt the behavior, evaluate impact) to a
realistic personal health practice, tracing how each step feeds the next.

Purpose: Give learners a persistent visual anchor for the cycle, using
Jordan's active-commute scenario as the worked example at every step, and
showing the cycle looping rather than ending.

Visual style: Mermaid flowchart, four sequential nodes arranged in a closed
loop; every node has a click handler.

Steps:
1. "Evaluate Supports" — click: "Jordan identifies what already helps: a
   safe sidewalk for most of the route, a bike, a friend who lives nearby
   and also wants to walk, and a school that allows early arrival."
2. "Evaluate Barriers" — click: "Jordan identifies what gets in the way:
   one busy intersection with no crosswalk, mornings when it's raining,
   and a heavier backpack on test days."
3. "Adapt the Behavior" — click: "Jordan changes the plan to work with
   supports and around barriers: walk with the friend on clear days, get a
   ride only on rain days, and leave a spare set of test-day materials at
   school to lighten the backpack."
4. "Evaluate Impact" — click: "After three weeks, Jordan checks: did
   stress before first period actually go down? Did the intersection
   barrier cause any near-misses?" Loops back to Evaluate Supports for the
   next adjustment.

Color coding: Four steps in four distinct colors (teal, orange, gold,
purple) arranged in a circular flow to emphasize that behavior change is an
ongoing cycle, not a single decision.

Implementation: Mermaid flowchart with `click` directives opening an
infobox reusing the text above for each node.
```

## Related Resources

- [Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md)
