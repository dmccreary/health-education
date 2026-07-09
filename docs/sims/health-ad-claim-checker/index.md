---
title: Health Ad Claim Checker
description: Students examine a health product advertisement claim step by step and distinguish trustworthy claims from manipulative sales tactics using a decision path.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Health Ad Claim Checker



<iframe src="main.html" width="100%" height="842px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Health Literacy and Goal Setting](../../bands/grade-4/chapters/06-health-literacy-and-goals/index.md).

```text
Type: workflow
**sim-id:** health-ad-claim-checker<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, differentiate

Learning objective: Students examine a health product advertisement claim step by step and distinguish trustworthy claims from manipulative sales tactics using a decision path.

Purpose: Walk students through a repeatable question sequence for judging any health product or service claim

Visual style: Top-down flowchart with decision diamonds

Steps:
1. Start: "You see a health product ad"
   Hover text: "This could be a supplement, gadget, app, or service promising a health benefit"

2. Decision: "Does it promise instant or miracle results?"
   Hover text: "Real health changes usually take consistent effort, not one product"

3a. If Yes: "Warning sign — be skeptical"
   Hover text: "Miracle claims are a major red flag for an unreliable product"

3b. If No: Continue to next question: "Is the evidence a real study, or just testimonials?"
   Hover text: "Testimonials are personal stories, not scientific proof"

4a. If Testimonials only: "Warning sign — ask for real evidence"
   Hover text: "A believable story is not the same as data from a study"

4b. If Real study cited: Continue to next question: "Is there pressure to decide immediately?"
   Hover text: "High-pressure tactics try to stop you from thinking it through"

5a. If Yes pressure: "Warning sign — slow down"
   Hover text: "Trustworthy products don't need to rush your decision"

5b. If No pressure: "Ask a trusted adult before deciding"
   Hover text: "Even claims that pass every check deserve a second opinion from an adult before money is spent"

End: "Informed decision made"
   Hover text: "You've used evidence, not pressure, to make the choice"

Color coding:
- Yellow diamonds: decision points
- Red boxes: warning sign outcomes
- Green box: final informed-decision outcome

Interactive features: Every node has a click directive opening an infobox with the hover text description shown above; nodes are colored to reinforce warning versus safe paths.

Implementation: Mermaid flowchart with click bindings for every node routed to a JavaScript function that displays the node's explanation in a side panel.
```

## Related Resources

- [Chapter 6: Health Literacy and Goal Setting](../../bands/grade-4/chapters/06-health-literacy-and-goals/index.md)
