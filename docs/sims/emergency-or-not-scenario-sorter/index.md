---
title: Emergency or Not? Scenario Sorter
description: Students apply warning-sign criteria to recognize which realistic scenarios are true emergencies requiring an immediate call for help, and which are not.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Emergency or Not? Scenario Sorter



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: microsim
**sim-id:** emergency-or-not-scenario-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, apply, practice

Learning objective: Students apply warning-sign criteria to recognize which realistic scenarios are true emergencies requiring an immediate call for help, and which are not.

Layout: A deck of 10 scenario cards (e.g., "A classmate suddenly can't speak and is clutching their throat," "A friend has a small scrape from falling off a bike," "Someone collapses and won't wake up," "A student has a mild headache after gym class") with two click zones labeled "Call for Help Now" and "Not an Emergency."

Interactive controls: Click to sort each card; immediate feedback confirms the correct choice and names the specific warning sign(s) present or absent; "Reset Deck" button; running tally of correct sorts.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Applying a set of warning-sign criteria to varied realistic scenarios is an Apply-level task, so a practice-based sorter with explanatory feedback is used rather than a static list of warning signs, since recognizing emergencies must be practiced across many examples to transfer to real situations.

Implementation notes: p5.js. Scenario data stored as an array of objects with text, correct classification, and explanation string. Responsive canvas that reflows cards on window resize. No scenario content includes graphic injury detail.
```

## Related Resources

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
