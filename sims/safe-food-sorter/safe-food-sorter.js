// Safe to Eat or Not? - MicroSim (two-bin food sorter)
// CANVAS_HEIGHT: 485
// Kindergarten, Analyze (L4): a pre-reader examines one food picture and its clues
// (spots, color, smell lines), then taps "Safe to Eat" or "Ask a Grown-Up First".
// Calm, matter-of-fact tone; wrong taps give a gentle hint, never a scary message.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 430;
let controlHeight = 55;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// safe: true means "Safe to Eat", false means "Ask a Grown-Up First".
// draw: which stylized picture to render. hint: shown after a wrong tap.
// good: shown when sorted correctly.
let foods = [
  { name: 'Fresh apple', draw: 'apple', safe: true,
    good: 'Yes. A shiny, smooth apple like this is safe to eat.',
    hint: 'This apple is smooth and bright. It looks fresh and safe.' },
  { name: 'Spotted apple', draw: 'apple', safe: false,
    good: 'Right. Brown mushy spots mean we ask a grown-up first.',
    hint: 'Look closely. Does it have brown mushy spots?' },
  { name: 'Fresh bread', draw: 'bread', safe: true,
    good: 'Yes. Soft, clean bread with no spots is safe to eat.',
    hint: 'This bread looks clean, with no fuzzy spots. It is safe.' },
  { name: 'Moldy bread', draw: 'bread', safe: false,
    good: 'Right. Fuzzy blue-green spots mean this bread is not safe.',
    hint: 'Look closely. Do you see fuzzy blue-green spots?' },
  { name: 'Cold milk', draw: 'milk', safe: true,
    good: 'Yes. Closed, cold milk from the fridge is safe to drink.',
    hint: 'This milk carton is closed and cold. It is safe.' },
  { name: 'Warm open milk', draw: 'milk', safe: false,
    good: 'Right. Milk left open and warm can smell bad. Ask first.',
    hint: 'It is open and warm, with smell lines. Ask a grown-up.' },
  { name: 'Sealed yogurt', draw: 'yogurt', safe: true,
    good: 'Yes. A sealed cup with a normal color is safe to eat.',
    hint: 'This cup is sealed and looks normal. It is safe.' },
  { name: 'Strange yogurt', draw: 'yogurt', safe: false,
    good: 'Right. An open cup with a strange color? Ask a grown-up.',
    hint: 'Look closely. Is the color strange or spotty?' },
  { name: 'Fresh berries', draw: 'berries', safe: true,
    good: 'Yes. Bright, firm berries are safe to eat.',
    hint: 'These berries are bright and firm. They look fresh.' },
  { name: 'Mushy berries', draw: 'berries', safe: false,
    good: 'Right. Dull, mushy berries with fuzz? Ask a grown-up first.',
    hint: 'Look closely. Are they dull, mushy, or fuzzy?' }
];

let idx = 0;          // which food is showing
let placed = false;   // true once sorted correctly (bin glows)
let chosenBin = -1;   // 0 = safe bin, 1 = ask bin (for glow)
let message = '';     // caption text
let wrongTry = false; // true after a wrong tap (hint tone)

// Bin rectangles, filled in draw() so they scale with width.
let safeBin = { x: 0, y: 0, w: 0, h: 0 };
let askBin = { x: 0, y: 0, w: 0, h: 0 };

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Picture');
  nextButton.mousePressed(nextPicture);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetSim);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  resetSim();

  describe('A food picture is shown at the top. A child examines its clues, then taps ' +
    'the Safe to Eat bin or the Ask a Grown-Up First bin. A correct tap makes the bin glow ' +
    'and shows a calm explanation; a wrong tap shows a gentle hint to look again.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 12);
  resetButton.position(margin + 150, drawHeight + 12);
}

function resetSim() {
  idx = 0;
  placed = false;
  chosenBin = -1;
  wrongTry = false;
  message = 'Look at the food. Then tap the right bin.';
}

