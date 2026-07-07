---
title: Emotion Weather Map
description: Students distinguish between a specific emotional trigger and a broader ongoing situation, and analyze how both combine to influence a person's reaction.
image: /sims/emotion-weather-map/emotion-weather-map.png
og:image: /sims/emotion-weather-map/emotion-weather-map.png
twitter:image: /sims/emotion-weather-map/emotion-weather-map.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grade 5
---

# Emotion Weather Map

<iframe src="main.html" width="100%" height="444px" scrolling="no"></iframe>

[Run the Emotion Weather Map MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="444px" scrolling="no"></iframe>
```

## About this MicroSim

**Emotion Weather Map** is an interactive MicroSim for this health-education textbook.

Students distinguish between a specific emotional trigger and a broader ongoing situation, and analyze how both combine to influence a person's reaction.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — examine, distinguish, differentiate

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students distinguish between a specific emotional trigger and a broader ongoing situation, and analyze how both combine to influence a person's reaction.

This activity targets **Bloom's Analyze (L4)** (examine, distinguish, differentiate).

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
[Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md).

```text
Type: microsim
**sim-id:** emotion-weather-map<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, differentiate

Learning objective: Students distinguish between a specific emotional trigger and a broader ongoing situation, and analyze how both combine to influence a person's reaction.

Canvas layout:
- Left side (450px): A "weather map" showing a character with a background weather condition (sunny, cloudy, stormy) representing their ongoing situation
- Right side (200px): A trigger card selector and a resulting-reaction display

Visual elements:
- Character icon in the center with a weather backdrop that can be set to Sunny (well-rested, good week), Cloudy (average week, some stress), or Stormy (rough week, poor sleep, family stress)
- A trigger card area showing one small triggering event (e.g., "A friend cancels plans")
- A reaction meter showing how big the resulting emotional reaction is predicted to be

Interactive controls:
- Dropdown: Choose the background "weather" (Sunny, Cloudy, Stormy) representing the ongoing situation
- Button: "Add a Trigger" — cycles through small trigger cards
- Display: Reaction meter updates to show a small, medium, or large reaction based on the combination

Default parameters:
- Weather: Sunny
- Trigger: "A friend cancels plans"

Behavior:
- The same trigger produces a bigger predicted reaction when the background weather is Stormy than when it is Sunny, teaching that surrounding situations change how strongly a trigger lands
- A short explanation panel updates each time, describing why the same event can hit differently depending on the situation

Instructional Rationale: This is an Analyze-level objective requiring students to examine how two factors (situation and trigger) interact, so the pattern is a parameter explorer that makes the combination visible and concrete rather than a single passive animation.

Implementation notes: Use p5.js. Store weather-to-reaction multipliers and trigger base-intensity values as simple lookup data; reaction meter recalculates from weather multiplier times trigger base intensity.
```

## References

- [Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
