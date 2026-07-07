// Pick Your Active Play Adventure - MicroSim (weekly active-play planner)
// CANVAS_HEIGHT: 525
// Grade 1, Apply (L3): children build a pretend weekly plan by picking a fun way
// to be active for each day, then see a caption that celebrates variety.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let showButton;
let resetButton;

// Eight friendly, inclusive active-play choices. "kind" drives a simple drawn icon.
let plays = [
  { name: 'Tag',        color: 'tomato',        kind: 'tag' },
  { name: 'Bike',       color: 'steelblue',     kind: 'bike' },
  { name: 'Dance',      color: 'mediumpurple',  kind: 'dance' },
  { name: 'Playground', color: 'seagreen',      kind: 'slide' },
  { name: 'Catch',      color: 'goldenrod',     kind: 'ball' },
  { name: 'Jump Rope',  color: 'hotpink',       kind: 'rope' },
  { name: 'Walk',       color: 'chocolate',     kind: 'walk' },
  { name: 'Wheel Ball', color: 'darkorange',    kind: 'wheel' }
];
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let selPlay = 0;             // which tray item is picked
let week = [-1, -1, -1, -1, -1, -1, -1]; // one play index per day, -1 = empty
let dayRects = [];
let playRects = [];
let summary = '';           // caption shown after "Show My Week"
let summaryColor = 'seagreen';

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  showButton = createButton('Show My Week');
  showButton.mousePressed(showWeek);
  showButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetWeek);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A weekly planner for young children. Seven day slots on the left and a ' +
    'tray of eight active-play choices on the right, including wheelchair ball. ' +
    'Tap a play to pick it, then tap a day to fill that day. Show My Week gives a ' +
    'caption that celebrates variety.', LABEL);
}

function positionControls() {
  showButton.position(margin, drawHeight + 12);
  resetButton.position(margin + 150, drawHeight + 12);
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
  textSize(20);
  text('Pick Your Active Play Adventure', canvasWidth / 2, 8);

  // Column geometry
  let leftW = Math.floor(canvasWidth * 0.56);
  let colX = leftW;                 // divider x
  let trayX = colX + margin;
  let trayW = canvasWidth - trayX - margin;

  drawDayGrid(margin, 40, leftW - margin - 8);
  drawTray(trayX, 40, trayW);
  drawInfoBox(trayX, trayW);

  cursor(overClickable() ? HAND : ARROW);
}

function drawDayGrid(gx, gy0, gw) {
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(13);
  text('My Week', gx, gy0 - 2);

  dayRects = [];
  let rh = 42, gap = 6;
  let top = gy0 + 20;
  for (let d = 0; d < 7; d++) {
    let y = top + d * (rh + gap);
    dayRects.push({ x: gx, y: y, w: gw, h: rh, d: d });

    // slot box
    let filled = week[d] >= 0;
    stroke(filled ? plays[week[d]].color : 'silver');
    strokeWeight(filled ? 2.5 : 1.5);
    fill('white');
    rect(gx, y, gw, rh, 8);

    // day label
    noStroke();
    fill('slategray');
    textAlign(LEFT, CENTER);
    textSize(14);
    text(days[d], gx + 10, y + rh / 2);

    // placed play: icon + name
    if (filled) {
      let p = plays[week[d]];
      drawIcon(p, gx + 62, y + rh / 2, 26);
      noStroke();
      fill('black');
      textAlign(LEFT, CENTER);
      textSize(14);
      text(p.name, gx + 84, y + rh / 2);
    } else {
      noStroke();
      fill('darkgray');
      textAlign(LEFT, CENTER);
      textSize(12);
      text('tap to add', gx + 62, y + rh / 2);
    }
  }
}

function drawTray(tx, ty0, tw) {
  noStroke();
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Pick a play:', tx, ty0 - 2);

  playRects = [];
  let cols = 2;
  let gap = 6;
  let cw = (tw - gap) / cols;
  let ch = 46;
  let top = ty0 + 18;
  for (let i = 0; i < plays.length; i++) {
    let r = i % cols;
    let c = Math.floor(i / cols);
    let x = tx + r * (cw + gap);
    let y = top + c * (ch + gap);
    playRects.push({ x: x, y: y, w: cw, h: ch, i: i });

    let sel = selPlay === i;
    stroke(plays[i].color);
    strokeWeight(sel ? 3 : 1.5);
    fill(sel ? plays[i].color : 'white');
    rect(x, y, cw, ch, 8);

    // icon
    drawIcon(plays[i], x + 20, y + ch / 2, 26, sel);

    // label (short text — no wrap box so it stays vertically centered)
    noStroke();
    fill(sel ? 'white' : 'black');
    textAlign(LEFT, CENTER);
    textSize(12);
    text(plays[i].name, x + 38, y + ch / 2);
  }
}

