---
title: Sample Weekly Activity Minutes by Type
description: A stacked bar chart of a sample student's balanced week, showing moderate, vigorous, muscle-strengthening, and bone-strengthening minutes per day against the 60-minute daily guideline.
status: complete
library: Chart.js
bloom_level: Analyze (L4)
---

# Sample Weekly Activity Minutes by Type

<iframe src="main.html" width="100%" height="542px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## About This Chart

This stacked bar chart shows one sample student's activity plan for a full week. Each
day's bar stacks four activity types on top of each other, so the height of the whole
bar is that day's total minutes:

- **Moderate** (blue) — every day
- **Vigorous** (red) — Monday, Wednesday, Friday, Saturday
- **Muscle-Strengthening** (purple) — Monday, Wednesday, Friday
- **Bone-Strengthening** (green) — Tuesday, Thursday, Saturday, Sunday

Hover any segment to see its minutes and a reminder of what that activity type does for
your body. Hover a whole bar to see the day's total compared with the dashed **60-minute
daily guideline**. Click a type in the legend to hide it across every day, so you can
isolate and compare one type at a time.

Notice that Sunday is a planned **lower-intensity recovery day** — a balanced week still
leaves room to rest.

## Specification

The full specification below is extracted from
[Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: chart
sim-id: sample-weekly-activity-minutes
Library: Chart.js
Status: Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, compare, differentiate

Learning objective: Students examine a sample week's activity data to differentiate
how much time is spent on each activity type and compare it against the weekly
guideline minimums.

Chart type: Stacked bar chart

Purpose: Show a sample student's weekly activity plan broken into moderate, vigorous,
muscle-strengthening, and bone-strengthening minutes per day, with a reference line
marking the daily 60-minute guideline.

X-axis: Days of the week (Monday through Sunday)
Y-axis: Minutes of activity (0 to 90)

Data series:
1. Moderate activity (blue segments): varies 20-40 minutes per day
2. Vigorous activity (red segments): present Monday, Wednesday, Friday, Saturday (20-30 minutes)
3. Muscle-strengthening activity (purple segments): present Monday, Wednesday, Friday (10-15 minutes)
4. Bone-strengthening activity (green segments): present Tuesday, Thursday, Saturday, Sunday
   (10-20 minutes, often overlapping with vigorous activity conceptually but shown as its own
   segment for clarity)

Reference line: Horizontal dashed line at 60 minutes labeled "Daily Guideline"

Title: "One Balanced Week of Activity"
Legend: Position top-right, one entry per activity type

Interactive features: Hovering any bar segment shows a tooltip with the exact activity type,
minutes, and a one-sentence reminder of that type's purpose; clicking a legend entry toggles
that activity type on/off across all days to let students isolate one type at a time.

Annotations:
- Label near Sunday: "Lower-intensity recovery day still included"

Implementation: Chart.js stacked bar chart with custom tooltip callback and legend click handler.
```

## Related Resources

- [Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
