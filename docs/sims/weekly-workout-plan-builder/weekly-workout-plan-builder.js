// Weekly Workout Plan Builder - MicroSim (drag activities onto days; check guidelines)
// CANVAS_HEIGHT: 482
// Grade 6-8, Create (L6): students design a seven-day activity plan by dragging
// activity types onto specific days, then check it against youth physical-activity
// guidelines. The Plan Completeness checklist updates live; Check My Plan gives a
// verdict; See Example Plan loads one balanced week; Reset Plan clears the grid.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let checkButton, exampleButton, resetButton;

let dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Four activity types. letter is shown inside the token; keys drive the checklist.
let types = [
  { key: 'moderate', name: 'Moderate', letter: 'M', color: '#2E86DE' }, // blue
  { key: 'vigorous', name: 'Vigorous', letter: 'V', color: '#E74C3C' }, // red
  { key: 'muscle',   name: 'Muscle',   letter: 'S', color: '#8E44AD' }, // purple
  { key: 'bone',     name: 'Bone',     letter: 'B', color: '#27AE60' }  // green
];

let week = [];        // 7 objects: {moderate,vigorous,muscle,bone} booleans
let cellRects = [];   // {x,y,w,h,day}
let dotRects = [];    // {x,y,r,day,key}  present tokens (clickable to remove)
let chipRects = [];   // {x,y,w,h,tIndex} tray sources

let dragging = null;  // {key,color,letter} while dragging, else null
let dragPos = null;

let message = 'Drag an activity onto a day. Build a full, balanced week!';
let messageColor = '#555555';

// layout anchors (set in draw)
let gridTop = 38, dayHeaderH = 20, cellBodyH = 88;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  checkButton = createButton('Check My Plan');
  checkButton.mousePressed(checkPlan);
  checkButton.parent(document.querySelector('main'));

  exampleButton = createButton('See Example');
  exampleButton.mousePressed(showExample);
  exampleButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetPlan);
  resetButton.parent(document.querySelector('main'));

  resetPlan();
  positionControls();
  describe('A weekly workout planner. A seven-day grid (Mon-Sun) sits on top; below it ' +
    'is a tray of four color-coded activity types (Moderate, Vigorous, Muscle, Bone). ' +
    'Drag a type onto a day to schedule it; click a placed token to remove it. A Plan ' +
    'Completeness checklist updates live. Buttons check the plan against guidelines, ' +
    'load an example week, or reset.', LABEL);
}

function positionControls() {
  checkButton.position(margin, drawHeight + 12);
  exampleButton.position(margin + 110, drawHeight + 12);
  resetButton.position(margin + 210, drawHeight + 12);
}

function draw() {
  updateCanvasSize();

  fill('#f4f8fb');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Build Your Weekly Workout Plan', canvasWidth / 2, 8);

  drawGrid();
  drawTray();
  drawChecklist();
  drawFeedback();

  // dragged token follows the pointer, drawn on top
  if (dragging && dragPos) {
    drawToken(dragPos.x, dragPos.y, 11, dragging.color, dragging.letter, true);
  }

  cursor(overInteractive() ? HAND : ARROW);
}

function drawGrid() {
  cellRects = [];
  dotRects = [];
  let usableW = canvasWidth - 2 * margin;
  let colW = usableW / 7;
  for (let d = 0; d < 7; d++) {
    let x = margin + d * colW;
    // header
    noStroke();
    fill('#2c4a70');
    rect(x, gridTop, colW - 2, dayHeaderH, 4);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(11);
    text(dayNames[d], x + (colW - 2) / 2, gridTop + dayHeaderH / 2);

    // cell body
    let cy = gridTop + dayHeaderH;
    let cellR = { x: x, y: cy, w: colW - 2, h: cellBodyH, day: d };
    cellRects.push(cellR);
    let over = dragging && dragPos && pointInRect(dragPos.x, dragPos.y, cellR);
    strokeWeight(over ? 3 : 1);
    stroke(over ? 'seagreen' : '#c7d3e0');
    fill(over ? '#eafaf0' : 'white');
    rect(x, cy, colW - 2, cellBodyH, 4);

    // present tokens as a 2x2 of colored dots
    let slotFx = [0.32, 0.68, 0.32, 0.68];
    let slotFy = [0.30, 0.30, 0.66, 0.66];
    for (let t = 0; t < types.length; t++) {
      if (!week[d][types[t].key]) continue;
      let dx = x + (colW - 2) * slotFx[t];
      let dy = cy + cellBodyH * slotFy[t];
      dotRects.push({ x: dx, y: dy, r: 10, day: d, key: types[t].key });
      drawToken(dx, dy, 10, types[t].color, types[t].letter, false);
    }
  }
}

