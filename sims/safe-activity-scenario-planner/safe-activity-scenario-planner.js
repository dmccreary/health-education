// Safe Activity Scenario Planner - MicroSim (match strategies to an environmental barrier)
// CANVAS_HEIGHT: 532
// Grades 9-12, Apply (L3): students pick a combination of safe-participation
// strategies that best fits a realistic under-resourced or unsafe-environment scenario.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 472;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton;
let nextButton;

// The seven safe-participation strategies (tiles).
let strategies = [
  { key: 'buddy',   label: 'Buddy System' },
  { key: 'timing',  label: 'Adjust Timing' },
  { key: 'indoor',  label: 'Indoor Option' },
  { key: 'gear',    label: 'Right Equipment' },
  { key: 'warmup',  label: 'Warm-up / Cool-down' },
  { key: 'program', label: 'Community Program' },
  { key: 'hydrate', label: 'Hydration' }
];

// Scenario bank of 6, each testing a different environmental barrier.
// recommended = strategies that DIRECTLY address this scenario's hazard.
let scenarios = [
  {
    barrier: 'Darkness',
    scenario: "It's 6 p.m. in December and it gets dark by 5. Your neighborhood park has no streetlights, but you still want to be active.",
    recommended: ['timing', 'indoor', 'buddy', 'gear'],
    reasons: {
      timing: 'Shifting your workout to daylight removes the darkness hazard entirely.',
      indoor: 'A lit indoor space lets you stay active safely after dark.',
      buddy: 'Going with a buddy adds visibility and support in low light.',
      gear: 'Reflective gear or a light helps others see you when it is dark.'
    },
    hint: 'Hazard: low visibility after sunset.'
  },
  {
    barrier: 'Extreme heat',
    scenario: "A summer heat advisory is in effect and it is 98 F outside this afternoon. You planned to run outdoors.",
    recommended: ['timing', 'indoor', 'hydrate'],
    reasons: {
      timing: 'Early morning or evening avoids the hottest part of the day.',
      indoor: 'An air-conditioned space removes the heat exposure.',
      hydrate: 'Drinking water before and during activity protects against heat illness.'
    },
    hint: 'Hazard: heat illness from high temperatures.'
  },
  {
    barrier: 'No sidewalks',
    scenario: "The road to the trail has no sidewalks or shoulders, and cars move fast along it during your usual workout time.",
    recommended: ['program', 'indoor', 'buddy', 'gear'],
    reasons: {
      program: 'A community rec center or track gives you a safe place away from traffic.',
      indoor: 'An indoor space avoids the road with no walking space entirely.',
      buddy: 'A group is more visible to drivers than one person alone.',
      gear: 'Bright or reflective clothing helps drivers notice you near the road.'
    },
    hint: 'Hazard: traffic with no space to walk safely.'
  },
  {
    barrier: 'Unfamiliar area',
    scenario: "You are staying in a new city for a week and do not yet know which areas are safe to walk or where to exercise.",
    recommended: ['buddy', 'program', 'indoor'],
    reasons: {
      buddy: 'Going with someone who knows the area keeps you safer while you learn it.',
      program: 'A local rec center or gym is a known, staffed place to be active.',
      indoor: 'A hotel or facility space lets you stay active without exploring unknown streets.'
    },
    hint: 'Hazard: not knowing which routes are safe.'
  },
  {
    barrier: 'Limited equipment',
    scenario: "You want to strength-train but have no gym membership, no weights, and very little money for equipment.",
    recommended: ['program', 'warmup', 'buddy'],
    reasons: {
      program: 'Free community programs offer equipment and space at little or no cost.',
      warmup: 'A warm-up and cool-down need no equipment and lower injury risk.',
      buddy: 'A workout partner keeps you consistent and can spot bodyweight moves.'
    },
    hint: 'Hazard: no money or gear for equipment.'
  },
  {
    barrier: 'Bad weather',
    scenario: "Freezing rain and ice are forecast all day, making the sidewalks slippery and unsafe for your planned walk.",
    recommended: ['indoor', 'program', 'warmup'],
    reasons: {
      indoor: 'Moving your activity indoors avoids the icy, slippery surfaces.',
      program: 'A community center gym is a warm, dry place to stay active.',
      warmup: 'A warm-up prepares cold muscles and lowers your injury risk.'
    },
    hint: 'Hazard: slippery, icy surfaces outdoors.'
  }
];

