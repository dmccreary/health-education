// Supports and Barriers Sorting Board - MicroSim (one-card + three bins)
// CANVAS_HEIGHT: 510
// Grade 6-8, Analyze (L4): for a real health decision, students examine each factor card
// (family, culture, technology, media, peers, beliefs) and sort it as a Support, a Barrier,
// or "Depends On Details," learning that the same factor type can flip either way.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let newScenarioButton;
let resetButton;

// Three scenarios. Each has 12 factor cards.
// cat: 'support' | 'barrier' | 'depends'
// r: reasoning shown after sorting. For 'depends', r explains how it can flip.
let scenarios = [
  {
    title: 'Deciding whether to tell a parent about a concerning symptom',
    cards: [
      { tag: 'Family', t: 'A parent who stays calm and listens when you bring up hard topics.', cat: 'support', r: 'A calm, trusted parent makes it easier to speak up, so this supports the decision.' },
      { tag: 'Peers', t: 'Friends who tease anyone who talks about their health.', cat: 'barrier', r: 'Fear of being teased can stop you from speaking up, so this is a barrier.' },
      { tag: 'Beliefs', t: 'A personal belief that hiding problems makes you look strong.', cat: 'barrier', r: 'Believing you must hide problems keeps you from asking for help.' },
      { tag: 'Technology', t: 'A health app that reminds you to log new symptoms.', cat: 'support', r: 'A reminder tool nudges you to notice and share the symptom.' },
      { tag: 'Media', t: 'A social feed full of dramatic "you might have this disease" videos.', cat: 'depends', r: 'It could scare you into silence (barrier) OR push you to finally tell an adult (support) — it depends on the video and how you react.' },
      { tag: 'Culture', t: 'A family culture where health worries are discussed openly at dinner.', cat: 'support', r: 'A culture of open talk makes bringing up a symptom feel normal.' },
      { tag: 'Peers', t: 'A close friend who already told their own parent about a health worry.', cat: 'support', r: 'A friend who models speaking up shows you it can go well.' },
      { tag: 'Beliefs', t: 'A belief that your body signals are worth paying attention to.', cat: 'support', r: 'Taking your own signals seriously helps you decide to speak up.' },
      { tag: 'Technology', t: 'Endless phone games that keep you distracted from the symptom.', cat: 'barrier', r: 'Constant distraction lets you ignore the symptom instead of reporting it.' },
      { tag: 'Family', t: 'A parent who is very busy and often stressed after work.', cat: 'depends', r: 'You might wait for a bad moment and give up (barrier), OR pick a calm time and still be heard (support) — it depends on timing.' },
      { tag: 'Culture', t: 'A community belief that some symptoms are "not polite" to mention.', cat: 'barrier', r: 'If speaking about certain symptoms feels off-limits, that blocks the decision.' },
      { tag: 'Media', t: 'A trusted teen health website explaining when to tell an adult.', cat: 'support', r: 'Clear, reliable info gives you the words and reasons to speak up.' }
    ]
  },
  {
    title: 'Deciding whether to try out for a new sports team',
    cards: [
      { tag: 'Family', t: 'A parent who offers to drive you to practices and games.', cat: 'support', r: 'Reliable rides remove a real obstacle, so this supports trying out.' },
      { tag: 'Peers', t: 'Teammates-to-be who welcome newcomers and cheer them on.', cat: 'support', r: 'A welcoming group lowers the fear of trying something new.' },
      { tag: 'Beliefs', t: 'A belief that you are "just not athletic."', cat: 'barrier', r: 'A fixed belief about yourself can stop you before you even try.' },
      { tag: 'Technology', t: 'A training app with beginner workouts to prepare.', cat: 'support', r: 'A guided app helps you build skills and confidence for tryouts.' },
      { tag: 'Media', t: 'Sports clips online that make everyone look like a pro.', cat: 'depends', r: 'They might inspire you to train (support) OR make you feel you will never measure up (barrier) — it depends on how you read them.' },
      { tag: 'Culture', t: 'A school culture that celebrates effort more than winning.', cat: 'support', r: 'Valuing effort makes trying out feel safe even if you are new.' },
      { tag: 'Peers', t: 'Friends who say sports are "a waste of time."', cat: 'barrier', r: 'Friends who put down the goal can pressure you to skip it.' },
      { tag: 'Family', t: 'A family schedule already packed with other commitments.', cat: 'depends', r: 'It might crowd out practice (barrier) OR push you to plan your time better (support) — it depends on the choices you make.' },
      { tag: 'Beliefs', t: 'A belief that learning a new skill is worth some struggle.', cat: 'support', r: 'Valuing growth helps you push through early setbacks.' },
      { tag: 'Technology', t: 'A phone that pulls you into late-night scrolling before practice.', cat: 'barrier', r: 'Lost sleep from scrolling makes it harder to show up ready.' },
      { tag: 'Culture', t: 'A community belief that this sport is "only for certain kids."', cat: 'barrier', r: 'A message that the sport is not "for you" can discourage trying out.' },
      { tag: 'Media', t: 'A coach\'s video series on how tryouts actually work.', cat: 'support', r: 'Knowing what to expect makes the tryout feel less scary.' }
    ]
  },
  {
    title: 'Deciding whether to ask for help with a heavy stress load',
    cards: [
      { tag: 'Family', t: 'A relative who checks in and asks how you are really doing.', cat: 'support', r: 'A caring check-in opens the door to asking for help.' },
      { tag: 'Peers', t: 'A friend who says "asking for help is weak."', cat: 'barrier', r: 'That message can shame you into staying silent.' },
      { tag: 'Beliefs', t: 'A belief that everyone needs support sometimes.', cat: 'support', r: 'Seeing help as normal makes it easier to reach out.' },
      { tag: 'Technology', t: 'A calendar app that shows your week is overloaded.', cat: 'support', r: 'Seeing the overload clearly can prompt you to ask for help.' },
      { tag: 'Media', t: 'Posts where everyone seems to be handling everything perfectly.', cat: 'barrier', r: 'A "perfect" feed can make your own struggle feel embarrassing to admit.' },
      { tag: 'Culture', t: 'A school with a well-known, easy-to-reach counselor.', cat: 'support', r: 'An easy, known path to help makes reaching out realistic.' },
      { tag: 'Peers', t: 'A classmate who openly talks about seeing a counselor.', cat: 'support', r: 'A peer who normalizes help shows you it is okay to ask.' },
      { tag: 'Beliefs', t: 'A belief that you must handle everything on your own.', cat: 'barrier', r: 'The "do it all alone" belief blocks you from reaching out.' },
      { tag: 'Technology', t: 'A group chat that pings all night and adds to the pressure.', cat: 'barrier', r: 'Nonstop pings add stress and crowd out time to rest or reach out.' },
      { tag: 'Family', t: 'A parent who tends to say "just push through it."', cat: 'depends', r: 'It might make you hide the load (barrier) OR remind you that you are capable while you still ask for help (support) — it depends on how you take it.' },
      { tag: 'Culture', t: 'A family value that "we solve our problems inside the family."', cat: 'depends', r: 'It could keep you from outside help (barrier) OR point you to strong family support first (support) — it depends on the situation.' },
      { tag: 'Media', t: 'A mental-health site that lists exactly who teens can talk to.', cat: 'support', r: 'Concrete options make the first ask feel possible.' }
    ]
  }
];

