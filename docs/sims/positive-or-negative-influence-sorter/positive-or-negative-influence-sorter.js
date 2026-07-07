// Positive or Negative? Influence Sorter - MicroSim (one card, two bins)
// CANVAS_HEIGHT: 512
// Grade 1, Analyze (L4): students distinguish positive from negative influences by
// tapping the matching bin (sun = Positive, cloud = Negative) for one everyday
// scenario card at a time, then read a one-sentence reason. Large text, big targets.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// pos: true = positive influence, false = negative influence
// icon: which simple flat drawing to show on the card
let scenarios = [
  { t: 'A grandparent packs apple slices in your lunch.', pos: true, icon: 'apple',
    e: 'This makes a healthy choice easier. That is a positive influence.' },
  { t: 'A commercial makes candy look like the best snack ever.', pos: false, icon: 'tv',
    e: 'This pushes a less-healthy choice. That is a negative influence.' },
  { t: 'A friend invites you to ride bikes after school.', pos: true, icon: 'bike',
    e: 'Moving your body is healthy. That is a positive influence.' },
  { t: 'A show makes staying up past bedtime look fun.', pos: false, icon: 'moon',
    e: 'Sleep helps you grow. Skipping it is a negative influence.' },
  { t: 'A coach reminds the team to drink water.', pos: true, icon: 'water',
    e: 'Water keeps your body strong. That is a positive influence.' },
  { t: 'A friend dares you to skip washing your hands.', pos: false, icon: 'hands',
    e: 'Clean hands keep germs away. Skipping is a negative influence.' },
  { t: 'A teacher cheers when the class takes a stretch break.', pos: true, icon: 'stretch',
    e: 'Moving and stretching feels good. That is a positive influence.' },
  { t: 'An older kid says veggies are only for babies.', pos: false, icon: 'veggie',
    e: 'Veggies help everyone grow. Teasing about them is a negative influence.' }
];

let sIndex = 0;
let chosen = -1;      // -1 none, 1 clicked Positive, 0 clicked Negative
let visited = {};
let posBin = {};
let negBin = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();

  describe('One everyday scenario card is shown at a time. Students tap the Positive ' +
    'Influence bin (a sun) or the Negative Influence bin (a cloud) to sort it, then a ' +
    'gentle message and a one-sentence reason appear. Next Scenario shows another card.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(170, drawHeight + 12);
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

  // Title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(23);
  text('Positive or Negative?', canvasWidth / 2, 10);

  let sc = scenarios[sIndex];

  // Instruction line
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(15);
  text('Tap the bin that fits this scenario.', canvasWidth / 2, 40);

  // Scenario card
  let cardX = margin;
  let cardY = 66;
  let cardW = canvasWidth - 2 * margin;
  let cardH = 150;
  fill('lightyellow');
  stroke('goldenrod');
  strokeWeight(2);
  rect(cardX, cardY, cardW, cardH, 12);
  noStroke();

  // small flat illustration on the left of the card
  drawIcon(sc.icon, cardX + 46, cardY + cardH / 2, 54);

  // scenario counter
  fill('goldenrod');
  textAlign(LEFT, TOP);
  textSize(13);
  text('Card ' + (sIndex + 1) + ' of ' + scenarios.length, cardX + 90, cardY + 12);

  // scenario sentence (wrapped, to the right of the icon)
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(19);
  text(sc.t, cardX + 90, cardY + 34, cardW - 90 - 14, cardH - 44);

  // Two bins
  let binGap = 16;
  let binW = (canvasWidth - 2 * margin - binGap) / 2;
  let binH = 118;
  let binY = cardY + cardH + 18;
  posBin = { x: margin, y: binY, w: binW, h: binH, pos: true };
  negBin = { x: margin + binW + binGap, y: binY, w: binW, h: binH, pos: false };

  drawBin(posBin, 'Positive', 'gold', 'goldenrod', sc);
  drawBin(negBin, 'Negative', 'lightsteelblue', 'steelblue', sc);

  cursor((chosen < 0 && overAnyBin()) ? HAND : ARROW);

  // Feedback / explanation area below the bins
  let fbY = binY + binH + 12;
  let fbH = drawHeight - fbY - 6;
  noStroke();
  textAlign(CENTER, TOP);
  if (chosen >= 0) {
    let correct = (chosen === 1) === sc.pos;
    fill(correct ? 'seagreen' : 'indianred');
    textSize(16);
    let msg = correct
      ? 'Yes! You got it.'
      : 'Take another look — does this make a healthy choice easier or harder?';
    text(msg, margin, fbY, canvasWidth - 2 * margin, fbH);
    // explanation on a second line for correct answers (incorrect uses full space for the prompt)
    if (correct) {
      fill('dimgray');
      textSize(15);
      text(sc.e, margin, fbY + 22, canvasWidth - 2 * margin, fbH - 22);
    }
  } else {
    fill('gray');
    textSize(15);
    text('Which one helps a healthy choice?', margin, fbY + 4, canvasWidth - 2 * margin, fbH);
  }
}

