// Warning Sign Recognition Reference - MicroSim (click-to-reveal reference infographic)
// CANVAS_HEIGHT: 520
// Grade 6-8, Remember (L1): students identify and recognize verbal, behavioral, and
// emotional warning signs and recall the 988 Suicide & Crisis Lifeline as an immediate
// resource. Three labeled columns of clickable example phrases each open a supportive
// infobox; a persistent 988 banner is clickable to reveal one more sentence. No crisis
// imagery, methods, or scenes are depicted anywhere.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 474;
let controlHeight = 46;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let resetButton;

let bannerText = 'Call or text 988 - the Suicide & Crisis Lifeline is free, confidential, and available 24/7.';
let bannerExtra = '988 is appropriate whether you are worried about yourself or someone else.';
let bannerOpen = false;

// Three warning-sign categories, four short signs each with a supportive restatement.
let columns = [
  {
    title: 'Verbal Signs', color: '#5B7DB1',
    signs: [
      { label: '"I feel like a burden"',
        support: 'When someone says they feel like a burden, they may be in real pain. You do not need the answers - listen, take it seriously, and get a trusted adult or call or text 988.' },
      { label: 'Talking about feeling trapped',
        support: 'Hearing that someone feels trapped or that nothing will get better calls for caring action, not diagnosis. Reach out and connect them to a trusted adult or 988.' },
      { label: 'Saying goodbye as if for good',
        support: 'Unexpected goodbyes can be a way of reaching out. Stay with them if you can, be kind, and get help right away - a trusted adult or 988.' },
      { label: '"There is no reason to go on"',
        support: 'Words like these are always worth taking seriously and acting on immediately. Care, stay with them, and reach a trusted adult or 988.' }
    ]
  },
  {
    title: 'Behavioral Signs', color: '#6BA292',
    signs: [
      { label: 'Pulling away from everyone',
        support: 'Suddenly avoiding friends and activities can mean someone is struggling. A caring check-in and a trusted adult or 988 can make a real difference.' },
      { label: 'Giving away favorite things',
        support: 'Giving away belongings that matter can be a warning sign. If you notice it, treat it as a reason to talk to a trusted adult or reach 988.' },
      { label: 'Big changes in sleep or eating',
        support: 'Large changes in sleeping or eating can show someone is having a hard time. Noticing it is a chance to care and to connect them with support.' },
      { label: 'Taking dangerous risks',
        support: 'A sudden pattern of unsafe, out-of-character risks is worth taking seriously. Respond with care and reach a trusted adult or 988.' }
    ]
  },
  {
    title: 'Emotional Signs', color: '#B08FC0',
    signs: [
      { label: 'Deep sadness that lingers',
        support: 'Sadness that stays a long time and does not lift is worth noticing. You do not have to diagnose - just care and connect them to a trusted adult or 988.' },
      { label: 'Sudden mood swings',
        support: 'Big, sudden swings in mood can signal someone feels overwhelmed. A gentle check-in and a trusted adult or 988 can help.' },
      { label: 'Feeling anxious or on edge',
        support: 'Seeming very anxious, restless, or on edge can be part of a hard time. Noticing it is a reason to reach out with care.' },
      { label: 'Seeming numb or empty',
        support: 'Feeling numb or empty can be a warning sign. Respond gently, stay connected, and let a trusted adult know or reach 988.' }
    ]
  }
];

let selected = null;
let chipRects = [];
let bannerRect = null;

let columnsTop = 100;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selected = null; bannerOpen = false; });
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A calm reference infographic with three labeled columns - Verbal, Behavioral, ' +
    'and Emotional Signs - each listing four short example phrases. A clickable banner at ' +
    'the top gives the 988 Suicide & Crisis Lifeline. Clicking any example opens a ' +
    'supportive, non-diagnostic box; clicking the banner reveals one more sentence about ' +
    'when 988 is appropriate. No crisis imagery is shown.', LABEL);
}

function positionControls() {
  resetButton.position(margin, drawHeight + 8);
}

function draw() {
  updateCanvasSize();

  fill('#f5f7fb');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#33415c');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Warning Sign Recognition Reference', canvasWidth / 2, 8);

  drawBanner();
  drawColumns();
  drawInfobox();

  cursor((overChip() || (bannerRect && pointInRect(mouseX, mouseY, bannerRect))) ? HAND : ARROW);
}

function drawBanner() {
  let bx = margin, by = 34, bw = canvasWidth - 2 * margin, bh = 44;
  bannerRect = { x: bx, y: by, w: bw, h: bh };
  let hover = pointInRect(mouseX, mouseY, bannerRect);
  fill(hover ? '#1f6f6a' : '#238078');
  stroke('#17615a');
  strokeWeight(1);
  rect(bx, by, bw, bh, 8);
  noStroke();
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(12.5);
  textStyle(BOLD);
  text(bannerText, bx + 12, by, bw - 24, bh);
  textStyle(NORMAL);

  // hint / revealed extra sentence sits just under the banner
  textAlign(CENTER, TOP);
  textSize(11);
  if (bannerOpen) {
    fill('#1f6f6a');
    text(bannerExtra, bx + 8, by + bh + 3, bw - 16, 18);
  } else {
    fill('#7a8aa0');
    text('(click the banner to learn more)', bx + 8, by + bh + 4, bw - 16, 16);
  }
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
    fill(columns[c].color);
    rect(colX, columnsTop, colW, headerH, 6);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(12.5);
    textStyle(BOLD);
    text(columns[c].title, colX + 4, columnsTop, colW - 8, headerH);
    textStyle(NORMAL);

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
    text('Click any example for a caring, non-diagnostic way to understand it. Noticing a ' +
      'sign calls for immediate, caring action - reach a trusted adult or call or text 988.',
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
  if (bannerRect && pointInRect(mouseX, mouseY, bannerRect)) { bannerOpen = !bannerOpen; return; }
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
