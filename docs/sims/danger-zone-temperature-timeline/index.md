---
title: Danger Zone Temperature Timeline
description: Students interpret a temperature/time timeline to explain why leaving perishable food out too long is unsafe and describe safe handling checkpoints.
status: scaffold
library: vis-timeline
bloom_level: Understand (L2)
---

# Danger Zone Temperature Timeline



<iframe src="main.html" width="100%" height="302px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md).

```text
Type: timeline
**sim-id:** danger-zone-temperature-timeline<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, interpret

Learning objective: Students interpret a temperature/time timeline to explain why leaving perishable food out too long is unsafe and describe safe handling checkpoints.

Time period: A single afternoon, from "Food Cooked (12:00 PM)" to "Food Discarded if Unsafe (4:30 PM)"

Orientation: Horizontal

Events:
- 12:00 PM: Food finishes cooking at a safe internal temperature (label: "Safe — just cooked")
- 12:15 PM: Food placed on counter to cool (label: "Still safe — just served")
- 1:00 PM: One hour at room temperature (label: "Entering the Danger Zone — bacteria start multiplying")
- 2:00 PM: Two hours at room temperature (label: "Time Limit Reached — should be refrigerated or discarded now")
- 2:30 PM onward: Food left out past two hours (label: "Unsafe — bacteria may have multiplied to unsafe levels")
- Alternate branch at 12:15 PM: Food refrigerated promptly (label: "Safe — cold storage stops bacteria growth")

Visual style: Horizontal timeline with a color-graded "danger zone" band overlay between 40°F and 140°F context, and a branching comparison path showing "left out" versus "refrigerated promptly"

Color coding:
- Green: Safe temperature/time zone
- Yellow: Entering the danger zone (1 hour)
- Red: Past the safe time limit (2+ hours)

Interactive features:
- Click any event marker to open an infobox explaining what is happening to the food at that point and why
- Toggle between the "left out" and "refrigerated promptly" branches to compare outcomes
- Hover over the color band to see the definition of the "danger zone" (40°F-140°F, the range where bacteria multiply fastest)

Implementation: vis-timeline with two parallel timeline branches (left-out vs. refrigerated) and custom click handlers opening a definition panel.
```

## Related Resources

- [Chapter 1: Food and Nutrition](../../bands/grade-4/chapters/01-food-and-nutrition/index.md)
