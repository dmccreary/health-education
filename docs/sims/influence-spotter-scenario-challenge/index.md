---
title: Influence Spotter Scenario Challenge
description: Students examine 10 short scenarios and classify the primary source of health influence at work (Social Norm, Public Health Policy, Family/Culture, Peer, or Media), distinguishing between influences that can look similar on the surface.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Influence Spotter Scenario Challenge



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md).

```text
Type: microsim
**sim-id:** influence-spotter-scenario-challenge<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, classify, distinguish

Learning objective: Students examine 10 short scenarios and classify the primary source of health influence at work (Social Norm, Public Health Policy, Family/Culture, Peer, or Media), distinguishing between influences that can look similar on the surface.

Canvas layout: Top area shows one scenario at a time in a text box; bottom area shows five labeled buttons, one per influence category.

Visual elements: Scenario text box; five category buttons with simple icons (people for Social Norm, a gavel for Policy, a house for Family/Culture, two figures for Peer, a screen for Media); a progress bar showing scenario number out of 10; a feedback panel.

Interactive controls: Learner reads the scenario and clicks the category button they believe fits best; feedback panel confirms correct/incorrect with a one-to-two sentence explanation and, for scenarios with more than one plausible influence, explicitly notes that overlap; "Next" button advances; "Restart" button resets the deck with a new random order.

Default parameters: Scenario order randomized each session; score displayed as "X of 10 correct" at the end.

Instructional Rationale: This Analyze-level objective requires learners to examine and distinguish between five categories of influence that frequently overlap in real scenarios; immediate explanatory feedback teaches the distinguishing features of each category rather than only testing recall.

Implementation notes: p5.js. Responsive canvas that reflows to a single-column layout on narrow screens.
```

## Related Resources

- [Chapter 11: Health Influences and Information Literacy](../../bands/grade-6-8/chapters/11-health-influences-and-information-literacy/index.md)
