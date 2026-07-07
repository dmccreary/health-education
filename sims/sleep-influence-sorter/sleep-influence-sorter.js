// Sleep Influence Sorter - MicroSim (two-axis classification)
// CANVAS_HEIGHT: 520
// Grade 6-8, Analyze (L4): for each sleep-influence card, students classify it by
// type (Biological / Environmental / Social) AND by controllability (Within / Outside
// My Control), then get a one-sentence explanation and a running correct tally.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 470;
let controlHeight = 50;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let nextButton;
let resetButton;

// Each card: text, category (0=Biological,1=Environmental,2=Social),
// control (0=Within My Control, 1=Outside My Control), why.
let allCards = [
  { text: "Body's natural teenage sleep-wake shift", cat: 0, ctrl: 1,
    why: "Puberty shifts your internal clock later. It is biological and not something you can switch off." },
  { text: "Feeling sleepy because you skipped lunch", cat: 0, ctrl: 0,
    why: "Hunger is a body signal (biological), but eating regular meals is a choice you can control." },
  { text: "Melatonin rising as the room gets dark", cat: 0, ctrl: 0,
    why: "Melatonin is a natural sleep hormone (biological), and you can help it by dimming the lights." },
  { text: "Phone notifications buzzing after 10 pm", cat: 1, ctrl: 0,
    why: "The buzzing device is in your environment, and silencing or charging it elsewhere is in your control." },
  { text: "Street light shining through the window", cat: 1, ctrl: 1,
    why: "Outside lighting is environmental, and you usually cannot turn it off — though a curtain can help." },
  { text: "A hot, stuffy bedroom at night", cat: 1, ctrl: 0,
    why: "Room temperature is environmental, and opening a window or fan is often within your control." },
  { text: "Sharing a bedroom with a younger sibling", cat: 2, ctrl: 1,
    why: "Who you share a room with is a social/family situation that is mostly outside your control." },
  { text: "Staying up late to text friends", cat: 2, ctrl: 0,
    why: "Group chats are social, and choosing when to stop and sleep is within your control." },
  { text: "Early school bus pickup time", cat: 2, ctrl: 1,
    why: "The bus schedule is a social/system factor set by the school — outside your personal control." },
  { text: "A weekend sports tournament running late", cat: 2, ctrl: 1,
    why: "Team schedules are social factors set by coaches and leagues, largely outside your control." }
];

const catNames = ['Biological', 'Environmental', 'Social'];
const catColors = ['mediumpurple', 'seagreen', 'steelblue'];
const ctrlNames = ['Within My Control', 'Outside My Control'];
const ctrlColors = ['goldenrod', 'slategray'];

let deck = [];        // shuffled indices into allCards
let pos = 0;          // current position in deck
let catPick = -1;     // student's category pick for current card
let ctrlPick = -1;    // student's controllability pick
let locked = false;   // both picked -> feedback shown, card scored
let correctCount = 0;
let scored = [];      // per-deck-position: undefined | true (fully correct) | false

let catRects = [];
let ctrlRects = [];

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  nextButton = createButton('Next Card');
  nextButton.mousePressed(nextCard);
  nextButton.parent(document.querySelector('main'));

  resetButton = createButton('Reset Deck');
  resetButton.mousePressed(resetDeck);
  resetButton.parent(document.querySelector('main'));

  positionControls();
  shuffleDeck();

  describe('A sleep-influence card is shown at the top. Students tap one bin in the ' +
    'first row to classify it as Biological, Environmental, or Social, and one bin in ' +
    'the second row to mark it as within or outside their control. A feedback panel then ' +
    'explains both answers and a running tally counts fully correct cards.', LABEL);
}

