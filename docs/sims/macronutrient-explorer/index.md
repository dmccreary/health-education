---
title: Macronutrient Explorer
description: Students explain the job of each macronutrient (carbohydrates, protein, fats) and classify example foods under the correct macronutrient category.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Macronutrient Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md).

```text
Type: infographic
**sim-id:** macronutrient-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, exemplify

Learning objective: Students explain the job of each macronutrient (carbohydrates, protein, fats) and classify example foods under the correct macronutrient category.

Purpose: Help students connect each macronutrient's function in the body to real, familiar foods that supply it.

Layout: Three large labeled columns — Carbohydrates, Protein, Fats — each topped with an icon (a wheat stalk, a muscle, a droplet).

Interactive elements:
- Click a column header to open an infobox describing that macronutrient's main job in the body in one or two sentences
- A tray of 12 food icons (bread, rice, apple, chicken, egg, beans, fish, milk, avocado, nuts, olive oil, pasta) below the columns; drag or click each food onto the column it belongs to
- Correct placement shows a short confirmation ("Bread is a carbohydrate — it gives you fast energy!"); incorrect placement gives a gentle hint and lets the student try again
- A progress counter shows how many of the 12 foods have been correctly sorted

Visual style: Flat, colorful icons with rounded column cards

Color scheme: Carbohydrates = gold, Protein = red-orange, Fats = light green

Responsive behavior: Columns stack vertically on narrow screens; food tray becomes a horizontal scroll strip

Implementation: p5.js with an array of food objects (name, correct category, icon, fact) driving drag-and-drop or click-to-place sorting logic.
```

## Related Resources

- [Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md)
