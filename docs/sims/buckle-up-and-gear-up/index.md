---
title: Buckle Up and Gear Up
description: Students practice matching the correct injury-prevention gear to a given activity, reinforcing the Injury Prevention concept through hands-on drag-and-drop matching.
image: /sims/buckle-up-and-gear-up/buckle-up-and-gear-up.png
og:image: /sims/buckle-up-and-gear-up/buckle-up-and-gear-up.png
twitter:image: /sims/buckle-up-and-gear-up/buckle-up-and-gear-up.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Kindergarten
---

# Buckle Up and Gear Up

<iframe src="main.html" width="100%" height="504px" scrolling="no"></iframe>

[Run the Buckle Up and Gear Up MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="504px" scrolling="no"></iframe>
```

## About this MicroSim

**Buckle Up and Gear Up** is an interactive MicroSim for this health-education textbook.

Students practice matching the correct injury-prevention gear to a given activity, reinforcing the Injury Prevention concept through hands-on drag-and-drop matching.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — practice, demonstrate

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students practice matching the correct injury-prevention gear to a given activity, reinforcing the Injury Prevention concept through hands-on drag-and-drop matching.

This activity targets **Bloom's Apply (L3)** (practice, demonstrate).

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
**Apply**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md).

```text
Type: microsim
**sim-id:** buckle-up-and-gear-up<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: practice, demonstrate

Learning objective: Students practice matching the correct injury-prevention gear to a given activity, reinforcing the Injury Prevention concept through hands-on drag-and-drop matching.

Canvas layout: Top area (250px) shows an illustrated child ready for one of three activities (bike, car, stairs). Middle area (150px): three draggable gear icons (helmet, seatbelt, handrail-holding hand). Bottom strip (100px): "Check" and "Reset" buttons plus score display.

Visual elements: Child illustration changes with the current activity; gear icons are large and simple for small hands to drag.

Interactive controls: Drag-and-drop gear onto the child; "Check" confirms; "Reset" clears; score display (e.g., "2 of 3 matched!").

Default parameters: Activities cycle bike, car, stairs; correct gear is helmet, seatbelt, handrail respectively.

Behavior: Correct match snaps into place with a chime and infobox ("Yes! A helmet protects your head while biking."). Incorrect match bounces back with an explanation. After all three: "You know how to gear up and stay safe every time!"

Instructional Rationale: An Apply-level objective — practicing gear knowledge in specific situations — so hands-on matching with immediate feedback is appropriate, rather than passive viewing.

Implementation notes: p5.js. Each activity is an object with an illustration reference, correct gear id, and explanation string. Captions short enough for one-breath read-aloud.
```

## References

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
