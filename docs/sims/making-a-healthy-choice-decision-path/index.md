---
title: Making a Healthy Choice Decision Path
description: Students explain the steps of making a health decision — noticing the influence, thinking about the choice, and asking for help if needed — using a step-through walkthrough with a concrete, relatable scenario.
image: /sims/making-a-healthy-choice-decision-path/making-a-healthy-choice-decision-path.png
og:image: /sims/making-a-healthy-choice-decision-path/making-a-healthy-choice-decision-path.png
twitter:image: /sims/making-a-healthy-choice-decision-path/making-a-healthy-choice-decision-path.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 1
---

# Making a Healthy Choice Decision Path

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Making a Healthy Choice Decision Path MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Making a Healthy Choice Decision Path** is an interactive MicroSim for this health-education textbook.

Students explain the steps of making a health decision — noticing the influence, thinking about the choice, and asking for help if needed — using a step-through walkthrough with a concrete, relatable scenario.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, describe, summarize

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain the steps of making a health decision — noticing the influence, thinking about the choice, and asking for help if needed — using a step-through walkthrough with a concrete, relatable scenario.

This activity targets **Bloom's Understand (L2)** (explain, describe, summarize).

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
[Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md).

```text
Type: microsim
**sim-id:** making-a-healthy-choice-decision-path<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, summarize

Learning objective: Students explain the steps of making a health decision — noticing the influence, thinking about the choice, and asking for help if needed — using a step-through walkthrough with a concrete, relatable scenario.

Canvas layout:
- Left area (450px): One decision-path scene per step, shown one at a time
- Right area (150px): "Next Step" and "Previous Step" buttons, a step counter ("Step 2 of 4"), and an infobox

Visual elements:
- Step 1: A student is offered a sugary snack by a friend at lunch (the influence)
- Step 2: A thought bubble shows the student asking, "Is this a positive or negative influence on my choice right now?"
- Step 3: A thought bubble shows the student deciding, "I can choose the fruit instead," or "I'm not sure — I could ask a trusted adult."
- Step 4: The student makes the healthy choice and feels proud

Interactive controls:
- Button: "Next Step" (advances to the next scene)
- Button: "Previous Step" (returns to the prior scene)
- Step counter always visible

Default parameters:
- Starts at Step 1 (the influence is introduced)

Data Visibility Requirements:
  Stage 1: Show the snack offer and caption: "A friend offers you a sugary snack every day at lunch."
  Stage 2: Show the thinking step and caption: "Notice the influence — is it helping or making the choice harder?"
  Stage 3: Show the decision step and caption: "Decide what to do, or ask a trusted adult if you're not sure."
  Stage 4: Show the outcome and caption: "You made a health decision that supports your body."

Behavior:
- Each click of "Next Step" reveals the next scene and caption; "Previous Step" allows review
- A closing caption after Step 4 reads: "Every health decision follows this same path: notice the influence, think it through, ask for help if you need it, then choose."

Instructional Rationale: This is an Understand-level (explain/describe) objective, so the MicroSim uses a step-through walkthrough with a concrete scenario rather than continuous animation, letting students trace the full decision path in order and connect it back to the influence and help-seeking concepts already taught in this chapter.

Implementation notes: Use p5.js. Keep the scenario everyday and low-stakes (food choice), since Grade 1 health decisions should stay concrete and relatable rather than abstract.
```

## References

- [Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
