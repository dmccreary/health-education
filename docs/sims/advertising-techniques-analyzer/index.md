---
title: Advertising Techniques Analyzer
description: Students examine and deconstruct a set of realistic, text-described advertising scenarios to identify which documented targeting or persuasion technique (youth-appealing flavors/design, community targeting, association imagery, sponsorship/cultural presence) each one uses.
image: /sims/advertising-techniques-analyzer/advertising-techniques-analyzer.png
og:image: /sims/advertising-techniques-analyzer/advertising-techniques-analyzer.png
twitter:image: /sims/advertising-techniques-analyzer/advertising-techniques-analyzer.png
social:
   cards: false
library: p5.js
bloom_level: Analyze (L4)
grade_band: Grades 6-8
---

# Advertising Techniques Analyzer

<iframe src="main.html" width="100%" height="489px" scrolling="no"></iframe>

[Run the Advertising Techniques Analyzer MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="489px" scrolling="no"></iframe>
```

## About this MicroSim

**Advertising Techniques Analyzer** is an interactive MicroSim for this health-education textbook.

Students examine and deconstruct a set of realistic, text-described advertising scenarios to identify which documented targeting or persuasion technique (youth-appealing flavors/design, community targeting, association imagery, sponsorship/cultural presence) each one uses.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Analyze (L4) — examine, distinguish, deconstruct

## Lesson Plan

### Audience

This MicroSim is designed for **Grades 6-8**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students examine and deconstruct a set of realistic, text-described advertising scenarios to identify which documented targeting or persuasion technique (youth-appealing flavors/design, community targeting, association imagery, sponsorship/cultural presence) each one uses.

This activity targets **Bloom's Analyze (L4)** (examine, distinguish, deconstruct).

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
[Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md).

```text
Type: microsim
**sim-id:** advertising-techniques-analyzer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, deconstruct

Learning objective: Students examine and deconstruct a set of realistic, text-described advertising scenarios to identify which documented targeting or persuasion technique (youth-appealing flavors/design, community targeting, association imagery, sponsorship/cultural presence) each one uses.

Layout: A deck of 8 short, text-based scenario cards describing a fictional but realistic advertising scenario (e.g., "A new vape flavor called 'Blue Raspberry Blast' is advertised with bright cartoon-style packaging" or "A tobacco company sponsors a community music festival in a specific neighborhood every year") alongside four labeled technique zones: Youth-Appealing Flavors/Design, Targeted Community Marketing, Association Imagery, Sponsorship/Cultural Presence.

Interactive controls: Learner drags or clicks each scenario card onto the technique zone it best matches; immediate feedback confirms the match and explains, in one or two sentences, the documented research or historical pattern behind that technique; "Reset" button; running tally of correctly matched cards.

Default parameters: Deck order randomized each session; no zone pre-selected.

Instructional Rationale: This is an Analyze-level objective requiring learners to deconstruct realistic scenarios into underlying persuasion/targeting techniques; a sorting activity with explanatory feedback builds transferable media-literacy skill rather than simply telling students the conclusion.

Implementation notes: p5.js. All scenario text uses fictional product/brand names and is based on well-documented, publicly reported industry practices rather than any single real brand. Responsive canvas that stacks technique zones vertically on narrow screens.
```

## References

- [Chapter 10: Substance Use Disorder, Recovery, and Policy](../../bands/grade-6-8/chapters/10-substance-use-disorder-recovery-and-policy/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
