// Source Reliability Sorter - MicroSim
// CANVAS_HEIGHT: 522
// Grade 4, Evaluate (L5): judge short example health sources and sort each into
// Reliable, Not Reliable, or Depends - Check Further, with a reason every time.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let whyBtn, nextBtn, resetBtn;

// Each source: type (icon), from (label), headline, quote,
// answer key: correct = 'reliable' | 'notReliable' | 'depends',
// trait word, and a short reason.
let sources = [
  {
    type: 'agency',
    from: 'Health Agency Web Page',
    headline: 'Wash Your Hands to Stop Germs',
    quote: '"Scrub with soap for 20 seconds to help stop germs from spreading."',
    correct: 'reliable',
    trait: 'Expertise',
    reason: 'A public health agency has trained experts and must post facts it can back up.'
  },
  {
    type: 'social',
    from: 'Social Media Post',
    headline: 'This Berry Cures Every Cold!',
    quote: '"I ate these berries and never get sick. Trust me, they cure everything!"',
    correct: 'notReliable',
    trait: 'Expertise',
    reason: 'A big "cures everything" claim with no expert or proof is a warning sign.'
  },
  {
    type: 'doctor',
    from: "A Doctor's Advice",
    headline: 'Get Enough Sleep to Grow Strong',
    quote: '"Kids your age need about 9 to 12 hours of sleep to feel their best."',
    correct: 'reliable',
    trait: 'Expertise',
    reason: 'A doctor is trained in health and can be asked to explain the reasons why.'
  },
  {
    type: 'ad',
    from: 'Advertisement',
    headline: 'Our Vitamin Drink Makes You Smarter!',
    quote: '"Buy VitaBoost today! Kids who drink it get better grades. Only $9.99!"',
    correct: 'notReliable',
    trait: 'Bias',
    reason: 'An ad wants your money, so it may stretch the truth to sell the product.'
  },
  {
    type: 'social',
    from: 'Social Media Post',
    headline: 'Nurse Shares a Handwashing Tip',
    quote: '"Hi, I am a school nurse. Here is a link to the health agency page I trust."',
    correct: 'depends',
    trait: 'Accountability',
    reason: 'It could be helpful, but check who really posted it and follow the link first.'
  },
  {
    type: 'agency',
    from: 'Health Agency Web Page',
    headline: 'How Much Water Kids Need Each Day',
    quote: '"Most kids need about 6 to 8 cups of water a day, and more when active."',
    correct: 'reliable',
    trait: 'Accountability',
    reason: 'The page names its sources and can be held responsible for being correct.'
  },
  {
    type: 'ad',
    from: 'Advertisement',
    headline: 'Gummies Doctors Say Are Healthy',
    quote: '"9 out of 10 doctors love our candy gummies! Grab a bag now."',
    correct: 'depends',
    trait: 'Bias',
    reason: 'It sounds like proof, but an ad may leave out facts, so check the real study.'
  },
  {
    type: 'social',
    from: 'Social Media Post',
    headline: 'Skip Breakfast to Feel Great',
    quote: '"Breakfast is bad for you! Everyone should stop eating it, no doctor needed."',
    correct: 'notReliable',
    trait: 'Expertise',
    reason: 'It tells you to ignore experts, and no trusted source backs up the claim.'
  }
];

// Zone definitions: key, label, color.
let zoneDefs = [
  { key: 'reliable', label: 'Reliable', color: 'seagreen', light: 'honeydew' },
  { key: 'notReliable', label: 'Not Reliable', color: 'indianred', light: 'mistyrose' },
  { key: 'depends', label: 'Depends - Check Further', color: 'goldenrod', light: 'cornsilk' }
];

