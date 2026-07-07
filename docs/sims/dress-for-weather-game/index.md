---
title: Dress for the Weather
description: Students apply knowledge of weather conditions by dressing a character correctly for four different weather scenes (sunny/hot, cold/dry, rainy, windy).
image: /sims/dress-for-weather-game/dress-for-weather-game.png
og:image: /sims/dress-for-weather-game/dress-for-weather-game.png
twitter:image: /sims/dress-for-weather-game/dress-for-weather-game.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 3
---

# Dress for the Weather

<iframe src="main.html" width="100%" height="504px" scrolling="no"></iframe>

[Run the Dress for the Weather MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="504px" scrolling="no"></iframe>
```

## About this MicroSim

**Dress for the Weather** is an interactive MicroSim for this health-education textbook.

Students apply knowledge of weather conditions by dressing a character correctly for four different weather scenes (sunny/hot, cold/dry, rainy, windy).

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — use, demonstrate, apply

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply knowledge of weather conditions by dressing a character correctly for four different weather scenes (sunny/hot, cold/dry, rainy, windy).

This activity targets **Bloom's Apply (L3)** (use, demonstrate, apply).

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
[Chapter 3: Wellness And Activity](../../bands/grade-3/chapters/03-wellness-and-activity/index.md).

```text
Type: microsim
**sim-id:** dress-for-weather-game<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, apply

Learning objective: Students apply knowledge of weather conditions by dressing a character correctly for four different weather scenes (sunny/hot, cold/dry, rainy, windy).

Canvas layout:
- Left side (400px): A simple character figure and a weather scene backdrop (sun, snow, rain, or wind clouds)
- Right side (200px): A closet of clickable clothing items (sunhat, sunglasses, t-shirt, shorts, thin layers, thick coat, raincoat, boots, windbreaker)

Visual elements:
- Character figure that visually updates as clothing items are dragged onto it
- Weather scene backdrop that changes with a "Change Weather" button
- Closet panel showing all available clothing icons

Interactive controls:
- Drag or click clothing items onto the character
- Button: "Change Weather" (cycles through the four scenarios)
- Button: "Check My Outfit"
- Button: "Reset"

Default parameters:
- Starting weather: sunny and hot

Data Visibility Requirements:
  Stage 1: Show the weather scene and an undressed (base outfit) character
  Stage 2: As items are added, show the character updating in real time
  Stage 3: When "Check My Outfit" is clicked, reveal which items matched the weather well and a one-sentence reason for any mismatch ("A thick coat traps too much heat on a sunny day — try light, loose clothing instead.")

Behavior:
- Correct outfit: character looks comfortable, sun/snow/rain icon shows a happy face, success caption appears
- Incorrect outfit: character shows a mild discomfort cue (shivering, sweating, or dripping), with a gentle explanation of what to change
- Weather changes require the student to re-dress the character, reinforcing that clothing choices depend on conditions

Instructional Rationale: This is an Apply-level objective (use, demonstrate), so the pattern is a hands-on parameter/scenario simulator where the student actively applies clothing choices to conditions and receives immediate feedback, rather than a passive explanation.

Implementation notes: Use p5.js. Keep the character gender-neutral and simple. Limit clothing options to items clearly tied to the four weather categories being taught.
```

## References

- [Chapter 3: Wellness And Activity](../../bands/grade-3/chapters/03-wellness-and-activity/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
