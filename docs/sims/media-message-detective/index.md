---
title: Media Message Detective
description: Students analyze short, realistic media examples (an ad, a game scene, a social post) to identify what the media is trying to influence and whether the influence supports or works against a healthy choice.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Media Message Detective



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Personal Safety and Refusal Skills](../../bands/grade-4/chapters/04-safety-and-refusal-skills/index.md).

```text
Type: microsim
**sim-id:** media-message-detective<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, differentiate

Learning objective: Students analyze short, realistic media examples (an ad, a game scene, a social post) to identify what the media is trying to influence and whether the influence supports or works against a healthy choice.

Canvas layout:
- Top (350px): A card showing a short text description of a media example (no real brand names or images, all fictional/generic)
- Bottom (200px): Two labeled zones, "Healthy Influence" and "Watch Out For This," plus a "Why?" button

Visual elements:
- Simple icon representing the media type (TV screen, phone, game controller)
- Calm color scheme: teal for "Healthy Influence," soft amber for "Watch Out For This"

Interactive controls:
- Drag-and-drop the example card into one of the two zones
- Button: "Why?" reveals a short explanation after sorting
- Button: "Next Example"

Default parameters:
- 8 example cards, shown one at a time in random order

Data Visibility Requirements:
  Stage 1: Show the media example text in full
  Stage 2: Show the two sorting zones
  Stage 3: After sorting, show a short explanation of what the media example was trying to influence and why it fits that zone
  Final: Show how many examples were sorted, with an option to revisit any of them

Behavior:
- Every sort (correct or not) is followed by the explanation, framed as a learning moment rather than a scored test
- Examples include: an ad making candy look exciting, a show where a character asks a trusted adult for advice, a game that encourages taking a break every hour, a post that makes staying up very late look "normal" and fun

Instructional Rationale: This is an Analyze-level objective requiring learners to examine media examples and distinguish healthy influence from influence that undermines healthy choices. A sorting activity with an explanation for every answer keeps the focus on reasoning rather than memorized rules.

Implementation notes: Use p5.js. Keep every example fictional and generic (no real brand, show, or platform names) so the activity stays evergreen and appropriate for classroom use.
```

## Related Resources

- [Chapter 4: Personal Safety and Refusal Skills](../../bands/grade-4/chapters/04-safety-and-refusal-skills/index.md)
