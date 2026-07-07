---
title: Dietary Guidelines Comparison Explorer
description: Students analyze three real dietary guideline systems (USDA MyPlate, Canada's Food Guide, a traditional Indigenous seasonal food system) to differentiate shared nutritional principles from culturally specific presentation choices.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Dietary Guidelines Comparison Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** dietary-guidelines-comparison-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare, contrast, examine, differentiate

Learning objective: Students analyze three real dietary guideline systems (USDA MyPlate, Canada's Food Guide, a traditional Indigenous seasonal food system) to differentiate shared nutritional principles from culturally specific presentation choices.

Layout: Three selectable tabs (one per guideline system), each showing a simplified plate/model graphic, above a persistent "Shared Principles" panel and a per-tab "What's Different Here" panel.

Visual elements: MyPlate tab (four food-group sections plus dairy circle); Canada's Food Guide tab (three sections plus a water glass icon); Indigenous seasonal food system tab (a circular seasonal wheel showing wild rice, fish, venison, corn/beans/squash, and berries by harvest season).

Interactive controls: Click tabs to switch systems; click any food-group icon for an infobox on that group plus one cultural/geographic reason for its presentation; toggle "Show Shared Principles" to highlight common science (variety, limiting added sugar, whole foods) across all three tabs at once.

Instructional Rationale: Comparing structures and attributing differences to cultural/geographic causes is Analyze-level, so a tabbed comparison with an always-visible shared-principles panel keeps agreement and variation both in view simultaneously.

Implementation notes: p5.js. Each guideline system stored as an object with an array of food-group sub-objects (label, icon, explanation); a shared principles array renders identically regardless of active tab.
```

## Related Resources

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
