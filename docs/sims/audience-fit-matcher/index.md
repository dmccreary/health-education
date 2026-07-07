---
title: Audience Fit Matcher
description: Students judge which version of a health message best fits a given audience, and justify why the wording and format matter.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Audience Fit Matcher



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md).

```text
Type: microsim
**sim-id:** audience-fit-matcher<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, critique, recommend

Learning objective: Students judge which version of a health message best fits a given audience, and justify why the wording and format matter.

Canvas layout: Left (450px) an audience card (e.g., "Kindergarten class," "Your own 5th grade class," "School staff meeting"); right (200px) three candidate message versions to choose from, plus a "Why?" panel.

Visual elements: Audience card with an icon and short description; three message-version buttons showing different tones/wording for the same core idea (e.g., simple/picture-based, peer-level, formal/data-based).

Interactive controls: Click the best-fit message version for the shown audience; "Why?" reveals whether the choice fits and explains the mismatch in the other two versions; "Next Audience" cycles through 5 audience types.

Behavior: For "Kindergarten class," selecting the simple/picture-based version reveals "Right fit — short words and a picture keep young kids engaged." Selecting the formal/data-based version reveals "Too complex — kindergartners need simple, concrete language."

Instructional Rationale: Evaluate-level objective, so students must judge fit against criteria (age, setting, tone) and justify the choice rather than simply picking a message at random.

Implementation notes: p5.js; audience objects paired with three message-version objects, each flagged best-fit or mismatched with a reason string.
```

## Related Resources

- [Chapter 7: Health Skills And Goal Setting](../../bands/grade-5/chapters/07-health-skills-and-goal-setting/index.md)
