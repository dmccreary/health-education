---
title: Advertising Targeting And Health Outcome Disparities Chart
description: Students assess and critique the documented connection between targeted advertising practices and substance-related health outcome disparities across three case examples, justifying why the disparity reflects a systems-level marketing pattern rather than a characteristic of the affected community.
image: /sims/advertising-and-health-disparities-chart/advertising-and-health-disparities-chart.png
og:image: /sims/advertising-and-health-disparities-chart/advertising-and-health-disparities-chart.png
twitter:image: /sims/advertising-and-health-disparities-chart/advertising-and-health-disparities-chart.png
social:
   cards: false
library: Chart.js
bloom_level: Evaluate (L5)
grade_band: Grades 6-8
---

# Advertising Targeting And Health Outcome Disparities Chart

<iframe src="main.html" width="100%" height="502px" scrolling="no"></iframe>

[Run the Advertising Targeting And Health Outcome Disparities Chart MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="502px" scrolling="no"></iframe>
```

## About this MicroSim

**Advertising Targeting And Health Outcome Disparities Chart** is an interactive MicroSim for this health-education textbook.

Students assess and critique the documented connection between targeted advertising practices and substance-related health outcome disparities across three case examples, justifying why the disparity reflects a systems-level marketing pattern rather than a characteristic of the affected community.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — assess, justify, critique

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students assess and critique the documented connection between targeted advertising practices and substance-related health outcome disparities across three case examples, justifying why the disparity reflects a systems-level marketing pattern rather than a characteristic of the affected community.

This activity targets **Bloom's Evaluate (L5)** (assess, justify, critique).

### Suggested Use (about 10 minutes)

1. **Warm up (2 min).** Ask students what they already know about the topic
   and let one volunteer describe what they see on the screen.
2. **Model it (3 min).** Demonstrate the interaction once, thinking aloud so
   students hear the reasoning behind each choice.
3. **Guided practice (3 min).** Invite students to try the interaction and to
   predict what will happen before they act.
4. **Discuss (2 min).** Ask *why* the result came out the way it did, connecting
   the on-screen result back to the learning objective above.

### Check for Understanding

Have each student (or pair) explain their result in one sentence, using the
vocabulary from this chapter. Look for reasoning that matches the
**Evaluate**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md).

```text
Type: chart
**sim-id:** advertising-and-health-disparities-chart<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: assess, justify, critique

Learning objective: Students assess and critique the documented connection between targeted advertising practices and substance-related health outcome disparities across three case examples, justifying why the disparity reflects a systems-level marketing pattern rather than a characteristic of the affected community.

Chart type: Grouped bar chart

Purpose: Compare three documented case examples (Menthol Cigarette Marketing, Retail/Advertising Density In Lower-Income Areas, Youth Vaping Flavor Marketing) across two illustrative, clearly-labeled educational dimensions.

X-axis: Case example (Menthol Marketing, Retail/Ad Density, Youth Vaping Flavors)
Y-axis: Relative level (Low, Moderate, High) — a labeled qualitative scale, not a specific statistic

Data series:
1. "Documented Marketing/Retail Targeting" (blue bars): Menthol Marketing — High; Retail/Ad Density — High; Youth Vaping Flavors — High
2. "Associated Health Outcome Disparity" (orange bars): Menthol Marketing — High; Retail/Ad Density — Moderate; Youth Vaping Flavors — High

Title: "How Targeted Marketing Connects to Health Outcome Disparities"
Legend: top-right

Interactive features: Hovering any bar reveals a tooltip with a two-to-three sentence, factual, cited-in-plain-language explanation of the documented research behind that case; clicking a case-example label opens an expanded infobox that explicitly states the systems-level interpretation: "This disparity reflects a documented marketing and access pattern, not a difference in the community itself."

Implementation: Chart.js grouped bar chart with tooltip callbacks and click-to-expand infobox; responsive via Chart.js responsive:true option. Every infobox and tooltip includes the systems-level framing sentence so the chart cannot be read as blaming any community.
```

## References

- [Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md)
- [List of all MicroSims](../index.md)
- [Chart.js documentation](../index.md)
