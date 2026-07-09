---
title: STI Transmission Routes Sorter
description: Students classify common routes of contact (skin-to-skin, fluid exchange, casual contact) as transmitting or not transmitting STIs, building an accurate model of how infections do and do not spread.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# STI Transmission Routes Sorter



<iframe src="main.html" width="100%" height="534px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md).

```text
Type: microsim
**sim-id:** sti-transmission-routes-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, explain, distinguish

Learning objective: Students classify common routes of contact (skin-to-skin, fluid exchange, casual contact) as transmitting or not transmitting STIs, building an accurate model of how infections do and do not spread.

Layout: A deck of 10 text-only contact scenarios (e.g., "sharing a water bottle," "skin-to-skin genital contact") with three click zones: "Can Transmit an STI," "Cannot Transmit an STI," "Depends on the Specific Infection."

Interactive controls: Click-to-sort each scenario; immediate feedback names the correct category and gives a one-sentence clinical explanation; progress counter; "Reset Deck" button.

Instructional Rationale: Classifying routes of transmission against a factual standard is Understand-level, so a sorting task with explanatory feedback is used, correcting common misconceptions about casual contact directly.

Implementation notes: p5.js. Scenario data stored as objects with text, correct category, and explanation string; no anatomical imagery, text labels only.
```

## Related Resources

- [Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md)
