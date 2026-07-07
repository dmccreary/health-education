---
title: Commercial Vs. Traditional Tobacco Comparison Tool
description: Students evaluate why commercial tobacco addiction and
image: /sims/commercial-vs-traditional-tobacco-comparison-hs/commercial-vs-traditional-tobacco-comparison-hs.png
og:image: /sims/commercial-vs-traditional-tobacco-comparison-hs/commercial-vs-traditional-tobacco-comparison-hs.png
twitter:image: /sims/commercial-vs-traditional-tobacco-comparison-hs/commercial-vs-traditional-tobacco-comparison-hs.png
social:
   cards: false
library: p5.js
bloom_level: Evaluate (L5)
grade_band: Grades 9-12
---

# Commercial Vs. Traditional Tobacco Comparison Tool

<iframe src="main.html" width="100%" height="514px" scrolling="no"></iframe>

[Run the Commercial Vs. Traditional Tobacco Comparison Tool MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="514px" scrolling="no"></iframe>
```

## About this MicroSim

**Commercial Vs. Traditional Tobacco Comparison Tool** is an interactive MicroSim for this health-education textbook.

Students evaluate why commercial tobacco addiction and

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Evaluate (L5) — evaluate, distinguish, justify

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 9-12**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students evaluate why commercial tobacco addiction and

This activity targets **Bloom's Evaluate (L5)** (evaluate, distinguish, justify).

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
**Evaluate**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md).

```text
Type: infographic

**sim-id:** commercial-vs-traditional-tobacco-comparison-hs<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy Level: Evaluate (L5)
Bloom Verb: evaluate, distinguish, justify

Learning objective: Students evaluate why commercial tobacco addiction and
traditional/ceremonial tobacco use are distinct practices across purpose,
preparation, frequency, and meaning, and justify why public health
messaging deliberately separates the two.

Layout: Two side-by-side columns, "Commercial Tobacco" and "Traditional
Tobacco/Plant Medicine," each with four clickable rows matching the
chapter table (Purpose, Preparation, Frequency, Meaning), plus a closing
reflection prompt

Interactive features: Clicking a row opens a paired infobox with both
columns' content shown together for direct comparison; a closing "Why
Does Public Health Separate These?" button reveals an infobox explaining
that the term "commercial tobacco" exists specifically to target
manufactured, addiction-engineered products without stigmatizing sacred
practice; an optional short-response text box invites the learner to
justify, in their own words, why conflating the two is inaccurate

Default state: No row selected; prompt reads "Click a row to compare
commercial and traditional tobacco use."

Color scheme: Left column in neutral gray-blue (manufactured/industrial
association), right column in warm earth tones (cultural/ceremonial
association); infobox text, not color, carries the evaluative nuance

Implementation: p5.js with two columns of clickable rectangles; responsive
canvas that stacks columns vertically on narrow screens. Content
restriction: no depiction of tobacco products, smoking actions, vaping
devices, or ceremonial objects — text-based comparison only, to remain
respectful of the cultural practice being described.
```

## References

- [Chapter 10: Substances - Effects and Safer Choices](../../bands/grade-9-12/chapters/10-substances-effects-and-safer-choices/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
