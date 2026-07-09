---
title: My Daily Care Routine Builder
description: Students apply their understanding of personal care practices by dragging daily hygiene icons into a morning routine and a bedtime routine, in a reasonable order.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# My Daily Care Routine Builder



<iframe src="main.html" width="100%" height="594px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md).

```text
Type: microsim
**sim-id:** my-daily-care-routine-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students apply their understanding of personal care practices by dragging daily hygiene icons into a morning routine and a bedtime routine, in a reasonable order.

Canvas layout:
- Left area (450px): Two labeled routine tracks, "Morning Routine" and "Bedtime Routine," each with empty slots
- Right area (150px): A tray of six hygiene icons (wash hands, brush teeth, comb hair, bathe, put on clean clothes, wash face) and an infobox

Visual elements:
- Six simple flat-style icons representing each personal care practice
- Two horizontal routine tracks with 3 empty slots each
- Sun icon above the morning track, moon icon above the bedtime track

Interactive controls:
- Drag-and-drop: student drags icons from the tray into morning or bedtime slots
- Button: "Check My Routine"
- Button: "Reset"

Default parameters:
- All six icons start in the tray, unplaced

Data Visibility Requirements:
  Stage 1: Show the empty routine tracks and full icon tray
  Stage 2: As icons are placed, show them snapped into the routine slot
  Stage 3: After "Check My Routine" is clicked, show a caption for each placement confirming it fits that time of day (bathing and bedtime brushing fit night; handwashing and morning brushing fit morning; some icons like washing hands fit both times)

Behavior:
- Reasonable placements are confirmed with a green check and a short caption ("Brushing your teeth before bed helps keep your smile healthy overnight!")
- The MicroSim accepts multiple valid arrangements since routines vary by family

Instructional Rationale: This is an Apply-level (practice/demonstrate) objective, so the MicroSim uses hands-on drag-and-drop practice with immediate confirming feedback rather than passive viewing, letting students build and test their own version of a daily routine.

Implementation notes: Use p5.js. Icons should be simple, friendly, and diverse (different skin tones and hair types). Teacher can pause and discuss why order matters for some steps but not others.
```

## Related Resources

- [Chapter 5: Healthy Habits, Activity, and Germs](../../bands/grade-1/chapters/05-healthy-habits/index.md)
