---
title: Pick Your Active Play Adventure
description: Students apply their understanding of daily active play by building a pretend weekly activity plan, choosing a different fun way to be active on each day.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Pick Your Active Play Adventure



<iframe src="main.html" width="100%" height="527px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md).

```text
Type: microsim
**sim-id:** pick-your-active-play-adventure<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students apply their understanding of daily active play by building a pretend weekly activity plan, choosing a different fun way to be active on each day.

Canvas layout:
- Left area (450px): Seven day slots (Sunday through Saturday) arranged in a row or grid
- Right area (150px): A tray of eight active-play icons (tag, biking, dancing, playground, catch, jump rope, walking, swimming) and an infobox

Visual elements:
- Seven labeled day slots, each able to hold one activity icon
- Eight colorful, friendly active-play icons in the tray

Interactive controls:
- Drag-and-drop: student drags an activity icon into a day slot
- Button: "Show My Week"
- Button: "Reset"

Default parameters:
- All day slots start empty; all icons start in the tray

Data Visibility Requirements:
  Stage 1: Show empty week grid and full icon tray
  Stage 2: As icons are placed, show them snapped into day slots
  Stage 3: After "Show My Week" is clicked, display a summary caption celebrating variety ("You picked 5 different ways to move this week! Variety keeps active play fun.")

Behavior:
- Any combination of activities is accepted, since enjoyment is personal
- If the same activity is used every day, a gentle encouraging caption suggests trying something new for variety, without saying the choice was wrong

Instructional Rationale: This is an Apply-level (practice/demonstrate) objective, so the MicroSim has students actively construct their own weekly plan with immediate summary feedback, rather than only viewing a list of examples.

Implementation notes: Use p5.js. Keep icons simple, colorful, and inclusive of different ability levels (e.g., include a wheelchair basketball icon as one option). Teacher can discuss favorite choices as a class.
```

## Related Resources

- [Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md)
