---
title: Sugar Content and Blood Sugar Response Comparison
description: Students analyze how added sugar in common beverages relates to blood sugar rise-and-fall patterns over two hours, differentiating water, sports drinks, fruit drinks, soda, and energy drinks.
status: complete
library: Chart.js
bloom_level: Analyze (L4)
---

# Sugar Content and Blood Sugar Response Comparison

<iframe src="main.html" width="100%" height="562px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: chart
sim-id: sugar-content-blood-sugar-comparison
Library: Chart.js
Status: Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare, examine, differentiate

Learning objective: Students analyze how added sugar content in common beverages relates to
blood sugar rise-and-fall patterns over time, differentiating water, sports drinks, and regular soda.

Chart type: Combination chart — bar chart (added sugar grams per serving) paired with a
toggleable line chart (blood sugar response over 2 hours).

Data (bar view, grams added sugar per serving): Water 0g; Sports Drink (20oz) 34g;
Fruit Drink (12oz) 33g; Regular Soda (12oz) 39g; Energy Drink (16oz) 54g.

Data (line view, 0-120 minutes after drinking): Water stays flat; Regular Soda rises sharply,
peaks near 30 minutes, then falls below baseline by 90-120 minutes (the "crash").

Title: "How Much Sugar, and What Happens After?" Legend top-right, color-coded by beverage.

Interactive elements: Hover any bar for exact gram value and %DV context; toggle switches
between bar view and line view; clicking a beverage in bar view highlights its line in line view.

Annotations: Dotted reference line on bar view marking the American Heart Association's daily
added-sugar limit for adolescents; label on line view marking the "energy crash" dip.

Implementation: Chart.js with a custom toggle control switching dataset/chart type while
preserving per-beverage color coding.
```

## Related Resources

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
