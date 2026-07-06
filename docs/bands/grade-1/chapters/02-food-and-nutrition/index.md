---
title: Food, Drinks, and Staying Safe in the Kitchen
description: Grade 1 students explore food groups and why eating a variety of foods matters, learn about drink types including water, discover why breakfast helps them learn, and practice simple, age-appropriate food safety rules.
generated_by: claude skill chapter-content-generator
date: 2026-07-06 14:49:35
version: 0.09
---

# Food, Drinks, and Staying Safe in the Kitchen

## Summary

Students explore food groups and why eating a variety of foods matters, learn about different drink types including water, and discover why breakfast helps them learn and feel their best. The chapter closes with simple, age-appropriate rules for storing and preparing food safely.

## Concepts Covered

1. Food Group
2. Variety Of Foods
3. Drink Types
4. Water As A Drink
5. Breakfast
6. Food Safety
7. Food Storage
8. Food Preparation Safety

## Prerequisites

This chapter builds on the idea of Health introduced in
[Chapter 1: Foundations of Health and Safe Habits](../01-foundations/index.md).

---

## Teacher Notes: How to Use This Chapter

This chapter is written for **you, the teacher**, to read aloud and guide from. Grade 1 students are beginning independent readers, so use the text below as a script while your class explores the pictures and MicroSims together. This chapter shifts from Kindergarten's "name the food group" toward **identify and explain why** — students should be able to say not just what a food group is, but why eating from several of them matters.

!!! mascot-welcome "Let's Talk About Food!"
    ![Scout waving welcome](../../../../img/mascot/welcome.png){ class="mascot-admonition-img" }
    Hi again, friend! Today we're exploring food, drinks, and breakfast — and I'll show you how to stay safe in the kitchen too. Let's think it through together. Healthy choices, happy you!

### What Is a Food Group?

A **food group** is a set of foods that give our bodies similar kinds of help. Fruits, vegetables, grains, protein foods, and dairy are the five food groups most Grade 1 students learn about. Each group helps the body in its own way: fruits and vegetables give vitamins that help the body fight illness, grains give energy for running and thinking, protein foods (like beans, eggs, and meat) help build strong muscles, and dairy foods (like milk and cheese) help build strong bones.

Talking points for read-aloud:

- Ask the class: "Can you name a food from each of the five groups?"
- Guide answers toward at least one fruit, one vegetable, one grain, one protein food, and one dairy food.
- Explain that no single food group can do every job alone — that is why eating from all of them matters.

!!! mascot-thinking "Big Idea"
    ![Scout thinking](../../../../img/mascot/thinking.png){ class="mascot-admonition-img" }
    Each food group has its own special job in your body. Grains give you energy, protein builds your muscles, dairy builds your bones, and fruits and vegetables help your body fight off getting sick!

The following table previews the five food groups students will meet in this chapter:

| Food Group | Example Foods | Main Job in the Body |
|---|---|---|
| Fruits | Apples, bananas, strawberries | Vitamins that help fight illness |
| Vegetables | Carrots, broccoli, spinach | Vitamins and fiber for a healthy body |
| Grains | Bread, rice, oatmeal | Energy for running, playing, and thinking |
| Protein Foods | Beans, eggs, chicken, nuts | Building strong muscles |
| Dairy | Milk, cheese, yogurt | Building strong bones |

#### Diagram: Food Group Explorer
<iframe src="../../../../sims/food-group-explorer/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Food Group Explorer MicroSim</summary>
Type: microsim
**sim-id:** food-group-explorer<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, classify, summarize

Learning objective: Students explain which food group a given food belongs to and summarize what job that food group does in the body, moving beyond simple naming toward reasoning about purpose.

Canvas layout:
- Left area (450px): A large plate illustration divided into five colored sections, one per food group
- Right area (150px): A stack of food picture cards to click through, plus an infobox

Visual elements:
- Five plate sections labeled Fruits (red), Vegetables (green), Grains (tan), Protein Foods (purple), Dairy (light blue)
- 15 food picture cards cycling through (3 per group): apple, banana, strawberry / carrot, broccoli, spinach / bread, rice, oatmeal / beans, egg, chicken / milk, cheese, yogurt

Interactive controls:
- Button: "Show Next Food Card"
- Click-to-place: student clicks the plate section where they think the food belongs
- Button: "Reset"

Default parameters:
- First card: apple (a clear, familiar example to build confidence)

Data Visibility Requirements:
  Stage 1: Show the food card with no label
  Stage 2: After the student clicks a plate section, show whether it matches
  Stage 3: Reveal a one-sentence explanation of the food group's job ("Apples are a fruit. Fruits have vitamins that help your body fight getting sick.")

