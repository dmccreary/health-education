// School Safety Practice Rubric Rater - MicroSim (rate, rank, and justify safety practices)
// CANVAS_HEIGHT: 530
// Grades 9-12, Evaluate (L5): students rate five named school-safety practices on four
// criteria, drag them into a priority order, justify the top choice, then compare to a
// research reference perspective. Covers only named policy practices; no event depicted.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let backButton;
let nextButton;
let justInput;
let compareButton;
let resetButton;

// Four evaluation criteria (all scored so 5 = most favorable)
let criteria = ['Feasible', 'Climate', 'Evidence', 'Low cost'];
let critFull = ['Feasibility to run', 'Effect on daily climate',
                'Evidence of effectiveness', 'Cost (5 = low cost)'];

// Five named school-safety practices with short neutral descriptions
let practices = [
  { name: 'Controlled entry',
    desc: 'One monitored main entrance; other doors kept secured.',
    ref: 'Effect varies widely and cost is high relative to benefit.' },
  { name: 'Threat assessment team',
    desc: 'Trained staff review and support students of concern.',
    ref: 'Strong, consistent evidence when run by a trained team.' },
  { name: 'Anonymous reporting',
    desc: 'An app or line for students to report worries privately.',
    ref: 'Helpful when reports are reviewed and acted on promptly.' },
  { name: 'Staff relationships',
    desc: 'Every student is known and checked in on by an adult.',
    ref: 'Among the strongest and lowest-cost protective factors.' },
  { name: 'Mental health support',
    desc: 'Counselors and services are available and easy to reach.',
    ref: 'Consistently supports student wellbeing and early help.' }
];

// ratings[practiceIndex][criterionIndex] : 0 = unrated, 1-5 = score
let ratings = [
  [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
];

let order = [0, 1, 2, 3, 4]; // priority order for the rank stage (indexes into practices)
let stage = 0;               // 0 = Rate, 1 = Rank, 2 = Compare
let stageNames = ['1. Rate', '2. Rank', '3. Compare'];
let showCompare = false;

let cellRects = [];  // clickable rating cells (stage 0)
let rowRects = [];   // draggable rows (stage 1)
let dragIndex = -1;  // which order-slot is being dragged
let dragY = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  backButton = createButton('‹ Back');
  backButton.parent(document.querySelector('main'));
  backButton.mousePressed(() => { stage = max(0, stage - 1); });

  nextButton = createButton('Next ›');
  nextButton.parent(document.querySelector('main'));
  nextButton.mousePressed(() => { stage = min(2, stage + 1); });

  justInput = createInput('');
  justInput.parent(document.querySelector('main'));
  justInput.attribute('placeholder', 'Why is your #1 practice the top priority?');

  compareButton = createButton('Compare to Research Summary');
  compareButton.parent(document.querySelector('main'));
  compareButton.mousePressed(() => { stage = 2; showCompare = true; });

  resetButton = createButton('Reset');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(reset);

  positionControls();
  describe('A rubric tool with five named school-safety practices scored 1 to 5 on four ' +
    'criteria, a drag-to-reorder priority list with a justification field, and a research ' +
    'reference perspective to compare against. No event or method is depicted.', LABEL);
}

function positionControls() {
  // Row 1 of controls: stage navigation + reset
  backButton.position(margin, drawHeight + 10);
  nextButton.position(margin + 74, drawHeight + 10);
  resetButton.position(canvasWidth - margin - 52, drawHeight + 10);
  // Justification input fills the middle of row 1
  justInput.position(margin + 150, drawHeight + 11);
  let inputW = canvasWidth - (margin + 150) - (margin + 60);
  justInput.size(max(90, inputW));
  // Row 2: compare button
  compareButton.position(margin, drawHeight + 36);
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
  textStyle(BOLD);
  textSize(17);
  text('School Safety Practice Rubric Rater', canvasWidth / 2, 6);
  textStyle(NORMAL);

  drawStageTabs();

  if (stage === 0) drawRateStage();
  else if (stage === 1) drawRankStage();
  else drawCompareStage();
}

function drawStageTabs() {
  let y = 30;
  let tw = (canvasWidth - margin * 2) / 3;
  for (let i = 0; i < 3; i++) {
    let x = margin + i * tw;
    let on = stage === i;
    stroke('white'); strokeWeight(1);
    fill(on ? 'steelblue' : 'gainsboro');
    rect(x, y, tw, 22, 4);
    noStroke();
    fill(on ? 'white' : 'dimgray');
    textAlign(CENTER, CENTER); textSize(12);
    text(stageNames[i], x, y, tw, 22);
  }
}

