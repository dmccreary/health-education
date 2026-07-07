---
title: When to Tell a Trusted Adult
description: Students recall common signs of emotional struggle and recognize that telling a trusted adult is always the right response.
image: /sims/when-to-tell-trusted-adult/when-to-tell-trusted-adult.png
og:image: /sims/when-to-tell-trusted-adult/when-to-tell-trusted-adult.png
twitter:image: /sims/when-to-tell-trusted-adult/when-to-tell-trusted-adult.png
social:
   cards: false
library: Mermaid
bloom_level: Remember (L1)
grade_band: Grade 1
---

# When to Tell a Trusted Adult

<iframe src="main.html" width="100%" height="528px" scrolling="no"></iframe>

[Run the When to Tell a Trusted Adult MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="528px" scrolling="no"></iframe>
```

## About this MicroSim

**When to Tell a Trusted Adult** is an interactive MicroSim for this health-education textbook.

Students recall common signs of emotional struggle and recognize that telling a trusted adult is always the right response.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — recall, identify, recognize

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 1**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students recall common signs of emotional struggle and recognize that telling a trusted adult is always the right response.

This activity targets **Bloom's Remember (L1)** (recall, identify, recognize).

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
**Remember**-level objective rather than a lucky guess.

## Specification

The full specification below was extracted from
[Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md).

```text
Type: workflow
**sim-id:** when-to-tell-trusted-adult<br/>
**Library:** Mermaid<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, recognize

Learning objective: Students recall common signs of emotional struggle and recognize that telling a trusted adult is always the right response.

Purpose: Show a simple, reassuring decision path from noticing a sign to getting help

Visual style: Simple vertical flowchart with rounded boxes, calm colors, no decision diamonds that could feel like a "test" — every path leads to the same caring outcome

Steps:
1. Start: "I notice something" — hover text: "Maybe a friend seems very sad for many days, or doesn't want to play anymore, or says 'I don't feel good inside.'"
2. Process: "I feel it myself, or I see it in someone else" — hover text: "It's just as important to notice this in yourself as it is to notice it in a friend."
3. Process: "I tell a trusted adult" — hover text: "A parent, teacher, school counselor, or another caring grown-up at home or school."
4. End: "The trusted adult helps" — hover text: "Trusted adults know how to help, or how to find more support — you don't have to solve it alone."

Every node includes a click handler opening an infobox with the hover text described above (Mermaid `click` directive on each node).

Color coding:
- Soft blue: noticing steps
- Soft green: telling a trusted adult
- Soft gold: getting help (end state)

Implementation: Mermaid flowchart with `click NodeId call showInfo("text")` directives on all four nodes, each opening an infobox with the corresponding hover text
```

## References

- [Chapter 3: Understanding and Talking About Feelings](../../bands/grade-1/chapters/03-feelings/index.md)
- [List of all MicroSims](../index.md)
- [Mermaid documentation](../index.md)