// Draw one bin card with an icon (sun or cloud) and a glow/hint state.
function drawBin(b, label, fillCol, edgeCol, sc) {
  let correctBin = (b.pos === sc.pos);
  let chosenThis = (chosen >= 0) && ((chosen === 1) === b.pos);
  let showHint = (chosen >= 0) && !((chosen === 1) === sc.pos) && correctBin; // wrong answer: glow correct bin
  let hover = (chosen < 0) && pointInRect(mouseX, mouseY, b);

  // soft glow behind correct bin (right answer or hint)
  if ((chosenThis && correctBin) || showHint) {
    noStroke();
    fill('palegreen');
    rect(b.x - 5, b.y - 5, b.w + 10, b.h + 10, 16);
  }

  strokeWeight((chosenThis || showHint) ? 4 : 2);
  stroke((chosenThis && correctBin) || showHint ? 'seagreen'
        : (chosenThis && !correctBin ? 'indianred' : edgeCol));
  fill(hover ? 'lightyellow' : 'white');
  rect(b.x, b.y, b.w, b.h, 14);

  // icon centered near top of bin
  noStroke();
  if (b.pos) drawSun(b.x + b.w / 2, b.y + 40, 46, fillCol);
  else drawCloud(b.x + b.w / 2, b.y + 42, 60, fillCol);

  // label
  noStroke();
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(16);
  text(label, b.x, b.y + b.h - 28, b.w, 20);
  textSize(13);
  fill('dimgray');
  text('Influence', b.x, b.y + b.h - 15, b.w, 14);
}

function drawSun(cx, cy, d, col) {
  push();
  stroke(col);
  strokeWeight(3);
  let r = d / 2 + 6;
  for (let a = 0; a < 360; a += 45) {
    let rad = radians(a);
    line(cx + cos(rad) * (d / 2 + 3), cy + sin(rad) * (d / 2 + 3),
         cx + cos(rad) * r, cy + sin(rad) * r);
  }
  noStroke();
  fill(col);
  circle(cx, cy, d);
  // simple smile
  stroke('goldenrod');
  strokeWeight(2);
  noFill();
  arc(cx, cy + 2, d * 0.45, d * 0.4, radians(20), radians(160));
  noStroke();
  fill('goldenrod');
  circle(cx - d * 0.16, cy - d * 0.08, 5);
  circle(cx + d * 0.16, cy - d * 0.08, 5);
  pop();
}

function drawCloud(cx, cy, w, col) {
  push();
  noStroke();
  fill(col);
  let u = w / 6;
  ellipse(cx - u * 1.4, cy, u * 2.6, u * 2.2);
  ellipse(cx + u * 1.4, cy, u * 2.6, u * 2.2);
  ellipse(cx, cy - u * 0.9, u * 3, u * 2.6);
  rect(cx - u * 2.6, cy, u * 5.2, u * 1.4, u);
  pop();
}

