// Community Nutrition Initiative Evaluator - MicroSim
// CANVAS_HEIGHT: 620
// Grade 9-12, Evaluate (L5): students assess five community nutrition
// initiatives against a rubric of Reach, Sustainability, and Cultural Fit,
// then compare their scores to a reasoned model evaluation.
// Case details are illustrative program models, not specific real organizations.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 150;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let sReach, sSust, sFit;
let submitButton, resetButton;

// Five community nutrition initiatives with realistic illustrative case models
// and a reasoned model rating: [Reach, Sustainability, Cultural Fit] (1-5).
let initiatives = [
  {
    name: 'Mobile Produce Market',
    short: 'Mobile Produce Market',
    meta: '2 years in operation',
    desc: 'A refrigerated truck stocked with fresh produce parks at four fixed stops across two food-desert neighborhoods, two afternoons a week. Funding is a three-year hospital community-benefit grant plus modest sales revenue. It serves roughly 300 households a month, weighted toward seniors and families without cars.',
    model: [4, 2, 3],
    why: 'Strong, direct reach into food deserts for residents without transportation, but the truck depends on a time-limited grant and carries a fixed produce list with little cultural tailoring. A solid access intervention whose long-term durability is the open question.'
  },
  {
    name: 'SNAP Matching at Farmers Market',
    short: 'SNAP Matching at Market',
    meta: '4 years in operation',
    desc: 'Every SNAP/EBT dollar spent at the market is matched dollar-for-dollar toward fresh fruits and vegetables, capped at $20 per visit. Funding comes from a state nutrition-incentive grant matched by market vendor fees. It serves about 450 SNAP shoppers each season, with participation growing every year.',
    model: [4, 4, 4],
    why: 'Directly closes the price gap that pushes low-income shoppers toward processed food. Diversified funding and a multi-year track record support durability, and shoppers choose their own culturally relevant produce. A high-priority model on all three dimensions.'
  },
  {
    name: 'School Garden Program',
    short: 'School Garden Program',
    meta: '3 years in operation',
    desc: 'Raised-bed gardens at three schools let students grow, harvest, and taste produce during science and health classes. Funding is PTA fundraising plus in-kind volunteer labor, with no dedicated staff. It enrolls about 600 students a year, though the total harvest volume is small.',
    model: [2, 3, 4],
    why: 'Excellent for hands-on food literacy and can grow crops meaningful to the school community, but it changes knowledge far more than household food access, and it supplies little actual food. Volunteer dependence also makes it fragile. Best valued as education, not a food-supply fix.'
  },
  {
    name: 'Community Cooking Education',
    short: 'Community Cooking Education',
    meta: '5 years in operation',
    desc: 'Free six-week cooking classes taught by a community health worker pair budget-friendly recipes with the fresh ingredients residents can actually buy nearby. Funding is a rotating mix of small foundation grants. Attendance averages 15 adults per series, with several series each year.',
    model: [2, 3, 5],
    why: 'Very high cultural fit and deep skill-building per participant, because recipes are built around residents’ own cuisines and budgets. But small class sizes cap total reach, and stitched-together short grants make funding uneven. Pairs well with an access program rather than standing alone.'
  },
  {
    name: 'Local Food Policy Council',
    short: 'Local Food Policy Council',
    meta: '6 years in operation',
    desc: 'A volunteer council of residents, farmers, retailers, and city staff advocates for zoning, transit, and subsidy changes across the whole local food system. Funding is minimal — a small city stipend and volunteer time. Membership is about 25, with no direct food distribution but several policy wins.',
    model: [5, 4, 3],
    why: 'Highest ceiling of any model because it changes the system rather than patching it, and it is cheap to sustain once institutionalized in local government. But its impact is indirect and slow, and it is only as inclusive as its membership happens to be.'
  }
];

let selected = 0;

const DIMS = ['Reach', 'Sustainability', 'Cultural Fit'];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // per-initiative student state
  for (let it of initiatives) {
    it.student = [3, 3, 3];
    it.submitted = false;
  }

  sReach = createSlider(1, 5, 3, 1);
  sSust = createSlider(1, 5, 3, 1);
  sFit = createSlider(1, 5, 3, 1);
  sReach.style('width', '120px');
  sSust.style('width', '120px');
  sFit.style('width', '120px');

  submitButton = createButton('Submit Rating');
  submitButton.mousePressed(() => { initiatives[selected].submitted = true; });
  submitButton.style('font-size', '13px');
  submitButton.style('padding', '4px 12px');
  submitButton.style('border-radius', '14px');
  submitButton.style('border', '1px solid navy');
  submitButton.style('background', 'navy');
  submitButton.style('color', 'white');
  submitButton.style('cursor', 'pointer');

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetCurrent);
  resetButton.style('font-size', '13px');
  resetButton.style('padding', '4px 12px');
  resetButton.style('border-radius', '14px');
  resetButton.style('border', '1px solid silver');
  resetButton.style('background', '#f1f5f9');
  resetButton.style('color', '#334155');
  resetButton.style('cursor', 'pointer');

  loadSlidersFromSelected();
  positionControls();

  describe('An evaluator for five community nutrition initiatives. A row of five ' +
    'cards at the top selects an initiative; the panel below shows its illustrative ' +
    'case description. Three sliders set Reach, Sustainability, and Cultural Fit ' +
    'ratings from 1 to 5, a live Overall Priority Score bar updates as they move, ' +
    'and a Submit Rating button reveals a reasoned model rating for comparison.', LABEL);
}

