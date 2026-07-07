// My Personal Space Bubble - MicroSim (drag a friend near, watch the bubble, practice a boundary sentence)
// CANVAS_HEIGHT: 520
// Grade 2, Apply (L3): students adjust a personal-space "bubble" around a character,
// drag a second figure closer or farther, and practice a boundary sentence per scenario.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 420;
let controlHeight = 100;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;
let sliderLeftMargin = 178;

let bubbleSlider;
let sentenceButton;
let nextButton;
let resetButton;

// Scenarios: each has a short label, a comfortable-distance boundary sentence,
// and a crowded prompt shown when the friend is too close.
let scenarios = [
  { label: 'A classmate you just met',
    sentence: 'Please give me a little space. I like room when we talk.' },
  { label: 'Your best friend',
    sentence: 'Can we sit closer? I feel comfy with you.' },
  { label: 'Someone offering a high-five',
    sentence: 'Sure, a high-five is okay! Then I will step back.' }
];

let sIndex = 0;
let friendPos;              // {x, y} of the draggable friend
let dragging = false;
let showSentence = false;
let selfCX, selfCY;         // center character position
let friendR = 30;          // friend tap radius

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  bubbleSlider = createSlider(0, 2, 1, 1); // 0 small, 1 medium, 2 large
  bubbleSlider.parent(document.querySelector('main'));

  sentenceButton = createButton('Try a Boundary Sentence');
  sentenceButton.parent(document.querySelector('main'));
  sentenceButton.mousePressed(sayaSentence);

  nextButton = createButton('Next Scenario');
  nextButton.parent(document.querySelector('main'));
  nextButton.mousePressed(nextScenario);

  resetButton = createButton('Reset');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(resetScene);

  resetFriend();
  positionControls();
  describe('A friendly character stands in the middle with a soft circle around them ' +
    'showing personal space. A second figure can be dragged closer or farther. The ' +
    'bubble turns yellow when the figure is inside it and green when there is enough ' +
    'space. A slider changes the bubble size and a button shows a boundary sentence.', LABEL);
}

function positionControls() {
  // Row 1: bubble-size slider (label drawn on canvas to its left)
  bubbleSlider.position(sliderLeftMargin, drawHeight + 12);
  bubbleSlider.size(canvasWidth - sliderLeftMargin - margin);
  // Row 2: the boundary-sentence button
  sentenceButton.position(margin, drawHeight + 44);
  // Row 3: Next Scenario + Reset side by side
  nextButton.position(margin, drawHeight + 74);
  resetButton.position(margin + 150, drawHeight + 74);
}

function bubbleRadius() {
  let sizes = [70, 100, 130];
  return sizes[bubbleSlider.value()];
}

function resetFriend() {
  // start at a comfortable distance to the right of the character
  friendPos = { x: min(canvasWidth - 60, canvasWidth * 0.72), y: 235 };
}

function resetScene() {
  bubbleSlider.value(1);
  showSentence = false;
  resetFriend();
}

