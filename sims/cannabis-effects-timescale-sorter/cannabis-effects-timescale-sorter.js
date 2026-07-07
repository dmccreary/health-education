// Cannabis Effects By Timescale Sorter - MicroSim (classify short vs long-term)
// CANVAS_HEIGHT: 522
// Grades 9-12, Analyze (L4): classify documented cannabis effects into short-term vs
// long-term, and differentiate physical/mental/relational layers. Grounded in NIDA/CDC
// summaries; no card depicts a method of use.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let layerButton;
let resetButton;

// ts: 'short' or 'long'; layer: physical/mental/relational
let cards = [
  { t: 'Impaired short-term memory during use', ts: 'short', layer: 'mental', e: 'A short-term cognitive effect during intoxication.' },
  { t: 'Slower reaction time and coordination', ts: 'short', layer: 'physical', e: 'Physical impairment that fades as the drug wears off.' },
  { t: 'Increased heart rate soon after use', ts: 'short', layer: 'physical', e: 'A short-term cardiovascular response.' },
  { t: 'Anxiety or altered mood in the moment', ts: 'short', layer: 'mental', e: 'A short-term change in mood or perception.' },
  { t: 'Strained interactions while impaired', ts: 'short', layer: 'relational', e: 'A short-term relational effect during use.' },
  { t: 'Cannabis use disorder with withdrawal', ts: 'long', layer: 'mental', e: 'A long-term pattern that can develop with repeated use.' },
  { t: 'Effects on adolescent brain development', ts: 'long', layer: 'mental', e: 'A long-term concern specific to still-developing brains.' },
  { t: 'Lung irritation from smoke over time', ts: 'long', layer: 'physical', e: 'A long-term physical effect from repeated exposure.' },
  { t: 'Lower motivation affecting school/goals', ts: 'long', layer: 'relational', e: 'A longer-term effect on daily functioning and goals.' },
  { t: 'Strained relationships over months/years', ts: 'long', layer: 'relational', e: 'A long-term relational effect of ongoing use.' }
];

let layerColors = { physical: 'steelblue', mental: 'mediumorchid', relational: 'darkorange' };
let placed = new Array(cards.length).fill(null);
let showLayers = false;
let feedback = 'Tap each effect to file it as Short-Term or Long-Term.';
let feedbackColor = 'dimgray';
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  layerButton = createButton('Toggle Layer Colors');
  layerButton.mousePressed(() => { showLayers = !showLayers; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  describe('Ten cannabis-effect cards to classify as short-term (minutes to hours) or ' +
    'long-term (months to years). Tapping a card cycles its placement and gives immediate ' +
    'feedback. A toggle color-codes physical, mental, and relational layers.', LABEL);
}

function positionControls() {
  layerButton.position(10, drawHeight + 12);
  resetButton.position(180, drawHeight + 12);
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
  text('Cannabis Effects by Timescale', canvasWidth / 2, 6);

  // zone legend
  noStroke(); textAlign(LEFT, CENTER); textSize(11);
  fill('slateblue'); text('Short-Term: minutes–hours', margin, 34);
  fill('saddlebrown'); textAlign(RIGHT, CENTER); text('Long-Term: months–years', canvasWidth - margin, 34);

  // cards
  cardRects = [];
  let y0 = 48, ch = 36, gap = 4;
  for (let i = 0; i < cards.length; i++) {
    let y = y0 + i * (ch + gap);
    cardRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, cardRects[i]);
    let correct = placed[i] === cards[i].ts;
    strokeWeight(1.5);
    if (placed[i] === null) { stroke(showLayers ? layerColors[cards[i].layer] : 'gray'); fill(hover ? 'lightyellow' : 'white'); }
    else if (correct) { stroke('seagreen'); strokeWeight(2.5); fill('honeydew'); }
    else { stroke('indianred'); strokeWeight(2.5); fill('mistyrose'); }
    rect(margin, y, canvasWidth - margin * 2, ch, 6);
    // layer color strip
    if (showLayers) { noStroke(); fill(layerColors[cards[i].layer]); rect(margin, y, 6, ch, 6, 0, 0, 6); }
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(12);
    text(cards[i].t, margin + 14, y + ch / 2, canvasWidth - margin * 2 - 120, ch);
    // placement tag
    textAlign(RIGHT, CENTER); textSize(11);
    if (placed[i] === null) { fill('dimgray'); text('tap to file', canvasWidth - margin - 8, y + ch / 2); }
    else {
      fill(correct ? 'seagreen' : 'indianred');
      text((placed[i] === 'short' ? 'Short' : 'Long') + (correct ? ' ✓' : ' ✗'), canvasWidth - margin - 8, y + ch / 2);
    }
  }
  cursor(overAnyCard() ? HAND : ARROW);

  // feedback line
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  fill(feedbackColor);
  let placedCount = placed.filter(p => p !== null).length;
  let correctCount = placed.filter((p, i) => p === cards[i].ts).length;
  let prefix = placedCount ? '(' + correctCount + '/' + placedCount + ' correct)  ' : '';
  text(prefix + feedback, margin, drawHeight - 22, canvasWidth - margin * 2, 20);
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
      let cur = placed[r.i];
      placed[r.i] = cur === null ? 'short' : (cur === 'short' ? 'long' : null);
      if (placed[r.i] !== null) {
        let correct = placed[r.i] === cards[r.i].ts;
        feedback = (correct ? '✓ Correct. ' : '✗ Not quite. ') + cards[r.i].e;
        feedbackColor = correct ? 'seagreen' : 'indianred';
      } else { feedback = 'Unfiled — tap again to file.'; feedbackColor = 'dimgray'; }
      return;
    }
  }
}

function reset() {
  placed = new Array(cards.length).fill(null);
  feedback = 'Tap each effect to file it as Short-Term or Long-Term.';
  feedbackColor = 'dimgray';
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
