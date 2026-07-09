---
title: Recognizing a Pattern of Change
description: Students analyze short scenario descriptions of a friend's behavior over several weeks and distinguish between an ordinary bad day and a pattern of change that deserves a caring, serious response.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Recognizing a Pattern of Change



<iframe src="main.html" width="100%" height="562px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md).

```text
Type: microsim
**sim-id:** recognizing-pattern-of-change<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, differentiate

Learning objective: Students analyze short scenario descriptions of a friend's behavior over several weeks and distinguish between an ordinary bad day and a pattern of change that deserves a caring, serious response.

Layout: A simple weekly log for a fictional friend (Weeks 1-4), showing short text entries about mood, sleep, and social activity for each week. Below the log, two response options: "One Bad Day" and "A Pattern Worth Caring About."

Interactive controls: Student reads the four-week log (populated with one of several pre-written scenario sets, selectable from a dropdown) and clicks the option that best matches; feedback explains why the log does or does not show a lasting pattern, and reinforces that the response either way is the same: notice with care, never with judgment.

Default parameters: Three to five scenario sets, at least one showing an ordinary rough patch and at least two showing a genuine multi-week pattern.

Instructional Rationale: Distinguishing between a passing hard day and a lasting pattern requires examining information across time, which is Analyze-level; a scenario log with reflection is used instead of a single static snapshot, since the pattern itself is the concept being taught.

Implementation notes: p5.js. Scenario data stored as arrays of weekly entries; dropdown to select scenario set; feedback text stored per scenario. No content in this MicroSim depicts a crisis event itself — only everyday mood, sleep, and social indicators over time.
```

## Related Resources

- [Chapter 4: Emotional Well-Being and Mental Health](../../bands/grade-6-8/chapters/04-emotional-well-being-and-mental-health/index.md)
