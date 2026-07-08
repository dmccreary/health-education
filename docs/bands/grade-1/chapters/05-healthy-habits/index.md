---
title: Healthy Habits, Activity, and Germs
description: Grade 1 students learn about daily personal-care and hygiene practices supported by cultural and community traditions, the benefits of regular physical activity and fun ways to be active every day, and how germs spread along with simple actions that prevent illness.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 14:59:37
version: 0.09
---

# Healthy Habits, Activity, and Germs

## Summary

This chapter covers daily personal-care and hygiene practices supported by cultural and community traditions, the benefits of regular physical activity and fun ways to be active every day, and how germs spread along with simple actions that prevent illness.

## Concepts Covered

1. Hygiene
2. Personal Care Practice
3. Community Health Practice
4. Physical Activity
5. Benefits Of Physical Activity
6. Daily Active Play
7. Germs
8. How Germs Spread
9. Illness Prevention Action

## Prerequisites

This chapter builds on Health from
[Chapter 1: Foundations of Health and Safe Habits](../01-foundations/index.md).

---

## Teacher Notes: How to Use This Chapter

This chapter is written for **you, the teacher**, to read aloud and guide from. Grade 1 students are beginning independent readers, so use the text below as a script while your class explores the pictures and MicroSims together. This chapter moves from Kindergarten's simple "wash your hands" idea toward **identifying and explaining why** — students should be able to name daily personal-care habits, explain how those habits connect to family and community traditions, describe the benefits of daily physical activity, and explain how germs spread and how simple actions stop them.

