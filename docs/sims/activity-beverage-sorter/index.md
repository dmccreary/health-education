---
title: Choose the Right Drink
description: Students apply knowledge of beverages for physical activity by matching drink choices to activity scenarios (recess, long practice, after activity, everyday).
image: /sims/activity-beverage-sorter/activity-beverage-sorter.png
og:image: /sims/activity-beverage-sorter/activity-beverage-sorter.png
twitter:image: /sims/activity-beverage-sorter/activity-beverage-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 3
---

# Choose the Right Drink

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Choose the Right Drink MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Choose the Right Drink** is an interactive MicroSim for this health-education textbook.

Students apply knowledge of beverages for physical activity by matching drink choices to activity scenarios (recess, long practice, after activity, everyday).

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — apply, demonstrate, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply knowledge of beverages for physical activity by matching drink choices to activity scenarios (recess, long practice, after activity, everyday).

This activity targets **Bloom's Apply (L3)** (apply, demonstrate, practice).

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
**Apply**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** activity-beverage-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, demonstrate, practice

Learning objective: Students apply knowledge of beverages for physical activity by matching drink choices to activity scenarios (recess, long practice, after activity, everyday).

Canvas layout:
- Left side (400px): Four scenario cards shown one at a time (recess/gym class, long hot-weather practice, after activity feeling hungry, just relaxing at home)
- Right side (200px): Row of drink icons (water bottle, milk carton, sports drink, soda, energy drink)

Visual elements:
- Scenario illustration changes with each card
- Drink icons remain constant across scenarios

Interactive controls:
- Click the drink icon that best matches the current scenario
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- Starts on the "recess or gym class" scenario

Data Visibility Requirements:
  Stage 1: Show the scenario illustration and all drink icon options
  Stage 2: After a choice is made, reveal whether it was the best choice and a one-sentence reason (e.g., "Water is the best choice for regular recess — your body just needs its fluids back.")
  Stage 3: Advancing to the next scenario resets the choice and shows a new situation

Behavior:
- Best-choice selections get a checkmark and a short reason
- Less ideal choices get a gentle explanation of why water (or milk, after activity) is usually better
- After all four scenarios are complete, a "Hydration Helper!" caption appears

Instructional Rationale: This is an Apply-level objective (apply, demonstrate), so the design uses a scenario-matching pattern where students actively apply the water-first principle to new situations, rather than just reading a rule.

Implementation notes: Use p5.js. Keep scenario art simple and recognizable. This MicroSim is the direct student practice activity for this K-3 chapter.
```

## References

- [Chapter 4: Food And Nutrition](../../bands/grade-3/chapters/04-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
