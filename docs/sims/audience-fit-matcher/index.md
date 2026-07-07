---
title: Audience Fit Matcher
description: Students judge which version of a health message best fits a given audience, and justify why the wording and format matter.
image: /sims/audience-fit-matcher/audience-fit-matcher.png
og:image: /sims/audience-fit-matcher/audience-fit-matcher.png
twitter:image: /sims/audience-fit-matcher/audience-fit-matcher.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grade 5
---

# Audience Fit Matcher

<iframe src="main.html" width="100%" height="489px" scrolling="no"></iframe>

[Run the Audience Fit Matcher MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="489px" scrolling="no"></iframe>
```

## About this MicroSim

**Audience Fit Matcher** is an interactive MicroSim for this health-education textbook.

Students judge which version of a health message best fits a given audience, and justify why the wording and format matter.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — judge, critique, recommend

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students judge which version of a health message best fits a given audience, and justify why the wording and format matter.

This activity targets **Bloom's Evaluate (L5)** (judge, critique, recommend).

### Suggested Use (about 10 minutes)

1. **Warm up (2 min).** Ask students what they already know about the topic
   and let one volunteer describe what they see on the screen.
2. **Model it (3 min).** Demonstrate the interaction once, thinking aloud so
   students hear the reasoning behind each choice.
3. **Guided practice (3 min).** Invite students to try the interaction and to
   predict what will happen before they act.
4. **Discuss (2 min).** Ask *why* the result came out the way it did, connecting
   the on-screen result back to the learning objective above.

### Check for Understanding

Have each student (or pair) explain their result in one sentence, using the
vocabulary from this chapter. Look for reasoning that matches the
**Evaluate**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** audience-fit-matcher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, critique, recommend

Learning objective: Students judge which version of a health message best fits a given audience, and justify why the wording and format matter.

Canvas layout: Left (450px) an audience card (e.g., "Kindergarten class," "Your own 5th grade class," "School staff meeting"); right (200px) three candidate message versions to choose from, plus a "Why?" panel.

Visual elements: Audience card with an icon and short description; three message-version buttons showing different tones/wording for the same core idea (e.g., simple/picture-based, peer-level, formal/data-based).

Interactive controls: Click the best-fit message version for the shown audience; "Why?" reveals whether the choice fits and explains the mismatch in the other two versions; "Next Audience" cycles through 5 audience types.

Behavior: For "Kindergarten class," selecting the simple/picture-based version reveals "Right fit — short words and a picture keep young kids engaged." Selecting the formal/data-based version reveals "Too complex — kindergartners need simple, concrete language."

Instructional Rationale: Evaluate-level objective, so students must judge fit against criteria (age, setting, tone) and justify the choice rather than simply picking a message at random.

Implementation notes: p5.js; audience objects paired with three message-version objects, each flagged best-fit or mismatched with a reason string.
```

## References

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
