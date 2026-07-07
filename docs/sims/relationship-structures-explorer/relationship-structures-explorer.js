// Relationship Structures Explorer - MicroSim (describe & classify structures)
// CANVAS_HEIGHT: 512
// Grade 6-8, Understand (L2): explore how family, friendship, and romantic
// relationship structures vary across cultures while core needs stay constant.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let familyBtn, friendBtn, romanticBtn, compareBtn, resetBtn;

// Three relationship types. Each has a constant "core need" and 3-4 structures.
// Each structure: label, desc (1-2 sentences), context (one culture/context).
let types = [
  {
    key: 'family',
    title: 'Family',
    coreNeed: 'Care and belonging: every family shape works to keep members safe, supported, and loved.',
    accent: 'steelblue',
    light: 'aliceblue',
    structures: [
      { label: 'Nuclear family', desc: 'Two parents and their children live together as one household.', context: 'Common in many suburban communities across North America and Europe.' },
      { label: 'Extended family', desc: 'Parents, children, grandparents, aunts, uncles, or cousins share a home or daily life.', context: 'Very common across South Asia, the Middle East, and Latin America.' },
      { label: 'Single-parent family', desc: 'One parent or guardian raises the children on their own.', context: 'Found in every culture; many kids grow up in loving single-parent homes.' },
      { label: 'Blended family', desc: 'Two families join through remarriage, bringing stepparents and stepsiblings together.', context: 'Increasingly common worldwide as families reshape over time.' }
    ]
  },
  {
    key: 'friend',
    title: 'Friendship',
    coreNeed: 'Trust and support: friendships of every size rely on honesty, kindness, and showing up for each other.',
    accent: 'seagreen',
    light: 'honeydew',
    structures: [
      { label: 'Close best friend', desc: 'One or two friends you trust deeply and share almost everything with.', context: 'Valued in cultures that prize loyalty and lifelong personal bonds.' },
      { label: 'Friend group', desc: 'A circle of several friends who hang out, share interests, and support one another.', context: 'Common in schools and neighborhoods everywhere young people gather.' },
      { label: 'Activity friends', desc: 'Friends you connect with through a team, club, or shared hobby.', context: 'Central in communities built around sports, music, or faith groups.' },
      { label: 'Online friends', desc: 'People you build a real friendship with through games, groups, or messaging.', context: 'A growing worldwide way to connect across distance and borders.' }
    ]
  },
  {
    key: 'romantic',
    title: 'Romantic',
    coreNeed: 'Respect and consent: healthy romantic bonds are built on caring, honesty, and choices both people freely agree to.',
    accent: 'mediumpurple',
    light: 'lavender',
    structures: [
      { label: 'Dating / courtship', desc: 'Two people spend time together to get to know each other and see if they connect.', context: 'Takes many forms; some cultures involve family early in courtship.' },
      { label: 'Committed partnership', desc: 'Two people choose an ongoing, exclusive relationship built on shared trust.', context: 'Recognized across cultures as a lasting bond between partners.' },
      { label: 'Marriage', desc: 'A partnership formally recognized by a community, faith, or the law.', context: 'Celebrated with unique traditions in cultures all around the world.' }
    ]
  }
];

let activeType = 0;
let selected = -1;      // single-view selected card index
let compareMode = false;
let cmpA = -1, cmpB = -1; // compare-mode chosen cards
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  familyBtn = createButton('Family');
  familyBtn.mousePressed(() => switchType(0));
  friendBtn = createButton('Friendship');
  friendBtn.mousePressed(() => switchType(1));
  romanticBtn = createButton('Romantic');
  romanticBtn.mousePressed(() => switchType(2));
  compareBtn = createButton('Compare Two: Off');
  compareBtn.mousePressed(toggleCompare);
  resetBtn = createButton('Reset');
  resetBtn.mousePressed(resetView);

  familyBtn.parent(document.querySelector('main'));
  friendBtn.parent(document.querySelector('main'));
  romanticBtn.parent(document.querySelector('main'));
  compareBtn.parent(document.querySelector('main'));
  resetBtn.parent(document.querySelector('main'));

  positionControls();
  describe('An explorer with three tabs (Family, Friendship, Romantic). Each tab ' +
    'shows selectable relationship-structure cards and an infobox describing the ' +
    'chosen structure and a culture where it is common. A persistent panel names the ' +
    'core need that stays the same for that relationship type. Compare Two mode shows ' +
    'two chosen structures side by side.', LABEL);
}

function positionControls() {
  let y = drawHeight + 16;
  familyBtn.position(margin, y);
  friendBtn.position(margin + 62, y);
  romanticBtn.position(margin + 158, y);
  compareBtn.position(margin + 250, y);
  resetBtn.position(margin + 372, y);
}

function switchType(i) {
  activeType = i;
  selected = -1;
  cmpA = -1;
  cmpB = -1;
}

function toggleCompare() {
  compareMode = !compareMode;
  compareBtn.html('Compare Two: ' + (compareMode ? 'On' : 'Off'));
  selected = -1;
  cmpA = -1;
  cmpB = -1;
}

