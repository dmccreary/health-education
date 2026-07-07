// Comprehensive Health Care Concept Map - MicroSim (hub-and-spoke explorer)
// CANVAS_HEIGHT: 472
// Grades 6-8, Understand (L2): students describe the components of comprehensive
// adolescent health care and explain how they connect as one system of care.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

let spokes = [
  { label: 'Preventive Care', color: 'mediumseagreen',
    desc: 'Care that keeps you healthy before problems start.', ex: 'Example: a yearly checkup or vaccines.' },
  { label: 'Acute & Chronic Care', color: 'steelblue',
    desc: 'Care for illnesses and injuries, short-term or ongoing.', ex: 'Example: treating strep throat or managing asthma.' },
  { label: 'Mental & Emotional Health', color: 'mediumpurple',
    desc: 'Care and support for how you think and feel.', ex: 'Example: talking with a counselor about stress.' },
  { label: 'Sexual & Reproductive Health', color: 'coral',
    desc: 'Education and care for growing bodies and healthy decisions.', ex: 'Example: a confidential visit to ask questions.' }
];
let whyText = 'When these parts work together in one system, providers share information and catch ' +
  'connections — like how stress affects sleep or how a checkup can support mental health. ' +
  'Fragmented, separate services miss those links.';

let selected = -1;
let showWhy = false;
let spokeScreen = [];
let hubScreen = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; showWhy = false; });
  positionControls();
  describe('A concept map with a central hub, Comprehensive Health Care, connected to four ' +
    'spokes: preventive care, acute and chronic care, mental and emotional health, and ' +
    'sexual and reproductive health. Clicking each explains it; the hub explains why they ' +
    'work best together.', LABEL);
}

function positionControls() {
  resetButton.position(10, drawHeight + 10);
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
  textSize(18);
  text('Comprehensive Health Care', canvasWidth / 2, 8);

  let cx = canvasWidth / 2, cy = 150, hubR = 52;
  let ring = 108;
  let positions = [
    { x: cx - ring, y: cy - 4 }, { x: cx + ring, y: cy - 4 },
    { x: cx - ring * 0.7, y: cy + ring }, { x: cx + ring * 0.7, y: cy + ring }
  ];

  // spokes lines
  spokeScreen = [];
  stroke('silver'); strokeWeight(2);
  for (let i = 0; i < 4; i++) line(cx, cy, positions[i].x, positions[i].y);

  // spoke nodes
  for (let i = 0; i < 4; i++) {
    let p = positions[i], r = 46;
    spokeScreen.push({ x: p.x, y: p.y, r: r });
    let sel = selected === i;
    let hover = dist(mouseX, mouseY, p.x, p.y) < r;
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'black' : 'white');
    fill(sel || hover ? spokes[i].color : lerpColor(color(spokes[i].color), color('white'), 0.4));
    ellipse(p.x, p.y, r * 2, r * 1.5);
    noStroke(); fill('white'); textAlign(CENTER, CENTER); textSize(11);
    text(spokes[i].label, p.x - r + 4, p.y - r * 0.75, r * 2 - 8, r * 1.5);
  }

  // hub
  hubScreen = { x: cx, y: cy, r: hubR };
  let hoverHub = dist(mouseX, mouseY, cx, cy) < hubR;
  strokeWeight(showWhy ? 3 : 2); stroke('darkslateblue');
  fill(showWhy ? 'darkslateblue' : (hoverHub ? 'slateblue' : 'royalblue'));
  circle(cx, cy, hubR * 2);
  noStroke(); fill('white'); textAlign(CENTER, CENTER); textSize(12);
  text('Why Together?', cx - hubR + 6, cy - 20, hubR * 2 - 12, 40);
  textSize(9); text('(click hub)', cx, cy + 22);
  cursor(hoverHub || overAnySpoke() ? HAND : ARROW);

  // infobox
  let py = 288, ph = drawHeight - py - 10;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, py, canvasWidth - margin * 2, ph, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (showWhy) {
    fill('darkslateblue'); text(whyText, margin + 10, py + 10, canvasWidth - margin * 2 - 20, ph - 20);
  } else if (selected >= 0) {
    fill('black');
    text(spokes[selected].label + ': ' + spokes[selected].desc + '  ' + spokes[selected].ex,
      margin + 10, py + 10, canvasWidth - margin * 2 - 20, ph - 20);
  } else {
    fill('dimgray');
    text('Click a spoke to learn what it includes, or the hub to see why integrated care helps.',
      margin + 10, py + 12, canvasWidth - margin * 2 - 20, 40);
  }
}

function overAnySpoke() {
  for (let s of spokeScreen) if (dist(mouseX, mouseY, s.x, s.y) < s.r) return true;
  return false;
}

function mousePressed() {
  if (dist(mouseX, mouseY, hubScreen.x, hubScreen.y) < hubScreen.r) { showWhy = true; selected = -1; return; }
  for (let i = 0; i < spokeScreen.length; i++) {
    let s = spokeScreen[i];
    if (dist(mouseX, mouseY, s.x, s.y) < s.r) { selected = i; showWhy = false; return; }
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
