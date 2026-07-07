---
title: Build a Health Goal
description: Students determine the components of a personal health-related goal by assembling a goal from a target behavior, a time frame, and a way to track progress.
image: /sims/build-a-health-goal-microsim/build-a-health-goal-microsim.png
og:image: /sims/build-a-health-goal-microsim/build-a-health-goal-microsim.png
twitter:image: /sims/build-a-health-goal-microsim/build-a-health-goal-microsim.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grade 2
---

# Build a Health Goal

<iframe src="main.html" width="100%" height="482px" scrolling="no"></iframe>

[Run the Build a Health Goal MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="482px" scrolling="no"></iframe>
```

## About this MicroSim

**Build a Health Goal** is an interactive MicroSim for this health-education textbook.

Students determine the components of a personal health-related goal by assembling a goal from a target behavior, a time frame, and a way to track progress.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — determine, organize, construct

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 2**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students determine the components of a personal health-related goal by assembling a goal from a target behavior, a time frame, and a way to track progress.

This activity targets **Bloom's Analyze (L4)** (determine, organize, construct).

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
**Analyze**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
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

## References

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
