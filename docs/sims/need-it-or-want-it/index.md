---
title: Need It or Want It?
description: Students identify personal health needs, wants, and desires by sorting illustrated items into "Need" and "Want" bins, supporting benchmark 0.7.8.1.
image: /sims/need-it-or-want-it/need-it-or-want-it.png
og:image: /sims/need-it-or-want-it/need-it-or-want-it.png
twitter:image: /sims/need-it-or-want-it/need-it-or-want-it.png
social:
   cards: false
library: p5.js
bloom_level: Remember (L1)
grade_band: Kindergarten
---

# Need It or Want It?

<iframe src="main.html" width="100%" height="504px" scrolling="no"></iframe>

[Run the Need It or Want It? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="504px" scrolling="no"></iframe>
```

## About this MicroSim

**Need It or Want It?** is an interactive MicroSim for this health-education textbook.

Students identify personal health needs, wants, and desires by sorting illustrated items into "Need" and "Want" bins, supporting benchmark 0.7.8.1.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — identify, recognize, name

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify personal health needs, wants, and desires by sorting illustrated items into "Need" and "Want" bins, supporting benchmark 0.7.8.1.

This activity targets **Bloom's Remember (L1)** (identify, recognize, name).

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
**Remember**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
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

## References

- [Chapter 6: Making Healthy Choices](../../bands/kindergarten/chapters/06-health-choices/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
