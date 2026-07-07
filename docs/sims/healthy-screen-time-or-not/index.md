---
title: Healthy Screen Time or Not?
description: Students distinguish healthy, safe technology use from unsafe or unhealthy technology use by sorting illustrated scenario cards into two labeled bins, applying the Healthy Technology Use concept.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Healthy Screen Time or Not?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md).

```text
Type: microsim
**sim-id:** healthy-screen-time-or-not<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, sort, compare

Learning objective: Students distinguish healthy, safe technology use from unsafe or unhealthy technology use by sorting illustrated scenario cards into two labeled bins, applying the Healthy Technology Use concept.

Canvas layout: Top area (250px) shows one scenario card at a time (e.g., watching an approved show with a grown-up nearby, versus using a device alone for a very long time). Bottom area (200px): two bins, "Healthy Screen Use" (green, sun icon) and "Ask a Trusted Adult" (orange, raised-hand icon). Bottom strip (50px): score display and Reset button.

Visual elements: 6 scenario cards cycling one at a time, split between healthy and "needs a trusted adult" situations; bins glow when a card is dragged over them.

Interactive controls: Drag-and-drop the card into the matching bin; Reset button; "Next Scenario" button after each placement.

Default parameters: First scenario is watching an approved show with a grown-up nearby (Healthy Screen Use); scenarios appear in a fixed, teacher-predictable order.

Behavior: Correct placement glows green with a chime and rising score. Incorrect placement slides back with a friendly reminder, e.g., "If something on a screen feels confusing, that's a great time to ask a trusted adult for help." After all 6: "You know how to use screens in healthy, safe ways!"

Instructional Rationale: An Analyze-level objective because the child must examine a scenario and distinguish its category. The forgiving retry with an explanatory infobox keeps this appropriate for a pre-reader while still requiring a real comparison judgment.

Implementation notes: p5.js. Each scenario is an object with an illustration reference, correct category, and explanation string. Captions one short, read-aloud sentence.
```

## Related Resources

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
