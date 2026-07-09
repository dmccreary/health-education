---
title: Dietary Guidelines Comparison Explorer
description: Students analyze three real dietary guideline systems (USDA MyPlate, Canada's Food Guide, a traditional Indigenous seasonal food system) to differentiate shared nutritional principles from culturally specific presentation choices.
image: /sims/dietary-guidelines-comparison-explorer/dietary-guidelines-comparison-explorer.png
og:image: /sims/dietary-guidelines-comparison-explorer/dietary-guidelines-comparison-explorer.png
twitter:image: /sims/dietary-guidelines-comparison-explorer/dietary-guidelines-comparison-explorer.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 6-8
---

# Dietary Guidelines Comparison Explorer

<iframe src="main.html" width="100%" height="370px" scrolling="no"></iframe>

[Run the Dietary Guidelines Comparison Explorer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="370px" scrolling="no"></iframe>
```

## About this MicroSim

**Dietary Guidelines Comparison Explorer** is an interactive MicroSim for this health-education textbook.

Students analyze three real dietary guideline systems (USDA MyPlate, Canada's Food Guide, a traditional Indigenous seasonal food system) to differentiate shared nutritional principles from culturally specific presentation choices.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — compare, contrast, examine, differentiate

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students analyze three real dietary guideline systems (USDA MyPlate, Canada's Food Guide, a traditional Indigenous seasonal food system) to differentiate shared nutritional principles from culturally specific presentation choices.

This activity targets **Bloom's Analyze (L4)** (compare, contrast, examine, differentiate).

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
**Analyze**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md).

```text
Type: microsim
**sim-id:** dietary-guidelines-comparison-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: compare, contrast, examine, differentiate

Learning objective: Students analyze three real dietary guideline systems (USDA MyPlate, Canada's Food Guide, a traditional Indigenous seasonal food system) to differentiate shared nutritional principles from culturally specific presentation choices.

Layout: Three selectable tabs (one per guideline system), each showing a simplified plate/model graphic, above a persistent "Shared Principles" panel and a per-tab "What's Different Here" panel.

Visual elements: MyPlate tab (four food-group sections plus dairy circle); Canada's Food Guide tab (three sections plus a water glass icon); Indigenous seasonal food system tab (a circular seasonal wheel showing wild rice, fish, venison, corn/beans/squash, and berries by harvest season).

Interactive controls: Click tabs to switch systems; click any food-group icon for an infobox on that group plus one cultural/geographic reason for its presentation; toggle "Show Shared Principles" to highlight common science (variety, limiting added sugar, whole foods) across all three tabs at once.

Instructional Rationale: Comparing structures and attributing differences to cultural/geographic causes is Analyze-level, so a tabbed comparison with an always-visible shared-principles panel keeps agreement and variation both in view simultaneously.

Implementation notes: p5.js. Each guideline system stored as an object with an array of food-group sub-objects (label, icon, explanation); a shared principles array renders identically regardless of active tab.
```

## References

- [Chapter 1: Health Foundations and Nutrition](../../bands/grade-6-8/chapters/01-health-foundations-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