function nextPicture() {
  idx = (idx + 1) % foods.length;
  placed = false;
  chosenBin = -1;
  wrongTry = false;
  message = 'Look at the food. Then tap the right bin.';
}

function draw() {
  updateCanvasSize();

  // Panels
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
  textSize(22);
  textStyle(BOLD);
  text('Safe to Eat or Not?', canvasWidth / 2, 10);
  textStyle(NORMAL);

  // Food picture area, centered near the top
  let food = foods[idx];
  let picY = 92;
  drawFood(food.draw, food.safe, canvasWidth / 2, picY, 46);

  // Food name label under the picture
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(16);
  text(food.name, canvasWidth / 2, 150);

  // Two bins, side by side
  layoutBins();
  drawBin(safeBin, 'seagreen', 'Safe to Eat', 'safe', chosenBin === 0 && placed);
  drawBin(askBin, 'darkorange', 'Ask a\nGrown-Up First', 'ask', chosenBin === 1 && placed);

  // Feedback caption strip
  drawCaption();
}

function layoutBins() {
  let top = 178;
  let h = 190;
  let gap = 14;
  let usable = canvasWidth - 2 * margin - gap;
  let w = usable / 2;
  safeBin = { x: margin, y: top, w: w, h: h };
  askBin = { x: margin + w + gap, y: top, w: w, h: h };
}

// Draw one bin. Green safe bin has a smiling apple; orange ask bin a question mark.
function drawBin(b, col, label, kind, glow) {
  if (glow) {
    // Soft glow ring when the food lands here correctly
    noFill();
    stroke('gold');
    strokeWeight(6);
    rect(b.x - 3, b.y - 3, b.w + 6, b.h + 6, 16);
  }
  noStroke();
  fill(col);
  rect(b.x, b.y, b.w, b.h, 14);

  // Inner lighter card so the icon reads clearly
  fill(255, 255, 255, 60);
  rect(b.x + 10, b.y + 10, b.w - 20, b.h - 20, 10);

  // Bin icon
  let cx = b.x + b.w / 2;
  let cy = b.y + 66;
  if (kind === 'safe') {
    drawSmilingApple(cx, cy, 34);
  } else {
    drawQuestionMark(cx, cy, 40);
  }

  // Bin label, centered in a wrap box at the bottom of the bin
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(17);
  textStyle(BOLD);
  let boxY = b.y + b.h - 66;
  text(label, b.x + 6, boxY, b.w - 12, 58);
  textStyle(NORMAL);
}

function drawCaption() {
  let cy = 380;
  let ch = drawHeight - cy - 8;
  // Caption background tinted by outcome
  noStroke();
  if (placed) {
    fill('honeydew');
  } else if (wrongTry) {
    fill('cornsilk');
  } else {
    fill('white');
  }
  rect(margin, cy, canvasWidth - 2 * margin, ch, 8);

  fill('navy');
  textAlign(CENTER, CENTER);
  textSize(15);
  text(message, margin + 10, cy, canvasWidth - 2 * margin - 20, ch);
}

// ---------- Food illustrations (friendly, stylized, not gross) ----------

function drawFood(kind, safe, x, y, s) {
  if (kind === 'apple') drawAppleFood(x, y, s, safe);
  else if (kind === 'bread') drawBreadFood(x, y, s, safe);
  else if (kind === 'milk') drawMilkFood(x, y, s, safe);
  else if (kind === 'yogurt') drawYogurtFood(x, y, s, safe);
  else if (kind === 'berries') drawBerriesFood(x, y, s, safe);
}

function drawAppleFood(x, y, s, safe) {
  noStroke();
  // stem + leaf
  stroke('saddlebrown');
  strokeWeight(4);
  line(x, y - s * 0.9, x, y - s * 1.15);
  noStroke();
  fill('seagreen');
  ellipse(x + 10, y - s * 1.05, 18, 10);
  // body
  fill(safe ? 'crimson' : 'indianred');
  ellipse(x - s * 0.35, y, s * 1.1, s * 1.25);
  ellipse(x + s * 0.35, y, s * 1.1, s * 1.25);
  // shine
  fill(255, 255, 255, 130);
  ellipse(x - s * 0.35, y - s * 0.35, 12, 16);
  if (!safe) {
    // brown mushy spots
    fill('saddlebrown');
    ellipse(x + s * 0.2, y + s * 0.1, 16, 14);
    ellipse(x - s * 0.15, y + s * 0.35, 12, 10);
    fill('sienna');
    ellipse(x + s * 0.45, y - s * 0.15, 10, 9);
  }
}

