---
title: Kind or Unkind?
description: Students distinguish Kind Behavior from Unkind Behavior by sorting illustrated scenario cards into two labeled bins.
image: /sims/kind-or-unkind/kind-or-unkind.png
og:image: /sims/kind-or-unkind/kind-or-unkind.png
twitter:image: /sims/kind-or-unkind/kind-or-unkind.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Kindergarten
---

# Kind or Unkind?

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Kind or Unkind? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Kind or Unkind?** is an interactive MicroSim for this health-education textbook.

Students distinguish Kind Behavior from Unkind Behavior by sorting illustrated scenario cards into two labeled bins.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — distinguish, sort, compare

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students distinguish Kind Behavior from Unkind Behavior by sorting illustrated scenario cards into two labeled bins.

This activity targets **Bloom's Analyze (L4)** (distinguish, sort, compare).

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
[Chapter 3: Feelings And Kindness](../../bands/kindergarten/chapters/03-feelings-and-kindness/index.md).

```text
Type: microsim
**sim-id:** kind-or-unkind<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, sort, compare

Learning objective: Students distinguish Kind Behavior from Unkind Behavior by sorting illustrated scenario cards into two labeled bins.

Canvas layout:
- Top area (250px): One simple illustrated scenario card shown at a time, depicting two children in a situation (e.g., one child sharing a toy, or one child grabbing a toy away), with a read-aloud caption
- Bottom area (200px): Two large labeled bins side by side: "Kind" (green, with a smiling sun icon) and "Unkind" (gray, with a raincloud icon)
- Bottom strip (50px): Score display ("You sorted 5 scenarios!") and a Reset button

Visual elements:
- 10 scenario cards cycling one at a time, evenly split between clearly kind and clearly unkind actions, drawn in a simple, warm, non-judgmental cartoon style
- Bins glow softly when a card is dragged over them

Interactive controls:
- Drag-and-drop: child drags the scenario card into the bin they believe matches
- Button: "Reset" to start over
- Button: "Next Scenario" appears after each placement

Default parameters:
- First scenario: two children sharing a toy (Kind)
- Scenarios appear in a fixed friendly order so a teacher can predict what is coming next

Behavior:
- When a card is placed in the correct bin, the bin glows green, a cheerful chime plays, and the score increases by one
- When a card is placed in the incorrect bin, the card gently slides back to the top and the teacher is prompted with a discussion question, such as "How do you think the other child felt?"
- After all 10 scenarios are sorted, show a celebration message: "You really know the difference between kind and unkind!"

Instructional Rationale: This is an Analyze-level objective because the child must examine a small scenario and distinguish which behavior category it belongs to, rather than simply recalling a definition. The forgiving retry behavior keeps the activity appropriate for a pre-reader audience while still requiring a real comparison judgment.

Implementation notes: Use p5.js. Represent each scenario as an object with an illustration reference, a correct category, and an optional discussion prompt string. Keep all captions read-aloud length (one short sentence).
```

## References

- [Chapter 3: Feelings And Kindness](../../bands/kindergarten/chapters/03-feelings-and-kindness/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
