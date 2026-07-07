---
title: Cooling Down a Big Feeling
description: Students explain how a calming strategy lowers a strong emotion over time by stepping through a "feelings thermometer" scenario.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Cooling Down a Big Feeling



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Handling Conflict and Kind Play](../../bands/grade-2/chapters/03-conflict-kind-play/index.md).

```text
Type: microsim
**sim-id:** managing-strong-emotions-cooldown<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe

Learning objective: Students explain how a calming strategy lowers a strong emotion over time by stepping through a "feelings thermometer" scenario.

Canvas layout:
- Left area (200px): A vertical "feelings thermometer" showing emotion intensity from calm (bottom, blue) to very upset (top, red)
- Right area (400px): A step-through scene with a character and a caption box, plus Next/Back buttons

Visual elements:
- Thermometer with a marker that moves up or down
- A simple cartoon character whose face changes expression (frustrated, calming, calm) at each stage
- Caption box below the character

Interactive controls:
- Button: "Next" advances to the next stage of the scenario
- Button: "Back" returns to the previous stage
- Dropdown: Choose which calming strategy the character tries (deep breaths, counting to ten, walking away)

Default parameters:
- Thermometer starts near the top (very upset) after a conflict scenario is described
- Default strategy: "deep breaths"

Data Visibility Requirements:
  Stage 1: Show thermometer high (red) with caption "A friend took the last turn on the swing. This character feels really upset!"
  Stage 2: Show the chosen calming strategy happening, thermometer marker begins moving down, caption names the strategy: "Taking three deep breaths..."
  Stage 3: Show thermometer lower (yellow), caption "The feeling is getting smaller."
  Stage 4: Show thermometer near bottom (blue/calm), caption "Now the character feels calm enough to talk about what happened."

Behavior:
- Changing the strategy dropdown resets the scenario and shows a slightly different caption for each strategy, so students see that different strategies can all work
- The thermometer marker animates smoothly between stages when Next/Back is clicked

Instructional Rationale: This is an Understand-level (explain) objective about a cause-and-effect process, so the design uses a step-through thermometer with visible stages rather than continuous animation, letting students trace how a calming strategy causes the emotion to shrink over time.

Implementation notes: Use p5.js. Keep the thermometer large and simple. Facial expressions should be easy to read from across a classroom.
```

## Related Resources

- [Chapter 3: Handling Conflict and Kind Play](../../bands/grade-2/chapters/03-conflict-kind-play/index.md)
