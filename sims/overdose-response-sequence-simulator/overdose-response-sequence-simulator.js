// Overdose Response Sequence Simulator - MicroSim (order the emergency steps)
// CANVAS_HEIGHT: 722
// Grades 9-12, Apply (L3): read a scenario, then tap the five response steps into
// the correct order. Reinforces that calling 911 always comes first.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 660;
let controlHeight = 62;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton, nextButton, resetButton;

// The five response steps. Index 0..4 is the correct, defensible order.
// 911 (index 0) is REQUIRED first. Scoped to recognizing an emergency and
// seeking help — no substance obtain/use/dose content.
let steps = [
  'Call 911 right away',
  'Stay with the person and keep checking them',
  'Give naloxone if it is available and you are trained',
  'Give rescue breaths or CPR if you are trained',
  'Roll them onto their side (recovery position)'
];

// Bank of four scenarios. Each is about noticing an emergency, not substances.
let scenarios = [
  'At a party you find a friend who will not wake up. Their breathing is slow and making a gurgling sound, and their lips look blue-gray.',
  'You come home and see a family member slumped over and unresponsive. You cannot wake them and their breathing seems very shallow.',
  'On a bus, a passenger has collapsed and is not responding. Their skin looks pale and their chest is barely moving.',
  'After a game, a teammate is unresponsive on the locker-room bench. Their breathing is faint and their fingernails look bluish.'
];
let scenIndex = 0;

let pool = [];       // step indices still available (in shuffled display order)
let seq = [];        // step indices placed into the sequence, in order
let checked = false;

let poolRects = [];
let slotRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  checkButton = createButton('Check Sequence');
  checkButton.mousePressed(() => { if (seq.length === 5) checked = true; });

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetBoard);

  positionControls();
  resetBoard();

  describe('A scenario describes finding an unresponsive person. Five response-step ' +
    'tiles appear in random order. Tap tiles to place them into a numbered sequence, ' +
    'then check whether Call 911 is first and the order is sound. For awareness only, ' +
    'not certification.', LABEL);
}

function positionControls() {
  let y = drawHeight + 14;
  checkButton.position(margin, y);
  nextButton.position(margin + 138, y);
  resetButton.position(margin + 264, y);
}