// Small flat illustrations for scenario cards.
function drawIcon(kind, cx, cy, s) {
  push();
  strokeWeight(2);
  if (kind === 'apple') {
    noStroke(); fill('indianred');
    circle(cx, cy + 4, s * 0.8);
    stroke('saddlebrown'); strokeWeight(3); noFill();
    line(cx, cy - s * 0.34, cx, cy - s * 0.12);
    noStroke(); fill('seagreen');
    ellipse(cx + s * 0.16, cy - s * 0.3, s * 0.3, s * 0.16);
  } else if (kind === 'tv') {
    fill('slategray'); stroke('dimgray');
    rect(cx - s * 0.42, cy - s * 0.34, s * 0.84, s * 0.6, 4);
    noStroke(); fill('lightyellow');
    rect(cx - s * 0.34, cy - s * 0.26, s * 0.68, s * 0.44, 2);
    fill('gold'); noStroke();
    circle(cx, cy - s * 0.04, s * 0.22);
    stroke('dimgray'); strokeWeight(3);
    line(cx - s * 0.14, cy + s * 0.34, cx + s * 0.14, cy + s * 0.34);
  } else if (kind === 'bike') {
    stroke('steelblue'); noFill(); strokeWeight(3);
    circle(cx - s * 0.28, cy + s * 0.18, s * 0.42);
    circle(cx + s * 0.28, cy + s * 0.18, s * 0.42);
    line(cx - s * 0.28, cy + s * 0.18, cx, cy + s * 0.18);
    line(cx, cy + s * 0.18, cx + s * 0.28, cy + s * 0.18);
    line(cx, cy + s * 0.18, cx - s * 0.02, cy - s * 0.16);
    line(cx - s * 0.14, cy - s * 0.16, cx + s * 0.12, cy - s * 0.16);
  } else if (kind === 'moon') {
    noStroke(); fill('mediumpurple');
    circle(cx, cy, s * 0.82);
    fill('lightyellow');
    circle(cx + s * 0.14, cy - s * 0.06, s * 0.7);
    fill('gold');
    circle(cx - s * 0.34, cy - s * 0.3, 4);
    circle(cx - s * 0.28, cy + s * 0.18, 3);
  } else if (kind === 'water') {
    noStroke(); fill('deepskyblue');
    beginShape();
    vertex(cx, cy - s * 0.36);
    bezierVertex(cx + s * 0.34, cy + s * 0.04, cx + s * 0.22, cy + s * 0.36, cx, cy + s * 0.36);
    bezierVertex(cx - s * 0.22, cy + s * 0.36, cx - s * 0.34, cy + s * 0.04, cx, cy - s * 0.36);
    endShape(CLOSE);
    fill('lightcyan'); noStroke();
    ellipse(cx - s * 0.08, cy + s * 0.06, s * 0.12, s * 0.2);
  } else if (kind === 'hands') {
    noStroke(); fill('wheat');
    ellipse(cx - s * 0.12, cy, s * 0.34, s * 0.5);
    ellipse(cx + s * 0.12, cy, s * 0.34, s * 0.5);
    fill('lightskyblue');
    circle(cx - s * 0.24, cy - s * 0.24, 8);
    circle(cx + s * 0.22, cy + s * 0.18, 7);
    circle(cx, cy - s * 0.3, 6);
  } else if (kind === 'stretch') {
    stroke('seagreen'); strokeWeight(3); noFill();
    circle(cx, cy - s * 0.28, s * 0.24);
    line(cx, cy - s * 0.16, cx, cy + s * 0.14);
    line(cx, cy - s * 0.06, cx - s * 0.26, cy - s * 0.28);
    line(cx, cy - s * 0.06, cx + s * 0.26, cy - s * 0.28);
    line(cx, cy + s * 0.14, cx - s * 0.16, cy + s * 0.4);
    line(cx, cy + s * 0.14, cx + s * 0.16, cy + s * 0.4);
  } else if (kind === 'veggie') {
    noStroke(); fill('darkorange');
    ellipse(cx, cy + s * 0.06, s * 0.32, s * 0.66);
    fill('seagreen');
    ellipse(cx - s * 0.06, cy - s * 0.34, s * 0.16, s * 0.28);
    ellipse(cx + s * 0.06, cy - s * 0.34, s * 0.16, s * 0.28);
  } else {
    noStroke(); fill('silver');
    circle(cx, cy, s * 0.6);
  }
  pop();
}

function overAnyBin() {
  return pointInRect(mouseX, mouseY, posBin) || pointInRect(mouseX, mouseY, negBin);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (chosen >= 0) return; // one choice per card until Next
  if (pointInRect(mouseX, mouseY, posBin)) {
    chosen = 1;
    visited[sIndex] = true;
  } else if (pointInRect(mouseX, mouseY, negBin)) {
    chosen = 0;
    visited[sIndex] = true;
  }
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  chosen = -1;
}

function resetAll() {
  sIndex = 0;
  chosen = -1;
  visited = {};
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
