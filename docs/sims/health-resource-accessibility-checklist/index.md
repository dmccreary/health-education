---
title: Health Resource Accessibility Checklist
description: Evaluate a given health resource scenario against six
status: scaffold
library: p5.js
bloom_level: Evaluate<br/>
---

# Health Resource Accessibility Checklist



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md).

```text
Type: infographic

**sim-id:** health-resource-accessibility-checklist<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate<br/>
Bloom Taxonomy Verb: assess, judge

Learning objective: Evaluate a given health resource scenario against six
accessibility dimensions (cost, location/transportation, hours,
confidentiality, language/cultural fit, digital access) and reach an overall
accessibility judgment.

Purpose: Let learners drag a scenario card (e.g., "school-based health
clinic," "rural telehealth mental health service," "urban Planned
Parenthood-style clinic," "tribal health center") onto a six-spoke radar
chart and rate each spoke 1 (low) to 5 (high) accessibility based on
provided scenario facts, then see a computed overall accessibility score.

Layout: Radar/spider chart with six axes, one per accessibility dimension;
scenario selector above; computed composite score and short written
rationale panel to the right.

Interactive elements: Click a scenario to load its facts; drag each axis
point to a 1-5 rating; a "Compare" toggle overlays two scenarios at once so
learners can see which is more accessible and on which specific dimension.

Data to display: 4 preset scenarios with embedded facts (cost, hours,
transit availability, confidentiality law, language services, digital
requirement) that justify a "correct range" rating band per axis, used for
feedback, not a single rigid right answer.

Color coding: Green wedge (high accessibility, 4-5), yellow (moderate, 2-3),
red (low, 0-1).

Responsive behavior: Chart resizes to container width; radar redraws on
window resize.

Implementation: p5.js custom radar chart component.
```

## Related Resources

- [Chapter 13: Influences on Health Behavior](../../bands/grade-9-12/chapters/13-influences-on-health-behavior/index.md)
