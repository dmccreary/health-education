---
title: Where Does Your Energy Come From?
description: Students explain the cause-and-effect relationship between eating food and having energy to grow, move, and think, using a step-through scenario of a school day.
image: /sims/food-energy-cause-effect/food-energy-cause-effect.png
og:image: /sims/food-energy-cause-effect/food-energy-cause-effect.png
twitter:image: /sims/food-energy-cause-effect/food-energy-cause-effect.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 2
---

# Where Does Your Energy Come From?

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Where Does Your Energy Come From? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Where Does Your Energy Come From?** is an interactive MicroSim for this health-education textbook.

Students explain the cause-and-effect relationship between eating food and having energy to grow, move, and think, using a step-through scenario of a school day.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, interpret

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 2**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain the cause-and-effect relationship between eating food and having energy to grow, move, and think, using a step-through scenario of a school day.

This activity targets **Bloom's Understand (L2)** (explain, interpret).

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
[Chapter 2: Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md).

```text
Type: microsim
**sim-id:** food-energy-cause-effect<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, interpret

Learning objective: Students explain the cause-and-effect relationship between eating food and having energy to grow, move, and think, using a step-through scenario of a school day.

Canvas layout:
- Top area (150px): A timeline strip showing four moments in a school day (Breakfast, Morning Class, Recess, Afternoon Snack)
- Middle area (250px): A character whose "energy meter" (a simple bar or battery icon) rises and falls at each moment
- Bottom strip (100px): Step-through "Next" and "Back" buttons with a caption

Visual elements:
- Energy meter styled like a friendly battery icon (empty to full)
- Character shown running, thinking, or yawning depending on energy level

Interactive controls:
- Button: "Next" advances to the next moment in the day
- Button: "Back" returns to the previous moment
- Click the energy meter at any time to see a caption explaining the current energy level

Default parameters:
- Starts at "Breakfast" with a full energy meter

Data Visibility Requirements:
  Stage 1: Show "Breakfast" — energy meter fills up, caption: "Food gives the body energy to start the day."
  Stage 2: Show "Morning Class" — energy meter slightly lower, caption: "The body uses energy to think and pay attention."
  Stage 3: Show "Recess" — energy meter drops more, caption: "Running and playing use up energy fast!"
  Stage 4: Show "Afternoon Snack" — energy meter refills, caption: "Eating again gives the body more energy to finish the day."

Behavior:
- Each step change animates the energy meter rising or falling and updates the caption
- If the student clicks "Next" repeatedly past snack, the cycle can loop back to show energy needs happen all day, every day

Instructional Rationale: This is an Understand-level (explain) objective focused on cause and effect, so the design uses a step-through timeline with visible energy-level data at each stage rather than continuous animation, letting students trace the cause (eating) to the effect (energy available) explicitly.

Implementation notes: Use p5.js. Keep the energy meter large and simple, like a battery icon. Captions should be large enough for read-aloud.
```

## References

- [Chapter 2: Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
