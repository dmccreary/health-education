---
title: When Is PPE Needed? Scenario Sorter
description: Students evaluate realistic scenarios to judge whether PPE is needed, and if so, which type, justifying the choice based on the transmission risk present.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# When Is PPE Needed? Scenario Sorter



<iframe src="main.html" width="100%" height="434px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: microsim
**sim-id:** when-is-ppe-needed-scenario-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, justify

Learning objective: Students evaluate realistic scenarios to judge whether PPE is needed, and if so, which type, justifying the choice based on the transmission risk present.

Layout: A deck of 8 scenario cards (e.g., "Helping a classmate with a bleeding scrape," "Eating lunch with friends," "Caring for a sick family member with a cough," "Washing dishes at home") with a rating panel offering four choices: No PPE Needed, Gloves, Mask, Gloves and Mask.

Interactive controls: Student selects the best PPE choice for each scenario; feedback justifies the correct answer by naming the specific transmission risk in the scenario and why that PPE type addresses it; "Next Scenario" button; running score tracker.

Default parameters: Deck order fixed to move from clear-cut cases to more ambiguous ones; feedback always includes a justification, not just a correct/incorrect label.

Instructional Rationale: Judging the appropriate protective response and justifying it against transmission risk is an Evaluate-level task, so a rating-with-justification format is used rather than simple recall of a PPE list.

Implementation notes: p5.js. Scenario and feedback data stored as objects; responsive layout for window resize. No graphic injury imagery.
```

## Related Resources

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
