// Talk Test Intensity Explorer - MicroSim (two-zone activity sorter)
// CANVAS_HEIGHT: 470
// Grade 6-8, Understand (L2): students classify activities as Moderate or Vigorous
// intensity using the talk test (can you talk? can you sing?), with rule-based
// feedback that confirms the category and explains the reasoning.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, resetButton;

let zones = ['Moderate', 'Vigorous'];
let zoneColors = ['mediumseagreen', 'orangered'];

// i: 0 = Moderate, 1 = Vigorous
let activities = [
  { n: 'Walking the dog at an easy pace', i: 0,
    fb: 'At an easy walk you can chat comfortably but could not sing a whole song, so it is moderate.' },
  { n: 'Sprinting during a soccer game', i: 1,
    fb: 'A sprint leaves you able to gasp only a few words before you need a breath, so it is vigorous.' },
  { n: 'Slow-paced bike ride to a friend house', i: 0,
    fb: 'An easy ride lets you hold a conversation but not sing easily, so it is moderate intensity.' },
  { n: 'Running a mile for time', i: 1,
    fb: 'Running hard for time, you can only say a few words at a time, so it is vigorous intensity.' },
  { n: 'Shooting hoops casually in the driveway', i: 0,
    fb: 'Casual shooting keeps you moving and still able to talk, but not sing, so it is moderate.' },
  { n: 'Swimming laps as fast as you can', i: 1,
    fb: 'Fast laps leave you breathing too hard to say more than a few words, so it is vigorous.' },
  { n: 'Raking leaves in the yard', i: 0,
    fb: 'Steady raking gets you moving and warm, and you can still chat, so it is moderate.' },
  { n: 'A fast game of tag until you are winded', i: 1,
    fb: 'Running hard until you are winded means only a few words between breaths, so it is vigorous.' }
];

let order = [];
let idx = 0;
let picked = -1;   // zone chosen for the current card, -1 = not sorted yet
let sorted = 0;    // cards sorted so far
let correct = 0;
let zoneRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Activity');
  nextButton.mousePressed(nextCard);
  resetButton = createButton('Reset Deck');
  resetButton.mousePressed(resetDeck);
  positionControls();
  resetDeck();
  describe('One activity card at a time with two labeled zones, Moderate and Vigorous. ' +
    'A Talk Test panel reminds students of the rule. Clicking a zone sorts the card and ' +
    'shows feedback that explains the answer using the talk test.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 10);
  resetButton.position(margin + 150, drawHeight + 10);
}

function resetDeck() {
  order = [...Array(activities.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  idx = 0; picked = -1; sorted = 0; correct = 0;
}

function draw() {
  updateCanvasSize();

  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); noStroke();
  rect(0, drawHeight, canvasWidth, controlHeight);

  // title
  fill('#1a3a6c'); textAlign(CENTER, TOP); textSize(20);
  text('Talk Test Intensity Explorer', canvasWidth / 2, 8);

  // Talk Test reminder panel
  let rpX = margin, rpY = 36, rpW = canvasWidth - 2 * margin, rpH = 52;
  fill('#eef4ff'); stroke('#b9c9e8'); strokeWeight(1);
  rect(rpX, rpY, rpW, rpH, 8);
  noStroke();
  fill('#1a3a6c'); textAlign(LEFT, TOP); textSize(12.5); textStyle(BOLD);
  text('The Talk Test', rpX + 10, rpY + 7);
  textStyle(NORMAL); fill('#333'); textSize(11.5);
  text('Moderate: you can talk but not sing.   Vigorous: you can only say a few words before pausing for a breath.',
    rpX + 10, rpY + 25, rpW - 20, rpH - 28);

  // current activity card
  let act = activities[order[idx]];
  let cardW = min(canvasWidth - 2 * margin, 440);
  let cardX = canvasWidth / 2 - cardW / 2, cardY = 98, cardH = 66;
  fill('white'); stroke('cadetblue'); strokeWeight(2);
  rect(cardX, cardY, cardW, cardH, 10);
  noStroke();
  fill('teal'); textAlign(LEFT, TOP); textSize(11);
  text('Activity ' + (idx + 1) + ' of ' + activities.length, cardX + 12, cardY + 8);
  fill('black'); textAlign(CENTER, CENTER); textSize(15);
  text(act.n, cardX + 12, cardY + 24, cardW - 24, cardH - 30);

  // two zones
  zoneRects = [];
  let n = 2, gap = 14;
  let zW = (canvasWidth - 2 * margin - gap) / n, zY = 182, zH = 96;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (zW + gap);
    zoneRects.push({ x: x, y: zY, w: zW, h: zH, i: i });
    let isPick = picked === i;
    let markCorrect = picked >= 0 && i === act.i;
    let hover = picked < 0 && pointInRect(mouseX, mouseY, { x, y: zY, w: zW, h: zH });
    strokeWeight(markCorrect ? 4 : 2); stroke(zoneColors[i]);
    if (markCorrect) fill(lerpColor(color(zoneColors[i]), color('white'), 0.55));
    else if (isPick) fill('mistyrose');
    else if (hover) fill('lightyellow');
    else fill(lerpColor(color(zoneColors[i]), color('white'), 0.82));
    rect(x, zY, zW, zH, 10);
    noStroke();
    fill(zoneColors[i]); textAlign(CENTER, TOP); textSize(18); textStyle(BOLD);
    text(zones[i], x, zY + 16, zW, 30);
    textStyle(NORMAL); fill('#555'); textSize(11);
    let hint = i === 0 ? 'talk, but not sing' : 'only a few words';
    text(hint, x + 6, zY + 46, zW - 12, 24);
    if (markCorrect) {
      fill('seagreen'); textAlign(CENTER, TOP); textSize(22);
      text('✓', x, zY + zH - 30);
    }
  }
  cursor(overAnyZone() && picked < 0 ? HAND : ARROW);

  // feedback
  let fy = 292;
  textAlign(LEFT, TOP); textSize(13.5);
  if (picked < 0) {
    fill('dimgray');
    text('Read the activity, then click Moderate or Vigorous.', margin, fy, canvasWidth - 2 * margin, 40);
  } else {
    let right = picked === act.i;
    fill(right ? 'seagreen' : '#b26a00');
    let lead = right ? 'Correct. ' : 'Not quite — it is ' + zones[act.i] + '. ';
    text(lead + act.fb, margin, fy, canvasWidth - 2 * margin, 92);
  }

  // tally
  noStroke(); fill('navy'); textAlign(LEFT, BOTTOM); textSize(13);
  text('Sorted ' + sorted + ' of ' + activities.length + '  —  ' + correct + ' correct',
    margin, drawHeight - 10);
  if (sorted === activities.length) {
    fill('seagreen'); textAlign(RIGHT, BOTTOM); textSize(13);
    text('Deck complete! Try Reset Deck.', canvasWidth - margin, drawHeight - 10);
  }
}

function overAnyZone() {
  for (let z of zoneRects) if (pointInRect(mouseX, mouseY, z)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (mouseY > drawHeight) return;
  if (picked >= 0) return;   // one pick per card
  let act = activities[order[idx]];
  for (let z of zoneRects) {
    if (pointInRect(mouseX, mouseY, z)) {
      picked = z.i;
      sorted++;
      if (z.i === act.i) correct++;
      return;
    }
  }
}

function nextCard() {
  if (picked < 0) return;                 // sort the current card first
  if (idx < activities.length - 1) { idx++; picked = -1; }
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
