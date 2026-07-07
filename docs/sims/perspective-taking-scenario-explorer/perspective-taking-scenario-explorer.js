// Perspective-Taking Scenario Explorer - MicroSim (click-to-reveal, two perspectives + empathy)
// CANVAS_HEIGHT: 512
// Grade 6-8, Understand (L2): students read an everyday relationship scenario, reveal each
// character's likely feelings and reasons, then unlock a modeled empathetic response after
// viewing both viewpoints. Non-crisis situations only.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let viewAButton, viewBButton, empathyButton, newButton;

let scenarios = [
  {
    situation: 'Maya and Jordan planned to study together after school. An hour before, Jordan texts that he cannot make it and does not say why.',
    a: { name: 'Maya', color: 'steelblue',
      feelings: 'Maya feels let down and a little hurt.',
      reasons: 'She cleared her afternoon and was counting on the help. The short text with no reason makes her wonder if Jordan even cares.' },
    b: { name: 'Jordan', color: 'seagreen',
      feelings: 'Jordan feels stressed and embarrassed.',
      reasons: 'A family problem came up suddenly and he had to help at home. He kept the text short because he was rushing and did not want to over-share.' },
    empathy: 'Maya could say: "No worries about today. Is everything okay? We can pick another time whenever works for you." This checks in on Jordan without blame and keeps the door open.'
  },
  {
    situation: 'Sam posts about a weekend hangout with two friends. Riley was not invited and sees the photos online.',
    a: { name: 'Riley', color: 'steelblue',
      feelings: 'Riley feels left out and hurt.',
      reasons: 'Seeing the photos makes it feel like the friendship matters less to the others. Riley wonders if they did something wrong.' },
    b: { name: 'Sam', color: 'seagreen',
      feelings: 'Sam feels relaxed and unaware.',
      reasons: 'The hangout came together at the last minute with kids who live nearby. Sam did not think about how the post would look to Riley.' },
    empathy: 'Riley could say: "That looked fun! I would love to be included next time." Naming the wish calmly, instead of assuming the worst, invites Sam to plan Riley in.'
  },
  {
    situation: 'During a group project, Alex does most of the talking and makes most of the decisions. Taylor gets quiet and stops offering ideas.',
    a: { name: 'Taylor', color: 'steelblue',
      feelings: 'Taylor feels overlooked and frustrated.',
      reasons: 'Every idea Taylor starts gets talked over, so it seems easier to stop trying than to keep getting cut off.' },
    b: { name: 'Alex', color: 'seagreen',
      feelings: 'Alex feels focused and a bit anxious.',
      reasons: 'Alex is worried about the deadline and jumps in to keep things moving, not realizing it leaves little room for others.' },
    empathy: 'Alex could pause and say: "Taylor, what do you think we should do next? I want your ideas in this." Making space and asking directly helps a quieter partner rejoin.'
  },
  {
    situation: 'Chris borrowed Dev\'s headphones last week and still has not returned them. Dev keeps noticing they are gone.',
    a: { name: 'Dev', color: 'steelblue',
      feelings: 'Dev feels annoyed and unsure.',
      reasons: 'Dev needs the headphones back but does not want to seem cheap or start an argument over asking.' },
    b: { name: 'Chris', color: 'seagreen',
      feelings: 'Chris feels forgetful, not uncaring.',
      reasons: 'Chris meant to return them but they got buried in a backpack. It simply slipped their mind, with no bad intent.' },
    empathy: 'Dev could say: "Hey, no rush, but could you bring my headphones tomorrow? I need them for the bus." A friendly, specific reminder solves it without accusing Chris.'
  },
  {
    situation: 'Priya waves and says hi in the hallway. Noah walks past without responding, looking down at the floor.',
    a: { name: 'Priya', color: 'steelblue',
      feelings: 'Priya feels ignored and second-guesses herself.',
      reasons: 'Being walked past in front of others stings, and Priya wonders if Noah is upset with her.' },
    b: { name: 'Noah', color: 'seagreen',
      feelings: 'Noah feels distracted and low.',
      reasons: 'Noah just got a hard grade back and was lost in thought. He never even noticed Priya waving.' },
    empathy: 'Priya could check in later: "Hey, I said hi earlier. You seemed down. Are you doing okay?" Assuming a reason beyond herself lets Priya respond with care, not hurt.'
  }
];

let current = 0;
let viewed = { a: false, b: false };
let showing = 'none';       // 'none' | 'a' | 'b' | 'empathy'

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  viewABtnMake();
  viewBBtnMake();

  empathyButton = createButton('What Would Empathy Look Like Here?');
  empathyButton.parent(document.querySelector('main'));
  empathyButton.mousePressed(showEmpathy);

  newButton = createButton('New Scenario');
  newButton.parent(document.querySelector('main'));
  newButton.mousePressed(nextScenario);

  layoutControls();
  syncButtons();
  describe('An everyday middle-school scenario is shown. Two buttons reveal each character\'s ' +
    'feelings and reasons. After both viewpoints are viewed, a third button reveals a modeled ' +
    'empathetic response. A New Scenario button cycles through five non-crisis situations.', LABEL);
}

function viewABtnMake() {
  viewAButton = createButton('See It From ' + scenarios[current].a.name + '’s View');
  viewAButton.parent(document.querySelector('main'));
  viewAButton.mousePressed(() => showPerspective('a'));
}

