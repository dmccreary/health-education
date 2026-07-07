// One-of-a-Kind Classroom Gallery - MicroSim (click-to-reveal character gallery)
// CANVAS_HEIGHT: 520
// Grade 1, Understand (L2): describe kinds of uniqueness among classmates and how
// valuing each one strengthens caring friendship and belonging. Tap a friend once
// for their trait, tap again to see why they are a great friend.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

// Eight classmates. stage: 0 = not selected, 1 = trait shown, 2 = friend note shown.
let friends = [
  { name: 'Maya',  accent: 'lightsalmon',
    trait: 'Maya uses a wheelchair and loves basketball.',
    friendNote: 'Maya is a great friend because she cheers loudly for everyone on her team.' },
  { name: 'Leo',   accent: 'khaki',
    trait: 'Leo speaks two languages at home.',
    friendNote: 'Leo is a great friend because he teaches new words and helps others feel welcome.' },
  { name: 'Aria',  accent: 'lightgreen',
    trait: 'Aria is being raised by her grandparents.',
    friendNote: 'Aria is a great friend because she shares the fun games her grandpa taught her.' },
  { name: 'Sam',   accent: 'lightskyblue',
    trait: 'Sam wears hearing aids and loves music.',
    friendNote: 'Sam is a great friend because he invites everyone to sing and drum together.' },
  { name: 'Ivy',   accent: 'lightpink',
    trait: 'Ivy has curly red hair and loves painting.',
    friendNote: 'Ivy is a great friend because she shares her paints and paints with you.' },
  { name: 'Noah',  accent: 'wheat',
    trait: 'Noah is in a blended family and loves to cook at both homes.',
    friendNote: 'Noah is a great friend because he brings snacks to share and asks what you like.' },
  { name: 'Ella',  accent: 'plum',
    trait: 'Ella is quiet and loves reading alone at recess.',
    friendNote: 'Ella is a great friend because she is a kind listener when you need one.' },
  { name: 'Kai',   accent: 'paleturquoise',
    trait: 'Kai wears glasses and loves looking at the stars.',
    friendNote: 'Kai is a great friend because he points out cool things you might not see.' }
];

let selected = -1;      // index of the selected friend, or -1
let cardRects = [];     // screen rectangles for hit-testing

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  resetButton = createButton('Start Over');
  resetButton.mousePressed(startOver);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('A friendly gallery of eight classmates, each one-of-a-kind. Tap a friend ' +
    'once to read what makes them unique and something they love. Tap the same friend ' +
    'again to read why they are a great friend to have.', LABEL);
}

function startOver() {
  selected = -1;
  for (let f of friends) f.stage = 0;
}

function positionControls() {
  resetButton.position(margin, drawHeight + 10);
}

function draw() {
  updateCanvasSize();

  // backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Our Class Is Full of One-of-a-Kind People', margin, 10, canvasWidth - 2 * margin, 30);

  // layout: 4 columns x 2 rows of character cards
  let gridTop = 46;
  let infoTop = drawHeight - 96;          // info panel top
  let gridBottom = infoTop - 10;
  let cols = 4, rows = 2;
  let gap = 8;
  let gridW = canvasWidth - 2 * margin;
  let cardW = (gridW - (cols - 1) * gap) / cols;
  let gridH = gridBottom - gridTop;
  let cardH = (gridH - (rows - 1) * gap) / rows;

  cardRects = [];
  for (let i = 0; i < friends.length; i++) {
    let c = i % cols;
    let r = floor(i / cols);
    let x = margin + c * (cardW + gap);
    let y = gridTop + r * (cardH + gap);
    cardRects.push({ x: x, y: y, w: cardW, h: cardH });
    drawCard(i, x, y, cardW, cardH);
  }

  drawInfoPanel(infoTop);
}

