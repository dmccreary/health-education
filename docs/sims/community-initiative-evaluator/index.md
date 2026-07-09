---
title: Community Nutrition Initiative Evaluator
description: Students assess five community nutrition initiatives against a rubric of reach, sustainability, and cultural fit, then compare their scores to a reasoned model evaluation.
status: complete
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grade 9-12
---

# Community Nutrition Initiative Evaluator

<iframe src="main.html" width="100%" height="622px" scrolling="no"></iframe>

[Run the Community Nutrition Initiative Evaluator MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="622px" scrolling="no"></iframe>
```

## About this MicroSim

**Community Nutrition Initiative Evaluator** is an interactive MicroSim for this
health-education textbook. Students select one of five real-world-style community
nutrition initiatives, read its illustrative case description, and rate it on
three rubric dimensions — **Reach**, **Sustainability**, and **Cultural Fit** —
using 1-to-5 sliders. A live **Overall Priority Score** bar updates as the sliders
move, showing how weighting different criteria changes which initiative would be
prioritized for funding. Submitting a rating reveals a reasoned **model evaluation**
so students can see where their judgment matched or diverged.

Each dimension is color-coded: **green (4-5)**, **yellow (2-3)**, and **red (1)**.

**Bloom's Taxonomy level:** Evaluate (L5) — assess, prioritize, recommend

!!! note "Case details are illustrative"
    The five case narratives combine details drawn from common program models
    (mobile market schedules, SNAP match caps, garden enrollment, cooking-class
    attendance, policy-council membership). They are teaching examples for
    evaluation practice, not descriptions of specific real organizations.

## Specification

The full specification below is extracted from
[Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md).

```text
Type: infographic

sim-id: community-initiative-evaluator
Library: p5.js
Status: Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: assess, prioritize, recommend

Purpose: Let students score real-world-style community nutrition
initiatives against a rubric of reach, sustainability, and cultural fit,
then compare their scores to a reasoned model evaluation.

Layout: Five initiative cards (Mobile Produce Market, SNAP Matching at
Farmers Market, School Garden Program, Community Cooking Education,
Local Food Policy Council) arranged in a grid; clicking a card opens a
detail panel with a short case description

Interactive elements:
- Click a card to reveal its case description (funding model, population
  served, time in operation)
- Three sliders per selected initiative: Reach (1-5), Sustainability
  (1-5), Cultural Fit (1-5), which the student sets based on the case
  description
- "Submit Rating" button reveals a model rating with justification for
  comparison, highlighting where the student's reasoning matched or
  diverged
- Running "Overall Priority Score" bar recalculates live as sliders move,
  demonstrating how weighting different criteria changes which
  initiative would be prioritized for funding

Data to display: five short case narratives with realistic details drawn
from common program models (mobile market schedule/coverage, SNAP match
caps, garden program enrollment, cooking class attendance, policy
council membership)

Color coding: green (4-5), yellow (2-3), red (1) for each rubric
dimension

Responsive behavior: card grid collapses to a single column on narrow
screens; sliders remain full-width and usable via touch

Implementation: HTML/CSS/JavaScript with p5.js for the live-updating
priority score bar
```

## Related Resources

- [Food and Nutrition](../../bands/grade-9-12/chapters/01-food-and-nutrition/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
