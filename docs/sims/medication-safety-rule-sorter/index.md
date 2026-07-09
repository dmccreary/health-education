---
title: Medication Safety Rule Sorter
description: Students classify realistic medication-related scenarios as safe practice or misuse, distinguishing over-the-counter medication misuse from prescription medication misuse and reinforcing the rule of following label or doctor instructions exactly.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Medication Safety Rule Sorter



<iframe src="main.html" width="100%" height="530px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md).

```text
Type: microsim
**sim-id:** medication-safety-rule-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, distinguish, exemplify

Learning objective: Students classify realistic medication-related scenarios as safe practice or misuse, distinguishing over-the-counter medication misuse from prescription medication misuse and reinforcing the rule of following label or doctor instructions exactly.

Layout: A deck of 10 scenario cards (e.g., "Taking the labeled dose of a pain reliever for a headache," "Taking three times the labeled dose because one dose 'isn't working fast enough,'" "Taking a friend's prescription anti-anxiety medication before a test," "Asking a pharmacist before combining two medications," "Giving a sibling one of your prescribed pills because they have a similar symptom," "Following the pharmacist's instructions on a new prescription") with two click zones labeled "Safe Practice" and "Misuse."

Interactive controls: Click to sort each card; immediate feedback confirms whether it is safe practice or misuse and explains why in one or two sentences, noting whether it involves an OTC or prescription medication; "Reset Deck" button; running tally of correct sorts.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Classifying medication scenarios as safe or misuse requires distinguishing examples from non-examples of a defined rule, which is Understand-level; a sorting activity gives immediate, rule-based feedback that reinforces label-reading and doctor/pharmacist guidance without demonstrating any method of misuse.

Implementation notes: p5.js. Scenario data stored as an array of objects with text, category, and explanation fields. Responsive canvas that reflows cards on window resize. No card provides dosage amounts, product names, or methods that could function as instructional content.
```

## Related Resources

- [Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md)
