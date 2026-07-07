---
title: Conflict Resolution Role-Play Simulator
description: Students demonstrate the five-step conflict-resolution process by choosing the best response at each stage of a branching peer conflict scenario.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Conflict Resolution Role-Play Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** conflict-resolution-role-play-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students demonstrate the five-step conflict-resolution process by choosing the best response at each stage of a branching peer conflict scenario.

Canvas layout: Left (450px) scenario text and current stage; right (200px) 2-3 response choice buttons and a feedback panel showing which conflict-resolution step is in play.

Visual elements: Scenario card (e.g., "Two students both believe they were assigned the same job in a group project and are getting frustrated"); stage indicator showing which of the 5 steps is active (Stay Calm, Say What Happened, Listen, Find a Solution, Follow Through).

Interactive controls: Click a response choice at each stage; "See Result" advances to the next stage with feedback; "Try Again" restarts the same scenario; "New Scenario" loads one of 4 total conflict scenarios (group project, shared recess equipment, sibling chores, seating disagreement).

Default parameters: Scenario 1 loads first, Stage 1 active.

Behavior: Choosing "Take a breath and say 'let's figure this out'" at Stage 1 advances with feedback "Good — staying calm keeps the conflict from getting bigger." Choosing a blaming response shows "This raises tension instead of resolving it — try again."

Instructional Rationale: Apply-level objective, so the simulator has the student practice choosing and sequencing real responses rather than only reading about the steps.

Implementation notes: p5.js; each scenario stored as a branching stage array with choices, correctness flags, and feedback text; track and display which of the 5 steps the student is currently demonstrating.
```

## Related Resources

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
