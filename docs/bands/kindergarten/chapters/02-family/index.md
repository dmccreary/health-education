---
title: Family And Trusted Adults
description: An introduction to trusted adults and the many structures families can take, for Kindergarten health education, covering trusted adults at home/school/community and the variety of family structures.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 14:32:02
version: 0.09
---

# Family And Trusted Adults

## Summary

This chapter introduces trusted adults who help keep children healthy and safe, and explores how families come in many different structures. Students practice recognizing the grown-ups they can turn to at home, school, and in the community.

## Concepts Covered

1. Trusted Adult
2. Family
3. Family Structure

## Prerequisites

Builds on [Chapter 1: Health And Food](../01-health-and-food/index.md), which introduces the idea of health that this chapter's concepts connect back to.

---

## Teacher Notes: How to Use This Chapter

This chapter is written for **you, the teacher**, to read aloud, narrate, and guide from — kindergartners are not expected to read this page independently. Use the text below as a script or a source of talking points while your class explores the pictures and MicroSims. Every interactive element is designed for a child to click, drag, or point at while you talk them through it.

!!! mascot-welcome "Who Helps You Stay Healthy?"
    ![Scout waving hello](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hi again, friend! Today we're talking about the people who take care of you — your **family** — and the grown-ups you can always turn to for help. Let's think it through together!

### What Is a Trusted Adult?

A **trusted adult** is a grown-up a child can go to for help, comfort, or answers to a question — someone who listens and keeps the child safe. Every child has trusted adults in more than one place: at home, at school, and in the community.

Talking points for read-aloud:

- Ask the class: "Who is a grown-up you can go to if you feel scared, hurt, or unsure?"
- Guide answers toward a parent, guardian, grandparent, teacher, school nurse, coach, or police officer.
- Explain that a trusted adult is not just one person — most people have several trusted adults in different places.

The following table gives examples of trusted adults a Kindergartner might name, grouped by where that person is usually found:

| Where | Example Trusted Adults |
|---|---|
| At Home | Parent, guardian, grandparent, older sibling's caregiver |
| At School | Teacher, principal, school nurse, bus driver |
| In the Community | Police officer, firefighter, doctor, coach, faith leader |

!!! mascot-thinking "Big Idea"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    You don't have to wait for a big problem to talk to a trusted adult. Small questions and small worries matter too!

#### Diagram: Who Is My Trusted Adult?
<iframe src="../../../../sims/trusted-adult-sorter/main.html" width="100%" height="482px" scrolling="no"></iframe>
<details markdown="1">
<summary>Who Is My Trusted Adult? MicroSim</summary>
Type: microsim
**sim-id:** trusted-adult-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, name, recognize

Learning objective: Students identify and name trusted adults at home, at school, and in the community by dragging a picture of a person into the correct labeled location bin.

Canvas layout:
- Top area (100px): One large picture of a person shown at a time, with a simple caption below (read aloud by teacher), such as "teacher," "grandma," "police officer"
- Middle/bottom area (350px): Three labeled bins side by side: "At Home," "At School," "In the Community," each with a simple background icon (a house, a school building, a neighborhood street)
- Bottom strip (50px): Score display ("You found 4 trusted adults!") and a Reset button

Visual elements:
- 9 large, simple, friendly illustrated people cycling one at a time: parent, grandparent, guardian, teacher, school nurse, bus driver, doctor, police officer, firefighter
- Each bin has a distinct color: warm yellow for At Home, blue for At School, green for In the Community

Interactive controls:
- Drag-and-drop: child drags the current person picture onto the bin they think is correct
- Button: "Reset" to start over
- Button: "Next Person" appears after each correct placement

Default parameters:
- First person shown: a parent (At Home)
- People appear in a fixed friendly order (not randomized) so a teacher can predict what is coming next

Behavior:
- When a person is dropped on a matching bin, the bin glows green, a cheerful chime plays, and the score increases by one
- Some people (such as a doctor) can correctly belong in more than one bin; if the child chooses any reasonable bin, the sim accepts it and shows a short caption confirming why
- When a placement seems clearly mismatched, the picture gently slides back to the top so the child can try again — no harsh error sound
- After all 9 people are sorted, show a celebration message: "Great job! You know so many trusted adults!"

Instructional Rationale: This is a Remember-level (identify/name) objective, so a simple drag-and-drop matching pattern is appropriate — it gives the child immediate, forgiving feedback without requiring reading. Accepting more than one correct bin for certain people reflects real life, where trusted adults like doctors can be encountered in more than one setting.

Implementation notes: Use p5.js. Represent each person and bin as an object with x/y/width/height for hit-testing during drag events. Keep all text large (24px+) since this is a read-aloud/pre-reader audience.
</details>

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    A good trusted adult is someone who listens, keeps you safe, and helps you feel better. If a grown-up ever makes you feel scared or unsafe instead, tell a different trusted adult right away.

### What Is a Family?

A **family** is a group of people who love and take care of each other. Families help children grow, feel safe, learn new things, and have fun. Every family is a little different, and every family is a real family.

Discussion points for the classroom:

- Ask each student to name someone in their family who takes care of them.
- Emphasize that a family can be big or small, and that all families deserve respect.
- Remind students that the people who love and care for you count as your family, even if they are not related by blood.

### Family Structure: Many Kinds of Families

**Family structure** describes the different ways families can be organized — who lives together and who takes care of whom. Some children live with two parents, some live with one parent, some live with grandparents, some live with foster parents, and some live in a blended family where two families joined together. All of these are healthy, normal family structures.

A short list of family structures to review aloud with the class, in a warm and matter-of-fact tone:

- A family with two parents
- A family with one parent
- A family led by a grandparent or other relative
- A foster family
- A blended family, where two families have joined together
- A family with two moms or two dads

!!! mascot-encouraging "Every Family Is Different"
    ![Scout encouraging](../../../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    Learning that families come in so many shapes can feel new — and that's okay! There is no single "right" way for a family to look. Yours is exactly right for you.

#### Diagram: Families Come in Many Shapes
<iframe src="../../../../sims/family-shapes-gallery/main.html" width="100%" height="492px" scrolling="no"></iframe>
<details markdown="1">
<summary>Families Come in Many Shapes Interactive Infographic</summary>
Type: infographic
**sim-id:** family-shapes-gallery<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: recognize, connect, classify

Learning objective: Students recognize that families come in a variety of structures and that every structure shown is a healthy, real family, connecting Family to Family Structure.

Purpose and main message: Show six illustrated family portraits in a friendly gallery grid, each representing a different family structure, with a click revealing a short warm description of that family.

Layout: A grid of six large, simple, warm illustrated family portraits: a two-parent family, a single-parent family, a grandparent-led family, a foster family, a blended family, and a family with two moms or two dads. Each portrait shows the family members smiling together in a simple home or park setting.

Interactive elements:
- Click or tap any family portrait to open a simple infobox with one warm sentence describing that family structure (e.g., "This family has a grandma who takes care of the children every day — that's her important job in this family.")
- Hover highlights the portrait with a soft glow before clicking
- No portrait is marked as more "normal" than another; all six appear the same size with the same friendly visual treatment

Data to display per portrait:
- Two-parent family — "Two parents share the job of taking care of their children."
- Single-parent family — "One parent takes care of the children all on their own, and does a great job."
- Grandparent-led family — "A grandparent takes care of the children every day, just like a parent would."
- Foster family — "A foster family opens their home to take care of a child for a while."
- Blended family — "A blended family happens when two families join together to become one new family."
- Two moms or two dads — "Some children have two moms or two dads who take care of them together."

Color coding: Use the same soft, warm color palette across all six portraits so no single family structure is visually singled out as different or unusual.

Responsive behavior: Grid collapses to a single vertical column of portraits on narrow screens.

Implementation: p5.js canvas with click-region detection for each portrait; infobox rendered as a text panel below the grid.
</details>

You've already learned who a trusted adult is and how families take care of each other in many different ways. Trusted adults are often part of a child's family — but they can also be found at school and in the community.

### Putting It Together: Family and Trusted Adults

Family members are usually a child's very first trusted adults. As children grow, they also find trusted adults at school and in their community. No matter what a family looks like, every child deserves to have trusted adults who help them stay healthy, safe, and happy.

A quick comparison for read-aloud time:

| Question | Answer to Reinforce |
|---|---|
| Who usually lives in your family? | People who love and take care of each other |
| Do all families look the same? | No — families come in many healthy structures |
| Who can you go to for help? | A trusted adult at home, school, or in the community |

#### Diagram: Families: Many Ways to Care

<iframe src="../../../../posters/families-many-ways-to-care/main.html" width="100%" height="960px" scrolling="no"></iframe>
<details markdown="1">
<summary>Families: Many Ways to Care Interactive Poster</summary>
Type: infographic
**poster-id:** families-many-ways-to-care<br/>
**Library:** p5.js<br/>
**Status:** Published

A Kindergarten interactive poster showing varied families through acts of care, safety, inclusion, comfort, and belonging.

Use **Explore** mode to select a numbered action. Use **Quiz** mode to find the act of care named in each question.
</details>

### Wrap-Up for Teachers

By the end of this chapter, most Kindergartners should be able to name at least one trusted adult at home, at school, and in the community, and recall that families come in a variety of structures — all of them healthy and real. These are Remember- and early Understand-level goals — no multi-step reasoning is expected yet.

!!! mascot-celebration "Chapter Complete!"
    ![Scout celebrating with a party hat](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You did it, friend! You now know about trusted adults, families, and the many shapes families can take. Healthy choices, happy you — see you in the next chapter!

??? note "Quick Check for Read-Aloud Time — Click to expand"
    Ask the class: "Can you name one trusted adult at home, one at school, and one in the community?" Then reveal one example of each: a parent or grandparent at home, a teacher at school, and a police officer or doctor in the community.
