---
title: Conflict Resolution Role-Play Simulator
description: Students demonstrate the five-step conflict-resolution process by choosing the best response at each stage of a branching peer conflict scenario.
image: /sims/conflict-resolution-role-play-simulator/conflict-resolution-role-play-simulator.png
og:image: /sims/conflict-resolution-role-play-simulator/conflict-resolution-role-play-simulator.png
twitter:image: /sims/conflict-resolution-role-play-simulator/conflict-resolution-role-play-simulator.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 5
---

# Conflict Resolution Role-Play Simulator

<iframe src="main.html" width="100%" height="499px" scrolling="no"></iframe>

[Run the Conflict Resolution Role-Play Simulator MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="499px" scrolling="no"></iframe>
```

## About this MicroSim

**Conflict Resolution Role-Play Simulator** is an interactive MicroSim for this health-education textbook.

Students demonstrate the five-step conflict-resolution process by choosing the best response at each stage of a branching peer conflict scenario.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, practice, use

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students demonstrate the five-step conflict-resolution process by choosing the best response at each stage of a branching peer conflict scenario.

This activity targets **Bloom's Apply (L3)** (demonstrate, practice, use).

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
**Apply**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** conflict-resolution-role-play-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students demonstrate the five-step conflict-resolution process by choosing the best response at each stage of a branching peer conflict scenario.

Canvas layout: Left (450px) scenario text and current stage; right (200px) 2-3 response choice buttons and a feedback panel showing which conflict-resolution step is in play.

Visual elements: Scenario card (e.g., "Two students both believe they were assigned the same job in a group project and are getting frustrated"); stage indicator showing which of the 5 steps is active (Stay Calm, Say What Happened, Listen, Find a Solution, Follow Through).

Interactive controls: Click a response choice at each stage; "See Result" advances to the next stage with feedback; "Try Again" restarts the same scenario; "New Scenario" loads one of 4 total conflict scenarios (group project, shared recess equipment, sibling chores, seating disagreement).

Default parameters: Scenario 1 loads first, Stage 1 active.

Behavior: Choosing "Take a breath and say 'let's figure this out'" at Stage 1 advances with feedback "Good — staying calm keeps the conflict from getting bigger." Choosing a blaming response shows "This raises tension instead of resolving it — try again."

Instructional Rationale: Apply-level objective, so the simulator has the student practice choosing and sequencing real responses rather than only reading about the steps.

Implementation notes: p5.js; each scenario stored as a branching stage array with choices, correctness flags, and feedback text; track and display which of the 5 steps the student is currently demonstrating.
```

## References

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
