// Forms of Unfair Treatment Explorer - MicroSim (direct / subtle / institutional)
// CANVAS_HEIGHT: 512
// Grades 6-8, Understand (L2): students classify realistic scenarios into direct, subtle,
// or institutional unfair treatment.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let resetButton;

// cat: 'direct','subtle','institutional'; e reason
let cards = [
  { t: "A student is openly told they can't join a club because of their accent.", cat: 'direct', e: 'Openly excluding someone is direct unfair treatment.' },
  { t: 'A teacher only calls on certain students during discussion.', cat: 'subtle', e: 'A quiet, unspoken pattern is subtle unfairness.' },
  { t: 'A dress code bans hairstyles worn mostly by one ethnic group.', cat: 'institutional', e: 'An unfair rule built into a system is institutional.' },
  { t: 'A student is called a mean name about their background.', cat: 'direct', e: 'A direct insult is direct unfair treatment.' },
  { t: "People assume a quiet student isn't smart.", cat: 'subtle', e: 'An unspoken assumption is subtle unfairness.' },
  { t: "A building has no ramp, so some students can't get in.", cat: 'institutional', e: 'A barrier built into a structure is institutional.' },
  { t: 'A group refuses to let someone sit with them because of how they dress.', cat: 'direct', e: 'Open exclusion to their face is direct.' },
  { t: 'A clerk watches one group of kids more closely.', cat: 'subtle', e: 'Quiet differential treatment is subtle.' },
  { t: 'A test is offered in only one language, limiting some students.', cat: 'institutional', e: 'A policy that disadvantages a group is institutional.' },
  { t: 'Someone is openly mocked for their religion.', cat: 'direct', e: 'Open mockery is direct unfair treatment.' }
];
let catNames = { direct: 'Direct', subtle: 'Subtle', institutional: 'Institutional' };
let cycle = ['direct', 'subtle', 'institutional'];
let catColors = { direct: 'indianred', subtle: 'goldenrod', institutional: 'steelblue' };

let placed = new Array(cards.length).fill(null);
let feedback = 'Tap each card to cycle Direct → Subtle → Institutional.';
let feedbackColor = 'dimgray';
let cardRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resetButton = createButton('Reset Deck');
  resetButton.mousePressed(() => { placed = new Array(cards.length).fill(null); feedback = 'Tap each card to cycle Direct → Subtle → Institutional.'; feedbackColor = 'dimgray'; });
  positionControls();
  describe('Ten scenario cards to classify as direct, subtle, or institutional unfair ' +
    'treatment. Tapping a card cycles its category with a supportive one-sentence reason.', LABEL);
}

function positionControls() { resetButton.position(10, drawHeight + 14); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(17);
  text('Forms of Unfair Treatment', canvasWidth / 2, 6);
  textAlign(CENTER, CENTER); textSize(10);
  fill('indianred'); text('■ Direct', canvasWidth * 0.2, 30);
  fill('goldenrod'); text('■ Subtle', canvasWidth * 0.5, 30);
  fill('steelblue'); text('■ Institutional', canvasWidth * 0.8, 30);

  cardRects = [];
  let y0 = 42, ch = 36, gap = 4;
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
    else { fill(catColors[placed[i]]); text(catNames[placed[i]] + (correct ? ' ✓' : ' ✗'), canvasWidth - margin - 8, y + ch / 2); }
  }
  cursor(overAny() ? HAND : ARROW);

  let cc = placed.filter((p, i) => p === cards[i].cat).length;
  let pc = placed.filter(p => p !== null).length;
  noStroke(); textAlign(LEFT, TOP); textSize(11); fill(feedbackColor);
  text((pc ? '(' + cc + '/' + pc + ') ' : '') + feedback, margin, drawHeight - 24, canvasWidth - margin * 2, 22);
}

function overAny() { for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of cardRects) if (pointInRect(mouseX, mouseY, r)) {
    let cur = placed[r.i];
    let ci = cur === null ? -1 : cycle.indexOf(cur);
    placed[r.i] = ci >= 2 ? null : cycle[ci + 1];
    if (placed[r.i] !== null) { let ok = placed[r.i] === cards[r.i].cat; feedback = (ok ? '✓ ' : '✗ ') + cards[r.i].e; feedbackColor = ok ? 'seagreen' : 'indianred'; }
    else { feedback = 'Unsorted.'; feedbackColor = 'dimgray'; }
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
