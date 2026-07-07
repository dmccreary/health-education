---
title: Practice Saying No Role-Play Simulator
description: Students demonstrate saying "no" to an unsafe or uncomfortable touch by selecting and practicing a firm refusal phrase in response to simple, non-graphic scenario prompts, matching the Grade 1 benchmark that calls for demonstration of this skill.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Practice Saying No Role-Play Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Staying Safe at Home, School, and Online](../../bands/grade-1/chapters/06-personal-safety/index.md).

```text
Type: microsim
**sim-id:** practice-saying-no-role-play-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students demonstrate saying "no" to an unsafe or uncomfortable touch by selecting and practicing a firm refusal phrase in response to simple, non-graphic scenario prompts, matching the Grade 1 benchmark that calls for demonstration of this skill.

Canvas layout:
- Left area (450px): One calm scenario prompt at a time, shown as a short sentence with a simple, non-graphic illustration (e.g., "Someone wants to hug you but you don't want a hug right now.")
- Right area (150px): Three response-choice buttons showing firm, calm refusal phrases, plus an infobox

Visual elements:
- A simple illustrated scene with two friendly characters, never depicting distress or danger, only an everyday moment where a choice is needed
- Three phrase-choice buttons per scenario, such as: "No, thank you," "Stop, I don't like that," "I need to go find [trusted adult]"

Interactive controls:
- Click-to-select: student selects a phrase in response to the prompt
- Button: "Try Saying It" (optional — pairs with the text-to-speech skill to play the chosen phrase aloud in a calm, confident voice, letting the student hear it modeled)
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario is a low-stakes, everyday example (an unwanted tickle from a sibling) to build comfort with the practice before any more serious scenario

Data Visibility Requirements:
  Stage 1: Show the scenario prompt and three phrase choices, no feedback yet
  Stage 2: After a choice is selected, show a caption affirming that all three phrases are strong, acceptable ways to say no
  Stage 3: Reveal a closing caption for every scenario: "Any of these responses is okay. What matters most is telling a trusted adult afterward."

Behavior:
- All three response choices are treated as correct and strong — there is no "wrong" phrase, since the goal is building confidence, not testing for a single right answer
- Every scenario ends with the same reinforcing message about telling a trusted adult

Instructional Rationale: This is an Apply-level (demonstrate/practice) objective, so the MicroSim has students actively choose and rehearse a refusal phrase rather than passively reading about the idea, directly matching the Grade 1 benchmark's call for demonstration; keeping every scenario low-stakes and non-graphic protects the calm, empowering tone required for this topic.

Implementation notes: Use p5.js. Every scenario must be reviewed to ensure it is age-appropriate, non-graphic, and never depicts a specific perpetrator or frightening imagery. Teacher should introduce and debrief this activity rather than leaving students to use it fully independently.
```

## Related Resources

- [Chapter 6: Staying Safe at Home, School, and Online](../../bands/grade-1/chapters/06-personal-safety/index.md)
