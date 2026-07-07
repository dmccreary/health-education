---
title: Kindness or Unkindness? Story Cards
description: Students classify short story scenes as kindness or unkindness and explain how each action affects the way the other person feels, and how belonging is strengthened or weakened.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Kindness or Unkindness? Story Cards



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md).

```text
Type: microsim
**sim-id:** kindness-or-unkindness-story-cards<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, explain, compare

Learning objective: Students classify short story scenes as kindness or unkindness and explain how each action affects the way the other person feels, and how belonging is strengthened or weakened.

Canvas layout:
- Left area (450px): One story scene at a time (flat illustration plus one or two sentences)
- Right area (150px): Two large buttons, "Kindness" and "Unkindness," plus an infobox

Visual elements:
- 8 story scenes cycling one at a time, mixing kindness moments (sharing, including, comforting) and unkindness moments (excluding, teasing, grabbing)
- Feeling-face icon that appears on the character in the scene after the student answers

Interactive controls:
- Click-to-select: "Kindness" or "Unkindness" button
- Button: "Next Story"
- Button: "Reset"

Default parameters:
- First scene: a child sharing crayons with a classmate who forgot theirs (clearly kindness, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the story scene with no label
  Stage 2: After the student clicks a button, reveal whether it matches
  Stage 3: Show the character's feeling-face and a one-sentence explanation of the effect ("Sharing crayons helped Sam feel included and cared for.")

Behavior:
- Correct match: button glows green, gentle chime, explanation and feeling-face appear
- Incorrect match: gentle prompt, "Think about how the other person might feel," correct answer glows softly as a hint

Instructional Rationale: This is an Understand-level (explain/classify) objective, so the MicroSim reveals the emotional effect of each action with concrete captions rather than continuous animation, helping students connect specific actions to specific feelings and to belonging.

Implementation notes: Use p5.js. Keep illustrations warm and non-shaming; unkindness scenes should show a fixable moment, never a scary one. Teacher reads each scene and explanation aloud.
```

## Related Resources

- [Chapter 4: Friendship, Uniqueness, and Belonging](../../bands/grade-1/chapters/04-friendship-and-belonging/index.md)