// ---------- Stage 0: Rate ----------
function drawRateStage() {
  cellRects = [];
  let top = 60;
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11);
  text('Tap a cell to score each practice 1-5 on each criterion (5 = most favorable). Cost: 5 = low cost.',
    margin, top, canvasWidth - margin * 2, 30);

  let gridTop = top + 30;
  let labelW = floor((canvasWidth - margin * 2) * 0.42);
  let critAreaW = canvasWidth - margin * 2 - labelW;
  let cellW = critAreaW / 4;
  let headH = 22;
  let rowH = (drawHeight - gridTop - headH - 10) / 5;

  // Column headers
  textAlign(CENTER, CENTER); textSize(11);
  for (let c = 0; c < 4; c++) {
    let cx = margin + labelW + c * cellW;
    noStroke(); fill('steelblue');
    rect(cx + 1, gridTop, cellW - 2, headH, 3);
    fill('white');
    text(criteria[c], cx, gridTop, cellW, headH);
  }

  // Rows
  for (let p = 0; p < 5; p++) {
    let ry = gridTop + headH + p * rowH;
    // Label cell: name + description
    noStroke(); fill(p % 2 === 0 ? 'white' : 'aliceblue');
    stroke('gainsboro'); strokeWeight(1);
    rect(margin, ry, labelW, rowH);
    noStroke();
    fill('navy'); textAlign(LEFT, TOP); textStyle(BOLD); textSize(12);
    text(practices[p].name, margin + 6, ry + 5, labelW - 10, 16);
    textStyle(NORMAL);
    fill('dimgray'); textSize(9.5);
    text(practices[p].desc, margin + 6, ry + 21, labelW - 10, rowH - 22);

    // Criterion cells
    for (let c = 0; c < 4; c++) {
      let cx = margin + labelW + c * cellW;
      let r = { x: cx, y: ry, w: cellW, h: rowH, p: p, c: c };
      cellRects.push(r);
      let val = ratings[p][c];
      stroke('gainsboro'); strokeWeight(1);
      fill(val === 0 ? 'white' : scoreColor(val));
      rect(cx, ry, cellW, rowH);
      noStroke();
      textAlign(CENTER, CENTER);
      if (val === 0) {
        fill('silver'); textSize(13); text('–', cx, ry, cellW, rowH);
      } else {
        fill(val >= 3 ? 'white' : 'navy'); textStyle(BOLD); textSize(15);
        text(val, cx, ry, cellW, rowH);
        textStyle(NORMAL);
      }
    }
  }
  cursor(overAnyCell() ? HAND : ARROW);
}

function scoreColor(v) {
  if (v <= 1) return 'indianred';
  if (v === 2) return 'goldenrod';
  if (v === 3) return 'darkseagreen';
  if (v === 4) return 'mediumseagreen';
  return 'seagreen';
}

// ---------- Stage 1: Rank ----------
function drawRankStage() {
  rowRects = [];
  let top = 60;
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11);
  text('Drag the practices into your priority order (top = highest priority). Then justify your #1 below.',
    margin, top, canvasWidth - margin * 2, 30);

  let listTop = top + 32;
  let rowH = 58;
  let listW = canvasWidth - margin * 2;

  for (let slot = 0; slot < 5; slot++) {
    let pIdx = order[slot];
    let ry = listTop + slot * rowH;
    let isDragged = dragIndex === slot;
    let drawYpos = isDragged ? dragY - rowH / 2 : ry;
    if (!isDragged) rowRects.push({ x: margin, y: ry, w: listW, h: rowH - 6, slot: slot });

    push();
    if (isDragged) { stroke('steelblue'); strokeWeight(2); } else { stroke('silver'); strokeWeight(1); }
    fill(isDragged ? 'lightyellow' : 'white');
    rect(margin, drawYpos, listW, rowH - 6, 6);
    // rank badge
    noStroke(); fill('steelblue');
    circle(margin + 22, drawYpos + (rowH - 6) / 2, 30);
    fill('white'); textAlign(CENTER, CENTER); textStyle(BOLD); textSize(16);
    text(slot + 1, margin + 22, drawYpos + (rowH - 6) / 2);
    textStyle(NORMAL);
    // name + desc
    fill('navy'); textAlign(LEFT, TOP); textStyle(BOLD); textSize(13);
    text(practices[pIdx].name, margin + 46, drawYpos + 8, listW - 90, 18);
    textStyle(NORMAL);
    fill('dimgray'); textSize(10);
    text(practices[pIdx].desc, margin + 46, drawYpos + 26, listW - 90, rowH - 32);
    // total score chip
    let tot = ratings[pIdx].reduce((a, b) => a + b, 0);
    let allRated = ratings[pIdx].every(v => v > 0);
    fill('gainsboro');
    rect(margin + listW - 40, drawYpos + 8, 34, 18, 4);
    fill('dimgray'); textAlign(CENTER, CENTER); textSize(10);
    text(allRated ? tot + '/20' : '–', margin + listW - 23, drawYpos + 17);
    // grip dots
    fill('silver'); noStroke();
    for (let g = 0; g < 3; g++) circle(margin + listW - 20, drawYpos + rowH - 22 + g * 5, 2.5);
    pop();
  }
  cursor(overAnyRow() || dragIndex >= 0 ? HAND : ARROW);
}

