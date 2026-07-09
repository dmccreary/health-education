// Where Does This Idea Come From? - MicroSim (three-bin influence sorter)
// CANVAS_HEIGHT: 490
// Grade 2-3, Remember (L1): students identify whether an everyday example is
// influenced mainly by Family, School, or Media/Technology, then read a short,
// friendly explanation. Rotates through all eight examples before repeating.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 440;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, resetButton;

// zone: 0 = Family, 1 = School, 2 = Media/Technology
let zones = ['Family', 'School', 'Media/\nTech'];
let zoneColors = ['#c85c8e', '#3a86c8', '#7a5ec8'];

let examples = [
  { text: 'Dad makes sure everyone eats vegetables at dinner.', zone: 0,
    fb: 'Yes! Family members often shape the foods we eat and the habits we practice at home.' },
  { text: 'The school has a rule about washing hands before lunch.', zone: 1,
    fb: 'Right! Schools set rules and routines that guide healthy habits during the day.' },
  { text: 'A video ad shows a toy that promises to make you happy.', zone: 2,
    fb: "Right. Ads and shows try to influence what we want, even when they don't say so directly." },
  { text: 'Grandma teaches a family recipe passed down every year.', zone: 0,
    fb: 'Yes! Families pass down traditions, foods, and habits from one generation to the next.' },
  { text: 'The gym teacher explains why stretching matters.', zone: 1,
    fb: 'Right! Teachers at school share knowledge that shapes how we care for our bodies.' },
  { text: "A cartoon character says a snack brand is 'the best.'", zone: 2,
    fb: 'Right. Characters on screens are often used to make us want a product.' },
  { text: 'A big sibling models wearing a helmet while biking.', zone: 0,
    fb: 'Yes! Family members, including siblings, influence our habits by showing us what to do.' },
  { text: 'An app sends a reminder to drink water.', zone: 2,
    fb: 'Right. Apps and technology can nudge our choices with reminders and messages.' }
];

let order = [];
let idx = 0;
let picked = -1;     // zone chosen for current example
let zoneRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Example');
  nextButton.mousePressed(nextExample);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  resetAll();
  describe('An example phrase card at the top with three influence zones below: ' +
    'Family, School, and Media/Technology. Students tap the zone that best fits ' +
    'the example and read a short explanation.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 10);
  resetButton.position(135, drawHeight + 10);
}

function draw() {
  updateCanvasSize();

  fill('#f4f1fb');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(20);
  text('Where Does This Idea Come From?', canvasWidth / 2, 8);

  let ex = examples[order[idx]];

  // Example card
  let cardX = margin, cardY = 38, cardW = canvasWidth - 2 * margin, cardH = 84;
  fill('white');
  stroke('mediumpurple');
  strokeWeight(1.5);
  rect(cardX, cardY, cardW, cardH, 10);
  noStroke();
  fill('#6a4fb0');
  textAlign(LEFT, TOP);
  textSize(12);
  text('Example ' + (idx + 1) + ' of ' + examples.length, cardX + 12, cardY + 8);
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(17);
  text(ex.text, cardX + 12, cardY + 18, cardW - 24, cardH - 26);

  // Prompt
  noStroke();
  fill('dimgray');
  textAlign(CENTER, TOP);
  textSize(14);
  text('Where does this come from? Tap one.', margin, 130, canvasWidth - 2 * margin, 20);

  // Three zones with icons
  zoneRects = [];
  let n = 3, gap = 10;
  let zw = (canvasWidth - 2 * margin - gap * (n - 1)) / n;
  let zy = 156, zh = 120;
  for (let i = 0; i < n; i++) {
    let x = margin + i * (zw + gap);
    zoneRects.push({ x: x, y: zy, w: zw, h: zh, i: i });
    let correctPick = picked === i && i === ex.zone;
    let wrongPick = picked === i && i !== ex.zone;
    let isAnswer = picked >= 0 && i === ex.zone;
    let hover = picked < 0 && pointInRect(mouseX, mouseY, zoneRects[i]);
    strokeWeight(correctPick || isAnswer ? 4 : 2);
    stroke(zoneColors[i]);
    if (correctPick || (isAnswer && picked !== ex.zone)) fill('palegreen');
    else if (wrongPick) fill('mistyrose');
    else if (hover) fill('lightyellow');
    else fill(lerpColor(color(zoneColors[i]), color('white'), 0.82));
    rect(x, zy, zw, zh, 10);

    drawZoneIcon(i, x + zw / 2, zy + 40, zoneColors[i]);

    noStroke();
    fill(zoneColors[i]);
    textAlign(CENTER, CENTER);
    textSize(14);
    text(zones[i], x, zy + zh - 32, zw, 30);
    if (isAnswer) {
      fill('seagreen');
      textAlign(CENTER, TOP);
      textSize(22);
      text('✓', x + zw / 2, zy + 4);
    }
  }
  cursor(overAnyZone() && picked < 0 ? HAND : ARROW);

  // Feedback panel
  let fy = 290;
  let fh = drawHeight - fy - margin;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, fy, canvasWidth - 2 * margin, fh, 8);
  noStroke();
  textAlign(LEFT, TOP);
  if (picked < 0) {
    fill('dimgray');
    textSize(14);
    text('Read the example, then tap Family, School, or Media/Technology.',
      margin + 12, fy + 12, canvasWidth - 2 * margin - 24, fh - 24);
  } else if (picked === ex.zone) {
    fill('seagreen');
    textSize(14.5);
    text(ex.fb, margin + 12, fy + 12, canvasWidth - 2 * margin - 24, fh - 24);
  } else {
    fill('darkorange');
    textSize(14.5);
    text('Look again — this one comes mostly from ' + zones[ex.zone].replace('/\n', '/') +
      '. ' + ex.fb, margin + 12, fy + 12, canvasWidth - 2 * margin - 24, fh - 24);
  }
}

function drawZoneIcon(kind, cx, cy, col) {
  push();
  stroke(col);
  strokeWeight(2);
  fill('white');
  if (kind === 0) {
    // house
    rect(cx - 16, cy - 2, 32, 22, 2);
    triangle(cx - 20, cy - 2, cx + 20, cy - 2, cx, cy - 22);
    fill(col);
    noStroke();
    rect(cx - 5, cy + 6, 10, 14, 1);
  } else if (kind === 1) {
    // school building with flag
    rect(cx - 18, cy - 2, 36, 22, 2);
    triangle(cx - 22, cy - 2, cx + 22, cy - 2, cx, cy - 18);
    stroke(col);
    line(cx, cy - 18, cx, cy - 30);
    noStroke();
    fill(col);
    triangle(cx, cy - 30, cx, cy - 22, cx + 10, cy - 26);
    rect(cx - 4, cy + 8, 8, 12);
  } else {
    // screen / device
    rect(cx - 18, cy - 14, 36, 26, 3);
    fill(col);
    noStroke();
    rect(cx - 14, cy - 10, 28, 18, 2);
    fill('white');
    triangle(cx - 4, cy - 6, cx - 4, cy + 4, cx + 6, cy - 1);
  }
  pop();
}

function overAnyZone() {
  for (let r of zoneRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (picked >= 0) return;
  if (mouseY > drawHeight) return;
  for (let r of zoneRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      picked = r.i;
      return;
    }
  }
}

function nextExample() {
  idx = (idx + 1) % examples.length;
  picked = -1;
}

function resetAll() {
  order = [...Array(examples.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  // Open on the "vegetables at dinner" family example.
  let zero = order.indexOf(0);
  [order[0], order[zero]] = [order[zero], order[0]];
  idx = 0;
  picked = -1;
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
