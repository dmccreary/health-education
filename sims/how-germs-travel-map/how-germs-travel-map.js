// How Germs Travel Map - MicroSim (classroom hotspots showing germ paths)
// CANVAS_HEIGHT: 490
// Grade 1, Understand (L2): students identify and explain the common paths germs travel
// between people, surfaces, and objects.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let pathButton, resetButton;

let spots = [
  { key: 'Sneeze', fx: 0.22, fy: 0.28, e: 'A sneeze sends germ droplets into the air and onto hands.' },
  { key: 'Doorknob', fx: 0.75, fy: 0.3, e: 'Germs on a shared doorknob move to the next hand that touches it.' },
  { key: 'Water fountain', fx: 0.3, fy: 0.66, e: 'Germs can spread at a shared water fountain button.' },
  { key: 'Toy bin', fx: 0.6, fy: 0.68, e: 'Shared toys pass germs from hand to hand.' },
  { key: 'Handshake', fx: 0.85, fy: 0.62, e: 'Shaking hands can pass germs between two people.' }
];

let selected = -1;
let showPath = false;
let spotScreen = [];
let handX, handY;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  pathButton = createButton('Show Germ Path'); pathButton.mousePressed(() => { showPath = !showPath; });
  resetButton = createButton('Reset'); resetButton.mousePressed(() => { selected = -1; showPath = false; });
  positionControls();
  describe('A classroom scene with five hotspots — a sneeze, doorknob, water fountain, toy ' +
    'bin, and handshake. Clicking each explains how germs spread from there; Show Germ Path ' +
    'draws a dotted path to a hand.', LABEL);
}
function positionControls() { pathButton.position(10, drawHeight + 10); resetButton.position(150, drawHeight + 10); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(19); text('How Germs Travel', canvasWidth / 2, 8);

  let sy = 40, sh = 250;
  noStroke(); fill('honeydew'); rect(margin, sy, canvasWidth - margin * 2, sh, 8);
  fill('bisque'); rect(margin, sy + sh - 36, canvasWidth - margin * 2, 36, 8);
  // hand icon (germ destination)
  handX = canvasWidth * 0.5; handY = sy + sh * 0.5;
  fill('wheat'); stroke('peru'); strokeWeight(2); ellipse(handX, handY, 40, 30);
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(10); text('hand', handX - 20, handY + 16, 40, 14);

  spotScreen = [];
  for (let i = 0; i < spots.length; i++) {
    let x = margin + spots[i].fx * (canvasWidth - margin * 2);
    let y = sy + spots[i].fy * sh;
    spotScreen.push({ x: x, y: y, r: 18 });
    if (showPath && selected === i) { stroke('crimson'); strokeWeight(2); drawingContext.setLineDash([5, 5]); line(x, y, handX, handY); drawingContext.setLineDash([]); }
    let sel = selected === i, hover = dist(mouseX, mouseY, x, y) < 20;
    strokeWeight(sel ? 3 : 2); stroke(sel ? 'darkorange' : 'crimson');
    fill(sel ? 'gold' : (hover ? 'mistyrose' : color(220, 20, 60, 150))); circle(x, y, 36);
    noStroke(); fill(sel || hover ? 'black' : 'white'); textAlign(CENTER, CENTER); textSize(11); text(i + 1, x, y);
    if (sel || hover) { fill('black'); textAlign(CENTER, TOP); textSize(9); text(spots[i].key, x - 44, y + 18, 88, 20); }
  }
  cursor(overAny() ? HAND : ARROW);

  let py = 300, ph = drawHeight - py - 8;
  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, py, canvasWidth - margin * 2, ph, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (selected < 0) { fill('dimgray'); text('Tap a red spot to see how germs could travel from there. Then try Show Germ Path.', margin + 12, py + 10, canvasWidth - margin * 2 - 24, 40); }
  else { fill('crimson'); text(spots[selected].key + ': ', margin + 12, py + 10); fill('black'); text(spots[selected].e, margin + 12, py + 28, canvasWidth - margin * 2 - 24, 40); }
}
function overAny() { for (let s of spotScreen) if (dist(mouseX, mouseY, s.x, s.y) < s.r) return true; return false; }
function mousePressed() { for (let i = 0; i < spotScreen.length; i++) { let s = spotScreen[i]; if (dist(mouseX, mouseY, s.x, s.y) < s.r) { selected = i; return; } } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
