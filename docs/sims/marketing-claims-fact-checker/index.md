---
title: Marketing Claims Fact-Checker
description: Students evaluate real marketing claims against actual label data to judge whether each claim is misleading, technically true but incomplete, or genuinely informative.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Marketing Claims Fact-Checker



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** marketing-claims-fact-checker<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, critique, assess, justify

Learning objective: Students evaluate real marketing claims against actual label data to judge whether each claim is misleading, technically true but incomplete, or genuinely informative.

Layout: Package mockup with a large front-of-package claim on top, its matching Nutrition Facts panel below, then three judgment buttons — "Misleading," "Technically True But Incomplete," "Genuinely Informative" — plus feedback caption and "Next Product" button.

Visual elements: 6 paired product examples, e.g. a "made with real fruit" snack whose label shows fruit puree as the 5th ingredient; a "no added sugar" juice box whose label shows 24g of naturally occurring sugar; plain water with no claims as a contrast case.

Behavior: After a judgment is submitted, feedback explains the reasoning using that product's specific label numbers, reinforcing the general pattern (technical truth versus broader impression) rather than just marking right/wrong.

Instructional Rationale: Judging honesty and completeness is Evaluate-level, so classification-with-justification is used rather than passive reading, requiring the learner to weigh evidence before committing to a judgment.

Implementation notes: p5.js. Each product stored as an object with claim text, label data fields, correct judgment category, and explanation string.
```

## Related Resources

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
