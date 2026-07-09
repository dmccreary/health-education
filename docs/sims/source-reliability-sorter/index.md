---
title: Source Reliability Sorter
description: Students evaluate short example sources (a health agency web page, an influencer post, a doctor's advice, an ad) and sort each into "Reliable," "Not Reliable," or "Depends — Check Further," building justification skills rather than memorized labels.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Source Reliability Sorter



<iframe src="main.html" width="100%" height="524px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Health Literacy and Goal Setting](../../bands/grade-4/chapters/06-health-literacy-and-goals/index.md).

```text
Type: microsim
**sim-id:** source-reliability-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, justify

Learning objective: Students evaluate short example sources (a health agency web page, an influencer post, a doctor's advice, an ad) and sort each into "Reliable," "Not Reliable," or "Depends — Check Further," building justification skills rather than memorized labels.

Canvas layout:
- Top (280px): A source card showing a short mock example (a headline, a one-line quote, and a labeled source type icon)
- Bottom (270px): Three drop zones — "Reliable," "Not Reliable," "Depends — Check Further" — plus a "Why?" button

Visual elements:
- Icons representing source type: a stethoscope (doctor), a government building (health agency), a phone with a heart icon (social media post), a price tag (advertisement)
- Color-coded zones: green for Reliable, red for Not Reliable, amber for Depends — Check Further

Interactive controls:
- Drag-and-drop the source card into a zone
- Button: "Why?" reveals a short explanation of the reasoning after sorting
- Button: "Next Source"
- Button: "Reset"

Default parameters:
- 8 example source cards cycling in random order, mixing clearly reliable, clearly unreliable, and "depends" cases

Data Visibility Requirements:
  Stage 1: Show the source card with its short example claim and icon
  Stage 2: Show the three sorting zones
  Stage 3: After sorting, reveal the correct zone and a short explanation naming the trait involved (expertise, accountability, or bias)
  Final: Show a summary list of all 8 sources with their correct categories and one-line reasons

Behavior:
- Every sort reveals an explanation regardless of correctness, reinforcing the three reliability traits rather than just right/wrong answers

Instructional Rationale: This is an Evaluate-level objective requiring learners to judge sources by criteria, not recall a fixed list. Sorting with guaranteed justification builds the habit of asking "why" before trusting a source, which transfers beyond the specific examples shown.

Implementation notes: Use p5.js. Keep example claims realistic and age-appropriate; avoid naming real social media influencers or real brands.
```

## Related Resources

- [Chapter 6: Health Literacy and Goal Setting](../../bands/grade-4/chapters/06-health-literacy-and-goals/index.md)
