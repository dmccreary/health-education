---
title: Emergency or Not? Scenario Sorter
description: Students apply warning-sign criteria to recognize which realistic scenarios are true emergencies requiring an immediate call for help, and which are not.
image: /sims/emergency-or-not-scenario-sorter/emergency-or-not-scenario-sorter.png
og:image: /sims/emergency-or-not-scenario-sorter/emergency-or-not-scenario-sorter.png
twitter:image: /sims/emergency-or-not-scenario-sorter/emergency-or-not-scenario-sorter.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grades 6-8
---

# Emergency or Not? Scenario Sorter

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Emergency or Not? Scenario Sorter MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Emergency or Not? Scenario Sorter** is an interactive MicroSim for this health-education textbook.

Students apply warning-sign criteria to recognize which realistic scenarios are true emergencies requiring an immediate call for help, and which are not.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, apply, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply warning-sign criteria to recognize which realistic scenarios are true emergencies requiring an immediate call for help, and which are not.

This activity targets **Bloom's Apply (L3)** (demonstrate, apply, practice).

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
**Apply**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md).

```text
Type: microsim
**sim-id:** emergency-or-not-scenario-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, apply, practice

Learning objective: Students apply warning-sign criteria to recognize which realistic scenarios are true emergencies requiring an immediate call for help, and which are not.

Layout: A deck of 10 scenario cards (e.g., "A classmate suddenly can't speak and is clutching their throat," "A friend has a small scrape from falling off a bike," "Someone collapses and won't wake up," "A student has a mild headache after gym class") with two click zones labeled "Call for Help Now" and "Not an Emergency."

Interactive controls: Click to sort each card; immediate feedback confirms the correct choice and names the specific warning sign(s) present or absent; "Reset Deck" button; running tally of correct sorts.

Default parameters: Deck order randomized each session; feedback panel starts empty until a card is sorted.

Instructional Rationale: Applying a set of warning-sign criteria to varied realistic scenarios is an Apply-level task, so a practice-based sorter with explanatory feedback is used rather than a static list of warning signs, since recognizing emergencies must be practiced across many examples to transfer to real situations.

Implementation notes: p5.js. Scenario data stored as an array of objects with text, correct classification, and explanation string. Responsive canvas that reflows cards on window resize. No scenario content includes graphic injury detail.
```

## References

- [Chapter 6: Sleep, Fitness, and Emergency Response](../../bands/grade-6-8/chapters/06-sleep-fitness-and-emergency-response/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
