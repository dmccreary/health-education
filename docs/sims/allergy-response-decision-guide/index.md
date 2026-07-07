---
title: Allergy Response Decision Guide
description: Students apply allergy prevention and response knowledge by working through short scenarios and choosing the correct next step, reinforcing when a symptom requires telling an adult versus when it is a medical emergency.
image: /sims/allergy-response-decision-guide/allergy-response-decision-guide.png
og:image: /sims/allergy-response-decision-guide/allergy-response-decision-guide.png
twitter:image: /sims/allergy-response-decision-guide/allergy-response-decision-guide.png
social:
   cards: false
library: p5.js
bloom_level: Apply (L3)
grade_band: Grade 4
---

# Allergy Response Decision Guide

<iframe src="main.html" width="100%" height="489px" scrolling="no"></iframe>

[Run the Allergy Response Decision Guide MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="489px" scrolling="no"></iframe>
```

## About this MicroSim

**Allergy Response Decision Guide** is an interactive MicroSim for this health-education textbook.

Students apply allergy prevention and response knowledge by working through short scenarios and choosing the correct next step, reinforcing when a symptom requires telling an adult versus when it is a medical emergency.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, use, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 4**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply allergy prevention and response knowledge by working through short scenarios and choosing the correct next step, reinforcing when a symptom requires telling an adult versus when it is a medical emergency.

This activity targets **Bloom's Apply (L3)** (demonstrate, use, practice).

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
[Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md).

```text
Type: microsim
**sim-id:** allergy-response-decision-guide<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply allergy prevention and response knowledge by working through short scenarios and choosing the correct next step, reinforcing when a symptom requires telling an adult versus when it is a medical emergency.

Canvas layout:
- Top (300px): A scenario card describing a short, realistic situation involving a possible allergic reaction
- Bottom (250px): Three response buttons: "Keep Watching," "Tell a Trusted Adult," "This Is an Emergency — Get Help Now"

Visual elements:
- Simple flat-illustration icons (a food item, an insect, a person with mild symptoms) matched to each scenario
- Color-coded feedback: green for correct match, soft amber for "close, but let's look again," with the correct answer always shown afterward

Interactive controls:
- Button per response option
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- 6 scenarios cycling in random order, ranging from mild (itchy eyes after petting a friend's cat) to severe (swelling face and trouble breathing after a bee sting)

Data Visibility Requirements:
  Stage 1: Show the full scenario text and a simple icon
  Stage 2: Show the three response options
  Stage 3: After a choice, show whether it matches the recommended response and a short explanation of why
  Final: Show a summary of all scenarios reviewed, with the emergency-level ones flagged clearly

Behavior:
- Every choice reveals an explanation; the sim never simply marks an answer "wrong" without teaching the reasoning
- Emergency-level scenarios always confirm that "get help now" is correct, reinforcing that these symptoms cannot wait

Instructional Rationale: This is an Apply-level objective requiring learners to use allergy knowledge in realistic situations rather than just recall facts. Scenario-based decision practice builds the quick judgment needed in a real reaction, while guaranteed explanations keep the tone supportive rather than high-stakes.

Implementation notes: Use p5.js. Keep all scenarios realistic and age-appropriate; never depict a resolved outcome for the emergency scenarios other than "get an adult now," since this chapter's goal is building the correct fast response, not diagnosing.
```

## References

- [Chapter 5: Wellness and Disease Prevention](../../bands/grade-4/chapters/05-wellness-and-disease-prevention/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
