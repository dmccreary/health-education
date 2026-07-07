// Media Message Detective - MicroSim (drag-and-drop sorting)
// CANVAS_HEIGHT: 512
// Grade 4, Analyze (L4): students examine a short, fictional media example and
// drag it into "Healthy Influence" or "Watch Out For This," then read why.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let whyButton;
let nextButton;

// Each example: media type icon, the message text, whether it is healthy
// influence (true) or "watch out" (false), and a short explanation.
let examples = [
  {
    type: 'phone',
    text: 'A pop-up ad says candy is "the most exciting treat ever" and shows kids cheering with huge smiles.',
    healthy: false,
    why: 'This ad uses excitement and happy kids to make candy look like the best choice. It is trying to get you to want it, not to help you make a healthy choice.'
  },
  {
    type: 'tv',
    text: 'In a show, a character is worried about something and decides to ask a trusted adult for advice.',
    healthy: true,
    why: 'This shows a healthy choice. Asking a trusted adult when you are unsure is a smart, safe thing to do.'
  },
  {
    type: 'game',
    text: 'A game shows a friendly message: "You have played for an hour. Time to stand up and take a break!"',
    healthy: true,
    why: 'This supports a healthy habit. Taking breaks from screens helps your eyes, body, and focus.'
  },
  {
    type: 'phone',
    text: 'A post makes staying up very late every night look normal and fun, with people laughing at 3 a.m.',
    healthy: false,
    why: 'This makes losing sleep look cool, but kids need plenty of sleep to feel good and think clearly. Watch out for this idea.'
  },
  {
    type: 'tv',
    text: 'A commercial says a sugary drink will make you popular and give you "endless energy" all day.',
    healthy: false,
    why: 'It promises popularity and energy to sell a drink. Sugary drinks do not really do this, and water is a healthier choice.'
  },
  {
    type: 'phone',
    text: 'A short video shows a character stretching and drinking water before playing outside with friends.',
    healthy: true,
    why: 'This models healthy habits. Drinking water and moving your body are good choices it makes look normal.'
  },
  {
    type: 'game',
    text: 'A game keeps flashing "One more level!" and warns you will lose your streak if you stop now.',
    healthy: false,
    why: 'This is designed to keep you playing longer than you planned. It is okay to stop and do other things.'
  },
  {
    type: 'tv',
    text: 'A character in a show says "No thank you" calmly when a friend pressures them to try something unsafe.',
    healthy: true,
    why: 'This shows a strong refusal skill. Saying no calmly and clearly is a healthy way to stay safe.'
  }
];

let order = [];        // shuffled indices
let pos = 0;           // position in order
let cur = 0;           // current example index

// Card drag state
let cardX, cardY, cardW, cardH;
let cardHomeX, cardHomeY;
let dragging = false;
let dragOffX = 0, dragOffY = 0;

let sortedInto = -1;   // -1 = not yet sorted, 0 = healthy zone, 1 = watch zone
let showWhy = false;
let visited = {};      // example indices that have been sorted

// Zone rectangles (computed in draw)
let zone0 = {x:0,y:0,w:0,h:0}; // Healthy Influence
let zone1 = {x:0,y:0,w:0,h:0}; // Watch Out For This

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  buildOrder();
  loadExample();

  whyButton = createButton('Why?');
  whyButton.mousePressed(revealWhy);
  whyButton.parent(document.querySelector('main'));

  nextButton = createButton('Next Example');
  nextButton.mousePressed(nextExample);
  nextButton.parent(document.querySelector('main'));

  positionControls();
  describe('A card shows a short fictional media example. Drag the card into the ' +
    '"Healthy Influence" zone or the "Watch Out For This" zone, then press Why to ' +
    'read what the media was trying to do.', LABEL);
}

function buildOrder() {
  order = [];
  for (let i = 0; i < examples.length; i++) order.push(i);
  // Fisher-Yates shuffle
  for (let i = order.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = order[i]; order[i] = order[j]; order[j] = t;
  }
  pos = 0;
}

function loadExample() {
  cur = order[pos];
  sortedInto = -1;
  showWhy = false;
  dragging = false;
}

function positionControls() {
  whyButton.position(margin, drawHeight + 14);
  nextButton.position(margin + 90, drawHeight + 14);
}

