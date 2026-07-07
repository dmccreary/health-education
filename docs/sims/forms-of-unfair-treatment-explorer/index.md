---
title: Forms of Unfair Treatment Explorer
description: Students classify realistic middle-school scenarios into direct, subtle, or institutional unfair treatment, building a shared vocabulary for recognizing unfairness in its different forms.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Forms of Unfair Treatment Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md).

```text
Type: microsim
**sim-id:** forms-of-unfair-treatment-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, distinguish, exemplify

Learning objective: Students classify realistic middle-school scenarios into direct, subtle, or institutional unfair treatment, building a shared vocabulary for recognizing unfairness in its different forms.

Layout: A deck of 10 short scenario cards (e.g., "A student is told they can't join a club because of their accent," "A teacher only calls on certain students during discussion," "A school dress code bans hairstyles worn mostly by one ethnic group") with three click zones labeled Direct, Subtle, and Institutional.

Interactive controls: Click-to-sort each card into a zone; immediate feedback confirms the category and explains why in one supportive sentence; a running tally tracks progress; "Reset Deck" button.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Classifying scenarios into named categories is Understand-level, so a sorting task with explanatory feedback is used rather than a passive list, helping students recognize unfair treatment even when it is not obvious or direct.

Implementation notes: p5.js. Scenario data stored as an array of objects with text, correct category, and explanation string. Responsive canvas that reflows cards on window resize.
```

## Related Resources

- [Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md)
