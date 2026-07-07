---
title: Who Shapes My Health Choices?
description: Students classify everyday scenarios into the correct source of influence (family, friends, school, community, media, culture) and explain whether each example nudges a health behavior in a helpful or unhelpful direction.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Who Shapes My Health Choices?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations Of Health](../../bands/grade-3/chapters/01-foundations-of-health/index.md).

```text
Type: infographic
**sim-id:** health-influence-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, exemplify, explain

Learning objective: Students classify everyday scenarios into the correct source of influence (family, friends, school, community, media, culture) and explain whether each example nudges a health behavior in a helpful or unhelpful direction.

Purpose: Help students see that health choices come from many outside sources, and that noticing the source is the first step toward evaluating whether to follow it.

Layout: A central child character surrounded by six labeled "influence bubbles" arranged in a ring: Family, Friends, School, Community, Media, Culture.

Interactive elements:
- Click a bubble: an infobox opens with a short definition and two example scenario cards for that influence
- Each scenario card has a thumbs-up or thumbs-down icon the student can pick, revealing a one-sentence explanation of why the example is helpful or unhelpful for health
- "Show Another Example" button cycles a fresh scenario into the open bubble
- A running tally at the bottom shows how many helpful vs. unhelpful examples the student has reviewed

Visual style: Flat, friendly illustration with the child character in the center and soft-colored bubbles radiating outward; diverse families and community settings represented.

Color scheme: Each influence bubble has its own soft color (family: warm yellow, friends: light green, school: blue, community: purple, media: orange, culture: teal) used consistently with later chapters.

Responsive behavior: Ring of bubbles collapses into a scrollable row on narrow screens; all bubbles remain tappable.

Implementation: p5.js with an object array of influence data (name, color, definition, scenario list) driving click-to-reveal infoboxes.
```

## Related Resources

- [Chapter 1: Foundations Of Health](../../bands/grade-3/chapters/01-foundations-of-health/index.md)
