---
title: Personal Stressor Sorter
description: Students classify a set of realistic middle-school scenarios into the categories of home, school, and friend stressors, building a concrete vocabulary for naming their own sources of stress.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Personal Stressor Sorter



<iframe src="main.html" width="100%" height="514px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md).

```text
Type: microsim
**sim-id:** personal-stressor-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, identify, distinguish

Learning objective: Students classify a set of realistic middle-school scenarios into the categories of home, school, and friend stressors, building a concrete vocabulary for naming their own sources of stress.

Layout: A deck of 12 short scenario cards (e.g., "Your parents have been arguing every night this week," "You have three tests on the same day," "Your best friend stopped sitting with you at lunch") with three click zones labeled Home, School, and Friends.

Interactive controls: Click-to-sort each card into a zone; immediate feedback confirms the category and shows a one-sentence note on why it fits; a running tally shows how many cards have been sorted; "Reset Deck" button; a "Some Stressors Overlap" toggle reveals two cards that reasonably belong in more than one zone, reinforcing that categories are not always clean.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Classifying scenarios into named categories is Understand-level, so a sorting task with explanatory feedback is used rather than a passive list, helping students build the habit of naming their own stress instead of leaving it unexamined.

Implementation notes: p5.js. Scenario data stored as an array of objects with text, correct category (or categories), and explanation string. Responsive canvas that reflows cards on window resize.
```

## Related Resources

- [Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md)
