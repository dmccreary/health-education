// Boundary-Setting Response Builder - MicroSim (sequence a response to pressure)
// CANVAS_HEIGHT: 512
// Grades 6-8, Apply (L3): students build an effective response to a peer/digital
// pressure scenario by adding response phrases in order, then check the strategy.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 455;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 18;

let checkButton;
let exampleButton;
let resetButton;

let scenarios = [
  'A group chat keeps pressuring you to send a photo you don\'t want to send.',
  'A friend keeps pressuring you to skip class with them.',
  'Someone online you don\'t know keeps asking to meet up in person.',
  'Classmates dare you to try a vape at a party.',
  'A friend pressures you to share a secret someone told you.',
  'A group keeps texting mean things about another student and wants you to join.'
];

// tokens: text + good? + tag for strategy checking
let tokens = [
  { t: "No, I'm not doing that.", good: true, tag: 'clear' },
  { t: 'I already said no.', good: true, tag: 'repeat' },
  { t: 'Leave the chat / walk away.', good: true, tag: 'exit' },
  { t: 'Block the person.', good: true, tag: 'tool' },
  { t: 'Tell a trusted adult.', good: true, tag: 'adult' },
  { t: 'Keep arguing until they stop.', good: false, tag: 'bad' },
  { t: 'Just give in this once.', good: false, tag: 'bad' }
];

let sIndex = 0;
let response = [];   // indices into tokens, in order
let feedback = '';
let feedbackColor = 'dimgray';
let showExample = false;
let tokenRects = [];
let respRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  checkButton = createButton('Check My Response');
  checkButton.mousePressed(checkResponse);
  exampleButton = createButton('See a Strong Example');
  exampleButton.mousePressed(() => { showExample = !showExample; });
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  describe('A peer-pressure scenario with a palette of response phrases. Students tap ' +
    'phrases to build a response in order, then check whether the sequence reflects sound ' +
    'boundary-setting: a clear no, calm repetition, using exit or digital tools, and ' +
    'involving a trusted adult.', LABEL);
}

function positionControls() {
  checkButton.position(10, drawHeight + 14);
  exampleButton.position(160, drawHeight + 14);
  resetButton.position(320, drawHeight + 14);
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
  text('Boundary-Setting Response Builder', canvasWidth / 2, 6);

  // scenario
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 32, canvasWidth - margin * 2, 52, 8);
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14);
  text('Scenario ' + (sIndex + 1) + '/6: ' + scenarios[sIndex], margin + 10, 58, canvasWidth - margin * 2 - 20, 46);

  // response area (ordered)
  let ry = 94, rh = 116;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(13);
  text('Your response (tap to remove):', margin, ry);
  fill('white'); stroke('slateblue'); strokeWeight(1);
  rect(margin, ry + 18, canvasWidth - margin * 2, rh, 8);
  respRects = [];
  if (response.length === 0) {
    noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
    text('Tap phrases below to add them here in order.', margin + 10, ry + 30);
  } else {
    let yy = ry + 26;
    for (let k = 0; k < response.length; k++) {
      let tk = tokens[response[k]];
      let bw = canvasWidth - margin * 2 - 20;
      respRects.push({ x: margin + 10, y: yy, w: bw, h: 24, k: k });
      noStroke();
      fill(tk.good ? 'honeydew' : 'mistyrose');
      stroke(tk.good ? 'seagreen' : 'indianred'); strokeWeight(1);
      rect(margin + 10, yy, bw, 22, 4);
      noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(12);
      text((k + 1) + '. ' + tk.t, margin + 16, yy + 11);
      yy += 26;
    }
  }

  // token palette
  let py = ry + 18 + rh + 12;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(13);
  text('Response phrases:', margin, py);
  tokenRects = [];
  let ty = py + 20, th = 30, gap = 6, x = margin;
  textSize(12);
  for (let i = 0; i < tokens.length; i++) {
    let w = textWidth(tokens[i].t) + 20;
    if (x + w > canvasWidth - margin) { x = margin; ty += th + gap; }
    tokenRects.push({ x: x, y: ty, w: w, h: th, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: x, y: ty, w: w, h: th });
    stroke('mediumpurple'); strokeWeight(1.5);
    fill(hover ? 'lavender' : 'white');
    rect(x, ty, w, th, 14);
    noStroke(); fill('indigo'); textAlign(CENTER, CENTER);
    text(tokens[i].t, x + w / 2, ty + th / 2);
    x += w + gap;
  }
  cursor(overClickable() ? HAND : ARROW);

  // feedback / example
  let fy = ty + th + 10;
  textAlign(LEFT, TOP); textSize(13);
  if (showExample) {
    fill('seagreen');
    text('Strong example: "No, I\'m not doing that." → "I already said no." → Leave/block → ' +
      'Tell a trusted adult. A clear no, calm repetition, an exit or tool, and an adult when needed.',
      margin, fy, canvasWidth - margin * 2, drawHeight - fy - 6);
  } else {
    fill(feedbackColor);
    text(feedback || 'Build a response, then press Check My Response.',
      margin, fy, canvasWidth - margin * 2, drawHeight - fy - 6);
  }
}

function overClickable() {
  for (let t of tokenRects) if (pointInRect(mouseX, mouseY, t)) return true;
  for (let r of respRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  // remove from response
  for (let r of respRects) {
    if (pointInRect(mouseX, mouseY, r)) { response.splice(r.k, 1); feedback = ''; return; }
  }
  // add token
  for (let t of tokenRects) {
    if (pointInRect(mouseX, mouseY, t)) {
      if (response.length < 6) response.push(t.i);
      feedback = '';
      return;
    }
  }
}

function checkResponse() {
  if (response.length === 0) { feedback = 'Add at least one response phrase first.'; feedbackColor = 'dimgray'; return; }
  let tags = response.map(i => tokens[i].tag);
  let hasBad = tags.includes('bad');
  let hasClear = tags.includes('clear') || tags.includes('repeat');
  let hasExit = tags.includes('exit') || tags.includes('tool');
  let hasAdult = tags.includes('adult');
  if (hasBad) {
    feedback = 'Arguing on and on or giving in weakens your boundary. Remove those and keep your response clear and calm.';
    feedbackColor = 'indianred';
  } else if (hasClear && hasExit && hasAdult) {
    feedback = '✓ Strong response! You state a clear no, use an exit or digital tool, and involve a trusted adult.';
    feedbackColor = 'seagreen';
  } else if (hasClear) {
    feedback = 'Good start with a clear no. Consider adding a way to exit (leave/block) and telling a trusted adult.';
    feedbackColor = 'darkgoldenrod';
  } else {
    feedback = 'Start with a clear "No, I\'m not doing that," then add an exit and a trusted adult.';
    feedbackColor = 'darkgoldenrod';
  }
}

function resetAll() {
  response = []; feedback = ''; showExample = false;
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
