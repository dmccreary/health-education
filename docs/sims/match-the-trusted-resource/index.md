---
title: Match The Trusted Resource
description: Students determine which trusted adult or resource is needed for a range of health situations and justify the choice.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Match The Trusted Resource



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** match-the-trusted-resource<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: determine, justify, recommend

Learning objective: Students determine which trusted adult or resource is needed for a range of health situations and justify the choice.

Canvas layout: Left (450px) scenario card; right (200px) four resource buttons (School Nurse, Counselor, Parent/Guardian, Teacher) plus a "Why?" reveal panel.

Visual elements: Scenario card (e.g., "You've had a stomachache for three days and it's getting worse"); four resource option buttons.

Interactive controls: Click a resource button to answer; "Why?" reveals whether it was the best fit and explains the reasoning; "Next Situation" cycles through 8 scenarios spanning physical, emotional, relationship, and academic-safety situations.

Behavior: Selecting "School Nurse" for the stomachache scenario reveals "Right call — a school nurse can assess symptoms and help contact a parent or doctor if needed."

Instructional Rationale: Evaluate-level objective, so students must weigh several plausible resources and justify which one truly fits, rather than simply recalling one correct name.

Implementation notes: p5.js; scenario objects with best-fit resource id and justification string; allow partial credit reasoning for reasonable second-best choices.
```

## Related Resources

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
