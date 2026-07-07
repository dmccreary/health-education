---
title: Active Listening Checklist Builder
description: Students demonstrate active listening behaviors by selecting the actions an active listener would take during a short animated conversation scenario.
image: /sims/active-listening-checklist-builder/active-listening-checklist-builder.png
og:image: /sims/active-listening-checklist-builder/active-listening-checklist-builder.png
twitter:image: /sims/active-listening-checklist-builder/active-listening-checklist-builder.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 3
---

# Active Listening Checklist Builder

<iframe src="main.html" width="100%" height="522px" scrolling="no"></iframe>

[Run the Active Listening Checklist Builder MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="522px" scrolling="no"></iframe>
```

## About this MicroSim

**Active Listening Checklist Builder** is an interactive MicroSim for this health-education textbook.

Students demonstrate active listening behaviors by selecting the actions an active listener would take during a short animated conversation scenario.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, practice, apply

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students demonstrate active listening behaviors by selecting the actions an active listener would take during a short animated conversation scenario.

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
[Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md).

```text
Type: microsim
**sim-id:** active-listening-checklist-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students demonstrate active listening behaviors by selecting the actions an active listener would take during a short animated conversation scenario.

Canvas layout: Top (150px) shows a simple two-character comic-style scene with a speech bubble describing what one character is saying (e.g., "I'm nervous about my soccer game tomorrow"). Middle (250px) shows six behavior-choice cards a listener could do (e.g., "Look at my phone," "Make eye contact," "Interrupt to talk about myself," "Nod and say 'that makes sense'," "Change the subject," "Ask 'What are you nervous about?'"). Bottom (100px) is a feedback panel.

Interactive controls: Click each card to mark it "Active Listening" or "Not Listening"; "Check My Answers" and "Next Scenario" buttons.

Default parameters: Starts on scenario 1 of 4 prepared conversation scenarios.

Data Visibility Requirements: After clicking "Check My Answers," each card reveals a check mark or an X plus a one-sentence reason (e.g., "Interrupting takes the focus away from the speaker's feelings.").

Instructional Rationale: Apply-level objective requiring students to practice choosing correct behaviors in a realistic scenario, so scenario-based selection with explanatory feedback is appropriate.

Implementation notes: Use p5.js with simple flat character illustrations. Keep scenarios everyday and low-stakes (sports, school, friendship), not emotionally heavy.
```

## References

- [Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
