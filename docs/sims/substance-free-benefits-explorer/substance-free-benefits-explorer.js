// Substance-Free Benefits Explorer - MicroSim (click-to-reveal radial explorer)
// CANVAS_HEIGHT: 480
// Grade 6-8, Understand (L2): students identify and explain concrete benefits of
// remaining substance-free across sleep, athletics, academics, relationships, and
// brain development. A central "substance-free teen" figure is ringed by five
// clickable topic nodes; each opens an infobox. "See All Benefits" stacks all five
// as a printable-style summary. Warm green/gold palette reinforces positive framing.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let seeAllButton, resetButton;
let seeAll = false;

// Five benefit topics arranged around the central figure.
// angle is measured clockwise from straight up (12 o'clock), in radians.
let topics = [
  {
    key: 'sleep', name: 'Sleep', angle: -PI * 0.5,
    text: 'Alcohol, nicotine, and cannabis all disrupt healthy sleep cycles. ' +
          'A substance-free body settles into full, restorative sleep that ' +
          'rebuilds energy and locks in memories from the day.'
  },
  {
    key: 'athletic', name: 'Athletic\nPerformance', angle: -PI * 0.5 + (TWO_PI / 5),
    text: 'Staying substance-free keeps your heart, lungs, and muscles working ' +
          'at full capacity. You recover faster after workouts and have steady ' +
          'energy for practice, games, and everyday activity.'
  },
  {
    key: 'academic', name: 'Academic\nFocus', angle: -PI * 0.5 + 2 * (TWO_PI / 5),
    text: 'A clear, unaffected brain pays attention longer and holds new ' +
          'information better. Substance-free students find it easier to focus ' +
          'in class, study, and remember what they learned at test time.'
  },
  {
    key: 'relationships', name: 'Relationships', angle: -PI * 0.5 + 3 * (TWO_PI / 5),
    text: 'Being fully present helps you listen, keep promises, and build trust. ' +
          'Friends and family can count on you, and you can support them, ' +
          'without substances getting in the way.'
  },
  {
    key: 'brain', name: 'Brain\nDevelopment', angle: -PI * 0.5 + 4 * (TWO_PI / 5),
    text: 'The teen brain keeps wiring itself into the mid-twenties. Staying ' +
          'substance-free lets that growth happen normally, protecting long-term ' +
          'memory, judgment, and emotional control as you get older.'
  }
];

let selected = null;      // topic key currently open
let visited = {};         // topics the student has opened
let nodeScreen = {};      // key -> {x, y, r} in screen coords for hit-testing
let pulse = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  seeAllButton = createButton('See All Benefits');
  seeAllButton.mousePressed(toggleSeeAll);
  seeAllButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A central figure labeled "A Substance-Free Teen" is ringed by five ' +
    'clickable circular nodes: Sleep, Athletic Performance, Academic Focus, ' +
    'Relationships, and Brain Development. Clicking a node opens an infobox ' +
    'explaining that benefit. A "See All Benefits" button stacks all five ' +
    'explanations as a printable summary.', LABEL);
}

