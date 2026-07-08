---
title: Making Healthy Choices
description: Positive and negative influences on health, recognizing when a health decision is needed, and identifying personal health needs and wants, ending with stating one personal health goal, for Kindergarten health education.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 14:43:17
version: 0.09
---

# Making Healthy Choices

## Summary

This closing chapter introduces positive and negative influences on health, recognizing when a health decision is needed, and identifying personal health needs and wants. Students finish by stating one personal health goal.

## Concepts Covered

1. Positive Health Influence
2. Negative Health Influence
3. Health Decision
4. Personal Health Needs
5. Personal Health Wants
6. Personal Health Goal

## Prerequisites

Builds on [Chapter 1: Health And Food](../01-health-and-food/index.md) for the foundational idea of health, and draws on habits from [Chapter 4: Staying Healthy Every Day](../04-staying-healthy/index.md) and [Chapter 5: Staying Safe](../05-staying-safe/index.md) as examples of healthy choices.

---

## Teacher Notes: How to Use This Chapter

This chapter is written for **you, the teacher**, to read aloud, narrate, and guide from — kindergartners are not expected to read this page independently. It is also the last chapter of the Kindergarten book, so it pulls together ideas from earlier chapters (food, family, feelings, healthy habits, and safety) into one simple idea: some things help our health, some things hurt it, and we get to notice the difference and make a choice.

