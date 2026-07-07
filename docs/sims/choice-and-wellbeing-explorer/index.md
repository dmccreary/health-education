---
title: Choice and Wellbeing Explorer
description: Students explain how everyday personal choices affect mental and emotional wellbeing by adjusting sliders for common daily choices and observing a simple wellbeing meter respond.
status: scaffold
library: p5.js
bloom_level: Understand (L2)
---

# Choice and Wellbeing Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Mental And Emotional Health](../../bands/grade-3/chapters/07-mental-and-emotional-health/index.md).

```text
Type: microsim
**sim-id:** choice-and-wellbeing-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, describe, interpret

Learning objective: Students explain how everyday personal choices affect mental and emotional wellbeing by adjusting sliders for common daily choices and observing a simple wellbeing meter respond.

Canvas layout: Left side (350px) has four labeled sliders — Hours of Sleep (4-10), Time Being Active (0-60 min), Time Talking With Someone Caring (0-30 min), Quiet Screen-Free Time (0-30 min). Right side (250px) shows a semicircle "Wellbeing Meter" gauge with a needle moving from "Running on Empty" (red) to "Feeling Good" (green), plus a short explanation text box.

Interactive controls: Four draggable sliders; a "Reset to Example Day" button.

Default parameters: Sleep 7 hours, Active 20 min, Talking 10 min, Quiet time 10 min — meter starts in the middle "Okay" zone.

Data Visibility Requirements: As a student drags any slider up, the needle moves toward green and a one-sentence plain-language reason appears (e.g., "More sleep helps your brain rest and reset."). Dragging down moves the needle toward red with a matching reason. No single slider can max the meter alone, reinforcing that wellbeing comes from combined healthy choices.

Instructional Rationale: Understand-level objective, so the design favors direct manipulation with immediate, concrete feedback over any competitive or scored element.

Implementation notes: Use p5.js. Keep reasons short, reassuring, and non-judgmental.
```

## Related Resources

- [Chapter 7: Mental And Emotional Health](../../bands/grade-3/chapters/07-mental-and-emotional-health/index.md)
