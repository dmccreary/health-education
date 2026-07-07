---
title: Decision Options and Outcomes Explorer
description: Students describe two or more options for a health-related decision and the likely outcome of each option.
image: /sims/decision-options-outcomes-explorer/decision-options-outcomes-explorer.png
og:image: /sims/decision-options-outcomes-explorer/decision-options-outcomes-explorer.png
twitter:image: /sims/decision-options-outcomes-explorer/decision-options-outcomes-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 2
---

# Decision Options and Outcomes Explorer

<iframe src="main.html" width="100%" height="504px" scrolling="no"></iframe>

[Run the Decision Options and Outcomes Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="504px" scrolling="no"></iframe>
```

## About this MicroSim

**Decision Options and Outcomes Explorer** is an interactive MicroSim for this health-education textbook.

Students describe two or more options for a health-related decision and the likely outcome of each option.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — describe, explain, compare

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 2**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students describe two or more options for a health-related decision and the likely outcome of each option.

This activity targets **Bloom's Understand (L2)** (describe, explain, compare).

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
[Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md).

```text
Type: microsim
**sim-id:** decision-options-outcomes-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, explain, compare

Learning objective: Students describe two or more options for a health-related decision and the likely outcome of each option.

Canvas layout:
- Top area (100px): A health-related scenario prompt selectable from a dropdown (e.g., "You are offered a sugary drink at a party," "A friend wants you to skip washing hands before snack," "You are choosing how to spend recess time")
- Middle area (280px): Two or three option cards displayed side by side, each with a "Show Outcome" button beneath it
- Bottom area (120px): Outcome panel showing the result text for the most recently clicked option

Interactive controls:
- Dropdown: Select scenario (3 total)
- Button under each option card: "Show Outcome"
- Button: "Compare All Outcomes" (reveals all outcome text at once, side by side)
- Button: "Reset"

Default parameters:
- Scenario: "You are offered a sugary drink at a party"
- Options shown: "Drink it," "Ask for water instead," "Have a little of both"
- No outcome revealed yet

Data Visibility Requirements:
  Stage 1: Show scenario and unopened option cards, no outcomes visible
  Stage 2: Student clicks "Show Outcome" under "Drink it" -- panel shows "Tastes exciting now, but a lot of sugar can lead to a stomachache or low energy later."
  Stage 3: Student clicks "Show Outcome" under "Ask for water instead" -- panel shows "Less exciting in the moment, but your body feels steady afterward."
  Stage 4: Student clicks "Compare All Outcomes" -- all outcome texts appear together so the student can weigh them side by side

Behavior:
- Every option always has a described outcome, calm and non-judgmental in tone -- no option is framed as "bad," only as leading to a different result
- Switching scenarios resets revealed outcomes

Instructional Rationale: This is an Understand-level objective ("describe options and potential outcomes"), so the design emphasizes step-through data visibility of concrete outcome text for each option rather than animation, letting students compare real outcome language side by side.

Implementation notes: Use p5.js. Keep all outcome language balanced and non-judgmental; avoid depicting any option as shameful.
```

## References

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
