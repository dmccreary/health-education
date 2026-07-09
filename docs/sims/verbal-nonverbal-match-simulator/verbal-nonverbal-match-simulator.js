// Verbal-Nonverbal Match Simulator - MicroSim (two-choice analysis with feedback)
// CANVAS_HEIGHT: 460
// Analyze (L4): learners examine eight paired scenarios (a spoken line plus a
// described nonverbal cue) and distinguish whether the signals are congruent or
// incongruent, comparing what each combination communicates. Fixed order from
// clear to subtle; immediate feedback and a running score. Speech bubble stacks
// above the posture icon on narrow screens.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 380;
let controlHeight = 80;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let congruentButton, incongruentButton, nextButton, restartButton;

// pose: arms 'open' | 'crossed' | 'neutral' ; face 'smile' | 'neutral' | 'frown'
let pairs = [
  { verbal: "I'm so happy to see you!",
    nonverbal: 'Big smile, open arms, steady eye contact',
    congruent: true, arms: 'open', face: 'smile',
    fb: 'The words and the body language match, so this reads as a genuine, warm welcome.' },
  { verbal: "I'm fine, everything's great.",
    nonverbal: 'Arms crossed, looking at the floor, quiet voice',
    congruent: false, arms: 'crossed', face: 'frown',
    fb: "The cheerful words don't match the closed-off body language — a listener might sense something is wrong." },
  { verbal: "Sure, I'd be glad to help.",
    nonverbal: 'Relaxed posture, nodding, an easy smile',
    congruent: true, arms: 'open', face: 'smile',
    fb: 'Words and cues agree, so the offer to help comes across as sincere.' },
  { verbal: "No, I'm not upset.",
    nonverbal: 'Clenched jaw, turned away, sharp tone',
    congruent: false, arms: 'crossed', face: 'frown',
    fb: 'The tense body language contradicts the calm words — the person is probably upset.' },
  { verbal: 'That sounds fun, count me in!',
    nonverbal: 'Shrugging, flat voice, glancing at a phone',
    congruent: false, arms: 'neutral', face: 'neutral',
    fb: "Enthusiastic words with disengaged cues suggest the person isn't really that interested." },
  { verbal: "I'm listening — go ahead.",
    nonverbal: 'Facing you, leaning in, making eye contact',
    congruent: true, arms: 'open', face: 'neutral',
    fb: 'The attentive body language backs up the words, so it feels like real listening.' },
  { verbal: "It's okay, I don't mind waiting.",
    nonverbal: 'Tapping a foot, glancing at the clock, tight smile',
    congruent: false, arms: 'neutral', face: 'neutral',
    fb: 'The patient words are undercut by restless cues — the person may be more frustrated than they let on.' },
  { verbal: 'Nice work on your project.',
    nonverbal: 'Warm tone, a genuine smile, a thumbs-up',
    congruent: true, arms: 'open', face: 'smile',
    fb: 'Tone and gesture match the kind words, so the compliment feels honest.' }
];

let idx = 0;
let answers = new Array(pairs.length).fill(null); // true = correct, false = wrong

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  congruentButton = createButton('Congruent');
  congruentButton.mousePressed(() => answer(true));
  congruentButton.parent(document.querySelector('main'));

  incongruentButton = createButton('Incongruent');
  incongruentButton.mousePressed(() => answer(false));
  incongruentButton.parent(document.querySelector('main'));

  nextButton = createButton('Next ▶');
  nextButton.mousePressed(nextPair);
  nextButton.parent(document.querySelector('main'));

  restartButton = createButton('Restart');
  restartButton.mousePressed(restart);
  restartButton.parent(document.querySelector('main'));

  positionControls();
  describe('A speech bubble shows a spoken line while a posture icon and a short ' +
    'caption show the speaker\'s nonverbal cue. The learner decides whether the two ' +
    'signals are Congruent or Incongruent, then reads feedback explaining what the ' +
    'match or mismatch communicates. A running score tracks progress through eight pairs.', LABEL);
}

function positionControls() {
  congruentButton.position(margin, drawHeight + 8);
  incongruentButton.position(margin + 130, drawHeight + 8);
  nextButton.position(margin, drawHeight + 44);
  restartButton.position(margin + 130, drawHeight + 44);
}