let sIdx = 0;         // current scenario
let order = [];       // shuffled card indices for current scenario
let pos = 0;          // position in order (0..11)
let picked = '';      // '', 'support', 'barrier', 'depends'
let correctCount = 0;
let zoneRects = [];

let zones = [
  { key: 'support', label: 'Support', col: 'seagreen', bg: 'honeydew' },
  { key: 'barrier', label: 'Barrier', col: 'indianred', bg: 'mistyrose' },
  { key: 'depends', label: 'Depends On Details', col: 'goldenrod', bg: 'lightyellow' }
];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  newScenarioButton = createButton('New Scenario');
  newScenarioButton.mousePressed(newScenario);
  newScenarioButton.parent(document.querySelector('main'));

  resetButton = createButton('Restart Deck');
  resetButton.mousePressed(restartDeck);
  resetButton.parent(document.querySelector('main'));

  shuffleDeck();
  positionControls();
  describe('For a health decision shown at the top, one factor card appears at a time. ' +
    'Students tap Support, Barrier, or Depends On Details to sort it, then read why. ' +
    'A New Scenario button loads a different decision with a reshuffled deck.', LABEL);
}

function positionControls() {
  newScenarioButton.position(10, drawHeight + 15);
  resetButton.position(140, drawHeight + 15);
}

function shuffleDeck() {
  let n = scenarios[sIdx].cards.length;
  order = [];
  for (let i = 0; i < n; i++) order.push(i);
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  pos = 0;
  picked = '';
  correctCount = 0;
}

function restartDeck() {
  shuffleDeck();
}

function newScenario() {
  sIdx = (sIdx + 1) % scenarios.length;
  shuffleDeck();
}

