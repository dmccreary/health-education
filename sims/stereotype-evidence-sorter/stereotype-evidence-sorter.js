// Stereotype vs. Evidence Sorter - MicroSim (judge evidence vs. stereotype)
// CANVAS_HEIGHT: 532
// Grades 9-12, Evaluate (L5): students drag each relationship scenario into
// Evidence-Based or Stereotype-Based, then justify the correct classification.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 475;
let controlHeight = 57;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let checkButton, nextButton, reasonButton;

// ev = true when the reaction is grounded in evidence about THIS relationship;
// ev = false when it leans on a stereotype about a whole group.
let deck = [
  {
    t: "Maya's partner has cancelled their last three plans without warning. She decides to talk with them about whether they still want to date.",
    ev: true,
    r: "Her decision rests on a repeated pattern in THIS relationship (three cancellations), not an assumption about a group."
  },
  {
    t: "Devon assumes his girlfriend will handle planning every date because \"girls care more about that stuff.\"",
    ev: false,
    r: "\"Girls care more\" is a gender-role stereotype applied to a whole group, not evidence about what his girlfriend actually prefers."
  },
  {
    t: "Sam notices his friend always texts back within a day, so he does not worry when a reply takes a few hours.",
    ev: true,
    r: "He is reading his friend's own established habit in THIS friendship, which is evidence, not a group assumption."
  },
  {
    t: "Priya thinks two classmates who are dating won't last because \"couples like them never stay together.\"",
    ev: false,
    r: "\"Couples like them\" judges the pair by a category, ignoring anything specific about how those two people treat each other."
  },
  {
    t: "Alex feels safe sharing a secret with a friend who has kept every confidence for two years.",
    ev: true,
    r: "Two years of the friend keeping confidences is direct evidence about this person's trustworthiness."
  },
  {
    t: "Jordan expects a new teammate to be bad at communicating because of the country the teammate is from.",
    ev: false,
    r: "Predicting behavior from national origin is an ethnic stereotype, not evidence about how this teammate actually communicates."
  },
  {
    t: "After a partner apologizes and changes a hurtful habit over several weeks, Riley chooses to rebuild trust.",
    ev: true,
    r: "Riley is responding to observed change over several weeks in THIS relationship, which is evidence."
  },
  {
    t: "Chris assumes his roommate won't want to talk about feelings because \"guys just aren't into that.\"",
    ev: false,
    r: "\"Guys just aren't into that\" is a gender stereotype; it says nothing about what this particular roommate wants."
  },
  {
    t: "Nadia doubts a same-sex couple's relationship is \"serious,\" assuming it is only a phase.",
    ev: false,
    r: "Dismissing the relationship as \"a phase\" is bias about a group, not evidence about the two people involved."
  },
  {
    t: "A clinic assumes a teen won't ask questions about health, so staff skip explaining options and rush the visit.",
    ev: false,
    r: "Skipping information because of an assumption about teens is a healthcare-access bias, not evidence about this patient's needs."
  }
];

let order = [];
let cur = 0;                 // index into order
let placedZone = null;       // 0 = Evidence, 1 = Stereotype, null = unsorted
let checked = false;
let showReason = false;
let score = 0;
let answered = 0;

// drag state
let dragging = false;
let dragDX = 0, dragDY = 0;
let cardX, cardY;            // top-left of the draggable card
let cardW, cardH = 118;
let homeX, homeY;           // resting position of the card

let zoneRects = [];         // [evidenceRect, stereotypeRect]

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  checkButton = createButton('Check My Sorting');
  checkButton.mousePressed(checkSort);
  nextButton = createButton('Next Scenario');
  nextButton.mousePressed(nextScenario);
  reasonButton = createButton('Show Reasoning');
  reasonButton.mousePressed(() => { showReason = !showReason; });

  positionControls();
  shuffleDeck();
  layoutCard();
  describe('A relationship scenario card is dragged into one of two zones: ' +
    'Evidence-Based or Stereotype-Based. Check My Sorting scores the placement, ' +
    'Show Reasoning explains the correct classification, and Next Scenario advances. ' +
    'A running score is shown.', LABEL);
}

function positionControls() {
  let y = drawHeight + 14;
  checkButton.position(margin, y);
  nextButton.position(margin + 150, y);
  reasonButton.position(margin + 280, y);
}

