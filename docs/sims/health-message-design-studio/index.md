---
title: Health Message Design Studio
description: Students design a fact-supported health message by selecting a topic, audience, and format, then composing the message using the five design principles (audience-first opening, cited facts, matched tone/format, clear call to action, no unsupported scare tactics).
image: /sims/health-message-design-studio/health-message-design-studio.png
og:image: /sims/health-message-design-studio/health-message-design-studio.png
twitter:image: /sims/health-message-design-studio/health-message-design-studio.png
social:
   cards: false
library: p5.js
bloom_level: Create (L6)
grade_band: Grades 6-8
---

# Health Message Design Studio

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Health Message Design Studio MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Health Message Design Studio** is an interactive MicroSim for this health-education textbook.

Students design a fact-supported health message by selecting a topic, audience, and format, then composing the message using the five design principles (audience-first opening, cited facts, matched tone/format, clear call to action, no unsupported scare tactics).

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Create (L6) — design, compose, formulate

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students design a fact-supported health message by selecting a topic, audience, and format, then composing the message using the five design principles (audience-first opening, cited facts, matched tone/format, clear call to action, no unsupported scare tactics).

This activity targets **Bloom's Create (L6)** (design, compose, formulate).

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
**Create**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md).

```text
Type: microsim
**sim-id:** health-message-design-studio<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: design, compose, formulate

Learning objective: Students design a fact-supported health message by selecting a topic, audience, and format, then composing the message using the five design principles (audience-first opening, cited facts, matched tone/format, clear call to action, no unsupported scare tactics).

Canvas layout: Left area: topic and audience selection (dropdown: Sleep, Vaping Prevention, Nutrition, Stress Management; dropdown: Classmates, Younger Students, Parents/Family, School Community). Right area: message-composition fields (Opening Hook, Key Fact + Source, Call To Action) plus a live preview panel.

Visual elements: Topic/audience dropdowns; three composition text fields; a "Design Principles Checklist" sidebar that checks off automatically as the learner's draft meets each principle (detected via simple heuristics such as presence of a source citation and a call-to-action field); live preview panel showing the assembled message as a poster-style layout.

Interactive controls: Learner selects topic and audience, drafts the three message fields, and watches the checklist and preview update live; "See Model Example" button shows a fully worked example (the sleep message above) for the selected topic if available; "Export My Message" produces a printable/downloadable poster layout.

Default parameters: Topic and audience unselected at start; checklist items unchecked until criteria are met.

Instructional Rationale: A Create-level objective requires learners to compose an original message from component parts; a studio layout with a live design-principles checklist scaffolds the creative process by making the five criteria visible and checkable in real time, rather than only listing them as text to remember.

Implementation notes: p5.js or HTML form elements in a p5.js canvas wrapper. Responsive layout that stacks the two areas vertically on narrow screens.
```

## References

- [Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
