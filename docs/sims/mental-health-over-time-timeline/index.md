---
title: Mental Health Over Time — Interactive Timeline
description: Students describe how mental health can rise and fall over time in response to life events, just as physical health does, and explain that seeking help during a harder stretch is a normal, healthy response.
status: scaffold
library: vis-timeline
bloom_level: Understand (L2)
---

# Mental Health Over Time — Interactive Timeline



<iframe src="main.html" width="100%" height="402px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Mental and Emotional Health](../../bands/grade-4/chapters/03-mental-emotional-health/index.md).

```text
Type: timeline
**sim-id:** mental-health-over-time-timeline<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, explain, interpret

Learning objective: Students describe how mental health can rise and fall over time in response to life events, just as physical health does, and explain that seeking help during a harder stretch is a normal, healthy response.

Purpose: Normalize the idea that mental health is dynamic, not fixed, using a relatable one-year example timeline.

Time period: A single representative school year (September through June)

Orientation: Horizontal, with a wavy line showing a "mental health level" rising and falling across the months

Events plotted along the wavy line:
- September: Starting a new school year (steady)
- November: A stressful stretch after losing a pet (dip)
- December: Time with family during a break (rise)
- February: A harder stretch after a friendship conflict (dip)
- March: Talking to a school counselor and feeling supported (rise begins)
- June: Feeling steady again at the end of the year (steady, higher than the February dip)

Visual style: A smooth wavy line graph with a calm color gradient; no numeric "score," just relative up/down movement, to avoid implying mental health is measured like a test grade

Color coding: Cool blue for dips, warm gold for rises, neutral gray for steady periods

Interactive features:
- Click any point on the line to open an infobox describing that life event and how it might affect mental health
- Click the March point specifically to reveal: "Reaching out for help during a harder stretch is one of the healthiest things a person can do — it's exactly like seeing a doctor for a physical illness."
- A closing note after exploring three or more points: "Notice that the line goes back up. Mental health can improve again after a harder stretch, especially with support."

Implementation: vis-timeline with a custom-rendered wavy overlay line and click-to-reveal infobox panels.
```

## Related Resources

- [Chapter 3: Mental and Emotional Health](../../bands/grade-4/chapters/03-mental-emotional-health/index.md)
