---
title: Healthy vs. Unhealthy Expression Sorter
description: Students differentiate between healthy and unhealthy ways of expressing emotions by sorting example statements and actions into the correct category.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Healthy vs. Unhealthy Expression Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Mental And Emotional Health](../../bands/grade-3/chapters/07-mental-and-emotional-health/index.md).

```text
Type: microsim
**sim-id:** expression-style-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate, examine, distinguish

Learning objective: Students differentiate between healthy and unhealthy ways of expressing emotions by sorting example statements and actions into the correct category.

Canvas layout: Left side (400px) has two labeled bins, "Healthy Expression" (speech-bubble-with-heart icon) and "Unhealthy Expression" (stormy-cloud icon). Right side (200px) holds a stack of shuffled example cards, such as "I feel left out, can we talk?", "Slamming the door and refusing to speak", "I'm nervous about the game, wish me luck", "Yelling mean names when losing a game."

Interactive controls: Click or drag each card into a bin; "Check My Answers" and "Reset" buttons.

Data Visibility Requirements: As each card is sorted it snaps into the chosen bin; clicking "Check My Answers" reveals a one-sentence explanation for every card, and incorrectly sorted cards get a gentle explanation of why they fit the other category.

Instructional Rationale: Analyze-level objective requiring students to distinguish categories by shared features, so sorting-with-explanation is appropriate.

Implementation notes: Use p5.js. Keep tone non-judgmental toward the "unhealthy" category — frame it as practice noticing the difference, not as labeling a student.
```

## Related Resources

- [Chapter 7: Mental And Emotional Health](../../bands/grade-3/chapters/07-mental-and-emotional-health/index.md)
