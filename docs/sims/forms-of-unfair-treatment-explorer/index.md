---
title: Forms of Unfair Treatment Explorer
description: Students classify realistic middle-school scenarios into direct, subtle, or institutional unfair treatment, building a shared vocabulary for recognizing unfairness in its different forms.
image: /sims/forms-of-unfair-treatment-explorer/forms-of-unfair-treatment-explorer.png
og:image: /sims/forms-of-unfair-treatment-explorer/forms-of-unfair-treatment-explorer.png
twitter:image: /sims/forms-of-unfair-treatment-explorer/forms-of-unfair-treatment-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grades 6-8
---

# Forms of Unfair Treatment Explorer

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Forms of Unfair Treatment Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Forms of Unfair Treatment Explorer** is an interactive MicroSim for this health-education textbook.

Students classify realistic middle-school scenarios into direct, subtle, or institutional unfair treatment, building a shared vocabulary for recognizing unfairness in its different forms.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — classify, distinguish, exemplify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify realistic middle-school scenarios into direct, subtle, or institutional unfair treatment, building a shared vocabulary for recognizing unfairness in its different forms.

This activity targets **Bloom's Understand (L2)** (classify, distinguish, exemplify).

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
[Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md).

```text
Type: microsim
**sim-id:** forms-of-unfair-treatment-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, distinguish, exemplify

Learning objective: Students classify realistic middle-school scenarios into direct, subtle, or institutional unfair treatment, building a shared vocabulary for recognizing unfairness in its different forms.

Layout: A deck of 10 short scenario cards (e.g., "A student is told they can't join a club because of their accent," "A teacher only calls on certain students during discussion," "A school dress code bans hairstyles worn mostly by one ethnic group") with three click zones labeled Direct, Subtle, and Institutional.

Interactive controls: Click-to-sort each card into a zone; immediate feedback confirms the category and explains why in one supportive sentence; a running tally tracks progress; "Reset Deck" button.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Classifying scenarios into named categories is Understand-level, so a sorting task with explanatory feedback is used rather than a passive list, helping students recognize unfair treatment even when it is not obvious or direct.

Implementation notes: p5.js. Scenario data stored as an array of objects with text, correct category, and explanation string. Responsive canvas that reflows cards on window resize.
```

## References

- [Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
