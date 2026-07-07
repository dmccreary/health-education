// Personal Nutrition Needs Assessment Tool - MicroSim (calculator)
// CANVAS_HEIGHT: 636
// Grades 9-12, Apply (L3): students enter age, sex, height, weight, and activity
// level, then Calculate to see an estimated daily calorie range, a recommended
// macronutrient gram range shown as a stacked bar, and flagged micronutrients.
// Educational estimate only, not medical advice. Width-responsive p5.js MicroSim.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 206;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;
let sliderLeftMargin = 150;

// Native p5.js controls
let ageSlider, heightSlider, weightSlider;
let sexSelect, activitySelect;
let sportBox, mensBox, vegBox;
let calcButton, resetButton;

// Results state (null until Calculate is pressed)
let results = null;

// Default parameters from the spec
const DEF_AGE = 16;
const DEF_HEIGHT = 165;
const DEF_WEIGHT = 60;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  // Sliders (label drawn to the LEFT, slider sized to fill remaining width)
  ageSlider = createSlider(14, 18, DEF_AGE, 1);
  ageSlider.parent(document.querySelector('main'));
  heightSlider = createSlider(140, 200, DEF_HEIGHT, 1);
  heightSlider.parent(document.querySelector('main'));
  weightSlider = createSlider(40, 110, DEF_WEIGHT, 1);
  weightSlider.parent(document.querySelector('main'));

  // Dropdowns
  sexSelect = createSelect();
  sexSelect.parent(document.querySelector('main'));
  sexSelect.option('Female');
  sexSelect.option('Male');
  sexSelect.selected('Female');

  activitySelect = createSelect();
  activitySelect.parent(document.querySelector('main'));
  activitySelect.option('Sedentary');
  activitySelect.option('Moderately Active');
  activitySelect.option('Very Active');
  activitySelect.selected('Moderately Active');

  // Optional flag checkboxes
  sportBox = createCheckbox('Plays competitive sport', false);
  sportBox.parent(document.querySelector('main'));
  mensBox = createCheckbox('Menstruates', false);
  mensBox.parent(document.querySelector('main'));
  vegBox = createCheckbox('Vegetarian/vegan', false);
  vegBox.parent(document.querySelector('main'));

  // Buttons
  calcButton = createButton('Calculate My Range');
  calcButton.parent(document.querySelector('main'));
  calcButton.mousePressed(calculate);
  resetButton = createButton('Reset');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(resetAll);

  layoutControls();
  describe('A personal nutrition calculator. Students set age, biological sex, height, ' +
    'weight, and activity level, plus optional flags, then calculate an estimated daily ' +
    'calorie range, a recommended macronutrient gram range shown as a stacked bar, and ' +
    'flagged micronutrients. Results are educational estimates, not medical advice.', LABEL);
}

// Position every DOM control inside the control region (y >= drawHeight).
// Two columns: left column = 3 sliders; right column = 2 selects + info.
// Checkboxes span a row below; buttons on the bottom row.
function layoutControls() {
  const rowH = 26;
  let y = drawHeight + 10;

  // Column split
  const colGap = 24;
  const leftColW = Math.min(360, (canvasWidth - margin * 2 - colGap) * 0.60);
  const rightX = margin + leftColW + colGap;

  // Left column: sliders (label to the left, slider fills the rest of the left column)
  const sliderX = margin + sliderLeftMargin;
  const sliderW = Math.max(60, leftColW - sliderLeftMargin);
  ageSlider.position(sliderX, y);
  ageSlider.size(sliderW);
  heightSlider.position(sliderX, y + rowH);
  heightSlider.size(sliderW);
  weightSlider.position(sliderX, y + rowH * 2);
  weightSlider.size(sliderW);

  // Right column: dropdowns
  sexSelect.position(rightX + 64, y);
  sexSelect.style('width', '110px');
  activitySelect.position(rightX + 64, y + rowH);
  activitySelect.style('width', '150px');

  // Checkbox row (below sliders, spanning full width)
  let cbY = y + rowH * 3 + 6;
  sportBox.position(margin, cbY);
  mensBox.position(margin + 210, cbY);
  vegBox.position(margin + 340, cbY);

  // Button row (bottom of control strip)
  let btnY = cbY + 30;
  calcButton.position(margin, btnY);
  resetButton.position(margin + 172, btnY);
}

function draw() {
  updateCanvasSize();

  // Drawing region (aliceblue) and control region (white)
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Personal Nutrition Needs Assessment', canvasWidth / 2, 8);

  // Live-readout of current slider/select values just under the title
  drawInputReadout();

  // Draw slider/select labels in the control region
  drawControlLabels();

  if (results === null) {
    drawPrompt();
  } else {
    drawResults();
  }

  // Disclaimer pinned to the bottom of the drawing region
  noStroke();
  fill('dimgray');
  textAlign(CENTER, BOTTOM);
  textSize(11);
  text('Educational estimate only — not medical advice. Individual needs vary.',
    margin, drawHeight - 20, canvasWidth - margin * 2, 16);
}