function drawToken(cx, cy, r, col, letter, lifted) {
  push();
  if (lifted) {
    strokeWeight(2);
    stroke('white');
  } else {
    noStroke();
  }
  fill(col);
  circle(cx, cy, r * 2);
  noStroke();
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(r * 1.1);
  textStyle(BOLD);
  text(letter, cx, cy + 0.5);
  textStyle(NORMAL);
  pop();
}

function drawTray() {
  chipRects = [];
  let trayLabelY = gridTop + dayHeaderH + cellBodyH + 6;
  noStroke();
  fill('#33415c');
  textAlign(LEFT, TOP);
  textSize(12.5);
  text('Drag an activity onto a day (click a token to remove it):', margin, trayLabelY);

  let trayTop = trayLabelY + 18;
  let gap = 8;
  let chipW = (canvasWidth - 2 * margin - 3 * gap) / 4;
  let chipH = 42;
  for (let t = 0; t < types.length; t++) {
    let x = margin + t * (chipW + gap);
    chipRects.push({ x: x, y: trayTop, w: chipW, h: chipH, tIndex: t });
    let hover = pointInRect(mouseX, mouseY, { x: x, y: trayTop, w: chipW, h: chipH });
    strokeWeight(1.5);
    stroke(types[t].color);
    fill(hover ? '#f2f7ff' : 'white');
    rect(x, trayTop, chipW, chipH, 8);
    // swatch with letter
    drawToken(x + 18, trayTop + chipH / 2, 11, types[t].color, types[t].letter, false);
    noStroke();
    fill('#22405f');
    textAlign(LEFT, CENTER);
    textSize(11);
    text(types[t].name, x + 33, trayTop + chipH / 2);
  }
}

function drawChecklist() {
  let activeDays = countDays(null);
  let vig = countDays('vigorous');
  let mus = countDays('muscle');
  let bone = countDays('bone');

  let titleY = gridTop + dayHeaderH + cellBodyH + 6 + 18 + 42 + 10;
  noStroke();
  fill('#1a3a6c');
  textAlign(LEFT, TOP);
  textSize(13);
  textStyle(BOLD);
  text('Plan Completeness', margin, titleY);
  textStyle(NORMAL);

  let items = [
    { met: activeDays >= 5, label: 'Active most days: ' + activeDays + ' of 7 days (need 5+)' },
    { met: vig >= 3,        label: 'Vigorous activity: ' + vig + ' days (need 3+)' },
    { met: mus >= 3,        label: 'Muscle-strengthening: ' + mus + ' days (need 3+)' },
    { met: bone >= 3,       label: 'Bone-strengthening: ' + bone + ' days (need 3+)' }
  ];
  let iy = titleY + 20;
  for (let i = 0; i < items.length; i++) {
    let y = iy + i * 21;
    drawCheckbox(margin + 2, y + 1, items[i].met);
    noStroke();
    fill(items[i].met ? 'seagreen' : '#444444');
    textAlign(LEFT, TOP);
    textSize(12);
    text(items[i].label, margin + 22, y);
  }
}

function drawCheckbox(x, y, met) {
  strokeWeight(1.5);
  stroke(met ? 'seagreen' : '#9aa7b5');
  fill(met ? 'seagreen' : 'white');
  rect(x, y, 14, 14, 3);
  if (met) {
    stroke('white');
    strokeWeight(2);
    noFill();
    line(x + 3, y + 7, x + 6, y + 11);
    line(x + 6, y + 11, x + 11, y + 3);
  }
  noStroke();
}

