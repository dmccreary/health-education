---
title: How Teasing Can Ripple Through a Group
description: Students examine how one instance of unwanted teasing can affect not only the person teased but also the feelings of others who witness it, distinguishing this from playful interaction that everyone enjoys.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# How Teasing Can Ripple Through a Group



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Handling Conflict and Kind Play](../../bands/grade-2/chapters/03-conflict-kind-play/index.md).

```text
Type: microsim
**sim-id:** effects-of-teasing-ripple<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, compare

Learning objective: Students examine how one instance of unwanted teasing can affect not only the person teased but also the feelings of others who witness it, distinguishing this from playful interaction that everyone enjoys.

Canvas layout:
- Center area (300px): A simple classroom or playground scene with five small cartoon children arranged in a loose circle
- Right area (300px): An infobox panel that displays feeling-word text for whichever character is clicked

Visual elements:
- Five simple, calm cartoon children figures, each a neutral color at the start
- A toggle switch at the top labeled "Kind Joke" / "Unwanted Teasing"

Interactive controls:
- Toggle: Switch between "Kind Joke" scenario and "Unwanted Teasing" scenario
- Click any child figure to reveal how that character likely feels in the current scenario, shown in the infobox

Default parameters:
- Toggle starts on "Kind Joke"
- No character selected at start; instructions read "Click a character to see how they feel."

Data Visibility Requirements:
  Stage 1 (Kind Joke toggle): All five figures shown smiling; clicking any one shows infobox text such as "This friend is laughing along -- everyone agreed the joke was funny."
  Stage 2 (Unwanted Teasing toggle): The figure representing the teased child turns a muted color with a downturned expression; clicking it shows infobox text "This student feels embarrassed and left out."
  Stage 3 (Unwanted Teasing toggle): Clicking one of the four onlooker figures shows infobox text such as "This classmate feels uneasy watching -- they wonder if it could happen to them next."

Behavior:
- Switching the toggle immediately redraws all five figures' expressions and colors to match the selected scenario
- Every character is clickable in both scenarios, so students can compare how the same group of children feels differently depending on whether the interaction was a kind joke or unwanted teasing

Instructional Rationale: This is an Analyze-level objective requiring students to distinguish between two situations and examine effects on multiple people, so the design uses a compare-toggle with clickable figures rather than a single animation, letting students directly contrast how kind play and unwanted teasing ripple differently through a group.

Implementation notes: Use p5.js. Keep facial expressions simple, clear, and non-exaggerated so the emotional contrast is easy to read without being upsetting. Maintain a calm, caring visual tone throughout -- avoid cartoonish exaggeration of sadness.
```

## Related Resources

- [Chapter 3: Handling Conflict and Kind Play](../../bands/grade-2/chapters/03-conflict-kind-play/index.md)
