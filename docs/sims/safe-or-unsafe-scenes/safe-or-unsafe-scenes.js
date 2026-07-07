// Safe or Unsafe? School and Community Scenes - MicroSim (one scene, two bins)
// CANVAS_HEIGHT: 520
// Grade 1, Analyze (L4): students see one scene at a time from home, school, and
// community and tap the Safe Behavior or Unsafe Behavior bin. Correct picks glow
// and show a short reason; unsafe scenes model telling a trusted adult.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 460;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton, resetButton;

// Ten scenes across Home, School, and Community. safe=true means the picture
// shows a safe behavior. reason is one short sentence shown after a correct pick.
// The first scene is clearly safe to build confidence.
let scenes = [
  { setting: 'Community', icon: 'crossHold', safe: true,  title: 'Holding a hand to cross',
    reason: 'Holding a grown-up\'s hand keeps you safe crossing the street.' },
  { setting: 'Community', icon: 'crossAlone', safe: false, title: 'Running into the street alone',
    reason: 'Cars cannot stop fast. Cross with a grown-up, not alone.' },
  { setting: 'School', icon: 'fireDrill', safe: true,  title: 'Walking in a fire drill',
    reason: 'Walking calmly in a fire drill helps everyone stay safe.' },
  { setting: 'School', icon: 'ignoreDrill', safe: false, title: 'Ignoring the drill',
    reason: 'A drill is practice. Line up and follow your teacher.' },
  { setting: 'Home', icon: 'washHands', safe: true,  title: 'Washing hands',
    reason: 'Washing hands before you eat keeps germs away.' },
  { setting: 'Home', icon: 'cleaners', safe: false, title: 'Playing with cleaning bottles',
    reason: 'Cleaning bottles can hurt you. Leave them closed and tell an adult.' },
  { setting: 'Community', icon: 'helmet', safe: true,  title: 'Wearing a bike helmet',
    reason: 'A helmet protects your head when you ride.' },
  { setting: 'School', icon: 'pushStairs', safe: false, title: 'Pushing near the stairs',
    reason: 'Pushing near stairs can make someone fall. Keep hands to yourself.' },
  { setting: 'Home', icon: 'seatbelt', safe: true,  title: 'Buckling a seat belt',
    reason: 'A seat belt keeps you safe every time you ride in a car.' },
  { setting: 'Community', icon: 'strangerCar', safe: false, title: 'A ride from a stranger',
    reason: 'Never go with someone your family does not know. Tell a trusted adult.' }
];

let idx = 0;               // current scene index
let picked = null;         // null, true (chose Safe), or false (chose Unsafe)
let solved = false;        // true once the correct bin was picked
let showAdultPrompt = false; // every 3rd scene, after solving, model "a trusted adult"

let safeBin = {};          // hit box, rebuilt each frame
let unsafeBin = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Scene');
  nextButton.mousePressed(nextScene);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Start Over');
  resetButton.mousePressed(resetAll);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  describe('One scene shows at a time from home, school, or community. The child ' +
    'taps the Safe Behavior bin or the Unsafe Behavior bin to sort it. A correct ' +
    'pick makes the bin glow and shows a short reason. Unsafe scenes remind the ' +
    'child to tell a trusted adult. Buttons move to the Next Scene or Start Over.',
    LABEL);
}

function positionControls() {
  let y = drawHeight + 14;
  nextButton.position(margin, y);
  resetButton.position(canvasWidth - margin - 96, y);
}

function nextScene() {
  idx = (idx + 1) % scenes.length;
  picked = null;
  solved = false;
  showAdultPrompt = false;
}

function resetAll() {
  idx = 0;
  picked = null;
  solved = false;
  showAdultPrompt = false;
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
  textSize(22);
  text('Safe or Unsafe?', canvasWidth / 2, 8);

  // Scene counter + setting label
  noStroke();
  textAlign(CENTER, TOP);
  textSize(14);
  fill('dimgray');
  text('Scene ' + (idx + 1) + ' of ' + scenes.length + '  •  ' + scenes[idx].setting,
    canvasWidth / 2, 36);

  drawSceneCard();
  drawBins();
  drawCaption();
  cursor(overBins() ? HAND : ARROW);
}

// Top area: one illustrated scene card.
function drawSceneCard() {
  let cardY = 58;
  let cardH = 150;
  let cardW = canvasWidth - margin * 2;
  let cx = canvasWidth / 2;

  fill('white');
  stroke('silver');
  strokeWeight(1.5);
  rect(margin, cardY, cardW, cardH, 12);
  noStroke();

  // Icon in the upper portion of the card
  drawIcon(scenes[idx].icon, cx, cardY + 58);

  // Scene title inside the card, wrapped
  noStroke();
  fill('black');
  textAlign(CENTER, TOP);
  textSize(17);
  text(scenes[idx].title, margin + 10, cardY + 104, cardW - 20, 42);
}

