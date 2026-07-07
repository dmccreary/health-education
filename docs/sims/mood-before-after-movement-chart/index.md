---
title: Mood Before and After Movement Chart
description: Students interpret survey-style data comparing self-reported mood before and after different physical activities, summarizing the mood-boosting effect of movement.
status: scaffold
library: Chart.js
bloom_level: Understand (L2)
---

# Mood Before and After Movement Chart



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md).

```text
Type: chart
**sim-id:** mood-before-after-movement-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: interpret, summarize, compare

Learning objective: Students interpret survey-style data comparing self-reported mood before and after different physical activities, summarizing the mood-boosting effect of movement.

Chart type: Grouped bar chart

Purpose: Show that self-reported mood scores rise after physical activity across several different activity types, including cultural traditions

X-axis: Activity type (Recess Play, Community Dance, Team Sport Practice, Walking, Traditional Game)

Y-axis: Average self-reported mood score (scale of 1-10, where 10 is "very happy and calm")

Data series:
1. Before activity (blue bars):
   - Recess Play: 6
   - Community Dance: 6
   - Team Sport Practice: 5
   - Walking: 6
   - Traditional Game: 6

2. After activity (gold bars):
   - Recess Play: 8
   - Community Dance: 9
   - Team Sport Practice: 8
   - Walking: 7
   - Traditional Game: 9

Title: "How Mood Changes Before and After Physical Activity"
Legend: Position top-right, labeled "Before" and "After"

Interactive features:
- Hover over any bar to see the exact score and a one-sentence explanation of that activity
- Click a legend entry to toggle the Before or After series on/off for easier comparison

Annotations: Small label above the largest gains (Community Dance and Traditional Game) reading "Biggest mood boost"

Implementation: Chart.js bar chart with tooltip callbacks and legend toggle enabled (legend.onClick default behavior).
```

## Related Resources

- [Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md)