function positionControls() {
  const lx = margin + 116;
  sReach.position(lx, drawHeight + 30);
  sSust.position(lx, drawHeight + 60);
  sFit.position(lx, drawHeight + 90);
  submitButton.position(margin, drawHeight + 118);
  resetButton.position(margin + 132, drawHeight + 118);
}

function resetCurrent() {
  let it = initiatives[selected];
  it.student = [3, 3, 3];
  it.submitted = false;
  loadSlidersFromSelected();
}

function loadSlidersFromSelected() {
  let it = initiatives[selected];
  sReach.value(it.student[0]);
  sSust.value(it.student[1]);
  sFit.value(it.student[2]);
}

// green (4-5), yellow (2-3), red (1)
function dimColor(v) {
  if (v >= 4) return color(34, 139, 34);   // green
  if (v >= 2) return color(200, 145, 0);    // amber/yellow
  return color(200, 60, 60);                // red
}

function avgColor(a) {
  if (a >= 3.5) return color(34, 139, 34);
  if (a >= 2) return color(200, 145, 0);
  return color(200, 60, 60);
}

function priorityScore(arr) {
  let avg = (arr[0] + arr[1] + arr[2]) / 3;
  return Math.round((avg / 5) * 100);
}

function draw() {
  updateCanvasSize();

  // read slider values into the selected initiative (live)
  let it = initiatives[selected];
  it.student = [sReach.value(), sSust.value(), sFit.value()];

  // backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // header
  fill('navy');
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  textSize(18);
  text('Community Nutrition Initiative Evaluator', canvasWidth / 2, 8);
  textStyle(NORMAL);
  fill('dimgray');
  textSize(12);
  text('Score each initiative on Reach, Sustainability, and Cultural Fit, then compare to a model rating.',
    canvasWidth / 2, 30, canvasWidth - 20, 30);

  drawCards();
  drawDetail(it);
  drawControlLabels(it);

  // bottom disclaimer
  noStroke();
  fill(120);
  textAlign(CENTER, BOTTOM);
  textStyle(ITALIC);
  textSize(10);
  text('Case details are illustrative program models for evaluation practice, not specific real organizations.',
    canvasWidth / 2, drawHeight - 6, canvasWidth - 16, 20);
  textStyle(NORMAL);
}

let cardRects = [];

function drawCards() {
  cardRects = [];
  const n = initiatives.length;
  const gap = 7;
  const availW = canvasWidth - 2 * margin;
  const cardW = (availW - (n - 1) * gap) / n;
  const cardY = 52;
  const cardH = 46;
  textAlign(CENTER, CENTER);
  for (let i = 0; i < n; i++) {
    const x = margin + i * (cardW + gap);
    cardRects.push({ x: x, y: cardY, w: cardW, h: cardH, i: i });
    const isSel = i === selected;
    const hover = pointInRect(mouseX, mouseY, { x: x, y: cardY, w: cardW, h: cardH });
    strokeWeight(isSel ? 2.5 : 1);
    stroke(isSel ? color(25, 25, 112) : color(180));
    fill(isSel ? color(25, 25, 112) : (hover ? color(255, 250, 205) : 'white'));
    rect(x, cardY, cardW, cardH, 7);
    noStroke();
    fill(isSel ? 'white' : color(40, 40, 60));
    textSize(cardW < 110 ? 10 : 11);
    text(initiatives[i].short, x + 3, cardY + cardH / 2, cardW - 6, cardH - 6);
  }
  cursor(overAnyCard() ? HAND : ARROW);
}

