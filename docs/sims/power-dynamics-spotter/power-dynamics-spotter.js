// Power Dynamics Spotter - MicroSim (identify power source, then judge fair vs. exploitative)
// CANVAS_HEIGHT: 552
// Grades 6-8, Analyze (L4): examine a relationship scenario, pick the source of the power
// imbalance, then judge whether the influence is fair guidance or exploitative pressure.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 502;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;

// Power sources (index used as answer key)
let sources = ['Age', 'Popularity', 'Size', 'Information', 'Emotional', 'None'];

// Scenario deck. src = index into sources. fair = true (fair guidance) / false (exploitative).
// srcWhy explains the power source; fairWhy explains the fairness judgment.
let deck = [
  {
    t: 'An 8th grader tells a 6th grader to give up their lunch seat or face being left out.',
    src: 4, fair: false,
    srcWhy: 'The pressure comes from a threat to belonging, so the power source is emotional leverage.',
    fairWhy: 'Using fear of exclusion to force someone is exploitative pressure, not fair guidance.'
  },
  {
    t: 'A team captain reminds a new player of the practice times and offers to help them warm up.',
    src: 0, fair: true,
    srcWhy: 'The captain has more experience and standing, so the power source is age or role.',
    fairWhy: 'Sharing helpful information and support is a fair use of influence.'
  },
  {
    t: 'A popular student says they will spread rumors unless a classmate does what they ask.',
    src: 1, fair: false,
    srcWhy: 'Their social status is the lever, so the power source is popularity.',
    fairWhy: 'Threatening someone\'s reputation to control them is exploitative pressure.'
  },
  {
    t: 'An older cousin helps with homework and sets a fair bedtime during a sleepover.',
    src: 0, fair: true,
    srcWhy: 'The cousin is older and in a caretaking role, so the power source is age.',
    fairWhy: 'Guiding a younger person with their well-being in mind is fair guidance.'
  },
  {
    t: 'A student who knows a classmate\'s secret hints they might tell it unless they get a favor.',
    src: 3, fair: false,
    srcWhy: 'Holding private knowledge is the lever, so the power source is access to information.',
    fairWhy: 'Using a secret to get favors is exploitative pressure, a form of blackmail.'
  },
  {
    t: 'A club president explains the rules so a new member knows how meetings work.',
    src: 3, fair: true,
    srcWhy: 'The president knows things the newcomer does not, so the source is information.',
    fairWhy: 'Sharing information openly to include someone is a fair use of influence.'
  },
  {
    t: 'A taller student stands over a smaller one and demands they hand over their snack.',
    src: 2, fair: false,
    srcWhy: 'The intimidation comes from being bigger, so the power source is size.',
    fairWhy: 'Using physical presence to take something is exploitative pressure.'
  },
  {
    t: 'Two friends of equal standing calmly talk through a disagreement and agree on a plan.',
    src: 5, fair: true,
    srcWhy: 'Neither friend holds more power here, so there is no power imbalance.',
    fairWhy: 'Working things out as equals is fair, respectful influence.'
  }
];

let order = [];
let idx = 0;
let pickedSrc = -1;   // chosen power source index, -1 = none yet
let pickedFair = -1;  // 1 = fair, 0 = exploitative, -1 = none yet
let completed = 0;    // scenarios where both parts answered
let scored = false;   // did we already count this card toward completed

let srcRects = [];
let fairRects = [];

// layout anchors (set each draw from current width)
function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  order = shuffledOrder(deck.length);

  nextButton = createButton('Next Scenario');
  nextButton.parent(document.querySelector('main'));
  nextButton.mousePressed(nextScenario);
  positionControls();

  describe('Eight relationship scenarios. For each, click the source of the power imbalance ' +
    '(age, popularity, size, information, emotional leverage, or none), then judge whether the ' +
    'influence is fair guidance or exploitative pressure. Feedback explains both choices and a ' +
    'tally tracks completed scenarios.', LABEL);
}

