// My Body's Signals - MicroSim (picture-to-label matching for pre-readers)
// CANVAS_HEIGHT: 447
// Kindergarten, Remember (L1): students identify body signals — hungry, thirsty, or
// feeling fine — by matching a picture of a child to the correct feeling label.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 47;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let nextButton;

// signal: 0 hungry, 1 thirsty, 2 fine ; caption for correct answer
let scenes = [
  { signal: 0, caption: 'A growling tummy means it might be time for a healthy snack!' },
  { signal: 1, caption: 'Dry lips and reaching for a cup mean your body needs water!' },
  { signal: 2, caption: 'Smiling and full of energy means you feel just fine!' },
  { signal: 0, caption: 'Feeling a rumble inside is your body saying it is hungry.' },
  { signal: 1, caption: 'A dry mouth is a signal to take a drink of water.' },
  { signal: 2, caption: 'Playing happily with lots of energy means you feel fine!' }
];
let labels = ['Hungry', 'Thirsty', 'Feeling Fine'];
let labelColors = ['sandybrown', 'deepskyblue', 'mediumseagreen'];

let idx = 0;
let picked = -1;
let correct = false;
let btnRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scene');
  nextButton.mousePressed(nextScene);
  positionControls();
  describe('A large picture of a child showing a body signal — a growling tummy, dry ' +
    'lips reaching for a cup, or happy energy. Students press Hungry, Thirsty, or Feeling ' +
    'Fine to match the signal.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 10);
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
  textSize(24);
  text("My Body's Signals", canvasWidth / 2, 8);

  // scene (left 60%)
  let sceneW = canvasWidth * 0.58;
  let cx = sceneW / 2 + 6;
  let cy = 210;
  drawChild(cx, cy, scenes[idx].signal);

  // labels (right 40%) as big buttons
  btnRects = [];
  let bx = sceneW + 12;
  let bw = canvasWidth - bx - margin;
  let bh = 56, gap = 14, by0 = 70;
  for (let i = 0; i < 3; i++) {
    let y = by0 + i * (bh + gap);
    btnRects.push({ x: bx, y: y, w: bw, h: bh, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: bx, y: y, w: bw, h: bh });
    let isPick = picked === i;
    strokeWeight(isPick ? 3.5 : 2);
    stroke(labelColors[i]);
    if (picked >= 0 && i === scenes[idx].signal) fill('honeydew');
    else if (isPick && !correct) fill('linen');
    else fill(hover ? 'lightyellow' : 'white');
    rect(bx, y, bw, bh, 12);
    noStroke();
    fill('black');
    textAlign(CENTER, CENTER);
    textSize(20);
    text(labels[i], bx, y, bw, bh);
  }
  cursor(overAnyBtn() ? HAND : ARROW);

  // caption / feedback
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);
  let capY = 300;
  if (picked < 0) {
    fill('dimgray');
    text('What signal is this child showing? Press a button.', margin, capY, canvasWidth - margin * 2, 60);
  } else if (correct) {
    fill('seagreen');
    text('😊 ' + scenes[idx].caption, margin, capY, canvasWidth - margin * 2, 80);
  } else {
    fill('darkorange');
    text('Look again — what is the picture showing?', margin, capY, canvasWidth - margin * 2, 60);
  }
}

function drawChild(x, y, signal) {
  push();
  // head
  stroke('burlywood'); strokeWeight(3); fill('navajowhite');
  circle(x, y - 40, 80);
  // smile (bigger if correct)
  noFill(); stroke('sienna'); strokeWeight(3);
  let smile = (picked >= 0 && correct) ? 40 : 24;
  arc(x, y - 34, 44, smile, 0.1 * PI, 0.9 * PI);
  // eyes
  noStroke(); fill('sienna'); circle(x - 14, y - 52, 7); circle(x + 14, y - 52, 7);
  // body
  stroke('mediumpurple'); strokeWeight(3); fill('plum');
  rect(x - 30, y, 60, 70, 16);

  // signal indicator
  noStroke();
  if (signal === 0) { // hungry: tummy growl
    stroke('orange'); strokeWeight(2); noFill();
    for (let i = 0; i < 3; i++) arc(x, y + 30, 20 + i * 12, 16 + i * 8, PI, TWO_PI);
    noStroke(); fill('darkorange'); textAlign(CENTER, CENTER); textSize(14);
    text('grr', x + 40, y + 24);
  } else if (signal === 1) { // thirsty: cup + dry lips
    stroke('steelblue'); strokeWeight(2); fill('lightblue');
    rect(x + 34, y + 6, 26, 30, 3);
    noStroke(); fill('deepskyblue'); rect(x + 36, y + 16, 22, 18);
  } else { // fine: sparkle/energy
    noStroke(); fill('gold'); textAlign(CENTER, CENTER); textSize(22);
    text('✨', x - 44, y - 30); text('✨', x + 44, y + 10);
  }
  pop();
}

function overAnyBtn() {
  for (let b of btnRects) if (pointInRect(mouseX, mouseY, b)) return true;
  return false;
}
function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let b of btnRects) {
    if (pointInRect(mouseX, mouseY, b)) {
      picked = b.i;
      correct = (b.i === scenes[idx].signal);
      return;
    }
  }
}

function nextScene() {
  idx = (idx + 1) % scenes.length;
  picked = -1; correct = false;
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
