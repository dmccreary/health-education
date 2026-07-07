---
title: Finding Health Helpers at School and in the Community
description: Students locate and identify school and community health helpers and describe the role each one plays.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Finding Health Helpers at School and in the Community



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Technology, Community, and Emergency Safety](../../bands/grade-2/chapters/05-technology-community-emergency-safety/index.md).

```text
Type: infographic
**sim-id:** finding-health-helpers-map<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: locate, identify, describe

Learning objective: Students locate and identify school and community health helpers and describe the role each one plays.

Canvas layout:
- Left area (300px): A simple illustrated school building with labeled hotspot rooms (nurse's office, counselor's office, front office)
- Right area (300px): A simple illustrated community street with labeled hotspot buildings (clinic, dentist office, fire station, police station)

Visual elements:
- Flat, friendly icons for each helper role standing near their hotspot (nurse, counselor, doctor, dentist, firefighter, police officer)
- Infobox panel below both illustrations showing helper information when a hotspot is clicked

Interactive controls:
- Click any school or community hotspot to reveal that helper's role in the infobox
- Button: "Show All Helpers" reveals all six helper descriptions at once for review

Default parameters:
- No hotspot selected at start; instructions read "Click a building or room to meet the health helper who works there."

Data Visibility Requirements:
  Stage 1: Show school building and community street with six unselected hotspots
  Stage 2: Click nurse's office -- infobox shows "The school nurse helps with injuries and illnesses at school. You can find them in the nurse's office."
  Stage 3: Click counselor's office -- infobox shows "The school counselor helps with feelings, friendships, and safety concerns. You can find them in the counselor's office."
  Stage 4: Click clinic -- infobox shows "A doctor or nurse at a clinic helps treat illness and keep the body healthy."
  Stage 5: Click fire station -- infobox shows "A firefighter helps keep the whole community safe, including from fires and some emergencies."

Behavior:
- Clicking a hotspot highlights it and displays its role description; clicking another hotspot switches the highlight and text
- "Show All Helpers" displays all six descriptions stacked in the infobox at once for a wrap-up review

Instructional Rationale: This is an Understand-level (locate/describe) objective, so the design uses a labeled, clickable map of real places students recognize rather than an abstract list, helping students connect each helper's role to a specific, findable location.

Implementation notes: Use p5.js. Keep buildings and figures simple and inclusive. Use warm, encouraging language in every infobox message.
```

## Related Resources

- [Chapter 5: Technology, Community, and Emergency Safety](../../bands/grade-2/chapters/05-technology-community-emergency-safety/index.md)
