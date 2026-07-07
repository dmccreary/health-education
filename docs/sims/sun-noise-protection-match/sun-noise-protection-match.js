// Match the Protection to the Risk - MicroSim (tap the protection that fits the scene)
// CANVAS_HEIGHT: 486
// Grade 2, Apply (L3): students tap the correct protection icon (sunscreen, sun hat,
// ear muffs, or move away) for a sun-risk, noise-risk, or no-risk scenario.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 434;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// Scenario cards. risk: 'sun' | 'noise' | 'none'. ok: icon ids that are correct.
let scenarios = [
  {
    name: "sunny playground",
    caption: "A sunny day at the playground.",
    risk: "sun",
    ok: ["sunscreen", "hat"],
    okMsg: "Correct! Sunscreen and a sun hat protect your skin from a sunburn on a sunny day."
  },
  {
    name: "loud fireworks",
    caption: "A loud fireworks show at night.",
    risk: "noise",
    ok: ["earmuffs"],
    okMsg: "Correct! Ear protection keeps loud fireworks sounds from hurting your ears."
  },
  {
    name: "sunny beach",
    caption: "A bright, sunny day at the beach.",
    risk: "sun",
    ok: ["sunscreen", "hat"],
    okMsg: "Correct! Sunscreen and a sun hat keep the strong beach sun off your skin."
  },
  {
    name: "noisy construction",
    caption: "A noisy construction site nearby.",
    risk: "noise",
    ok: ["earmuffs", "move"],
    okMsg: "Correct! Ear muffs or moving away protect your ears from loud machines."
  },
  {
    name: "cloudy park",
    caption: "A calm, cloudy day at the park.",
    risk: "none",
    ok: [],
    okMsg: "Nice thinking! A calm, cloudy day is gentle. You do not need sun or noise protection here."
  },
  {
    name: "quiet library",
    caption: "A quiet, cozy library indoors.",
    risk: "none",
    ok: [],
    okMsg: "Nice thinking! A quiet library indoors is safe. You do not need sun or noise protection here."
  }
];

// Protection icons (drawn as clickable cards)
let icons = [
  { id: "sunscreen", label: "Sunscreen", kind: "sun" },
  { id: "hat", label: "Sun hat", kind: "sun" },
  { id: "earmuffs", label: "Ear muffs", kind: "noise" },
  { id: "move", label: "Move away", kind: "noise" }
];

let scenIndex = 0;
let iconRects = [];
let chosen = null;        // id of the icon the student tapped this round
let message = "";
let messageColor = "dimgray";

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();

  describe('A scenario card shows a scene such as a sunny playground or a loud ' +
    'fireworks show. Below it are four large protection icons: sunscreen, a sun ' +
    'hat, ear muffs, and a move-away arrow. Tapping an icon applies it and gives ' +
    'friendly feedback about whether it matches the risk in the scene.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 11);
  resetButton.position(margin + 130, drawHeight + 11);
}

function draw() {
  updateCanvasSize();

  // regions
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
  textSize(22);
  text('Match the Protection to the Risk', canvasWidth / 2, 8);

  drawScenarioCard();
  drawIcons();
  drawInfobox();
}

function drawScenarioCard() {
  let s = scenarios[scenIndex];
  let cardX = margin;
  let cardY = 40;
  let cardW = canvasWidth - margin * 2;
  let cardH = 108;

  // sky/background color hints at the risk
  let bg = 'lightcyan';
  if (s.risk === 'sun') bg = 'lightyellow';
  else if (s.risk === 'noise') bg = 'lavender';
  fill(bg);
  stroke('steelblue');
  strokeWeight(1.5);
  rect(cardX, cardY, cardW, cardH, 10);
  noStroke();

  // simple scene drawn on the left of the card
  drawScene(s, cardX + 12, cardY + 12, 84, cardH - 24);

  // caption on the right
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(17);
  text(s.caption, cardX + 110, cardY + 10, cardW - 122, cardH - 20);

  // scenario counter
  noStroke();
  fill('dimgray');
  textAlign(RIGHT, TOP);
  textSize(12);
  text('Scene ' + (scenIndex + 1) + ' of ' + scenarios.length, cardX + cardW - 8, cardY + 6);
}

// Draw a tiny illustrative scene inside a box at (bx,by,bw,bh)
function drawScene(s, bx, by, bw, bh) {
  let cx = bx + bw / 2;
  let cy = by + bh / 2;
  push();
  if (s.risk === 'sun') {
    // bright sun with rays
    stroke('goldenrod');
    strokeWeight(3);
    for (let a = 0; a < TWO_PI; a += PI / 4) {
      line(cx + cos(a) * 22, cy + sin(a) * 22, cx + cos(a) * 32, cy + sin(a) * 32);
    }
    noStroke();
    fill('gold');
    circle(cx, cy, 34);
  } else if (s.risk === 'noise') {
    // loudspeaker with sound waves
    noStroke();
    fill('slategray');
    rect(cx - 20, cy - 10, 12, 20, 2);
    triangle(cx - 8, cy - 16, cx - 8, cy + 16, cx + 6, cy);
    noFill();
    stroke('mediumpurple');
    strokeWeight(3);
    arc(cx + 6, cy, 22, 30, -PI / 3, PI / 3);
    arc(cx + 6, cy, 38, 46, -PI / 3, PI / 3);
  } else {
    // calm cloud
    noStroke();
    fill('lightslategray');
    ellipse(cx, cy + 4, 40, 22);
    ellipse(cx - 12, cy, 24, 20);
    ellipse(cx + 12, cy, 26, 22);
  }
  pop();
}