function currentCard() {
  return scenarios[sIdx].cards[order[pos]];
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Supports & Barriers Sorting Board', canvasWidth / 2, 8);

  let innerW = canvasWidth - margin * 2;

  // Scenario banner
  let banY = 34, banH = 62;
  fill('lavender'); stroke('mediumpurple'); strokeWeight(1.5);
  rect(margin, banY, innerW, banH, 10);
  noStroke();
  fill('indigo'); textAlign(LEFT, TOP); textSize(11);
  text('THE DECISION  (Scenario ' + (sIdx + 1) + ' of ' + scenarios.length + ')', margin + 12, banY + 8);
  fill('black'); textSize(14);
  text(scenarios[sIdx].title, margin + 12, banY + 24, innerW - 24, banH - 28);

  // Progress + score line
  let progY = banY + banH + 8;
  noStroke(); fill('dimgray'); textAlign(LEFT, CENTER); textSize(12);
  text('Card ' + (pos + 1) + ' of ' + order.length, margin, progY + 7);
  textAlign(RIGHT, CENTER);
  text('Sorted correctly: ' + correctCount, canvasWidth - margin, progY + 7);

  let allDone = pos >= order.length;

  // Factor card
  let cardY = progY + 20, cardH = 92;
  if (!allDone) {
    let c = currentCard();
    fill('white'); stroke('steelblue'); strokeWeight(2);
    rect(margin, cardY, innerW, cardH, 10);
    // tag chip
    noStroke(); fill('steelblue');
    let chipW = textWidthChip(c.tag) + 18;
    rect(margin + 10, cardY + 10, chipW, 20, 6);
    fill('white'); textAlign(LEFT, CENTER); textSize(11);
    text(c.tag.toUpperCase(), margin + 19, cardY + 21);
    // card text
    fill('black'); textAlign(LEFT, TOP); textSize(14);
    text(c.t, margin + 12, cardY + 38, innerW - 24, cardH - 44);
  } else {
    fill('honeydew'); stroke('seagreen'); strokeWeight(2);
    rect(margin, cardY, innerW, cardH, 10);
    noStroke(); fill('seagreen'); textAlign(CENTER, CENTER); textSize(15);
    text('Deck complete! You sorted ' + correctCount + ' of ' + order.length + ' correctly.\n' +
      'Try "New Scenario" or "Restart Deck" below.', margin + 12, cardY, innerW - 24, cardH);
  }

  // Three zone buttons
  let zonesY = cardY + cardH + 12;
  zoneRects = [];
  let gap = 8;
  let zw = (innerW - gap * 2) / 3;
  let zh = 54;
  let c = allDone ? null : currentCard();
  for (let i = 0; i < zones.length; i++) {
    let z = zones[i];
    let x = margin + i * (zw + gap);
    zoneRects.push({ x: x, y: zonesY, w: zw, h: zh, key: z.key });
    let hover = !allDone && !picked && pointInRect(mouseX, mouseY, { x: x, y: zonesY, w: zw, h: zh });
    let isCorrectZone = picked && c && z.key === c.cat;
    let isPicked = picked === z.key;

    strokeWeight(isPicked || isCorrectZone ? 3 : 1.5);
    stroke(z.col);
    if (isCorrectZone) fill(z.bg);
    else if (isPicked) fill('mistyrose');
    else if (hover) fill(z.bg);
    else fill('white');
    rect(x, zonesY, zw, zh, 10);

    noStroke(); fill(z.col); textAlign(CENTER, CENTER); textSize(13);
    text(z.label, x + 4, zonesY, zw - 8, zh);
  }
  cursor((!allDone && !picked && overAnyZone()) ? HAND : ARROW);

  // Feedback box
  let fbY = zonesY + zh + 12;
  let fbH = drawHeight - fbY - 12;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(margin, fbY, innerW, fbH, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (allDone) {
    fill('dimgray');
    text('You finished this deck. Load a new decision to see how the same kinds of ' +
      'factors sort differently.', margin + 10, fbY + 10, innerW - 20, fbH - 20);
  } else if (!picked) {
    fill('dimgray');
    text('Is this factor a Support, a Barrier, or does it Depend On Details? Tap a box above.',
      margin + 10, fbY + 10, innerW - 20, fbH - 20);
  } else {
    let right = picked === c.cat;
    fill(right ? 'seagreen' : 'darkgoldenrod'); textSize(13);
    let head = right ? '✓ Yes — this is a ' + zoneLabel(c.cat) + '.'
                     : 'This one is a ' + zoneLabel(c.cat) + ', not a ' + zoneLabel(picked) + '.';
    text(head, margin + 10, fbY + 10, innerW - 20, 20);
    fill('black'); textSize(13);
    text(c.r, margin + 10, fbY + 32, innerW - 20, fbH - 66);
    // Next hint
    fill('mediumpurple'); textAlign(CENTER, BOTTOM); textSize(12);
    text('→ Tap the card to sort the next factor', canvasWidth / 2, fbY + fbH - 6);
  }
}

// approximate chip width using current text metrics
function textWidthChip(s) {
  push(); textSize(11); let w = textWidth(s.toUpperCase()); pop();
  return w;
}

function zoneLabel(key) {
  for (let z of zones) if (z.key === key) return z.label;
  return key;
}

function overAnyZone() {
  for (let r of zoneRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (pos >= order.length) return;
  let c = currentCard();
  if (!picked) {
    for (let r of zoneRects) {
      if (pointInRect(mouseX, mouseY, r)) {
        picked = r.key;
        if (picked === c.cat) correctCount++;
        return;
      }
    }
  } else {
    // any click on the canvas advances to the next card
    if (mouseY >= 0 && mouseY <= drawHeight) {
      pos++;
      picked = '';
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
