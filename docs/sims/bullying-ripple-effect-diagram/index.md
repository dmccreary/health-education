---
title: The Ripple Effect
description: Students explain how teasing, exclusion, or bullying affects individuals and the community by exploring an infographic showing effects that ripple outward from one person to the whole classroom.
image: /sims/bullying-ripple-effect-diagram/bullying-ripple-effect-diagram.png
og:image: /sims/bullying-ripple-effect-diagram/bullying-ripple-effect-diagram.png
twitter:image: /sims/bullying-ripple-effect-diagram/bullying-ripple-effect-diagram.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 3
---

# The Ripple Effect

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the The Ripple Effect MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**The Ripple Effect** is an interactive MicroSim for this health-education textbook.

Students explain how teasing, exclusion, or bullying affects individuals and the community by exploring an infographic showing effects that ripple outward from one person to the whole classroom.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, summarize, interpret

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain how teasing, exclusion, or bullying affects individuals and the community by exploring an infographic showing effects that ripple outward from one person to the whole classroom.

This activity targets **Bloom's Understand (L2)** (explain, summarize, interpret).

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
[Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md).

```text
Type: infographic
**sim-id:** bullying-ripple-effect-diagram<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize, interpret

Learning objective: Students explain how teasing, exclusion, or bullying affects individuals and the community by exploring an infographic showing effects that ripple outward from one person to the whole classroom.

Purpose: Show, in a calm and factual way, how the effects of bullying and exclusion extend beyond the person targeted to bystanders and the whole classroom community.

Layout: Concentric-circle infographic — a center circle labeled "Person Targeted," surrounded by a ring labeled "Bystanders," surrounded by an outer ring labeled "Whole Classroom/Community"

Interactive elements:
- Click the center circle to reveal effects on the person targeted (sadness, fear, loneliness, trouble sleeping, stomachaches)
- Click the middle ring to reveal effects on bystanders (feeling unsafe, guilt, not knowing what to do)
- Click the outer ring to reveal effects on the whole community (lower trust, less willingness to speak up)
- A calm "What Helps" button reveals three supportive actions: telling a trusted adult, including others, and treating everyone with kindness and respect

Visual style: Soft, non-alarming concentric circles; muted, calm color palette (blues and greens) rather than harsh reds

Color scheme: Center circle in soft blue, middle ring in soft teal, outer ring in soft green; the "What Helps" button in warm gold

Implementation: p5.js infographic with click-to-reveal infobox panels for each ring; ends every path with the reminder that trusted adults can help.
```

## References

- [Chapter 5: Relationships And Respect](../../bands/grade-3/chapters/05-relationships-and-respect/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
