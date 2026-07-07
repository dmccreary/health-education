// Calm-Down Strategy Matcher - MicroSim (match scenario to self-management strategy)
// CANVAS_HEIGHT: 484
// Grade 5, Apply (L3): students match an emotional scenario to an appropriate
// restorative strategy. Not single-answer — any reasonable strategy is accepted.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 432;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let newButton;
let whyButton;

let strategies = [
  { name: 'Body-Calming', ex: 'deep breaths, stretch, drink water' },
  { name: 'Expressing', ex: 'talk to someone, write it down, draw' },
  { name: 'Redirecting', ex: 'take a walk, do an activity, music' },
  { name: 'Reflecting', ex: 'name the feeling, think it through' }
];

// accept = indices of acceptable strategies; why keyed by strategy index
let scenarios = [
  { s: 'You struck out during a kickball game and feel embarrassed.', accept: [0, 2, 3] },
  { s: 'A loud, busy classroom is making you feel overwhelmed.', accept: [0, 2] },
  { s: 'Your friend cancelled plans and you feel disappointed.', accept: [1, 3] },
  { s: 'You spilled your backpack and everyone looked. You feel flustered.', accept: [0, 3] },
  { s: "You're frustrated because a game keeps beating you.", accept: [0, 2, 3] },
  { s: 'You had an argument with a sibling and feel angry.', accept: [0, 1, 3] },
  { s: "You're nervous about a test tomorrow.", accept: [0, 2, 3] },
  { s: 'You feel left out when friends talk about a party.', accept: [1, 3] }
];
let whyText = [
  'Body-calming lowers the physical rush of a strong feeling so you can think clearly.',
  'Expressing lets the feeling out and helps you feel understood.',
  'Redirecting shifts your focus to something steadier until the feeling passes.',
  'Reflecting helps you understand the feeling and plan a helpful next step.'
];

let sIndex = 0;
let picked = -1;
let showWhy = false;
let stratRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  newButton = createButton('New Scenario');
  newButton.mousePressed(newScenario);
  whyButton = createButton('Why This Works');
  whyButton.mousePressed(() => { showWhy = true; });
  positionControls();
  describe('A scenario card with an emotion, and four strategy categories — body-calming, ' +
    'expressing, redirecting, reflecting. Students pick a strategy that could help; any ' +
    'reasonable choice is accepted, and Why This Works explains the reasoning.', LABEL);
}

function positionControls() {
  newButton.position(10, drawHeight + 12);
  whyButton.position(140, drawHeight + 12);
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
  text('Calm-Down Strategy Matcher', canvasWidth / 2, 8);

  // scenario (left)
  let cardW = canvasWidth * 0.46;
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, 42, cardW, 220, 10);
  noStroke(); fill('teal'); textAlign(LEFT, TOP); textSize(12);
  text('Scenario ' + (sIndex + 1) + ' of 8', margin + 12, 54);
  fill('black'); textSize(16);
  text(scenarios[sIndex].s, margin + 12, 78, cardW - 24, 176);

  // strategies (right)
  stratRects = [];
  let sx = margin + cardW + 12;
  let sw = canvasWidth - sx - margin;
  let sy0 = 42, sh = 48, gap = 10;
  let hoverStrat = -1;
  for (let i = 0; i < 4; i++) {
    let y = sy0 + i * (sh + gap);
    stratRects.push({ x: sx, y: y, w: sw, h: sh, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: sx, y: y, w: sw, h: sh });
    if (hover) hoverStrat = i;
    let chosen = picked === i;
    let accept = scenarios[sIndex].accept.includes(i);
    strokeWeight(chosen ? 3 : 1.5);
    if (picked >= 0) stroke(accept ? 'seagreen' : 'gray'); else stroke('mediumpurple');
    fill(chosen ? (accept ? 'honeydew' : 'linen') : (hover ? 'lavender' : 'white'));
    rect(sx, y, sw, sh, 8);
    noStroke(); fill('indigo'); textAlign(CENTER, CENTER); textSize(14);
    text(strategies[i].name, sx, y + (hover ? -8 : 0), sw, sh);
    if (hover) { fill('dimgray'); textSize(10); text(strategies[i].ex, sx + 4, y + 16, sw - 8, 28); }
  }
  cursor(hoverStrat >= 0 ? HAND : ARROW);

  // feedback
  let fy = 270;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, fy, canvasWidth - margin * 2, drawHeight - fy - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (picked < 0) {
    fill('dimgray');
    text('Which strategy could help here? Click one — there is more than one good answer.',
      margin + 10, fy + 10, canvasWidth - margin * 2 - 20, 80);
  } else {
    let accept = scenarios[sIndex].accept.includes(picked);
    fill(accept ? 'seagreen' : 'darkgoldenrod');
    let head = accept ? '✓ ' + strategies[picked].name + ' can really help here. '
      : strategies[picked].name + ' might help a little — other strategies may fit better. ';
    let why = showWhy ? whyText[picked] : 'Press "Why This Works" to see the reasoning.';
    text(head + why, margin + 10, fy + 10, canvasWidth - margin * 2 - 20, 80);
  }
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let r of stratRects) {
    if (pointInRect(mouseX, mouseY, r)) { picked = r.i; return; }
  }
}

function newScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  picked = -1; showWhy = false;
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
