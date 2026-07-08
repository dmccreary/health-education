// Learning Graph Viewer Script
// Loads and displays an interactive learning graph using vis-network.
// This project has one learning-graph.json per grade band rather than a
// single site-wide graph, so a dropdown selector swaps the loaded JSON.

// Grade bands, in the order they should appear in the dropdown.
// Slugs match the docs/bands/<slug>/ directory names.
const BANDS = [
    'kindergarten',
    'grade-1',
    'grade-2',
    'grade-3',
    'grade-4',
    'grade-5',
    'grade-6-8',
    'grade-9-12'
];

// Convert a band directory slug into a title-case display label,
// e.g. "kindergarten" -> "Kindergarten", "grade-1" -> "Grade 1",
// "grade-6-8" -> "Grade 6-8" (the numeric span stays hyphenated
// rather than being split into separate words).
function bandLabel(slug) {
    const parts = slug.split('-');
    const firstWord = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    const rest = parts.slice(1).join('-');
    return rest ? `${firstWord} ${rest}` : firstWord;
}

// Determine which band to show first. A `?band=<slug>` query parameter
// (e.g. main.html?band=grade-3) overrides the default so each grade's
// learning-graph page can deep-link straight to its own graph. Unknown or
// missing values fall back to the first band (Kindergarten).
function getInitialBand() {
    const params = new URLSearchParams(window.location.search);
    const requested = params.get('band');
    return BANDS.includes(requested) ? requested : BANDS[0];
}

let network = null;
let allNodes = [];
let allEdges = [];
let groups = {};
let visibleGroups = new Set();
let currentBand = getInitialBand();

// Precomputed once per band load — never change until the band changes
let nodesWithDeps = new Set(); // set of node IDs that have outgoing edges
let groupCounts = {};          // { groupId: count } for legend labels

// Populate the band-selector dropdown and wire up its change handler.
function setupBandSelector() {
    const select = document.getElementById('band-select');
    select.innerHTML = '';

    BANDS.forEach(slug => {
        const option = document.createElement('option');
        option.value = slug;
        option.textContent = bandLabel(slug);
        select.appendChild(option);
    });

    select.value = currentBand;
    select.addEventListener('change', () => {
        currentBand = select.value;
        loadGraph(currentBand);
    });
}

// Load the learning graph data for a given band
async function loadGraph(bandSlug) {
    const path = `../../bands/${bandSlug}/learning-graph/learning-graph.json`;

    // Reset per-band state so a prior band's data can't leak into the new one.
    if (network) {
        network.destroy();
        network = null;
    }
    allNodes = [];
    allEdges = [];
    groups = {};
    visibleGroups = new Set();
    nodesWithDeps = new Set();
    groupCounts = {};
    document.getElementById('search').value = '';
    document.getElementById('search-results').innerHTML = '';
    document.getElementById('search-results').style.display = 'none';

    const loadingMsg = document.getElementById('loading-message');
    loadingMsg.textContent = 'Loading concepts and edges...';
    loadingMsg.style.display = 'block';

    try {
        const response = await fetch(path);
        const data = await response.json();

        allNodes = data.nodes || [];
        groups = data.groups || {};

        // Assign explicit integer IDs to every edge at load time.
        allEdges = (data.edges || []).map((edge, i) => ({
            ...edge,
            id: edge.id !== undefined ? edge.id : i
        }));

        // Initialize all groups as visible
        Object.keys(groups).forEach(g => visibleGroups.add(g));

        // Precompute values that never change until the next band load
        nodesWithDeps = new Set(allEdges.map(e => e.from));
        groupCounts = {};
        allNodes.forEach(n => {
            groupCounts[n.group] = (groupCounts[n.group] || 0) + 1;
        });

        const title = (data.metadata && data.metadata.title) || bandLabel(bandSlug);
        document.getElementById('graph-title').textContent = title;
        document.title = `Learning Graph Viewer — ${title}`;

        initializeNetwork();
        buildLegend();
        updateStats();

    } catch (error) {
        console.error('Error loading learning graph:', error);
        loadingMsg.style.display = 'none';
        document.getElementById('network').innerHTML =
            `<p style="color: red; padding: 20px;">Error loading learning graph. Make sure learning-graph.json exists at ${path}</p>`;
    }
}

