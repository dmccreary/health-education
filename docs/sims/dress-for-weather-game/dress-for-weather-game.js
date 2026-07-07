// Dress for the Weather - MicroSim (dress a character for the weather)
// CANVAS_HEIGHT: 502
// Grade 3, Apply (L3): students apply weather knowledge by choosing correct clothing for
// four weather scenes (sunny/hot, cold/dry, rainy, windy).

let containerWidth;
let canvasWidth = 400;
let drawHeight = 450;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let weatherButton;
let checkButton;
let resetButton;

let weathers = ['sunny', 'cold', 'rainy', 'windy'];
let weatherLabels = { sunny: 'Sunny & Hot', cold: 'Cold & Dry', rainy: 'Rainy', windy: 'Windy' };

// clothing: name, goodFor weathers
let closet = [
  { n: 'Sunhat', good: ['sunny'] },
  { n: 'Sunglasses', good: ['sunny'] },
  { n: 'T-shirt', good: ['sunny'] },
  { n: 'Shorts', good: ['sunny'] },
  { n: 'Warm hat', good: ['cold'] },
  { n: 'Thick coat', good: ['cold'] },
  { n: 'Raincoat', good: ['rainy'] },
  { n: 'Boots', good: ['rainy'] },
  { n: 'Windbreaker', good: ['windy'] }
];

let wIndex = 0;
let worn = [];       // indices of worn items
let feedback = '';
let feedbackColor = 'dimgray';
let itemRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  weatherButton = createButton('Change Weather');
  weatherButton.mousePressed(() => { wIndex = (wIndex + 1) % weathers.length; worn = []; feedback = ''; });
  checkButton = createButton('Check My Outfit');
  checkButton.mousePressed(check);
  resetButton = createButton('Reset');
  resetButton.mousePressed(() => { worn = []; feedback = ''; });
  positionControls();
  describe('A character and a weather scene, plus a closet of clothing. Students tap ' +
    'clothing to dress the character for the weather, then check whether the outfit fits.', LABEL);
}

function positionControls() {
  weatherButton.position(10, drawHeight + 12);
  checkButton.position(140, drawHeight + 12);
  resetButton.position(275, drawHeight + 12);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(20);
  text('Dress for the Weather', canvasWidth / 2, 8);

  // weather scene + character (left)
  let sw = canvasWidth * 0.55;
  drawWeatherScene(sw);
  drawCharacter(sw);

  // closet (right)
  itemRects = [];
  let cx = sw + 8, cwid = canvasWidth - cx - margin;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12);
  text('Closet (tap to wear):', cx, 40);
  let iy0 = 58, ih = 30, gap = 5;
  for (let i = 0; i < closet.length; i++) {
    let y = iy0 + i * (ih + gap);
    itemRects.push({ x: cx, y: y, w: cwid, h: ih, i: i });
    let on = worn.includes(i);
    let hover = pointInRect(mouseX, mouseY, { x: cx, y: y, w: cwid, h: ih });
    strokeWeight(on ? 2.5 : 1); stroke(on ? 'seagreen' : 'gray');
    fill(on ? 'honeydew' : (hover ? 'lightyellow' : 'white'));
    rect(cx, y, cwid, ih, 5);
    noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(12);
    text((on ? '✓ ' : '') + closet[i].n, cx + 8, y + ih / 2);
  }
  cursor(overAny() ? HAND : ARROW);

  // feedback
  noStroke(); textAlign(LEFT, TOP); textSize(12);
  fill(feedbackColor);
  text(feedback || 'Pick clothing for ' + weatherLabels[weathers[wIndex]] + ', then Check My Outfit.',
    margin, drawHeight - 60, sw - margin, 54);
}

function drawWeatherScene(sw) {
  let w = weathers[wIndex];
  noStroke();
  fill(w === 'sunny' ? 'lightskyblue' : (w === 'cold' ? 'lavender' : (w === 'rainy' ? 'slategray' : 'lightsteelblue')));
  rect(margin, 40, sw - margin * 2, 120, 8);
  // weather label
  fill('black'); textAlign(CENTER, TOP); textSize(13);
  text(weatherLabels[w], margin, 46, sw - margin * 2, 20);
  push(); translate(sw - 60, 90);
  if (w === 'sunny') { fill('gold'); circle(0, 0, 40); }
  else if (w === 'cold') { fill('white'); for (let i = 0; i < 6; i++) { let a = i * PI / 3; line(cos(a) * 14, sin(a) * 14, -cos(a) * 14, -sin(a) * 14); stroke('white'); strokeWeight(2); } }
  else if (w === 'rainy') { fill('lightgray'); ellipse(0, -6, 44, 26); stroke('deepskyblue'); strokeWeight(2); for (let i = -1; i <= 1; i++) line(i * 10, 6, i * 10 - 4, 20); }
  else { stroke('white'); strokeWeight(3); noFill(); arc(-6, 0, 40, 24, PI, TWO_PI); arc(4, 12, 30, 18, PI, TWO_PI); }
  pop();
}

function drawCharacter(sw) {
  let cx = sw / 2, cy = 300;
  stroke('burlywood'); strokeWeight(3); fill('navajowhite');
  circle(cx, cy - 70, 50);
  noStroke(); fill('sienna'); circle(cx - 12, cy - 74, 6); circle(cx + 12, cy - 74, 6);
  stroke('mediumpurple'); strokeWeight(3); fill('plum');
  rect(cx - 30, cy - 42, 60, 80, 14);
  rect(cx - 24, cy + 34, 22, 60, 8); rect(cx + 2, cy + 34, 22, 60, 8);
  // worn item tags
  noStroke(); fill('seagreen'); textAlign(CENTER, TOP); textSize(11);
  let wy = cy + 100;
  text('Wearing: ' + (worn.length ? worn.map(i => closet[i].n).join(', ') : '(nothing yet)'),
    margin, wy, sw - margin * 2, 40);
}

function overAny() { for (let r of itemRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }

function mousePressed() {
  for (let r of itemRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      let k = worn.indexOf(r.i);
      if (k >= 0) worn.splice(k, 1); else worn.push(r.i);
      feedback = '';
      return;
    }
  }
}

function check() {
  let w = weathers[wIndex];
  let good = worn.filter(i => closet[i].good.includes(w));
  let bad = worn.filter(i => !closet[i].good.includes(w));
  if (worn.length === 0) { feedback = 'Add some clothing first!'; feedbackColor = 'darkgoldenrod'; return; }
  if (bad.length === 0 && good.length >= 2) {
    feedback = 'Great outfit for ' + weatherLabels[w] + '! Everything you picked fits the weather.';
    feedbackColor = 'seagreen';
  } else {
    let msg = good.length ? 'Good picks: ' + good.map(i => closet[i].n).join(', ') + '. ' : '';
    if (bad.length) msg += 'Not for this weather: ' + bad.map(i => closet[i].n).join(', ') + '.';
    feedback = msg;
    feedbackColor = 'darkgoldenrod';
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
