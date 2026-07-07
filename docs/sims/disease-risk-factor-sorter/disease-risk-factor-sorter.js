// Disease Risk Factor Sorter - MicroSim (classify 12 factors into 3 categories)
// CANVAS_HEIGHT: 512
// Grades 9-12, Analyze (L4): students classify risk factors as primarily behavioral,
// primarily environmental, or interacting with both chronic and infectious risk.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let resetButton;

// cat: 'beh','env','both'; e explanation
let cards = [
  { t: 'Diet high in processed food', cat: 'beh', e: 'A behavior you can change; drives chronic disease.' },
  { t: 'Overcrowded housing', cat: 'env', e: 'An environmental condition raising infectious spread.' },
  { t: 'Smoking', cat: 'beh', e: 'A behavior; major chronic-disease risk.' },
  { t: 'Poor ventilation in shared spaces', cat: 'env', e: 'Environmental; raises airborne infection risk.' },
  { t: 'Limited access to handwashing', cat: 'both', e: 'Environment shapes a behavior; affects infection risk.' },
  { t: 'Sedentary daily routine', cat: 'beh', e: 'A behavior; chronic-disease risk.' },
  { t: 'Chronic air pollution exposure', cat: 'env', e: 'Environmental; affects chronic (lung/heart) risk.' },
  { t: 'Inconsistent vaccination access', cat: 'both', e: 'Access (environment) shapes protection (behavior); infectious risk.' },
  { t: 'High added-sugar intake', cat: 'beh', e: 'A behavior; chronic-disease risk.' },
  { t: 'Unsafe drinking water', cat: 'env', e: 'Environmental; infectious-disease risk.' },
  { t: 'Neighborhood without safe places to exercise', cat: 'both', e: 'Environment limits a health behavior; chronic risk.' },
  { t: 'Not covering coughs', cat: 'beh', e: 'A behavior; infectious-spread risk.' }
];
let catNames = { beh: 'Behavioral', env: 'Environmental', both: 'Both / Interacts' };
let cycle = ['beh', 'env', 'both'];

let placed = new Array(cards.length).fill(null);
let feedback = 'Tap each card to cycle Behavioral → Environmental → Both.';
let feedbackColor = 'dimgray';
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  describe('Twelve risk-factor cards to classify as primarily behavioral, primarily ' +
    'environmental, or interacting with both. Tapping a card cycles its category with ' +
    'immediate feedback; a note reminds that environment shapes behavioral control.', LABEL);
}

function positionControls() { resetButton.position(10, drawHeight + 14); }

function reset() { placed = new Array(cards.length).fill(null); feedback = 'Tap each card to cycle Behavioral → Environmental → Both.'; feedbackColor = 'dimgray'; }

function catColor(c) { return c === 'beh' ? 'mediumpurple' : (c === 'env' ? 'steelblue' : 'seagreen'); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Disease Risk Factor Sorter', canvasWidth / 2, 6);
  // legend
  textAlign(CENTER, CENTER); textSize(10);
  fill('mediumpurple'); text('■ Behavioral', canvasWidth * 0.2, 30);
  fill('steelblue'); text('■ Environmental', canvasWidth * 0.5, 30);
  fill('seagreen'); text('■ Both', canvasWidth * 0.8, 30);

  cardRects = [];
  let y0 = 42, ch = 30, gap = 3;
  for (let i = 0; i < cards.length; i++) {
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, cardRects[i]);
    let correct = placed[i] === cards[i].cat;
    strokeWeight(1.5);
    if (placed[i] === null) { stroke('gray'); fill(hover ? 'lightyellow' : 'white'); }
    else { stroke(correct ? 'seagreen' : 'indianred'); strokeWeight(2); fill(correct ? 'honeydew' : 'mistyrose'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 5);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(11);
    text(cards[i].t, margin + 8, y + ch / 2, canvasWidth - margin * 2 - 130, ch);
    textAlign(RIGHT, CENTER); textSize(10);
    if (placed[i] === null) { fill('dimgray'); text('tap to sort', canvasWidth - margin - 8, y + ch / 2); }
    else { fill(catColor(placed[i])); text(catNames[placed[i]] + (correct ? ' ✓' : ' ✗'), canvasWidth - margin - 8, y + ch / 2); }
  }
  cursor(overAny() ? HAND : ARROW);

  let correctCount = placed.filter((p, i) => p === cards[i].cat).length;
  let placedCount = placed.filter(p => p !== null).length;
  noStroke(); textAlign(LEFT, TOP); textSize(11);
  if (placedCount === cards.length) { fill('seagreen'); feedback = 'Note: most environmental factors also shape how much control a person has over the behavioral ones.'; }
  fill(feedbackColor === 'dimgray' && placedCount === cards.length ? 'seagreen' : feedbackColor);
  text((placedCount ? '(' + correctCount + '/' + placedCount + ') ' : '') + feedback, margin, drawHeight - 26, canvasWidth - margin * 2, 24);
}

function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of cardRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      let cur = placed[r.i];
      let idx = cur === null ? -1 : cycle.indexOf(cur);
      placed[r.i] = idx >= 2 ? null : cycle[idx + 1];
      if (placed[r.i] !== null) {
        let correct = placed[r.i] === cards[r.i].cat;
        feedback = (correct ? '✓ ' : '✗ ') + cards[r.i].e;
        feedbackColor = correct ? 'seagreen' : 'indianred';
      } else { feedback = 'Unsorted.'; feedbackColor = 'dimgray'; }
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
