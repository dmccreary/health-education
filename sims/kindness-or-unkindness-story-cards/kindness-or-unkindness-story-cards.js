// Kindness or Unkindness? Story Cards - MicroSim (classify + explain feelings)
// CANVAS_HEIGHT: 452
// Grade 1, Understand (L2): students classify story scenes as kindness or unkindness and
// explain how each affects how the other person feels and belonging.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton;

let deck = [
  { t: 'Priya invites a lonely classmate to join her game.', kind: true, e: 'This helps the classmate feel included and that they belong.' },
  { t: 'Sam grabs a toy away from another child.', kind: false, e: 'Grabbing makes the other child feel upset and left out.' },
  { t: 'Leo comforts a friend who is crying.', kind: true, e: 'Comforting helps the friend feel cared for and safe.' },
  { t: 'Mia teases a classmate about their shoes.', kind: false, e: 'Teasing makes the classmate feel hurt and unwelcome.' },
  { t: 'Ana shares her snack with a friend who forgot lunch.', kind: true, e: 'Sharing helps the friend feel looked after and included.' },
  { t: 'Ben leaves someone out of the group on purpose.', kind: false, e: 'Leaving someone out weakens their sense of belonging.' },
  { t: 'Kim helps a new student find the classroom.', kind: true, e: 'Helping makes the new student feel welcome.' },
  { t: 'Tom laughs at a classmate who made a mistake.', kind: false, e: 'Laughing at someone makes them feel embarrassed.' }
];

let idx = 0, picked = null;
let aRect, bRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Story'); nextButton.mousePressed(() => { idx = (idx + 1) % deck.length; picked = null; });
  positionControls();
  describe('One story scene at a time with two buttons — Kindness and Unkindness. Children ' +
    'classify each and read how it affects the other person\'s feelings and belonging.', LABEL);
}
function positionControls() { nextButton.position(10, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(19); text('Kindness or Unkindness?', canvasWidth / 2, 8);

  // scene with feeling face
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5); rect(margin, 42, canvasWidth - margin * 2, 92, 12);
  let fx = margin + 34, fy = 88;
  stroke('goldenrod'); strokeWeight(2); fill('lightyellow'); circle(fx, fy, 40);
  noStroke(); fill('sienna'); circle(fx - 8, fy - 4, 5); circle(fx + 8, fy - 4, 5);
  noFill(); stroke('sienna'); strokeWeight(2);
  if (picked === null) line(fx - 8, fy + 8, fx + 8, fy + 8);
  else if (deck[idx].kind) arc(fx, fy + 4, 18, 12, 0.1 * PI, 0.9 * PI);
  else arc(fx, fy + 12, 18, 10, PI + 0.1 * PI, TWO_PI - 0.1 * PI);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(15); text(deck[idx].t, margin + 64, 88, canvasWidth - margin * 2 - 78, 82);

  let bw = (canvasWidth - margin * 2 - 14) / 2, bh = 56, by = 150;
  aRect = { x: margin, y: by, w: bw, h: bh }; bRect = { x: margin + bw + 14, y: by, w: bw, h: bh };
  drawBtn(aRect, 'Kindness', true, 'seagreen'); drawBtn(bRect, 'Unkindness', false, 'slategray');
  cursor((pointInRect(mouseX, mouseY, aRect) || pointInRect(mouseX, mouseY, bRect)) && picked === null ? HAND : ARROW);

  noStroke(); textAlign(LEFT, TOP); textSize(14);
  if (picked === null) { fill('dimgray'); text('Is this kindness or unkindness? Tap a button.', margin, 222, canvasWidth - margin * 2, 30); }
  else { let ok = picked === deck[idx].kind; fill(ok ? 'seagreen' : 'darkorange'); text((ok ? '✓ ' : '') + deck[idx].e, margin, 222, canvasWidth - margin * 2, 60); }
}
function drawBtn(r, label, val, col) {
  let hover = pointInRect(mouseX, mouseY, r);
  strokeWeight(picked === val ? 4 : 2); stroke(col);
  fill(picked === val ? (val === deck[idx].kind ? 'honeydew' : 'mistyrose') : (hover && picked === null ? 'lightyellow' : 'white'));
  rect(r.x, r.y, r.w, r.h, 12); noStroke(); fill(col); textAlign(CENTER, CENTER); textSize(17); text(label, r.x, r.y, r.w, r.h);
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (picked !== null) return; if (pointInRect(mouseX, mouseY, aRect)) picked = true; else if (pointInRect(mouseX, mouseY, bRect)) picked = false; }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