// Middle area: two big bins to tap.
function drawBins() {
  let binY = 222;
  let binH = 118;
  let gap = 14;
  let binW = (canvasWidth - margin * 2 - gap) / 2;

  safeBin = { x: margin, y: binY, w: binW, h: binH };
  unsafeBin = { x: margin + binW + gap, y: binY, w: binW, h: binH };

  drawBin(safeBin, true);
  drawBin(unsafeBin, false);
}

function drawBin(b, isSafe) {
  let s = scenes[idx];
  let hover = pointInRect(mouseX, mouseY, b);
  // A bin "lights up" green/amber when it is the correct answer that was picked.
  let chosen = picked !== null && (picked === isSafe);
  let correctChoice = solved && s.safe === isSafe;

  strokeWeight(3);
  if (correctChoice) {
    stroke(isSafe ? 'seagreen' : 'goldenrod');
    fill(isSafe ? 'honeydew' : 'cornsilk');
  } else if (chosen && !solved) {
    // Wrong pick: gentle amber outline, no scary red.
    stroke('goldenrod');
    fill('white');
  } else {
    stroke(isSafe ? 'seagreen' : 'goldenrod');
    fill(hover && !solved ? (isSafe ? 'honeydew' : 'cornsilk') : 'white');
  }
  rect(b.x, b.y, b.w, b.h, 14);

  // Big thumb-up / caution symbol
  noStroke();
  fill(isSafe ? 'seagreen' : 'goldenrod');
  textAlign(CENTER, CENTER);
  textSize(40);
  text(isSafe ? '✓' : '!', b.x + b.w / 2, b.y + 40);

  // Bin label
  noStroke();
  fill(isSafe ? 'seagreen' : 'darkgoldenrod');
  textAlign(CENTER, TOP);
  textSize(18);
  text(isSafe ? 'Safe' : 'Unsafe', b.x, b.y + 66, b.w, 24);
  textSize(13);
  fill('dimgray');
  text('Behavior', b.x, b.y + 92, b.w, 20);

  // Check mark badge when this bin was the correct pick
  if (correctChoice) {
    noStroke();
    fill(isSafe ? 'seagreen' : 'goldenrod');
    circle(b.x + b.w - 18, b.y + 18, 26);
    fill('white');
    textAlign(CENTER, CENTER);
    textSize(17);
    text('✓', b.x + b.w - 18, b.y + 17);
  }
}

// Bottom of draw area: explanation / prompt caption box.
function drawCaption() {
  let cy = 350;
  let cw = canvasWidth - margin * 2;
  let ch = drawHeight - cy - 12;

  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, cy, cw, ch, 10);
  noStroke();

  let s = scenes[idx];

  if (picked === null) {
    fill('dimgray');
    textAlign(CENTER, CENTER);
    textSize(16);
    text('Is this Safe or Unsafe? Tap a bin.', margin + 12, cy, cw - 24, ch);
    return;
  }

  if (!solved) {
    // Wrong pick prompt (gentle, non-alarmist)
    fill('darkgoldenrod');
    textAlign(CENTER, CENTER);
    textSize(15);
    text('Look again — is anyone in danger of getting hurt here?',
      margin + 12, cy, cw - 24, ch);
    return;
  }

  // Solved: show the reason, and on every 3rd scene model telling a trusted adult.
  if (showAdultPrompt) {
    fill(s.safe ? 'seagreen' : 'darkgoldenrod');
    textAlign(CENTER, TOP);
    textSize(14);
    text(s.reason, margin + 12, cy + 8, cw - 24, ch / 2 - 8);
    fill('navy');
    textSize(14);
    text('If this were unsafe, who could you tell?  A trusted adult.',
      margin + 12, cy + ch / 2 + 2, cw - 24, ch / 2 - 6);
  } else {
    fill(s.safe ? 'seagreen' : 'darkgoldenrod');
    textAlign(CENTER, CENTER);
    textSize(15);
    text((s.safe ? 'Yes — that is a Safe behavior.  ' : 'Yes — that is an Unsafe behavior.  ') + s.reason,
      margin + 12, cy + 6, cw - 24, ch - 12);
  }
}

