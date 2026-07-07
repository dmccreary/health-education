// Choose the Right Drink - MicroSim (scenario matching)
// CANVAS_HEIGHT: 452
// Grade 3, Apply (L3): students apply the "water-first" idea by matching a drink
// to an activity scenario (recess, long practice, after activity, relaxing).

let containerWidth;
let canvasWidth = 400;
let drawHeight = 400;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;

let nextButton;
let resetButton;

let drinks = ['Water', 'Milk', 'Sports drink', 'Soda', 'Energy drink'];
let drinkColors = ['deepskyblue', 'whitesmoke', 'orange', 'saddlebrown', 'crimson'];

let scenarios = [
  {
    title: 'Recess or Gym Class',
    desc: 'You just ran around at recess and feel thirsty.',
    best: 0,
    fb: [
      'Best! For regular recess your body just needs its fluids back.',
      'Milk is healthy, but water is the best drink during active play.',
      "Sports drinks add sugar you don't need for short recess.",
      'Soda has lots of sugar and does not hydrate you well.',
      'Energy drinks are not for kids — they have caffeine.'
    ]
  },
  {
    title: 'Long Hot-Weather Practice',
    desc: "It's a long, hot practice and you are sweating a lot.",
    best: 0,
    fb: [
      'Best! Sip water often during long, hot activity to stay cool.',
      'Milk is great afterward, but water is better while you play.',
      'Okay for very long, sweaty games — but water is usually enough.',
      "Soda's sugar and bubbles can upset your stomach when active.",
      'Energy drinks are never a good choice for exercise.'
    ]
  },
  {
    title: 'After Activity, Feeling Hungry',
    desc: 'Practice is over and your tummy is rumbling.',
    best: 1,
    fb: [
      "Water is good, but if you're hungry milk also gives nutrients.",
      'Best! After activity, milk helps refuel and rebuild your muscles.',
      "You don't need the extra sugar — milk or water is better.",
      "Soda has empty sugar and won't refuel you.",
      'Energy drinks are not a healthy way to refuel.'
    ]
  },
  {
    title: 'Just Relaxing at Home',
    desc: 'You are reading on the couch on a calm afternoon.',
    best: 0,
    fb: [
      'Best! Water is the everyday drink your body loves.',
      'Milk is a healthy choice too, especially with meals.',
      "No need for a sports drink when you're just relaxing.",
      'Soda is a sometimes treat, not an everyday drink.',
      'Energy drinks are not for kids.'
    ]
  }
];

let sIndex = 0;
let chosen = -1;       // drink index chosen for current scenario
let completed = {};    // scenarios answered correctly-or-not (visited)
let drinkRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);
  positionControls();
  describe('A scenario card on the left shows an activity situation. On the right is ' +
    'a column of drink choices. Students click the best drink and see whether it was ' +
    'the best choice with a one-sentence reason.', LABEL);
}

function positionControls() {
  nextButton.position(10, drawHeight + 12);
  resetButton.position(160, drawHeight + 12);
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
  textSize(22);
  text('Choose the Right Drink', canvasWidth / 2, 8);

  let sc = scenarios[sIndex];

  // Scenario card (left)
  let cardX = margin, cardY = 48;
  let cardW = canvasWidth * 0.52 - margin;
  let cardH = 250;
  fill('lightcyan');
  stroke('cadetblue');
  strokeWeight(1.5);
  rect(cardX, cardY, cardW, cardH, 10);
  noStroke();
  fill('teal');
  textAlign(CENTER, TOP);
  textSize(13);
  text('Scenario ' + (sIndex + 1) + ' of 4', cardX + cardW / 2, cardY + 10);
  fill('black');
  textSize(18);
  text(sc.title, cardX + 8, cardY + 34, cardW - 16, 60);
  textSize(15);
  fill('dimgray');
  text(sc.desc, cardX + 10, cardY + 96, cardW - 20, 90);

  // Feedback under the scenario
  textAlign(LEFT, TOP);
  textSize(14);
  if (chosen >= 0) {
    let isBest = chosen === sc.best;
    fill(isBest ? 'seagreen' : 'indianred');
    text((isBest ? '✓ ' : '→ ') + sc.fb[chosen], cardX + 10, cardY + 176, cardW - 20, 66);
  } else {
    fill('gray');
    text('Click the best drink for this situation.', cardX + 10, cardY + 186, cardW - 20, 50);
  }

  // Drinks column (right)
  drinkRects = [];
  let dx = canvasWidth * 0.56;
  let dw = canvasWidth - dx - margin;
  let dh = 40, gap = 10, dy0 = 52;
  textSize(15);
  for (let i = 0; i < drinks.length; i++) {
    let dy = dy0 + i * (dh + gap);
    drinkRects.push({ x: dx, y: dy, w: dw, h: dh, i: i });
    let hover = pointInRect(mouseX, mouseY, { x: dx, y: dy, w: dw, h: dh });
    let isChosen = chosen === i;
    let isBest = chosen >= 0 && i === scenarios[sIndex].best;
    strokeWeight(isChosen || isBest ? 3 : 1.5);
    stroke(isBest ? 'seagreen' : (isChosen ? 'indianred' : 'gray'));
    fill(hover && chosen < 0 ? 'lightyellow' : 'white');
    rect(dx, dy, dw, dh, 8);
    // color swatch
    noStroke();
    fill(drinkColors[i]);
    stroke('gray');
    strokeWeight(1);
    circle(dx + 20, dy + dh / 2, 20);
    noStroke();
    fill('black');
    textAlign(LEFT, CENTER);
    text(drinks[i], dx + 38, dy + dh / 2);
    if (chosen >= 0 && i === scenarios[sIndex].best) {
      fill('seagreen');
      textAlign(RIGHT, CENTER);
      textSize(13);
      text('best', dx + dw - 8, dy + dh / 2);
      textSize(15);
    }
  }
  cursor(overAnyDrink() && chosen < 0 ? HAND : ARROW);

  // Completion caption
  if (Object.keys(completed).length === scenarios.length) {
    noStroke();
    fill('seagreen');
    textAlign(CENTER, BOTTOM);
    textSize(16);
    text('Hydration Helper! You matched every drink.', canvasWidth / 2, drawHeight - 8);
  }
}

function overAnyDrink() {
  for (let d of drinkRects) if (pointInRect(mouseX, mouseY, d)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (chosen >= 0) return; // one choice per scenario until Next
  for (let d of drinkRects) {
    if (pointInRect(mouseX, mouseY, d)) {
      chosen = d.i;
      completed[sIndex] = true;
      return;
    }
  }
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  chosen = -1;
}

function resetAll() {
  sIndex = 0;
  chosen = -1;
  completed = {};
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
