---
title: Comparing Media Portrayals of Mental Health
description: Students evaluate short, fictional media description pairs (one harmful, one accurate/positive) portraying the same mental health topic and judge which elements support or undermine stigma reduction.
image: /sims/comparing-media-portrayals-mental-health/comparing-media-portrayals-mental-health.png
og:image: /sims/comparing-media-portrayals-mental-health/comparing-media-portrayals-mental-health.png
twitter:image: /sims/comparing-media-portrayals-mental-health/comparing-media-portrayals-mental-health.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grades 6-8
---

# Comparing Media Portrayals of Mental Health

<iframe src="main.html" width="100%" height="504px" scrolling="no"></iframe>

[Run the Comparing Media Portrayals of Mental Health MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="504px" scrolling="no"></iframe>
```

## About this MicroSim

**Comparing Media Portrayals of Mental Health** is an interactive MicroSim for this health-education textbook.

Students evaluate short, fictional media description pairs (one harmful, one accurate/positive) portraying the same mental health topic and judge which elements support or undermine stigma reduction.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — judge, assess, critique

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students evaluate short, fictional media description pairs (one harmful, one accurate/positive) portraying the same mental health topic and judge which elements support or undermine stigma reduction.

This activity targets **Bloom's Evaluate (L5)** (judge, assess, critique).

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
[Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md).

```text
Type: microsim
**sim-id:** comparing-media-portrayals-mental-health<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, critique

Learning objective: Students evaluate short, fictional media description pairs (one harmful, one accurate/positive) portraying the same mental health topic and judge which elements support or undermine stigma reduction.

Layout: A deck of 5 paired scenario cards, each pair describing two fictional media clips about the same topic (e.g., anxiety, depression) — one written with harmful stereotypes, one written with accurate, respectful representation. A rating panel with a simple scale ("Reduces Stigma" to "Reinforces Stigma") appears below each description.

Interactive controls: Student reads each description and drags a slider or clicks a rating; feedback reveals which specific words or portrayal choices in the description drove the harmful or positive framing; "Next Pair" button cycles through all 5 pairs.

Default parameters: Deck order fixed to build from clearly contrasting pairs toward subtler ones; feedback text explains the specific stereotype or accurate detail in each description.

Instructional Rationale: Judging portrayals against a stigma-reduction standard is Evaluate-level, so a rating task with specific, justified feedback is used rather than simple yes/no labeling.

Implementation notes: p5.js. Scenario pairs and feedback text stored as data objects; slider or button-based rating input; responsive layout for window resize.
```

## References

- [Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