// Compact one-line summary of the current inputs, shown near the top.
function drawInputReadout() {
  noStroke();
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(12);
  let s = 'Age ' + ageSlider.value() + '  •  ' + sexSelect.value() +
    '  •  ' + heightSlider.value() + ' cm  •  ' + weightSlider.value() + ' kg  •  ' +
    activitySelect.value();
  text(s, margin, 36, canvasWidth - margin * 2, 18);
}

function drawPrompt() {
  noStroke();
  fill('gray');
  textAlign(CENTER, CENTER);
  textSize(15);
  text('Set your profile below, then press "Calculate My Range" to see your ' +
    'estimated daily calories, macronutrient range, and micronutrients to watch.',
    margin + 20, 90, canvasWidth - margin * 2 - 40, 120);
}

function drawResults() {
  let x = margin;
  let w = canvasWidth - margin * 2;
  let y = 66;

  // ---- Calorie estimate bar ----
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(14);
  text('Estimated daily calories', x, y);
  y += 22;

  let barH = 30;
  let calMax = 3600; // scale ceiling for the bar
  let loFrac = constrain(results.calLo / calMax, 0, 1);
  let hiFrac = constrain(results.calHi / calMax, 0, 1);
  // track
  stroke('silver');
  strokeWeight(1);
  fill('white');
  rect(x, y, w, barH, 6);
  // filled range (lo..hi)
  noStroke();
  fill('mediumseagreen');
  rect(x + loFrac * w, y, (hiFrac - loFrac) * w, barH, 4);
  // range label centered in the filled band
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(14);
  text(results.calLo + '–' + results.calHi + ' kcal', x, y, w, barH);
  y += barH + 14;

  // ---- Macronutrient stacked bar (grams) ----
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(14);
  text('Recommended macronutrients (grams/day, midpoint calories)', x, y);
  y += 22;

  let mBarH = 34;
  let carbG = results.carbG;
  let protG = results.protG;
  let fatG = results.fatG;
  // Convert grams back to calories to size segments proportionally to energy
  let carbCal = carbG * 4, protCal = protG * 4, fatCal = fatG * 9;
  let totalCal = carbCal + protCal + fatCal;
  let segs = [
    { label: 'Carbs', g: carbG, cal: carbCal, color: 'goldenrod', pctLabel: '50%' },
    { label: 'Protein', g: protG, cal: protCal, color: 'indianred', pctLabel: '20%' },
    { label: 'Fat', g: fatG, cal: fatCal, color: 'mediumpurple', pctLabel: '30%' }
  ];
  let sx = x;
  for (let s of segs) {
    let segW = (s.cal / totalCal) * w;
    noStroke();
    fill(s.color);
    rect(sx, y, segW, mBarH);
    // segment label if wide enough
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(11);
    if (segW > 52) {
      text(s.g + 'g', sx + segW / 2, y + mBarH / 2);
    }
    sx += segW;
  }
  // border on the stacked bar
  noFill();
  stroke('silver');
  strokeWeight(1);
  rect(x, y, w, mBarH, 2);
  y += mBarH + 6;

  // legend
  let lx = x;
  textSize(11);
  textAlign(LEFT, CENTER);
  for (let s of segs) {
    noStroke();
    fill(s.color);
    rect(lx, y, 12, 12, 2);
    fill('black');
    text(s.label + ' ' + s.pctLabel, lx + 16, y + 6);
    lx += 12 + 16 + textWidth(s.label + ' ' + s.pctLabel) + 16;
  }
  // attach percentage labels (computed in calculate)
  y += 22;

  // ---- Micronutrients to watch ----
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(14);
  text('Micronutrients to watch', x, y);
  y += 20;

  // Reserve the bottom band for the summary (2 lines) + disclaimer (1 line).
  let summaryTop = drawHeight - 62;
  let boxTop = y;
  let boxH = summaryTop - boxTop - 6;
  stroke('silver');
  strokeWeight(1);
  fill('white');
  rect(x, boxTop, w, boxH, 6);

  // list flagged micronutrients, each with a short reason
  noStroke();
  textAlign(LEFT, TOP);
  let ly = boxTop + 8;
  textSize(12);
  if (results.micros.length === 0) {
    fill('dimgray');
    text('No special flags for this profile. Keep meals varied to cover ' +
      'calcium, iron, and vitamin D from everyday foods.',
      x + 10, ly, w - 20, boxH - 16);
  } else {
    for (let m of results.micros) {
      fill('darkred');
      textStyle(BOLD);
      text('• ' + m.name + ': ', x + 10, ly);
      let nameW = textWidth('• ' + m.name + ': ');
      textStyle(NORMAL);
      fill('black');
      text(m.reason, x + 10 + nameW, ly, w - 20 - nameW, 40);
      ly += m.lines * 15 + 6;
    }
  }

  // ---- Plain-language summary sentence ----
  // (drawn in the reserved band, just above the disclaimer)
  noStroke();
  fill('seagreen');
  textAlign(CENTER, TOP);
  textStyle(BOLD);
  textSize(12.5);
  text(results.summary, margin + 6, summaryTop, canvasWidth - margin * 2 - 12, 34);
  textStyle(NORMAL);
}

