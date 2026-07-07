---
title: Alcohol's Path Through The Body Interactive Diagram
description: Students identify the body systems affected by alcohol and explain, in plain language, the specific effect on each system, with emphasis on how adolescent development changes the impact.
image: /sims/alcohols-path-through-the-body/alcohols-path-through-the-body.png
og:image: /sims/alcohols-path-through-the-body/alcohols-path-through-the-body.png
twitter:image: /sims/alcohols-path-through-the-body/alcohols-path-through-the-body.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grades 6-8
---

# Alcohol's Path Through The Body Interactive Diagram

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the Alcohol's Path Through The Body Interactive Diagram MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**Alcohol's Path Through The Body Interactive Diagram** is an interactive MicroSim for this health-education textbook.

Students identify the body systems affected by alcohol and explain, in plain language, the specific effect on each system, with emphasis on how adolescent development changes the impact.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, summarize, identify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify the body systems affected by alcohol and explain, in plain language, the specific effect on each system, with emphasis on how adolescent development changes the impact.

This activity targets **Bloom's Understand (L2)** (explain, summarize, identify).

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
[Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md).

```text
Type: infographic
**sim-id:** alcohols-path-through-the-body<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize, identify

Learning objective: Students identify the body systems affected by alcohol and explain, in plain language, the specific effect on each system, with emphasis on how adolescent development changes the impact.

Layout: A simple front-facing outline of a human body silhouette with four labeled, clickable regions: brain (prefrontal cortex and hippocampus), liver, heart/cardiovascular system, and stomach/digestive system. No labels or content depict methods of obtaining or consuming alcohol.

Interactive features: Click each labeled region to open an infobox with two to three sentences: (1) what that organ or system normally does, (2) the specific, factual effect alcohol has on it, (3) for the brain region, an additional note connecting to adolescent brain development discussed earlier in the chapter. A toggle switch lets the learner compare "Adult Body" and "Developing (Adolescent) Body" infobox text side by side for the brain region, highlighting the added developmental risk.

Default state: No region selected; a prompt reads "Click a body system to learn how alcohol affects it."

Color scheme: Neutral gray silhouette with soft blue highlight on the selected region; infobox uses the chapter's established color palette.

Implementation: p5.js with clickable regions defined as simple rectangles/ellipses overlaid on the silhouette; responsive canvas that rescales the silhouette and click regions proportionally on window resize. Content restriction: no depiction of alcohol containers, consumption actions, or quantities — only body systems and effects.
```

## References

- [Chapter 8: Substances and the Developing Brain](../../bands/grade-6-8/chapters/08-substances-and-the-developing-brain/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
