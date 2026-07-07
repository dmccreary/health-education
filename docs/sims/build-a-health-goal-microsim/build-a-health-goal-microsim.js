// Build a Health Goal - MicroSim (builder pattern)
// CANVAS_HEIGHT: 480
// Grade 2, Analyze (L4): students assemble a personal health goal by choosing
// a target behavior, a time frame, and a way to track progress. The goal card
// updates live as each choice is made. Width-responsive p5.js MicroSim.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let defaultTextSize = 16;

// Native p5.js buttons
let buildButton;
let resetButton;

// Selection state: index into each column, or -1 if nothing chosen yet
let selTarget = -1;
let selTime = -1;
let selTracker = -1;
let flashTimer = 0;      // frames of celebration highlight remaining
let messageTimer = 0;    // frames a "pick from each column" hint is shown

// Column data: the chip label plus the sentence fragment it contributes
let targets = [
  { chip: 'Drink water', frag: 'drink water' },
  { chip: 'Try a new food', frag: 'try a new food' },
  { chip: 'Play outside', frag: 'play outside' },
  { chip: 'Sleep on time', frag: 'go to sleep on time' }
];
let times = [
  { chip: 'This week', frag: 'this week' },
  { chip: 'Two weeks', frag: 'for two weeks' },
  { chip: 'This month', frag: 'this month' }
];
let trackers = [
  { chip: 'Calendar stickers', frag: 'calendar stickers' },
  { chip: 'Tally marks', frag: 'tally marks' },
  { chip: 'A checklist', frag: 'a checklist' }
];

let columnHeaders = ['Pick a Target', 'Pick a Time Frame', 'Pick a Tracker'];
let colRects = [[], [], []]; // rectangles for each chip, recomputed for hit-testing

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  buildButton = createButton('Build My Goal');
  buildButton.mousePressed(buildGoal);

  resetButton = createButton('Start Over');
  resetButton.mousePressed(resetGoal);

  positionControls();
  describe('An interactive goal builder. Students pick one target behavior, one time frame, ' +
    'and one way to track progress from three columns of chips. The three choices assemble ' +
    'into a personal health goal sentence on a goal card that updates as choices are made.', LABEL);
}

function positionControls() {
  buildButton.position(10, drawHeight + 12);
  resetButton.position(150, drawHeight + 12);
}

// Compute chip rectangles for the three columns (used for drawing and clicking)
function computeLayout() {
  colRects = [[], [], []];
  let cols = [targets, times, trackers];
  let leftRegionW = canvasWidth * 0.60;
  let gap = 10;
  let colW = (leftRegionW - margin - gap * 2) / 3;
  let chipH = 42;
  let chipGap = 12;
  let startY = 96;
  for (let c = 0; c < 3; c++) {
    let cx = margin + c * (colW + gap);
    for (let i = 0; i < cols[c].length; i++) {
      let cy = startY + i * (chipH + chipGap);
      colRects[c].push({ x: cx, y: cy, w: colW, h: chipH });
    }
  }
}

function draw() {
  updateCanvasSize();
  computeLayout();

  // Drawing region (aliceblue) and control region (white), both silver bordered
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('black');
  noStroke();
  textAlign(CENTER, TOP);
  textSize(24);
  text('Build a Health Goal', canvasWidth / 2, 12);

  // Columns of chips
  let cols = [targets, times, trackers];
  let sels = [selTarget, selTime, selTracker];
  let overChip = false;
  for (let c = 0; c < 3; c++) {
    // Column header
    noStroke();
    fill('navy');
    textAlign(LEFT, BOTTOM);
    textSize(14);
    text(columnHeaders[c], colRects[c][0].x, colRects[c][0].y - 6);

    for (let i = 0; i < cols[c].length; i++) {
      let r = colRects[c][i];
      let selected = (sels[c] === i);
      let hover = pointInRect(mouseX, mouseY, r);
      if (hover) overChip = true;
      strokeWeight(selected ? 3 : 1.5);
      stroke(selected ? 'darkorange' : 'steelblue');
      fill(selected ? 'gold' : (hover ? 'lightyellow' : 'white'));
      rect(r.x, r.y, r.w, r.h, 8);
      noStroke();
      fill('black');
      textAlign(CENTER, CENTER);
      textSize(14);
      text(cols[c][i].chip, r.x + r.w / 2, r.y + r.h / 2);
    }
  }
  cursor(overChip ? HAND : ARROW);

  // Goal card on the right side, styled like a simple certificate
  let cardX = canvasWidth * 0.62;
  let cardY = 70;
  let cardW = canvasWidth - cardX - margin;
  let cardH = drawHeight - cardY - 20;
  let celebrating = flashTimer > 0;
  strokeWeight(celebrating ? 4 : 2);
  stroke(celebrating ? 'seagreen' : 'goldenrod');
  fill(celebrating ? 'honeydew' : 'lightyellow');
  rect(cardX, cardY, cardW, cardH, 12);

  noStroke();
  fill('saddlebrown');
  textAlign(CENTER, TOP);
  textSize(18);
  text('My Goal', cardX + cardW / 2, cardY + 12);

  // Goal sentence, wrapped inside the card
  fill('black');
  textAlign(LEFT, TOP);
  textSize(16);
  text(goalText(), cardX + 14, cardY + 44, cardW - 28, cardH - 56);

  if (celebrating) {
    noStroke();
    fill('seagreen');
    textAlign(CENTER, BOTTOM);
    textSize(15);
    text('Goal built! You can do this!', cardX + cardW / 2, cardY + cardH - 10);
    flashTimer--;
  }

  // Control-area hint message
  noStroke();
  textAlign(LEFT, CENTER);
  textSize(13);
  if (messageTimer > 0) {
    fill('firebrick');
    text('Pick one chip from each column first.', 270, drawHeight + 25);
    messageTimer--;
  } else {
    fill('gray');
    text('Tap a chip in each column, then Build My Goal.', 270, drawHeight + 25);
  }
}

// Assemble the goal sentence from the current choices (matches the spec stages)
function goalText() {
  if (selTarget < 0 && selTime < 0 && selTracker < 0) {
    return 'Pick a target, a time frame, and a tracker to build your goal.';
  }
  let s = 'My goal: ';
  s += (selTarget >= 0) ? targets[selTarget].frag : '___';
  s += ' ' + ((selTime >= 0) ? times[selTime].frag : '___');
  if (selTracker >= 0) {
    s += ', and I will track it with ' + trackers[selTracker].frag + '.';
  } else {
    s += ' ___';
  }
  return s;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  // Only chips live inside the drawing region; buttons are DOM elements
  let cols = [0, 1, 2];
  for (let c = 0; c < 3; c++) {
    for (let i = 0; i < colRects[c].length; i++) {
      if (pointInRect(mouseX, mouseY, colRects[c][i])) {
        if (c === 0) selTarget = i;
        if (c === 1) selTime = i;
        if (c === 2) selTracker = i;
        return;
      }
    }
  }
}

function buildGoal() {
  if (selTarget >= 0 && selTime >= 0 && selTracker >= 0) {
    flashTimer = 60;
    messageTimer = 0;
  } else {
    messageTimer = 120;
  }
}

function resetGoal() {
  selTarget = -1;
  selTime = -1;
  selTracker = -1;
  flashTimer = 0;
  messageTimer = 0;
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
