---
title: Heimlich Maneuver Step Sequencer
description: Students apply the correct sequence of steps for recognizing choking and performing the Heimlich maneuver by arranging steps in order and stepping through a worked scenario.
image: /sims/heimlich-maneuver-step-sequencer/heimlich-maneuver-step-sequencer.png
og:image: /sims/heimlich-maneuver-step-sequencer/heimlich-maneuver-step-sequencer.png
twitter:image: /sims/heimlich-maneuver-step-sequencer/heimlich-maneuver-step-sequencer.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grades 6-8
---

# Heimlich Maneuver Step Sequencer

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Heimlich Maneuver Step Sequencer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Heimlich Maneuver Step Sequencer** is an interactive MicroSim for this health-education textbook.

Students apply the correct sequence of steps for recognizing choking and performing the Heimlich maneuver by arranging steps in order and stepping through a worked scenario.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, execute, apply

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply the correct sequence of steps for recognizing choking and performing the Heimlich maneuver by arranging steps in order and stepping through a worked scenario.

This activity targets **Bloom's Apply (L3)** (demonstrate, execute, apply).

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
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: microsim
**sim-id:** heimlich-maneuver-step-sequencer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, execute, apply

Learning objective: Students apply the correct sequence of steps for recognizing choking and performing the Heimlich maneuver by arranging steps in order and stepping through a worked scenario.

Canvas layout: Left side (450px) shows five step cards in scrambled order with simple labeled illustrations (recognize signs, confirm verbally, position hands, perform thrusts, call for help). Right side (150px) shows a "Check Order" button, a step counter, and a note reminding students this is for educational awareness, not certification.

Visual elements: Five numbered drop slots in a vertical sequence; simple diagrams for each step (e.g., a stick-figure icon showing hand position above the navel); a status message area.

Interactive controls: Drag step cards into the correct order; "Check Order" button confirms correct sequence and highlights any out-of-order cards with a hint; "Reset" button; "Show Correct Sequence" button reveals the order with a one-sentence explanation for each step.

Default parameters: Steps scrambled randomly at load; step counter starts at 0 correct.

Instructional Rationale: Correctly sequencing and applying a multi-step safety procedure is an Apply-level task, so a step-ordering exercise with corrective feedback is used rather than a passive diagram, since real application requires knowing what happens first, second, and so on.

Implementation notes: p5.js. Step data stored as an ordered array with text, correct position, and illustration reference. Responsive canvas that reflows on window resize. Include a persistent on-screen note: "For awareness only — get certified hands-on training from a course such as the Red Cross."
```

## References

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
