---
title: Dress for the Weather
description: Students apply knowledge of weather conditions by dressing a character correctly for four different weather scenes (sunny/hot, cold/dry, rainy, windy).
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Dress for the Weather



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 3: Wellness And Activity](../../bands/grade-3/chapters/03-wellness-and-activity/index.md)
