---
title: "Teachers Guide"
description: "How to use this K-12 Health Education intelligent textbook in your classroom — chapters, MicroSims, posters, mascot, licensing, and customization."
---

# Health Education Teachers Guide

Welcome to the teacher's guide for *Health Education: an interactive intelligent textbook for K-12 students with age-appropriate tiers*. This guide explains every feature of the site, how to use it in your classroom, and how to customize it for your students. No prior technical knowledge is assumed — every technical term is defined before it is used.

## About This Interactive Intelligent Textbook

### What is an Intelligent Textbook?

An **intelligent textbook** is a digital textbook that goes beyond static text and images. It includes interactive simulations, a structured map of how concepts relate to each other, and (as the site matures) self-grading quizzes and a searchable glossary. The goal is to give students a richer, more engaging learning experience than a traditional printed textbook.

### The Five Levels of Intelligent Textbooks

Not all digital textbooks are created equal. We categorize intelligent textbooks into five levels based on how interactive and adaptive they are:

<iframe src="https://dmccreary.github.io/intelligent-textbooks/sims/book-levels/main.html" height="500px" scrolling="no"
  style="overflow: hidden;"></iframe>

| Level | Name | Description | Example Features |
|-------|------|-------------|-----------------|
| **Level 1** | Static Digital | A PDF or basic web version of a print textbook | Text and images only, no interactivity |
| **Level 2** | Interactive | Adds interactive elements like simulations and concept maps | MicroSims, infographics, learning graphs |
| **Level 3** | Adaptive | Adjusts content based on student performance | Personalized learning paths, difficulty adjustment |
| **Level 4** | AI-Assisted | Includes an AI tutor that can answer student questions | Chatbot integration, automated feedback |
| **Level 5** | Fully Adaptive AI | Continuously learns from student interactions and optimizes the experience | Real-time content generation, predictive analytics |

**This textbook is a Level 2 Intelligent Textbook.** It currently includes 370 interactive MicroSims and 86 infographic posters across all eight grade bands. Quizzes, a glossary, and an FAQ are planned but not yet published — check back as the site grows.

### What Makes This Textbook Different

- **Eight parallel grade bands** — not one book, but eight companion books (Kindergarten through Grades 9–12), each written at the right reading level and cognitive demand for that age group
- **Interactive MicroSims** let students manipulate models and scenarios directly in their browser — no software installation required
- **Infographic posters** that double as stand-alone classroom or hallway visuals
- **Standards-aligned** to Minnesota's 2025 K-12 Health Academic Standards (Commissioner Approved) — see [References](../references.md)
- **Scout the Dog** — a friendly mascot character (called a "pedagogical agent") who guides students through each chapter with tips, encouragement, and key insights
- **Completely free and open source** — licensed under Creative Commons for non-commercial use

## Understanding the Grade-Band Structure

### Why Eight Books Instead of One

This site is **not** a single course. It is eight parallel textbooks — one per grade band — that each cover the same six health strands at a reading level and cognitive complexity appropriate to that band:

| Band | Approx. Reading Level | Cognitive Demand |
|------|-----------------------|-------------------|
| Kindergarten | Pre-reader / read-aloud | Identify, recognize, name |
| Grade 1–2 | Early elementary | Identify, describe, recall with simple support |
| Grade 3–5 | Elementary | Explain, identify, connect to personal experience |
| Grades 6–8 | Middle school | Analyze, evaluate influences, apply in scenarios |
| Grades 9–12 | High school | Design, evaluate, synthesize, apply across contexts |

For grades K–3, students are not yet expected to be independent readers, so the teacher is the primary audience for the text and MicroSim "games" are the main student-facing activity. From grade 4 up, students increasingly read the chapters directly.

### The Six Health Strands (Run Through Every Band)

Every grade band covers the same six content strands, each written fresh for that band's chapters:

1. Food and Nutrition
2. Human Growth and Development / Sexual Health
3. Mental and Emotional Health
4. Personal Health and Wellness
5. Personal Safety and Violence Prevention
6. Substance Use Awareness and Prevention

Because a strand like "Personal Safety and Violence Prevention" gets its own dedicated chapter in *every* band, you can follow how a single topic deepens in complexity from Kindergarten through Grade 12 by reading the same-numbered strand chapter across bands.

### Chapters by Band

