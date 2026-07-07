---
title: Friendship Conflict Navigator
description: Students apply a step-by-step relationship-management process to a friendship disagreement scenario.
status: scaffold
library: Mermaid
bloom_level: Apply (L3)
---

# Friendship Conflict Navigator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md).

```text
Type: workflow
**sim-id:** friendship-conflict-navigator<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students apply a step-by-step relationship-management process to a friendship disagreement scenario.

Purpose: Show a repeatable decision path for managing a conflict with a friend in a healthy way, from noticing the feeling to repairing the relationship.

Visual style: Flowchart with decision diamonds and process rectangles, every node clickable

Steps:
1. Start: "You feel upset with a friend"
   Click text: "Notice the feeling before reacting — name it to yourself first."
2. Process: "Use a calming strategy"
   Click text: "A few slow breaths or a short pause helps you respond instead of react."
3. Decision: "Is this something you can talk through together?"
   Click text: "Most everyday friction (game choices, hurt feelings) can be talked through directly."
4a. Process (if yes): "Use an 'I feel' statement and listen to their side"
    Click text: "Say how you feel without blame, then really listen to their response."
5. Process: "Agree on a next step together"
   Click text: "Decide together how to move forward — an apology, a compromise, or just moving on."
6. End: "Relationship repaired or strengthened"
   Click text: "Handling conflict with respect often leaves a friendship stronger than before."
4b. Process (if no — situation feels unsafe or too big): "Talk to a trusted adult"
    Click text: "Some situations are too big to manage alone — that's what trusted adults are for."

Color coding: Blue for reflection steps, yellow for the decision diamond, green for the repaired-relationship ending, orange for the trusted-adult path

Implementation: Mermaid flowchart with a `click` directive on every node calling a JavaScript function that opens an infobox with that node's explanation text.
```

## Related Resources

- [Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md)