function resetView() {
  selected = -1;
  cmpA = -1;
  cmpB = -1;
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

  let t = types[activeType];

  // Title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Relationship Structures Explorer', canvasWidth / 2, 8);

  // Tab indicator row
  drawTabs(t);

  // Cards region
  let cardsTop = 78;
  let panelH = 74;                 // "What Stays the Same" panel height
  let panelY = drawHeight - panelH - margin;
  let infoTop, infoBottom;

  cardRects = [];
  let n = t.structures.length;
  let cols = 2;
  let rows = Math.ceil(n / cols);
  let gridW = canvasWidth - margin * 2;
  let gap = 10;
  let cardW = (gridW - gap * (cols - 1)) / cols;
  let cardH = 46;
  let gridH = rows * cardH + (rows - 1) * gap;

  // Instruction line
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(12);
  let hint = compareMode
    ? 'Compare Two is on: click two cards to see them side by side.'
    : 'Click a structure card to learn about it. No structure is better than another.';
  text(hint, margin, cardsTop, gridW, 16);

  let gridTop = cardsTop + 20;

  // Draw the structure cards
  for (let i = 0; i < n; i++) {
    let r = Math.floor(i / cols);
    let c = i % cols;
    let x = margin + c * (cardW + gap);
    let y = gridTop + r * (cardH + gap);
    cardRects.push({ x: x, y: y, w: cardW, h: cardH, i: i });

    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: cardW, h: cardH });
    let isSel = (!compareMode && selected === i) || (compareMode && (cmpA === i || cmpB === i));

    strokeWeight(isSel ? 3 : 1.5);
    stroke(isSel ? t.accent : 'silver');
    fill(isSel ? t.light : (hover ? 'ghostwhite' : 'white'));
    rect(x, y, cardW, cardH, 8);

    noStroke();
    fill(t.accent);
    textAlign(CENTER, CENTER);
    textSize(14);
    text(t.structures[i].label, x + 6, y, cardW - 12, cardH);
  }
  cursor(overAnyCard() ? HAND : ARROW);

  // Infobox area sits between cards and the persistent panel
  infoTop = gridTop + gridH + 12;
  infoBottom = panelY - 10;

  if (compareMode) {
    drawCompare(t, infoTop, infoBottom);
  } else {
    drawInfoBox(t, infoTop, infoBottom);
  }

  // Persistent "What Stays the Same" panel
  drawCorePanel(t, panelY, gridW, panelH);
}

function drawTabs(t) {
  let labels = ['Family', 'Friendship', 'Romantic'];
  let tabW = (canvasWidth - margin * 2) / 3;
  let ty = 42;
  let th = 28;
  for (let i = 0; i < 3; i++) {
    let x = margin + i * tabW;
    let on = activeType === i;
    stroke('silver');
    strokeWeight(1);
    fill(on ? types[i].accent : 'gainsboro');
    rect(x, ty, tabW - 4, th, 6);
    noStroke();
    fill(on ? 'white' : 'dimgray');
    textAlign(CENTER, CENTER);
    textSize(14);
    text(labels[i], x, ty, tabW - 4, th);
  }
}

function drawInfoBox(t, top, bottom) {
  let x = margin;
  let w = canvasWidth - margin * 2;
  let h = bottom - top;
  if (h < 40) return;

  stroke(t.accent);
  strokeWeight(1.5);
  fill('white');
  rect(x, top, w, h, 8);
  noStroke();

  if (selected < 0) {
    fill('gray');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('Select a card above to read a short description and one place it is common.',
      x + 12, top, w - 24, h);
    return;
  }

  let s = t.structures[selected];
  let pad = 12;
  fill(t.accent);
  textAlign(LEFT, TOP);
  textSize(16);
  text(s.label, x + pad, top + pad, w - pad * 2, 22);

  fill('black');
  textSize(13);
  text(s.desc, x + pad, top + pad + 26, w - pad * 2, h - 70);

  fill(t.accent);
  textSize(12);
  text('Where it is common:', x + pad, top + h - 42, w - pad * 2, 16);
  fill('dimgray');
  text(s.context, x + pad, top + h - 26, w - pad * 2, 22);
}

function drawCompare(t, top, bottom) {
  let totalW = canvasWidth - margin * 2;
  let h = bottom - top;
  if (h < 40) return;
  let gap = 10;
  let w = (totalW - gap) / 2;
  let picks = [cmpA, cmpB];

  for (let k = 0; k < 2; k++) {
    let x = margin + k * (w + gap);
    stroke(t.accent);
    strokeWeight(1.5);
    fill('white');
    rect(x, top, w, h, 8);
    noStroke();

    let pad = 10;
    if (picks[k] < 0) {
      fill('gray');
      textAlign(CENTER, CENTER);
      textSize(12);
      text('Pick card ' + (k + 1), x + 6, top, w - 12, h);
      continue;
    }
    let s = t.structures[picks[k]];
    fill(t.accent);
    textAlign(LEFT, TOP);
    textSize(14);
    text(s.label, x + pad, top + pad, w - pad * 2, 34);
    fill('black');
    textSize(11.5);
    text(s.desc, x + pad, top + pad + 34, w - pad * 2, h - 90);
    fill('dimgray');
    textSize(11);
    text(s.context, x + pad, top + h - 44, w - pad * 2, 40);
  }
}

function drawCorePanel(t, y, w, h) {
  let x = margin;
  stroke(t.accent);
  strokeWeight(2);
  fill(t.light);
  rect(x, y, w, h, 8);
  noStroke();

  let pad = 12;
  fill(t.accent);
  textAlign(LEFT, TOP);
  textSize(13);
  text('What Stays the Same (' + t.title + ')', x + pad, y + 8, w - pad * 2, 18);

  fill('black');
  textSize(13);
  text(t.coreNeed, x + pad, y + 28, w - pad * 2, h - 34);
}

function overAnyCard() {
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) return true;
  }
  return false;
}

function mousePressed() {
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      if (compareMode) {
        // fill slot A first, then B, then cycle
        if (cmpA === r.i) { cmpA = -1; return; }
        if (cmpB === r.i) { cmpB = -1; return; }
        if (cmpA < 0) cmpA = r.i;
        else if (cmpB < 0) cmpB = r.i;
        else { cmpA = cmpB; cmpB = r.i; }
      } else {
        selected = (selected === r.i) ? -1 : r.i;
      }
      return;
    }
  }
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