function drawIcons() {
  let s = scenarios[scenIndex];
  iconRects = [];
  let n = icons.length;
  let gap = 12;
  let iw = (canvasWidth - margin * 2 - gap * (n - 1)) / n;
  iw = Math.min(iw, 92);
  let totalW = iw * n + gap * (n - 1);
  let startX = (canvasWidth - totalW) / 2;
  let iy = 168;
  let ih = 108;

  // prompt above icons
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(15);
  text('Tap the protection that fits this scene:', canvasWidth / 2, 154);

  for (let i = 0; i < n; i++) {
    let ix = startX + i * (iw + gap);
    let r = { x: ix, y: iy, w: iw, h: ih, id: icons[i].id };
    iconRects.push(r);

    // card state: green if chosen & correct, orange if chosen & wrong
    let isChosen = chosen === icons[i].id;
    let isCorrect = s.ok.indexOf(icons[i].id) >= 0;
    let fillCol = 'white';
    let strokeCol = 'steelblue';
    if (isChosen && isCorrect) { fillCol = 'honeydew'; strokeCol = 'seagreen'; }
    else if (isChosen && !isCorrect) { fillCol = 'seashell'; strokeCol = 'darkorange'; }

    fill(fillCol);
    stroke(strokeCol);
    strokeWeight(isChosen ? 3 : 1.5);
    rect(ix, iy, iw, ih, 10);

    drawIconArt(icons[i].id, ix + iw / 2, iy + 34, iw);

    noStroke();
    fill('black');
    textAlign(CENTER, TOP);
    textSize(13);
    text(icons[i].label, ix + 2, iy + ih - 34, iw - 4, 30);

    // check mark on correct chosen icon
    if (isChosen && isCorrect) {
      noStroke();
      fill('seagreen');
      textAlign(CENTER, CENTER);
      textSize(20);
      text('✓', ix + iw - 14, iy + 14);
    }
  }
}

// Draw the icon symbol centered at (cx, cy) sized to card width w
function drawIconArt(id, cx, cy, w) {
  push();
  if (id === 'sunscreen') {
    // sunscreen bottle
    stroke('goldenrod');
    strokeWeight(2);
    fill('white');
    rect(cx - 6, cy - 4, 12, 8, 2);          // cap
    fill('gold');
    rect(cx - 11, cy + 4, 22, 26, 5);        // bottle
    noStroke();
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(13);
    text('SPF', cx, cy + 17);
  } else if (id === 'hat') {
    // sun hat
    noStroke();
    fill('burlywood');
    ellipse(cx, cy + 16, 46, 12);            // brim
    arc(cx, cy + 16, 28, 34, PI, TWO_PI);    // crown
    fill('sienna');
    rect(cx - 14, cy + 13, 28, 5, 2);        // band
  } else if (id === 'earmuffs') {
    // ear muffs
    noFill();
    stroke('slateblue');
    strokeWeight(4);
    arc(cx, cy + 2, 40, 40, PI + 0.3, TWO_PI - 0.3); // headband
    noStroke();
    fill('mediumpurple');
    ellipse(cx - 18, cy + 10, 14, 20);       // left cup
    ellipse(cx + 18, cy + 10, 14, 20);       // right cup
  } else if (id === 'move') {
    // move-away arrow with a walking figure
    noStroke();
    fill('seagreen');
    // arrow shaft
    rect(cx - 18, cy + 4, 22, 8, 2);
    triangle(cx + 4, cy - 2, cx + 4, cy + 18, cx + 20, cy + 8); // arrow head
    // little person
    fill('dimgray');
    circle(cx - 14, cy - 10, 9);
    rect(cx - 17, cy - 5, 7, 12, 2);
  }
  pop();
}

function drawInfobox() {
  let boxX = margin;
  let boxY = 292;
  let boxW = canvasWidth - margin * 2;
  let boxH = 130;

  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(boxX, boxY, boxW, boxH, 8);
  noStroke();

  let msg = message;
  if (!msg) {
    msg = "Look at the scene. Does it need sun protection, ear protection, or none? Tap an icon to try.";
  }
  fill(messageColor);
  textAlign(CENTER, CENTER);
  textSize(16);
  text(msg, boxX + 12, boxY + 8, boxW - 24, boxH - 16);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let i = 0; i < iconRects.length; i++) {
    if (pointInRect(mouseX, mouseY, iconRects[i])) {
      applyIcon(iconRects[i].id);
      return;
    }
  }
}

function applyIcon(id) {
  let s = scenarios[scenIndex];
  chosen = id;
  if (s.ok.indexOf(id) >= 0) {
    // correct match
    message = s.okMsg;
    messageColor = 'seagreen';
  } else if (s.risk === 'none') {
    // no-risk scene, student applied a protection
    let icon = icons.find(ic => ic.id === id);
    let kindWord = icon.kind === 'sun' ? 'Sun protection' : 'Ear protection';
    message = kindWord + " isn't needed here — this scene is calm and safe. " +
      "Some places do not need any protection at all!";
    messageColor = 'darkorange';
  } else {
    // wrong kind of protection for the risk
    let icon = icons.find(ic => ic.id === id);
    if (s.risk === 'sun') {
      message = "Ear protection isn't needed here — there's no loud noise in this scene. " +
        "Try a sun-protection icon instead.";
    } else {
      message = "Sun protection isn't needed here — this scene is loud, not sunny. " +
        "Try an ear-protection icon instead.";
    }
    messageColor = 'darkorange';
  }
}

function nextScenario() {
  scenIndex = (scenIndex + 1) % scenarios.length;
  chosen = null;
  message = "";
  messageColor = 'dimgray';
}

function resetAll() {
  scenIndex = 0;
  chosen = null;
  message = "";
  messageColor = 'dimgray';
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
