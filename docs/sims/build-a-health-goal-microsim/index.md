---
title: Build a Health Goal
description: Students determine the components of a personal health-related goal by assembling a goal from a target behavior, a time frame, and a way to track progress.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Build a Health Goal



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md).

```text
Type: microsim
**sim-id:** build-a-health-goal-microsim<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: determine, organize, construct

Learning objective: Students determine the components of a personal health-related goal by assembling a goal from a target behavior, a time frame, and a way to track progress.

Canvas layout:
- Left side (350px): Three selection columns: "Pick a Target" (e.g., drink water, try a new food, play outside, sleep on time), "Pick a Time Frame" (this week, two weeks, this month), "Pick a Tracker" (calendar stickers, tally marks, checklist)
- Right side (250px): A built "My Goal" card that assembles the three chosen pieces into one readable sentence

Visual elements:
- Three vertical lists of clickable option chips
- A goal card that updates live as choices are made, styled like a simple certificate

Interactive controls:
- Click one chip from each of the three columns
- Button: "Build My Goal" (finalizes the sentence on the card)
- Button: "Start Over"

Default parameters:
- No chips selected; goal card shows placeholder text "Pick a target, a time frame, and a tracker to build your goal"

Data Visibility Requirements:
  Stage 1: Show three empty columns and placeholder goal card
  Stage 2: Student picks "drink water" -- goal card updates to show "My goal: drink water ___"
  Stage 3: Student picks "this week" -- goal card updates to "My goal: drink water this week ___"
  Stage 4: Student picks "calendar stickers" -- goal card completes: "My goal: drink water this week, and I'll track it with calendar stickers"

Behavior:
- Goal card always reflects current selections live
- "Build My Goal" locks in the sentence and shows a small celebration highlight (color flash, not sound) on the card

Instructional Rationale: This is an Analyze-level objective ("determine actions that support a personal health-related goal"), so the design has students organize the separate components (target, time frame, tracker) into a coherent structure themselves rather than simply recalling a premade goal.

Implementation notes: Use p5.js. Keep the interface simple with large clickable chips appropriate for early-elementary fine motor skills.
```

## Related Resources

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
