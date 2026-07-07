// Ability-Inclusive Classroom Infographic - MicroSim (clickable hotspots)
// CANVAS_HEIGHT: 490
// Grade 5, Understand (L2): students explain how everyday classroom tools support
// classmates with different abilities — ordinary supports, not special treatment.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let showLabelsButton;
let resetButton;

// Six supports as hotspots (positions are fractions of the scene, set in draw)
let spots = [
  { tag: 'Accessible desk', fx: 0.13, fy: 0.72,
    desc: 'Accessible desk & ramp: removes a physical barrier so a classmate using a wheelchair or walker can reach their desk and the front of the room.' },
  { tag: 'Headphones', fx: 0.40, fy: 0.30,
    desc: 'Noise-canceling headphones: help a classmate whose brain processes sound differently avoid feeling overwhelmed by noise.' },
  { tag: 'Comm. device', fx: 0.66, fy: 0.70,
    desc: 'Communication device: lets a classmate who does not use spoken words join fully in class discussion.' },
  { tag: 'Large print', fx: 0.34, fy: 0.72,
    desc: 'Large-print worksheet: supports a classmate with low vision or certain learning differences so they can read comfortably.' },
  { tag: 'Quiet corner', fx: 0.86, fy: 0.34,
    desc: 'Quiet corner with a beanbag: gives any student, especially a neurodivergent student, a calm space to regroup.' },
  { tag: 'Visual schedule', fx: 0.66, fy: 0.24,
    desc: 'Visual daily schedule: helps students who benefit from seeing, not just hearing, what happens next.' }
];

let selected = -1;
let showLabels = false;
let spotScreen = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  showLabelsButton = createButton('Show All Labels');
  showLabelsButton.mousePressed(() => { showLabels = !showLabels; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showLabels = false; });
  positionControls();
  describe('An illustrated classroom scene with six clickable hotspots for inclusive ' +
    'supports (accessible desk, headphones, communication device, large-print worksheet, ' +
    'quiet corner, visual schedule). Clicking a hotspot explains what it is, who uses it, ' +
    'and why it helps.', LABEL);
}

function positionControls() {
  showLabelsButton.position(10, drawHeight + 10);
  resetButton.position(155, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Our Inclusive Classroom', canvasWidth / 2, 8);

  let sceneY = 40, sceneH = 300;
  drawClassroom(sceneY, sceneH);
  drawHotspots(sceneY, sceneH);
  drawInfoStrip();
}

function drawClassroom(sceneY, sceneH) {
  // floor and back wall
  noStroke();
  fill('cornsilk');
  rect(0, sceneY, canvasWidth, sceneH * 0.62);
  fill('bisque');
  rect(0, sceneY + sceneH * 0.62, canvasWidth, sceneH * 0.38);
  // whiteboard
  fill('white'); stroke('gray'); strokeWeight(2);
  rect(canvasWidth * 0.30, sceneY + 16, canvasWidth * 0.4, 46, 4);
  // a couple of simple desks
  noStroke();
  fill('burlywood');
  rect(canvasWidth * 0.10, sceneY + sceneH * 0.66, 60, 12, 3);
  rect(canvasWidth * 0.60, sceneY + sceneH * 0.66, 60, 12, 3);
}

function drawHotspots(sceneY, sceneH) {
  spotScreen = [];
  for (let i = 0; i < spots.length; i++) {
    let x = spots[i].fx * canvasWidth;
    let y = sceneY + spots[i].fy * sceneH;
    let r = 16;
    spotScreen.push({ x: x, y: y, r: r });
    let sel = selected === i;
    let hover = dist(mouseX, mouseY, x, y) < r + 2;
    strokeWeight(sel ? 3 : 2);
    stroke(sel ? 'darkorange' : 'teal');
    fill(sel ? 'gold' : (hover ? 'paleturquoise' : color(64, 224, 208, 180)));
    circle(x, y, r * 2);
    noStroke();
    fill('teal');
    textAlign(CENTER, CENTER);
    textSize(12);
    text(i + 1, x, y);
    if (showLabels || hover || sel) {
      fill('black');
      textSize(11);
      textAlign(CENTER, TOP);
      let ly = y + r + 2;
      text(spots[i].tag, x - 45, ly, 90, 24);
    }
  }
}

function drawInfoStrip() {
  let sy = drawHeight - 92;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, sy, canvasWidth - margin * 2, 84, 8);
  noStroke();
  textAlign(LEFT, TOP);
  textSize(13);
  if (selected < 0) {
    fill('dimgray');
    text('Click a numbered spot to learn how each classroom tool helps. These supports ' +
      'are ordinary, not special treatment.', margin + 12, sy + 12, canvasWidth - margin * 2 - 24, 64);
  } else {
    fill('black');
    text(spots[selected].desc, margin + 12, sy + 12, canvasWidth - margin * 2 - 24, 64);
  }
}

function mousePressed() {
  for (let i = 0; i < spotScreen.length; i++) {
    let s = spotScreen[i];
    if (dist(mouseX, mouseY, s.x, s.y) < s.r + 2) { selected = i; return; }
  }
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
