---
title: Consent Signal Sorter
description: Students classify everyday statements as showing real consent or not, reinforcing that consent must be freely given, specific, and reversible.
image: /sims/consent-signal-sorter/consent-signal-sorter.png
og:image: /sims/consent-signal-sorter/consent-signal-sorter.png
twitter:image: /sims/consent-signal-sorter/consent-signal-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 5
---

# Consent Signal Sorter

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Consent Signal Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Consent Signal Sorter** is an interactive MicroSim for this health-education textbook.

Students classify everyday statements as showing real consent or not, reinforcing that consent must be freely given, specific, and reversible.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — classify, interpret, distinguish

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify everyday statements as showing real consent or not, reinforcing that consent must be freely given, specific, and reversible.

This activity targets **Bloom's Understand (L2)** (classify, interpret, distinguish).

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
[Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md).

```text
Type: microsim
**sim-id:** consent-signal-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, interpret, distinguish

Learning objective: Students classify everyday statements as showing real consent or not, reinforcing that consent must be freely given, specific, and reversible.

Canvas layout: Left (450px) a deck of 10 statement cards; right (200px) two bins, "Real Consent" and "Not Real Consent," plus a feedback panel.

Visual elements: Statement cards such as "Sure, you can borrow my pencil," "Fine, take the picture, just stop asking me over and over," "...I guess, whatever" (walking away upset).

Interactive controls: Click each card into the correct bin; "Check My Sorting" reveals correct/incorrect with a reason; "New Round" loads a new set of 10.

Behavior: "Sure, you can borrow my pencil" sorts as Real Consent ("Freely given, clear yes"). "Fine, take the picture, just stop asking" sorts as Not Real Consent ("Worn down by repeated pressure isn't free consent").

Instructional Rationale: Understand-level objective requiring interpretation of realistic phrasing, so the pattern is classification with concrete examples.

Implementation notes: p5.js; statement objects with text, correct classification, and reason string.
```

## References

- [Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