| Band | Chapters | Example Topics |
|------|----------|-----------------|
| Kindergarten | 6 | Health and food, family and trusted adults, feelings and kindness, staying healthy, staying safe, making healthy choices |
| Grade 1 | 7 | Foundations and safe habits, food and kitchen safety, feelings, friendship and belonging, healthy habits and germs, personal safety, getting help |
| Grade 2 | 7 | Health basics and friendships, food and safe eating, conflict and kind play, environment and health, technology and emergency safety, body safety, influences and decisions |
| Grade 3 | 8 | Foundations of health, safety and trusted adults, wellness and activity, food and nutrition, relationships and respect, growth and puberty, mental and emotional health, communication and goals |
| Grade 4 | 6 | Food and nutrition, growth and development across cultures, mental/emotional health, safety and refusal skills, wellness and disease prevention, health literacy and goal setting |
| Grade 5 | 7 | Foundations and trusted adults, food and nutrition, managing emotions and relationships, equity/belonging/bystander action, personal health and wellness, personal safety and violence prevention, health skills and goal setting |
| Grades 6–8 | 12 | Health foundations and nutrition, relationships/boundaries/consent, healthcare access and sexual health, stigma/bias/brain health, sleep/fitness/emergency response, digital and school safety, substance use culture and risk, substance use disorder/recovery/policy, health influences and information literacy, advocacy/goal setting/messaging |
| Grades 9–12 | 15 | Food and nutrition, relationships and respect, consent and boundaries, healthcare access and sexual health, conflict resolution and inclusion, digital and school safety, health equity and disease prevention, substances (effects and safer choices), substance recovery and resilience, substance policy and law |

**Total: 68 chapters across all eight bands.**

### Finding Your Grade Band

From the left navigation, open **"Textbooks By Grade"** and choose your band. Each band section contains:

- Its own **course description** (the standards and scope for that band)
- Its **chapters**, in teaching order
- Its own **learning graph** (concept list, taxonomy, and quality metrics — see "The Learning Graph" below)

## Using the Chapters

### What Each Chapter Contains

Every chapter follows a consistent structure:

1. **YAML front matter** — Metadata at the top of each chapter file (title, description, reading level, version). Students don't see this; it's used by search engines and the website builder.
2. **Summary** — A brief overview of what the chapter covers and what students will learn.
3. **Concepts covered** — A numbered list of the specific concepts addressed in the chapter, drawn from that band's learning graph.
4. **Welcome from Scout** — A mascot admonition that introduces the chapter topic in Scout's friendly voice.
5. **Main content** — The core instructional material, written at the reading level for that band. Includes tables, real-world examples, embedded MicroSims, and (in many chapters) infographic posters.
6. **Mascot admonitions** — Throughout the chapter, Scout appears up to 5–6 times to highlight key insights (thinking), offer practical tips (tip), provide encouragement on harder concepts (encourage), and warn about common mistakes (warning). In chapters covering Personal Safety, Violence Prevention, or Substance Use, Scout's tone stays plainly sincere — no puns or playful dog references.
7. **Key takeaways** — A numbered summary of the most important concepts, closed out with a celebration from Scout.

### Suggested Classroom Use

- **Before class**: Assign the chapter as reading homework (grade 4 and up). For K–3, read the chapter aloud or use it as your own lesson-planning reference.
- **During class**: Project the chapter's MicroSims and infographic posters on a screen for whole-class demonstrations. Ask students to predict what will happen when you change a slider or make a choice, then test their predictions.
- **After class**: Use the chapter's practice questions and critical-thinking prompts for discussion or written responses.
- **Pacing**: Each chapter is designed for roughly 2–3 class periods. Chapters with more MicroSims (common in Grades 6–12) may take longer.
- **Cross-band articulation**: Before teaching a strand (e.g., Personal Safety), skim the same strand's chapter in the band below to confirm your students already have that foundation.

## Using the MicroSims

### What is a MicroSim?

A **MicroSim** (short for "micro-simulation") is a small, interactive simulation that runs directly in a web browser. Students don't need to install any software — MicroSims work on any device with a modern web browser (Chrome, Firefox, Safari, Edge).

Each MicroSim lets students manipulate one or more variables (using sliders, buttons, sorting activities, or drag-and-drop) and immediately see how the model responds. This "learn by doing" approach helps students build intuition, and for younger grades doubles as a simple educational game.

### How MicroSims Are Embedded

MicroSims appear within chapter text as rectangular interactive areas. They are embedded using **iframes** — a web technology that displays one web page inside another. You don't need to understand how iframes work; just know that the MicroSims load automatically when students view the chapter page.

