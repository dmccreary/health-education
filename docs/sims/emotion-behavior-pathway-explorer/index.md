---
title: Emotion-to-Behavior Pathway Explorer
description: Students explain how a triggering situation leads to an emotion, and how that emotion can lead to two different possible behaviors depending on whether the emotion is managed.
image: /sims/emotion-behavior-pathway-explorer/emotion-behavior-pathway-explorer.png
og:image: /sims/emotion-behavior-pathway-explorer/emotion-behavior-pathway-explorer.png
twitter:image: /sims/emotion-behavior-pathway-explorer/emotion-behavior-pathway-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 5
---

# Emotion-to-Behavior Pathway Explorer

<iframe src="main.html" width="100%" height="444px" scrolling="no"></iframe>

[Run the Emotion-to-Behavior Pathway Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="444px" scrolling="no"></iframe>
```

## About this MicroSim

**Emotion-to-Behavior Pathway Explorer** is an interactive MicroSim for this health-education textbook.

Students explain how a triggering situation leads to an emotion, and how that emotion can lead to two different possible behaviors depending on whether the emotion is managed.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, describe, interpret

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain how a triggering situation leads to an emotion, and how that emotion can lead to two different possible behaviors depending on whether the emotion is managed.

This activity targets **Bloom's Understand (L2)** (explain, describe, interpret).

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
**Understand**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md).

```text
Type: microsim
**sim-id:** emotion-behavior-pathway-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, interpret

Learning objective: Students explain how a triggering situation leads to an emotion, and how that emotion can lead to two different possible behaviors depending on whether the emotion is managed.

Canvas layout:
- Left side (150px): A trigger situation card (e.g., "Being left out of a group chat")
- Center (150px): An emotion node showing the resulting feeling (e.g., "Hurt / Left Out")
- Right side (300px): Two branching outcome cards — "Unmanaged Behavior" and "Managed Behavior" — shown side by side for comparison

Visual elements:
- A simple left-to-right flow diagram with arrows: Trigger → Emotion → Behavior (branching into two paths)
- Six preset trigger scenarios selectable from a dropdown, covering common Grade 5 situations (being teased, doing well on a test, an argument with a sibling, being picked last for a team, a schedule change, receiving unexpected good news)

Interactive controls:
- Dropdown: Select trigger scenario
- Button: "Show Unmanaged Path" — reveals a realistic impulsive behavior and its likely consequence
- Button: "Show Managed Path" — reveals a realistic managed behavior (naming the feeling, pausing, asking for help, using a calming strategy) and its likely consequence
- Step-through Next/Previous buttons to move between Trigger, Emotion, and Behavior stages

Data Visibility Requirements:
Stage 1: Show the trigger situation in plain language
Stage 2: Show the named emotion that situation commonly produces
Stage 3a: Show the unmanaged behavior and its likely short-term consequence
Stage 3b: Show the managed behavior and its likely short-term consequence
Final: Show both paths side by side for direct comparison

Instructional Rationale: This is an Understand-level objective focused on explaining a causal chain, so the pattern uses step-through stages with concrete worked examples rather than continuous animation, which would obscure the distinct trigger-emotion-behavior stages the student needs to trace.

Implementation notes: Use p5.js. Store each scenario as an object containing trigger text, emotion label, unmanaged behavior/consequence, and managed behavior/consequence, so switching the dropdown swaps all connected text.
```

## References

- [Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
