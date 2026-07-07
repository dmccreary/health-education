---
title: Consent Signal Sorter
description: Students classify everyday statements as showing real consent or not, reinforcing that consent must be freely given, specific, and reversible.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Consent Signal Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md).

```text
Type: microsim
**sim-id:** consent-signal-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, interpret, distinguish

Learning objective: Students classify everyday statements as showing real consent or not, reinforcing that consent must be freely given, specific, and reversible.

Canvas layout: Left (450px) a deck of 10 statement cards; right (200px) two bins, "Real Consent" and "Not Real Consent," plus a feedback panel.

Visual elements: Statement cards such as "Sure, you can borrow my pencil," "Fine, take the picture, just stop asking me over and over," "...I guess, whatever" (walking away upset).

Interactive controls: Click each card into the correct bin; "Check My Sorting" reveals correct/incorrect with a reason; "New Round" loads a new set of 10.

Behavior: "Sure, you can borrow my pencil" sorts as Real Consent ("Freely given, clear yes"). "Fine, take the picture, just stop asking" sorts as Not Real Consent ("Worn down by repeated pressure isn't free consent").

Instructional Rationale: Understand-level objective requiring interpretation of realistic phrasing, so the pattern is classification with concrete examples.

Implementation notes: p5.js; statement objects with text, correct classification, and reason string.
```

## Related Resources

- [Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md)
