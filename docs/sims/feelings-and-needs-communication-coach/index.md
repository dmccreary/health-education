---
title: Feelings and Needs Communication Coach
description: Students demonstrate communicating thoughts, feelings, wants, and needs in healthy ways by building a complete sentence from a picture prompt, matching the Grade 1 benchmark on communicating thoughts, feelings, wants, and needs in healthy ways.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Feelings and Needs Communication Coach



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md).

```text
Type: microsim
**sim-id:** feelings-and-needs-communication-coach<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students demonstrate communicating thoughts, feelings, wants, and needs in healthy ways by building a complete sentence from a picture prompt, matching the Grade 1 benchmark on communicating thoughts, feelings, wants, and needs in healthy ways.

Canvas layout:
- Left area (450px): One picture-prompt scene at a time (e.g., a child looking left out at recess)
- Right area (150px): Word-bank buttons for feelings and needs, plus a sentence-building strip and an infobox

Visual elements:
- 6 scenes showing a Grade 1 student in a common school or home situation (rained-out recess, loud classroom, hard homework problem, left out of a game, tired after lunch, excited about a good grade)
- A sentence strip at the bottom that fills in as the student taps word-bank buttons: "I feel ___ because ___. I need ___."
- Word-bank buttons grouped by feeling words (happy, sad, tired, frustrated, worried, excited) and need words (help, rest, a friend, quiet, a snack, a turn)

Interactive controls:
- Click-to-select: student taps a feeling word and a need word to complete the sentence strip
- Button: "Try Saying It" (pairs with the text-to-speech skill to read the finished sentence aloud in a warm, encouraging voice)
- Button: "Next Scene"
- Button: "Reset"

Default parameters:
- First scene: rained-out recess, to model a low-stakes, relatable example

Data Visibility Requirements:
  Stage 1: Show the picture prompt with an empty sentence strip
  Stage 2: Show the sentence strip fill in as each word is selected
  Stage 3: Reveal a caption once the sentence is complete: "Great! You just told someone exactly how you feel and what you need."

Behavior:
- Multiple feeling-and-need combinations are accepted as correct for each scene, since more than one honest answer can fit a situation
- Completed sentence appears in a speech bubble above the character in the scene

Instructional Rationale: This is an Apply-level (demonstrate/practice) objective, so the MicroSim has students actively construct their own feeling-and-need sentences from a word bank rather than only reading examples, directly rehearsing the healthy-communication skill the benchmark calls for.

Implementation notes: Use p5.js. Keep all scenes warm and everyday; avoid any scenario resembling the personal-safety content from Chapter 6, since this MicroSim focuses on everyday emotional and physical needs, not unsafe situations.
```

## Related Resources

- [Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md)
