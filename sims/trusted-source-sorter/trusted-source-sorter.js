// Trusted Source or Not? - MicroSim (judgment sorter with revealed reason)
// CANVAS_HEIGHT: 480
// Evaluate (L5): students judge whether a simple health claim comes from a
// trustworthy source or one that needs checking. One claim card at a time is
// sorted into "Trustworthy Source" or "Needs Checking"; the choice is confirmed
// with a one-sentence reason. Curious, confident checking — never fear or shame.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, resetButton;

// bin 0 = Trustworthy Source, bin 1 = Needs Checking
let bins = [
  { label: 'Trustworthy Source', color: '#4e9a6b', tint: '#e6f2ea' },
  { label: 'Needs Checking',      color: '#e0902f', tint: '#fbf0dd' }
];

// First claim is a clear trustworthy example to build confidence.
let claims = [
  { source: 'School nurse says', text: 'Wash your hands before you eat.', answer: 0,
    reason: 'A school nurse is trained to give health advice, so this is a trustworthy source.' },
  { source: 'A library book says', text: 'Sleep helps your brain grow.', answer: 0,
    reason: 'Library books are checked by editors and experts, so this is a trustworthy source.' },
  { source: 'Your doctor says', text: 'Fruits and vegetables help keep you healthy.', answer: 0,
    reason: 'Doctors study health for years, so this is a trustworthy source.' },
  { source: 'Your parent says', text: 'Wear a helmet when you ride your bike.', answer: 0,
    reason: 'A caring parent wants you to be safe, so this is a trustworthy source.' },
  { source: 'An online ad says', text: 'This candy makes you run faster!', answer: 1,
    reason: 'An ad is trying to sell candy, so check this with a trusted adult first.' },
  { source: 'A TV commercial says', text: 'This cereal gives you superpowers!', answer: 1,
    reason: 'Commercials exaggerate to sell things, so this claim needs checking.' },
  { source: "A stranger's post says", text: "You don't need to drink water.", answer: 1,
    reason: "You don't know this stranger, so check with a trusted adult or doctor." },
  { source: 'Someone on the playground says', text: 'Carrots are poison.', answer: 1,
    reason: 'This is a rumor, not a fact — check it with a trusted adult.' }
];

let idx = 0;
let answered = false;     // correct answer has been given for this claim
let wrongBin = -1;        // last mis-picked bin (for a brief calm highlight)
let completed = {};
let binRects = [];
let audioCtx = null;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Claim ▶');
  nextButton.mousePressed(nextClaim);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A health claim card names its source, such as "School nurse says: wash ' +
    'your hands before eating." The student sorts it into "Trustworthy Source" or ' +
    '"Needs Checking." Each choice is confirmed with a one-sentence reason about who ' +
    'gave the claim and why.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 10);
  resetButton.position(margin + 110, drawHeight + 10);
}

function draw() {
  updateCanvasSize();

  fill('#f7fbff');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#12506b');
  textAlign(LEFT, TOP);
  textSize(20);
  text('Trusted Source or Not?', margin, 8);
  fill('#5a6b75');
  textAlign(RIGHT, TOP);
  textSize(13);
  text('Claim ' + (idx + 1) + ' of ' + claims.length, canvasWidth - margin, 12);

  let c = claims[idx];

  // claim card
  let cx = margin, cy = 44, cw = canvasWidth - 2 * margin, ch = 118;
  fill('white');
  stroke('#9bb7c9');
  strokeWeight(1.5);
  rect(cx, cy, cw, ch, 10);
  noStroke();
  fill('#8a5a1a');
  textAlign(LEFT, TOP);
  textSize(14);
  text(c.source + ':', cx + 14, cy + 12, cw - 28, 24);
  fill('#1f2d34');
  textSize(20);
  text('"' + c.text + '"', cx + 14, cy + 42, cw - 28, ch - 52);

  // bins
  drawBins(cy + ch + 14);

  // caption area (stages 2 & 3)
  drawCaption();
}

