// Conflict Resolution Path Explorer - MicroSim (guided four-step choices)
// CANVAS_HEIGHT: 500
// Grade 4, Apply (L3): students apply the four-step conflict pattern (pause, I-statement,
// listen, solve) by choosing the most respectful next step at each stage.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 448;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

let stepNames = ['Pause', 'I-Statement', 'Listen', 'Solve'];

// each scenario: text + 4 steps, each step = {choices:[4], correct, fb}
let scenarios = [
  { text: 'Two students both want the only classroom tablet during free time.',
    steps: [
      { c: ['Take a breath and stay calm', 'Grab the tablet first', 'Yell that it is yours', 'Storm off angry'], a: 0, fb: 'Pausing keeps the conflict from growing.' },
      { c: ["I feel frustrated when we both want the same thing", 'You always hog the tablet!', 'Give it to me now', "Whatever, I don't care"], a: 0, fb: 'An I-statement shares your feeling without blaming.' },
      { c: ['Listen to what they want too', 'Interrupt with your idea', 'Talk over them', 'Ignore them'], a: 0, fb: 'Listening shows respect and helps you understand.' },
      { c: ['Agree to take turns with a timer', 'Insist you always go first', 'Refuse any solution', 'Tell the teacher without trying'], a: 0, fb: 'A fair solution works for both people.' }
    ] },
  { text: 'Your group disagrees about whose idea to use for a project.',
    steps: [
      { c: ['Pause and stay calm', 'Say your idea is best, end of story', 'Roll your eyes', 'Quit the group'], a: 0, fb: 'Staying calm keeps the group working together.' },
      { c: ['I feel unheard when we skip my idea', 'Your idea is dumb', 'We are doing mine', 'Fine, do whatever'], a: 0, fb: 'An I-statement names your feeling respectfully.' },
      { c: ['Hear each idea fully', 'Cut people off', 'Only defend your own', 'Look at your phone'], a: 0, fb: 'Listening to each idea helps the group decide fairly.' },
      { c: ['Combine the best parts of each idea', 'Vote only for yourself', 'Give up entirely', 'Let the loudest person win'], a: 0, fb: 'Blending ideas can make the project stronger.' }
    ] },
  { text: 'You and a sibling disagree about which show to watch.',
    steps: [
      { c: ['Take a breath before speaking', 'Snatch the remote', 'Shout to get your way', 'Slam the door'], a: 0, fb: 'A calm start makes solving it easier.' },
      { c: ['I feel left out when I never pick', 'You are so selfish', 'We watch mine or else', 'Ugh, never mind'], a: 0, fb: 'An I-statement explains your feeling without attacking.' },
      { c: ['Ask what they want to watch', 'Talk over them', 'Refuse to listen', 'Walk away mid-sentence'], a: 0, fb: 'Listening helps you find something you both like.' },
      { c: ['Take turns choosing each night', 'Only ever watch yours', 'Break the remote', 'Refuse to compromise'], a: 0, fb: 'Taking turns is a fair, repeatable solution.' }
    ] }
];

