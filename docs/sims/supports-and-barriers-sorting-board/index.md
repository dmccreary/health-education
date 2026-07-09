---
title: Supports And Barriers Sorting Board
description: Students examine 12 realistic factor cards (family, culture, technology, media, peers, beliefs) and organize each as a support, a barrier, or "depends on the situation" for a specific health decision scenario, distinguishing why the same factor type can function either way.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Supports And Barriers Sorting Board



<iframe src="main.html" width="100%" height="512px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md).

```text
Type: infographic
**sim-id:** supports-and-barriers-sorting-board<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, organize

Learning objective: Students examine 12 realistic factor cards (family, culture, technology, media, peers, beliefs) and organize each as a support, a barrier, or "depends on the situation" for a specific health decision scenario, distinguishing why the same factor type can function either way.

Layout: One scenario shown at the top (e.g., "deciding whether to tell a parent about a concerning symptom"); a deck of 12 factor cards below; three drop zones labeled "Support," "Barrier," and "Depends On Details."

Interactive controls: Learner drags or clicks each factor card into a zone; feedback explains the reasoning and, for "depends" cards, gives a concrete example of when that same factor would flip from support to barrier or vice versa; "New Scenario" button loads a different decision scenario with a re-shuffled card set.

Default parameters: Three total scenarios available via the "New Scenario" button; card order randomized each session.

Instructional Rationale: An Analyze-level objective requires learners to examine and distinguish overlapping influences rather than memorize a fixed list; sorting the same factor types across multiple scenarios teaches that support-versus-barrier depends on situational details, not on the factor category alone.

Implementation notes: p5.js. Responsive canvas that stacks the three zones vertically on narrow screens.
```

## Related Resources

- [Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md)
