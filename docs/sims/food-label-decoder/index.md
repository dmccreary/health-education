---
title: Food Label Decoder
description: Food Label Decoder
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Food Label Decoder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md).

```text
Type: infographic

**sim-id:** food-label-decoder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, differentiate

Purpose: Let students click each region of a realistic Nutrition Facts
label to see what it means and how it's calculated, then compare two
real product labels side by side.

Layout: Left panel shows a full Nutrition Facts label (serving size,
calories, %DV column, macronutrients, added sugars line, sodium,
vitamins/minerals, ingredient list). Right panel allows loading a second
product's label for comparison.

Interactive elements:
- Click any labeled region (serving size, calories, %DV, added sugars,
  sodium, ingredient list) to open an infobox explaining what it means
  and how to interpret it
- Dropdown: choose from 6 preloaded real-world-style products (e.g.,
  flavored yogurt, cereal, granola bar, soda, sparkling water, trail mix)
- "Compare" button: places two chosen products side by side with
  differences highlighted (e.g., added sugar difference highlighted in
  orange)
- Toggle: "Per Serving" vs "Per Container" recalculates all displayed
  numbers live

Data to display: realistic nutrient values per product (calories, total
fat, sodium, total carbohydrate, dietary fiber, total sugars, added
sugars, protein, vitamin D, calcium, iron, potassium)

Color coding: green highlight for nutrients where %DV is 20%+ and
considered beneficial (fiber, vitamins), red highlight for 20%+ DV of
nutrients to limit (saturated fat, sodium, added sugar)

Responsive behavior: panels stack vertically on narrow screens

Implementation: HTML/CSS/JavaScript with clickable SVG label regions
```

## Related Resources

- [Chapter 1: Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md)
