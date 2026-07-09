---
title: Sugar Crash Story
description: Students describe why limiting caffeinated and sugary drinks matters by interpreting a simple energy-over-time line chart comparing a sugary drink to water.
status: scaffold
library: Chart.js
bloom_level: Understand (L2)
---

# Sugar Crash Story



<iframe src="main.html" width="100%" height="522px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md).

```text
Type: chart
**sim-id:** sugar-crash-line-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, explain, interpret

Learning objective: Students describe why limiting caffeinated and sugary drinks matters by interpreting a simple energy-over-time line chart comparing a sugary drink to water.

Chart type: Line chart

Purpose: Show how energy level changes over the two hours after drinking a sugary soda compared to drinking water, illustrating the "quick spike, then crash" pattern.

X-axis: Time after drinking (0, 15, 30, 45, 60, 90, 120 minutes)
Y-axis: Felt energy level (Low, Medium, High — simple 3-point scale)

Data series:
1. Sugary drink (orange line):
   - 0 min: Medium
   - 15 min: High
   - 30 min: High
   - 45 min: Medium
   - 60 min: Low
   - 90 min: Low
   - 120 min: Medium

2. Water (blue line):
   - 0 min: Medium
   - 15 min: Medium
   - 30 min: Medium
   - 45 min: Medium
   - 60 min: Medium
   - 90 min: Medium
   - 120 min: Medium

Title: "Energy After a Sugary Drink vs. Water"
Legend: Position top-right

Interactive features: Hovering any point on either line reveals the exact energy level and a one-sentence caption (e.g., "30 minutes: sugary drinks often cause a quick burst of energy that doesn't last."); a toggle button lets students show or hide each line to compare them one at a time

Annotations:
- Callout near the orange line's peak: "Quick spike!"
- Callout near the orange line's dip: "Energy crash"
- Callout on the blue line: "Steady, no crash"

Implementation: Chart.js line chart with point hover tooltips and a toggle-series legend
```

## Related Resources

- [Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md)
