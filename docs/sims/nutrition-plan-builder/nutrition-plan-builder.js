// Nutrition Plan Builder - MicroSim (one-day meal design + feedback)
// CANVAS_HEIGHT: 632
// Grade 9-12, Create (L6): students assemble foods from a multi-cuisine food bank
// into five daily slots, watch calorie/macro totals update live, then evaluate the plan
// against a target range and revise.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 500;
let controlHeight = 132;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let evaluateButton;
let loadButton;
let clearButton;
let categorySelect;

// Target calorie range (default; "Load My Needs Assessment" swaps in a profile-based target)
let targetLo = 2200;
let targetHi = 2400;
let targetLoaded = false;

// Food bank: 30 items across categories and cuisines.
// cat: grain, protein, dairy, produce, combo
// kcal, c(arb g), p(rotein g), f(at g), fiber(g), cal(cium % DV), iron(% DV)
let foods = [
  // Grains
  { n: 'Oatmeal', cat: 'grain', cuisine: 'Global', kcal: 160, c: 27, p: 6, f: 3, fiber: 4, calc: 2, iron: 10 },
  { n: 'Brown rice', cat: 'grain', cuisine: 'Asian', kcal: 220, c: 46, p: 5, f: 2, fiber: 4, calc: 2, iron: 6 },
  { n: 'Whole-grain roti', cat: 'grain', cuisine: 'S. Asian', kcal: 120, c: 22, p: 4, f: 2, fiber: 3, calc: 2, iron: 8 },
  { n: 'Corn tortilla', cat: 'grain', cuisine: 'Latin', kcal: 100, c: 21, p: 3, f: 1, fiber: 3, calc: 4, iron: 4 },
  { n: 'Quinoa', cat: 'grain', cuisine: 'Andean', kcal: 220, c: 39, p: 8, f: 4, fiber: 5, calc: 3, iron: 15 },
  { n: 'Injera', cat: 'grain', cuisine: 'E. African', kcal: 150, c: 32, p: 4, f: 1, fiber: 3, calc: 2, iron: 20 },
  // Protein
  { n: 'Grilled chicken', cat: 'protein', cuisine: 'Global', kcal: 200, c: 0, p: 31, f: 8, fiber: 0, calc: 1, iron: 6 },
  { n: 'Baked salmon', cat: 'protein', cuisine: 'Global', kcal: 240, c: 0, p: 25, f: 15, fiber: 0, calc: 2, iron: 5 },
  { n: 'Black beans', cat: 'protein', cuisine: 'Latin', kcal: 180, c: 30, p: 12, f: 1, fiber: 9, calc: 4, iron: 20 },
  { n: 'Lentil dal', cat: 'protein', cuisine: 'S. Asian', kcal: 190, c: 26, p: 13, f: 4, fiber: 8, calc: 4, iron: 25 },
  { n: 'Tofu stir-fry', cat: 'protein', cuisine: 'Asian', kcal: 200, c: 12, p: 16, f: 11, fiber: 3, calc: 25, iron: 15 },
  { n: 'Hummus', cat: 'protein', cuisine: 'Mediterranean', kcal: 170, c: 15, p: 6, f: 10, fiber: 5, calc: 4, iron: 10 },
  { n: 'Eggs', cat: 'protein', cuisine: 'Global', kcal: 150, c: 1, p: 13, f: 10, fiber: 0, calc: 5, iron: 8 },
  // Dairy / alternatives
  { n: 'Greek yogurt', cat: 'dairy', cuisine: 'Mediterranean', kcal: 130, c: 9, p: 15, f: 4, fiber: 0, calc: 20, iron: 1 },
  { n: 'Milk (cup)', cat: 'dairy', cuisine: 'Global', kcal: 120, c: 12, p: 8, f: 5, fiber: 0, calc: 30, iron: 0 },
  { n: 'Paneer', cat: 'dairy', cuisine: 'S. Asian', kcal: 210, c: 4, p: 14, f: 16, fiber: 0, calc: 25, iron: 2 },
  { n: 'Soy milk', cat: 'dairy', cuisine: 'Asian', kcal: 100, c: 8, p: 7, f: 4, fiber: 1, calc: 30, iron: 6 },
  { n: 'Cheese slice', cat: 'dairy', cuisine: 'Global', kcal: 110, c: 1, p: 7, f: 9, fiber: 0, calc: 20, iron: 0 },
  // Produce (fruits / vegetables)
  { n: 'Apple', cat: 'produce', cuisine: 'Global', kcal: 95, c: 25, p: 0, f: 0, fiber: 4, calc: 1, iron: 1 },
  { n: 'Banana', cat: 'produce', cuisine: 'Global', kcal: 105, c: 27, p: 1, f: 0, fiber: 3, calc: 1, iron: 2 },
  { n: 'Mixed berries', cat: 'produce', cuisine: 'Global', kcal: 70, c: 17, p: 1, f: 0, fiber: 6, calc: 2, iron: 4 },
  { n: 'Spinach saute', cat: 'produce', cuisine: 'Global', kcal: 60, c: 7, p: 3, f: 3, fiber: 4, calc: 10, iron: 20 },
  { n: 'Roasted veggies', cat: 'produce', cuisine: 'Mediterranean', kcal: 110, c: 18, p: 3, f: 4, fiber: 6, calc: 6, iron: 10 },
  { n: 'Kimchi', cat: 'produce', cuisine: 'Korean', kcal: 40, c: 8, p: 2, f: 0, fiber: 3, calc: 5, iron: 8 },
  { n: 'Guacamole', cat: 'produce', cuisine: 'Latin', kcal: 150, c: 9, p: 2, f: 13, fiber: 7, calc: 2, iron: 4 },
  // Combination dishes
  { n: 'Chicken burrito', cat: 'combo', cuisine: 'Latin', kcal: 520, c: 62, p: 30, f: 16, fiber: 8, calc: 15, iron: 20 },
  { n: 'Veg fried rice', cat: 'combo', cuisine: 'Asian', kcal: 400, c: 58, p: 10, f: 13, fiber: 4, calc: 6, iron: 12 },
  { n: 'Chicken tikka bowl', cat: 'combo', cuisine: 'S. Asian', kcal: 480, c: 45, p: 34, f: 16, fiber: 6, calc: 12, iron: 18 },
  { n: 'Greek salad wrap', cat: 'combo', cuisine: 'Mediterranean', kcal: 420, c: 40, p: 18, f: 20, fiber: 7, calc: 20, iron: 12 },
  { n: 'Bibimbap', cat: 'combo', cuisine: 'Korean', kcal: 490, c: 60, p: 22, f: 15, fiber: 6, calc: 10, iron: 22 }
];

