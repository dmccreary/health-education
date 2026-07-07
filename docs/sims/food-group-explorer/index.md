---
title: Food Group Explorer
description: Students explain which food group a given food belongs to and summarize what job that food group does in the body, moving beyond simple naming toward reasoning about purpose.
image: /sims/food-group-explorer/food-group-explorer.png
og:image: /sims/food-group-explorer/food-group-explorer.png
twitter:image: /sims/food-group-explorer/food-group-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 1
---

# Food Group Explorer

<iframe src="main.html" width="100%" height="464px" scrolling="no"></iframe>

[Run the Food Group Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="464px" scrolling="no"></iframe>
```

## About this MicroSim

**Food Group Explorer** is an interactive MicroSim for this health-education textbook.

Students explain which food group a given food belongs to and summarize what job that food group does in the body, moving beyond simple naming toward reasoning about purpose.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — explain, classify, summarize

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students explain which food group a given food belongs to and summarize what job that food group does in the body, moving beyond simple naming toward reasoning about purpose.

This activity targets **Bloom's Understand (L2)** (explain, classify, summarize).

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
[Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** food-group-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, summarize

Learning objective: Students explain which food group a given food belongs to and summarize what job that food group does in the body, moving beyond simple naming toward reasoning about purpose.

Canvas layout:
- Left area (450px): A large plate illustration divided into five colored sections, one per food group
- Right area (150px): A stack of food picture cards to click through, plus an infobox

Visual elements:
- Five plate sections labeled Fruits (red), Vegetables (green), Grains (tan), Protein Foods (purple), Dairy (light blue)
- 15 food picture cards cycling through (3 per group): apple, banana, strawberry / carrot, broccoli, spinach / bread, rice, oatmeal / beans, egg, chicken / milk, cheese, yogurt

Interactive controls:
- Button: "Show Next Food Card"
- Click-to-place: student clicks the plate section where they think the food belongs
- Button: "Reset"

Default parameters:
- First card: apple (a clear, familiar example to build confidence)

Data Visibility Requirements:
  Stage 1: Show the food card with no label
  Stage 2: After the student clicks a plate section, show whether it matches
  Stage 3: Reveal a one-sentence explanation of the food group's job ("Apples are a fruit. Fruits have vitamins that help your body fight getting sick.")

Behavior:
- Correct placement: plate section glows, gentle chime, explanation caption appears
- Incorrect placement: gentle prompt, "Look again — what job does this food group do?" and the correct section glows softly as a hint

Instructional Rationale: This is an Understand-level (explain/classify) objective, so the MicroSim reveals the food group's purpose after each answer rather than using continuous animation, letting students connect each food to a concrete reason it belongs in that group.

Implementation notes: Use p5.js. Large, simple, flat-style food illustrations. Teacher reads each food name and explanation aloud.
```

## References

- [Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
