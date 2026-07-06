# Session Log — Learning Graph Generator v0.05 — Grade 1 Band

**Date:** 2026-07-06
**Skill:** learning-graph-generator (version 0.05)
**Band:** Grade 1
**Source:** docs/bands/grade-1/course-description.md
**Output directory:** docs/bands/grade-1/learning-graph/

## Overrides applied for this run

- Source course description read from `docs/bands/grade-1/course-description.md`
  (not the site-wide `docs/course-description.md`), since this is a per-band run
  (one of 8 parallel grade bands).
- Output directory `docs/bands/grade-1/learning-graph/` (not the site-wide
  `docs/learning-graph/`).
- Concept count target overridden to ~50-55 (not the skill's 200-concept
  default) because Grade 1's course description enumerates only 24
  benchmark-tagged topics by design (identify/explain-level, early-elementary
  standards for age 6-7). Final count: **55 concepts**.
- Taxonomy target reduced to 7 categories (not ~12), seeded from the 5
  content strands + Skill Standards cross-cutting group, kept identical in
  naming/abbreviation to the Kindergarten band's scheme for cross-band
  comparability.
- Skipped interactive user-approval pauses (Step 1's "ask to proceed", Step
  2's "ask user to review concept list") — unattended run.
- Did not modify `mkdocs.yml` (nav wiring deferred to a separate step).
- Did not run any git commands.
- Did not touch any file outside `docs/bands/grade-1/`.

## Steps completed

| Step | Output | Status |
|---|---|---|
| 0 | Copied analyze-graph.py, csv-to-json.py, taxonomy-distribution.py, add-taxonomy.py, learning-graph-schema.json, index-template.md into working dir | Done |
| 1 | course-description-assessment.md | Done — score 87/100 |
| 2 | concept-list.md | Done — 55 concepts |
| 3 | learning-graph.csv (ConceptID, ConceptLabel, Dependencies) | Done |
| 4 | quality-metrics.md via `python3 analyze-graph.py learning-graph.csv quality-metrics.md` | Done — valid DAG, 0 cycles, 0 orphans, 1 connected component |
| 5 | concept-taxonomy.md | Done — 7 categories |
| 5b | taxonomy-names.json | Done |
| 6 | Added TaxonomyID column to learning-graph.csv (assigned directly, not via add-taxonomy.py, for precise per-concept control) | Done |
| 7 | metadata.json | Done |
| 8 | color-config.json (reused Kindergarten's exact FOOD/GROW/EMOT/WELL/SAFE/SKIL/FOUND color mapping for cross-band visual consistency) | Done |
| 9 | learning-graph.json via `python3 csv-to-json.py learning-graph.csv learning-graph.json color-config.json metadata.json taxonomy-names.json` | Done — 55 nodes, 72 edges, 7 groups |
| 10 | taxonomy-distribution.md via `python3 taxonomy-distribution.py learning-graph.csv taxonomy-distribution.md taxonomy-names.json` | Done — all categories under 30% |
| 11 | index.md (from index-template.md, course-description link set to `../course-description.md`) | Done |
| 12 | This session log | Done |

## Python script versions used

- `analyze-graph.py` — copy from skill directory (no internal version string; behavior matches skill v0.05 docs)
- `csv-to-json.py` — v0.04 (self-reported in stdout: "csv-to-json v0.04")
- `taxonomy-distribution.py` — copy from skill directory (no internal version string)
- `add-taxonomy.py` — copied but not used; TaxonomyID was assigned directly in the CSV by hand for precise control given the small concept set

## Quality scores

- **Course description quality score:** 87/100 (Step 1) — above the 70 proceed
  threshold and the 80 "good quality" guidance.
- **Learning graph quality score:** ~90/100 (Step 4, holistic assessment) —
  valid DAG, no cycles, no self-dependencies, no orphaned nodes, single
  connected component, 1 foundational concept (Health), max dependency chain
  length 6, terminal-node percentage 34.5% (within the skill's healthy
  5-40% range after a cross-dependency-strengthening pass reduced it from an
  initial 43.6%).

## Iteration note

The first draft of `learning-graph.csv` produced a terminal-node percentage
of 43.6%, just above the skill's healthy-range ceiling of 40%. A second pass
added several meaningful cross-strand dependencies (e.g., `Healthy Peer
Traits` also depending on `Kindness`; `Asking A Trusted Adult` also
depending on `Safe Behavior`; `Seeking Help` also depending on `Asking A
Trusted Adult`) to enrich pathways without inventing unrelated content.
Re-running `analyze-graph.py` confirmed the DAG remained valid (0 cycles, 1
connected component) and brought the terminal-node percentage to 34.5%,
inside the healthy range, while raising the max dependency chain length from
5 to 6.

## Known issue (pre-existing, not introduced by this run)

`learning-graph-schema.json` (as shipped in the skill) expects
`groups.<ID>.color` to be a nested object (`{"color": "...", "font": {...}}`),
but `csv-to-json.py` (also shipped in the same skill, v0.04) emits `color` as
a plain CSS color-name string, matching the flat format documented in
SKILL.md's own examples and consumed by the site's actual vis-network graph
viewer. This is a schema/generator inconsistency in the shared skill package
itself (used identically across all 8 bands and the site-wide graph), not a
defect specific to the Grade 1 output. The generated `learning-graph.json` is
valid JSON and structurally correct for the vis-network viewer (verified:
parses cleanly, contains `metadata`, `groups`, `nodes`, `edges`, 55 nodes, 72
edges).
