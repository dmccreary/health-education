// Build a Brain-Healthy Week - MicroSim (weekly habit planner)
// CANVAS_HEIGHT: 507
// Grades 6-8, Apply (L3): students apply the five brain-healthy habit categories to
// build a weekly schedule and watch a brain-health indicator respond to variety and
// consistency.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let calcButton;
let tipsButton;
let resetButton;

let habits = [
  { name: 'Sleep', color: 'mediumpurple', tip: 'Add Sleep on more nights with a consistent bedtime.' },
  { name: 'Nutrition', color: 'mediumseagreen', tip: 'Add a Nutrition block, like planning a balanced breakfast.' },
  { name: 'Activity', color: 'darkorange', tip: 'Add Physical Activity, like a 20-minute walk or bike ride.' },
  { name: 'Social', color: 'steelblue', tip: 'Add Social Connection, like time with a friend or family.' },
  { name: 'Mental', color: 'crimson', tip: 'Add Mental Engagement, like reading or a puzzle.' }
];
let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

let selHabit = 0;
let week = [[], [], [], [], [], [], []];
let score = -1;
let tip = '';
let dayRects = [];
let habitRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  calcButton = createButton('Calculate My Week');
  calcButton.mousePressed(calc);
  tipsButton = createButton('See Tips');
  tipsButton.mousePressed(showTip);
  resetButton = createButton('Reset Week');
  resetButton.mousePressed(resetWeek);
  positionControls();
  describe('A seven-day planner grid and five brain-healthy habit tokens — sleep, ' +
    'nutrition, activity, social connection, and mental engagement. Students select a ' +
    'habit and tap days to schedule it; a brain-health score rewards variety and ' +
    'consistency.', LABEL);
}

function positionControls() {
  calcButton.position(10, drawHeight + 14);
  tipsButton.position(150, drawHeight + 14);
  resetButton.position(230, drawHeight + 14);
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

  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Build a Brain-Healthy Week', canvasWidth / 2, 8);

  // day grid (left)
  dayRects = [];
  let gx = margin, gw = canvasWidth * 0.56 - margin;
  let gy0 = 44, rh = 40, gap = 5;
  for (let d = 0; d < 7; d++) {
    let y = gy0 + d * (rh + gap);
    dayRects.push({ x: gx, y: y, w: gw, h: rh, d: d });
    stroke('silver'); strokeWeight(1); fill('white');
    rect(gx, y, gw, rh, 5);
    noStroke(); fill('dimgray'); textAlign(LEFT, CENTER); textSize(12);
    text(days[d], gx + 6, y + rh / 2);
    // placed habit dots
    let dotX = gx + 44;
    for (let h of week[d]) {
      fill(habits[h].color); stroke('white'); strokeWeight(1);
      circle(dotX, y + rh / 2, 18);
      noStroke(); fill('white'); textAlign(CENTER, CENTER); textSize(9);
      text(habits[h].name.charAt(0), dotX, y + rh / 2);
      dotX += 22;
    }
  }
  cursor(overGridOrHabit() ? HAND : ARROW);

  // habit tokens (right)
  habitRects = [];
  let hx = canvasWidth * 0.60;
  let hw = canvasWidth - hx - margin;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12);
  text('Pick a habit, tap days:', hx, 40);
  for (let i = 0; i < habits.length; i++) {
    let y = 60 + i * 32;
    habitRects.push({ x: hx, y: y, w: hw, h: 28, i: i });
    let sel = selHabit === i;
    strokeWeight(sel ? 3 : 1.5); stroke(habits[i].color);
    fill(sel ? habits[i].color : 'white');
    rect(hx, y, hw, 28, 6);
    noStroke(); fill(sel ? 'white' : 'black');
    textAlign(LEFT, CENTER); textSize(12);
    text(habits[i].name, hx + 10, y + 14);
  }

  // gauge
  let gaugeY = 230;
  drawGauge(hx, gaugeY, hw);

  // tip
  if (tip) {
    noStroke(); fill('darkslateblue'); textAlign(LEFT, TOP); textSize(11);
    text(tip, hx, 340, hw, 100);
  }
}

function drawGauge(x, y, w) {
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12);
  text('Brain-Health Score', x, y);
  let barY = y + 20, barH = 18;
  stroke('gray'); strokeWeight(1); fill('white');
  rect(x, barY, w, barH, 4);
  if (score >= 0) {
    let col = score >= 70 ? 'seagreen' : (score >= 40 ? 'goldenrod' : 'indianred');
    noStroke(); fill(col);
    rect(x, barY, w * score / 100, barH, 4);
    fill('black'); textAlign(CENTER, CENTER); textSize(13);
    text(score + ' / 100', x + w / 2, barY + barH / 2 + 34);
    textAlign(LEFT, TOP); textSize(10); fill('dimgray');
    text('(variety + consistency)', x, barY + barH + 4);
  } else {
    noStroke(); fill('dimgray'); textAlign(CENTER, CENTER); textSize(11);
    text('Press Calculate', x + w / 2, barY + barH / 2);
  }
}

function overGridOrHabit() {
  for (let d of dayRects) if (pointInRect(mouseX, mouseY, d)) return true;
  for (let h of habitRects) if (pointInRect(mouseX, mouseY, h)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let h of habitRects) {
    if (pointInRect(mouseX, mouseY, h)) { selHabit = h.i; return; }
  }
  for (let d of dayRects) {
    if (pointInRect(mouseX, mouseY, d)) {
      let arr = week[d.d];
      let k = arr.indexOf(selHabit);
      if (k >= 0) arr.splice(k, 1); else if (arr.length < 5) arr.push(selHabit);
      score = -1; tip = '';
      return;
    }
  }
}

function calc() {
  let cats = new Set();
  let activeDays = 0;
  for (let d = 0; d < 7; d++) {
    if (week[d].length) activeDays++;
    week[d].forEach(h => cats.add(h));
  }
  score = Math.min(100, cats.size * 12 + activeDays * 6);
  tip = '';
}

function showTip() {
  let used = new Set();
  week.forEach(day => day.forEach(h => used.add(h)));
  let missing = habits.findIndex((h, i) => !used.has(i));
  tip = missing >= 0 ? 'Tip: ' + habits[missing].tip
    : 'Great variety! You used all five habit categories. Try spreading them across more days.';
}

function resetWeek() {
  week = [[], [], [], [], [], [], []];
  score = -1; tip = '';
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