function drawCard(i, x, y, w, h) {
  let f = friends[i];
  let isSel = selected === i;
  let hover = pointInRect(mouseX, mouseY, { x: x, y: y, w: w, h: h });

  // card background: soft accent when selected, warm neutral otherwise
  stroke(isSel ? 'goldenrod' : 'silver');
  strokeWeight(isSel ? 3 : 1);
  fill(isSel ? f.accent : (hover ? 'seashell' : 'oldlace'));
  rect(x, y, w, h, 10);
  noStroke();

  // simple friendly character centered in the upper part of the card
  let cx = x + w / 2;
  let figTop = y + 8;
  let figH = h - 30;
  drawCharacter(i, cx, figTop, figH);

  // name centered at bottom of card
  noStroke();
  fill('navy');
  textAlign(CENTER, BOTTOM);
  textSize(14);
  text(f.name, x, y + h - 20, w, 18);
}

// Draw a small flat-style seated/standing figure with one distinguishing detail.
// cx = center x, top = top y of the figure area, fh = available figure height.
function drawCharacter(i, cx, top, fh) {
  let skinTones = ['peachpuff', 'burlywood', 'navajowhite', 'tan',
                   'bisque', 'sandybrown', 'moccasin', 'wheat'];
  let shirtTones = ['tomato', 'mediumseagreen', 'cornflowerblue', 'mediumpurple',
                    'hotpink', 'darkorange', 'teal', 'slateblue'];
  let skin = skinTones[i];
  let shirt = shirtTones[i];

  let headR = min(fh * 0.34, 26);
  let headY = top + headR + 2;
  let bodyTop = headY + headR - 2;
  let bodyH = min(fh - (headY - top) - headR, 34);
  let bodyW = headR * 2.1;

  // body (shirt)
  noStroke();
  fill(shirt);
  rect(cx - bodyW / 2, bodyTop, bodyW, max(bodyH, 16), 8);

  // head
  fill(skin);
  circle(cx, headY, headR * 2);

  // hair (varies a little per character)
  drawHair(i, cx, headY, headR, skin);

  // one distinguishing accessory / prop per character
  push();
  drawTrait(i, cx, headY, headR, bodyTop, bodyW);
  pop();
}

function drawHair(i, cx, headY, headR, skin) {
  noStroke();
  // Ivy = curly red hair
  if (i === 4) {
    fill('orangered');
    for (let a = -1.1; a <= 1.1; a += 0.5) {
      circle(cx + a * headR * 0.8, headY - headR * 0.75, headR * 0.7);
    }
  } else if (i === 2) { // Aria - light hair with a bow feel
    fill('sienna');
    arc(cx, headY, headR * 2, headR * 2, PI, TWO_PI);
  } else {
    let hairTones = ['saddlebrown', 'black', 'sienna', 'dimgray',
                     'orangered', 'chocolate', 'darkslategray', 'black'];
    fill(hairTones[i]);
    arc(cx, headY, headR * 2, headR * 2, PI + 0.2, TWO_PI - 0.2);
  }
}

// Small, matter-of-fact visual cue that echoes each friend's trait.
function drawTrait(i, cx, headY, headR, bodyTop, bodyW) {
  noStroke();
  if (i === 0) {
    // Maya - wheelchair: two wheels under the body
    stroke('dimgray'); strokeWeight(3); noFill();
    let wy = bodyTop + 32;
    circle(cx - bodyW * 0.55, wy, 20);
    circle(cx + bodyW * 0.55, wy, 20);
    noStroke();
    fill('darkorange'); // basketball
    circle(cx + bodyW * 0.72, wy - 14, 12);
  } else if (i === 1) {
    // Leo - two speech bubbles (two languages)
    fill('white'); stroke('cornflowerblue'); strokeWeight(1.5);
    ellipse(cx - headR * 1.2, headY - headR * 0.3, 16, 12);
    fill('white'); stroke('tomato');
    ellipse(cx + headR * 1.2, headY - headR * 0.3, 16, 12);
    noStroke();
  } else if (i === 2) {
    // Aria - a little heart (grandparents' love)
    fill('crimson');
    drawHeart(cx + headR * 1.3, headY, 12);
  } else if (i === 3) {
    // Sam - hearing aid dot + music note
    fill('mediumpurple');
    circle(cx - headR * 0.95, headY + headR * 0.2, 6);
    fill('navy');
    textAlign(CENTER, CENTER); textSize(13);
    text('♪', cx + headR * 1.25, headY - headR * 0.2);
  } else if (i === 4) {
    // Ivy - paintbrush
    stroke('sienna'); strokeWeight(3);
    line(cx + headR * 1.1, headY + headR * 0.6, cx + headR * 1.7, headY - headR * 0.2);
    noStroke(); fill('mediumseagreen');
    circle(cx + headR * 1.7, headY - headR * 0.3, 8);
  } else if (i === 5) {
    // Noah - cooking pot / spoon
    stroke('gray'); strokeWeight(3);
    line(cx + headR * 0.9, headY + headR * 0.9, cx + headR * 1.7, headY + headR * 0.1);
    noStroke(); fill('silver');
    ellipse(cx + headR * 1.7, headY + headR * 0.0, 10, 6);
  } else if (i === 6) {
    // Ella - open book
    fill('mediumpurple');
    let bx = cx, by = headY + headR * 1.9;
    triangle(bx - 12, by, bx, by - 5, bx, by + 6);
    fill('mediumorchid');
    triangle(bx + 12, by, bx, by - 5, bx, by + 6);
  } else if (i === 7) {
    // Kai - glasses + star
    stroke('dimgray'); strokeWeight(2); noFill();
    circle(cx - headR * 0.42, headY + headR * 0.1, headR * 0.55);
    circle(cx + headR * 0.42, headY + headR * 0.1, headR * 0.55);
    line(cx - headR * 0.15, headY + headR * 0.1, cx + headR * 0.15, headY + headR * 0.1);
    noStroke(); fill('gold');
    drawStar(cx + headR * 1.4, headY - headR * 0.4, 4, 8, 5);
  }
}

