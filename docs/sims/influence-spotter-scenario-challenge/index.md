---
title: Influence Spotter Scenario Challenge
description: Students examine 10 short scenarios and classify the primary source of health influence at work (Social Norm, Public Health Policy, Family/Culture, Peer, or Media), distinguishing between influences that can look similar on the surface.
image: /sims/influence-spotter-scenario-challenge/influence-spotter-scenario-challenge.png
og:image: /sims/influence-spotter-scenario-challenge/influence-spotter-scenario-challenge.png
twitter:image: /sims/influence-spotter-scenario-challenge/influence-spotter-scenario-challenge.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 6-8
---

# Influence Spotter Scenario Challenge

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Influence Spotter Scenario Challenge MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Influence Spotter Scenario Challenge** is an interactive MicroSim for this health-education textbook.

Students examine 10 short scenarios and classify the primary source of health influence at work (Social Norm, Public Health Policy, Family/Culture, Peer, or Media), distinguishing between influences that can look similar on the surface.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — examine, classify, distinguish

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students examine 10 short scenarios and classify the primary source of health influence at work (Social Norm, Public Health Policy, Family/Culture, Peer, or Media), distinguishing between influences that can look similar on the surface.

This activity targets **Bloom's Analyze (L4)** (examine, classify, distinguish).

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
**Analyze**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md).

```text
Type: microsim
**sim-id:** influence-spotter-scenario-challenge<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, classify, distinguish

Learning objective: Students examine 10 short scenarios and classify the primary source of health influence at work (Social Norm, Public Health Policy, Family/Culture, Peer, or Media), distinguishing between influences that can look similar on the surface.

Canvas layout: Top area shows one scenario at a time in a text box; bottom area shows five labeled buttons, one per influence category.

Visual elements: Scenario text box; five category buttons with simple icons (people for Social Norm, a gavel for Policy, a house for Family/Culture, two figures for Peer, a screen for Media); a progress bar showing scenario number out of 10; a feedback panel.

Interactive controls: Learner reads the scenario and clicks the category button they believe fits best; feedback panel confirms correct/incorrect with a one-to-two sentence explanation and, for scenarios with more than one plausible influence, explicitly notes that overlap; "Next" button advances; "Restart" button resets the deck with a new random order.

Default parameters: Scenario order randomized each session; score displayed as "X of 10 correct" at the end.

Instructional Rationale: This Analyze-level objective requires learners to examine and distinguish between five categories of influence that frequently overlap in real scenarios; immediate explanatory feedback teaches the distinguishing features of each category rather than only testing recall.

Implementation notes: p5.js. Responsive canvas that reflows to a single-column layout on narrow screens.
```

## References

- [Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
