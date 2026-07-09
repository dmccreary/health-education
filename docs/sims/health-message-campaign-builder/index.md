---
title: Health Message Campaign Builder
description: A four-stage capstone builder where students formulate a fact-based health message, justify it with evidence, tailor it to an audience and channel, and evaluate its likely effectiveness.
status: complete
library: p5.js
bloom_level: Create (L6)
---

# Health Message Campaign Builder

<iframe src="main.html" width="100%" height="632px" scrolling="no"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## About this MicroSim

This is the capstone builder for the course. Learners move through four
stages — **Formulate, Justify, Tailor, Evaluate** — using the progress bar
and the Back/Next navigation. Every stage requires original composition:

1. **Formulate** — choose a health issue (vaping prevention, mental health
   stigma reduction, hydration/sugary-drink choices, or consent and healthy
   relationships) and draft one clear, specific sentence.
2. **Justify** — choose at least two evidence cards from the bank for the
   chosen issue and explain how they support the message.
3. **Tailor** — pick a target audience (younger students, peers, parents, or
   the school board), read the audience-specific tone and channel guidance,
   revise the message, and pick a delivery channel.
4. **Evaluate** — rate the message on five criteria (clarity, evidence
   strength, audience fit, call to action, believability) and note revisions.

Completing all four stages unlocks the **Generate my campaign summary**
button, which compiles the message, evidence, audience/channel, and
self-evaluation into one readable summary panel.

The facts shown are illustrative for learning; verify every claim against a
current, credible source before using it in a real campaign.

## Specification

The full specification below is extracted from
[Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md).

```text
Type: microsim

sim-id: health-message-campaign-builder
Library: p5.js
Status: Specified

Bloom Taxonomy: Create
Bloom Taxonomy Verb: formulate, compose, produce

Learning objective: Formulate, justify with evidence, and tailor a
fact-based health message for a chosen audience, then evaluate its likely
effectiveness — synthesizing the full capstone project into one built
artifact.

Canvas layout: Full-width four-stage builder with a progress bar across
the top (Formulate, Justify, Tailor, Evaluate) and Next/Back navigation.

Interactive controls: Stage 1 — dropdown to choose a health issue (vaping
prevention, mental health stigma reduction, hydration/sugary-drink
choices, consent and healthy relationships) and a text box to draft a
one-sentence message. Stage 2 — a bank of fact/evidence cards per issue
(drag at least two into a "supporting evidence" zone) plus a text box to
explain the connection between each fact and the message. Stage 3 —
dropdown to select a target audience (younger students, peers, parents,
school board) which reveals audience-specific tone/channel guidance;
text box to revise the message and pick a channel (poster, social post,
short video script, presentation) suited to that audience. Stage 4 — a
five-criterion effectiveness rubric (clarity, evidence strength, audience
fit, call to action, believability) with a 1-4 self-rating slider per
criterion and a text box for revision notes.

Default parameters: Health issue = vaping prevention; all stages start
blank to require original composition.

Behavior: Completing all four stages unlocks a "Generate my campaign
summary" button that compiles the message, evidence, audience/channel
choice, and self-evaluation into one printable/exportable summary page.

Instructional Rationale: This is a Create-level capstone objective, so the
pattern is a multi-stage builder requiring original composition at every
step rather than a passive example — learners must produce their own
message, their own evidence linkage, their own audience adaptation, and
their own evaluation, mirroring the real process of designing a health
promotion campaign from scratch.

Implementation notes: p5.js or DOM-based multi-panel wizard; drag-and-drop
for evidence cards; store issue/audience/evidence data as JS objects;
progress bar as a simple state variable.
```

## Related Resources

- [Health Promotion and Behavior Change](../../bands/grade-9-12/chapters/15-health-promotion-and-behavior-change/index.md)
