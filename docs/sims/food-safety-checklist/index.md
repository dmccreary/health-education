---
title: Food Safety Habit Checklist
description: Students recall safe practices for handling food by checking off food safety habits shown in short kitchen scenes.
image: /sims/food-safety-checklist/food-safety-checklist.png
og:image: /sims/food-safety-checklist/food-safety-checklist.png
twitter:image: /sims/food-safety-checklist/food-safety-checklist.png
social:
   cards: false
library: p5.js
bloom_level: Remember (L1)
grade_band: Grade 1
---

# Food Safety Habit Checklist

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Food Safety Habit Checklist MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Food Safety Habit Checklist** is an interactive MicroSim for this health-education textbook.

Students recall safe practices for handling food by checking off food safety habits shown in short kitchen scenes.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — recall, identify, list

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students recall safe practices for handling food by checking off food safety habits shown in short kitchen scenes.

This activity targets **Bloom's Remember (L1)** (recall, identify, list).

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
[Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** food-safety-checklist<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, list

Learning objective: Students recall safe practices for handling food by checking off food safety habits shown in short kitchen scenes.

Canvas layout:
- Top area (150px): One kitchen scene at a time (washing hands before a snack, rinsing an apple, picking up food that fell on the floor, asking an adult before touching a hot pan)
- Middle area (250px): Two buttons: "Safe Habit" and "Needs a Change"
- Bottom strip (100px): Explanation caption and "Next Scene" button

Visual elements:
- 8 simple kitchen scenes cycling one at a time, calm and non-graphic

Interactive controls:
- Button: "Safe Habit"
- Button: "Needs a Change"
- Button: "Next Scene"

Default parameters:
- First scene: a child washing hands before snack time (clearly a safe habit, to build confidence)

Behavior:
- Correct answer: gentle chime, one-sentence reason appears ("Washing hands removes germs before they can get on your food.")
- Incorrect answer: calm caption prompts, "Look again — could this food make someone feel sick?"

Instructional Rationale: This is a Remember-level (recall/identify) objective, so the MicroSim uses simple scene recognition with an immediate one-sentence reason, keeping the tone practical and non-frightening rather than warning-heavy.

Implementation notes: Use p5.js. Keep every scene calm and matter-of-fact — frame this as "kitchen rules with a trusted adult," never as scary food-danger content. Large text for read-aloud.
```

## References

- [Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
