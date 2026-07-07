---
title: Health Practices Self-Check
description: Students examine a set of everyday health-supporting practices across multiple health categories and identify which ones they already do well and which they might want to improve.
image: /sims/health-practices-self-check/health-practices-self-check.png
og:image: /sims/health-practices-self-check/health-practices-self-check.png
twitter:image: /sims/health-practices-self-check/health-practices-self-check.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grade 3
---

# Health Practices Self-Check

<iframe src="main.html" width="100%" height="494px" scrolling="no"></iframe>

[Run the Health Practices Self-Check MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="494px" scrolling="no"></iframe>
```

## About this MicroSim

**Health Practices Self-Check** is an interactive MicroSim for this health-education textbook.

Students examine a set of everyday health-supporting practices across multiple health categories and identify which ones they already do well and which they might want to improve.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — examine, organize, compare

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students examine a set of everyday health-supporting practices across multiple health categories and identify which ones they already do well and which they might want to improve.

This activity targets **Bloom's Analyze (L4)** (examine, organize, compare).

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
[Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md).

```text
Type: microsim
**sim-id:** health-practices-self-check<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, organize, compare

Learning objective: Students examine a set of everyday health-supporting practices across multiple health categories and identify which ones they already do well and which they might want to improve.

Canvas layout: A grid of eight practice cards spanning categories from across the book (Eating balanced meals, Staying active, Getting enough sleep, Washing hands, Using safety gear, Talking about feelings, Being kind to others, Following family safety plans). Each card has a simple three-option selector: "Going Well," "Could Improve," "Not Sure."

Interactive controls: Click a rating on each card; a "See My Summary" button.

Data Visibility Requirements: After all eight cards are rated, "See My Summary" displays a simple non-graded summary such as "You marked 5 practices as Going Well and 2 as Could Improve," and highlights the "Could Improve" cards as candidates for a personal health goal.

Instructional Rationale: Analyze-level objective requiring students to organize and compare their own practices across categories, so a self-rating grid with a reflective summary is appropriate — this is a private reflection tool, not a scored quiz.

Implementation notes: Use p5.js. Keep the tone entirely non-judgmental; there is no "wrong" self-rating. This tool works well paired directly with the My Health Goal Planner MicroSim above.
```

## References

- [Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
