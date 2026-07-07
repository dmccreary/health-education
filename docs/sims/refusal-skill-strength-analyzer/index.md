---
title: Refusal Skill Strength Analyzer
description: Evaluate and rank six sample refusal-line examples by
status: scaffold
library: Chart.js
bloom_level: Evaluate<br/>
---

# Refusal Skill Strength Analyzer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md).

```text
Type: infographic

**sim-id:** refusal-skill-strength-analyzer<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate<br/>
Bloom Taxonomy Verb: rank, critique

Learning objective: Evaluate and rank six sample refusal-line examples by
strength using the four criteria (directness, verbal/nonverbal consistency,
alternative/exit plan, resilience to repeated pressure), building on
refusal skills introduced in Chapters 3, 4, and 10.

Purpose: Move learners from recalling refusal lines to ranking their
relative strength and justifying the ranking against explicit criteria.

Chart type: Horizontal stacked bar chart, one bar per refusal-line example,
segments representing the four criteria scored 0-1.

X-axis: Composite strength score (0-4)
Y-axis: Six example refusal lines (e.g., "Um, maybe, I guess so" vs. "No,
I'm not doing that — I'm heading to Jae's, come with me if you want")

Data series: Four stacked segments per bar (Directness, Consistency,
Exit plan, Resilience), each pre-scored 0 or 1 based on the example text,
used as the "expert" answer key revealed after the learner submits their
own ranking.

Interactive elements: Learner first drags the six examples into their own
ranked order (weakest to strongest); clicking "Reveal scoring" renders the
stacked bar chart and the learner compares their ranking to the computed
composite scores; hovering any bar segment shows the specific rationale for
that criterion's score.

Title: "How Strong Is That Refusal?"
Legend: Four criteria colors, positioned top-right.

Color scheme: Four distinct colors per criterion segment (e.g., blue =
directness, teal = consistency, gold = exit plan, orange = resilience).

Implementation: Chart.js horizontal stacked bar chart with a custom
drag-to-rank pre-step built in HTML/JS before the chart renders.
```

## Related Resources

- [Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md)