function shuffledOrder(n) {
  let a = [];
  for (let i = 0; i < n; i++) a.push(i);
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

function positionControls() {
  nextButton.position(margin, drawHeight + 10);
}

function nextScenario() {
  if (idx < order.length - 1) {
    idx++;
    pickedSrc = -1;
    pickedFair = -1;
    scored = false;
  }
}

function currentCard() {
  return deck[order[idx]];
}

function draw() {
  updateCanvasSize();

  // regions
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  let card = currentCard();
  let cw = canvasWidth - margin * 2;

  // title
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Power Dynamics Spotter', canvasWidth / 2, 8);

  // progress bar + tally
  let barY = 34;
  noStroke(); fill('gainsboro'); rect(margin, barY, cw, 9, 5);
  fill('seagreen'); rect(margin, barY, cw * (idx + 1) / order.length, 9, 5);
  fill('dimgray'); textAlign(RIGHT, TOP); textSize(11);
  text('Scenario ' + (idx + 1) + '/' + order.length + '   ·   Completed: ' + completed, canvasWidth - margin, barY + 13);

  // scenario card
  let cardY = 62, cardH = 76;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, cardY, cw, cardH, 10);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14);
  text(card.t, margin + 12, cardY + 6, cw - 24, cardH - 12);

  // ---- Part 1: power source (3 x 2 grid of chips) ----
  let p1Y = cardY + cardH + 8;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12.5);
  text('1. What is the source of power?', margin, p1Y);

  let gridY = p1Y + 20;
  let cols = 3, rows = 2, gap = 8;
  let cellW = (cw - gap * (cols - 1)) / cols;
  let cellH = 34;
  srcRects = [];
  for (let i = 0; i < sources.length; i++) {
    let r = Math.floor(i / cols), c = i % cols;
    let x = margin + c * (cellW + gap);
    let y = gridY + r * (cellH + gap);
    let rr = { x: x, y: y, w: cellW, h: cellH, i: i };
    srcRects.push(rr);

    let hover = pickedSrc < 0 && pointInRect(mouseX, mouseY, rr);
    let isA = card.src === i;
    strokeWeight(1.5); stroke('mediumpurple');
    if (pickedSrc < 0) {
      fill(hover ? 'lavender' : 'white');
    } else if (isA) {
      fill('honeydew'); stroke('seagreen'); strokeWeight(2.5);
    } else if (i === pickedSrc) {
      fill('mistyrose'); stroke('indianred'); strokeWeight(2.5);
    } else {
      fill('white');
    }
    rect(x, y, cellW, cellH, 7);
    noStroke(); fill('indigo'); textAlign(CENTER, CENTER); textSize(12.5);
    text(sources[i], x, y, cellW, cellH);
  }
  let gridBottom = gridY + rows * (cellH + gap) - gap;

  // ---- Part 2: fair vs exploitative (2 bins) ----
  let p2Y = gridBottom + 10;
  let p2Enabled = pickedSrc >= 0;
  noStroke(); fill(p2Enabled ? 'navy' : 'silver'); textAlign(LEFT, TOP); textSize(12.5);
  text('2. Is this fair guidance or exploitative pressure?', margin, p2Y);

  let binsY = p2Y + 20, binH = 40, binGap = 10;
  let binW = (cw - binGap) / 2;
  let fairLabels = ['Fair guidance', 'Exploitative pressure'];
  let fairVals = [1, 0];
  fairRects = [];
  for (let k = 0; k < 2; k++) {
    let x = margin + k * (binW + binGap);
    let rr = { x: x, y: binsY, w: binW, h: binH, v: fairVals[k] };
    fairRects.push(rr);

    let hover = p2Enabled && pickedFair < 0 && pointInRect(mouseX, mouseY, rr);
    let answered = pickedFair >= 0;
    let isA = (card.fair ? 1 : 0) === fairVals[k];
    strokeWeight(1.5); stroke(p2Enabled ? 'steelblue' : 'gainsboro');
    if (!p2Enabled) {
      fill('whitesmoke');
    } else if (!answered) {
      fill(hover ? 'lightcyan' : 'white');
    } else if (isA) {
      fill('honeydew'); stroke('seagreen'); strokeWeight(2.5);
    } else if (pickedFair === fairVals[k]) {
      fill('mistyrose'); stroke('indianred'); strokeWeight(2.5);
    } else {
      fill('white');
    }
    rect(x, binsY, binW, binH, 8);
    noStroke();
    fill(p2Enabled ? (fairVals[k] === 1 ? 'seagreen' : 'indianred') : 'silver');
    textAlign(CENTER, CENTER); textSize(13);
    text(fairLabels[k], x + 6, binsY, binW - 12, binH);
  }

  // cursor
  let overClickable =
    (pickedSrc < 0 && overRects(srcRects)) ||
    (p2Enabled && pickedFair < 0 && overRects(fairRects));
  cursor(overClickable ? HAND : ARROW);

  // ---- Feedback panel ----
  let fbY = binsY + binH + 10;
  let fbH = drawHeight - fbY - 10;
  fill('white'); stroke('gainsboro'); strokeWeight(1);
  rect(margin, fbY, cw, fbH, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(11.5);
  let pad = 9;
  if (pickedSrc < 0) {
    fill('dimgray');
    text('Start by choosing the source of power above.', margin + pad, fbY + pad, cw - pad * 2, fbH - pad * 2);
  } else if (pickedFair < 0) {
    // Part 1 feedback only
    let ok1 = pickedSrc === card.src;
    let line1 = (ok1 ? '✓ Power source: ' : '✗ Source is ' + sources[card.src] + '. ') + card.srcWhy;
    fill(ok1 ? 'seagreen' : 'indianred');
    text(line1, margin + pad, fbY + pad, cw - pad * 2, fbH - pad * 2);
  } else {
    // both answered: show both explanations
    let ok1 = pickedSrc === card.src;
    let ok2 = (pickedFair === 1) === card.fair;
    let l1 = (ok1 ? '✓ ' : '✗ ') + 'Source (' + sources[card.src] + '): ' + card.srcWhy;
    let l2 = (ok2 ? '✓ ' : '✗ ') + 'Judgment (' + (card.fair ? 'Fair' : 'Exploitative') + '): ' + card.fairWhy;
    let half = (fbH - pad * 2) / 2;
    fill(ok1 ? 'seagreen' : 'indianred');
    text(l1, margin + pad, fbY + pad, cw - pad * 2, half);
    fill(ok2 ? 'seagreen' : 'indianred');
    text(l2, margin + pad, fbY + pad + half, cw - pad * 2, half);
  }
}

function overRects(list) {
  for (let r of list) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  let card = currentCard();
  // Part 1: choose power source
  if (pickedSrc < 0) {
    for (let r of srcRects) {
      if (pointInRect(mouseX, mouseY, r)) { pickedSrc = r.i; return; }
    }
    return;
  }
  // Part 2: judge fairness (only after Part 1)
  if (pickedFair < 0) {
    for (let r of fairRects) {
      if (pointInRect(mouseX, mouseY, r)) {
        pickedFair = r.v;
        if (!scored) { completed++; scored = true; }
        return;
      }
    }
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
}

function updateCanvasSize() {
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
