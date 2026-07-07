---
title: Four Steps to Solve a Conflict
description: Students apply the four-step healthy conflict resolution process to a simple playground scenario by choosing what to do at each step.
image: /sims/conflict-resolution-steps/conflict-resolution-steps.png
og:image: /sims/conflict-resolution-steps/conflict-resolution-steps.png
twitter:image: /sims/conflict-resolution-steps/conflict-resolution-steps.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 2
---

# Four Steps to Solve a Conflict

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the Four Steps to Solve a Conflict MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**Four Steps to Solve a Conflict** is an interactive MicroSim for this health-education textbook.

Students apply the four-step healthy conflict resolution process to a simple playground scenario by choosing what to do at each step.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, use, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 2**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply the four-step healthy conflict resolution process to a simple playground scenario by choosing what to do at each step.

This activity targets **Bloom's Apply (L3)** (demonstrate, use, practice).

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
[Chapter 3: Handling Conflict and Kind Play](../../bands/grade-2/chapters/03-conflict-kind-play/index.md).

```text
Type: microsim
**sim-id:** conflict-resolution-steps<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply the four-step healthy conflict resolution process to a simple playground scenario by choosing what to do at each step.

Canvas layout:
- Top area (100px): A short scenario banner describing a conflict (e.g., "Two friends both want to use the only jump rope at recess.")
- Middle area (300px): Four large numbered step cards (Stop and Breathe, Say How You Feel, Listen, Find a Solution) arranged left to right
- Bottom area (100px): An infobox that shows feedback text

Visual elements:
- Four step cards, each with a simple icon (a hand for "stop," a speech bubble for "say how you feel," an ear for "listen," a handshake for "find a solution")
- Two simple cartoon children shown at the top holding a jump rope

Interactive controls:
- Click each step card in order to reveal what that step looks like in this scenario
- Button: "Try a New Scenario" — swaps in one of three preset conflict scenarios (jump rope, board game turn, group project idea)
- Button: "Reset"

Default parameters:
- Scenario 1 (jump rope) selected at start
- No steps revealed yet; instructions read "Click Step 1 to begin!"

Data Visibility Requirements:
  Stage 1: Show the scenario banner and four unrevealed step cards
  Stage 2: Click Step 1 -- show caption "Both friends stop and take a deep breath instead of grabbing the rope."
  Stage 3: Click Step 2 -- show caption "One friend says, 'I feel left out when I don't get a turn.'"
  Stage 4: Click Step 3 -- show caption "The other friend listens and says, 'I didn't know you felt that way.'"
  Stage 5: Click Step 4 -- show caption "They agree to take turns every five minutes."

Behavior:
- Steps must be revealed in order; clicking a later step before an earlier one shows a gentle reminder to go in order
- After all four steps are revealed, a checkmark appears over the scenario banner and the infobox reads "Conflict solved calmly!"
- "Try a New Scenario" resets all four steps to unrevealed and loads new scenario text

Instructional Rationale: This is an Apply-level objective, so the design lets students practice choosing and sequencing the four steps in a concrete scenario rather than just watching an animation. Requiring steps in order reinforces that healthy conflict resolution is a repeatable process, not a random set of options.

Implementation notes: Use p5.js. Keep text large enough for read-aloud. Icons should be simple and flat, matching the mascot's friendly visual style.
```

## References

- [Chapter 3: Handling Conflict and Kind Play](../../bands/grade-2/chapters/03-conflict-kind-play/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
