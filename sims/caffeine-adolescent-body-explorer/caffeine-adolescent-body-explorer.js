// Caffeine and the Adolescent Body Explorer - MicroSim (hotspots + sleep slider)
// CANVAS_HEIGHT: 435
// Grades 6-8, Understand (L2): students explain how caffeine affects four body systems
// differently in adolescents than adults. Includes a bedtime-timing sleep slider.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 385;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let sliderLeftMargin = 220;

let bedtimeSlider;

let spots = [
  { key: 'Brain', dx: 0, dy: -150, r: 30,
    txt: 'Nervous system & sleep: caffeine blocks adenosine, the chemical that makes you sleepy, so you feel alert. But caffeine even 6 hours before bed still lowers sleep quality.' },
  { key: 'Heart', dx: -14, dy: -70, r: 28,
    txt: 'Cardiovascular: caffeine raises heart rate and blood pressure. In energy drinks, added stimulants can compound this effect.' },
  { key: 'Stomach', dx: 8, dy: 0, r: 28,
    txt: 'Absorption & timing: caffeine is absorbed through the stomach and can take many hours to wear off — which is why afternoon caffeine lingers into the night.' },
  { key: 'Mood', dx: 64, dy: -150, r: 26,
    txt: 'Mood: too much caffeine can cause anxiety, jitteriness, and a crash later. Teens are often more sensitive than adults at the same dose.' }
];

let selected = 0; // brain selected by default so the slider is meaningful
let spotScreen = {};

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  bedtimeSlider = createSlider(0, 10, 3, 1);
  bedtimeSlider.parent(document.querySelector('main'));
  layoutControls();
  describe('A body outline with four hotspots — brain, heart, stomach, and mood — for ' +
    'how caffeine affects each system. A "Hours Before Bedtime" slider shows how caffeine ' +
    'timing lowers sleep quality, with teens more sensitive than adults.', LABEL);
}

function layoutControls() {
  bedtimeSlider.position(sliderLeftMargin, drawHeight + 14);
  bedtimeSlider.size(canvasWidth - sliderLeftMargin - margin);
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
  textSize(18);
  text('Caffeine and the Adolescent Body', canvasWidth / 2, 8);

  let fx = canvasWidth * 0.24, baseY = 250;
  drawSilhouette(fx, baseY);
  drawSpots(fx, baseY);
  drawPanel();
  drawSliderLabel();
}

function drawSilhouette(fx, baseY) {
  noStroke(); fill('lightgray');
  circle(fx, baseY - 180, 52);
  rect(fx - 8, baseY - 156, 16, 16);
  rect(fx - 40, baseY - 142, 80, 130, 20);
  rect(fx - 62, baseY - 138, 20, 96, 10);
  rect(fx + 42, baseY - 138, 20, 96, 10);
  rect(fx - 34, baseY - 16, 26, 96, 10);
  rect(fx + 8, baseY - 16, 26, 96, 10);
}

function drawSpots(fx, baseY) {
  spotScreen = {};
  for (let i = 0; i < spots.length; i++) {
    let x = fx + spots[i].dx, y = baseY + spots[i].dy;
    spotScreen[i] = { x: x, y: y, r: spots[i].r };
    let sel = selected === i;
    let hover = dist(mouseX, mouseY, x, y) < spots[i].r;
    strokeWeight(sel ? 3 : 2);
    stroke(sel ? 'saddlebrown' : 'slategray');
    fill(sel ? 'burlywood' : (hover ? 'wheat' : color(255, 255, 255, 210)));
    circle(x, y, spots[i].r * 2);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(11);
    text(spots[i].key, x, y);
  }
  cursor(overAnySpot() ? HAND : ARROW);
}

function drawPanel() {
  let px = canvasWidth * 0.5, pw = canvasWidth - px - margin, py = 40, ph = drawHeight - py - 12;
  fill('white'); stroke('silver'); strokeWeight(1);
  rect(px, py, pw, ph, 8);
  noStroke(); fill('sienna'); textAlign(LEFT, TOP); textSize(14);
  text(spots[selected].key, px + 10, py + 8);
  fill('black'); textSize(12);
  text(spots[selected].txt, px + 10, py + 30, pw - 20, 130);

  // sleep-quality bar (only meaningful for brain)
  if (selected === 0) {
    let hours = bedtimeSlider.value();
    let quality = Math.round(map(hours, 0, 10, 45, 95));
    let by = py + 168;
    fill('navy'); textSize(12);
    text('Sleep quality if caffeine is ' + hours + 'h before bed:', px + 10, by, pw - 20, 32);
    let barY = by + 32, barW = pw - 20;
    stroke('gray'); strokeWeight(1); fill('white'); rect(px + 10, barY, barW, 16, 4);
    noStroke(); fill(quality >= 80 ? 'seagreen' : (quality >= 60 ? 'goldenrod' : 'indianred'));
    rect(px + 10, barY, barW * quality / 100, 16, 4);
    fill('black'); textAlign(LEFT, TOP); textSize(11);
    text(quality + '% — even 6h before bed still reduces sleep.', px + 10, barY + 20, pw - 20, 30);
  } else {
    fill('dimgray'); textSize(11); textAlign(LEFT, TOP);
    text('Tip: click the Brain hotspot to use the bedtime slider below.', px + 10, py + ph - 40, pw - 20, 34);
  }
}

function drawSliderLabel() {
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(14);
  text('Hours Before Bedtime: ' + bedtimeSlider.value(), 10, drawHeight + 22);
}

function overAnySpot() {
  for (let i in spotScreen) { let s = spotScreen[i]; if (dist(mouseX, mouseY, s.x, s.y) < s.r) return true; }
  return false;
}

function mousePressed() {
  for (let i = 0; i < spots.length; i++) {
    let s = spotScreen[i];
    if (s && dist(mouseX, mouseY, s.x, s.y) < s.r) { selected = i; return; }
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  layoutControls();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
