// Nutrition Facts Label Decoder - MicroSim (click-to-reveal component analysis)
// CANVAS_HEIGHT: 522
// Grades 6-8, Analyze (L4): students click four parts of a realistic Nutrition
// Facts label (serving size, %DV column, added sugars, ingredient order),
// read the reasoning for each, and combine them into one accurate conclusion.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 472;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let revealButton;
let resetButton;

// Four analyzable regions of the label. rect fields are filled in during draw
// (they depend on the responsive label width/position).
let regions = [
  {
    key: 'serving',
    label: 'Serving size',
    checkTitle: 'Serving size',
    info: 'This container holds 2.5 servings. One serving = 1 cup, but the ' +
      'whole bottle is 2.5 cups. Every number below is PER SERVING, so eating ' +
      'the whole thing means multiplying by 2.5. Example: 150 calories x 2.5 = ' +
      '375 calories for the full container.',
    checked: false
  },
  {
    key: 'dv',
    label: '% Daily Value',
    checkTitle: 'Read the %DV',
    info: 'Quick rule: 5% DV or less is LOW, 20% DV or more is HIGH. On this ' +
      'label sodium is 20% DV (high) and dietary fiber is 4% DV (low). %DV ' +
      'tells you if one serving has a little or a lot of a nutrient.',
    checked: false
  },
  {
    key: 'sugars',
    label: 'Added Sugars',
    checkTitle: 'Added sugars',
    info: 'Total Sugars are 22g, but 18g of that is ADDED Sugars. That means ' +
      'only 4g comes from the food naturally and 18g was put in during ' +
      'processing. 18g added sugars is 36% DV - a lot for one serving.',
    checked: false
  },
  {
    key: 'ingredients',
    label: 'Ingredient order',
    checkTitle: 'Ingredient order',
    info: 'Ingredients are listed by weight, most first. Here Sugar is #1 and ' +
      'High Fructose Corn Syrup is #2 - two sweeteners at the very top. That ' +
      'confirms this product is mostly sugar by weight.',
    checked: false
  }
];

let selected = -1;    // index of clicked region whose info is shown
let revealed = false; // true after "Reveal Full Picture"

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  revealButton = createButton('Reveal Full Picture');
  revealButton.mousePressed(() => { if (allChecked()) { revealed = true; selected = -1; } });
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  describe('A realistic Nutrition Facts label on the left with four clickable ' +
    'parts: serving size, the percent Daily Value column, added sugars, and the ' +
    'ingredient list. Clicking a part shows how to interpret it in the info panel ' +
    'on the right and checks it off a decoding checklist. When all four are ' +
    'checked, Reveal Full Picture combines them into one conclusion.', LABEL);
}

function positionControls() {
  revealButton.position(10, drawHeight + 12);
  resetButton.position(190, drawHeight + 12);
  styleRevealButton();
}

function styleRevealButton() {
  // Visually signal when the reveal button becomes available.
  if (allChecked()) {
    revealButton.style('background-color', 'seagreen');
    revealButton.style('color', 'white');
    revealButton.style('cursor', 'pointer');
  } else {
    revealButton.style('background-color', '');
    revealButton.style('color', 'gray');
    revealButton.style('cursor', 'not-allowed');
  }
}

function resetAll() {
  for (let r of regions) r.checked = false;
  selected = -1;
  revealed = false;
}

function allChecked() {
  for (let r of regions) if (!r.checked) return false;
  return true;
}

function countChecked() {
  let n = 0;
  for (let r of regions) if (r.checked) n++;
  return n;
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
  textSize(19);
  text('Nutrition Facts Label Decoder', canvasWidth / 2, 8);

  // Layout: label column on the left, panel column on the right.
  let topY = 36;
  let labelW = Math.min(232, canvasWidth * 0.48);
  let labelX = margin;
  let labelH = drawHeight - topY - 12;
  let panelX = labelX + labelW + 14;
  let panelW = canvasWidth - panelX - margin;

  drawLabel(labelX, topY, labelW, labelH);
  drawPanel(panelX, topY, panelW, labelH);

  cursor(overAnyRegion() ? HAND : ARROW);
  styleRevealButton();
}

