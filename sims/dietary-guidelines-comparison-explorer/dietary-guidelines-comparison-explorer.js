// Dietary Guidelines Comparison Explorer - MicroSim (tabbed cross-culture comparison)
// CANVAS_HEIGHT: 368
// Grades 6-8, Analyze (L4): students compare three dietary-guideline systems to
// differentiate shared nutritional principles from culturally specific presentation.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 316;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let sharedButton;
let resetButton;

let systems = [
  { name: 'USDA MyPlate',
    groups: [
      { g: 'Vegetables', r: 'A large section — reflects U.S. guidance to fill half the plate with produce.' },
      { g: 'Fruits', r: 'Grouped with vegetables in the "produce half."' },
      { g: 'Grains', r: 'Emphasis on making half your grains whole.' },
      { g: 'Protein', r: 'Includes meat, beans, eggs, nuts.' },
      { g: 'Dairy', r: 'Shown as a side circle (a glass of milk).' }
    ] },
  { name: "Canada's Food Guide",
    groups: [
      { g: 'Vegetables & Fruits', r: 'Half the plate — combined into one large section.' },
      { g: 'Whole Grains', r: 'A quarter of the plate, emphasizing whole grains.' },
      { g: 'Proteins', r: 'Includes more plant proteins than older guides.' },
      { g: 'Water', r: 'Water is shown as the drink of choice (no dairy circle).' }
    ] },
  { name: 'Indigenous Seasonal',
    groups: [
      { g: 'Wild Rice', r: 'A traditional grain harvested from lakes in late summer.' },
      { g: 'Fish', r: 'A key protein tied to local waters and seasons.' },
      { g: 'Venison', r: 'Game meat reflecting hunting traditions.' },
      { g: 'Corn/Beans/Squash', r: 'The "three sisters," grown and eaten together.' },
      { g: 'Berries', r: 'Gathered in summer; celebrated in ceremony.' }
    ] }
];
let shared = 'Shared science across all three: eat a variety of foods, favor whole foods, ' +
  'include protein and produce, and limit added sugar. The differences are in presentation, ' +
  'not the core nutrition.';

let tab = 0;
let selGroup = -1;
let showShared = false;
let tabRects = [], groupRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  sharedButton = createButton('Show Shared Principles');
  sharedButton.mousePressed(() => { showShared = !showShared; selGroup = -1; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { selGroup = -1; showShared = false; });
  positionControls();
  describe('Three tabs for dietary-guideline systems — MyPlate, Canada\'s Food Guide, and ' +
    'an Indigenous seasonal food system. Clicking a food group explains its cultural or ' +
    'geographic reason; a toggle highlights the shared nutritional science.', LABEL);
}

function positionControls() {
  sharedButton.position(10, drawHeight + 12);
  resetButton.position(190, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('Dietary Guidelines Comparison', canvasWidth / 2, 6);

  // tabs
  tabRects = [];
  let tw = (canvasWidth - margin * 2) / 3;
  // Tab labels: 70% larger than the original (17px), auto-shrunk to fit narrow widths
  textSize(17);
  let maxLabelW = 0;
  for (let i = 0; i < 3; i++) maxLabelW = Math.max(maxLabelW, textWidth(systems[i].name));
  let tabFont = maxLabelW > tw - 8 ? Math.max(10, 17 * (tw - 8) / maxLabelW) : 17;
  for (let i = 0; i < 3; i++) {
    let x = margin + i * tw;
    tabRects.push({ x: x, y: 30, w: tw, h: 26, i: i });
    let on = tab === i;
    noStroke(); fill(on ? 'seagreen' : 'gainsboro'); rect(x + 1, 30, tw - 2, 26, 4);
    fill(on ? 'white' : 'dimgray'); textAlign(CENTER, CENTER); textSize(tabFont);
    text(systems[i].name, x + tw / 2, 43);
  }

  // food-group chips (model)
  groupRects = [];
  let gs = systems[tab].groups;
  let y0 = 66, gh = 34, gap = 6;
  let cols = 2, gw = (canvasWidth - margin * 2 - gap) / cols;
  for (let i = 0; i < gs.length; i++) {
    let c = i % cols, r = Math.floor(i / cols);
    let x = margin + c * (gw + gap), y = y0 + r * (gh + gap);
    groupRects.push({ x: x, y: y, w: gw, h: gh, i: i });
    let sel = selGroup === i;
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: gw, h: gh });
    strokeWeight(sel ? 3 : 1.5); stroke(sel ? 'darkorange' : 'seagreen');
    fill(sel ? 'gold' : (hover ? 'honeydew' : 'white'));
    rect(x, y, gw, gh, 6);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(12);
    text(gs[i].g, x + 4, y, gw - 8, gh);
  }
  cursor(overAny() ? HAND : ARROW);

  // panel (infobox) — fixed height sized to the longest text at the embed width;
  // the body font auto-shrinks so nothing clips when the text reflows on narrow screens.
  let py = 194, ph = 112;
  let boxW = canvasWidth - margin * 2, innerW = boxW - 20;
  let header = null, body, headColor;
  if (showShared) { header = 'Shared Principles:'; body = shared; headColor = 'seagreen'; }
  else if (selGroup >= 0) { header = gs[selGroup].g + ' (What\'s Different Here):'; body = gs[selGroup].r; headColor = 'darkorange'; }
  else { body = 'Click a food group for its cultural/geographic reason, or Show Shared Principles.'; headColor = 'dimgray'; }

  // largest font (<= 18, which is 50% larger than the original 12) whose wrapped text fits the box
  let topPad = 8, hgap = 6, botPad = 10, fs = 18, lh = 22;
  for (let f = 18; f >= 10; f--) {
    textSize(f);
    let l = Math.round(f * 1.2);
    let hn = header ? countLines(header, innerW) : 0;
    let need = topPad + (header ? hn * l + hgap : 0) + countLines(body, innerW) * l + botPad;
    if (need <= ph || f === 10) { fs = f; lh = l; break; }
  }

  fill('white'); stroke('silver'); strokeWeight(1); rect(margin, py, boxW, ph, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(fs); textLeading(lh);
  let tx = margin + 10, ty = py + topPad;
  if (header) {
    let hn = countLines(header, innerW);
    fill(headColor); text(header, tx, ty, innerW, hn * lh + 2);
    let by = ty + hn * lh + hgap;
    fill('black'); text(body, tx, by, innerW, py + ph - botPad - by + 4);
  } else {
    fill('dimgray'); text(body, tx, ty, innerW, ph - topPad - botPad + 4);
  }
}

function overAny() {
  for (let t of tabRects) if (pointInRect(mouseX, mouseY, t)) return true;
  for (let g of groupRects) if (pointInRect(mouseX, mouseY, g)) return true;
  return false;
}
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

// Count how many lines a string wraps to at the current textSize within a given width
// (matches p5's word-wrap in the text() box form, used to size/fit the infobox).
function countLines(str, w) {
  let words = str.split(' '), n = 1, cur = '';
  for (let i = 0; i < words.length; i++) {
    let t = cur ? cur + ' ' + words[i] : words[i];
    if (textWidth(t) > w && cur) { n++; cur = words[i]; } else cur = t;
  }
  return n;
}

function mousePressed() {
  for (let t of tabRects) if (pointInRect(mouseX, mouseY, t)) { tab = t.i; selGroup = -1; showShared = false; return; }
  for (let g of groupRects) if (pointInRect(mouseX, mouseY, g)) { selGroup = g.i; showShared = false; return; }
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
