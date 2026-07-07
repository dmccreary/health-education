// Nutrition Label Face-Off - MicroSim (compare two nutrition labels by a goal)
// CANVAS_HEIGHT: 512
// Grade 5, Analyze (L4): students compare two real-style nutrition labels side by
// side across several nutrients and decide which food better fits a chosen goal.

let containerWidth;
let canvasWidth = 400;
let drawHeight = 452;
let controlHeight = 60;
let canvasHeight = drawHeight + controlHeight;
let margin = 16;

let pairSelect, goalSelect, revealButton, resetButton;

// Each pair: two foods with serving text + nutrient values.
// Nutrient keys drive the scorecard. "lowerBetter" marks which direction is favorable.
let nutrients = [
  { key: 'sugar',   label: 'Added sugar', unit: 'g',  lowerBetter: true,  goal: 'Lower added sugar' },
  { key: 'fiber',   label: 'Fiber',       unit: 'g',  lowerBetter: false, goal: 'More fiber' },
  { key: 'protein', label: 'Protein',     unit: 'g',  lowerBetter: false, goal: 'More protein' },
  { key: 'sodium',  label: 'Sodium',      unit: 'mg', lowerBetter: true,  goal: 'Lower sodium' }
];

let pairs = [
  {
    name: 'Cereal A vs Cereal B',
    a: { name: 'Cereal A', serving: '1 cup (40g)', cal: 190, sugar: 15, fiber: 2, protein: 3, sodium: 210 },
    b: { name: 'Cereal B', serving: '1 cup (40g)', cal: 150, sugar: 4,  fiber: 6, protein: 5, sodium: 140 }
  },
  {
    name: 'Yogurt A vs Yogurt B',
    a: { name: 'Yogurt A', serving: '1 cup (170g)', cal: 180, sugar: 18, fiber: 0, protein: 8,  sodium: 100 },
    b: { name: 'Yogurt B', serving: '1 cup (170g)', cal: 130, sugar: 6,  fiber: 3, protein: 15, sodium: 65 }
  },
  {
    name: 'Bread A vs Bread B',
    a: { name: 'Bread A', serving: '2 slices (56g)', cal: 160, sugar: 6, fiber: 2, protein: 5, sodium: 320 },
    b: { name: 'Bread B', serving: '2 slices (56g)', cal: 140, sugar: 2, fiber: 6, protein: 7, sodium: 180 }
  }
];

let pairIndex = 0;
let goalKey = 'sugar';
let revealed = false;

function setup() {
  updateCanvasSize();
  const canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent(document.querySelector('main'));

  pairSelect = createSelect();
  pairSelect.parent(document.querySelector('main'));
  for (let i = 0; i < pairs.length; i++) pairSelect.option(pairs[i].name, i);
  pairSelect.selected(pairs[0].name);
  pairSelect.changed(() => { pairIndex = int(pairSelect.value()); revealed = false; });

  goalSelect = createSelect();
  goalSelect.parent(document.querySelector('main'));
  for (let i = 0; i < nutrients.length; i++) goalSelect.option(nutrients[i].goal, nutrients[i].key);
  goalSelect.selected(nutrients[0].goal);
  goalSelect.changed(() => { goalKey = goalSelect.value(); revealed = false; });

  revealButton = createButton('Reveal Winner');
  revealButton.parent(document.querySelector('main'));
  revealButton.mousePressed(() => { revealed = true; });

  resetButton = createButton('Reset');
  resetButton.parent(document.querySelector('main'));
  resetButton.mousePressed(() => { revealed = false; });

  positionControls();
  describe('Two nutrition-facts labels shown side by side with a scorecard. Students ' +
    'pick a food pair and a goal to see which food is more favorable for each nutrient.', LABEL);
}

