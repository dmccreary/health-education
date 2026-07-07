---
title: Foods Around the World
description: Students recognize that foods from many cultural traditions belong to the same five food groups, connecting Cultural Food Tradition to Food Group.
image: /sims/foods-around-the-world/foods-around-the-world.png
og:image: /sims/foods-around-the-world/foods-around-the-world.png
twitter:image: /sims/foods-around-the-world/foods-around-the-world.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Kindergarten
---

# Foods Around the World

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the Foods Around the World MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**Foods Around the World** is an interactive MicroSim for this health-education textbook.

Students recognize that foods from many cultural traditions belong to the same five food groups, connecting Cultural Food Tradition to Food Group.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — recognize, connect, classify

## Lesson Plan

### Audience

This MicroSim is designed for **Kindergarten**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students recognize that foods from many cultural traditions belong to the same five food groups, connecting Cultural Food Tradition to Food Group.

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
[Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md).

```text
Type: infographic
**sim-id:** foods-around-the-world<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: recognize, connect, classify

Learning objective: Students recognize that foods from many cultural traditions belong to the same five food groups, connecting Cultural Food Tradition to Food Group.

Purpose and main message: Show six foods from different cultural traditions around a circle, with a click revealing which food group(s) each belongs to.

Layout: A circle of six large, simple food illustrations (rice, tortilla, injera flatbread, lefse, dumpling, hummus with pita), each with a small flag or pattern motif hinting at its tradition of origin, arranged around a central image of a smiling family sharing a meal.

Interactive elements:
- Click or tap any food image to open a simple infobox with: the food's name, one sentence naming a culture/region connected to it, and which food group(s) it belongs to (shown as a colored badge matching the food-group colors used in the Food Group Sorting Game)
- Hover highlights the food with a soft glow before clicking

Data to display per food:
- Rice — many cultures worldwide — Grains Group
- Tortilla — Mexican and Central American tradition — Grains Group
- Injera — Ethiopian tradition — Grains Group
- Lefse — Norwegian tradition — Grains Group
- Dumpling — Chinese and Eastern European traditions — Grains Group and Protein Foods Group (meat-filled varieties)
- Hummus with pita — Middle Eastern tradition — Protein Foods Group and Grains Group

Color coding: Reuse the same food-group color key from the Food Group Sorting Game (tan for Grains, brown for Protein Foods) so the two MicroSims reinforce each other.

Responsive behavior: Circle layout collapses to a vertical stack of food cards on narrow screens.

Implementation: p5.js canvas with click-region detection for each food image; infobox rendered as a text panel below the circle.
```

## References

- [Chapter 1: Health and Food](../../bands/kindergarten/chapters/01-health-and-food/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
