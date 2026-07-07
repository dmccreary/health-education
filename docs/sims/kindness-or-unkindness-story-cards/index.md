---
title: Kindness or Unkindness? Story Cards
description: Students classify short story scenes as kindness or unkindness and explain how each action affects the way the other person feels, and how belonging is strengthened or weakened.
image: /sims/kindness-or-unkindness-story-cards/kindness-or-unkindness-story-cards.png
og:image: /sims/kindness-or-unkindness-story-cards/kindness-or-unkindness-story-cards.png
twitter:image: /sims/kindness-or-unkindness-story-cards/kindness-or-unkindness-story-cards.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 1
---

# Kindness or Unkindness? Story Cards

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Kindness or Unkindness? Story Cards MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Kindness or Unkindness? Story Cards** is an interactive MicroSim for this health-education textbook.

Students classify short story scenes as kindness or unkindness and explain how each action affects the way the other person feels, and how belonging is strengthened or weakened.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — classify, explain, compare

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify short story scenes as kindness or unkindness and explain how each action affects the way the other person feels, and how belonging is strengthened or weakened.

This activity targets **Bloom's Understand (L2)** (classify, explain, compare).

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
**sim-id:** kindness-or-unkindness-story-cards<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, explain, compare

Learning objective: Students classify short story scenes as kindness or unkindness and explain how each action affects the way the other person feels, and how belonging is strengthened or weakened.

Canvas layout:
- Left area (450px): One story scene at a time (flat illustration plus one or two sentences)
- Right area (150px): Two large buttons, "Kindness" and "Unkindness," plus an infobox

Visual elements:
- 8 story scenes cycling one at a time, mixing kindness moments (sharing, including, comforting) and unkindness moments (excluding, teasing, grabbing)
- Feeling-face icon that appears on the character in the scene after the student answers

Interactive controls:
- Click-to-select: "Kindness" or "Unkindness" button
- Button: "Next Story"
- Button: "Reset"

Default parameters:
- First scene: a child sharing crayons with a classmate who forgot theirs (clearly kindness, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the story scene with no label
  Stage 2: After the student clicks a button, reveal whether it matches
  Stage 3: Show the character's feeling-face and a one-sentence explanation of the effect ("Sharing crayons helped Sam feel included and cared for.")

Behavior:
- Correct match: button glows green, gentle chime, explanation and feeling-face appear
- Incorrect match: gentle prompt, "Think about how the other person might feel," correct answer glows softly as a hint

Instructional Rationale: This is an Understand-level (explain/classify) objective, so the MicroSim reveals the emotional effect of each action with concrete captions rather than continuous animation, helping students connect specific actions to specific feelings and to belonging.

Implementation notes: Use p5.js. Keep illustrations warm and non-shaming; unkindness scenes should show a fixable moment, never a scary one. Teacher reads each scene and explanation aloud.
```

## References

- [Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
