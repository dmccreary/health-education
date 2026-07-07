---
title: Consent Versus Coercion Decision Path
description: Students trace a request through a decision path to differentiate a consent-respecting response from a coercive one, based on how a "no" or hesitation is handled.
status: scaffold
library: Mermaid
bloom_level: Analyze (L4)
---

# Consent Versus Coercion Decision Path



<iframe src="main.html" width="100%" height="600"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md).

```text
Type: workflow
**sim-id:** consent-versus-coercion-decision-path<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: differentiate, examine, distinguish

Learning objective: Students trace a request through a decision path to differentiate a consent-respecting response from a coercive one, based on how a "no" or hesitation is handled.

Visual style: Mermaid flowchart — start node ("A Request Is Made"), decision diamond ("How Is a No or Hesitation Handled?"), two branching outcome paths.

Steps: (1) Start node, click reveals requests themselves are normal; (2) decision diamond, click reveals this moment determines the outcome; (3a) "Consent" branch, click reveals the answer is accepted without argument; (3b) "Coercion" branch, click reveals the answer is challenged or overridden; (4) end nodes "Healthy Interaction" and "Warning Sign," each with a one-line takeaway.

Every node must have a Mermaid `click` directive calling an infobox function.

Color coding: Green for the consent branch, orange/red for the coercion branch, neutral blue for shared starting nodes.

Implementation: Mermaid flowchart syntax with `click NodeId call showInfo("key")` for every node; infobox text in a JS lookup object.
```

## Related Resources

- [Chapter 2: Relationships, Boundaries, and Consent](../../bands/grade-6-8/chapters/02-relationships-boundaries-and-consent/index.md)
