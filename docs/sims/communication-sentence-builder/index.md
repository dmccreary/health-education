---
title: Finish the Sentence — Communication Practice
description: Students demonstrate communicating thoughts, feelings, wants, and needs in healthy ways by completing simple sentence-starter scenarios with the best available response.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Finish the Sentence — Communication Practice



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md).

```text
Type: microsim
**sim-id:** communication-sentence-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students demonstrate communicating thoughts, feelings, wants, and needs in healthy ways by completing simple sentence-starter scenarios with the best available response.

Canvas layout:
- Top area (150px): A short scene showing a child in a situation (e.g., feeling left out at recess, needing help with a zipper, feeling scared during a fire drill)
- Middle area (250px): Three large word/phrase tiles the student clicks in order to build a short sentence (e.g., "I feel" + "left out" + "will you play with me?")
- Bottom strip (100px): The built sentence displays large on screen; "Next Scene" button

Visual elements:
- 6 scenes cycling one at a time, each with 3 tile choices per blank so students assemble a complete, healthy communication sentence

Interactive controls:
- Click tiles to build the sentence, in order
- Button: "Hear My Sentence" (reads the completed sentence aloud conceptually, i.e., displays it large for teacher read-aloud)
- Button: "Next Scene"

Default parameters:
- First scene: feeling left out at recess

Data Visibility Requirements:
  Stage 1: Show the scene and the empty sentence frame ("I feel ___ because ___.")
  Stage 2: Show each tile choice highlighted as the student clicks it
  Stage 3: Show the complete sentence filled in, large and readable

Behavior:
- Once all blanks are filled with a reasonable combination, the character in the scene smiles and a gentle chime plays
- No wrong combinations are truly "incorrect" — the MicroSim accepts multiple valid completions, since communication has more than one healthy phrasing, but flags combinations that are unrelated or unkind with a gentle prompt to try again

Instructional Rationale: This is an Apply-level (demonstrate/practice) objective, so students build and produce a sentence rather than just recognize one. A tile-based builder scaffolds beginning readers who cannot yet type or write full sentences independently.

Implementation notes: Use p5.js. Keep tile text short (2-4 words) and large. Teacher reads the finished sentence aloud with the student.
```

## Related Resources

- [Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md)
