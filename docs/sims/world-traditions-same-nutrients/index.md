---
title: World Traditions, Same Nutrients
description: Students compare how four cultural food traditions meet the same daily nutrient and energy needs through different staple foods.
status: scaffold
library: Leaflet
bloom_level: Understand (L2)
---

# World Traditions, Same Nutrients



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md).

```text
Type: map
**sim-id:** world-traditions-same-nutrients<br/>
**Library:** Leaflet<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: compare, exemplify, classify

Learning objective: Students compare how four cultural food traditions meet the same daily nutrient and energy needs through different staple foods.

Purpose: Show that nutrient needs are universal even though the foods used to meet them vary widely and respectfully across cultures.

Geographic scope: World map with four marked regions — Japan, West Africa, Mexico, and Scandinavia (Norway/Sweden)

Locations and markers:
- Japan marker: rice, fish, tofu icon cluster
- West Africa marker: millet/rice, cassava, beans/peanuts icon cluster
- Mexico marker: corn, beans, chili icon cluster
- Scandinavia marker: rye, dairy, salmon icon cluster

Data being represented: For each region, a short list of staple foods and which nutrient category each mainly supplies (protein, carbohydrate/energy, vitamins/minerals)

Legend: Icon key for protein sources, carbohydrate/energy sources, and vitamin/mineral sources; a neutral note that all four approaches are equally valid ways to meet nutrient needs

Color scheme: Each region uses its own neutral accent color (no ranking colors like red/green)

Interactive features:
- Click a region marker to open an infobox listing its staple foods and which nutrients each food mainly supplies
- A "Compare Two Regions" toggle lets students select two markers and see their nutrient-source lists side by side in a panel
- Hover any staple-food icon for a one-sentence description of the food and its nutrient role

Implementation: Leaflet.js with custom markers and a side info panel populated from a small JSON dataset of region/food/nutrient mappings.
```

## Related Resources

- [Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md)
