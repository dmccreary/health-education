---
title: Sleep Debt Tracker
description: Students explain why adequate sleep matters for growth and learning by tracking a week of sleep hours against the 9-12 hour recommendation and observing the effects for each night.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Sleep Debt Tracker



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md).

```text
Type: microsim
**sim-id:** sleep-debt-tracker<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize, interpret

Learning objective: Students explain why adequate sleep matters for growth and learning by tracking a week of sleep hours against the 9-12 hour recommendation and observing the effects for each night.

Canvas layout: Left (450px) 7-day bar chart of hours slept; right (200px) sliders and effects panel.

Visual elements: Seven bars (Mon-Sun); shaded reference band for the healthy 9-12 hour range; effects panel with icons for learning, mood, growth, immune system.

Interactive controls: Seven sliders (4-12 hours each, one per day); running "sleep debt" display; "Reset to Healthy Week" button (sets all sliders to 10).

Default parameters: Mon 7, Tue 6, Wed 9, Thu 7, Fri 10, Sat 11, Sun 8.

Behavior: Bars below the healthy band dim and trigger notes like "Less growth hormone released"; bars in/above the band brighten and show notes like "Memories get organized well." Sleep debt total updates live as sliders move.

Instructional Rationale: Understand-level objective, so the design shows concrete per-night data next to plain-language effects rather than animation, letting students connect a number to a real consequence.

Implementation notes: p5.js; store the healthy range as a constant; recompute bar color and effects text on slider change.
```

## Related Resources

- [Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md)
