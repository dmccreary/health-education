// Report or Emergency Decision Tool - MicroSim (report/block vs. emergency escalation)
// CANVAS_HEIGHT: 512
// Grades 9-12, Analyze (L4): students differentiate online situations needing standard
// reporting/blocking from those requiring immediate emergency escalation, using the presence
// of a credible, specific threat of violence (named target + location + intent) as the signal.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, restartButton;

// emergency = true means "Emergency — Tell an Adult Now"; false means "Report/Block".
// signal = the deciding factor; explanation = why this classification is correct.
let bank = [
  {
    scenario: 'A classmate posts a vague, angry rant about the school with no named person and no plan.',
    emergency: false,
    signal: 'No named target, no location, no stated intent to harm.',
    explanation: 'Frustration without a specific threat is upsetting, not an emergency. Report the post and let a trusted adult know.'
  },
  {
    scenario: 'A post names a specific classmate and describes an intent to hurt them at a specific place and time.',
    emergency: true,
    signal: 'Named target + specific location/time + stated intent to harm.',
    explanation: 'A credible, specific threat of violence is an emergency. Tell a trusted adult right now so it can be acted on immediately.'
  },
  {
    scenario: 'A former partner threatens to share a private photo unless you get back together with them.',
    emergency: false,
    signal: 'Serious harm and coercion, but no threat of violence.',
    explanation: 'This is abuse you should not face alone. Do not comply — save evidence, report/block, and tell a trusted adult who can help you.'
  },
  {
    scenario: 'Someone messages that they have a plan to harm people at a named location later today.',
    emergency: true,
    signal: 'Stated plan + named location + timeframe (imminent intent).',
    explanation: 'A specific plan with a place and a timeframe is an emergency. Tell a trusted adult or call for help now — do not wait to confirm it yourself.'
  },
  {
    scenario: 'An anonymous account keeps posting mean, insulting comments about you, but makes no threats.',
    emergency: false,
    signal: 'Repeated harassment, but no threat of violence.',
    explanation: 'Harassment is worth stopping. Block the account, report it to the platform, and tell a trusted adult so it is documented.'
  },
  {
    scenario: 'A friend privately messages you that they are thinking about ending their life tonight.',
    emergency: true,
    signal: 'A person is in immediate danger and states intent to act now.',
    explanation: 'This is an emergency. Stay with them, tell a trusted adult immediately, and get help right away — do not keep it a secret.'
  },
  {
    scenario: 'A stranger you met in a game keeps pressuring you to share your home address and photos.',
    emergency: false,
    signal: 'Boundary-crossing pressure, but no stated threat of violence.',
    explanation: 'Do not share personal details. Stop responding, block and report the account, and tell a trusted adult about the pressure.'
  },
  {
    scenario: 'A message says a specific student "won\'t make it to school tomorrow" and warns others to stay away.',
    emergency: true,
    signal: 'Named target + timeframe + warning that signals intent to harm.',
    explanation: 'A specific target and timeframe make this a credible threat and an emergency. Tell a trusted adult now so it can be addressed immediately.'
  }
];

let order = [];
let pos = 0;         // index into order
let picked = null;   // true = emergency chosen, false = report/block chosen
let correctCount = 0;
let answeredCount = 0;
let finished = false;

let repRect, emgRect;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);

  restartButton = createButton('Start Over');
  restartButton.mousePressed(restart);

  positionControls();
  shuffleBank();
  describe('Online-safety scenarios shown one at a time. For each, choose Report/Block or ' +
    'Emergency — Tell an Adult Now. Feedback names the deciding signal (a specific threat of ' +
    'violence with a named target, location, and intent), and a tally tracks progress across ' +
    'the 8-scenario bank.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 14);
  restartButton.position(margin + 130, drawHeight + 14);
}