// Labels for the DOM controls, drawn in the control region.
function drawControlLabels() {
  const rowH = 26;
  let y = drawHeight + 10;
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(13);

  // slider labels (left column) — vertically centered on each slider row
  text('Age: ' + ageSlider.value(), margin, y + 9);
  text('Height: ' + heightSlider.value() + ' cm', margin, y + rowH + 9);
  text('Weight: ' + weightSlider.value() + ' kg', margin, y + rowH * 2 + 9);

  // dropdown labels (right column)
  const colGap = 24;
  const leftColW = Math.min(360, (canvasWidth - margin * 2 - colGap) * 0.60);
  const rightX = margin + leftColW + colGap;
  text('Sex:', rightX, y + 9);
  text('Activity:', rightX, y + rowH + 9);
}

// ---- Nutrition math (simplified Mifflin-St Jeor + activity multiplier) ----
function calculate() {
  let age = ageSlider.value();
  let sex = sexSelect.value();
  let h = heightSlider.value();   // cm
  let wt = weightSlider.value();  // kg
  let act = activitySelect.value();

  // Mifflin-St Jeor BMR
  let bmr = 10 * wt + 6.25 * h - 5 * age + (sex === 'Male' ? 5 : -161);

  // Activity multiplier
  let mult = 1.55; // moderately active default
  if (act === 'Sedentary') mult = 1.2;
  else if (act === 'Very Active') mult = 1.725;

  let tdee = bmr * mult;
  // Competitive sport nudges energy needs a bit higher
  if (sportBox.checked()) tdee *= 1.08;

  // Present as a range (+/- ~5%), rounded to nearest 50 kcal
  let lo = roundTo(tdee * 0.95, 50);
  let hi = roundTo(tdee * 1.05, 50);
  let mid = (lo + hi) / 2;

  // Macronutrient grams from midpoint calories using standard mid-range percentages
  // carbs 50%, protein 20%, fat 30% (within AMDR ranges)
  let carbCal = mid * 0.50, protCal = mid * 0.20, fatCal = mid * 0.30;
  let carbG = Math.round(carbCal / 4);
  let protG = Math.round(protCal / 4);
  let fatG = Math.round(fatCal / 9);

  // Micronutrient flags
  let micros = [];
  if (mensBox.checked()) {
    micros.push({ name: 'Iron', lines: 2,
      reason: 'monthly blood loss raises iron needs; pair iron-rich foods with vitamin C.' });
  }
  if (vegBox.checked()) {
    micros.push({ name: 'Vitamin B12', lines: 2,
      reason: 'found mainly in animal foods; plan fortified foods or a supplement.' });
    // avoid a duplicate iron entry if already added
    if (!mensBox.checked()) {
      micros.push({ name: 'Iron', lines: 2,
        reason: 'plant iron absorbs less easily; combine with vitamin C sources.' });
    }
    micros.push({ name: 'Zinc', lines: 1,
      reason: 'plant zinc is less available; include beans, nuts, and whole grains.' });
  }
  // Calcium is a common teen shortfall regardless of flags
  micros.push({ name: 'Calcium', lines: 1,
    reason: 'key for growing bones — aim for dairy or fortified alternatives.' });

  // Summary sentence
  let watchList = micros.map(m => m.name);
  let watchStr = watchList.length > 1
    ? watchList.slice(0, -1).join(', ') + ' and ' + watchList[watchList.length - 1]
    : watchList[0];
  let summary = 'For this profile, aim for about ' + lo + '–' + hi +
    ' calories per day, with extra attention to ' + watchStr + '.';

  results = {
    calLo: lo, calHi: hi,
    carbG: carbG, protG: protG, fatG: fatG,
    micros: micros, summary: summary
  };
}

function roundTo(v, step) {
  return Math.round(v / step) * step;
}

function resetAll() {
  ageSlider.value(DEF_AGE);
  heightSlider.value(DEF_HEIGHT);
  weightSlider.value(DEF_WEIGHT);
  sexSelect.selected('Female');
  activitySelect.selected('Moderately Active');
  sportBox.checked(false);
  mensBox.checked(false);
  vegBox.checked(false);
  results = null;
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  layoutControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
