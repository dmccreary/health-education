# Content Generation Guide

Guidelines for AI-generated student-facing content in this textbook
(chapters, lesson plans, quizzes, FAQ). Instructor-facing content (teacher
guides, instructor guides) does not need to follow the mascot guidelines
below.

Note that the reading level is dependant on the band.  Each book
is located in @docs/bands/{$BAND_ID} where $BAND_ID is:

kindergarten
grade-1
grade-2
grade-3
grade-4
grade-5
grade-6-8
grade-9-12

Make sure the reading level is written for the appropriate grade level.
For grades K-3 the teacher is the audience since we don't expect reading
proficiency until the end of grade 3.  For grades K-3 interactive MicroSim "games"
are more appropriate for student use.

## Learning Mascot: Scout the Dog

### Mascot File Index

The canonical files for this mascot. When editing any of these, update the
others in the same turn so they stay in sync.

| File | Purpose |
|------|---------|
| [`docs/img/mascot/character-sheet.md`](docs/img/mascot/character-sheet.md) | Canonical identity document (name, species, colors, voice). Source of truth. |
| [`docs/img/mascot/image-prompts.md`](docs/img/mascot/image-prompts.md) | Self-contained AI prompts for regenerating each pose. |
| [`docs/img/mascot/neutral.png`](docs/img/mascot/neutral.png) | Default / general-purpose pose. |
| [`docs/img/mascot/welcome.png`](docs/img/mascot/welcome.png) | Chapter-opening pose. |
| [`docs/img/mascot/thinking.png`](docs/img/mascot/thinking.png) | Key-concept pose. |
| [`docs/img/mascot/tip.png`](docs/img/mascot/tip.png) | Hint / helpful-guidance pose. |
| [`docs/img/mascot/warning.png`](docs/img/mascot/warning.png) | Common-mistake / pitfall pose. |
| [`docs/img/mascot/encouraging.png`](docs/img/mascot/encouraging.png) | Difficult-content / struggle pose. |
| [`docs/img/mascot/celebration.png`](docs/img/mascot/celebration.png) | End-of-chapter / achievement pose. |
| [`docs/css/mascot.css`](docs/css/mascot.css) | Custom admonition styles for the seven pose contexts. |
| [`docs/learning-graph/mascot-test.md`](docs/learning-graph/mascot-test.md) | Rendering test page that exercises every admonition style. |

### Character Overview

- **Name**: Scout
- **Species**: Dog (golden retriever)
- **Personality**: Friendly, Encouraging, Patient, Supportive
- **Catchphrase**: "Healthy choices, happy you!"
- **Visual**: Golden-tan fur, floppy ears, simple deep-orange neckerchief, flat cartoon vector style

### Voice Characteristics

- Uses simple, warm, encouraging language that scales in vocabulary with the grade band
- Refers to the reader as "friend"; never uses gendered pronouns for Scout — always "Scout" or "they/them"
- Uses light dog-themed phrasing very sparingly, and never in content covering Personal Safety, Violence Prevention, or Substance Use, where the tone should stay plainly sincere
- Signature phrases: "Healthy choices, happy you!", "You've got this!", "Let's think it through together."

### Mascot Admonition Format

Always place mascot images in the admonition body, never in the title bar:

    !!! mascot-welcome "Title Here"
        ![Scout waving welcome](../../img/mascot/welcome.png){ class="mascot-admonition-img" }
        Admonition text goes here after the image.

**Image paths** are relative to the rendered page URL, not the markdown file. For a chapter page at `docs/bands/<band>/chapters/01-intro/index.md`, the rendered URL directory is `bands/<band>/chapters/01-intro/` — four segments deep from the docs root — so use `../../../../img/mascot/` (four levels up, then into `img/mascot/`).

### Placement Rules

| Context | Admonition Type | Frequency |
|---------|----------------|-----------|
| General note / sidebar | mascot-neutral | As needed |
| Chapter opening | mascot-welcome | Every chapter |
| Key concept | mascot-thinking | 2-3 per chapter |
| Helpful tip | mascot-tip | As needed |
| Common mistake | mascot-warning | As needed |
| Difficult content | mascot-encourage | Where students may struggle |
| Section completion | mascot-celebration | End of major sections |

### Do's and Don'ts

**Do:**

- Use Scout to introduce new topics warmly
- Include the catchphrase in welcome admonitions
- Keep dialogue brief (1-3 sentences)
- Match the pose/image to the content type
- Keep tone plainly sincere (no puns) in Personal Safety, Violence Prevention, and Substance Use content

**Don't:**

- Use Scout more than 5-6 times per chapter
- Put mascot admonitions back-to-back
- Use the mascot for purely decorative purposes
- Change Scout's personality or speech patterns
