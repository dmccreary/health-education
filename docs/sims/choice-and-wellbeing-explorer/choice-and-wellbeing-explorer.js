// Choice and Wellbeing Explorer - MicroSim (sliders + wellbeing gauge)
// CANVAS_HEIGHT: 487
// Grade 3, Understand (L2): students explain how everyday choices affect wellbeing by
// adjusting four sliders and watching a wellbeing meter respond. No single slider can
// max the meter — wellbeing comes from a combination of healthy choices.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 300;
let controlHeight = 185;
let canvasHeight = drawHeight + controlHeight;
let margin = 20;
let sliderLeftMargin = 250;
let defaultTextSize = 15;

let sleepSlider, activeSlider, talkSlider, quietSlider;
let resetButton;
let reasonText = 'Try moving a slider to see how each choice helps your wellbeing.';

let prev = { sleep: 7, active: 20, talk: 10, quiet: 10 };

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  sleepSlider = createSlider(4, 10, 7);
  activeSlider = createSlider(0, 60, 20, 5);
  talkSlider = createSlider(0, 30, 10, 5);
  quietSlider = createSlider(0, 30, 10, 5);

  for (let s of [sleepSlider, activeSlider, talkSlider, quietSlider]) {
    s.parent(document.querySelector('main'));
  }
  sleepSlider.input(() => reason('sleep', sleepSlider.value()));
  activeSlider.input(() => reason('active', activeSlider.value()));
  talkSlider.input(() => reason('talk', talkSlider.value()));
  quietSlider.input(() => reason('quiet', quietSlider.value()));

  resetButton = createButton('Reset to Example Day');
  resetButton.mousePressed(resetDay);
  resetButton.parent(document.querySelector('main'));

  layoutControls();
  describe('Four sliders — hours of sleep, active time, time talking with someone caring, ' +
    'and quiet screen-free time — control a semicircle wellbeing meter. Raising sliders ' +
    'moves the needle toward "Feeling Good"; no single slider maxes the meter alone.', LABEL);
}

function layoutControls() {
  sleepSlider.position(sliderLeftMargin, drawHeight + 12);
  activeSlider.position(sliderLeftMargin, drawHeight + 47);
  talkSlider.position(sliderLeftMargin, drawHeight + 82);
  quietSlider.position(sliderLeftMargin, drawHeight + 117);
  resizeSliders();
  resetButton.position(10, drawHeight + 152);
}

function resizeSliders() {
  let w = canvasWidth - sliderLeftMargin - margin;
  sleepSlider.size(w); activeSlider.size(w); talkSlider.size(w); quietSlider.size(w);
}

function reason(which, val) {
  let up = val >= prev[which];
  prev[which] = val;
  let msgs = {
    sleep: up ? 'More sleep helps your brain rest and reset.' : 'Too little sleep makes it harder to focus and feel good.',
    active: up ? 'Being active lifts your mood and energy.' : 'Less activity can leave you feeling sluggish.',
    talk: up ? 'Talking with someone caring helps you feel supported.' : 'Less connection can make you feel lonely.',
    quiet: up ? 'Quiet screen-free time helps your mind settle.' : 'Too much screen time can leave you restless.'
  };
  reasonText = msgs[which];
}

function wellbeing() {
  let sn = (sleepSlider.value() - 4) / 6;
  let an = activeSlider.value() / 60;
  let tn = talkSlider.value() / 30;
  let qn = quietSlider.value() / 30;
  return constrain(sn * 0.35 + an * 0.25 + tn * 0.20 + qn * 0.20, 0, 1);
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
  textSize(20);
  text('Choice and Wellbeing Explorer', canvasWidth / 2, 8);

  drawGauge();

  // explanation
  noStroke();
  fill('darkslateblue');
  textAlign(CENTER, TOP);
  textSize(14);
  text(reasonText, margin, 250, canvasWidth - margin * 2, 44);

  drawSliderLabels();
}

function drawGauge() {
  let cx = canvasWidth / 2, cy = 210, r = 96;
  // colored arc from red (left) to green (right)
  strokeWeight(20); noFill();
  let steps = 40;
  for (let i = 0; i < steps; i++) {
    let a0 = PI + (i / steps) * PI;
    let a1 = PI + ((i + 1) / steps) * PI;
    let t = i / steps;
    stroke(lerpColor(color('crimson'), color('seagreen'), t));
    arc(cx, cy, r * 2, r * 2, a0, a1);
  }
  // labels
  noStroke(); fill('crimson'); textAlign(LEFT, CENTER); textSize(12);
  text('Running on Empty', cx - r - 4, cy + 16);
  fill('seagreen'); textAlign(RIGHT, CENTER);
  text('Feeling Good', cx + r + 4, cy + 16);
  // needle
  let score = wellbeing();
  let a = PI + score * PI;
  stroke('black'); strokeWeight(4);
  line(cx, cy, cx + cos(a) * (r - 12), cy + sin(a) * (r - 12));
  noStroke(); fill('black'); circle(cx, cy, 12);
  // zone label
  let zone = score < 0.34 ? 'Running low' : (score < 0.6 ? 'Okay' : 'Feeling good');
  fill('dimgray'); textAlign(CENTER, TOP); textSize(13);
  text(zone, cx, cy + 24);
}

function drawSliderLabels() {
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(defaultTextSize);
  text('Sleep (hours): ' + sleepSlider.value(), 10, drawHeight + 20);
  text('Active (min): ' + activeSlider.value(), 10, drawHeight + 55);
  text('Talking (min): ' + talkSlider.value(), 10, drawHeight + 90);
  text('Quiet time (min): ' + quietSlider.value(), 10, drawHeight + 125);
}

function resetDay() {
  sleepSlider.value(7); activeSlider.value(20); talkSlider.value(10); quietSlider.value(10);
  prev = { sleep: 7, active: 20, talk: 10, quiet: 10 };
  reasonText = 'This is an example day. Move a slider to explore how choices add up.';
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
