---
title: How Consent Law Maps to Ethical Principles
description: Students interpret why each category of consent law
status: scaffold
library: Mermaid
bloom_level: Understand (L2)
---

# How Consent Law Maps to Ethical Principles



<iframe src="main.html" width="100%" height="482px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md).

```text
Type: workflow

**sim-id:** consent-law-principle-map<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy Level: Understand (L2)
Bloom Verb: explain, interpret, classify

Learning objective: Students interpret why each category of consent law
exists by classifying it against the underlying ethical principle
(freely given, informed) it is designed to protect, and explain the role
of jurisdiction in which laws apply.

Visual style: Mermaid flowchart, top-to-bottom, click handlers on every
node (`click NodeId call showInfo("term")`)

Nodes (all clickable):
1. "Ethical Principle: Consent Must Be Freely Given and Informed" — click
   text: "The foundation this whole chapter builds — the ethical
   requirement law is designed to protect"
2. "Age-of-Consent Laws" — click text: "Protects the freely-given/informed
   principle when a significant age gap involving a minor is present;
   specific ages vary by state"
3. "Incapacitation Laws" — click text: "Protects the freely-given/informed
   principle when alcohol, drugs, unconsciousness, or sleep remove a
   person's ability to understand or agree"
4. "State and Local Law" — click text: "Sets the specific ages,
   definitions, and rules; varies by state and locality — check your own
   state's specifics with a qualified source"
5. "Tribal Jurisdiction" — click text: "Many tribal nations are sovereign
   governments with their own legal systems; jurisdiction can depend on
   location and the people involved"
6. "Federal Law" — click text: "Applies in certain contexts, such as
   crossing state lines or on certain federal lands"

Connections: 1→2, 1→3, 2→4, 2→5, 2→6, 3→4, 3→5, 3→6

Color coding: gold for the ethical-principle root node, blue for the two
law-category nodes, gray for the three jurisdiction nodes

Interactive features: click any node for its infobox explaining what it
means and how it connects back to the ethical principle at the root

Implementation: Mermaid.js flowchart with JavaScript click bindings to a
custom showInfo() function
```

## Related Resources

- [Chapter 3: Consent and Boundaries](../../bands/grade-9-12/chapters/03-consent-and-boundaries/index.md)
