---
title: Water vs. Other Drinks — Sugar and Caffeine
description: Students compare water to four other common drinks across Calories, added sugar, and caffeine, and explain why water is the strongest everyday choice.
status: complete
library: Chart.js
bloom_level: Analyze (L4)
---

# Water vs. Other Drinks — Sugar and Caffeine

<iframe src="main.html" width="100%" height="562px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md).

```text
Type: chart
**sim-id:** water-vs-other-drinks-chart
**Library:** Chart.js
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare, contrast, examine

Learning objective: Students compare water to four other common drinks across Calories, added sugar, and caffeine, and explain why water is the strongest everyday choice.

Chart type: Grouped bar chart

Purpose: Make the size of the sugar, Calorie, and caffeine differences between water and other common drinks immediately visible and explorable.

X-axis: Drink type (Water, Soda, Fruit Juice Drink, Sports Drink, Sweetened Iced Tea)
Y-axis: Amount (Calories, grams of added sugar, and milligrams of caffeine — shown as three toggleable data series, since units differ)

Data series:
1. Calories (blue bars): Water 0, Soda 100, Fruit Juice Drink 110, Sports Drink 50, Sweetened Iced Tea 90
2. Added Sugar in grams (orange bars): Water 0, Soda 27, Fruit Juice Drink 22, Sports Drink 14, Sweetened Iced Tea 24
3. Caffeine in mg (purple bars): Water 0, Soda 26, Fruit Juice Drink 0, Sports Drink 0, Sweetened Iced Tea 35

Title: "Water vs. Other Drinks: What's Really Inside an 8 oz Serving?"
Legend: Toggle buttons to show/hide each of the three data series independently

Interactive features:
- Hovering any bar shows an exact tooltip value and unit
- Toggle buttons let the learner isolate just Calories, just sugar, or just caffeine to focus the comparison
- Clicking the Water bar in any series highlights it in green across all visible series to anchor the comparison point

Annotations:
- Callout above the Soda and Sweetened Iced Tea caffeine bars: "Caffeine can affect sleep and heart rate"
- Callout above Water: "Zero everything — the everyday default"

Implementation: Chart.js grouped bar chart with dataset toggle controls wired to legend clicks.
```

## Related Resources

- [Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md)
