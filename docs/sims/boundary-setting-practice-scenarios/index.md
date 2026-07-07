---
title: Boundary-Setting Practice Scenarios
description: Students practice constructing a clear boundary-setting statement using the name-it, feel-it, state-it pattern across several peer scenarios.
image: /sims/boundary-setting-practice-scenarios/boundary-setting-practice-scenarios.png
og:image: /sims/boundary-setting-practice-scenarios/boundary-setting-practice-scenarios.png
twitter:image: /sims/boundary-setting-practice-scenarios/boundary-setting-practice-scenarios.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 5
---

# Boundary-Setting Practice Scenarios

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Boundary-Setting Practice Scenarios MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Boundary-Setting Practice Scenarios** is an interactive MicroSim for this health-education textbook.

Students practice constructing a clear boundary-setting statement using the name-it, feel-it, state-it pattern across several peer scenarios.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, practice, use

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students practice constructing a clear boundary-setting statement using the name-it, feel-it, state-it pattern across several peer scenarios.

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
[Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md).

```text
Type: microsim
**sim-id:** boundary-setting-practice-scenarios<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students practice constructing a clear boundary-setting statement using the name-it, feel-it, state-it pattern across several peer scenarios.

Canvas layout: Left (450px) scenario description; right (200px) three-part builder with a "Hear It Back" button.

Visual elements: Scenario card (e.g., "Your friend keeps reading your texts over your shoulder"); three labeled boxes: "Name the behavior," "How it affects you," "The boundary."

Interactive controls: Multiple-choice selection for each part; "Hear It Back" assembles the statement as one sentence; "Next Scenario" cycles through 6 scenarios (borrowing without asking, pressuring for a password, texting too late, mocking, spreading a rumor, insisting on constant togetherness).

Behavior: When all three parts are filled, the tool assembles the statement and shows a green checkmark: "Clear, respectful, and specific — this is a strong boundary."

Instructional Rationale: Apply-level objective, so the pattern is guided construction practice with immediate feedback.

Implementation notes: p5.js; button-based phrase selection; scenarios stored as objects with context and example text.
```

## References

- [Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