let catColors = {
  grain: 'goldenrod', protein: 'indianred', dairy: 'steelblue',
  produce: 'seagreen', combo: 'mediumpurple'
};

let slotNames = ['Breakfast', 'Lunch', 'Dinner', 'Snack 1', 'Snack 2'];
let slots = [-1, -1, -1, -1, -1];   // food index in each slot, -1 = empty
let activeSlot = 0;                  // which slot receives the next tapped card
let currentFilter = 'All';

let feedback = [];                  // array of {text,color} lines shown after Evaluate
let slotRects = [];
let cardRects = [];

// Scroll for the food bank list
let scrollY = 0;
let contentH = 0;
let listTop = 0;
let listBottom = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  evaluateButton = createButton('Evaluate My Plan');
  evaluateButton.mousePressed(evaluatePlan);
  evaluateButton.parent(document.querySelector('main'));

  loadButton = createButton('Load My Needs Assessment');
  loadButton.mousePressed(loadNeeds);
  loadButton.parent(document.querySelector('main'));

  clearButton = createButton('Clear Plan');
  clearButton.mousePressed(clearPlan);
  clearButton.parent(document.querySelector('main'));

  categorySelect = createSelect();
  categorySelect.parent(document.querySelector('main'));
  categorySelect.option('All');
  categorySelect.option('Grains');
  categorySelect.option('Protein');
  categorySelect.option('Dairy/Alt');
  categorySelect.option('Fruits/Veg');
  categorySelect.option('Combo dishes');
  categorySelect.changed(onFilterChange);

  positionControls();
  describe('A one-day nutrition plan builder. Five meal slots sit at the top; a filterable ' +
    'food bank of dishes from many cuisines sits below. Tapping a food card places it in the ' +
    'selected slot while a totals bar tracks calories against a target range. An Evaluate ' +
    'button gives written feedback on calorie fit, macronutrient balance, and micronutrient gaps.', LABEL);
}

