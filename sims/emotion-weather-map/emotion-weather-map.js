// Emotion Weather Map - MicroSim (ongoing situation + trigger -> reaction size)
// CANVAS_HEIGHT: 442
// Grade 5, Analyze (L4): students distinguish a specific trigger from a broader ongoing
// situation and analyze how both combine to influence a reaction.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 390;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let weatherSelect;
let triggerButton;

let weathers = [
  { name: 'Sunny', desc: 'well-rested, a good week', base: 0, color: 'lightskyblue' },
  { name: 'Cloudy', desc: 'an average week, some stress', base: 1, color: 'lightsteelblue' },
  { name: 'Stormy', desc: 'a rough week, poor sleep, family stress', base: 2, color: 'slategray' }
];
let triggers = [
  { t: 'A friend cancels plans', i: 1 },
  { t: 'You get a lower grade than expected', i: 2 },
  { t: 'Someone bumps you in the hall', i: 1 },
  { t: 'You forget your homework', i: 2 }
];

let wIndex = 0;
let tIndex = 0;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  weatherSelect = createSelect();
  weatherSelect.parent(document.querySelector('main'));
  for (let i = 0; i < weathers.length; i++) weatherSelect.option(weathers[i].name, i);
  weatherSelect.changed(() => { wIndex = int(weatherSelect.value()); });
  triggerButton = createButton('Add a Trigger');
  triggerButton.mousePressed(() => { tIndex = (tIndex + 1) % triggers.length; });
  positionControls();
  describe('A character with a background "weather" — sunny, cloudy, or stormy — showing ' +
    'their ongoing situation. Adding a small trigger shows how the same trigger produces a ' +
    'bigger reaction on a stormy week than a sunny one.', LABEL);
}

function positionControls() {
  weatherSelect.position(10, drawHeight + 14);
  weatherSelect.size(110);
  triggerButton.position(140, drawHeight + 14);
}

function reactionSize() { return weathers[wIndex].base + triggers[tIndex].i; }

function draw() {
  updateCanvasSize();
  let w = weathers[wIndex];
  // weather-tinted background in the scene area
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Emotion Weather Map', canvasWidth / 2, 8);

  // scene (left)
  let sw = canvasWidth * 0.55;
  noStroke(); fill(w.color); rect(margin, 40, sw - margin, 200, 10);
  // weather icon
  push(); translate(sw - 50, 80);
  if (w.name === 'Sunny') { fill('gold'); noStroke(); circle(0, 0, 40); }
  else if (w.name === 'Cloudy') { fill('white'); noStroke(); ellipse(0, 0, 50, 30); }
  else { fill('dimgray'); noStroke(); ellipse(0, -4, 54, 30); stroke('gold'); strokeWeight(3); line(-6, 6, -12, 22); line(6, 6, 0, 24); }
  pop();
  // character
  let cx = margin + (sw - margin) * 0.4, cy = 170;
  stroke('burlywood'); strokeWeight(3); fill('navajowhite'); circle(cx, cy, 46);
  noStroke(); fill('sienna'); circle(cx - 10, cy - 4, 5); circle(cx + 10, cy - 4, 5);
  noFill(); stroke('sienna'); strokeWeight(2);
  let r = reactionSize();
  if (r <= 1) arc(cx, cy + 4, 20, 12, 0.1 * PI, 0.9 * PI); // small: content
  else if (r <= 2) line(cx - 8, cy + 8, cx + 8, cy + 8); // neutral
  else arc(cx, cy + 12, 20, 12, PI + 0.1 * PI, TWO_PI - 0.1 * PI); // upset
  noStroke(); fill('black'); textAlign(CENTER, TOP); textSize(12);
  text('Ongoing: ' + w.name + ' (' + w.desc + ')', margin + 4, 244, sw - margin - 8, 40);

  // trigger + reaction (right)
  let rx = sw + 6, rw = canvasWidth - rx - margin;
  fill('cornsilk'); stroke('goldenrod'); strokeWeight(1.5); rect(rx, 40, rw, 70, 8);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11); text('Trigger:', rx + 8, 46);
  fill('black'); textSize(13); text(triggers[tIndex].t, rx + 8, 62, rw - 16, 44);

  // reaction meter
  let my = 122;
  noStroke(); fill('navy'); textAlign(LEFT, TOP); textSize(12); text('Reaction size:', rx, my);
  let barY = my + 20, barW = rw, barH = 20;
  stroke('gray'); strokeWeight(1); fill('white'); rect(rx, barY, barW, barH, 4);
  let frac = constrain(r / 4, 0, 1);
  noStroke(); fill(r <= 1 ? 'seagreen' : (r <= 2 ? 'goldenrod' : 'indianred'));
  rect(rx, barY, barW * frac, barH, 4);
  fill('black'); textAlign(LEFT, TOP); textSize(13);
  let label = r <= 1 ? 'Small' : (r <= 2 ? 'Medium' : 'Big');
  text(label + ' reaction', rx, barY + barH + 6);

  // analysis
  fill('darkslateblue'); textSize(12);
  text('The same trigger can feel bigger on a stormy week. Both the ongoing situation and ' +
    'the trigger combine to shape the reaction.', rx, barY + barH + 30, rw, 90);
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
