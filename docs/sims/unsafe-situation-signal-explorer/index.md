---
title: Unsafe Situation Signal Explorer
description: Students examine situations across relationships, technology, and physical safety, and distinguish which signals indicate an unsafe situation worth reporting.
status: scaffold
library: p5.js
bloom_level: Analyze (L4)
---

# Unsafe Situation Signal Explorer



<iframe src="main.html" width="100%" height="482px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md).

```text
Type: infographic
**sim-id:** unsafe-situation-signal-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, distinguish, organize

Learning objective: Students examine situations across relationships, technology, and physical safety, and distinguish which signals indicate an unsafe situation worth reporting.

Canvas layout: Full width (650px) grid of 9 clickable icons in three columns (Relationships, Technology, Physical Safety); bottom strip (120px) infobox.

Visual elements: Three icon cards per column (Relationships: isolation, repeated pressure, ignored "no"; Technology: stranger contact, photo shared without permission, secretive message; Physical Safety: unfamiliar adult on campus, uneasy feeling, mismatched emergency routine).

Interactive controls: Click any icon to reveal a description and why it's worth acting on; "Show All Signals" and "Reset" buttons.

Behavior: Clicking "repeated pressure" shows "Someone continuing to ask after you've said no is coercion." Clicking "uneasy feeling" shows "Trust this feeling — tell a trusted adult."

Instructional Rationale: Analyze-level objective requiring students to organize and distinguish signals across domains via a categorized click-to-reveal grid.

Implementation notes: p5.js; icon objects grouped by column with label, description, and reasoning string.
```

## Related Resources

- [Chapter 6: Personal Safety And Violence Prevention](../../bands/grade-5/chapters/06-personal-safety-and-violence-prevention/index.md)
