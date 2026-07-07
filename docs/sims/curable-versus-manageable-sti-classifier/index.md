---
title: Curable Versus Manageable STI Classifier
description: Students classify named STIs (by text label only, no imagery) as curable or manageable-but-not-curable, and justify each classification using the bacterial-versus-viral distinction.
image: /sims/curable-versus-manageable-sti-classifier/curable-versus-manageable-sti-classifier.png
og:image: /sims/curable-versus-manageable-sti-classifier/curable-versus-manageable-sti-classifier.png
twitter:image: /sims/curable-versus-manageable-sti-classifier/curable-versus-manageable-sti-classifier.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grades 6-8
---

# Curable Versus Manageable STI Classifier

<iframe src="main.html" width="100%" height="472px" scrolling="no"></iframe>

[Run the Curable Versus Manageable STI Classifier MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="472px" scrolling="no"></iframe>
```

## About this MicroSim

**Curable Versus Manageable STI Classifier** is an interactive MicroSim for this health-education textbook.

Students classify named STIs (by text label only, no imagery) as curable or manageable-but-not-curable, and justify each classification using the bacterial-versus-viral distinction.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — classify, justify, differentiate

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify named STIs (by text label only, no imagery) as curable or manageable-but-not-curable, and justify each classification using the bacterial-versus-viral distinction.

This activity targets **Bloom's Evaluate (L5)** (classify, justify, differentiate).

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
**Evaluate**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md).

```text
Type: microsim
**sim-id:** curable-versus-manageable-sti-classifier<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: classify, justify, differentiate

Learning objective: Students classify named STIs (by text label only, no imagery) as curable or manageable-but-not-curable, and justify each classification using the bacterial-versus-viral distinction.

Layout: A deck of text-only infection name cards (chlamydia, gonorrhea, syphilis, HIV, herpes, HPV) with two click zones: "Curable with Treatment" and "Manageable, Not Currently Curable."

Interactive controls: Click-to-sort each card; feedback confirms placement and explains whether the infection is bacterial or viral and what treatment achieves; progress counter; "Reset Deck" button.

Instructional Rationale: Classifying and justifying against a clinical framework is Evaluate-level, so a sorting task requiring a stated reason is used rather than simple recall, reinforcing that "not curable" does not mean "untreatable" or "hopeless."

Implementation notes: p5.js. Card data as objects with infection name, correct category, and bacterial/viral explanation string; text labels only, no anatomical or clinical imagery.
```

## References

- [Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
