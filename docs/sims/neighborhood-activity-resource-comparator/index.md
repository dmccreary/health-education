---
title: Neighborhood Physical Activity Resource Comparator
description: Students compare physical activity infrastructure
status: scaffold
library: Chart.js
bloom_level: Analyze (L4)
---

# Neighborhood Physical Activity Resource Comparator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md).

```text
Type: chart

**sim-id:** neighborhood-activity-resource-comparator<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: compare, examine, differentiate

Learning objective: Students compare physical activity infrastructure
(park acreage, lit sidewalks, recreation programs, perceived safety) across
three representative neighborhood income tiers and analyze how the gaps
translate into unequal opportunity.

Chart type: Grouped bar chart with a neighborhood-tier selector

Purpose: Show how park acreage per 1,000 residents, percentage of streets
with sidewalks, number of free/low-cost recreation programs, and a
resident-reported safety score differ across representative
higher-income, middle-income, and lower-income neighborhood tiers, using
realistic composite data drawn from published park-access and community
health research patterns

X-axis: Four resource categories (Park Acreage per 1,000 Residents,
Percent Streets with Sidewalks, Free/Low-Cost Recreation Programs,
Resident Safety Score out of 10)

Y-axis: Normalized value per category (0-10 scale for comparability)

Data series (toggleable):
1. Higher-Income Neighborhood Tier (green bars): Park acreage 8, sidewalks
   9, programs 7, safety 8
2. Middle-Income Neighborhood Tier (gold bars): Park acreage 5, sidewalks
   6, programs 4, safety 6
3. Lower-Income Neighborhood Tier (orange-red bars): Park acreage 2,
   sidewalks 3, programs 2, safety 4

Title: "Physical Activity Resources by Neighborhood Income Tier"
Legend: top-right, click a tier's legend entry to show/hide that series

Interactive features:
- Hover any bar: tooltip shows exact category, tier, and value with a
  one-sentence explanation of what that value represents in real terms
- Click a legend entry to toggle a tier on/off for direct comparison
- Dropdown: highlight one category across all three tiers at once

Annotations: callout on the Park Acreage category noting "Gaps like this
are shaped by zoning and investment decisions, not resident preference"

Implementation: Chart.js grouped bar chart with legend-click toggling and
custom tooltip callback
```

## Related Resources

- [Chapter 8: Health Equity and Disease Prevention](../../bands/grade-9-12/chapters/08-health-equity-and-disease-prevention/index.md)
