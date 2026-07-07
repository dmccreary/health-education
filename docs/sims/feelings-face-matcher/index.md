---
title: Feelings Face Matcher
description: Students identify a feeling from a facial expression and cartoon scene, then explain what likely caused that feeling, moving beyond simple naming toward reasoning about cause.
image: /sims/feelings-face-matcher/feelings-face-matcher.png
og:image: /sims/feelings-face-matcher/feelings-face-matcher.png
twitter:image: /sims/feelings-face-matcher/feelings-face-matcher.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 1
---

# Feelings Face Matcher

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Feelings Face Matcher MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Feelings Face Matcher** is an interactive MicroSim for this health-education textbook.

Students identify a feeling from a facial expression and cartoon scene, then explain what likely caused that feeling, moving beyond simple naming toward reasoning about cause.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — identify, explain, classify

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify a feeling from a facial expression and cartoon scene, then explain what likely caused that feeling, moving beyond simple naming toward reasoning about cause.

This activity targets **Bloom's Understand (L2)** (identify, explain, classify).

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
[Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md).

```text
Type: microsim
**sim-id:** feelings-face-matcher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: identify, explain, classify

Learning objective: Students identify a feeling from a facial expression and cartoon scene, then explain what likely caused that feeling, moving beyond simple naming toward reasoning about cause.

Canvas layout:
- Left area (450px): A large cartoon character scene showing a facial expression and a short situation (e.g., a child hugging a new puppy)
- Right area (150px): Six feeling word cards to choose from (Happy, Sad, Angry, Scared, Excited, Calm) and an infobox

Visual elements:
- 8 scenes cycling one at a time, each a simple flat-style illustration of a child in a common situation
- Six labeled feeling word cards with simple corresponding facial icons

Interactive controls:
- Click-to-select: student clicks the feeling word that matches the scene
- Button: "Next Scene"
- Button: "Reset"

Default parameters:
- First scene: a child smiling while opening a birthday present (clearly "Happy," to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scene with no label
  Stage 2: After the student clicks a feeling word, show whether it matches
  Stage 3: Reveal a one-sentence explanation of the cause ("This child feels happy because they got a fun surprise.")

Behavior:
- Correct match: the feeling card glows, gentle chime, explanation caption appears
- Incorrect match: gentle prompt, "Look again — what just happened in the picture?" and the correct card glows softly as a hint

Instructional Rationale: This is an Understand-level (identify/explain) objective, so the MicroSim reveals the cause of the feeling after each answer rather than using continuous animation, letting students connect each scene to a concrete reason a feeling occurred.

Implementation notes: Use p5.js. Large, simple, flat-style illustrations with clear, friendly facial expressions. Teacher reads each scene and explanation aloud.
```

## References

- [Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
