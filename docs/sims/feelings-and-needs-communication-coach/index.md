---
title: Feelings and Needs Communication Coach
description: Students demonstrate communicating thoughts, feelings, wants, and needs in healthy ways by building a complete sentence from a picture prompt, matching the Grade 1 benchmark on communicating thoughts, feelings, wants, and needs in healthy ways.
image: /sims/feelings-and-needs-communication-coach/feelings-and-needs-communication-coach.png
og:image: /sims/feelings-and-needs-communication-coach/feelings-and-needs-communication-coach.png
twitter:image: /sims/feelings-and-needs-communication-coach/feelings-and-needs-communication-coach.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 1
---

# Feelings and Needs Communication Coach

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Feelings and Needs Communication Coach MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Feelings and Needs Communication Coach** is an interactive MicroSim for this health-education textbook.

Students demonstrate communicating thoughts, feelings, wants, and needs in healthy ways by building a complete sentence from a picture prompt, matching the Grade 1 benchmark on communicating thoughts, feelings, wants, and needs in healthy ways.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, practice, apply

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students demonstrate communicating thoughts, feelings, wants, and needs in healthy ways by building a complete sentence from a picture prompt, matching the Grade 1 benchmark on communicating thoughts, feelings, wants, and needs in healthy ways.

This activity targets **Bloom's Apply (L3)** (demonstrate, practice, apply).

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
[Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md).

```text
Type: microsim
**sim-id:** feelings-and-needs-communication-coach<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students demonstrate communicating thoughts, feelings, wants, and needs in healthy ways by building a complete sentence from a picture prompt, matching the Grade 1 benchmark on communicating thoughts, feelings, wants, and needs in healthy ways.

Canvas layout:
- Left area (450px): One picture-prompt scene at a time (e.g., a child looking left out at recess)
- Right area (150px): Word-bank buttons for feelings and needs, plus a sentence-building strip and an infobox

Visual elements:
- 6 scenes showing a Grade 1 student in a common school or home situation (rained-out recess, loud classroom, hard homework problem, left out of a game, tired after lunch, excited about a good grade)
- A sentence strip at the bottom that fills in as the student taps word-bank buttons: "I feel ___ because ___. I need ___."
- Word-bank buttons grouped by feeling words (happy, sad, tired, frustrated, worried, excited) and need words (help, rest, a friend, quiet, a snack, a turn)

Interactive controls:
- Click-to-select: student taps a feeling word and a need word to complete the sentence strip
- Button: "Try Saying It" (pairs with the text-to-speech skill to read the finished sentence aloud in a warm, encouraging voice)
- Button: "Next Scene"
- Button: "Reset"

Default parameters:
- First scene: rained-out recess, to model a low-stakes, relatable example

Data Visibility Requirements:
  Stage 1: Show the picture prompt with an empty sentence strip
  Stage 2: Show the sentence strip fill in as each word is selected
  Stage 3: Reveal a caption once the sentence is complete: "Great! You just told someone exactly how you feel and what you need."

Behavior:
- Multiple feeling-and-need combinations are accepted as correct for each scene, since more than one honest answer can fit a situation
- Completed sentence appears in a speech bubble above the character in the scene

Instructional Rationale: This is an Apply-level (demonstrate/practice) objective, so the MicroSim has students actively construct their own feeling-and-need sentences from a word bank rather than only reading examples, directly rehearsing the healthy-communication skill the benchmark calls for.

Implementation notes: Use p5.js. Keep all scenes warm and everyday; avoid any scenario resembling the personal-safety content from Chapter 6, since this MicroSim focuses on everyday emotional and physical needs, not unsafe situations.
```

## References

- [Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
