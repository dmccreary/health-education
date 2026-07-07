// How Physical Activity Helps the Body - MicroSim (click-to-reveal explorer)
// CANVAS_HEIGHT: 490
// Grade 2, Understand (L2): students describe how physical activity benefits
// different parts of the body by clicking glowing hotspots on a friendly body
// outline and reading a warm benefit message for each part. A labeled clickable
// diagram (not a continuous animation) suits an explain/describe objective.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let showAllButton;
let resetButton;

// Hotspot zones. dx/dy are offsets from the figure anchor (set in draw).
let zones = [
  { key: 'head', name: 'Head', dx: 0, dy: -168, r: 24, col: 'mediumpurple',
    benefit: 'Being active can help your brain feel calmer and help you sleep better at night.' },
  { key: 'chest', name: 'Chest', dx: 0, dy: -96, r: 26, col: 'indianred',
    benefit: 'Physical activity makes your heart and lungs stronger, so they can send energy all over your body.' },
  { key: 'body', name: 'Whole Body', dx: 0, dy: -42, r: 22, col: 'goldenrod',
    benefit: "Your whole body uses energy from food when you move -- that's why eating well and staying active go together." },
  { key: 'legs', name: 'Legs', dx: 0, dy: 22, r: 24, col: 'seagreen',
    benefit: 'Movement builds strong muscles and bones in your legs and the rest of your body.' }
];

let selectedZone = null;   // key of the clicked hotspot
let showAll = false;       // Show All review mode
let zoneScreen = {};       // key -> {x, y, r} in screen coordinates
let pulse = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  showAllButton = createButton('Show All');
  showAllButton.mousePressed(toggleShowAll);
  showAllButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A friendly child body outline with four glowing hotspots at the head, ' +
    'chest, whole body, and legs. Clicking a hotspot shows a message about how ' +
    'physical activity helps that part. A Show All button lists every benefit.', LABEL);
}

function positionControls() {
  showAllButton.position(margin, drawHeight + 10);
  resetButton.position(margin + 100, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  pulse += 0.06;

  // backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(20);
  text('How Activity Helps Your Body', canvasWidth / 2, 10);

  // figure anchor: left portion of canvas, roughly vertically centered
  let fx = canvasWidth * 0.24;
  let fy = 250;
  drawFigure(fx, fy);
  drawZones(fx, fy);
  drawPanel();
}

function drawFigure(fx, fy) {
  // simple, inclusive front-facing body outline (flat friendly style)
  stroke('slategray');
  strokeWeight(3);
  fill('wheat');
  // head
  circle(fx, fy - 168, 46);
  // body / torso (rounded)
  rectMode(CENTER);
  rect(fx, fy - 70, 66, 130, 26);
  rectMode(CORNER);
  // arms
  strokeCap(ROUND);
  line(fx - 33, fy - 96, fx - 60, fy - 40);
  line(fx + 33, fy - 96, fx + 60, fy - 40);
  // legs
  line(fx - 16, fy - 6, fx - 22, fy + 70);
  line(fx + 16, fy - 6, fx + 22, fy + 70);
  noStroke();
}

function drawZones(fx, fy) {
  zoneScreen = {};
  for (let z of zones) {
    let x = fx + z.dx;
    let y = fy + z.dy;
    zoneScreen[z.key] = { x: x, y: y, r: z.r };

    let isSel = selectedZone === z.key || showAll;
    let hover = dist(mouseX, mouseY, x, y) < z.r;

    // gentle invite pulse on the chest before any interaction
    let invite = z.key === 'chest' && !selectedZone && !showAll;
    let extra = invite ? map(sin(pulse), -1, 1, 0, 7) : 0;

    // soft outer glow so each dot reads as a clickable target
    noStroke();
    fill(red(color(z.col)), green(color(z.col)), blue(color(z.col)), 70);
    circle(x, y, z.r * 2 + 12 + extra);

    // the dot itself: filled in its color when selected, colored ring otherwise
    stroke(z.col);
    strokeWeight(isSel ? 4 : 3);
    if (isSel) {
      fill(z.col);
    } else if (hover) {
      fill('lightyellow');
    } else {
      fill('white');
    }
    circle(x, y, z.r * 2 + extra);
    noStroke();
  }
}

function drawPanel() {
  let px = canvasWidth * 0.48;
  let pw = canvasWidth - px - margin;
  let py = 46;
  let ph = drawHeight - py - margin;
  let pad = 14;

  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(px, py, pw, ph, 12);
  noStroke();

  textAlign(LEFT, TOP);

  if (showAll) {
    // stacked review of all four benefits
    fill('navy');
    textSize(16);
    text('How activity helps you:', px + pad, py + pad, pw - 2 * pad);
    let y = py + pad + 30;
    textSize(14);
    for (let z of zones) {
      fill(z.col);
      text(z.name + ':', px + pad, y, pw - 2 * pad);
      y += 20;
      fill('black');
      text(z.benefit, px + pad, y, pw - 2 * pad, 70);
      y += 62;
    }
  } else if (selectedZone) {
    let z = zones.find(q => q.key === selectedZone);
    fill(z.col);
    textSize(20);
    text(z.name, px + pad, py + pad, pw - 2 * pad);
    fill('black');
    textSize(17);
    text(z.benefit, px + pad, py + pad + 34, pw - 2 * pad, ph - pad - 34);
  } else {
    fill('dimgray');
    textSize(17);
    text('Click a glowing dot to learn how activity helps that part of you.',
      px + pad, py + pad, pw - 2 * pad, ph - 2 * pad);
  }
}

function pointInCircle(px, py, c) {
  return dist(px, py, c.x, c.y) < c.r;
}

function mousePressed() {
  for (let z of zones) {
    let s = zoneScreen[z.key];
    if (s && pointInCircle(mouseX, mouseY, s)) {
      selectedZone = z.key;
      showAll = false;
      return;
    }
  }
}

function toggleShowAll() {
  showAll = !showAll;
  if (showAll) {
    selectedZone = null;
  }
}

function resetAll() {
  selectedZone = null;
  showAll = false;
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
