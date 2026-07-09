---
title: Technology Safety Habit Checker
description: Students apply technology harm prevention strategies by evaluating a mock settings screen and identifying which settings are safe versus risky.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Technology Safety Habit Checker



<iframe src="main.html" width="100%" height="524px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md).

```text
Type: microsim
**sim-id:** technology-safety-habit-checker<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: apply, demonstrate, practice

Learning objective: Students apply technology harm prevention strategies by evaluating a mock settings screen and identifying which settings are safe versus risky.

Canvas layout: Left (450px) mock app-settings screen with six toggles; right (200px) feedback panel and score.

Visual elements: Six toggle switches (account privacy, location sharing, who can message you, bio info, screen time limit, unknown contact requests), each showing "Safer" (green) or "Riskier" (orange).

Interactive controls: Click a toggle to flip it; "Check My Settings" reveals a score out of 6 with explanations; "Try a New Scenario" loads a new profile.

Default parameters: 3 safe and 3 risky settings pre-set.

Behavior: Toggling "location sharing" off shows "Strangers can't see where you are."

Instructional Rationale: Apply-level objective, so students manipulate realistic settings and see immediate feedback.

Implementation notes: p5.js; settings as objects with label, boolean state, and explanation strings.
```

## Related Resources

- [Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md)
