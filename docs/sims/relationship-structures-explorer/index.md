---
title: Relationship Structures Explorer
description: Students describe how relationship structures vary across family, friendship, and romantic contexts and across cultures, while core needs (care, trust, respect) remain constant.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Relationship Structures Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md).

```text
Type: microsim
**sim-id:** relationship-structures-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, classify, exemplify

Learning objective: Students describe how relationship structures vary across family, friendship, and romantic contexts and across cultures, while core needs (care, trust, respect) remain constant.

Layout: Three tabs (Family, Friendship, Romantic), each with 3-4 selectable structure cards, above a persistent "What Stays the Same" panel naming the constant need for that type.

Interactive controls: Click a tab to switch type; click a card for an infobox with a one/two-sentence description and one culture/context where it is common; "Compare Two" shows two chosen cards side by side.

Instructional Rationale: Describing and classifying structures without ranking is Understand-level, so a card explorer with informational infoboxes is used rather than a game with winners, avoiding any implication one structure is superior.

Implementation notes: p5.js. Structure data as an array of objects (type, label, description, example context) per tab; no scoring logic.
```

## Related Resources

- [Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md)
