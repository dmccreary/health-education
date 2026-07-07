---
title: Allergic Reaction Response Workflow
description: Students apply the correct sequence of actions for responding to a mild versus a severe allergic reaction.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Allergic Reaction Response Workflow



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md).

```text
Type: workflow
**sim-id:** allergic-reaction-response-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply the correct sequence of actions for responding to a mild versus a severe allergic reaction.

Purpose: Show a clear, branching decision path for responding to an allergic reaction based on severity, every node clickable for an explanation.

Visual style: Flowchart with a decision diamond and process rectangles.

Steps:
1. Start: "You notice a possible allergic reaction" — Click: "Signs can include hives, swelling, coughing, or stomach upset."
2. Decision: "Are there emergency signs (face/throat swelling, trouble breathing, dizziness/fainting)?" — Click: "Emergency signs mean this could be anaphylaxis, a life-threatening reaction."
3a. Process (if yes): "Call 911 or get an adult to call immediately" — Click: "Never wait to see if severe symptoms improve on their own."
3b. Process (if yes): "Use epinephrine auto-injector if prescribed and an adult is trained" — Click: "Only a person trained on that student's emergency plan should give this."
4. Process (if no, mild): "Tell a trusted adult right away" — Click: "Even mild signs should be reported immediately, since they can escalate."
5. Process: "Avoid further contact with the allergen and watch closely" — Click: "Move away from the food or substance and keep observing."
6. End: "Stay with the person and do not leave them alone" — Click: "Staying nearby means help arrives faster if things change."

Color coding: Red for emergency-path steps, yellow for the decision diamond, blue for mild-path steps, gray for the ending step.

Implementation: Mermaid flowchart with a `click` directive on every node opening an infobox with that node's explanation text. Tone stays calm and clear, avoiding alarmism while conveying urgency for emergency signs.
```

## Related Resources

- [Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md)
