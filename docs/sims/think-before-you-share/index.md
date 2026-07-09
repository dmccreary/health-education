---
title: Think Before You Share
description: Students explain how sharing a message, image, or video could affect themselves or others by classifying short scenarios as "safe to share," "ask first," or "don't share."
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Think Before You Share



<iframe src="main.html" width="100%" height="504px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Safety And Trusted Adults](../../bands/grade-3/chapters/02-safety-and-trusted-adults/index.md).

```text
Type: microsim
**sim-id:** think-before-you-share<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, exemplify

Learning objective: Students explain how sharing a message, image, or video could affect themselves or others by classifying short scenarios as "safe to share," "ask first," or "don't share."

Canvas layout:
- Top area (150px): One scenario card at a time (e.g., "You want to share a funny video of your friend tripping," "You want to send a birthday message to your grandma," "You want to post your home address in a game chat so a friend can visit")
- Middle area (250px): Three labeled bins — "Safe to Share," "Ask First," "Don't Share"
- Bottom strip (100px): Explanation caption and "Next Scenario" button

Visual elements:
- 8 scenario cards mixing clearly safe examples (a kind birthday message), ask-first examples (a photo that includes a friend), and don't-share examples (personal information or an embarrassing video)
- Bins shown as simple labeled boxes with friendly icons (heart, question mark, stop sign)

Interactive controls:
- Click or drag the scenario card into the matching bin
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario: kind birthday message (clear "Safe to Share" example, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scenario card with no judgment yet
  Stage 2: After the student picks a bin, reveal whether the choice matches the recommended answer and a one-sentence reason ("This includes a friend's face, so it's kind to ask them first.")
  Stage 3: Show a reminder question: "Would the person in it be okay, and would a trusted adult be okay with this?"

Behavior:
- Correct placement: bin glows softly, calm chime, reason caption appears
- Incorrect placement: gentle prompt, "Look again — think about who could see this and how they'd feel."
- After all scenarios, a summary caption reminds students to pause and think before sharing

Instructional Rationale: This is an Understand-level objective (explain, classify), so the pattern uses a classification sorter with a revealed reason rather than a scored quiz. Students need to see concrete scenarios and compare their choice against a clear explanation, which builds the judgment habit needed later for the Evaluate-level safety benchmark in this same chapter.

Implementation notes: Use p5.js. Keep scenario text short and readable aloud. Avoid naming specific apps; keep language general so it applies to any device or platform.
```

## Related Resources

- [Chapter 2: Safety And Trusted Adults](../../bands/grade-3/chapters/02-safety-and-trusted-adults/index.md)
