---
title: Consent Versus Coercion Scenario Evaluator
description: Students evaluate short scenarios and judge whether the outcome reflects genuine consent or coercion, justifying their reasoning.
image: /sims/consent-versus-coercion-scenario-evaluator/consent-versus-coercion-scenario-evaluator.png
og:image: /sims/consent-versus-coercion-scenario-evaluator/consent-versus-coercion-scenario-evaluator.png
twitter:image: /sims/consent-versus-coercion-scenario-evaluator/consent-versus-coercion-scenario-evaluator.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grade 5
---

# Consent Versus Coercion Scenario Evaluator

<iframe src="main.html" width="100%" height="444px" scrolling="no"></iframe>

[Run the Consent Versus Coercion Scenario Evaluator MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="444px" scrolling="no"></iframe>
```

## About this MicroSim

**Consent Versus Coercion Scenario Evaluator** is an interactive MicroSim for this health-education textbook.

Students evaluate short scenarios and judge whether the outcome reflects genuine consent or coercion, justifying their reasoning.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — judge, justify, assess

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students evaluate short scenarios and judge whether the outcome reflects genuine consent or coercion, justifying their reasoning.

This activity targets **Bloom's Evaluate (L5)** (judge, justify, assess).

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
[Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md).

```text
Type: microsim
**sim-id:** consent-versus-coercion-scenario-evaluator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, justify, assess

Learning objective: Students evaluate short scenarios and judge whether the outcome reflects genuine consent or coercion, justifying their reasoning.

Canvas layout: Left (450px) scenario text; right (200px) two judgment buttons ("Consent" / "Coercion") and a "Justify It" reveal panel.

Visual elements: Scenario card (e.g., "Maya asks Jordan three times to share his tablet game password. Jordan finally says fine just to stop her from asking."); two judgment buttons.

Interactive controls: Click a judgment button; "Why?" reveals reasoning using the test "Would they have said yes without the pressure?"; "Next Scenario" cycles through 8 scenarios spanning items, photos, secrets, activities, and money.

Behavior: Selecting "Coercion" reveals "Jordan only agreed after repeated asking wore him down — that's coercion, not consent."

Instructional Rationale: Evaluate-level objective requiring justified judgment rather than passive reading.

Implementation notes: p5.js; scenario objects with text, correct judgment, and justification string.
```

## References

- [Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