let order = [];        // shuffled indices into sources
let pos = 0;           // position within order
let chosen = null;     // zone key the student picked for current card
let showWhy = false;   // Why? panel visible
let results = [];      // per finished card: {idx, picked, correct}
let done = false;      // all cards sorted -> summary
let zoneRects = [];    // computed hit rects for the three zones

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  whyBtn = createButton('Why?');
  whyBtn.mousePressed(onWhy);
  nextBtn = createButton('Next Source');
  nextBtn.mousePressed(onNext);
  resetBtn = createButton('Reset');
  resetBtn.mousePressed(onReset);

  whyBtn.parent(document.querySelector('main'));
  nextBtn.parent(document.querySelector('main'));
  resetBtn.parent(document.querySelector('main'));

  buildOrder();
  positionControls();
  describe('A source reliability sorter. A card shows a short health message with ' +
    'its source type (doctor, health agency, social media, or ad). Click one of ' +
    'three zones - Reliable, Not Reliable, or Depends - Check Further - to sort it. ' +
    'A reason is shown every time. After eight cards a summary lists the correct ' +
    'answer and reason for each.', LABEL);
}

function buildOrder() {
  order = [];
  for (let i = 0; i < sources.length; i++) order.push(i);
  // Fisher-Yates shuffle
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = order[i]; order[i] = order[j]; order[j] = t;
  }
  pos = 0;
  chosen = null;
  showWhy = false;
  results = [];
  done = false;
}

function positionControls() {
  let y = drawHeight + 12;
  whyBtn.position(margin, y);
  nextBtn.position(margin + 70, y);
  resetBtn.position(margin + 190, y);
}

function onWhy() {
  if (done) return;
  if (chosen !== null) showWhy = true;
}

function onNext() {
  if (done) {
    // From summary, Next Source restarts a fresh round.
    buildOrder();
    return;
  }
  if (chosen === null) return; // must sort first
  // record result if not already recorded for this card
  let idx = order[pos];
  results.push({ idx: idx, picked: chosen, correct: sources[idx].correct });
  chosen = null;
  showWhy = false;
  pos++;
  if (pos >= order.length) done = true;
}

function onReset() {
  buildOrder();
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
  text('Source Reliability Sorter', canvasWidth / 2, 8);

  if (done) {
    drawSummary();
    updateButtons();
    return;
  }

  let idx = order[pos];
  let s = sources[idx];

  // Progress line
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Source ' + (pos + 1) + ' of ' + order.length, margin, 34);
  textAlign(RIGHT, TOP);
  text('Sort by asking: expertise? accountability? bias?', canvasWidth - margin, 34);

  // Source card
  let cardX = margin;
  let cardY = 54;
  let cardW = canvasWidth - margin * 2;
  let cardH = 150;
  drawSourceCard(s, cardX, cardY, cardW, cardH);

  // Instruction
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(14);
  let instr = chosen === null
    ? 'Click the zone where this source belongs:'
    : 'You picked "' + zoneLabel(chosen) + '". Read the reason below.';
  text(instr, margin, cardY + cardH + 8, cardW, 18);

  // Three zones
  let zonesTop = cardY + cardH + 30;
  let zoneH = 54;
  drawZones(zonesTop, zoneH, s);

  // Feedback panel
  let fbTop = zonesTop + zoneH + 12;
  let fbBottom = drawHeight - margin;
  drawFeedback(s, margin, fbTop, cardW, fbBottom - fbTop);

  updateButtons();
  cursor(chosen === null && overAnyZone() ? HAND : ARROW);
}

function updateButtons() {
  if (done) {
    whyBtn.attribute('disabled', '');
    nextBtn.removeAttribute('disabled');
    nextBtn.html('Play Again');
    return;
  }
  nextBtn.html('Next Source');
  if (chosen === null) {
    whyBtn.attribute('disabled', '');
    nextBtn.attribute('disabled', '');
  } else {
    whyBtn.removeAttribute('disabled');
    nextBtn.removeAttribute('disabled');
  }
}

function drawSourceCard(s, x, y, w, h) {
  stroke('silver');
  strokeWeight(1.5);
  fill('white');
  rect(x, y, w, h, 10);
  noStroke();

  // Icon area (left)
  let iconCX = x + 42;
  let iconCY = y + 44;
  drawIcon(s.type, iconCX, iconCY);

  // Source-type label under icon
  noStroke();
  fill('steelblue');
  textAlign(CENTER, TOP);
  textSize(11);
  text(s.from, x + 8, y + 78, 80, h - 82);

  // Text area (right of icon)
  let tx = x + 92;
  let tw = w - 92 - 12;
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(15);
  textStyle(BOLD);
  text(s.headline, tx, y + 12, tw, 44);
  textStyle(NORMAL);

  fill('dimgray');
  textSize(13);
  text(s.quote, tx, y + 58, tw, h - 66);
}

