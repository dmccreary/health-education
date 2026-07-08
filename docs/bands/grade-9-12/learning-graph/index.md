---
title: Learning Graph — Grade 9-12
description: Introduction to the Grade 9-12 band learning graph.
---

# Learning Graph — Grade 9-12

This section contains the learning graph for the Grade 9-12 band of the
*Health Education* intelligent textbook. A learning graph is a graph of
concepts used in this band. Each concept is represented by a node in a
network graph. Concepts are connected by directed edges that indicate what
concepts each node depends on before that concept is understood by the
student.

A learning graph is the foundational data structure for intelligent
textbooks that can recommend learning paths. A learning graph is like a
roadmap of concepts to help students arrive at their learning goals.

At the left of the learning graph are prerequisite or foundational concepts.
They have no outbound edges. They only have inbound edges for other concepts
that depend on understanding these foundational prerequisite concepts. At
the far right we have the most advanced concepts in the band. To master
these concepts you must understand all the concepts that they point to.

This band's graph is the largest in the series — 136 concepts, slightly
larger than Grade 6-8's 133 — because Grade 9-12 is the terminal band and
enumerates the largest topic set of any band (61 topic benchmarks plus 20
Skill Standards benchmarks, see the
[Course Description Assessment](./course-description-assessment.md) for the
rationale). It builds directly on the Grade 6-8 band's graph across all six
strands, extending each toward the evaluative, systemic, and cultural
reasoning that defines this band: designing and evaluating personal plans,
analyzing policy and systemic factors, and reasoning about cultural safety,
Indigenous perspectives, and tribal sovereignty.

## Explore the Interactive Learning Graph

Use the interactive viewer to explore this band's concepts and their
dependencies. Drag to pan, scroll to zoom, and click a concept to highlight
its connections. The viewer opens with the Grade 9-12 graph loaded; you can
switch to any other grade band from the dropdown.

[Open the Grade 9-12 Learning Graph Viewer](../../../sims/graph-viewer/main.html?band=grade-9-12){ .md-button .md-button--primary }

<iframe src="../../../sims/graph-viewer/main.html?band=grade-9-12" width="100%" height="600px" frameborder="0"></iframe>

## Course Description

We use the [Course Description](../course-description.md) as
the source document for the concepts that are included in this band.
The course description uses the 2001 Bloom taxonomy to order learning objectives.

## List of Concepts

We use generative AI to convert the course description into a [Concept List](./concept-list.md).
Each concept is in the form of a short Title Case label with most labels under 32 characters long.

## Concept Dependency List

We next use generative AI to create a Directed Acyclic Graph (DAG). DAGs do not have cycles where
concepts depend on themselves. We provide the DAG in two formats. One is a [CSV file](learning-graph.csv) and the other
format is a [JSON file](learning-graph.json) that uses the vis-network JavaScript library format. The vis-network format uses `nodes`, `edges` and `metadata`
elements with edges containing `from` and `to` properties. This makes it easy for you to view and edit the learning
graph using an editor built with the vis-network tools.

## Analysis & Documentation

### Course Description Quality Assessment

This report rates the overall quality of the course description for the purpose of generating a learning graph.

- Course description fields and content depth analysis
- Validates course description has sufficient depth for generating a right-sized concept set for this band
- Compares course description against similar bands
- Identifies content gaps and strengths
- Suggests areas of improvement

[View the Course Description Quality Assessment](course-description-assessment.md)

### Learning Graph Quality Validation

This report gives you an overall assessment of the quality of the learning graph.
It uses graph algorithms to look for specific quality patterns in the graph.

- Graph structure validation - all concepts are connected
- DAG validation (no cycles detected)
- Foundational concepts: 1 entry point (Health)
- Indegree distribution analysis
- Longest dependency chains (maximum length: 14)
- Connectivity: percent of nodes connected to the main cluster

[View the Learning Graph Quality Validation](quality-metrics.md)

### Concept Taxonomy

In order to see patterns in the learning graph, it is useful to assign colors
to each concept based on the concept type. We use generative AI to
create categories for our concepts and then place each concept
into a single primary classifier. This band uses the same 8 categories
established at Grade 6-8, since all six content strands plus Skill Standards
carry forward unchanged in structure at this terminal band.

- A concept classifier taxonomy with 8 categories
- Category organization - foundational elements first
- Balanced categories (0.7% - 27.2% each)
- All categories under the 30% threshold
- Clear 3-5 letter abbreviations for use in the CSV file

[View the Concept Taxonomy](concept-taxonomy.md)

### Taxonomy Distribution

This report shows how many concepts fit into each category of the taxonomy.
Our goal is a somewhat balanced taxonomy where each category holds a
reasonable number of concepts. We also don't want any category to contain
over 30% of our concepts.

- Statistical breakdown
- Detailed concept listing by category
- Visual distribution table
- Balance verification

[View the Taxonomy Distribution Report](./taxonomy-distribution.md)
