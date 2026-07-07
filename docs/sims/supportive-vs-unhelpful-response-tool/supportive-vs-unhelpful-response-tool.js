// Supportive Vs. Unhelpful Response Comparison Tool - MicroSim
// CANVAS_HEIGHT: 560
// Grade 9-12, Evaluate (L5): compare a judgmental vs. a supportive response to the
// same scenario about a friend's substance use, assess each effect, then write your own.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 495;
let controlHeight = 65;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let prevButton;
let nextButton;
let whyButton;
let yourResponse; // text input for scenario 6

// Five paired scenarios plus one unpaired "Your Turn" scenario.
// No scenario depicts a method of use — only the social situation and the response.
let scenarios = [
  {
    ctx: 'A friend seems to be vaping heavily before every stressful test.',
    unhelpful: '"You have zero willpower. Just quit already — it\'s not that hard."',
    uEffect: 'Judging their willpower triggers shame and defensiveness. People who feel attacked tend to defend the behavior instead of examining it — the conversation shuts down.',
    supportive: '"I\'ve noticed tests really stress you out. Want to figure out some ways to handle that stress together?"',
    sEffect: 'Naming the stress without blame keeps them open. Offering to problem-solve *with* them supports their autonomy, which motivational research links to real, lasting change.',
    takeaway: 'Addressing the underlying stress — not attacking willpower — invites change instead of defensiveness.'
  },
  {
    ctx: 'A friend keeps drinking at parties even after saying they wanted to cut back.',
    unhelpful: '"You always say you\'ll stop and you never do. Why do you even bother saying it?"',
    uEffect: 'Throwing past failures back at them frames change as hopeless. That erodes their confidence they can change — a strong predictor of whether they actually try again.',
    supportive: '"You told me you wanted to cut back — that goal still matters to me. What got in the way this time?"',
    sEffect: 'Reminding them of their own stated goal, then asking what got in the way, treats a slip as information, not failure. Curiosity keeps the door open to trying again.',
    takeaway: 'Reflecting a person\'s own goal back to them is more motivating than reminding them of past failures.'
  },
  {
    ctx: 'A friend mentions they smoked weed to "feel normal" and get through the week.',
    unhelpful: '"That\'s so stupid and dangerous. You\'re throwing your future away."',
    uEffect: 'Labeling the person "stupid" attacks their identity, not the behavior. Feeling condemned pushes people to hide their use rather than talk about it openly with you.',
    supportive: '"It sounds like you\'ve been having a rough week. I\'m here — do you want to talk about what\'s making things feel so hard?"',
    sEffect: 'Responding to the feeling behind the words ("a rough week") shows you\'re safe to confide in. Staying connected is what lets you be helpful over time.',
    takeaway: 'Separating the person from the behavior keeps you someone they can talk to honestly.'
  },
  {
    ctx: 'A friend is missing practice and skipping class, and you suspect substance use is involved.',
    unhelpful: '"Everyone can tell something\'s wrong with you. You\'re embarrassing yourself."',
    uEffect: 'Warning that "everyone can tell" adds public shame and isolation. Isolation is a known risk factor — it removes the social support that helps people recover.',
    supportive: '"I miss having you around, and I\'m a little worried. No pressure, but I\'m here whenever you want to talk."',
    sEffect: 'Leading with "I miss you" and low-pressure availability keeps the relationship intact. Feeling genuinely cared about, not surveilled, makes someone likelier to reach out.',
    takeaway: 'Concern expressed as care ("I miss you") lands better than concern expressed as shame.'
  },
  {
    ctx: 'A friend admits they think they might have a problem, but is scared to tell anyone.',
    unhelpful: '"Well, you did this to yourself. Don\'t expect me to feel sorry for you."',
    uEffect: 'Blame at the exact moment someone reaches out teaches them that honesty gets punished. That can be enough to make them never ask for help again.',
    supportive: '"That took courage to say. You don\'t have to figure this out alone — want help finding someone who really knows how to support you?"',
    sEffect: 'Honoring the courage it took, then pointing toward real help (a counselor or trusted adult), respects their autonomy while widening their support. This is often the turning point.',
    takeaway: 'Meeting a first disclosure with respect — and a path to real help — can be the moment change begins.'
  },
  {
    ctx: 'YOUR TURN: A friend jokes that they "can\'t get through the day" without their vape, but you can tell they mean it.',
    yourTurn: true
  }
];

