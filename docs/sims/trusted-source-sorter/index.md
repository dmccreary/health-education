---
title: Trusted Source or Not?
description: Students determine the validity and reliability of a simple health claim by evaluating its source and comparing it against what a trusted adult, doctor, or book would say.
status: scaffold
library: p5.js
bloom_level: Evaluate (L5)
---

# Trusted Source or Not?



<iframe src="main.html" width="100%" height="482px"></iframe>

[Run MicroSim in Fullscreen](main.html){ .md-button .md-button--primary }

## Specification

The full specification below is extracted from
[Chapter 1: Foundations Of Health](../../bands/grade-3/chapters/01-foundations-of-health/index.md).

```text
Type: microsim
**sim-id:** trusted-source-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, validate

Learning objective: Students determine the validity and reliability of a simple health claim by evaluating its source and comparing it against what a trusted adult, doctor, or book would say.

Canvas layout:
- Top area (150px): One health claim card shown at a time, with its source labeled (e.g., "School nurse says: wash your hands before eating," "Online ad says: this candy makes you run faster," "A book from the library says: sleep helps your brain grow")
- Middle area (250px): Two labeled bins — "Trustworthy Source" and "Needs Checking"
- Bottom strip (100px): Explanation caption and "Next Claim" button

Visual elements:
- 8 claim cards cycling one at a time, mixing clearly trustworthy sources (doctor, school nurse, reliable book, parent) with clearly untrustworthy or unclear ones (online ad, unclear rumor, stranger's post, exaggerated commercial)

Interactive controls:
- Click or drag the claim card into the matching bin
- Button: "Next Claim"
- Button: "Reset"

Default parameters:
- First claim: "School nurse says: wash your hands before eating" (clear trustworthy example, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the claim card with its stated source, no judgment yet
  Stage 2: After the student picks a bin, reveal whether the choice matches experts' view and a one-sentence reason ("A school nurse is trained to give health advice, so this is a trustworthy source.")
  Stage 3: Show a short reminder question: "Who said it, why did they say it, and does it match what trusted adults say?"

Behavior:
- Correct placement: bin glows, gentle chime, reason caption appears
- Incorrect placement: calm prompt, "Look again — who is giving this health claim, and why?"
- After all claims, a summary caption reminds students that checking the source is the first step before believing or sharing a health claim

Instructional Rationale: Determining the validity and reliability of health information is Grade 3's first genuine Evaluate-level benchmark, so the pattern uses a judgment sorter with a revealed reason rather than passive viewing. Students must actively assess each source and compare it against a simple trusted standard, which matches the Evaluate-level demand of judging and validating.

Implementation notes: Use p5.js. Keep claim cards short and readable aloud. Avoid frightening or shaming language — the goal is confident, curious checking, not fear of every message.
```

## Related Resources

- [Chapter 1: Foundations Of Health](../../bands/grade-3/chapters/01-foundations-of-health/index.md)