function drawHeart(x, y, s) {
  beginShape();
  vertex(x, y + s * 0.3);
  bezierVertex(x, y - s * 0.3, x - s, y - s * 0.3, x - s, y + s * 0.1);
  bezierVertex(x - s, y + s * 0.5, x, y + s * 0.7, x, y + s);
  bezierVertex(x, y + s * 0.7, x + s, y + s * 0.5, x + s, y + s * 0.1);
  bezierVertex(x + s, y - s * 0.3, x, y - s * 0.3, x, y + s * 0.3);
  endShape(CLOSE);
}

function drawStar(x, y, r1, r2, n) {
  let angle = TWO_PI / n;
  let half = angle / 2;
  beginShape();
  for (let a = -HALF_PI; a < TWO_PI - HALF_PI; a += angle) {
    let sx = x + cos(a) * r2;
    let sy = y + sin(a) * r2;
    vertex(sx, sy);
    sx = x + cos(a + half) * r1;
    sy = y + sin(a + half) * r1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function drawInfoPanel(topY) {
  let panelH = 88;
  let x = margin;
  let w = canvasWidth - 2 * margin;

  stroke('silver');
  strokeWeight(1);
  if (selected >= 0) {
    fill(friends[selected].accent);
  } else {
    fill('white');
  }
  rect(x, topY, w, panelH, 10);
  noStroke();

  let pad = 12;
  textAlign(LEFT, TOP);
  if (selected < 0) {
    fill('dimgray');
    textSize(15);
    text('Tap a friend to see what makes them one-of-a-kind. Every friend belongs here!',
      x + pad, topY + pad, w - 2 * pad, panelH - 2 * pad);
  } else {
    let f = friends[selected];
    if (f.stage === 1) {
      // trait on top, then a short hint to tap again
      fill('navy');
      textSize(15);
      text(f.trait, x + pad, topY + pad, w - 2 * pad, panelH - 32);
      fill('dimgray');
      textSize(12);
      textAlign(LEFT, BOTTOM);
      text('Tap ' + f.name + ' again to see why they are a great friend.',
        x + pad, topY + panelH - pad - 14, w - 2 * pad, 16);
    } else {
      fill('navy');
      textSize(15);
      text(f.friendNote, x + pad, topY + pad, w - 2 * pad, panelH - 2 * pad);
    }
  }
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let i = 0; i < cardRects.length; i++) {
    if (pointInRect(mouseX, mouseY, cardRects[i])) {
      if (selected === i) {
        // second tap on same card advances to the friend note (stage 2)
        friends[i].stage = 2;
      } else {
        // first tap selects and shows the trait (stage 1)
        selected = i;
        friends[i].stage = 1;
      }
      return;
    }
  }
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