!!! mascot-welcome "Let's Build Healthy Habits Together!"
    ![Scout waving welcome](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hi, friend! Today we're going to talk about the everyday habits that keep our bodies strong and healthy — caring for our bodies, moving and playing, and stopping germs before they can make us sick. Let's think it through together. Healthy choices, happy you!

### Hygiene: Caring for Your Body Every Day

**Hygiene** means the everyday actions people take to keep their bodies clean and healthy. Washing hands, brushing teeth, bathing, and wearing clean clothes are all part of hygiene. Good hygiene helps a body feel comfortable, look neat, and stay healthy by keeping harmful germs away.

Talking points for read-aloud:

- Ask the class: "What is something you do every day to keep your body clean?"
- Explain that hygiene isn't just about looking clean — it's mainly about staying healthy.
- Remind students that hygiene habits are things we practice daily, not just once in a while.

Here are everyday hygiene habits a Grade 1 student already knows or is learning:

- Washing hands with soap and water
- Brushing teeth at least twice a day
- Bathing or showering regularly
- Wearing clean clothes
- Covering coughs and sneezes

### Personal Care Practice: Building Your Own Daily Routine

A **personal care practice** is a specific hygiene habit that a person repeats on a regular schedule, like a morning and bedtime routine. While hygiene is the big idea of staying clean, a personal care practice is the actual step a student takes — brushing teeth after breakfast, washing hands before lunch, combing hair before school.

Personal care practices work best as a routine, something done at the same times each day so it becomes automatic, like a habit. A Grade 1 student who brushes their teeth every morning and every night is practicing a personal care routine that will protect their teeth for their whole life.

!!! mascot-thinking "Big Idea"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    A personal care practice becomes a healthy habit when you do it at the same time every day — like brushing your teeth right after breakfast and right before bed!

#### Diagram: My Daily Care Routine Builder

<iframe src="../../../../sims/my-daily-care-routine-builder/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>My Daily Care Routine Builder MicroSim</summary>
Type: microsim
**sim-id:** my-daily-care-routine-builder<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students apply their understanding of personal care practices by dragging daily hygiene icons into a morning routine and a bedtime routine, in a reasonable order.

Canvas layout:
- Left area (450px): Two labeled routine tracks, "Morning Routine" and "Bedtime Routine," each with empty slots
- Right area (150px): A tray of six hygiene icons (wash hands, brush teeth, comb hair, bathe, put on clean clothes, wash face) and an infobox

Visual elements:
- Six simple flat-style icons representing each personal care practice
- Two horizontal routine tracks with 3 empty slots each
- Sun icon above the morning track, moon icon above the bedtime track

Interactive controls:
- Drag-and-drop: student drags icons from the tray into morning or bedtime slots
- Button: "Check My Routine"
- Button: "Reset"

Default parameters:
- All six icons start in the tray, unplaced

Data Visibility Requirements:
  Stage 1: Show the empty routine tracks and full icon tray
  Stage 2: As icons are placed, show them snapped into the routine slot
  Stage 3: After "Check My Routine" is clicked, show a caption for each placement confirming it fits that time of day (bathing and bedtime brushing fit night; handwashing and morning brushing fit morning; some icons like washing hands fit both times)

Behavior:
- Reasonable placements are confirmed with a green check and a short caption ("Brushing your teeth before bed helps keep your smile healthy overnight!")
- The MicroSim accepts multiple valid arrangements since routines vary by family

Instructional Rationale: This is an Apply-level (practice/demonstrate) objective, so the MicroSim uses hands-on drag-and-drop practice with immediate confirming feedback rather than passive viewing, letting students build and test their own version of a daily routine.

Implementation notes: Use p5.js. Icons should be simple, friendly, and diverse (different skin tones and hair types). Teacher can pause and discuss why order matters for some steps but not others.
</details>

### Community Health Practice: How Families and Cultures Care for the Body

A **community health practice** is a hygiene tradition shared by a family, culture, or community — often passed down for generations. There is no single "correct" way to bathe, groom, or care for the body — different families and cultures have their own healthy traditions that work well for them.

For example, some families take a bath every evening, while others shower in the morning. Some cultures have a tradition of washing feet before entering the home. Some families use a specific method for washing or oiling hair that has been passed down from grandparents. Some communities have a special hand-washing custom before meals. All of these different traditions can be healthy — what matters most is that the practice keeps the body clean and the person feels cared for.

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Every family has its own healthy way of doing things! If your hygiene routine looks different from a classmate's, that doesn't mean either one is wrong — different traditions can both be healthy.

#### Diagram: Hygiene Traditions Around the World

<iframe src="../../../../sims/hygiene-traditions-around-the-world/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Hygiene Traditions Around the World Infographic</summary>
Type: infographic
**sim-id:** hygiene-traditions-around-the-world<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: describe, exemplify, compare

Learning objective: Students describe several different community and cultural hygiene traditions and explain that different traditions can all support health, without ranking any as more "correct" than another.

Purpose: Show a warm, respectful gallery of six family/community hygiene traditions from around the world, helping students see that healthy hygiene practices vary by culture and are equally valid

Layout: A friendly grid of six illustrated family scenes arranged around a shared center label reading "Healthy Habits Look Different in Every Family"

Scenes to show (each respectfully depicted, without stereotype or caricature):
- A family removing shoes and washing feet before entering the home
- A family sharing an evening bath routine together
- A family washing hands together before a meal, saying a short family phrase
- A family with a morning hair-oiling and combing tradition
- A family using a washcloth-and-basin morning routine
- A family brushing teeth together as a nightly routine with a favorite song

Interactive elements:
- Hover or click each scene to reveal a short, respectful caption naming the tradition and the health reason behind it (e.g., "Washing feet before entering the home keeps outside dirt from spreading inside.")
- No scene is marked as more correct than another; captions use equally warm, factual language

Visual style: Bright, friendly flat-style illustrations; diverse homes, clothing, and family structures shown matter-of-factly
Color scheme: Each scene highlighted in its own soft accent color when selected; shared warm neutral background

Implementation: p5.js with click regions mapped to caption reveals; alternatively HTML/CSS grid with JavaScript hover/click handlers
</details>

You've now explored how personal care practices and community traditions both support hygiene. Next, let's talk about another everyday habit that keeps our bodies strong: moving and playing.

### Physical Activity: Moving Your Body Every Day

**Physical activity** is any movement of the body that uses energy, from running and jumping to dancing and climbing. A Grade 1 student doesn't need special equipment or a gym to be physically active — physical activity can happen at recess, at home, or anywhere there's room to move.

Physical activity is different from sitting still, like reading a book or watching a screen. Both quiet time and active time matter for a healthy day, but a body needs regular movement to grow strong.

### Benefits Of Physical Activity: Why Moving Matters

The **benefits of physical activity** are the many ways that regular movement helps a person's body, brain, and feelings. Physical activity is not just about getting exercise — it helps students in school, at home, and with friends.

Here are benefits of regular physical activity:

- Builds strong muscles and bones
- Helps the heart and lungs work well
- Gives the body more energy throughout the day
- Helps students focus and learn better in school
- Improves mood and helps release stress or big feelings
- Helps the body get good sleep at night

Moving your body doesn't just make you stronger — it helps your brain focus and helps your feelings feel calmer too!

#### Diagram: How Physical Activity Helps Your Whole Day

<iframe src="../../../../sims/how-physical-activity-helps-your-whole-day/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>How Physical Activity Helps Your Whole Day Chart</summary>
Type: chart
**sim-id:** how-physical-activity-helps-your-whole-day<br/>
**Library:** Chart.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, name

Learning objective: Students recall and identify the different benefits of physical activity by exploring a simple bar chart showing how many classmates in a pretend survey named each benefit.

Chart type: Horizontal bar chart

Purpose: Show, in kid-friendly terms, the variety of benefits physical activity provides, using a simple pretend classroom survey ("What do you notice after you play outside?")

X-axis: Number of classmates who noticed this benefit (0-20, pretend survey of 20 students)
Y-axis: Benefit categories (icons plus short labels)

Data series (single series, one color per bar for visual variety):
- "I feel happier" (green bar): 18
- "I have more energy" (orange bar): 15
- "I focus better in class" (blue bar): 12
- "I sleep better at night" (purple bar): 10
- "My muscles feel stronger" (red bar): 14

Title: "What Grade 1 Friends Noticed After Being Active"
Legend: Not needed (single series with labeled bars)

Interactive features:
- Hover over each bar to reveal a tooltip with the exact number and a one-sentence explanation of that benefit
- Click a bar to highlight it and show a matching simple icon animation (e.g., a sun icon for energy)

Annotations:
- Small icon next to each bar label (heart for feelings, lightning bolt for energy, brain for focus, moon for sleep, muscle for strength)

Implementation: Chart.js horizontal bar chart with tooltip callbacks; icons rendered as HTML labels next to axis ticks
</details>

### Daily Active Play: Fun Ways to Move Every Day

**Daily active play** means finding enjoyable ways to be physically active every single day, not just during gym class or organized sports. The best kind of physical activity for a Grade 1 student is the kind that feels like fun, not like a chore.

Examples of daily active play:

1. Playing tag or freeze tag at recess
2. Riding a bike or scooter
3. Dancing to a favorite song
4. Playing on the playground (climbing, swinging, sliding)
5. Playing catch or kickball with family or friends
6. Jumping rope or doing a hopscotch game
7. Walking or hiking outside

There's no single "right" activity — what matters is finding something active that a student genuinely enjoys, so it becomes something they want to do every day, not something they're told to do.

#### Diagram: Active Play Adventure Park

<iframe src="../../../../posters/active-play-adventure-park/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>Active Play Adventure Park Interactive Poster</summary>
Type: infographic
**poster-id:** active-play-adventure-park<br/>
**Library:** p5.js<br/>
**Status:** Published

Nine inclusive activity stations showing strength, balance, focus, teamwork, joy, and recovery.

Use **Explore** mode to select a numbered marker and learn more. Use **Quiz** mode to practice finding each idea in the illustration.
</details>

#### Diagram: Pick Your Active Play Adventure

<iframe src="../../../../sims/pick-your-active-play-adventure/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Pick Your Active Play Adventure MicroSim</summary>
Type: microsim
**sim-id:** pick-your-active-play-adventure<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, practice, apply

Learning objective: Students apply their understanding of daily active play by building a pretend weekly activity plan, choosing a different fun way to be active on each day.

Canvas layout:
- Left area (450px): Seven day slots (Sunday through Saturday) arranged in a row or grid
- Right area (150px): A tray of eight active-play icons (tag, biking, dancing, playground, catch, jump rope, walking, swimming) and an infobox

Visual elements:
- Seven labeled day slots, each able to hold one activity icon
- Eight colorful, friendly active-play icons in the tray

Interactive controls:
- Drag-and-drop: student drags an activity icon into a day slot
- Button: "Show My Week"
- Button: "Reset"

Default parameters:
- All day slots start empty; all icons start in the tray

Data Visibility Requirements:
  Stage 1: Show empty week grid and full icon tray
  Stage 2: As icons are placed, show them snapped into day slots
  Stage 3: After "Show My Week" is clicked, display a summary caption celebrating variety ("You picked 5 different ways to move this week! Variety keeps active play fun.")

Behavior:
- Any combination of activities is accepted, since enjoyment is personal
- If the same activity is used every day, a gentle encouraging caption suggests trying something new for variety, without saying the choice was wrong

Instructional Rationale: This is an Apply-level (practice/demonstrate) objective, so the MicroSim has students actively construct their own weekly plan with immediate summary feedback, rather than only viewing a list of examples.

Implementation notes: Use p5.js. Keep icons simple, colorful, and inclusive of different ability levels (e.g., include a wheelchair basketball icon as one option). Teacher can discuss favorite choices as a class.
</details>

You've learned how caring for your body and moving every day both help you feel your best. Now let's learn how to protect your body from something too small to see: germs!

### Germs: Tiny Living Things That Can Make You Sick

**Germs** are tiny living things, too small to see with just your eyes, that can get into the body and sometimes cause illness. Germs are everywhere — on hands, on surfaces, in the air — but most germs don't make people sick, and the body has natural defenses to fight many of them off. Some germs, however, can cause colds, sore throats, or other illnesses if they get into the body in large numbers.

Talking points for read-aloud:

- Ask the class: "Have you ever wondered what makes people catch a cold?"
- Explain that germs are so small that a microscope is needed to see them.
- Reassure students that having good habits makes it much less likely that germs will make them sick.

### How Germs Spread: The Paths Germs Travel

**How germs spread** describes the common ways that germs travel from one person, surface, or object to another. Understanding these paths helps a Grade 1 student know when to be extra careful about hygiene.

Common ways germs spread:

- Touching a surface with germs on it, then touching your face
- Shaking hands or touching another person who has germs on their skin
- Breathing in tiny droplets from someone else's cough or sneeze
- Sharing cups, utensils, or food with someone who is sick
- Touching pets or animals and not washing hands afterward

!!! mascot-warning "Common Mistake"
    ![Scout with a warning pose](../../../../img/mascot/warning.png){ class="mascot-admonition-img" }
    A cough or sneeze can send germs flying much farther than you'd think! That's why covering your mouth with your elbow — not your bare hand — helps stop germs from spreading to doorknobs and other surfaces.

#### Diagram: Germ Highway and Roadblocks

<iframe src="../../../../posters/germ-highway-roadblocks/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>Germ Highway and Roadblocks Interactive Poster</summary>
Type: infographic
**poster-id:** germ-highway-roadblocks<br/>
**Library:** p5.js<br/>
**Status:** Published

Ten classroom routes and roadblocks that explain how germs spread and how people interrupt the route.

Use **Explore** mode to select a numbered marker and learn more. Use **Quiz** mode to practice finding each idea in the illustration.
</details>

#### Diagram: How Germs Travel Map

<iframe src="../../../../sims/how-germs-travel-map/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>How Germs Travel Map MicroSim</summary>
Type: microsim
**sim-id:** how-germs-travel-map<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, identify, describe

Learning objective: Students identify and explain the common paths germs travel between people, surfaces, and objects in a classroom scene.

Canvas layout:
- Left area (450px): A simple classroom scene showing a student sneezing, a shared doorknob, a shared water fountain, a shared toy bin, and two students shaking hands
- Right area (150px): Infobox and a "Show Germ Path" toggle button

Visual elements:
- Five labeled hotspots in the classroom scene: sneeze droplets, doorknob, water fountain, toy bin, handshake
- Small dotted arrow animation showing germs moving from one hotspot to a hand icon when selected

Interactive controls:
- Click each hotspot to reveal how germs could spread from that spot
- Button: "Show Germ Path" (animates a simple dotted line from the hotspot to a hand, then to a face)
- Button: "Reset"

Default parameters:
- Scene opens with all five hotspots visible and unselected

Data Visibility Requirements:
  Stage 1: Show the classroom scene with five hotspots, no labels
  Stage 2: After a click, show a one-sentence explanation of that germ path ("Sneezing without covering your mouth sends tiny droplets into the air that others can breathe in.")
  Stage 3: Show the "Show Germ Path" animation connecting the hotspot to a hand and then a face, reinforcing the hand-to-face connection

Behavior:
- Each hotspot reveals its explanation and animated path when clicked
- A final summary caption appears after all five hotspots are explored: "Germs travel from surfaces and people to your hands, and then to your face — washing your hands breaks that path!"

Instructional Rationale: This is an Understand-level (explain/identify) objective, so the MicroSim uses clickable hotspots with concrete captions and a simple path animation rather than continuous animation, helping students trace exactly how germs move step by step.

Implementation notes: Use p5.js. Keep the scene light-hearted, not scary — germs can be shown as small friendly-looking dot characters rather than frightening monsters. Teacher facilitates discussion after each reveal.
</details>

### Illness Prevention Action: Simple Habits That Stop Germs

An **illness prevention action** is a simple, specific habit that stops germs from spreading and helps a person stay healthy. Many illness prevention actions are the same hygiene habits already covered in this chapter — which shows how hygiene, personal care practices, and illness prevention all connect together.

Here are illness prevention actions a Grade 1 student can practice every day:

- Washing hands with soap for 20 seconds, especially before eating and after using the bathroom
- Covering coughs and sneezes with an elbow, not bare hands
- Avoiding touching the eyes, nose, and mouth with unwashed hands
- Not sharing cups, utensils, or water bottles
- Telling a trusted adult when feeling sick
- Getting enough sleep and staying active to help the body's defenses work well

| Illness Prevention Action | Why It Works |
|---|---|
| Washing hands with soap | Washes germs off the skin before they can spread |
| Covering coughs and sneezes with an elbow | Keeps droplets from flying onto hands, surfaces, or other people |
| Not touching eyes, nose, or mouth | Blocks germs on hands from entering the body |
| Not sharing cups or utensils | Prevents germs from passing directly between people |
| Telling a trusted adult when feeling sick | Gets help early and helps protect classmates too |

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    Twenty seconds of handwashing is about as long as singing "Happy Birthday" two times through — try it next time you wash your hands!

#### Diagram: Germ-Stopping Action Sorter

<iframe src="../../../../sims/germ-stopping-action-sorter/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Germ-Stopping Action Sorter MicroSim</summary>
Type: microsim
**sim-id:** germ-stopping-action-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Evaluate (L5)
Bloom Taxonomy Verb: judge, assess, prioritize

Learning objective: Students evaluate short scenario cards showing a student's action and judge whether the action helps stop germs from spreading or could let germs spread, then rank a short list of actions from most to least helpful.

Canvas layout:
- Left area (450px): One scenario card at a time (flat illustration plus one sentence, e.g., "Diego sneezes into his elbow.")
- Right area (150px): Two bins labeled "Stops Germs" and "Spreads Germs" and an infobox

Visual elements:
- 8 scenario cards cycling one at a time, mixing good illness prevention actions (handwashing, covering coughs, not sharing cups) and risky actions (sneezing into bare hands, sharing a water bottle, touching face after recess)
- Two labeled bins with friendly icons (a shield for "Stops Germs," a small germ character for "Spreads Germs")

Interactive controls:
- Click-to-select: student clicks the bin that matches the scenario
- Button: "Next Scenario"
- Button: "Reset"

Default parameters:
- First scenario: "Maya washes her hands with soap before lunch" (clearly stops germs, to build confidence)

Data Visibility Requirements:
  Stage 1: Show the scenario card with no label
  Stage 2: After the student clicks a bin, show whether it matches
  Stage 3: Reveal a one-sentence explanation of why the action stops or spreads germs

Behavior:
- Correct match: bin glows, gentle chime, explanation caption appears
- Incorrect match: gentle prompt, "Think about where germs could travel next," correct bin glows softly as a hint

Instructional Rationale: This is an Evaluate-level (judge/assess) objective, so the MicroSim asks students to weigh each action's consequence for germ spread and justify the classification, rather than simply recalling a definition; the concrete explanation after each answer supports that judgment without relying on continuous animation.

Implementation notes: Use p5.js. Keep the "Spreads Germs" scenarios realistic and relatable (forgetting, not being careless on purpose) so no character feels blamed. Teacher reads each scenario and explanation aloud.
</details>

### Wrap-Up for Teachers

This chapter connected nine ideas: hygiene as the big picture of caring for the body, personal care practices as the daily routines that make hygiene happen, community health practices as the cultural traditions families use to stay clean, physical activity and its many benefits, daily active play as the fun way to be active every day, and germs, how they spread, and the illness prevention actions that stop them. By the end of this chapter, most Grade 1 students should be able to name at least two personal care practices, describe one community or family hygiene tradition with respect, explain one benefit of physical activity, name a favorite way to be active daily, and explain at least two illness prevention actions and why they work. Keep the discussion of community health practices warm and non-judgmental — no family's hygiene tradition should ever be presented as more "correct" than another.

!!! mascot-celebration "Chapter Complete!"
    ![Scout celebrating with a party hat](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Amazing work, friend! You've learned how to care for your body, why moving and playing every day feels great, and how to stop germs before they spread. Healthy choices, happy you!

??? note "Quick Check for Read-Aloud Time — Click to expand"
    Ask the class: "What is one thing you can do today to stop germs from spreading?" Then reveal: Washing your hands with soap, covering a cough or sneeze with your elbow, and not sharing cups or utensils are all illness prevention actions that stop germs from spreading.