### Types of MicroSims

The textbook includes over 370 MicroSims built with different visualization technologies:

| Technology | What It's Good For | Example MicroSims |
|-----------|-------------------|-------------------|
| **p5.js** | Interactive scenario sorters, timelines, and animated games | Emergency-or-Not Scenario Sorter, Healthy/Unhealthy Pattern Sorter, Life Stages Timeline |
| **vis-network** | Concept maps and network diagrams showing connections | Power Dynamics Consent Map, Dementia and Its Causes Concept Map, Learning Graph Viewer |
| **Chart.js** | Bar charts, line charts, and comparisons | Activity Benefits Explorer, Stress Response and Recovery Cycle |
| **HTML/CSS games** | Checklists, matching activities, and timers | 20-Second Scrub Timer, Active-Listening Checklist Builder |

Browse the full catalog from the **"MicroSims"** section of the left navigation.

### Tips for Using MicroSims in Class

1. **Project them on a screen** — MicroSims are designed to be visible on a projector. Have students call out predictions before you interact with a control.
2. **Let students explore independently** — After a demonstration, give students 5–10 minutes to experiment on their own devices.
3. **Use the "Reset" button** — Most MicroSims have a reset or restart control. Encourage students to reset and try different scenarios.
4. **Connect to the text** — Each MicroSim is placed near the concept it illustrates. After exploring the sim, have students re-read the surrounding text.
5. **K–3 as games** — For the youngest bands, treat MicroSims as guided games you run together rather than independent reading-supported activities.
6. **Offline access** — MicroSims require an internet connection unless you have built the site locally (see "Customizing Your Own Textbook" below).

!!! mascot-tip "Scout's Tip: Embed MicroSims Anywhere!"
    ![Scout shares a tip](../img/mascot/tip.png){ class="mascot-admonition-img" }
    You can add any MicroSim to **any web page** — a Google Site, a
    WordPress blog, an LMS like Canvas or Schoology, or even a plain
    HTML file. Just paste a single line of HTML:

    ```html
    <iframe src="https://dmccreary.github.io/health-education/sims/YOUR-MICROSIM-NAME/main.html"
        width="100%" height="450px"
        scrolling="no">
    </iframe>
    ```

    Replace `YOUR-MICROSIM-NAME` with the name of any MicroSim from
    the [MicroSims list](../sims/index.md). That's it — one line of
    code and your students have an interactive simulation on any page
    you control.

### MicroSim Specifications

Within each chapter, you'll find a collapsible **details** section below each MicroSim labeled with its name. Click to expand and see the full specification including:

- **Bloom's Taxonomy level** — What cognitive level the MicroSim targets (Remember, Understand, Apply, Analyze, Evaluate, Create)
- **Learning objective** — What students should be able to do after using the MicroSim
- **Interactive controls** — What sliders, buttons, and inputs are available
- **Default parameters** — The starting values when the MicroSim loads

These specifications are useful for lesson planning and for understanding the pedagogical intent behind each simulation.

## Using the Infographic Posters

### What is an Infographic Poster?

An **infographic poster** is a single, richly designed image that summarizes a health concept visually — a checklist, a comparison, a timeline, or a labeled diagram. Unlike MicroSims, posters are static images, which makes them easy to print, project, or paste into a slide deck or classroom wall display.

### How to Use Posters in Class

- **Print for the classroom wall** — Many posters work well as physical, printed reference material (e.g., a handwashing checklist or a "getting help" flowchart).
- **Warm-up discussion** — Project a poster at the start of class and ask students what they notice before introducing the related chapter.
- **Standalone use** — Because posters carry their own captions and context, you can use them independently of the chapter they were designed for, in health fairs, newsletters, or parent communications.

Browse the full catalog from the **"Posters"** section of the left navigation.

## The Learning Graph

### What is a Learning Graph?

A **learning graph** is a visual map showing how concepts in a course depend on each other. It is structured as a **DAG** (Directed Acyclic Graph) — a diagram where arrows show which concepts must be understood before others.

Because this site has eight parallel books, **each grade band has its own learning graph** rather than one graph for the whole site. Prerequisite edges are designed to flow band-to-band within the same strand (for example, Grade 3 Food and Nutrition concepts build on Grade 1–2 Food and Nutrition concepts), not across strands.

### What's in Each Band's Learning Graph Section

Open a band's "Learning Graph" section (under "Textbooks By Grade") to find:

