// Naming Body Parts Correctly - MicroSim (figure hotspots)
// CANVAS_HEIGHT: 520
// Kindergarten, Remember (L1): children click hotspots on a clothed child figure
// to reveal the correct name for common, non-sensitive body parts. Calm
// click-to-reveal, large plain text, no animation or sound (body-safety tone).

let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

// Hotspots: dx/dy offsets from figure anchor (baseY at feet).
let hotspots = [
  { key: 'head',     dx: 0,   dy: -302, name: 'This is your head.' },
  { key: 'ear',      dx: 40,  dy: -290, name: 'This is your ear.' },
  { key: 'shoulder', dx: -46, dy: -244, name: 'This is your shoulder.' },
  { key: 'elbow',    dx: -70, dy: -186, name: 'This is your elbow.' },
  { key: 'knee',     dx: -22, dy: -78,  name: 'This is your knee.' },
  { key: 'foot',     dx: -26, dy: -6,   name: 'This is your foot.' }
];

let revealed = {}; // key -> true
let selected = null;
let hotScreen = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));
  positionControls();
  describe('A drawing of a child in everyday clothes with six clickable dots over ' +
    'the head, ear, shoulder, elbow, knee, and foot. Clicking a dot shows the ' +
    'correct name for that body part in the box below.', LABEL);
}

function resetAll() {
  revealed = {};
  selected = null;
}

function positionControls() {
  resetButton.position(margin, drawHeight + 12);
}

function allFound() {
  for (let h of hotspots) {
    if (!revealed[h.key]) return false;
  }
  return true;
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
  text('Naming Body Parts', canvasWidth / 2, 10);

  let fx = canvasWidth * 0.36;
  let baseY = drawHeight - 96;
  drawFigure(fx, baseY);
  drawHotspots(fx, baseY);
  drawInfoBox();
  drawControlHint();
}

function drawFigure(fx, baseY) {
  // A simple clothed child: skin head/hands/feet, shirt torso+arms, pants legs.
  stroke('tan');
  strokeWeight(2);

  // Head
  fill('bisque');
  circle(fx, baseY - 290, 60);
  // Ears
  circle(fx - 30, baseY - 290, 14);
  circle(fx + 30, baseY - 290, 14);
  // Neck
  fill('bisque');
  rect(fx - 10, baseY - 264, 20, 16);

  // Shirt (torso)
  fill('steelblue');
  rect(fx - 44, baseY - 250, 88, 120, 16);
  // Sleeves / arms (shirt) going down to elbows
  rect(fx - 66, baseY - 246, 22, 70, 10);
  rect(fx + 44, baseY - 246, 22, 70, 10);
  // Forearms (skin) below sleeves
  fill('bisque');
  rect(fx - 66, baseY - 178, 20, 54, 8);
  rect(fx + 46, baseY - 178, 20, 54, 8);
  // Hands
  circle(fx - 56, baseY - 122, 18);
  circle(fx + 56, baseY - 122, 18);

  // Pants (legs)
  fill('saddlebrown');
  rect(fx - 40, baseY - 132, 34, 118, 10);
  rect(fx + 6, baseY - 132, 34, 118, 10);
  // Feet (shoes)
  fill('bisque');
  ellipse(fx - 24, baseY - 4, 40, 22);
  ellipse(fx + 24, baseY - 4, 40, 22);

  noStroke();
}

function drawHotspots(fx, baseY) {
  hotScreen = [];
  for (let h of hotspots) {
    let x = fx + h.dx, y = baseY + h.dy, r = 17;
    hotScreen.push({ x: x, y: y, r: r, h: h });
    let isRev = revealed[h.key];
    let hover = dist(mouseX, mouseY, x, y) < r + 2;
    strokeWeight(selected === h.key ? 4 : 2);
    stroke(isRev ? 'seagreen' : 'goldenrod');
    if (isRev) fill('mediumseagreen');
    else fill(hover ? 'gold' : color(255, 215, 0, 170));
    circle(x, y, r * 2);
    // Checkmark on revealed spots
    if (isRev) {
      stroke('white');
      strokeWeight(3);
      line(x - 6, y, x - 1, y + 5);
      line(x - 1, y + 5, x + 7, y - 6);
    }
    noStroke();
  }
}

function drawInfoBox() {
  let bh = 96;
  let by = drawHeight - bh - margin;
  let bx = canvasWidth * 0.58;
  let bw = canvasWidth - bx - margin;
  if (bw < 150) { bw = 150; }
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(bx, by, bw, bh, 10);
  noStroke();

  if (allFound()) {
    fill('seagreen');
    textAlign(LEFT, TOP);
    textSize(15);
    text('You know the correct names for these body parts! A trusted adult can ' +
      'always help if you have a question about any part of your body.',
      bx + 10, by + 10, bw - 20, bh - 20);
    return;
  }

  if (!selected) {
    fill('dimgray');
    textAlign(CENTER, CENTER);
    textSize(16);
    text('Tap a yellow dot to learn the name of that body part.',
      bx + 10, by + 10, bw - 20, bh - 20);
    return;
  }

  let h = hotspots.find(q => q.key === selected);
  fill('navy');
  textAlign(CENTER, CENTER);
  textSize(26);
  text(h.name, bx + 10, by + 10, bw - 20, bh - 20);
}

function drawControlHint() {
  // Progress count under the figure, above the control strip.
  let found = 0;
  for (let h of hotspots) if (revealed[h.key]) found++;
  fill('dimgray');
  textAlign(CENTER, BOTTOM);
  textSize(15);
  text('Found ' + found + ' of 6', canvasWidth * 0.36, drawHeight - 14);
}

function mousePressed() {
  for (let s of hotScreen) {
    if (dist(mouseX, mouseY, s.x, s.y) < s.r + 2) {
      revealed[s.h.key] = true;
      selected = s.h.key;
      return;
    }
  }
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
