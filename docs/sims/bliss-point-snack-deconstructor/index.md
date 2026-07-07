---
title: Bliss Point Snack Deconstructor
description: Students analyze the sugar, sodium, and fat content of common snack foods to recognize the engineered combination pattern often called the "bliss point."
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Bliss Point Snack Deconstructor



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** bliss-point-snack-deconstructor<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: deconstruct, examine, organize, differentiate

Learning objective: Students analyze the sugar, sodium, and fat content of common snack foods to recognize the engineered combination pattern often called the "bliss point."

Layout: Selectable snack icons (flavored chips, sweetened granola bar, chocolate-covered pretzel, plain fruit, plain nuts) beside a three-bar mini-chart (sugar/sodium/fat) that updates on selection, plus a "Compare to Whole Food" toggle overlaying plain fruit or nuts as a reference line.

Behavior: Clicking a snack loads its real nutrition values into the chart; hovering a bar shows the exact gram/mg value and %DV; a highlighted "engineered combination zone" marker appears whenever sugar and sodium are both in the upper range, opening an infobox that explains the bliss point using that snack's numbers.

Instructional Rationale: Examining and differentiating product composition is Analyze-level, so a selectable, data-driven comparison is used rather than a single illustration, letting learners test multiple snacks against each other and against whole-food references.

Implementation notes: p5.js. Snack data stored as objects with sugar/sodium/fat fields; bars render proportionally; the "engineered combination zone" flag recomputes whenever both sugar and sodium exceed defined thresholds.
```

## Related Resources

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
