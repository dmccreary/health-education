// How Teasing Can Ripple Through a Group - MicroSim (scene + toggle + click-to-reveal)
// CANVAS_HEIGHT: 490
// Grade 2, Analyze (L4): students examine how unwanted teasing affects the person teased
// AND witnesses, distinguishing it from a kind joke everyone enjoys.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

let kids = [
  { kind: 'This friend is laughing along — everyone agreed the joke was funny.',
    tease: 'This is the friend being teased. They feel sad and left out.' },
  { kind: 'This friend is enjoying the joke with the group.',
    tease: 'This friend is watching and feels uncomfortable, unsure whether to help.' },
  { kind: 'This friend is smiling and having fun.',
    tease: 'This friend feels bad for the one being teased.' },
  { kind: 'This friend is laughing and part of the fun.',
    tease: 'This friend wants the teasing to stop but is not sure what to do.' },
  { kind: 'This friend is part of the happy group.',
    tease: 'This friend worries the same thing could happen to them.' }
];

let teasing = false;    // false = Kind Joke, true = Unwanted Teasing
let selected = -1;
let kidScreen = [];
let toggleRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; teasing = false; });
  positionControls();
  describe('Five cartoon children in a loose circle with a toggle between a Kind Joke and ' +
    'Unwanted Teasing. Clicking a child shows how they likely feel in the current scenario, ' +
    'showing how teasing ripples to witnesses too.', LABEL);
}

function positionControls() { resetButton.position(10, drawHeight + 10); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('How Teasing Can Ripple', canvasWidth / 2, 8);

  // toggle
  toggleRects = [];
  let tw = 150, th = 26, tx = canvasWidth / 2 - tw;
  let labels = ['Kind Joke', 'Unwanted Teasing'];
  for (let i = 0; i < 2; i++) {
    let x = tx + i * tw, on = (i === 1) === teasing;
    toggleRects.push({ x: x, y: 32, w: tw, h: th, teasing: i === 1 });
    stroke('slateblue'); strokeWeight(1.5);
    fill(on ? 'slateblue' : 'white');
    rect(x, 32, tw, th, i === 0 ? 6 : 0, i === 1 ? 6 : 0, i === 1 ? 6 : 0, i === 0 ? 6 : 0);
    noStroke(); fill(on ? 'white' : 'slateblue'); textAlign(CENTER, CENTER); textSize(12);
    text(labels[i], x, 32, tw, th);
  }

  // 5 kids in a loose circle (left area)
  kidScreen = [];
  let cx = canvasWidth * 0.30, cy = 220, R = 90;
  for (let i = 0; i < 5; i++) {
    let a = -HALF_PI + i * TWO_PI / 5;
    let x = cx + cos(a) * R, y = cy + sin(a) * R;
    kidScreen.push({ x: x, y: y, r: 26 });
    let isTarget = teasing && i === 0;
    let sel = selected === i;
    strokeWeight(sel ? 3 : 2); stroke(sel ? 'darkorange' : 'gray');
    fill(isTarget ? 'lightsteelblue' : 'lightyellow');
    circle(x, y, 46);
    // face
    noFill(); stroke('sienna'); strokeWeight(2);
    if (isTarget) arc(x, y + 6, 16, 12, PI + 0.15 * PI, TWO_PI - 0.15 * PI); // frown
    else arc(x, y - 2, 16, 12, 0.15 * PI, 0.85 * PI); // smile
    noStroke(); fill('sienna'); circle(x - 7, y - 6, 4); circle(x + 7, y - 6, 4);
  }
  cursor(overKid() ? HAND : ARROW);

  // infobox (right)
  let px = canvasWidth * 0.58, pw = canvasWidth - px - margin, py = 70, ph = drawHeight - py - 12;
  fill('white'); stroke('silver'); strokeWeight(1); rect(px, py, pw, ph, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (selected < 0) { fill('dimgray'); text('Click a child to see how they feel.', px + 10, py + 10, pw - 20, 60); }
  else { fill('black'); text(teasing ? kids[selected].tease : kids[selected].kind, px + 10, py + 10, pw - 20, ph - 20); }
}

function overKid() { for (let k of kidScreen) if (dist(mouseX, mouseY, k.x, k.y) < k.r) return true; return false; }

function mousePressed() {
  for (let t of toggleRects) if (mouseX >= t.x && mouseX <= t.x + t.w && mouseY >= t.y && mouseY <= t.y + t.h) { teasing = t.teasing; return; }
  for (let i = 0; i < kidScreen.length; i++) { let k = kidScreen[i]; if (dist(mouseX, mouseY, k.x, k.y) < k.r) { selected = i; return; } }
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
