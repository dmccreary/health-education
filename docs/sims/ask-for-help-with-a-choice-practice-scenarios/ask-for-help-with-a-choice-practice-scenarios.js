// Ask for Help With a Choice - MicroSim (help-seeking phrase practice)
// CANVAS_HEIGHT: 437
// Grade 1, Apply (L3): students practice asking for help with everyday choices by
// selecting a help-seeking phrase. All choices are correct — the goal is the habit.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let sayButton;
let nextButton;
let resetButton;

let scenarios = [
  "You're not sure whether to play outside or rest because you feel a little tired.",
  "You don't know if a snack is a healthy choice.",
  "You're deciding whether to wash your hands before your snack.",
  "You want to try a new game but aren't sure it's a safe idea.",
  "You're not sure if you should go to bed now or stay up a little longer.",
  "You don't know which drink is the healthy choice."
];

let phrases = [
  'Can you help me decide?',
  'What do you think I should do?',
  'Can we figure it out together?'
];

let idx = 0;
let picked = -1;
let visited = {};
let phraseRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  sayButton = createButton('🔊 Try Saying It');
  sayButton.mousePressed(sayPhrase);
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  describe('A one-sentence decision scenario with three help-seeking phrases. Students ' +
    'pick a phrase to ask for help; all are correct because the goal is building the ' +
    'habit of asking. "Try Saying It" reads the phrase aloud.', LABEL);
}

function positionControls() {
  sayButton.position(10, drawHeight + 14);
  nextButton.position(150, drawHeight + 14);
  resetButton.position(285, drawHeight + 14);
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
  textSize(22);
  text('Ask for Help With a Choice', canvasWidth / 2, 8);

  // scenario card
  let cy = 42, ch = 96;
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, cy, canvasWidth - margin * 2, ch, 10);
  noStroke();
  fill('teal'); textAlign(LEFT, TOP); textSize(12);
  text('Scenario ' + (idx + 1) + ' of ' + scenarios.length, margin + 12, cy + 10);
  fill('black'); textSize(17);
  text(scenarios[idx], margin + 12, cy + 30, canvasWidth - margin * 2 - 24, ch - 40);

  // phrase choices
  phraseRects = [];
  let py = cy + ch + 14, ph = 42, gap = 10;
  for (let i = 0; i < phrases.length; i++) {
    let y = py + i * (ph + gap);
    phraseRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ph, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: margin, y: y, w: canvasWidth - margin * 2, h: ph });
    let sel = picked === i;
    strokeWeight(sel ? 3 : 1.5);
    stroke(sel ? 'seagreen' : 'mediumpurple');
    fill(sel ? 'honeydew' : (hover ? 'lavender' : 'white'));
    rect(margin, y, canvasWidth - margin * 2, ph, 8);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(16);
    text('"' + phrases[i] + '"', margin + 8, y, canvasWidth - margin * 2 - 16, ph);
  }
  cursor(picked < 0 && overAnyPhrase() ? HAND : ARROW);

  // feedback
  let fy = py + phrases.length * (ph + gap) + 2;
  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);
  if (picked < 0) {
    fill('dimgray');
    text('Pick the phrase you would use to ask for help.', margin, fy, canvasWidth - margin * 2, 40);
  } else {
    fill('seagreen');
    let allDone = Object.keys(visited).length >= scenarios.length;
    let msg = 'Nice! Asking for help was the right move. ';
    if (allDone) msg += 'Asking for help with a choice means you get to think it through with someone who cares about you.';
    text(msg, margin, fy, canvasWidth - margin * 2, 40);
  }
}

function overAnyPhrase() {
  for (let p of phraseRects) if (pointInRect(mouseX, mouseY, p)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function sayPhrase() {
  if (picked < 0) return;
  try {
    let u = new SpeechSynthesisUtterance(phrases[picked]);
    u.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch (e) { /* speech not available */ }
}

function mousePressed() {
  for (let p of phraseRects) {
    if (pointInRect(mouseX, mouseY, p)) { picked = p.i; visited[idx] = true; return; }
  }
}

function nextScenario() {
  idx = (idx + 1) % scenarios.length;
  picked = -1;
}
function resetAll() {
  idx = 0; picked = -1; visited = {};
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
