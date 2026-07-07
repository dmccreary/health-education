// Allergy Response Decision Guide - MicroSim (scenario decision, 3 options)
// CANVAS_HEIGHT: 487
// Grade 4, Apply (L3): students choose the correct next step for allergy scenarios,
// reinforcing when to watch, when to tell an adult, and when it is an emergency.
// Emergency scenarios always confirm "get help now" — supportive, not high-stakes.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let nextButton;
let resetButton;

let options = ['Keep Watching', 'Tell a Trusted Adult', 'This Is an Emergency —\nGet Help Now'];
let optColors = ['mediumseagreen', 'goldenrod', 'crimson'];

// scenario: short title, full text, icon type, correct option (0/1/2), explanation
let deck = [
  { title: 'Itchy eyes near a cat', text: 'Your eyes get a little itchy after petting a friend\'s cat.', icon: 'cat', a: 0,
    e: 'Mild itchy eyes usually pass. Keep watching, and tell an adult if it gets worse.' },
  { title: 'Hives after lunch', text: 'A few itchy red bumps appear on your arm a little after lunch.', icon: 'food', a: 1,
    e: 'New hives after eating should be told to a trusted adult who can watch you closely.' },
  { title: 'Tingly, puffy lips', text: 'Your lips feel tingly and slightly puffy after trying a new snack.', icon: 'food', a: 1,
    e: 'Tingling, puffy lips can be an early warning. Tell an adult right away — and if breathing changes, it becomes an emergency.' },
  { title: 'Face swelling, bee sting', text: 'Your face is swelling and you are having trouble breathing after a bee sting.', icon: 'bug', a: 2,
    e: 'Swelling face and trouble breathing is an emergency. Get help now — this cannot wait.' },
  { title: 'Wheezing, tight throat', text: 'You start coughing and wheezing and feel your throat getting tight.', icon: 'person', a: 2,
    e: 'A tight throat with trouble breathing is an emergency. Get help now.' },
  { title: 'Mild stomachache', text: 'You have a mild stomachache after eating but feel otherwise okay.', icon: 'food', a: 0,
    e: 'A mild stomachache alone can be watched. Tell an adult if new symptoms start.' }
];

let order = [];
let idx = 0;
let picked = -1;
let answeredCount = 0;
let results = {};   // scenario original index -> chosen option
let optRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  shuffleDeck();
  describe('A scenario card describes a possible allergic reaction. Students pick one of ' +
    'three responses — keep watching, tell a trusted adult, or emergency — and get an ' +
    'explanation. A summary flags the emergency-level scenarios.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 14);
  resetButton.position(140, drawHeight + 14);
}

function shuffleDeck() {
  order = [...Array(deck.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  idx = 0; picked = -1; answeredCount = 0; results = {};
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
  textSize(20);
  text('Allergy Response Decision Guide', canvasWidth / 2, 8);

  if (answeredCount >= deck.length) { drawSummary(); return; }

  let card = deck[order[idx]];

  // scenario card
  let cy = 40, ch = 128;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, cy, canvasWidth - margin * 2, ch, 10);
  drawIcon(card.icon, margin + 34, cy + ch / 2);
  noStroke();
  fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
  text('Scenario ' + (idx + 1) + ' of ' + deck.length, margin + 68, cy + 12);
  fill('black'); textSize(16);
  text(card.text, margin + 68, cy + 32, canvasWidth - margin * 2 - 80, ch - 44);

  // three option buttons
  optRects = [];
  let oy = cy + ch + 12;
  let oh = 44, gap = 8;
  for (let i = 0; i < 3; i++) {
    let y = oy + i * (oh + gap);
    optRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: oh, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: margin, y: y, w: canvasWidth - margin * 2, h: oh });
    let isAns = card.a === i;
    strokeWeight(2); stroke(optColors[i]);
    if (picked < 0) fill(hover ? 'lightyellow' : 'white');
    else if (isAns) { fill('honeydew'); strokeWeight(3); }
    else if (i === picked) { fill('mistyrose'); }
    else fill('white');
    rect(margin, y, canvasWidth - margin * 2, oh, 8);
    noStroke();
    fill(optColors[i] === 'goldenrod' ? 'darkgoldenrod' : optColors[i]);
    textAlign(CENTER, CENTER);
    textSize(15);
    text(options[i], margin + 8, y + 4, canvasWidth - margin * 2 - 16, oh - 8);
  }
  cursor(picked < 0 && overAnyOpt() ? HAND : ARROW);

  // feedback
  let fy = oy + 3 * (oh + gap) + 2;
  textAlign(LEFT, TOP); textSize(13);
  if (picked < 0) {
    fill('dimgray');
    text('What is the best next step? Click a response.', margin, fy, canvasWidth - margin * 2, 40);
  } else {
    let correct = picked === card.a;
    fill(correct ? 'seagreen' : 'darkgoldenrod');
    text((correct ? '✓ Correct. ' : 'Close — let\'s look again. ') + card.e,
      margin, fy, canvasWidth - margin * 2, drawHeight - fy - 6);
  }
}

