---
title: Reading Your Body's Signals
description: Students recall and identify body signals for hunger and fullness by matching feeling-cards to a labeled body figure.
image: /sims/hunger-fullness-signal-explorer/hunger-fullness-signal-explorer.png
og:image: /sims/hunger-fullness-signal-explorer/hunger-fullness-signal-explorer.png
twitter:image: /sims/hunger-fullness-signal-explorer/hunger-fullness-signal-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Remember (L1)
grade_band: Grade 3
---

# Reading Your Body's Signals

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Reading Your Body's Signals MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Reading Your Body's Signals** is an interactive MicroSim for this health-education textbook.

Students recall and identify body signals for hunger and fullness by matching feeling-cards to a labeled body figure.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — recall, identify, recognize

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students recall and identify body signals for hunger and fullness by matching feeling-cards to a labeled body figure.

This activity targets **Bloom's Remember (L1)** (recall, identify, recognize).

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
**Remember**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** hunger-fullness-signal-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, recognize

Learning objective: Students recall and identify body signals for hunger and fullness by matching feeling-cards to a labeled body figure.

Canvas layout:
- Left side (400px): A simple, friendly body figure with a highlighted stomach/belly zone
- Right side (200px): A stack of clickable feeling-cards (e.g., "rumbling tummy," "hard to focus," "comfortably full," "food tastes less exciting")

Visual elements:
- Body figure with a gentle glow around the belly area
- Feeling-cards in two color groups: hunger cards (light orange) and fullness cards (light green)
- A simple two-column sorting area labeled "Hungry" and "Full"

Interactive controls:
- Click and drag (or click to select, then click a column) each feeling-card into the "Hungry" or "Full" column
- Button: "Check My Answers"
- Button: "Reset"

Default parameters:
- All feeling-cards start in a shuffled pile above the two columns

Data Visibility Requirements:
  Stage 1: Show the shuffled pile of feeling-cards above two empty columns
  Stage 2: As each card is sorted, show it snap into the chosen column
  Stage 3: When "Check My Answers" is clicked, show a checkmark or gentle "try again" cue on each card, with the correct column highlighted for any that were misplaced

Behavior:
- Correctly sorted cards get a small checkmark and the body figure smiles
- Incorrectly sorted cards get a gentle nudge with a one-sentence explanation of which signal group they belong to
- A "You found them all!" caption appears once every card is correctly sorted

Instructional Rationale: This is a Remember-level objective (recall, identify), so the design uses a flashcard-style sorting activity rather than a complex simulation — students need to recognize and recall signals, which a simple sort-and-check pattern supports directly.

Implementation notes: Use p5.js. Keep the body figure simple and gender-neutral. Because this is a K-3 band, this MicroSim is the direct student-facing practice activity; the surrounding body text remains teacher-facing read-aloud material.
```

## References

- [Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