let sIndex = 0;
let selected = -1; // -1 none, 0 unhelpful, 1 supportive
let showWhy = false;
let cardRects = []; // hit-test rects for the two cards

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  prevButton = createButton('◀ Prev');
  prevButton.mousePressed(prevScenario);
  prevButton.parent(document.querySelector('main'));

  nextButton = createButton('Next ▶');
  nextButton.mousePressed(nextScenario);
  nextButton.parent(document.querySelector('main'));

  whyButton = createButton('Why This Matters');
  whyButton.mousePressed(toggleWhy);
  whyButton.parent(document.querySelector('main'));

  yourResponse = createInput('');
  yourResponse.attribute('placeholder', 'Write a supportive response...');
  yourResponse.parent(document.querySelector('main'));
  yourResponse.hide();

  positionControls();
  describe('Compare a judgmental and a supportive response to the same scenario about a ' +
    'friend\'s substance use. Click a response to read its likely effect, reveal the takeaway, ' +
    'and on the final scenario write your own supportive response.', LABEL);
}

function positionControls() {
  prevButton.position(margin, drawHeight + 14);
  whyButton.position(margin + 76, drawHeight + 14);
  nextButton.position(canvasWidth - margin - 66, drawHeight + 14);
  // input sits on the second control row, shown only on the "Your Turn" scenario
  yourResponse.position(margin, drawHeight + 40);
  yourResponse.size(canvasWidth - margin * 2 - 6);
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
  text('Supportive vs. Unhelpful Responses', canvasWidth / 2, 6);

  // Step counter
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(12);
  text('Scenario ' + (sIndex + 1) + ' of ' + scenarios.length, canvasWidth / 2, 30);

  let sc = scenarios[sIndex];

  // Scenario banner
  let bx = margin, by = 50, bw = canvasWidth - margin * 2, bh = 54;
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(bx, by, bw, bh, 8);
  noStroke(); fill('black');
  textAlign(LEFT, CENTER); textSize(13);
  text(sc.ctx, bx + 10, by, bw - 20, bh);

  if (sc.yourTurn) {
    drawYourTurn(by + bh + 12);
  } else {
    drawPairedScenario(sc, by + bh + 12);
  }
}

function drawPairedScenario(sc, top) {
  yourResponse.hide();
  cardRects = [];

  let gap = 12;
  let cardH = 96;
  let cw = canvasWidth - margin * 2;
  let prompt = 'Which response is more likely to encourage change? Tap each to see its effect.';

  // Instruction line
  noStroke(); fill('navy');
  textAlign(LEFT, TOP); textSize(12.5);
  text(prompt, margin, top, cw, 34);

  let cardTop = top + 36;

  // Two stacked cards: Unhelpful (muted red-gray) then Supportive (warm green)
  let cards = [
    { label: 'Unhelpful', body: sc.unhelpful, border: 'indianred', fill: 'mistyrose', chip: 'indianred', idx: 0 },
    { label: 'Supportive', body: sc.supportive, border: 'seagreen', fill: 'honeydew', chip: 'seagreen', idx: 1 }
  ];

  for (let i = 0; i < cards.length; i++) {
    let c = cards[i];
    let y = cardTop + i * (cardH + gap);
    let r = { x: margin, y: y, w: cw, h: cardH, idx: c.idx };
    cardRects.push(r);
    let isSel = selected === c.idx;
    let hover = pointInRect(mouseX, mouseY, r);

    stroke(c.border);
    strokeWeight(isSel ? 3.5 : 1.5);
    fill(hover && !isSel ? lerpColor(color(c.fill), color('white'), 0.35) : color(c.fill));
    rect(r.x, r.y, r.w, r.h, 10);

    // label chip
    noStroke(); fill(c.chip);
    rect(r.x + 10, r.y + 8, 92, 20, 6);
    fill('white'); textAlign(CENTER, CENTER); textSize(12);
    text(c.label, r.x + 10, r.y + 8, 92, 20);

    // body text
    noStroke(); fill('black');
    textAlign(LEFT, TOP); textSize(12.5);
    text(c.body, r.x + 12, r.y + 34, r.w - 24, r.h - 42);
  }
  cursor(overAnyCard() ? HAND : ARROW);

  // Infobox / effect panel
  let ibY = cardTop + 2 * (cardH + gap) + 4;
  let ibH = drawHeight - ibY - 10;
  drawInfobox(sc, ibY, ibH);
}

