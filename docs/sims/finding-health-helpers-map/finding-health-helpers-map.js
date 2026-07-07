// Finding Health Helpers - MicroSim (school + community hotspot map)
// CANVAS_HEIGHT: 490
// Grade 2, Understand (L2): students locate and identify school and community health
// helpers and describe the role each plays.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let showAllButton;
let resetButton;

// place: 'school' or 'community'; fx/fy fractions of that half
let helpers = [
  { key: 'Nurse', place: 'school', fx: 0.25, fy: 0.4, role: 'The school nurse helps when you feel sick or get hurt at school.' },
  { key: 'Counselor', place: 'school', fx: 0.6, fy: 0.55, role: 'The counselor helps you with big feelings and problems.' },
  { key: 'Doctor', place: 'community', fx: 0.2, fy: 0.35, role: 'A doctor at the clinic keeps you healthy with checkups.' },
  { key: 'Dentist', place: 'community', fx: 0.45, fy: 0.55, role: 'The dentist takes care of your teeth.' },
  { key: 'Firefighter', place: 'community', fx: 0.7, fy: 0.35, role: 'Firefighters keep the community safe from fires.' },
  { key: 'Police', place: 'community', fx: 0.88, fy: 0.55, role: 'Police officers help keep everyone safe.' }
];

let selected = -1;
let showAll = false;
let spotScreen = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  showAllButton = createButton('Show All Helpers');
  showAllButton.mousePressed(() => { showAll = !showAll; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showAll = false; });
  positionControls();
  describe('A school building and a community street, each with labeled hotspots for ' +
    'health helpers — nurse, counselor, doctor, dentist, firefighter, and police. Clicking ' +
    'each reveals that helper\'s role.', LABEL);
}

function positionControls() {
  showAllButton.position(10, drawHeight + 10);
  resetButton.position(160, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Finding Health Helpers', canvasWidth / 2, 8);

  let mapY = 40, mapH = 210, half = canvasWidth / 2;
  // school (left) and community (right) backdrops
  noStroke(); fill('mistyrose'); rect(margin, mapY, half - margin - 4, mapH, 8);
  fill('honeydew'); rect(half + 4, mapY, half - margin - 4, mapH, 8);
  fill('indianred'); textAlign(CENTER, TOP); textSize(12); text('School', margin, mapY + 6, half - margin - 4, 16);
  fill('seagreen'); text('Community', half + 4, mapY + 6, half - margin - 4, 16);

  // hotspots
  spotScreen = [];
  for (let i = 0; i < helpers.length; i++) {
    let h = helpers[i];
    let x = h.place === 'school' ? margin + h.fx * (half - margin) : half + h.fx * (half - margin);
    let y = mapY + 20 + h.fy * (mapH - 30);
    spotScreen.push({ x: x, y: y, r: 18 });
    let sel = selected === i;
    let hover = dist(mouseX, mouseY, x, y) < 20;
    strokeWeight(sel ? 3 : 2); stroke(sel ? 'darkorange' : 'teal');
    fill(sel ? 'gold' : (hover ? 'paleturquoise' : color(64, 224, 208, 180)));
    circle(x, y, 34);
    noStroke(); fill('teal'); textAlign(CENTER, CENTER); textSize(10); text(i + 1, x, y);
    if (showAll || hover || sel) { fill('black'); textAlign(CENTER, TOP); textSize(10); text(h.key, x - 40, y + 18, 80, 20); }
  }
  cursor(overAny() ? HAND : ARROW);

  // infobox
  let py = 262, ph = drawHeight - py - 10;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, ph, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(14);
  if (selected < 0) { fill('dimgray'); text('Tap a helper to learn what they do. Health helpers are at school and in the community.', margin + 12, py + 10, canvasWidth - margin * 2 - 24, 60); }
  else { fill('teal'); text(helpers[selected].key, margin + 12, py + 10); fill('black'); text(helpers[selected].role, margin + 12, py + 30, canvasWidth - margin * 2 - 24, 60); }
}

function overAny() { for (let s of spotScreen) if (dist(mouseX, mouseY, s.x, s.y) < s.r) return true; return false; }

function mousePressed() {
  for (let i = 0; i < spotScreen.length; i++) { let s = spotScreen[i]; if (dist(mouseX, mouseY, s.x, s.y) < s.r) { selected = i; return; } }
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
