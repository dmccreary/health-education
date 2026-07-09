---
title: Sugar and Salt Detective Chart
description: Students compare added sugar and sodium content across common foods and drinks to identify which choices are occasional treats versus everyday options.
status: scaffold
library: Chart.js
bloom_level: Analyze (L4)
---

# Sugar and Salt Detective Chart



<iframe src="main.html" width="100%" height="542px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md).

```text
Type: chart
**sim-id:** sugar-salt-detective-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare, examine, differentiate

Learning objective: Students compare added sugar and sodium content across common foods and drinks to identify which choices are occasional treats versus everyday options.

Chart type: Grouped bar chart

Purpose: Show how added sugar (grams) and sodium (milligrams) vary widely across common foods and drinks, helping students see which items are "everyday" versus "occasional treat" choices

X-axis: Food/drink item (Water, Milk, Apple, Soda, Sports Drink, Potato Chips, Canned Soup, Granola Bar, Candy Bar)
Y-axis: Two scales — grams of added sugar (left) and milligrams of sodium (right)

Data series:
1. Added Sugar in grams (gold bars):
   - Water: 0g, Milk: 0g (natural sugar not counted), Apple: 0g added, Soda: 39g, Sports Drink: 21g, Potato Chips: 0g, Canned Soup: 1g, Granola Bar: 9g, Candy Bar: 24g
2. Sodium in milligrams (blue bars):
   - Water: 0mg, Milk: 105mg, Apple: 2mg, Soda: 45mg, Sports Drink: 270mg, Potato Chips: 170mg, Canned Soup: 890mg, Granola Bar: 95mg, Candy Bar: 40mg

Title: "How Much Sugar and Salt Are Really in There?"
Legend: Position top-right, labeled "Added Sugar (g)" and "Sodium (mg)"

Interactive elements:
- Hovering any bar reveals the exact value and a one-sentence note (e.g., "Canned soup can be surprisingly high in sodium even though it doesn't taste very salty.")
- Toggle buttons let students show only the sugar series, only the sodium series, or both together
- Clicking a food label under the x-axis highlights both of that food's bars and displays a short caption on whether it's better suited as an everyday food or an occasional treat

Color scheme: Gold for sugar, blue for sodium, with a soft highlight color for the selected item

Implementation: Chart.js grouped bar chart with dual y-axes and custom tooltip callbacks; toggle buttons control dataset visibility.
```

## Related Resources

- [Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md)