// -------- Nutrition Facts label (left) --------
function drawLabel(x, y, w, h) {
  // Outer FDA-style black box
  fill('white');
  stroke('black');
  strokeWeight(2.5);
  rect(x, y, w, h);
  noStroke();

  let pad = 8;
  let ix = x + pad;
  let iw = w - pad * 2;
  let cy = y + 6;

  // Header
  fill('black');
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(22);
  text('Nutrition Facts', ix, cy);
  textStyle(NORMAL);
  cy += 28;

  hLine(x, cy, w, 1);
  cy += 4;

  // --- Serving size region ---
  let servTop = cy;
  textSize(11);
  fill('black');
  textAlign(LEFT, TOP);
  text('2.5 servings per container', ix, cy);
  cy += 15;
  textStyle(BOLD);
  textSize(13);
  text('Serving size', ix, cy);
  textAlign(RIGHT, TOP);
  text('1 cup', x + w - pad, cy);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  cy += 18;
  setRegionRect('serving', x, servTop, w, cy - servTop);

  hLine(x, cy, w, 8);
  cy += 10;

  // Amount per serving + Calories
  textSize(10);
  text('Amount per serving', ix, cy);
  cy += 12;
  textStyle(BOLD);
  textSize(20);
  text('Calories', ix, cy);
  textAlign(RIGHT, TOP);
  text('150', x + w - pad, cy);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  cy += 26;

  hLine(x, cy, w, 3);
  cy += 3;

  // "% Daily Value*" header (right aligned) — part of the DV region
  let dvTop = cy;
  textStyle(BOLD);
  textSize(10);
  textAlign(RIGHT, TOP);
  text('% Daily Value*', x + w - pad, cy + 1);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  cy += 14;
  hLine(x, cy, w, 1);
  cy += 3;

  // Nutrient rows: [name, amount, %dv, bold?]
  let rows = [
    ['Total Fat 8g', '', '10%', true],
    ['Sodium 460mg', '', '20%', true],
    ['Total Carbohydrate 34g', '', '12%', true],
    ['   Dietary Fiber 1g', '', '4%', false]
  ];
  textSize(11);
  for (let r of rows) {
    if (r[3]) textStyle(BOLD); else textStyle(NORMAL);
    fill('black');
    textAlign(LEFT, TOP);
    text(r[0], ix, cy);
    textStyle(BOLD);
    textAlign(RIGHT, TOP);
    text(r[2], x + w - pad, cy);
    textStyle(NORMAL);
    textAlign(LEFT, TOP);
    cy += 15;
    hLine(x, cy - 2, w, 1);
  }
  // Total Sugars line (indented, no %DV)
  textStyle(NORMAL);
  textAlign(LEFT, TOP);
  text('   Total Sugars 22g', ix, cy);
  cy += 15;
  setRegionRect('dv', x, dvTop, w, cy - dvTop);

  // --- Added Sugars region (its own highlightable strip) ---
  let sugTop = cy;
  hLine(x, cy - 2, w, 1);
  textStyle(BOLD);
  textAlign(LEFT, TOP);
  text('     Includes 18g Added Sugars', ix, cy);
  textAlign(RIGHT, TOP);
  text('36%', x + w - pad, cy);
  textAlign(LEFT, TOP);
  textStyle(NORMAL);
  cy += 17;
  setRegionRect('sugars', x, sugTop, w, cy - sugTop);

  hLine(x, cy, w, 6);
  cy += 8;

  // Footnote
  fill('dimgray');
  textSize(8.5);
  textAlign(LEFT, TOP);
  text('*%DV = how much a nutrient in a serving adds to a daily diet.',
    ix, cy, iw, 22);
  cy += 22;

  hLine(x, cy, w, 2);
  cy += 4;

  // --- Ingredient list region ---
  let ingTop = cy;
  fill('black');
  textStyle(BOLD);
  textSize(10);
  textAlign(LEFT, TOP);
  text('INGREDIENTS:', ix, cy);
  textStyle(NORMAL);
  cy += 12;
  textSize(9.5);
  text('Sugar, High Fructose Corn Syrup, Enriched ' +
    'Flour, Palm Oil, Cocoa, Salt.', ix, cy, iw, 40);
  cy += 30;
  setRegionRect('ingredients', x, ingTop, w, Math.min(cy - ingTop, y + h - ingTop - 2));

  // Draw highlight overlays + checkmarks on top of each region
  for (let i = 0; i < regions.length; i++) drawRegionOverlay(i);
}