// Initialize the vis-network visualization
function initializeNetwork() {
    const container = document.getElementById('network');
    container.innerHTML = '';

    // Create nodes DataSet - colors are handled by the groups option
    const nodes = new vis.DataSet(allNodes);

    // Create edges DataSet — use allEdges which already have explicit IDs
    const edges = new vis.DataSet(allEdges.map(edge => ({
        ...edge,
        arrows: 'to',
        color: { color: '#888', opacity: 0.6 }
    })));

    const data = { nodes, edges };

    // Build vis-network groups configuration from JSON groups
    const visGroups = {};
    Object.entries(groups).forEach(([groupId, groupInfo]) => {
        visGroups[groupId] = {
            color: {
                background: groupInfo.color || 'lightgray',
                border: groupInfo.color || 'lightgray',
                highlight: {
                    background: groupInfo.color || 'lightgray',
                    border: '#333'
                },
                hover: {
                    background: groupInfo.color || 'lightgray',
                    border: '#666'
                }
            },
            font: {
                color: groupInfo.font?.color || 'black'
            }
        };
    });

    const options = {
        groups: visGroups,
        layout: {
            randomSeed: 42,
            improvedLayout: true
        },
        physics: {
            enabled: true,
            solver: 'forceAtlas2Based',
            forceAtlas2Based: {
                gravitationalConstant: -50,
                centralGravity: 0.01,
                springLength: 100,
                springConstant: 0.08,
                damping: 0.4,
                avoidOverlap: 0.5
            },
            stabilization: {
                enabled: true,
                iterations: 1000,
                updateInterval: 25
            }
        },
        nodes: {
            shape: 'box',
            margin: 4,
            font: {
                size: 14,
                face: 'Arial'
            },
            borderWidth: 2,
            shadow: true
        },
        edges: {
            smooth: {
                type: 'cubicBezier',
                forceDirection: 'horizontal',
                roundness: 0.4
            },
            width: 1.5
        },
        interaction: {
            hover: true,
            tooltipDelay: 200,
            zoomView: true,
            dragView: true
        }
    };

    network = new vis.Network(container, data, options);

    // Remove the loading message once the initial layout is computed.
    network.once('stabilizationIterationsDone', () => {
        const msg = document.getElementById('loading-message');
        if (msg) msg.style.display = 'none';
    });

    // Turn off physics after 5 seconds to stop spinning
    setTimeout(() => {
        if (network) network.setOptions({ physics: { enabled: false } });
    }, 5000);

    // Re-enable physics when user starts dragging a node
    network.on('dragStart', function(params) {
        if (params.nodes.length > 0) {
            network.setOptions({ physics: { enabled: true } });
        }
    });

    // Turn off physics when user releases the node
    network.on('dragEnd', function(params) {
        if (params.nodes.length > 0) {
            setTimeout(() => {
                if (network) network.setOptions({ physics: { enabled: false } });
            }, 1000);
        }
    });

    // Handle node selection
    network.on('selectNode', function(params) {
        if (params.nodes.length > 0) {
            highlightNode(params.nodes[0]);
        }
    });
}

// Build the category legend
function buildLegend() {
    const legendContainer = document.getElementById('legend');
    legendContainer.innerHTML = '';

    Object.entries(groups).forEach(([groupId, groupInfo]) => {
        const count = groupCounts[groupId] || 0;

        const item = document.createElement('div');
        item.className = 'legend-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `group-${groupId}`;
        checkbox.checked = true;
        checkbox.addEventListener('change', () => toggleGroup(groupId, checkbox.checked));

        const colorBox = document.createElement('span');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = groupInfo.color || 'lightgray';

        const label = document.createElement('label');
        label.htmlFor = `group-${groupId}`;
        label.textContent = `${groupInfo.classifierName || groupId} (${count})`;

        item.appendChild(checkbox);
        item.appendChild(colorBox);
        item.appendChild(label);
        legendContainer.appendChild(item);
    });
}

// Toggle visibility of a category group
function toggleGroup(groupId, visible) {
    if (visible) {
        visibleGroups.add(groupId);
    } else {
        visibleGroups.delete(groupId);
    }
    updateVisibility();
}

// Update node and edge visibility based on selected groups
function updateVisibility() {
    const visibleNodeIds = new Set(
        allNodes.filter(n => visibleGroups.has(n.group)).map(n => n.id)
    );

    const nodes = network.body.data.nodes;
    const edges = network.body.data.edges;

    // Batch update nodes — single DataSet.update() call triggers one redraw
    nodes.update(allNodes.map(node => ({
        id: node.id,
        hidden: !visibleGroups.has(node.group)
    })));

    // Batch update edges
    edges.update(allEdges.map(edge => ({
        id: edge.id,
        hidden: !(visibleNodeIds.has(edge.from) && visibleNodeIds.has(edge.to))
    })));

    updateStats(visibleNodeIds);
}

