---
title: Match the Body Language
description: Students identify the feeling behind common nonverbal cues by matching simple cartoon body-language poses to the feeling they most likely show.
image: /sims/match-the-body-language/match-the-body-language.png
og:image: /sims/match-the-body-language/match-the-body-language.png
twitter:image: /sims/match-the-body-language/match-the-body-language.png
social:
   cards: false
library: p5.js
bloom_level: Remember (L1)
grade_band: Grade 3
---

# Match the Body Language

<iframe src="main.html" width="100%" height="454px" scrolling="no"></iframe>

[Run the Match the Body Language MicroSim Fullscreen](main.html){ .md-button .md-button--primary }

You can embed this MicroSim in your own course website with this iframe:

```html
<iframe src="./main.html" width="100%" height="454px" scrolling="no"></iframe>
```

## About this MicroSim

**Match the Body Language** is an interactive MicroSim for this health-education textbook.

Students identify the feeling behind common nonverbal cues by matching simple cartoon body-language poses to the feeling they most likely show.

Use the controls in the panel below the drawing to interact with the model, then talk through what changed and why. The MicroSim is width-responsive and can be embedded in any course page with the iframe shown above.

**Bloom's Taxonomy level:** Remember (L1) — identify, recognize, name

## Lesson Plan

### Audience

This MicroSim is designed for **Grade 3**. For the K-3 bands the teacher
typically drives the activity on a shared screen; older students can explore
the MicroSim independently.

### Learning Objective

Students identify the feeling behind common nonverbal cues by matching simple cartoon body-language poses to the feeling they most likely show.

This activity targets **Bloom's Remember (L1)** (identify, recognize, name).

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
[Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md).

```text
Type: microsim
**sim-id:** match-the-body-language<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify the feeling behind common nonverbal cues by matching simple cartoon body-language poses to the feeling they most likely show.

Canvas layout: Left side (350px) shows one large cartoon figure at a time in a clear pose (arms crossed and frowning, shoulders slumped and looking down, wide smile with open arms, tense shoulders with clenched fists). Right side (250px) shows four feeling-word buttons (e.g., "Frustrated," "Sad," "Happy," "Angry") plus a feedback box.

Interactive controls: Click a feeling-word button to answer; "Next Pose" and "Reset" buttons.

Default parameters: Starts on pose 1 of 6 prepared poses, presented in random order each reset.

Behavior: Clicking a feeling reveals whether it matches the pose and a one-sentence explanation of the specific cue (e.g., "Crossed arms and a frown often mean someone feels frustrated or closed off.").

Instructional Rationale: Remember-level objective calling for straightforward recognition, so simple matching with immediate feedback is appropriate — no timer or scoring pressure.

Implementation notes: Use p5.js with simple flat cartoon figures, no realistic faces. Keep the tone neutral; note that body language is a clue, not a certainty, since people can feel one way and look another.
```

## References

- [Chapter 8: Communication And Goals](../../bands/grade-3/chapters/08-communication-and-goals/index.md)
- [List of all MicroSims](../index.md)
- [p5.js Reference](https://p5js.org/reference/) (for the interactive graphics library)
