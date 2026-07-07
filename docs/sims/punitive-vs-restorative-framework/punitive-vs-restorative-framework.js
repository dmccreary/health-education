// Punitive vs. Restorative Justice Framework Comparison - MicroSim
// CANVAS_HEIGHT: 592
// Grades 9-12, Analyze (L4): students differentiate the guiding questions,
// participants, processes, and goals of a punitive model from an Indigenous
// restorative model, and examine talking circles and peacemaking circles.
// Presented respectfully; the restorative model is described by its own practices.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 528;
let controlHeight = 64;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let talkingButton;
let peacemakingButton;
let scenarioButton;

// Comparison table content. rows[i] = {label, punitive, restorative, detail}
let rows = [
  {
    label: 'Guiding\nQuestion',
    punitive: 'What rule was broken, and what punishment fits the offense?',
    restorative: 'Who was harmed, and what do they need to make things right?',
    detail: 'The starting question shapes everything that follows. A punitive model ' +
      'begins with the rule and the offender. A restorative model begins with the ' +
      'harm and the people affected by it.'
  },
  {
    label: 'Who\nParticipates',
    punitive: 'A single authority (such as a principal or judge) decides the outcome.',
    restorative: 'The affected community, including the person harmed and the person responsible.',
    detail: 'Punitive processes concentrate the decision in one authority figure. ' +
      'Restorative processes invite everyone touched by the harm to take part, so ' +
      'those most affected have a voice in the outcome.'
  },
  {
    label: 'Process',
    punitive: 'A hearing or disciplinary process determines guilt and assigns a penalty.',
    restorative: 'A talking circle or peacemaking circle where each person speaks and is heard.',
    detail: 'A disciplinary hearing is adversarial and focused on establishing fault. ' +
      'A circle is dialogue-based: people sit together, take turns speaking honestly, ' +
      'and listen to how the harm affected one another.'
  },
  {
    label: 'Goal',
    punitive: 'Punishment that is proportional to the rule that was broken.',
    restorative: 'Repair of the harm and reintegration of everyone back into the community.',
    detail: 'The punitive goal is a penalty that matches the offense. The restorative ' +
      'goal is to repair relationships and welcome both the harmed person and the ' +
      'responsible person back into the community.'
  }
];

// Practice descriptions (Stage 2)
let practices = {
  talking: {
    title: 'Talking Circles',
    body: 'In a talking circle, participants sit in a circle as equals. A talking ' +
      'piece is passed around, and only the person holding it may speak. Everyone ' +
      'else listens without interrupting. This structure gives each voice equal ' +
      'weight, slows the conversation, and helps people share honestly and hear one ' +
      'another. Talking circles are used to build understanding and address harm ' +
      'through dialogue rather than debate.'
  },
  peacemaking: {
    title: 'Peacemaking Circles',
    body: 'Peacemaking circles come from Indigenous justice traditions and are often ' +
      'guided by a keeper who helps hold a respectful space. The circle brings ' +
      'together the person harmed, the person responsible, and community members. ' +
      'Together they name the harm, its effects, and what is needed to make things ' +
      'right. The aim is a shared agreement that repairs relationships and restores ' +
      'balance to the community.'
  }
};

// Scenario applied in Stage 3
let scenario = 'Two students, Maya and Devon, get into a shouting match in the hallway ' +
  'after Devon shares a private message Maya sent. A teacher separates them.';
let scenarioPunitive = 'Asks: which student broke the conduct rule? The dean reviews ' +
  'what happened, assigns detention to whoever is found at fault, and the matter is ' +
  'considered closed once the penalty is served.';
let scenarioRestorative = 'Asks: who was hurt, and what do they need? A facilitator ' +
  'holds a circle with Maya, Devon, and a support person. Each speaks, the harm from ' +
  'sharing the message is named, and they agree on steps to repair trust.';

// View state: 'table' (default), 'row' (a row is selected), 'talking', 'peacemaking', 'scenario'
let view = 'table';
let selectedRow = -1;

