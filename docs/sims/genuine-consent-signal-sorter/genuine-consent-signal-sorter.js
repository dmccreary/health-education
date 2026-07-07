// Genuine Yes or Reluctant Compliance? - MicroSim (read four signals together)
// CANVAS_HEIGHT: 512
// Grades 9-12, Analyze (L4): students analyze verbal response, body language, tone, and
// context together to distinguish genuine enthusiastic consent from reluctant compliance,
// silence, or a freeze response.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let checkButton;
let reasonButton;

// genuine bool; signals text; reason
let cards = [
  { t: "Says 'yes, definitely!', smiling, relaxed, and brought it up themselves.", g: true, r: 'Enthusiastic words, relaxed body, their own idea — genuine.' },
  { t: "Says 'I guess so...', looking away, quiet tone, after being asked again and again.", g: false, r: 'Reluctant words + repeated pressure = not free consent.' },
  { t: 'Says nothing, frozen and tense, after a surprising request.', g: false, r: 'Silence and a freeze response are not consent.' },
  { t: "Says 'sure!', nodding, warm tone, in a comfortable setting.", g: true, r: 'Clear yes, open body, no pressure — genuine.' },
  { t: "Says 'okay, fine,' sighing, flat tone, just to end the conversation.", g: false, r: 'Giving in to stop the conversation is not genuine.' },
  { t: "Says 'yes, I'd like that,' calm and unpressured.", g: true, r: 'A calm, willing yes with no pressure — genuine.' },
  { t: "Mumbles 'maybe,' shrugging, unsure, feeling watched by others.", g: false, r: 'Uncertainty plus social pressure is not consent.' },
  { t: "Clearly says 'yes,' steady eye contact, after being asked if they wanted to.", g: true, r: 'Clear, informed, and freely chosen — genuine.' },
  { t: "Says 'I don't know...,' pulling back, worried, after a threat.", g: false, r: 'A threat removes free choice — not consent.' },
  { t: "Says 'absolutely,' excited tone, their own suggestion.", g: true, r: 'Enthusiastic and self-initiated — genuine.' },
  { t: 'Goes along silently, stiff posture, avoiding eye contact.', g: false, r: 'Silent compliance is not a genuine yes.' },
  { t: "Says 'yes please,' open posture, with plenty of time to decide.", g: true, r: 'Willing, unpressured, with time — genuine.' }
];

let order = [];
let placed = [];
let checked = false;
let showReason = false;
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Sorting');
  checkButton.mousePressed(() => { checked = true; });
  reasonButton = createButton('Show Reasoning');
  reasonButton.mousePressed(() => { showReason = !showReason; });
  positionControls();
  shuffle();
  describe('Twelve short interaction descriptions, each with a verbal response, body ' +
    'language, tone, and context. Students sort each as Genuine Yes or Not Genuine ' +
    'Consent, then check and reveal which signals mattered.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 14);
  reasonButton.position(160, drawHeight + 14);
}

function shuffle() {
  order = [...Array(cards.length).keys()];
  for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  placed = new Array(cards.length).fill(null);
  checked = false; showReason = false;
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(16);
  text('Genuine Yes or Reluctant Compliance?', canvasWidth / 2, 6);
  textAlign(LEFT, CENTER); textSize(10);
  fill('seagreen'); text('● Genuine Yes', margin, 28);
  fill('indianred'); textAlign(RIGHT, CENTER); text('Not Genuine Consent ●', canvasWidth - margin, 28);

  cardRects = [];
  let y0 = 40, ch = 30, gap = 3;
  for (let k = 0; k < order.length; k++) {
    let i = order[k];
    let y = y0 + k * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, cardRects[k]);
    let p = placed[i];
    let correct = p !== null && p === cards[i].g;
    strokeWeight(1.5);
    if (p === null) { stroke('gray'); fill(hover ? 'lightyellow' : 'white'); }
    else if (checked) { stroke(correct ? 'seagreen' : 'indianred'); strokeWeight(2); fill(correct ? 'honeydew' : 'mistyrose'); }
    else { stroke(p ? 'seagreen' : 'indianred'); fill(p ? 'honeydew' : 'mistyrose'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 4);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(9.5);
    let txt = (showReason && checked) ? cards[i].r : cards[i].t;
    text(txt, margin + 6, y + ch / 2, canvasWidth - margin * 2 - 80, ch);
    textAlign(RIGHT, CENTER); textSize(9);
    if (p === null) { fill('dimgray'); text('tap', canvasWidth - margin - 6, y + ch / 2); }
    else { fill(p ? 'seagreen' : 'indianred'); text((p ? 'Genuine' : 'Not') + (checked ? (correct ? ' ✓' : ' ✗') : ''), canvasWidth - margin - 6, y + ch / 2); }
  }
  cursor(overAny() ? HAND : ARROW);

  let cc = placed.filter((p, i) => p !== null && p === cards[i].g).length;
  noStroke(); textAlign(LEFT, TOP); textSize(10); fill('navy');
  text(checked ? cc + ' of ' + cards.length + ' correct. Toggle Show Reasoning to see the key signals.' : 'Tap each to sort, then Check My Sorting.', margin, drawHeight - 20, canvasWidth - margin * 2, 18);
}

function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  if (checked) return;
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) {
    let cur = placed[r.i];
    placed[r.i] = cur === null ? true : (cur === true ? false : null);
    return;
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
