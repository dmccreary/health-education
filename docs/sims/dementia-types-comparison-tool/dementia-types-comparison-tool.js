// Dementia Types Comparison Tool - MicroSim (compare 4 types + scenario match)
// CANVAS_HEIGHT: 500
// Grades 9-12, Analyze (L4): students differentiate Alzheimer's, vascular, Lewy body,
// and frontotemporal dementia by cause, early symptoms, and progression. Respectful,
// non-alarmist, no graphic imagery.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 448;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 12;

let scenarioButton;
let nextButton;

let types = [
  { name: "Alzheimer's", cause: 'Protein plaques and tangles build up in the brain.',
    early: 'Memory loss, especially of recent events.', prog: 'Gradual, steady decline over years.',
    detail: 'The most common type of dementia.' },
  { name: 'Vascular', cause: 'Reduced blood flow, often after strokes.',
    early: 'Trouble with planning, focus, and judgment.', prog: 'Often step-wise, worsening after each event.',
    detail: 'Managing blood pressure lowers risk.' },
  { name: 'Lewy Body', cause: 'Lewy protein deposits in the brain.',
    early: 'Visual hallucinations, movement and alertness changes.', prog: 'Fluctuating, with Parkinson-like symptoms.',
    detail: 'Alertness can vary a lot day to day.' },
  { name: 'Frontotemporal', cause: 'Damage to the frontal and temporal lobes.',
    early: 'Personality, behavior, or language change; memory often spared.', prog: 'Varies; often affects younger adults.',
    detail: 'Often begins earlier than other types.' }
];
let rowLabels = ['Cause', 'Early Symptoms', 'Progression'];

let scenarios = [
  { s: 'A 62-year-old shows big personality and behavior changes but remembers recent events well.', a: 3, e: 'Early behavior/personality change with spared memory points to frontotemporal.' },
  { s: "An older adult's thinking got noticeably worse right after a stroke.", a: 1, e: 'A step-wise decline after a stroke points to vascular dementia.' },
  { s: 'A person has visual hallucinations and alertness that changes through the day.', a: 2, e: 'Hallucinations with fluctuating alertness point to Lewy body dementia.' }
];

let selectedCol = -1;    // for detail
let mode = 'table';      // 'table' or 'scenario'
let scIndex = 0;
let answered = -1;
let headerRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  scenarioButton = createButton('Try a Scenario');
  scenarioButton.mousePressed(() => { mode = 'scenario'; answered = -1; selectedCol = -1; });
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(() => { scIndex = (scIndex + 1) % scenarios.length; answered = -1; });
  positionControls();
  describe('Four dementia types compared across cause, early symptoms, and progression. ' +
    'Clicking a type header shows an extra detail. Try a Scenario presents symptoms and the ' +
    'student clicks the type header that best matches.', LABEL);
}

function positionControls() {
  scenarioButton.position(10, drawHeight + 12);
  nextButton.position(130, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue');
  stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('Dementia Types Comparison', canvasWidth / 2, 6);

  // table
  headerRects = [];
  let labW = 62;
  let colW = (canvasWidth - margin * 2 - labW) / 4;
  let y0 = 30, headH = 34;
  // headers (clickable)
  for (let c = 0; c < 4; c++) {
    let x = margin + labW + c * colW;
    headerRects.push({ x: x, y: y0, w: colW, h: headH, c: c });
    let hover = pointInRect(mouseX, mouseY, headerRects[c]);
    let sel = (mode === 'table' && selectedCol === c);
    let ans = (mode === 'scenario' && answered >= 0);
    noStroke();
    if (ans && c === scenarios[scIndex].a) fill('honeydew');
    else if (ans && c === answered && answered !== scenarios[scIndex].a) fill('mistyrose');
    else fill(sel ? 'gold' : (hover ? 'lightyellow' : 'steelblue'));
    stroke('white'); strokeWeight(1);
    rect(x, y0, colW, headH, 4);
    noStroke(); fill(ans || sel || hover ? 'black' : 'white'); textAlign(CENTER, CENTER); textSize(10);
    text(types[c].name, x + 2, y0, colW - 4, headH);
  }
  // rows
  let ry = y0 + headH;
  let rowH = 52;
  let rowKeys = ['cause', 'early', 'prog'];
  for (let r = 0; r < 3; r++) {
    let y = ry + r * rowH;
    noStroke(); fill('lavender'); rect(margin, y, labW, rowH);
    fill('navy'); textAlign(LEFT, CENTER); textSize(10);
    text(rowLabels[r], margin + 3, y + rowH / 2, labW - 6, rowH);
    for (let c = 0; c < 4; c++) {
      let x = margin + labW + c * colW;
      fill('white'); stroke('gainsboro'); strokeWeight(1); rect(x, y, colW, rowH);
      noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(9);
      text(types[c][rowKeys[r]], x + 3, y + 3, colW - 6, rowH - 6);
    }
  }
  cursor(overHeader() ? HAND : ARROW);

  // bottom panel: detail or scenario
  let py = ry + 3 * rowH + 6;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, py, canvasWidth - margin * 2, drawHeight - py - 8, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  if (mode === 'scenario') {
    fill('darkslateblue'); text('Scenario ' + (scIndex + 1) + ': ' + scenarios[scIndex].s, margin + 8, py + 6, canvasWidth - margin * 2 - 16, 40);
    if (answered >= 0) {
      let correct = answered === scenarios[scIndex].a;
      fill(correct ? 'seagreen' : 'indianred');
      text((correct ? '✓ ' : '✗ ') + scenarios[scIndex].e, margin + 8, py + 46, canvasWidth - margin * 2 - 16, 40);
    } else {
      fill('dimgray'); text('Click the type header that best matches.', margin + 8, py + 46, canvasWidth - margin * 2 - 16, 20);
    }
  } else if (selectedCol >= 0) {
    fill('steelblue'); text(types[selectedCol].name + ': ', margin + 8, py + 6);
    fill('black'); text(types[selectedCol].detail, margin + 8, py + 24, canvasWidth - margin * 2 - 16, 40);
  } else {
    fill('dimgray'); text('Click a type header for one more detail, or Try a Scenario to test yourself.', margin + 8, py + 8, canvasWidth - margin * 2 - 16, 40);
  }
}

function overHeader() { for (let h of headerRects) if (pointInRect(mouseX, mouseY, h)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let h of headerRects) {
    if (pointInRect(mouseX, mouseY, h)) {
      if (mode === 'scenario') { if (answered < 0) answered = h.c; }
      else selectedCol = h.c;
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
