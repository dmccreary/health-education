---
title: Health Claim Evaluator Rubric Rater
description: Students assess and judge six realistic health claims (three from government/institutional sources, three from unverified social-media or influencer posts) against the five-question rubric, justifying a final validity verdict for each.
image: /sims/health-claim-evaluator-rubric-rater/health-claim-evaluator-rubric-rater.png
og:image: /sims/health-claim-evaluator-rubric-rater/health-claim-evaluator-rubric-rater.png
twitter:image: /sims/health-claim-evaluator-rubric-rater/health-claim-evaluator-rubric-rater.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grades 6-8
---

# Health Claim Evaluator Rubric Rater

<iframe src="main.html" width="100%" height="484px" scrolling="no"></iframe>

[Run the Health Claim Evaluator Rubric Rater MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="484px" scrolling="no"></iframe>
```

## About this MicroSim

**Health Claim Evaluator Rubric Rater** is an interactive MicroSim for this health-education textbook.

Students assess and judge six realistic health claims (three from government/institutional sources, three from unverified social-media or influencer posts) against the five-question rubric, justifying a final validity verdict for each.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — assess, judge, justify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students assess and judge six realistic health claims (three from government/institutional sources, three from unverified social-media or influencer posts) against the five-question rubric, justifying a final validity verdict for each.

This activity targets **Bloom's Evaluate (L5)** (assess, judge, justify).

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
[Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md).

```text
Type: microsim
**sim-id:** health-claim-evaluator-rubric-rater<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: assess, judge, justify

Learning objective: Students assess and judge six realistic health claims (three from government/institutional sources, three from unverified social-media or influencer posts) against the five-question rubric, justifying a final validity verdict for each.

Canvas layout: Left area (60%): claim text box showing one health claim at a time with its stated source type. Right area (40%): five rubric-question sliders/toggles (Who Wrote/Reviewed It, Evidence Cited, Funding Transparent, Regularly Updated, Product Being Sold) plus a verdict panel.

Visual elements: Claim card; five rubric toggle switches the learner sets based on the information given about the source; a computed "Validity Score" (0-5) that updates live as toggles change; a verdict label (Likely Valid / Use Caution / Likely Not Valid) tied to the score.

Interactive controls: Learner reads each claim and its source description, sets the five toggles based on their judgment, and reads the computed verdict; "Compare My Verdict" button reveals the model's reasoning and a brief justification; "Next Claim" button advances through six claims; a summary screen at the end tallies how many verdicts matched the model reasoning.

Default parameters: All toggles start unset (neutral); six claims presented in a fixed sequence, evenly split between institutional and unverified social-media sources.

Instructional Rationale: An Evaluate-level objective requires learners to judge and justify a conclusion using criteria, not just recall a definition; a rubric-rater with a live-updating score makes the evaluation criteria transparent and lets students see exactly how each factor changes the overall verdict.

Implementation notes: p5.js. All six claims and sources are fictionalized composites based on realistic, well-documented patterns rather than naming any real individual or brand. Responsive canvas that stacks the two areas vertically on narrow screens.
```

## References

- [Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
