---
title: Safe Touch or Unwanted Touch?
description: Students identify everyday touch scenarios as a safe, wanted touch or an unwanted touch, using their own feelings as the guide.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Safe Touch or Unwanted Touch?



<iframe src="main.html" width="100%" height="528px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Body Safety and Speaking Up](../../bands/grade-2/chapters/06-body-safety-speaking-up/index.md).

```text
Type: microsim
**sim-id:** safe-or-unwanted-touch-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, recall

Learning objective: Students identify everyday touch scenarios as a safe, wanted touch or an unwanted touch, using their own feelings as the guide.

Canvas layout:
- Top area (100px): A scenario banner with a short, calm, non-graphic caption describing a touch scenario (no images of people in vulnerable positions; use simple, abstract, non-identifying icons such as a handshake, a hug outline, or a caution symbol)
- Middle area (250px): Two large buttons: a green heart ("Safe and Wanted") and an orange stop-hand ("Unwanted -- Tell a Trusted Adult")
- Bottom area (150px): Infobox showing calm feedback text after each answer

Visual elements:
- Six preset, entirely non-graphic scenario captions, for example: "A high-five from a friend after a game," "A hug from a parent at bedtime that feels good," "Someone touches you in a way that feels confusing and asks you to keep it secret," "A pat on the back from a coach during practice that feels fine," "Someone touches a private part of your body and it feels wrong," "A relative tickles you even after you said stop"
- Simple flat-style icons matching the mascot's visual style; no depictions of the touch itself, only calm caption text and neutral icons

Interactive controls:
- Click "Safe and Wanted" or "Unwanted -- Tell a Trusted Adult" for the current scenario
- Button: "Next Scenario" advances through all six cards
- Button: "Reset" restarts from scenario one

Default parameters:
- Scenario 1: "A high-five from a friend after a game" (correct answer: Safe and Wanted)
- No answer selected yet

Data Visibility Requirements:
  Stage 1: Show scenario 1 caption only, no answer selected
  Stage 2: Student clicks "Safe and Wanted" -- infobox shows "That's right. A high-five you enjoy is a safe, wanted touch."
  Stage 3: Student advances to the "someone touches you in a confusing way and asks you to keep it secret" scenario and clicks "Unwanted" -- infobox shows "That's right. Any touch that feels confusing, or that comes with a request to keep a secret, is a sign to tell a trusted adult right away."
  Stage 4: If a student clicks the other button, infobox gently and calmly explains the correct answer, always reinforcing "your own feeling matters, and telling a trusted adult is always the right choice."

Behavior:
- Each scenario has exactly one correct answer; a correct click highlights the button and shows a calm explanation
- An incorrect click shows a gentle correction, never a harsh sound or graphic, and always ends by reminding the student that telling a trusted adult is always okay

Instructional Rationale: This is a Remember-level objective, so the design uses simple recognition (safe/wanted vs. unwanted) with immediate, calm feedback rather than a multi-step simulation. Keeping all imagery abstract and non-graphic protects student comfort while the caption text carries the teaching content.

Implementation notes: Use p5.js. No depictions of people in unsafe situations -- use neutral icons (hearts, hands, caution symbols) only. Every piece of feedback text stays plainly sincere, calm, and reassuring, since this MicroSim addresses core personal-safety content.
```

## Related Resources

- [Chapter 6: Body Safety and Speaking Up](../../bands/grade-2/chapters/06-body-safety-speaking-up/index.md)
