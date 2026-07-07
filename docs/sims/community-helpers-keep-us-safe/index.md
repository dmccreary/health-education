---
title: Community Helpers Keep Us Safe
description: Students identify community helpers and the safety practice each one supports, reinforcing the Community Safety Practice concept.
image: /sims/community-helpers-keep-us-safe/community-helpers-keep-us-safe.png
og:image: /sims/community-helpers-keep-us-safe/community-helpers-keep-us-safe.png
twitter:image: /sims/community-helpers-keep-us-safe/community-helpers-keep-us-safe.png
social:
   cards: false
library: p5.js
bloom_level: Remember (L1)
grade_band: Kindergarten
---

# Community Helpers Keep Us Safe

<iframe src="main.html" width="100%" height="464px" scrolling="no"></iframe>

[Run the Community Helpers Keep Us Safe MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="464px" scrolling="no"></iframe>
```

## About this MicroSim

**Community Helpers Keep Us Safe** is an interactive MicroSim for this health-education textbook.

Students identify community helpers and the safety practice each one supports, reinforcing the Community Safety Practice concept.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — identify, recognize, name

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify community helpers and the safety practice each one supports, reinforcing the Community Safety Practice concept.

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
[Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md).

```text
Type: infographic
**sim-id:** community-helpers-keep-us-safe<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify community helpers and the safety practice each one supports, reinforcing the Community Safety Practice concept.

Canvas layout: Full canvas (500px) shows a neighborhood street scene with a crossing guard at a crosswalk, a lifeguard at a pool, and a park safety sign. Bottom strip (60px): instructions and a Reset button.

Visual elements: 3 glowing hotspots (crossing guard, lifeguard, park sign); clicking pops up a labeled infobox.

Interactive controls: Click reveals the safety practice for that helper/sign; Reset button.

Default parameters: All 3 hotspots begin unrevealed, clickable in any order.

Behavior: Crossing guard reveals "The crossing guard helps everyone cross the street safely together." Lifeguard reveals "The lifeguard watches the pool so everyone can swim safely." Park sign reveals "Safety signs remind everyone of the playground rules." After all three: "You know how our community works together to stay safe!"

Instructional Rationale: A Remember-level (identify/name) objective, so click-to-reveal hotspots with short spoken infoboxes match the pre-reader audience without requiring independent reading.

Implementation notes: p5.js. Each hotspot is an object with a label, relative (x,y) region, and infobox string. Text large (24px+) for read-aloud use.
```

## References

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
