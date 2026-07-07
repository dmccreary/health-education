---
title: Goal Strategy Outcome Evaluation Rubric
description: Evaluate a completed goal-setting scenario's process
status: scaffold
library: p5.js
bloom_level: Evaluate<br/>
---

# Goal Strategy Outcome Evaluation Rubric



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 14: Health Decision-Making and Goal-Setting](../../bands/grade-9-12/chapters/14-health-decision-making-and-goal-setting/index.md)
