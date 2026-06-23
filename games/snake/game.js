const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');

const CELL = 20;
const COLS = canvas.width / CELL;
const ROWS = canvas.height / CELL;

const scoreEl = document.getElementById('score');
const bestEl = document.getElementById('best');
const overlay = document.getElementById('overlay');
const overlayTitle = document.getElementById('overlayTitle');
const overlayMsg = document.getElementById('overlayMsg');
const restartBtn = document.getElementById('restartBtn');

let best = Number(localStorage.getItem('snake-best') || 0);
bestEl.textContent = best;

let snake, dir, nextDir, food, score, speedMs, loopTimer, running;

function resetState() {
  snake = [
    { x: 8, y: 12 },
    { x: 7, y: 12 },
    { x: 6, y: 12 },
  ];
  dir = { x: 1, y: 0 };
  nextDir = dir;
  score = 0;
  speedMs = 130;
  running = true;
  scoreEl.textContent = score;
  placeFood();
  overlay.classList.remove('show');
}

function placeFood() {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    };
  } while (snake.some(s => s.x === pos.x && s.y === pos.y));
  food = pos;
}

function tick() {
  dir = nextDir;
  const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

  const hitWall = head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS;
  const hitSelf = snake.some(s => s.x === head.x && s.y === head.y);

  if (hitWall || hitSelf) {
    return gameOver();
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score += 1;
    scoreEl.textContent = score;
    placeFood();
    if (speedMs > 60) speedMs -= 2;
    restartLoop();
  } else {
    snake.pop();
  }

  draw();
}

function draw() {
  ctx.fillStyle = '#0b0705';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#e8453c';
  ctx.fillRect(food.x * CELL + 2, food.y * CELL + 2, CELL - 4, CELL - 4);

  snake.forEach((seg, i) => {
    ctx.fillStyle = i === 0 ? '#f2b544' : '#3fae8f';
    ctx.fillRect(seg.x * CELL + 1, seg.y * CELL + 1, CELL - 2, CELL - 2);
  });
}

function gameOver() {
  running = false;
  clearInterval(loopTimer);
  if (score > best) {
    best = score;
    localStorage.setItem('snake-best', String(best));
    bestEl.textContent = best;
    overlayMsg.textContent = `Yeni rekord: ${score}`;
  } else {
    overlayMsg.textContent = `Nəticə: ${score}`;
  }
  overlayTitle.textContent = 'OYUN BİTDİ';
  overlay.classList.add('show');
}

function restartLoop() {
  clearInterval(loopTimer);
  loopTimer = setInterval(tick, speedMs);
}

const KEY_DIRS = {
  ArrowUp: { x: 0, y: -1 }, w: { x: 0, y: -1 }, W: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 }, s: { x: 0, y: 1 }, S: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 }, a: { x: -1, y: 0 }, A: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }, d: { x: 1, y: 0 }, D: { x: 1, y: 0 },
};

window.addEventListener('keydown', (e) => {
  const next = KEY_DIRS[e.key];
  if (!next || !running) return;
  if (next.x === -dir.x && next.y === -dir.y) return; // no instant reverse
  nextDir = next;
  e.preventDefault();
});

restartBtn.addEventListener('click', () => {
  resetState();
  draw();
  restartLoop();
});

resetState();
draw();
restartLoop();
