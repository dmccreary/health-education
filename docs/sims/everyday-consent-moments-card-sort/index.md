---
title: Everyday Consent Moments Card Sort
description: Students apply the concept of ongoing consent by sorting everyday relationship moments into "Consent Respected" and "Consent Skipped" categories across family, friend, and romantic contexts.
image: /sims/everyday-consent-moments-card-sort/everyday-consent-moments-card-sort.png
og:image: /sims/everyday-consent-moments-card-sort/everyday-consent-moments-card-sort.png
twitter:image: /sims/everyday-consent-moments-card-sort/everyday-consent-moments-card-sort.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grades 6-8
---

# Everyday Consent Moments Card Sort

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Everyday Consent Moments Card Sort MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Everyday Consent Moments Card Sort** is an interactive MicroSim for this health-education textbook.

Students apply the concept of ongoing consent by sorting everyday relationship moments into "Consent Respected" and "Consent Skipped" categories across family, friend, and romantic contexts.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, apply, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply the concept of ongoing consent by sorting everyday relationship moments into "Consent Respected" and "Consent Skipped" categories across family, friend, and romantic contexts.

This activity targets **Bloom's Apply (L3)** (demonstrate, apply, practice).

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
[Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md).

```text
Type: microsim
**sim-id:** everyday-consent-moments-card-sort<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, apply, practice

Learning objective: Students apply the concept of ongoing consent by sorting everyday relationship moments into "Consent Respected" and "Consent Skipped" categories across family, friend, and romantic contexts.

Layout: A deck of 10 short scenario cards (e.g., "posts a photo of a friend without asking first") with two click zones: "Consent Respected" and "Consent Skipped."

Interactive controls: Click-to-sort each card; immediate feedback confirms placement with a one-sentence reason; a progress counter; "Reset Deck" restarts.

Instructional Rationale: Applying the ongoing-consent concept to new scenarios is Apply-level, so a sorting task with explanatory feedback is used rather than passive reading, giving repeated practice recognizing consent in familiar situations.

Implementation notes: p5.js. Scenario cards as objects with text, correct category, and explanation string.
```

## References

- [Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
