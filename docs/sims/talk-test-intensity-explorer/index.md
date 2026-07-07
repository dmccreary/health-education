---
title: Talk Test Intensity Explorer
description: Students classify example activities as moderate or vigorous intensity using the talk test, and exemplify each category with realistic activities.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Talk Test Intensity Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: microsim
**sim-id:** talk-test-intensity-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, distinguish, exemplify

Learning objective: Students classify example activities as moderate or vigorous intensity using the talk test, and exemplify each category with realistic activities.

Layout: A deck of 8 activity cards (e.g., "Walking the dog at an easy pace," "Sprinting during a soccer game," "Slow-paced bike ride to a friend's house," "Running a mile for time") with two click zones labeled Moderate and Vigorous, and a "Talk Test" reminder panel showing the two criteria.

Interactive controls: Click to sort each card; immediate feedback confirms the category and explains using the talk test criteria; "Reset Deck" button; running tally of correct sorts.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Classifying activities into two defined categories using a stated rule is an Understand-level task, so a sorting activity with rule-based feedback is used rather than a passive definition list.

Implementation notes: p5.js. Card data stored as an array of objects with activity text, correct intensity, and explanation string. Responsive canvas that reflows cards on window resize.
```

## Related Resources

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