function draw() {
  updateCanvasSize();

  // Backgrounds
  fill('aliceblue');
  stroke('silver');
  strokeWeight(1);
  rect(0, 0, canvasWidth, drawHeight);
  fill('white');
  rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  // Title
  fill('midnightblue');
  textAlign(CENTER, TOP);
  textSize(22);
  text('Media Message Detective', canvasWidth / 2, 10);
  fill('dimgray');
  textSize(13);
  text('Drag the card to the zone it belongs in.', canvasWidth / 2, 38);

  // Layout regions
  let zoneTop = 300;
  let zoneH = drawHeight - zoneTop - margin;
  let zoneW = (canvasWidth - margin * 3) / 2;
  zone0 = { x: margin, y: zoneTop, w: zoneW, h: zoneH };
  zone1 = { x: margin * 2 + zoneW, y: zoneTop, w: zoneW, h: zoneH };

  drawZones();

  // Card home position (centered above the zones)
  cardW = min(canvasWidth - margin * 2, 360);
  cardH = 150;
  cardHomeX = (canvasWidth - cardW) / 2;
  cardHomeY = 60;
  if (!dragging && sortedInto === -1) {
    cardX = cardHomeX;
    cardY = cardHomeY;
  }

  drawCard();

  // Progress counter
  noStroke();
  fill('gray');
  textAlign(RIGHT, TOP);
  textSize(12);
  text('Sorted: ' + Object.keys(visited).length + ' / ' + examples.length,
    canvasWidth - margin, drawHeight - 16);
}

function drawZones() {
  // Zone 0 - Healthy Influence (teal)
  let hl0 = hoverZone(0);
  fill(hl0 ? 'lightseagreen' : 'paleturquoise');
  stroke('teal');
  strokeWeight(hl0 ? 3 : 1.5);
  rect(zone0.x, zone0.y, zone0.w, zone0.h, 10);

  // Zone 1 - Watch Out For This (soft amber)
  let hl1 = hoverZone(1);
  fill(hl1 ? 'goldenrod' : 'moccasin');
  stroke('darkgoldenrod');
  strokeWeight(hl1 ? 3 : 1.5);
  rect(zone1.x, zone1.y, zone1.w, zone1.h, 10);

  noStroke();
  textAlign(CENTER, TOP);
  textSize(15);
  fill('teal');
  text('Healthy Influence', zone0.x + 4, zone0.y + 8, zone0.w - 8, 40);
  fill('darkgoldenrod');
  text('Watch Out For This', zone1.x + 4, zone1.y + 8, zone1.w - 8, 40);

  // If sorted, show a check/label in the chosen zone and the explanation
  if (sortedInto !== -1) {
    let z = sortedInto === 0 ? zone0 : zone1;
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(30);
    fill(sortedInto === 0 ? 'teal' : 'darkgoldenrod');
    text('✓', z.x, z.y + z.h - 54, z.w, 40);
  }
}

function hoverZone(which) {
  if (!dragging) return false;
  let cx = cardX + cardW / 2;
  let cy = cardY + cardH / 2;
  let z = which === 0 ? zone0 : zone1;
  return cx > z.x && cx < z.x + z.w && cy > z.y && cy < z.y + z.h;
}

function drawCard() {
  // When sorted and Why is showing, replace the card area with an explanation.
  if (sortedInto !== -1 && showWhy) {
    drawExplanation();
    return;
  }

  // Draw the draggable card
  let ex = examples[cur];
  push();
  if (dragging) {
    drawingContext.shadowColor = 'rgba(0,0,0,0.25)';
    drawingContext.shadowBlur = 12;
    drawingContext.shadowOffsetY = 4;
  }
  fill('white');
  stroke(sortedInto === -1 ? 'steelblue' : 'silver');
  strokeWeight(2);
  rect(cardX, cardY, cardW, cardH, 12);
  pop();

  // Icon badge
  let iconR = 44;
  let iconCX = cardX + 34;
  let iconCY = cardY + cardH / 2;
  drawMediaIcon(ex.type, iconCX, iconCY, iconR);

  // Message text (to the right of the icon)
  noStroke();
  fill('black');
  textAlign(LEFT, CENTER);
  textSize(14);
  let tx = cardX + 66;
  let tw = cardW - 66 - 12;
  text(ex.text, tx, cardY + 10, tw, cardH - 20);

  // Prompt below card when not yet sorted
  if (sortedInto === -1 && !dragging) {
    noStroke();
    fill('slategray');
    textAlign(CENTER, TOP);
    textSize(12);
    text('Grab the card and drop it in a zone', canvasWidth / 2, cardY + cardH + 6);
  }
}

