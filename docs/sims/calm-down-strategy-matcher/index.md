---
title: Calm-Down Strategy Matcher
description: Students match a described emotional scenario to an appropriate restorative self-management strategy and see why it is a good fit.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Calm-Down Strategy Matcher



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md).

```text
Type: microsim
**sim-id:** calm-down-strategy-matcher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: use, demonstrate, practice

Learning objective: Students match a described emotional scenario to an appropriate restorative self-management strategy and see why it is a good fit.

Canvas layout:
- Left side (450px): A scenario card showing a short situation and the emotion it produces
- Right side (200px): Four strategy category buttons (Body-Calming, Expressing, Redirecting, Reflecting) and a feedback panel

Visual elements:
- Scenario card with simple line-art icon representing the situation (e.g., a spilled backpack, a missed shot, a loud classroom)
- Four labeled strategy buttons, each showing 2-3 example actions when hovered
- Feedback panel that displays a green check or an encouraging note after a choice

Interactive controls:
- Button: "New Scenario" — loads a new random scenario from a bank of 8 situations
- Click one of the four strategy category buttons to answer
- Button: "Why This Works" — reveals a one-sentence explanation tied to the scenario

Default parameters:
- Starts on Scenario 1: "You struck out during a kickball game and feel embarrassed."

Behavior:
- Any reasonable strategy choice is marked correct if it plausibly helps that scenario (this is not a single-right-answer quiz); feedback explains why the chosen category can help
- "Why This Works" always available regardless of the answer chosen, reinforcing the reasoning rather than just the score

Instructional Rationale: This is an Apply-level objective, so the pattern is scenario-based practice with immediate, low-stakes feedback rather than passive animation, letting students rehearse matching strategies to real situations.

Implementation notes: Use p5.js. Store scenarios as objects with a description and an array of acceptable strategy categories; feedback text pulled from a matching explanation string.
```

## Related Resources

- [Chapter 3: Managing Emotions and Relationships](../../bands/grade-5/chapters/03-managing-emotions-and-relationships/index.md)