function positionControls() {
  let y1 = drawHeight + 10;
  let y2 = drawHeight + 46;
  let y3 = drawHeight + 82;
  evaluateButton.position(margin, y1);
  clearButton.position(margin + 150, y1);
  loadButton.position(margin, y2);
  // filter label is drawn on-canvas; the select sits on the third row
  categorySelect.position(margin + 130, y3);
}

function onFilterChange() {
  let v = categorySelect.value();
  let map = {
    'All': 'All', 'Grains': 'grain', 'Protein': 'protein',
    'Dairy/Alt': 'dairy', 'Fruits/Veg': 'produce', 'Combo dishes': 'combo'
  };
  currentFilter = map[v] || 'All';
  scrollY = 0;
}

function loadNeeds() {
  // Simulates pulling a target from a prior needs-assessment MicroSim.
  targetLo = 2000;
  targetHi = 2200;
  targetLoaded = true;
  feedback = [];
}

function clearPlan() {
  slots = [-1, -1, -1, -1, -1];
  feedback = [];
  activeSlot = 0;
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
  text('Nutrition Plan Builder', canvasWidth / 2, 8);

  drawSlots();          // sets bottom of slot area
  let panelBottom = drawTotals();
  drawFoodBank(panelBottom);

  // On-canvas label for the filter dropdown in the control strip
  noStroke();
  fill('navy');
  textAlign(LEFT, CENTER);
  textSize(13);
  text('Filter food bank:', margin, drawHeight + 92);
}

// ---- Plan slots -----------------------------------------------------------
function drawSlots() {
  slotRects = [];
  let top = 36;
  let gap = 6;
  let sw = (canvasWidth - margin * 2 - gap * 4) / 5;
  let sh = 74;
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Your day (tap a slot, then tap a food):', margin, top - 2);
  top += 16;

  for (let i = 0; i < 5; i++) {
    let x = margin + i * (sw + gap);
    let r = { x: x, y: top, w: sw, h: sh, i: i };
    slotRects.push(r);
    let active = activeSlot === i;
    let hover = pointInRect(mouseX, mouseY, r);
    stroke(active ? 'navy' : 'silver');
    strokeWeight(active ? 3 : 1);
    fill(active ? 'lightyellow' : (hover ? 'honeydew' : 'white'));
    rect(x, top, sw, sh, 6);

    noStroke();
    fill('dimgray');
    textAlign(CENTER, TOP);
    textSize(10);
    text(slotNames[i], x + 2, top + 4, sw - 4, 14);

    if (slots[i] >= 0) {
      let fd = foods[slots[i]];
      // color chip
      fill(catColors[fd.cat]);
      rect(x + 6, top + 20, sw - 12, 5, 2);
      noStroke();
      fill('black');
      textAlign(CENTER, TOP);
      textSize(9);
      text(fd.n, x + 3, top + 28, sw - 6, 34);
      fill('gray');
      textSize(8);
      text(fd.kcal + ' kcal', x + 2, top + sh - 13, sw - 4, 12);
    } else {
      noStroke();
      fill('lightgray');
      textAlign(CENTER, CENTER);
      textSize(20);
      text('+', x, top, sw, sh);
    }
  }
}

// ---- Totals panel ---------------------------------------------------------
function computeTotals() {
  let t = { kcal: 0, c: 0, p: 0, f: 0, fiber: 0, calc: 0, iron: 0, count: 0 };
  for (let i = 0; i < 5; i++) {
    if (slots[i] >= 0) {
      let fd = foods[slots[i]];
      t.kcal += fd.kcal; t.c += fd.c; t.p += fd.p; t.f += fd.f;
      t.fiber += fd.fiber; t.calc += fd.calc; t.iron += fd.iron; t.count++;
    }
  }
  return t;
}

