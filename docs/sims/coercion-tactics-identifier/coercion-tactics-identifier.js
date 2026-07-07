// Coercion Tactics Identifier - MicroSim (classify the pressure tactic)
// CANVAS_HEIGHT: 492
// Grades 6-8, Analyze (L4): students analyze short dialogue examples and identify which
// of five coercion tactics is present. Plain text only; no depicted violence.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let nextButton;
let resetButton;

let tactics = ['Guilt-tripping', 'Repeated pressure', 'Threats', 'Exploiting power', 'Wearing down'];

// a = correct tactic index; phrase = signal; e = why
let deck = [
  { l1: '"I don\'t want to share my password."', l2: '"If you really trusted me, you\'d show me."', a: 0, phrase: '"If you really trusted me"', e: 'Making you feel guilty for a fair boundary is guilt-tripping, not a fair request.' },
  { l1: '"No thanks."', l2: '"Come on, come on — just once, please, please?"', a: 1, phrase: 'repeating "please, please"', e: 'Asking again and again after a no is repeated pressure.' },
  { l1: '"I\'d rather not."', l2: '"Do it, or I\'ll tell everyone your secret."', a: 2, phrase: '"or I\'ll tell everyone"', e: 'Adding an "or else" consequence to force a yes is a threat.' },
  { l1: '"I\'m not comfortable with that."', l2: '"I\'m older, so you have to listen to me."', a: 3, phrase: '"I\'m older, so you have to"', e: 'Using age or status to override you is exploiting a power difference.' },
  { l1: '"No."', l2: '(brings it up again and again every day until you give in)', a: 4, phrase: 'asking daily until you give in', e: 'Repeating until you are too tired to say no is wearing someone down.' },
  { l1: '"I can\'t come today."', l2: '"After everything I do for you, you can\'t do this one thing?"', a: 0, phrase: '"After everything I do for you"', e: 'Framing a boundary as ingratitude is guilt-tripping.' },
  { l1: '"Please stop asking."', l2: '"But why not? Why not? Just tell me why not."', a: 1, phrase: 'repeating "why not?"', e: 'Refusing to accept a no and pressing again is repeated pressure.' },
  { l1: '"I said no."', l2: '"Fine — then I won\'t be your friend anymore."', a: 2, phrase: '"I won\'t be your friend anymore"', e: 'Threatening to end the friendship to force a yes is a threat.' },
  { l1: '"That\'s not okay with me."', l2: '"I\'m the captain, so what I say goes."', a: 3, phrase: '"I\'m the captain, so"', e: 'Using a position of authority to override you is exploiting power.' },
  { l1: '"No, thank you."', l2: '(keeps nagging quietly for an hour until you stop resisting)', a: 4, phrase: 'nagging until you stop resisting', e: 'Steady nagging until your resistance fades is wearing you down.' }
];

let order = [];
let idx = 0;
let picked = -1;
let tacticRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Dialogue');
  nextButton.mousePressed(next);
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  shuffle();
  describe('A short two-line dialogue with five coercion-tactic buttons — guilt-tripping, ' +
    'repeated pressure, threats, exploiting power, and wearing down. Students pick the ' +
    'tactic present and get feedback naming the exact phrase that signals it.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(140, drawHeight + 12);
}

function shuffle() {
  order = [...Array(deck.length).keys()];
  for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  idx = 0; picked = -1;
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
  text('Coercion Tactics Identifier', canvasWidth / 2, 8);

  let card = deck[order[idx]];
  // dialogue
  let cy = 40, ch = 96;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, cy, canvasWidth - margin * 2, ch, 10);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
  text('Dialogue ' + (idx + 1) + ' of ' + deck.length, margin + 12, cy + 8);
  fill('black'); textSize(15);
  text('Person A: ' + card.l1, margin + 12, cy + 28, canvasWidth - margin * 2 - 24, 30);
  fill('firebrick');
  text('Person B: ' + card.l2, margin + 12, cy + 58, canvasWidth - margin * 2 - 24, 34);

  // tactic buttons
  tacticRects = [];
  let by0 = cy + ch + 12, bh = 34, gap = 6;
  for (let i = 0; i < 5; i++) {
    let y = by0 + i * (bh + gap);
    tacticRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: bh, i: i });
    let hover = pointInRect(mouseX, mouseY, tacticRects[i]);
    let isAns = card.a === i;
    strokeWeight(1.5); stroke('mediumpurple');
    if (picked < 0) fill(hover ? 'lavender' : 'white');
    else if (isAns) { fill('honeydew'); stroke('seagreen'); strokeWeight(2.5); }
    else if (i === picked) { fill('mistyrose'); stroke('indianred'); strokeWeight(2.5); }
    else fill('white');
    rect(margin, y, canvasWidth - margin * 2, bh, 7);
    noStroke(); fill('indigo'); textAlign(CENTER, CENTER); textSize(13);
    text(tactics[i], margin, y, canvasWidth - margin * 2, bh);
  }
  cursor(picked < 0 && overAny() ? HAND : ARROW);

  // feedback
  let fy = by0 + 5 * (bh + gap) + 2;
  textAlign(LEFT, TOP); textSize(12);
  if (picked < 0) {
    fill('dimgray');
    text('Which tactic is Person B using? Click one.', margin, fy, canvasWidth - margin * 2, 30);
  } else {
    let correct = picked === card.a;
    fill(correct ? 'seagreen' : 'indianred');
    text((correct ? '✓ ' : '✗ ') + 'The signal is ' + card.phrase + '. ' + card.e,
      margin, fy, canvasWidth - margin * 2, drawHeight - fy - 6);
  }
}

function overAny() {
  for (let r of tacticRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (picked >= 0) return;
  for (let r of tacticRects) if (pointInRect(mouseX, mouseY, r)) { picked = r.i; return; }
}

function next() {
  idx = (idx + 1) % deck.length;
  picked = -1;
}
function reset() { shuffle(); }

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
