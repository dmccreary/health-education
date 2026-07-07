---
title: Belonging Classroom Map
description: Students identify visible signs that a classroom character feels a sense of belonging (or does not yet) and describe what caring relationship helped create that feeling.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Belonging Classroom Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md)