function drawTotals() {
  let t = computeTotals();
  let top = 142;
  let h = 96;
  let x = margin;
  let w = canvasWidth - margin * 2;
  stroke('silver');
  strokeWeight(1);
  fill('white');
  rect(x, top, w, h, 8);
  noStroke();

  fill('navy');
  textAlign(LEFT, TOP);
  textSize(13);
  let tgt = targetLoaded ? 'Loaded target' : 'Default target';
  text('Daily totals  (' + tgt + ': ' + targetLo + '-' + targetHi + ' kcal)', x + 10, top + 8);

  // Calorie bar: scale so target hi sits at ~78% of bar width
  let barX = x + 10, barY = top + 30, barW = w - 20, barH = 16;
  let scaleMax = targetHi * 1.3;
  fill('gainsboro');
  rect(barX, barY, barW, barH, 4);
  // target range band
  let loX = barX + (targetLo / scaleMax) * barW;
  let hiX = barX + (targetHi / scaleMax) * barW;
  fill('honeydew');
  stroke('seagreen');
  strokeWeight(1);
  rect(loX, barY, hiX - loX, barH, 0);
  noStroke();
  // filled amount
  let fillW = Math.min(t.kcal / scaleMax, 1) * barW;
  let inRange = t.kcal >= targetLo && t.kcal <= targetHi;
  fill(inRange ? 'seagreen' : (t.kcal > targetHi ? 'indianred' : 'goldenrod'));
  rect(barX, barY, fillW, barH, 4);
  // kcal label
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(12);
  text(t.kcal + ' kcal', barX + 4, barY + barH / 2);
  fill('seagreen');
  textAlign(CENTER, TOP);
  textSize(9);
  text('target', (loX + hiX) / 2, barY + barH + 1, 60, 12);

  // Macro line
  let my = barY + barH + 16;
  noStroke();
  textAlign(LEFT, TOP);
  textSize(12);
  fill(catColors.grain);
  text('Carb ' + t.c + 'g', x + 10, my);
  fill(catColors.protein);
  text('Protein ' + t.p + 'g', x + 95, my);
  fill('darkgoldenrod');
  text('Fat ' + t.f + 'g', x + 195, my);
  fill('seagreen');
  text('Fiber ' + t.fiber + 'g', x + 270, my);

  return top + h;   // y where the food bank should begin
}

