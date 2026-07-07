---
title: My Personal Space Bubble
description: Students apply the idea of personal space and boundaries by adjusting a visible "bubble" around a character and practicing a boundary sentence for different situations.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# My Personal Space Bubble



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health Basics, Friendships, and Feelings](../../bands/grade-2/chapters/01-health-friendships-feelings/index.md).

```text
Type: microsim
**sim-id:** personal-space-bubble<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students apply the idea of personal space and boundaries by adjusting a visible "bubble" around a character and practicing a boundary sentence for different situations.

Canvas layout:
- Left/center area (450px): A friendly cartoon child character in the middle of the canvas with a circular "bubble" drawn around them showing personal space
- Right/control area (150px): Slider and scenario buttons

Visual elements:
- Character in the center with a soft, translucent circle (the "bubble") around them
- A second character figure that can be dragged closer or farther away
- Scenario labels above (e.g., "A classmate you just met," "Your best friend," "Someone offering a high-five")

Interactive controls:
- Slider: "Bubble Size" (small, medium, large) representing that personal space can change based on comfort
- Draggable second figure: moving it closer shows the bubble highlighting yellow when "crowded," green when comfortable
- Button: "Try a Boundary Sentence" — reveals one of the four example boundary sentences from the text, matched to the scenario
- Button: "Next Scenario"

Default parameters:
- Default bubble size: medium
- First scenario: "A classmate you just met" approaching

Behavior:
- When the second figure enters the bubble and turns yellow, a caption prompts: "This might feel crowded. What boundary sentence could you use?"
- Clicking "Try a Boundary Sentence" shows an example sentence appropriate to the scenario, read aloud by the teacher
- Resetting returns the second figure to a comfortable distance and the bubble to green

Instructional Rationale: This is an Apply-level (demonstrate/practice) objective, so the MicroSim requires the learner to actively adjust the scene and select/practice a boundary sentence rather than passively watch an animation. Direct manipulation of the "bubble" builds concrete understanding that personal space is real, visible, and adjustable.

Implementation notes: Use p5.js. Keep character designs simple and neutral so any student can see themselves in the scene. Maintain a warm, non-alarming tone — this is about everyday comfort, not danger.
```

## Related Resources

- [Chapter 1: Health Basics, Friendships, and Feelings](../../bands/grade-2/chapters/01-health-friendships-feelings/index.md)
