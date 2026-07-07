---
title: When To Seek Help Decision Sorter
description: Students evaluate a set of symptom scenarios and judge whether each calls for resting at home, telling an adult and seeing a doctor soon, or seeking emergency help immediately.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# When To Seek Help Decision Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md).

```text
Type: microsim
**sim-id:** when-to-seek-help-decision-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, prioritize

Learning objective: Students evaluate a set of symptom scenarios and judge whether each calls for resting at home, telling an adult and seeing a doctor soon, or seeking emergency help immediately.

Canvas layout: Left (450px) scenario card; right (200px) three sorting buttons ("Rest At Home", "Tell An Adult Soon", "Emergency — Act Now") and a feedback panel.

Visual elements: Scenario card with plain-language description; three response buttons; feedback panel with calm, reassuring reasoning after each choice.

Interactive controls: Click a button to answer; "Why?" button reveals reasoning; "Next Scenario" cycles through a bank of 9 scenarios covering mild illness, worsening illness, chronic-condition flare-ups, and emergencies.

Default parameters: Starts on "You have a mild runny nose and feel a little tired."

Behavior: The runny-nose scenario sorted as "Rest At Home" reveals "Mild cold symptoms usually just need rest, fluids, and time — but still mention it to a trusted adult." A three-day worsening fever sorted as "Tell An Adult Soon" explains why prolonged symptoms need attention. A friend with asthma wheezing and unable to catch their breath sorted as "Emergency — Act Now" explains why a chronic condition suddenly out of control is an emergency.

Instructional Rationale: Evaluate-level objective requiring judgment and prioritization, so the pattern is a judgment task with reasoning-based feedback rather than a timed game.

Implementation notes: p5.js; scenarios stored as objects with description, correct category, and explanation string; tone stays calm and non-alarmist.
```

## Related Resources

- [Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md)
