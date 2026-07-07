// How Moving Your Body Helps You - MicroSim (click-to-reveal explorer)
// CANVAS_HEIGHT: 475
// Grade 3, Understand (L2): students explain the benefits of physical activity
// for brain, heart, muscles, and sleep by clicking labeled zones on a figure and
// matching activities to the body parts they help. Click-to-reveal (no continuous
// animation) suits an Understand-level "explain/summarize" objective.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 45;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let resetButton;

// Body-benefit zones (positions are relative to the figure anchor, set in draw)
let zones = [
  { key: 'brain', name: 'Brain', dx: 0, dy: -150, r: 30,
    benefit: 'Brain: Activity helps you focus and remember things in school.' },
  { key: 'heart', name: 'Heart', dx: 0, dy: -70, r: 28,
    benefit: 'Heart: Your heart grows stronger and pumps blood more easily.' },
  { key: 'muscles', name: 'Muscles', dx: 22, dy: 20, r: 28,
    benefit: 'Muscles: Moving makes your muscles stronger for running and play.' },
  { key: 'sleep', name: 'Sleep', dx: 62, dy: -150, r: 26,
    benefit: 'Sleep: Being active by day helps you fall asleep faster at night.' }
];

// Activities and the zones each one helps
let activities = [
  { name: 'Running', zones: ['brain', 'heart', 'muscles', 'sleep'] },
  { name: 'Biking', zones: ['heart', 'muscles', 'sleep'] },
  { name: 'Dancing', zones: ['brain', 'heart', 'muscles'] },
  { name: 'Swimming', zones: ['heart', 'muscles', 'sleep'] },
  { name: 'Play outside', zones: ['brain', 'heart', 'sleep'] }
];

let selectedZone = null;    // zone key clicked
let highlighted = [];       // zone keys lit by an activity
let visited = {};           // zones the student has opened
let activityRects = [];
let zoneScreen = {};        // key -> {x,y,r} in screen coords for hit-testing
let pulse = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  describe('An illustrated child figure with four clickable zones: brain, heart, ' +
    'muscles, and a sleep cloud. Clicking a zone reveals its benefit. Clicking an ' +
    'activity lights up every zone that activity helps.', LABEL);
}

function positionControls() {
  resetButton.position(10, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  pulse += 0.06;

  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('How Moving Your Body Helps You', canvasWidth / 2, 8);

  let fx = canvasWidth * 0.26;
  let fy = 250;
  drawFigure(fx, fy);
  drawZones(fx, fy);
  drawPanel();
  drawActivities();
}

function drawFigure(fx, fy) {
  stroke('goldenrod');
  strokeWeight(3);
  fill('wheat');
  // head
  circle(fx, fy - 150, 44);
  noFill();
  // trunk
  line(fx, fy - 128, fx, fy - 40);
  // arms (running pose)
  line(fx, fy - 110, fx - 34, fy - 130);
  line(fx, fy - 110, fx + 34, fy - 90);
  // legs
  line(fx, fy - 40, fx - 26, fy + 20);
  line(fx, fy - 40, fx + 30, fy + 10);
  noStroke();
}

function drawZones(fx, fy) {
  zoneScreen = {};
  for (let z of zones) {
    let x = fx + z.dx, y = fy + z.dy;
    zoneScreen[z.key] = { x: x, y: y, r: z.r };
    let isSel = selectedZone === z.key;
    let isHi = highlighted.includes(z.key);
    let hover = dist(mouseX, mouseY, x, y) < z.r;

    // invite first click on heart with a gentle pulse (before any interaction)
    let invite = z.key === 'heart' && !selectedZone && highlighted.length === 0;
    let extra = invite ? map(sin(pulse), -1, 1, 0, 6) : 0;

    strokeWeight(isSel || isHi ? 4 : 2);
    stroke(isSel ? 'darkorange' : (isHi ? 'seagreen' : 'steelblue'));
    fill(isSel ? 'gold' : (isHi ? 'palegreen' : (hover ? 'lightyellow' : color(255, 255, 255, 210))));
    circle(x, y, z.r * 2 + extra);
    noStroke();
    fill('navy');
    textAlign(CENTER, CENTER);
    textSize(13);
    text(z.name, x, y);
  }
}

function drawPanel() {
  let px = canvasWidth * 0.52;
  let pw = canvasWidth - px - margin;
  let py = 48;
  let ph = 300;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(px, py, pw, ph, 10);
  noStroke();

  fill('black');
  textAlign(LEFT, TOP);
  textSize(15);
  if (selectedZone) {
    let z = zones.find(q => q.key === selectedZone);
    text(z.benefit, px + 12, py + 14, pw - 24, ph - 28);
  } else if (highlighted.length) {
    text('This activity helps: ' + highlighted.join(', ') +
      '. Most activities help more than one part at once!',
      px + 12, py + 14, pw - 24, ph - 28);
  } else {
    fill('dimgray');
    text('Click a zone on the figure to see how activity helps that part of you. ' +
      'Then click an activity below.', px + 12, py + 14, pw - 24, ph - 28);
  }

  // "found them all" caption
  if (Object.keys(visited).length === 4) {
    fill('seagreen');
    textAlign(LEFT, BOTTOM);
    textSize(15);
    text('You found them all!', px + 12, py + ph - 12);
  }
}

function drawActivities() {
  activityRects = [];
  let n = activities.length;
  let gap = 8;
  let aw = (canvasWidth - margin * 2 - gap * (n - 1)) / n;
  let ah = 40;
  let ay = 372;
  textSize(13);
  for (let i = 0; i < n; i++) {
    let x = margin + i * (aw + gap);
    activityRects.push({ x: x, y: ay, w: aw, h: ah, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: x, y: ay, w: aw, h: ah });
    stroke('mediumpurple');
    strokeWeight(1.5);
    fill(hover ? 'lavender' : 'white');
    rect(x, ay, aw, ah, 8);
    noStroke();
    fill('indigo');
    textAlign(CENTER, CENTER);
    text(activities[i].name, x + aw / 2, ay + ah / 2);
  }
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  // zones
  for (let z of zones) {
    let s = zoneScreen[z.key];
    if (s && dist(mouseX, mouseY, s.x, s.y) < s.r) {
      selectedZone = z.key;
      highlighted = [];
      visited[z.key] = true;
      return;
    }
  }
  // activities
  for (let a of activityRects) {
    if (pointInRect(mouseX, mouseY, a)) {
      highlighted = activities[a.i].zones.slice();
      selectedZone = null;
      return;
    }
  }
}

function resetAll() {
  selectedZone = null;
  highlighted = [];
  visited = {};
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