function drawDetail(it) {
  const x = margin;
  const w = canvasWidth - 2 * margin;
  let y = 110;
  const panelH = 326;

  // panel background
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(x, y, w, panelH, 8);
  noStroke();

  const px = x + 12;
  const pw = w - 24;
  let cy = y + 10;

  // name + meta
  fill('navy');
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(15);
  text(it.name, px, cy, pw * 0.66, 24);
  textStyle(NORMAL);
  fill('dimgray');
  textAlign(RIGHT, TOP);
  textSize(11);
  text(it.meta, px + pw, cy + 2, pw * 0.33, 20);
  cy += 26;

  // student rating chips (live, color-coded)
  fill(90);
  textAlign(LEFT, TOP);
  textSize(11);
  text('Your rating:', px, cy);
  drawChips(px, cy + 15, pw, it.student);
  cy += 15 + 28;

  // body region: case description OR model evaluation
  const bodyTop = cy;
  const bodyH = (y + panelH) - 78 - bodyTop; // leave room for priority bar + hint
  if (!it.submitted) {
    fill(50);
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    textSize(12);
    text('Case description', px, bodyTop);
    textStyle(NORMAL);
    fill(60);
    textSize(12.5);
    text(it.desc, px, bodyTop + 18, pw, bodyH - 18);
  } else {
    fill(50);
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    textSize(12);
    text('Model evaluation (illustrative)', px, bodyTop);
    textStyle(NORMAL);
    // model chips
    drawChips(px, bodyTop + 18, pw, it.model);
    // justification
    fill(60);
    textSize(12);
    text(it.why, px, bodyTop + 48, pw, bodyH - 78);
    // agreement summary
    let close = 0;
    for (let k = 0; k < 3; k++) if (Math.abs(it.student[k] - it.model[k]) <= 1) close++;
    fill(close >= 2 ? color(34, 139, 34) : color(200, 145, 0));
    textStyle(BOLD);
    textSize(12);
    text('You matched the model on ' + close + ' of 3 dimensions (within 1 point).',
      px, bodyTop + bodyH - 26, pw, 24);
    textStyle(NORMAL);
  }

  // priority score bar
  const barY = y + panelH - 62;
  fill(50);
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(12);
  text('Overall Priority Score', px, barY);
  textStyle(NORMAL);

  const yourScore = priorityScore(it.student);
  const barX = px;
  const barW = pw - 92;
  const barTop = barY + 18;
  const barH = 20;
  // track
  fill(235);
  stroke(210);
  strokeWeight(1);
  rect(barX, barTop, barW, barH, 5);
  noStroke();
  // fill
  fill(avgColor((it.student[0] + it.student[1] + it.student[2]) / 3));
  rect(barX, barTop, barW * (yourScore / 100), barH, 5);
  fill('black');
  textAlign(LEFT, CENTER);
  textStyle(BOLD);
  textSize(13);
  text('You: ' + yourScore, barX + barW + 8, barTop + barH / 2);
  textStyle(NORMAL);

  if (it.submitted) {
    const modelScore = priorityScore(it.model);
    // model marker on the track
    const mx = barX + barW * (modelScore / 100);
    stroke(25, 25, 112);
    strokeWeight(2);
    line(mx, barTop - 3, mx, barTop + barH + 3);
    noStroke();
    fill(25, 25, 112);
    textAlign(LEFT, CENTER);
    textSize(11);
    text('Model: ' + modelScore, barX + barW + 8, barTop + barH / 2 + 15);
  }
}

// draws three labeled, color-coded chips spanning width w starting at (x,y)
function drawChips(x, y, w, values) {
  const gap = 6;
  const cw = (w - 2 * gap) / 3;
  const h = 22;
  for (let i = 0; i < 3; i++) {
    const cx = x + i * (cw + gap);
    const c = dimColor(values[i]);
    fill(red(c), green(c), blue(c), 32);
    stroke(c);
    strokeWeight(1);
    rect(cx, y, cw, h, 5);
    noStroke();
    fill(c);
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(cw < 95 ? 9.5 : 11);
    text(DIMS[i] + '  ' + values[i], cx + cw / 2, y + h / 2);
    textStyle(NORMAL);
  }
}

function drawControlLabels(it) {
  // prompt
  noStroke();
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(12);
  textStyle(BOLD);
  text('Set your rating (1 = weak, 5 = strong):', margin, drawHeight + 8);
  textStyle(NORMAL);

  const rows = [
    { label: 'Reach', v: it.student[0], y: drawHeight + 30 },
    { label: 'Sustainability', v: it.student[1], y: drawHeight + 60 },
    { label: 'Cultural Fit', v: it.student[2], y: drawHeight + 90 }
  ];
  textSize(12);
  for (let r of rows) {
    fill(50);
    textAlign(LEFT, CENTER);
    text(r.label, margin, r.y + 8);
    // value dot + number to the right of the slider (slider is 120px wide at margin+116)
    const vx = margin + 116 + 132;
    fill(dimColor(r.v));
    circle(vx, r.y + 8, 12);
    fill('black');
    textAlign(LEFT, CENTER);
    textStyle(BOLD);
    text(r.v, vx + 12, r.y + 8);
    textStyle(NORMAL);
  }
}

function overAnyCard() {
  for (let c of cardRects) if (pointInRect(mouseX, mouseY, c)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let c of cardRects) {
    if (pointInRect(mouseX, mouseY, c)) {
      selected = c.i;
      loadSlidersFromSelected();
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
