// Positive or Negative Influence? - MicroSim (binary scenario picker)
// CANVAS_HEIGHT: 452
// Grade 1, Analyze (L4): students distinguish which people or situations positively or
// negatively influence a health practice.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton;

let deck = [
  { t: "Your friend says, 'Let's ride bikes with our helmets on!'", pos: true, e: 'A friend helping you stay safe is a positive influence.' },
  { t: 'A TV ad says candy will make you happy all day.', pos: false, e: 'Ads that oversell treats are a negative influence.' },
  { t: 'Your grown-up reminds you to wash your hands.', pos: true, e: 'A reminder to stay healthy is a positive influence.' },
  { t: 'A friend dares you to skip breakfast.', pos: false, e: 'Pushing you to skip a healthy habit is negative.' },
  { t: 'Your sister shares her carrots at lunch.', pos: true, e: 'Sharing healthy food is a positive influence.' },
  { t: 'A video says staying up very late is cool.', pos: false, e: 'Encouraging poor sleep is a negative influence.' },
  { t: 'A coach cheers you on to keep moving.', pos: true, e: 'Encouraging activity is a positive influence.' },
  { t: 'A classmate says washing hands is a waste of time.', pos: false, e: 'Discouraging a healthy habit is negative.' }
];

let idx = 0, picked = null;
let aRect, bRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario'); nextButton.mousePressed(() => { idx = (idx + 1) % deck.length; picked = null; });
  positionControls();
  describe('A short scenario with two buttons — Positive Influence and Negative Influence. ' +
    'Children judge whether the person or situation helps or hurts a healthy habit.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(19); text('Positive or Negative Influence?', canvasWidth / 2, 8);

  fill('lightyellow'); stroke('goldenrod'); strokeWeight(1.5); rect(margin, 42, canvasWidth - margin * 2, 90, 12);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11); text('Scenario ' + (idx + 1) + ' of ' + deck.length, margin + 12, 48);
  fill('black'); textSize(16); text(deck[idx].t, margin + 12, 66, canvasWidth - margin * 2 - 24, 62);

  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 60, by = 148;
  aRect = { x: margin, y: by, w: bw, h: bh }; bRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawBtn(aRect, 'Positive', true, 'seagreen'); drawBtn(bRect, 'Negative', false, 'indianred');
  cursor((pointInRect(mouseX, mouseY, aRect) || pointInRect(mouseX, mouseY, bRect)) && picked === null ? HAND : ARROW);

  noStroke(); textAlign(LEFT, TOP); textSize(15);
  if (picked === null) { fill('dimgray'); text('Does this help or hurt a healthy habit? Tap a button.', margin, 224, canvasWidth - margin * 2, 40); }
  else { let ok = picked === deck[idx].pos; fill(ok ? 'seagreen' : 'darkorange'); text((ok ? '✓ ' : '') + deck[idx].e, margin, 224, canvasWidth - margin * 2, 60); }
}
function drawBtn(r, label, val, col) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(picked === val ? 4 : 2); stroke(col);
  fill(picked === val ? (val === deck[idx].pos ? 'honeydew' : 'mistyrose') : (hover && picked === null ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12); noStroke(); fill(col); textAlign(CENTER, CENTER); textSize(18); text(label, r.x, r.y, r.w, r.h);
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (picked !== null) return; if (pointInRect(mouseX, mouseY, aRect)) picked = true; else if (pointInRect(mouseX, mouseY, bRect)) picked = false; }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
