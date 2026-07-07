// Refusal Skill Matcher - MicroSim (match the pressure to the refusal strategy)
// CANVAS_HEIGHT: 512
// Grade 6-8, Apply (L3): students read a realistic peer-pressure scenario and pick the
// refusal strategy most likely to work, then read feedback on why that tool fits.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 456;
let controlHeight = 56;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let restartButton;

// The five refusal strategies. key = id, label = button text, cue = short icon cue.
let strategies = [
  { key: 'direct',      label: 'Direct "No"',            cue: '✋' },
  { key: 'reason',      label: 'Reason + Refusal',       cue: '💬' },
  { key: 'broken',      label: 'Broken Record',          cue: '🔁' },
  { key: 'exit',        label: 'Exit Strategy',          cue: '🚶' },
  { key: 'alternative', label: 'Suggest an Alternative', cue: '🔄' }
];

// Eight realistic peer scenarios. best = strategy key that fits best.
// why = explanation shown after a pick; also = strategies that could also reasonably work.
let deck = [
  {
    t: 'A friend keeps asking you to skip class with them, even after you have already said no twice.',
    best: 'broken',
    why: 'They are not taking your first answers, so calmly repeat the same short refusal each time. Staying steady wears down the pressure without a new argument.',
    also: ['direct']
  },
  {
    t: 'At a party, someone hands you a vape and says everyone is trying it.',
    best: 'exit',
    why: 'A quick reason plus stepping away ends the pressure fast. Leaving the situation gives you space and time.',
    also: ['direct', 'reason']
  },
  {
    t: 'A classmate wants you to help them cheat on tomorrow\'s test.',
    best: 'reason',
    why: 'Giving a clear reason ("I do not want us to get in trouble") shows you thought it through and makes your no easier to respect.',
    also: ['alternative']
  },
  {
    t: 'Friends are bored and someone suggests spray-painting the back of the school tonight.',
    best: 'alternative',
    why: 'Offering a different plan ("Let\'s shoot hoops instead") redirects the group\'s energy and lets everyone save face.',
    also: ['reason']
  },
  {
    t: 'An older student you barely know keeps pressuring you to share a drink with them.',
    best: 'direct',
    why: 'A firm, plain "No, thanks" with no debate sets a clear limit. You do not owe a long explanation to someone pushing you.',
    also: ['exit']
  },
  {
    t: 'A group keeps daring you to post something mean about a classmate online.',
    best: 'reason',
    why: 'Naming your reason ("That would hurt them and I do not do that") makes your values clear and stops the dare from feeling like a game.',
    also: ['direct']
  },
  {
    t: 'Someone offers you a pill they say will help you focus, and keeps insisting after you decline.',
    best: 'exit',
    why: 'When someone will not stop after your first no, leaving is the safest move. You can say you have to go and walk away.',
    also: ['direct', 'broken']
  },
  {
    t: 'A friend wants you to ditch your other plans to hang out, and asks again and again.',
    best: 'alternative',
    why: 'Suggesting another time ("I can\'t today, but how about this weekend?") keeps the friendship while still holding your plan.',
    also: ['broken', 'reason']
  }
];

let order = [];       // shuffled indices into deck
let pos = 0;          // position within order
let picked = '';      // strategy key the student chose (empty = none yet)
let chipRects = [];   // hit rects for the 5 strategy chips

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next');
  nextButton.mousePressed(next);
  restartButton = createButton('Restart');
  restartButton.mousePressed(restart);
  positionControls();

  shuffleDeck();

  describe('A peer-pressure scenario with five refusal-strategy buttons: Direct No, ' +
    'Reason plus Refusal, Broken Record, Exit Strategy, and Suggest an Alternative. ' +
    'Students pick the strategy that fits best and read why. Next advances; Restart ' +
    'reshuffles the eight scenarios.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 14);
  restartButton.position(70, drawHeight + 14);
}

function shuffleDeck() {
  order = [];
  for (let i = 0; i < deck.length; i++) order.push(i);
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let tmp = order[i]; order[i] = order[j]; order[j] = tmp;
  }
  pos = 0;
  picked = '';
}

function current() { return deck[order[pos]]; }

