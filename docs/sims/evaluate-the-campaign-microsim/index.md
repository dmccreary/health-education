---
title: Evaluate the Campaign MicroSim
description: Students critique short, realistic descriptions of
image: /sims/evaluate-the-campaign-microsim/evaluate-the-campaign-microsim.png
og:image: /sims/evaluate-the-campaign-microsim/evaluate-the-campaign-microsim.png
twitter:image: /sims/evaluate-the-campaign-microsim/evaluate-the-campaign-microsim.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grades 9-12
---

# Evaluate the Campaign MicroSim

<iframe src="main.html" width="100%" height="504px" scrolling="no"></iframe>

[Run the Evaluate the Campaign MicroSim MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="504px" scrolling="no"></iframe>
```

## About this MicroSim

**Evaluate the Campaign MicroSim** is an interactive MicroSim for this health-education textbook.

Students critique short, realistic descriptions of

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — critique, assess, justify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students critique short, realistic descriptions of

This activity targets **Bloom's Evaluate (L5)** (critique, assess, justify).

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
[Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md).

```text
Type: microsim

**sim-id:** evaluate-the-campaign-microsim<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: critique, assess, justify

Learning objective: Students critique short, realistic descriptions of
mental health awareness campaigns or media portrayals and assess whether
each is likely to reduce or reinforce stigma, justifying their assessment
using the criteria from the chapter text.

Canvas layout:
- Left (55%): a short description of a fictional awareness campaign or
  media portrayal (text only, no depiction of crisis content)
- Right (45%): a rating scale ("Likely Reduces Stigma" to "Likely
  Reinforces Stigma") and a text box for the student's justification
  prompt

Data Visibility Requirements:
  Stage 1: Show campaign/portrayal description and the four evaluation
  criteria (lived experience, concrete next step, non-sensationalized
  language, measured outcomes) as reference
  Stage 2: Student rates the example and selects which criteria it meets
  or fails
  Stage 3: Reveal a model assessment with reasoning, allowing comparison
  to the student's own rating
  Stage 4: Track how many examples the student has evaluated across a
  bank of 8

Interactive controls:
- Rating slider or button set
- Checkboxes for each of the four criteria
- Button: "Reveal Model Assessment"
- Button: "Next Example"

Default parameters: Example bank includes both strong and weak campaign
examples, text-only, no crisis imagery or scenario content

Instructional Rationale: Critiquing real-world communication artifacts
against defined criteria is an Evaluate-level objective, so a rate-and-
justify tool with a model-answer comparison is used rather than a simple
classification task, matching the media-literacy analytical tone
appropriate for this closing section.

Implementation notes: p5.js with an object array of {description,
criteriaMet, modelAssessment}; strictly text-based scenario content, no
depiction of crisis or self-harm.
```

## References

- [Chapter 5: Mental Health and Crisis Support](../../bands/grade-9-12/chapters/05-mental-health-and-crisis-support/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
