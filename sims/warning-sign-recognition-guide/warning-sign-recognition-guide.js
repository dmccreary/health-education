// Warning Sign Recognition Guide - MicroSim (click-to-reveal reference infographic)
// CANVAS_HEIGHT: 520
// Grade 6-8, Remember (L1): students identify and recognize categories of verbal,
// behavioral, and emotional warning signs so they can name what they notice in a
// caring, non-diagnostic way. Three labeled columns of clickable example phrases;
// each opens a supportive infobox. A calm banner reminds students to tell a trusted
// adult. No crisis imagery, methods, or scenes are depicted anywhere.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 474;
let controlHeight = 46;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let resetButton;

let bannerText = 'If you see any of these signs, tell a trusted adult right away.';

// Three warning-sign categories. Each sign has a short label and a supportive,
// non-diagnostic restatement shown in the infobox.
let columns = [
  {
    title: 'Verbal Signs', color: '#5B7DB1',
    signs: [
      { label: '"I feel like a burden"',
        support: 'When someone says they feel like a burden, they may be hurting inside. You do not have to have the answers - just listen, take it seriously, and tell a trusted adult.' },
      { label: 'Talking about feeling hopeless',
        support: 'Hearing someone say that nothing will ever get better is a signal to respond with care. Noticing it is not about diagnosing - it is a reason to reach out and bring in a trusted adult.' },
      { label: 'Saying goodbye as if for good',
        support: 'Unexpected goodbyes can be a quiet way of reaching out. Stay with them if you can, be kind, and tell a trusted adult right away.' },
      { label: '"There is no reason to go on"',
        support: 'Words like these are always worth taking seriously. Your job is not to fix everything - it is to care and to tell a trusted adult.' }
    ]
  },
  {
    title: 'Behavioral Signs', color: '#6BA292',
    signs: [
      { label: 'Pulling away from friends',
        support: 'Someone who suddenly avoids friends and activities may be struggling. A kind check-in and letting a trusted adult know can make a real difference.' },
      { label: 'Giving away favorite things',
        support: 'Giving away belongings that matter to them can be a warning sign. If you notice this, it is a caring reason to talk to a trusted adult.' },
      { label: 'Big changes in sleep or eating',
        support: 'Large changes in how someone sleeps or eats can show they are having a hard time. Noticing it is a chance to show you care and to help them get support.' },
      { label: 'Losing interest in activities',
        support: 'When someone stops enjoying things they used to love, they may need help. You can respond with kindness and tell a trusted adult what you noticed.' }
    ]
  },
  {
    title: 'Emotional Signs', color: '#B08FC0',
    signs: [
      { label: 'Deep sadness that lingers',
        support: 'Sadness that stays for a long time and does not lift is worth noticing. You do not have to diagnose anything - just care, and bring in a trusted adult.' },
      { label: 'Sudden mood swings',
        support: 'Big, sudden swings in mood can be a sign someone feels overwhelmed. A gentle check-in and a trusted adult can help.' },
      { label: 'Seeming anxious or on edge',
        support: 'Seeming very anxious, restless, or on edge can be part of a hard time. Noticing it is a reason to reach out with care.' },
      { label: 'Seeming numb or disconnected',
        support: 'Feeling numb or "not really there" can be a warning sign. Respond gently and let a trusted adult know what you have noticed.' }
    ]
  }
];

let selected = null;   // {c, r} of the chosen sign, or null
let chipRects = [];    // {x,y,w,h,c,r}

let columnsTop = 88;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = null; });
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A calm reference infographic with three labeled columns - Verbal Signs, ' +
    'Behavioral Signs, and Emotional Signs - each listing four short example phrases. ' +
    'A banner at the top reminds students to tell a trusted adult. Clicking any example ' +
    'opens a supportive box that restates the sign in caring, non-diagnostic language. ' +
    'No crisis imagery is shown.', LABEL);
}

function positionControls() {
  resetButton.position(margin, drawHeight + 8);
}

function draw() {
  updateCanvasSize();

  // backgrounds
  fill('#f5f7fb');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('#33415c');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Warning Sign Recognition Guide', canvasWidth / 2, 8);

  drawBanner();
  drawColumns();
  drawInfobox();

  cursor(overChip() ? HAND : ARROW);
}

function drawBanner() {
  let bx = margin, by = 34, bw = canvasWidth - 2 * margin, bh = 40;
  fill('#3f6184');
  stroke('#2c4560');
  strokeWeight(1);
  rect(bx, by, bw, bh, 8);
  noStroke();
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(13);
  text(bannerText, bx + 12, by, bw - 24, bh);
}

function drawColumns() {
  chipRects = [];
  let usableW = canvasWidth - 2 * margin;
  let gap = 8;
  let colW = (usableW - 2 * gap) / 3;
  let headerH = 24;
  let chipsTop = columnsTop + headerH + 6;
  let infoTop = drawHeight - 92;
  let chipGap = 7;
  let nChips = 4;
  let chipH = (infoTop - 6 - chipsTop - (nChips - 1) * chipGap) / nChips;

  for (let c = 0; c < columns.length; c++) {
    let colX = margin + c * (colW + gap);
    // header band
    fill(columns[c].color);
    rect(colX, columnsTop, colW, headerH, 6);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(12.5);
    textStyle(BOLD);
    text(columns[c].title, colX + 4, columnsTop, colW - 8, headerH);
    textStyle(NORMAL);

    // chips
    for (let r = 0; r < columns[c].signs.length; r++) {
      let y = chipsTop + r * (chipH + chipGap);
      chipRects.push({ x: colX, y: y, w: colW, h: chipH, c: c, r: r });
      let sel = selected && selected.c === c && selected.r === r;
      let hover = pointInRect(mouseX, mouseY, { x: colX, y: y, w: colW, h: chipH });
      strokeWeight(sel ? 2.5 : 1.2);
      stroke(sel ? '#33415c' : columns[c].color);
      fill(sel ? '#fff8e6' : (hover ? '#eef3f9' : 'white'));
      rect(colX, y, colW, chipH, 8);
      noStroke();
      fill('#2b2b2b');
      textAlign(CENTER, CENTER);
      textSize(11);
      text(columns[c].signs[r].label, colX + 5, y, colW - 10, chipH);
    }
  }
}

function drawInfobox() {
  let ix = margin, iy = drawHeight - 86, iw = canvasWidth - 2 * margin, ih = 78;
  fill('white');
  stroke('#c3cddd');
  strokeWeight(1.5);
  rect(ix, iy, iw, ih, 10);
  noStroke();
  textAlign(LEFT, TOP);
  if (selected) {
    let s = columns[selected.c].signs[selected.r];
    fill(columns[selected.c].color);
    textSize(12);
    textStyle(BOLD);
    text(columns[selected.c].title, ix + 12, iy + 8);
    textStyle(NORMAL);
    fill('black');
    textSize(12.5);
    text(s.support, ix + 12, iy + 26, iw - 24, ih - 32);
  } else {
    fill('dimgray');
    textSize(12.5);
    text('Click any example to see a caring, non-diagnostic way to understand it and ' +
      'respond. Noticing a sign is about caring - not about diagnosing anyone.',
      ix + 12, iy + 10, iw - 24, ih - 18);
  }
}

function overChip() {
  for (let r of chipRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (mouseY > drawHeight) return;
  for (let r of chipRects) {
    if (pointInRect(mouseX, mouseY, r)) { selected = { c: r.c, r: r.r }; return; }
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
