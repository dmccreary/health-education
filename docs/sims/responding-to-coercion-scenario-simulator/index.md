---
title: Responding to Coercion Scenario Simulator
description: A branching dialogue simulator where students apply a five-strategy framework for responding to coercion across friend, family, and early-dating scenarios and see realistic, non-punitive consequences.
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 6-8
---

# Responding to Coercion Scenario Simulator

<iframe src="main.html" width="100%" height="622px" scrolling="no"></iframe>

[Run the Responding to Coercion Scenario Simulator Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="622px" scrolling="no"></iframe>
```

## About this MicroSim

**Responding to Coercion Scenario Simulator** lets students rehearse decision-making
under social pressure in a safe, plain-text setting. Choose one of three scenarios
(a friend, a family member, or an early-dating context). At each step, another person
applies pressure, and you pick one of two or three responses. Each response is tagged
with one of five strategies for responding to coercion:

1. **Name it** — recognize "this is pressure, not a fair request."
2. **Say no clearly** — a short, direct answer, without over-explaining.
3. **Repeat the boundary** — calmly restate the same "no" if the pressure continues.
4. **Remove yourself** — leaving a conversation is a valid choice, not a failure.
5. **Seek support from a trusted adult** — the right move when pressure keeps coming.

Every path leads to a realistic, non-punitive outcome. A path that simply gives in
ends with a reflection prompt rather than a punishment. The **Strategies Used** tracker
shows which strategies you drew on. After an ending, use **Try a Different Path** to
step back to your last choice, or **Restart Scenario** to begin again.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, use, practice, solve

## Lesson Plan

### Audience

This MicroSim is designed for the **Grade 6-8** band, in the chapter on
Relationships, Boundaries, and Consent.

### Learning Objective

Students apply the five-strategy framework for responding to coercion by choosing a
response at each stage of an unfolding scenario and seeing a realistic consequence.

### Suggested Use (about 15 minutes)

1. **Set expectations (2 min).** Remind students these are practice scenarios and that
   there is no single "right" click — the goal is to notice how each strategy feels and
   works. Reinforce that leaving a situation or telling a trusted adult is always valid.
2. **Model one path (3 min).** Walk through the friend scenario on a shared screen,
   thinking aloud about why a response counts as pressure and which strategy fits.
3. **Explore (6 min).** Let students work through all three scenarios, trying more than
   one path in each and watching the Strategies Used tracker fill in.
4. **Discuss (4 min).** Ask which strategies felt easiest, which felt hardest, and why
   "giving in" ended with a reflection prompt instead of a bad outcome.

### Check for Understanding

Have each student name a real situation where one of the five strategies could help,
and identify a trusted adult they could go to if pressure continued.

## Specification

The full specification below is extracted from
[Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md).

```text
Type: microsim
**sim-id:** responding-to-coercion-scenario-simulator
**Library:** p5.js
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice, solve

Learning objective: Students apply the five-strategy framework for responding to coercion by choosing a response at each stage of an unfolding scenario and seeing a realistic consequence.

Layout: A branching dialogue scenario (friend, family, or early-dating context) with a decision point after each exchange offering 2-3 response options drawn from the five strategies; a "Strategies Used" tracker.

Visual elements: Plain text dialogue only (no depicted physical harm or explicit content); a branching path indicator showing progress.

Interactive controls: Click a response option to continue down its branch; "Restart Scenario"; "Try a Different Path" after reaching an ending.

Behavior: Each of 3 scenarios has multiple valid paths; a path that ignores pressure without using any strategy ends with a reflection prompt rather than a punitive message.

Instructional Rationale: Applying strategies within an unfolding realistic situation is Apply-level, so a branching simulator is used instead of a static list, letting learners rehearse decision-making under social pressure.

Implementation notes: p5.js. Scenario stored as a tree of dialogue nodes with response options linking to child nodes; strategy tags per option for the tracker.
```

## Related Resources

- [Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
