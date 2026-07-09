---
title: Safe or Ask First? Technology Sorter
description: Students apply the rule of asking permission before sharing information by sorting a series of simple scenario cards into "Safe to Do" and "Ask a Trusted Adult First" bins.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Safe or Ask First? Technology Sorter



<iframe src="main.html" width="100%" height="502px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Staying Safe at Home, School, and Online](../../bands/grade-1/chapters/06-personal-safety/index.md).

```text
Type: microsim
**sim-id:** safe-or-ask-first-technology-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students apply the rule of asking permission before sharing information by sorting a series of simple scenario cards into "Safe to Do" and "Ask a Trusted Adult First" bins.

Canvas layout:
- Left area (450px): One scenario card at a time (simple flat illustration plus one short sentence)
- Right area (150px): Two labeled bins, "Safe to Do" and "Ask a Trusted Adult First," and an infobox

Visual elements:
- 8 scenario cards cycling one at a time, such as: "Playing an approved learning game," "Typing in your home address on a pop-up screen," "Watching a video a grown-up picked," "A message asking for your full name and school"
- Two friendly labeled bins with icons (a green checkmark for "Safe to Do," a raised hand for "Ask a Trusted Adult First")

Interactive controls:
- Click-to-select: student clicks the bin that matches the scenario
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario: "Playing a game a trusted adult downloaded for you" (clearly safe, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scenario card with no label
  Stage 2: After the student clicks a bin, show whether it matches
  Stage 3: Reveal a one-sentence explanation of why the scenario is safe or needs an adult's help

Behavior:
- Correct match: bin glows softly, gentle chime, explanation caption appears
- Incorrect match: gentle prompt, "Take another look — would you need to type in private information?", correct bin glows softly as a hint

Instructional Rationale: This is an Apply-level (demonstrate/practice) objective, so the MicroSim has students practice classifying real scenarios rather than only reciting a rule, with concrete feedback after each choice to reinforce the ask-first habit.

Implementation notes: Use p5.js. Keep all scenarios age-appropriate and free of any frightening imagery; the goal is building a calm, confident habit, not fear. Teacher reads each scenario aloud and discusses the answer with the class.
```

## Related Resources

- [Chapter 6: Staying Safe at Home, School, and Online](../../bands/grade-1/chapters/06-personal-safety/index.md)
