// Infectious vs Non-Infectious Sorter - MicroSim (classify illnesses)
// CANVAS_HEIGHT: 472
// Grade 4, Analyze (L4): students differentiate infectious from non-infectious diseases by
// sorting example illnesses and reviewing the reasoning.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, resetButton;

let cards = [
  { n: 'Chickenpox', inf: true, e: 'Spreads person-to-person from a virus — infectious.' },
  { n: 'Strep Throat', inf: true, e: 'Caused by bacteria that spread between people — infectious.' },
  { n: 'The Flu', inf: true, e: 'A virus that spreads through droplets — infectious.' },
  { n: 'Common Cold', inf: true, e: 'A virus passed between people — infectious.' },
  { n: 'Asthma', inf: false, e: 'A breathing condition — you cannot catch it. Non-infectious.' },
  { n: 'Diabetes', inf: false, e: 'A condition with blood sugar — not spread between people.' },
  { n: 'Seasonal Allergies', inf: false, e: 'A reaction to things like pollen — not contagious.' },
  { n: 'Heart Disease', inf: false, e: 'Develops over time — not passed person-to-person.' }
];

let idx = 0, picked = null, showWhy = false, sorted = 0;
let aRect, bRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next'); nextButton.mousePressed(() => { idx = (idx + 1) % cards.length; picked = null; showWhy = false; });
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { idx = 0; picked = null; showWhy = false; sorted = 0; });
  positionControls();
  describe('One illness card at a time and two zones — Infectious and Non-Infectious. ' +
    'Students reason it out, sort it, and read Why for the explanation.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); resetButton.position(80, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(18); text('Infectious or Non-Infectious?', canvasWidth / 2, 8);

  fill('cornsilk'); stroke('goldenrod'); strokeWeight(2); rect(canvasWidth / 2 - 90, 44, 180, 64, 12);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(18); text(cards[idx].n, canvasWidth / 2 - 84, 44, 168, 64);

  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 84, by = 128;
  aRect = { x: margin, y: by, w: bw, h: bh }; bRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawZone(aRect, 'Infectious', true, 'teal');
  drawZone(bRect, 'Non-Infectious', false, 'mediumpurple');
  cursor((pointInRect(mouseX, mouseY, aRect) || pointInRect(mouseX, mouseY, bRect)) && picked === null ? HAND : ARROW);

  let fy = 226;
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (picked === null) { fill('dimgray'); text('Can you catch this from another person? Sort it.', margin, fy, canvasWidth - margin * 2, 30); }
  else { let ok = picked === cards[idx].inf; fill(ok ? 'seagreen' : 'darkorange'); text((ok ? '✓ Correct. ' : 'Actually ' + (cards[idx].inf ? 'infectious' : 'non-infectious') + '. ') + (showWhy ? cards[idx].e : 'Press Why? for the reasoning.'), margin, fy, canvasWidth - margin * 2, 60); }
  fill('navy'); textSize(13); text('Sorted ' + sorted + ' of ' + cards.length, margin, 300, canvasWidth - margin * 2, 20);
}
function drawZone(r, label, val, col) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(picked === val ? 4 : 2); stroke(col);
  fill(picked === val ? (val === cards[idx].inf ? 'honeydew' : 'mistyrose') : (hover && picked === null ? 'lightyellow' : lerpColor(color(col), color('white'), 0.8)));
  rect(r.x, r.y, r.w, r.h, 10);
  noStroke(); fill(col); textAlign(CENTER, CENTER); textSize(16); text(label, r.x + 4, r.y, r.w - 8, r.h);
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
let whyDone = false;
function mousePressed() {
  if (picked === null) { let c = null; if (pointInRect(mouseX, mouseY, aRect)) c = true; else if (pointInRect(mouseX, mouseY, bRect)) c = false; if (c !== null) { picked = c; sorted++; showWhy = true; } }
}
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
