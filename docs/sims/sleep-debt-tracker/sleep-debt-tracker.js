// Sleep Debt Tracker - MicroSim
// CANVAS_HEIGHT: 522
// Grade 5, Understand (L2): students track a week of nightly sleep against the
// healthy 9-12 hour range, watch a live sleep-debt total, and read the plain-
// language effects (learning, mood, growth, immune) for the day they pick.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 340;
let controlHeight = 182;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;
let sliderLeftMargin = 120;

// Healthy sleep range for this age group (constant, per spec).
const HEALTHY_LOW = 9;
const HEALTHY_HIGH = 12;
const AXIS_MIN = 4;
const AXIS_MAX = 12;

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DEFAULTS = [7, 6, 9, 7, 10, 11, 8];

let sliders = [];
let resetButton;
let selectedDay = 0;

// Per-day bar screen rectangles for click hit-testing.
let barRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  for (let i = 0; i < 7; i++) {
    let s = createSlider(AXIS_MIN, AXIS_MAX, DEFAULTS[i], 1);
    s.parent(document.querySelector('main'));
    // capture i for the closure so the effects panel follows the touched slider
    s.input(() => { selectedDay = i; });
    sliders.push(s);
  }

  resetButton = createButton('Reset to Healthy Week');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(resetToHealthy);

  layoutControls();
  describe('A seven-day bar chart of hours slept Monday through Sunday with a shaded ' +
    'healthy band from 9 to 12 hours. Seven sliders set each night. A live sleep-debt ' +
    'total and an effects panel explain how each night affects learning, mood, growth, ' +
    'and the immune system.', LABEL);
}

function layoutControls() {
  let rowH = 19;
  let startY = drawHeight + 6;
  let sliderW = canvasWidth - sliderLeftMargin - margin;
  for (let i = 0; i < 7; i++) {
    sliders[i].position(sliderLeftMargin, startY + i * rowH);
    sliders[i].size(Math.max(80, sliderW));
  }
  resetButton.position(margin, startY + 7 * rowH + 4);
}

function resetToHealthy() {
  for (let i = 0; i < 7; i++) sliders[i].value(10);
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
  textSize(18);
  text('Sleep Debt Tracker', canvasWidth / 2, 8);

  // layout: chart on the left, effects panel on the right
  let panelW = Math.min(180, Math.max(150, canvasWidth * 0.34));
  let chartX = margin;
  let chartRight = canvasWidth - panelW - margin - 10;
  let chartW = chartRight - chartX;
  let chartTop = 40;
  let chartBottom = drawHeight - 68;

  drawChart(chartX, chartTop, chartW, chartBottom);
  drawEffectsPanel(canvasWidth - panelW - margin, chartTop, panelW, chartBottom - chartTop);
  drawDebt(chartX, chartBottom + 22, chartW);
  drawSliderLabels();
}

function hoursToY(h, top, bottom) {
  return map(h, AXIS_MIN, AXIS_MAX, bottom, top);
}

function drawChart(x, top, w, bottom) {
  // healthy reference band (9-12)
  let bandTop = hoursToY(HEALTHY_HIGH, top, bottom);
  let bandBot = hoursToY(HEALTHY_LOW, top, bottom);
  noStroke();
  fill(60, 179, 113, 60); // seagreen, translucent
  rect(x, bandTop, w, bandBot - bandTop);

  // band edge labels
  noStroke();
  fill('seagreen');
  textAlign(LEFT, CENTER);
  textSize(10);
  text('healthy', x + 4, bandTop + (bandBot - bandTop) / 2 - 7);
  text('9-12h', x + 4, bandTop + (bandBot - bandTop) / 2 + 6);

  // y axis gridlines at 4, 6, 8, 10, 12
  textAlign(RIGHT, CENTER);
  for (let h = AXIS_MIN; h <= AXIS_MAX; h += 2) {
    let gy = hoursToY(h, top, bottom);
    stroke(220);
    strokeWeight(1);
    line(x, gy, x + w, gy);
    noStroke();
    fill('gray');
    textSize(9);
    text(h, x - 2, gy);
  }

  // bars
  barRects = [];
  let n = 7;
  let slotW = w / n;
  let barW = slotW * 0.62;
  for (let i = 0; i < n; i++) {
    let h = sliders[i].value();
    let cx = x + slotW * i + slotW / 2;
    let bx = cx - barW / 2;
    let byTop = hoursToY(h, top, bottom);
    let bh = bottom - byTop;
    barRects.push({ x: bx, y: byTop, w: barW, h: bh, day: i });

    let below = h < HEALTHY_LOW;
    let inBand = h >= HEALTHY_LOW && h <= HEALTHY_HIGH;
    let isSel = i === selectedDay;

    // bar color: below band dims (indianred), in/above band brightens (seagreen)
    if (below) fill(isSel ? 'indianred' : color(205, 92, 92, 150));
    else if (inBand) fill(isSel ? 'seagreen' : color(60, 179, 113, 170));
    else fill(isSel ? 'mediumseagreen' : color(60, 179, 113, 170));

    stroke(isSel ? 'navy' : 'white');
    strokeWeight(isSel ? 2 : 1);
    rect(bx, byTop, barW, bh, 3);

    // hour value above the bar
    noStroke();
    fill('black');
    textAlign(CENTER, BOTTOM);
    textSize(11);
    text(h, cx, byTop - 2);

    // day label under the axis
    fill(isSel ? 'navy' : 'dimgray');
    textAlign(CENTER, TOP);
    textSize(11);
    text(DAYS[i], cx, bottom + 4);
  }

  // baseline
  stroke('gray');
  strokeWeight(1);
  line(x, bottom, x + w, bottom);
}