- **Concept List** — every concept covered in that band, numbered and traceable back to a specific standards benchmark
- **Concept Taxonomy** — how concepts are grouped into categories
- **Graph Quality Analysis** — automated checks for orphaned concepts, missing prerequisites, and other graph-health issues
- **Taxonomy Distribution** — a breakdown of how many concepts fall into each category

Across all eight bands, the site currently tracks roughly **600 concepts** in total (ranging from about 45 in Kindergarten to about 135 in Grades 6–8 and 9–12, reflecting the greater depth expected at older grades).

### How Teachers Can Use the Learning Graph

- **Prerequisite checking** — Before teaching a concept, verify that students have covered its prerequisites in an earlier band or chapter.
- **Remediation** — If a student struggles with a concept, trace back to its prerequisites to find the gap.
- **Curriculum mapping** — Compare a band's learning graph to your district's own scope-and-sequence document to identify coverage gaps.
- **Enrichment** — Advanced students can explore concepts from the next band up by following the graph forward.

## Standards Alignment

This textbook's grade-band structure and benchmark coverage are built from Minnesota's **2025 K-12 Health Academic Standards** (Commissioner Approved, December 2025) — 8 anchor standards across 6 strands, tabulated for Kindergarten through Grade 5 individually and as grade bands 6–8 and 9–12. Each concept in every band's learning graph traces back to a specific benchmark or vocabulary term in that standards document.

See the [References](../references.md) page for links to the full standards PDF and supporting rulemaking documents. If you teach outside Minnesota, use the "Curriculum mapping" tip above to compare this site's learning graphs against your own state's standards — the underlying health content generalizes well even where benchmark codes differ.

## References

Each band's course-description page links to the site-wide [References](../references.md) page, which lists the state and national standards documents this textbook is built from. As chapter-level reference lists are added, they will appear alongside each chapter and link back to this same page for shared sources.

### A Note About Link Rot

**Link rot** is when a web link (URL) stops working because the page has been moved, renamed, or deleted. This is a common problem with any resource that links to external websites, including state government sites. If you or your students encounter a broken link:

