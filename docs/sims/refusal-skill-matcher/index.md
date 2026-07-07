---
title: Refusal Skill Matcher
description: Students apply the five refusal strategies (direct, reason-and-refusal, broken-record, exit strategy, suggest-an-alternative) by matching each of eight realistic pressure scenarios to the refusal strategy most likely to work.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Refusal Skill Matcher



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md).

```text
Type: microsim
**sim-id:** refusal-skill-matcher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students apply the five refusal strategies (direct, reason-and-refusal, broken-record, exit strategy, suggest-an-alternative) by matching each of eight realistic pressure scenarios to the refusal strategy most likely to work.

Canvas layout: Top area shows one pressure scenario at a time in a text box (e.g., "A friend keeps asking you to skip class with them after you've already said no twice"); bottom area shows five labeled strategy buttons.

Visual elements: Scenario text box; five strategy buttons with short icon cues; feedback panel; progress indicator ("Scenario 3 of 8").

Interactive controls: Learner reads the scenario and clicks the strategy button they judge fits best; feedback confirms whether that strategy is a strong fit and explains why, noting when more than one strategy could reasonably work; "Next" button advances; "Restart" reshuffles scenarios.

Default parameters: Scenario order randomized each session; all scenarios written as realistic peer situations rather than extreme or dramatized examples.

Instructional Rationale: An Apply-level objective requires learners to practice matching a strategy to a real situation rather than only recalling a list; scenario-based practice with explanatory feedback builds transferable judgment about which refusal tool fits a given kind of pressure.

Implementation notes: p5.js. Tone stays plainly sincere with no humor, consistent with this chapter's treatment of refusal skills. Responsive canvas that stacks the scenario above the buttons on narrow screens.
```

## Related Resources

- [Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md)
