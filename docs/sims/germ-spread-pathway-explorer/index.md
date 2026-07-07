---
title: Germ Spread Pathway Explorer
description: Students identify and explain the five common pathways germs use to spread between people, surfaces, and hosts.
image: /sims/germ-spread-pathway-explorer/germ-spread-pathway-explorer.png
og:image: /sims/germ-spread-pathway-explorer/germ-spread-pathway-explorer.png
twitter:image: /sims/germ-spread-pathway-explorer/germ-spread-pathway-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 4
---

# Germ Spread Pathway Explorer

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the Germ Spread Pathway Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**Germ Spread Pathway Explorer** is an interactive MicroSim for this health-education textbook.

Students identify and explain the five common pathways germs use to spread between people, surfaces, and hosts.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, identify, describe

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 4**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify and explain the five common pathways germs use to spread between people, surfaces, and hosts.

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
[Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md).

```text
Type: infographic
**sim-id:** germ-spread-pathway-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, identify, describe

Learning objective: Students identify and explain the five common pathways germs use to spread between people, surfaces, and hosts.

Canvas layout:
- Left (450px): A central illustrated classroom/home scene with five labeled hotspots representing each pathway
- Right (250px): Infobox panel showing pathway name, description, and one prevention tip

Visual elements:
- Hotspots: "Direct Contact" (two hands), "Respiratory Droplets" (a cough/sneeze icon), "Contaminated Surfaces" (a doorknob), "Contaminated Food/Water" (a glass and plate), "Insect/Animal Bites" (a mosquito icon)
- Each hotspot glows softly when hovered to invite clicking

Interactive controls:
- Click each hotspot to reveal its pathway description and one matching prevention tip in the infobox
- Button: "Show All Pathways" reveals a summary list after all five have been explored

Default parameters:
- All 5 hotspots visible from the start; no required order

Data Visibility Requirements:
  Stage 1: Show the full illustrated scene with all five hotspots
  Stage 2: Show pathway name and description once a hotspot is clicked
  Stage 3: Show one linked prevention tip for that specific pathway
  Final: Show all five pathways together with their prevention tips once all have been explored

Behavior:
- Each hotspot always reveals the same information regardless of click order
- The prevention tip shown for each pathway previews the Disease Prevention Strategies section that follows

Instructional Rationale: This is an Understand-level objective, so the design uses concrete, click-to-reveal exploration of a static scene rather than animation, letting students connect each pathway to a specific real-world example at their own pace.

Implementation notes: Use p5.js with simple flat illustrations. Keep the scene ordinary (classroom or kitchen) and non-alarming.
```

## References

- [Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