function drawSummary() {
  fill('black'); textAlign(CENTER, TOP); textSize(15);
  text('Summary — scenarios you reviewed:', canvasWidth / 2, 44);
  let y = 74;
  textAlign(LEFT, CENTER); textSize(13);
  for (let k = 0; k < deck.length; k++) {
    let emerg = deck[k].a === 2;
    noStroke();
    fill(emerg ? 'mistyrose' : 'honeydew');
    stroke(emerg ? 'crimson' : 'seagreen'); strokeWeight(1);
    rect(margin, y, canvasWidth - margin * 2, 44, 6);
    noStroke();
    fill('black');
    text(deck[k].title, margin + 12, y + 15);
    fill(emerg ? 'crimson' : 'seagreen');
    textAlign(RIGHT, CENTER);
    text(emerg ? 'EMERGENCY — get help now' : options[deck[k].a], canvasWidth - margin - 12, y + 15);
    textAlign(LEFT, CENTER);
    y += 50;
  }
  noStroke(); fill('dimgray'); textAlign(CENTER, TOP); textSize(12);
  text('Emergency signs cannot wait. When in doubt, get an adult right away.', canvasWidth / 2, y + 2, canvasWidth - margin * 2, 30);
}

function overAnyOpt() {
  for (let o of optRects) if (pointInRect(mouseX, mouseY, o)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function drawIcon(type, x, y) {
  push();
  strokeWeight(2);
  if (type === 'food') { stroke('chocolate'); fill('wheat'); circle(x, y, 30); noStroke(); fill('sienna'); circle(x - 4, y - 3, 5); circle(x + 5, y + 2, 5); }
  else if (type === 'bug') { stroke('black'); fill('gold'); ellipse(x, y, 22, 30); line(x - 11, y, x + 11, y); }
  else if (type === 'cat') { stroke('dimgray'); fill('silver'); circle(x, y, 26); triangle(x - 12, y - 10, x - 4, y - 18, x - 2, y - 8); triangle(x + 12, y - 10, x + 4, y - 18, x + 2, y - 8); }
  else { stroke('slateblue'); fill('lavender'); circle(x, y - 6, 16); rect(x - 8, y + 2, 16, 16, 4); }
  pop();
}

function mousePressed() {
  if (answeredCount >= deck.length || picked >= 0) return;
  for (let o of optRects) {
    if (pointInRect(mouseX, mouseY, o)) {
      picked = o.i;
      results[order[idx]] = o.i;
      answeredCount++;
      return;
    }
  }
}

function nextScenario() {
  if (idx < deck.length - 1) { idx++; picked = results[order[idx]] !== undefined ? results[order[idx]] : -1; }
  else if (answeredCount >= deck.length) { /* stay on summary */ }
}

function resetAll() { shuffleDeck(); }

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