let sIndex = 0;
let step = 0;
let chosen = -1;
let done = false;
let choiceRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(reset);
  positionControls();
  describe('A conflict scenario with a four-step tracker — pause, I-statement, listen, ' +
    'solve. At each step students pick the most respectful action from four choices and get ' +
    'feedback, building a full respectful path.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(150, drawHeight + 12);
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

  fill('black');
  textAlign(CENTER, TOP);
  textSize(18);
  text('Conflict Resolution Path', canvasWidth / 2, 6);

  // step tracker
  let tw = (canvasWidth - margin * 2) / 4;
  for (let i = 0; i < 4; i++) {
    let x = margin + i * tw;
    let active = i === step && !done;
    let complete = i < step || done;
    noStroke();
    fill(complete ? 'seagreen' : (active ? 'gold' : 'gainsboro'));
    rect(x + 2, 30, tw - 4, 22, 5);
    fill(active ? 'black' : (complete ? 'white' : 'dimgray'));
    textAlign(CENTER, CENTER); textSize(11);
    text((i + 1) + '. ' + stepNames[i], x + 2, 41, tw - 4, 22);
  }

  // scenario
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, 60, canvasWidth - margin * 2, 56, 8);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14);
  text(scenarios[sIndex].text, margin + 30, 88, canvasWidth - margin * 2 - 40, 50);
  // speech-bubble icon
  noStroke(); fill('cadetblue'); ellipse(margin + 16, 82, 18, 14); triangle(margin + 12, 88, margin + 18, 88, margin + 12, 94);

  if (done) { drawSummary(); drawChoicesArea(true); return; }

  // choices
  choiceRects = [];
  let st = scenarios[sIndex].steps[step];
  let y0 = 126, ch = 44, gap = 8;
  for (let i = 0; i < 4; i++) {
    let y = y0 + i * (ch + gap);
    choiceRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, choiceRects[i]);
    let showRes = chosen >= 0;
    strokeWeight(1.5); stroke('mediumpurple');
    if (showRes && i === st.a) { fill('honeydew'); stroke('seagreen'); strokeWeight(2.5); }
    else if (showRes && i === chosen) { fill('mistyrose'); stroke('indianred'); strokeWeight(2.5); }
    else fill(hover && chosen < 0 ? 'lavender' : 'white');
    rect(margin, y, canvasWidth - margin * 2, ch, 7);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(13);
    text(st.c[i], margin + 12, y + ch / 2, canvasWidth - margin * 2 - 24, ch);
  }
  cursor(chosen < 0 && overAnyChoice() ? HAND : ARROW);

  // feedback
  let fy = y0 + 4 * (ch + gap) + 2;
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (chosen < 0) {
    fill('dimgray'); text('Step ' + (step + 1) + ': ' + stepNames[step] + ' — pick the most respectful choice.',
      margin, fy, canvasWidth - margin * 2, 40);
  } else {
    let correct = chosen === st.a;
    fill(correct ? 'seagreen' : 'darkgoldenrod');
    text((correct ? '✓ ' : 'Not quite — ') + st.fb + (correct ? ' (Click a choice area to continue.)' : ' Try again.'),
      margin, fy, canvasWidth - margin * 2, 40);
  }
}

function drawChoicesArea(x) { /* placeholder to keep layout height when done */ }

function drawSummary() {
  let y0 = 126;
  noStroke(); fill('seagreen'); textAlign(CENTER, TOP); textSize(15);
  text('✓ Conflict solved respectfully! Your path:', canvasWidth / 2, y0);
  textAlign(LEFT, CENTER); textSize(13);
  for (let i = 0; i < 4; i++) {
    let y = y0 + 28 + i * 44;
    fill('honeydew'); stroke('seagreen'); strokeWeight(1);
    rect(margin, y, canvasWidth - margin * 2, 38, 6);
    noStroke(); fill('black');
    text((i + 1) + '. ' + stepNames[i] + ': ' + scenarios[sIndex].steps[i].c[scenarios[sIndex].steps[i].a],
      margin + 10, y + 19, canvasWidth - margin * 2 - 20, 36);
  }
}

function overAnyChoice() {
  for (let r of choiceRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (done) return;
  let st = scenarios[sIndex].steps[step];
  if (chosen >= 0) {
    // advance only if the correct answer was chosen
    if (chosen === st.a) {
      if (step < 3) { step++; chosen = -1; }
      else { done = true; }
    } else {
      chosen = -1; // let them try again
    }
    return;
  }
  for (let r of choiceRects) if (pointInRect(mouseX, mouseY, r)) { chosen = r.i; return; }
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  step = 0; chosen = -1; done = false;
}
function reset() { step = 0; chosen = -1; done = false; }

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
