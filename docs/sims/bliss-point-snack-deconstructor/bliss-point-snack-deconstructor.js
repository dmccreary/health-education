// Bliss Point Snack Deconstructor - MicroSim (data-driven bar comparison)
// CANVAS_HEIGHT: 487
// Grades 6-8, Analyze (L4): students analyze sugar, sodium, and fat in common
// snacks to recognize the engineered "bliss point" combination pattern, and
// compare against whole-food references.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let compareButton;
let resetButton;

// Approximate per-serving values: sugar (g), sodium (mg), fat (g)
let snacks = [
  { name: 'Flavored chips', sugar: 1, sodium: 210, fat: 10, whole: false },
  { name: 'Sweet granola bar', sugar: 12, sodium: 140, fat: 6, whole: false },
  { name: 'Choc. pretzel', sugar: 14, sodium: 180, fat: 7, whole: false },
  { name: 'Plain fruit', sugar: 10, sodium: 2, fat: 0, whole: true },
  { name: 'Plain nuts', sugar: 1, sodium: 1, fat: 14, whole: true }
];

// %DV reference amounts
let DV = { sugar: 50, sodium: 2300, fat: 78 };

let selected = -1;
let compareWhole = false;
let snackRects = [];
let barInfo = [];   // {x,w,nutrient,g,pct} for hover

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  compareButton = createButton('Compare to Whole Food');
  compareButton.mousePressed(() => { compareWhole = !compareWhole; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = -1; compareWhole = false; });
  positionControls();
  describe('A snack selector and a three-bar chart of sugar, sodium, and fat as ' +
    'percent of daily value. Selecting a snack loads its values; a marker flags snacks ' +
    'that combine sugar, salt, and fat — the engineered "bliss point." A toggle overlays ' +
    'whole-food reference lines.', LABEL);
}

function positionControls() {
  compareButton.position(10, drawHeight + 14);
  resetButton.position(200, drawHeight + 14);
}

function pctDV(nutrient, val) { return val / DV[nutrient] * 100; }
function isEngineered(s) { return s.sugar >= 8 && s.sodium >= 100 && s.fat >= 5; }

function draw() {
  updateCanvasSize();
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
  text('Bliss Point Snack Deconstructor', canvasWidth / 2, 8);

  drawSnackSelector();
  drawChart();
  drawInfo();
}

function drawSnackSelector() {
  snackRects = [];
  let n = snacks.length, gap = 6;
  let sw = (canvasWidth - margin * 2 - gap * (n - 1)) / n;
  let sy = 40, sh = 42;
  textSize(11);
  for (let i = 0; i < n; i++) {
    let x = margin + i * (sw + gap);
    snackRects.push({ x: x, y: sy, w: sw, h: sh, i: i });
    let sel = selected === i;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: sy, w: sw, h: sh });
    strokeWeight(sel ? 3 : 1.5);
    stroke(snacks[i].whole ? 'seagreen' : (sel ? 'darkorange' : 'slategray'));
    fill(sel ? 'gold' : (hover ? 'lightyellow' : (snacks[i].whole ? 'honeydew' : 'white')));
    rect(x, sy, sw, sh, 6);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    text(snacks[i].name, x + 3, sy, sw - 6, sh);
  }
  cursor(overAnySnack() ? HAND : ARROW);
}