1. Try searching for the document title on the source website (for example, `education.mn.gov`)
2. Use the [Wayback Machine](https://web.archive.org/) to find archived versions of the page
3. Report the broken link using GitHub Issues (see "Feedback" below)

## Feedback

### Reporting Issues and Suggestions

This textbook is an open-source project hosted on **GitHub**, a website where software and content projects are developed collaboratively. You don't need to understand programming to report a problem or suggest an improvement.

### What is a GitHub Issue?

A **GitHub Issue** is like a support ticket — it's a way to report a bug, suggest an improvement, or ask a question. Each issue gets a unique number and can be discussed by the project team and community.

### How to Submit Feedback

1. Go to the textbook's GitHub repository: [dmccreary/health-education](https://github.com/dmccreary/health-education)
2. Click the **"Issues"** tab at the top of the page
3. Click the green **"New issue"** button
4. Give your issue a clear title (e.g., "Broken link in Grade 5 references" or "Suggestion: Add MicroSim for topic X")
5. In the description, provide as much detail as possible:
    - Which band, chapter, or page has the problem
    - What you expected to see vs. what you actually see
    - Your browser and device (if relevant)
6. Click **"Submit new issue"**

You will need a free GitHub account to submit issues. If you prefer not to create an account, you can email feedback to the author using the [Contact](../contact.md) page.

### Types of Feedback Welcome

- **Typos and errors** — factual mistakes, spelling errors, broken formatting
- **Broken links** — URLs that no longer work
- **MicroSim bugs** — simulations that don't load or behave unexpectedly
- **Content suggestions** — topics that should be covered, examples that could be improved
- **Standards updates** — Minnesota's standards were still moving through rulemaking as of mid-2026; flag anything that no longer matches the current standard
- **Accessibility issues** — content that is difficult to read or navigate for students with disabilities

## Understanding the License

### What is a Creative Commons License?

A **license** is a legal document that explains what others are allowed to do with a piece of work. A **Creative Commons (CC) license** is a standardized, easy-to-understand license used for educational and creative content. It tells you exactly what permissions you have without needing a lawyer.

### This Textbook's License

This textbook uses the **CC BY-NC-SA 4.0** license. Here's what each part means:

| Code | Full Name | What It Means |
|------|-----------|---------------|
| **CC** | Creative Commons | A standard open license |
| **BY** | Attribution | You must give credit to the original author |
| **NC** | Non-Commercial | You cannot use the material to make money |
| **SA** | Share-Alike | If you modify the material, you must share it under the same license |
| **4.0** | Version 4.0 | The version of the license (the current standard) |

### What You CAN Do

- **Copy** the entire textbook, a single band, or individual chapters for your students
- **Share** the textbook link with other teachers, students, or parents
- **Print** chapters or posters for classroom use
- **Modify** the content — add your own examples, remove sections, change the order
- **Translate** the content into other languages
- **Create derivative works** — build your own version of the textbook based on this one

### What You CANNOT Do

- **Sell** the textbook or charge students for access
- **Remove attribution** — you must credit the original author (Dan McCreary)
- **Use a different license** — if you modify and share, it must remain CC BY-NC-SA 4.0
- **Claim it as your own work** — the attribution requirement means you must acknowledge the original source

For the full legal text, see the [Creative Commons License](../license.md) page.

## Customizing Your Own Textbook

One of the most powerful features of this textbook is that you can create your own customized version — for example, to swap in your own state's standards, add a district-specific chapter, or change the reading level of a single band. This section explains how, step by step.

### Key Technical Terms

Before we begin, here are some terms you'll need to understand:

- **Repository (repo)** — A folder on GitHub that contains all the files for a project. Think of it as the project's home directory.
- **Git** — A version control tool that tracks changes to files. It lets you see what changed, when, and by whom.
- **Clone** — Making a complete copy of a repository on your own computer.
- **Fork** — Making a complete copy of a repository on your own GitHub account (stays on GitHub, not your computer).
- **MkDocs** — The software that converts the textbook's markdown files into a website. You don't need to learn MkDocs deeply — just enough to make basic changes.
- **Markdown** — A simple text formatting language. If you can write an email, you can write Markdown. `**bold**` makes **bold**, `# Heading` makes a heading, and `-` makes a bullet point.
- **mkdocs.yml** — The main configuration file for the textbook website. It controls the site title, navigation structure, colors, and which features are enabled.

### Step 1: Create a GitHub Account

If you don't already have one, go to [github.com](https://github.com) and create a free account.

### Step 2: Fork or Clone the Repository

**Option A: Fork (easier, stays on GitHub)**

1. Go to [dmccreary/health-education](https://github.com/dmccreary/health-education)
2. Click the **"Fork"** button in the upper-right corner
3. This creates a copy in your own GitHub account that you can edit

**Option B: Clone (more control, works on your computer)**

1. Install Git on your computer ([git-scm.com](https://git-scm.com/))
2. Open a terminal (Command Prompt on Windows, Terminal on Mac)
3. Run this command:

```bash
git clone https://github.com/dmccreary/health-education.git
```

This downloads the entire textbook to your computer.

### Step 3: Make Changes

All content files are in the `docs/` folder. Each band's chapters live under `docs/bands/<band-id>/chapters/`. They are written in **Markdown** (`.md` files) — plain text files with simple formatting. You can edit them with any text editor.

#### Changing the Title and Description

Open `mkdocs.yml` and edit these lines:

```yaml
site_name: "Your Custom Textbook Title"
site_description: "Your description here"
site_author: "Your Name"
```

#### Changing the Colors

In `mkdocs.yml`, find the `palette` section:

```yaml
theme:
  palette:
    primary: 'indigo'    # Change to: blue, red, purple, teal, etc.
    accent: 'orange'     # Change the accent color
```

MkDocs Material supports these primary colors: red, pink, purple, deep purple, indigo, blue, light blue, cyan, teal, green, light green, lime, yellow, amber, orange, deep orange, brown, grey, blue grey.

#### Changing the Logo

Replace the file `docs/img/logo.png` with your own logo image (PNG format, approximately 128x128 pixels).

### Step 4: Preview Your Changes Locally

1. Install Python (version 3.8 or newer) from [python.org](https://python.org)
2. Install MkDocs and the Material theme:

```bash
pip install mkdocs mkdocs-material
```

3. Navigate to the project folder and start the preview server:

```bash
cd health-education
mkdocs serve
```

4. Open your browser to `http://127.0.0.1:8000/health-education/` to see your customized version

The preview server watches for file changes. When you edit and save a Markdown file, the page automatically refreshes in your browser.

### Step 5: Publish Your Version

To publish your customized textbook as a free website using GitHub Pages:

```bash
mkdocs gh-deploy
```

This command builds the website and publishes it to `https://YOUR-USERNAME.github.io/health-education/`. The process takes about 1–2 minutes.

## Customizing Your Analytics

### What is Web Analytics?

**Web analytics** is the process of measuring how visitors use a website — which pages they visit, how long they stay, and where they come from. For an educational textbook, analytics can help you understand which chapters and MicroSims students engage with most, and where they might be struggling.

### Google Analytics

This site can be connected to **Google Analytics** — a free service from Google that tracks website visits. If you fork this project, you'll want to set up your own analytics property rather than reusing the author's.

#### Setting Up Your Own Google Analytics

1. Go to [analytics.google.com](https://analytics.google.com/) and sign in with a Google account
2. Create a new **property** (Google's term for a tracked website)
3. Google will give you a **Measurement ID** — a code that looks like `G-XXXXXXXXXX`
4. In your `mkdocs.yml`, uncomment and update this section:

```yaml
extra:
  analytics:
    provider: google
    property: G-YOUR-MEASUREMENT-ID
```

5. Rebuild and deploy your site. Analytics data will start appearing within 24–48 hours.

#### What You Can Learn from Analytics

- **Which bands and chapters are most/least visited** — helps you identify where students might be skipping content
- **Average time on page** — longer times may indicate engagement or confusion
- **Device breakdown** — what percentage of students use phones vs. computers
- **Geographic distribution** — where your students are accessing from
- **Search terms** — what students search for on your site

### xAPI Monitoring (Advanced)

**xAPI** (Experience API, also called "Tin Can API") is an advanced standard for tracking detailed learning activities — not just page views, but specific interactions like "student moved a slider to position X" or "student completed a MicroSim scenario."

#### What is an LRS?

An **LRS** (Learning Record Store) is a database that stores xAPI learning records. Think of it as a specialized analytics system designed specifically for education. If you use an LRS, you can track granular student learning data.

#### Important: Regulatory Considerations

Before collecting student-specific learning data — especially in a health education context, where topics like Personal Safety, Sexual Health, and Substance Use are inherently sensitive — be aware of these regulations:

- **FERPA** (Family Educational Rights and Privacy Act) — U.S. federal law that protects student education records. If you collect data that can identify individual students, you must comply with FERPA.
- **COPPA** (Children's Online Privacy Protection Act) — U.S. federal law that applies to children under 13. Given this site's Kindergarten through Grade 5 content, most users will fall under COPPA and additional restrictions apply.
- **State laws** — Many U.S. states have additional student privacy laws, and health-specific data can carry extra protections.
- **GDPR** (General Data Protection Regulation) — European Union law that applies if any of your students are in the EU.

**Recommendation**: The Google Analytics setup described above is anonymous by default — it tracks aggregate page views, not individual students. This is the safest approach, particularly for health-topic content. If you want individual student tracking via xAPI, consult your school district's data privacy officer before proceeding.

## Scout the Dog: Your Pedagogical Agent

### What is a Pedagogical Agent?

A **pedagogical agent** is a character that appears throughout a textbook to guide students. Research shows that pedagogical agents improve student engagement and perception of learning — a phenomenon called the **persona effect**.

### How Scout Appears

Scout is a friendly golden retriever who appears as colored callout boxes (called **admonitions**) throughout each chapter. There are several types:

| Type | Purpose | Frequency |
|------|---------|-----------|
| Welcome | Introduces the chapter | Every chapter opening |
| Thinking | Highlights key insights | 2–3 per chapter |
| Tip | Shares practical advice | As needed |
| Warning | Alerts to common mistakes | As needed |
| Encourage | Supports students on harder concepts | Where students may struggle |
| Celebration | Celebrates progress | End of major sections |
| Neutral | General notes | As needed |

Scout appears no more than 5–6 times per chapter to avoid overuse, and Scout's admonitions are never placed back-to-back. In chapters covering Personal Safety, Violence Prevention, or Substance Use, Scout's tone stays plainly sincere with no dog-themed wordplay — those topics call for a steadier voice.

### Tips for Teachers

- **Read Scout's tips aloud** — They're written in a conversational tone that works well when spoken, especially for K–3 read-alouds.
- **Use as discussion prompts** — Scout's "thinking" admonitions highlight the most important insights in each chapter.
- **Encourage struggling students** — Point students to Scout's "encourage" admonitions when they're frustrated with a concept.
- **No mascot in instructor content** — This teacher's guide itself does not use Scout, by design; Scout is a student-facing device only.
