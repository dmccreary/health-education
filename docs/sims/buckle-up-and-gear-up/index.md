---
title: Buckle Up and Gear Up
description: Students practice matching the correct injury-prevention gear to a given activity, reinforcing the Injury Prevention concept through hands-on drag-and-drop matching.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Buckle Up and Gear Up



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md).

```text
Type: microsim
**sim-id:** buckle-up-and-gear-up<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: practice, demonstrate

Learning objective: Students practice matching the correct injury-prevention gear to a given activity, reinforcing the Injury Prevention concept through hands-on drag-and-drop matching.

Canvas layout: Top area (250px) shows an illustrated child ready for one of three activities (bike, car, stairs). Middle area (150px): three draggable gear icons (helmet, seatbelt, handrail-holding hand). Bottom strip (100px): "Check" and "Reset" buttons plus score display.

Visual elements: Child illustration changes with the current activity; gear icons are large and simple for small hands to drag.

Interactive controls: Drag-and-drop gear onto the child; "Check" confirms; "Reset" clears; score display (e.g., "2 of 3 matched!").

Default parameters: Activities cycle bike, car, stairs; correct gear is helmet, seatbelt, handrail respectively.

Behavior: Correct match snaps into place with a chime and infobox ("Yes! A helmet protects your head while biking."). Incorrect match bounces back with an explanation. After all three: "You know how to gear up and stay safe every time!"

Instructional Rationale: An Apply-level objective — practicing gear knowledge in specific situations — so hands-on matching with immediate feedback is appropriate, rather than passive viewing.

Implementation notes: p5.js. Each activity is an object with an illustration reference, correct gear id, and explanation string. Captions short enough for one-breath read-aloud.
```

## Related Resources

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