function drawExplanation() {
  let ex = examples[cur];
  let bx = cardHomeX, by = cardHomeY, bw = cardW, bh = cardH + 28;
  let good = ex.healthy;
  fill(good ? 'honeydew' : 'cornsilk');
  stroke(good ? 'seagreen' : 'darkgoldenrod');
  strokeWeight(2);
  rect(bx, by, bw, bh, 12);

  noStroke();
  textAlign(LEFT, TOP);
  textSize(14);
  fill(good ? 'seagreen' : 'darkgoldenrod');
  let header = good ? 'This is a Healthy Influence' : 'This is one to Watch Out For';
  text(header, bx + 12, by + 10, bw - 24, 24);

  fill('black');
  textSize(13);
  text(ex.why, bx + 12, by + 34, bw - 24, bh - 44);
}

function drawMediaIcon(type, cx, cy, r) {
  push();
  translate(cx, cy);
  strokeWeight(2);
  stroke('midnightblue');
  fill('lavender');
  if (type === 'tv') {
    // TV screen with stand
    rectMode(CENTER);
    rect(0, -3, r * 1.3, r * 0.95, 5);
    stroke('midnightblue');
    line(-8, r * 0.55, 8, r * 0.55);
    line(0, r * 0.42, 0, r * 0.55);
    rectMode(CORNER);
  } else if (type === 'phone') {
    // Phone
    rectMode(CENTER);
    rect(0, 0, r * 0.72, r * 1.25, 7);
    noFill();
    line(-r * 0.14, r * 0.5, r * 0.14, r * 0.5);
    rectMode(CORNER);
  } else if (type === 'game') {
    // Game controller
    rectMode(CENTER);
    rect(0, 0, r * 1.35, r * 0.8, r * 0.4);
    fill('midnightblue');
    noStroke();
    ellipse(-r * 0.4, 0, 5, 5);      // d-pad center
    ellipse(r * 0.38, -r * 0.14, 6, 6); // button
    ellipse(r * 0.5, r * 0.12, 6, 6);   // button
    rectMode(CORNER);
  }
  pop();
  noStroke();
}

function revealWhy() {
  if (sortedInto !== -1) {
    showWhy = true;
  }
}

function nextExample() {
  pos++;
  if (pos >= order.length) {
    // Reshuffle for another pass through all examples
    buildOrder();
  }
  loadExample();
}

function mousePressed() {
  // Only allow grabbing the card if not yet sorted and pointer is over the card
  if (sortedInto === -1 && pointInRect(mouseX, mouseY, cardX, cardY, cardW, cardH)) {
    dragging = true;
    dragOffX = mouseX - cardX;
    dragOffY = mouseY - cardY;
  }
}

function mouseDragged() {
  if (dragging) {
    cardX = mouseX - dragOffX;
    cardY = mouseY - dragOffY;
    // Keep card roughly on canvas
    cardX = constrain(cardX, -20, canvasWidth - cardW + 20);
    cardY = constrain(cardY, 40, drawHeight - 30);
  }
}

function mouseReleased() {
  if (!dragging) return;
  dragging = false;
  // Check which zone the card center is over
  let cx = cardX + cardW / 2;
  let cy = cardY + cardH / 2;
  if (cx > zone0.x && cx < zone0.x + zone0.w && cy > zone0.y && cy < zone0.y + zone0.h) {
    sortedInto = 0;
    visited[cur] = true;
  } else if (cx > zone1.x && cx < zone1.x + zone1.w && cy > zone1.y && cy < zone1.y + zone1.h) {
    sortedInto = 1;
    visited[cur] = true;
  } else {
    // Not over a zone: snap the card back home
    cardX = cardHomeX;
    cardY = cardHomeY;
  }
}

function pointInRect(px, py, rx, ry, rw, rh) {
  return px >= rx && px <= rx + rw && py >= ry && py <= ry + rh;
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
