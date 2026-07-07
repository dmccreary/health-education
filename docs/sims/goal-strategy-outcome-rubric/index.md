---
title: Goal Strategy Outcome Evaluation Rubric
description: Evaluate a completed goal-setting scenario's process
image: /sims/goal-strategy-outcome-rubric/goal-strategy-outcome-rubric.png
og:image: /sims/goal-strategy-outcome-rubric/goal-strategy-outcome-rubric.png
twitter:image: /sims/goal-strategy-outcome-rubric/goal-strategy-outcome-rubric.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate<br/>
grade_band: Grades 9-12
---

# Goal Strategy Outcome Evaluation Rubric

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Goal Strategy Outcome Evaluation Rubric MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Goal Strategy Outcome Evaluation Rubric** is an interactive MicroSim for this health-education textbook.

Evaluate a completed goal-setting scenario's process

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate<br/> — assess, critique, justify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Evaluate a completed goal-setting scenario's process

This activity targets **Bloom's Evaluate<br/>** (assess, critique, justify).

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
[Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md).

```text
Type: infographic

**sim-id:** goal-strategy-outcome-rubric<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate<br/>
Bloom Taxonomy Verb: assess, critique, justify

Learning objective: Evaluate a completed goal-setting scenario's process
and outcome against a four-criterion rubric (data tracked, strategy
components functioned, goal partially/fully achieved, plan revision
needed), producing a written evaluation.

Purpose: Give learners practice judging goal outcomes on process quality,
not just success/failure, echoing the process-vs-outcome distinction from
the decision-making evaluation earlier in the chapter.

Layout: Left panel: one of three preset four-week goal scenarios (sleep,
physical activity, stress management) presented as a short checkpoint log
(weekly entries with notes). Right panel: four-criterion rubric with a
1-4 rating slider per criterion and a text box for justification.

Interactive elements: Selecting a scenario loads its checkpoint log;
rating each criterion unlocks a "Compare to model evaluation" button that
reveals expert reasoning per criterion, similar in structure to the
conflict-resolution rubric rater from Chapter 13 but applied to goal
outcomes.

Data to display: Three four-week checkpoint logs with realistic mixed
results (partial success, one failed checkpoint, one component that
didn't work as planned) so learners must weigh genuine trade-offs rather
than rate a uniformly successful example.

Color scheme: Neutral gray log panel; gold slider handles; green/red
comparison highlight after reveal.

Implementation: p5.js with DOM text panels and a custom slider-rubric
widget.
```

## References

- [Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