!!! mascot-welcome "Let's Learn About Healthy Choices!"
    ![Scout waving hello](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hi again, friend! Today we're going to notice things that help our health and things that can hurt it. Then we'll practice knowing when it's time to make a health choice, and we'll think about what our bodies need versus what they just want. By the end, you'll pick one healthy goal all your own!

### Positive Health Influence

A **positive health influence** is anything that helps a person's health get better or stay good. People, places, and habits can all be positive health influences — a parent who packs a fruit snack, a friend who invites you to play outside, or a teacher who reminds the class to wash hands are all positive health influences.

Talking points for read-aloud:

- Explain that an influence is something that "pushes" our health in one direction, like a nudge.
- Give familiar examples from earlier chapters: eating foods from the food groups, moving your body every day, washing hands, and following safety rules are all shaped by positive influences.
- Ask the class: "Who is someone in your life who helps you make healthy choices?" Family members, teachers, doctors, and friends are all good answers.

### Negative Health Influence

A **negative health influence** is anything that pushes a person's health in a worse direction — something that could make a person feel unwell, unsafe, or unhealthy over time. A friend who dares you to skip a helmet, a food that has gone bad, or too much screen time without breaks are all examples of negative health influences.

A negative health influence is not automatically "bad" in a scary way — sometimes it is just a habit that needs a healthier choice instead, like remembering to stop and rest during active play.

#### Diagram: Helper or Not? Sorting Health Influences

<iframe src="../../../../sims/helper-or-not-sorting-health-influences/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Helper or Not? Sorting Health Influences MicroSim</summary>
Type: microsim
**sim-id:** helper-or-not-sorting-health-influences<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, sort, compare

Learning objective: Students distinguish a positive health influence from a negative health influence by sorting illustrated scenario cards into two labeled bins, directly supporting benchmark 0.7.2.1.

Canvas layout: Top area (250px) shows one scenario card at a time (e.g., a grown-up handing over a banana snack, a friend reminding you to wear a bike helmet, food left out and looking spoiled, a friend saying "let's skip washing hands"). Bottom area (200px): two bins, "Helps My Health" (green, sun icon) and "Hurts My Health" (gray, cloud icon). Bottom strip (50px): score display and Reset button.

Visual elements: 6 scenario cards cycling one at a time, split 3 positive and 3 negative; bins glow when a card is dragged over them.

Interactive controls: Drag-and-drop the card into the matching bin; Reset button; "Next Scenario" button after each placement.

Default parameters: First scenario is a grown-up offering a piece of fruit (Helps My Health); scenarios appear in a fixed, teacher-predictable order.

Behavior: Correct placement glows green with a chime and rising score, plus a one-line infobox ("Yes! A trusted adult offering fruit helps your health."). Incorrect placement slides back with a friendly explanation. After all 6: "You know how to spot things that help your health and things that don't!"

Instructional Rationale: An Analyze-level objective because the child must examine a scenario and distinguish its category. Immediate, forgiving feedback with a spoken infobox keeps this appropriate for a pre-reader while requiring a genuine comparison judgment.

Implementation notes: p5.js. Each scenario is an object with an illustration reference, correct category, and explanation string. Captions are one short, read-aloud sentence. No scary or graphic imagery — keep all "negative" examples mild and age-appropriate (spoiled food, skipped handwashing, skipped helmet).
</details>

!!! mascot-thinking "Key Idea"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Notice the pattern: the same food, friend, or habit chapter after chapter — eating well, moving daily, washing hands, following safety rules — all came from positive health influences. Now you have a name for that pattern!

### Health Decision

A **health decision** is a choice a person makes that affects their health, like choosing which snack to eat, whether to wear a helmet, or whether to tell a trusted adult about an uncomfortable feeling. Not every choice during the day is a health decision — choosing a health decision means noticing that this particular choice could help or hurt your body, feelings, or safety.

Talking points for read-aloud:

- Explain that a health decision moment is a little pause where a Kindergartner can ask, "Does this choice help my health or hurt it?"
- Remind the class of examples from earlier chapters: deciding to wash hands before eating, deciding to wear a helmet, deciding to tell a trusted adult about a strong feeling.
- Reassure students that grown-ups help with big health decisions, but noticing "this is a health decision moment" is a skill they can start practicing now.

The following table shows a few everyday moments and whether they are a health decision:

| Moment | Is It a Health Decision? | Why |
|---|---|---|
| Choosing a snack | Yes | Food affects how your body feels |
| Choosing a shirt color | No | Doesn't affect health |
| Deciding to wear a helmet | Yes | Protects your body from injury |
| Choosing which book to read first | No | Doesn't affect health |
| Telling a trusted adult about a bad feeling | Yes | Protects your feelings and safety |

#### Diagram: Is This a Health Decision?

<iframe src="../../../../sims/is-this-a-health-decision/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Is This a Health Decision? Interactive Infographic</summary>
Type: infographic
**sim-id:** is-this-a-health-decision<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify

Learning objective: Students recognize when a health-related decision is needed by classifying everyday moments as "health decision" or "not a health decision," supporting benchmark 0.7.5.1.

Canvas layout: Full canvas (500px) shows one illustrated everyday moment at a time (choosing a snack, choosing a shirt color, deciding to wear a helmet, choosing a book, telling a trusted adult about a feeling). Bottom strip (80px): two large buttons, "Health Decision" and "Not a Health Decision," plus a Reset button.

Visual elements: 5 moment cards cycling one at a time; selected button glows and reveals an infobox explaining why.

Interactive controls: Click the button matching the child's guess; "Next Moment" cycles the cards; Reset restarts.

Default parameters: Cards appear in a fixed teacher-predictable order, starting with "choosing a snack."

Behavior: Correct answer glows green with an infobox, e.g., "Yes! What you eat is a health decision because it affects your body." Incorrect answer gently shakes with a kind explanation. After all 5: "You know how to notice when it's time to make a health decision!"

Instructional Rationale: An Understand-level (explain/classify) objective, so the MicroSim uses a step-through pattern with one concrete moment shown at a time rather than continuous animation, letting a teacher pause and discuss each example aloud.

Implementation notes: p5.js. Each moment is an object with an illustration reference, correct classification, and explanation string. Text large (24px+) for read-aloud use.
</details>

### Personal Health Needs

**Personal health needs** are the things a person's body must have to stay healthy, such as food, water, sleep, safety, and love from trusted people. Needs are not optional — a body cannot stay healthy without them.

- Nutritious food and water
- Enough sleep and rest
- A safe place to live and play
- Love and care from trusted adults
- Regular movement and physical activity

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    A simple test for a need: "Could my body stay healthy without this for a long time?" If the answer is no, it's probably a need!

### Personal Health Wants

**Personal health wants** are things a person would like to have or do, but that the body does not require to stay healthy, such as a favorite toy, a special dessert, or extra screen time. Wants can still be enjoyable and even connect to health — like wanting a favorite healthy fruit — but the body can stay healthy without them.

Talking points for read-aloud:

- Explain that needs and wants can sometimes overlap: wanting your favorite fruit is a want about something that is also a need (food).
- Give clear contrasting pairs: needing water versus wanting a sweet treat; needing sleep versus wanting to stay up to watch one more show.
- Reassure the class that wants are not "bad" — the goal is simply telling needs and wants apart.

#### Diagram: Need It or Want It?

<iframe src="../../../../sims/need-it-or-want-it/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>Need It or Want It? Sorting MicroSim</summary>
Type: microsim
**sim-id:** need-it-or-want-it<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify personal health needs, wants, and desires by sorting illustrated items into "Need" and "Want" bins, supporting benchmark 0.7.8.1.

Canvas layout: Top area (250px) shows one illustrated item at a time (glass of water, favorite toy, bed/pillow for sleep, dessert, safety helmet, video game controller). Bottom area (200px): two bins, "I Need This" (blue, heart icon) and "I Want This" (yellow, star icon). Bottom strip (50px): score display and Reset button.

Visual elements: 6 item cards cycling one at a time, split 3 needs and 3 wants; bins glow when a card is dragged over them.

Interactive controls: Drag-and-drop the item into the matching bin; Reset button; "Next Item" button after each placement.

Default parameters: First item is a glass of water (I Need This); items appear in a fixed, teacher-predictable order.

Behavior: Correct placement glows blue or yellow with a chime and a one-line infobox, e.g., "Yes! Your body needs water every day." Incorrect placement slides back gently with an explanation. After all 6: "You know the difference between things your body needs and things you just want!"

Instructional Rationale: A Remember-level (identify/name) objective, so a simple drag-to-bin sorting pattern with immediate infobox feedback matches the pre-reader audience without requiring independent reading.

Implementation notes: p5.js. Each item is an object with an illustration reference, correct category, and explanation string. Text large (24px+) for read-aloud use.
</details>

#### Diagram: Needs, Wants, and Healthy Choices

<iframe src="../../../../posters/needs-wants-healthy-choices/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>Needs, Wants, and Healthy Choices Interactive Poster</summary>
Type: infographic
**poster-id:** needs-wants-healthy-choices<br/>
**Library:** p5.js<br/>
**Status:** Published

A Kindergarten interactive poster for distinguishing health needs, enjoyable wants, and small healthy choices.

Use **Explore** mode to select a column and learn about it. Use **Quiz Me** to practice recognizing needs, wants, and healthy choices.
</details>

!!! mascot-encourage "Needs and Wants Can Feel Tricky"
    ![Scout offering encouragement](../../../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    It's okay if needs and wants feel a little mixed up at first — even grown-ups think about this! The important thing is starting to notice the difference, one item at a time.

### Personal Health Goal

A **personal health goal** is one simple health habit a person decides to work on, like "I will wash my hands before eating" or "I will wear my helmet every time I ride my bike." A good personal health goal is small, clear, and something a Kindergartner can actually do every day with a little help from a trusted adult.

Talking points for read-aloud:

- Remind the class of healthy habits from earlier chapters — eating from the food groups, moving every day, washing hands, wearing safety gear, naming feelings, and telling a trusted adult when something feels wrong.
- Explain that a personal health goal is choosing just *one* of these habits to focus on and practice.
- Guide each child to say their own goal out loud, starting with "I will...". There are no wrong answers — any true, simple, healthy goal counts.

#### Diagram: My Personal Health Goal

<iframe src="../../../../sims/my-personal-health-goal/main.html" width="100%" height="500px" scrolling="no"></iframe>

<details markdown="1">
<summary>My Personal Health Goal MicroSim</summary>
Type: microsim
**sim-id:** my-personal-health-goal<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Create (L6)
Bloom Taxonomy Verb: state, produce, generate

Learning objective: Students state one personal health-related goal and a supporting practice, the capstone skill for benchmark 0.7.7.1 and for the Kindergarten book as a whole.

Canvas layout: Top area (200px) shows six illustrated goal-choice cards drawn from earlier chapters (wash hands, eat a fruit or vegetable, move your body, wear a helmet, drink water, tell a trusted adult about a feeling). Middle area (150px): the selected card enlarges with the sentence starter "I will ___" filled in with a picture-word combination. Bottom strip (150px): a "My Goal" button that displays a printable/read-aloud goal card, and a Reset button.

Visual elements: 6 selectable goal cards in a grid; selected card highlights with a star border; final goal card shows Scout giving a thumbs-up.

Interactive controls: Click a goal card to select it; "My Goal" button reveals a large goal-statement card for the teacher to read aloud with the child; Reset clears the selection to choose again.

Default parameters: No goal pre-selected; child/teacher chooses one of the six cards together.

Behavior: Selecting a card shows, "I will wash my hands before eating" (or the matching sentence for the chosen card). Clicking "My Goal" displays a large, shareable goal card with the sentence and a simple picture, suitable for a teacher to print or read aloud to a family. No card is marked wrong — every choice is celebrated.

Instructional Rationale: A Create-level objective (state a personal goal) is the appropriate capstone for the whole Kindergarten book, so the MicroSim lets the child produce their own statement from a supported picture-word menu rather than simply recalling a fact, while still keeping the interaction simple enough for a pre-reader with teacher support.

Implementation notes: p5.js. Each goal is an object with an icon reference, sentence string, and picture cue. Text large (24px+), warm, and encouraging in tone. No incorrect state — every selection is a valid personal goal.
</details>

??? note "Quick Check for Read-Aloud Time — Click to expand"
    Ask the class: "What is a positive health influence? Can you name one?" Then reveal: "A positive health influence is a person, place, or habit that helps your health — like a grown-up who reminds you to wash your hands." Follow up with: "How do you know when it's time to make a health decision?" Reveal: "When a choice could help or hurt your body, feelings, or safety, it's a health decision moment." Finally ask: "What is one personal health goal you could choose?" Reveal: "Any small, true, healthy habit works — like 'I will wear my helmet every time I ride my bike.'"

### Wrap-Up for Teachers

By the end of this chapter, most Kindergartners should be able to recognize a positive health influence and a negative health influence, notice when a health decision is needed, recall the difference between a personal health need and a personal health want, and state one personal health goal of their own. These are Remember- and Understand-level goals, with the sorting MicroSims providing light Analyze-level practice and the closing MicroSim offering a gentle, supported Create-level task — no multi-step reasoning is expected yet.

!!! mascot-celebration "You Finished the Kindergarten Book!"
    ![Scout celebrating with a party hat](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Look how far you've come, friend! You've learned about healthy food, families, feelings, everyday healthy habits, staying safe, and now making healthy choices — and you even picked your very own health goal. Healthy choices, happy you!
