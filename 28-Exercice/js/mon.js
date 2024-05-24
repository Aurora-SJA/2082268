var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

var boatX = -150;
var boatY = 150;
var dx = 2;

var waveOffset = 0;
var waveSpeed = 0.05;

function drawBoat() {
    ctx.beginPath();
    ctx.moveTo(150 + boatX, 80);
    ctx.lineTo(300 + boatX, 230);
    ctx.lineTo(150 + boatX, 230);
    ctx.fillStyle = "lightblue";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(150 + boatX, 80);
    ctx.lineTo(150 + boatX, 230);
    ctx.strokeStyle = 'sienna';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(50 + boatX, 230);
    ctx.lineTo(250 + boatX, 230);
    ctx.lineTo(150 + boatX, 280);
    ctx.lineTo(50 + boatX, 230);
    ctx.fillStyle = "peru";
    ctx.fill();
    ctx.closePath();
}

function drawWater() {
    ctx.beginPath();
    ctx.fillStyle = "#66ccff";
    ctx.fillRect(0, 0, 0, 300);
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = "#66ccff";
    for (var i = 0; i < canvas.width; i += 20) {
        ctx.moveTo(i + waveOffset, 250);
        ctx.quadraticCurveTo(i + 10 + waveOffset, 230, i + 20 + waveOffset, 250);
    }
    ctx.stroke();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawWater();
    drawBoat();
    boatX += dx;
    if (boatX > canvas.width) {
        boatX = -150;
    }
    waveOffset += waveSpeed;
}

setInterval(draw, 10);
