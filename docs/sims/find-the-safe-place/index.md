---
title: Find the Safe Place
description: Students identify the correct safe place for a given type of school emergency, reinforcing the Safe Place concept alongside School Emergency.
image: /sims/find-the-safe-place/find-the-safe-place.png
og:image: /sims/find-the-safe-place/find-the-safe-place.png
twitter:image: /sims/find-the-safe-place/find-the-safe-place.png
social:
   cards: false
library: p5.js
bloom_level: Remember (L1)
grade_band: Kindergarten
---

# Find the Safe Place

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Find the Safe Place MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Find the Safe Place** is an interactive MicroSim for this health-education textbook.

Students identify the correct safe place for a given type of school emergency, reinforcing the Safe Place concept alongside School Emergency.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — identify, recognize, locate

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify the correct safe place for a given type of school emergency, reinforcing the Safe Place concept alongside School Emergency.

This activity targets **Bloom's Remember (L1)** (identify, recognize, locate).

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
**sim-id:** find-the-safe-place<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, locate

Learning objective: Students identify the correct safe place for a given type of school emergency, reinforcing the Safe Place concept alongside School Emergency.

Canvas layout: Full canvas (500px) shows a simple illustrated school map (classroom, hallway, outdoor field, gym). Bottom strip (80px): a prompt naming one emergency type at a time (e.g., "Fire drill — where is the safe place?") with three tappable location options.

Visual elements: School map locations shown as friendly labeled icons; the selected answer highlights green (correct) or shakes gently (incorrect, try again).

Interactive controls: Tap the location believed correct; "Next Emergency" cycles prompts; "Reset" restarts.

Default parameters: Three prompts cycle in order — fire drill (outdoor field), severe weather drill (hallway), lockdown drill (classroom).

Behavior: Correct tap glows green with a chime and confirming infobox, e.g., "Yes! During a fire drill, we walk to the outdoor field." Incorrect tap shakes gently with a friendly hint. After all three: "You know where to go for each kind of school emergency!"

Instructional Rationale: A Remember-level (identify/locate) objective appropriate for pre-readers, so a tap-to-identify pattern with an immediate confirming infobox is used rather than a more complex simulation.

Implementation notes: p5.js. Each emergency type is an object with a prompt string, correct location id, and confirmation string. Text large (24px+) for read-aloud use.
```

## References

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
