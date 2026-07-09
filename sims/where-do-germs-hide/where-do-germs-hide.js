// Where Do Germs Hide? - MicroSim (click-to-reveal hotspot infographic)
// CANVAS_HEIGHT: 520
// Pre-K / Kindergarten, Remember (L1): children tap spots in a classroom scene where
// germs like to collect. Each correct tap reveals a friendly germ and a big infobox.
// Text is kept large for read-aloud use. Finding all six shows a celebration.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let resetButton;

// Positions are fractions of the scene box so the layout stays responsive.
let spots = [
  { tag: 'Hands', fx: 0.50, fy: 0.86,
    info: 'Hands touch everything all day — washing them is the best way to stop germs!' },
  { tag: 'Doorknob', fx: 0.90, fy: 0.46,
    info: 'Doorknobs are touched by many hands every day — a great place for germs to collect!' },
  { tag: 'Shared toys', fx: 0.16, fy: 0.80,
    info: 'Shared toys pass from hand to hand, so germs can hitch a ride along with them.' },
  { tag: 'Tissue', fx: 0.68, fy: 0.80,
    info: 'A used tissue is full of germs from a sneeze — toss it in the trash and wash up!' },
  { tag: 'Fountain', fx: 0.09, fy: 0.42,
    info: 'Many mouths and hands use the drinking fountain, so germs like to gather there.' },
  { tag: 'Desk', fx: 0.44, fy: 0.66,
    info: 'Desks get touched and leaned on all day — germs can hide right on the surface.' }
];

let selected = -1;
let pulse = 0;
let sceneY = 40, sceneH = 300;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  resetButton = createButton('Reset');
  resetButton.mousePressed(resetAll);

  positionControls();
  describe('A friendly classroom scene with six spots where germs hide: hands, a ' +
    'doorknob, shared toys, a tissue, a drinking fountain, and a desk. Tapping a ' +
    'spot reveals a cartoon germ and a big explanation, and counts how many spots ' +
    'have been found.', LABEL);
}

function positionControls() {
  resetButton.position(10, drawHeight + 10);
}

function draw() {
  updateCanvasSize();
  pulse += 0.06;

  fill('#eef6ff');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(24);
  text('Where Do Germs Hide?', canvasWidth / 2, 8);

  drawClassroom();
  drawHotspots();
  drawInfoStrip();
}

function drawClassroom() {
  noStroke();
  // back wall and floor
  fill('#fdf3d8');
  rect(0, sceneY, canvasWidth, sceneH * 0.6);
  fill('#f0d9b0');
  rect(0, sceneY + sceneH * 0.6, canvasWidth, sceneH * 0.4);

  // window
  fill('#bfe3ff');
  stroke('#8fbfe0');
  strokeWeight(2);
  rect(canvasWidth * 0.3, sceneY + 24, canvasWidth * 0.22, 60, 4);
  line(canvasWidth * 0.41, sceneY + 24, canvasWidth * 0.41, sceneY + 84);
  line(canvasWidth * 0.3, sceneY + 54, canvasWidth * 0.52, sceneY + 54);

  // door on the right
  noStroke();
  fill('#c98a52');
  rect(canvasWidth * 0.83, sceneY + 20, canvasWidth * 0.15, sceneH * 0.6, 3);

  // drinking fountain on the left
  fill('#c9ccd1');
  rect(canvasWidth * 0.05, sceneY + sceneH * 0.42, canvasWidth * 0.09, 40, 4);

  // a desk in the middle-foreground
  fill('#d9a066');
  rect(canvasWidth * 0.34, sceneY + sceneH * 0.62, canvasWidth * 0.24, 14, 3);
  fill('#b07a3a');
  rect(canvasWidth * 0.36, sceneY + sceneH * 0.62 + 14, 8, 40);
  rect(canvasWidth * 0.55, sceneY + sceneH * 0.62 + 14, 8, 40);

  // tissue box on the desk
  fill('#7ec8e3');
  rect(canvasWidth * 0.64, sceneY + sceneH * 0.62 - 16, 26, 16, 2);
  fill('white');
  triangle(canvasWidth * 0.64 + 13, sceneY + sceneH * 0.62 - 16,
           canvasWidth * 0.64 + 6, sceneY + sceneH * 0.62 - 28,
           canvasWidth * 0.64 + 20, sceneY + sceneH * 0.62 - 28);

  // toy bin lower left
  fill('#e57373');
  rect(canvasWidth * 0.10, sceneY + sceneH * 0.72, canvasWidth * 0.14, 42, 4);
  fill('#fdd835');
  circle(canvasWidth * 0.13, sceneY + sceneH * 0.72, 14);
  fill('#4fc3f7');
  circle(canvasWidth * 0.19, sceneY + sceneH * 0.72 + 4, 14);
}

