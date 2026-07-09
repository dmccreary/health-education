---
title: Staying Healthy Every Day
description: An introduction to germs, handwashing, covering coughs, and daily personal-care practices, paired with the importance of physical activity and daily movement, for Kindergarten health education.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 14:36:07
version: 0.09
---

# Staying Healthy Every Day

## Summary

This chapter covers daily habits that keep bodies healthy, including handwashing and covering coughs to stop germs from spreading, and staying active through daily movement and physical activity.

## Concepts Covered

1. Germs
2. Handwashing
3. Covering Coughs
4. Personal Care Practice
5. Physical Activity
6. Daily Movement

## Prerequisites

Builds on [Chapter 1: Health And Food](../01-health-and-food/index.md), which introduces the idea of health that daily personal-care and activity habits support.

---

## Teacher Notes: How to Use This Chapter

This chapter is written for **you, the teacher**, to read aloud, narrate, and guide from — kindergartners are not expected to read this page independently. Use the text below as a script or a source of talking points while your class explores the pictures and MicroSims. Every interactive element is designed for a child to click, drag, or point at while you talk them through it.

!!! mascot-welcome "Let's Keep Our Bodies Healthy!"
    ![Scout waving hello](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hi again, friend! Today we're going to learn about tiny things called **germs**, and the everyday habits that keep them from making us sick. We'll also talk about why moving our bodies every day feels so good. Healthy choices, happy you!

### What Are Germs?

A **germ** is a tiny living thing, much too small to see, that can sometimes make a person feel sick. Germs are all around us — on hands, on toys, on doorknobs — but most germs wash away easily with the daily habits in this chapter.

Talking points for read-aloud:

- Explain that germs are so small that not even the sharpest eyes can see them without a special microscope.
- Reassure the class that everyone has germs on their hands sometimes, and that is normal — the good news is we know exactly how to wash germs away.
- Ask the class: "Can anyone see a germ on their hand right now?" (No one can — that's why we wash carefully, every time, not just when hands look dirty.)

!!! mascot-thinking "Big Idea"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Germs are like tiny hitchhikers. They travel from hands to toys to faces — unless we stop them with handwashing and covered coughs!

#### Diagram: Where Do Germs Hide?

<iframe src="../../../../sims/where-do-germs-hide/main.html" width="100%" height="522px" scrolling="no"></iframe>

<details markdown="1">
<summary>Where Do Germs Hide? Interactive Infographic</summary>
Type: infographic
**sim-id:** where-do-germs-hide<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, locate

Learning objective: Students identify everyday classroom objects and body parts where germs commonly collect, building foundational understanding of the Germs concept before learning the habits that remove them.

Canvas layout:
- Full canvas (500px): One large, friendly illustrated classroom scene (a desk, a doorknob, a tissue, hands, a shared toy bin, a drinking fountain)
- Bottom strip (60px): Instruction text "Click the spots where germs like to hide!" and a Reset button

Visual elements:
- 6 hotspot icons glowing very faintly (a soft pulsing gold outline) over: hands, doorknob, shared toy, tissue, drinking fountain, desk surface
- When clicked, a small friendly cartoon germ character pops up briefly over that spot with a label

Interactive controls:
- Click: child taps a hotspot to reveal whether germs like to hide there
- Button: "Reset" to hide all revealed spots and try again
- Display: running count "You found 4 of 6 germ spots!"

Default parameters:
- All 6 hotspots start hidden/unrevealed
- Hotspots can be clicked in any order

Behavior:
- Clicking a correct hotspot reveals a small infobox: "Doorknobs are touched by many hands every day — that's a great place for germs to collect!"
- Once a spot is found it stays revealed (highlighted green) so the child can see progress
- After all 6 spots are found, display a celebration message: "You found every germ hideout! Now let's learn how to wash them away."

Instructional Rationale: This is a Remember-level (identify/locate) objective appropriate for pre-readers, so a simple click-to-reveal hotspot pattern works well — it requires no reading and gives an immediate, encouraging infobox for every click.

Implementation notes: Use p5.js. Store each hotspot as an object with an (x,y) region (relative/percentage-based, not fixed pixels, so the scene resizes responsively), a label, and an infobox string. Keep all text large (24px+) for read-aloud use.
</details>

### Handwashing

**Handwashing** means washing your hands with soap and water to remove germs, especially before eating and after using the bathroom, playing outside, or blowing your nose. Handwashing is one of the very best ways to stop germs from spreading from one person to another.

The steps below can be practiced as a group, with the teacher counting out loud:

1. Wet hands with clean, running water
2. Add soap and rub hands together
3. Scrub for 20 seconds (about as long as singing "Happy Birthday" twice)
4. Rinse well under running water
5. Dry hands with a clean towel

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Singing a short song while scrubbing helps children wash long enough. Try "Twinkle, Twinkle, Little Star" once through — that's about 20 seconds!

#### Diagram: 20-Second Scrub Timer

<iframe src="../../../../sims/20-second-scrub-timer/main.html" width="100%" height="482px" scrolling="no"></iframe>

<details markdown="1">
<summary>20-Second Scrub Timer MicroSim</summary>
Type: microsim
**sim-id:** 20-second-scrub-timer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: practice, demonstrate

Learning objective: Students practice the Handwashing routine by following along with a step-by-step, timed scrubbing sequence, reinforcing correct order and duration.

Canvas layout:
- Top area (300px): A large friendly illustration of two cartoon hands being washed, with soap bubbles that increase as the timer runs
- Middle area (100px): A circular 20-second countdown ring that fills with color as time passes
- Bottom strip (100px): Large "Start Scrubbing!" button and a Reset button

Visual elements:
- Five numbered step icons (wet, soap, scrub, rinse, dry) displayed left to right, each lighting up in sequence as the sim progresses
- Bubble animation increases during the "scrub" step

Interactive controls:
- Button: "Start Scrubbing!" begins the timed sequence
- Button: "Reset" returns to the beginning
- Display: countdown ring and current step label read aloud by the teacher

Default parameters:
- Timer length: 20 seconds for the scrub step
- Steps advance automatically at realistic intervals (wet: 2s, soap: 2s, scrub: 20s, rinse: 3s, dry: 3s)

Behavior:
- When "Start Scrubbing!" is clicked, hands animate through each step while the step icon glows and a short label appears ("Now we scrub!")
- A cheerful chime plays at the end of the full sequence
- A celebration message appears: "Clean hands, healthy you! You scrubbed for the full 20 seconds."

Instructional Rationale: This is an Apply-level objective — children are practicing performing a real multi-step routine — so a step-through sequence with a visible timer is appropriate. Continuous unstructured animation would not reinforce the correct order or duration, which are the actual learning targets.

Implementation notes: Use p5.js. Represent the five steps as an ordered array with durations and labels. Keep all on-screen text large (26px+) and pair every step with an icon for pre-reader accessibility.
</details>

### Covering Coughs

**Covering coughs** means covering your mouth and nose with your elbow or a tissue when you cough or sneeze, so germs do not spray into the air onto other people or surfaces. This is a simple habit that protects everyone in the classroom.

The following table compares two ways to cough, useful for classroom modeling:

| Situation | Helpful Way | Not-So-Helpful Way |
|---|---|---|
| Sudden cough | Cough into elbow | Cough into open air |
| Sneeze with a tissue nearby | Sneeze into tissue, then throw it away | Sneeze into hands |
| After coughing or sneezing | Wash hands right after | Touch toys or friends right away |

!!! mascot-warning "A Common Mistake"
    ![Scout with a warning](../../../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Many children learn to cough into their hands — but hands touch everything next! Covering with an elbow, or a tissue thrown straight in the trash, keeps germs from spreading to toys, doorknobs, and friends.

#### Diagram: Elbow or Hands?

<iframe src="../../../../sims/elbow-or-hands/main.html" width="100%" height="454px" scrolling="no"></iframe>

<details markdown="1">
<summary>Elbow or Hands? Sorting MicroSim</summary>
Type: microsim
**sim-id:** elbow-or-hands<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, sort, compare

Learning objective: Students distinguish helpful cough-covering behavior from unhelpful behavior by sorting illustrated scenario cards into two labeled bins, applying the Covering Coughs concept.

Canvas layout:
- Top area (250px): One simple illustrated scenario card shown at a time, depicting a child about to cough or sneeze in different ways (into elbow, into a tissue, into open hands, into open air)
- Bottom area (200px): Two large labeled bins side by side: "Keeps Germs Away" (green, with a shield icon) and "Lets Germs Spread" (gray, with a germ icon)
- Bottom strip (50px): Score display ("You sorted 4 scenarios!") and a Reset button

Visual elements:
- 8 scenario cards cycling one at a time, evenly split between helpful and unhelpful cough/sneeze coverings, drawn in a simple, warm cartoon style
- Bins glow softly when a card is dragged over them

Interactive controls:
- Drag-and-drop: child drags the scenario card into the bin they believe matches
- Button: "Reset" to start over
- Button: "Next Scenario" appears after each placement

Default parameters:
- First scenario: a child coughing into their elbow (Keeps Germs Away)
- Scenarios appear in a fixed friendly order so a teacher can predict what is coming next

Behavior:
- When a card is placed in the correct bin, the bin glows green, a cheerful chime plays, and the score increases by one
- When a card is placed in the incorrect bin, the card gently slides back to the top and a friendly infobox reminds the child why, e.g., "Coughing into hands lets germs spread to the next thing you touch."
- After all 8 scenarios are sorted, show a celebration message: "You really know how to keep germs from spreading!"

Instructional Rationale: This is an Analyze-level objective because the child must examine a small scenario and distinguish which category it belongs to, rather than simply recalling a rule. The forgiving retry behavior with an explanatory infobox keeps the activity appropriate for a pre-reader audience while still requiring a real comparison judgment.

Implementation notes: Use p5.js. Represent each scenario as an object with an illustration reference, a correct category, and an explanation string. Keep all captions read-aloud length (one short sentence).
</details>

#### Diagram: The Germ's Busy Day

<iframe src="../../../../posters/germs-busy-day/main.html" width="100%" height="960px" scrolling="no"></iframe>
<details markdown="1">
<summary>The Germ's Busy Day Interactive Poster</summary>
Type: infographic
**poster-id:** germs-busy-day<br/>
**Library:** p5.js<br/>
**Status:** Published

A Kindergarten interactive poster for exploring how germs move through a classroom and how healthy habits stop their spread.

Use **Explore** mode to hover over or select a numbered marker. Use **Quiz** mode to listen to or read a visual hint and find the matching place in the classroom.
</details>

### Personal Care Practice

A **personal care practice** is any daily habit a person does to take care of their own body and health, like handwashing and covering coughs. Personal care practices can look a little different across families and communities, but the goal is always the same: staying healthy.

Talking points for read-aloud:

- Explain that some families have their own special ways of practicing personal care, such as songs while washing hands, or specific times of day for these habits — all of these are good, healthy versions of the same idea.
- Remind students that personal care practices are things they can do all by themselves, every day, without needing anyone else to do it for them.
- Point out that brushing teeth, washing hands, and covering coughs are all examples of the same big idea: taking care of your own body.

!!! mascot-thinking "Big Idea"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    A personal care practice is something YOU do for YOUR body. Every time you wash your hands or cover a cough, you're taking charge of your own health!

A short list of daily personal care practices a Kindergartner can name:

- Washing hands before eating and after the bathroom
- Covering coughs and sneezes with an elbow or tissue
- Brushing teeth in the morning and at night
- Washing hands after playing outside or petting an animal

#### Diagram: My Body's Daily Helpers

<iframe src="../../../../posters/my-bodys-daily-helpers/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>My Body's Daily Helpers Interactive Poster</summary>
Type: infographic
**poster-id:** my-bodys-daily-helpers<br/>
**Library:** p5.js<br/>
**Status:** Published

Five daily habits that help bodies feel ready to learn, move, rest, and grow.

Use **Explore** mode to select a section and learn more. Use **Quiz Me** mode to practice finding each idea in the illustration.
</details>

### Physical Activity

**Physical activity** is any movement of the body that gets your heart beating faster and your muscles working, like running, jumping, dancing, or climbing. Physical activity is a big part of staying healthy, alongside handwashing and covering coughs.

!!! mascot-celebration "Section Complete!"
    ![Scout celebrating with a party hat](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Great work learning about germs and personal care! Now let's get moving and talk about why physical activity feels so good.

### Daily Movement

**Daily movement** means moving your body in some active way every single day, not just once in a while. Moving every day — through play, sports, dancing, or just running around outside — helps a Kindergartner's body grow strong, helps their heart get stronger, and helps them feel happier.

The following list gives simple examples of daily movement a Kindergartner might already be doing:

- Running during outdoor recess
- Dancing to a favorite song
- Riding a tricycle or scooter
- Playing tag or follow-the-leader
- Jumping rope or hopping like a bunny

Explain to the class why daily movement helps the body feel good and stay healthy: moving makes the heart pump faster, which carries energy all around the body, and it also releases feelings of happiness — that's why a good run around the playground can turn a grumpy morning into a great one.

#### Diagram: Let's Move Our Bodies!

<iframe src="../../../../sims/lets-move-our-bodies/main.html" width="100%" height="504px" scrolling="no"></iframe>

<details markdown="1">
<summary>Let's Move Our Bodies! MicroSim</summary>
Type: microsim
**sim-id:** lets-move-our-bodies<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, demonstrate

Learning objective: Students explain why daily movement helps the body feel good and stay healthy by following along with a simple animated character performing different movement activities and seeing a "happy energy" meter respond.

Canvas layout:
- Top area (300px): A friendly cartoon character that performs a movement (running, jumping, dancing, climbing) when a matching button is pressed
- Middle area (100px): A large, simple "Happy Energy Meter" bar that fills up as the character moves
- Bottom strip (100px): Four large buttons: "Run," "Jump," "Dance," "Climb," plus a Reset button

Visual elements:
- Character animates distinctly for each of the four movement types
- Happy Energy Meter fills with a warm gold color and a small sun icon appears at full

Interactive controls:
- Click: child selects a movement button to watch the character perform it
- Button: "Reset" empties the meter and starts over
- Display: meter level and a short read-aloud caption after each movement, e.g., "Running makes your heart beat faster and gives you energy!"

Default parameters:
- Meter starts empty
- Each movement button adds a fixed amount to the meter; after all four movements are tried once, the meter is full

Behavior:
- Clicking a movement button plays the character's animation and reveals a caption explaining that specific benefit (heart health, strong muscles, happy feelings, better sleep)
- When the meter becomes full, a celebration message appears: "You moved your body four different ways — that's a great healthy day!"
- Children may click the same button multiple times to watch the animation again; only the first click per movement adds to the meter

Instructional Rationale: This is an Understand-level objective (explain why movement helps), so the sim uses a step-through pattern where each movement reveals a concrete, spoken benefit rather than relying on decorative continuous animation. Showing the meter fill in direct response to specific movements makes the cause-and-effect connection between activity and feeling good visible and concrete.

Implementation notes: Use p5.js. Store each movement as an object with an animation reference, a meter increment value, and a caption string. Keep all captions short enough to read aloud in one breath.
</details>

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Daily movement does not need to be a sport! Dancing in the living room, chasing a bubble, or walking the dog around the block all count as great ways to move every day.

!!! mascot-celebration "Chapter Complete!"
    ![Scout celebrating with a party hat](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You did it, friend! You now know what germs are, how handwashing and covering coughs keep germs from spreading, and why moving your body every day feels good and keeps you healthy. Healthy choices, happy you — see you in the next chapter!

### Wrap-Up for Teachers

By the end of this chapter, most Kindergartners should be able to recall that germs are tiny and can make people sick, name handwashing and covering coughs as daily personal-care practices that stop germs from spreading, and explain in simple terms why daily movement helps the body feel good and stay healthy. These are Remember- and early Understand-level goals, with the timer, sorting, and movement MicroSims providing light Apply- and Analyze-level practice — no multi-step reasoning is expected yet.

??? note "Quick Check for Read-Aloud Time — Click to expand"
    Ask the class: "What are two things we can do every day to stop germs from spreading?" Then reveal the answer: "Wash our hands and cover our coughs!" Follow up with: "Why does moving our bodies every day feel good?" Reveal: "It makes our hearts strong and helps us feel happy!"