Behavior:
- Correct placement: plate section glows, gentle chime, explanation caption appears
- Incorrect placement: gentle prompt, "Look again — what job does this food group do?" and the correct section glows softly as a hint

Instructional Rationale: This is an Understand-level (explain/classify) objective, so the MicroSim reveals the food group's purpose after each answer rather than using continuous animation, letting students connect each food to a concrete reason it belongs in that group.

Implementation notes: Use p5.js. Large, simple, flat-style food illustrations. Teacher reads each food name and explanation aloud.
</details>

### Eating a Variety of Foods

Eating a **variety of foods** means choosing different foods from different food groups instead of eating the same few foods every day. Grade 1 students are learning to explain *why* variety matters, not just to name the food groups. No single food — not even a very healthy one — has everything the body needs. A plate with foods from several groups gives the body a fuller set of the vitamins, energy, and building blocks it needs to grow, learn, and play.

!!! mascot-tip "Helpful Tip"
    ![Scout giving a tip](../../../../img/mascot/tip.png){ class="mascot-admonition-img" }
    A good trick: look at your plate before you eat. Can you spot at least three different colors? Different colors often mean different food groups are working together!

Reasons variety matters, in simple terms:

1. Different food groups give different kinds of help — energy, strong bones, strong muscles, and fighting illness.
2. Eating the same food every day can mean missing out on a job another food group does.
3. Trying new foods from each group helps the body get a fuller mix of what it needs.
4. Variety also makes meals more interesting and fun to eat!

#### Diagram: Build a Balanced Plate
<iframe src="../../../../sims/build-a-balanced-plate/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Build a Balanced Plate MicroSim</summary>
Type: microsim
**sim-id:** build-a-balanced-plate<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Apply (L3)
Bloom Taxonomy Verb: demonstrate, use, practice

Learning objective: Students demonstrate building a varied, balanced plate by dragging foods from at least three different food groups onto a plate.

Canvas layout:
- Left area (450px): An empty plate outline
- Right area (150px): A tray of 12 draggable food icons (mixed across all five groups) and a "Check My Plate" button

Visual elements:
- Empty plate that fills in as foods are dragged onto it
- Small counter showing how many different food groups are represented so far

Interactive controls:
- Drag-and-drop food icons onto the plate
- Button: "Check My Plate"
- Button: "Start Over"

Default parameters:
- Plate starts empty; student chooses freely

Behavior:
- When "Check My Plate" is clicked: if 3 or more different food groups are represented, the plate glows green, a gentle chime plays, and a caption celebrates the variety ("Great mix! You picked foods from four different groups.")
- If fewer than 3 groups are represented, a calm caption encourages, "You're off to a good start — can you add a food from a group you haven't tried yet?"

Instructional Rationale: This is an Apply-level (demonstrate/use) objective, so students actively build a plate rather than only recognize a definition. Immediate, non-judgmental feedback keeps the focus on practicing variety, matching the Grade 1 shift toward demonstration.

Implementation notes: Use p5.js. Keep food icons large, colorful, and simple. Allow unlimited food combinations; do not restrict to one "correct" answer.
</details>

### Drink Types and Why Water Wins

There are many **drink types**, and each one affects the body differently. Milk gives calcium for strong bones. 100%-juice can offer some vitamins but also has natural sugar. Sports drinks and soda have a lot of added sugar and are not needed for everyday activities. Grade 1 students recall these different drink types and the benefits — or drawbacks — that come with them.

Among all drink types, **water as a drink** stands out as the best everyday choice. Water has no added sugar, helps the body stay cool, helps muscles and joints work smoothly, and helps the brain stay focused for learning. The body loses water throughout the day through breathing, sweat, and using the bathroom, so it needs to be refilled often — especially after playing or exercising.

A quick comparison of common drink types:

| Drink Type | Common Benefit | Something to Know |
|---|---|---|
| Water | Keeps the body cool and focused, no added sugar | Best everyday choice, any time of day |
| Milk | Calcium for strong bones | Good with meals |
| 100% Fruit Juice | Some vitamins | Has natural sugar — small amounts are best |
| Soda / Sports Drinks | Occasional treat only | High in added sugar — not needed daily |

