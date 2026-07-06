# Learning Graph Viewer

This interactive viewer lets you explore the learning graph for any of the
8 grade bands in *Health Education* — Kindergarten through Grade 9-12 —
each with its own concept list, dependency graph, and taxonomy, since this
book is a collection of band-scoped resources rather than a single course
(see the [Course Description](../../course-description.md)).

## Features

- **Grade Band Selector**: Choose which band's learning graph to display
  from the dropdown at the top of the sidebar
- **Search**: Type in the search box to find specific concepts within the
  selected band
- **Category Filtering**: Use checkboxes to show/hide concept categories
- **Interactive Navigation**: Click and drag to explore, scroll to zoom
- **Statistics**: View real-time counts of visible nodes and edges

## Using the Viewer

1. **Select a Grade Band**: Use the dropdown at the top of the sidebar to
   switch between Kindergarten, Grade 1, Grade 2, Grade 3, Grade 4, Grade 5,
   Grade 6-8, and Grade 9-12. Switching bands reloads the graph, legend, and
   statistics for that band.

2. **Search for Concepts**: Start typing in the search box to find concepts
   within the currently selected band. Click on a result to focus on that
   node.

3. **Filter by Category**: Use the category checkboxes in the sidebar to
   show or hide groups of related concepts. Use "Check All" or "Uncheck
   All" for bulk operations. Categories vary slightly by band — Grades 6-8
   and 9-12 add a Substance Use Awareness and Prevention category not
   present in the K-5 bands.

4. **Navigate the Graph**:
   - Drag to pan around the graph
   - Scroll to zoom in and out
   - Click on a node to select it and highlight its connections

5. **View Statistics**: The sidebar shows counts of visible nodes, edges,
   and foundational concepts for the currently selected band.

## Graph Structure

- **Foundational Concepts** (left side): Prerequisites with no dependencies
- **Advanced Concepts** (right side): Topics that build on multiple prerequisites
- **Edges**: Arrows point from a concept to its prerequisites

## Launch the Viewer

[Open Learning Graph Viewer](./main.html){ .md-button .md-button--primary }

<iframe src="./main.html" width="100%" height="600px" frameborder="0"></iframe>
