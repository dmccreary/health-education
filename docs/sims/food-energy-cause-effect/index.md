---
title: Where Does Your Energy Come From?
description: Students explain the cause-and-effect relationship between eating food and having energy to grow, move, and think, using a step-through scenario of a school day.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Where Does Your Energy Come From?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md).

```text
Type: microsim
**sim-id:** food-energy-cause-effect<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, interpret

Learning objective: Students explain the cause-and-effect relationship between eating food and having energy to grow, move, and think, using a step-through scenario of a school day.

Canvas layout:
- Top area (150px): A timeline strip showing four moments in a school day (Breakfast, Morning Class, Recess, Afternoon Snack)
- Middle area (250px): A character whose "energy meter" (a simple bar or battery icon) rises and falls at each moment
- Bottom strip (100px): Step-through "Next" and "Back" buttons with a caption

Visual elements:
- Energy meter styled like a friendly battery icon (empty to full)
- Character shown running, thinking, or yawning depending on energy level

Interactive controls:
- Button: "Next" advances to the next moment in the day
- Button: "Back" returns to the previous moment
- Click the energy meter at any time to see a caption explaining the current energy level

Default parameters:
- Starts at "Breakfast" with a full energy meter

Data Visibility Requirements:
  Stage 1: Show "Breakfast" — energy meter fills up, caption: "Food gives the body energy to start the day."
  Stage 2: Show "Morning Class" — energy meter slightly lower, caption: "The body uses energy to think and pay attention."
  Stage 3: Show "Recess" — energy meter drops more, caption: "Running and playing use up energy fast!"
  Stage 4: Show "Afternoon Snack" — energy meter refills, caption: "Eating again gives the body more energy to finish the day."

Behavior:
- Each step change animates the energy meter rising or falling and updates the caption
- If the student clicks "Next" repeatedly past snack, the cycle can loop back to show energy needs happen all day, every day

Instructional Rationale: This is an Understand-level (explain) objective focused on cause and effect, so the design uses a step-through timeline with visible energy-level data at each stage rather than continuous animation, letting students trace the cause (eating) to the effect (energy available) explicitly.

Implementation notes: Use p5.js. Keep the energy meter large and simple, like a battery icon. Captions should be large enough for read-aloud.
```

## Related Resources

- [Chapter 2: Food, Energy, and Safe Eating](../../bands/grade-2/chapters/02-food-energy-safe-eating/index.md)