function drawHotspots() {
  for (let i = 0; i < spots.length; i++) {
    let s = spots[i];
    let x = s.fx * canvasWidth;
    let y = sceneY + s.fy * sceneH;
    let r = 22;
    let found = !!s.found;
    let hover = dist(mouseX, mouseY, x, y) < r;

    if (found) {
      drawGerm(x, y);
      noStroke();
      fill('seagreen');
      textAlign(CENTER, TOP);
      textSize(14);
      text(s.tag, x - 45, y + r, 90, 20);
    } else {
      // faint pulsing gold invitation
      let a = map(sin(pulse), -1, 1, 60, 150);
      strokeWeight(hover ? 4 : 3);
      stroke(hover ? '#e0a000' : color(230, 190, 60, a));
      noFill();
      circle(x, y, r * 2 + (hover ? 0 : map(sin(pulse), -1, 1, 0, 6)));
      noStroke();
      fill(hover ? '#e0a000' : color(230, 190, 60, a));
      textAlign(CENTER, CENTER);
      textSize(20);
      text('?', x, y);
    }
  }
  cursor(overAnySpot() ? HAND : ARROW);
}

function drawGerm(x, y) {
  push();
  // green blob with little bumps
  noStroke();
  fill('#7cb342');
  circle(x, y, 30);
  fill('#8bc34a');
  for (let a = 0; a < TWO_PI; a += PI / 4) {
    circle(x + cos(a) * 15, y + sin(a) * 15, 9);
  }
  // face
  fill('white');
  circle(x - 5, y - 3, 8);
  circle(x + 5, y - 3, 8);
  fill('black');
  circle(x - 5, y - 3, 4);
  circle(x + 5, y - 3, 4);
  noFill();
  stroke('black');
  strokeWeight(1.5);
  arc(x, y + 5, 10, 8, 0, PI);
  pop();
}

function drawInfoStrip() {
  let found = countFound();
  let sy = drawHeight - 122;

  // running count
  noStroke();
  fill('#1a3a6c');
  textAlign(CENTER, TOP);
  textSize(20);
  text('You found ' + found + ' of ' + spots.length + ' germ spots!', canvasWidth / 2, sy - 4);

  // infobox
  let by = sy + 26;
  let bh = drawHeight - by - margin;
  fill('white');
  stroke('#8bc34a');
  strokeWeight(2);
  rect(margin, by, canvasWidth - 2 * margin, bh, 8);
  noStroke();
  textAlign(CENTER, CENTER);
  if (found === spots.length) {
    fill('seagreen');
    textSize(18);
    text('You found every germ hideout! Now let\'s learn how to wash them away.',
      margin + 12, by + 6, canvasWidth - 2 * margin - 24, bh - 12);
  } else if (selected >= 0) {
    fill('#2e5d1f');
    textSize(18);
    text(spots[selected].info, margin + 12, by + 6, canvasWidth - 2 * margin - 24, bh - 12);
  } else {
    fill('dimgray');
    textSize(18);
    text('Click the spots where germs like to hide!',
      margin + 12, by + 6, canvasWidth - 2 * margin - 24, bh - 12);
  }
}

function countFound() {
  let c = 0;
  for (let s of spots) if (s.found) c++;
  return c;
}

function overAnySpot() {
  for (let s of spots) {
    let x = s.fx * canvasWidth;
    let y = sceneY + s.fy * sceneH;
    if (dist(mouseX, mouseY, x, y) < 22) return true;
  }
  return false;
}

function mousePressed() {
  if (mouseY > drawHeight) return;
  for (let i = 0; i < spots.length; i++) {
    let x = spots[i].fx * canvasWidth;
    let y = sceneY + spots[i].fy * sceneH;
    if (dist(mouseX, mouseY, x, y) < 22) {
      spots[i].found = true;
      selected = i;
      return;
    }
  }
}

function resetAll() {
  for (let s of spots) s.found = false;
  selected = -1;
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