function drawInfobox(sc, y, h) {
  let x = margin, w = canvasWidth - margin * 2;

  if (showWhy) {
    fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
    rect(x, y, w, h, 10);
    noStroke(); fill('darkgoldenrod');
    textAlign(LEFT, TOP); textSize(12.5);
    text('WHY THIS MATTERS', x + 12, y + 8);
    fill('black'); textSize(13.5);
    text(sc.takeaway, x + 12, y + 30, w - 24, h - 38);
    return;
  }

  if (selected === -1) {
    fill('white'); stroke('silver'); strokeWeight(1.5);
    rect(x, y, w, h, 10);
    noStroke(); fill('dimgray');
    textAlign(CENTER, CENTER); textSize(12.5);
    text('Tap the Unhelpful or Supportive card above to read how it is likely to land — then justify which one you\'d choose.',
      x + 12, y, w - 24, h);
    return;
  }

  let isSup = selected === 1;
  let effect = isSup ? sc.sEffect : sc.uEffect;
  let head = isSup ? 'LIKELY EFFECT — SUPPORTIVE' : 'LIKELY EFFECT — UNHELPFUL';
  fill(isSup ? 'honeydew' : 'mistyrose');
  stroke(isSup ? 'seagreen' : 'indianred'); strokeWeight(1.5);
  rect(x, y, w, h, 10);
  noStroke();
  fill(isSup ? 'seagreen' : 'indianred');
  textAlign(LEFT, TOP); textSize(12);
  text(head, x + 12, y + 8);
  fill('black'); textSize(12.5);
  text(effect, x + 12, y + 28, w - 24, h - 36);
}

function drawYourTurn(top) {
  cardRects = [];
  yourResponse.show();

  let x = margin, w = canvasWidth - margin * 2;

  // Prompt panel
  noStroke(); fill('navy');
  textAlign(LEFT, TOP); textSize(12.5);
  text('Now it\'s your turn. Write a supportive response in the box below. Aim to name the feeling, avoid blame, and offer to help.',
    x, top, w, 46);

  // The input DOM element renders in the control strip; here we show a live preview + checklist.
  let val = yourResponse.value().trim();

  let previewY = top + 52;
  let previewH = 78;
  fill(val.length > 0 ? 'honeydew' : 'white');
  stroke(val.length > 0 ? 'seagreen' : 'silver'); strokeWeight(1.5);
  rect(x, previewY, w, previewH, 10);
  noStroke();
  fill(val.length > 0 ? 'seagreen' : 'dimgray');
  textAlign(LEFT, TOP); textSize(11.5);
  text(val.length > 0 ? 'YOUR RESPONSE' : 'YOUR RESPONSE (type below)', x + 12, previewY + 8);
  fill('black'); textSize(13);
  text(val.length > 0 ? '"' + val + '"' : 'Your words will appear here as you type...',
    x + 12, previewY + 28, w - 24, previewH - 36);

  // Self-check checklist against simple heuristics
  let checkY = previewY + previewH + 12;
  let checkH = drawHeight - checkY - 10;
  fill('lightyellow'); stroke('goldenrod'); strokeWeight(1.5);
  rect(x, checkY, w, checkH, 10);
  noStroke(); fill('darkgoldenrod');
  textAlign(LEFT, TOP); textSize(12);
  text('SELF-CHECK', x + 12, checkY + 8);

  let lower = val.toLowerCase();
  let hasBlame = /\b(you always|you never|stupid|your fault|willpower|pathetic|loser)\b/.test(lower);
  let offersHelp = /\b(help|here for you|talk|together|support|i'm here|im here|listen)\b/.test(lower);
  let usesI = /\bi\b|\bi'?m\b|\bi've\b/.test(lower);
  let checks = [
    { ok: val.length >= 12, label: 'You wrote a full response' },
    { ok: !hasBlame && val.length > 0, label: 'No blaming or name-calling' },
    { ok: usesI, label: 'Speaks from "I" (owns your view)' },
    { ok: offersHelp, label: 'Offers support or to talk' }
  ];
  textSize(12); textAlign(LEFT, CENTER);
  let cy = checkY + 30;
  for (let ch of checks) {
    fill(ch.ok ? 'seagreen' : 'silver');
    text(ch.ok ? '✓' : '○', x + 14, cy + 8);
    fill('black');
    text(ch.label, x + 34, cy + 8, w - 44, 18);
    cy += 20;
  }
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
      selected = r.idx;
      showWhy = false;
      return;
    }
  }
}

function toggleWhy() {
  if (scenarios[sIndex].yourTurn) return;
  showWhy = !showWhy;
}

function prevScenario() {
  sIndex = (sIndex - 1 + scenarios.length) % scenarios.length;
  resetScenarioState();
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  resetScenarioState();
}

function resetScenarioState() {
  selected = -1;
  showWhy = false;
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
