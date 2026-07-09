---
title: Overdose Signs Recognition Trainer
description: Identify and classify the specific, observable warning
status: scaffold
library: p5.js
bloom_level: Remember/Understand (L1/L2)
---

# Overdose Signs Recognition Trainer



<iframe src="main.html" width="100%" height="610px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 11: Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md).

```text
Type: microsim

**sim-id:** overdose-signs-recognition-trainer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Remember/Understand (L1/L2)
Bloom Verb: identify, recognize, classify

Learning objective: Identify and classify the specific, observable warning
signs of opioid overdose, alcohol poisoning, and stimulant overdose,
building rapid, accurate recognition of a substance-related emergency.

Canvas layout: Left (55%) shows three tabs (Opioid Overdose, Alcohol
Poisoning, Stimulant Overdose) each with a checklist of that category's
signs as plain text (no depiction of a person or substance). Right (45%)
holds a deck of 12 factual sign-description cards (e.g., "Blue tinge to
the lips and fingertips," "Vomiting while unresponsive," "Pinpoint
pupils") and a feedback panel.

Interactive controls: Click a card, then click the category tab it
belongs to; immediate feedback confirms the match and briefly explains
why; "Show All Signs" reveals a complete reference table at any time,
since the safety goal is retention of every sign, not quiz performance;
"Reset" reshuffles the deck.

Instructional Rationale: This is a Remember/Understand-level recognition
task where every student must recall these signs under pressure, so
direct sorting with immediate feedback is used; animation is avoided so
it does not distract from recognition.

Implementation notes: p5.js; all sign text is factual and clinical,
sourced from standard first-aid/overdose-recognition curricula; no
depiction of a person, substance, or method of use. Responsive, stacks
vertically on narrow screens.
```

## Related Resources

- [Chapter 11: Substance Recovery and Resilience](../../bands/grade-9-12/chapters/11-substance-recovery-and-resilience/index.md)
