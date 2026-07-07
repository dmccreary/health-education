---
title: Feelings Face Matcher
description: Students identify a feeling from a facial expression and cartoon scene, then explain what likely caused that feeling, moving beyond simple naming toward reasoning about cause.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Feelings Face Matcher



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md).

```text
Type: microsim
**sim-id:** feelings-face-matcher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: identify, explain, classify

Learning objective: Students identify a feeling from a facial expression and cartoon scene, then explain what likely caused that feeling, moving beyond simple naming toward reasoning about cause.

Canvas layout:
- Left area (450px): A large cartoon character scene showing a facial expression and a short situation (e.g., a child hugging a new puppy)
- Right area (150px): Six feeling word cards to choose from (Happy, Sad, Angry, Scared, Excited, Calm) and an infobox

Visual elements:
- 8 scenes cycling one at a time, each a simple flat-style illustration of a child in a common situation
- Six labeled feeling word cards with simple corresponding facial icons

Interactive controls:
- Click-to-select: student clicks the feeling word that matches the scene
- Button: "Next Scene"
- Button: "Reset"

Default parameters:
- First scene: a child smiling while opening a birthday present (clearly "Happy," to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scene with no label
  Stage 2: After the student clicks a feeling word, show whether it matches
  Stage 3: Reveal a one-sentence explanation of the cause ("This child feels happy because they got a fun surprise.")

Behavior:
- Correct match: the feeling card glows, gentle chime, explanation caption appears
- Incorrect match: gentle prompt, "Look again — what just happened in the picture?" and the correct card glows softly as a hint

Instructional Rationale: This is an Understand-level (identify/explain) objective, so the MicroSim reveals the cause of the feeling after each answer rather than using continuous animation, letting students connect each scene to a concrete reason a feeling occurred.

Implementation notes: Use p5.js. Large, simple, flat-style illustrations with clear, friendly facial expressions. Teacher reads each scene and explanation aloud.
```

## Related Resources

- [Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md)
