---
title: Are You Listening Actively?
description: Students apply active listening behaviors by selecting which actions in a short scenario show active listening.
image: /sims/active-listening-checklist-microsim/active-listening-checklist-microsim.png
og:image: /sims/active-listening-checklist-microsim/active-listening-checklist-microsim.png
twitter:image: /sims/active-listening-checklist-microsim/active-listening-checklist-microsim.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 2
---

# Are You Listening Actively?

<iframe src="main.html" width="100%" height="497px" scrolling="no"></iframe>

[Run the Are You Listening Actively? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="497px" scrolling="no"></iframe>
```

## About this MicroSim

**Are You Listening Actively?** is an interactive MicroSim for this health-education textbook.

Students apply active listening behaviors by selecting which actions in a short scenario show active listening.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, practice, use

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 2**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply active listening behaviors by selecting which actions in a short scenario show active listening.

This activity targets **Bloom's Apply (L3)** (demonstrate, practice, use).

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
[Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md).

```text
Type: microsim
**sim-id:** active-listening-checklist-microsim<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students apply active listening behaviors by selecting which actions in a short scenario show active listening.

Canvas layout:
- Top area (120px): Short scenario text, e.g., "A teacher explains a new hallway safety rule."
- Middle area (260px): Four action cards students can mark as "Active Listening" or "Not Active Listening": "Looking at the teacher and staying quiet," "Waving hands and talking to a friend," "Asking 'why do we do it this way?' after the teacher finishes," "Nodding to show understanding"
- Bottom area (120px): Infobox with feedback and running score

Interactive controls:
- Click each action card to mark it
- Button: "Check My Answers"
- Button: "New Scenario" (cycles through 3 total scenarios)
- Button: "Reset"

Default parameters:
- Scenario 1 active; no cards marked yet

Data Visibility Requirements:
  Stage 1: Show scenario and four unmarked action cards
  Stage 2: Student marks cards, clicks "Check My Answers" -- correct cards turn green, incorrect turn orange
  Stage 3: Infobox explains each answer: "Looking and staying quiet shows active listening because it shows attention," "Talking to a friend is not active listening because attention is elsewhere"
  Stage 4: Student clicks "New Scenario" to try a fresh set of four actions

Behavior:
- Score tracks correct identifications across all three scenarios
- Feedback always names the specific active-listening behavior involved

Instructional Rationale: This is an Apply-level objective, so the design asks students to apply the concept to new scenario actions rather than simply recall a definition, matching the "demonstrate active listening in a variety of situations" benchmark.

Implementation notes: Use p5.js. Keep scenarios varied (home, classroom, playground) so the skill transfers across settings.
```

## References

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
