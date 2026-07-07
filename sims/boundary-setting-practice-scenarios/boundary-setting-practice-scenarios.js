// Boundary-Setting Practice Scenarios - MicroSim (name-it, feel-it, state-it builder)
// CANVAS_HEIGHT: 512
// Grade 5, Apply (L3): students construct a clear boundary statement using the
// name-it / feel-it / state-it pattern across several peer scenarios.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let hearButton;
let nextButton;
let resetButton;

let scenarios = [
  { ctx: 'Your friend keeps reading your texts over your shoulder.',
    name: ['read my texts over my shoulder', 'look at my phone without asking', 'stand too close when I text'],
    feel: ['I feel like I have no privacy', 'I feel uncomfortable', 'I feel annoyed'],
    bnd: ['please give me some space', 'please stop reading my messages', 'please ask before looking'] },
  { ctx: 'A classmate keeps borrowing your things without asking.',
    name: ['take my things without asking', 'borrow my stuff without asking', 'use my things without permission'],
    feel: ['I feel disrespected', 'I feel frustrated', 'I feel worried about my things'],
    bnd: ['please ask me first', 'please return them and ask next time', "please don't take them without asking"] },
  { ctx: 'Someone keeps pressuring you to share your password.',
    name: ['keep asking for my password', 'pressure me to share my password', 'ask for my private password'],
    feel: ['I feel pressured', 'I feel uncomfortable', "I don't feel okay about it"],
    bnd: ['please stop asking', 'my password stays private', 'please respect my privacy'] },
  { ctx: 'A friend keeps texting you very late at night.',
    name: ['text me very late at night', 'message me after my bedtime', 'keep texting me late'],
    feel: ['I feel tired the next day', "I feel like I can't rest", 'I feel stressed'],
    bnd: ['please text me in the daytime', 'please stop texting after 9', 'please wait until morning'] },
  { ctx: 'A classmate mocks the way you talk.',
    name: ['make fun of how I talk', 'mock the way I speak', 'tease me about my voice'],
    feel: ['I feel hurt', 'I feel embarrassed', 'I feel put down'],
    bnd: ['please stop', 'please speak to me kindly', "please don't make fun of me"] },
  { ctx: 'A friend insists you spend every recess together.',
    name: ['insist we spend every recess together', 'get upset when I play with others', 'want all of my recess time'],
    feel: ['I feel crowded', "I feel like I can't see other friends", 'I feel pressured'],
    bnd: ['please give me space to play with others too', 'I still want to play with others sometimes', 'please let me choose sometimes'] }
];

let sIndex = 0;
let sel = [-1, -1, -1]; // name, feel, boundary
let assembled = false;
let partRects = [[], [], []];
let partLabels = ['1. Name the behavior', '2. How it affects you', '3. State the boundary'];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  hearButton = createButton('🔊 Hear It Back');
  hearButton.mousePressed(hearIt);
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetParts);
  positionControls();
  describe('A peer scenario with a three-part boundary builder: name the behavior, say ' +
    'how it affects you, and state the boundary. Students pick one option per part and ' +
    'hear the assembled statement.', LABEL);
}

function positionControls() {
  hearButton.position(10, drawHeight + 14);
  nextButton.position(140, drawHeight + 14);
  resetButton.position(270, drawHeight + 14);
}

function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

function statement() {
  let sc = scenarios[sIndex];
  return 'When you ' + sc.name[sel[0]] + ', ' + sc.feel[sel[1]] + '. ' + capitalize(sc.bnd[sel[2]]) + '.';
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
  textSize(19);
  text('Boundary-Setting Practice', canvasWidth / 2, 6);

  // scenario
  let sc = scenarios[sIndex];
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, 34, canvasWidth - margin * 2, 46, 8);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14);
  text('Scenario ' + (sIndex + 1) + '/6: ' + sc.ctx, margin + 10, 57, canvasWidth - margin * 2 - 20, 40);

  // three parts
  let py = 90;
  let parts = [sc.name, sc.feel, sc.bnd];
  partRects = [[], [], []];
  for (let p = 0; p < 3; p++) {
    noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(13);
    text(partLabels[p], margin, py);
    let chipY = py + 18, chipH = 34, gap = 6;
    let cw = (canvasWidth - margin * 2 - gap * 2) / 3;
    for (let o = 0; o < 3; o++) {
      let x = margin + o * (cw + gap);
      partRects[p].push({ x: x, y: chipY, w: cw, h: chipH, p: p, o: o });
      let chosen = sel[p] === o;
      let hover = pointInRect(mouseX, mouseY, { x: x, y: chipY, w: cw, h: chipH });
      strokeWeight(chosen ? 3 : 1.5);
      stroke(chosen ? 'darkorange' : 'slategray');
      fill(chosen ? 'gold' : (hover ? 'lightyellow' : 'white'));
      rect(x, chipY, cw, chipH, 6);
      noStroke(); fill('black');
      textAlign(CENTER, CENTER); textSize(11);
      text(parts[p][o], x + 4, chipY + 2, cw - 8, chipH - 4);
    }
    py = chipY + chipH + 12;
  }
  cursor(overAnyChip() ? HAND : ARROW);

  // assembled statement card
  let ay = py + 2;
  let ah = drawHeight - ay - 10;
  let ready = sel[0] >= 0 && sel[1] >= 0 && sel[2] >= 0;
  fill(ready && assembled ? 'honeydew' : 'white');
  stroke(ready && assembled ? 'seagreen' : 'silver'); strokeWeight(1.5);
  rect(margin, ay, canvasWidth - margin * 2, ah, 8);
  noStroke();
  if (ready && assembled) {
    fill('seagreen'); textAlign(LEFT, TOP); textSize(12);
    text('✓ Clear, respectful, and specific — a strong boundary:', margin + 10, ay + 8);
    fill('black'); textSize(15);
    text('"' + statement() + '"', margin + 10, ay + 30, canvasWidth - margin * 2 - 20, ah - 38);
  } else {
    fill('dimgray'); textAlign(LEFT, TOP); textSize(13);
    text(ready ? 'Press "Hear It Back" to assemble your boundary statement.'
      : 'Pick one option in each of the three parts above.',
      margin + 10, ay + 10, canvasWidth - margin * 2 - 20, ah - 18);
  }
}

function overAnyChip() {
  for (let p = 0; p < 3; p++) for (let r of partRects[p]) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let p = 0; p < 3; p++) {
    for (let r of partRects[p]) {
      if (pointInRect(mouseX, mouseY, r)) { sel[p] = r.o; assembled = false; return; }
    }
  }
}

function hearIt() {
  if (sel[0] < 0 || sel[1] < 0 || sel[2] < 0) return;
  assembled = true;
  try {
    let u = new SpeechSynthesisUtterance(statement());
    u.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch (e) { /* no speech */ }
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  resetParts();
}
function resetParts() {
  sel = [-1, -1, -1];
  assembled = false;
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
