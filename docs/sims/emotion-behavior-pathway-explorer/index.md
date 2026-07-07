---
title: Emotion-to-Behavior Pathway Explorer
description: Students explain how a triggering situation leads to an emotion, and how that emotion can lead to two different possible behaviors depending on whether the emotion is managed.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Emotion-to-Behavior Pathway Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md).

```text
Type: microsim
**sim-id:** emotion-behavior-pathway-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, interpret

Learning objective: Students explain how a triggering situation leads to an emotion, and how that emotion can lead to two different possible behaviors depending on whether the emotion is managed.

Canvas layout:
- Left side (150px): A trigger situation card (e.g., "Being left out of a group chat")
- Center (150px): An emotion node showing the resulting feeling (e.g., "Hurt / Left Out")
- Right side (300px): Two branching outcome cards — "Unmanaged Behavior" and "Managed Behavior" — shown side by side for comparison

Visual elements:
- A simple left-to-right flow diagram with arrows: Trigger → Emotion → Behavior (branching into two paths)
- Six preset trigger scenarios selectable from a dropdown, covering common Grade 5 situations (being teased, doing well on a test, an argument with a sibling, being picked last for a team, a schedule change, receiving unexpected good news)

Interactive controls:
- Dropdown: Select trigger scenario
- Button: "Show Unmanaged Path" — reveals a realistic impulsive behavior and its likely consequence
- Button: "Show Managed Path" — reveals a realistic managed behavior (naming the feeling, pausing, asking for help, using a calming strategy) and its likely consequence
- Step-through Next/Previous buttons to move between Trigger, Emotion, and Behavior stages

Data Visibility Requirements:
Stage 1: Show the trigger situation in plain language
Stage 2: Show the named emotion that situation commonly produces
Stage 3a: Show the unmanaged behavior and its likely short-term consequence
Stage 3b: Show the managed behavior and its likely short-term consequence
Final: Show both paths side by side for direct comparison

Instructional Rationale: This is an Understand-level objective focused on explaining a causal chain, so the pattern uses step-through stages with concrete worked examples rather than continuous animation, which would obscure the distinct trigger-emotion-behavior stages the student needs to trace.

Implementation notes: Use p5.js. Store each scenario as an object containing trigger text, emotion label, unmanaged behavior/consequence, and managed behavior/consequence, so switching the dropdown swaps all connected text.
```

## Related Resources

- [Chapter 1: Foundations and Trusted Adults](../../bands/grade-5/chapters/01-foundations-and-trusted-adults/index.md)
