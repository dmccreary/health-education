---
title: Staying Safe
description: Safety rules that prevent injuries at home, school, and in the community, healthy ways to use technology, what to do in a school emergency, and the correct names for body parts, for Kindergarten health education.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 14:38:11
version: 0.09
---

# Staying Safe

## Summary

Students learn safety rules that prevent injuries at home, school, and in the community, healthy ways to use technology, what to do during a school emergency, and the correct names for body parts.

## Concepts Covered

1. Healthy Technology Use
2. Safety Rules
3. Injury Prevention
4. Community Safety Practice
5. Emergency
6. School Emergency
7. Safe Place
8. Body Parts
9. Correct Body Part Names

## Prerequisites

Builds on [Chapter 1: Health And Food](../01-health-and-food/index.md), which introduces the idea of health that safety rules and practices protect.

---

## Teacher Notes: How to Use This Chapter

This chapter is written for **you, the teacher**, to read aloud, narrate, and guide from — kindergartners are not expected to read this page independently. Use the text below as a script or a source of talking points while your class explores the pictures and MicroSims. The last section of this chapter, on body part names, covers standard, evidence-based safety content. Please read the note at the start of that section before teaching it.

!!! mascot-welcome "Let's Learn How to Stay Safe!"
    ![Scout waving hello](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hi again, friend! Today we're going to learn about rules that keep us safe at home, at school, and in our community. We'll also talk about using screens in healthy ways, what to do if there's an emergency at school, and the correct names for our body parts.

### Safety Rules

A **safety rule** is a rule that people follow to help keep everyone from getting hurt. Safety rules exist at home, at school, on the playground, and in the community. Some families and communities have their own extra safety traditions — all of these are good, as long as they help keep people safe.

Talking points for read-aloud:

- Explain that a safety rule is different from other rules because it exists to stop someone from getting hurt, not just to keep things tidy or fair.
- Give familiar examples: holding a grown-up's hand crossing the street, wearing a helmet on a bike, not touching a hot stove.
- Ask the class: "Can you think of a safety rule your family has at home?" Different answers are all welcome — the goal is recognizing that rules like this exist to protect us.

#### Diagram: Safety Rules All Around

<iframe src="../../../../sims/safety-rules-all-around/main.html" width="100%" height="502px" scrolling="no"></iframe>

<details markdown="1">
<summary>Safety Rules All Around Interactive Infographic</summary>
Type: infographic
**sim-id:** safety-rules-all-around<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify safety rules that apply in three settings (home, school, community), building recognition of the Safety Rules concept before learning injury-prevention behaviors.

Canvas layout: Full canvas (500px) shows three illustrated scenes side by side — home, school hallway, community street — each with two glowing hotspots on a child following a safety rule. Bottom strip (60px): instructions and a Reset button.

Visual elements: 6 hotspots total (2 per scene) — home (stair rail, staying from a hot stove), school (walking in hallway, sitting properly), community (holding a grown-up's hand at a crossing, wearing a bike helmet).

Interactive controls: Click a hotspot to reveal the rule; Reset button; running count display ("You found 4 of 6!").

Default parameters: All 6 hotspots start unrevealed and can be clicked in any order.

Behavior: Clicking reveals a short infobox naming the rule, e.g., "At home: always hold the rail on the stairs!" Found spots stay highlighted green. After all 6 are found: "You found safety rules at home, at school, and in the community!"

Instructional Rationale: A Remember-level (identify/name) objective, so a simple click-to-reveal hotspot pattern works well for pre-readers — no reading required, immediate infobox feedback.

Implementation notes: p5.js. Each hotspot is an object with a scene, a relative (x,y) region so the scene resizes responsively, a label, and an infobox string. Text large (24px+) for read-aloud use.
</details>

### Injury Prevention

**Injury prevention** means doing things ahead of time so that people do not get hurt. Wearing a seatbelt, wearing a helmet, and holding a handrail on the stairs are all examples of injury prevention — they are actions we take *before* anything goes wrong.

The following table compares a few common injury prevention actions with what could happen without them:

| Situation | Injury Prevention Action | What Could Happen Without It |
|---|---|---|
| Riding a bike | Wear a helmet | A head bump could be more serious |
| Riding in a car | Buckle a seatbelt | A sudden stop could cause a fall |
| Walking on stairs | Hold the handrail | A slip could cause a tumble |
| Playing with scissors | Use child-safe scissors, adult nearby | A cut could happen |

#### Diagram: Buckle Up and Gear Up

<iframe src="../../../../sims/buckle-up-and-gear-up/main.html" width="100%" height="504px" scrolling="no"></iframe>

<details markdown="1">
<summary>Buckle Up and Gear Up MicroSim</summary>
Type: microsim
**sim-id:** buckle-up-and-gear-up<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: practice, demonstrate

Learning objective: Students practice matching the correct injury-prevention gear to a given activity, reinforcing the Injury Prevention concept through hands-on drag-and-drop matching.

Canvas layout: Top area (250px) shows an illustrated child ready for one of three activities (bike, car, stairs). Middle area (150px): three draggable gear icons (helmet, seatbelt, handrail-holding hand). Bottom strip (100px): "Check" and "Reset" buttons plus score display.

Visual elements: Child illustration changes with the current activity; gear icons are large and simple for small hands to drag.

Interactive controls: Drag-and-drop gear onto the child; "Check" confirms; "Reset" clears; score display (e.g., "2 of 3 matched!").

Default parameters: Activities cycle bike, car, stairs; correct gear is helmet, seatbelt, handrail respectively.

Behavior: Correct match snaps into place with a chime and infobox ("Yes! A helmet protects your head while biking."). Incorrect match bounces back with an explanation. After all three: "You know how to gear up and stay safe every time!"

Instructional Rationale: An Apply-level objective — practicing gear knowledge in specific situations — so hands-on matching with immediate feedback is appropriate, rather than passive viewing.

Implementation notes: p5.js. Each activity is an object with an illustration reference, correct gear id, and explanation string. Captions short enough for one-breath read-aloud.
</details>

### Community Safety Practice

A **community safety practice** is a safety habit that a whole neighborhood, town, or group of people follows together, like stopping at a crosswalk, listening to a crossing guard, or following rules at a public pool or park. Community safety practices can include traditions specific to a family's culture or neighborhood, and all of them share the same goal: keeping everyone in the community safe.

- Stopping and looking both ways before crossing a street
- Listening to crossing guards, lifeguards, and other safety helpers
- Following posted safety signs at parks and playgrounds
- Staying with a trusted adult in busy public places

!!! mascot-warning "A Common Mistake"
    ![Scout with a warning](../../../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Some children think safety gear like helmets is only for "big falls." Helmets, seatbelts, and community rules like crosswalk signals are followed every single time, not just when something feels risky.

#### Diagram: Community Helpers Keep Us Safe

<iframe src="../../../../sims/community-helpers-keep-us-safe/main.html" width="100%" height="464px" scrolling="no"></iframe>

<details markdown="1">
<summary>Community Helpers Keep Us Safe Interactive Infographic</summary>
Type: infographic
**sim-id:** community-helpers-keep-us-safe<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify community helpers and the safety practice each one supports, reinforcing the Community Safety Practice concept.

Canvas layout: Full canvas (500px) shows a neighborhood street scene with a crossing guard at a crosswalk, a lifeguard at a pool, and a park safety sign. Bottom strip (60px): instructions and a Reset button.

Visual elements: 3 glowing hotspots (crossing guard, lifeguard, park sign); clicking pops up a labeled infobox.

Interactive controls: Click reveals the safety practice for that helper/sign; Reset button.

Default parameters: All 3 hotspots begin unrevealed, clickable in any order.

Behavior: Crossing guard reveals "The crossing guard helps everyone cross the street safely together." Lifeguard reveals "The lifeguard watches the pool so everyone can swim safely." Park sign reveals "Safety signs remind everyone of the playground rules." After all three: "You know how our community works together to stay safe!"

Instructional Rationale: A Remember-level (identify/name) objective, so click-to-reveal hotspots with short spoken infoboxes match the pre-reader audience without requiring independent reading.

Implementation notes: p5.js. Each hotspot is an object with a label, relative (x,y) region, and infobox string. Text large (24px+) for read-aloud use.
</details>

### Healthy Technology Use

**Healthy technology use** means using phones, tablets, computers, and other screens in ways that help a child learn and play safely, instead of ways that could cause harm. Just like there are safety rules for stairs and streets, there are safety rules for screens too.

Talking points for read-aloud:

- Explain that technology can be a wonderful tool for learning and playing games, especially with a trusted adult nearby.
- Remind the class that healthy technology use includes taking breaks, using devices in shared family spaces, and always telling a trusted adult if something on a screen feels confusing or scary.
- Point out that a trusted adult should always know what apps or shows a Kindergartner is using.

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    A good rule of thumb: use screens with a trusted adult nearby, take breaks to rest your eyes, and always tell a grown-up if anything on a screen feels confusing or makes you feel unsafe.

#### Diagram: Healthy Screen Time or Not?

<iframe src="../../../../sims/healthy-screen-time-or-not/main.html" width="100%" height="454px" scrolling="no"></iframe>

<details markdown="1">
<summary>Healthy Screen Time or Not? Sorting MicroSim</summary>
Type: microsim
**sim-id:** healthy-screen-time-or-not<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Analyze (L4)
Bloom Taxonomy Verb: distinguish, sort, compare

Learning objective: Students distinguish healthy, safe technology use from unsafe or unhealthy technology use by sorting illustrated scenario cards into two labeled bins, applying the Healthy Technology Use concept.

Canvas layout: Top area (250px) shows one scenario card at a time (e.g., watching an approved show with a grown-up nearby, versus using a device alone for a very long time). Bottom area (200px): two bins, "Healthy Screen Use" (green, sun icon) and "Ask a Trusted Adult" (orange, raised-hand icon). Bottom strip (50px): score display and Reset button.

Visual elements: 6 scenario cards cycling one at a time, split between healthy and "needs a trusted adult" situations; bins glow when a card is dragged over them.

Interactive controls: Drag-and-drop the card into the matching bin; Reset button; "Next Scenario" button after each placement.

Default parameters: First scenario is watching an approved show with a grown-up nearby (Healthy Screen Use); scenarios appear in a fixed, teacher-predictable order.

Behavior: Correct placement glows green with a chime and rising score. Incorrect placement slides back with a friendly reminder, e.g., "If something on a screen feels confusing, that's a great time to ask a trusted adult for help." After all 6: "You know how to use screens in healthy, safe ways!"

Instructional Rationale: An Analyze-level objective because the child must examine a scenario and distinguish its category. The forgiving retry with an explanatory infobox keeps this appropriate for a pre-reader while still requiring a real comparison judgment.

Implementation notes: p5.js. Each scenario is an object with an illustration reference, correct category, and explanation string. Captions one short, read-aloud sentence.
</details>

### Emergency

An **emergency** is a sudden, serious situation that needs quick action to keep people safe, like a fire, a severe storm, or someone getting badly hurt. Emergencies do not happen often, but knowing what one is helps a Kindergartner understand why schools practice emergency plans.

Talking points for read-aloud:

- Explain that an emergency is different from an everyday problem — it happens suddenly and needs a fast, calm response from grown-ups.
- Reassure the class that grown-ups at school are trained to know exactly what to do in an emergency, and a child's job is simple: listen carefully and follow directions.
- Give examples appropriate for young children: a fire alarm, a severe weather warning, needing to find a trusted adult quickly.

!!! mascot-encourage "This Can Feel Big — That's Okay"
    ![Scout offering encouragement](../../../../img/mascot/encouraging.png){ class="mascot-admonition-img" }
    Talking about emergencies can feel a little serious, and that's completely okay. The most important thing to remember is that grown-ups at school practice these plans so that everyone knows exactly what to do, and you are never alone during one.

### School Emergency

A **school emergency** is an emergency that happens while a child is at school, such as a fire drill, a severe weather drill, or a lockdown drill. Schools practice these drills regularly — not because something is wrong, but so that everyone already knows exactly what to do if a real emergency ever happens.

The following list names common school emergency drills a Kindergartner may already practice:

1. Fire drill — walk quickly and quietly to the safe outdoor spot
2. Severe weather drill — move to the designated safe indoor spot
3. Lockdown drill — stay quiet, stay with the teacher, follow directions

#### Diagram: School Drill Practice

<iframe src="../../../../sims/school-drill-practice/main.html" width="100%" height="482px" scrolling="no"></iframe>

<details markdown="1">
<summary>School Drill Practice MicroSim</summary>
Type: microsim
**sim-id:** school-drill-practice<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: practice, demonstrate

Learning objective: Students practice the correct sequence of steps for a fire drill by following a step-through classroom scene, reinforcing the School Emergency concept.

Canvas layout: Top area (300px) shows an illustrated classroom scene with a teacher and children, advancing through three stages (alarm sounds, line up quietly, walk to the safe outdoor spot). Middle area (80px): three step icons that light up as the scene advances. Bottom strip (100px): "Next Step" and "Reset" buttons.

Visual elements: Classroom scene changes at each stage; step icons are alarm, line-up, and outdoor safe-spot.

Interactive controls: "Next Step" advances the drill sequence; "Reset" returns to the start; short caption displays under the scene naming the current step.

Default parameters: Starts at Stage 1 (alarm sounds); three total stages, each requiring a click to advance.

Behavior: Stage 1: "The alarm sounds. It's time for a fire drill!" Stage 2: "Everyone lines up quietly and listens to the teacher." Stage 3: "The class walks calmly to the safe outdoor spot." After Stage 3: "Great job practicing! Now everyone knows just what to do."

Instructional Rationale: An Apply-level objective — practicing the correct sequence of a real routine — so a step-through pattern with teacher-controlled pacing is appropriate, letting a teacher narrate each stage aloud rather than relying on unstructured continuous animation.

Implementation notes: p5.js. Each stage is an object with an illustration reference and a caption string. Text large (24px+) and calm in tone.
</details>

### Safe Place

A **safe place** is a specific spot to go during a particular kind of emergency — for example, a certain hallway for a severe weather drill, or a certain spot on the playground for a fire drill. Every school has its own safe places already planned out, and part of practicing a drill is learning exactly where a Kindergartner's safe place is for each kind of emergency.

#### Diagram: Find the Safe Place

<iframe src="../../../../sims/find-the-safe-place/main.html" width="100%" height="454px" scrolling="no"></iframe>

<details markdown="1">
<summary>Find the Safe Place Interactive Infographic</summary>
Type: infographic
**sim-id:** find-the-safe-place<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, locate

Learning objective: Students identify the correct safe place for a given type of school emergency, reinforcing the Safe Place concept alongside School Emergency.

Canvas layout: Full canvas (500px) shows a simple illustrated school map (classroom, hallway, outdoor field, gym). Bottom strip (80px): a prompt naming one emergency type at a time (e.g., "Fire drill — where is the safe place?") with three tappable location options.

Visual elements: School map locations shown as friendly labeled icons; the selected answer highlights green (correct) or shakes gently (incorrect, try again).

Interactive controls: Tap the location believed correct; "Next Emergency" cycles prompts; "Reset" restarts.

Default parameters: Three prompts cycle in order — fire drill (outdoor field), severe weather drill (hallway), lockdown drill (classroom).

Behavior: Correct tap glows green with a chime and confirming infobox, e.g., "Yes! During a fire drill, we walk to the outdoor field." Incorrect tap shakes gently with a friendly hint. After all three: "You know where to go for each kind of school emergency!"

Instructional Rationale: A Remember-level (identify/locate) objective appropriate for pre-readers, so a tap-to-identify pattern with an immediate confirming infobox is used rather than a more complex simulation.

Implementation notes: p5.js. Each emergency type is an object with a prompt string, correct location id, and confirmation string. Text large (24px+) for read-aloud use.
</details>

#### Diagram: Where Is My Safe Place?

<iframe src="../../../../posters/where-is-my-safe-place/main.html" width="100%" height="980px" scrolling="no"></iframe>
<details markdown="1">
<summary>Where Is My Safe Place? Interactive Poster</summary>
Type: infographic
**poster-id:** where-is-my-safe-place<br/>
**Library:** p5.js<br/>
**Status:** Published

A Kindergarten interactive poster for exploring safety rules, trusted adults, and planned safe places at home, school, the playground, and in the community.

Use **Explore** mode to select a setting and learn about its safety rules and helpers. Use **Quiz Me** to practice finding the setting described in each question.
</details>

### Body Parts and Correct Body Part Names

!!! note "A Note for Teachers Before You Begin"
    Teaching the correct anatomical names for all body parts, including private body parts, is standard, evidence-based K-12 health curriculum and a well-established body-safety and abuse-prevention practice. A child who knows the correct name for every body part can clearly and accurately tell a trusted adult if something is wrong. This section should be taught matter-of-factly, without embarrassment, using the same calm, direct tone used for naming any other body part. There is no need for humor here — keep the tone plain, warm, and sincere throughout.

A **body part** is any part of a person's body, such as an arm, a knee, an elbow, or an ear. Every person has a name for each of their body parts, and Kindergartners are already familiar with naming many of them.

**Correct body part names** means using the real, accurate name for every body part — including the private body parts covered by a swimsuit — instead of a nickname or a made-up word. Knowing and using the correct name for every body part, including private body parts, is an important safety skill: if a Kindergartner is ever hurt, uncomfortable, or confused about any part of their body, using the correct name lets them tell a trusted adult clearly and be understood right away.

Talking points for read-aloud:

- Name body parts the same calm, matter-of-fact way for every part of the body — arms, legs, and private body parts are all just body parts with correct names.
- Explain that the correct names are simply the real words for those body parts, no different from calling an elbow an "elbow" instead of a made-up name.
- Remind the class that a trusted adult — like a parent, a teacher, a doctor, or another grown-up the family trusts — is always the right person to talk to about their body, whether something feels fine, confusing, or uncomfortable.
- Reinforce that a Kindergartner is always allowed to say "no" to unwanted touch and to tell a trusted adult right away, using the correct body part names so the adult understands exactly what happened.

!!! mascot-neutral "Why This Matters"
    ![Scout looking gently attentive](../../../../img/mascot/neutral.png){ class="mascot-admonition-img" }
    Knowing the correct name for every body part means you can always tell a trusted adult exactly what is going on with your body. If a Kindergartner ever uses a correct body part name to describe something confusing or uncomfortable, take it seriously, stay calm, and thank them for telling you.

#### Diagram: Naming Body Parts Correctly

<iframe src="../../../../sims/naming-body-parts-correctly/main.html" width="100%" height="522px" scrolling="no"></iframe>

<details markdown="1">
<summary>Naming Body Parts Correctly Interactive Infographic</summary>
Type: infographic
**sim-id:** naming-body-parts-correctly<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: identify, recognize, name

Learning objective: Students identify and recall the correct name for common body parts, reinforcing the Body Parts and Correct Body Part Names concepts as a body-safety practice.

Canvas layout: Full canvas (500px) shows a simple, non-graphic, front-facing outline illustration of a child in everyday clothing (no undressed or graphic anatomical depiction), with labeled hotspots only over non-sensitive body parts (head, shoulder, elbow, knee, foot, ear). Bottom strip (60px): instructions and a Reset button.

Visual elements: 6 hotspots over the outline illustration; clicking reveals the correct name in a calm, clear infobox.

Interactive controls: Click reveals the correct name; Reset hides all revealed labels.

Default parameters: All 6 hotspots begin unlabeled and can be clicked in any order.

Behavior: Clicking a hotspot reveals its correct name in plain text, e.g., "This is your elbow." Labels stay visible for review. After all 6 are found: "You know the correct names for these body parts! A trusted adult can always help if you have a question about any part of your body."

Instructional Rationale: A Remember-level (identify/name) objective, so a calm click-to-reveal pattern is used. The illustration intentionally shows only non-sensitive body parts to keep the visual asset appropriate for a public-facing infographic; the teacher read-aloud text above carries the full instructional content regarding private body parts and how to name them with the same directness.

Implementation notes: p5.js. Each hotspot is an object with a relative (x,y) region and its correct name string. Text large (24px+), plain, and calm — no playful sound effects or celebratory animation, in keeping with the sincere tone of this section.
</details>

??? note "Quick Check for Read-Aloud Time — Click to expand"
    Ask the class: "What is a safety rule, and can you name one from home or school?" Then reveal: "A safety rule is a rule that helps keep everyone from getting hurt — like holding the handrail on stairs." Follow up with: "Why do we practice school emergency drills?" Reveal: "So that everyone already knows exactly where the safe place is and what to do." Finally ask: "Why is it important to know the correct name for every body part?" Reveal: "So we can tell a trusted adult clearly if something is wrong."

### Wrap-Up for Teachers

By the end of this chapter, most Kindergartners should be able to recall safety rules that prevent injuries at home, school, and in the community; name healthy, safe ways to use technology; recall what to do during a school emergency drill and where their safe place is; and recall the correct names for all body parts, including private body parts, as a body-safety practice. These are Remember- and early Understand-level goals, with the sorting and matching MicroSims providing light Apply- and Analyze-level practice — no multi-step reasoning is expected yet.

!!! mascot-celebration "Chapter Complete!"
    ![Scout celebrating with a party hat](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    You did it, friend! You now know safety rules, how to prevent injuries, healthy ways to use technology, what to do during a school emergency, where safe places are, and the correct names for body parts. See you in the next chapter!
