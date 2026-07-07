// Healthy Friend Traits Sorter - MicroSim (healthy trait or not yet)
// CANVAS_HEIGHT: 452
// Grade 1, Understand (L2): students classify scenario cards as showing a healthy or
// not-yet-healthy peer trait, and explain what makes each one so.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton;
let resetButton;

// healthy bool; why
let cards = [
  { t: 'Maya waits for her turn on the swings.', h: true, e: 'Taking turns is a healthy, fair trait.' },
  { t: 'Sam grabs the ball from a friend.', h: false, e: 'Grabbing is not yet healthy — better to ask.' },
  { t: 'Ana listens when a friend talks.', h: true, e: 'Listening shows care for a friend.' },
  { t: 'Leo talks over others and interrupts.', h: false, e: 'Interrupting is not yet healthy — let others finish.' },
  { t: 'Kim includes a new kid in the game.', h: true, e: 'Including others is a kind, healthy trait.' },
  { t: 'Tom leaves someone out on purpose.', h: false, e: 'Leaving someone out is not yet healthy.' },
  { t: 'Zoe shares her crayons.', h: true, e: 'Sharing is a healthy friendship trait.' },
  { t: 'Lily laughs at someone who fell.', h: false, e: 'Laughing at someone is not yet healthy.' },
  { t: 'Max says sorry after a mistake.', h: true, e: 'Saying sorry is a healthy way to repair.' },
  { t: 'Ben cheers up a sad friend.', h: true, e: 'Supporting a friend is a healthy trait.' }
];

let idx = 0;
let picked = null;
let sorted = 0;
let healthyRect, notRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Card');
  nextButton.mousePressed(() => { idx = (idx + 1) % cards.length; picked = null; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { idx = 0; picked = null; sorted = 0; });
  positionControls();
  describe('One friendship-scenario card at a time and two bins — Healthy Trait and Not Yet ' +
    'Healthy. Children judge the trait and read why it fits.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(130, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('Healthy Friend Traits', canvasWidth / 2, 8);

  fill('cornsilk'); stroke('goldenrod'); strokeWeight(2);
  rect(margin, 44, canvasWidth - margin * 2, 72, 12);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(17);
  text(cards[idx].t, margin + 10, 44, canvasWidth - margin * 2 - 20, 72);

  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 92, by = 138;
  healthyRect = { x: margin, y: by, w: bw, h: bh };
  notRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawBin(healthyRect, 'Healthy Trait', true, 'seagreen', '❤');
  drawBin(notRect, 'Not Yet Healthy', false, 'slateblue', '🤔');
  cursor((pointInRect(mouseX, mouseY, healthyRect) || pointInRect(mouseX, mouseY, notRect)) && picked === null ? HAND : ARROW);

  noStroke(); textAlign(CENTER, TOP); textSize(15);
  if (picked === null) { fill('dimgray'); text('Is this a healthy friend trait?', margin, 242, canvasWidth - margin * 2, 30); }
  else {
    let correct = picked === cards[idx].h;
    fill(correct ? 'seagreen' : 'darkorange');
    text((correct ? '✓ ' : 'Think again. ') + cards[idx].e, margin, 242, canvasWidth - margin * 2, 50);
  }
  fill('navy'); textSize(14); text('You sorted ' + sorted + ' of ' + cards.length + '!', margin, 300, canvasWidth - margin * 2, 24);
}

function drawBin(r, label, val, col, icon) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(picked === val ? 4 : 2); stroke(col);
  fill(picked === val ? (val === cards[idx].h ? 'honeydew' : 'mistyrose') : (hover && picked === null ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12);
  noStroke(); fill(col); textAlign(CENTER, TOP); textSize(24); text(icon, r.x, r.y + 12, r.w, 30);
  textSize(15); text(label, r.x + 4, r.y + 52, r.w - 8, 34);
}

function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (picked !== null) return;
  let choice = null;
  if (pointInRect(mouseX, mouseY, healthyRect)) choice = true;
  else if (pointInRect(mouseX, mouseY, notRect)) choice = false;
  if (choice !== null) { picked = choice; sorted++; }
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