function shufflePool() {
  pool = [0, 1, 2, 3, 4];
  for (let i = pool.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
}

function resetBoard() {
  seq = [];
  checked = false;
  shufflePool();
}

function nextScenario() {
  scenIndex = (scenIndex + 1) % scenarios.length;
  resetBoard();
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title + subtitle
  fill('navy'); textAlign(CENTER, TOP); textSize(19); textStyle(BOLD);
  text('Overdose Response Sequence', canvasWidth / 2, 8);
  textStyle(NORMAL);
  noStroke(); fill('dimgray'); textAlign(CENTER, TOP); textSize(11);
  text('For awareness only. Take a hands-on first-aid course to be trained.',
    margin, 30, canvasWidth - 2 * margin, 16);

  let innerW = canvasWidth - 2 * margin;

  // --- Scenario card ---
  let scenY = 50;
  let scenH = 88;
  noStroke(); fill('lavender'); stroke('mediumpurple'); strokeWeight(1.5);
  rect(margin, scenY, innerW, scenH, 8);
  noStroke(); fill('mediumpurple'); textAlign(LEFT, TOP); textSize(11); textStyle(BOLD);
  text('SCENARIO ' + (scenIndex + 1) + ' OF ' + scenarios.length, margin + 10, scenY + 8);
  textStyle(NORMAL);
  fill('black'); textAlign(LEFT, TOP); textSize(12.5);
  text(scenarios[scenIndex], margin + 10, scenY + 26, innerW - 20, scenH - 32);

  // --- Sequence slots (Your response order) ---
  let secY = scenY + scenH + 10;
  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(13); textStyle(BOLD);
  text('Your response order', margin, secY);
  textStyle(NORMAL);

  let slotY0 = secY + 19;
  let slotH = 30;
  let slotGap = 5;
  slotRects = [];
  for (let p = 0; p < 5; p++) {
    let y = slotY0 + p * (slotH + slotGap);
    slotRects.push({ x: margin, y: y, w: innerW, h: slotH, p: p });
    let filled = p < seq.length;
    let stepIdx = filled ? seq[p] : -1;
    let correct = checked && filled && stepIdx === p;
    let wrong = checked && filled && stepIdx !== p;

    stroke(correct ? 'seagreen' : (wrong ? 'indianred' : 'steelblue'));
    strokeWeight(1.5);
    if (correct) fill('honeydew');
    else if (wrong) fill('mistyrose');
    else if (filled) fill('white');
    else fill('ghostwhite');
    rect(margin, y, innerW, slotH, 6);

    // number badge
    noStroke(); fill('steelblue'); textAlign(LEFT, CENTER); textSize(14); textStyle(BOLD);
    text(p + 1, margin + 8, y + slotH / 2);
    textStyle(NORMAL);

    if (filled) {
      fill('black'); textAlign(LEFT, CENTER); textSize(11);
      text(steps[stepIdx], margin + 26, y, innerW - 34, slotH);
    } else {
      fill('silver'); textAlign(LEFT, CENTER); textSize(11); textStyle(ITALIC);
      text('tap a step below', margin + 26, y, innerW - 34, slotH);
      textStyle(NORMAL);
    }
  }

  // --- Pool of remaining steps ---
  let poolY0 = slotY0 + 5 * (slotH + slotGap) + 6;
  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(13); textStyle(BOLD);
  text('Action steps  (tap to add)', margin, poolY0);
  textStyle(NORMAL);

  let ty0 = poolY0 + 19;
  let th = 28;
  let tgap = 5;
  poolRects = [];
  for (let i = 0; i < pool.length; i++) {
    let y = ty0 + i * (th + tgap);
    poolRects.push({ x: margin, y: y, w: innerW, h: th, idx: pool[i] });
    stroke('goldenrod'); strokeWeight(1.5); fill('lightyellow');
    rect(margin, y, innerW, th, 6);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(11);
    text(steps[pool[i]], margin + 10, y, innerW - 18, th);
  }
  if (pool.length === 0) {
    noStroke(); fill('seagreen'); textAlign(LEFT, TOP); textSize(11); textStyle(ITALIC);
    text('All steps placed. Tap Check Sequence.', margin, ty0 + 2);
    textStyle(NORMAL);
  }

  // --- Feedback / infobox ---
  let fbH = 112;
  let fbY = drawHeight - fbH - 4;
  noStroke();
  if (checked) {
    let firstOk = seq[0] === 0;
    let allOk = seq.every((v, i) => v === i);
    let placedRight = seq.filter((v, i) => v === i).length;

    // banner
    fill(firstOk ? 'honeydew' : 'mistyrose');
    stroke(firstOk ? 'seagreen' : 'indianred'); strokeWeight(1.5);
    rect(margin, fbY, innerW, fbH, 8);
    noStroke();

    if (allOk) {
      fill('seagreen'); textAlign(LEFT, TOP); textSize(12); textStyle(BOLD);
      text('Great order! Call 911 first, then stay and help until they arrive.', margin + 10, fbY + 8, innerW - 20, 36);
    } else if (firstOk) {
      fill('darkgoldenrod'); textAlign(LEFT, TOP); textSize(12); textStyle(BOLD);
      text('911 is first — good. ' + placedRight + ' of 5 match a common order. Any order after 911 that keeps the person breathing is defensible.', margin + 10, fbY + 8, innerW - 20, 46);
    } else {
      fill('indianred'); textAlign(LEFT, TOP); textSize(12); textStyle(BOLD);
      text('Put Call 911 first. It always comes first so trained help is already on the way before anything else.', margin + 10, fbY + 8, innerW - 20, 46);
    }
    textStyle(NORMAL);
    fill('dimgray'); textAlign(LEFT, TOP); textSize(10.5);
    text('Good Samaritan laws protect people who call for help. Naloxone can briefly reverse an opioid emergency — but only opioids, so 911 is still essential.',
      margin + 10, fbY + 58, innerW - 20, fbH - 62);
  } else {
    fill('aliceblue'); stroke('steelblue'); strokeWeight(1);
    rect(margin, fbY, innerW, fbH, 8);
    noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11.5);
    if (seq.length === 0) {
      text('Tap the action steps in the order you would do them. Tap a numbered slot to send that step back down.', margin + 10, fbY + 12, innerW - 20, fbH - 20);
    } else if (seq.length < 5) {
      text('Placed ' + seq.length + ' of 5. Keep going, then tap Check Sequence. Tap any placed step to remove it.', margin + 10, fbY + 12, innerW - 20, fbH - 20);
    } else {
      text('All 5 placed. Tap Check Sequence to see how you did. Tap a placed step to change it.', margin + 10, fbY + 12, innerW - 20, fbH - 20);
    }
  }

  cursor(overAny() ? HAND : ARROW);
}

function overAny() {
  if (!checked) {
    for (let r of poolRects) if (pointInRect(mouseX, mouseY, r)) return true;
    for (let r of slotRects) if (r.p < seq.length && pointInRect(mouseX, mouseY, r)) return true;
  }
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (checked) return;
  // tap a pool tile -> append to sequence
  for (let r of poolRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      if (seq.length < 5) {
        seq.push(r.idx);
        pool = pool.filter(v => v !== r.idx);
      }
      return;
    }
  }
  // tap a filled slot -> remove back to pool
  for (let r of slotRects) {
    if (r.p < seq.length && pointInRect(mouseX, mouseY, r)) {
      let removed = seq[r.p];
      seq.splice(r.p, 1);
      pool.push(removed);
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
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
