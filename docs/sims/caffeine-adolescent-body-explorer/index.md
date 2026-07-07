---
title: Caffeine and the Adolescent Body Explorer
description: Students explain how caffeine affects four body systems (nervous system, sleep, cardiovascular system, mood) differently in adolescents compared to adults.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Caffeine and the Adolescent Body Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: infographic
**sim-id:** caffeine-adolescent-body-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, interpret

Learning objective: Students explain how caffeine affects four body systems (nervous system, sleep, cardiovascular system, mood) differently in adolescents compared to adults.

Layout: A body outline with four labeled hotspots — brain (nervous system/sleep), heart (cardiovascular), stomach (absorption/timing), and a mood icon near the head.

Interactive elements: Click brain hotspot for the adenosine-blocking mechanism and the concrete detail that caffeine 6 hours before bed still reduces sleep quality; click heart hotspot for the heart-rate/blood-pressure effect and how added stimulants in energy drinks compound it; click mood icon for the anxiety/jitteriness explanation; slider "Hours Before Bedtime" (0-10) recalculates a sleep-quality indicator bar tied to the brain hotspot.

Data Visibility Requirements: Stage 1 shows caffeine's plain-language mechanism; Stage 2 shows the bedtime-slider sleep impact; Stage 3 shows the cardiovascular explanation; Stage 4 shows the mood explanation; Final shows adolescent-versus-adult sensitivity at the same dose.

Instructional Rationale: Explaining mechanisms and effects is Understand-level, so labeled hotspots with concrete, adjustable data (the sleep slider) are used instead of animation, keeping the physiology inspectable at the learner's own pace.

Implementation notes: p5.js. Each hotspot's explanation stored as text; the slider implemented as a simple linear function mapping hours-before-bed to a sleep-quality percentage.
```

## Related Resources

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
