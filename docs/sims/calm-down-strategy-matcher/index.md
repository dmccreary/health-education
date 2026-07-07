---
title: Calm-Down Strategy Matcher
description: Students match a described emotional scenario to an appropriate restorative self-management strategy and see why it is a good fit.
image: /sims/calm-down-strategy-matcher/calm-down-strategy-matcher.png
og:image: /sims/calm-down-strategy-matcher/calm-down-strategy-matcher.png
twitter:image: /sims/calm-down-strategy-matcher/calm-down-strategy-matcher.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 5
---

# Calm-Down Strategy Matcher

<iframe src="main.html" width="100%" height="486px" scrolling="no"></iframe>

[Run the Calm-Down Strategy Matcher MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="486px" scrolling="no"></iframe>
```

## About this MicroSim

**Calm-Down Strategy Matcher** is an interactive MicroSim for this health-education textbook.

Students match a described emotional scenario to an appropriate restorative self-management strategy and see why it is a good fit.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — use, demonstrate, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students match a described emotional scenario to an appropriate restorative self-management strategy and see why it is a good fit.

This activity targets **Bloom's Apply (L3)** (use, demonstrate, practice).

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
[Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md).

```text
Type: microsim
**sim-id:** calm-down-strategy-matcher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, practice

Learning objective: Students match a described emotional scenario to an appropriate restorative self-management strategy and see why it is a good fit.

Canvas layout:
- Left side (450px): A scenario card showing a short situation and the emotion it produces
- Right side (200px): Four strategy category buttons (Body-Calming, Expressing, Redirecting, Reflecting) and a feedback panel

Visual elements:
- Scenario card with simple line-art icon representing the situation (e.g., a spilled backpack, a missed shot, a loud classroom)
- Four labeled strategy buttons, each showing 2-3 example actions when hovered
- Feedback panel that displays a green check or an encouraging note after a choice

Interactive controls:
- Button: "New Scenario" — loads a new random scenario from a bank of 8 situations
- Click one of the four strategy category buttons to answer
- Button: "Why This Works" — reveals a one-sentence explanation tied to the scenario

Default parameters:
- Starts on Scenario 1: "You struck out during a kickball game and feel embarrassed."

Behavior:
- Any reasonable strategy choice is marked correct if it plausibly helps that scenario (this is not a single-right-answer quiz); feedback explains why the chosen category can help
- "Why This Works" always available regardless of the answer chosen, reinforcing the reasoning rather than just the score

Instructional Rationale: This is an Apply-level objective, so the pattern is scenario-based practice with immediate, low-stakes feedback rather than passive animation, letting students rehearse matching strategies to real situations.

Implementation notes: Use p5.js. Store scenarios as objects with a description and an array of acceptable strategy categories; feedback text pulled from a matching explanation string.
```

## References

- [Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