let sIndex = 0;
let selected = {};        // strategy key -> true if picked
let checked = false;      // whether feedback is revealed for current scenario
let completed = 0;        // scenarios checked so far
let doneSet = {};         // sIndex -> true once checked (avoid double count)
let tileRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  checkButton = createButton('Check My Plan');
  checkButton.parent(document.querySelector('main'));
  checkButton.mousePressed(checkPlan);

  nextButton = createButton('Next Scenario');
  nextButton.parent(document.querySelector('main'));
  nextButton.mousePressed(nextScenario);

  positionControls();
  describe('A safe-activity scenario card on the left describes a realistic barrier such as ' +
    'darkness, heat, or no sidewalks. On the right are seven safe-participation strategy tiles ' +
    '(buddy system, timing, indoor option, equipment, warm-up, community program, hydration). ' +
    'Students select the strategies that best fit the scenario, then check their plan to see ' +
    'which choices directly address the hazard and which strong strategy they may have missed.',
    LABEL);
}

function positionControls() {
  checkButton.position(margin, drawHeight + 15);
  nextButton.position(margin + 150, drawHeight + 15);
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

  // Title
  fill('black');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Safe Activity Scenario Planner', canvasWidth / 2, 8);

  // Progress counter (top-right)
  noStroke();
  fill('dimgray');
  textAlign(RIGHT, TOP);
  textSize(12);
  text('Completed: ' + completed + ' / ' + scenarios.length, canvasWidth - margin, 12);

  let topY = 36;
  let colGap = 12;
  let leftW = Math.floor((canvasWidth - margin * 2 - colGap) * 0.55);
  let rightX = margin + leftW + colGap;
  let rightW = canvasWidth - margin - rightX;

  let sc = scenarios[sIndex];

  // ---- LEFT: scenario card ----
  let cardH = 150;
  fill('cornsilk');
  stroke('goldenrod');
  strokeWeight(1.5);
  rect(margin, topY, leftW, cardH, 8);
  noStroke();

  fill('saddlebrown');
  textAlign(LEFT, TOP);
  textSize(13);
  textStyle(BOLD);
  text('Scenario ' + (sIndex + 1), margin + 10, topY + 8);
  textStyle(NORMAL);

  fill('black');
  textSize(13);
  text(sc.scenario, margin + 10, topY + 30, leftW - 20, cardH - 66);

  noStroke();
  fill('sienna');
  textSize(12);
  textStyle(ITALIC);
  text(sc.hint, margin + 10, topY + cardH - 30, leftW - 20, 26);
  textStyle(NORMAL);

  // Instruction under the card
  noStroke();
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Pick the strategies that best fit this scenario, then press Check My Plan.',
    margin, topY + cardH + 8, leftW, 60);

  // ---- RIGHT: seven strategy tiles ----
  noStroke();
  fill('navy');
  textAlign(LEFT, TOP);
  textSize(13);
  textStyle(BOLD);
  text('Strategies (tap to select):', rightX, topY);
  textStyle(NORMAL);

  tileRects = [];
  let tileY = topY + 22;
  let tileH = 30;
  let gap = 6;
  for (let i = 0; i < strategies.length; i++) {
    let st = strategies[i];
    let isSel = selected[st.key];
    let rec = checked && sc.recommended.includes(st.key);
    let missed = checked && !isSel && sc.recommended.includes(st.key);
    let r = { x: rightX, y: tileY, w: rightW, h: tileH, key: st.key };
    tileRects.push(r);

    let hover = !checked && pointInRect(mouseX, mouseY, r);
    stroke('steelblue');
    strokeWeight(isSel ? 2 : 1);
    if (checked) {
      if (isSel && rec) { fill('honeydew'); stroke('seagreen'); }
      else if (isSel && !rec) { fill('mistyrose'); stroke('indianred'); }
      else if (missed) { fill('lightyellow'); stroke('goldenrod'); }
      else { fill('white'); stroke('silver'); }
    } else {
      fill(isSel ? 'lightsteelblue' : (hover ? 'aliceblue' : 'white'));
    }
    rect(r.x, r.y, r.w, r.h, 6);

    // checkmark / marker box on the left of the tile
    noStroke();
    if (isSel) { fill('steelblue'); }
    else { fill('gainsboro'); }
    if (checked && isSel && rec) fill('seagreen');
    if (checked && isSel && !rec) fill('indianred');
    if (checked && missed) fill('goldenrod');
    ellipse(r.x + 15, r.y + tileH / 2, 14, 14);
    if (isSel || missed) {
      fill('white');
      textAlign(CENTER, CENTER);
      textSize(11);
      text(missed && !isSel ? '!' : '✓', r.x + 15, r.y + tileH / 2 - 1);
    }

    noStroke();
    fill('black');
    textAlign(LEFT, CENTER);
    textSize(12.5);
    text(st.label, r.x + 28, r.y + tileH / 2);
    tileY += tileH + gap;
  }

  cursor(!checked && overTile() ? HAND : ARROW);

  // ---- FEEDBACK panel (bottom, full width) ----
  // Placed below the tile column (7 tiles end near y=310) so no tile is clipped.
  let fbY = tileY + 6;
  let fbH = drawHeight - fbY - margin;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, fbY, canvasWidth - margin * 2, fbH, 8);
  noStroke();

  if (!checked) {
    fill('dimgray');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('Your feedback will appear here after you check your plan.',
      margin + 10, fbY, canvasWidth - margin * 2 - 20, fbH);
  } else {
    drawFeedback(sc, margin + 12, fbY + 10, canvasWidth - margin * 2 - 24, fbH - 16);
  }
}

