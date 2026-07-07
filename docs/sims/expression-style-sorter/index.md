---
title: Healthy vs. Unhealthy Expression Sorter
description: Students differentiate between healthy and unhealthy ways of expressing emotions by sorting example statements and actions into the correct category.
image: /sims/expression-style-sorter/expression-style-sorter.png
og:image: /sims/expression-style-sorter/expression-style-sorter.png
twitter:image: /sims/expression-style-sorter/expression-style-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grade 3
---

# Healthy vs. Unhealthy Expression Sorter

<iframe src="main.html" width="100%" height="494px" scrolling="no"></iframe>

[Run the Healthy vs. Unhealthy Expression Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="494px" scrolling="no"></iframe>
```

## About this MicroSim

**Healthy vs. Unhealthy Expression Sorter** is an interactive MicroSim for this health-education textbook.

Students differentiate between healthy and unhealthy ways of expressing emotions by sorting example statements and actions into the correct category.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — differentiate, examine, distinguish

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students differentiate between healthy and unhealthy ways of expressing emotions by sorting example statements and actions into the correct category.

This activity targets **Bloom's Analyze (L4)** (differentiate, examine, distinguish).

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
[Chapter 7: Mental And Emotional Health](../../bands/grade-3/chapters/07-mental-and-emotional-health/index.md).

```text
Type: microsim
**sim-id:** expression-style-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate, examine, distinguish

Learning objective: Students differentiate between healthy and unhealthy ways of expressing emotions by sorting example statements and actions into the correct category.

Canvas layout: Left side (400px) has two labeled bins, "Healthy Expression" (speech-bubble-with-heart icon) and "Unhealthy Expression" (stormy-cloud icon). Right side (200px) holds a stack of shuffled example cards, such as "I feel left out, can we talk?", "Slamming the door and refusing to speak", "I'm nervous about the game, wish me luck", "Yelling mean names when losing a game."

Interactive controls: Click or drag each card into a bin; "Check My Answers" and "Reset" buttons.

Data Visibility Requirements: As each card is sorted it snaps into the chosen bin; clicking "Check My Answers" reveals a one-sentence explanation for every card, and incorrectly sorted cards get a gentle explanation of why they fit the other category.

Instructional Rationale: Analyze-level objective requiring students to distinguish categories by shared features, so sorting-with-explanation is appropriate.

Implementation notes: Use p5.js. Keep tone non-judgmental toward the "unhealthy" category — frame it as practice noticing the difference, not as labeling a student.
```

## References

- [Chapter 7: Mental And Emotional Health](../../bands/grade-3/chapters/07-mental-and-emotional-health/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
