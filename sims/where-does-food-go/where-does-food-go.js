// Where Does This Food Go? - MicroSim (two-bin storage sorter)
// CANVAS_HEIGHT: 480
// Kindergarten, Remember (L1): students recall safe food storage by placing each
// food into the refrigerator (cold) or the cupboard (cool and dry). Correct
// placement glows and shows a one-sentence reason read aloud by the teacher.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, resetButton;

// place: 0 = refrigerator, 1 = cupboard
let foods = [
  { n: 'Milk',        place: 0, reason: "Milk needs to stay cold so it doesn't spoil." },
  { n: 'Eggs',        place: 0, reason: 'Eggs stay fresh and safe when they are kept cold.' },
  { n: 'Leftovers',   place: 0, reason: 'Cooked leftovers must stay cold to be safe to eat later.' },
  { n: 'Grapes',      place: 0, reason: 'Fresh grapes stay crisp and last longer in the cold.' },
  { n: 'Cheese',      place: 0, reason: 'Cheese is a dairy food that needs to stay cold and fresh.' },
  { n: 'Yogurt',      place: 0, reason: 'Yogurt is a dairy food that needs to stay cold.' },
  { n: 'Bread',       place: 1, reason: 'Bread stays soft in the cupboard — the fridge dries it out.' },
  { n: 'Crackers',    place: 1, reason: 'Crackers stay crunchy and dry in the cupboard.' },
  { n: 'Canned beans', place: 1, reason: 'A sealed can is safe in a cool, dry cupboard.' },
  { n: 'Cereal',      place: 1, reason: 'A sealed box of cereal stays dry and crunchy in the cupboard.' }
];

let bins = ['Refrigerator', 'Cupboard'];
let idx = 0;         // milk is first to build confidence
let picked = -1;     // bin chosen for current food
let sorted = 0;
let binRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Food');
  nextButton.mousePressed(nextFood);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  resetAll();
  describe('One food picture at a time with two storage places: a refrigerator and ' +
    'a cupboard. Children tap where the food belongs and see whether it was right ' +
    'with a short reason.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 10);
  resetButton.position(120, drawHeight + 10);
}

function draw() {
  updateCanvasSize();

  fill('#f2f8ff');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(22);
  text('Where Does This Food Go?', canvasWidth / 2, 8);

  let food = foods[idx];

  // Food card
  let cardW = 180, cardH = 60, cardX = canvasWidth / 2 - cardW / 2, cardY = 42;
  fill('white');
  stroke('cadetblue');
  strokeWeight(2);
  rect(cardX, cardY, cardW, cardH, 12);
  noStroke();
  fill('#e07a1f');
  circle(cardX + 34, cardY + cardH / 2, 34);
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(20);
  text(food.n, cardX + 60, cardY + cardH / 2);

  // Two storage bins
  binRects = [];
  let gap = 16;
  let bw = (canvasWidth - 2 * margin - gap) / 2;
  let by = 122, bh = 190;
  for (let i = 0; i < 2; i++) {
    let x = margin + i * (bw + gap);
    binRects.push({ x: x, y: by, w: bw, h: bh, i: i });
    let correctPick = picked === i && i === food.place;
    let wrongPick = picked === i && i !== food.place;
    let hover = picked < 0 && pointInRect(mouseX, mouseY, binRects[i]);
    strokeWeight(correctPick ? 5 : 2.5);
    stroke(i === 0 ? '#3a86c8' : '#b07a3a');
    if (correctPick) fill('palegreen');
    else if (wrongPick) fill('mistyrose');
    else if (hover) fill('lightyellow');
    else fill(i === 0 ? '#dcecfb' : '#f0e2cf');
    rect(x, by, bw, bh, 10);

    if (i === 0) drawFridge(x, by, bw, bh);
    else drawCupboard(x, by, bw, bh);

    noStroke();
    fill('#333');
    textAlign(CENTER, TOP);
    textSize(17);
    text(bins[i], x, by + bh - 30, bw, 26);
    if (correctPick) {
      fill('seagreen');
      textAlign(CENTER, CENTER);
      textSize(34);
      text('✓', x + bw / 2, by + 44);
    }
  }
  cursor(overAnyBin() && picked < 0 ? HAND : ARROW);

  // Feedback + progress
  let fy = 322;
  noStroke();
  textAlign(CENTER, TOP);
  textSize(16);
  if (picked < 0) {
    fill('dimgray');
    text('Tap where ' + food.n + ' should go.', margin, fy, canvasWidth - 2 * margin, 30);
  } else if (picked === food.place) {
    fill('seagreen');
    text(food.reason, margin, fy, canvasWidth - 2 * margin, 60);
  } else {
    fill('darkorange');
    text('Look again — does ' + food.n + ' need to stay cold?', margin, fy, canvasWidth - 2 * margin, 60);
  }
  fill('navy');
  textSize(14);
  textAlign(CENTER, BOTTOM);
  text('You sorted ' + sorted + ' of ' + foods.length + ' foods!', canvasWidth / 2, drawHeight - 8);
}

function drawFridge(x, y, w, h) {
  push();
  noStroke();
  fill('#c9def5');
  let fw = w * 0.5, fh = h * 0.5;
  let fx = x + w / 2 - fw / 2, fy = y + 18;
  stroke('#3a86c8');
  strokeWeight(2);
  fill('#eaf4ff');
  rect(fx, fy, fw, fh, 6);
  line(fx, fy + fh * 0.42, fx + fw, fy + fh * 0.42);
  // handles
  strokeWeight(3);
  line(fx + fw - 8, fy + 8, fx + fw - 8, fy + fh * 0.42 - 6);
  line(fx + fw - 8, fy + fh * 0.42 + 6, fx + fw - 8, fy + fh - 8);
  pop();
}

function drawCupboard(x, y, w, h) {
  push();
  let cw = w * 0.5, ch = h * 0.5;
  let cx = x + w / 2 - cw / 2, cy = y + 18;
  stroke('#b07a3a');
  strokeWeight(2);
  fill('#e7d3b3');
  rect(cx, cy, cw, ch, 4);
  line(cx + cw / 2, cy, cx + cw / 2, cy + ch);
  // knobs
  noStroke();
  fill('#8a5a24');
  circle(cx + cw / 2 - 6, cy + ch / 2, 6);
  circle(cx + cw / 2 + 6, cy + ch / 2, 6);
  pop();
}

function overAnyBin() {
  for (let r of binRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (picked === foods[idx].place) return;   // already correct; wait for Next
  if (mouseY > drawHeight) return;
  for (let r of binRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      let wasWrong = picked >= 0;
      picked = r.i;
      if (r.i === foods[idx].place && !wasWrong) sorted++;
      return;
    }
  }
}

function nextFood() {
  idx = (idx + 1) % foods.length;
  picked = -1;
}

function resetAll() {
  idx = 0;
  picked = -1;
  sorted = 0;
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
