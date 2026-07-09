---
title: Self-Help Or Professional Help Decision Tree
description: Students assess a realistic health situation against decision criteria to justify whether self-directed research, a trusted adult, or immediate professional support is the appropriate response, prioritizing safety-critical situations.
status: scaffold
library: Mermaid
bloom_level: Evaluate (L5)
---

# Self-Help Or Professional Help Decision Tree



<iframe src="main.html" width="100%" height="814px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md).

```text
Type: workflow
**sim-id:** self-help-or-professional-help-decision-tree<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: assess, justify, prioritize

Learning objective: Students assess a realistic health situation against decision criteria to justify whether self-directed research, a trusted adult, or immediate professional support is the appropriate response, prioritizing safety-critical situations.

Purpose: Guide students through recognizing which situations call for a healthcare provider, counselor, or other professional rather than self-research or peer advice.

Visual style: Mermaid decision-tree flowchart starting from "I Have A Health Concern" branching through severity and safety questions to one of three end states.

Steps (all nodes clickable):
1. Start: "I Have A Health Concern" — click reveals: "Every concern starts here — the next questions help sort out the right response."
2. Decision: "Is There Any Safety Risk (To Self Or Others) Or A Severe/Sudden Symptom?" — click reveals: "Warning signs of suicide, self-harm, harming others, or a severe symptom always mean immediate professional help."
3. Branch "Yes" → End state: "Get Professional Help Immediately" — click reveals: "Contact a trusted adult and a healthcare provider, counselor, or emergency service right away."
4. Branch "No" → Decision: "Has This Been Ongoing Or Affecting Daily Life?" — click reveals: "A struggle lasting weeks or affecting school, sleep, or relationships needs professional support, even without an emergency."
5. Branch "Yes" → End state: "Schedule Professional Support" — click reveals: "Talk to a trusted adult about seeing a counselor or healthcare provider soon."
6. Branch "No" → Decision: "Can I Evaluate This With Valid Sources?" — click reveals: "Apply the five-question rubric from the previous section to a valid source."
7. End state: "Research With Valid Sources, Then Reassess" — click reveals: "If evaluation leaves real uncertainty, that uncertainty itself is a reason to ask a professional."

Color coding: Red for the immediate-help path, yellow for the schedule-support path, green for the research-and-reassess path.

Implementation: Mermaid flowchart with click handlers mapped to a JavaScript infobox callback for every node.
```

## Related Resources

- [Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md)
