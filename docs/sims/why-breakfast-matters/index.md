---
title: Why Breakfast? Cause and Effect
description: Students explain why eating breakfast is important by comparing two versions of the same student's morning — one with breakfast and one without.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Why Breakfast? Cause and Effect



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** why-breakfast-matters<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize, infer

Learning objective: Students explain why eating breakfast is important by comparing two versions of the same student's morning — one with breakfast and one without.

Canvas layout:
- Left area (350px): "With Breakfast" morning scene (student playing energetically, focused in class)
- Right area (350px): "Without Breakfast" morning scene (student looking tired, distracted)
- Bottom strip (100px): Toggle button and explanation caption

Visual elements:
- Two side-by-side illustrated scenes of the same cartoon student's morning
- Small energy-meter icon above each scene (full vs. low)

Interactive controls:
- Button: "Toggle Scene" (switches focus between the two scenes)
- Hover or click each scene: reveals a caption explaining what is happening and why

Default parameters:
- Both scenes visible at start; "With Breakfast" scene highlighted first

Data Visibility Requirements:
  Stage 1: Show both scenes side by side with energy meters
  Stage 2: Click "With Breakfast" scene — caption explains the fuel/energy connection
  Stage 3: Click "Without Breakfast" scene — caption explains why the student feels tired and unfocused
  Stage 4: Summary caption ties both scenes together: "Breakfast fuels your body and brain for the whole morning."

Behavior:
- Clicking either scene highlights it and reveals its caption; the energy meter animates filling or draining once, then stays still (no continuous animation)

Instructional Rationale: This is an Understand-level (explain/summarize) objective, so the MicroSim uses a side-by-side comparison with revealed captions rather than continuous animation, letting students infer the cause-and-effect relationship between breakfast and energy/focus at their own pace.

Implementation notes: Use p5.js. Keep both scenes calm and simple; avoid making the "without breakfast" student look unwell, just tired and less focused. Teacher reads captions aloud.
```

## Related Resources

- [Chapter 2: Food, Drinks, and Staying Safe in the Kitchen](../../bands/grade-1/chapters/02-food-and-nutrition/index.md)
