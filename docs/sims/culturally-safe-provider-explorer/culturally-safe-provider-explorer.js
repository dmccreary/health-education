// What Makes a Provider Culturally Safe? - MicroSim (classify against four practices)
// CANVAS_HEIGHT: 492
// Grades 9-12, Understand (L2): students explain the practices that make a provider
// culturally safe and classify example behaviors as safe or unsafe.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let safeButton;
let unsafeButton;
let nextButton;

let spokes = [
  { name: 'Asks Rather Than Assumes', def: 'Asks about the patient instead of assuming.' },
  { name: 'Communicates Clearly', def: 'Uses plain language and interpreters as needed.' },
  { name: 'Acknowledges Historical Mistrust', def: 'Recognizes real reasons some communities distrust care.' },
  { name: 'Adapts Care to Context', def: 'Fits advice to the patient\'s life and resources.' }
];
let bank = [
  { t: "Asks 'Who do you consider family?' instead of assuming.", safe: true, s: 0, e: 'Asking respects diverse family structures.' },
  { t: 'Assumes a patient\'s family structure without asking.', safe: false, s: 0, e: 'Assuming can erase a patient\'s real relationships.' },
  { t: 'Offers an interpreter when there is a language barrier.', safe: true, s: 1, e: 'Clear communication requires language access.' },
  { t: "Uses medical jargon and never checks understanding.", safe: false, s: 1, e: 'Jargon without checking leaves patients confused.' },
  { t: 'Acknowledges reasons a community may distrust the system.', safe: true, s: 2, e: 'Naming historical mistrust builds trust.' },
  { t: "Dismisses a patient's concerns about past mistreatment.", safe: false, s: 2, e: 'Dismissing history damages the relationship.' },
  { t: "Adjusts advice to fit the patient's home and resources.", safe: true, s: 3, e: 'Context-fit advice is realistic and respectful.' },
  { t: 'Gives one-size-fits-all advice ignoring context.', safe: false, s: 3, e: 'Ignoring context makes advice hard to follow.' },
  { t: 'Explains a diagnosis in plain language and checks in.', safe: true, s: 1, e: 'Plain language plus checking is clear communication.' },
  { t: 'Speaks only English to a patient who needs an interpreter.', safe: false, s: 1, e: 'No interpreter blocks understanding and consent.' },
  { t: 'Asks about cultural practices before suggesting changes.', safe: true, s: 0, e: 'Asking first honors the patient\'s practices.' },
  { t: 'Assumes a patient can afford an expensive treatment.', safe: false, s: 3, e: 'Assuming resources ignores the patient\'s context.' }
];

let order = [], pos = 0, picked = -1, correctCount = 0, total = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  safeButton = createButton('Culturally Safe');
  safeButton.mousePressed(() => judge(true));
  unsafeButton = createButton('Culturally Unsafe');
  unsafeButton.mousePressed(() => judge(false));
  nextButton = createButton('Next Example');
  nextButton.mousePressed(next);
  positionControls();
  reshuffle();
  describe('Four practices of a culturally safe provider are shown as reference. An example ' +
    'provider behavior appears; students classify it as culturally safe or unsafe and see ' +
    'which practice it relates to, with a running score.', LABEL);
}

function positionControls() {
  safeButton.position(10, drawHeight + 14);
  unsafeButton.position(130, drawHeight + 14);
  nextButton.position(canvasWidth - 120, drawHeight + 14);
}

function reshuffle() {
  order = [...Array(bank.length).keys()];
  for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  pos = 0; picked = -1;
}

function draw() {
  updateCanvasSize();
  fill('aliceblue');
  stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(16);
  text('What Makes a Provider Culturally Safe?', canvasWidth / 2, 6);

  // spoke reference (left)
  let lw = canvasWidth * 0.52;
  let cur = bank[order[pos]].s;
  let y0 = 32, ph = 92, gap = 6;
  for (let i = 0; i < 4; i++) {
    let y = y0 + i * (ph + gap);
    let active = picked >= 0 && cur === i;
    strokeWeight(active ? 3 : 1); stroke(active ? 'darkorange' : 'silver');
    fill(active ? 'lightyellow' : 'white');
    rect(margin, y, lw - margin, ph, 6);
    noStroke(); fill(active ? 'darkorange' : 'navy'); textAlign(LEFT, TOP); textSize(12);
    text(spokes[i].name, margin + 8, y + 6, lw - margin - 16, 34);
    fill('black'); textSize(11);
    text(spokes[i].def, margin + 8, y + 40, lw - margin - 16, 48);
  }

  // example (right)
  let rx = lw + 6, rw = canvasWidth - rx - margin;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(rx, 32, rw, 150, 8);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11);
  text('Provider behavior:', rx + 10, 40);
  fill('black'); textSize(13);
  text(bank[order[pos]].t, rx + 10, 62, rw - 20, 116);

  // feedback + score
  let fy = 192;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(rx, fy, rw, drawHeight - fy - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  if (picked < 0) { fill('dimgray'); text('Is this culturally safe or unsafe?', rx + 8, fy + 8, rw - 16, 50); }
  else {
    let ex = bank[order[pos]];
    let correct = picked === (ex.safe ? 1 : 0);
    fill(correct ? 'seagreen' : 'indianred');
    text((correct ? '✓ ' : '✗ ') + '(' + spokes[ex.s].name + ') ' + ex.e, rx + 8, fy + 8, rw - 16, 100);
  }
  fill('navy'); textAlign(LEFT, BOTTOM); textSize(12);
  text('Score: ' + correctCount + ' / ' + total, rx + 8, drawHeight - 16);
}

function judge(isSafe) {
  if (picked >= 0) return;
  picked = isSafe ? 1 : 0; total++;
  if (isSafe === bank[order[pos]].safe) correctCount++;
}
function next() { pos++; if (pos >= order.length) reshuffle(); picked = -1; }

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
