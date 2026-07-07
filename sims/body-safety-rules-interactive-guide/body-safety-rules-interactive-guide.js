// Body Safety Rules Interactive Guide - MicroSim (calm click-to-reveal panels)
// CANVAS_HEIGHT: 485
// Grade 1, Understand (L2): students explain the three core body-safety rules by
// exploring a calm, warm, non-frightening guide. Soft blue/green palette only.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 45;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let resetButton;

let panels = [
  { icon: 'heart', title: 'My body belongs to me',
    reveal: 'My body is mine. I get to decide who gives me a hug or a high-five.' },
  { icon: 'hand', title: 'I can say no',
    reveal: "It is okay to say 'no' or 'stop' to a touch I don't want — even with people I know." },
  { icon: 'adult', title: 'I tell a trusted adult',
    reveal: 'If something makes me feel unsure, I can tell a trusted adult. Telling is always okay.' }
];
let whatIf = 'If a touch ever feels confusing or wrong, remember: it is never your fault, and ' +
  'telling a trusted adult is always the right choice — you will not be in trouble for telling.';

let opened = [false, false, false];
let whatIfOpen = false;
let panelRects = [];
let whatIfRect = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Start Over');
  resetButton.mousePressed(() => { opened = [false, false, false]; whatIfOpen = false; });
  positionControls();
  describe('Three calm panels for the body-safety rules — my body belongs to me, I can ' +
    'say no, I tell a trusted adult — plus a gentle "What if?" panel. Clicking a panel ' +
    'reveals one reassuring sentence.', LABEL);
}

function positionControls() {
  resetButton.position(10, drawHeight + 8);
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

  fill('teal');
  textAlign(CENTER, TOP);
  textSize(20);
  text('My Body Safety Rules', canvasWidth / 2, 10);

  // three panels in a row
  panelRects = [];
  let gap = 12;
  let pw = (canvasWidth - margin * 2 - gap * 2) / 3;
  let py = 44, ph = 232;
  for (let i = 0; i < 3; i++) {
    let x = margin + i * (pw + gap);
    panelRects.push({ x: x, y: py, w: pw, h: ph, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: x, y: py, w: pw, h: ph });
    stroke('cadetblue'); strokeWeight(1.5);
    fill(opened[i] ? 'honeydew' : (hover ? 'azure' : 'lightcyan'));
    rect(x, py, pw, ph, 12);
    drawPanelIcon(panels[i].icon, x + pw / 2, py + 46);
    noStroke();
    fill('teal');
    textAlign(CENTER, TOP);
    textSize(14);
    text(panels[i].title, x + 6, py + 82, pw - 12, 50);
    if (opened[i]) {
      fill('black');
      textSize(13);
      text(panels[i].reveal, x + 8, py + 130, pw - 16, ph - 138);
    } else {
      fill('cadetblue');
      textSize(12);
      text('(tap to read)', x + 6, py + ph - 24, pw - 12, 20);
    }
  }

  // what-if panel (full width, calm green)
  let wy = py + ph + 14;
  let wh = drawHeight - wy - 12;
  whatIfRect = { x: margin, y: wy, w: canvasWidth - margin * 2, h: wh };
  let hoverW = pointInRect(mouseX, mouseY, whatIfRect);
  stroke('mediumseagreen'); strokeWeight(1.5);
  fill(whatIfOpen ? 'honeydew' : (hoverW ? 'mintcream' : 'palegreen'));
  rect(margin, wy, canvasWidth - margin * 2, wh, 12);
  noStroke();
  fill('seagreen'); textAlign(LEFT, TOP); textSize(15);
  text('What if?', margin + 14, wy + 10);
  if (whatIfOpen) {
    fill('black'); textSize(13);
    text(whatIf, margin + 14, wy + 32, canvasWidth - margin * 2 - 28, wh - 40);
  } else {
    fill('seagreen'); textSize(12);
    text('(tap to read together)', margin + 90, wy + 12);
  }
  cursor(hoverW || overAnyPanel() ? HAND : ARROW);
}

function drawPanelIcon(type, x, y) {
  push();
  strokeWeight(2);
  if (type === 'heart') {
    stroke('steelblue'); fill('lightskyblue');
    ellipse(x - 34, y, 40, 46); // body outline hint
    fill('mediumseagreen'); noStroke();
    beginShape();
    vertex(x, y + 8); bezierVertex(x - 14, y - 8, x - 4, y - 18, x, y - 8);
    bezierVertex(x + 4, y - 18, x + 14, y - 8, x, y + 8); endShape(CLOSE);
  } else if (type === 'hand') {
    stroke('steelblue'); fill('paleturquoise');
    rect(x - 12, y - 16, 24, 30, 6);
    line(x - 6, y - 16, x - 6, y - 26); line(x, y - 16, x, y - 28); line(x + 6, y - 16, x + 6, y - 26);
  } else {
    stroke('steelblue'); fill('lightsteelblue');
    circle(x - 6, y - 8, 22); rect(x - 16, y + 4, 20, 18, 4);
    noStroke(); fill('white'); stroke('seagreen'); rect(x + 6, y - 16, 22, 14, 4);
  }
  pop();
}

function overAnyPanel() {
  for (let p of panelRects) if (pointInRect(mouseX, mouseY, p)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let p of panelRects) {
    if (pointInRect(mouseX, mouseY, p)) { opened[p.i] = !opened[p.i]; return; }
  }
  if (pointInRect(mouseX, mouseY, whatIfRect)) whatIfOpen = !whatIfOpen;
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