function nextScenario() {
  sIndex = (sIndex + 1) % scenarios.length;
  showSentence = false;
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
  fill('black');
  textAlign(CENTER, TOP);
  textSize(24);
  text('My Personal Space Bubble', canvasWidth / 2, 8);

  // Scenario banner
  fill('lightyellow'); stroke('goldenrod'); strokeWeight(1.5);
  rect(margin, 42, canvasWidth - margin * 2, 40, 10);
  noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(17);
  text(scenarios[sIndex].label, margin + 8, 62, canvasWidth - margin * 2 - 16, 36);

  // Character position
  selfCX = canvasWidth / 2;
  selfCY = 235;

  // Distance and comfort
  let d = dist(selfCX, selfCY, friendPos.x, friendPos.y);
  let r = bubbleRadius();
  let crowded = d < r + 6; // friend inside the bubble edge

  // Bubble (soft translucent circle)
  push();
  noStroke();
  if (crowded) fill('gold'); else fill('mediumseagreen');
  drawingContext.globalAlpha = 0.28;
  circle(selfCX, selfCY, r * 2);
  drawingContext.globalAlpha = 1;
  pop();
  noFill();
  strokeWeight(3);
  stroke(crowded ? 'goldenrod' : 'seagreen');
  circle(selfCX, selfCY, r * 2);

  // Center character (you)
  drawPerson(selfCX, selfCY, 'mediumpurple', 'plum');
  noStroke(); fill('navy'); textAlign(CENTER, TOP); textSize(13);
  text('You', selfCX, selfCY + 54);

  // Draggable friend
  drawPerson(friendPos.x, friendPos.y, 'steelblue', 'lightblue');
  noStroke(); fill('navy'); textAlign(CENTER, TOP); textSize(13);
  text('Drag me', friendPos.x, friendPos.y + 54);

  // Comfort caption
  let capY = drawHeight - 96;
  noStroke();
  textAlign(CENTER, TOP);
  if (crowded) {
    fill('darkgoldenrod'); textSize(16);
    text('This might feel crowded.', margin, capY, canvasWidth - margin * 2, 22);
    fill('black'); textSize(15);
    text('What boundary sentence could you use?', margin, capY + 24, canvasWidth - margin * 2, 22);
  } else {
    fill('seagreen'); textSize(16);
    text('There is comfortable space here.', margin, capY, canvasWidth - margin * 2, 22);
    fill('dimgray'); textSize(14);
    text('Drag the friend closer to see the bubble change.', margin, capY + 24, canvasWidth - margin * 2, 22);
  }

  // Boundary sentence card
  let cardY = drawHeight - 46;
  if (showSentence) {
    fill('honeydew'); stroke('seagreen'); strokeWeight(1.5);
    rect(margin, cardY, canvasWidth - margin * 2, 40, 8);
    noStroke(); fill('black'); textAlign(CENTER, CENTER); textSize(14);
    text('"' + scenarios[sIndex].sentence + '"',
      margin + 8, cardY, canvasWidth - margin * 2 - 16, 40);
  }

  // Slider label in control strip
  noStroke(); fill('black'); textAlign(LEFT, CENTER); textSize(15);
  let sizeWord = ['Small', 'Medium', 'Large'][bubbleSlider.value()];
  text('Bubble Size: ' + sizeWord, margin, drawHeight + 22);

  cursor(overFriend() ? HAND : ARROW);
}

// Draw a simple, neutral cartoon person centered at (x, y): head above, body below.
function drawPerson(x, y, bodyStroke, bodyFill) {
  push();
  // body
  stroke(bodyStroke); strokeWeight(3); fill(bodyFill);
  rect(x - 20, y - 6, 40, 52, 12);
  // head
  stroke('burlywood'); strokeWeight(3); fill('navajowhite');
  circle(x, y - 28, 40);
  // face
  noStroke(); fill('sienna');
  circle(x - 8, y - 30, 5); circle(x + 8, y - 30, 5);
  noFill(); stroke('sienna'); strokeWeight(2);
  arc(x, y - 22, 16, 10, 0.1 * PI, 0.9 * PI);
  pop();
}

function overFriend() {
  return dist(mouseX, mouseY, friendPos.x, friendPos.y) <= friendR + 10;
}

function mousePressed() {
  if (overFriend()) dragging = true;
}
function mouseDragged() {
  if (!dragging) return;
  friendPos.x = constrain(mouseX, margin + 20, canvasWidth - margin - 20);
  friendPos.y = constrain(mouseY, 120, drawHeight - 110);
}
function mouseReleased() {
  dragging = false;
}

// Touch support so K-3 tablets can drag the friend.
function touchStarted() {
  if (overFriend()) { dragging = true; return false; }
}
function touchMoved() {
  if (!dragging) return false;
  friendPos.x = constrain(mouseX, margin + 20, canvasWidth - margin - 20);
  friendPos.y = constrain(mouseY, 120, drawHeight - 110);
  return false;
}
function touchEnded() {
  dragging = false;
}

function sayaSentence() {
  showSentence = true;
  try {
    let u = new SpeechSynthesisUtterance(scenarios[sIndex].sentence);
    u.rate = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch (e) { /* speech not available */ }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
  // keep the friend on-canvas after a resize
  friendPos.x = constrain(friendPos.x, margin + 20, canvasWidth - margin - 20);
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