function positionControls() {
  nextButton.position(margin, drawHeight + 11);
  resetButton.position(margin + 110, drawHeight + 11);
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
  textSize(22);
  text('Sleep Influence Sorter', canvasWidth / 2, 8);

  // Tally + progress
  noStroke();
  textAlign(CENTER, TOP);
  textSize(14);
  fill('dimgray');
  let sortedCount = scored.filter(s => s !== undefined).length;
  text('Card ' + (pos + 1) + ' of ' + deck.length +
       '   •   Fully correct: ' + correctCount + ' / ' + sortedCount,
       canvasWidth / 2, 36);

  let card = allCards[deck[pos]];

  // Card panel
  let cardX = margin, cardY = 58, cardW = canvasWidth - margin * 2, cardH = 66;
  fill('lightyellow');
  stroke('goldenrod');
  strokeWeight(1.5);
  rect(cardX, cardY, cardW, cardH, 10);
  noStroke();
  fill('gray');
  textAlign(LEFT, TOP);
  textSize(11);
  text('SLEEP INFLUENCE', cardX + 10, cardY + 7);
  fill('black');
  textAlign(CENTER, CENTER);
  textSize(16);
  text(card.text, cardX + 8, cardY + 18, cardW - 16, cardH - 24);

  // ---- Row 1: category ----
  let r1LabelY = cardY + cardH + 8;
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(13);
  text('1. What kind of influence is it?', margin, r1LabelY);

  let binY1 = r1LabelY + 20;
  let binH = 44;
  let gap = 8;
  let bw = (canvasWidth - margin * 2 - gap * 2) / 3;
  catRects = [];
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 3; i++) {
    let bx = margin + i * (bw + gap);
    let r = { x: bx, y: binY1, w: bw, h: binH };
    catRects.push(r);
    drawBin(r, catNames[i], catColors[i], catPick === i,
            locked && i === card.cat, locked && catPick === i && catPick !== card.cat, 13);
  }

  // ---- Row 2: controllability ----
  let r2LabelY = binY1 + binH + 10;
  noStroke();
  fill('black');
  textAlign(LEFT, TOP);
  textSize(13);
  text('2. Can I control it?', margin, r2LabelY);

  let binY2 = r2LabelY + 20;
  let bw2 = (canvasWidth - margin * 2 - gap) / 2;
  ctrlRects = [];
  textAlign(CENTER, CENTER);
  for (let i = 0; i < 2; i++) {
    let bx = margin + i * (bw2 + gap);
    let r = { x: bx, y: binY2, w: bw2, h: binH };
    ctrlRects.push(r);
    drawBin(r, ctrlNames[i], ctrlColors[i], ctrlPick === i,
            locked && i === card.ctrl, locked && ctrlPick === i && ctrlPick !== card.ctrl, 14);
  }

  // ---- Feedback panel ----
  let fbY = binY2 + binH + 12;
  let fbH = drawHeight - fbY - 10;
  fill('white');
  stroke('silver');
  strokeWeight(1);
  rect(margin, fbY, canvasWidth - margin * 2, fbH, 8);
  noStroke();

  let pad = 10;
  textAlign(LEFT, TOP);
  if (!locked) {
    fill('gray');
    textSize(14);
    let hint = (catPick < 0 && ctrlPick < 0)
      ? 'Tap one box in each row above to classify this card.'
      : 'Now make a pick in the other row to check your answer.';
    text(hint, margin + pad, fbY + pad, canvasWidth - margin * 2 - pad * 2, fbH - pad * 2);
  } else {
    let catOK = catPick === card.cat;
    let ctrlOK = ctrlPick === card.ctrl;
    let bothOK = catOK && ctrlOK;

    textSize(14);
    fill(bothOK ? 'seagreen' : 'indianred');
    text(bothOK ? '✓ Both correct!' : 'Check the highlighted answers:',
         margin + pad, fbY + pad);

    // per-axis result lines
    textSize(12.5);
    fill(catOK ? 'seagreen' : 'indianred');
    text((catOK ? '✓ ' : '✗ ') + 'Type: ' + catNames[card.cat],
         margin + pad, fbY + pad + 24);
    fill(ctrlOK ? 'seagreen' : 'indianred');
    text((ctrlOK ? '✓ ' : '✗ ') + ctrlNames[card.ctrl],
         margin + pad, fbY + pad + 42);

    fill('black');
    textSize(13);
    text(card.why, margin + pad, fbY + pad + 64, canvasWidth - margin * 2 - pad * 2, fbH - pad - 66);
  }

  // Completion banner (all cards sorted)
  if (scored.filter(s => s !== undefined).length === deck.length && locked) {
    noStroke();
    fill('seagreen');
    textAlign(CENTER, BOTTOM);
    textSize(13);
    text('Deck complete — you sorted every influence!', canvasWidth / 2, drawHeight - 4);
  }

  cursor(overAnyBin() && !locked ? HAND : ARROW);
}

