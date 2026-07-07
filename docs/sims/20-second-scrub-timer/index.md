---
title: 20-Second Scrub Timer
description: Students practice the Handwashing routine by following along with a step-by-step, timed scrubbing sequence, reinforcing correct order and duration.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# 20-Second Scrub Timer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md).

```text
Type: microsim
**sim-id:** 20-second-scrub-timer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: practice, demonstrate

Learning objective: Students practice the Handwashing routine by following along with a step-by-step, timed scrubbing sequence, reinforcing correct order and duration.

Canvas layout:
- Top area (300px): A large friendly illustration of two cartoon hands being washed, with soap bubbles that increase as the timer runs
- Middle area (100px): A circular 20-second countdown ring that fills with color as time passes
- Bottom strip (100px): Large "Start Scrubbing!" button and a Reset button

Visual elements:
- Five numbered step icons (wet, soap, scrub, rinse, dry) displayed left to right, each lighting up in sequence as the sim progresses
- Bubble animation increases during the "scrub" step

Interactive controls:
- Button: "Start Scrubbing!" begins the timed sequence
- Button: "Reset" returns to the beginning
- Display: countdown ring and current step label read aloud by the teacher

Default parameters:
- Timer length: 20 seconds for the scrub step
- Steps advance automatically at realistic intervals (wet: 2s, soap: 2s, scrub: 20s, rinse: 3s, dry: 3s)

Behavior:
- When "Start Scrubbing!" is clicked, hands animate through each step while the step icon glows and a short label appears ("Now we scrub!")
- A cheerful chime plays at the end of the full sequence
- A celebration message appears: "Clean hands, healthy you! You scrubbed for the full 20 seconds."

Instructional Rationale: This is an Apply-level objective — children are practicing performing a real multi-step routine — so a step-through sequence with a visible timer is appropriate. Continuous unstructured animation would not reinforce the correct order or duration, which are the actual learning targets.

Implementation notes: Use p5.js. Represent the five steps as an ordered array with durations and labels. Keep all on-screen text large (26px+) and pair every step with an icon for pre-reader accessibility.
```

## Related Resources

- [Chapter 4: Staying Healthy Every Day](../../bands/kindergarten/chapters/04-staying-healthy/index.md)
