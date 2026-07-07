---
title: My Healthy Habits Tracker
description: Students demonstrate and track practices and behaviors that support health and wellbeing by checking off a simple weekly habit tracker and watching a bar chart grow, matching the Grade 1 benchmark on demonstrating and tracking health-supporting practices.
status: scaffold
library: Chart.js
bloom_level: Apply (L3)
---

# My Healthy Habits Tracker



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md).

```text
Type: microsim
**sim-id:** my-healthy-habits-tracker<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, track

Learning objective: Students demonstrate and track practices and behaviors that support health and wellbeing by checking off a simple weekly habit tracker and watching a bar chart grow, matching the Grade 1 benchmark on demonstrating and tracking health-supporting practices.

Canvas layout:
- Left area (450px): A 7-day-by-4-habit checklist grid (rows: "Brushed Teeth," "Drank Water," "Active Play," "Ate a Fruit or Vegetable"; columns: Monday through Sunday)
- Right area (150px): A live-updating bar chart showing total check marks per habit, plus an infobox

Visual elements:
- Checklist grid with clickable checkboxes for each day/habit cell
- A bar chart with one bar per habit, height matching how many days that habit was checked this week
- A friendly weekly total counter ("You tracked 18 healthy habits this week!")

Interactive controls:
- Click-to-toggle: student clicks a checkbox to mark a habit complete for a day
- Button: "New Week" (clears the grid to start tracking again)
- Hover on any bar to see the exact count and which days were checked

Default parameters:
- All checkboxes start unchecked
- Chart updates immediately as boxes are checked

Data Visibility Requirements:
  Stage 1: Show the empty checklist grid and a bar chart with all bars at zero
  Stage 2: Show a bar grow immediately each time a checkbox is clicked
  Stage 3: Show the weekly total counter update with each new check mark

Behavior:
- Every checkbox click immediately updates the corresponding bar in the chart, giving instant visible feedback
- Hovering a bar shows a tooltip with the exact number of days checked, reinforcing that hovering reveals more detail

Instructional Rationale: This is an Apply-level (demonstrate/track) objective, so the MicroSim has students actively practice the real skill of tracking — checking boxes and watching a chart respond — rather than only reading about the idea of tracking, which directly rehearses the benchmark's call for demonstration.

Implementation notes: Use Chart.js for the live bar chart paired with a simple HTML/CSS checklist grid. Teacher can use this as a model before students start a paper or take-home version of the same weekly tracker.
```

## Related Resources

- [Chapter 7: Getting Help and Making Healthy Choices](../../bands/grade-1/chapters/07-help-and-decisions/index.md)