function shuffleDeck() {
  order = [...Array(deck.length).keys()];
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(random(i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  cur = 0; score = 0; answered = 0;
  resetCardState();
}

function resetCardState() {
  placedZone = null; checked = false; showReason = false; dragging = false;
}

function nextScenario() {
  if (cur < deck.length - 1) {
    cur++;
    resetCardState();
    layoutCard();
  } else {
    // completed the deck: reshuffle for repeat practice
    shuffleDeck();
    layoutCard();
  }
}

function checkSort() {
  if (placedZone === null || checked) return;
  checked = true;
  answered++;
  let correct = (placedZone === 0) === deck[order[cur]].ev;
  if (correct) score++;
  showReason = true; // reveal reasoning automatically on check
}

function layoutCard() {
  cardW = min(canvasWidth - margin * 2, 520);
  homeX = (canvasWidth - cardW) / 2;
  homeY = 84;
  cardX = homeX; cardY = homeY;
}

function draw() {
  updateCanvasSize();

  fill('aliceblue'); stroke('silver'); strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // keep card horizontally centered on resize when not dragging
  if (!dragging) { cardW = min(canvasWidth - margin * 2, 520); homeX = (canvasWidth - cardW) / 2; if (placedZone === null) { cardX = homeX; cardY = homeY; } }

  // title
  fill('black'); textAlign(CENTER, TOP); textSize(19);
  text('Stereotype vs. Evidence Sorter', canvasWidth / 2, 8);

  // score + progress
  noStroke(); textSize(12); textAlign(LEFT, TOP); fill('dimgray');
  text('Scenario ' + (cur + 1) + ' of ' + deck.length, margin, 36);
  textAlign(RIGHT, TOP); fill('navy');
  text('Score: ' + score + ' / ' + answered, canvasWidth - margin, 36);

  // prompt line
  noStroke(); textAlign(CENTER, TOP); textSize(12); fill('dimgray');
  text('Drag the card into the zone that fits the reaction, then Check.', canvasWidth / 2, 56);

  // define drop zones
  let zoneTop = 232;
  let zoneH = 118;
  let zoneW = (canvasWidth - margin * 2 - 14) / 2;
  zoneRects = [
    { x: margin, y: zoneTop, w: zoneW, h: zoneH, label: 'Evidence-Based', sub: 'about THIS relationship' },
    { x: margin + zoneW + 14, y: zoneTop, w: zoneW, h: zoneH, label: 'Stereotype-Based', sub: 'about a whole group' }
  ];

  // draw zones
  let hoverZone = dragging ? zoneUnder(mouseX, mouseY) : -1;
  for (let z = 0; z < 2; z++) {
    let r = zoneRects[z];
    let isPlaced = (placedZone === z) && !dragging;
    strokeWeight(2);
    if (checked && isPlaced) {
      let correct = (z === 0) === deck[order[cur]].ev;
      stroke(correct ? 'seagreen' : 'indianred');
      fill(correct ? 'honeydew' : 'mistyrose');
    } else if (hoverZone === z) {
      stroke('steelblue'); fill('lightcyan');
    } else {
      stroke(z === 0 ? 'seagreen' : 'mediumpurple');
      fill('white');
    }
    rect(r.x, r.y, r.w, r.h, 8);
    noStroke();
    fill(z === 0 ? 'seagreen' : 'mediumpurple');
    textAlign(CENTER, TOP); textSize(14);
    text(r.label, r.x, r.y + 10, r.w, 20);
    fill('gray'); textSize(11);
    text(r.sub, r.x, r.y + 30, r.w, 16);
    // placement checkmark when sorted here
    if (isPlaced && checked) {
      let correct = (z === 0) === deck[order[cur]].ev;
      fill(correct ? 'seagreen' : 'indianred'); textSize(22);
      text(correct ? '✓' : '✗', r.x, r.y + r.h - 34, r.w, 26);
    } else if (isPlaced) {
      fill('dimgray'); textSize(11);
      text('card placed here', r.x, r.y + r.h - 26, r.w, 16);
    }
  }

  // draw the draggable card (unless placed-and-unchecked shows a compact tag; we keep the card visible while placed)
  drawCard();

  // reasoning / feedback panel
  drawFeedback();

  cursor(overCard(mouseX, mouseY) || dragging ? (dragging ? 'grabbing' : HAND) : ARROW);
}

function drawCard() {
  let d = deck[order[cur]];
  // if placed and not dragging, snap the card center into the chosen zone
  if (placedZone !== null && !dragging) {
    let r = zoneRects[placedZone];
    cardW = r.w - 14;
    cardH = r.h - 58;
    cardX = r.x + 7;
    cardY = r.y + 46;
  } else if (!dragging) {
    cardW = min(canvasWidth - margin * 2, 520);
    cardH = 118;
    cardX = homeX;
    cardY = homeY;
  }

  let placedHere = placedZone !== null && !dragging;
  strokeWeight(2);
  if (checked && placedHere) {
    let correct = (placedZone === 0) === d.ev;
    stroke(correct ? 'seagreen' : 'indianred');
    fill(correct ? 'honeydew' : 'mistyrose');
  } else if (dragging) {
    stroke('steelblue'); fill('lightyellow');
  } else {
    stroke('goldenrod'); fill('cornsilk');
  }
  rect(cardX, cardY, cardW, cardH, 8);
  noStroke(); fill('black');
  textAlign(LEFT, TOP);
  textSize(placedHere ? 11 : 13);
  text(d.t, cardX + 10, cardY + 8, cardW - 20, cardH - 12);
}

function drawFeedback() {
  let y = 358;
  let d = deck[order[cur]];
  noStroke();
  if (checked) {
    let correct = (placedZone === 0) === d.ev;
    let kind = d.ev ? 'Evidence-Based' : 'Stereotype-Based';
    textAlign(LEFT, TOP); textSize(13);
    fill(correct ? 'seagreen' : 'indianred');
    let verdict = (correct ? '✓ Correct — ' : '✗ Not quite — ') + 'this is ' + kind + '.';
    text(verdict, margin, y, canvasWidth - margin * 2, 20);
    if (showReason) {
      fill('black'); textSize(12);
      text('Why: ' + d.r, margin, y + 24, canvasWidth - margin * 2, drawHeight - (y + 24) - 8);
    }
  } else if (showReason) {
    fill('black'); textAlign(LEFT, TOP); textSize(12);
    text('Hint — ask: is this reaction based on what THIS person actually did, ' +
      'or on an assumption about a group they belong to?',
      margin, y, canvasWidth - margin * 2, drawHeight - y - 8);
  } else if (placedZone !== null) {
    fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
    text('Card placed in "' + zoneRects[placedZone].label + '". Press Check My Sorting.',
      margin, y, canvasWidth - margin * 2, 20);
  } else {
    fill('dimgray'); textAlign(LEFT, TOP); textSize(12);
    text('Drag the card above into one of the two zones.',
      margin, y, canvasWidth - margin * 2, 20);
  }
}

function overCard(px, py) {
  return px >= cardX && px <= cardX + cardW && py >= cardY && py <= cardY + cardH;
}

function zoneUnder(px, py) {
  for (let z = 0; z < zoneRects.length; z++) {
    let r = zoneRects[z];
    if (px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h) return z;
  }
  return -1;
}

function mousePressed() {
  if (checked) return; // locked after checking; use Next
  if (overCard(mouseX, mouseY)) {
    dragging = true;
    dragDX = mouseX - cardX;
    dragDY = mouseY - cardY;
    // while dragging, use full card size for readability
    cardW = min(canvasWidth - margin * 2, 520);
    cardH = 118;
  }
}

function mouseDragged() {
  if (dragging) {
    cardX = mouseX - dragDX;
    cardY = mouseY - dragDY;
  }
}

function mouseReleased() {
  if (!dragging) return;
  dragging = false;
  let z = zoneUnder(mouseX, mouseY);
  if (z !== -1) {
    placedZone = z;
  } else {
    placedZone = null; // dropped outside — return home
  }
}

function windowResized() {
  updateCanvasSize();
  resizeCanvas(canvasWidth, canvasHeight);
  positionControls();
  layoutCard();
}

function updateCanvasSize() {
  const container = document.querySelector('main').getBoundingClientRect();
  containerWidth = Math.floor(container.width);
  canvasWidth = containerWidth;
}
