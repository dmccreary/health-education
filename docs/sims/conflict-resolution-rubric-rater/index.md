---
title: Conflict-Resolution Skill Rubric Rater
description: Evaluate a scripted conflict-resolution dialogue
image: /sims/conflict-resolution-rubric-rater/conflict-resolution-rubric-rater.png
og:image: /sims/conflict-resolution-rubric-rater/conflict-resolution-rubric-rater.png
twitter:image: /sims/conflict-resolution-rubric-rater/conflict-resolution-rubric-rater.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate<br/>
grade_band: Grades 9-12
---

# Conflict-Resolution Skill Rubric Rater

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Conflict-Resolution Skill Rubric Rater MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Conflict-Resolution Skill Rubric Rater** is an interactive MicroSim for this health-education textbook.

Evaluate a scripted conflict-resolution dialogue

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate<br/> — rate, critique, justify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Evaluate a scripted conflict-resolution dialogue

This activity targets **Bloom's Evaluate<br/>** (rate, critique, justify).

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
[Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md).

```text
Type: infographic

**sim-id:** conflict-resolution-rubric-rater<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate<br/>
Bloom Taxonomy Verb: rate, critique, justify

Learning objective: Evaluate a scripted conflict-resolution dialogue
against a four-criterion rubric (stayed on the issue, listened actively,
checked understanding, reached a mutual solution), scoring each criterion
and justifying the score.

Purpose: Move students from simply recalling conflict-resolution steps
(earlier chapter) to judging the quality of an example's execution.

Layout: Left panel shows a short scripted dialogue transcript (selectable
from 3 preset scenarios: roommate/sibling chore conflict, group project
disagreement, friend-group exclusion incident). Right panel shows a
4-row rubric with a 1-4 star rating control per row and a text box for
the learner's justification.

Interactive elements: Selecting a scenario loads its transcript; clicking
each star rating locks in a score; a "Compare to expert rating" button
reveals a model rating with brief reasoning for each criterion so the
learner can check their evaluation against it.

Data to display: Three full transcripts (roughly 8-10 lines of dialogue
each) with one criterion clearly strong and at least one clearly weak, so
ratings are not uniformly high.

Color scheme: Neutral gray transcript panel; gold stars for rating;
green/red highlight comparing learner rating to expert rating after reveal.

Implementation: p5.js with DOM-based text panels layered over canvas
controls, or pure HTML/CSS/JS panel with p5.js star-rating widget.
```

## References

- [Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
