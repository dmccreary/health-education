---
title: Nutrition Facts Label Decoder
description: Students analyze a realistic Nutrition Facts label by identifying and interpreting serving size, %DV, added sugars, and ingredient order to reach an accurate conclusion about a product's nutritional content.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Nutrition Facts Label Decoder



<iframe src="main.html" width="100%" height="524px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** nutrition-facts-label-decoder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, differentiate, deconstruct, organize

Learning objective: Students analyze a realistic Nutrition Facts label by identifying and interpreting serving size, %DV, added sugars, and ingredient order to reach an accurate conclusion about a product's nutritional content.

Layout: Left side shows a realistic Nutrition Facts label (serving size 2.5 servings per container, calories, %DV column, total sugars 22g versus added sugars 18g, ingredient list with high fructose corn syrup second); right side holds an infobox panel plus a running "Decoding Checklist."

Interactive controls: Click serving size for an infobox on per-serving math; click the %DV column for the 5%/20% high-low rule applied to this label's numbers; click the added sugars line for the 18-of-22-grams breakdown; click the ingredient list for weight-order explanation; button "Reveal Full Picture" combines all four insights once all are checked.

Instructional Rationale: Deconstructing a label into parts and reasoning across them is Analyze-level, so click-to-reveal component analysis with a checklist is used instead of animation, keeping every number inspectable at the learner's pace.

Implementation notes: p5.js. Label drawn as static shapes/text with clickable bounding-box regions; explanations stored in a lookup object keyed by region name.
```

## Related Resources

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
