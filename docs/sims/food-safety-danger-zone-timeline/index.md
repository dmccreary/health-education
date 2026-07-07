---
title: Food Safety Danger Zone Timeline
description: Students examine a timed food-handling scenario to distinguish safe time windows from "danger zone" risk periods and identify where a food safety practice would have prevented risk.
status: scaffold
library: vis-timeline
bloom_level: Analyze (L4)
---

# Food Safety Danger Zone Timeline



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: timeline
**sim-id:** food-safety-danger-zone-timeline<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, differentiate, distinguish

Learning objective: Students examine a timed food-handling scenario to distinguish safe time windows from "danger zone" risk periods and identify where a food safety practice would have prevented risk.

Time period covered: A single 6-hour food-handling scenario (e.g., a picnic), shown on a relative timeline (0 to 6 hours) rather than calendar dates.

Orientation: Horizontal

Events:
- Hour 0: "Cooked chicken reaches safe internal temperature" (safe, green)
- Hour 1: "Chicken placed on picnic table in the sun" (entering danger zone, yellow)
- Hour 2.5: "Chicken has been at room temperature for 90 minutes" (danger zone warning, orange)
- Hour 4: "Chicken has been unrefrigerated over 2 hours" (high risk, red)
- Hour 4 (branch): "What if it had been refrigerated at hour 1 instead?" (alternate safe path, green, shown as a branching comparison event)
- Hour 6: "Food safety decision point: discard or safe to eat?" (decision, red)

Visual style: Horizontal timeline with color-coded risk zones (green/yellow/orange/red) and one branching "what if" comparison event shown above the main line

Color coding:
- Green: Safe temperature/time
- Yellow: Entering the danger zone
- Orange: Extended time in the danger zone
- Red: High risk, food safety practice was needed

Interactive features: Click any event to open an infobox explaining the food safety principle at that moment and what practice would keep the food safe; click the branching "what if" event to compare the safe alternate timeline side by side with the risky actual timeline.

Implementation: vis-timeline JavaScript library with a custom item click handler opening a detail panel; no real dates, relative hour offsets only.
```

## Related Resources

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
