---
title: Ask First! Permission Scenarios
description: Students demonstrate the practice of asking permission before using technology or sharing information by choosing the correct next step in short scenarios.
image: /sims/ask-first-permission/ask-first-permission.png
og:image: /sims/ask-first-permission/ask-first-permission.png
twitter:image: /sims/ask-first-permission/ask-first-permission.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 1
---

# Ask First! Permission Scenarios

<iframe src="main.html" width="100%" height="444px" scrolling="no"></iframe>

[Run the Ask First! Permission Scenarios MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="444px" scrolling="no"></iframe>
```

## About this MicroSim

**Ask First! Permission Scenarios** is an interactive MicroSim for this health-education textbook.

Students demonstrate the practice of asking permission before using technology or sharing information by choosing the correct next step in short scenarios.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, practice, use

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students demonstrate the practice of asking permission before using technology or sharing information by choosing the correct next step in short scenarios.

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
[Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md).

```text
Type: microsim
**sim-id:** ask-first-permission<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students demonstrate the practice of asking permission before using technology or sharing information by choosing the correct next step in short scenarios.

Canvas layout:
- Top area (150px): A short scenario described in one simple sentence plus a picture (e.g., "You want to play a new game on the tablet.")
- Middle area (250px): Two large response buttons: "Ask First" and "Just Go Ahead"
- Bottom strip (100px): Feedback caption and "Next Scenario" button

Visual elements:
- 6 scenarios cycling one at a time: downloading an app, taking a photo of a friend, posting a video, borrowing a classmate's tablet, sharing a home address online, using a parent's phone to call someone

Interactive controls:
- Button: "Ask First"
- Button: "Just Go Ahead"
- Button: "Next Scenario"

Default parameters:
- First scenario: downloading a new app (a clear, low-stakes example to build confidence)

Behavior:
- Choosing "Ask First": character gives a thumbs-up, gentle chime, and caption explains why asking first was the safe, respectful choice
- Choosing "Just Go Ahead": no harsh penalty — a calm caption explains what could go wrong and reminds the student to ask a trusted adult next time
- After all 6 scenarios, a summary shows how many the student chose "Ask First" for, with encouragement regardless of score

Instructional Rationale: This is an Apply-level (demonstrate/practice) objective, so the MicroSim requires the learner to choose an action in a scenario rather than only recall a definition. Repeated scenario practice builds the habit of pausing to ask permission before acting with technology or shared information.

Implementation notes: Use p5.js. Keep tone plainly sincere with no jokes, consistent with the project's rule for personal-safety-adjacent content. Large text and icons for beginning readers; teacher reads scenario text aloud.
```

## References

- [Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
