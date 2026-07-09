---
title: Refusal Skills Role-Play Branching Scenario
description: Students apply refusal-skill scripts (direct no, broken record, suggest an alternative, blame a rule, walk away) by choosing responses in a branching dialogue scenario and observing realistic, respectful outcomes.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Refusal Skills Role-Play Branching Scenario



<iframe src="main.html" width="100%" height="514px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Personal Safety and Refusal Skills](../../bands/grade-4/chapters/04-safety-and-refusal-skills/index.md).

```text
Type: microsim
**sim-id:** refusal-skills-role-play<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students apply refusal-skill scripts (direct no, broken record, suggest an alternative, blame a rule, walk away) by choosing responses in a branching dialogue scenario and observing realistic, respectful outcomes.

Canvas layout:
- Top (300px): A comic-style dialogue panel showing a peer character's speech bubble and a short scene description
- Bottom (250px): Four to five response buttons, each showing one refusal-skill script type by name and example phrase

Visual elements:
- Two simple flat-illustration characters: "You" and "Friend," speech bubbles for dialogue
- A small progress tracker showing how many rounds of pressure have been navigated
- A calm color palette (no threatening imagery); the peer character is drawn as an ordinary classmate, not a menacing figure

Interactive controls:
- Button per response option (e.g., "Direct No," "Broken Record," "Suggest Alternative," "Blame a Rule," "Walk Away")
- Button: "Start Over"
- Button: "Try a Different Scenario" (cycles between 3 preset scenarios: being pressured to skip wearing a helmet, being pressured to exclude a classmate from a game, being pressured to go somewhere without telling an adult)

Default parameters:
- Scenario 1: "Come on, take off your helmet, it looks silly" loads first
- Every scenario is resolved within 2-3 rounds of dialogue

Data Visibility Requirements:
  Stage 1: Show the scene and the friend's pressuring line
  Stage 2: Show the available refusal-script response options with their exact wording
  Stage 3: After a choice, show the friend's realistic reply (sometimes pressure continues once, sometimes it stops) and whether the chosen script type worked in this round
  Stage 4: If pressure continues, show a follow-up choice (repeat the script, escalate to "walk away," or "tell a trusted adult")
  Final: Show a short recap of which refusal scripts were used and a confirming message that any of the scripts, used calmly and repeated if needed, is an effective and respectful choice

Behavior:
- All response options are treated as valid strategies; the sim never penalizes a choice, but shows that persistence (repeating a script or walking away) is sometimes needed if the first attempt does not work
- Every scenario resolves safely within the branching paths — there is no "losing" ending, only different realistic paths to a safe resolution
- The "tell a trusted adult" option is always available as a branch and always leads to a supportive, resolved ending

Instructional Rationale: This is an Apply-level objective requiring learners to practice using refusal scripts in a realistic, low-stakes context before needing them in real life. Branching dialogue with guaranteed safe resolutions lets students rehearse language and build confidence without anxiety about "failing" the scenario.

Implementation notes: Use p5.js with a simple state-machine structure for dialogue branches. Store each scenario as a small tree of nodes (prompt, response options, follow-up nodes). Keep all peer characters, settings, and pressure scenarios ordinary and age-appropriate (helmets, group games, telling an adult where you're going) rather than involving strangers or graphic danger, which are covered elsewhere in this chapter.
```

## Related Resources

- [Chapter 4: Personal Safety and Refusal Skills](../../bands/grade-4/chapters/04-safety-and-refusal-skills/index.md)