function draw() {
  updateCanvasSize();

  fill('#f5f8fb');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title + score
  fill('#12506b');
  textAlign(LEFT, TOP);
  textSize(19);
  text('Verbal-Nonverbal Match', margin, 8);
  fill('#40525c');
  textAlign(RIGHT, TOP);
  textSize(13);
  text('Pair ' + (idx + 1) + ' of ' + pairs.length + '   •   Score: ' + scoreCount(),
       canvasWidth - margin, 12);

  let p = pairs[idx];
  let narrow = canvasWidth < 470;

  if (narrow) {
    drawBubble(margin, 44, canvasWidth - 2 * margin, 96, p.verbal);
    drawPosture(canvasWidth / 2, 190, p);
    drawCue(margin, 232, canvasWidth - 2 * margin, p.nonverbal);
  } else {
    let colW = (canvasWidth - 2 * margin) / 2;
    drawBubble(margin, 54, colW - 10, 150, p.verbal);
    drawPosture(margin + colW + colW / 2 - 6, 130, p);
    drawCue(margin + colW, 210, colW - 6, p.nonverbal);
  }

  drawFeedback();
}

function drawBubble(x, y, w, h, txt) {
  push();
  fill('white');
  stroke('#3f7cc4');
  strokeWeight(2);
  rect(x, y, w, h, 14);
  // tail
  triangle(x + 24, y + h, x + 44, y + h, x + 28, y + h + 16);
  noStroke();
  fill('#6b7b85');
  textAlign(LEFT, TOP);
  textSize(12);
  text('They say:', x + 14, y + 10);
  fill('#12303f');
  textAlign(CENTER, CENTER);
  textSize(min(21, w / 12));
  text('"' + txt + '"', x + 12, y + 18, w - 24, h - 30);
  pop();
}

function drawCue(x, y, w, txt) {
  push();
  noStroke();
  fill('#6b7b85');
  textAlign(CENTER, TOP);
  textSize(12);
  text('Their body language:', x, y, w, 16);
  fill('#3a4a52');
  textSize(14.5);
  text(txt, x, y + 20, w, 60);
  pop();
}

function drawPosture(cx, cy, p) {
  push();
  stroke('#3a5a6a');
  strokeWeight(3);
  noFill();
  // head
  circle(cx, cy - 30, 34);
  // eyes
  fill('#3a5a6a');
  noStroke();
  circle(cx - 7, cy - 33, 4);
  circle(cx + 7, cy - 33, 4);
  // mouth
  noFill();
  stroke('#3a5a6a');
  strokeWeight(2.5);
  if (p.face === 'smile') arc(cx, cy - 26, 16, 12, 0, PI);
  else if (p.face === 'frown') arc(cx, cy - 20, 16, 12, PI, TWO_PI);
  else line(cx - 7, cy - 24, cx + 7, cy - 24);
  // body
  strokeWeight(3);
  line(cx, cy - 12, cx, cy + 28);
  // arms
  if (p.arms === 'open') {
    line(cx, cy - 4, cx - 26, cy - 20);
    line(cx, cy - 4, cx + 26, cy - 20);
  } else if (p.arms === 'crossed') {
    line(cx - 18, cy - 2, cx + 12, cy + 12);
    line(cx + 18, cy - 2, cx - 12, cy + 12);
  } else {
    line(cx, cy - 2, cx - 16, cy + 20);
    line(cx, cy - 2, cx + 16, cy + 20);
  }
  // legs
  line(cx, cy + 28, cx - 12, cy + 52);
  line(cx, cy + 28, cx + 12, cy + 52);
  pop();
}

function drawFeedback() {
  let px = margin, py = 300, pw = canvasWidth - 2 * margin, ph = drawHeight - py - 8;
  let a = answers[idx];
  fill('#eef4f8');
  stroke('#cddbe6');
  strokeWeight(1);
  rect(px, py, pw, ph, 8);
  noStroke();
  textAlign(LEFT, TOP);

  if (a === null) {
    fill('#40525c');
    textSize(14);
    text('Do the words and the body language match? Choose Congruent or Incongruent.',
         px + 12, py + 10, pw - 24, ph - 20);
  } else {
    let p = pairs[idx];
    let head = a ? '✓ Correct — ' : '✗ Not quite — ';
    head += p.congruent ? 'these signals are Congruent.' : 'these signals are Incongruent.';
    fill(a ? '#2e6b4a' : '#b5691f');
    textSize(14);
    text(head, px + 12, py + 8, pw - 24, 22);
    fill('#333');
    textSize(13);
    text(p.fb, px + 12, py + 32, pw - 24, ph - 40);
  }
}

function scoreCount() {
  return answers.filter(a => a === true).length;
}

function answer(choseCongruent) {
  if (answers[idx] !== null) return;   // one answer per pair
  answers[idx] = (choseCongruent === pairs[idx].congruent);
}

function nextPair() {
  if (answers[idx] === null) return;   // answer before advancing
  if (idx < pairs.length - 1) idx++;
}

function restart() {
  idx = 0;
  answers = new Array(pairs.length).fill(null);
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
