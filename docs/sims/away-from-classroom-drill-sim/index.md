---
title: Following the Drill Away From Your Classroom
description: Students apply the correct safety-drill actions in different school locations away from their classroom teacher.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Following the Drill Away From Your Classroom



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Technology, Community, and Emergency Safety](../../bands/grade-2/chapters/05-technology-community-emergency-safety/index.md).

```text
Type: microsim
**sim-id:** away-from-classroom-drill-sim<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students apply the correct safety-drill actions in different school locations away from their classroom teacher.

Canvas layout:
- Top area (100px): A location banner showing a simple school setting (hallway, cafeteria, playground, bathroom) and a short caption
- Middle area (300px): A simple scene with a drawn student figure and a nearby adult-in-charge figure, plus a drill-signal icon (bell or speaker)
- Bottom area (100px): Infobox showing feedback text and a "Next Location" button

Visual elements:
- Four preset location cards: hallway, cafeteria, playground, bathroom hallway
- A drill-signal icon that "activates" (changes color/animation) when the student clicks "Start Drill"
- Four ordered action buttons: "Stop and Listen," "Find the Adult in Charge," "Follow Directions," "Move Calmly"

Interactive controls:
- Button: "Start Drill" activates the drill signal for the current location
- Click the four action buttons in the correct order
- Button: "Next Location" cycles to the next of four settings
- Button: "Reset"

Default parameters:
- Location 1: Hallway
- Drill signal: not yet activated

Data Visibility Requirements:
  Stage 1: Show hallway scene with drill signal inactive
  Stage 2: Student clicks "Start Drill" -- signal icon activates and infobox shows "The drill signal just started. What do you do first?"
  Stage 3: Student clicks buttons in order (Stop and Listen, Find the Adult in Charge, Follow Directions, Move Calmly) -- each correct click in order highlights green and shows matching explanation text
  Stage 4: If a button is clicked out of order, infobox gently reminds the correct next step without penalty

Behavior:
- The four action buttons must be clicked in the correct sequence to complete the drill for that location
- After completing the sequence, infobox shows a short congratulatory message before "Next Location" becomes available

Instructional Rationale: This is an Apply-level objective, so students practice performing the correct sequence of actions across multiple unfamiliar locations rather than only reading about the steps, reinforcing that the same four-step sequence applies no matter where a drill happens.

Implementation notes: Use p5.js. Keep all figures simple, calm, and non-threatening. Feedback text stays plainly sincere and reassuring throughout, consistent with the tone required for personal-safety-adjacent content.
```

## Related Resources

- [Chapter 5: Technology, Community, and Emergency Safety](../../bands/grade-2/chapters/05-technology-community-emergency-safety/index.md)
