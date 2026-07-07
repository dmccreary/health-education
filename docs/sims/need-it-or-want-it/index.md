---
title: Need It or Want It?
description: Students identify personal health needs, wants, and desires by sorting illustrated items into "Need" and "Want" bins, supporting benchmark 0.7.8.1.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Need It or Want It?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md).

```text
Type: microsim
**sim-id:** need-it-or-want-it<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify personal health needs, wants, and desires by sorting illustrated items into "Need" and "Want" bins, supporting benchmark 0.7.8.1.

Canvas layout: Top area (250px) shows one illustrated item at a time (glass of water, favorite toy, bed/pillow for sleep, dessert, safety helmet, video game controller). Bottom area (200px): two bins, "I Need This" (blue, heart icon) and "I Want This" (yellow, star icon). Bottom strip (50px): score display and Reset button.

Visual elements: 6 item cards cycling one at a time, split 3 needs and 3 wants; bins glow when a card is dragged over them.

Interactive controls: Drag-and-drop the item into the matching bin; Reset button; "Next Item" button after each placement.

Default parameters: First item is a glass of water (I Need This); items appear in a fixed, teacher-predictable order.

Behavior: Correct placement glows blue or yellow with a chime and a one-line infobox, e.g., "Yes! Your body needs water every day." Incorrect placement slides back gently with an explanation. After all 6: "You know the difference between things your body needs and things you just want!"

Instructional Rationale: A Remember-level (identify/name) objective, so a simple drag-to-bin sorting pattern with immediate infobox feedback matches the pre-reader audience without requiring independent reading.

Implementation notes: p5.js. Each item is an object with an illustration reference, correct category, and explanation string. Text large (24px+) for read-aloud use.
```

## Related Resources

- [Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md)
