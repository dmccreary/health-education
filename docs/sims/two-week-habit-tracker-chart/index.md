---
title: Two-Week Habit Tracker Chart
description: Students interpret and interact with a sample two-week tracking chart for a health goal, practicing how to read progress data and decide whether a plan needs adjustment.
status: scaffold
library: Chart.js
bloom_level: Apply (L3)
---

# Two-Week Habit Tracker Chart



<iframe src="main.html" width="100%" height="542px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Health Literacy and Goal Setting](../../bands/grade-4/chapters/06-health-literacy-and-goals/index.md).

```text
Type: chart
**sim-id:** two-week-habit-tracker-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students interpret and interact with a sample two-week tracking chart for a health goal, practicing how to read progress data and decide whether a plan needs adjustment.

Chart type: Bar chart with a goal line overlay

Purpose: Show a realistic two-week tracking record for the sample "walk to school" goal, including a dip that models a barrier occurring, to teach students how to read and respond to tracking data

X-axis: Day (Day 1 through Day 14)

Y-axis: Completed goal that day? (1 = Yes, 0 = No)

Data series:
1. Daily completion (teal bars):
   - Days 1-3: 1, 1, 1
   - Day 4: 0 (rainy day barrier)
   - Days 5-7: 1, 1, 0 (weekend, goal only applies on school days — shown as grayed "not applicable")
   - Days 8-10: 1, 1, 1
   - Day 11: 0 (forgot)
   - Days 12-14: 1, 1, 1

2. Target line (gold dashed line): drawn at a 3-day-per-week pace to show the intended goal frequency

Title: "Two Weeks of Tracking: Walk to School Goal"
Legend: Position top-right, labeled "Completed," "Not a School Day," and "Target Pace"

Interactive features:
- Hover any bar to see the day number and a one-line note (e.g., "Day 4: Rain — used the indoor movement backup plan")
- Click a "Show Trend" button to display a simple summary: "9 out of 10 applicable school days completed — plan is working well"

Annotations: Small callout above Day 4 reading "Barrier occurred — backup plan used" and above Day 11 reading "Missed — no barrier plan existed yet"

Implementation: Chart.js bar chart with a line dataset overlay for the target pace, tooltip callbacks for daily notes, and a button-triggered summary calculation.
```

## Related Resources

- [Chapter 6: Health Literacy and Goal Setting](../../bands/grade-4/chapters/06-health-literacy-and-goals/index.md)
