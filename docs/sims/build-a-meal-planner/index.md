---
title: Build-A-Meal Planner
description: Students design a nutritious meal by selecting one item from each food category and a drink, then receive feedback on whether their plan is balanced.
image: /sims/build-a-meal-planner/build-a-meal-planner.png
og:image: /sims/build-a-meal-planner/build-a-meal-planner.png
twitter:image: /sims/build-a-meal-planner/build-a-meal-planner.png
social:
   cards: false
library: p5.js
bloom_level: Create (L6)
grade_band: Grade 5
---

# Build-A-Meal Planner

<iframe src="main.html" width="100%" height="507px" scrolling="no"></iframe>

[Run the Build-A-Meal Planner MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="507px" scrolling="no"></iframe>
```

## About this MicroSim

**Build-A-Meal Planner** is an interactive MicroSim for this health-education textbook.

Students design a nutritious meal by selecting one item from each food category and a drink, then receive feedback on whether their plan is balanced.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Create (L6) — design, construct, formulate

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students design a nutritious meal by selecting one item from each food category and a drink, then receive feedback on whether their plan is balanced.

This activity targets **Bloom's Create (L6)** (design, construct, formulate).

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
**Create**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** build-a-meal-planner<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: design, construct, formulate

Learning objective: Students design a nutritious meal by selecting one item from each food category and a drink, then receive feedback on whether their plan is balanced.

Canvas layout:
- Left side (400px): Four category trays — Protein, Grain, Fruit/Vegetable, Drink — each with 5-6 selectable food icons
- Right side (250px): The assembled plate showing current selections, plus a feedback panel

Visual elements:
- A plate graphic in the center-right that fills in with icons as items are chosen
- Category trays with icons: Protein (egg, beans, chicken, fish, tofu), Grain (whole-wheat bread, brown rice, oats, tortilla), Fruit/Vegetable (apple, carrot, spinach, orange, broccoli), Drink (water, milk, soda, juice, sports drink)

Interactive controls:
- Click one icon per category to add it to the plate (clicking a new icon in the same category swaps it)
- Button: "Check My Meal" — evaluates the plate against the balanced-meal checklist
- Button: "Reset Plate"

Default parameters:
- Plate starts empty; no pre-selected items

Behavior:
- "Check My Meal" gives specific feedback: confirms categories that are covered, flags any missing category, and notes if the drink choice was water/milk versus soda/juice
- Encouraging tone in feedback text regardless of outcome, with a specific suggestion for improvement if something is missing

Instructional Rationale: This is a Create-level objective, so the pattern is an open-ended builder where students assemble their own solution from component parts, rather than a rigid template, matching the "design/construct" verb this concept calls for.

Implementation notes: Use p5.js. Store food items as objects with category and tags (e.g., drink tagged as "water-like" or "sugary"); "Check My Meal" runs a rule-based check across the four categories.
```

## References

- [Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