function strategyLabel(key) {
  for (let s of strategies) if (s.key === key) return s.label;
  return key;
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

  // title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Refusal Skill Matcher', canvasWidth / 2, 6);

  let sc = current();
  let innerW = canvasWidth - margin * 2;

  // scenario card
  let scY = 32;
  let scH = 96;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, scY, innerW, scH, 10);
  noStroke();
  fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
  text('Scenario ' + (pos + 1) + ' of ' + deck.length, margin + 12, scY + 8);
  fill('black'); textSize(14);
  text(sc.t, margin + 12, scY + 28, innerW - 24, scH - 34);

  // prompt line
  let promptY = scY + scH + 8;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(13);
  text('Which refusal strategy fits best?', margin, promptY);

  // five strategy chips, stacked vertically so labels fit on narrow screens
  let chipY0 = promptY + 20;
  let chipH = 34;
  let gap = 8;
  chipRects = [];
  for (let i = 0; i < strategies.length; i++) {
    let s = strategies[i];
    let y = chipY0 + i * (chipH + gap);
    let r = { x: margin, y: y, w: innerW, h: chipH, key: s.key };
    chipRects.push(r);

    let hover = pointInRect(mouseX, mouseY, r) && !picked;
    let isBest = s.key === sc.best;
    let chosen = picked === s.key;

    // color logic: only reveal correctness after a pick
    let fillCol = 'white';
    let strokeCol = 'slategray';
    let sw = 1.5;
    if (picked) {
      if (isBest) { fillCol = 'honeydew'; strokeCol = 'seagreen'; sw = 3; }
      else if (chosen) { fillCol = 'mistyrose'; strokeCol = 'indianred'; sw = 3; }
      else { fillCol = 'whitesmoke'; strokeCol = 'lightgray'; sw = 1.5; }
    } else if (hover) {
      fillCol = 'lightyellow'; strokeCol = 'goldenrod'; sw = 2;
    }
    stroke(strokeCol); strokeWeight(sw); fill(fillCol);
    rect(r.x, r.y, r.w, r.h, 8);

    // cue + label
    noStroke();
    textAlign(LEFT, CENTER); textSize(16);
    text(s.cue, r.x + 12, r.y + r.h / 2);
    fill(picked && !isBest && !chosen ? 'gray' : 'black');
    textSize(15);
    text(s.label, r.x + 40, r.y + r.h / 2 - 8, r.w - 90, 24);

    // small marker on the best/chosen after picking
    if (picked) {
      textAlign(RIGHT, CENTER); textSize(15);
      if (isBest) { fill('seagreen'); text('✓ best fit', r.x + r.w - 12, r.y + r.h / 2); }
      else if (chosen) { fill('indianred'); text('your pick', r.x + r.w - 12, r.y + r.h / 2); }
    }
  }
  cursor(overAnyChip() && !picked ? HAND : ARROW);

  // feedback panel
  let fbY = chipY0 + strategies.length * (chipH + gap) + 4;
  let fbH = drawHeight - fbY - 10;
  fill(picked ? (picked === sc.best ? 'honeydew' : 'cornsilk') : 'white');
  stroke(picked ? (picked === sc.best ? 'seagreen' : 'goldenrod') : 'silver');
  strokeWeight(1.5);
  rect(margin, fbY, innerW, fbH, 8);
  noStroke();
  textAlign(LEFT, TOP);
  if (!picked) {
    fill('dimgray'); textSize(13);
    text('Read the scenario, then tap the strategy you think fits best.',
      margin + 10, fbY + 10, innerW - 20, fbH - 18);
  } else {
    let correct = picked === sc.best;
    let head;
    if (correct) {
      head = 'Strong fit — ' + strategyLabel(sc.best) + '. ';
    } else {
      head = 'The strategy most likely to work here is ' + strategyLabel(sc.best) + '. ';
    }
    let body = sc.why;
    if (sc.also && sc.also.length > 0) {
      let names = sc.also.map(strategyLabel).join(' or ');
      body += ' ' + names + ' could also work.';
    }
    fill(correct ? 'seagreen' : 'darkgoldenrod'); textSize(13);
    text(head, margin + 10, fbY + 8, innerW - 20, 34);
    fill('black'); textSize(12.5);
    text(body, margin + 10, fbY + 34, innerW - 20, fbH - 42);
  }
}

function overAnyChip() {
  for (let r of chipRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (picked) return;
  for (let r of chipRects) {
    if (pointInRect(mouseX, mouseY, r)) { picked = r.key; return; }
  }
}

function next() {
  pos = (pos + 1) % deck.length;
  picked = '';
}

function restart() {
  shuffleDeck();
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