function drawFeedback() {
  let fy = drawHeight - 60;
  fill('white');
  stroke('#c7d3e0');
  strokeWeight(1);
  rect(margin, fy, canvasWidth - 2 * margin, 52, 8);
  noStroke();
  fill(messageColor);
  textAlign(LEFT, TOP);
  textSize(12.5);
  text(message, margin + 10, fy + 8, canvasWidth - 2 * margin - 20, 40);
}

// count days that have any activity (key null) or a specific type
function countDays(key) {
  let n = 0;
  for (let d = 0; d < 7; d++) {
    if (key === null) {
      if (types.some(t => week[d][t.key])) n++;
    } else if (week[d][key]) {
      n++;
    }
  }
  return n;
}

// ---- interaction ----
function overInteractive() {
  for (let dt of dotRects) if (dist(mouseX, mouseY, dt.x, dt.y) < dt.r) return true;
  for (let c of chipRects) if (pointInRect(mouseX, mouseY, c)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (mouseY > drawHeight) return;
  // click a placed token to remove it
  for (let dt of dotRects) {
    if (dist(mouseX, mouseY, dt.x, dt.y) < dt.r) {
      week[dt.day][dt.key] = false;
      message = 'Removed a ' + labelFor(dt.key) + ' activity from ' + dayNames[dt.day] + '.';
      messageColor = '#555555';
      return;
    }
  }
  // start dragging from a tray chip
  for (let c of chipRects) {
    if (pointInRect(mouseX, mouseY, c)) {
      let t = types[c.tIndex];
      dragging = { key: t.key, color: t.color, letter: t.letter };
      dragPos = { x: mouseX, y: mouseY };
      return;
    }
  }
}

function mouseDragged() {
  if (dragging) dragPos = { x: mouseX, y: mouseY };
}

function mouseReleased() {
  if (!dragging) return;
  let target = null;
  for (let c of cellRects) {
    if (dragPos && pointInRect(dragPos.x, dragPos.y, c)) { target = c; break; }
  }
  if (target) {
    if (week[target.day][dragging.key]) {
      message = labelFor(dragging.key) + ' is already scheduled on ' + dayNames[target.day] + '.';
      messageColor = '#a06a00';
    } else {
      week[target.day][dragging.key] = true;
      message = 'Added ' + labelFor(dragging.key) + ' to ' + dayNames[target.day] + '. Keep building!';
      messageColor = '#555555';
    }
  }
  dragging = null;
  dragPos = null;
}

function labelFor(key) {
  return types.find(t => t.key === key).name;
}

function checkPlan() {
  let activeDays = countDays(null);
  let missing = [];
  if (activeDays < 5) missing.push('be active on at least 5 days');
  if (countDays('vigorous') < 3) missing.push('add vigorous activity on 3 days');
  if (countDays('muscle') < 3) missing.push('add muscle-strengthening on 3 days');
  if (countDays('bone') < 3) missing.push('add bone-strengthening on 3 days');

  if (missing.length === 0) {
    message = 'Your plan meets all the weekly guidelines. Great design!';
    messageColor = 'seagreen';
  } else {
    message = 'Almost there - still need to: ' + missing.join('; ') + '.';
    messageColor = '#a06a00';
  }
}

function showExample() {
  resetPlan();
  setDay(0, ['moderate', 'muscle']);
  setDay(1, ['vigorous', 'bone']);
  setDay(2, ['moderate']);
  setDay(3, ['vigorous', 'muscle']);
  setDay(4, ['moderate', 'bone']);
  setDay(5, ['vigorous', 'muscle', 'bone']);
  setDay(6, ['moderate']);
  message = 'Example week loaded. Notice how it meets every guideline - now try your own!';
  messageColor = 'seagreen';
}

function setDay(d, keys) {
  for (let k of keys) week[d][k] = true;
}

function resetPlan() {
  week = [];
  for (let d = 0; d < 7; d++) {
    week.push({ moderate: false, vigorous: false, muscle: false, bone: false });
  }
  dragging = null;
  dragPos = null;
  message = 'Drag an activity onto a day. Build a full, balanced week!';
  messageColor = '#555555';
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
