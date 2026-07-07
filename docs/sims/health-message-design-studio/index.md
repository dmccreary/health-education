---
title: Health Message Design Studio
description: Students design a fact-supported health message by selecting a topic, audience, and format, then composing the message using the five design principles (audience-first opening, cited facts, matched tone/format, clear call to action, no unsupported scare tactics).
status: scaffold
library: p5.js
bloom_level: Create (L6)
---

# Health Message Design Studio



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
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

## Related Resources

- [Chapter 12: Advocacy, Goal Setting, and Health Messaging](../../bands/grade-6-8/chapters/12-advocacy-goal-setting-and-health-messaging/index.md)
