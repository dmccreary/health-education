---
title: Personal Health Behavior Self-Assessment Wheel
description: Students examine their own current habits across six health areas and identify realistic goal-focus areas by rating themselves on a private, non-graded self-assessment wheel.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Personal Health Behavior Self-Assessment Wheel



<iframe src="main.html" width="100%" height="572px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md).

```text
Type: infographic
**sim-id:** personal-health-behavior-self-assessment-wheel<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, assess, identify

Learning objective: Students examine their own current habits across six health areas and identify realistic goal-focus areas by rating themselves on a private, non-graded self-assessment wheel.

Layout: A six-spoke wheel, one spoke per area (nutrition, sleep, physical activity, mental/emotional health, relationships, substance-related pressure), each spoke a slider from 1 (needs attention) to 5 (going well).

Interactive controls: Learner privately drags each spoke's slider to reflect their own honest current state; wheel visually fills in to show a personal "shape" (uneven wheel highlights the lowest-rated areas); clicking the lowest-scoring spoke opens a reflection prompt asking what a realistic small step in that area could look like; "Save My Reflection" stores responses locally in the browser only (not submitted or graded).

Default parameters: All spokes start at 3 (neutral); no data is transmitted or shared — this is a private reflection tool.

Instructional Rationale: An Analyze-level self-assessment objective benefits from a visual "shape" that makes uneven areas obvious at a glance, prompting honest identification of a goal-focus area rather than a vague overall judgment.

Implementation notes: p5.js. Explicitly labeled as private/ungraded in the UI itself. Responsive canvas that resizes the wheel to fit narrow screens.
```

## Related Resources

- [Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md)