function drawBins(by) {
  binRects = [];
  let c = claims[idx];
  let n = 2, gap = 12;
  let bw = (canvasWidth - margin * 2 - gap) / n;
  let bh = 120;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (bw + gap);
    let r = { x: x, y: by, w: bw, h: bh, i: i };
    binRects.push(r);

    let correctGlow = answered && i === c.answer;
    let wrongGlow = wrongBin === i;
    let hover = !answered && pointInRect(mouseX, mouseY, r);
    strokeWeight(correctGlow || wrongGlow ? 4 : 2);
    stroke(wrongGlow ? '#c05a2a' : bins[i].color);
    fill(correctGlow ? '#d7f0dd' : (hover ? '#fffbe6' : bins[i].tint));
    rect(x, by, bw, bh, 12);

    // simple icon
    drawBinIcon(i, x + bw / 2, by + 38, bins[i].color);

    noStroke();
    fill('#2b3a42');
    textAlign(CENTER, CENTER);
    textSize(min(18, bw / 8));
    text(bins[i].label, x + 6, by + 74, bw - 12, 40);

    if (correctGlow) {
      fill('#2e8b57');
      textSize(24);
      text('✓', x + bw - 20, by + 20);
    }
  }
  cursor(!answered && overAnyBin() ? HAND : ARROW);
}

function drawBinIcon(i, cx, cy, col) {
  push();
  stroke(col);
  strokeWeight(3);
  noFill();
  if (i === 0) {                     // shield-check for trustworthy
    beginShape();
    vertex(cx - 12, cy - 14);
    vertex(cx + 12, cy - 14);
    vertex(cx + 12, cy + 2);
    vertex(cx, cy + 16);
    vertex(cx - 12, cy + 2);
    endShape(CLOSE);
    line(cx - 6, cy - 2, cx - 1, cy + 5);
    line(cx - 1, cy + 5, cx + 8, cy - 8);
  } else {                           // magnifier for needs-checking
    circle(cx - 3, cy - 3, 20);
    line(cx + 7, cy + 7, cx + 15, cy + 15);
  }
  pop();
}

function drawCaption() {
  let px = margin, py = 316, pw = canvasWidth - 2 * margin, ph = drawHeight - py - 10;
  fill('#eef4f8');
  stroke('#cddbe6');
  strokeWeight(1);
  rect(px, py, pw, ph, 8);
  noStroke();
  textAlign(LEFT, TOP);

  let c = claims[idx];
  if (Object.keys(completed).length === claims.length) {
    fill('#2e6b4a');
    textSize(14);
    text('Checking the source is the first step before believing or sharing any ' +
         'health claim. Who said it, and why?', px + 12, py + 10, pw - 24, ph - 20);
  } else if (answered) {
    fill(c.answer === 0 ? '#2e6b4a' : '#8a5a1a');
    textSize(14);
    text(c.reason, px + 12, py + 10, pw - 24, 42);
    fill('#5a6b75');
    textSize(12.5);
    text('Remember: Who said it, why did they say it, and does it match what trusted ' +
         'adults say?', px + 12, py + ph - 34, pw - 24, 30);
  } else if (wrongBin >= 0) {
    fill('#b5691f');
    textSize(14.5);
    text('Look again — who is giving this health claim, and why?',
         px + 12, py + 12, pw - 24, ph - 24);
  } else {
    fill('#40525c');
    textSize(14);
    text('Who said it, and why? Choose the bin that fits this source.',
         px + 12, py + 12, pw - 24, ph - 24);
  }
}

function overAnyBin() {
  for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (answered) return;
  if (mouseY > drawHeight) return;
  for (let r of binRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      if (r.i === claims[idx].answer) {
        answered = true;
        wrongBin = -1;
        completed[idx] = true;
        playChime();
      } else {
        wrongBin = r.i;     // calm highlight, allow another try
      }
      return;
    }
  }
}

function nextClaim() {
  idx = (idx + 1) % claims.length;
  answered = false;
  wrongBin = -1;
}

function resetAll() {
  idx = 0;
  answered = false;
  wrongBin = -1;
  completed = {};
}

function playChime() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    let o = audioCtx.createOscillator();
    let g = audioCtx.createGain();
    o.type = 'sine';
    o.connect(g); g.connect(audioCtx.destination);
    let t0 = audioCtx.currentTime;
    o.frequency.setValueAtTime(660, t0);
    o.frequency.setValueAtTime(880, t0 + 0.12);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.exponentialRampToValueAtTime(0.16, t0 + 0.03);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + 0.38);
    o.start(t0);
    o.stop(t0 + 0.4);
  } catch (e) { /* ignore if audio unavailable */ }
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
