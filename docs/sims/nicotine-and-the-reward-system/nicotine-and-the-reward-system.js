// Nicotine and the Reward System - MicroSim (step-through data view)
// CANVAS_HEIGHT: 495
// Grades 6-8, Understand (L2): students step through four stages to explain how
// nicotine reaches the brain's reward system and forms a stronger, faster reward
// response in an adolescent brain than in an adult brain. No product, device, or
// method of use is shown -- only a labeled brain diagram and reward-pathway data.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let prevButton;
let nextButton;
let compareCheckbox;

let stage = 1;          // 1..4
let maxStage = 4;
let compareMode = false;

// Readout text for each stage (right panel).
let stageTitles = {
  1: 'Stage 1: At Rest',
  2: 'Stage 2: Nicotine Arrives',
  3: 'Stage 3: Reward Response',
  4: 'Stage 4: Why It Matters'
};
let stageReadouts = {
  1: 'Baseline reward activity: normal. The reward pathway carries everyday signals for things like food, friends, and fun.',
  2: 'Nicotine reaches brain receptors within seconds. The dots show nicotine traveling along the reward pathway.',
  3: 'The reward pathway is activated. Compare how the adult and adolescent brains respond below.',
  4: 'Because the adolescent reward system is still forming, repeated nicotine exposure builds dependence more quickly than in a fully developed adult brain.'
};

// Illustrative relative reward-response values (NOT exact clinical figures).
let adultLevel = 0.55;
let teenLevel = 0.85;

// Node layout for the reward pathway (fractions of the brain area).
let pathNodes = [
  { fx: 0.30, fy: 0.72, label: 'VTA' },
  { fx: 0.52, fy: 0.55, label: 'Reward\ncenter' },
  { fx: 0.74, fy: 0.38, label: 'Thinking\narea' }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  prevButton = createButton('Previous');
  prevButton.parent(document.querySelector('main'));
  prevButton.mousePressed(() => { if (stage > 1) stage--; });

  nextButton = createButton('Next');
  nextButton.parent(document.querySelector('main'));
  nextButton.mousePressed(() => { if (stage < maxStage) stage++; });

  compareCheckbox = createCheckbox(' Compare Adult vs. Adolescent', false);
  compareCheckbox.parent(document.querySelector('main'));
  compareCheckbox.changed(() => { compareMode = compareCheckbox.checked(); });

  positionControls();
  describe('A four-stage step-through diagram. The left side shows a simplified brain ' +
    'with a highlighted reward pathway; the right side shows a data readout. Use Next and ' +
    'Previous to move through the stages and a checkbox to compare the adult and adolescent ' +
    'reward response as two bars.', LABEL);
}

function positionControls() {
  let y = drawHeight + 12;
  prevButton.position(margin, y);
  nextButton.position(margin + 90, y);
  compareCheckbox.position(margin + 165, y + 4);
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
  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Nicotine and the Reward System', canvasWidth / 2, 8);

  // stage counter (top-right of draw area)
  noStroke();
  fill('dimgray');
  textAlign(RIGHT, TOP);
  textSize(12);
  text('Stage ' + stage + ' of ' + maxStage, canvasWidth - margin, 12);

  drawBrainPanel();
  drawReadoutPanel();
}

// ---- Left side: brain + reward pathway ----
function drawBrainPanel() {
  let bx = margin;
  let by = 44;
  let bw = canvasWidth * 0.55 - margin;
  let bh = drawHeight - by - 12;

  // brain outline
  stroke('rosybrown');
  strokeWeight(2);
  fill('mistyrose');
  ellipse(bx + bw / 2, by + bh / 2, bw * 0.96, bh * 0.82);
  noStroke();

  // resolve node positions in pixels
  let pts = pathNodes.map(n => ({
    x: bx + n.fx * bw,
    y: by + n.fy * bh,
    label: n.label
  }));

  // Pathway lit up starting at stage 3.
  let active = stage >= 3;
  let pathColor = active ? 'gold' : 'lightsteelblue';
  let pathWeight = active ? 6 : 4;

  // connecting pathway lines
  stroke(pathColor);
  strokeWeight(pathWeight);
  for (let i = 0; i < pts.length - 1; i++) {
    line(pts[i].x, pts[i].y, pts[i + 1].x, pts[i + 1].y);
  }

  // nicotine dots along the pathway (stage 2+)
  if (stage >= 2) {
    fill('mediumpurple');
    noStroke();
    for (let i = 0; i < pts.length - 1; i++) {
      for (let t = 0.25; t < 1; t += 0.5) {
        let dx = lerp(pts[i].x, pts[i + 1].x, t);
        let dy = lerp(pts[i].y, pts[i + 1].y, t);
        circle(dx, dy, 12);
      }
    }
    // dot legend
    noStroke();
    fill('mediumpurple');
    circle(bx + 10, by + 8, 12);
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(11);
    text('= nicotine', bx + 20, by + 8);
  }

  // nodes
  for (let p of pts) {
    let glow = active;
    strokeWeight(2);
    stroke(glow ? 'goldenrod' : 'steelblue');
    fill(glow ? 'gold' : 'lightskyblue');
    circle(p.x, p.y, 40);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(10);
    text(p.label, p.x - 30, p.y - 20, 60, 40);
  }

  // caption under the brain
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(12);
  text('Reward pathway', bx + bw / 2, by + bh - 6);
}

// ---- Right side: readout / data panel ----
function drawReadoutPanel() {
  let px = canvasWidth * 0.57;
  let py = 44;
  let pw = canvasWidth - px - margin;
  let ph = drawHeight - py - 12;

  // panel background
  stroke('lightgray');
  strokeWeight(1);
  fill('white');
  rect(px, py, pw, ph, 8);
  noStroke();

  let padL = px + 12;
  let innerW = pw - 24;

  // stage heading
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(15);
  text(stageTitles[stage], padL, py + 12, innerW, 44);

  // readout body text (wrap box: x is LEFT edge, y is TOP edge)
  fill('black');
  textAlign(LEFT, TOP);
  textSize(13);
  text(stageReadouts[stage], padL, py + 58, innerW, 120);

  // Comparison bars: shown automatically on stage 3, or whenever compare is on.
  let showBars = (stage >= 3) || compareMode;
  if (showBars) {
    drawCompareBars(padL, py + 178, innerW, ph - 178 - 10);
  }
}

function drawCompareBars(x, y, w, h) {
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Reward response', x, y);

  let labelY = y + 20;
  let barTop = labelY + 2;
  let barH = 18;
  let rowGap = 44;
  let maxBarW = w;

  // Adult row
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(11);
  text('Adult brain', x, labelY);
  stroke('lightgray');
  strokeWeight(1);
  fill('whitesmoke');
  rect(x, barTop + 12, maxBarW, barH, 4);
  noStroke();
  fill('steelblue');
  rect(x, barTop + 12, maxBarW * adultLevel, barH, 4);

  // Adolescent row
  let ay = labelY + rowGap;
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(11);
  text('Adolescent brain', x, ay);
  stroke('lightgray');
  strokeWeight(1);
  fill('whitesmoke');
  rect(x, ay + 14, maxBarW, barH, 4);
  noStroke();
  fill('indianred');
  rect(x, ay + 14, maxBarW * teenLevel, barH, 4);

  // note
  noStroke();
  fill('gray');
  textAlign(LEFT, TOP);
  textSize(10);
  text('Stronger, faster-forming in the adolescent brain (illustrative)',
    x, ay + 14 + barH + 6, w, 40);
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