function drawInfoBox(tx, tw) {
  // Info / summary box below the tray
  let boxTop = 40 + 18 + 4 * 52 + 8;   // below 4 rows of tray (4 rows * (46+6))
  let boxH = drawHeight - boxTop - margin;
  stroke('silver');
  strokeWeight(1);
  fill('white');
  rect(tx, boxTop, tw, boxH, 8);
  noStroke();

  let placed = week.filter(v => v >= 0).length;
  if (summary) {
    fill(summaryColor);
    textAlign(CENTER, TOP);
    textSize(14);
    text(summary, tx + 8, boxTop + 8, tw - 16, boxH - 16);
  } else {
    fill('dimgray');
    textAlign(CENTER, TOP);
    textSize(13);
    let msg = placed === 0
      ? 'Pick a play, then tap a day to fill it. Fill your whole week!'
      : 'Days filled: ' + placed + ' of 7. Tap a filled day to change it.';
    text(msg, tx + 8, boxTop + 8, tw - 16, boxH - 16);
  }
}

// Simple, friendly drawn icons inside a colored circle of diameter d, centered (cx,cy).
function drawIcon(p, cx, cy, d, sel) {
  let ringFill = sel ? 'white' : p.color;
  let mark = sel ? p.color : 'white';
  noStroke();
  fill(ringFill);
  circle(cx, cy, d);
  stroke(mark);
  strokeWeight(2);
  noFill();
  let r = d * 0.28;
  push();
  translate(cx, cy);
  if (p.kind === 'ball' || p.kind === 'tag') {
    circle(0, 0, r * 2);
  } else if (p.kind === 'wheel') {
    circle(0, 2, r * 1.9);
    line(-r, 2, r, 2);
    line(0, 2 - r, 0, 2 + r);
  } else if (p.kind === 'bike') {
    circle(-r * 0.8, r * 0.5, r * 1.1);
    circle(r * 0.8, r * 0.5, r * 1.1);
    line(-r * 0.8, r * 0.5, 0, -r * 0.5);
    line(0, -r * 0.5, r * 0.8, r * 0.5);
  } else if (p.kind === 'dance') {
    // little bouncing figure
    circle(0, -r, r * 0.7);
    line(0, -r * 0.5, 0, r * 0.5);
    line(0, -r * 0.1, -r, -r * 0.6);
    line(0, -r * 0.1, r, r * 0.2);
    line(0, r * 0.5, -r * 0.6, r);
    line(0, r * 0.5, r * 0.6, r);
  } else if (p.kind === 'slide') {
    line(-r, r, r, -r);
    line(r, -r, r, r);
    line(-r, r, r, r);
  } else if (p.kind === 'rope') {
    // jump rope arc
    arc(0, -r * 0.2, r * 2.2, r * 2.4, 20, 160);
    line(0, r * 0.6, 0, r);
  } else if (p.kind === 'walk') {
    circle(0, -r, r * 0.6);
    line(0, -r * 0.5, 0, r * 0.3);
    line(0, r * 0.3, -r * 0.7, r);
    line(0, r * 0.3, r * 0.7, r);
    line(0, -r * 0.2, -r * 0.6, -r * 0.4);
    line(0, -r * 0.2, r * 0.6, 0);
  } else {
    circle(0, 0, r * 1.6);
  }
  pop();
  noStroke();
}

function overClickable() {
  for (let d of dayRects) if (pointInRect(mouseX, mouseY, d)) return true;
  for (let pr of playRects) if (pointInRect(mouseX, mouseY, pr)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  // pick a play from the tray
  for (let pr of playRects) {
    if (pointInRect(mouseX, mouseY, pr)) {
      selPlay = pr.i;
      return;
    }
  }
  // fill / clear a day
  for (let d of dayRects) {
    if (pointInRect(mouseX, mouseY, d)) {
      if (week[d.d] === selPlay) {
        week[d.d] = -1;      // tap same play again clears the day
      } else {
        week[d.d] = selPlay; // otherwise fill with the picked play
      }
      summary = '';          // choices changed; clear old caption
      return;
    }
  }
}

function showWeek() {
  let filled = week.filter(v => v >= 0);
  if (filled.length === 0) {
    summary = 'Your week is empty. Pick a play and tap a day to start!';
    summaryColor = 'chocolate';
    return;
  }
  let kinds = new Set(filled);
  let variety = kinds.size;
  if (filled.length < 7) {
    summary = 'Nice start! You filled ' + filled.length + ' days with ' + variety +
      (variety === 1 ? ' way' : ' different ways') + ' to move. Fill the rest of your week!';
    summaryColor = 'steelblue';
  } else if (variety === 1) {
    summary = 'You picked ' + plays[filled[0]].name + ' every day. That is fun! ' +
      'Try adding a new play too. Variety keeps active play fun.';
    summaryColor = 'goldenrod';
  } else {
    summary = 'You picked ' + variety + ' different ways to move this week! ' +
      'Variety keeps active play fun.';
    summaryColor = 'seagreen';
  }
}

function resetWeek() {
  week = [-1, -1, -1, -1, -1, -1, -1];
  selPlay = 0;
  summary = '';
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
