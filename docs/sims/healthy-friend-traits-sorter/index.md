---
title: Healthy Friend Traits Sorter
description: Students identify and classify short scenario cards as showing a healthy or unhealthy peer trait, then explain what makes each one healthy or unhealthy.
image: /sims/healthy-friend-traits-sorter/healthy-friend-traits-sorter.png
og:image: /sims/healthy-friend-traits-sorter/healthy-friend-traits-sorter.png
twitter:image: /sims/healthy-friend-traits-sorter/healthy-friend-traits-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 1
---

# Healthy Friend Traits Sorter

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Healthy Friend Traits Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Healthy Friend Traits Sorter** is an interactive MicroSim for this health-education textbook.

Students identify and classify short scenario cards as showing a healthy or unhealthy peer trait, then explain what makes each one healthy or unhealthy.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — classify, identify, describe

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify and classify short scenario cards as showing a healthy or unhealthy peer trait, then explain what makes each one healthy or unhealthy.

This activity targets **Bloom's Understand (L2)** (classify, identify, describe).

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
[Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md).

```text
Type: microsim
**sim-id:** healthy-friend-traits-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, identify, describe

Learning objective: Students identify and classify short scenario cards as showing a healthy or unhealthy peer trait, then explain what makes each one healthy or unhealthy.

Canvas layout:
- Left area (450px): One scenario card at a time (simple flat illustration plus one sentence, e.g., "Maya waits for her turn on the swings.")
- Right area (150px): Two bins labeled "Healthy Trait" and "Not Yet Healthy" and an infobox

Visual elements:
- 10 scenario cards cycling one at a time, showing both healthy examples (sharing, listening, including) and unhealthy examples (grabbing, interrupting, leaving someone out)
- Two large, clearly labeled bins with friendly icons (a heart for "Healthy Trait", a thinking-face for "Not Yet Healthy")

Interactive controls:
- Click-to-select: student clicks the bin that matches the scenario
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario: "Maya waits for her turn on the swings" (clearly healthy, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scenario card with no label
  Stage 2: After the student clicks a bin, show whether it matches
  Stage 3: Reveal a one-sentence explanation ("Waiting your turn is a healthy trait because it's fair to everyone.")

Behavior:
- Correct match: bin glows, gentle chime, explanation caption appears
- Incorrect match: gentle prompt, "Look again — how would this make the other person feel?" and the correct bin glows softly as a hint

Instructional Rationale: This is an Understand-level (identify/classify) objective, so the MicroSim reveals a concrete explanation after each answer rather than using continuous animation, helping students connect each scenario to the underlying trait it demonstrates.

Implementation notes: Use p5.js. Large, simple, flat-style illustrations with diverse characters. Teacher reads each scenario and explanation aloud.
```

## References

- [Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
