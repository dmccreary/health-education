---
title: Helper or Not? Sorting Health Influences
description: Students distinguish a positive health influence from a negative health influence by sorting illustrated scenario cards into two labeled bins, directly supporting benchmark 0.7.2.1.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Helper or Not? Sorting Health Influences



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md).

```text
Type: microsim
**sim-id:** helper-or-not-sorting-health-influences<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, sort, compare

Learning objective: Students distinguish a positive health influence from a negative health influence by sorting illustrated scenario cards into two labeled bins, directly supporting benchmark 0.7.2.1.

Canvas layout: Top area (250px) shows one scenario card at a time (e.g., a grown-up handing over a banana snack, a friend reminding you to wear a bike helmet, food left out and looking spoiled, a friend saying "let's skip washing hands"). Bottom area (200px): two bins, "Helps My Health" (green, sun icon) and "Hurts My Health" (gray, cloud icon). Bottom strip (50px): score display and Reset button.

Visual elements: 6 scenario cards cycling one at a time, split 3 positive and 3 negative; bins glow when a card is dragged over them.

Interactive controls: Drag-and-drop the card into the matching bin; Reset button; "Next Scenario" button after each placement.

Default parameters: First scenario is a grown-up offering a piece of fruit (Helps My Health); scenarios appear in a fixed, teacher-predictable order.

Behavior: Correct placement glows green with a chime and rising score, plus a one-line infobox ("Yes! A trusted adult offering fruit helps your health."). Incorrect placement slides back with a friendly explanation. After all 6: "You know how to spot things that help your health and things that don't!"

Instructional Rationale: An Analyze-level objective because the child must examine a scenario and distinguish its category. Immediate, forgiving feedback with a spoken infobox keeps this appropriate for a pre-reader while requiring a genuine comparison judgment.

Implementation notes: p5.js. Each scenario is an object with an illustration reference, correct category, and explanation string. Captions are one short, read-aloud sentence. No scary or graphic imagery — keep all "negative" examples mild and age-appropriate (spoiled food, skipped handwashing, skipped helmet).
```

## Related Resources

- [Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md)
