---
title: I-Statement Builder
description: Students practice constructing I-statements by assembling a feeling, a situation, and a request from a scenario prompt using the "I feel ___ when ___, because ___. Could you ___?" frame.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# I-Statement Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md).

```text
Type: microsim
**sim-id:** i-statement-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, construct, practice

Learning objective: Students practice constructing I-statements by assembling a feeling, a situation, and a request from a scenario prompt using the "I feel ___ when ___, because ___. Could you ___?" frame.

Canvas layout: Top (100px) shows a short scenario prompt (e.g., "Your friend keeps interrupting you at lunch"). Middle (300px) shows four fill-in-the-blank dropdown menus matching the I-statement frame, each pre-populated with a few word/phrase choices, one clearly best. Bottom (100px) shows the assembled sentence building live as choices are made, plus a "Check My Statement" button.

Interactive controls: Four dropdown selectors; "Check My Statement," "Next Scenario," and "Reset" buttons.

Default parameters: Starts on scenario 1 of 5 prepared everyday scenarios (borrowing without asking, interrupting, excluding from a game, teasing about a mistake, not listening).

Data Visibility Requirements: As each dropdown is filled, the growing sentence appears in a speech bubble in real time so students see the full I-statement take shape. Clicking "Check My Statement" reveals whether the choice keeps the statement calm and focused on feelings rather than blame, with a one-sentence explanation.

Instructional Rationale: Apply-level objective requiring learners to construct a correctly formed sentence, so guided assembly with a visible live sentence supports practice better than passive multiple choice alone.

Implementation notes: Use p5.js. Keep every scenario a mild, everyday friend/family conflict — nothing involving unsafe situations, which belong in the Personal Safety chapters instead.
```

## Related Resources

- [Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md)