function drawBreadFood(x, y, s, safe) {
  noStroke();
  // loaf slice body
  fill(safe ? 'wheat' : 'tan');
  rectMode(CENTER);
  rect(x, y, s * 2.0, s * 1.6, 14);
  // crust outline
  noFill();
  stroke('peru');
  strokeWeight(4);
  rect(x, y, s * 2.0, s * 1.6, 14);
  noStroke();
  rectMode(CORNER);
  if (!safe) {
    // fuzzy blue-green mold spots
    fill('seagreen');
    ellipse(x - s * 0.4, y - s * 0.1, 18, 16);
    fill('teal');
    ellipse(x + s * 0.35, y + s * 0.2, 16, 14);
    fill('mediumseagreen');
    ellipse(x + s * 0.1, y - s * 0.35, 12, 11);
    // little fuzz dots
    fill('darkslategray');
    for (let a = 0; a < 6; a++) {
      let ang = a * 1.05;
      ellipse(x - s * 0.4 + cos(ang) * 12, y - s * 0.1 + sin(ang) * 11, 3, 3);
    }
  }
}

function drawMilkFood(x, y, s, safe) {
  noStroke();
  // carton body
  fill('white');
  stroke('steelblue');
  strokeWeight(3);
  rectMode(CENTER);
  rect(x, y + 4, s * 1.3, s * 1.7, 6);
  // roof
  fill('white');
  triangle(x - s * 0.65, y - s * 0.55, x + s * 0.65, y - s * 0.55, x, y - s * 1.05);
  noStroke();
  rectMode(CORNER);
  // blue band label
  fill('steelblue');
  rect(x - s * 0.55, y - s * 0.1, s * 1.1, s * 0.5);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(12);
  textStyle(BOLD);
  text('MILK', x, y + s * 0.15);
  textStyle(NORMAL);
  if (safe) {
    // little snowflake = cold
    stroke('deepskyblue');
    strokeWeight(2);
    let fx = x + s * 0.75;
    let fy = y - s * 0.7;
    line(fx - 6, fy, fx + 6, fy);
    line(fx, fy - 6, fx, fy + 6);
    line(fx - 4, fy - 4, fx + 4, fy + 4);
    line(fx - 4, fy + 4, fx + 4, fy - 4);
    noStroke();
  } else {
    // open spout + wavy smell lines
    fill('gold');
    triangle(x - s * 0.65, y - s * 0.95, x - s * 0.2, y - s * 1.15, x - s * 0.2, y - s * 0.55);
    stroke('gray');
    strokeWeight(2);
    noFill();
    for (let i = 0; i < 3; i++) {
      let lx = x - s * 0.45 + i * 10;
      beginShape();
      vertex(lx, y - s * 1.15);
      vertex(lx + 5, y - s * 1.35);
      vertex(lx, y - s * 1.55);
      vertex(lx + 5, y - s * 1.75);
      endShape();
    }
    noStroke();
  }
}

