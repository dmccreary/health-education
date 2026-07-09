---
title: Power Dynamics Spotter
description: Students examine short relationship scenarios to identify the source of a power imbalance and distinguish a fair use of influence from an exploitative one.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Power Dynamics Spotter



<iframe src="main.html" width="100%" height="554px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md).

```text
Type: microsim
**sim-id:** power-dynamics-spotter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, differentiate, distinguish

Learning objective: Students examine short relationship scenarios to identify the source of a power imbalance and distinguish a fair use of influence from an exploitative one.

Layout: A deck of 8 scenario cards (e.g., "An 8th grader tells a 6th grader to give up their seat at lunch or face social exclusion," "A team captain reminds a new player of practice times," "A popular student threatens to spread rumors unless a classmate does what they ask," "An older cousin helps a younger one with homework and sets a bedtime during a sleepover") with a two-part response panel: (1) select the source of power at play (age, popularity, size, access to information, emotional leverage, or none), and (2) judge whether the influence shown is fair guidance or exploitative pressure.

Interactive controls: Click to select the power source, then click to judge fair vs. exploitative; feedback explains both choices in one or two sentences; "Next Scenario" button; running tally of scenarios completed.

Default parameters: Deck order randomized each session; feedback panel starts empty until both parts are answered.

Instructional Rationale: Identifying the source of a power imbalance and distinguishing fair guidance from exploitation requires examining relationships between scenario details, which is Analyze-level; a two-part card format is used instead of a single label because power dynamics and their fairness are separate judgments students must learn to make independently.

Implementation notes: p5.js. Scenario data stored as an array of objects with text, power source, and fairness judgment fields. Responsive canvas that reflows cards on window resize. No scenario content depicts physical violence.
```

## Related Resources

- [Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md)
