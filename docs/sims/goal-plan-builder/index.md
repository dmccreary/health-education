---
title: Goal Plan Builder
description: Students construct a complete, specific health goal plan by filling in five required elements (target, steps and timeframe, supports, barriers and responses, tracking method) for a health area of their choice.
status: scaffold
library: p5.js
bloom_level: Create (L6)
---

# Goal Plan Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md).

```text
Type: microsim
**sim-id:** goal-plan-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: construct, design, formulate

Learning objective: Students construct a complete, specific health goal plan by filling in five required elements (target, steps and timeframe, supports, barriers and responses, tracking method) for a health area of their choice.

Canvas layout: Single-column form-style layout with five labeled sections, one per goal plan element, each with a text input area.

Visual elements: Five input sections in sequence (Target, Steps & Timeframe, Supports I'll Use, Barriers & My Plan For Them, How I'll Track Progress); a live-updating "My Goal Plan" summary card that assembles all five inputs into one readable plan as the learner types; example placeholder text in each field showing what a strong entry looks like.

Interactive controls: Text input in each of the five fields; "Show Example" button toggles a fully worked example plan (the sleep-goal example from this section) for reference; "Save My Plan" exports the completed plan as printable/downloadable text; "Clear" button resets all fields.

Default parameters: Fields start empty with example placeholder text visible in light gray; example plan hidden until "Show Example" is clicked.

Instructional Rationale: A Create-level objective requires learners to construct an original product from component parts; a guided builder with all five required elements visible at once, plus an optional worked example, scaffolds the construction without dictating the learner's actual goal content.

Implementation notes: p5.js or HTML form elements rendered in a p5.js canvas wrapper. No data is transmitted; plan is stored/exported locally only. Responsive layout that remains single-column on narrow screens.
```

## Related Resources

- [Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md)
