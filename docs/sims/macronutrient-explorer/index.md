---
title: Macronutrient Explorer
description: Students explain the job of each macronutrient (carbohydrates, protein, fats) and classify example foods under the correct macronutrient category.
image: /sims/macronutrient-explorer/macronutrient-explorer.png
og:image: /sims/macronutrient-explorer/macronutrient-explorer.png
twitter:image: /sims/macronutrient-explorer/macronutrient-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 4
---

# Macronutrient Explorer

<iframe src="main.html" width="100%" height="474px" scrolling="no"></iframe>

[Run the Macronutrient Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="474px" scrolling="no"></iframe>
```

## About this MicroSim

**Macronutrient Explorer** is an interactive MicroSim for this health-education textbook.

Students explain the job of each macronutrient (carbohydrates, protein, fats) and classify example foods under the correct macronutrient category.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, classify, exemplify

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 4**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain the job of each macronutrient (carbohydrates, protein, fats) and classify example foods under the correct macronutrient category.

This activity targets **Bloom's Understand (L2)** (explain, classify, exemplify).

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
[Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md).

```text
Type: infographic
**sim-id:** macronutrient-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, exemplify

Learning objective: Students explain the job of each macronutrient (carbohydrates, protein, fats) and classify example foods under the correct macronutrient category.

Purpose: Help students connect each macronutrient's function in the body to real, familiar foods that supply it.

Layout: Three large labeled columns — Carbohydrates, Protein, Fats — each topped with an icon (a wheat stalk, a muscle, a droplet).

Interactive elements:
- Click a column header to open an infobox describing that macronutrient's main job in the body in one or two sentences
- A tray of 12 food icons (bread, rice, apple, chicken, egg, beans, fish, milk, avocado, nuts, olive oil, pasta) below the columns; drag or click each food onto the column it belongs to
- Correct placement shows a short confirmation ("Bread is a carbohydrate — it gives you fast energy!"); incorrect placement gives a gentle hint and lets the student try again
- A progress counter shows how many of the 12 foods have been correctly sorted

Visual style: Flat, colorful icons with rounded column cards

Color scheme: Carbohydrates = gold, Protein = red-orange, Fats = light green

Responsive behavior: Columns stack vertically on narrow screens; food tray becomes a horizontal scroll strip

Implementation: p5.js with an array of food objects (name, correct category, icon, fact) driving drag-and-drop or click-to-place sorting logic.
```

## References

- [Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
