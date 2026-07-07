// Consent Versus Coercion Scenario Evaluator - MicroSim (judge + justify)
// CANVAS_HEIGHT: 442
// Grade 5, Evaluate (L5): students judge whether a scenario outcome reflects genuine
// consent or coercion and see the reasoning behind it.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 390;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let whyButton;
let nextButton;

// correct: 'consent' or 'coercion'; just = justification
let deck = [
  { t: 'Maya asks Jordan three times to share his tablet password. Jordan finally says fine just to stop her from asking.', a: 'coercion', j: 'Jordan only agreed after repeated asking wore him down — that is coercion, not consent.' },
  { t: "Sam asks to borrow Alex's markers. Alex says, 'Sure, here you go.'", a: 'consent', j: 'A clear, free yes with no pressure.' },
  { t: 'Riya keeps begging Tom to share a secret until he gives in.', a: 'coercion', j: 'Begging until someone gives in is pressure, not free choice.' },
  { t: 'Lee asks Dana if she wants to trade snacks. Dana happily says yes.', a: 'consent', j: 'An enthusiastic, willing yes.' },
  { t: "Priya says she won't be Ken's friend unless he lets her copy homework. Ken agrees.", a: 'coercion', j: 'A threat to end the friendship makes the yes not free.' },
  { t: "Noah asks Mia to join the game. Mia says, 'Yes, that sounds fun!'", a: 'consent', j: 'A genuine, pressure-free yes.' },
  { t: 'Ben guilt-trips Kia to lend money until she finally says okay.', a: 'coercion', j: 'Guilt-tripping until someone agrees is coercion.' },
  { t: "Ava asks Sol for a photo. Sol says, 'Sure, you can use that one.'", a: 'consent', j: 'Specific and freely given.' }
];

let idx = 0;
let picked = '';
let showWhy = false;
let consentRect, coercionRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  whyButton = createButton('Why?');
  whyButton.mousePressed(() => { if (picked) showWhy = true; });
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(next);
  positionControls();
  describe('A short scenario with two judgment buttons — Consent or Coercion. Students ' +
    'judge the outcome, then reveal the reasoning using the test: would they have said yes ' +
    'without the pressure?', LABEL);
}

function positionControls() {
  whyButton.position(10, drawHeight + 12);
  nextButton.position(90, drawHeight + 12);
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
  text('Consent or Coercion?', canvasWidth / 2, 8);

  // scenario
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 40, canvasWidth - margin * 2, 110, 10);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
  text('Scenario ' + (idx + 1) + ' of ' + deck.length, margin + 12, 48);
  fill('black'); textSize(15);
  text(deck[idx].t, margin + 12, 68, canvasWidth - margin * 2 - 24, 80);

  // two judgment buttons
  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 50, by = 162;
  consentRect = { x: margin, y: by, w: bw, h: bh };
  coercionRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawJudge(consentRect, 'Consent', 'consent', 'seagreen');
  drawJudge(coercionRect, 'Coercion', 'coercion', 'indianred');
  cursor((pointInRect(mouseX, mouseY, consentRect) || pointInRect(mouseX, mouseY, coercionRect)) && !picked ? HAND : ARROW);

  // feedback
  let fy = 226;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, fy, canvasWidth - margin * 2, drawHeight - fy - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (!picked) {
    fill('dimgray'); text('Ask yourself: would they have said yes without the pressure? Then judge.', margin + 10, fy + 10, canvasWidth - margin * 2 - 20, 60);
  } else {
    let correct = picked === deck[idx].a;
    fill(correct ? 'seagreen' : 'darkgoldenrod');
    let head = correct ? '✓ Correct — this is ' + deck[idx].a + '. ' : 'Look again — this is ' + deck[idx].a + '. ';
    text(head + (showWhy ? deck[idx].j : 'Press Why? for the reasoning.'), margin + 10, fy + 10, canvasWidth - margin * 2 - 20, 70);
  }
}

function drawJudge(r, label, val, col) {
  let hover = pointInRect(mouseX, mouseY, r);
  let chosen = picked === val;
  strokeWeight(chosen ? 3 : 2); stroke(col);
  fill(chosen ? (val === deck[idx].a ? 'honeydew' : 'mistyrose') : (hover && !picked ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 10);
  noStroke(); fill(col); textAlign(CENTER, CENTER); textSize(18);
  text(label, r.x, r.y, r.w, r.h);
}

function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (picked) return;
  if (pointInRect(mouseX, mouseY, consentRect)) picked = 'consent';
  else if (pointInRect(mouseX, mouseY, coercionRect)) picked = 'coercion';
}

function next() { idx = (idx + 1) % deck.length; picked = ''; showWhy = false; }

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
