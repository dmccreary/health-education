---
title: Bystander Action Decision Path
description: Students apply a concrete, safety-first decision path for responding as a bystander when they witness bullying.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Bystander Action Decision Path



<iframe src="main.html" width="100%" height="842px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md).

```text
Type: workflow
**sim-id:** bystander-action-decision-path<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply a concrete, safety-first decision path for responding as a bystander when they witness bullying.

Purpose: Show a clear, repeatable sequence of safe bystander actions when witnessing bullying, emphasizing safety first and concrete steps over vague advice.

Visual style: Flowchart with process rectangles and one decision diamond, every node clickable

Steps:
1. Start: "You see someone being bullied"
   Click text: "Notice what's happening. You don't have to do everything at once — even one safe action helps."
2. Process: "Don't laugh, film, or share"
   Click text: "Bullying often continues because it gets an audience. Refusing to laugh or record removes that reward."
3. Decision: "Can you safely say something supportive right now?"
   Click text: "Only do this if it feels safe. If not, skip straight to getting an adult."
4a. Process (if yes): "Support the targeted student"
    Click text: "A short, caring statement like 'That wasn't okay, are you alright?' helps a lot."
4b. Process (if no): "Get a trusted adult safely"
    Click text: "Telling an adult is one of the most effective actions a bystander can take. It is never tattling."
5. Process: "Get a trusted adult safely"
   Click text: "Even after supporting the student directly, still tell a trusted adult what happened."
6. End: "Check in again later"
   Click text: "Following up afterward shows the targeted student that someone noticed and cares."

Color coding: Blue for immediate safe actions, yellow for the decision diamond, green for the adult-reporting step, gray for the follow-up ending

Implementation: Mermaid flowchart with a `click` directive on every node calling a JavaScript function that opens an infobox with that node's explanation text. Tone of all infobox text must remain calm, sincere, and non-judgmental — no humor, no mascot puns.
```

## Related Resources

- [Chapter 4: Equity, Belonging, And Bystander Action](../../bands/grade-5/chapters/04-equity-belonging-and-bystander-action/index.md)
