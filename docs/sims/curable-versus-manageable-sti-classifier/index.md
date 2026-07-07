---
title: Curable Versus Manageable STI Classifier
description: Students classify named STIs (by text label only, no imagery) as curable or manageable-but-not-curable, and justify each classification using the bacterial-versus-viral distinction.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Curable Versus Manageable STI Classifier



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md).

```text
Type: microsim
**sim-id:** curable-versus-manageable-sti-classifier<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: classify, justify, differentiate

Learning objective: Students classify named STIs (by text label only, no imagery) as curable or manageable-but-not-curable, and justify each classification using the bacterial-versus-viral distinction.

Layout: A deck of text-only infection name cards (chlamydia, gonorrhea, syphilis, HIV, herpes, HPV) with two click zones: "Curable with Treatment" and "Manageable, Not Currently Curable."

Interactive controls: Click-to-sort each card; feedback confirms placement and explains whether the infection is bacterial or viral and what treatment achieves; progress counter; "Reset Deck" button.

Instructional Rationale: Classifying and justifying against a clinical framework is Evaluate-level, so a sorting task requiring a stated reason is used rather than simple recall, reinforcing that "not curable" does not mean "untreatable" or "hopeless."

Implementation notes: p5.js. Card data as objects with infection name, correct category, and bacterial/viral explanation string; text labels only, no anatomical or clinical imagery.
```

## Related Resources

- [Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md)
