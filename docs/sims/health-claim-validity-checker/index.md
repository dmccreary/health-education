---
title: Health Claim Validity Checker Workflow
description: Evaluate a health claim by walking through a decision
status: scaffold
library: Mermaid
bloom_level: Evaluate<br/>
---

# Health Claim Validity Checker Workflow



<iframe src="main.html" width="100%" height="842px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md).

```text
Type: workflow

**sim-id:** health-claim-validity-checker<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate<br/>
Bloom Taxonomy Verb: judge, validate

Learning objective: Evaluate a health claim by walking through a decision
workflow that checks source expertise, evidence citation, funding
disclosure, and consensus with other sources, arriving at a validity/
reliability judgment.

Purpose: Give learners a repeatable process for fact-checking any health
claim they encounter (social media, advertising, word of mouth).

Visual style: Mermaid flowchart with decision diamonds; every node has a
click handler opening an infobox.

Steps:
1. Start: "Claim encountered" — hover/click: "A health claim you saw,
   heard, or read that you want to check."
2. Decision: "Does the source disclose expertise/credentials?" — click:
   "Look for author bio, degree, or institutional affiliation."
3. Decision: "Is evidence cited (study, data, named source)?" — click:
   "A trustworthy claim points to where its facts came from."
4. Decision: "Does the source disclose funding/conflicts of interest?" —
   click: "Who paid for this? Product sellers have an incentive to
   overstate benefits."
5. Decision: "Do other independent, reliable sources agree?" — click:
   "Cross-check with a second source that isn't just repeating the first."
6. End: "Likely valid and reliable" (all checks pass) or "Treat with
   caution — verify further" (any check fails) — click: "Explains what to
   do next: consult a trusted professional before acting on the claim."

Color coding: Blue decision diamonds, green "pass" path, orange "caution"
path.

Implementation: Mermaid flowchart syntax with `click` directives calling a
JS function that opens a side infobox with the hover text above.
```

## Related Resources

- [Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md)
