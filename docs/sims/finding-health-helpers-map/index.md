---
title: Finding Health Helpers at School and in the Community
description: Students locate and identify school and community health helpers and describe the role each one plays.
image: /sims/finding-health-helpers-map/finding-health-helpers-map.png
og:image: /sims/finding-health-helpers-map/finding-health-helpers-map.png
twitter:image: /sims/finding-health-helpers-map/finding-health-helpers-map.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grade 2
---

# Finding Health Helpers at School and in the Community

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the Finding Health Helpers at School and in the Community MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**Finding Health Helpers at School and in the Community** is an interactive MicroSim for this health-education textbook.

Students locate and identify school and community health helpers and describe the role each one plays.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — locate, identify, describe

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 2**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students locate and identify school and community health helpers and describe the role each one plays.

This activity targets **Bloom's Understand (L2)** (locate, identify, describe).

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
**Understand**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
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

## References

- [Chapter 5: Technology, Community, and Emergency Safety](../../bands/grade-2/chapters/05-technology-community-emergency-safety/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
