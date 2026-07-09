---
title: Comparing Sugar and Caffeine in Drinks
description: Students compare the sugar and caffeine levels of six common drinks on a simple 0-5 scale and analyze which drinks are good everyday choices.
status: complete
library: Chart.js
bloom_level: Analyze (L4)
---

# Comparing Sugar and Caffeine in Drinks

<iframe src="main.html" width="100%" height="542px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md).

```text
Type: chart
sim-id: drink-comparison-chart
Library: Chart.js

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare, contrast, differentiate

Learning objective: Students compare the sugar and caffeine content of six common drinks and
analyze the pattern between added sugar/caffeine and how "everyday-healthy" a drink is.

Chart type: Grouped bar chart with a toggle/filter

X-axis: Drink name (Water, Plain Milk, Fruit Juice, Soda, Sports Drink, Sweetened Iced Tea)
Y-axis: Amount on a simple 0-5 "sweetness scale" for sugar and a separate 0-5 "caffeine scale"

Data series:
1. Sugar Level (gold): Water 0, Plain Milk 1, Fruit Juice 4, Soda 5, Sports Drink 4, Sweetened Iced Tea 4
2. Caffeine Level (blue): Water 0, Plain Milk 0, Fruit Juice 0, Soda 3, Sports Drink 0, Sweetened Iced Tea 3

Title: "Comparing Sugar and Caffeine in Common Drinks"
Legend: Top-right, gold = sugar level, blue = caffeine level

Interactive elements:
- Hover any bar for a tooltip with the drink name, the level, and a one-sentence explanation
- Toggle buttons: "Show Sugar Only," "Show Caffeine Only," "Show Both"
- Click a drink to highlight both of its bars and show an everyday-choice caption

Annotations:
- A dashed horizontal line at level 1 labeled "Best Everyday Zone"

Implementation: Chart.js grouped bar chart with a button group wired to dataset visibility
toggling and an onHover tooltip callback.
```

## Related Resources

- [Chapter 2: Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md)
