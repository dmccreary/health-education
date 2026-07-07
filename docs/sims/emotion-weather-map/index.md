---
title: Emotion Weather Map
description: Students distinguish between a specific emotional trigger and a broader ongoing situation, and analyze how both combine to influence a person's reaction.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Emotion Weather Map



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md)