function drawFeedback(sc, x, y, w, h) {
  textAlign(LEFT, TOP);
  let lineY = y;

  // Good picks that address the hazard
  let goodPicks = sc.recommended.filter(k => selected[k]);
  // Selected but not directly on-target
  let extraPicks = strategies.map(s => s.key).filter(k => selected[k] && !sc.recommended.includes(k));
  // Strong strategies the student missed
  let misses = sc.recommended.filter(k => !selected[k]);

  textSize(13);
  fill('seagreen');
  textStyle(BOLD);
  text('Direct fits:', x, lineY);
  textStyle(NORMAL);
  lineY += 18;
  noStroke();
  fill('black');
  textSize(12);
  if (goodPicks.length === 0) {
    fill('dimgray');
    text('None yet - none of your picks directly address this hazard.', x, lineY, w, 30);
    lineY += 22;
  } else {
    for (let k of goodPicks) {
      let label = strategyLabel(k);
      let line = '✓ ' + label + ' - ' + sc.reasons[k];
      let bh = boxTextHeight(line, w, 12);
      fill('black');
      text(line, x, lineY, w, bh);
      lineY += bh + 4;
    }
  }

  // Missed strong strategy (name one with a reason)
  if (misses.length > 0) {
    lineY += 2;
    fill('darkgoldenrod');
    textSize(13);
    textStyle(BOLD);
    text('Consider adding:', x, lineY);
    textStyle(NORMAL);
    lineY += 18;
    let k = misses[0];
    let line = strategyLabel(k) + ' - ' + sc.reasons[k];
    let bh = boxTextHeight(line, w, 12);
    fill('black');
    textSize(12);
    text(line, x, lineY, w, bh);
    lineY += bh + 4;
  }

  // Note on off-target extras (kept brief, non-penalizing)
  if (extraPicks.length > 0 && lineY < y + h - 24) {
    lineY += 2;
    fill('gray');
    textSize(11);
    textStyle(ITALIC);
    let names = extraPicks.map(strategyLabel).join(', ');
    text('Other picks (' + names + ') can help generally but do not target this hazard.',
      x, lineY, w, y + h - lineY);
    textStyle(NORMAL);
  }
}

function strategyLabel(key) {
  for (let s of strategies) if (s.key === key) return s.label;
  return key;
}

// Estimate wrapped-text height for a given box width so lines do not overlap.
function boxTextHeight(str, w, size) {
  textSize(size);
  let words = str.split(' ');
  let lines = 1;
  let cur = '';
  for (let word of words) {
    let test = cur.length === 0 ? word : cur + ' ' + word;
    if (textWidth(test) > w && cur.length > 0) {
      lines++;
      cur = word;
    } else {
      cur = test;
    }
  }
  return lines * (size + 4);
}

function overTile() {
  for (let r of tileRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (checked) return; // locked once feedback is shown; use Next Scenario
  for (let r of tileRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      selected[r.key] = !selected[r.key];
      return;
    }
  }
}

function checkPlan() {
  if (checked) return;
  // require at least one selection
  let any = strategies.some(s => selected[s.key]);
  if (!any) return;
  checked = true;
  if (!doneSet[sIndex]) {
    doneSet[sIndex] = true;
    completed++;
  }
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  selected = {};
  checked = false;
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