// Draw a simple icon for each source type, centered at (cx, cy).
function drawIcon(type, cx, cy) {
  push();
  if (type === 'doctor') {
    // Stethoscope: earpiece tubes + chest piece circle
    stroke('slateblue');
    strokeWeight(3);
    noFill();
    arc(cx, cy - 6, 30, 30, PI + 0.4, TWO_PI - 0.4);
    line(cx - 14, cy - 4, cx - 14, cy + 8);
    line(cx + 14, cy - 4, cx + 14, cy + 8);
    line(cx - 14, cy + 8, cx, cy + 16);
    line(cx + 14, cy + 8, cx, cy + 16);
    noStroke();
    fill('slateblue');
    circle(cx, cy + 20, 12);
  } else if (type === 'agency') {
    // Government building: roof triangle + columns + base
    noStroke();
    fill('steelblue');
    triangle(cx - 22, cy - 6, cx + 22, cy - 6, cx, cy - 22);
    rect(cx - 22, cy - 6, 44, 5);
    for (let i = -3; i <= 3; i += 2) {
      rect(cx + i * 6 - 2, cy - 1, 4, 20);
    }
    rect(cx - 24, cy + 19, 48, 5);
  } else if (type === 'social') {
    // Phone with heart
    noStroke();
    fill('mediumpurple');
    rect(cx - 13, cy - 22, 26, 44, 5);
    fill('white');
    rect(cx - 10, cy - 17, 20, 32, 2);
    // heart
    fill('indianred');
    let hy = cy - 2;
    circle(cx - 4, hy - 2, 8);
    circle(cx + 4, hy - 2, 8);
    triangle(cx - 8, hy, cx + 8, hy, cx, hy + 9);
  } else if (type === 'ad') {
    // Price tag
    push();
    translate(cx, cy);
    rotate(-0.35);
    noStroke();
    fill('goldenrod');
    beginShape();
    vertex(-6, -16);
    vertex(18, -16);
    vertex(18, 10);
    vertex(-6, 10);
    vertex(-18, -3);
    endShape(CLOSE);
    fill('white');
    circle(-9, -3, 7);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(12);
    textStyle(BOLD);
    text('$', 6, -3);
    textStyle(NORMAL);
    pop();
  }
  pop();
}

function drawZones(top, h, s) {
  zoneRects = [];
  let gap = 8;
  let w = (canvasWidth - margin * 2 - gap * 2) / 3;
  for (let i = 0; i < zoneDefs.length; i++) {
    let z = zoneDefs[i];
    let x = margin + i * (w + gap);
    zoneRects.push({ x: x, y: top, w: w, h: h, key: z.key });

    let picked = chosen === z.key;
    let hover = chosen === null && pointInRect(mouseX, mouseY, { x: x, y: top, w: w, h: h });

    stroke(z.color);
    strokeWeight(picked ? 3.5 : 2);
    fill(picked ? z.light : (hover ? z.light : 'white'));
    rect(x, top, w, h, 10);

    noStroke();
    fill(z.color);
    textAlign(CENTER, CENTER);
    textSize(13);
    textStyle(BOLD);
    text(z.label, x + 4, top + 2, w - 8, h - 4);
    textStyle(NORMAL);

    // Checkmark badge if this is the chosen zone
    if (picked) {
      fill(z.color);
      circle(x + w - 12, top + 12, 16);
      fill('white');
      textAlign(CENTER, CENTER);
      textSize(12);
      textStyle(BOLD);
      text('✓', x + w - 12, top + 11);
      textStyle(NORMAL);
    }
  }
}

