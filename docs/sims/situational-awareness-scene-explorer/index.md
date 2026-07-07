---
title: Situational Awareness Scene Explorer
description: Students describe and identify situational-awareness clues (people nearby, exits, mood, body signals) present in a still scene, building the habit of scanning surroundings calmly.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Situational Awareness Scene Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Personal Safety and Refusal Skills](../../bands/grade-4/chapters/04-safety-and-refusal-skills/index.md).

```text
Type: microsim
**sim-id:** situational-awareness-scene-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, identify, interpret

Learning objective: Students describe and identify situational-awareness clues (people nearby, exits, mood, body signals) present in a still scene, building the habit of scanning surroundings calmly.

Canvas layout:
- Left (450px): A simple, calm, illustrated scene (e.g., a park, a school hallway, a store) with four clickable hotspots
- Right (250px): An infobox panel and a running checklist of clues found

Visual elements:
- Illustrated scene with hotspots marked by small circles: "People Nearby," "Exit/Way Out," "Mood of the Room," "How My Body Feels"
- Checklist panel that fills in as hotspots are clicked

Interactive controls:
- Click each hotspot to reveal its clue in the infobox
- Button: "New Scene" loads a different illustrated setting
- Button: "Reset Checklist"

Default parameters:
- Scene 1: a school hallway between classes, all four hotspots present and calm/neutral

Data Visibility Requirements:
  Stage 1: Show the full illustrated scene with all four hotspots visible
  Stage 2: Show the clue text for each hotspot once clicked
  Stage 3: Show the running checklist update after each click
  Final: Show a short summary message once all four hotspots are found: "You just practiced situational awareness — noticing people, exits, mood, and your own feelings."

Behavior:
- Each hotspot always reveals its clue when clicked, regardless of order
- Scenes rotate between calm, everyday settings (classroom, park, bus stop, cafeteria); none depict danger directly — the sim teaches the scanning habit, not threat scenarios

Instructional Rationale: This is an Understand-level objective, so the design uses concrete, step-through exploration of a static scene rather than animation, letting students see and name each clue at their own pace before applying the skill to real situations.

Implementation notes: Use p5.js with simple flat illustrations. Keep all scenes ordinary and non-threatening; the goal is building the observation habit, not simulating danger.
```

## Related Resources

- [Chapter 4: Personal Safety and Refusal Skills](../../bands/grade-4/chapters/04-safety-and-refusal-skills/index.md)
