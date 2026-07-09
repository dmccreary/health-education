---
title: Personal Nutrition Needs Assessment Tool
description: Students apply age, sex, height, weight, and activity
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Personal Nutrition Needs Assessment Tool



<iframe src="main.html" width="100%" height="638px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md).

```text
Type: microsim

**sim-id:** nutrition-needs-assessment<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: calculate, demonstrate

Learning objective: Students apply age, sex, height, weight, and activity
level inputs to calculate an estimated daily calorie need and a
recommended macronutrient range, then see which micronutrients are
flagged as common risk areas for their profile.

Canvas layout:
- Left (60%): input form and results panel
- Right (40%): horizontal bar output showing calorie estimate and
  macronutrient range (grams of carbohydrate/protein/fat)

Interactive controls:
- Slider: Age (14-18)
- Select (Dropdown): Biological sex (Female, Male) — used only for
  standard reference-intake calculation, with a note explaining that
  individual needs vary
- Slider: Height (cm)
- Slider: Weight (kg)
- Select (Dropdown): Activity level (Sedentary, Moderately Active, Very
  Active)
- Checkbox list: Optional flags (Plays competitive sport, Menstruates,
  Vegetarian/vegan)
- Button: "Calculate My Range"
- Button: "Reset"

Default parameters: Age 16, height 165cm, weight 60kg, Moderately Active

Behavior:
- On "Calculate," compute an estimated daily calorie range using a
  standard formula (e.g., simplified Mifflin-St Jeor combined with an
  activity multiplier) and display it as a labeled bar
- Show a stacked bar of recommended macronutrient grams (carbohydrate,
  protein, fat) based on standard percentage ranges (45-65% carbs,
  10-35% protein, 25-35% fat)
- If "Menstruates" is checked, highlight iron as a flagged micronutrient
  with a short explanation
- If "Vegetarian/vegan" is checked, flag vitamin B12, iron, and zinc as
  areas requiring deliberate planning
- Display a plain-language summary sentence beneath the bars, e.g. "For
  this profile, aim for about 2,200-2,400 calories per day, with extra
  attention to iron and calcium."

Instructional Rationale: An Apply-level objective calls for a calculator
that lets students plug in their own real characteristics and get a
concrete, personally relevant number — not an animation. Seeing their own
estimated range is what turns an abstract guideline into something they
can act on in the next section's plan design.

Implementation notes: Use p5.js sliders and dropdowns; all calculations
performed client-side with a simple published formula; include a
disclaimer that results are educational estimates, not medical advice.
```

## Related Resources

- [Chapter 1: Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md)
