---
title: Health Promotion Levers Across Levels
description: Examine how a single health-promotion goal can be
status: scaffold
library: vis-network
bloom_level: Analyze<br/>
---

# Health Promotion Levers Across Levels



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md).

```text
Type: graph-model

**sim-id:** health-promotion-levers-map<br/>
**Library:** vis-network<br/>
**Status:** Specified

Bloom Taxonomy: Analyze<br/>
Bloom Taxonomy Verb: examine, differentiate

Learning objective: Examine how a single health-promotion goal can be
pursued through distinct but reinforcing levers at the individual,
interpersonal, community, environmental, and policy levels.

Node types: One central node "Health Promotion Goal" with a dropdown to
select a goal (reducing student stress, increasing physical activity,
reducing vaping among teens). Five surrounding level nodes: Individual,
Interpersonal, Community, Environmental, Policy.

Edge types: An edge from the central goal to each level node, labeled with
a concrete promotion action at that level for the selected goal.

Sample data: For "reducing vaping among teens" — Individual: "peer-led
workshop on nicotine's effects on the teen brain"; Interpersonal: "parents
trained to discuss vaping without shaming"; Community: "youth center offers
vaping-cessation support group"; Environmental: "retailers required to
store vape products behind the counter"; Policy: "local ordinance raises
minimum sale age enforcement and taxes flavored products."

Interactive features: Clicking a level node opens an infobox with the
action, plus a one-sentence note on how it reinforces at least one other
level (e.g., the policy change makes retailers' environmental compliance
enforceable). Learner can drag nodes, zoom, and pan. A "Show
reinforcement links" toggle adds dashed edges between levels that support
each other.

Layout: Radial/star, goal at center, five levels surrounding it.

Color scheme: Individual (gold), Interpersonal (blue), Community (teal),
Environmental (green), Policy (navy) — consistent with the socio-ecological
color coding introduced in Chapter 13.
```

## Related Resources

- [Chapter 15: Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md)
