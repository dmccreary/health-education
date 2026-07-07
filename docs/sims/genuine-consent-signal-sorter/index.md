---
title: Genuine Yes or Reluctant Compliance?
description: Students analyze short described interactions (verbal response, body language, tone, and context together) and
image: /sims/genuine-consent-signal-sorter/genuine-consent-signal-sorter.png
og:image: /sims/genuine-consent-signal-sorter/genuine-consent-signal-sorter.png
twitter:image: /sims/genuine-consent-signal-sorter/genuine-consent-signal-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 9-12
---

# Genuine Yes or Reluctant Compliance?

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Genuine Yes or Reluctant Compliance? MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Genuine Yes or Reluctant Compliance?** is an interactive MicroSim for this health-education textbook.

Students analyze short described interactions
(verbal response, body language, tone, and context together) and

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — differentiate, distinguish, examine

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students analyze short described interactions
(verbal response, body language, tone, and context together) and

This activity targets **Bloom's Analyze (L4)** (differentiate, distinguish, examine).

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
[Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md).

```text
Type: microsim

**sim-id:** genuine-consent-signal-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: differentiate, distinguish, examine

Learning objective: Students analyze short described interactions
(verbal response, body language, tone, and context together) and
distinguish genuine, enthusiastic consent from reluctant compliance,
silence, or a freeze response.

Canvas layout:
- Top: a scenario card describing a brief interaction with four
  observable signals (verbal response, body language, tone, context)
- Bottom: two drop zones, "Genuine Yes" and "Not Genuine Consent"

Interactive controls:
- Drag-and-drop each scenario card into the correct zone
- Button: "Check My Sorting"
- Button: "Next Scenario"
- Button: "Show Reasoning" — reveals which specific signal(s) indicated
  the correct classification

Default parameters: 12 preloaded scenarios spanning physical affection,
sharing images, and sharing personal information contexts, including at
least three "freeze or silence mistaken for agreement" examples and three
"pressure preceded the answer" examples

Behavior: correct placements highlight green with the deciding signal
underlined; incorrect placements highlight red with the correct signal
explained; running score displayed

Instructional Rationale: This is an Analyze-level objective requiring
students to examine multiple simultaneous signals and distinguish subtle
categories (genuine yes vs. freeze vs. reluctant compliance) rather than
recall a single rule. Sorting realistic multi-signal scenarios builds
that discrimination skill better than a static list of examples would.

Implementation notes: p5.js drag-and-drop; store each scenario as a JSON
object with four signal fields, correct classification, and explanation
text.
```

## References

- [Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
