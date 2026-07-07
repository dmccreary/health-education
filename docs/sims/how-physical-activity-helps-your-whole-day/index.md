---
title: How Physical Activity Helps Your Whole Day
description: Students recall and identify the different benefits of physical activity by exploring a simple bar chart showing how many classmates in a pretend survey named each benefit.
status: scaffold
library: Chart.js
bloom_level: Remember (L1)
---

# How Physical Activity Helps Your Whole Day



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md).

```text
Type: chart
**sim-id:** how-physical-activity-helps-your-whole-day<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, name

Learning objective: Students recall and identify the different benefits of physical activity by exploring a simple bar chart showing how many classmates in a pretend survey named each benefit.

Chart type: Horizontal bar chart

Purpose: Show, in kid-friendly terms, the variety of benefits physical activity provides, using a simple pretend classroom survey ("What do you notice after you play outside?")

X-axis: Number of classmates who noticed this benefit (0-20, pretend survey of 20 students)
Y-axis: Benefit categories (icons plus short labels)

Data series (single series, one color per bar for visual variety):
- "I feel happier" (green bar): 18
- "I have more energy" (orange bar): 15
- "I focus better in class" (blue bar): 12
- "I sleep better at night" (purple bar): 10
- "My muscles feel stronger" (red bar): 14

Title: "What Grade 1 Friends Noticed After Being Active"
Legend: Not needed (single series with labeled bars)

Interactive features:
- Hover over each bar to reveal a tooltip with the exact number and a one-sentence explanation of that benefit
- Click a bar to highlight it and show a matching simple icon animation (e.g., a sun icon for energy)

Annotations:
- Small icon next to each bar label (heart for feelings, lightning bolt for energy, brain for focus, moon for sleep, muscle for strength)

Implementation: Chart.js horizontal bar chart with tooltip callbacks; icons rendered as HTML labels next to axis ticks
```

## Related Resources

- [Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md)
