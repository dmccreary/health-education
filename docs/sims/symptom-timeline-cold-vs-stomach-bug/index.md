---
title: Symptom Timeline: Cold vs. Stomach Bug
description: Students compare how symptoms typically progress over several days for a common cold versus a stomach bug, to better recognize what their body might be experiencing.
status: scaffold
library: vis-timeline
bloom_level: Understand (L2)
---

# Symptom Timeline: Cold vs. Stomach Bug



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md).

```text
Type: timeline
**sim-id:** symptom-timeline-cold-vs-stomach-bug<br/>
**Library:** vis-timeline<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: compare, contrast, interpret

Learning objective: Students compare how symptoms typically progress over several days for a common cold versus a stomach bug, to better recognize what their body might be experiencing.

Time period covered: Day 1 through Day 5 of illness for two example conditions.

Orientation: Horizontal, two parallel rows (Cold, Stomach Bug).

Events (Cold row): Day 1 scratchy throat/mild tiredness; Day 2 runny nose, congestion begins; Day 3 cough develops; Day 4 symptoms peak, low fever possible; Day 5 slowly improves.

Events (Stomach Bug row): Day 1 sudden stomachache/nausea; Day 2 vomiting or diarrhea possible, low energy; Day 3 symptoms peak then ease; Day 4 appetite returns; Day 5 mostly back to normal.

Visual style: Two color-coded horizontal rows with circular event markers (blue = Cold, orange = Stomach Bug).

Interactive features: Click or hover any event marker for a short description and tip (e.g., "Day 2 Stomach Bug: Rest and small sips of water are important now"); zoom and pan across the 5-day window.

Implementation: vis-timeline library with two grouped rows and a dataset of 10 events, each with a tooltip/click description.
```

## Related Resources

- [Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md)
