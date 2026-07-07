---
title: Lockdown and Evacuation Sequence Trainer
description: Students classify standard procedural actions as
image: /sims/lockdown-evacuation-sequence-trainer/lockdown-evacuation-sequence-trainer.png
og:image: /sims/lockdown-evacuation-sequence-trainer/lockdown-evacuation-sequence-trainer.png
twitter:image: /sims/lockdown-evacuation-sequence-trainer/lockdown-evacuation-sequence-trainer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grades 9-12
---

# Lockdown and Evacuation Sequence Trainer

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Lockdown and Evacuation Sequence Trainer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Lockdown and Evacuation Sequence Trainer** is an interactive MicroSim for this health-education textbook.

Students classify standard procedural actions as

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — classify, distinguish, sequence

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify standard procedural actions as

This activity targets **Bloom's Understand (L2)** (classify, distinguish, sequence).

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
[Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md).

```text
Type: microsim

**sim-id:** lockdown-evacuation-sequence-trainer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: classify, distinguish, sequence

Learning objective: Students classify standard procedural actions as
belonging to lockdown or evacuation and place each procedure's steps in
correct order, distinguishing the two standard categories of drill
response. No card, scenario, or feedback text describes a triggering
event, weapon, or method — only standard procedure and correct student
actions.

Canvas layout:
- Left (55%): a shuffled bank of 10 action cards drawn evenly from
  lockdown and evacuation procedures (e.g., "Move out of sight of doors
  and windows," "Silence your phone," "Wait for an official all-clear
  before moving," "Follow staff to the designated outdoor location," "Walk
  calmly, do not run," "Stay with your class group," "Lock or barricade
  the door only if trained to do so")
- Right (45%): two labeled sequencing zones, "Lockdown Sequence" and
  "Evacuation Sequence," each requiring cards to be placed in correct
  order, not just correct category

Data Visibility Requirements:
  Stage 1: Show all 10 shuffled cards and both empty, ordered zones
  Stage 2: Student drags cards into a zone and orders them
  Stage 3: On checking, reveal correct category and correct order for any
  misplaced or misordered card, with a one-sentence explanation of why
  order matters for that step
  Stage 4: Show a final summary confirming both complete, correctly
  ordered sequences, reinforcing that automatic, practiced response is the
  goal of drilling

Interactive controls:
- Drag-and-drop cards into zones with reorderable placement
- Button: "Check Sequences"
- Button: "Reset"

Default parameters: 10-card bank, shuffled order each session

Instructional Rationale: Classifying and correctly sequencing standard
procedural actions is an Understand-level task focused on comprehension of
established procedure, so a sort-and-sequence interaction with immediate
feedback is used rather than a passive checklist. This diagram depicts
only standard drill procedure — it does not simulate, role-play, or
reference any triggering event, weapon, or attacker.

Implementation notes: p5.js drag-and-drop with reordering; card data
stored as an array of {action, correctZone, correctPosition, explanation}
objects. Content restriction: no card or feedback text may reference a
specific threat, weapon, tactic, or triggering event — cards address only
correct student behavior during each standard procedure.
```

## References

- [Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
