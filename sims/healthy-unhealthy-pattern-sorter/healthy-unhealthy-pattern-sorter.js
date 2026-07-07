// Healthy Versus Unhealthy Pattern Sorter - MicroSim (pattern vs. one-time moment)
// CANVAS_HEIGHT: 472
// Grades 6-8, Evaluate (L5): students judge whether a relationship scenario reflects a
// healthy characteristic, an unhealthy pattern, or a single non-pattern moment.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;

let opts = ['Healthy Pattern', 'Unhealthy Pattern', 'One-Time Moment'];
let optColors = ['seagreen', 'indianred', 'goldenrod'];
// a = correct index; e reason
let deck = [
  { t: "A friend checks a classmate's phone daily without asking.", a: 1, e: 'Repeated control without consent is an unhealthy pattern.' },
  { t: 'A sibling snapped once, then apologized and made it right.', a: 2, e: 'One slip followed by repair is not a pattern.' },
  { t: 'A friend consistently listens and supports you.', a: 0, e: 'Steady support is a healthy pattern.' },
  { t: 'Someone insults you almost every day.', a: 1, e: 'Repeated put-downs are an unhealthy pattern.' },
  { t: "A partner respects your 'no' every time.", a: 0, e: 'Consistent respect for boundaries is healthy.' },
  { t: 'A friend forgot your birthday once but usually remembers.', a: 2, e: 'A single lapse is a one-time moment, not a pattern.' },
  { t: 'A family member checks your location constantly.', a: 1, e: 'Constant monitoring is a controlling, unhealthy pattern.' },
  { t: 'Friends who regularly cheer each other on.', a: 0, e: 'Ongoing encouragement is a healthy pattern.' },
  { t: 'A classmate borrowed a pencil without asking one time.', a: 2, e: 'A one-off is a moment, not a pattern.' },
  { t: 'A partner who pressures you again and again.', a: 1, e: 'Repeated pressure is an unhealthy pattern.' }
];

let idx = 0, picked = -1;
let optRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario'); nextButton.mousePressed(() => { idx = (idx + 1) % deck.length; picked = -1; });
  positionControls();
  describe('One relationship scenario at a time with three choices — healthy pattern, ' +
    'unhealthy pattern, or a one-time moment. Feedback explains which and why.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(17); text('Healthy or Unhealthy Pattern?', canvasWidth / 2, 8);

  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5); rect(margin, 40, canvasWidth - margin * 2, 84, 10);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11); text('Scenario ' + (idx + 1) + ' of ' + deck.length, margin + 12, 46);
  fill('black'); textSize(15); text(deck[idx].t, margin + 12, 64, canvasWidth - margin * 2 - 24, 56);

  optRects = [];
  let oy = 136, oh = 46, gap = 8;
  for (let i = 0; i < 3; i++) {
    let y = oy + i * (oh + gap);
    optRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: oh, i: i });
    let hover = pointInRect(mouseX, mouseY, optRects[i]);
    let isA = deck[idx].a === i;
    strokeWeight(2); stroke(optColors[i]);
    if (picked < 0) fill(hover ? 'lightyellow' : 'white');
    else if (isA) { fill('honeydew'); strokeWeight(3); }
    else if (i === picked) fill('mistyrose');
    else fill('white');
    rect(margin, y, canvasWidth - margin * 2, oh, 8);
    noStroke(); fill(optColors[i] === 'goldenrod' ? 'darkgoldenrod' : optColors[i]); textAlign(CENTER, CENTER); textSize(15);
    text(opts[i], margin, y, canvasWidth - margin * 2, oh);
  }
  cursor(picked < 0 && overAny() ? HAND : ARROW);

  let fy = oy + 3 * (oh + gap) + 4;
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (picked < 0) { fill('dimgray'); text('Is this a pattern or a one-time moment? Choose one.', margin, fy, canvasWidth - margin * 2, 40); }
  else { let ok = picked === deck[idx].a; fill(ok ? 'seagreen' : 'darkgoldenrod'); text((ok ? '✓ ' : 'Answer: ' + opts[deck[idx].a] + '. ') + deck[idx].e, margin, fy, canvasWidth - margin * 2, 44); }
}
function overAny() { for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (picked >= 0) return; for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) { picked = r.i; return; } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
