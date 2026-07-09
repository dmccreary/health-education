---
title: The DECIDE Framework Walkthrough
description: Apply the six-step DECIDE decision-making model
status: scaffold
library: Mermaid
bloom_level: Apply<br/>
---

# The DECIDE Framework Walkthrough



<iframe src="main.html" width="100%" height="782px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md).

```text
Type: workflow

**sim-id:** decide-framework-walkthrough<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply<br/>
Bloom Taxonomy Verb: use, demonstrate

Learning objective: Apply the six-step DECIDE decision-making model
(Define, Explore, Consider, Identify, Decide, Evaluate) to a realistic
health scenario, tracing how each step builds on the last.

Purpose: Give learners a persistent visual anchor for the model referenced
throughout the chapter, using Maya's ride-home scenario as the worked
example at every step.

Visual style: Mermaid flowchart, six sequential nodes in a loop shape (the
final "Evaluate" node loops back to "Define," showing decisions feed future
decisions); every node has a click handler.

Steps:
1. "Define" — click: "Maya defines the real decision: how do I get home
   safely tonight, given that my planned ride has been drinking?"
2. "Explore" — click: "Maya lists real options: ride with her friend, call
   a parent, use a rideshare app, ask another sober friend, stay over."
3. "Consider" — click: "For each option, Maya considers consequences —
   physical safety, relationships, cost, curfew, honesty with parents."
4. "Identify" — click: "Maya compares consequences against her values and
   identifies which option best protects health and safety."
5. "Decide" — click: "Maya acts: she calls her mother for a ride and texts
   her friend that she is not getting in the car."
6. "Evaluate" — click: "Afterward, Maya reflects: did this decision keep
   me safe? What would I do differently next time?" Loops back to Define
   for the next decision.

Color coding: Each step a distinct color (blue, teal, gold, orange, red,
purple) in a circular flow to emphasize decision-making as a repeating
cycle, not a one-time event.

Implementation: Mermaid flowchart with `click` directives opening an
infobox reusing the text above for each node.
```

## Related Resources

- [Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md)
