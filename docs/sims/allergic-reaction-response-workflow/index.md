---
title: Allergic Reaction Response Workflow
description: Students apply the correct sequence of actions for responding to a mild versus a severe allergic reaction.
image: /sims/allergic-reaction-response-workflow/allergic-reaction-response-workflow.png
og:image: /sims/allergic-reaction-response-workflow/allergic-reaction-response-workflow.png
twitter:image: /sims/allergic-reaction-response-workflow/allergic-reaction-response-workflow.png
social:
   cards: false
library: Mermaid
bloom_level: Apply (L3)
grade_band: Grade 5
---

# Allergic Reaction Response Workflow

<iframe src="main.html" width="100%" height="836px" scrolling="no"></iframe>

[Run the Allergic Reaction Response Workflow MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="836px" scrolling="no"></iframe>
```

## About this MicroSim

**Allergic Reaction Response Workflow** is an interactive MicroSim for this health-education textbook.

Students apply the correct sequence of actions for responding to a mild versus a severe allergic reaction.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Apply (L3) — demonstrate, use, practice

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students apply the correct sequence of actions for responding to a mild versus a severe allergic reaction.

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
[Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md).

```text
Type: workflow
**sim-id:** allergic-reaction-response-workflow<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students apply the correct sequence of actions for responding to a mild versus a severe allergic reaction.

Purpose: Show a clear, branching decision path for responding to an allergic reaction based on severity, every node clickable for an explanation.

Visual style: Flowchart with a decision diamond and process rectangles.

Steps:
1. Start: "You notice a possible allergic reaction" — Click: "Signs can include hives, swelling, coughing, or stomach upset."
2. Decision: "Are there emergency signs (face/throat swelling, trouble breathing, dizziness/fainting)?" — Click: "Emergency signs mean this could be anaphylaxis, a life-threatening reaction."
3a. Process (if yes): "Call 911 or get an adult to call immediately" — Click: "Never wait to see if severe symptoms improve on their own."
3b. Process (if yes): "Use epinephrine auto-injector if prescribed and an adult is trained" — Click: "Only a person trained on that student's emergency plan should give this."
4. Process (if no, mild): "Tell a trusted adult right away" — Click: "Even mild signs should be reported immediately, since they can escalate."
5. Process: "Avoid further contact with the allergen and watch closely" — Click: "Move away from the food or substance and keep observing."
6. End: "Stay with the person and do not leave them alone" — Click: "Staying nearby means help arrives faster if things change."

Color coding: Red for emergency-path steps, yellow for the decision diamond, blue for mild-path steps, gray for the ending step.

Implementation: Mermaid flowchart with a `click` directive on every node opening an infobox with that node's explanation text. Tone stays calm and clear, avoiding alarmism while conveying urgency for emergency signs.
```

## References

- [Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md)
- [List of all MicroSims](../index.md)
- [Mermaid documentation](../index.md)
