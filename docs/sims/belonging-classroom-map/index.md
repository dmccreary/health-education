---
title: Belonging Classroom Map
description: Students identify visible signs that a classroom character feels a sense of belonging (or does not yet) and describe what caring relationship helped create that feeling.
image: /sims/belonging-classroom-map/belonging-classroom-map.png
og:image: /sims/belonging-classroom-map/belonging-classroom-map.png
twitter:image: /sims/belonging-classroom-map/belonging-classroom-map.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 1
---

# Belonging Classroom Map

<iframe src="main.html" width="100%" height="494px" scrolling="no"></iframe>

[Run the Belonging Classroom Map MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="494px" scrolling="no"></iframe>
```

## About this MicroSim

**Belonging Classroom Map** is an interactive MicroSim for this health-education textbook.

Students identify visible signs that a classroom character feels a sense of belonging (or does not yet) and describe what caring relationship helped create that feeling.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — identify, describe, infer

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify visible signs that a classroom character feels a sense of belonging (or does not yet) and describe what caring relationship helped create that feeling.

This activity targets **Bloom's Understand (L2)** (identify, describe, infer).

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
[Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md).

```text
Type: microsim
**sim-id:** belonging-classroom-map<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: identify, describe, infer

Learning objective: Students identify visible signs that a classroom character feels a sense of belonging (or does not yet) and describe what caring relationship helped create that feeling.

Canvas layout:
- Left area (450px): A simple classroom scene with six character icons scattered around tables, the reading corner, and the recess area
- Right area (150px): Infobox and a "Show Signs" toggle button

Visual elements:
- Six character icons, each with a distinct posture/expression: relaxed and smiling (belonging), hesitating at the edge of a group (not yet belonging), etc.
- A small "caring connection" line appears between a character and a peer or teacher when selected, if one is shown in the scene

Interactive controls:
- Click each character icon to reveal their belonging status and why
- Button: "Show Signs" (highlights the specific body language/action clue on the selected character)
- Button: "Reset"

Default parameters:
- Scene opens with all six characters visible and unselected

Data Visibility Requirements:
  Stage 1: Show the classroom scene with six characters, no labels
  Stage 2: After a click, highlight the visible clue (posture, action, or expression)
  Stage 3: Reveal a one-sentence explanation connecting the clue to belonging or to a caring relationship ("Sam is smiling and sitting with friends — that caring friendship helps Sam feel like they belong.")

Behavior:
- Each character reveals a short explanation in the infobox when clicked
- Encouraging caption appears for "not yet belonging" characters describing one small kind action that could help, e.g., "Inviting Priya to join the game could help her feel like she belongs too."

Instructional Rationale: This is an Understand-level (identify/describe) objective, so the MicroSim uses static, clickable scenes with concrete captions rather than continuous animation, letting students infer belonging from visible clues and connect it to a specific caring relationship.

Implementation notes: Use p5.js. Keep every character's situation gentle and fixable — no character should look excluded in a distressing way, only in a way that invites a kind next step. Teacher facilitates discussion after each reveal.
```

## References

- [Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
