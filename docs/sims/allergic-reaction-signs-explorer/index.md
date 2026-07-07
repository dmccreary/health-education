---
title: Allergic Reaction Signs Explorer
description: Students identify the signs of an allergic reaction across the skin, breathing, digestive system, and whole body, and recognize which signs signal an emergency.
image: /sims/allergic-reaction-signs-explorer/allergic-reaction-signs-explorer.png
og:image: /sims/allergic-reaction-signs-explorer/allergic-reaction-signs-explorer.png
twitter:image: /sims/allergic-reaction-signs-explorer/allergic-reaction-signs-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Remember (L1)
grade_band: Grade 5
---

# Allergic Reaction Signs Explorer

<iframe src="main.html" width="100%" height="492px" scrolling="no"></iframe>

[Run the Allergic Reaction Signs Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="492px" scrolling="no"></iframe>
```

## About this MicroSim

**Allergic Reaction Signs Explorer** is an interactive MicroSim for this health-education textbook.

Students identify the signs of an allergic reaction across the skin, breathing, digestive system, and whole body, and recognize which signs signal an emergency.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — identify, recognize, list

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 5**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify the signs of an allergic reaction across the skin, breathing, digestive system, and whole body, and recognize which signs signal an emergency.

This activity targets **Bloom's Remember (L1)** (identify, recognize, list).

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
**Remember**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
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

## References

- [Chapter 5: Personal Health And Wellness](../../bands/grade-5/chapters/05-personal-health-and-wellness/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