function drawFeedback(s, x, y, w, h) {
  if (h < 30) return;

  if (chosen === null) {
    // gentle hint box
    stroke('silver');
    strokeWeight(1);
    fill('white');
    rect(x, y, w, h, 8);
    noStroke();
    fill('gray');
    textAlign(CENTER, CENTER);
    textSize(12.5);
    text('Tip: reliable sources have real expertise, are accountable for facts, ' +
      'and have no reason to be biased.', x + 12, y, w - 24, h);
    return;
  }

  let right = s.correct === chosen;
  let correctColor = zoneColor(s.correct);

  stroke(correctColor);
  strokeWeight(2);
  fill(zoneLight(s.correct));
  rect(x, y, w, h, 8);
  noStroke();

  let pad = 12;
  // Result line
  fill(right ? 'seagreen' : 'indianred');
  textAlign(LEFT, TOP);
  textSize(13);
  textStyle(BOLD);
  let head = right
    ? 'Good judging! This is ' + zoneLabel(s.correct) + '.'
    : 'Best answer: ' + zoneLabel(s.correct) + '.';
  text(head, x + pad, y + 8, w - pad * 2, 18);
  textStyle(NORMAL);

  // Trait tag
  fill(correctColor);
  textSize(12);
  text('Trait to think about: ' + s.trait, x + pad, y + 28, w - pad * 2, 16);

  // Reason (always shown once sorted; Why? just re-emphasizes it)
  fill('black');
  textSize(12.5);
  text(s.reason, x + pad, y + 46, w - pad * 2, h - 52);
}

function drawSummary() {
  let x = margin;
  let w = canvasWidth - margin * 2;
  let top = 38;

  // Score
  let score = 0;
  for (let r of results) if (r.picked === r.correct) score++;
  noStroke();
  fill('seagreen');
  textAlign(CENTER, TOP);
  textSize(15);
  textStyle(BOLD);
  text('You sorted all ' + results.length + ' sources! Matches: ' +
    score + ' of ' + results.length, canvasWidth / 2, top);
  textStyle(NORMAL);

  fill('dimgray');
  textSize(11.5);
  text('The reason matters more than the score - keep asking "why?"',
    canvasWidth / 2, top + 20);

  // List of all sources with correct category + reason
  let listTop = top + 42;
  let listBottom = drawHeight - margin;
  let n = results.length;
  let rowH = (listBottom - listTop - (n - 1) * 4) / n;

  for (let i = 0; i < n; i++) {
    let r = results[i];
    let s = sources[r.idx];
    let ry = listTop + i * (rowH + 4);
    let cc = zoneColor(s.correct);

    stroke(cc);
    strokeWeight(1.5);
    fill(zoneLight(s.correct));
    rect(x, ry, w, rowH, 6);
    noStroke();

    // left color chip with short label
    let chipW = 78;
    fill(cc);
    textAlign(LEFT, TOP);
    textSize(10.5);
    textStyle(BOLD);
    text(zoneShort(s.correct), x + 8, ry + 6, chipW, rowH - 8);
    textStyle(NORMAL);

    // check/x mark for the student's pick
    let mark = r.picked === r.correct ? '✓' : '~';
    fill(r.picked === r.correct ? 'seagreen' : 'goldenrod');
    textAlign(RIGHT, TOP);
    textSize(13);
    textStyle(BOLD);
    text(mark, x + w - 8, ry + 5);
    textStyle(NORMAL);

    // headline + reason
    let tx = x + chipW + 6;
    let tw = w - chipW - 24;
    fill('black');
    textAlign(LEFT, TOP);
    textSize(11.5);
    textStyle(BOLD);
    text(s.headline, tx, ry + 5, tw, 15);
    textStyle(NORMAL);
    fill('dimgray');
    textSize(10.5);
    text(s.reason, tx, ry + 20, tw, rowH - 22);
  }
}

// ---- helpers ----
function overAnyZone() {
  for (let r of zoneRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function mousePressed() {
  if (done) return;
  if (chosen !== null) return; // already sorted this card; use Next
  for (let r of zoneRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      chosen = r.key;
      showWhy = true; // reason appears immediately on every sort
      return;
    }
  }
}

function zoneLabel(key) {
  for (let z of zoneDefs) if (z.key === key) return z.label;
  return key;
}
function zoneShort(key) {
  if (key === 'reliable') return 'RELIABLE';
  if (key === 'notReliable') return 'NOT RELIABLE';
  return 'DEPENDS';
}
function zoneColor(key) {
  for (let z of zoneDefs) if (z.key === key) return z.color;
  return 'black';
}
function zoneLight(key) {
  for (let z of zoneDefs) if (z.key === key) return z.light;
  return 'white';
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
