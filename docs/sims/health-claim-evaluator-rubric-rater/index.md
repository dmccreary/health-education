---
title: Health Claim Evaluator Rubric Rater
description: Students assess and judge six realistic health claims (three from government/institutional sources, three from unverified social-media or influencer posts) against the five-question rubric, justifying a final validity verdict for each.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Health Claim Evaluator Rubric Rater



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md)
