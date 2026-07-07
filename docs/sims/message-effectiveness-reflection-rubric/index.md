---
title: Message Effectiveness Reflection Rubric
description: Students assess their own delivered health message (or a provided worked example) against four reflection criteria (audience understanding, realistic call to action, specific feedback gathered, planned improvement), justifying an overall effectiveness rating and recommending one specific change for next time.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Message Effectiveness Reflection Rubric



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md).

```text
Type: microsim
**sim-id:** message-effectiveness-reflection-rubric<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: assess, justify, recommend

Learning objective: Students assess their own delivered health message (or a provided worked example) against four reflection criteria (audience understanding, realistic call to action, specific feedback gathered, planned improvement), justifying an overall effectiveness rating and recommending one specific change for next time.

Canvas layout: Top area: summary of the message delivered (topic, audience, format) either entered by the learner or pre-filled with the sleep-message worked example. Bottom area: four reflection questions, each with a short text response field and a 1-5 effectiveness slider.

Visual elements: Four labeled reflection sections matching the criteria above; a computed overall "Effectiveness Snapshot" that averages the four sliders; a required "One Specific Change For Next Time" text field that must be completed before the snapshot is finalized.

Interactive controls: Learner completes each reflection field and slider; "View Worked Example" button shows how the sleep-message case study would be reflected on using this same rubric, as a model; "Finalize Reflection" locks in the snapshot and displays a summary card suitable for printing or submission.

Default parameters: Sliders start at the midpoint (3); worked example available but not shown by default.

Instructional Rationale: An Evaluate-level objective requires learners to judge and justify a conclusion using explicit criteria and to recommend a concrete next step; a rubric structure with a required "one specific change" field ensures the reflection produces an actionable output rather than only a rating.

Implementation notes: p5.js or HTML form elements in a p5.js canvas wrapper. Responsive layout that stacks the two areas vertically on narrow screens.
```

## Related Resources

- [Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md)
