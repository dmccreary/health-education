---
title: Allergic Reaction Signs Explorer
description: Students identify the signs of an allergic reaction across the skin, breathing, digestive system, and whole body, and recognize which signs signal an emergency.
status: scaffold
library: p5.js
bloom_level: Remember (L1)
---

# Allergic Reaction Signs Explorer



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md).

```text
Type: infographic
**sim-id:** allergic-reaction-signs-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, list

Learning objective: Students identify the signs of an allergic reaction across the skin, breathing, digestive system, and whole body, and recognize which signs signal an emergency.

Canvas layout: Full width (650px) illustrated figure with 8 clickable hotspots; bottom strip (100px) infobox showing sign and severity.

Visual elements: Flat-style illustrated person with hotspots at face/lips, skin (arm), throat, chest, stomach, whole-body icon (dizziness), plus a "Mild"/"Emergency" legend. Hotspots color-coded yellow (mild) or red (emergency).

Interactive controls: Click any hotspot to reveal sign/description/severity; "Show All Signs" button; "Reset" button.

Default parameters: No hotspot selected on load.

Behavior: Face/lips shows "Swelling of face, lips, or tongue — Emergency"; skin shows "Hives or redness — Mild to moderate"; throat shows "Throat tightness — Emergency"; chest shows "Coughing, wheezing, trouble breathing — Emergency"; stomach shows "Cramps, nausea, vomiting — Mild to moderate"; whole-body icon shows "Dizziness or weakness — Emergency".

Instructional Rationale: Remember-level objective, so click-to-reveal labeling builds a clear factual list rather than animation.

Implementation notes: p5.js; hotspot objects (x, y, radius, sign, severity, description) colored by severity; infobox renders in bottom strip on click.
```

## Related Resources

- [Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md)