// Update statistics display
function updateStats(visibleNodeIds) {
    if (!visibleNodeIds) {
        visibleNodeIds = new Set(
            allNodes.filter(n => visibleGroups.has(n.group)).map(n => n.id)
        );
    }

    const visibleEdgeCount = allEdges.filter(
        e => visibleNodeIds.has(e.from) && visibleNodeIds.has(e.to)
    ).length;

    const foundationalCount = allNodes.filter(
        n => !nodesWithDeps.has(n.id) && visibleGroups.has(n.group)
    ).length;

    document.getElementById('visible-nodes').textContent = visibleNodeIds.size;
    document.getElementById('visible-edges').textContent = visibleEdgeCount;
    document.getElementById('foundational-nodes').textContent = foundationalCount;
}

// Setup search functionality (attached once — reads live `allNodes`/`groups`)
function setupSearch() {
    const searchInput = document.getElementById('search');
    const resultsContainer = document.getElementById('search-results');

    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        resultsContainer.innerHTML = '';

        if (query.length < 2) {
            resultsContainer.style.display = 'none';
            return;
        }

        const matches = allNodes.filter(n =>
            n.label.toLowerCase().includes(query)
        ).slice(0, 10);

        if (matches.length === 0) {
            resultsContainer.style.display = 'none';
            return;
        }

        matches.forEach(node => {
            const item = document.createElement('div');
            item.className = 'search-result-item';

            const groupInfo = groups[node.group] || {};
            item.innerHTML = `
                <span class="result-label">${node.label}</span>
                <span class="result-category" style="background-color: ${groupInfo.color || 'lightgray'}">
                    ${groupInfo.classifierName || node.group}
                </span>
            `;

            item.addEventListener('click', () => {
                selectNode(node.id);
                searchInput.value = node.label;
                resultsContainer.style.display = 'none';
            });

            resultsContainer.appendChild(item);
        });

        resultsContainer.style.display = 'block';
    });

    // Hide results when clicking outside
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !resultsContainer.contains(e.target)) {
            resultsContainer.style.display = 'none';
        }
    });
}

// Select and focus on a node
function selectNode(nodeId) {
    network.selectNodes([nodeId]);
    network.focus(nodeId, {
        scale: 1.2,
        animation: {
            duration: 500,
            easingFunction: 'easeInOutQuad'
        }
    });
    highlightNode(nodeId);
}

// Highlight a node and its connections
function highlightNode(nodeId) {
    const connectedNodes = network.getConnectedNodes(nodeId);
    const connectedSet = new Set([nodeId, ...connectedNodes]);

    const nodes = network.body.data.nodes;
    nodes.update(allNodes.map(node => ({
        id: node.id,
        opacity: connectedSet.has(node.id) ? 1 : 0.3
    })));

    // Reset opacity after a delay — batched for performance
    setTimeout(() => {
        nodes.update(allNodes.map(node => ({ id: node.id, opacity: 1 })));
    }, 3000);
}

// Setup control buttons (attached once — reads live `groups` on click)
function setupControls() {
    // Toggle sidebar
    document.getElementById('toggle-sidebar').addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        const content = document.getElementById('sidebar-content');
        sidebar.classList.toggle('collapsed');
        content.style.display = sidebar.classList.contains('collapsed') ? 'none' : 'block';
    });

    // Check all groups
    document.getElementById('check-all').addEventListener('click', function() {
        Object.keys(groups).forEach(groupId => {
            visibleGroups.add(groupId);
            const checkbox = document.getElementById(`group-${groupId}`);
            if (checkbox) checkbox.checked = true;
        });
        updateVisibility();
    });

    // Uncheck all groups
    document.getElementById('uncheck-all').addEventListener('click', function() {
        Object.keys(groups).forEach(groupId => {
            visibleGroups.delete(groupId);
            const checkbox = document.getElementById(`group-${groupId}`);
            if (checkbox) checkbox.checked = false;
        });
        updateVisibility();
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    setupBandSelector();
    setupSearch();
    setupControls();
    loadGraph(currentBand);
});
