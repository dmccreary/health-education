---
title: Include-a-Classmate Scenario Sorter
description: Students apply strategies for including and supporting others by choosing the most inclusive response to short school scenarios.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Include-a-Classmate Scenario Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md).

```text
Type: microsim
**sim-id:** include-a-classmate-scenario-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply strategies for including and supporting others by choosing the most inclusive response to short school scenarios.

Canvas layout:
- Left side (450px): Scenario card describing a short classroom or playground situation
- Right side (200px): Three response option buttons and a feedback panel

Visual elements:
- Scenario card with simple line-art icon (a lunch table, a group project, a playground game)
- Three response cards worded as things a student could say or do
- Feedback panel showing a short explanation after a choice is made

Interactive controls:
- Click one of three response cards to answer
- Button: "Why This Helps" — reveals an explanation connecting the choice to inviting, making room, speaking up, checking in, or sharing information
- Button: "Next Scenario" — cycles through a bank of 6 scenarios

Default parameters:
- Starts on Scenario 1: "A new student is standing alone at recess, watching a kickball game."

Behavior:
- Each scenario has one response that best demonstrates including and supporting others; the other two responses are either neutral (doing nothing) or mildly exclusionary
- Feedback is encouraging and explains why the strongest response builds belonging, without shaming choices that were not ideal

Instructional Rationale: This is an Apply-level objective, so the pattern is scenario-based practice with immediate feedback, letting students rehearse recognizing and choosing inclusive actions in realistic situations.

Implementation notes: Use p5.js. Store scenarios as objects with a description, three response strings, a "best" flag, and an explanation string; keep artwork simple and warm in tone.
```

## Related Resources

- [Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md)
