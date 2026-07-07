---
title: Safe or Unsafe? School and Community Scenes
description: Students distinguish safe behaviors from unsafe behaviors across home, school, and community settings, and identify when a scene calls for telling a trusted adult.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Safe or Unsafe? School and Community Scenes



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md).

```text
Type: microsim
**sim-id:** safe-or-unsafe-scenes<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, examine, differentiate

Learning objective: Students distinguish safe behaviors from unsafe behaviors across home, school, and community settings, and identify when a scene calls for telling a trusted adult.

Canvas layout:
- Top area (150px): One illustrated scene at a time (e.g., a child crossing the street holding an adult's hand vs. a child running into the street alone; a child participating calmly in a fire drill vs. a child ignoring the drill)
- Middle area (250px): Two large bins: "Safe Behavior" (green) and "Unsafe Behavior" (orange)
- Bottom strip (100px): Explanation caption and "Next Scene" button

Visual elements:
- 10 paired scenes across home, school, and community settings, each clearly showing one safe and one unsafe version of a similar situation

Interactive controls:
- Drag-and-drop or click-to-select: place the scene in the correct bin
- Button: "Next Scene"
- Button: "Reset"

Default parameters:
- First scene: child holding an adult's hand to cross the street (clearly safe, to build confidence)

Behavior:
- Correct placement: bin glows green or orange to match, gentle chime, one-sentence explanation appears
- Incorrect placement: gentle prompt, "Look again — is anyone in danger of getting hurt here?"
- Every 3rd scene, an extra prompt asks: "If this were unsafe, who could you tell?" with the answer always modeling "a trusted adult"

Instructional Rationale: Distinguishing safe from unsafe behavior across multiple settings is an Analyze-level task — it requires comparing visual cues rather than simple recall. Tying the unsafe examples back to "tell a trusted adult" reinforces the connection between Safe Behavior and Trusted Adult introduced earlier in this chapter.

Implementation notes: Use p5.js. Keep illustrations calm and non-graphic; no scene should depict actual injury. Maintain a plainly sincere tone in all captions, per the project's safety-content voice rule (no puns).
```

## Related Resources

- [Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md)
