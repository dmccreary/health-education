// Community Helpers Keep Us Safe - MicroSim (click-to-reveal hotspots)
// CANVAS_HEIGHT: 462
// Kindergarten, Remember (L1): students identify community helpers and the safety
// practice each supports. Large text for teacher read-aloud with pre-readers.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 410;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let resetButton;

let helpers = [
  { key: 'Crossing Guard', fx: 0.20, fy: 0.42,
    txt: 'The crossing guard helps everyone cross the street safely together.' },
  { key: 'Lifeguard', fx: 0.55, fy: 0.34,
    txt: 'The lifeguard watches the pool so everyone can swim safely.' },
  { key: 'Park Sign', fx: 0.84, fy: 0.46,
    txt: 'Safety signs remind everyone of the playground rules.' }
];

let selected = -1;
let spotScreen = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; });
  positionControls();
  describe('A neighborhood scene with three glowing hotspots — a crossing guard, a ' +
    'lifeguard, and a park safety sign. Clicking each reveals the safety practice that ' +
    'helper supports.', LABEL);
}

function positionControls() {
  resetButton.position(10, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  fill('lightcyan');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Community Helpers Keep Us Safe', canvasWidth / 2, 8);

  let sceneY = 46, sceneH = 250;
  drawScene(sceneY, sceneH);
  drawSpots(sceneY, sceneH);
  drawInfo();
}

function drawScene(sceneY, sceneH) {
  noStroke();
  // sky, ground, road
  fill('skyblue'); rect(0, sceneY, canvasWidth, sceneH * 0.55);
  fill('yellowgreen'); rect(0, sceneY + sceneH * 0.55, canvasWidth, sceneH * 0.45);
  fill('dimgray'); rect(0, sceneY + sceneH * 0.5, canvasWidth * 0.4, sceneH * 0.16);
  // pool
  fill('deepskyblue'); rect(canvasWidth * 0.45, sceneY + sceneH * 0.28, canvasWidth * 0.22, sceneH * 0.22, 8);
  // sign post
  fill('saddlebrown'); rect(canvasWidth * 0.83, sceneY + sceneH * 0.4, 6, sceneH * 0.3);
}

function drawSpots(sceneY, sceneH) {
  spotScreen = [];
  for (let i = 0; i < helpers.length; i++) {
    let x = helpers[i].fx * canvasWidth;
    let y = sceneY + helpers[i].fy * sceneH;
    spotScreen.push({ x: x, y: y, r: 24 });
    let sel = selected === i;
    let hover = dist(mouseX, mouseY, x, y) < 26;
    // glow
    noStroke(); fill(255, 215, 0, 90); circle(x, y, sel || hover ? 62 : 52);
    strokeWeight(sel ? 3 : 2); stroke(sel ? 'darkorange' : 'goldenrod');
    fill(sel ? 'gold' : 'lightyellow'); circle(x, y, 44);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(12);
    text(i + 1, x, y);
    fill('navy'); textAlign(CENTER, TOP); textSize(12);
    text(helpers[i].key, x - 55, y + 24, 110, 30);
  }
  cursor(overAny() ? HAND : ARROW);
}

function drawInfo() {
  let sy = drawHeight - 74;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, sy, canvasWidth - margin * 2, 66, 8);
  noStroke(); textAlign(LEFT, CENTER); textSize(17);
  if (selected < 0) {
    fill('dimgray');
    text('Tap a helper to learn how they keep us safe.', margin + 14, sy + 33, canvasWidth - margin * 2 - 28, 60);
  } else {
    fill('black');
    let allSeen = false;
    text(helpers[selected].txt, margin + 14, sy + 33, canvasWidth - margin * 2 - 28, 58);
  }
}

function overAny() {
  for (let s of spotScreen) if (dist(mouseX, mouseY, s.x, s.y) < s.r) return true;
  return false;
}

function mousePressed() {
  for (let i = 0; i < spotScreen.length; i++) {
    let s = spotScreen[i];
    if (dist(mouseX, mouseY, s.x, s.y) < s.r) { selected = i; return; }
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
