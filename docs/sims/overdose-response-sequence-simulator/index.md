---
title: Overdose Response Sequence Simulator
description: Apply the correct, ordered overdose emergency response
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Overdose Response Sequence Simulator



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md).

```text
Type: microsim

**sim-id:** overdose-response-sequence-simulator<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Apply (L3)
Bloom Verb: demonstrate, apply, execute

Learning objective: Apply the correct, ordered overdose emergency response
sequence (call 911, stay with the person, recovery position, naloxone if
available/trained, rescue breathing/CPR if trained) to realistic scenario
prompts, reinforcing that recognition must lead immediately to this
sequence.

Canvas layout: Left (55%) shows one scenario at a time (e.g., "You find a
friend unresponsive with slow, gurgling breathing and blue-tinged lips at
a party") with five action-step tiles in random order. Right (45%) holds
a sequence-builder panel and a feedback panel.

Interactive controls: Drag or click tiles into order; "Check Sequence"
confirms whether Call 911 is placed first (required) and whether the rest
form a defensible order, explaining why 911 always comes first; a
follow-up infobox explains the Good Samaritan law and naloxone's
temporary, opioid-specific effect; "Next Scenario" cycles through a bank
of four; "Reset" clears the board.

Instructional Rationale: Apply-level objectives require executing a
correct procedure in a new situation; an ordering activity mirrors the
real decision an emergency responder faces, with feedback reinforcing why
calling 911 always comes first.

Implementation notes: p5.js drag-and-drop or click-to-order; scenario and
feedback text in a structured object. No scenario or tile describes how
to obtain, use, dose, or conceal any substance — scoped entirely to
recognizing an emergency and the help-seeking sequence, matching the
CPR/AED content from earlier in this course. Responsive canvas.
```

## Related Resources

- [Chapter 11: Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md)
