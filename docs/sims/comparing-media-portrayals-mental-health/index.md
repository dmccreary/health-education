---
title: Comparing Media Portrayals of Mental Health
description: Students evaluate short, fictional media description pairs (one harmful, one accurate/positive) portraying the same mental health topic and judge which elements support or undermine stigma reduction.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Comparing Media Portrayals of Mental Health



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 5: Stigma, Bias, and Brain Health](../../bands/grade-6-8/chapters/05-stigma-bias-and-brain-health/index.md)