// Hit rects recomputed each frame
let rowLabelRects = [];   // {x,y,w,h,idx}
let colHeaderX = { punX: 0, punW: 0, resX: 0, resW: 0 };

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  talkingButton = createButton('Talking Circles');
  talkingButton.mousePressed(function () { setView('talking'); });
  talkingButton.parent(document.querySelector('main'));

  peacemakingButton = createButton('Peacemaking Circles');
  peacemakingButton.mousePressed(function () { setView('peacemaking'); });
  peacemakingButton.parent(document.querySelector('main'));

  scenarioButton = createButton('Apply to Scenario');
  scenarioButton.mousePressed(function () { setView('scenario'); });
  scenarioButton.parent(document.querySelector('main'));

  positionControls();
  describe('A comparison table contrasts a Punitive justice model with an Indigenous ' +
    'Restorative model across four rows: guiding question, who participates, process, ' +
    'and goal. Students click a row label for a deeper explanation, click buttons to ' +
    'read about talking circles and peacemaking circles, and apply both models to a ' +
    'sample student conflict.', LABEL);
}

function positionControls() {
  let y = drawHeight + 16;
  talkingButton.position(margin, y);
  peacemakingButton.position(margin + 122, y);
  scenarioButton.position(margin + 274, y);
}

function setView(v) {
  // Toggle off if the same practice/scenario button is pressed again
  if (view === v) {
    view = 'table';
    selectedRow = -1;
  } else {
    view = v;
    selectedRow = -1;
  }
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
  textSize(18);
  text('Punitive vs. Restorative Justice', canvasWidth / 2, 8);

  drawTable();
  drawInfobox();

  cursor(overClickable() ? HAND : ARROW);
}

function drawTable() {
  let labelW = 78;
  let gap = 8;
  let tableX = margin;
  let tableTop = 34;
  let usableW = canvasWidth - margin * 2 - labelW - gap * 2;
  let colW = usableW / 2;
  let punX = tableX + labelW + gap;
  let resX = punX + colW + gap;
  colHeaderX = { punX: punX, punW: colW, resX: resX, resW: colW };

  // Column headers
  let headH = 30;
  // Punitive header
  fill('indianred');
  noStroke();
  rect(punX, tableTop, colW, headH, 6, 6, 0, 0);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(13);
  text('Punitive Model', punX + 3, tableTop, colW - 6, headH);
  // Restorative header
  fill('seagreen');
  rect(resX, tableTop, colW, headH, 6, 6, 0, 0);
  fill('white');
  textAlign(CENTER, CENTER);
  textSize(13);
  text('Indigenous\nRestorative Model', resX + 3, tableTop + 1, colW - 6, headH - 2);

  // Rows
  rowLabelRects = [];
  let rowTop = tableTop + headH + 6;
  let rowGap = 6;
  let nRows = rows.length;
  let rowH = 66;

  for (let i = 0; i < nRows; i++) {
    let ry = rowTop + i * (rowH + rowGap);
    drawRow(i, tableX, ry, labelW, punX, resX, colW, rowH);
  }
}

function drawRow(i, labelX, ry, labelW, punX, resX, colW, rowH) {
  let r = rows[i];
  let selected = (view === 'row' && selectedRow === i);

  // Row label (clickable)
  let hover = pointInRect(mouseX, mouseY, { x: labelX, y: ry, w: labelW, h: rowH });
  fill(selected ? 'steelblue' : (hover ? 'lightsteelblue' : 'gainsboro'));
  stroke(selected ? 'navy' : 'silver');
  strokeWeight(selected ? 2 : 1);
  rect(labelX, ry, labelW, rowH, 6);
  noStroke();
  fill(selected ? 'white' : 'navy');
  textAlign(CENTER, CENTER);
  textSize(12);
  text(r.label, labelX + 2, ry, labelW - 4, rowH);
  rowLabelRects.push({ x: labelX, y: ry, w: labelW, h: rowH, idx: i });

  // Punitive cell
  fill(selected ? 'mistyrose' : 'white');
  stroke('lightpink');
  strokeWeight(1);
  rect(punX, ry, colW, rowH, 4);
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(11);
  text(r.punitive, punX + 7, ry + 6, colW - 14, rowH - 12);

  // Restorative cell
  fill(selected ? 'honeydew' : 'white');
  stroke('darkseagreen');
  strokeWeight(1);
  rect(resX, ry, colW, rowH, 4);
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(11);
  text(r.restorative, resX + 7, ry + 6, colW - 14, rowH - 12);
}

