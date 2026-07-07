// Depression Symptom and Cause Explorer - MicroSim (classify scenarios)
// CANVAS_HEIGHT: 492
// Grades 9-12, Understand (L2): students classify scenarios as consistent with clinical
// depression vs. ordinary temporary low mood, and note the most relevant contributing
// factor. No imagery of self-harm or crisis; text-based scenarios only.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 14;

let depButton;
let lowButton;
let nextButton;

let symptoms = [
  'Persistent sadness', 'Loss of interest', 'Sleep changes', 'Appetite changes',
  'Fatigue', 'Concentration difficulty', 'Feelings of worthlessness'
];

// correct: 'dep' or 'low'; factor; e explanation
let bank = [
  { s: 'For three weeks a student feels persistent sadness, has lost interest in hobbies, sleeps poorly, and can\'t concentrate.', a: 'dep', f: 'brain chemistry', e: 'Multiple symptoms lasting weeks fit clinical depression.' },
  { s: 'After failing one quiz, a student feels down for an afternoon, then feels okay by evening.', a: 'low', f: 'life stressors', e: 'A brief, single-event dip is ordinary low mood.' },
  { s: 'For over a month, a person feels worthless, exhausted, and no longer enjoys anything, with big appetite changes.', a: 'dep', f: 'genetics', e: 'A weeks-long pattern of several symptoms fits depression.' },
  { s: 'Someone is sad the day their pet is at the vet, but bounces back once the pet is home.', a: 'low', f: 'life stressors', e: 'A short, understandable reaction is temporary low mood.' },
  { s: 'For a month a teen sleeps too much, feels constant fatigue, and struggles to focus after a difficult loss.', a: 'dep', f: 'trauma', e: 'A lasting multi-symptom pattern, even after a trigger, fits depression.' },
  { s: 'A person feels flat for an evening after a boring day, then feels normal the next morning.', a: 'low', f: 'life stressors', e: 'A one-day, mild dip is ordinary low mood.' },
  { s: 'Someone with a chronic illness has felt persistently sad and disinterested for six weeks.', a: 'dep', f: 'chronic illness', e: 'Long-lasting sadness plus lost interest fits depression; illness can contribute.' },
  { s: 'A student is nervous and a little down before a big game, but excited once it starts.', a: 'low', f: 'life stressors', e: 'Short pre-event nerves are not clinical depression.' },
  { s: 'For weeks, a person has appetite changes, worthlessness, and can\'t enjoy time with friends.', a: 'dep', f: 'brain chemistry', e: 'A sustained cluster of symptoms fits depression.' },
  { s: 'Someone feels blue on a rainy Monday, then cheerful when the sun returns.', a: 'low', f: 'life stressors', e: 'Mood tied to a passing situation is ordinary low mood.' },
  { s: 'A teen with a family history of depression has felt hopeless and tired for over a month.', a: 'dep', f: 'genetics', e: 'A weeks-long pattern with family history fits depression.' },
  { s: 'A person is disappointed for a few hours after plans get cancelled, then makes new plans.', a: 'low', f: 'life stressors', e: 'A brief reaction that resolves is temporary low mood.' }
];

let order = [], pos = 0, picked = '', correctCount = 0, total = 0, selSymptom = -1;
let symRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  depButton = createButton('Consistent With Depression');
  depButton.mousePressed(() => judge('dep'));
  lowButton = createButton('Ordinary Low Mood');
  lowButton.mousePressed(() => judge('low'));
  nextButton = createButton('Next');
  nextButton.mousePressed(next);
  positionControls();
  reshuffle();
  describe('Seven clinical depression symptoms shown as reference, and a scenario card. ' +
    'Students classify each scenario as consistent with depression or ordinary temporary ' +
    'low mood, and see the most relevant contributing factor, with a running score.', LABEL);
}

function positionControls() {
  depButton.position(10, drawHeight + 14);
  lowButton.position(200, drawHeight + 14);
  nextButton.position(canvasWidth - 56, drawHeight + 14);
}

function reshuffle() {
  order = [...Array(bank.length).keys()];
  for (let i = order.length - 1; i > 0; i--) { let j = Math.floor(random(i + 1)); [order[i], order[j]] = [order[j], order[i]]; }
  pos = 0; picked = '';
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
  text('Depression Symptom & Cause Explorer', canvasWidth / 2, 6);

  // symptom reference (left)
  symRects = [];
  let lw = canvasWidth * 0.42;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(11);
  text('Clinical symptoms (reference):', margin, 30);
  let y0 = 46, sh = 30, gap = 3;
  for (let i = 0; i < symptoms.length; i++) {
    let y = y0 + i * (sh + gap);
    symRects.push({ x: margin, y: y, w: lw - margin, h: sh, i: i });
    let sel = selSymptom === i;
    strokeWeight(sel ? 2 : 1); stroke(sel ? 'mediumpurple' : 'silver');
    fill(sel ? 'lavender' : 'white');
    rect(margin, y, lw - margin, sh, 4);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(11);
    text(symptoms[i], margin + 6, y + sh / 2);
  }

  // scenario (right)
  let rx = lw + 6, rw = canvasWidth - rx - margin;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(rx, 46, rw, 150, 8);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(10);
  text('Scenario ' + (pos + 1) + ':', rx + 8, 52);
  fill('black'); textSize(12);
  text(bank[order[pos]].s, rx + 8, 68, rw - 16, 124);

  // feedback + score
  let fy = 206;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(rx, fy, rw, drawHeight - fy - 10, 8);
  noStroke(); textAlign(LEFT, TOP); textSize(11);
  if (!picked) { fill('dimgray'); text('Depression or ordinary low mood?', rx + 6, fy + 6, rw - 12, 40); }
  else {
    let ex = bank[order[pos]];
    let correct = picked === ex.a;
    fill(correct ? 'seagreen' : 'indianred');
    text((correct ? '✓ ' : '✗ ') + ex.e + ' Most relevant factor: ' + ex.f + '.', rx + 6, fy + 6, rw - 12, 110);
  }
  fill('navy'); textAlign(LEFT, BOTTOM); textSize(11);
  text('Score: ' + correctCount + ' / ' + total, rx + 6, drawHeight - 16);
  cursor(overSym() ? HAND : ARROW);
}

function overSym() { for (let s of symRects) if (pointInRect(mouseX, mouseY, s)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let s of symRects) if (pointInRect(mouseX, mouseY, s)) { selSymptom = (selSymptom === s.i ? -1 : s.i); return; }
}

function judge(val) {
  if (picked) return;
  picked = val; total++;
  if (val === bank[order[pos]].a) correctCount++;
}
function next() { pos++; if (pos >= order.length) reshuffle(); picked = ''; }

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
