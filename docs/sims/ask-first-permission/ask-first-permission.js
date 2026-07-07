// Ask First! Permission Scenarios - MicroSim (binary scenario choice)
// CANVAS_HEIGHT: 442
// Grade 1, Apply (L3): students practice asking permission before using technology
// or sharing information by choosing the correct next step. Tone is plainly sincere.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 390;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let nextButton;
let resetButton;

// Every scenario's safe choice is "Ask First".
let deck = [
  { text: 'You want to play a new game on the tablet.', icon: 'tablet',
    ask: 'Great choice! Ask a grown-up before downloading a new app.',
    warn: "Some apps aren't safe or can cost money. Ask a trusted adult first." },
  { text: 'You want to take a photo of your friend.', icon: 'camera',
    ask: 'Asking first is respectful — your friend gets to say yes or no.',
    warn: 'People should say yes before you take their photo. Ask first.' },
  { text: 'You want to post a video online.', icon: 'video',
    ask: 'Yes! A grown-up should help decide what goes online.',
    warn: "Once a video is online it's hard to take back. Ask a grown-up first." },
  { text: "You want to use a classmate's tablet.", icon: 'tablet',
    ask: "Asking first shows respect for other people's things.",
    warn: "Using someone's things without asking isn't fair. Ask first." },
  { text: 'A website asks for your home address.', icon: 'address',
    ask: 'Smart! Never share your address without a trusted adult.',
    warn: 'Your address is private. Always check with a trusted adult first.' },
  { text: "You want to use a grown-up's phone to call someone.", icon: 'phone',
    ask: 'Good idea — ask before using a grown-up\'s phone.',
    warn: "A grown-up's phone is theirs. Ask before you use it." }
];

let idx = 0;
let picked = -1;      // 0 Ask First, 1 Just Go Ahead
let askCount = 0;
let answered = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  describe('A one-sentence scenario with a simple picture. Students choose "Ask First" ' +
    'or "Just Go Ahead" and get a gentle explanation of why asking first is the safe, ' +
    'respectful choice.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(140, drawHeight + 12);
}

let askRect, goRect;

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
  text('Ask First!', canvasWidth / 2, 8);

  if (Object.keys(answered).length >= deck.length && picked >= 0 && idx === deck.length - 1) {
    // fall through to normal view but also show summary line at bottom
  }

  let card = deck[idx];

  // scenario card with icon
  let cy = 42, ch = 118;
  fill('lightyellow'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, cy, canvasWidth - margin * 2, ch, 12);
  drawIcon(card.icon, margin + 40, cy + ch / 2);
  noStroke();
  fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
  text('Scenario ' + (idx + 1) + ' of ' + deck.length, margin + 78, cy + 12);
  fill('black'); textSize(19);
  text(card.text, margin + 78, cy + 32, canvasWidth - margin * 2 - 92, ch - 44);

  // two big choice buttons
  let by = cy + ch + 16;
  let bh = 70, gap = 14;
  let bw = (canvasWidth - margin * 2 - gap) / 2;
  askRect = { x: margin, y: by, w: bw, h: bh };
  goRect = { x: margin + bw + gap, y: by, w: bw, h: bh };
  drawChoice(askRect, 'Ask First', 'mediumseagreen', 0, card);
  drawChoice(goRect, 'Just Go Ahead', 'slategray', 1, card);
  cursor((pointInRect(mouseX, mouseY, askRect) || pointInRect(mouseX, mouseY, goRect)) && picked < 0 ? HAND : ARROW);

  // feedback
  let fy = by + bh + 12;
  textAlign(LEFT, TOP); textSize(15);
  if (picked < 0) {
    fill('dimgray');
    text('What should you do? Tap your choice.', margin, fy, canvasWidth - margin * 2, 40);
  } else if (picked === 0) {
    fill('seagreen');
    text('👍 ' + card.ask, margin, fy, canvasWidth - margin * 2, 56);
  } else {
    fill('darkgoldenrod');
    text(card.warn + ' Next time, ask a trusted adult first.', margin, fy, canvasWidth - margin * 2, 56);
  }

  // summary when all answered
  if (Object.keys(answered).length >= deck.length) {
    noStroke();
    fill('seagreen');
    textAlign(CENTER, BOTTOM);
    textSize(14);
    text('You chose "Ask First" for ' + askCount + ' of ' + deck.length +
      '. Asking first keeps you safe and is respectful!', canvasWidth / 2, drawHeight - 8,
      canvasWidth - margin * 2, 40);
  }
}

function drawChoice(r, label, col, which, card) {
  strokeWeight(2); stroke(col);
  let hover = pointInRect(mouseX, mouseY, r);
  if (picked < 0) fill(hover ? 'lightyellow' : 'white');
  else if (which === 0) { fill('honeydew'); strokeWeight(picked === 0 ? 3.5 : 2); }
  else if (which === picked) { fill('linen'); }
  else fill('white');
  rect(r.x, r.y, r.w, r.h, 12);
  noStroke();
  fill(col === 'slategray' ? 'slategray' : 'seagreen');
  textAlign(CENTER, CENTER);
  textSize(20);
  text(label, r.x, r.y, r.w, r.h);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function drawIcon(type, x, y) {
  push();
  strokeWeight(2); stroke('slateblue'); fill('lavender');
  if (type === 'tablet') { rect(x - 16, y - 20, 32, 40, 4); }
  else if (type === 'camera') { rect(x - 20, y - 12, 40, 26, 4); fill('white'); circle(x, y + 1, 14); }
  else if (type === 'video') { rect(x - 20, y - 12, 30, 26, 4); fill('lavender'); triangle(x + 10, y - 8, x + 10, y + 8, x + 22, y); }
  else if (type === 'address') { rect(x - 18, y - 6, 36, 22, 3); triangle(x - 18, y - 6, x + 18, y - 6, x, y - 20); }
  else if (type === 'phone') { rect(x - 12, y - 20, 24, 40, 6); fill('white'); circle(x, y + 13, 5); }
  else { circle(x, y, 30); }
  pop();
}

function mousePressed() {
  if (picked >= 0) return;
  if (pointInRect(mouseX, mouseY, askRect)) { picked = 0; answered[idx] = 0; askCount++; }
  else if (pointInRect(mouseX, mouseY, goRect)) { picked = 1; answered[idx] = 1; }
}

function nextScenario() {
  idx = (idx + 1) % deck.length;
  picked = answered[idx] !== undefined ? answered[idx] : -1;
}

function resetAll() {
  idx = 0; picked = -1; askCount = 0; answered = {};
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
