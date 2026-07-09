---
title: Personal Health Goal Tracker
description: Students track simulated progress toward a personal health goal over a two-week period and reflect on whether the goal was met.
status: scaffold
library: Chart.js
bloom_level: Evaluate (L5)
---

# Personal Health Goal Tracker



<iframe src="main.html" width="100%" height="522px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** personal-health-goal-tracker<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: track, assess, reflect

Learning objective: Students track simulated progress toward a personal health goal over a two-week period and reflect on whether the goal was met.

Canvas layout: Left (450px) a bar chart showing daily progress toward a chosen goal across 14 days; right (200px) goal-setup controls and a reflection prompt panel.

Visual elements: Bar chart with one bar per day, color-coded green (goal met that day) or gray (not met); goal-setup dropdown ("Drink water instead of soda at lunch," "Get 9 hours of sleep," "Walk or bike to school," "Eat a vegetable at dinner"); a "days met" counter.

Interactive controls: Dropdown to choose a sample goal; click any day's bar to toggle it met/not-met and see the counter and chart update live; "Reflect" button reveals reflection questions once at least 7 days are logged.

Default parameters: 14-day window, goal defaults to "Drink water instead of soda at lunch," all days start gray.

Behavior: Hovering a bar shows the exact day and status in a tooltip. Clicking "Reflect" after logging days shows: "You met your goal 9 out of 14 days. What helped on the days it worked? What got in the way on the days it didn't?"

Instructional Rationale: Evaluate-level objective, so the tool has students assess their own simulated progress and reflect on patterns rather than just viewing a static result.

Implementation notes: Chart.js bar chart with click-to-toggle bar data; goal objects stored with label and target description; reflection panel populated dynamically based on the ratio of met/unmet days.
```

## Related Resources

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
