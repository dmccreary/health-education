---
title: Ask for Help With a Choice — Practice Scenarios
description: Students demonstrate asking for help from others in making safe, health-promoting choices by selecting an appropriate help-seeking phrase in response to everyday decision scenarios, matching the Grade 1 benchmark on ways to ask for help in making safe, health-promoting choices.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Ask for Help With a Choice — Practice Scenarios



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md).

```text
Type: microsim
**sim-id:** ask-for-help-with-a-choice-practice-scenarios<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students demonstrate asking for help from others in making safe, health-promoting choices by selecting an appropriate help-seeking phrase in response to everyday decision scenarios, matching the Grade 1 benchmark on ways to ask for help in making safe, health-promoting choices.

Canvas layout:
- Left area (450px): One decision scenario at a time (e.g., "You're not sure if you should play outside or rest because you feel a little sick.")
- Right area (150px): Three phrase-choice buttons and an infobox

Visual elements:
- 6 scenario cards covering food, activity, rest, and hygiene decisions
- Three phrase-choice buttons per scenario, drawn from the sentence starters taught in this section

Interactive controls:
- Click-to-select: student selects the phrase they would use to ask for help
- Button: "Try Saying It" (pairs with the text-to-speech skill to play the chosen phrase aloud)
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario: deciding between playing outside and resting when feeling a little tired, a low-stakes and relatable example

Data Visibility Requirements:
  Stage 1: Show the scenario and three phrase choices, no feedback yet
  Stage 2: After a choice is selected, show a caption affirming that asking for help was the right move
  Stage 3: Reveal a closing caption: "Asking for help with a choice means you get to think it through with someone who cares about you."

Behavior:
- All three phrase choices are treated as correct, since the goal is building the habit of asking, not testing for one exact phrase
- Every scenario ends with the same reinforcing message about the value of asking for help

Instructional Rationale: This is an Apply-level (demonstrate/practice) objective, so the MicroSim has students rehearse real help-seeking language across several everyday decisions, directly matching the benchmark's call for demonstrating ways to ask for help with health-promoting choices.

Implementation notes: Use p5.js. Keep every scenario everyday and low-stakes, reinforcing that asking for help is for big and small choices alike.
```

## Related Resources

- [Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md)
