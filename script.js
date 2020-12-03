let canvas = document.getElementById('canvas-paths');
let ctx = canvas.getContext('2d');

canvas.width = 640;
canvas.height = 480;

// fillRect()
ctx.fillStyle = '#fff';
ctx.fillRect(40, 80, 50, 50);
ctx.fillStyle = '#f90';
ctx.fillRect(50, 90, 50, 50);

// strokeRect()
ctx.lineWidth = 5;
ctx.strokeStyle = '#0f9';
ctx.strokeRect(60, 100, 50, 50);

// clearRect()
ctx.clearRect(45, 85, 40, 40);

// fillText()
ctx.fillStyle = '#fff';
ctx.font = '30px Arial';
ctx.fillText('Hello World', 150, 100);

// ctx.strokeText
ctx.lineWidth = 2;
ctx.font = '50px Arial';
ctx.strokeStyle = '#f09';
ctx.strokeText('Hello World', 150, 150);

// Paths
// Triangle
ctx.beginPath();
ctx.lineWidth = 3;
ctx.moveTo(200, 250);
ctx.lineTo(300, 250);
ctx.lineTo(250, 400);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = '#123';
ctx.fill();

// Triangle
ctx.beginPath();
ctx.moveTo(350, 250);
ctx.lineTo(300, 400);
ctx.lineTo(400, 400);
ctx.closePath();
ctx.stroke();
ctx.fillStyle = '#234';
ctx.fill();

// Rectangle
ctx.beginPath();
ctx.rect(450, 250, 150, 100);
ctx.stroke();
ctx.fillStyle = '#345';
ctx.fill();


canvas = document.getElementById('canvas-arcs');
ctx = canvas.getContext('2d');
// Curves
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

ctx.lineWidth = 2;
ctx.strokeStyle = '#fff';

ctx.beginPath();
// Draw face
ctx.arc(centerX, centerY, 230, 0, Math.PI * 2);
// Move to Mouth
ctx.moveTo(centerX + 150, centerY + 50);
// Draw the Mouth
ctx.arc(centerX, centerY + 50, 150, 0, Math.PI, false);
// Move to Left Eye
ctx.moveTo(centerX - 30, centerY - 80);
// Draw the Left Eye
ctx.arc(centerX - 80, centerY - 80, 50, 0, Math.PI * 2);
// Move to Right Eye
ctx.moveTo(centerX + 130, centerY - 80);
// Draw the Right Eye
ctx.arc(centerX + 80, centerY - 80, 50, 0, Math.PI * 2);
ctx.stroke();


// Quadratric curve
ctx.beginPath();
ctx.moveTo(75, 25);
ctx.quadraticCurveTo(25, 25, 25, 62.5);
ctx.quadraticCurveTo(25, 100, 50, 100);
ctx.quadraticCurveTo(50, 120, 30, 125);
ctx.quadraticCurveTo(60, 120, 65, 100);
ctx.quadraticCurveTo(125, 100, 125, 62.5);
ctx.quadraticCurveTo(125, 25, 75, 25);
ctx.stroke();




// Animations
canvas = document.getElementById('canvas-animations');
ctx = canvas.getContext('2d');

const circle = {
	x: 200,
  y: 200,
  size: 30,
  dx: 5,
  dy: 3
}

function drawCircle(color) {
	ctx.beginPath();
  ctx.arc(circle.x, circle.y, circle.size, 0, Math.PI * 2);
  ctx.fillStyle = '#f90';
  ctx.fill();
}

function update() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawCircle();
  
  // Change Position
  circle.x += circle.dx;
  circle.y += circle.dy;
  
  // Detect side Walls
  if (circle.x + circle.size > canvas.width || circle.x - circle.size < 0) {
  	circle.dx *= -1;
  }
  
  // Detect top and bottom Walls
  if (circle.y + circle.size > canvas.height || circle.y - circle.size < 0) {
  	circle.dy *= -1;
  }

  requestAnimationFrame(update);
}

update();

// Animation - Character
canvasChar = document.getElementById('canvas-character');
ctxC = canvasChar.getContext('2d');

const img = document.getElementById('cat');

const player = {
	w: 136,
  h: 84,
  x: 20,
  y: 200,
  speed: 5,
  dx: 0,
  dy: 0
}

function drawPlayer() {
	ctxC.drawImage(img, player.x, player.y, player.w, player.h)
}

function clear() {
	ctxC.clearRect(0, 0, canvasChar.width, canvasChar.height);
}

function newPosition() {
  player.x += player.dx;
  player.y += player.dy;
  
  detectWalls();
}

function detectWalls() {
	// Left Wall
  if (player.x < 0) {
  	player.x = 0;
  }
  
  // Top Wall 
  if (player.y < 0) {
  	player.y = 0;
  }
  
  // Right Wall
  if (player.x + player.w > canvasChar.width) {
  	player.x = canvasChar.width - player.w;
  }
  
  // Bottom Wall
  if (player.y + player.h > canvasChar.height) {
  	player.y = canvasChar.height - player.h;
  }
}

function updatePlayer() {
	clear();
  
	drawPlayer();
  newPosition();

  requestAnimationFrame(updatePlayer);
}

updatePlayer();


function keyDown(e) {
  e.preventDefault();
	if (e.key === ('ArrowRight' || 'Right')) {
  	moveRight();
  }
  if (e.key === ('ArrowLeft' || 'Left')) {
  	moveLeft();
  }
  if (e.key === ('ArrowUp' || 'Up')) {
  	moveUp();
  }
  if (e.key === ('ArrowDown' || 'Down')) {
  	moveDown();
  }
}

function moveRight() {
	player.dx = player.speed;
}

function moveLeft() {
	player.dx = -player.speed;
}

function moveUp() {
	player.dy = -player.speed;
}

function moveDown() {
	player.dy = player.speed;
}


function keyUp(e) {
	player.dx = 0;
  player.dy = 0;
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

