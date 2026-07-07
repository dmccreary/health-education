---
title: Marketing Claims Fact-Checker
description: Students evaluate real marketing claims against actual label data to judge whether each claim is misleading, technically true but incomplete, or genuinely informative.
image: /sims/marketing-claims-fact-checker/marketing-claims-fact-checker.png
og:image: /sims/marketing-claims-fact-checker/marketing-claims-fact-checker.png
twitter:image: /sims/marketing-claims-fact-checker/marketing-claims-fact-checker.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grades 6-8
---

# Marketing Claims Fact-Checker

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Marketing Claims Fact-Checker MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Marketing Claims Fact-Checker** is an interactive MicroSim for this health-education textbook.

Students evaluate real marketing claims against actual label data to judge whether each claim is misleading, technically true but incomplete, or genuinely informative.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — judge, critique, assess, justify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students evaluate real marketing claims against actual label data to judge whether each claim is misleading, technically true but incomplete, or genuinely informative.

This activity targets **Bloom's Evaluate (L5)** (judge, critique, assess, justify).

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
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** marketing-claims-fact-checker<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, critique, assess, justify

Learning objective: Students evaluate real marketing claims against actual label data to judge whether each claim is misleading, technically true but incomplete, or genuinely informative.

Layout: Package mockup with a large front-of-package claim on top, its matching Nutrition Facts panel below, then three judgment buttons — "Misleading," "Technically True But Incomplete," "Genuinely Informative" — plus feedback caption and "Next Product" button.

Visual elements: 6 paired product examples, e.g. a "made with real fruit" snack whose label shows fruit puree as the 5th ingredient; a "no added sugar" juice box whose label shows 24g of naturally occurring sugar; plain water with no claims as a contrast case.

Behavior: After a judgment is submitted, feedback explains the reasoning using that product's specific label numbers, reinforcing the general pattern (technical truth versus broader impression) rather than just marking right/wrong.

Instructional Rationale: Judging honesty and completeness is Evaluate-level, so classification-with-justification is used rather than passive reading, requiring the learner to weigh evidence before committing to a judgment.

Implementation notes: p5.js. Each product stored as an object with claim text, label data fields, correct judgment category, and explanation string.
```

## References

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