function drawInfobox() {
  let boxX = margin;
  let boxW = canvasWidth - margin * 2;
  let boxTop = 34 + 30 + 6 + 4 * 66 + 3 * 6 + 10; // below table
  let boxH = drawHeight - boxTop - 10;
  if (boxH < 40) return;

  if (view === 'table') {
    // Hint prompt
    fill('lavender');
    stroke('mediumpurple');
    strokeWeight(1);
    rect(boxX, boxTop, boxW, boxH, 8);
    noStroke();
    fill('indigo');
    textAlign(CENTER, CENTER);
    textSize(12.5);
    text('Click any row label on the left for a deeper explanation, use the buttons ' +
      'below to read about each circle practice, or apply both models to a real ' +
      'student conflict.', boxX + 14, boxTop, boxW - 28, boxH);
    return;
  }

  if (view === 'row') {
    let r = rows[selectedRow];
    fill('aliceblue');
    stroke('steelblue');
    strokeWeight(1.5);
    rect(boxX, boxTop, boxW, boxH, 8);
    noStroke();
    fill('navy');
    textAlign(LEFT, TOP);
    textSize(13);
    let heading = r.label.replace('\n', ' ');
    text(heading, boxX + 12, boxTop + 8);
    fill('black');
    textSize(12);
    text(r.detail, boxX + 12, boxTop + 30, boxW - 24, boxH - 38);
    return;
  }

  if (view === 'talking' || view === 'peacemaking') {
    let p = view === 'talking' ? practices.talking : practices.peacemaking;
    fill('honeydew');
    stroke('seagreen');
    strokeWeight(1.5);
    rect(boxX, boxTop, boxW, boxH, 8);
    noStroke();
    fill('darkgreen');
    textAlign(LEFT, TOP);
    textSize(13);
    text(p.title, boxX + 12, boxTop + 8);
    fill('black');
    textSize(12);
    text(p.body, boxX + 12, boxTop + 30, boxW - 24, boxH - 38);
    return;
  }

  if (view === 'scenario') {
    drawScenarioBox(boxX, boxTop, boxW, boxH);
  }
}

function drawScenarioBox(x, y, w, h) {
  // Outer container
  fill('cornsilk');
  stroke('goldenrod');
  strokeWeight(1.5);
  rect(x, y, w, h, 8);
  noStroke();

  // Scenario prompt
  fill('saddlebrown');
  textAlign(LEFT, TOP);
  textSize(12);
  text('The conflict:', x + 12, y + 8);
  fill('black');
  textSize(11.5);
  let promptH = 40;
  text(scenario, x + 12, y + 24, w - 24, promptH);

  // Two side-by-side model responses
  let respTop = y + 24 + promptH + 4;
  let respH = y + h - respTop - 10;
  let gap = 10;
  let colW = (w - 24 - gap) / 2;
  let leftX = x + 12;
  let rightX = leftX + colW + gap;

  // Punitive response
  fill('white');
  stroke('indianred');
  strokeWeight(1);
  rect(leftX, respTop, colW, respH, 6);
  noStroke();
  fill('indianred');
  textAlign(LEFT, TOP);
  textSize(11.5);
  text('Punitive model', leftX + 8, respTop + 6);
  fill('black');
  textSize(10.5);
  text(scenarioPunitive, leftX + 8, respTop + 24, colW - 16, respH - 30);

  // Restorative response
  fill('white');
  stroke('seagreen');
  strokeWeight(1);
  rect(rightX, respTop, colW, respH, 6);
  noStroke();
  fill('seagreen');
  textAlign(LEFT, TOP);
  textSize(11.5);
  text('Restorative model', rightX + 8, respTop + 6);
  fill('black');
  textSize(10.5);
  text(scenarioRestorative, rightX + 8, respTop + 24, colW - 16, respH - 30);
}

function overClickable() {
  for (let r of rowLabelRects) {
    if (pointInRect(mouseX, mouseY, r)) return true;
  }
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  for (let r of rowLabelRects) {
    if (pointInRect(mouseX, mouseY, r)) {
      if (view === 'row' && selectedRow === r.idx) {
        // toggle off
        view = 'table';
        selectedRow = -1;
      } else {
        view = 'row';
        selectedRow = r.idx;
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
  const c = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(c.width);
  canvasWidth = containerWidth;
}