!!! mascot-warning "Watch the Sugar"
    ![Scout warning](../../../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Sodas and sports drinks can look fun, but they often have a lot of added sugar. That doesn't mean they're forbidden forever — it means water is the smarter everyday choice.

#### Diagram: Drink Type Sorter
<iframe src="../../../../sims/drink-type-sorter/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Drink Type Sorter MicroSim</summary>
Type: microsim
**sim-id:** drink-type-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, name

Learning objective: Students recall different drink types and the benefits they provide by sorting drink pictures into "everyday drink" and "occasional treat" bins.

Canvas layout:
- Top area (150px): One drink picture card at a time (water, milk, 100% juice, soda, sports drink, flavored milk, water with fruit slices)
- Middle area (250px): Two bins: "Everyday Drink" (blue) and "Occasional Treat" (orange)
- Bottom strip (100px): Explanation caption and "Next Drink" button

Visual elements:
- 7 drink cards cycling one at a time
- Simple, friendly, flat-style illustrations of cups and bottles

Interactive controls:
- Click-to-place or drag-and-drop: place the drink card in the correct bin
- Button: "Next Drink"
- Button: "Reset"

Default parameters:
- First card: a glass of water (clearly an everyday drink, to build confidence)

Behavior:
- Correct placement: bin glows, gentle chime, one-sentence benefit appears ("Water keeps your body cool and helps you focus.")
- Incorrect placement: gentle prompt, "Look again — is this a drink to have every day, or just sometimes?"

Instructional Rationale: This is a Remember-level (recall/identify) objective, so a simple sort-and-reveal pattern is appropriate — the goal is recognizing each drink type and its basic benefit, not yet analyzing trade-offs.

Implementation notes: Use p5.js. Large, simple drink illustrations. Teacher reads each drink name and benefit aloud.
</details>

Students should notice that water is the one drink that belongs in the "everyday" bin every single time — that repetition is part of the lesson.

### Why Breakfast Matters

**Breakfast** is the first meal of the day, and it matters because it gives the body and brain fuel after a long night of sleep without eating. A first grader who eats breakfast often has more energy to play, an easier time paying attention, and a steadier mood throughout the morning. Skipping breakfast can leave a student feeling tired, cranky, or unable to concentrate before lunchtime even arrives.

A healthy breakfast, like a healthy plate, is best when it includes foods from more than one food group — for example, oatmeal (grains) with milk (dairy) and berries (fruit), or scrambled eggs (protein) with whole-grain toast (grains) and orange slices (fruit).

Breakfast is like fuel for a car — without it, the body and brain have to work harder to get going. Eating breakfast helps a student feel ready to learn.

Simple reasons breakfast helps a Grade 1 student's day:

- Gives energy for morning play and PE class.
- Helps the brain focus during reading and math time.
- Helps keep moods steady so mornings feel less cranky.
- Refuels the body after many hours of sleep with no food.

#### Diagram: Why Breakfast? Cause and Effect
<iframe src="../../../../sims/why-breakfast-matters/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Why Breakfast? Cause and Effect MicroSim</summary>
Type: microsim
**sim-id:** why-breakfast-matters<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: explain, summarize, infer

Learning objective: Students explain why eating breakfast is important by comparing two versions of the same student's morning — one with breakfast and one without.

Canvas layout:
- Left area (350px): "With Breakfast" morning scene (student playing energetically, focused in class)
- Right area (350px): "Without Breakfast" morning scene (student looking tired, distracted)
- Bottom strip (100px): Toggle button and explanation caption

Visual elements:
- Two side-by-side illustrated scenes of the same cartoon student's morning
- Small energy-meter icon above each scene (full vs. low)

Interactive controls:
- Button: "Toggle Scene" (switches focus between the two scenes)
- Hover or click each scene: reveals a caption explaining what is happening and why

Default parameters:
- Both scenes visible at start; "With Breakfast" scene highlighted first

Data Visibility Requirements:
  Stage 1: Show both scenes side by side with energy meters
  Stage 2: Click "With Breakfast" scene — caption explains the fuel/energy connection
  Stage 3: Click "Without Breakfast" scene — caption explains why the student feels tired and unfocused
  Stage 4: Summary caption ties both scenes together: "Breakfast fuels your body and brain for the whole morning."

Behavior:
- Clicking either scene highlights it and reveals its caption; the energy meter animates filling or draining once, then stays still (no continuous animation)

Instructional Rationale: This is an Understand-level (explain/summarize) objective, so the MicroSim uses a side-by-side comparison with revealed captions rather than continuous animation, letting students infer the cause-and-effect relationship between breakfast and energy/focus at their own pace.

Implementation notes: Use p5.js. Keep both scenes calm and simple; avoid making the "without breakfast" student look unwell, just tired and less focused. Teacher reads captions aloud.
</details>

You've now learned about food groups, variety, drinks, and breakfast — that's a lot of great health knowledge! Next, let's learn how to stay safe with food in the kitchen.

### Staying Safe with Food: Food Safety Basics

**Food safety** means following simple rules so the food we eat keeps us healthy instead of making us feel sick. Food safety is not scary — it is just a set of everyday habits, always done with a trusted adult's help in the kitchen. The most important food safety habit for a Grade 1 student is washing hands before touching or eating food, since hands can carry germs picked up from other things they've touched.

Other simple food safety habits include:

1. Washing hands with soap and water before eating or helping cook.
2. Washing fruits and vegetables before eating them.
3. Never eating food that has fallen on the floor or touched something dirty.
4. Always asking a trusted adult before tasting or trying a new food, especially anything from the stove, oven, or a hot pan.

#### Diagram: Food Safety Habit Checklist
<iframe src="../../../../sims/food-safety-checklist/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Food Safety Habit Checklist MicroSim</summary>
Type: microsim
**sim-id:** food-safety-checklist<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, list

Learning objective: Students recall safe practices for handling food by checking off food safety habits shown in short kitchen scenes.

Canvas layout:
- Top area (150px): One kitchen scene at a time (washing hands before a snack, rinsing an apple, picking up food that fell on the floor, asking an adult before touching a hot pan)
- Middle area (250px): Two buttons: "Safe Habit" and "Needs a Change"
- Bottom strip (100px): Explanation caption and "Next Scene" button

Visual elements:
- 8 simple kitchen scenes cycling one at a time, calm and non-graphic

Interactive controls:
- Button: "Safe Habit"
- Button: "Needs a Change"
- Button: "Next Scene"

Default parameters:
- First scene: a child washing hands before snack time (clearly a safe habit, to build confidence)

Behavior:
- Correct answer: gentle chime, one-sentence reason appears ("Washing hands removes germs before they can get on your food.")
- Incorrect answer: calm caption prompts, "Look again — could this food make someone feel sick?"

Instructional Rationale: This is a Remember-level (recall/identify) objective, so the MicroSim uses simple scene recognition with an immediate one-sentence reason, keeping the tone practical and non-frightening rather than warning-heavy.

Implementation notes: Use p5.js. Keep every scene calm and matter-of-fact — frame this as "kitchen rules with a trusted adult," never as scary food-danger content. Large text for read-aloud.
</details>

### Keeping Food Fresh: Food Storage

**Food storage** means keeping food in the right place so it stays fresh and safe to eat — like the refrigerator, freezer, or a cupboard. Milk, eggs, and leftovers belong in the refrigerator to stay cold and fresh. Bread and canned foods often belong in a cupboard. A trusted adult decides where each food goes, and a Grade 1 student can help by asking, "Where does this belong?"

If you're not sure where a food belongs, that's a perfect question for a trusted adult in the kitchen — asking first keeps everyone's food fresh and safe.

Foods that usually need to stay cold in the refrigerator:

- Milk and cheese
- Eggs
- Leftovers from dinner
- Fresh fruits and vegetables that spoil quickly

#### Diagram: Where Does This Food Go?
<iframe src="../../../../sims/where-does-food-go/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Where Does This Food Go? MicroSim</summary>
Type: microsim
**sim-id:** where-does-food-go<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Remember (L1)
Bloom Taxonomy Verb: recall, identify, locate

Learning objective: Students recall safe practices for storing food by matching foods to the correct storage spot (refrigerator or cupboard).

Canvas layout:
- Left area (450px): Two large storage areas side by side: a refrigerator illustration and a cupboard illustration
- Right area (150px): A stack of 10 food picture cards to click through

Visual elements:
- Refrigerator and cupboard illustrations with open doors showing empty shelves
- 10 food cards: milk, eggs, leftovers, grapes, bread, crackers, canned beans, cheese, cereal, yogurt

Interactive controls:
- Drag-and-drop or click-to-place: place each food card into the refrigerator or cupboard
- Button: "Next Food"
- Button: "Reset"

Default parameters:
- First card: milk (clearly a refrigerator item, to build confidence)

Behavior:
- Correct placement: shelf glows, gentle chime, one-sentence reason appears ("Milk needs to stay cold so it doesn't spoil.")
- Incorrect placement: gentle prompt, "Look again — does this food need to stay cold?"

Instructional Rationale: This is a Remember-level (recall/identify) objective, so a simple matching pattern with an immediate explanation is appropriate — students are learning to locate the correct storage spot, not yet reasoning about spoilage science.

Implementation notes: Use p5.js. Keep illustrations simple and friendly. Teacher reads each food name and reason aloud.
</details>

### Helping Safely: Food Preparation Safety

**Food preparation safety** means following kitchen rules whenever a Grade 1 student helps get food ready to eat, always alongside a trusted adult. Young students can help with many kitchen jobs, but some jobs are grown-up-only jobs. This is simply a set of practical kitchen rules, not something to feel afraid of — cooking together can be a fun family activity when everyone follows the rules.

Kitchen jobs a Grade 1 student can help with alongside a trusted adult, compared with jobs that stay grown-up-only:

| Student Can Help With | Grown-Up-Only Job |
|---|---|
| Washing fruits and vegetables | Using the stove or oven |
| Stirring a bowl of already-mixed ingredients | Cutting with a sharp knife |
| Setting the table | Taking hot pans out of the oven |
| Pouring cereal (with supervision) | Using the microwave alone |

!!! mascot-warning "Kitchen Rule"
    ![Scout warning](../../../../img/mascot/warning.png){ class="mascot-admonition-img" }
    Stoves, ovens, and sharp knives are always a grown-up's job. If you want to help cook, ask a trusted adult what job is safe for you to do together.

#### Diagram: Kitchen Helper Sorting Game
<iframe src="../../../../sims/kitchen-helper-sorter/main.html" width="100%" height="500px" scrolling="no"></iframe>
<details markdown="1">
<summary>Kitchen Helper Sorting Game MicroSim</summary>
Type: microsim
**sim-id:** kitchen-helper-sorter<br/>
**Library:** p5.js<br/>
**Status:** Specified

Bloom Taxonomy: Understand (L2)
Bloom Taxonomy Verb: classify, explain, distinguish

Learning objective: Students classify kitchen tasks as "safe for me to help with" or "grown-up-only job," and explain why each grown-up-only job needs an adult.

Canvas layout:
- Top area (150px): One kitchen task picture card at a time (washing vegetables, stirring a bowl, using the stove, cutting with a knife, setting the table, taking a hot pan out of the oven)
- Middle area (250px): Two bins: "I Can Help" (green) and "Grown-Up Job" (orange)
- Bottom strip (100px): Explanation caption and "Next Task" button

Visual elements:
- 8 kitchen task cards cycling one at a time, calm and non-graphic (no depictions of injury)

Interactive controls:
- Click-to-place or drag-and-drop: place the card in the correct bin
- Button: "Next Task"
- Button: "Reset"

Default parameters:
- First card: washing vegetables (clearly a task the student can help with, to build confidence)

Behavior:
- Correct placement: bin glows, gentle chime, one-sentence reason appears ("Hot stoves can burn skin, so this is always a grown-up's job.")
- Incorrect placement: gentle, non-scary prompt, "Look again — could this task get too hot or too sharp for kids?"

Instructional Rationale: This is an Understand-level (classify/explain) objective, so each answer reveals a plain, practical reason rather than a scary warning, framing food preparation safety as everyday kitchen rules rather than danger content.

Implementation notes: Use p5.js. Keep every task illustration calm, friendly, and non-graphic. Tone should stay plainly practical, matching the project's rule that food safety content should never feel frightening.
</details>

### Bringing It All Together

This chapter explored eight ideas about food and staying healthy: food groups and why eating a variety of them matters, different drink types with water as the best everyday choice, why breakfast fuels the body and brain, and three practical food-safety habits — food safety, food storage, and food preparation safety — that keep kitchen time safe and fun with a trusted adult.

### Wrap-Up for Teachers

By the end of this chapter, most Grade 1 students should be able to identify each food group and explain why eating a variety of foods matters, recall different drink types and why water is the best everyday choice, explain why breakfast helps their body and brain, and recall the basic safety habits for handling, storing, and preparing food. Several MicroSims in this chapter go beyond simple recall into explaining why, matching the Grade 1 shift toward "identify and explain why." Keep all food-safety content practical and calm — these are everyday kitchen rules with a trusted adult, not danger content.

!!! mascot-celebration "Chapter Complete!"
    ![Scout celebrating with a party hat](../../../../img/mascot/celebration.png){ class="mascot-admonition-img" }
    Wow, friend — you learned so much about food, drinks, breakfast, and kitchen safety! Remember: eat from all the food groups, choose water often, never skip breakfast, and always ask a trusted adult for help in the kitchen. Healthy choices, happy you!

??? note "Quick Check for Read-Aloud Time — Click to expand"
    Ask the class: "Why is water usually the best drink to choose?" Then reveal: Water has no added sugar, keeps your body cool, and helps your brain stay focused — and it's always the right choice, any time of day.
