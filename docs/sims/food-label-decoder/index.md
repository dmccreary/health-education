---
title: Food Label Decoder
description: An interactive MicroSim for Food Label Decoder.
image: /sims/food-label-decoder/food-label-decoder.png
og:image: /sims/food-label-decoder/food-label-decoder.png
twitter:image: /sims/food-label-decoder/food-label-decoder.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 9-12
---

# Food Label Decoder

<iframe src="main.html" width="100%" height="502px" scrolling="no"></iframe>

[Run the Food Label Decoder MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="502px" scrolling="no"></iframe>
```

## About this MicroSim

**Food Label Decoder** is an interactive MicroSim for this health-education textbook.

An interactive MicroSim for Food Label Decoder.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — examine, differentiate

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

An interactive MicroSim for Food Label Decoder.

This activity targets **Bloom's Analyze (L4)** (examine, differentiate).

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
**Analyze**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md).

```text
Type: infographic

**sim-id:** food-label-decoder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: examine, differentiate

Purpose: Let students click each region of a realistic Nutrition Facts
label to see what it means and how it's calculated, then compare two
real product labels side by side.

Layout: Left panel shows a full Nutrition Facts label (serving size,
calories, %DV column, macronutrients, added sugars line, sodium,
vitamins/minerals, ingredient list). Right panel allows loading a second
product's label for comparison.

Interactive elements:
- Click any labeled region (serving size, calories, %DV, added sugars,
  sodium, ingredient list) to open an infobox explaining what it means
  and how to interpret it
- Dropdown: choose from 6 preloaded real-world-style products (e.g.,
  flavored yogurt, cereal, granola bar, soda, sparkling water, trail mix)
- "Compare" button: places two chosen products side by side with
  differences highlighted (e.g., added sugar difference highlighted in
  orange)
- Toggle: "Per Serving" vs "Per Container" recalculates all displayed
  numbers live

Data to display: realistic nutrient values per product (calories, total
fat, sodium, total carbohydrate, dietary fiber, total sugars, added
sugars, protein, vitamin D, calcium, iron, potassium)

Color coding: green highlight for nutrients where %DV is 20%+ and
considered beneficial (fiber, vitamins), red highlight for 20%+ DV of
nutrients to limit (saturated fat, sodium, added sugar)

Responsive behavior: panels stack vertically on narrow screens

Implementation: HTML/CSS/JavaScript with clickable SVG label regions
```

## References

- [Chapter 1: Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
