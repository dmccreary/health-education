---
title: Symptom Visibility and Testing Decision Path
description: Students analyze why the presence or absence of symptoms cannot reliably indicate STI status, concluding that routine testing is the only dependable path to an accurate answer.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Symptom Visibility and Testing Decision Path



<iframe src="main.html" width="100%" height="602px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md).

```text
Type: workflow
**sim-id:** symptom-visibility-testing-decision-path<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: examine, differentiate, distinguish

Learning objective: Students analyze why the presence or absence of symptoms cannot reliably indicate STI status, concluding that routine testing is the only dependable path to an accurate answer.

Visual style: Mermaid flowchart — start node ("Person Is Sexually Active"), decision diamond ("Are Symptoms Present?"), two branches that both route to the same end node.

Steps: (1) Start node, click reveals this applies to any sexually active person; (2) decision diamond, click reveals many STIs cause no symptoms at all; (3a) "Symptoms Present" branch, click reveals symptoms alone still require testing to confirm which infection, if any; (3b) "No Symptoms" branch, click reveals absence of symptoms does not rule out an STI; (4) shared end node "Routine Testing," click reveals testing is the only reliable way to know STI status regardless of symptoms.

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Blue for start/shared nodes, neutral gray for both branches (deliberately not color-coded as "safe" vs "risk" since both converge on the same recommendation).

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object. No anatomical imagery — text-only nodes.
```

## Related Resources

- [Chapter 3: Healthcare Access and Sexual Health](../../bands/grade-6-8/chapters/03-healthcare-access-and-sexual-health/index.md)
