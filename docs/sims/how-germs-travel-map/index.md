---
title: How Germs Travel Map
description: Students identify and explain the common paths germs travel between people, surfaces, and objects in a classroom scene.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# How Germs Travel Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md)
