---
title: Boundary-Setting Response Builder
description: Students apply boundary-setting strategies by choosing and sequencing an effective response to a realistic peer-pressure scenario, including digital-pressure scenarios.
status: scaffold
library: p5.js
bloom_level: Apply (L3)
---

# Boundary-Setting Response Builder



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md).

```text
Type: microsim
**sim-id:** boundary-setting-response-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students apply boundary-setting strategies by choosing and sequencing an effective response to a realistic peer-pressure scenario, including digital-pressure scenarios.

Canvas layout: Left side (450px) shows a scenario prompt (e.g., "A group chat keeps pressuring you to send a photo you don't want to send") with a response-building area. Right side (150px) shows a palette of response-phrase tokens (e.g., "No, I'm not doing that," "I already said no," "leave the group chat," "tell a trusted adult," "keep arguing until they stop") and a feedback panel.

Interactive controls: Drag response tokens into the response-building area in the order the student would use them; "Check My Response" button evaluates whether the sequence reflects sound boundary-setting strategy (clear statement, calm repetition if needed, use of digital tools or exit, and involving a trusted adult when appropriate); "Reset" button; "See a Strong Example Response" button.

Default parameters: Empty response area at start; six scenarios cycle through, ranging from in-person to digital-only pressure.

Instructional Rationale: Applying boundary-setting strategy to a realistic pressure scenario by constructing a response sequence is an Apply-level task, so a response-builder with constraint feedback is used rather than a passive list of tips, letting students practice sequencing a real response.

Implementation notes: p5.js. Scenario and token data stored as arrays of objects. Responsive canvas that reflows on window resize. No scenario content depicts explicit imagery or graphic threats.
```

## Related Resources

- [Chapter 7: Digital Safety and School Safety](../../bands/grade-6-8/chapters/07-digital-safety-and-school-safety/index.md)
