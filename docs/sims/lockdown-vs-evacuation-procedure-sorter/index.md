---
title: Lockdown Vs. Evacuation Procedure Sorter
description: Students classify correct student actions as belonging to lockdown or evacuation procedure, distinguishing the two standard school safety responses. No scenario content describes a triggering event — only the procedure and correct student actions.
image: /sims/lockdown-vs-evacuation-procedure-sorter/lockdown-vs-evacuation-procedure-sorter.png
og:image: /sims/lockdown-vs-evacuation-procedure-sorter/lockdown-vs-evacuation-procedure-sorter.png
twitter:image: /sims/lockdown-vs-evacuation-procedure-sorter/lockdown-vs-evacuation-procedure-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Understand (L2)
grade_band: Grades 6-8
---

# Lockdown Vs. Evacuation Procedure Sorter

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Lockdown Vs. Evacuation Procedure Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Lockdown Vs. Evacuation Procedure Sorter** is an interactive MicroSim for this health-education textbook.

Students classify correct student actions as belonging to lockdown or evacuation procedure, distinguishing the two standard school safety responses. No scenario content describes a triggering event — only the procedure and correct student actions.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Understand (L2) — classify, distinguish, exemplify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students classify correct student actions as belonging to lockdown or evacuation procedure, distinguishing the two standard school safety responses. No scenario content describes a triggering event — only the procedure and correct student actions.

This activity targets **Bloom's Understand (L2)** (classify, distinguish, exemplify).

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
[Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md).

```text
Type: microsim
**sim-id:** lockdown-vs-evacuation-procedure-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, distinguish, exemplify

Learning objective: Students classify correct student actions as belonging to lockdown or evacuation procedure, distinguishing the two standard school safety responses. No scenario content describes a triggering event — only the procedure and correct student actions.

Layout: A deck of 10 action cards describing standard procedural behavior (e.g., "Stay quiet and move out of sight of the door," "Follow staff to the designated outdoor meeting area," "Wait for an official all-clear before moving," "Walk calmly, do not run or push," "Stay with your class group," "Do not open the door for anyone other than following the all-clear signal") with two click zones labeled "Lockdown" and "Evacuation."

Interactive controls: Click to sort each card; immediate feedback confirms the correct procedure and explains why that action matters for that procedure; "Reset Deck" button; running tally of correct sorts.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Classifying standard procedural actions under the correct safety procedure is an Understand-level task, so a sorting activity with rule-based feedback is used rather than a passive list, reinforcing the calm, correct response pattern for each procedure. This diagram depicts only standard drill procedure — it does not simulate, role-play, or reference any triggering event or attack scenario.

Implementation notes: p5.js. Card data stored as an array of objects with action text, correct procedure, and explanation string. Responsive canvas that reflows cards on window resize. Content restriction: no card or feedback text may reference a specific threat, weapon, or triggering event — cards address only correct student behavior during each standard procedure.
```

## References

- [Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
