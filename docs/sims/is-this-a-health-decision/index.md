---
title: Is This a Health Decision?
description: Students recognize when a health-related decision is needed by classifying everyday moments as "health decision" or "not a health decision," supporting benchmark 0.7.5.1.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Is This a Health Decision?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md).

```text
Type: infographic
**sim-id:** is-this-a-health-decision<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify

Learning objective: Students recognize when a health-related decision is needed by classifying everyday moments as "health decision" or "not a health decision," supporting benchmark 0.7.5.1.

Canvas layout: Full canvas (500px) shows one illustrated everyday moment at a time (choosing a snack, choosing a shirt color, deciding to wear a helmet, choosing a book, telling a trusted adult about a feeling). Bottom strip (80px): two large buttons, "Health Decision" and "Not a Health Decision," plus a Reset button.

Visual elements: 5 moment cards cycling one at a time; selected button glows and reveals an infobox explaining why.

Interactive controls: Click the button matching the child's guess; "Next Moment" cycles the cards; Reset restarts.

Default parameters: Cards appear in a fixed teacher-predictable order, starting with "choosing a snack."

Behavior: Correct answer glows green with an infobox, e.g., "Yes! What you eat is a health decision because it affects your body." Incorrect answer gently shakes with a kind explanation. After all 5: "You know how to notice when it's time to make a health decision!"

Instructional Rationale: An Understand-level (explain/classify) objective, so the MicroSim uses a step-through pattern with one concrete moment shown at a time rather than continuous animation, letting a teacher pause and discuss each example aloud.

Implementation notes: p5.js. Each moment is an object with an illustration reference, correct classification, and explanation string. Text large (24px+) for read-aloud use.
```

## Related Resources

- [Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md)
