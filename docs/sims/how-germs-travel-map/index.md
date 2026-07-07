---
title: How Germs Travel Map
description: Students identify and explain the common paths germs travel between people, surfaces, and objects in a classroom scene.
image: /sims/how-germs-travel-map/how-germs-travel-map.png
og:image: /sims/how-germs-travel-map/how-germs-travel-map.png
twitter:image: /sims/how-germs-travel-map/how-germs-travel-map.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 1
---

# How Germs Travel Map

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the How Germs Travel Map MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**How Germs Travel Map** is an interactive MicroSim for this health-education textbook.

Students identify and explain the common paths germs travel between people, surfaces, and objects in a classroom scene.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, identify, describe

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify and explain the common paths germs travel between people, surfaces, and objects in a classroom scene.

This activity targets **Bloom's Understand (L2)** (explain, identify, describe).

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
[Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md).

```text
Type: microsim
**sim-id:** how-germs-travel-map<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, identify, describe

Learning objective: Students identify and explain the common paths germs travel between people, surfaces, and objects in a classroom scene.

Canvas layout:
- Left area (450px): A simple classroom scene showing a student sneezing, a shared doorknob, a shared water fountain, a shared toy bin, and two students shaking hands
- Right area (150px): Infobox and a "Show Germ Path" toggle button

Visual elements:
- Five labeled hotspots in the classroom scene: sneeze droplets, doorknob, water fountain, toy bin, handshake
- Small dotted arrow animation showing germs moving from one hotspot to a hand icon when selected

Interactive controls:
- Click each hotspot to reveal how germs could spread from that spot
- Button: "Show Germ Path" (animates a simple dotted line from the hotspot to a hand, then to a face)
- Button: "Reset"

Default parameters:
- Scene opens with all five hotspots visible and unselected

Data Visibility Requirements:
  Stage 1: Show the classroom scene with five hotspots, no labels
  Stage 2: After a click, show a one-sentence explanation of that germ path ("Sneezing without covering your mouth sends tiny droplets into the air that others can breathe in.")
  Stage 3: Show the "Show Germ Path" animation connecting the hotspot to a hand and then a face, reinforcing the hand-to-face connection

Behavior:
- Each hotspot reveals its explanation and animated path when clicked
- A final summary caption appears after all five hotspots are explored: "Germs travel from surfaces and people to your hands, and then to your face — washing your hands breaks that path!"

Instructional Rationale: This is an Understand-level (explain/identify) objective, so the MicroSim uses clickable hotspots with concrete captions and a simple path animation rather than continuous animation, helping students trace exactly how germs move step by step.

Implementation notes: Use p5.js. Keep the scene light-hearted, not scary — germs can be shown as small friendly-looking dot characters rather than frightening monsters. Teacher facilitates discussion after each reveal.
```

## References

- [Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
