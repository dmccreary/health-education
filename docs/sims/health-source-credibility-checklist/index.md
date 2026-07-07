---
title: Health Source Credibility Checklist
description: Students identify the five characteristics of a valid health information source (expertise-based, evidence-based, transparent funding, regularly updated, no product-selling conflict) and exemplify each with a realistic source type.
image: /sims/health-source-credibility-checklist/health-source-credibility-checklist.png
og:image: /sims/health-source-credibility-checklist/health-source-credibility-checklist.png
twitter:image: /sims/health-source-credibility-checklist/health-source-credibility-checklist.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grades 6-8
---

# Health Source Credibility Checklist

<iframe src="main.html" width="100%" height="494px" scrolling="no"></iframe>

[Run the Health Source Credibility Checklist MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="494px" scrolling="no"></iframe>
```

## About this MicroSim

**Health Source Credibility Checklist** is an interactive MicroSim for this health-education textbook.

Students identify the five characteristics of a valid health information source (expertise-based, evidence-based, transparent funding, regularly updated, no product-selling conflict) and exemplify each with a realistic source type.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — identify, summarize, exemplify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify the five characteristics of a valid health information source (expertise-based, evidence-based, transparent funding, regularly updated, no product-selling conflict) and exemplify each with a realistic source type.

This activity targets **Bloom's Understand (L2)** (identify, summarize, exemplify).

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
[Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md).

```text
Type: infographic
**sim-id:** health-source-credibility-checklist<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: identify, summarize, exemplify

Learning objective: Students identify the five characteristics of a valid health information source (expertise-based, evidence-based, transparent funding, regularly updated, no product-selling conflict) and exemplify each with a realistic source type.

Layout: Five labeled checklist cards, one per characteristic, each with a short icon; below, six example source cards (e.g., "A government public health agency page," "An influencer's paid product post," "A hospital patient-education page," "A blog selling a supplement it also recommends").

Interactive controls: Learner clicks an example source card, then clicks each checklist characteristic it does or does not meet; a running score panel shows how many characteristics that source meets; clicking a "Reveal Verdict" button shows a short explanation of whether the source is generally valid, generally not valid, or mixed, and why.

Default parameters: No source pre-selected; checklist criteria always visible at the top.

Instructional Rationale: An Understand-level objective calls for concrete worked examples rather than animation; a checklist-and-verdict structure lets learners see the specific criteria applied step by step to real source types before making a judgment.

Implementation notes: p5.js. Responsive canvas that stacks checklist cards above example cards on narrow screens.
```

## References

- [Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