// ---------- Stage 2: Compare ----------
function drawCompareStage() {
  let top = 60;
  // Left: your priority order
  let colW = (canvasWidth - margin * 3) / 2;
  let leftX = margin;
  let rightX = margin * 2 + colW;

  noStroke(); fill('navy'); textAlign(LEFT, TOP); textStyle(BOLD); textSize(12);
  text('Your priority order', leftX, top);
  textStyle(NORMAL);
  let rowH = 34;
  let listTop = top + 20;
  for (let slot = 0; slot < 5; slot++) {
    let pIdx = order[slot];
    let ry = listTop + slot * rowH;
    stroke('silver'); strokeWeight(1); fill('white');
    rect(leftX, ry, colW, rowH - 5, 4);
    noStroke(); fill('steelblue'); textAlign(LEFT, CENTER); textStyle(BOLD); textSize(12);
    text((slot + 1) + '.', leftX + 6, ry + (rowH - 5) / 2);
    fill('navy'); textStyle(NORMAL); textSize(10.5);
    text(practices[pIdx].name, leftX + 22, ry + 4, colW - 26, rowH - 8);
  }

  // Right: research reference perspective
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textStyle(BOLD); textSize(12);
  text('One research perspective', rightX, top);
  textStyle(NORMAL);
  // fixed reference order: strongest evidence first
  let refOrder = [3, 1, 4, 2, 0];
  for (let slot = 0; slot < 5; slot++) {
    let pIdx = refOrder[slot];
    let ry = listTop + slot * rowH;
    stroke('silver'); strokeWeight(1); fill('honeydew');
    rect(rightX, ry, colW, rowH - 5, 4);
    noStroke(); fill('seagreen'); textAlign(LEFT, CENTER); textStyle(BOLD); textSize(12);
    text((slot + 1) + '.', rightX + 6, ry + (rowH - 5) / 2);
    fill('navy'); textStyle(NORMAL); textSize(10.5);
    text(practices[pIdx].name, rightX + 22, ry + 4, colW - 26, rowH - 8);
  }

  // Summary note across the bottom
  let noteY = listTop + 5 * rowH + 6;
  stroke('gainsboro'); strokeWeight(1); fill('white');
  rect(margin, noteY, canvasWidth - margin * 2, drawHeight - noteY - 8, 6);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(10.5);
  let note = 'Research most consistently finds staff relationships and threat assessment ' +
    'teams effective; controlled entry is more variable relative to its cost. This is one ' +
    'expert perspective to weigh against your own reasoning — not a single correct answer.';
  text(note, margin + 8, noteY + 6, canvasWidth - margin * 2 - 16, drawHeight - noteY - 20);
}

// ---------- interaction helpers ----------
function overAnyCell() { for (let r of cellRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function overAnyRow() { for (let r of rowRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (stage === 0) {
    for (let r of cellRects) {
      if (pointInRect(mouseX, mouseY, r)) {
        ratings[r.p][r.c] = (ratings[r.p][r.c] % 5) + 1; // cycle 1..5 then back to 1
        return;
      }
    }
  } else if (stage === 1) {
    for (let r of rowRects) {
      if (pointInRect(mouseX, mouseY, r)) { dragIndex = r.slot; dragY = mouseY; return; }
    }
  }
}

function mouseDragged() {
  if (stage === 1 && dragIndex >= 0) dragY = mouseY;
}

function mouseReleased() {
  if (stage === 1 && dragIndex >= 0) {
    let listTop = 60 + 32;
    let rowH = 58;
    let target = floor((dragY - listTop) / rowH);
    target = constrain(target, 0, 4);
    if (target !== dragIndex) {
      let moved = order.splice(dragIndex, 1)[0];
      order.splice(target, 0, moved);
    }
    dragIndex = -1;
  }
}

function reset() {
  ratings = [
    [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
  ];
  order = [0, 1, 2, 3, 4];
  stage = 0;
  showCompare = false;
  dragIndex = -1;
  justInput.value('');
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