// ---- Food bank ------------------------------------------------------------
function drawFoodBank(panelBottom) {
  cardRects = [];
  let headerY = panelBottom + 8;
  noStroke();
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(13);
  let filtLabel = currentFilter === 'All' ? 'All foods' : catName(currentFilter);
  text('Food bank - ' + filtLabel + ' (tap to add to ' + slotNames[activeSlot] + ')', margin, headerY);

  listTop = headerY + 20;
  listBottom = drawHeight - 8;
  let listH = listBottom - listTop;

  // Which foods are visible
  let vis = [];
  for (let i = 0; i < foods.length; i++) {
    if (currentFilter === 'All' || foods[i].cat === currentFilter) vis.push(i);
  }

  // Grid: 2 columns
  let cols = canvasWidth > 520 ? 3 : 2;
  let gap = 6;
  let cw = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols;
  let ch = 44;
  let rows = Math.ceil(vis.length / cols);
  contentH = rows * (ch + gap);

  // Clamp scroll
  let maxScroll = Math.max(0, contentH - listH);
  scrollY = Math.max(0, Math.min(scrollY, maxScroll));

  // Clip region for the scrolling list
  push();
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(margin, listTop, canvasWidth - margin * 2, listH);
  drawingContext.clip();

  for (let k = 0; k < vis.length; k++) {
    let idx = vis[k];
    let col = k % cols;
    let row = Math.floor(k / cols);
    let x = margin + col * (cw + gap);
    let y = listTop + row * (ch + gap) - scrollY;
    // skip fully off-screen cards
    if (y + ch < listTop || y > listBottom) {
      cardRects.push({ x: x, y: y, w: cw, h: ch, i: idx, visible: false });
      continue;
    }
    let fd = foods[idx];
    let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: cw, h: ch }) &&
      mouseY >= listTop && mouseY <= listBottom;
    stroke('gray');
    strokeWeight(1);
    fill(hover ? 'lightyellow' : 'white');
    rect(x, y, cw, ch, 5);
    // category color stripe
    noStroke();
    fill(catColors[fd.cat]);
    rect(x, y, 5, ch, 2, 0, 0, 2);
    // name
    fill('black');
    textAlign(LEFT, TOP);
    textSize(11);
    text(fd.n, x + 10, y + 4, cw - 14, 16);
    // cuisine + kcal
    fill('gray');
    textSize(9);
    text(fd.cuisine, x + 10, y + 22, cw - 14, 12);
    textAlign(RIGHT, TOP);
    fill('dimgray');
    textSize(10);
    text(fd.kcal + ' kcal', x + 10, y + 30, cw - 14, 12);
    cardRects.push({ x: x, y: y, w: cw, h: ch, i: idx, visible: true });
  }
  drawingContext.restore();
  pop();

  // Scroll hint / scrollbar
  if (contentH > listH) {
    let trackX = canvasWidth - margin + 4;
    let barH = (listH / contentH) * listH;
    let barY = listTop + (scrollY / (contentH - listH)) * (listH - barH);
    noStroke();
    fill('gainsboro');
    rect(canvasWidth - 6, listTop, 3, listH, 2);
    fill('darkgray');
    rect(canvasWidth - 6, barY, 3, barH, 2);
  }

  // Feedback overlay (drawn over food bank when Evaluate has run)
  if (feedback.length > 0) {
    let fx = margin;
    let fbTop = listTop;
    let fbH = listBottom - listTop;
    stroke('navy');
    strokeWeight(1.5);
    fill(255, 255, 255, 245);
    rect(fx, fbTop, canvasWidth - margin * 2, fbH, 8);
    noStroke();
    fill('navy');
    textAlign(LEFT, TOP);
    textSize(13);
    text('Plan Evaluation', fx + 10, fbTop + 8);
    let ly = fbTop + 30;
    textSize(11.5);
    for (let line of feedback) {
      fill(line.color);
      let used = text_wrapped(line.text, fx + 12, ly, canvasWidth - margin * 2 - 24);
      ly += used + 6;
    }
    fill('gray');
    textSize(10);
    textAlign(LEFT, TOP);
    text('(Tap any food or slot to keep editing.)', fx + 12, listBottom - 18);
  }

  cursor(overAnyCard() || overAnySlot() ? HAND : ARROW);
}

// Draw wrapped text; return the pixel height used.
function text_wrapped(str, x, y, w) {
  textAlign(LEFT, TOP);
  let words = str.split(' ');
  let line = '';
  let lh = 15;
  let lines = 1;
  for (let i = 0; i < words.length; i++) {
    let test = line.length ? line + ' ' + words[i] : words[i];
    if (textWidth(test) > w && line.length) {
      text(line, x, y + (lines - 1) * lh);
      line = words[i];
      lines++;
    } else {
      line = test;
    }
  }
  text(line, x, y + (lines - 1) * lh);
  return lines * lh;
}

function catName(cat) {
  return { grain: 'Grains', protein: 'Protein', dairy: 'Dairy/Alt', produce: 'Fruits/Veg', combo: 'Combo dishes' }[cat] || cat;
}

// ---- Hit testing ----------------------------------------------------------
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}
function overAnyCard() {
  if (mouseY < listTop || mouseY > listBottom) return false;
  for (let c of cardRects) if (c.visible && pointInRect(mouseX, mouseY, c)) return true;
  return false;
}
function overAnySlot() {
  for (let s of slotRects) if (pointInRect(mouseX, mouseY, s)) return true;
  return false;
}

function mousePressed() {
  // Ignore clicks in the control strip (native controls handle those)
  if (mouseY > drawHeight) return;

  // If evaluation overlay is showing, any tap in the food area first dismisses it,
  // then also acts on the tapped element.
  // Slots first
  for (let s of slotRects) {
    if (pointInRect(mouseX, mouseY, s)) {
      if (slots[s.i] >= 0 && activeSlot === s.i) {
        slots[s.i] = -1;        // tapping the active filled slot clears it
      } else {
        activeSlot = s.i;       // select this slot
      }
      feedback = [];
      return;
    }
  }
  // Food cards (only when not covered by feedback overlay)
  if (feedback.length === 0 && mouseY >= listTop && mouseY <= listBottom) {
    for (let c of cardRects) {
      if (c.visible && pointInRect(mouseX, mouseY, c)) {
        slots[activeSlot] = c.i;
        // auto-advance to next empty slot for smoother building
        advanceActive();
        return;
      }
    }
  }
  // Tap on feedback overlay dismisses it
  if (feedback.length > 0 && mouseY >= listTop && mouseY <= listBottom) {
    feedback = [];
    return;
  }
}