function drawBin(r, label, color, picked, isAnswer, isWrongPick, tsize) {
  let hover = pointInRect(mouseX, mouseY, r) && !locked;
  if (isAnswer) {
    fill('honeydew');
    stroke('seagreen');
    strokeWeight(3);
  } else if (isWrongPick) {
    fill('mistyrose');
    stroke('indianred');
    strokeWeight(3);
  } else if (picked) {
    fill(color);
    stroke(color);
    strokeWeight(2.5);
  } else {
    fill(hover ? 'lightyellow' : 'white');
    stroke(color);
    strokeWeight(1.5);
  }
  rect(r.x, r.y, r.w, r.h, 8);

  noStroke();
  fill(picked && !isAnswer && !isWrongPick ? 'white' : 'black');
  textAlign(CENTER, CENTER);
  textSize(tsize);
  text(label, r.x + 4, r.y, r.w - 8, r.h);
}

function overAnyBin() {
  for (let r of catRects) if (pointInRect(mouseX, mouseY, r)) return true;
  for (let r of ctrlRects) if (pointInRect(mouseX, mouseY, r)) return true;
  return false;
}

function pointInRect(px, py, r) {
  return px >= r.x && px <= r.x + r.w && py >= r.y && py <= r.y + r.h;
}

function mousePressed() {
  if (locked) return;
  for (let i = 0; i < catRects.length; i++) {
    if (pointInRect(mouseX, mouseY, catRects[i])) { catPick = i; maybeLock(); return; }
  }
  for (let i = 0; i < ctrlRects.length; i++) {
    if (pointInRect(mouseX, mouseY, ctrlRects[i])) { ctrlPick = i; maybeLock(); return; }
  }
}

function maybeLock() {
  if (catPick >= 0 && ctrlPick >= 0) {
    locked = true;
    let card = allCards[deck[pos]];
    let bothOK = (catPick === card.cat) && (ctrlPick === card.ctrl);
    if (scored[pos] === undefined) {
      scored[pos] = bothOK;
      if (bothOK) correctCount++;
    }
  }
}

function nextCard() {
  // advance to next unscored card if possible, else next in order
  if (scored.filter(s => s !== undefined).length < deck.length) {
    let start = pos;
    do {
      pos = (pos + 1) % deck.length;
    } while (scored[pos] !== undefined && pos !== start);
  } else {
    pos = (pos + 1) % deck.length;
  }
  loadPicksForPos();
}

function loadPicksForPos() {
  // Re-show a previously scored card in its locked, revealed state; fresh cards blank.
  if (scored[pos] !== undefined) {
    let card = allCards[deck[pos]];
    catPick = card.cat;   // show correct answer highlighted for reviewed cards
    ctrlPick = card.ctrl;
    locked = true;
  } else {
    catPick = -1;
    ctrlPick = -1;
    locked = false;
  }
}

function shuffleDeck() {
  deck = allCards.map((_, i) => i);
  for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  pos = 0;
  catPick = -1;
  ctrlPick = -1;
  locked = false;
  correctCount = 0;
  scored = new Array(deck.length);
}

function resetDeck() {
  shuffleDeck();
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
