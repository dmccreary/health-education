---
title: Families Come in Many Shapes
description: Students recognize that families come in a variety of structures and that every structure shown is a healthy, real family, connecting Family to Family Structure.
image: /sims/family-shapes-gallery/family-shapes-gallery.png
og:image: /sims/family-shapes-gallery/family-shapes-gallery.png
twitter:image: /sims/family-shapes-gallery/family-shapes-gallery.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Kindergarten
---

# Families Come in Many Shapes

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the Families Come in Many Shapes MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**Families Come in Many Shapes** is an interactive MicroSim for this health-education textbook.

Students recognize that families come in a variety of structures and that every structure shown is a healthy, real family, connecting Family to Family Structure.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — recognize, connect, classify

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students recognize that families come in a variety of structures and that every structure shown is a healthy, real family, connecting Family to Family Structure.

This activity targets **Bloom's Understand (L2)** (recognize, connect, classify).

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
[Chapter 2: Family And Trusted Adults](../../bands/kindergarten/chapters/02-family/index.md).

```text
Type: infographic
**sim-id:** family-shapes-gallery<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: recognize, connect, classify

Learning objective: Students recognize that families come in a variety of structures and that every structure shown is a healthy, real family, connecting Family to Family Structure.

Purpose and main message: Show six illustrated family portraits in a friendly gallery grid, each representing a different family structure, with a click revealing a short warm description of that family.

Layout: A grid of six large, simple, warm illustrated family portraits: a two-parent family, a single-parent family, a grandparent-led family, a foster family, a blended family, and a family with two moms or two dads. Each portrait shows the family members smiling together in a simple home or park setting.

Interactive elements:
- Click or tap any family portrait to open a simple infobox with one warm sentence describing that family structure (e.g., "This family has a grandma who takes care of the children every day — that's her important job in this family.")
- Hover highlights the portrait with a soft glow before clicking
- No portrait is marked as more "normal" than another; all six appear the same size with the same friendly visual treatment

Data to display per portrait:
- Two-parent family — "Two parents share the job of taking care of their children."
- Single-parent family — "One parent takes care of the children all on their own, and does a great job."
- Grandparent-led family — "A grandparent takes care of the children every day, just like a parent would."
- Foster family — "A foster family opens their home to take care of a child for a while."
- Blended family — "A blended family happens when two families join together to become one new family."
- Two moms or two dads — "Some children have two moms or two dads who take care of them together."

Color coding: Use the same soft, warm color palette across all six portraits so no single family structure is visually singled out as different or unusual.

Responsive behavior: Grid collapses to a single vertical column of portraits on narrow screens.

Implementation: p5.js canvas with click-region detection for each portrait; infobox rendered as a text panel below the grid.
```

## References

- [Chapter 2: Family And Trusted Adults](../../bands/kindergarten/chapters/02-family/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
