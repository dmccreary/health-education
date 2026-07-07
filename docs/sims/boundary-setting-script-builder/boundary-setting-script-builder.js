// Boundary-Setting Script Builder - MicroSim (three-part response script)
// CANVAS_HEIGHT: 514
// Grades 6-8, Apply (L3): students build a short boundary-setting script using the
// three-part structure — name the limit, state it directly, restate if needed.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 457;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let previewButton;
let modelButton;
let nextButton;

let scenarios = [
  { ctx: 'A friend keeps asking to see private texts from another friend.',
    model: '"Those are private messages between us. I\'m not going to share them. Like I said, no."' },
  { ctx: 'A family member keeps posting photos of you online without asking.',
    model: '"I want a say in photos of me. Please ask me before you post. I\'ve told you this matters to me."' },
  { ctx: 'Someone you are dating wants to know your location all the time.',
    model: '"I need some personal space. I\'m not going to share my location constantly. I mean it."' },
  { ctx: 'A friend keeps borrowing money and not paying it back.',
    model: '"I can\'t keep lending money. I need you to pay back what you owe first. I\'ve already said that."' },
  { ctx: 'A relative keeps making comments about your body.',
    model: '"Comments about my body aren\'t okay with me. Please stop. I\'m serious about this."' }
];

// three slots, each with sentence-starters (one hedging option in slot 2)
let slotLabels = ['1. Name the limit', '2. State it directly', '3. If needed, restate'];
let slotOptions = [
  ['That\'s private.', 'That crosses a line for me.', 'That\'s my personal information.'],
  ['I\'m not going to do that.', 'Please stop.', 'Maybe you could stop?'],
  ['Like I said, no.', 'I\'ve already told you my answer.', "I'm serious — please stop."]
];
// index 2 of slot 1 (the hedging option) -> flag hedging
let hedgeWords = ['maybe', 'i guess', 'sort of', 'kind of'];

let sIndex = 0;
let sel = [-1, -1, -1];
let previewed = false;
let showModel = false;
let slotRects = [[], [], []];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  previewButton = createButton('Preview My Script');
  previewButton.mousePressed(() => { if (ready()) previewed = true; });
  modelButton = createButton('See a Model Script');
  modelButton.mousePressed(() => { showModel = !showModel; });
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  positionControls();
  describe('A scenario with three slots — name the limit, state it directly, restate if ' +
    'needed. Students pick a sentence-starter for each slot and preview the assembled ' +
    'boundary script, with a model script for comparison.', LABEL);
}

function positionControls() {
  previewButton.position(10, drawHeight + 14);
  modelButton.position(150, drawHeight + 14);
  nextButton.position(290, drawHeight + 14);
}

function ready() { return sel[0] >= 0 && sel[1] >= 0 && sel[2] >= 0; }

function script() {
  return '"' + slotOptions[0][sel[0]] + ' ' + slotOptions[1][sel[1]] + ' ' + slotOptions[2][sel[2]] + '"';
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

  fill('black');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Boundary-Setting Script Builder', canvasWidth / 2, 6);

  // scenario
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, 32, canvasWidth - margin * 2, 46, 8);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14);
  text('Scenario ' + (sIndex + 1) + '/5: ' + scenarios[sIndex].ctx, margin + 10, 55, canvasWidth - margin * 2 - 20, 40);

  // three slots
  let py = 88;
  slotRects = [[], [], []];
  for (let s = 0; s < 3; s++) {
    noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(13);
    text(slotLabels[s], margin, py);
    let chipY = py + 18, chipH = 34, gap = 6;
    let cw = (canvasWidth - margin * 2 - gap * 2) / 3;
    for (let o = 0; o < 3; o++) {
      let x = margin + o * (cw + gap);
      slotRects[s].push({ x: x, y: chipY, w: cw, h: chipH, s: s, o: o });
      let chosen = sel[s] === o;
      let hover = pointInRect(mouseX, mouseY, { x: x, y: chipY, w: cw, h: chipH });
      strokeWeight(chosen ? 3 : 1.5);
      stroke(chosen ? 'darkorange' : 'slategray');
      fill(chosen ? 'gold' : (hover ? 'lightyellow' : 'white'));
      rect(x, chipY, cw, chipH, 6);
      noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(11);
      text(slotOptions[s][o], x + 4, chipY + 2, cw - 8, chipH - 4);
    }
    py = chipY + chipH + 10;
  }
  cursor(overAnyChip() ? HAND : ARROW);

  // preview / model card
  let ay = py + 2, ah = drawHeight - ay - 10;
  fill('white'); stroke('silver'); strokeWeight(1.5);
  rect(margin, ay, canvasWidth - margin * 2, ah, 8);
  noStroke();
  textAlign(LEFT, TOP); textSize(13);
  if (showModel) {
    fill('seagreen');
    text('Model script:', margin + 10, ay + 8);
    fill('black');
    text(scenarios[sIndex].model, margin + 10, ay + 28, canvasWidth - margin * 2 - 20, ah - 36);
  } else if (previewed && ready()) {
    let hedges = hedgeWords.some(h => script().toLowerCase().includes(h));
    fill(hedges ? 'darkgoldenrod' : 'seagreen');
    text(hedges ? 'Your script (a little soft):' : '✓ Your script (clear and direct):', margin + 10, ay + 8);
    fill('black');
    text(script(), margin + 10, ay + 28, canvasWidth - margin * 2 - 20, ah - 60);
    if (hedges) {
      fill('darkgoldenrod');
      text('Tip: words like "maybe" soften a boundary. State it directly.', margin + 10, ay + ah - 26, canvasWidth - margin * 2 - 20, 22);
    }
  } else {
    fill('dimgray');
    text(ready() ? 'Press "Preview My Script" to assemble your response.'
      : 'Choose one sentence-starter in each of the three slots.',
      margin + 10, ay + 10, canvasWidth - margin * 2 - 20, ah - 18);
  }
}

function overAnyChip() {
  for (let s = 0; s < 3; s++) for (let r of slotRects[s]) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let s = 0; s < 3; s++) {
    for (let r of slotRects[s]) {
      if (pointInRect(mouseX, mouseY, r)) { sel[s] = r.o; previewed = false; return; }
    }
  }
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  sel = [-1, -1, -1]; previewed = false; showModel = false;
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
