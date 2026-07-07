---
title: Kitchen Safety Hotspot Explorer
description: Students evaluate a kitchen scene, identify unsafe food handling practices in progress, and judge what safer alternative should replace each one.
image: /sims/kitchen-safety-hotspot-explorer/kitchen-safety-hotspot-explorer.png
og:image: /sims/kitchen-safety-hotspot-explorer/kitchen-safety-hotspot-explorer.png
twitter:image: /sims/kitchen-safety-hotspot-explorer/kitchen-safety-hotspot-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grade 5
---

# Kitchen Safety Hotspot Explorer

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the Kitchen Safety Hotspot Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**Kitchen Safety Hotspot Explorer** is an interactive MicroSim for this health-education textbook.

Students evaluate a kitchen scene, identify unsafe food handling practices in progress, and judge what safer alternative should replace each one.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — judge, critique, assess

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students evaluate a kitchen scene, identify unsafe food handling practices in progress, and judge what safer alternative should replace each one.

This activity targets **Bloom's Evaluate (L5)** (judge, critique, assess).

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
[Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md).

```text
Type: infographic
**sim-id:** kitchen-safety-hotspot-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, critique, assess

Learning objective: Students evaluate a kitchen scene, identify unsafe food handling practices in progress, and judge what safer alternative should replace each one.

Purpose: Help students practice spotting real unsafe food handling practices in a realistic setting, connecting each mistake to why it causes foodborne illness.

Layout: A single illustrated kitchen scene with 6 clickable hotspots, each showing a small unsafe practice (raw chicken next to lettuce on the same board, a carton of milk left out on the counter, a family member about to eat without washing hands, a thermometer-free guess at whether chicken is cooked, unwashed strawberries in a bowl, a sponge used on both raw meat spill and countertop where food will be plated)

Interactive elements:
- Click any hotspot to open an infobox naming the unsafe practice, explaining why it's risky, and stating the safer alternative
- After viewing all 6 hotspots, a "Rate the Kitchen" button asks the student to assign an overall safety rating (Safe / Needs Improvement / Unsafe) and justify it in one sentence
- A checklist panel on the side fills in a checkmark for each hotspot the student has reviewed

Data to be displayed: 6 hotspot objects, each with practice name, risk explanation, and safer alternative text

Color coding: Hotspots glow soft red until clicked, then turn green with a checkmark once reviewed

Responsive behavior: Scene scales to container width; hotspot click targets remain a consistent minimum tap size on narrow screens

Implementation: p5.js with an image background and an array of hotspot objects (x/y region, practice, risk, alternative) driving click detection and infobox display.
```

## References

- [Chapter 2: Food and Nutrition](../../bands/grade-5/chapters/02-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