// ---- Simple flat, non-frightening icons ----
function drawIcon(name, cx, cy) {
  push();
  translate(cx, cy);
  noStroke();
  let skin = 'peachpuff';

  if (name === 'crossHold') {
    // Adult + child holding hands, a crosswalk stripe under them
    fill('gainsboro'); rect(-40, 26, 80, 8);
    fill('white'); rect(-34, 26, 8, 8); rect(-14, 26, 8, 8); rect(6, 26, 8, 8); rect(26, 26, 8, 8);
    fill(skin); circle(-14, -16, 20); circle(12, -8, 15);  // adult, child heads
    fill('steelblue'); rect(-22, -6, 16, 30, 4);           // adult body
    fill('mediumpurple'); rect(6, 0, 12, 24, 3);           // child body
    fill(skin); circle(-3, 12, 8);                         // joined hands
  } else if (name === 'crossAlone') {
    // Lone child near a car, no hand held
    fill('gainsboro'); rect(-40, 26, 80, 8);
    fill('white'); rect(-34, 26, 8, 8); rect(-14, 26, 8, 8); rect(6, 26, 8, 8); rect(26, 26, 8, 8);
    fill('lightslategray'); rect(14, -10, 30, 16, 4);      // car body
    fill('lightsteelblue'); rect(18, -18, 14, 10, 2);      // window
    fill('dimgray'); circle(20, 8, 8); circle(38, 8, 8);   // wheels
    fill(skin); circle(-18, -14, 18);                      // child head
    fill('mediumpurple'); rect(-26, -4, 16, 26, 4);        // child body
  } else if (name === 'fireDrill') {
    // Line of children walking to an exit door
    fill('seagreen'); rect(22, -22, 20, 44, 2);            // exit door
    fill('white'); textSize(9); textAlign(CENTER, CENTER); text('EXIT', 32, -30);
    fill(skin); circle(-24, -12, 14); circle(-4, -12, 14); // two kids
    fill('steelblue'); rect(-31, -4, 14, 22, 3);
    fill('mediumpurple'); rect(-11, -4, 14, 22, 3);
  } else if (name === 'ignoreDrill') {
    // A child sitting/staying at a desk while others move
    fill('sienna'); rect(-30, 6, 26, 6); fill('sienna'); rect(-28, 12, 4, 12); rect(-8, 12, 4, 12); // desk
    fill(skin); circle(-17, -8, 16);                       // seated child head
    fill('goldenrod'); rect(-25, 2, 16, 10, 3);            // child body at desk
    fill(skin); circle(24, -12, 14);                       // a kid who is moving
    fill('steelblue'); rect(17, -4, 14, 22, 3);
  } else if (name === 'washHands') {
    fill('lightsteelblue'); rect(-24, 6, 48, 14, 4);        // sink basin
    fill('silver'); rect(-4, -8, 6, 14, 2);                 // faucet
    fill('cornflowerblue'); triangle(-1, 6, -5, 16, 3, 16); // water
    fill(skin); circle(-12, 10, 14); circle(12, 10, 14);    // two hands
  } else if (name === 'cleaners') {
    // Two closed cleaning bottles with a small caution mark
    fill('mediumpurple'); rect(-22, -14, 16, 34, 3); fill('white'); rect(-21, -20, 14, 8, 2);
    fill('indianred'); rect(6, -8, 16, 28, 3); fill('white'); rect(7, -14, 14, 8, 2);
    fill('goldenrod'); triangle(-1, -26, -9, -12, 7, -12);  // caution triangle
    fill('white'); textAlign(CENTER, CENTER); textSize(10); text('!', -1, -16);
  } else if (name === 'helmet') {
    fill(skin); circle(0, 2, 26);                           // head
    fill('crimson'); arc(0, 0, 30, 26, PI, TWO_PI);         // helmet dome
    fill('crimson'); rect(-15, 0, 30, 4);                   // brim
    stroke('crimson'); strokeWeight(2); noFill(); line(-8, 8, -12, 16); // strap
    noStroke();
  } else if (name === 'pushStairs') {
    fill('gainsboro'); rect(-24, 12, 14, 8); rect(-10, 4, 14, 8); rect(4, -4, 14, 8); rect(18, -12, 14, 8); // steps
    fill(skin); circle(-8, -12, 15);                        // child
    fill('goldenrod'); rect(-15, -4, 14, 18, 3);
    stroke('goldenrod'); strokeWeight(3); line(0, 0, 12, -4); noStroke(); // pushing arm
  } else if (name === 'seatbelt') {
    fill('lightslategray'); rect(-22, -6, 44, 26, 6);       // car seat
    fill('slategray'); rect(-22, -20, 44, 16, 6);           // seat back
    fill(skin); circle(0, -10, 18);                         // child head
    fill('steelblue'); rect(-10, 0, 20, 18, 3);             // body
    stroke('gold'); strokeWeight(3); line(-9, -2, 9, 16); noStroke(); // belt
  } else if (name === 'strangerCar') {
    fill('lightslategray'); rect(-26, -6, 52, 20, 5);       // car body
    fill('lightsteelblue'); rect(-18, -16, 26, 12, 3);      // window
    fill('dimgray'); circle(-14, 16, 12); circle(12, 16, 12); // wheels
    fill(skin); circle(24, -8, 14);                         // child standing by
    fill('mediumpurple'); rect(17, 2, 14, 14, 3);
  } else {
    fill('steelblue'); circle(0, 0, 26);
  }
  pop();
}

function overBins() {
  if (solved) return false;
  return pointInRect(mouseX, mouseY, safeBin) || pointInRect(mouseX, mouseY, unsafeBin);
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (solved) return; // must use Next Scene to advance
  let choseSafe = null;
  if (pointInRect(mouseX, mouseY, safeBin)) choseSafe = true;
  else if (pointInRect(mouseX, mouseY, unsafeBin)) choseSafe = false;
  if (choseSafe === null) return;

  picked = choseSafe;
  if (choseSafe === scenes[idx].safe) {
    solved = true;
    // Every 3rd scene (1-based), model telling a trusted adult after solving.
    showAdultPrompt = ((idx + 1) % 3 === 0);
  } else {
    solved = false; // wrong pick: gentle prompt, let them try again
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
