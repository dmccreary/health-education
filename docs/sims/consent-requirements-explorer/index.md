---
title: The Five Requirements of Consent
description: Students classify short example statements as meeting
image: /sims/consent-requirements-explorer/consent-requirements-explorer.png
og:image: /sims/consent-requirements-explorer/consent-requirements-explorer.png
twitter:image: /sims/consent-requirements-explorer/consent-requirements-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grades 9-12
---

# The Five Requirements of Consent

<iframe src="main.html" width="100%" height="494px" scrolling="no"></iframe>

[Run the The Five Requirements of Consent MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="494px" scrolling="no"></iframe>
```

## About this MicroSim

**The Five Requirements of Consent** is an interactive MicroSim for this health-education textbook.

Students classify short example statements as meeting

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — classify, exemplify, interpret

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify short example statements as meeting

This activity targets **Bloom's Understand (L2)** (classify, exemplify, interpret).

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
[Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md).

```text
Type: infographic

**sim-id:** consent-requirements-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: classify, exemplify, interpret

Learning objective: Students classify short example statements as meeting
or failing each of the five consent requirements (freely given, reversible,
informed, enthusiastic, specific), building a working, transferable
definition of consent.

Canvas layout:
- Left (60%): five labeled panels arranged vertically, one per
  requirement, each showing its one-sentence definition
- Right (40%): an example card and two buttons, "Meets This Requirement"
  and "Fails This Requirement"

Data Visibility Requirements:
  Stage 1: Show the five requirement names and definitions all at once as
  reference
  Stage 2: Show one example statement drawn from a bank of 15 (covering
  physical affection, image-sharing, and information-sharing contexts)
  Stage 3: After the learner classifies it against the currently
  highlighted requirement, show whether they were correct and a one-line
  explanation
  Stage 4: Track and display a running count of correctly classified
  examples across all five requirements

Interactive controls:
- Click each of the five requirement panels to highlight it as the
  "active" requirement being tested
- Button: "Meets This Requirement" / "Button: Fails This Requirement"
- Button: "Next Example"

Default parameters: Requirement 1 (Freely Given) active at start; example
bank cycles without repetition until exhausted, then reshuffles

Instructional Rationale: This is an Understand-level objective, so the
design favors step-through classification with concrete, varied examples
over animation. Seeing the same five requirements tested against very
different contexts (a hug, a shared photo, a forwarded text) is what
builds the transferable, general model of consent the chapter requires,
rather than a definition tied to one narrow scenario.

Implementation notes: p5.js with an object array of {requirement, example,
correctAnswer, explanation}; highlight active requirement panel in gold;
correct/incorrect feedback shown via color change and text panel.
```

## References

- [Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
