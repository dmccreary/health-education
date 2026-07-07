---
title: Four Steps to Solve a Conflict
description: Students apply the four-step healthy conflict resolution process to a simple playground scenario by choosing what to do at each step.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Four Steps to Solve a Conflict



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 3: Handling Conflict and Kind Play](../../bands/grade-2/chapters/03-conflict-kind-play/index.md)
