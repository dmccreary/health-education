---
title: Evaluating Beverages - What's Actually in the Bottle?
description: Compare eight common beverages on added sugar, caffeine, and electrolytes, then rank them for everyday hydration against a reasoned expert ranking.
status: complete
library: Chart.js
bloom_level: Evaluate (L5)
---

# Evaluating Beverages: What's Actually in the Bottle?

<iframe src="main.html" width="100%" height="642px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## About This Chart

Use the **metric toggle buttons** to switch the Y-axis between added sugar
(g per 12 oz), caffeine (mg per 12 oz), and a relative 0-5 electrolyte
index. Hover any bar for the exact value plus a one-sentence evidence note.
On the sugar view, a dashed reference line marks the FDA Daily Value for
added sugars (50 g).

Then press **Rank These for Everyday Hydration** to drag the eight
beverages into your own best-to-worst order and compare it against a
reasoned expert ranking with justification text.

The electrolyte figure is a relative teaching index, not a measured
concentration, and all values are illustrative, rounded per-12 oz figures
for learning.

## Specification

The full specification below is extracted from
[Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md).

```text
Type: chart

sim-id: beverage-evidence-chart
Library: Chart.js
Status: Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: judge, assess, justify

Chart type: Grouped bar chart with a toggle-able third metric

Purpose: Let students evaluate eight common beverages against three
evidence dimensions at once and justify a ranked recommendation.

X-axis: Beverage (Water, Unsweetened Tea, Flavored Sparkling Water,
Regular Soda, Diet Soda, Sports Drink, Energy Drink, Whole-Fruit
Smoothie)

Y-axis (toggle-able): "Added Sugar (g per 12oz)" / "Caffeine (mg per
12oz)" / "Electrolyte Content (relative index)"

Data series (Added Sugar, g per 12oz):
- Water: 0
- Unsweetened Tea: 0
- Flavored Sparkling Water: 0
- Regular Soda: 39
- Diet Soda: 0
- Sports Drink: 21
- Energy Drink: 27
- Whole-Fruit Smoothie: 18 (naturally occurring)

Data series (Caffeine, mg per 12oz):
- Water: 0
- Unsweetened Tea: 30
- Flavored Sparkling Water: 0
- Regular Soda: 34
- Diet Soda: 34
- Sports Drink: 0
- Energy Drink: 114
- Whole-Fruit Smoothie: 0

Title: "Evaluating Beverages: What's Actually in the Bottle?"
Legend: top-right, one color per toggle-able metric

Interactive elements:
- Toggle buttons switch the displayed Y-axis metric
- Hovering any bar reveals exact value plus a one-sentence evidence note
  (e.g., hovering Energy Drink under caffeine shows "114mg is close to
  the FDA's suggested single-dose caffeine limit for adults, and higher
  per-ounce than coffee")
- "Rank These for Everyday Hydration" button opens a drag-to-rank panel
  where students order the eight beverages and receive a comparison
  against a reasoned expert ranking, with justification text

Annotations: dashed reference line on the sugar view marking the
recommended daily added-sugar limit for comparison

Implementation: Chart.js grouped bar chart with a custom ranking overlay
built in HTML/JS
```

## Related Resources

- [Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md)