function drawYogurtFood(x, y, s, safe) {
  noStroke();
  // cup (tapered)
  fill('white');
  stroke('mediumpurple');
  strokeWeight(3);
  quad(x - s * 0.55, y + s * 0.7, x + s * 0.55, y + s * 0.7,
       x + s * 0.7, y - s * 0.5, x - s * 0.7, y - s * 0.5);
  noStroke();
  if (safe) {
    // sealed foil lid
    fill('mediumpurple');
    ellipse(x, y - s * 0.5, s * 1.5, s * 0.4);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(11);
    textStyle(BOLD);
    text('SEALED', x, y - s * 0.5);
    textStyle(NORMAL);
  } else {
    // open cup with strange greenish yogurt
    fill('darkseagreen');
    ellipse(x, y - s * 0.5, s * 1.4, s * 0.35);
    // strange spots
    fill('olivedrab');
    ellipse(x - s * 0.2, y - s * 0.5, 12, 6);
    ellipse(x + s * 0.25, y - s * 0.48, 9, 5);
    // smell lines
    stroke('gray');
    strokeWeight(2);
    noFill();
    for (let i = 0; i < 2; i++) {
      let lx = x - 6 + i * 12;
      beginShape();
      vertex(lx, y - s * 0.7);
      vertex(lx + 5, y - s * 0.9);
      vertex(lx, y - s * 1.1);
      endShape();
    }
    noStroke();
  }
}

function drawBerriesFood(x, y, s, safe) {
  noStroke();
  let berryCol = safe ? 'crimson' : 'rosybrown';
  // three strawberries
  let spots = [[-s * 0.5, 0], [s * 0.5, -4], [0, s * 0.4]];
  for (let p of spots) {
    let bx = x + p[0];
    let by = y + p[1];
    // green top
    fill('seagreen');
    triangle(bx - 8, by - s * 0.5, bx + 8, by - s * 0.5, bx, by - s * 0.7);
    // body
    fill(berryCol);
    ellipse(bx, by, s * 0.8, s * 0.95);
    if (safe) {
      // little seeds
      fill('gold');
      for (let k = -1; k <= 1; k++) {
        ellipse(bx + k * 6, by, 2.5, 3.5);
        ellipse(bx + k * 6, by + 8, 2.5, 3.5);
      }
    } else {
      // dull, with a fuzzy gray patch
      fill('darkgray');
      ellipse(bx + 4, by + 4, 12, 10);
      fill('gray');
      ellipse(bx - 4, by - 2, 7, 6);
    }
  }
}

// ---------- Bin icons ----------

function drawSmilingApple(x, y, s) {
  noStroke();
  stroke('saddlebrown');
  strokeWeight(3);
  line(x, y - s * 0.7, x, y - s * 0.95);
  noStroke();
  fill('mediumseagreen');
  ellipse(x + 8, y - s * 0.85, 14, 8);
  fill('crimson');
  ellipse(x - s * 0.3, y, s * 0.95, s * 1.1);
  ellipse(x + s * 0.3, y, s * 0.95, s * 1.1);
  // smiley face
  fill('white');
  ellipse(x - s * 0.28, y - s * 0.05, 8, 8);
  ellipse(x + s * 0.28, y - s * 0.05, 8, 8);
  fill('navy');
  ellipse(x - s * 0.28, y - s * 0.05, 3.5, 3.5);
  ellipse(x + s * 0.28, y - s * 0.05, 3.5, 3.5);
  noFill();
  stroke('navy');
  strokeWeight(3);
  arc(x, y + s * 0.2, s * 0.6, s * 0.5, 0.2, PI - 0.2);
  noStroke();
}

function drawQuestionMark(x, y, s) {
  fill('white');
  ellipse(x, y, s * 1.5, s * 1.5);
  fill('darkorange');
  textAlign(CENTER, CENTER);
  textSize(s);
  textStyle(BOLD);
  text('?', x, y - 2);
  textStyle(NORMAL);
}

// ---------- Interaction ----------

function mousePressed() {
  if (placed) return; // already sorted; wait for Next
  let food = foods[idx];
  if (pointInRect(mouseX, mouseY, safeBin)) {
    judge(0, food);
  } else if (pointInRect(mouseX, mouseY, askBin)) {
    judge(1, food);
  }
}

function judge(bin, food) {
  let pickedSafe = bin === 0;
  if (pickedSafe === food.safe) {
    placed = true;
    chosenBin = bin;
    wrongTry = false;
    message = food.good + '  Tap Next Picture.';
  } else {
    wrongTry = true;
    chosenBin = -1;
    message = food.hint;
  }
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
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