function advanceActive() {
  for (let step = 1; step <= 5; step++) {
    let next = (activeSlot + step) % 5;
    if (slots[next] < 0) { activeSlot = next; return; }
  }
  // all full: leave active where it is
}

function mouseWheel(event) {
  if (mouseX >= 0 && mouseX <= canvasWidth && mouseY >= listTop && mouseY <= listBottom) {
    scrollY += event.delta;
    return false; // prevent page scroll
  }
}

// ---- Evaluation -----------------------------------------------------------
function evaluatePlan() {
  let t = computeTotals();
  feedback = [];
  if (t.count === 0) {
    feedback.push({ text: 'Your plan is empty. Tap a slot, then tap foods from the bank to build a full day before evaluating.', color: 'darkgoldenrod' });
    return;
  }

  // Calories
  if (t.kcal >= targetLo && t.kcal <= targetHi) {
    feedback.push({ text: 'Calories: ' + t.kcal + ' kcal is within your ' + targetLo + '-' + targetHi + ' target. Nicely matched.', color: 'seagreen' });
  } else if (t.kcal < targetLo) {
    feedback.push({ text: 'Calories: ' + t.kcal + ' kcal is below your ' + targetLo + '-' + targetHi + ' target. Add or swap in a more energy-dense food.', color: 'darkgoldenrod' });
  } else {
    feedback.push({ text: 'Calories: ' + t.kcal + ' kcal is above your ' + targetLo + '-' + targetHi + ' target. Swap a combo dish for a lighter option.', color: 'indianred' });
  }

  // Macronutrient balance (% of calories). Carb 4, protein 4, fat 9 kcal/g.
  let cKcal = t.c * 4, pKcal = t.p * 4, fKcal = t.f * 9;
  let mTot = Math.max(1, cKcal + pKcal + fKcal);
  let cPct = Math.round(cKcal / mTot * 100);
  let pPct = Math.round(pKcal / mTot * 100);
  let fPct = Math.round(fKcal / mTot * 100);
  let macroMsg = 'Macros: ' + cPct + '% carb / ' + pPct + '% protein / ' + fPct + '% fat. ';
  // Reasonable ranges: carb 45-65, protein 10-35, fat 20-35
  let issues = [];
  if (cPct < 45) issues.push('carbs are low'); else if (cPct > 65) issues.push('carbs are high');
  if (pPct < 10) issues.push('protein is low'); else if (pPct > 35) issues.push('protein is very high');
  if (fPct < 20) issues.push('fat is low'); else if (fPct > 35) issues.push('fat is high');
  if (issues.length === 0) {
    feedback.push({ text: macroMsg + 'That balance is in a healthy range.', color: 'seagreen' });
  } else {
    feedback.push({ text: macroMsg + 'Consider adjusting: ' + issues.join(', ') + '.', color: 'darkgoldenrod' });
  }

  // Micronutrient gaps
  let gaps = [];
  if (t.fiber < 25) gaps.push('fiber (' + t.fiber + 'g, aim ~25-30g)');
  if (t.calc < 100) gaps.push('calcium (' + t.calc + '% DV)');
  if (t.iron < 100) gaps.push('iron (' + t.iron + '% DV)');
  if (gaps.length === 0) {
    feedback.push({ text: 'Micronutrients: fiber, calcium, and iron all look well covered today.', color: 'seagreen' });
  } else {
    feedback.push({ text: 'Micronutrient gaps: ' + gaps.join('; ') + '. Beans, dairy/alternatives, and leafy greens help fill these.', color: 'steelblue' });
  }

  feedback.push({ text: 'Swap cards and press Evaluate again to improve your design.', color: 'gray' });
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
