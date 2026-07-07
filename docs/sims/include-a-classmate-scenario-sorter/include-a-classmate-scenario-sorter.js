// Include-a-Classmate Scenario Sorter - MicroSim (choose the most inclusive response)
// CANVAS_HEIGHT: 472
// Grade 5, Apply (L3): students apply strategies for including and supporting others by
// choosing the most inclusive response to school scenarios.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 52;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let whyButton, nextButton;

// a = best index; opts = 3 responses; e = why
let deck = [
  { s: 'A new student is sitting alone at lunch.', opts: ['Invite them to sit with you', 'Ignore them and keep eating', 'Whisper about them to friends'], a: 0, e: 'Inviting someone in is the most inclusive choice.' },
  { s: 'Groups are forming for a project and one classmate is left out.', opts: ['Say "our group has room, join us"', 'Let them figure it out alone', 'Pick only your close friends'], a: 0, e: 'Making room for someone builds belonging.' },
  { s: 'A classmate uses a communication device to talk.', opts: ['Listen patiently and respond', 'Talk to someone else instead', 'Finish their sentences for them'], a: 0, e: 'Listening patiently respects how they communicate.' },
  { s: 'Teams are being picked and someone is always chosen last.', opts: ['Suggest mixing up the teams fairly', 'Pick the "best" players first', 'Laugh about who is last'], a: 0, e: 'Fair teams help everyone feel included.' },
  { s: 'A friend keeps leaving one kid out of the game.', opts: ['Say "let\'s all play together"', 'Go along to fit in', 'Join in leaving them out'], a: 0, e: 'Speaking up for inclusion is a supportive choice.' }
];

let idx = 0, picked = -1, showWhy = false;
let optRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));
  whyButton = createButton('Why This?'); whyButton.mousePressed(() => { if (picked >= 0) showWhy = true; });
  nextButton = createButton('Next Scenario'); nextButton.mousePressed(() => { idx = (idx + 1) % deck.length; picked = -1; showWhy = false; });
  positionControls();
  describe('A short inclusion scenario with three response choices. Students pick the most ' +
    'inclusive response and see why it supports belonging.', LABEL);
}
function positionControls() { whyButton.position(10, drawHeight + 12); nextButton.position(100, drawHeight + 12); }

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight); noStroke();
  fill('black'); textAlign(CENTER, TOP); textSize(17); text('Include a Classmate', canvasWidth / 2, 8);

  fill('lightcyan'); stroke('cadetblue'); strokeWeight(1.5); rect(margin, 40, canvasWidth - margin * 2, 72, 10);
  noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(11); text('Scenario ' + (idx + 1) + ' of ' + deck.length, margin + 12, 46);
  fill('black'); textSize(15); text(deck[idx].s, margin + 12, 64, canvasWidth - margin * 2 - 24, 46);

  optRects = [];
  let oy = 124, oh = 50, gap = 8;
  for (let i = 0; i < 3; i++) {
    let y = oy + i * (oh + gap);
    optRects.push({ x: margin, y: y, w: canvasWidth - margin * 2, h: oh, i: i });
    let hover = pointInRect(mouseX, mouseY, optRects[i]); let isA = deck[idx].a === i;
    strokeWeight(2); stroke('mediumpurple');
    if (picked < 0) fill(hover ? 'lavender' : 'white');
    else if (isA) { fill('honeydew'); stroke('seagreen'); strokeWeight(3); }
    else if (i === picked) { fill('mistyrose'); stroke('indianred'); }
    else fill('white');
    rect(margin, y, canvasWidth - margin * 2, oh, 8);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(13); text(deck[idx].opts[i], margin + 8, y, canvasWidth - margin * 2 - 16, oh);
  }
  cursor(picked < 0 && overAny() ? HAND : ARROW);

  let fy = oy + 3 * (oh + gap) + 4;
  noStroke(); textAlign(LEFT, TOP); textSize(13);
  if (picked < 0) { fill('dimgray'); text('Which response is the most inclusive? Click one.', margin, fy, canvasWidth - margin * 2, 40); }
  else { let ok = picked === deck[idx].a; fill(ok ? 'seagreen' : 'darkgoldenrod'); text((ok ? '✓ Great inclusive choice! ' : 'The most inclusive choice is highlighted. ') + (showWhy ? deck[idx].e : 'Press Why This? for the reason.'), margin, fy, canvasWidth - margin * 2, 50); }
}
function overAny() { for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) return true; return false; }
function pointInRect(px, py, r) { return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h; }
function mousePressed() { if (picked >= 0) return; for (let r of optRects) if (pointInRect(mouseX, mouseY, r)) { picked = r.i; return; } }
function windowResized() { updateCanvasSize(); resizeCanvas(canvasWidth, canvasHeight); positionControls(); }
function updateCanvasSize() { const c = document.querySelector('main').getBoundingClientRect(); containerWidth = Math.floor(c.width); canvasWidth = containerWidth; }
