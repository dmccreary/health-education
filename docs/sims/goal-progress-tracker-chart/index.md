---
title: My Goal Progress Tracker
description: Students reflect on the results of working toward a personal health-related goal by reviewing a week of sample progress data and judging what went well and what to change.
status: scaffold
library: Chart.js
bloom_level: Evaluate (L5)
---

# My Goal Progress Tracker



<iframe src="main.html" width="100%" height="547px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md).

```text
Type: chart
**sim-id:** goal-progress-tracker-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: assess, judge, reflect

Learning objective: Students reflect on the results of working toward a personal health-related goal by reviewing a week of sample progress data and judging what went well and what to change.

Chart type: Bar chart with a toggle to a simple weekly calendar view

Purpose: Show a sample week of goal-tracking data ("Drink water instead of soda") so students can practice reflecting on progress rather than only setting goals

X-axis: Day of the week (Mon-Sun)
Y-axis: Goal met? (Yes = full bar height, No = short bar height)

Data series:
- Sample week: Mon (Yes), Tue (Yes), Wed (No), Thu (Yes), Fri (No), Sat (Yes), Sun (Yes)

Interactive features (REQUIRED):
- Hover any bar to see a tooltip with that day's result and a short reflection prompt, e.g., hovering Wednesday shows "No -- what might have made this day harder? A busy afternoon? Forgetting the water bottle?"
- Click "Toggle My Own Week" button to let a student (via teacher-led class discussion) click each day to mark Yes/No and generate their own bar chart live
- Button: "Show Reflection Questions" reveals three prompts below the chart: "Which days were easiest? Which were hardest? What is one thing to try next week?"

Title: "My Goal Progress: Drink Water Instead of Soda"
Legend: Green bars = goal met, gray bars = not met that day

Color scheme: Green for "Yes," soft gray for "No" -- non-judgmental, no red or negative coloring

Annotations: Small star icon over the day with the longest streak

Implementation: Chart.js bar chart with custom click handling to let a class build its own sample week interactively
```

## Related Resources

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
