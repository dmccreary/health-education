---
title: Handwashing Habit Timeline Tracker
description: Students apply disease prevention strategies by tracking a simulated day's key moments when handwashing matters most, reinforcing when and why each moment blocks a germ pathway.
status: scaffold
library: vis-timeline
bloom_level: Apply (L3)
---

# Handwashing Habit Timeline Tracker



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md).

```text
Type: timeline
**sim-id:** handwashing-habit-timeline-tracker<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students apply disease prevention strategies by tracking a simulated day's key moments when handwashing matters most, reinforcing when and why each moment blocks a germ pathway.

Time period: One school day, from morning to evening (7:00 AM to 8:00 PM)

Orientation: Horizontal

Events:
- 7:30 AM: "Before breakfast" — blocks food/contact pathway
- 8:45 AM: "Arriving at school, after touching shared doorknobs" — blocks surface pathway
- 10:15 AM: "After recess" — blocks direct contact and surface pathway
- 12:00 PM: "Before lunch" — blocks food/contact pathway
- 12:30 PM: "After using the bathroom" — blocks contact and surface pathway
- 3:30 PM: "After school, before a snack" — blocks food/contact pathway
- 6:00 PM: "Before dinner" — blocks food/contact pathway
- 8:00 PM: "After coughing or sneezing during the evening" — blocks respiratory droplet pathway

Color coding:
- Teal: Meal-related moments (food/contact pathway)
- Gold: Shared-surface moments (surface pathway)
- Purple: Respiratory-related moments (droplet pathway)

Interactive features:
- Click any event to reveal an infobox explaining which germ pathway it blocks and why the timing matters
- Hover over an event for a short one-line preview before clicking

Responsive behavior: Timeline collapses to a scrollable vertical list on narrow screens while retaining click functionality

Implementation: vis-timeline library with custom item styling per color group and a click listener that populates a side infobox panel.
```

## Related Resources

- [Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md)