function drawEffectsPanel(x, y, w, h) {
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(x, y, w, h, 8);
  noStroke();

  let hours = sliders[selectedDay].value();
  let below = hours < HEALTHY_LOW;

  // panel header
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(13);
  text(DAYS[selectedDay] + ': ' + hours + ' h', x + 10, y + 8);

  // status line
  textSize(11);
  fill(below ? 'indianred' : 'seagreen');
  let status = below ? 'Below healthy range' : 'In healthy range';
  text(status, x + 10, y + 26, w - 20, 26);

  // effect rows: icon dot + short plain-language note
  let effects = below ? [
    ['seagreen', 'Learning', 'Memories harder to store'],
    ['gold', 'Mood', 'Feelings get grumpy'],
    ['mediumpurple', 'Growth', 'Less growth hormone released'],
    ['steelblue', 'Immune', 'Body fights germs less well']
  ] : [
    ['seagreen', 'Learning', 'Memories get organized well'],
    ['gold', 'Mood', 'Mood stays steady'],
    ['mediumpurple', 'Growth', 'Growth hormone does its job'],
    ['steelblue', 'Immune', 'Immune system stays strong']
  ];

  let ry = y + 52;
  let rowGap = (h - 52 - 10) / 4;
  for (let i = 0; i < effects.length; i++) {
    let cy = ry + i * rowGap;
    // icon dot
    fill(effects[i][0]);
    circle(x + 16, cy + 8, 12);
    // label
    fill('black');
    textAlign(LEFT, TOP);
    textSize(11);
    text(effects[i][1], x + 28, cy);
    // note (wrapped)
    fill('dimgray');
    textSize(10);
    text(effects[i][2], x + 28, cy + 13, w - 36, rowGap - 12);
  }
}

function drawDebt(x, y, w) {
  // sleep debt = total missing hours below the healthy low across the week
  let debt = 0;
  for (let i = 0; i < 7; i++) {
    let miss = HEALTHY_LOW - sliders[i].value();
    if (miss > 0) debt += miss;
  }

  fill(debt === 0 ? 'seagreen' : 'indianred');
  stroke('silver');
  strokeWeight(1);
  rect(x, y, w, 34, 6);
  noStroke();

  fill('white');
  textAlign(CENTER, CENTER);
  textSize(14);
  let label = debt === 0
    ? 'Sleep Debt: 0 h - great week!'
    : 'Sleep Debt this week: ' + debt + ' h';
  text(label, x + w / 2, y + 17);
}

function drawSliderLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(12);
  let rowH = 19;
  let startY = drawHeight + 6;
  for (let i = 0; i < 7; i++) {
    let cy = startY + i * rowH + 8;
    if (i === selectedDay) fill('navy');
    else fill('black');
    text(DAYS[i] + ': ' + sliders[i].value() + 'h', margin, cy);
  }
}

function mousePressed() {
  for (let i = 0; i < barRects.length; i++) {
    let b = barRects[i];
    // generous hit box: the whole column height, not just the drawn bar
    if (mouseX >= b.x - 4 && mouseX <= b.x + b.w + 4 &&
        mouseY >= 40 && mouseY <= drawHeight - 68) {
      selectedDay = b.day;
      return;
    }
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  layoutControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