function viewBBtnMake() {
  viewBButton = createButton('See It From ' + scenarios[current].b.name + '’s View');
  viewBButton.parent(document.querySelector('main'));
  viewBButton.mousePressed(() => showPerspective('b'));
}

function layoutControls() {
  // Two perspective buttons on a row just below the draw area, empathy + new below.
  let half = canvasWidth / 2;
  viewAButton.position(margin, drawHeight + 9);
  viewBButton.position(half + 4, drawHeight + 9);
  empathyButton.position(margin, drawHeight + 37);
  newButton.position(canvasWidth - 128, drawHeight + 37);
}

function showPerspective(which) {
  viewed[which] = true;
  showing = which;
  syncButtons();
}

function showEmpathy() {
  if (viewed.a && viewed.b) {
    showing = 'empathy';
    syncButtons();
  }
}

function nextScenario() {
  current = (current + 1) % scenarios.length;
  viewed = { a: false, b: false };
  showing = 'none';
  // Rebuild perspective button labels for the new character names.
  viewAButton.html('See It From ' + scenarios[current].a.name + '’s View');
  viewBButton.html('See It From ' + scenarios[current].b.name + '’s View');
  syncButtons();
}

function syncButtons() {
  let ready = viewed.a && viewed.b;
  if (ready) {
    empathyButton.removeAttribute('disabled');
    empathyButton.style('opacity', '1');
    empathyButton.style('cursor', 'pointer');
  } else {
    empathyButton.attribute('disabled', '');
    empathyButton.style('opacity', '0.5');
    empathyButton.style('cursor', 'not-allowed');
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

  let sc = scenarios[current];

  // Title
  fill('navy');
  textAlign(CENTER, TOP);
  textSize(19);
  text('Perspective-Taking Explorer', canvasWidth / 2, 10);

  // Scenario card
  let cardX = margin;
  let cardY = 38;
  let cardW = canvasWidth - margin * 2;
  let cardH = 100;
  fill('white');
  stroke('lightsteelblue');
  strokeWeight(1.5);
  rect(cardX, cardY, cardW, cardH, 8);
  noStroke();
  fill('dimgray');
  textAlign(LEFT, TOP);
  textSize(12);
  text('THE SITUATION', cardX + 12, cardY + 8);
  fill('black');
  textSize(14);
  text(sc.situation, cardX + 12, cardY + 26, cardW - 24, cardH - 34);

  // Progress strip (which viewpoints have been opened)
  let progY = cardY + cardH + 8;
  drawProgress(sc, canvasWidth / 2, progY);

  // Reveal panel
  let panY = progY + 24;
  let panH = drawHeight - panY - 12;
  drawRevealPanel(sc, cardX, panY, cardW, panH);
}

function drawRevealPanel(sc, x, y, w, h) {
  if (showing === 'none') {
    // Prompt + progress dots
    fill('white');
    stroke('gainsboro');
    strokeWeight(1.5);
    rect(x, y, w, h, 8);
    noStroke();
    fill('slategray');
    textAlign(CENTER, CENTER);
    textSize(15);
    text('Tap a button below to see how each person might feel.\n' +
         'View both viewpoints to unlock the empathy example.',
         x + 14, y + 14, w - 28, h - 28);
    return;
  }

  if (showing === 'empathy') {
    fill('cornsilk');
    stroke('goldenrod');
    strokeWeight(2);
    rect(x, y, w, h, 8);
    noStroke();
    fill('darkgoldenrod');
    textAlign(LEFT, TOP);
    textSize(13);
    text('WHAT EMPATHY COULD LOOK LIKE', x + 14, y + 12);
    fill('black');
    textSize(14);
    text(sc.empathy, x + 14, y + 34, w - 28, h - 44);
    return;
  }

  // A single character's perspective
  let ch = showing === 'a' ? sc.a : sc.b;
  fill('white');
  stroke(ch.color);
  strokeWeight(2);
  rect(x, y, w, h, 8);
  noStroke();

  // Colored header band with the name
  fill(ch.color);
  rect(x, y, w, 30, 8, 8, 0, 0);
  fill('white');
  textAlign(LEFT, CENTER);
  textSize(14);
  text(ch.name + '’s View', x + 14, y + 15);

  fill(ch.color);
  textAlign(LEFT, TOP);
  textSize(13);
  text('FEELING', x + 14, y + 40);
  fill('black');
  textSize(14);
  text(ch.feelings, x + 14, y + 58, w - 28, 38);

  fill(ch.color);
  textSize(13);
  text('WHY', x + 14, y + 100);
  fill('black');
  textSize(14);
  text(ch.reasons, x + 14, y + 118, w - 28, h - 128);
}

function drawProgress(sc, cx, y) {
  // Single centered line showing which viewpoints have been opened.
  noStroke();
  textSize(12);
  let la = (viewed.a ? '✓ ' : '○ ') + sc.a.name;
  let lb = (viewed.b ? '✓ ' : '○ ') + sc.b.name;
  let sep = '     ';
  textAlign(RIGHT, TOP);
  fill(viewed.a ? sc.a.color : 'silver');
  text(la, cx - textWidth(sep) / 2, y);
  textAlign(LEFT, TOP);
  fill(viewed.b ? sc.b.color : 'silver');
  text(lb, cx + textWidth(sep) / 2, y);
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
