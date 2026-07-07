// Personal Boundaries Interactive Map - MicroSim (click-to-reveal petal map)
// CANVAS_HEIGHT: 520
// Grade 4, Understand (L2): students explain and classify the four kinds of
// personal boundaries (physical, belongings, time, information) and connect
// each to a respectful boundary-setting phrase. Click a petal to explore.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let showAllButton;
let resetButton;

// The four boundary categories (petals) plus a center summary.
let petals = [
  {
    key: 'Physical',
    col: 'steelblue',
    def: 'Your body and personal space.',
    example: 'Example: someone standing too close.',
    phrase: '"Please give me a little more space."'
  },
  {
    key: 'Belongings',
    col: 'seagreen',
    def: 'Your things.',
    example: 'Example: a classmate grabbing your pencil.',
    phrase: '"Please ask before you borrow my things."'
  },
  {
    key: 'Time',
    col: 'mediumpurple',
    def: 'How you spend your time.',
    example: 'Example: being pressured to stay longer at an activity.',
    phrase: '"I need to head home now."'
  },
  {
    key: 'Information',
    col: 'goldenrod',
    def: 'What you share about yourself.',
    example: 'Example: being asked personal questions by someone you do not know well.',
    phrase: '"I would rather not share that."'
  }
];

let centerSummary =
  'You have the right to set boundaries, and you also have the ' +
  'responsibility to respect other people\'s boundaries.';

let selected = null;   // petal key, or 'center', or null
let showAll = false;

// Screen-space hit regions rebuilt each frame.
let petalHits = [];
let centerHit = { x: 0, y: 0, r: 0 };

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  showAllButton = createButton('Show All Labels');
  showAllButton.mousePressed(() => { showAll = !showAll; });
  showAllButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = null; showAll = false; });
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A map of personal boundaries: a central circle labeled Personal ' +
    'Boundaries surrounded by four colored petals for Physical, Belongings, ' +
    'Time, and Information. Clicking a petal shows a definition, an everyday ' +
    'example, and a respectful phrase for setting that boundary in the panel ' +
    'below. Clicking the center shows a summary about rights and ' +
    'responsibilities.', LABEL);
}

function positionControls() {
  showAllButton.position(10, drawHeight + 10);
  resetButton.position(160, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  // backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Personal Boundaries Map', canvasWidth / 2, 8);

  drawMap();
  drawInfoPanel();
}

function drawMap() {
  // Diagram lives between the title and the info panel.
  let bandTop = 36;
  let bandBottom = drawHeight - 122;  // top of the info panel region
  let cx = canvasWidth / 2;
  let cy = (bandTop + bandBottom) / 2;
  let halfBand = (bandBottom - bandTop) / 2;

  // The flower's half-extent is ring + petalR. With petalR = 0.68*ring the
  // half-extent is 1.68*ring, so fit that inside halfBand (vertical) and also
  // inside the half-width (horizontal). Whichever is smaller wins.
  let petalFrac = 0.68;
  let ringByHeight = halfBand / (1 + petalFrac);
  let ringByWidth = (canvasWidth / 2 - margin) / (1 + petalFrac);
  let ring = min(ringByHeight, ringByWidth);
  ring = constrain(ring, 56, 128);
  let petalR = ring * petalFrac;
  let centerR = ring * 0.64;

  // Petal angles: top, right, bottom, left.
  let angles = [-HALF_PI, 0, HALF_PI, PI];

  petalHits = [];
  for (let i = 0; i < petals.length; i++) {
    let p = petals[i];
    let px = cx + cos(angles[i]) * ring;
    let py = cy + sin(angles[i]) * ring;
    petalHits.push({ x: px, y: py, r: petalR, key: p.key });

    let sel = selected === p.key;
    let hover = dist(mouseX, mouseY, px, py) < petalR;

    // connector line from center to petal
    stroke('lightsteelblue');
    strokeWeight(2);
    line(cx, cy, px, py);

    // petal circle
    stroke(p.col);
    strokeWeight(sel ? 4 : 2);
    fill(sel || hover ? p.col : lerpColor(color(p.col), color('white'), 0.62));
    circle(px, py, petalR * 2);

    // petal label
    noStroke();
    fill(sel || hover ? 'white' : 'black');
    textAlign(CENTER, CENTER);
    textSize(petalR > 46 ? 15 : 13);
    text(p.key, px, py);
  }

  // center circle
  let cHover = dist(mouseX, mouseY, cx, cy) < centerR;
  let cSel = selected === 'center';
  centerHit = { x: cx, y: cy, r: centerR };
  stroke('dimgray');
  strokeWeight(cSel ? 4 : 2);
  fill(cSel || cHover ? 'slategray' : 'gainsboro');
  circle(cx, cy, centerR * 2);
  noStroke();
  fill(cSel || cHover ? 'white' : 'black');
  textAlign(CENTER, CENTER);
  textSize(centerR > 58 ? 15 : 13);
  text('Personal\nBoundaries', cx, cy);
}

function drawInfoPanel() {
  let ph = 110;
  let py = drawHeight - ph - 8;
  let pw = canvasWidth - margin * 2;
  let px = margin;
  let pad = 12;

  // panel frame; tint by selection color
  let accent = 'steelblue';
  if (selected && selected !== 'center') {
    accent = petals.find(q => q.key === selected).col;
  } else if (selected === 'center') {
    accent = 'slategray';
  }
  fill('white');
  stroke(selected ? accent : 'silver');
  strokeWeight(selected ? 2 : 1);
  rect(px, py, pw, ph, 8);
  noStroke();

  let tw = pw - pad * 2;

  if (!selected) {
    fill('dimgray');
    textAlign(LEFT, TOP);
    textSize(14);
    text('Tap a colored petal to learn about that boundary. ' +
      'Tap the center circle for the big idea.',
      px + pad, py + pad, tw, ph - pad * 2);
    return;
  }

  if (selected === 'center') {
    fill('slategray');
    textAlign(LEFT, TOP);
    textSize(15);
    text('The Big Idea', px + pad, py + pad, tw, 22);
    fill('black');
    textSize(14);
    text(centerSummary, px + pad, py + pad + 26, tw, ph - pad * 2 - 26);
    return;
  }

  let p = petals.find(q => q.key === selected);
  // heading
  fill(p.col);
  textAlign(LEFT, TOP);
  textSize(16);
  text(p.key + ' boundaries: ' + p.def, px + pad, py + pad, tw, 40);
  // example
  fill('black');
  textSize(13);
  text(p.example, px + pad, py + pad + 40, tw, 20);
  // phrase (what you can say)
  fill('seagreen');
  textSize(13);
  text('You can say: ' + p.phrase, px + pad, py + pad + 62, tw, 34);
}

function mousePressed() {
  // ignore clicks in the control strip
  if (mouseY >= drawHeight) return;
  for (let h of petalHits) {
    if (dist(mouseX, mouseY, h.x, h.y) < h.r) {
      selected = h.key;
      return;
    }
  }
  if (dist(mouseX, mouseY, centerHit.x, centerHit.y) < centerHit.r) {
    selected = 'center';
    return;
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
