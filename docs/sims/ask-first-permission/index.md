---
title: Ask First! Permission Scenarios
description: Students demonstrate the practice of asking permission before using technology or sharing information by choosing the correct next step in short scenarios.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Ask First! Permission Scenarios



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md).

```text
Type: microsim
**sim-id:** ask-first-permission<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, use

Learning objective: Students demonstrate the practice of asking permission before using technology or sharing information by choosing the correct next step in short scenarios.

Canvas layout:
- Top area (150px): A short scenario described in one simple sentence plus a picture (e.g., "You want to play a new game on the tablet.")
- Middle area (250px): Two large response buttons: "Ask First" and "Just Go Ahead"
- Bottom strip (100px): Feedback caption and "Next Scenario" button

Visual elements:
- 6 scenarios cycling one at a time: downloading an app, taking a photo of a friend, posting a video, borrowing a classmate's tablet, sharing a home address online, using a parent's phone to call someone

Interactive controls:
- Button: "Ask First"
- Button: "Just Go Ahead"
- Button: "Next Scenario"

Default parameters:
- First scenario: downloading a new app (a clear, low-stakes example to build confidence)

Behavior:
- Choosing "Ask First": character gives a thumbs-up, gentle chime, and caption explains why asking first was the safe, respectful choice
- Choosing "Just Go Ahead": no harsh penalty — a calm caption explains what could go wrong and reminds the student to ask a trusted adult next time
- After all 6 scenarios, a summary shows how many the student chose "Ask First" for, with encouragement regardless of score

Instructional Rationale: This is an Apply-level (demonstrate/practice) objective, so the MicroSim requires the learner to choose an action in a scenario rather than only recall a definition. Repeated scenario practice builds the habit of pausing to ask permission before acting with technology or shared information.

Implementation notes: Use p5.js. Keep tone plainly sincere with no jokes, consistent with the project's rule for personal-safety-adjacent content. Large text and icons for beginning readers; teacher reads scenario text aloud.
```

## Related Resources

- [Chapter 1: Foundations of Health and Safe Habits](../../bands/grade-1/chapters/01-foundations/index.md)
