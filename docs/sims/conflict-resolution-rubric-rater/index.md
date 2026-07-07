---
title: Conflict-Resolution Skill Rubric Rater
description: Evaluate a scripted conflict-resolution dialogue
status: scaffold
library: p5.js
bloom_level: Evaluate<br/>
---

# Conflict-Resolution Skill Rubric Rater



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md)
