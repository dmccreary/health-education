---
title: The Social Pain of Exclusion
description: Students analyze a short scenario log of repeated exclusion and distinguish its cumulative mental health effects from a single isolated incident.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# The Social Pain of Exclusion



<iframe src="main.html" width="100%" height="514px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md).

```text
Type: microsim
**sim-id:** social-pain-of-exclusion<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, differentiate

Learning objective: Students analyze a short scenario log of repeated exclusion and distinguish its cumulative mental health effects from a single isolated incident.

Layout: Two side-by-side scenario logs — "Single Incident" (one entry) and "Repeated Exclusion" (four weekly entries showing the same student left out of the same group again and again). Below each log, a simplified "Sense of Belonging" gauge (0-100).

Interactive controls: Student clicks "Play" on each log; the gauge updates step by step as each log entry is revealed, with a caption naming the likely emotional effect at each step; a "Compare Results" button places both final gauge readings side by side with a short explanation of why repetition matters.

Default parameters: Single Incident log starts and ends near a modest dip (85 to 75); Repeated Exclusion log shows a steeper cumulative decline (85 to 40) across four entries.

Instructional Rationale: Distinguishing a one-time event from a cumulative pattern requires examining information across time and comparing outcomes, which is Analyze-level; a step-through comparison is used instead of a single static scenario.

Implementation notes: p5.js. Scenario and gauge data stored as arrays; responsive layout for window resize. No scenario content depicts violence — only social exclusion and its emotional effects.
```

## Related Resources

- [Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md)
