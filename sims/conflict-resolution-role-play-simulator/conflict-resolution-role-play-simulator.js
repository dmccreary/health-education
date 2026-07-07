// Conflict Resolution Role-Play Simulator - MicroSim (five-step branching choices)
// CANVAS_HEIGHT: 497
// Grade 5, Apply (L3): students demonstrate the five-step conflict-resolution process by
// choosing the best response at each stage of a peer conflict.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resultButton;
let againButton;
let newButton;

let stageNames = ['Stay Calm', 'Say What Happened', 'Listen', 'Find a Solution', 'Follow Through'];
// per-stage choices (the right MOVE is scenario-independent); a = correct
let stageChoices = [
  { c: ["Take a breath and say 'let's figure this out'", 'Yell to make your point', 'Storm off angry'], a: 0,
    ok: 'Good — staying calm keeps the conflict from getting bigger.', no: 'This raises tension instead of resolving it — try again.' },
  { c: ['Calmly say what you saw happen', 'Blame them for everything', 'Exaggerate to win'], a: 0,
    ok: 'Nice — stating the facts calmly keeps it fair.', no: 'Blaming or exaggerating makes people defensive — try again.' },
  { c: ['Let them explain their side', 'Interrupt to correct them', 'Ignore what they say'], a: 0,
    ok: 'Listening helps you understand the whole situation.', no: 'Not listening keeps the conflict stuck — try again.' },
  { c: ['Suggest a fair compromise', 'Demand your way only', 'Refuse to solve it'], a: 0,
    ok: 'A fair compromise works for both people.', no: 'Insisting on your way alone is not a solution — try again.' },
  { c: ['Agree on the plan and stick to it', 'Agree, then ignore it', 'Change your mind to cause trouble'], a: 0,
    ok: 'Following through builds trust and keeps the peace.', no: 'Not following through undoes your good work — try again.' }
];
let scenarios = [
  'Two students both believe they were assigned the same job in a group project.',
  'Two classmates reach for the same recess equipment at the same time.',
  'You and a sibling disagree about whose turn it is to do a chore.',
  'Two friends both want the same seat and are getting frustrated.'
];

let sIndex = 0;
let stage = 0;
let picked = -1;
let done = false;
let choiceRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  resultButton = createButton('See Result');
  resultButton.mousePressed(seeResult);
  againButton = createButton('Try Again');
  againButton.mousePressed(() => { stage = 0; picked = -1; done = false; });
  newButton = createButton('New Scenario');
  newButton.mousePressed(newScenario);
  positionControls();
  describe('A peer conflict scenario with a five-step stage indicator — stay calm, say ' +
    'what happened, listen, find a solution, follow through. Students pick the best response ' +
    'at each stage and advance with feedback.', LABEL);
}

function positionControls() {
  resultButton.position(10, drawHeight + 14);
  againButton.position(110, drawHeight + 14);
  newButton.position(200, drawHeight + 14);
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
  text('Conflict Resolution Role-Play', canvasWidth / 2, 6);

  // stage indicator (5 dots)
  let tw = (canvasWidth - margin * 2) / 5;
  for (let i = 0; i < 5; i++) {
    let x = margin + i * tw;
    let active = i === stage && !done, complete = i < stage || done;
    noStroke(); fill(complete ? 'seagreen' : (active ? 'gold' : 'gainsboro'));
    rect(x + 2, 30, tw - 4, 30, 5);
    fill(active ? 'black' : (complete ? 'white' : 'dimgray')); textAlign(CENTER, CENTER); textSize(10);
    text((i + 1) + '. ' + stageNames[i], x + 3, 45, tw - 6, 30);
  }

  // scenario
  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5);
  rect(margin, 66, canvasWidth - margin * 2, 52, 8);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14);
  text(scenarios[sIndex], margin + 12, 92, canvasWidth - margin * 2 - 24, 46);

  if (done) {
    noStroke(); fill('seagreen'); textAlign(CENTER, CENTER); textSize(18);
    text('✓ You worked through all five steps and resolved the conflict respectfully!',
      margin, 130, canvasWidth - margin * 2, drawHeight - 150);
    return;
  }

  // choices for current stage
  choiceRects = [];
  let sc = stageChoices[stage];
  let y0 = 130, ch = 50, gap = 10;
  for (let i = 0; i < sc.c.length; i++) {
    let y = y0 + i * (ch + gap);
    choiceRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: ch, i: i });
    let hover = pointInRect(mouseX, mouseY, choiceRects[i]);
    let showRes = picked >= 0;
    strokeWeight(1.5); stroke('mediumpurple');
    if (showRes && i === sc.a) { fill('honeydew'); stroke('seagreen'); strokeWeight(2.5); }
    else if (showRes && i === picked) { fill('mistyrose'); stroke('indianred'); strokeWeight(2.5); }
    else fill(hover && picked < 0 ? 'lavender' : 'white');
    rect(margin, y, canvasWidth - margin * 2, ch, 8);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14);
    text(sc.c[i], margin + 12, y + ch / 2, canvasWidth - margin * 2 - 24, ch);
  }
  cursor(picked < 0 && overAnyChoice() ? HAND : ARROW);

  // feedback
  let fy = y0 + sc.c.length * (ch + gap) + 4;
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (picked < 0) {
    fill('dimgray'); text('Stage ' + (stage + 1) + ': ' + stageNames[stage] + ' — choose the best response.',
      margin, fy, canvasWidth - margin * 2, 40);
  } else {
    let correct = picked === sc.a;
    fill(correct ? 'seagreen' : 'darkgoldenrod');
    text((correct ? '✓ ' : '') + (correct ? sc.ok + ' Press See Result to continue.' : sc.no),
      margin, fy, canvasWidth - margin * 2, 44);
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
  if (done || picked >= 0) return;
  for (let r of choiceRects) if (pointInRect(mouseX, mouseY, r)) { picked = r.i; return; }
}

function seeResult() {
  if (picked < 0) return;
  if (picked === stageChoices[stage].a) {
    if (stage < 4) { stage++; picked = -1; }
    else done = true;
  } else {
    picked = -1; // try again same stage
  }
}

function newScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  stage = 0; picked = -1; done = false;
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