function positionControls() {
  // Row 1: two dropdowns. Row 2: two buttons.
  let half = (canvasWidth - margin * 2 - 8) / 2;
  pairSelect.position(margin, drawHeight + 8);
  pairSelect.size(Math.max(120, half));
  goalSelect.position(margin + half + 8, drawHeight + 8);
  goalSelect.size(Math.max(120, half));
  revealButton.position(margin, drawHeight + 34);
  resetButton.position(margin + 118, drawHeight + 34);
}

function goalNutrient() {
  for (let n of nutrients) if (n.key === goalKey) return n;
  return nutrients[0];
}

// Returns 'a', 'b', or 'tie' for which food is more favorable on nutrient n.
function favored(food, n) {
  let va = food.a[n.key], vb = food.b[n.key];
  if (va === vb) return 'tie';
  if (n.lowerBetter) return va < vb ? 'a' : 'b';
  return va > vb ? 'a' : 'b';
}

function draw() {
  updateCanvasSize();
  fill('aliceblue'); stroke('silver'); strokeWeight(1); rect(0, 0, canvasWidth, drawHeight);
  fill('white'); rect(0, drawHeight, canvasWidth, controlHeight);
  noStroke();

  let pair = pairs[pairIndex];
  let gn = goalNutrient();

  // Title
  fill('black'); textAlign(CENTER, TOP); textSize(18);
  text('Nutrition Label Face-Off', canvasWidth / 2, 6);
  fill('dimgray'); textSize(11);
  text('Goal: ' + gn.goal, canvasWidth / 2, 28);

  // Two label cards side by side
  let gap = 10;
  let cardW = (canvasWidth - margin * 2 - gap) / 2;
  let cardX = [margin, margin + cardW + gap];
  let cardY = 46;
  let cardH = 190;
  let foods = [pair.a, pair.b];
  let sides = ['a', 'b'];

  for (let s = 0; s < 2; s++) {
    let x = cardX[s], food = foods[s];
    // card
    stroke('black'); strokeWeight(2); fill('white');
    rect(x, cardY, cardW, cardH, 4);
    noStroke();
    // header band
    fill(s === 0 ? 'steelblue' : 'seagreen');
    rect(x, cardY, cardW, 24, 4, 4, 0, 0);
    fill('white'); textAlign(CENTER, CENTER); textSize(13);
    text(food.name, x, cardY + 12, cardW, 20);
    // Nutrition Facts subtitle
    noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(11);
    text('Nutrition Facts', x + 8, cardY + 30);
    stroke('black'); strokeWeight(1); line(x + 6, cardY + 46, x + cardW - 6, cardY + 46);
    noStroke(); fill('dimgray'); textSize(9);
    text('Serving: ' + food.serving, x + 8, cardY + 49);
    // Calories row
    fill('black'); textAlign(LEFT, TOP); textSize(11);
    text('Calories', x + 8, cardY + 63);
    textAlign(RIGHT, TOP);
    text(food.cal, x + cardW - 8, cardY + 63);
    stroke('silver'); strokeWeight(1); line(x + 6, cardY + 78, x + cardW - 6, cardY + 78);

    // Nutrient rows
    let ry = cardY + 84;
    let rh = 24;
    for (let ni = 0; ni < nutrients.length; ni++) {
      let n = nutrients[ni];
      let isGoal = n.key === goalKey;
      let fav = favored(pair, n);
      let win = fav === sides[s];
      // highlight goal nutrient row background
      if (isGoal) {
        noStroke();
        fill(win ? 'honeydew' : (fav === 'tie' ? 'lightyellow' : 'seashell'));
        rect(x + 4, ry, cardW - 8, rh, 3);
      }
      noStroke();
      fill('black'); textAlign(LEFT, CENTER); textSize(11);
      text(n.label, x + 8, ry + rh / 2);
      textAlign(RIGHT, CENTER); textSize(11);
      // value, bold-ish color when it wins the goal
      if (isGoal && win) fill('seagreen');
      else if (isGoal && fav !== 'tie') fill('indianred');
      else fill('black');
      text(food[n.key] + n.unit, x + cardW - 8, ry + rh / 2);
      ry += rh;
    }
  }

  // Scorecard title
  let scY = cardY + cardH + 12;
  noStroke(); fill('black'); textAlign(LEFT, TOP); textSize(12);
  text('Scorecard: better choice per nutrient', margin, scY);

  // Scorecard grid: one row per nutrient, arrow to favored food
  let rowY = scY + 20;
  let rowH = 26;
  for (let ni = 0; ni < nutrients.length; ni++) {
    let n = nutrients[ni];
    let fav = favored(pair, n);
    let isGoal = n.key === goalKey;
    let y = rowY + ni * rowH;
    // row background for goal
    if (isGoal) { noStroke(); fill('lightcyan'); rect(margin, y, canvasWidth - margin * 2, rowH - 2, 3); }
    noStroke();
    fill('black'); textAlign(LEFT, CENTER); textSize(11);
    let lbl = n.label + (n.lowerBetter ? ' (lower is better)' : ' (higher is better)');
    text(lbl, margin + 6, y + (rowH - 2) / 2);
    // winner badge on the right
    let badge, bc;
    if (fav === 'tie') { badge = 'Tie'; bc = 'goldenrod'; }
    else if (fav === 'a') { badge = pair.a.name; bc = 'steelblue'; }
    else { badge = pair.b.name; bc = 'seagreen'; }
    textAlign(RIGHT, CENTER); textSize(11); fill(bc);
    text(badge, canvasWidth - margin - 6, y + (rowH - 2) / 2);
  }

  // Reveal winner verdict
  let vy = rowY + nutrients.length * rowH + 6;
  if (revealed) {
    let verdict = computeVerdict(pair, gn);
    noStroke();
    fill(verdict.color);
    rect(margin, vy, canvasWidth - margin * 2, drawHeight - vy - 6, 4);
    fill('white'); textAlign(LEFT, TOP); textSize(11);
    text(verdict.text, margin + 8, vy + 6, canvasWidth - margin * 2 - 16, drawHeight - vy - 14);
  } else {
    noStroke(); fill('dimgray'); textAlign(LEFT, TOP); textSize(10);
    text('Pick a goal, then press Reveal Winner to see the better food for that goal.',
      margin + 4, vy + 2, canvasWidth - margin * 2 - 8, drawHeight - vy - 6);
  }
}

