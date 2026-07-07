---
title: Verbal-Nonverbal Match Simulator
description: Students examine eight paired scenarios (a spoken line plus a described nonverbal cue) and distinguish whether the verbal and nonverbal signals are congruent or incongruent, comparing what each combination communicates.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Verbal-Nonverbal Match Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md).

```text
Type: microsim
**sim-id:** verbal-nonverbal-match-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, compare

Learning objective: Students examine eight paired scenarios (a spoken line plus a described nonverbal cue) and distinguish whether the verbal and nonverbal signals are congruent or incongruent, comparing what each combination communicates.

Canvas layout: Top area shows a spoken line in a speech-bubble graphic alongside a simple described nonverbal cue (e.g., "arms crossed, no eye contact," "relaxed posture, steady eye contact"); bottom area has two buttons: "Congruent" and "Incongruent."

Visual elements: Speech bubble with the verbal line; a simple posture icon representing the described nonverbal cue; feedback panel below the buttons.

Interactive controls: Learner reads the pair and clicks "Congruent" or "Incongruent"; feedback confirms the answer and explains, in one to two sentences, what the mismatch (or match) likely communicates and what a listener might reasonably infer; "Next" button advances through 8 pairs; running score displayed.

Default parameters: Pairs presented in a fixed order moving from clearly congruent/incongruent examples to more subtle ones; score reset on "Restart."

Instructional Rationale: An Analyze-level objective requires learners to examine and distinguish between signal combinations; immediate feedback on realistic verbal/nonverbal pairs builds the transferable skill of noticing incongruence in real conversations, which is more useful than memorizing a definition of congruence.

Implementation notes: p5.js. Responsive canvas that stacks the speech bubble above the posture icon on narrow screens.
```

## Related Resources

- [Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md)