function drawChart() {
  let chartX = margin + 10, chartTop = 100, chartBottom = 300;
  let chartH = chartBottom - chartTop;
  // axis
  stroke('gray'); strokeWeight(1);
  line(chartX, chartTop, chartX, chartBottom);
  line(chartX, chartBottom, canvasWidth - margin, chartBottom);
  // %DV gridlines (0,20,40)
  noStroke(); fill('gray'); textAlign(RIGHT, CENTER); textSize(10);
  for (let g = 0; g <= 40; g += 20) {
    let y = chartBottom - (g / 40) * chartH;
    stroke('gainsboro'); line(chartX, y, canvasWidth - margin, y);
    noStroke(); text(g + '%', chartX - 4, y);
  }
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(10);
  text('% Daily Value', chartX + 2, chartTop - 12);

  let nutrients = ['sugar', 'sodium', 'fat'];
  let colors = ['orchid', 'steelblue', 'darkorange'];
  let plotW = canvasWidth - margin - chartX;
  let slot = plotW / 3;
  barInfo = [];

  if (selected < 0) {
    fill('dimgray'); textAlign(CENTER, CENTER); textSize(14);
    text('Click a snack above to load its nutrition values.',
      chartX, chartTop, plotW, chartH);
    return;
  }
  let s = snacks[selected];
  for (let j = 0; j < 3; j++) {
    let nut = nutrients[j];
    let pct = pctDV(nut, s[nut]);
    let bx = chartX + slot * j + slot / 2 - 26;
    let bw = 52;
    let bh = constrain(pct / 40, 0, 1.1) * chartH;
    fill(colors[j]);
    noStroke();
    rect(bx, chartBottom - bh, bw, bh, 4, 4, 0, 0);
    barInfo.push({ x: bx, w: bw, top: chartBottom - bh, nut: nut, g: s[nut], pct: pct });
    // label + value
    fill('black'); textAlign(CENTER, TOP); textSize(12);
    text(nut, bx + bw / 2 - 26, chartBottom + 4, bw + 52, 16);
    let unit = nut === 'sodium' ? 'mg' : 'g';
    textSize(11);
    text(s[nut] + unit, bx + bw / 2 - 26, chartBottom + 20, bw + 52, 14);

    // whole-food reference lines
    if (compareWhole) {
      for (let w of snacks.filter(q => q.whole)) {
        let wp = pctDV(nut, w[nut]);
        let wy = chartBottom - constrain(wp / 40, 0, 1.1) * chartH;
        stroke(w.name === 'Plain fruit' ? 'seagreen' : 'saddlebrown');
        strokeWeight(1.5);
        drawingContext.setLineDash([5, 4]);
        line(bx - 6, wy, bx + bw + 6, wy);
        drawingContext.setLineDash([]);
      }
    }
  }

  // engineered-combination marker
  if (isEngineered(s)) {
    noStroke();
    fill('crimson');
    textAlign(CENTER, TOP);
    textSize(12);
    text('★ Engineered combination zone (sugar + salt + fat)', chartX, chartTop + 2, plotW, 16);
  }

  // hover tooltip
  for (let b of barInfo) {
    if (mouseX >= b.x && mouseX <= b.x + b.w && mouseY >= b.top && mouseY <= chartBottom) {
      let unit = b.nut === 'sodium' ? 'mg' : 'g';
      let tip = b.g + unit + ' (' + b.pct.toFixed(0) + '% DV)';
      fill('black'); textAlign(CENTER, BOTTOM); textSize(12);
      text(tip, b.x + b.w / 2, b.top - 4);
    }
  }
}

function drawInfo() {
  let sy = drawHeight - 118;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, sy, canvasWidth - margin * 2, 108, 8);
  noStroke();
  textAlign(LEFT, TOP); textSize(13);
  if (selected < 0) {
    fill('dimgray');
    text('The "bliss point" is the sugar-salt-fat mix food scientists engineer to be ' +
      'extra hard to stop eating. Select snacks to compare — and use Compare to Whole Food ' +
      'to see how plain fruit and nuts differ.', margin + 12, sy + 10, canvasWidth - margin * 2 - 24, 90);
    return;
  }
  let s = snacks[selected];
  if (isEngineered(s)) {
    fill('crimson');
    text('Bliss point pattern: ' + s.name + ' combines added sugar (' + s.sugar + 'g), salt (' +
      s.sodium + 'mg), and fat (' + s.fat + 'g) together. That engineered mix is designed to keep ' +
      'you reaching for more.', margin + 12, sy + 10, canvasWidth - margin * 2 - 24, 90);
  } else if (s.whole) {
    fill('seagreen');
    text(s.name + ' is a whole food: it is high in only one of the three (not the engineered ' +
      'sugar-salt-fat combination). Notice how its bars differ from processed snacks.',
      margin + 12, sy + 10, canvasWidth - margin * 2 - 24, 90);
  } else {
    fill('darkgoldenrod');
    text(s.name + ' is high in salt and fat but not the full sugar-salt-fat combination. ' +
      'Compare it with the granola bar or chocolate pretzel to see the bliss-point pattern.',
      margin + 12, sy + 10, canvasWidth - margin * 2 - 24, 90);
  }
}

function overAnySnack() {
  for (let s of snackRects) if (pointInRect(mouseX, mouseY, s)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let s of snackRects) {
    if (pointInRect(mouseX, mouseY, s)) { selected = s.i; return; }
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