// Build the goal-specific verdict plus an overall trade-off note.
function computeVerdict(pair, gn) {
  let favGoal = favored(pair, gn);
  let winnerName, otherName, color;
  if (favGoal === 'a') { winnerName = pair.a.name; otherName = pair.b.name; color = 'steelblue'; }
  else if (favGoal === 'b') { winnerName = pair.b.name; otherName = pair.a.name; color = 'seagreen'; }
  else { winnerName = null; color = 'goldenrod'; }

  // Count how many of the 4 nutrients each food wins
  let aWins = 0, bWins = 0;
  for (let n of nutrients) { let f = favored(pair, n); if (f === 'a') aWins++; else if (f === 'b') bWins++; }

  let txt;
  if (favGoal === 'tie') {
    txt = 'For "' + gn.goal + '", both foods are the same, so neither wins that goal.';
  } else {
    txt = 'For "' + gn.goal + '", ' + winnerName + ' wins over ' + otherName + '. ';
    // Clear win vs trade-off across all nutrients
    if ((favGoal === 'a' && aWins >= 3) || (favGoal === 'b' && bWins >= 3)) {
      txt += 'It is also better on most nutrients — a clear healthier choice.';
    } else {
      txt += 'But it is a trade-off: the other food is better on some nutrients (' +
        pair.a.name + ' ' + aWins + ', ' + pair.b.name + ' ' + bWins + ' of 4).';
    }
  }
  return { text: txt, color: color };
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
