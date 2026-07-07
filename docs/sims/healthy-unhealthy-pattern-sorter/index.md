---
title: Healthy Versus Unhealthy Pattern Sorter
description: Students evaluate short relationship scenarios (family, friend, or romantic) to judge whether each reflects a healthy characteristic, an unhealthy pattern, or a single non-pattern moment.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Healthy Versus Unhealthy Pattern Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md).

```text
Type: microsim
**sim-id:** healthy-unhealthy-pattern-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, differentiate, justify

Learning objective: Students evaluate short relationship scenarios (family, friend, or romantic) to judge whether each reflects a healthy characteristic, an unhealthy pattern, or a single non-pattern moment.

Layout: One scenario at a time, with three response buttons ("Healthy Pattern," "Unhealthy Pattern," "One-Time Moment, Not a Pattern"), a feedback panel, and a "Next Scenario" button.

Visual elements: 10 short scenarios spanning family, friend, and romantic contexts (e.g., a friend who checks a classmate's phone daily without asking; a sibling who snapped once then apologized).

Behavior: Feedback explains which characteristic or pattern is present and why, using this chapter's healthy/unhealthy language.

Instructional Rationale: Judging scenarios against defined criteria is Evaluate-level, so classification-with-justification is used rather than animation, requiring application of the framework rather than recall.

Implementation notes: p5.js. Scenarios stored as objects with text, correct category, and explanation string.
```

## Related Resources

- [Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md)
