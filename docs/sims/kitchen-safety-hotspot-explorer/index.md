---
title: Kitchen Safety Hotspot Explorer
description: Students evaluate a kitchen scene, identify unsafe food handling practices in progress, and judge what safer alternative should replace each one.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Kitchen Safety Hotspot Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md).

```text
Type: infographic
**sim-id:** kitchen-safety-hotspot-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, critique, assess

Learning objective: Students evaluate a kitchen scene, identify unsafe food handling practices in progress, and judge what safer alternative should replace each one.

Purpose: Help students practice spotting real unsafe food handling practices in a realistic setting, connecting each mistake to why it causes foodborne illness.

Layout: A single illustrated kitchen scene with 6 clickable hotspots, each showing a small unsafe practice (raw chicken next to lettuce on the same board, a carton of milk left out on the counter, a family member about to eat without washing hands, a thermometer-free guess at whether chicken is cooked, unwashed strawberries in a bowl, a sponge used on both raw meat spill and countertop where food will be plated)

Interactive elements:
- Click any hotspot to open an infobox naming the unsafe practice, explaining why it's risky, and stating the safer alternative
- After viewing all 6 hotspots, a "Rate the Kitchen" button asks the student to assign an overall safety rating (Safe / Needs Improvement / Unsafe) and justify it in one sentence
- A checklist panel on the side fills in a checkmark for each hotspot the student has reviewed

Data to be displayed: 6 hotspot objects, each with practice name, risk explanation, and safer alternative text

Color coding: Hotspots glow soft red until clicked, then turn green with a checkmark once reviewed

Responsive behavior: Scene scales to container width; hotspot click targets remain a consistent minimum tap size on narrow screens

Implementation: p5.js with an image background and an array of hotspot objects (x/y region, practice, risk, alternative) driving click detection and infobox display.
```

## Related Resources

- [Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md)
