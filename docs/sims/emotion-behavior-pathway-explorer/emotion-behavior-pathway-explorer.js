// Emotion-to-Behavior Pathway Explorer - MicroSim (trigger -> emotion -> two behaviors)
// CANVAS_HEIGHT: 442
// Grade 5, Understand (L2): students explain how a trigger leads to an emotion, and how
// that emotion can lead to two different behaviors depending on whether it is managed.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 390;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let triggerSelect;
let unmanagedButton;
let managedButton;

let cases = [
  { trig: 'Being left out of a group chat', emo: 'Hurt / Left Out',
    un: 'Send an angry message or leave them out back.', man: 'Take a breath, then calmly ask to be included.' },
  { trig: 'Doing well on a test', emo: 'Proud / Happy',
    un: 'Brag in a way that makes others feel bad.', man: 'Feel proud and encourage your friends too.' },
  { trig: 'An argument with a sibling', emo: 'Angry / Frustrated',
    un: 'Yell or slam a door.', man: 'Cool down first, then use an I-statement.' },
  { trig: 'Being picked last for a team', emo: 'Embarrassed / Sad',
    un: 'Refuse to play or put yourself down.', man: 'Notice the feeling, then try your best anyway.' },
  { trig: 'A sudden schedule change', emo: 'Anxious / Uneasy',
    un: 'Panic or complain loudly.', man: 'Ask questions and make a new plan.' },
  { trig: 'Unexpected good news', emo: 'Excited / Joyful',
    un: 'Get so hyper you can\'t focus.', man: 'Enjoy it and channel the energy well.' }
];

let idx = 0;
let showUn = false, showMan = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  triggerSelect = createSelect();
  triggerSelect.parent(document.querySelector('main'));
  for (let i = 0; i < cases.length; i++) triggerSelect.option(cases[i].trig, i);
  triggerSelect.changed(() => { idx = int(triggerSelect.value()); showUn = false; showMan = false; });
  unmanagedButton = createButton('Show Unmanaged Path');
  unmanagedButton.mousePressed(() => { showUn = true; });
  managedButton = createButton('Show Managed Path');
  managedButton.mousePressed(() => { showMan = true; });
  positionControls();
  describe('A left-to-right flow: a trigger situation leads to an emotion, which can lead ' +
    'to an unmanaged behavior or a managed behavior. A dropdown selects the trigger.', LABEL);
}

function positionControls() {
  triggerSelect.position(10, drawHeight + 14);
  triggerSelect.size(120);
  unmanagedButton.position(140, drawHeight + 14);
  managedButton.position(280, drawHeight + 14);
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Emotion-to-Behavior Pathway', canvasWidth / 2, 8);

  let c = cases[idx];
  // trigger card
  let tx = margin, tw = canvasWidth * 0.3, ty = 60, th = 90;
  drawNode(tx, ty, tw, th, 'lightcyan', 'cadetblue', 'Trigger', c.trig);
  // arrow
  drawArrow(tx + tw + 2, ty + th / 2, tx + tw + 22, ty + th / 2);
  // emotion node
  let ex = tx + tw + 24, ew = canvasWidth * 0.3;
  drawNode(ex, ty, ew, th, 'lavender', 'slateblue', 'Emotion', c.emo);
  // branch arrows to two behaviors
  let bx = ex + ew + 24;
  drawArrow(ex + ew + 2, ty + th / 2, bx - 2, ty + 40);
  drawArrow(ex + ew + 2, ty + th / 2, bx - 2, ty + 150);

  // behavior cards (right, stacked)
  let bw = canvasWidth - bx - margin;
  drawBehavior(bx, 175, bw, 70, 'Unmanaged Behavior', showUn ? c.un : '(click Show Unmanaged Path)', showUn, 'indianred');
  drawBehavior(bx, 255, bw, 70, 'Managed Behavior', showMan ? c.man : '(click Show Managed Path)', showMan, 'seagreen');

  // note
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
  text('The same emotion can lead to different behaviors — managing the emotion shapes the path.',
    margin, 340, canvasWidth - margin * 2, 44);
}

function drawNode(x, y, w, h, fillC, strokeC, label, txt) {
  strokeWeight(1.5); stroke(strokeC); fill(fillC); rect(x, y, w, h, 8);
  noStroke(); fill(strokeC); textAlign(CENTER, TOP); textSize(11); text(label, x + 4, y + 6, w - 8, 16);
  fill('black'); textSize(13); text(txt, x + 6, y + 26, w - 12, h - 32);
}

function drawBehavior(x, y, w, h, label, txt, shown, col) {
  strokeWeight(shown ? 2.5 : 1.5); stroke(col);
  fill(shown ? (col === 'seagreen' ? 'honeydew' : 'mistyrose') : 'white');
  rect(x, y, w, h, 8);
  noStroke(); fill(col); textAlign(LEFT, TOP); textSize(12); text(label, x + 8, y + 6);
  fill(shown ? 'black' : 'gray'); textSize(12); text(txt, x + 8, y + 24, w - 16, h - 30);
}

function drawArrow(x1, y1, x2, y2) {
  stroke('gray'); strokeWeight(2); line(x1, y1, x2, y2);
  let a = atan2(y2 - y1, x2 - x1);
  fill('gray'); noStroke();
  push(); translate(x2, y2); rotate(a); triangle(0, 0, -7, -4, -7, 4); pop();
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
