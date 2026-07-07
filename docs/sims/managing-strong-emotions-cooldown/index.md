---
title: Cooling Down a Big Feeling
description: Students explain how a calming strategy lowers a strong emotion over time by stepping through a "feelings thermometer" scenario.
image: /sims/managing-strong-emotions-cooldown/managing-strong-emotions-cooldown.png
og:image: /sims/managing-strong-emotions-cooldown/managing-strong-emotions-cooldown.png
twitter:image: /sims/managing-strong-emotions-cooldown/managing-strong-emotions-cooldown.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 2
---

# Cooling Down a Big Feeling

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Cooling Down a Big Feeling MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Cooling Down a Big Feeling** is an interactive MicroSim for this health-education textbook.

Students explain how a calming strategy lowers a strong emotion over time by stepping through a "feelings thermometer" scenario.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, describe

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 2**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain how a calming strategy lowers a strong emotion over time by stepping through a "feelings thermometer" scenario.

This activity targets **Bloom's Understand (L2)** (explain, describe).

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
[Chapter 3: Handling Conflict and Kind Play](../../bands/grade-2/chapters/03-conflict-kind-play/index.md).

```text
Type: microsim
**sim-id:** managing-strong-emotions-cooldown<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe

Learning objective: Students explain how a calming strategy lowers a strong emotion over time by stepping through a "feelings thermometer" scenario.

Canvas layout:
- Left area (200px): A vertical "feelings thermometer" showing emotion intensity from calm (bottom, blue) to very upset (top, red)
- Right area (400px): A step-through scene with a character and a caption box, plus Next/Back buttons

Visual elements:
- Thermometer with a marker that moves up or down
- A simple cartoon character whose face changes expression (frustrated, calming, calm) at each stage
- Caption box below the character

Interactive controls:
- Button: "Next" advances to the next stage of the scenario
- Button: "Back" returns to the previous stage
- Dropdown: Choose which calming strategy the character tries (deep breaths, counting to ten, walking away)

Default parameters:
- Thermometer starts near the top (very upset) after a conflict scenario is described
- Default strategy: "deep breaths"

Data Visibility Requirements:
  Stage 1: Show thermometer high (red) with caption "A friend took the last turn on the swing. This character feels really upset!"
  Stage 2: Show the chosen calming strategy happening, thermometer marker begins moving down, caption names the strategy: "Taking three deep breaths..."
  Stage 3: Show thermometer lower (yellow), caption "The feeling is getting smaller."
  Stage 4: Show thermometer near bottom (blue/calm), caption "Now the character feels calm enough to talk about what happened."

Behavior:
- Changing the strategy dropdown resets the scenario and shows a slightly different caption for each strategy, so students see that different strategies can all work
- The thermometer marker animates smoothly between stages when Next/Back is clicked

Instructional Rationale: This is an Understand-level (explain) objective about a cause-and-effect process, so the design uses a step-through thermometer with visible stages rather than continuous animation, letting students trace how a calming strategy causes the emotion to shrink over time.

Implementation notes: Use p5.js. Keep the thermometer large and simple. Facial expressions should be easy to read from across a classroom.
```

## References

- [Chapter 3: Handling Conflict and Kind Play](../../bands/grade-2/chapters/03-conflict-kind-play/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
