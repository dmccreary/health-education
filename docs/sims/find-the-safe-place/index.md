---
title: Find the Safe Place
description: Students identify the correct safe place for a given type of school emergency, reinforcing the Safe Place concept alongside School Emergency.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Find the Safe Place



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md).

```text
Type: infographic
**sim-id:** find-the-safe-place<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, locate

Learning objective: Students identify the correct safe place for a given type of school emergency, reinforcing the Safe Place concept alongside School Emergency.

Canvas layout: Full canvas (500px) shows a simple illustrated school map (classroom, hallway, outdoor field, gym). Bottom strip (80px): a prompt naming one emergency type at a time (e.g., "Fire drill — where is the safe place?") with three tappable location options.

Visual elements: School map locations shown as friendly labeled icons; the selected answer highlights green (correct) or shakes gently (incorrect, try again).

Interactive controls: Tap the location believed correct; "Next Emergency" cycles prompts; "Reset" restarts.

Default parameters: Three prompts cycle in order — fire drill (outdoor field), severe weather drill (hallway), lockdown drill (classroom).

Behavior: Correct tap glows green with a chime and confirming infobox, e.g., "Yes! During a fire drill, we walk to the outdoor field." Incorrect tap shakes gently with a friendly hint. After all three: "You know where to go for each kind of school emergency!"

Instructional Rationale: A Remember-level (identify/locate) objective appropriate for pre-readers, so a tap-to-identify pattern with an immediate confirming infobox is used rather than a more complex simulation.

Implementation notes: p5.js. Each emergency type is an object with a prompt string, correct location id, and confirmation string. Text large (24px+) for read-aloud use.
```

## Related Resources

- [Chapter 5: Staying Safe](../../bands/kindergarten/chapters/05-staying-safe/index.md)
