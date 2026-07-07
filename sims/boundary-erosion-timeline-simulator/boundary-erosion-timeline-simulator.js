// Boundary Erosion Timeline Simulator - MicroSim (step-through judgment timeline)
// CANVAS_HEIGHT: 497
// Grades 9-12, Analyze (L4): students examine a sequence of digital relationship
// requests and distinguish where reasonable behavior becomes a controlling pattern.
// Non-alarmist; focused on pattern recognition, not diagnosing a real relationship.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let nextButton;
let restartButton;

let optLabels = ['Healthy\nboundary', 'Healthy but\nworth watching', 'Boundary\nerosion'];
// judgment: 0 healthy, 1 worth watching, 2 erosion
let steps = [
  { request: 'Can you share your location with me when you\'re out late?', j: 0,
    e: 'Sharing location can be a healthy, mutual safety habit when both people agree and either can stop.' },
  { request: 'Please text me back right away whenever I message you.', j: 1,
    e: 'Wanting quick replies is normal, but expecting instant responses can start to limit your freedom — worth watching.' },
  { request: "I don't like that friend of yours — can you stop hanging out with them?", j: 1,
    e: 'Feelings about friends happen, but trying to control who you see is a warning sign to watch closely.' },
  { request: 'Let me see who you\'ve been texting.', j: 2,
    e: 'Demanding access to your private messages treats your privacy as something to be earned — a controlling pattern.' },
  { request: 'Delete the photos with your ex and that friend.', j: 2,
    e: 'Controlling your photos and past relationships is boundary erosion, not care.' },
  { request: 'Give me your phone password so I know you\'re not talking to anyone.', j: 2,
    e: 'Requiring your password to monitor you removes your autonomy — a clear boundary-eroding demand.' }
];

let idx = 0;
let judged = new Array(steps.length).fill(-1); // student's judgment per step
let showFinal = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Step');
  nextButton.mousePressed(nextStep);
  restartButton = createButton('Restart Timeline');
  restartButton.mousePressed(restart);
  positionControls();
  describe('A six-step timeline of digital relationship requests. At each step the ' +
    'student judges whether it is a healthy boundary, worth watching, or boundary ' +
    'erosion, then sees where professionals would place it. A final view shows the ' +
    'whole pattern.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 14);
  restartButton.position(110, drawHeight + 14);
}

let optRects = [];

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
  text('Boundary Erosion Timeline', canvasWidth / 2, 8);

  drawTimelineStrip();

  if (showFinal) { drawFinal(); return; }

  // current step card
  let cy = 96, ch = 90;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, cy, canvasWidth - margin * 2, ch, 10);
  noStroke();
  fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
  text('Step ' + (idx + 1) + ' of ' + steps.length, margin + 12, cy + 8);
  fill('black'); textSize(15);
  text('"' + steps[idx].request + '"', margin + 12, cy + 26, canvasWidth - margin * 2 - 24, ch - 34);

  // three judgment options
  optRects = [];
  let oy = cy + ch + 14, oh = 50, gap = 8;
  let ow = (canvasWidth - margin * 2 - gap * 2) / 3;
  let jcolors = ['seagreen', 'goldenrod', 'indianred'];
  for (let i = 0; i < 3; i++) {
    let x = margin + i * (ow + gap);
    optRects.push({ x: x, y: oy, w: ow, h: oh, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: x, y: oy, w: ow, h: oh });
    let chosen = judged[idx] === i;
    strokeWeight(chosen ? 3 : 1.5);
    stroke(jcolors[i]);
    fill(chosen ? 'lightyellow' : (hover && judged[idx] < 0 ? 'floralwhite' : 'white'));
    rect(x, oy, ow, oh, 8);
    noStroke();
    fill(jcolors[i] === 'goldenrod' ? 'darkgoldenrod' : jcolors[i]);
    textAlign(CENTER, CENTER); textSize(12);
    text(optLabels[i], x + 3, oy + 3, ow - 6, oh - 6);
  }
  cursor(judged[idx] < 0 && overAnyOpt() ? HAND : ARROW);

  // explanation after judging
  let fy = oy + oh + 12;
  textAlign(LEFT, TOP); textSize(13);
  if (judged[idx] < 0) {
    fill('dimgray');
    text('How would you judge this request? Make your call, then see where professionals place it.',
      margin, fy, canvasWidth - margin * 2, 50);
  } else {
    fill('darkslateblue');
    let pro = optLabels[steps[idx].j].replace('\n', ' ');
    text('Where professionals often place it: ' + pro + '. ' + steps[idx].e,
      margin, fy, canvasWidth - margin * 2, drawHeight - fy - 6);
  }
}

function drawTimelineStrip() {
  let y = 66, n = steps.length;
  let w = (canvasWidth - margin * 2 - (n - 1) * 6) / n;
  let jcolors = ['seagreen', 'goldenrod', 'indianred'];
  for (let i = 0; i < n; i++) {
    let x = margin + i * (w + 6);
    let done = judged[i] >= 0 || (showFinal);
    stroke('gray'); strokeWeight(1);
    fill(done ? jcolors[steps[i].j] : (i === idx && !showFinal ? 'gold' : 'white'));
    rect(x, y, w, 16, 3);
    noStroke(); fill(done ? 'white' : 'gray');
    textAlign(CENTER, CENTER); textSize(11);
    text(i + 1, x + w / 2, y + 8);
  }
}

function drawFinal() {
  fill('black'); textAlign(CENTER, TOP); textSize(14);
  text('The full pattern — professional judgment:', canvasWidth / 2, 92);
  let y = 116;
  let jcolors = ['seagreen', 'goldenrod', 'indianred'];
  let jnames = ['Healthy', 'Worth watching', 'Erosion'];
  textAlign(LEFT, CENTER); textSize(12);
  for (let i = 0; i < steps.length; i++) {
    fill('white'); stroke(jcolors[steps[i].j]); strokeWeight(2);
    rect(margin, y, canvasWidth - margin * 2, 34, 6);
    noStroke(); fill('black');
    text((i + 1) + '. ' + steps[i].request, margin + 10, y + 17, canvasWidth - margin * 2 - 110, 30);
    fill(jcolors[steps[i].j]); textAlign(RIGHT, CENTER);
    text(jnames[steps[i].j], canvasWidth - margin - 8, y + 17);
    textAlign(LEFT, CENTER);
    y += 40;
  }
  fill('darkslateblue'); textAlign(CENTER, TOP); textSize(12);
  text('Erosion is usually gradual — each step seems small. That is exactly why noticing the ' +
    'pattern early matters.', margin, y + 2, canvasWidth - margin * 2, 40);
}

function overAnyOpt() {
  for (let o of optRects) if (pointInRect(mouseX, mouseY, o)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (showFinal) return;
  if (judged[idx] >= 0) return;
  for (let o of optRects) {
    if (pointInRect(mouseX, mouseY, o)) { judged[idx] = o.i; return; }
  }
}

function nextStep() {
  if (judged[idx] < 0) return; // must judge before advancing
  if (idx < steps.length - 1) idx++;
  else showFinal = true;
}

function restart() {
  idx = 0; judged = new Array(steps.length).fill(-1); showFinal = false;
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
