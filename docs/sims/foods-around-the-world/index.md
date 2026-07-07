---
title: Foods Around the World
description: Students recognize that foods from many cultural traditions belong to the same five food groups, connecting Cultural Food Tradition to Food Group.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Foods Around the World



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md).

```text
Type: infographic
**sim-id:** foods-around-the-world<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: recognize, connect, classify

Learning objective: Students recognize that foods from many cultural traditions belong to the same five food groups, connecting Cultural Food Tradition to Food Group.

Purpose and main message: Show six foods from different cultural traditions around a circle, with a click revealing which food group(s) each belongs to.

Layout: A circle of six large, simple food illustrations (rice, tortilla, injera flatbread, lefse, dumpling, hummus with pita), each with a small flag or pattern motif hinting at its tradition of origin, arranged around a central image of a smiling family sharing a meal.

Interactive elements:
- Click or tap any food image to open a simple infobox with: the food's name, one sentence naming a culture/region connected to it, and which food group(s) it belongs to (shown as a colored badge matching the food-group colors used in the Food Group Sorting Game)
- Hover highlights the food with a soft glow before clicking

Data to display per food:
- Rice — many cultures worldwide — Grains Group
- Tortilla — Mexican and Central American tradition — Grains Group
- Injera — Ethiopian tradition — Grains Group
- Lefse — Norwegian tradition — Grains Group
- Dumpling — Chinese and Eastern European traditions — Grains Group and Protein Foods Group (meat-filled varieties)
- Hummus with pita — Middle Eastern tradition — Protein Foods Group and Grains Group

Color coding: Reuse the same food-group color key from the Food Group Sorting Game (tan for Grains, brown for Protein Foods) so the two MicroSims reinforce each other.

Responsive behavior: Circle layout collapses to a vertical stack of food cards on narrow screens.

Implementation: p5.js canvas with click-region detection for each food image; infobox rendered as a text panel below the circle.
```

## Related Resources

- [Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md)
