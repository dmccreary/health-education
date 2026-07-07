// Practice Saying No Role-Play Simulator - MicroSim (Grade 1 personal safety)
// CANVAS_HEIGHT: 527
// Grade 1, Apply (L3): students practice saying "no" to an unwanted or uncomfortable
// touch by choosing a firm, calm refusal phrase. All three choices are correct — the
// goal is building confidence, and every scenario ends with "tell a trusted adult."

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let sayButton;
let nextButton;
let resetButton;

// Low-stakes, non-graphic everyday scenarios. First one is the gentlest (a sibling tickle).
let scenarios = [
  "Your little brother keeps tickling you, but you don't want to be tickled right now.",
  "A friend wants to hug you, but you don't feel like a hug today.",
  "Someone at recess grabs your arm to pull you along, and you don't like it.",
  "A grown-up you just met wants to give you a big squeeze, and it feels uncomfortable.",
  "A classmate keeps poking you, and you want them to stop."
];

let phrases = [
  'No, thank you.',
  "Stop, I don't like that.",
  'I need to go find a grown-up I trust.'
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

  describe('A calm, non-graphic scenario about an unwanted touch, with three firm refusal ' +
    'phrases a student can choose from. All three are strong, correct ways to say no. ' +
    '"Try Saying It" reads the chosen phrase aloud. Every scenario reminds the student to ' +
    'tell a trusted adult afterward.', LABEL);
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

  // Title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(22);
  text('Practice Saying No', canvasWidth / 2, 8);

  let contentW = canvasWidth - margin * 2;

  // Simple, friendly, non-graphic scene: two rounded "people" standing apart.
  let sceneY = 40, sceneH = 96;
  fill('honeydew');
  stroke('mediumseagreen');
  strokeWeight(1.5);
  rect(margin, sceneY, contentW, sceneH, 10);
  noStroke();
  drawScene(margin, sceneY, contentW, sceneH);

  // Scenario prompt card
  let cy = sceneY + sceneH + 10, ch = 78;
  fill('lightcyan');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(margin, cy, contentW, ch, 10);
  noStroke();
  fill('teal');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Scenario ' + (idx + 1) + ' of ' + scenarios.length, margin + 12, cy + 9);
  fill('black');
  textSize(16);
  text(scenarios[idx], margin + 12, cy + 28, contentW - 24, ch - 36);

  // Three refusal-phrase choices
  phraseRects = [];
  let py = cy + ch + 12, ph = 40, gap = 8;
  for (let i = 0; i < phrases.length; i++) {
    let y = py + i * (ph + gap);
    let r = { x: margin, y: y, w: contentW, h: ph, i: i };
    phraseRects.push(r);
    let hover = pointInRect(mouseX, mouseY, r);
    let sel = picked === i;
    strokeWeight(sel ? 3 : 1.5);
    stroke(sel ? 'seagreen' : 'mediumpurple');
    fill(sel ? 'honeydew' : (hover ? 'lavender' : 'white'));
    rect(margin, y, contentW, ph, 8);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(16);
    text('"' + phrases[i] + '"', margin + 8, y, contentW - 16, ph);
  }
  cursor(picked < 0 && overAnyPhrase() ? HAND : ARROW);

  // Feedback / closing caption
  let fy = py + phrases.length * (ph + gap) + 4;
  let fh = drawHeight - fy - 6;
  textAlign(LEFT, TOP);
  textSize(14);
  if (picked < 0) {
    fill('dimgray');
    text('Which phrase would you say? Tap one to practice.', margin, fy, contentW, fh);
  } else {
    fill('seagreen');
    // Stage 2 affirmation + Stage 3 closing reminder (shown for every scenario)
    let msg = 'Great job! All three phrases are strong ways to say no. ' +
      'Any of these responses is okay. What matters most is telling a ' +
      'trusted adult afterward.';
    text(msg, margin, fy, contentW, fh);
  }
}

// A gentle, non-graphic illustration: two friendly rounded figures a little apart,
// suggesting an everyday moment where a choice is needed. Never shows distress.
function drawScene(x, y, w, h) {
  let cy = y + h / 2 + 6;
  let ax = x + w * 0.34;
  let bx = x + w * 0.66;

  // Figure A (the student) — steady blue
  drawFigure(ax, cy, 'steelblue', 'lightskyblue');
  // Figure B (the other person) — warm goldenrod
  drawFigure(bx, cy, 'goldenrod', 'gold');

  // A calm "no" speech bubble above figure A (small, friendly, not alarming)
  noStroke();
  fill('white');
  stroke('steelblue');
  strokeWeight(1.5);
  let bw = 44, bh = 26, bxp = ax - bw / 2, byp = y + 8;
  rect(bxp, byp, bw, bh, 8);
  triangle(ax - 6, byp + bh, ax + 6, byp + bh, ax, byp + bh + 8);
  noStroke();
  fill('steelblue');
  textAlign(CENTER, CENTER);
  textSize(13);
  text('No', bxp, byp, bw, bh);
}

function drawFigure(cx, cy, bodyCol, headCol) {
  noStroke();
  // body
  fill(bodyCol);
  ellipse(cx, cy + 14, 34, 40);
  // head
  fill(headCol);
  ellipse(cx, cy - 12, 26, 26);
  // simple friendly face
  fill('dimgray');
  ellipse(cx - 5, cy - 13, 3, 3);
  ellipse(cx + 5, cy - 13, 3, 3);
  noFill();
  stroke('dimgray');
  strokeWeight(1.5);
  arc(cx, cy - 9, 10, 8, 0, PI);
  noStroke();
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
    if (pointInRect(mouseX, mouseY, p)) {
      picked = p.i;
      visited[idx] = true;
      return;
    }
  }
}

function nextScenario() {
  idx = (idx + 1) % scenarios.length;
  picked = -1;
}

function resetAll() {
  idx = 0;
  picked = -1;
  visited = {};
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
