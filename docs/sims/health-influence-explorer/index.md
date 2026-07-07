---
title: Who Shapes My Health Choices?
description: Students classify everyday scenarios into the correct source of influence (family, friends, school, community, media, culture) and explain whether each example nudges a health behavior in a helpful or unhelpful direction.
image: /sims/health-influence-explorer/health-influence-explorer.png
og:image: /sims/health-influence-explorer/health-influence-explorer.png
twitter:image: /sims/health-influence-explorer/health-influence-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 3
---

# Who Shapes My Health Choices?

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the Who Shapes My Health Choices? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**Who Shapes My Health Choices?** is an interactive MicroSim for this health-education textbook.

Students classify everyday scenarios into the correct source of influence (family, friends, school, community, media, culture) and explain whether each example nudges a health behavior in a helpful or unhelpful direction.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — classify, exemplify, explain

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify everyday scenarios into the correct source of influence (family, friends, school, community, media, culture) and explain whether each example nudges a health behavior in a helpful or unhelpful direction.

This activity targets **Bloom's Understand (L2)** (classify, exemplify, explain).

### Suggested Use (about 10 minutes)

1. **Warm up (2 min).** Ask students what they already know about the topic
   and let one volunteer describe what they see on the screen.
2. **Model it (3 min).** Demonstrate the interaction once, thinking aloud so
   students hear the reasoning behind each choice.
3. **Guided practice (3 min).** Invite students to try the interaction and to
   predict what will happen before they act.
4. **Discuss (2 min).** Ask *why* the result came out the way it did, connecting
   the on-screen result back to the learning objective above.

### Check for Understanding

Have each student (or pair) explain their result in one sentence, using the
vocabulary from this chapter. Look for reasoning that matches the
**Understand**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
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

## References

- [Chapter 1: Foundations Of Health](../../bands/grade-3/chapters/01-foundations-of-health/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
