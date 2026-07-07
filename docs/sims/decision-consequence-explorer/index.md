---
title: Decision Consequence Explorer
description: Students examine multiple options for a health-related situation and compare the likely short-term and long-term consequences of each.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Decision Consequence Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** decision-consequence-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, compare, differentiate

Learning objective: Students examine multiple options for a health-related situation and compare the likely short-term and long-term consequences of each.

Canvas layout: Left (450px) situation card with a branching tree showing 2-3 options; right (200px) consequence panel that updates based on the selected branch.

Visual elements: Situation card (e.g., "Your team invites you to walk instead of ride the bus home, but it means arriving 20 minutes later"); branch buttons for each option; consequence panel showing short-term and long-term effects.

Interactive controls: Click an option branch to reveal its consequence panel; "Compare Both" shows both consequence panels side by side; "New Situation" cycles through 6 situations (sleep, screen time, food choices, physical activity, honesty with a trusted adult, managing a disagreement).

Behavior: Selecting "walk with the team" reveals "Short-term: more physical activity and time with friends. Long-term: arriving later means less time for homework tonight."

Instructional Rationale: Analyze-level objective, so the tool has students break down and compare consequences across branches rather than being told a single correct answer.

Implementation notes: p5.js; situations stored as objects with an options array, each option containing short-term and long-term consequence text.
```

## Related Resources

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