function positionControls() {
  seeAllButton.position(margin, drawHeight + 10);
  resetButton.position(margin + 150, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  pulse += 0.05;

  // backgrounds
  fill('honeydew');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('darkgreen');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Substance-Free Benefits Explorer', canvasWidth / 2, 8);

  if (seeAll) {
    drawSeeAll();
    return;
  }

  drawRadial();
  drawPanel();
}

function drawRadial() {
  // center of the ring
  let cx = canvasWidth / 2;
  let cy = 150;
  // radius scales down a little on narrow canvases so nodes stay on-screen
  let ringR = min(120, (canvasWidth - 2 * (margin + 46)) / 2);
  ringR = max(ringR, 96);
  let nodeR = 40;

  // spokes from figure to each node
  nodeScreen = {};
  stroke('darkseagreen');
  strokeWeight(2);
  for (let t of topics) {
    let nx = cx + cos(t.angle) * ringR;
    let ny = cy + sin(t.angle) * ringR;
    nodeScreen[t.key] = { x: nx, y: ny, r: nodeR };
    line(cx, cy, nx, ny);
  }
  noStroke();

  // central figure
  drawFigure(cx, cy);

  // nodes on top of spokes
  for (let t of topics) {
    let s = nodeScreen[t.key];
    let isSel = selected === t.key;
    let hover = dist(mouseX, mouseY, s.x, s.y) < s.r;
    // gently invite the first click before any interaction
    let invite = !selected && Object.keys(visited).length === 0;
    let extra = invite ? map(sin(pulse), -1, 1, 0, 5) : 0;

    strokeWeight(isSel ? 4 : 2.5);
    stroke(isSel ? 'darkgoldenrod' : 'seagreen');
    if (isSel) fill('gold');
    else if (hover) fill('palegoldenrod');
    else if (visited[t.key]) fill('palegreen');
    else fill('white');
    circle(s.x, s.y, s.r * 2 + extra);

    noStroke();
    fill('darkslategray');
    textAlign(CENTER, CENTER);
    textSize(12);
    text(t.name, s.x, s.y);
  }
}

function drawFigure(cx, cy) {
  // simple, positive teen icon in a warm circle
  push();
  stroke('seagreen');
  strokeWeight(3);
  fill('mintcream');
  circle(cx, cy, 92);
  // head
  noStroke();
  fill('goldenrod');
  circle(cx, cy - 14, 30);
  // shoulders / body
  fill('seagreen');
  arc(cx, cy + 30, 56, 60, PI, TWO_PI);
  rectMode(CENTER);
  rect(cx, cy + 20, 56, 24, 0, 0, 14, 14);
  rectMode(CORNER);
  pop();

  noStroke();
  fill('darkgreen');
  textAlign(CENTER, TOP);
  textSize(12);
  text('A Substance-Free Teen', cx, cy + 34);
}

function drawPanel() {
  let px = margin;
  let py = 288;
  let pw = canvasWidth - 2 * margin;
  let ph = drawHeight - py - margin;

  fill('white');
  stroke('mediumseagreen');
  strokeWeight(1.5);
  rect(px, py, pw, ph, 10);
  noStroke();

  if (selected) {
    let t = topics.find(q => q.key === selected);
    fill('darkgoldenrod');
    textAlign(LEFT, TOP);
    textSize(15);
    text(t.name.replace('\n', ' '), px + 14, py + 10);
    fill('black');
    textSize(13.5);
    text(t.text, px + 14, py + 34, pw - 28, ph - 44);
  } else {
    fill('seagreen');
    textAlign(CENTER, CENTER);
    textSize(15);
    text('Click a topic to see how staying substance-free helps.',
      px + 14, py + 8, pw - 28, ph - 16);
  }

  // progress note once all five are opened
  if (Object.keys(visited).length === 5 && selected) {
    fill('seagreen');
    textAlign(RIGHT, BOTTOM);
    textSize(12);
    text('You explored all five!', px + pw - 12, py + ph - 8);
  }
}

function drawSeeAll() {
  let px = margin;
  let py = 40;
  let pw = canvasWidth - 2 * margin;
  let ph = drawHeight - py - margin;

  fill('white');
  stroke('mediumseagreen');
  strokeWeight(1.5);
  rect(px, py, pw, ph, 10);
  noStroke();

  fill('darkgreen');
  textAlign(CENTER, TOP);
  textSize(14);
  text('All Benefits of Staying Substance-Free', px, py + 8, pw, 20);

  // stack each topic: bold label line + wrapped body
  let x = px + 14;
  let w = pw - 28;
  let y = py + 34;
  let rowH = (ph - 44) / topics.length;
  textAlign(LEFT, TOP);
  for (let i = 0; i < topics.length; i++) {
    let t = topics[i];
    fill('darkgoldenrod');
    textSize(13);
    let label = (i + 1) + '. ' + t.name.replace('\n', ' ');
    text(label, x, y);
    fill('black');
    textSize(11.5);
    text(t.text, x, y + 16, w, rowH - 18);
    y += rowH;
  }
}

function pointInCircle(px, py, s) {
  return dist(px, py, s.x, s.y) < s.r;
}

function mousePressed() {
  if (seeAll) return;                 // nodes inactive in summary view
  if (mouseY > drawHeight) return;    // ignore clicks in the control strip
  for (let t of topics) {
    let s = nodeScreen[t.key];
    if (s && pointInCircle(mouseX, mouseY, s)) {
      selected = t.key;
      visited[t.key] = true;
      return;
    }
  }
}

function toggleSeeAll() {
  seeAll = !seeAll;
  seeAllButton.html(seeAll ? 'Hide Summary' : 'See All Benefits');
  if (seeAll) {
    // opening the summary counts as seeing every benefit
    for (let t of topics) visited[t.key] = true;
  }
}

function resetAll() {
  selected = null;
  visited = {};
  seeAll = false;
  seeAllButton.html('See All Benefits');
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
