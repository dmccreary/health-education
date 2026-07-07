---
title: Are You Listening Actively?
description: Students apply active listening behaviors by selecting which actions in a short scenario show active listening.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Are You Listening Actively?



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md).

```text
Type: microsim
**sim-id:** active-listening-checklist-microsim<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students apply active listening behaviors by selecting which actions in a short scenario show active listening.

Canvas layout:
- Top area (120px): Short scenario text, e.g., "A teacher explains a new hallway safety rule."
- Middle area (260px): Four action cards students can mark as "Active Listening" or "Not Active Listening": "Looking at the teacher and staying quiet," "Waving hands and talking to a friend," "Asking 'why do we do it this way?' after the teacher finishes," "Nodding to show understanding"
- Bottom area (120px): Infobox with feedback and running score

Interactive controls:
- Click each action card to mark it
- Button: "Check My Answers"
- Button: "New Scenario" (cycles through 3 total scenarios)
- Button: "Reset"

Default parameters:
- Scenario 1 active; no cards marked yet

Data Visibility Requirements:
  Stage 1: Show scenario and four unmarked action cards
  Stage 2: Student marks cards, clicks "Check My Answers" -- correct cards turn green, incorrect turn orange
  Stage 3: Infobox explains each answer: "Looking and staying quiet shows active listening because it shows attention," "Talking to a friend is not active listening because attention is elsewhere"
  Stage 4: Student clicks "New Scenario" to try a fresh set of four actions

Behavior:
- Score tracks correct identifications across all three scenarios
- Feedback always names the specific active-listening behavior involved

Instructional Rationale: This is an Apply-level objective, so the design asks students to apply the concept to new scenario actions rather than simply recall a definition, matching the "demonstrate active listening in a variety of situations" benchmark.

Implementation notes: Use p5.js. Keep scenarios varied (home, classroom, playground) so the skill transfers across settings.
```

## Related Resources

- [Chapter 7: Influences, Decisions, and Personal Goals](../../bands/grade-2/chapters/07-influences-decisions-goals/index.md)
