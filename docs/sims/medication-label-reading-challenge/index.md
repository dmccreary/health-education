---
title: Medication Label Reading Challenge
description: Students apply label-reading skills by locating specific pieces of safety information (dosage, warnings, interactions, expiration date) on a realistic sample medication label.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Medication Label Reading Challenge



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Substance Use Culture, Safety, and Risk](../../bands/grade-6-8/chapters/09-substance-use-culture-safety-and-risk/index.md).

```text
Type: microsim
**sim-id:** medication-label-reading-challenge<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, apply, practice

Learning objective: Students apply label-reading skills by locating specific pieces of safety information (dosage, warnings, interactions, expiration date) on a realistic sample medication label.

Canvas layout: Left side (500px) displays a realistic but fictional OTC medication label graphic with clearly zoned sections; right side (200px) shows a question panel and score tracker.

Visual elements: A labeled sample box/bottle graphic with sections for active ingredient, dosage instructions, warnings, drug interactions, and expiration date, each in a distinct clickable zone.

Interactive controls: A question appears (e.g., "How many hours should you wait between doses?" or "What should you avoid combining with this medication?"); the learner clicks the label zone containing the answer; immediate feedback confirms correct/incorrect with the relevant label text highlighted; "Next Question" button cycles through 6-8 questions; running score display.

Default parameters: Fictional label pre-populated with realistic sample dosage/warning/interaction text; first question shown on load.

Instructional Rationale: Apply-level objectives require learners to practice a skill in a realistic scenario; a click-to-locate challenge on a real-looking label lets students practice the actual skill of finding safety information rather than just recalling label categories from memory.

Implementation notes: p5.js. Label content is entirely fictional/generic (no real product names or brands). Responsive canvas that stacks the label and question panel vertically on narrow screens.
```

## Related Resources

- [Chapter 9: Substance Use Culture, Safety, and Risk](../../bands/grade-6-8/chapters/09-substance-use-culture-safety-and-risk/index.md)