function shuffleBank() {
  order = [...Array(bank.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  pos = 0; picked = null; correctCount = 0; answeredCount = 0; finished = false;
}

function restart() { shuffleBank(); }

function nextScenario() {
  if (finished) return;
  if (picked === null) return;            // must answer before advancing
  if (pos < order.length - 1) {
    pos++; picked = null;
  } else {
    finished = true;                       // last card answered -> closing screen
  }
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('navy'); textAlign(CENTER, TOP); textSize(19);
  text('Report or Emergency?', canvasWidth / 2, 8);
  noStroke(); fill('dimgray'); textAlign(CENTER, TOP); textSize(11.5);
  text('Deciding signal: a specific threat of violence — a named target, place, and intent.',
    margin, 32, canvasWidth - margin * 2, 30);

  if (finished) { drawClosing(); return; }

  let d = bank[order[pos]];

  // Scenario card
  let cardY = 62, cardH = 108;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(2);
  rect(margin, cardY, canvasWidth - margin * 2, cardH, 12);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11);
  text('Scenario ' + (pos + 1) + ' of ' + bank.length, margin + 14, cardY + 8);
  fill('black'); textAlign(LEFT, CENTER); textSize(15);
  text(d.scenario, margin + 14, cardY + 14, canvasWidth - margin * 2 - 28, cardH - 24);

  // Two large response buttons (stacked for readable full-width labels)
  let bx = margin, bw = canvasWidth - margin * 2, bh = 52;
  let by1 = cardY + cardH + 12;
  let by2 = by1 + bh + 10;
  repRect = { x: bx, y: by1, w: bw, h: bh, val: false };
  emgRect = { x: bx, y: by2, w: bw, h: bh, val: true };
  drawBtn(repRect, 'Report / Block', 'steelblue', d);
  drawBtn(emgRect, 'Emergency — Tell an Adult Now', 'indianred', d);

  let overBtn = pointInRect(mouseX, mouseY, repRect) || pointInRect(mouseX, mouseY, emgRect);
  cursor(overBtn && picked === null ? HAND : ARROW);

  // Feedback panel
  let fy = by2 + bh + 12;
  let fh = drawHeight - fy - 10;
  if (picked === null) {
    noStroke(); fill('dimgray'); textAlign(CENTER, CENTER); textSize(13);
    text('Which path fits this situation? Choose a response above.',
      margin + 6, fy, canvasWidth - margin * 2 - 12, fh);
  } else {
    let correct = picked === d.emergency;
    fill(correct ? 'honeydew' : 'mistyrose');
    stroke(correct ? 'seagreen' : 'indianred'); strokeWeight(2);
    rect(margin, fy, canvasWidth - margin * 2, fh, 10);
    noStroke();
    fill(correct ? 'seagreen' : 'indianred'); textAlign(LEFT, TOP); textSize(13.5);
    let tx = margin + 12, tw = canvasWidth - margin * 2 - 24;
    text((correct ? '✓ Correct — ' : 'Not quite — ') + 'the right first move is ' +
      (d.emergency ? 'Emergency: tell an adult now.' : 'Report / Block, and tell an adult.'),
      tx, fy + 8, tw, 34);
    fill('black'); textSize(12);
    text('Signal: ' + d.signal, tx, fy + 44, tw, 30);
    fill('dimgray');
    text(d.explanation, tx, fy + 44 + 30, tw, fh - 44 - 30 - 6);
  }

  // Running tally (bottom of draw area)
  noStroke(); textAlign(RIGHT, TOP); textSize(11); fill('dimgray');
  text(correctCount + ' / ' + answeredCount + ' correct', canvasWidth - margin, 32);
}

function drawBtn(r, label, col, d) {
  let hover = pointInRect(mouseX, mouseY, r);
  let chosen = picked === r.val;
  strokeWeight(chosen ? 4 : 2); stroke(col);
  if (chosen) {
    fill(r.val === d.emergency ? 'honeydew' : 'mistyrose');
  } else {
    fill(hover && picked === null ? 'lightyellow' : 'white');
  }
  rect(r.x, r.y, r.w, r.h, 10);
  noStroke(); fill(col); textAlign(CENTER, CENTER); textSize(15.5);
  text(label, r.x + 8, r.y, r.w - 16, r.h);
}

function drawClosing() {
  let boxY = 72, boxH = 316;
  fill('white'); stroke('seagreen'); strokeWeight(2);
  rect(margin, boxY, canvasWidth - margin * 2, boxH, 12);
  noStroke();
  fill('seagreen'); textAlign(CENTER, TOP); textSize(18);
  text('You finished all ' + bank.length + ' scenarios', margin, boxY + 18, canvasWidth - margin * 2, 30);

  fill('navy'); textSize(30); textAlign(CENTER, TOP);
  text(correctCount + ' / ' + bank.length, margin, boxY + 50, canvasWidth - margin * 2, 40);
  fill('dimgray'); textSize(12);
  text('scenarios classified correctly', margin, boxY + 90, canvasWidth - margin * 2, 20);

  fill('black'); textAlign(LEFT, TOP); textSize(14);
  let tx = margin + 18, tw = canvasWidth - margin * 2 - 36;
  text('Both correct paths share the same first move:', tx, boxY + 126, tw, 24);
  fill('seagreen'); textSize(16);
  text('tell someone.', tx, boxY + 148, tw, 26);
  fill('dimgray'); textSize(12.5);
  text('Report/Block and Emergency escalation both start by telling a trusted adult. ' +
    'When you are unsure whether something is an emergency, treat it like one and tell an ' +
    'adult now.', tx, boxY + 178, tw, boxH - 178 - 14);

  noStroke(); textAlign(CENTER, TOP); textSize(11.5); fill('dimgray');
  text('Press Start Over to shuffle and try again.', margin, boxY + boxH + 12, canvasWidth - margin * 2, 20);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (finished || picked !== null) return;
  let d = bank[order[pos]];
  let hit = null;
  if (pointInRect(mouseX, mouseY, repRect)) hit = false;
  else if (pointInRect(mouseX, mouseY, emgRect)) hit = true;
  if (hit === null) return;
  picked = hit;
  answeredCount++;
  if (picked === d.emergency) correctCount++;
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
