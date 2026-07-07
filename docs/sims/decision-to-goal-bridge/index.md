---
title: Decision-Making to Goal-Setting Bridge
description: Explain how each step of the DECIDE decision-making
status: scaffold
library: vis-network
bloom_level: Understand<br/>
---

# Decision-Making to Goal-Setting Bridge



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md).

```text
Type: graph-model

**sim-id:** decision-to-goal-bridge<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Understand<br/>
Bloom Taxonomy Verb: compare, exemplify

Learning objective: Explain how each step of the DECIDE decision-making
model maps onto an equivalent step of the goal-setting process, showing
goal-setting as decision-making applied repeatedly over time.

Node types: Two parallel chains of six nodes each — top chain "Decision-
Making Steps" (Define, Explore, Consider, Identify, Decide, Evaluate);
bottom chain "Goal-Setting Steps" (Evaluate Focus Area, Explore Process
Type, Formulate Strategies, Choose Strategy, Act on Plan, Evaluate
Outcomes).

Edge types: A horizontal "maps to" edge connecting each top node to its
corresponding bottom node (e.g., "Define" maps to "Evaluate Focus Area";
"Explore" maps to "Explore Process Type"; "Consider" and "Identify" map to
"Formulate Strategies" and "Choose Strategy"; "Decide" maps to "Act on
Plan"; "Evaluate" maps to "Evaluate Outcomes").

Sample data: Clicking any "maps to" edge opens an infobox explaining the
parallel in one sentence, e.g., "Just as you first Define a decision, you
first must Evaluate which health focus area actually deserves a goal."

Layout: Two horizontal rows, decision-making on top, goal-setting on
bottom, aligned in columns.

Interactive features: Hover a node for its definition; click a connecting
edge for the mapping explanation; zoom and pan enabled.

Visual styling: Top row in the six DECIDE colors from the earlier diagram;
bottom row in matching shades one tone lighter, visually pairing each step.

Legend: "Decision-making step" vs. "Goal-setting step," with the mapping
edges explained as "same underlying skill, applied over time."

Implementation: vis-network with a fixed two-row hierarchical layout.
```

## Related Resources

- [Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md)
