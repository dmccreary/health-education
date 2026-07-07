// Four Steps to Solve a Conflict - MicroSim (ordered step reveal)
// CANVAS_HEIGHT: 490
// Grade 2, Apply (L3): students apply the four-step conflict resolution process to a
// playground scenario by revealing each step in order.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 48;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let newButton;
let resetButton;

let steps = [
  { name: 'Stop and Breathe', icon: 'hand' },
  { name: 'Say How You Feel', icon: 'bubble' },
  { name: 'Listen', icon: 'ear' },
  { name: 'Find a Solution', icon: 'shake' }
];

let scenarios = [
  { text: 'Two friends both want to use the only jump rope at recess.',
    caps: [
      'Both friends stop and take a deep breath instead of grabbing the rope.',
      "One friend says, 'I feel left out when I don't get a turn.'",
      "The other friend listens and says, 'I didn't know you felt that way.'",
      'They agree to take turns every five minutes.'
    ] },
  { text: 'Two players disagree about whose turn it is in a board game.',
    caps: [
      'Both players stop and breathe instead of arguing.',
      "One says, 'I feel upset when my turn gets skipped.'",
      'The other listens and nods.',
      'They check the rules and take turns in order.'
    ] },
  { text: 'A group disagrees about whose idea to use for a project.',
    caps: [
      'The group pauses instead of talking over each other.',
      "One says, 'I feel unheard when my idea is ignored.'",
      'The others listen to the idea.',
      'They combine two ideas into one plan.'
    ] }
];

let sIndex = 0;
let revealed = 0;   // number of steps revealed so far
let message = 'Click Step 1 to begin!';
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  newButton = createButton('Try a New Scenario');
  newButton.mousePressed(newScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  describe('A playground conflict with four numbered step cards — stop and breathe, say ' +
    'how you feel, listen, find a solution. Students click the steps in order to reveal ' +
    'what each looks like in the scenario.', LABEL);
}

function positionControls() {
  newButton.position(10, drawHeight + 10);
  resetButton.position(180, drawHeight + 10);
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
  textSize(22);
  text('Four Steps to Solve a Conflict', canvasWidth / 2, 8);

  // scenario banner with two kids + rope
  fill('lightyellow'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 40, canvasWidth - margin * 2, 74, 8);
  drawKids(margin + 40, 78);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(15);
  text(scenarios[sIndex].text, margin + 80, 78, canvasWidth - margin * 2 - 96, 66);
  if (revealed >= 4) {
    fill('seagreen'); textAlign(RIGHT, TOP); textSize(24);
    text('✓', canvasWidth - margin - 8, 46);
  }

  // 4 step cards
  cardRects = [];
  let cols = 4, gap = 8;
  let cw = (canvasWidth - margin * 2 - gap * (cols - 1)) / cols;
  let ch = 140, y0 = 126;
  for (let i = 0; i < 4; i++) {
    let x = margin + i * (cw + gap);
    cardRects.push({ x: x, y: y0, w: cw, h: ch, i: i });
    let open = i < revealed;
    let isNext = i === revealed;
    let hover = pointInRect(mouseX, mouseY, cardRects[i]);
    strokeWeight(isNext ? 3 : 1.5); stroke(open ? 'seagreen' : (isNext ? 'darkorange' : 'silver'));
    fill(open ? 'honeydew' : (isNext && hover ? 'lightyellow' : 'white'));
    rect(x, y0, cw, ch, 8);
    noStroke(); fill(open ? 'seagreen' : 'navy'); textAlign(CENTER, TOP); textSize(15);
    text(i + 1, x, y0 + 8, cw, 20);
    drawStepIcon(steps[i].icon, x + cw / 2, y0 + 52, open);
    fill('black'); textAlign(CENTER, TOP); textSize(11);
    text(steps[i].name, x + 3, y0 + 84, cw - 6, 40);
    if (open) { fill('seagreen'); textSize(16); text('✓', x, y0 + ch - 26, cw, 20); }
  }
  cursor(overAnyCard() ? HAND : ARROW);

  // infobox
  let iy = y0 + ch + 12;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, iy, canvasWidth - margin * 2, drawHeight - iy - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(15);
  fill(revealed >= 4 ? 'seagreen' : 'black');
  text(message, margin + 12, iy + 10, canvasWidth - margin * 2 - 24, 44);
}

function drawKids(x, y) {
  push();
  stroke('mediumpurple'); strokeWeight(2); fill('plum'); circle(x - 8, y - 8, 16);
  stroke('teal'); fill('paleturquoise'); circle(x + 12, y - 8, 16);
  stroke('goldenrod'); strokeWeight(2); noFill(); arc(x - 8, y + 8, 30, 16, 0, PI);
  pop();
}

function drawStepIcon(type, x, y, open) {
  push(); strokeWeight(2);
  let col = open ? 'seagreen' : 'slateblue';
  stroke(col); noFill();
  if (type === 'hand') { rect(x - 9, y - 10, 18, 20, 4); }
  else if (type === 'bubble') { ellipse(x, y - 2, 24, 16); triangle(x - 4, y + 4, x + 4, y + 4, x - 6, y + 12); }
  else if (type === 'ear') { arc(x, y, 20, 24, -HALF_PI, HALF_PI); }
  else { line(x - 10, y, x, y - 6); line(x, y - 6, x + 10, y); circle(x, y - 6, 4); }
  pop();
}

function overAnyCard() {
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      if (r.i === revealed) {
        message = scenarios[sIndex].caps[r.i];
        revealed++;
        if (revealed >= 4) message = 'Conflict solved calmly! ' + scenarios[sIndex].caps[3];
      } else if (r.i > revealed) {
        message = 'Click Step ' + (revealed + 1) + ' next — go in order!';
      } else {
        message = scenarios[sIndex].caps[r.i];
      }
      return;
    }
  }
}

function newScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  revealed = 0; message = 'Click Step 1 to begin!';
}
function reset() { revealed = 0; message = 'Click Step 1 to begin!'; }

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
