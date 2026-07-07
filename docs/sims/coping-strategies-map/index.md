---
title: Coping Strategies Around the World
description: Students describe a range of coping strategies, including cultural practices such as storytelling and ceremony, and explain how each one helps a person feel calmer or more supported.
image: /sims/coping-strategies-map/coping-strategies-map.png
og:image: /sims/coping-strategies-map/coping-strategies-map.png
twitter:image: /sims/coping-strategies-map/coping-strategies-map.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 2
---

# Coping Strategies Around the World

<iframe src="main.html" width="100%" height="494px" scrolling="no"></iframe>

[Run the Coping Strategies Around the World MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="494px" scrolling="no"></iframe>
```

## About this MicroSim

**Coping Strategies Around the World** is an interactive MicroSim for this health-education textbook.

Students describe a range of coping strategies, including cultural practices such as storytelling and ceremony, and explain how each one helps a person feel calmer or more supported.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — describe, exemplify, explain

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 2**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students describe a range of coping strategies, including cultural practices such as storytelling and ceremony, and explain how each one helps a person feel calmer or more supported.

This activity targets **Bloom's Understand (L2)** (describe, exemplify, explain).

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
[Chapter 1: Health Basics, Friendships, and Feelings](../../bands/grade-2/chapters/01-health-friendships-feelings/index.md).

```text
Type: infographic
**sim-id:** coping-strategies-map<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, exemplify, explain

Learning objective: Students describe a range of coping strategies, including cultural practices such as storytelling and ceremony, and explain how each one helps a person feel calmer or more supported.

Purpose: Show a warm, inclusive gallery of coping strategies — both everyday strategies (breathing, drawing) and cultural practices (storytelling, ceremony, music, shared meals) — so students see coping as a wide, respected toolkit rather than one narrow method.

Layout: A grid or gentle circle of 8 labeled picture-cards, each representing one coping strategy or cultural practice.

Cards to include:
1. Deep Breathing
2. Counting Calmly
3. Drawing Feelings
4. Quiet Hug Time
5. Family Storytelling
6. Community Ceremony
7. Traditional Music and Dance
8. Sharing a Meal Together

Interactive elements:
- Hover or tap a card: card enlarges slightly and an infobox appears explaining what the practice is and how it helps
- Click a card: the infobox stays open with a simple explanation a teacher can read aloud, plus one example sentence ("Some families gather for a ceremony to feel connected and supported.")
- "Show Me Another Family's Way" button cycles an optional second example for the cultural cards, reinforcing that many traditions exist

Visual style: Warm, flat illustration style with diverse families and settings represented respectfully; no single culture singled out or stereotyped.

Color scheme: Soft, calming colors (light blue, warm yellow, soft green) rather than bright primary colors, to reinforce a calm mood.

Responsive behavior: Grid reflows from 4 columns to 2 columns on narrow screens; cards remain tappable at all sizes.

Implementation: p5.js with an object array of card data (label, description, example) driving hover/click infobox display.
```

## References

- [Chapter 1: Health Basics, Friendships, and Feelings](../../bands/grade-2/chapters/01-health-friendships-feelings/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
