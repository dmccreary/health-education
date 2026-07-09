---
title: Report or Emergency Decision Tool
description: Students differentiate online situations that call for
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Report or Emergency Decision Tool



<iframe src="main.html" width="100%" height="514px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md).

```text
Type: microsim

**sim-id:** report-or-emergency-decision-tool<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Analyze (L4)
Bloom Verb: differentiate, distinguish, examine

Learning objective: Students differentiate online situations that call for
standard reporting/blocking from situations that require immediate
emergency escalation, using the presence of a credible, specific threat of
violence as the deciding signal. No scenario describes graphic threat
content, weapon types, or methods — only the presence or absence of a
named target, location, and indication of intent.

Canvas layout:
- Left (60%): one scenario card at a time, drawn from a bank of 8 (e.g.,
  "A classmate posts a vague angry rant about the school with no named
  person or plan," "A former partner threatens to share a private photo
  unless you get back together," "A post names a specific classmate and
  describes an intent to hurt them at a specific time")
- Right (40%): two large response buttons, "Report/Block" and "Emergency —
  Tell an Adult Now," plus a feedback panel

Data Visibility Requirements:
  Stage 1: Show the scenario and both response buttons, neither selected
  Stage 2: Student selects a response
  Stage 3: Reveal feedback naming the specific signal that determined the
  correct classification (presence or absence of a named target, location,
  and specific intent), reinforcing that uncertainty should default to
  telling a trusted adult
  Stage 4: Running tally across the 8-scenario bank with a closing message
  that both correct paths — reporting and emergency escalation — share the
  same first move: telling someone

Interactive controls:
- Two response buttons
- Button: "Next Scenario"

Default parameters: 8-scenario bank, shuffled order each session

Instructional Rationale: Differentiating reportable harm from a genuine
emergency requires examining specific situational signals, which is an
Analyze-level task; a scenario-based binary-choice tool with signal-based
feedback is used rather than a static rule list so students practice
applying the distinguishing criteria themselves.

Implementation notes: p5.js; scenario data stored as an array of
{scenario, correctResponse, signal, explanation} objects; no scenario
includes graphic detail, weapon type, or method — only the presence or
absence of a named target/location/intent.
```

## Related Resources

- [Chapter 9: Digital and School Safety](../../bands/grade-9-12/chapters/09-digital-and-school-safety/index.md)