function drawRegionOverlay(i) {
  let r = regions[i];
  if (!r.rect) return;
  let rr = r.rect;
  let hover = pointInRect(mouseX, mouseY, rr);
  let sel = (selected === i);

  if (sel || hover || r.checked) {
    push();
    noFill();
    if (sel) { stroke('darkorange'); strokeWeight(2.5); }
    else if (r.checked) { stroke('seagreen'); strokeWeight(2); }
    else { stroke('steelblue'); strokeWeight(1.5); }
    rect(rr.x + 1.5, rr.y, rr.w - 3, rr.h, 3);
    pop();
    // translucent tint
    push();
    noStroke();
    if (sel) fill(255, 200, 120, 55);
    else if (r.checked) fill(60, 179, 113, 40);
    else fill(70, 130, 180, 30);
    rect(rr.x + 1.5, rr.y, rr.w - 3, rr.h, 3);
    pop();
  }
  // checkmark badge in the top-right corner of a checked region
  if (r.checked) {
    push();
    noStroke();
    fill('seagreen');
    let bx = rr.x + rr.w - 15;
    let by = rr.y + 2;
    circle(bx + 6, by + 6, 14);
    fill('white');
    textAlign(CENTER, CENTER);
    textStyle(BOLD);
    textSize(11);
    text('✓', bx + 6, by + 5);
    textStyle(NORMAL);
    pop();
  }
}

function setRegionRect(key, x, y, w, h) {
  for (let r of regions) if (r.key === key) r.rect = { x: x, y: y, w: w, h: h };
}

function hLine(x, y, w, weight) {
  stroke('black');
  strokeWeight(weight);
  line(x, y, x + w, y);
  noStroke();
}

// -------- Info panel + checklist (right) --------
function drawPanel(x, y, w, h) {
  // Info box (top ~62%)
  let infoH = Math.floor(h * 0.60);
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(x, y, w, infoH, 8);
  noStroke();

  let pad = 12;
  let tx = x + pad;
  let tw = w - pad * 2;

  if (revealed) {
    fill('seagreen');
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    textSize(14);
    text('Full Picture', tx, y + 10);
    textStyle(NORMAL);
    fill('black');
    textSize(12);
    text('Per serving it looks modest, but the WHOLE bottle is 2.5 servings ' +
      '= 375 calories and 45g added sugars. Sodium is high (20% DV). Sugar and ' +
      'High Fructose Corn Syrup are the top two ingredients. Conclusion: this is ' +
      'a high added-sugar, high-sodium product - best as an occasional treat, ' +
      'not an everyday food.', tx, y + 32, tw, infoH - 42);
  } else if (selected >= 0) {
    let r = regions[selected];
    fill('darkorange');
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    textSize(14);
    text(r.label, tx, y + 10);
    textStyle(NORMAL);
    fill('black');
    textSize(12);
    text(r.info, tx, y + 32, tw, infoH - 42);
  } else {
    fill('navy');
    textAlign(LEFT, TOP);
    textStyle(BOLD);
    textSize(14);
    text('How to read this label', tx, y + 10);
    textStyle(NORMAL);
    fill('dimgray');
    textSize(12);
    text('Click each highlighted part of the label to learn what it really ' +
      'means. Work through all four, then press "Reveal Full Picture" to reach ' +
      'a conclusion about this product.', tx, y + 32, tw, infoH - 42);
  }

  // Decoding checklist (bottom)
  let chkY = y + infoH + 10;
  let chkH = h - infoH - 10;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(x, chkY, w, chkH, 8);
  noStroke();

  fill('navy');
  textAlign(LEFT, TOP);
  textStyle(BOLD);
  textSize(13);
  text('Decoding Checklist  (' + countChecked() + '/4)', x + pad, chkY + 8);
  textStyle(NORMAL);

  let itemY = chkY + 30;
  let lineH = Math.max(20, (chkH - 34) / 4);
  textSize(12);
  for (let i = 0; i < regions.length; i++) {
    let r = regions[i];
    let boxSize = 14;
    let bx = x + pad;
    let by = itemY + i * lineH;
    // checkbox
    stroke(r.checked ? 'seagreen' : 'gray');
    strokeWeight(1.5);
    fill(r.checked ? 'seagreen' : 'white');
    rect(bx, by, boxSize, boxSize, 3);
    noStroke();
    if (r.checked) {
      fill('white');
      textAlign(CENTER, CENTER);
      textStyle(BOLD);
      text('✓', bx + boxSize / 2, by + boxSize / 2 - 1);
      textStyle(NORMAL);
    }
    // label
    fill(r.checked ? 'seagreen' : 'black');
    textAlign(LEFT, CENTER);
    text(r.checkTitle, bx + boxSize + 8, by + boxSize / 2 - 1);
  }
  textAlign(LEFT, TOP);
}

// -------- Interaction --------
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function overAnyRegion() {
  for (let r of regions) if (r.rect && pointInRect(mouseX, mouseY, r.rect)) return true;
  return false;
}

function mousePressed() {
  // Only react to clicks inside the drawing area.
  if (mouseY > drawHeight) return;
  for (let i = 0; i < regions.length; i++) {
    let r = regions[i];
    if (r.rect && pointInRect(mouseX, mouseY, r.rect)) {
      selected = i;
      r.checked = true;
      revealed = false;
      return;
    }
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
